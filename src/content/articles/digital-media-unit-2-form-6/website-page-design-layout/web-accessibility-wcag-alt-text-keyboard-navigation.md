---
title: "Web Accessibility (WCAG, Alt Text, Keyboard Navigation)"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Website Page Design & Layout"
topicId: "website-page-design-layout"
order: 4
---
# Web Accessibility

## The Web Is for Everyone — Or It Should Be

Tim Berners-Lee, the inventor of the World Wide Web, said: "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." Accessibility is not a feature — it is a fundamental right.

Approximately 1.3 billion people globally — 16% of the world's population — experience a significant disability. In the Caribbean, CARICOM has adopted principles of the UN Convention on the Rights of Persons with Disabilities, which includes digital accessibility obligations. Building accessible websites means building for everyone: people with permanent disabilities, temporary situations (a broken arm, a bright screen in sunlight), and aging users.

## The POUR Principles

WCAG 2.2 — the current international standard for web accessibility — is built on four foundational principles. All web content must be:

### 1. Perceivable
Users must be able to perceive the information being presented. It cannot be invisible to all of their senses.

- Text alternatives for non-text content (alt text for images)
- Captions and transcripts for audio and video
- Sufficient colour contrast between text and background
- Content that can be presented in different ways without losing meaning

### 2. Operable
Users must be able to operate the interface. The interface cannot require interaction that a user cannot perform.

- All functionality available via keyboard (not just mouse)
- Enough time to read and use content
- No content that causes seizures or physical reactions
- Clear focus indicators showing where keyboard focus is

### 3. Understandable
Users must be able to understand the information and the interface. The content cannot be beyond their comprehension.

- Readable text with clear language
- Predictable navigation and consistent layout
- Input assistance that helps users avoid and correct mistakes

### 4. Robust
Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.

- Valid, semantic HTML that assistive technologies can parse
- Proper ARIA attributes when native HTML is insufficient
- Compatibility with current and future browsers and assistive tools

## WCAG Conformance Levels

WCAG defines three conformance levels:

| Level | Description | Who It Serves |
|-------|-------------|--------------|
| A | Minimum baseline — the most critical requirements | All websites |
| AA | Standard target and legal benchmark in most jurisdictions | Most websites |
| AAA | Enhanced level — not typically required for entire sites | Government, public sector |

**AA is the target.** The EU Accessibility Act (EASA), effective June 2025, requires digital products and services to meet accessibility standards across EU member states. In the US, the ADA has been applied to websites in courts with over 4,000 lawsuits filed in 2023 alone. Caribbean organisations increasingly adopt AA compliance as a standard.

## Alt Text: Describing Images Correctly

Alt text describes the **purpose** and **meaning** of an image in context — not every visual detail.

- **Bad**: `alt="IMG_20260812.jpg"` — tells the screen reader nothing useful
- **Better**: `alt="Me and friends at the beach"` — describes the scene but misses context
- **Best**: `alt="Group of six friends laughing on Tobago's Pigeon Point beach at sunset"` — specific, contextual, meaningful

### Decorative Images

Decorative images that convey no information use `alt=""` (empty alt attribute). Screen readers skip them entirely. This prevents users from hearing "decorative image" repeated for every spacer and flourish.

### Functional Images

Icons that serve as buttons need alt text describing the action, not the icon:

- `alt="Search"` (for a magnifying glass icon that triggers search)
- `alt="Close menu"` (for an X icon)
- `alt="Delete item"` (for a trash bin icon)

## Keyboard Navigation

Many users cannot use a mouse — motor disabilities, repetitive strain injuries, or simply preferring keyboard efficiency. Every interactive element on a website must be reachable and activatable by keyboard alone.

### Essential Keyboard Shortcuts

- **Tab** — Move focus forward through interactive elements
- **Shift + Tab** — Move focus backward
- **Enter / Space** — Activate buttons and links
- **Arrow keys** — Navigate within menus, radio button groups, and tab panels
- **Escape** — Close modals and dropdowns

### Focus Indicators

A focus indicator is the visual outline or highlight showing which element currently has keyboard focus. Never remove focus outlines with `outline: none` without providing an alternative. Without focus indicators, keyboard users are flying blind.

```css
/* Bad: removes focus visibility */
:focus { outline: none; }

/* Good: provides a visible custom focus style */
:focus-visible { outline: 3px solid #0056b3; outline-offset: 2px; }
```

### Skip Navigation Link

A skip navigation link — usually hidden until focused — lets keyboard users jump directly to the main content, bypassing repeated navigation links on every page. This is essential for pages with extensive navigation menus.

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

## ARIA: Augmenting, Not Replacing

ARIA (Accessible Rich Internet Applications) is a set of HTML attributes that supplement HTML semantics. The first rule of ARIA: **don't use ARIA if a native HTML element already does the job.** A `<button>` is already accessible. Wrapping a `<div>` in `role="button"` and adding `tabindex="0"` and keyboard handlers is a last resort.

### Landmark Roles

AR landmark roles identify major page regions so screen reader users can jump between sections:

| ARIA Role | HTML Equivalent | Purpose |
|-----------|----------------|---------|
| `banner` | `<header>` | Site-wide header |
| `navigation` | `<nav>` | Primary navigation |
| `main` | `<main>` | Main content area |
| `complementary` | `<aside>` | Sidebar content |
| `contentinfo` | `<footer>` | Footer and copyright |

### Live Regions

Status messages — like "Item added to cart" or "Form submitted" — must be communicated to assistive technology without receiving focus. ARIA live regions accomplish this:

```html
<div role="status" aria-live="polite">
  Your message has been sent successfully.
</div>
```

## Colour Contrast and Colour Independence

WCAG AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. Use a contrast checker tool (WebAIM has a free one) to verify every combination.

Colour should never be the **only** way to convey information. Approximately 8% of men and 0.5% of women experience colour vision deficiency. If a form uses red for errors and green for success without any other indicator, colour-blind users cannot distinguish between them.

**Worked Example**: A form validation message uses red text AND an error icon AND the word "Error:" — three cues, not one. A success state uses green text AND a checkmark icon AND the word "Success:" — redundant for sighted users, essential for colour-blind users.

## Testing Accessibility

### Automated Tools

Tools like axe-core, WAVE, and Google Lighthouse catch 30–40% of WCAG issues. They are a starting point, not an endpoint.

### Manual Testing

The remaining 60–70% requires manual checks:

- Navigate every page using only the Tab key — is focus visible? Is the order logical?
- Test with a screen reader (VoiceOver on Mac, NVDA on Windows, TalkBack on Android) — does the content make sense when heard?
- Check all images for meaningful alt text
- Verify form labels are associated with their inputs
- Test colour contrast with a contrast checker

**Worked Example**: Navigate your school's website using only the Tab key and VoiceOver. If you cannot find the navigation, cannot identify where focus is, or hear "image" without a description, the site has accessibility failures.

## Common Misconceptions

### "Accessibility only matters for blind people"
Accessibility benefits people with visual, auditory, motor, cognitive, and neurological disabilities — as well as temporary situations (broken arm, bright sunlight) and aging users. It benefits everyone.

### "Automated tools catch all accessibility issues"
Automated tools catch only 30–40% of WCAG issues. Keyboard navigation testing, screen reader testing, and manual review are essential.

### "Adding aria-label to everything makes a site accessible"
Overusing ARIA can make a site LESS accessible. Rule #1: use native HTML first. A `<button>` is already accessible; wrapping a `<div>` in ARIA roles is a last resort.

### "Alt text should describe every visual detail of an image"
Alt text should describe the PURPOSE and MEANING of the image in context. A photo of a classroom might need alt text about the lesson being taught, not a description of every desk and chair.

### "Accessibility is expensive and slows down development"
Building accessibly from the start costs very little extra. Retrofitting an inaccessible site is 10 times more expensive. Accessible code is also more semantic, which improves SEO.

### "If the site works for me, it works for everyone"
You are not your users. People use screen readers, keyboard-only navigation, voice control, screen magnifiers, and switch devices. Testing with your own eyes and mouse gives you a dangerously narrow view.

## Key Terms

| Term | Definition |
|------|-----------|
| WCAG | Web Content Accessibility Guidelines — the international standard for web accessibility |
| POUR | Perceivable, Operable, Understandable, Robust — WCAG's four foundational principles |
| Alt Text | Text describing an image's purpose, read by screen readers and displayed when images fail to load |
| ARIA | Accessible Rich Internet Applications — HTML attributes supplementing native semantics |
| Screen Reader | Assistive technology that reads screen content aloud for blind and visually impaired users |
| Focus Indicator | A visual outline showing which element currently has keyboard focus |
| Landmark Role | ARIA role identifying major page regions for screen reader navigation |
| Skip Navigation | A hidden link allowing keyboard users to jump directly to main content |

## Summary

Web accessibility ensures that all people, regardless of disability, can perceive, navigate, interact with, and contribute to the web. The POUR principles — Perceivable, Operable, Understandable, Robust — form the foundation. WCAG AA is the target conformance level, requiring sufficient contrast, keyboard navigability, meaningful alt text, and semantic HTML. ARIA supplements native HTML but never replaces it. Automated tools catch 30–40% of issues; the rest requires manual keyboard and screen reader testing. Accessibility is not a feature to add later — it is a design principle that must be present from the first wireframe.
