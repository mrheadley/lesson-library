/* StudyDeck × ReelNav — build-time deck transform.
 *
 * A Sätteri hast plugin (the modern replacement for a rehype plugin in the
 * Astro 7 pipeline) that turns a rendered lesson/article's headings+blocks
 * into the numbered "module-card" reading deck prototyped in docs/prototype/:
 *
 *   - the leading h1 is removed (the page renders its own deck title)
 *   - each h2 section becomes a numbered `.module` card (Overview = "00")
 *   - h3 rows, blockquote banners and code cards keep their semantics but get
 *     deck classes; h3 stays an h3 so it keeps a slug id and heading entry
 *   - a "Key Takeaways" section becomes the orange `.take-module` check-grid
 *   - all term h3s are collected into a `.wordbank` footer of `.tag` chips
 *
 * Scoped to lesson entries only (frontmatter carries a numeric `order`), so
 * course outlines render untouched. Runs at build time — fully static.
 */
import type { Element, ElementContent, Nodes, Properties, Root, Text } from 'hast';
import type { HastNode } from 'satteri';

const VOID_TAGS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
  'source', 'track', 'wbr',
]);

const CHECK_SVG =
  '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">' +
  '<path d="M2 7.4 5.2 10.6 12 3.4" stroke="currentColor" stroke-width="2.4" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function el(tagName: string, props: Properties, children: ElementContent[]): Element {
  return { type: 'element', tagName, properties: props, children };
}

function text(value: string): Text {
  return { type: 'text', value };
}

function raw(value: string): ElementContent {
  return { type: 'raw', value };
}

function attrs(props: Properties | null | undefined): string {
  if (!props) return '';
  let out = '';
  for (const [key, value] of Object.entries(props)) {
    if (value === null || value === undefined || value === false) continue;
    const name = key === 'className' ? 'class' : key;
    let v: string;
    if (typeof value === 'string') v = value;
    else if (typeof value === 'number') v = String(value);
    else if (typeof value === 'boolean') v = '';
    else if (Array.isArray(value)) v = value.filter((x) => x != null).join(' ');
    else continue;
    out += v === '' ? ` ${name}` : ` ${name}="${v.replace(/"/g, '&quot;')}"`;
  }
  return out;
}

function serialize(node: Nodes): string {
  switch (node.type) {
    case 'text':
    case 'raw':
      return node.value ?? '';
    case 'comment':
      return `<!--${node.value}-->`;
    case 'doctype':
      return '';
    case 'root':
      return node.children.map(serialize).join('');
    case 'element': {
      const children = (node.children ?? []).map(serialize).join('');
      if (children === '' && VOID_TAGS.has(node.tagName)) {
        return `<${node.tagName}${attrs(node.properties)}>`;
      }
      return `<${node.tagName}${attrs(node.properties)}>${children}</${node.tagName}>`;
    }
    default:
      return '';
  }
}

function serializeChildren(node: Element): string {
  return (node.children ?? []).map(serialize).join('');
}

function addClass(node: Element, cls: string, ctx: HastVisitorContextLike): void {
  const set = new Set<string>();
  const current = node.properties?.className;
  if (Array.isArray(current)) {
    for (const item of current) if (typeof item === 'string') set.add(item);
  } else if (typeof current === 'string') {
    set.add(current);
  }
  set.add(cls);
  ctx.setProperty(node, 'className', [...set]);
}

interface Section {
  heading: Element | null;
  headingText: string;
  items: Element[];
}

export const rehypeStudyDeck = {
  name: 'study-deck',

  after(root: Root, ctx: HastVisitorContextLike): void {
    const astro = ctx.data as AstroDataBag | undefined;
    const order = astro?.astro?.frontmatter?.order;
    if (typeof order !== 'number') return;
    ctx.replaceNode(root, buildDeck(root, ctx));
  },
};

/* -- falling back to a hand-rolled context type keeps this file pkg-agnostic
 * -- (the Sätteri AugmentingData lives in @astrojs/markdown-satteri). */
type AstroDataBag = {
  astro?: { frontmatter?: Record<string, unknown> };
};

type HastVisitorContextLike = {
  data: unknown;
  replaceNode(node: HastNode, newNode: HastNode | HastNode[]): void;
  setProperty(node: HastNode, key: string, value: unknown): void;
};

function toText(node: Element): string {
  return serialize(node).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function isH3(n: ElementContent): n is Element {
  return n.type === 'element' && n.tagName === 'h3';
}

function isList(n: ElementContent): n is Element {
  return n.type === 'element' && (n.tagName === 'ul' || n.tagName === 'ol');
}

function buildDeck(root: Root, ctx: HastVisitorContextLike): Root {
  const top = root.children.filter((n): n is Element => n.type === 'element');

  // Drop the leading h1 — the page renders its own deck title.
  const rest: Element[] = [];
  let h1Seen = false;
  for (const n of top) {
    if (!h1Seen && n.tagName === 'h1') {
      h1Seen = true;
      continue;
    }
    rest.push(n);
  }

  // Group top-level nodes into h2-led sections.
  const sections: Section[] = [];
  const lead: Element[] = [];
  let cur: Section | null = null;
  for (const n of rest) {
    if (n.tagName === 'h2') {
      cur = { heading: n, headingText: '', items: [] };
      sections.push(cur);
    } else if (cur) {
      cur.items.push(n);
    } else {
      lead.push(n);
    }
  }
  for (const s of sections) s.headingText = toText(s.heading as Element);

  // The overview module: the "Introduction/Overview" section, or the content
  // that precedes any h2 when no such section exists.
  const introIdx = sections.findIndex((s) => /intro|overview/i.test(s.headingText));
  const overview: Section | null =
    introIdx >= 0 ? sections[introIdx] : lead.length ? { heading: null, headingText: 'Overview', items: lead } : null;

  const takeIdx = sections.findIndex((s) => /takeaway/i.test(s.headingText));
  const take: Section | null = takeIdx >= 0 ? sections[takeIdx] : null;

  const children: ElementContent[] = [];
  if (overview) children.push(renderModule(overview, '00', 'overview', false, ctx));

  let n = 0;
  for (const s of sections) {
    if (s === overview) continue;
    children.push(renderModule(s, pad(++n), s === take ? 'take-module' : 'module', s === take, ctx));
  }

  const terms = collectTerms(sections, take);
  if (terms.length > 0) children.push(renderWordBank(terms));

  return { type: 'root', children };
}

function renderModule(
  s: Section,
  tab: string,
  variant: string,
  isTake: boolean,
  ctx: HastVisitorContextLike,
): Element {
  const head = el('div', { className: ['module-head'] }, [
    el('span', { className: ['module-tab'] }, [text(tab)]),
    s.heading
      ? (addClass(s.heading, 'module-h2', ctx), s.heading)
      : el('h2', {}, [text(s.headingText)]),
  ]);

  const body: ElementContent[] = [];
  if (isTake) {
    const items = takeItems(s.items);
    if (items.length > 0) {
      body.push(
        el(
          'ol',
          { className: ['take-grid'] },
          items.map((item) => el('li', {}, [raw(CHECK_SVG), el('span', {}, [raw(item)])])),
        ),
      );
    }
    for (const item of s.items) {
      if (isList(item)) continue;
      body.push(renderBlock(item, ctx));
    }
  } else {
    for (const item of s.items) body.push(renderBlock(item, ctx));
  }

  const classes = ['module'];
  if (variant === 'overview') classes.push('overview');
  if (variant === 'take-module') classes.push('take-module');
  return el('section', { className: classes }, [head, ...body]);
}

function renderBlock(n: Element, ctx: HastVisitorContextLike): ElementContent {
  switch (n.tagName) {
    case 'p':
      addClass(n, 'mp', ctx);
      return n;
    case 'h3':
      addClass(n, 'term', ctx);
      return n;
    case 'ul':
    case 'ol':
      addClass(n, 'mlist', ctx);
      return n;
    case 'blockquote': {
      const inner = (n.children ?? []).filter((c): c is Element => c.type === 'element');
      return el('div', { className: ['banner'] }, [
        raw('<span class="qmark">\u201C</span>'),
        ...inner.map((c) => renderBlock(c, ctx)),
      ]);
    }
    case 'pre':
      addClass(n, 'code-card', ctx);
      return n;
    case 'table':
      addClass(n, 'data-table', ctx);
      return n;
    default:
      return n;
  }
}

function takeItems(items: Element[]): string[] {
  const listItems: Element[] = [];
  for (const n of items) {
    if (!isList(n)) continue;
    for (const child of n.children ?? []) {
      if (child.type === 'element' && child.tagName === 'li') listItems.push(child);
    }
  }
  return listItems.map((li) => serializeChildren(li).trim());
}

function collectTerms(sections: Section[], take: Section | null): string[] {
  const terms: string[] = [];
  const seen = new Set<string>();
  for (const s of sections) {
    if (s === take) continue;
    for (const item of s.items) {
      if (isH3(item)) {
        const t = toText(item);
        if (t && !seen.has(t)) {
          seen.add(t);
          terms.push(t);
        }
      }
    }
  }
  return terms;
}

function renderWordBank(terms: string[]): Element {
  return el('footer', { className: ['wordbank'], id: 'wordbank' }, [
    el('p', { className: ['rail-label'] }, [
      text('Word bank — things you should be able to explain after this lesson'),
    ]),
    el(
      'div',
      { className: ['tags'] },
      terms.map((t) => el('span', { className: ['tag'] }, [text(t)])),
    ),
  ]);
}