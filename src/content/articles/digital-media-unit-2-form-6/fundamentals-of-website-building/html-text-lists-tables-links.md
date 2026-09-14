---
title: "HTML: Text, Lists, Tables & Links"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Fundamentals of Website Building"
topicId: "fundamentals-of-website-building"
order: 2
---
# Text, Lists, and Tables in HTML

## Organising Content with Structure

HTML provides specific elements for different types of text content. Headings, paragraphs, lists, and tables aren't just visual formatting — they carry **semantic meaning** that tells browsers, search engines, and screen readers what the content *is*. This lesson covers the essential text-structuring elements and how to use them correctly.

## Headings: The Document Outline

Headings define the hierarchy of your page. HTML provides six levels: `<h1>` through `<h6>`.

```html
<h1>The Main Title</h1>
<h2>A Major Section</h2>
<h3>A Sub-section</h3>
<h2>Another Major Section</h2>
<h3>Another Sub-section</h3>
```

### Rules for Headings

- **Only one `<h1>` per page** — it's the most important heading and describes the page's primary topic.
- **Never skip levels** — don't jump from `<h2>` to `<h4>`. The hierarchy should be sequential.
- **Headings are structural, not visual** — an `<h2>` isn't automatically "big and bold." CSS controls appearance. But the hierarchy matters for accessibility: screen readers navigate by headings, and users expect a logical structure.

### Why Headings Matter

Screen reader users can pull up a list of all headings on a page and jump directly to the section they need. If your headings skip levels or are used for visual styling rather than structure, this navigation breaks.

## Paragraphs

The `<p>` element defines a paragraph. Browsers add space between paragraphs automatically.

```html
<p>Web design is the process of creating websites. It involves several
disciplines including visual design, user experience, and coding.</p>

<p>This lesson covers the HTML elements used to structure text content.</p>
```

Keep paragraphs focused — one idea per paragraph. Long walls of text are hard to read on screens.

## Emphasis and Importance

HTML provides semantic elements for inline text emphasis:

| Element | Meaning | Default Rendering |
|---------|---------|-------------------|
| `<strong>` | Strong importance | **Bold** |
| `<em>` | Emphasis | *Italic* |
| `<mark>` | Highlighted/relevant text | Highlighted |
| `<small>` | Side comment or fine print | Smaller text |
| `<del>` | Deleted/struck-through text | ~~Strikethrough~~ |
| `<ins>` | Inserted text | Underlined |

### Why Not Just Use `<b>` and `<i>`?

The `<b>` and `<i>` tags are purely visual — they make text bold or italic without conveying meaning. `<strong>` and `<em>` tell screen readers to change their tone of voice, conveying importance and emphasis audibly. Always prefer semantic elements.

## Lists

Lists are one of HTML's most useful structural elements. There are two types:

### Unordered Lists
For items where order doesn't matter:

```html
<ul>
    <li>HTML — structure</li>
    <li>CSS — styling</li>
    <li>JavaScript — behaviour</li>
</ul>
```

### Ordered Lists
For sequential or ranked items:

```html
<ol>
    <li>Plan the content structure</li>
    <li>Write the HTML</li>
    <li>Add CSS styling</li>
    <li>Test on multiple devices</li>
</ol>
```

### Nesting Lists
Lists can be nested inside each other:

```html
<ul>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>
    <li>Backend
        <ul>
            <li>Python</li>
            <li>Node.js</li>
        </ul>
    </li>
</ul>
```

You can mix `<ul>` and `<ol>` at different nesting levels — an ordered list inside an unordered list, or vice versa.

## Tables

Tables display **tabular data** — information that's best understood in rows and columns. They should **never** be used for page layout (that's a 1990s anti-pattern; use CSS Grid or Flexbox instead).

### Basic Structure

```html
<table>
    <caption>Comparison of Web Browsers</caption>
    <thead>
        <tr>
            <th scope="col">Browser</th>
            <th scope="col">Speed</th>
            <th scope="col">Privacy</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Chrome</th>
            <td>Fast</td>
            <td>Moderate</td>
        </tr>
        <tr>
            <th scope="row">Firefox</th>
            <td>Fast</td>
            <td>Strong</td>
        </tr>
        <tr>
            <th scope="row">Safari</th>
            <td>Fast</td>
            <td>Strong</td>
        </tr>
    </tbody>
</table>
```

### Key Elements

- `<table>` — the table container
- `<caption>` — the table title (essential for accessibility)
- `<thead>` — header row group
- `<tbody>` — body row group
- `<tr>` — table row
- `<th>` — header cell (bold and centred by default)
- `<td>` — data cell
- `scope="col"` or `scope="row"` — tells screen readers whether a header applies to a column or row

### When to Use Tables

- Comparing data across categories (browser features, pricing plans)
- Displaying schedules, timetables, or calendars
- Showing statistics or numerical data

### When NOT to Use Tables

- Page layout (use CSS Grid or Flexbox)
- Forms (use `<form>` elements)
- Anything that isn't genuinely tabular data

## Disclosure Widgets

The `<details>` and `<summary>` elements create expandable/collapsible content — useful for FAQs, accordions, and progressive disclosure:

```html
<details>
    <summary>What is HTML?</summary>
    <p>HTML (HyperText Markup Language) is the standard language
    for structuring content on the web.</p>
</details>

<details>
    <summary>Is HTML a programming language?</summary>
    <p>No. HTML is a markup language — it describes structure,
    not behaviour.</p>
</details>
```

No JavaScript required — the browser handles the expand/collapse behaviour natively.

## Blockquotes and Citations

For quoted content:

```html
<blockquote cite="https://example.com/source">
    <p>The best way to learn web design is to build things.</p>
</blockquote>

<p>As <cite>Jane Smith</cite> noted in her article on web design education...</p>
```

- `<blockquote>` — block-level quotation (indented by default)
- `<cite>` — the title of a work (not the person who said it)
- `<q>` — inline quotation (adds quotation marks automatically)

## Common Misconceptions

### "Tables are for layout"
Tables for layout was an anti-pattern from the 1990s. It produces inaccessible, unmaintainable code. Use CSS Grid or Flexbox for layout. Tables are exclusively for tabular data.

### "Headings are just big bold text"
Headings define document structure. They're critical for accessibility (screen readers navigate by headings) and SEO (search engines use them to understand content hierarchy). Choose headings for their level in the hierarchy, not for their visual size.

### `<b>` and `<i>` vs. `<strong>` and `<em>`
`<b>` and `<i>` are purely visual. `<strong>` and `<em>` convey semantic meaning. Screen readers interpret them differently. Always prefer the semantic option.

## Key Terms

| Term | Definition |
|------|-----------|
| Semantic markup | HTML elements that describe content meaning and role |
| Heading hierarchy | The nesting structure from `<h1>` (most important) to `<h6>` |
| Blockquote | A block-level element for extended quotations |
| Table scope | The `scope` attribute indicating whether a header applies to a column or row |
| Disclosure widget | Expandable/collapsible content using `<details>` and `<summary>` |

## Summary

HTML provides specific elements for every type of text content: headings for structure, paragraphs for body text, emphasis elements for importance, lists for grouped items, and tables for tabular data. The key principle is **semantic markup** — choose elements based on what the content *is*, not how you want it to look. CSS handles appearance; HTML handles meaning.
