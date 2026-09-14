---
title: "Website Page Design & Layout"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Web Design, Structure & Digital Content Production"
topicId: "web-design-structure-digital-content-production"
order: 4
---
# Website Page Design & Layout: UX/UI Principles

## Introduction

You've used thousands of websites. Some felt effortless — you found what you needed in seconds, the buttons were where you expected, and the whole experience felt smooth. Others made you want to close the tab — confusing navigation, text too small to read, forms that didn't make sense. The difference between those two experiences isn't accidental. It's the result of **UX** (User Experience) design and **UI** (User Interface) design — two disciplines that work together to make websites functional, usable, and visually clear.

You've been making these judgements your entire life as a digital user. What this lesson does is give you the vocabulary and frameworks to make those judgements deliberately — to evaluate why a design works, why it fails, and how to build better ones yourself.

*Analogy:* Imagine you're walking into a supermarket. **UX is the whole experience**: the entrance is wide enough, the aisles are labelled clearly, the checkout is fast, and you leave satisfied. **UI is the visual design**: the signage is attractive, the price labels are readable, the shopping baskets are the right size. A supermarket with great signage but confusing layout (good UI, bad UX) leaves you frustrated. A supermarket with perfect flow but ugly, unreadable signs (good UX, bad UI) works but feels uninviting. You need both.

---

## Part 1: UX vs. UI — Understanding the Difference

### The Core Distinction

**UX (User Experience)** covers everything the user experiences while interacting with a website: how easy it is to complete tasks, how intuitive the navigation feels, how satisfying the overall journey is. UX encompasses research, information architecture, interaction design, and usability testing. It asks: *Does it work? Does it feel right?*

**UI (User Interface)** is the visual and interactive layer that users see and touch: the buttons, typography, colour schemes, icons, spacing, and layout. UI asks: *Does it look right? Is each element clear?*

UI is a subset of UX. A beautiful interface can still have terrible user experience (try booking a flight on a beautiful site with a broken checkout). A well-structured site can still look uninviting (imagine a perfectly organised library with no signs and flickering fluorescent lights). Both must work together.

### The Restaurant Analogy

| Restaurant Element | UX Equivalent | UI Equivalent |
|-------------------|---------------|---------------|
| Reservation process | Sign-up flow | Booking form design |
| Finding your table | Navigation and information architecture | Menu labels and wayfinding signage |
| Ordering from the menu | Task completion | Button design, typography, layout |
| Waiting for food | Loading times, progress feedback | Loading animations, spinners |
| Quality of the meal | Core content and functionality | Content presentation, visual polish |
| Paying the bill | Checkout flow | Payment form design |
| Overall impression | User satisfaction | Visual identity |

---

## Part 2: Information Architecture (IA)

### What Is Information Architecture?

IA is the structural design of how information is organised, labelled, and connected on a website. It answers the question: *Where does this content live, and how does someone find it?*

Good IA means a user can look at your site and immediately understand what's available and where to go. Bad IA means users click around randomly, get lost, and leave.

### Key Principles

| Principle | What It Means | Example |
|-----------|--------------|---------|
| **Clarity** | Labels and categories make intuitive sense | "Contact Us" not "Engagement Opportunities" |
| **Consistency** | Same patterns appear across the site | Navigation bar is in the same place on every page |
| **Progressive disclosure** | Show what's needed now, reveal more on demand | Show basic product info first, detailed specs on click |
| **Multiple access paths** | Users can find content through search, browse, or navigation | Search bar + navigation menu + sitemap |

### Card Sorting

Card sorting is a user research technique where real users group your content into categories that make sense to them. You write content items on cards (physical or digital), and participants organise them into groups. The results reveal how your audience naturally expects content to be organised — which might differ from how you'd organise it yourself.

### Caribbean Context

IA matters especially for government, tourism, and educational websites serving diverse audiences with varying digital literacy levels. A tourism site that a visitor from London navigates easily should work just as well for a local student looking for scholarship information. Clear labels, logical grouping, and multiple navigation paths make sites work for everyone.

---

## Part 3: Navigation Patterns

### Primary Navigation

The main navigation bar is the most important UI element on any website. It tells users what's available and where to go. Common patterns:

- **Top horizontal bar** — Most common; works well for 5–7 main items
- **Left sidebar** — Good for documentation, dashboards, and content-heavy sites
- **Hamburger menu** — Three horizontal lines hiding a navigation menu; standard on mobile

Miller's Law suggests that working memory handles about 7±2 items. Keep your main navigation to 5–7 items maximum. If you have more, group them into categories.

### Breadcrumbs

Breadcrumbs show the user's current position in the site hierarchy:

```
Home > Products > Digital Media > Cameras
```

They reduce confusion on deep sites and give users a quick way to go back to broader categories. Breadcrumbs are secondary navigation — they supplement the main menu, not replace it.

### Mobile Navigation

On mobile, navigation needs to be thumb-friendly. The bottom third of the screen is the **thumb zone** — the area reachable with one hand. Place primary actions there. Touch targets must be at least 44×44 pixels (Apple and Google guidelines). Closely spaced buttons on mobile cause accidental taps — a common frustration.

### Search

For content-heavy sites, search is essential. Place it prominently (top of page, always visible). Add autocomplete and filters to help users narrow results. Search is particularly important when your IA has many layers — not every user will browse your navigation structure.

---

## Part 4: Responsive Design Principles

### Adaptability, Not Shrinking

Responsive design means a single HTML document adapts its layout, typography, and media to different screen sizes. It's not about making the desktop version smaller — it's about restructuring content for each context.

| Screen Width | Typical Layout | Navigation |
|-------------|---------------|------------|
| 360–480px (phone) | Single column | Hamburger menu, bottom nav |
| 768px (tablet) | Two columns | Collapsed navigation |
| 1024px+ (desktop) | Three+ columns | Full horizontal nav bar |

### Fluid Grids

Use CSS Flexbox and Grid with relative units (`%`, `fr`, `rem`) instead of fixed pixels. Content reflows naturally when the viewport changes:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
```

This creates a responsive grid that shows one column on phones, two on tablets, and three or more on desktops — with no media queries needed.

### Flexible Images

```css
img {
  max-width: 100%;
  height: auto;
}
```

This prevents images from overflowing their containers on small screens. Combined with `aspect-ratio`, it reserves space and prevents layout shift (the page jumping around as images load).

### Performance as Design

Fast loading times are part of UX. The targets set by Google's Core Web Vitals are useful benchmarks:

| Metric | Target | What It Measures |
|--------|--------|-----------------|
| LCP (Largest Contentful Paint) | ≤ 2.5 seconds | How long until the main content loads |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | How much the page jumps around |
| INP (Interaction to Next Paint) | ≤ 200ms | How fast the page responds to clicks |

Optimised images and minimal CSS/JS aren't just technical concerns — they're design decisions. A beautiful page that takes 8 seconds to load on a Caribbean mobile connection is a design failure.

---

## Part 5: Accessibility (WCAG)

### Why Accessibility Matters

**WCAG 2.2** (Web Content Accessibility Guidelines) is the global standard for making web content accessible to people with disabilities. It's now an ISO standard, which gives it a legal dimension. But beyond compliance, accessibility benefits everyone: captions help in noisy environments, keyboard navigation helps power users, and good contrast helps in bright Caribbean sunlight.

Approximately 15% of the global population has some form of disability. Accessibility isn't niche — it's fundamental.

### The Four Principles: POUR

WCAG organises its guidelines under four principles:

| Principle | Requirement | Example |
|-----------|------------|---------|
| **Perceivable** | Content must be presentable in ways users can perceive | Alt text for images, captions for video, 4.5:1 colour contrast |
| **Operable** | Interface must be operable via keyboard | All interactive elements focusable with Tab, activated with Enter/Space |
| **Understandable** | Content and navigation must be understandable | Clear labels, predictable navigation, helpful error messages |
| **Robust** | Content must work with assistive technologies | Valid HTML, semantic markup, proper ARIA where needed |

### Practical Accessibility Checklist

| Action | Why It Matters |
|--------|---------------|
| Alt text on all meaningful images | Screen readers can't see images |
| Form labels paired with inputs | Screen readers can't identify unlabeled fields |
| Colour contrast of 4.5:1 for text | Readable in bright sunlight and for colour-blind users |
| Keyboard navigation through all interactive elements | Mouse-free access for motor-impaired users |
| Visible focus indicators | Users can see where they are on the page |
| Skip-to-content link | Keyboard users don't have to tab through navigation on every page |
| Heading hierarchy (h1 → h2 → h3) | Screen readers use headings for page navigation |
| No content flashing more than 3 times/second | Prevents seizures in photosensitive users |

### Screen Readers

Screen readers are software that reads page content aloud. They rely entirely on HTML semantics, alt text, and heading hierarchy. If your HTML is well-structured, a screen reader can navigate it efficiently. If it's built with generic `<div>` elements and missing alt text, the screen reader has nothing meaningful to read.

The most common screen readers: VoiceOver (Mac/iOS, built-in), NVDA (Windows, free), TalkBack (Android, built-in).

---

## Part 6: Nielsen's 10 Usability Heuristics

Jakob Nielsen's 10 usability heuristics, published in 1994, remain the foundational framework for evaluating interface design. They're derived from factor analysis of 249 usability problems and are cited across every reviewed source as the standard evaluation tool.

| # | Heuristic | Plain Language | Example |
|---|-----------|---------------|---------|
| 1 | **Visibility of system status** | Tell users what's happening | Loading spinners, progress bars, "Sent!" confirmation |
| 2 | **Match between system and real world** | Use the user's language | "Shopping cart" not "transaction container" |
| 3 | **User control and freedom** | Provide undo and back buttons | "Back" button, "Undo send" in Gmail |
| 4 | **Consistency and standards** | Same patterns everywhere | Blue underlined text means clickable link |
| 5 | **Error prevention** | Prevent problems before they happen | Confirm before deleting, format hints on forms |
| 6 | **Recognition rather than recall** | Make options visible | Recently viewed items, visible toolbar buttons |
| 7 | **Flexibility and efficiency of use** | Shortcuts for power users | Keyboard shortcuts, search bar |
| 8 | **Aesthetic and minimalist design** | Show only what's needed | Clean layouts, no clutter |
| 9 | **Help users recognise, diagnose, recover from errors** | Clear error messages | "Please enter a valid email" not "Error 422" |
| 10 | **Help and documentation** | Easy-to-find help | FAQ page, search bar, tooltip explanations |

### Worked Example: Applying Heuristics to a School Website

Imagine evaluating your school's website:

| Heuristic | Issue Found | Fix |
|-----------|------------|-----|
| Visibility of system status | Form submits with no confirmation | Add "Your message has been sent" feedback |
| User control and freedom | No way to go back from a sub-page | Add breadcrumbs and back button |
| Consistency and standards | "Home" link is in different places on different pages | Standardise navigation bar position |
| Error prevention | Email field accepts invalid formats | Add `type="email"` for built-in validation |
| Aesthetic and minimalist design | Homepage has 15 links with no visual hierarchy | Prioritise top 5 actions, group the rest |

---

## Part 7: Wireframing, Mockups, and Prototypes

### The Design Progression

| Stage | What It Is | Fidelity | Tools | Purpose |
|-------|-----------|----------|-------|---------|
| **Wireframe** | Black-and-white structural layout | Low | Paper, Figma | Explore structure and flow |
| **Mockup** | Visual design with colours, typography, images | Medium-High | Figma, Canva | Show what the final design looks like |
| **Prototype** | Interactive, clickable simulation | High | Figma, InVision | Test with real users before building |

The key insight: **fidelity increases and cost of change decreases at each stage**. A change made at the wireframe stage (moving a navigation element) takes seconds. The same change made after the site is coded might take hours. Sketch first, design second, code last.

### Paper First

The fastest, cheapest, and most creative way to explore layout ideas is paper and pen. Don't jump straight to Figma. Sketch five different layouts on paper, pick the best two, then move to digital. Paper encourages exploration without the trap of premature perfection.

### Figma: The Free Design Tool

Figma is a browser-based design tool with a free tier that's sufficient for student work. It supports vector editing, prototyping with clickable hotspots, component libraries, and real-time collaboration. Because it runs in a browser, it works on any device — including school computers without software installation. It's the dominant tool in modern UI/UX design.

---

## Part 8: Usability Evaluation in Practice

### Evaluating a Real Caribbean Website

Pick any Caribbean website — a government portal, a tourism site, a school website, or a local business. Apply the heuristics systematically:

1. **Walk through a common task** (e.g., "Find the school's exam timetable" or "Contact the business")
2. **Note every point of confusion, frustration, or delay**
3. **Map each issue to a heuristic** it violates
4. **Suggest a specific fix** for each issue

This exercise builds the critical evaluation skills that employers and CAPE assessments look for.

### Caribbean Context: Mobile-First Testing

Test every evaluation at 360px viewport width — this is the reality for many Caribbean users. Check:
- Is the text readable without zooming?
- Are buttons large enough to tap with a thumb?
- Does the navigation work on a phone?
- Does the page load quickly on a slow connection?

---

## Common Misconceptions

### "UX and UI are the same thing"

**Reality:** UX covers the entire user journey including research, information architecture, and testing. UI is specifically the visual and interactive layer. A beautiful interface (great UI) can still have terrible user experience (confusing flow, broken navigation).

### "Accessibility is optional or only for disabled users"

**Reality:** Accessibility benefits everyone. Captions help in noisy environments. Keyboard navigation helps power users. Good contrast helps in bright sunlight. Approximately 15% of the global population has a disability, and accessibility is now an ISO standard with legal implications.

### "Wireframes need to look polished"

**Reality:** Wireframes should be rough and fast. Their purpose is to explore structure and flow, not visual design. Perfectionism at the wireframe stage wastes time. A scribbled sketch on paper is a valid wireframe.

### "Mobile design means smaller desktop design"

**Reality:** Mobile is a different interaction context — thumbs instead of mice, variable connectivity, interruptions. It requires different design decisions, not just smaller ones. A three-column layout becomes one column. Navigation becomes a hamburger menu. Touch targets get larger.

### "Accessibility means adding ARIA labels"

**Reality:** ARIA is a last resort. Semantic HTML is the foundation. Proper heading hierarchy, alt text, form labels, and keyboard access should come first. ARIA supplements what HTML cannot express — it doesn't replace good HTML.

### "Nielsen's heuristics are just nice ideas"

**Reality:** They're empirically derived from factor analysis of 249 usability problems and have remained the standard since 1994. They're practical evaluation tools, not abstract principles. Every reviewed source in 2025–2026 cites them as foundational.

### "Prototypes need to be coded"

**Reality:** Low and mid-fidelity prototypes can be built entirely in Figma with clickable hotspots. Coding prototypes is expensive and time-consuming for early validation. Prototype first, code second.

---

## Key Takeaways

1. **UX is the experience; UI is the visuals** — Both must work together. A beautiful site that nobody can navigate is a failure. A well-organised site that looks uninviting is incomplete.

2. **Information architecture is foundational** — Before designing anything, decide how content is organised, labelled, and connected. Card sorting with real users reveals what they actually expect.

3. **Navigation must be clear, consistent, and limited** — 5–7 main items. Breadcrumbs for depth. Thumb-friendly on mobile. Search for content-heavy sites.

4. **Responsive design restructures, not shrinks** — Design for phones first (360px width), then add complexity for larger screens using media queries.

5. **Accessibility is a requirement, not a courtesy** — WCAG 2.2 is an ISO standard. Alt text, keyboard navigation, colour contrast, and semantic HTML benefit all users.

6. **Nielsen's 10 heuristics are your evaluation toolkit** — Apply them to every project and every website you evaluate. They turn vague "this feels wrong" reactions into specific, actionable feedback.

7. **Wireframe first, design second, code last** — Fidelity increases at each stage. The cheapest changes happen on paper.

---

*Source acknowledgement: Research drawn from Nielsen Norman Group (10 Usability Heuristics), W3C WCAG 2 Overview, TechBloat Best Web Design Practices 2026, UX Design Institute 7 Fundamental UX Design Principles 2026, Awesomic Best UX Design Practices 2026, Brainy Web Design Principles 2026, and UX Pilot 19 Web Design Principles. Specific WCAG criteria and heuristic applications should be verified against current W3C documentation at time of lesson delivery.*
