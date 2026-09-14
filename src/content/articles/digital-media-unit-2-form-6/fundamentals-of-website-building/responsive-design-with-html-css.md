---
title: "Responsive Design with HTML/CSS"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Fundamentals of Website Building"
topicId: "fundamentals-of-website-building"
order: 6
---
# CSS Layout — Flexbox and Positioning

## Arranging Elements on the Page

HTML puts elements in a default flow: block elements stack vertically, inline elements flow left to right. But real designs need more control — navigation bars, card grids, sidebars, centred content, sticky headers. CSS layout tools let you arrange elements exactly where you need them.

This lesson covers two layout systems: **Flexbox** (the modern standard for one-dimensional layout) and **CSS positioning** (for precise placement of specific elements).

## Flexbox: The Layout Revolution

Before Flexbox (standardised in 2017), layout required floats, positioning hacks, and clearfixes — fragile techniques that broke easily. Flexbox replaced all of that with a clean, intuitive system.

### The Basics

Apply `display: flex` to a container, and its children become **flex items** arranged along a single axis:

```html
<nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>
```

```css
nav {
    display: flex;
    gap: 16px;
}
```

The links sit side by side with 16px between them. No floats, no clearfix, no hacks.

### Main Axis and Cross Axis

Flexbox works along two axes:

- **Main axis**: The primary direction (horizontal by default, set by `flex-direction`)
- **Cross axis**: Perpendicular to the main axis (vertical by default)

```css
.container {
    display: flex;
    flex-direction: row;      /* main axis is horizontal (default) */
    /* or flex-direction: column; — main axis is vertical */
}
```

### Alignment Properties

#### Along the Main Axis: `justify-content`

```css
.container {
    display: flex;
    justify-content: center;          /* centres items */
    /* justify-content: space-between; — equal space between items */
    /* justify-content: space-around; — equal space around items */
    /* justify-content: space-evenly; — truly equal spacing */
    /* justify-content: flex-start; — items at the start (default) */
}
```

#### Along the Cross Axis: `align-items`

```css
.container {
    display: flex;
    align-items: center;          /* centres items vertically */
    /* align-items: stretch; — items fill the container height (default) */
    /* align-items: flex-start; — items at the top */
}
```

#### Centre Everything

The classic "centre anything" pattern:

```css
.centred {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
```

This centres content both horizontally and vertically within the full viewport height.

### Flex Sizing

The `flex` property on child elements controls how they share available space:

```css
.card {
    flex: 1;               /* each card grows equally */
    /* flex: 1 1 300px; — grow, shrink, but not below 300px */
    /* flex: 0 0 200px; — fixed at 200px, don't grow or shrink */
}
```

`flex: 1 1 300px` means: grow to fill space, shrink if needed, but never go below 300px. This creates responsive card grids that wrap naturally.

### Flex Wrap

By default, flex items try to fit on one line. `flex-wrap: wrap` lets them wrap to the next line:

```css
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.card {
    flex: 1 1 300px;
}
```

Cards wrap responsively — three per row on wide screens, two on medium, one on narrow.

### Gap

The `gap` property adds consistent spacing between flex items — no margins on individual items needed:

```css
.container {
    display: flex;
    gap: 16px;
}
```

### Flex Ordering

The `order` property changes the visual order of flex items without changing the HTML source order:

```css
.sidebar { order: 2; }
.main { order: 1; }
```

**Warning**: Screen readers follow the HTML source order, not the visual order. Only use `order` when the visual reordering doesn't affect accessibility.

## CSS Positioning

Positioning removes elements from the normal document flow or shifts them relative to their normal position. It's powerful for specific use cases but shouldn't be used for general layout.

### Position Values

#### `static` (Default)
Normal document flow. No positioning applied.

#### `relative`
Shifted from its normal position, but **original space is preserved**:

```css
.badge {
    position: relative;
    top: -10px;     /* shifts 10px up from normal position */
}
```

#### `absolute`
Removed from the document flow. Positioned relative to the nearest **positioned ancestor** (an ancestor with `position` set to anything other than `static`):

```css
.parent {
    position: relative;   /* creates positioning context */
}

.child {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

Other elements don't know the absolute-positioned element is there — it can overlap them.

#### `fixed`
Removed from the document flow. Positioned relative to the **viewport** — it stays in place while scrolling:

```css
.sticky-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #333;
    color: white;
    padding: 12px;
    z-index: 100;
}
```

#### `sticky`
Alternates between `relative` and `fixed` based on scroll position. It scrolls normally until it hits a threshold, then "sticks" in place:

```css
header {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
}
```

The header scrolls with the page until it reaches the top of the viewport, then stays there.

### z-index

Controls stacking order of positioned elements (higher = on top):

```css
.overlay { z-index: 10; }
.modal { z-index: 100; }
```

**Important**: `z-index` only works on positioned elements (anything except `static`).

### Overflow

Controls what happens when content exceeds its container:

```css
.container {
    overflow: hidden;   /* clips overflowing content */
    overflow: scroll;   /* adds scrollbars */
    overflow: auto;     /* adds scrollbars only when needed */
}
```

## Flexbox vs. Positioning: When to Use Which

| Use Case | Tool |
|----------|------|
| Navigation bar | Flexbox |
| Card grid | Flexbox |
| Footer layout | Flexbox |
| Centring content | Flexbox |
| Sticky header | `position: sticky` |
| Fixed bottom banner | `position: fixed` |
| Tooltip/icon overlay | `position: absolute` |
| Sidebar that scrolls with page | Flexbox |

**General rule**: Use Flexbox for layout. Reserve positioning for overlays, tooltips, sticky elements, and icons.

## Flexbox vs. CSS Grid

| Feature | Flexbox | Grid |
|---------|---------|------|
| Dimension | One axis (row OR column) | Two axes (rows AND columns) |
| Best for | Linear layouts, navigation, cards | Complex 2D page layouts |
| Learning curve | Lower | Slightly higher |

For most everyday layout needs, Flexbox is sufficient. Use Grid when you need precise two-dimensional control (e.g. a dashboard with rows and columns of different sizes).

## Common Misconceptions

### "Flexbox is just for navigation bars"
Flexbox is a general-purpose layout tool. It handles cards, footers, sidebars, centring, equal-height columns, and far more. Navigation is just one use case.

### "Absolute positioning is the best way to place things"
Absolute positioning removes elements from the document flow — other elements don't know they're there, causing overlaps and gaps. Use Flexbox or Grid for layout; reserve absolute positioning for overlays and specific exceptions.

### "Float is still the main way to do layout"
Float was designed for wrapping text around images, not for page layout. Flexbox and Grid replaced float for layout in 2017. Learning float helps understand legacy code; don't use it for new projects.

## Key Terms

| Term | Definition |
|------|-----------|
| Flexbox | CSS layout model distributing space along a single axis |
| Main axis | Primary axis of flex layout (horizontal by default) |
| Cross axis | Axis perpendicular to the main axis |
| Positioning context | Nearest positioned ancestor used by `absolute`/`fixed` elements |
| Document flow | Default layout where elements follow HTML source order |
| z-index | Controls stacking order of positioned elements |

## Summary

Flexbox is the modern standard for CSS layout. Apply `display: flex` to a container, use `justify-content` and `align-items` for alignment, `flex` for sizing, and `gap` for spacing. It handles navigation bars, card grids, centred content, and most everyday layouts. CSS positioning (`relative`, `absolute`, `fixed`, `sticky`) is for specific cases: sticky headers, fixed banners, and overlays. Use Flexbox for layout; use positioning sparingly.
