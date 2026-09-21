---
title: "Links and Navigation in HTML"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Fundamentals of Website Building"
topicId: "fundamentals-of-website-building"
order: 3
---
# Links and Navigation in HTML

## The Connective Tissue of the Web

The defining feature of the World Wide Web isn't pages — it's the **links** between them. Hyperlinks (`<a>` elements) are what make the web a *web* rather than a collection of disconnected documents. They let users navigate between pages, jump to sections, download files, and open email.

This lesson covers how to create effective, accessible links and build navigation menus.

## The Anchor Element

The `<a>` (anchor) element creates a hyperlink:

```html
<a href="about.html">About Us</a>
```

- `<a>` — the opening tag
- `href` — the attribute specifying the destination (Hypertext Reference)
- "About Us" — the **link text** (what the user clicks on)
- `</a>` — the closing tag

### Types of Destinations

#### Relative URLs
Point to files relative to the current page's location:

```html
<a href="about.html">About</a>           <!-- same directory -->
<a href="pages/contact.html">Contact</a> <!-- subdirectory -->
<a href="../index.html">Home</a>         <!-- parent directory -->
```

Relative URLs are portable — they work when the site is moved to a different server or domain.

#### Absolute URLs
Point to a specific location on the web:

```html
<a href="https://developer.mozilla.org">MDN Web Docs</a>
```

Absolute URLs are required for external links. They always include the protocol (`https://`).

#### Email Links
```html
<a href="mailto:info@example.com">Email Us</a>
```

#### Anchor Links (Same-Page)
Jump to a specific element on the same page using its `id`:

```html
<!-- At the top of the page -->
<a href="#section2">Jump to Section 2</a>

<!-- Further down the page -->
<h2 id="section2">Section 2</h2>
```

Useful for long pages — table of contents, FAQ sections, documentation.

## Building Navigation Menus

Navigation menus are built from lists of links wrapped in a `<nav>` element:

```html
<nav aria-label="Main navigation">
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</nav>
```

### Why a List?

Navigation is semantically a list of links. Using `<ul>` and `<li>` provides structure that screen readers can navigate. Without the list, screen readers have no way to announce "this is a list of 4 links."

### Multiple Nav Elements

If a page has more than one navigation section, distinguish them with `aria-label`:

```html
<nav aria-label="Main navigation">
    <!-- primary menu -->
</nav>

<!-- ... page content ... -->

<nav aria-label="Footer links">
    <!-- footer menu -->
</nav>
```

## Link Text: Be Descriptive

The text of a link should describe **where it goes**, not how to get there.

### Bad Link Text
```html
<p>Learn more about climate change. <a href="climate.html">Click here</a></p>
```

### Good Link Text
```html
<p><a href="climate.html">Learn more about climate change</a></p>
```

Why this matters: screen reader users often navigate by tabbing through links or pulling up a list of all links on the page. "Click here" repeated across 20 links is meaningless. Descriptive text like "Learn more about climate change" tells the user exactly what they'll find.

**NNGroup's guideline**: The link text should make sense **out of context** — if someone reads just the link (without the surrounding sentence), they should know where it goes.

## Opening Links in New Tabs

The `target="_blank"` attribute opens links in a new tab:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Visit Example
</a>
```

### When to Use It
- When the user is leaving your application to an external resource
- When the current page is a form and you don't want the user to lose their progress
- When the link opens a file (PDF, document)

### When NOT to Use It
- For internal navigation — it disrupts the user's back-button expectation
- By default for all links — it creates a mess of open tabs
- Without `rel="noopener noreferrer"` — this is a security measure to prevent the linked page from accessing `window.opener`

## Accessibility Considerations

### Focus Indicators
Links must have a visible focus indicator for keyboard users. When someone tabs to a link, they need to see where they are:

```css
a:focus {
    outline: 2px solid #0066cc;
    outline-offset: 2px;
}
```

### Skip-to-Content Link
Provide a hidden link at the top of the page that lets keyboard/screen reader users skip the navigation and jump to the main content:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- ... navigation ... -->

<main id="main-content">
    <!-- page content -->
</main>
```

```css
.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    padding: 8px;
    background: #0066cc;
    color: white;
}

.skip-link:focus {
    top: 0;
}
```

### External Link Indicators
If you open links in new tabs, indicate this visually or with text so users aren't surprised:

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Visit Example <span aria-hidden="true">(opens in new tab)</span>
</a>
```

## Common Misconceptions

### "Click here" is fine for link text
"Click here" is meaningless without context. Screen reader users who navigate by links hear a list of "click here, click here, click here." Descriptive text is essential for accessibility.

### "Links must be blue and underlined"
CSS controls link appearance. The default is blue/underlined, but many sites style links differently. The key is that links must be **visually distinguishable** from surrounding text — through colour, underlining, or other visual cues.

### "Opening in a new tab is always better"
Opening links in new tabs disrupts the back-button expectation and can disorient screen reader users. Only use `target="_blank"` when there's a specific reason.

## Key Terms

| Term | Definition |
|------|-----------|
| Hyperlink | A clickable reference to another resource |
| Relative URL | A path interpreted relative to the current document's location |
| Absolute URL | A complete URL including protocol and domain |
| Anchor link | A link targeting a specific element on the same page via `id` |
| `rel` attribute | Specifies the relationship between current and linked document |
| Skip link | A hidden link allowing keyboard users to jump to main content |

## Summary

Links are the fundamental connective tissue of the web. The `<a>` element with its `href` attribute creates hyperlinks to pages, sections, files, and email addresses. Navigation menus are built from lists of links inside `<nav>` elements. The most important accessibility principle: link text should be **descriptive** — it should tell the user where the link goes, not how to click it.
