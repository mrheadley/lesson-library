/* PROTOTYPE — throwaway. Iteration 2: StudyDeck cards + ReelLearn's right rail.
   Renders the four CAPE DM lesson articles. No persistence; state lives in the
   URL (?lesson=). See index.html top comment for the verdict history. */

const LESSONS = {
  1: { file: '../lesson-01-article.md', short: 'Design Principles & Elements' },
  2: { file: '../lesson-02-article.md', short: 'Colour Theories & Harmony' },
  3: { file: '../lesson-03-article.md', short: 'Composition & Light' },
  4: { file: '../lesson-04-article.md', short: 'Interactive Design' },
};

const $ = (s, r) => (r || document).querySelector(s);
const pad = n => String(n).padStart(2, '0');
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const urlState = () => {
  const p = new URLSearchParams(location.search);
  const lesson = parseInt(p.get('lesson') || '1', 10);
  return { lesson: LESSONS[lesson] ? lesson : 1 };
};

let state = urlState();

/* ---------------- tiny markdown block parser (subset is enough) ------------- */

function inline(s) {
  return s
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/(^|[\s(>'"])[*_]([^*_\n]+)[*_](?=[\s.,;:!?)\]'"<]|$)/g, '$1<em>$2</em>');
}

function parseBlocks(md) {
  const lines = md.split(/\r?\n/);
  const blocks = [];
  let para = [];
  let list = null;
  let i = 0;

  const flushPara = () => {
    if (para.length) { blocks.push({ t: 'p', html: inline(para.join('<br>')) }); para = []; }
  };
  const flushList = () => {
    if (list) { blocks.push(list); list = null; }
  };
  const flush = () => { flushPara(); flushList(); };

  while (i < lines.length) {
    const line = lines[i];
    if (/^```/.test(line)) {
      flush();
      const body = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) { body.push(lines[i]); i++; }
      i++;
      blocks.push({ t: 'code', body: body.join('\n') });
      continue;
    }
    const h = line.match(/^(#{1,3})\s+(.*)/);
    if (h) { flush(); blocks.push({ t: 'h', level: h[1].length, text: inline(h[2]) }); i++; continue; }
    const blk = line.match(/^>\s?(.*)/);
    if (blk) {
      flush();
      const q = [blk[1]];
      i++;
      while (i < lines.length && /^>\s?/.test(lines[i])) { q.push(lines[i].replace(/^>\s?/, '')); i++; }
      blocks.push({ t: 'quote', html: inline(q.join(' ')) });
      continue;
    }
    if (/^\s*---\s*$/.test(line)) { flush(); blocks.push({ t: 'hr' }); i++; continue; }
    const li = line.match(/^(\s*)[-*]\s+(.*)/);
    if (li) {
      flushPara();
      if (!list || list.ordered) { flushList(); list = { t: 'list', ordered: false, items: [] }; }
      list.items.push({ depth: Math.round(li[1].length / 2), html: inline(li[2]) });
      i++;
      continue;
    }
    const ol = line.match(/^(\s*)\d+[.)]\s+(.*)/);
    if (ol) {
      flushPara();
      if (!list || !list.ordered) { flushList(); list = { t: 'list', ordered: true, items: [] }; }
      list.items.push({ depth: Math.round(ol[1].length / 2), html: inline(ol[2]) });
      i++;
      continue;
    }
    if (line.trim() === '') { flush(); i++; continue; }
    para.push(line.trim());
    i++;
  }
  flush();
  return blocks;
}

function toText(html) { return html.replace(/<[^>]+>/g, ' '); }

function stripLesson(html) {
  return toText(html).replace(/^Lesson\s*[^-]+\s*[—–-]\s*/i, '').trim();
}

function slug(html) {
  return toText(html).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 40);
}

/* ---------------- content assembly (shared model) -------------------------- */

function assemble(md, lessonNo) {
  const parsed = parseBlocks(md);
  const hi = parsed.findIndex(b => b.t === 'h' && b.level === 1);
  const h1 = hi >= 0 ? parsed.splice(hi, 1)[0] : null;
  const model = { lesson: lessonNo, title: '', lead: [], sections: [], takeaways: [] };
  if (h1) model.title = stripLesson(h1.text);

  let cur = null;
  for (const b of parsed) {
    if (b.t === 'h' && b.level <= 2) {
      cur = { id: slug(b.text), heading: b.text, isTake: /takeaway/i.test(toText(b.text)), items: [] };
      model.sections.push(cur);
      continue;
    }
    if (cur) cur.items.push(b);
    else model.lead.push(b);
  }

  const first = model.sections[0];
  if (first && /intro/i.test(toText(first.heading))) {
    while (first.items.length && first.items[0].t === 'p') model.lead.push(first.items.shift());
  }
  if (!model.lead.length && first) {
    while (first.items.length && first.items[0].t === 'p') model.lead.push(first.items.shift());
  }

  const takeSection = model.sections.find(s => s.isTake);
  if (takeSection) {
    model.takeaways = takeSection.items
      .flatMap(it => it.t === 'list' ? it.items : [])
      .map(it => it.html);
    takeSection.items = takeSection.items.filter(it => it.t !== 'list');
  }

  model.wordCount = (model.lead.concat(model.sections.flatMap(s => s.items)))
    .reduce((n, b) => n + (b.html ? [b.html] : b.body ? [b.body] : b.items ? b.items.map(i => i.html) : [])
      .join(' ').split(/\s+/).length, 0);
  model.minutes = Math.max(1, Math.round(model.wordCount / 160));
  model.terms = model.sections.flatMap(s => s.items.filter(i => i.t === 'h' && i.level === 3).map(i => toText(i.text)));
  return model;
}

/* ---------------- small shared render helpers ------------------------------- */

function svgCheck() {
  return '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7.4 5.2 10.6 12 3.4" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function listHtml(list, cls) {
  const tags = list.ordered ? 'ol' : 'ul';
  const items = list.items.map(it =>
    `<li class="d${it.depth}">${it.items && it.items.length ? it.items.map(x => `<ul><li class="d${x.depth}">${x.html}</li></ul>`).join('') : ''}${it.html}</li>`).join('');
  return `<${tags} class="${cls}">${items}</${tags}>`;
}

function lessonNav(n, dir) {
  return `<a class="lnav" href="?lesson=${n}"><span class="lnav-dir">${dir}</span>
    <span class="lnav-title">${dir === 'Next' ? esc(LESSONS[n].short) : pad(n) + ' · ' + esc(LESSONS[n].short)}</span></a>`;
}

/* ============================ MERGED DECK RENDERER ========================== */

function renderDeck(m) {
  const stat = (n, l) => `<div class="stat"><b>${n}</b><span>${l}</span></div>`;

  const overview = `<section class="module overview secanchor" id="overview">
      <h2><span class="module-tab">00</span>Overview</h2>
      ${renderBlocks(m.lead, { p: 'mp', list: 'mlist' })}
    </section>`;

  const modules = m.sections.map((s, i) => {
    if (s.isTake) {
      return `<section class="module take-module secanchor" id="${s.id}">
        <h2><span class="module-tab">${pad(i)}</span>${s.heading}</h2>
        <ol class="take-grid">${m.takeaways.map(t => `<li>${svgCheck()}<span>${t}</span></li>`).join('')}</ol>
        ${renderBlocks(s.items)}
      </section>`;
    }
    const inner = s.items.map(b => {
      switch (b.t) {
        case 'h': return `<div class="term"><span class="term-key">${b.text}</span></div>`;
        case 'p': return `<p class="mp">${b.html}</p>`;
        case 'quote': return `<div class="banner"><span class="qmark">“</span>${b.html}</div>`;
        case 'list': return listHtml(b, 'mlist');
        case 'code': return `<pre class="code-card"><code>${esc(b.body)}</code></pre>`;
        default: return renderBlocks([b]);
      }
    }).join('');
    return `<section class="module secanchor" id="${s.id}"><h2><span class="module-tab">${pad(i + 1)}</span>${s.heading}</h2>${inner}</section>`;
  }).join('');

  const dots = m.sections.map((s, i) => {
    const label = toText(s.heading);
    return `<button class="dot${i === 0 ? ' on' : ''}" data-target="#${s.id}" aria-label="Go to ${label}" title="${esc(label)}">
      <span class="dot-hint">${esc(label)}</span></button>`;
  }).join('');

  return `
  <div class="viewer">
    <header class="topbar">
      <a class="brand" href="?lesson=${m.lesson}#overview"><span class="brand-dot"></span>EMBER<span class="brand-thin">&amp;</span>TIDE</a>
      <nav class="lesson-tabs">${[1, 2, 3, 4].map(n =>
        `<a class="ltab${n === m.lesson ? ' on' : ''}" href="?lesson=${n}">${pad(n)}</a>`).join('')}</nav>
    </header>
    <div class="progress-track"><i id="progress"></i></div>

    <header class="deck-head" id="overview">
      <p class="overline">CAPE Digital Media <span class="dot">·</span> Lesson ${pad(m.lesson)} <span class="dot">·</span> ${esc(LESSONS[m.lesson].short)}</p>
      <h1 class="deck-title">${m.title}</h1>
      <div class="stats">
        ${stat(m.sections.length, 'sections')}
        ${stat(m.takeaways.length, 'key takeaways')}
        ${stat(m.terms.length, 'key terms')}
        ${stat(m.minutes, 'min to read')}
      </div>
      <div class="deck-actions">
        <span class="tag-solid">Study mode</span>
        <a class="skip" href="#end">End ↴</a>
      </div>
    </header>

    <div class="deck-wrap">
      <div class="deck">
        ${overview}
        ${modules}
        <footer class="wordbank" id="end">
          <p class="rail-label">Word bank — things you should be able to explain after this lesson</p>
          <div class="tags">${m.terms.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          <nav class="lesson-nav">${m.lesson > 1 ? lessonNav(m.lesson - 1, 'Prev') : ''}${lessonNav(Math.min(m.lesson + 1, 4), 'Next')}</nav>
        </footer>
      </div>
    </div>

    <aside class="side-nav" aria-label="Sections">
      <div class="spine"><i id="spine-fill"></i></div>
      <div class="dots">${dots}</div>
    </aside>
  </div>

  <div class="pill" id="lessonbar">
    <span class="plabel">Lesson</span>
    ${[1, 2, 3, 4].map(n => `<button class="slesson${n === m.lesson ? ' on' : ''}" data-lesson="${n}">${n}</button>`).join('')}
  </div>`;
}

function renderBlocks(items, opts) {
  const o = Object.assign({ p: 'p', list: 'list', code: 'code' }, opts);
  return items.map(b => {
    switch (b.t) {
      case 'h': return `<h3>${b.text}</h3>`;
      case 'p': return `<p class="${o.p}">${b.html}</p>`;
      case 'quote': return `<div class="banner"><span class="qmark">“</span>${b.html}</div>`;
      case 'list': return listHtml(b, o.list);
      case 'code': return `<pre class="${o.code}"><code>${esc(b.body)}</code></pre>`;
      default: return '';
    }
  }).join('');
}

/* ============================ wiring / events =============================== */

function selectLesson(n) {
  state.lesson = n;
  history.replaceState(null, '', `?lesson=${n}`);
  render();
}

function wire() {
  const inEdit = () => {
    const el = document.activeElement;
    return el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
  };
  document.addEventListener('keydown', function onKey(e) {
    if (inEdit()) return;
    if (/^[1-4]$/.test(e.key)) selectLesson(parseInt(e.key, 10));
  });

  document.querySelectorAll('.slesson').forEach(b =>
    b.addEventListener('click', () => selectLesson(parseInt(b.dataset.lesson, 10))));

  const anchors = [...document.querySelectorAll('.secanchor')];
  const dots = [...document.querySelectorAll('.dot')];
  const fill = $('#spine-fill');
  const prog = $('#progress');

  const onScroll = () => {
    const doc = document.documentElement;
    const sc = doc.scrollTop || document.body.scrollTop;
    const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
    const p = sc / max;
    if (prog) prog.style.width = p * 100 + '%';
    if (fill) fill.style.height = p * 100 + '%';

    let active = 0;
    anchors.forEach((s, i) => { if (s.getBoundingClientRect().top < 150) active = i; });
    dots.forEach((d, i) => d.classList.toggle('on', i === active));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  dots.forEach(d =>
    d.addEventListener('click', () => {
      const t = document.querySelector(d.dataset.target);
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    }));
}

async function render() {
  const md = await (await fetch(LESSONS[state.lesson].file)).text();
  const m = assemble(md, state.lesson);
  $('#root').innerHTML = renderDeck(m);
  document.title = `${m.title} · Lesson ${m.lesson} — prototype`;
  wire();
}

render();