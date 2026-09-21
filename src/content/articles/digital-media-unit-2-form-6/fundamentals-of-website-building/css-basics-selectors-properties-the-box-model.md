---
title: "CSS Basics: Selectors, Properties & the Box Model"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Fundamentals of Website Building"
topicId: "fundamentals-of-website-building"
order: 5
---
# CSS Basics — Selectors and the Box Model

## From Structure to Style

HTML defines what content *is*. CSS defines how it *looks*. This lesson introduces the fundamental concepts of CSS: how rules target HTML elements (selectors), how the browser resolves conflicts between competing rules (specificity and the cascade), and how every element is treated as a rectangular box with content, padding, border, and margin (the box model).

## Writing CSS

CSS can be added to HTML in three ways:

### External CSS (Recommended)
A separate `.css` file linked from the HTML `<head>`:

```html
<link rel="stylesheet" href="styles.css">
```

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    color: #333;
}
```

This is the standard approach — it keeps structure (HTML) separate from presentation (CSS), making both easier to maintain.

### Internal CSS
A `<style>` block in the HTML `<head>` — acceptable for single-page projects:

```html
<style>
    body { font-family: Arial, sans-serif; }
</style>
```

### Inline CSS
A `style` attribute directly on an element — avoid this except for dynamic styles applied by JavaScript:

```html
<p style="color: red;">This text is red.</p>
```

## Selectors: Targeting Elements

A **selector** determines which HTML element(s) a CSS rule applies to.

### Type Selector
Targets all elements of a given type:

```css
h1 { color: navy; }          /* all h1 elements */
p { line-height: 1.6; }      /* all paragraphs */
```

### Class Selector
Targets all elements with a specific class:

```html
<p class="highlight">Important text</p>
```

```css
.highlight { background: yellow; }
```

Classes are reusable — multiple elements can share the same class. This is the most common selector.

### ID Selector
Targets the one element with a specific ID:

```html
<header id="main-header">...</header>
```

```css
#main-header { background: #f5f5f5; }
```

IDs are unique — only one element should have a given ID. They have higher specificity than classes, which makes them harder to override (usually a disadvantage).

### Descendant Selector
Targets elements inside other elements:

```css
nav a { color: white; }       /* all links inside nav */
article p { margin-bottom: 1em; } /* all paragraphs inside article */
```

### Child Selector
Targets only direct children (not deeper descendants):

```css
nav > a { padding: 8px; }    /* only links directly inside nav, not nested deeper */
```

### Pseudo-class Selector
Targets elements in a specific state:

```css
a:hover { color: #0066cc; }        /* links on mouse hover */
li:first-child { font-weight: bold; } /* first list item */
input:focus { border-color: #0066cc; } /* input when focused */
```

## Specificity: Which Rule Wins

When multiple CSS rules target the same element, the browser needs to know which one takes precedence. This is determined by **specificity** — a weighting system:

| Specificity Level | Example | Weight |
|------------------|---------|--------|
| Inline styles | `style="..."` | Highest |
| ID selector | `#header` | High |
| Class selector | `.card` | Medium |
| Type selector | `h1` | Low |

**Specificity order**: inline > ID > class > type.

If two rules have the same specificity, the **last one in the stylesheet wins**. This is the "cascade" in Cascading Style Sheets.

### Avoid `!important`
The `!important` declaration overrides all specificity rules:

```css
p { color: black !important; }
```

This is a nuclear option — it makes the rule extremely hard to override. Avoid it. If you find yourself using `!important`, your specificity strategy needs rethinking.

## The Box Model

Every HTML element is a rectangular box. The CSS Box Model describes the four layers that make up that box:

```
┌─────────────────────┐
│       Margin        │  ← space outside the border
│  ┌───────────────┐  │
│  │    Border     │  │  ← visible edge
│  │  ┌─────────┐  │  │
│  │  │ Padding │  │  │  ← space inside the border
│  │  │ ┌─────┐ │  │  │
│  │  │ │Content│ │  │  │  ← the text/image
│  │  │ └─────┘ │  │  │
│  │  └─────────┘  │  │
│  └───────────────┘  │
└─────────────────────┘
```

### Content
The actual content — text, image, or other media. Its dimensions are set by `width` and `height`.

### Padding
Space between the content and the border. Adds breathing room inside the element:

```css
.card { padding: 20px; }
```

### Border
The visible edge wrapping the padding:

```css
.card { border: 1px solid #ddd; }
```

### Margin
Space outside the border — pushes the element away from its neighbours:

```css
.card { margin: 16px 0; }
```

## `box-sizing: border-box`

Here's the critical detail: by default, `width` and `height` only apply to the **content** area. Padding and border are added *on top* of the specified width. This means setting `width: 200px` plus `padding: 20px` creates a box that's actually 240px wide.

This breaks layouts. The fix:

```css
* {
    box-sizing: border-box;
}
```

With `border-box`, `width` and `height` include padding and border. A 200px-wide box with 20px padding stays 200px wide. This is the universal recommendation — always use `border-box`.

## Practical Example: A Card Component

```css
.card {
    background: #f5f5f5;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 16px 0;
    max-width: 600px;
}
```

- `background` — light grey fill
- `padding` — 20px inside the border
- `border` — thin grey border
- `border-radius` — rounded corners
- `margin` — 16px above and below, none on sides
- `max-width` — won't exceed 600px, but will shrink on smaller screens

## Responsive Container

A common pattern for centring content:

```css
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
}
```

- `max-width: 960px` — content stays narrow on large screens
- `margin: 0 auto` — centres the container horizontally
- `padding: 0 16px` — breathing room on small screens

## Common Misconceptions

### "ID selectors are better than class selectors"
IDs have higher specificity, which makes them **harder to override** — this is usually a disadvantage. Classes are flexible, reusable, and easier to work with. Prefer classes.

### "Margin and padding are the same thing"
Margin is space **outside** the border (between elements). Padding is space **inside** the border (between content and border). They serve different purposes and create different visual effects.

### "`box-sizing: border-box` is unnecessary"
Without it, adding padding increases the element's total width — breaking layouts. Border-box makes sizing intuitive and is universally recommended.

## Key Terms

| Term | Definition |
|------|-----------|
| Selector | The part of a CSS rule that identifies which elements to style |
| Specificity | Weighting system determining which CSS rule takes precedence |
| Cascade | How CSS rules combine based on specificity, order, and inheritance |
| Box model | The four-layer model: content, padding, border, margin |
| `border-box` | Makes width/height include padding and border |

## Summary

CSS controls visual presentation. Selectors determine which elements are styled; specificity determines which rules win when they conflict. The box model describes how every element's size and spacing are calculated — content, padding, border, margin. Always set `box-sizing: border-box` to make sizing intuitive. These fundamentals — selectors, specificity, and the box model — underpin everything else in CSS.
