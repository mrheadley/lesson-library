---
title: "Responsive Design Across Devices"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Website Page Design & Layout"
topicId: "website-page-design-layout"
order: 3
---
# Responsive Design Across Devices

## One Site, Every Screen

A website that works beautifully on a laptop but is unreadable on a phone is a broken website. Over 60% of global web traffic now comes from mobile devices. Responsive design ensures that a single website adapts fluidly to any screen size — from a 320px phone to a 1440px desktop — without separate mobile versions.

This is not optional. It is a baseline expectation. Users will not pinch and zoom to read your content. They will leave.

## The Viewport Meta Tag: The First Requirement

Without the viewport meta tag, mobile browsers render the page at desktop width and shrink it down, making text unreadable. This single line is required:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Mobile-First: Start Small, Scale Up

Mobile-first design means building for the smallest screen first, then progressively enhancing for larger ones. This is a CSS strategy: you write base styles for mobile, then use `min-width` media queries to add styles for larger screens.

```css
/* Base styles — mobile */
.card { padding: 16px; }

/* Tablet and up */
@media (min-width: 768px) {
  .card { padding: 24px; display: flex; gap: 16px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .card { padding: 32px; }
}
```

**Why mobile-first?** Small screens force you to prioritise. When you only have 375px of width, you cannot hide behind clutter — you must decide what matters most. That clarity carries forward into larger layouts.

**Analogy**: Mobile-first is like sketching a poster on a postcard before scaling up to an A3 sheet. If the message fits on a postcard, it will be sharp and focused at any size.

## Breakpoints: Where the Layout Shifts

Breakpoints are specific viewport widths where CSS rules change to adjust the layout. They correspond to common device categories:

| Breakpoint | Device Category | Typical Use |
|-----------|----------------|-------------|
| 320px | Small phone | Single-column layout, minimal navigation |
| 375px | Standard phone (iPhone SE) | Primary mobile breakpoint |
| 768px | Tablet (iPad) | Two-column layouts, expanded navigation |
| 1024px | Desktop/laptop | Full layout with sidebar, multi-column grids |
| 1440px | Large desktop | Maximum content width, generous spacing |

You do not need a breakpoint for every device. Three to four well-chosen breakpoints with fluid layouts between them is usually sufficient. Overusing breakpoints creates brittle, hard-to-maintain code.

**Worked Example**: A school website sets its first breakpoint at 768px. On mobile, navigation collapses into a hamburger menu, content stacks in a single column, and images fill the full width. At 768px, the navigation expands to a horizontal bar, a two-column layout appears with the main content on the left and a sidebar on the right, and images are constrained to reasonable widths.

## Fluid Layouts: Relative Units

Fixed layouts break the moment the screen changes size. Fluid layouts use relative units so content reflows naturally:

- `%` — Relative to the parent element's width
- `rem` — Relative to the root font size (usually 16px)
- `em` — Relative to the current element's font size
- `vw` — 1% of the viewport width
- `vh` — 1% of the viewport height

**Practical approach**: Use `rem` for font sizes, `max-width` on containers to prevent overly long line lengths, and `%` or `fr` (CSS Grid) for layout widths. Avoid fixed `px` values for anything except thin borders and small decorative elements.

**Worked Example**: A Caribbean tourism page uses a container with `max-width: 1200px` and `width: 90%`. On a 1440px desktop, the container sits at 1200px with 120px of margin on each side. On a 375px phone, the container is 337px wide (90% of 375px). The layout never breaks; it simply fills available space.

## Flexbox and Grid: The Layout Tools

**Flexbox** handles one-dimensional layouts — a row OR a column. It is ideal for navbars, card rows, and vertically centring content.

**CSS Grid** handles two-dimensional layouts — rows AND columns simultaneously. It is ideal for page layouts, image galleries, and complex form structures.

```css
/* Flexbox: horizontal navigation that wraps on small screens */
.nav { display: flex; flex-wrap: wrap; gap: 16px; }

/* Grid: responsive card layout */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}
```

The `auto-fit` and `minmax` combination above creates a responsive grid that automatically adjusts the number of columns based on available space — no media query required.

## Responsive Images

Images are often the heaviest part of a page. Serving a 4000px-wide image to a 375px phone wastes bandwidth and slows loading. Two HTML features solve this:

Two HTML features handle responsive images. The `srcset` attribute lets the browser select the most appropriate image size based on screen width and pixel density. The `<picture>` element serves completely different images — a cropped portrait on mobile, a wide landscape on desktop. The `loading="lazy"` attribute defers off-screen images until the user scrolls near them, improving initial load speed.

## Performance: Design Is a Speed Decision

Largest Contentful Paint (LCP) — the time it takes for the largest visible element to render — should be under 2.5 seconds (Core Web Vitals standard). Users abandon sites that take more than 3 seconds to load.

Design decisions directly affect performance. Oversized images, heavy animations, complex layouts, and too many web fonts all slow down loading. A beautiful site that takes 5 seconds to load is a site that most visitors never see.

**Worked Example**: A school event website uses WebP image format at 800px wide (compressed from a 4MB original), loads two web fonts at 400 and 700 weight only, and avoids video backgrounds. The page loads in 1.8 seconds on a 3G connection — below the 2.5s threshold.

## Testing: DevTools and Real Devices

Chrome DevTools device toolbar (Ctrl+Shift+M) simulates different screen sizes. It is essential for initial testing but has limits — it cannot replicate touch interaction, real-world performance, network conditions, or hardware differences.

**Testing workflow**: Build mobile-first, test each breakpoint in DevTools, test on at least one real phone and tablet, test on a slow network (DevTools throttling), and ask someone unfamiliar with the project to complete a task on their phone.

## Container Queries: Components That Adapt

Container queries (using `@container` in CSS) are supported in all major browsers as of 2025. Unlike media queries that respond to the full viewport, container queries let a component respond to the width of its parent container. This means a card component can change its layout when placed in a narrow sidebar versus a wide main content area — without any viewport-level media query.

```css
.card-container { container-type: inline-size; }

@container (min-width: 400px) {
  .card { display: flex; }
}
```

## Common Misconceptions

### "Responsive design just means making everything smaller on mobile"
Responsive design reorganises content based on priority. Mobile shows the most important content first, with secondary content stacked below or hidden behind a menu.

### "If it looks right in Chrome DevTools, it's fine on real phones"
DevTools simulates dimensions but cannot replicate touch interaction, performance, network conditions, or hardware differences. Always test on real devices.

### "Mobile-first means mobile-only"
Mobile-first is a CSS strategy (min-width queries) that ensures a solid baseline on small screens, then gracefully enhances for larger ones.

### "More breakpoints means better responsiveness"
Too many breakpoints create brittle, hard-to-maintain layouts. Three to four well-chosen breakpoints with fluid layouts between them is usually sufficient.

### "You need separate websites for mobile and desktop"
A single responsive site with media queries serves all devices. Separate mobile sites (m.example.com) are an outdated approach from the early 2010s.

## Key Terms

| Term | Definition |
|------|-----------|
| Responsive Design | A web design approach where layouts adapt fluidly to the user's screen size and device |
| Breakpoint | A specific viewport width where CSS rules change to adjust the layout |
| Mobile-First | Building for the smallest screen first, then enhancing for larger screens with min-width queries |
| Fluid Layout | A layout using relative units and flexible containers so content reflows naturally |
| Viewport | The visible area of a web page on the user's screen |
| LCP | Largest Contentful Paint — a Core Web Vitals metric targeting under 2.5 seconds |
| Container Query | A CSS feature letting components respond to their parent container's width |
| Lazy Loading | Deferring off-screen images until the user scrolls near them |

## Summary

Responsive design uses relative units, fluid layouts, and breakpoints to make a single website work across phones, tablets, and desktops. Mobile-first CSS ensures a solid baseline on small screens before enhancing for larger ones. Responsive images and lazy loading keep performance high — an LCP under 2.5 seconds is the target. Container queries let individual components adapt to their context. DevTools helps with initial testing, but real devices reveal the problems that simulation misses. A responsive site is not a luxury; it is the minimum standard for any web presence in 2026.
