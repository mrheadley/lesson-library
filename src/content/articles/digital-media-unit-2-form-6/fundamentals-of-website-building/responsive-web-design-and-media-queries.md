---
title: "Responsive Web Design and Media Queries"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Fundamentals of Website Building"
topicId: "fundamentals-of-website-building"
order: 7
---
# Responsive Web Design and Media Queries

## One Site, Every Screen

Your website will be viewed on a 27-inch desktop monitor, a 13-inch laptop, a 10-inch tablet, and a 6-inch phone. Responsive web design (RWD) ensures it looks good and works well on all of them — by adapting layout, images, and text to the available space, rather than creating separate sites for each device.

## The Three Pillars of Responsive Design

### 1. Flexible Layouts
Use Flexbox, CSS Grid, and relative units (`%`, `em`, `rem`, `vw`, `fr`) instead of fixed pixel values. Flexible layouts naturally adapt to available space.

```css
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 16px;
}

.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.card {
    flex: 1 1 300px;  /* grows to fill space, never below 300px */
}
```

Cards wrap responsively — three per row on wide screens, two on medium, one on narrow — without any media queries.

### 2. Responsive Images
Images should never exceed their container's width:

```css
img {
    max-width: 100%;
    height: auto;
}
```

For serving different image files to different devices, use HTML's `srcset` attribute (covered in the images lesson).

### 3. Media Queries
When flexible layouts alone aren't enough — when you need to change the layout entirely at certain widths — use **media queries**:

```css
/* Base styles: mobile (phone) */
.container {
    padding: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        padding: 24px 32px;
    }
}

/* Desktop and up */
@media (min-width: 1024px) {
    .container {
        padding: 32px 48px;
    }
}
```

Media queries apply CSS only when specific conditions are met — most commonly, when the viewport width crosses a threshold.

## Mobile-First Design

The recommended approach: **write CSS for small screens first**, then use `min-width` media queries to add complexity for larger screens.

```css
/* Mobile first (base styles) */
.nav {
    display: none;          /* hidden by default on mobile */
}

.nav-open .nav {
    display: block;         /* shown when hamburger is toggled */
}

/* Tablet and up: show horizontal nav */
@media (min-width: 768px) {
    .nav {
        display: flex;
        gap: 16px;
    }
}
```

### Why Mobile-First?

- **Simpler CSS**: Mobile layouts are simpler — single column, stacked elements. Starting simple and adding complexity is easier than starting complex and removing.
- **Better performance**: Mobile devices download only the base CSS. Desktop-specific styles load only when needed.
- **Matches reality**: Most web traffic now comes from mobile devices. Designing for the majority first makes sense.

## Breakpoints

Breakpoints are the viewport widths where layout changes occur. Common breakpoints:

| Breakpoint | Typical Device |
|-----------|----------------|
| 480px | Phone landscape |
| 768px | Tablet portrait |
| 1024px | Tablet landscape / small desktop |
| 1200px | Desktop |
| 1440px | Large desktop |

### Don't Target Specific Devices

Don't write breakpoints for "iPhone" or "iPad" — new device sizes appear constantly. Instead, use **content-based breakpoints**: set breakpoints where *your layout breaks*, not where a specific device happens to be.

If your card grid looks fine at 750px but breaks at 600px, use `@media (min-width: 600px)` — not a breakpoint tied to a device name.

### Most Sites Need Only 2–4 Breakpoints

```css
/* Mobile (base) */
/* Tablet: min-width: 768px */
/* Desktop: min-width: 1024px */
/* Large desktop: min-width: 1200px */
```

That's usually enough.

## Fluid Typography

Instead of fixed font sizes that jump at breakpoints, use `clamp()` for smooth scaling:

```css
h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
}
```

This scales from 1.5rem on small screens to 3rem on large screens, smoothly in between. No media queries needed.

## The Viewport Meta Tag

Responsive design **won't work** without this in your HTML `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without it, mobile browsers assume the page is 980px wide and zoom out — making everything tiny. This meta tag tells the browser to use the actual device width.

## Container Queries (Modern CSS)

A newer feature: `@container` rules respond to the **container's width** rather than the viewport. This is useful for components that need to adapt to their column width, not the screen:

```css
.card-container {
    container-type: inline-size;
}

@container (min-width: 400px) {
    .card {
        display: flex;
        flex-direction: row;
    }
}
```

The card switches from vertical to horizontal layout when its *container* is wide enough — regardless of the viewport size.

## Responsive Navigation Patterns

Navigation is one of the biggest responsive design challenges:

### Desktop
Horizontal navigation with all links visible:

```css
@media (min-width: 768px) {
    nav {
        display: flex;
        gap: 16px;
    }
}
```

### Mobile
Hamburger menu (toggle visibility with JavaScript):

```css
/* Base: nav hidden */
nav {
    display: none;
}

/* When toggled open */
nav.open {
    display: block;
}

/* Back to horizontal on tablet+ */
@media (min-width: 768px) {
    nav {
        display: flex;
        gap: 16px;
    }
}
```

## Responsive Card Grid

```css
.cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

@media (min-width: 768px) {
    .cards {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1024px) {
    .cards {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
```

One column on phone, two on tablet, three on desktop.

## Common Misconceptions

### "Responsive design means making everything smaller"
Responsive design **rearranges** content for context — hiding non-essential elements, stacking columns vertically, making touch targets larger. It's not just scaling.

### "You need many breakpoints"
Most sites need only 2–4 breakpoints. Let content drive breakpoints, not device sizes. Set them where your layout breaks.

### "Mobile-first means mobile-only"
Mobile-first means you *start* with mobile styles and *add* for larger screens. The final site works on all devices — it's a development strategy, not a design constraint.

## Key Terms

| Term | Definition |
|------|-----------|
| Responsive web design | Adapting layout and content to fit different screen sizes |
| Breakpoint | Viewport width where layout changes |
| Media query | CSS rule applying styles only when conditions are met |
| Mobile-first | Starting with small-screen styles, adding for larger screens |
| Viewport | The visible area of a web page in the browser |
| Fluid typography | Font sizes that scale smoothly using `clamp()` |

## Summary

Responsive web design combines flexible layouts (Flexbox/Grid with relative units), responsive images (`srcset`, `max-width`), and media queries (`@media`) to create pages that work on any device. The mobile-first approach — base styles for phones, `min-width` queries for larger screens — produces simpler, faster CSS. Most sites need only 2–4 content-driven breakpoints. The viewport meta tag is essential. The goal: one site that looks great everywhere.
