---
title: "HTML Basics: Document Structure & Syntax"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Fundamentals of Website Building"
topicId: "fundamentals-of-website-building"
order: 1
---
# Introduction to HTML — Structure and Syntax

## The Language of the Web

Every web page you've ever visited is built with HTML. HTML (HyperText Markup Language) is the standard language for structuring content on the web. It's not a programming language — it's a **markup language**, meaning it describes the *structure and meaning* of content, not how it looks or behaves.

If a website were a building, HTML would be the frame — the walls, rooms, doors, and hallways. CSS would be the paint, furniture, and decoration. JavaScript would be the electricity, plumbing, and smart home features. This lesson is about the frame.

## Your First HTML Page

HTML documents are **plain text files** with a `.html` extension. You can create one in any text editor — VS Code, Notepad++, Sublime Text, or even Notepad. No expensive software required.

Here's the simplest possible HTML page:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is my first web page.</p>
</body>
</html>
```

Let's break this down:

- `<!DOCTYPE html>` — Tells the browser "this is an HTML5 document." Always include this as the first line.
- `<html>` — The root element that wraps everything.
- `<head>` — Contains metadata (data about the page) — title, links to CSS, character encoding.
- `<title>` — The text that appears in the browser tab.
- `<body>` — Contains everything the user actually sees on the page.
- `<h1>` — A top-level heading.
- `<p>` — A paragraph.

## Tags, Elements, and Attributes

### Tags
Tags are the angle-bracket identifiers that define HTML elements. They come in pairs:

- **Opening tag**: `<p>` — starts the element
- **Closing tag**: `</p>` — ends the element (note the forward slash)

Some elements are **void elements** — they have no closing tag because they don't contain content: `<img>`, `<br>`, `<hr>`, `<input>`.

### Elements
An element is the complete structure: opening tag + content + closing tag. For example, `<p>This is a paragraph.</p>` is one element.

### Attributes
Attributes add extra information to tags. They go inside the opening tag:

```html
<a href="https://example.com">Visit Example</a>
```

Here, `href` is an attribute that specifies where the link goes. Attributes always come as name-value pairs: `name="value"`.

## The Document Structure

Every HTML page follows the same skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Visible content goes here -->
</body>
</html>
```

The `<head>` section is invisible to users but critical for the browser:
- `charset="UTF-8"` — character encoding (supports all languages and symbols)
- `viewport` meta tag — required for responsive design on mobile devices
- `<link>` — connects to your CSS file

## Nesting: The Tree Structure

HTML elements can be **nested** inside other elements, creating a parent-child tree. This tree is called the **DOM (Document Object Model)** — it's how the browser represents your page internally.

```html
<ul>
    <li><a href="page1.html">Page One</a></li>
    <li><a href="page2.html">Page Two</a></li>
    <li><a href="page3.html">Page Three</a></li>
</ul>
```

Here, `<ul>` is the parent. Each `<li>` is a child of `<ul>`. Each `<a>` is a child of its `<li>`. This nesting is how CSS and JavaScript find and manipulate specific elements.

## Block vs. Inline Elements

Elements display in two ways:

- **Block elements** (`div`, `p`, `h1`–`h6`, `ul`, `li`) take up a full line — they start on a new line and stretch to fill available width.
- **Inline elements** (`span`, `a`, `strong`, `em`) flow within the surrounding text — they don't break onto a new line.

This distinction matters for layout. Block elements stack vertically; inline elements sit side by side within a line.

## Semantic HTML

HTML5 introduced **semantic elements** — elements that describe the *meaning* and *role* of content, not just its appearance:

| Element | Purpose |
|---------|---------|
| `<header>` | Introductory content or navigation |
| `<nav>` | Navigation links |
| `<main>` | The primary content of the page |
| `<article>` | Self-contained content (blog post, news story) |
| `<section>` | Thematic grouping of content |
| `<aside>` | Sidebar or tangentially related content |
| `<footer>` | Footer information (copyright, links) |

Semantic HTML improves:
- **Accessibility**: Screen readers use these elements to help users navigate
- **SEO**: Search engines understand the page structure better
- **Readability**: Developers can understand the code at a glance

## Common Misconceptions

### "HTML is a programming language"
HTML is a markup language — it describes structure, not behaviour. JavaScript is the programming language of the web. HTML says "this is a heading"; JavaScript says "when the user clicks this, do that."

### "HTML controls how things look"
HTML defines *what* content is. CSS defines *how* it looks. A `<h1>` is always a top-level heading — whether it's big and bold or small and red depends on CSS. This separation of concerns is a fundamental web development principle.

### "You need expensive software to write HTML"
Any text editor works. VS Code (free) with the Live Server extension gives you a professional development environment with live preview. That's all you need.

## Key Terms

| Term | Definition |
|------|-----------|
| HTML | HyperText Markup Language — the standard for structuring web content |
| Tag | The angle-bracket identifier of an HTML element (`<p>`, `</p>`) |
| Element | Complete HTML component: open tag + content + close tag |
| Attribute | Extra information on a tag (`href`, `src`, `alt`) |
| DOM | Document Object Model — the browser's tree representation of the HTML |
| Semantic HTML | Elements that describe content meaning, not just appearance |

## Summary

HTML is the foundation of every web page. It uses tags to define what content is — headings, paragraphs, lists, links, images — without controlling how it looks. Every page follows the same structure (DOCTYPE, html, head, body), elements can be nested to create a tree (DOM), and semantic elements improve accessibility, SEO, and code readability. The best way to learn HTML is to write it — start with a plain text editor and open the result in a browser.
