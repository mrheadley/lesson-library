---
title: "Fundamentals of Website Building (HTML, CSS)"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Web Design, Structure & Digital Content Production"
topicId: "web-design-structure-digital-content-production"
order: 3
---
# Fundamentals of Website Building: HTML & CSS

## Introduction

Every website you've ever visited — from YouTube to the government portal you check for exam results — is built on two foundational technologies: **HTML** and **CSS**. HTML structures the content. CSS makes it look good. That's it. Everything else — JavaScript, frameworks, animations, databases — sits on top of these two pillars.

This isn't just historical knowledge. HTML and CSS are the most durable, transferable skills in web development. Frameworks come and go. Libraries get deprecated. But a well-structured HTML document with clean CSS will render correctly in every browser on every device, today and ten years from now.

You don't need to be a programmer to learn this. HTML isn't even a programming language — it's a markup language, closer to a formatting system than a set of instructions. And CSS is just a list of rules that say things like "make this text blue" and "put this box here." If you can write an essay with headings and paragraphs, you can write HTML. If you can describe what colour a wall should be, you can write CSS.

*Analogy:* HTML is the skeleton of a building — it defines the rooms, corridors, and doors. CSS is the interior design — the paint, furniture, and lighting. Without the skeleton, the design has nothing to sit on. Without the design, the skeleton is just concrete and steel.

---

## Part 1: HTML — The Structure of the Web

### What HTML Actually Is

HTML stands for **HyperText Markup Language**. It uses tags — keywords wrapped in angle brackets — to describe the structure of a web page. When your browser loads a page, it reads the HTML and builds a tree of elements called the **DOM** (Document Object Model), which it then renders visually.

Every HTML page starts with the same foundation:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>
```

The `<!DOCTYPE html>` tells the browser this is an HTML5 document. The `<head>` contains metadata (information about the page). The `<body>` contains everything the user sees. And that `<meta name="viewport">` tag is mandatory for responsive design — without it, your page will look tiny on mobile phones.

### Elements, Tags, and Attributes

HTML is built from **elements**. Most elements have three parts:

- An **opening tag**: `<p>`
- The **content**: `Hello, world!`
- A **closing tag**: `</p>`

Some elements, like `<img>` and `<br>`, are **self-closing** — they have no content or closing tag.

**Attributes** add extra information to opening tags. They work as key-value pairs:

```html
<a href="https://www.google.com" target="_blank">Visit Google</a>
<img src="photo.jpg" alt="A sunset over Port of Spain" />
```

The `href` attribute specifies where a link goes. The `alt` attribute describes an image for screen readers and search engines. The `target="_blank"` opens the link in a new tab.

### Nesting: Building the Tree

Elements can contain other elements, creating a parent-child hierarchy. Correct nesting means closing tags in reverse order of opening:

```html
<div>
  <h1>Welcome</h1>
  <p>This is a <strong>paragraph</strong> with bold text.</p>
</div>
```

The `<strong>` opens inside `<p>`, so it must close before `<p>` closes. Incorrect nesting produces rendering bugs that are difficult to track down.

### Semantic HTML5

HTML5 introduced elements that describe the **meaning** of content, not just its appearance:

| Element | Purpose |
|---------|---------|
| `<header>` | Page or section header |
| `<nav>` | Navigation links |
| `<main>` | Primary page content |
| `<article>` | Self-contained content (blog post, news story) |
| `<section>` | Thematic grouping of content |
| `<aside>` | Sidebar or tangential content |
| `<footer>` | Page or section footer |

Before HTML5, everything was wrapped in generic `<div>` elements. Semantic elements are better for **accessibility** (screen readers can identify page sections), **SEO** (search engines understand content hierarchy), and **maintainability** (developers can read the structure at a glance).

Think of it like labelling boxes when you move house. You can write "stuff" on every box, or you can write "kitchen — pots and pans" and "bedroom — sheets and pillows." Same boxes, but one system is infinitely easier to work with.

---

## Part 2: Common HTML Elements

### Headings and Paragraphs

Headings range from `<h1>` to `<h6>`, with `<h1>` being the most important. Use only one `<h1>` per page (the page title), and nest headings in order — don't jump from `<h2>` to `<h4>`.

```html
<h1>Caribbean Digital Media</h1>
  <h2>Unit 2: Web Design</h2>
    <h3>HTML Fundamentals</h3>
    <h3>CSS Basics</h3>
  <h2>Unit 3: Mobile Apps</h2>
```

Paragraphs use `<p>` tags. Browsers add default spacing between paragraphs, which is one reason they're better than manual line breaks.

### Links

```html
<a href="https://cape-digital-media.edu">Visit our site</a>
<a href="about.html">About Us</a>
<a href="mailto:info@example.com">Email us</a>
```

When using `target="_blank"` to open links in a new tab, always add `rel="noopener noreferrer"` for security:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">External link</a>
```

### Images

```html
<img src="carnival.jpg" alt="Carnival masqueraders in Port of Spain" width="800" height="600" />
```

The `alt` attribute is critical. It serves three purposes: screen readers read it aloud for visually impaired users; search engines use it to understand images; and it displays when the image fails to load. Every meaningful image needs descriptive alt text. Only decorative images (purely visual, adding no information) use `alt=""`.

### Lists

```html
<!-- Unordered (bullet) list -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered (numbered) list -->
<ol>
  <li>Plan your content</li>
  <li>Write the HTML</li>
  <li>Style with CSS</li>
</ol>
```

Lists are used for navigation menus, feature lists, and step-by-step instructions.

### Forms

Forms collect user input. They're essential for contact pages, search bars, and login screens:

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Send</button>
</form>
```

Every `<input>` should have a matching `<label>`. Labels make forms accessible to screen readers and improve usability for everyone (clicking the label focuses the input).

### Tables

```html
<table>
  <thead>
    <tr>
      <th>Platform</th>
      <th>Format</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>YouTube</td>
      <td>16:9 video</td>
    </tr>
    <tr>
      <td>TikTok</td>
      <td>9:16 vertical video</td>
    </tr>
  </tbody>
</table>
```

Tables are for **tabular data only** — not for page layout. Using tables to position elements is an outdated practice that hurts accessibility and maintainability.

---

## Part 3: CSS — The Visual Layer

### What CSS Does

CSS (Cascading Style Sheets) controls how HTML elements look: colours, fonts, spacing, layout, animations. The key principle is **separation of concerns** — HTML describes what content *is*, CSS describes how it *looks*.

### Selectors: Targeting Elements

A selector tells CSS which HTML element to style:

| Selector Type | Syntax | Example |
|---------------|--------|---------|
| Element | `p` | Styles all `<p>` elements |
| Class | `.classname` | Styles all elements with `class="classname"` |
| ID | `#idname` | Styles the one element with `id="idname"` |
| Attribute | `[type="text"]` | Styles all inputs of type text |
| Pseudo-class | `:hover` | Styles an element when the mouse is over it |

```css
p {
  color: #333;
  line-height: 1.6;
}

.hero-title {
  font-size: 2rem;
  color: #0066cc;
}

#contact-form {
  max-width: 600px;
  margin: 0 auto;
}

a:hover {
  color: #ff6600;
  text-decoration: underline;
}
```

### The Box Model

Every HTML element is a box with four layers, from inside out:

1. **Content** — the text, image, or other material inside the element
2. **Padding** — space between the content and the border
3. **Border** — a visible line around the padding
4. **Margin** — space outside the border, separating the element from its neighbours

The most common CSS surprise is that `width` only sets the content box by default. If you set `width: 300px` and add `20px` of padding and a `2px` border, the element actually takes up 344px of horizontal space. This causes layout "overflow" bugs.

The fix is to set `box-sizing: border-box` globally, which makes `width` include padding and border:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

This single line is universally recommended as the first line of any modern CSS file. Set it once, and width behaves the way you'd expect.

### Specificity: Which Rule Wins

When multiple CSS rules target the same element, specificity determines which one applies. The hierarchy (from highest to lowest):

1. Inline styles (`style=""`)
2. ID selectors (`#idname`)
3. Class, attribute, and pseudo-class selectors (`.classname`, `[type]`, `:hover`)
4. Element selectors (`p`, `div`, `a`)

If specificity is equal, the last rule in the stylesheet wins. Avoid `!important` — it overrides everything and signals a specificity problem you should fix instead.

### CSS Units

| Unit | What It References | Common Use |
|------|--------------------|------------|
| `px` | Pixels (fixed) | Borders, specific dimensions |
| `%` | Parent element | Width, responsive sizing |
| `rem` | Root font size | Text, spacing (preferred) |
| `em` | Parent font size | Padding, margin within components |
| `vw` / `vh` | Viewport width/height | Full-screen sections |
| `fr` | Fraction (CSS Grid) | Grid column/row sizing |

For text and spacing, prefer `rem` over `px`. It scales with the user's browser font size, improving accessibility.

---

## Part 4: Inline, Internal, and External CSS

### Three Ways to Add Styles

**Inline CSS** — Written directly on elements:

```html
<p style="color: blue; font-size: 16px;">This paragraph is blue.</p>
```

High specificity, hard to maintain, not reusable. Use only for one-off exceptions or JavaScript-driven changes.

**Internal CSS** — Written in a `<style>` block in the `<head>`:

```html
<head>
  <style>
    p { color: blue; }
  </style>
</head>
```

Good for single-page styles. Not reusable across multiple pages.

**External CSS** — A separate `.css` file linked from the HTML:

```html
<link rel="stylesheet" href="style.css">
```

This is the best practice for all production websites. External files can be cached by the browser (faster loading), shared across pages (consistency), and maintained separately from markup (cleaner code).

---

## Part 5: Responsive Design

### Why Mobile-First Matters in the Caribbean

72% of Caribbean internet traffic comes from mobile devices. If your website doesn't work well on phones, it doesn't work for most of your audience. Responsive design isn't a feature — it's a requirement.

### The Viewport Meta Tag

Without this single line of HTML, mobile browsers render your page at approximately 980 pixels and zoom out, making everything tiny and unreadable:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This tag must be in every page's `<head>`. It tells the browser to match the page width to the device width and start at normal zoom.

### Mobile-First Approach

Write your base CSS for small screens (phones). Then add complexity for larger screens using `min-width` media queries:

```css
/* Base styles — mobile first */
.container {
  padding: 1rem;
}

.card {
  margin-bottom: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }

  .card {
    width: 48%;
    display: inline-block;
    margin-right: 2%;
  }
}

/* Desktop */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
    margin: 0 auto;
  }
}
```

Mobile-first means phones get the simplest, fastest stylesheet. Tablets and desktops get additional complexity. This produces less CSS and faster mobile loading.

### Common Breakpoints

| Breakpoint | Width | Typical Device |
|-----------|-------|---------------|
| Small | 360–480px | Mobile phones |
| Medium | 768px | Tablets |
| Large | 1024px | Small laptops |
| Extra large | 1200px+ | Desktop monitors |

Test your designs at 360px as a baseline. Many Caribbean users are on phones with viewport widths around 360–400px.

### Fluid Typography with clamp()

The `clamp()` function provides fluid typography that scales between a minimum and maximum size based on viewport width:

```css
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}
```

This means: never smaller than 1.5rem, never larger than 3rem, and scale smoothly between them based on 4% of the viewport width. It replaces the need for separate font sizes in every media query.

---

## Part 6: Embedding Multimedia

### Responsive Images

```html
<img 
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 600px"
  src="photo-800.jpg"
  alt="Descriptive text"
/>
```

The `srcset` and `sizes` attributes let the browser download the appropriately sized image for the device and layout width. On a phone, it downloads the 400w version. On a desktop, it downloads the 1200w version. This saves data and improves loading speed — critical in data-conscious Caribbean contexts.

### Video

```html
<video controls width="100%" poster="thumbnail.jpg">
  <source src="lesson.mp4" type="video/mp4">
  Your browser does not support video.
</video>
```

Always provide a `poster` image (a preview frame) and a fallback message. Set `width="100%"` so the video scales to its container.

### External Embeds

```html
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  width="100%" 
  height="400" 
  allowfullscreen
  loading="lazy"
></iframe>
```

The `loading="lazy"` attribute defers loading the iframe until the user scrolls near it, improving initial page load speed.

---

## Part 7: Validation and Debugging

### W3C Validation

The W3C Markup Validation Service (validator.w3.org) checks your HTML for syntax errors. The W3C CSS Validation Service (jigsaw.w3.org/css-validator) does the same for CSS. Invalid HTML causes cross-browser inconsistencies, accessibility failures, and harder debugging. Validate early and often.

### Browser DevTools

Every modern browser has built-in developer tools:
- **Elements panel** — inspect and modify the live DOM and CSS
- **Console** — view errors and warnings
- **Network tab** — see loading times and resource sizes
- **Device toolbar** — simulate different screen sizes

Right-click any element on a web page and select "Inspect" to open DevTools. This is the single most useful debugging tool available to you, and it's already installed in your browser.

### Lighthouse

Chrome's Lighthouse tool audits your page and scores it on performance, accessibility, SEO, and best practices. It provides specific, actionable recommendations. Run it on every project to identify issues you might miss.

---

## Common Misconceptions

### "HTML is a programming language"

**Reality:** HTML is a markup language that describes structure. It doesn't have variables, loops, conditions, or logic. CSS is a styling language. Neither is "programming" in the traditional sense, and that's fine — they're different tools for different jobs.

### "You need to learn a framework first"

**Reality:** HTML and CSS are the foundation under every framework — React, Vue, Bootstrap, Tailwind. Understanding fundamentals makes frameworks easier to learn later, not harder. Start with the basics.

### "`width` on an element means total width"

**Reality:** By default, `width` sets only the content box. Padding and border are added on top. Always set `box-sizing: border-box` globally so width includes padding and border. This one rule eliminates a huge class of layout bugs.

### "`div` is the right element for everything"

**Reality:** Semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`) provide meaning for screen readers and search engines. Use `<div>` only when no semantic element fits. Semantics are not decoration — they're functionality.

### "Mobile design means shrinking the desktop layout"

**Reality:** True responsive design restructures content for small screens. A three-column layout becomes a single column on mobile. Navigation becomes a hamburger menu. Touch targets get larger. It's not about making things smaller — it's about making them work differently.

### "CSS `!important` is a best practice"

**Reality:** Using `!important` to override styles signals a specificity problem. Fix the selector hierarchy instead. `!important` is a crutch, not a solution.

### "Validation doesn't matter"

**Reality:** Invalid HTML causes cross-browser bugs, accessibility failures, and debugging headaches. Validation catches structural errors early, before they become expensive problems.

---

## Key Takeaways

1. **HTML provides structure, CSS provides presentation** — Every website is built on this separation. Learn both, and you can build any layout.

2. **Start with semantic HTML5** — Use `<header>`, `<nav>`, `<main>`, `<article>` instead of `<div>` soup. It's better for accessibility, SEO, and maintainability.

3. **Set `box-sizing: border-box` globally** — This single CSS rule eliminates the most common layout surprise. Make it the first line of every stylesheet.

4. **Mobile-first is non-negotiable in the Caribbean** — 72% of regional internet traffic is mobile. Design for phones first, then scale up.

5. **The viewport meta tag is mandatory** — Without it, your page is broken on mobile. Include it on every page.

6. **Free tools are all you need** — A text editor, a browser, and DevTools are everything you need to build, test, and debug a website.

7. **HTML and CSS are durable skills** — Frameworks change. Fundamentals don't. These skills will serve you regardless of where technology goes next.

---

*Source acknowledgement: Research drawn from MDN Web Docs (Structuring Documents, Responsive Web Design), tutorialQ HTML & CSS Guide 2026, PyShine HTML & CSS Tutorial, nucamp HTML & CSS Fundamentals 2026, Scrimba Responsive Web Design Guide 2026, W3C WCAG 2 Overview, and web.dev. Specific syntax and tool recommendations should be verified against current documentation at time of lesson delivery.*
