---
title: "Section 5 Review, Synthesis & Web Design Project"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Trends in Web Publishing"
topicId: "trends-in-web-publishing"
order: 6
---
# The Web Design Project: From Section Synthesis to Your First Prototype

## One Pipeline, Five Movements

Section 5 has covered a wide range of topics — prototypes, HTML/CSS, UX/UI, publishing forms, content management, and trends. They may have felt like separate subjects. They are not. Think of the whole section as **one production pipeline** you will now carry into a web design project:

- **PLAN** — content layout prototypes: concept maps, navigational charts, site maps, hierarchy maps
- **PRODUCE** — digital content tools, HTML/CSS
- **DESIGN** — UX/UI, responsiveness, accessibility, usability
- **PUBLISH** — forms of publishing, hosted platforms, web content management (WCM)
- **ANTICIPATE** — trends in web publishing

The "how it all fits" mental model: **content layout prototypes define the structure, HTML/CSS realise it, UX/UI principles shape how users experience it, hosting and WCM determine how it's delivered and managed, and trends explain the forces reshaping all of it.** This review is about building that connection — a skill called **synthesis**.

## What the Project Actually Is

The web design project is a **planning + low-fidelity prototyping** task, not a full website build. You plan a multi-page site and prototype it by applying the section's techniques — you do not need to code every page, and you will not produce a polished, finished product today.

This mirrors professional practice. The workflow is:

1. **Define the problem and audience** — who is this site for, and what must it do?
2. **Build a site map** — the page hierarchy and navigation.
3. **Wireframe each page low-fidelity** — rough boxes and content zones.
4. **Annotate behaviours and states** — what happens on click, on error, when empty.
5. **Review as a flow** — walk through the full journey, not isolated screens.

**Iteration is central.** A prototype exists to be tested and improved cheaply before any expensive build. That is the constructionist payoff of this entire section: rough and wrong is fine, because it is cheap to fix.

## Start With a Site Map

A **site map** is a hierarchical diagram of all pages and their parent–child relationships, created before any individual page is designed. Never wireframe without one first — a site map prevents forgetting pages and clarifies navigation.

**Minimum multi-page site** (per the Section 5 convention): **four pages** — Home, About, at least one content/gallery page, and Contact.

**Worked example** — a soca artist promo site:

```
Home
├── Tour Dates
├── Music
│   ├── Singles
│   └── Albums
└── Contact
```

**Worked example** — a Caribbean food blog:

```
Home
├── Recipes
│   ├── Trinidad
│   ├── Jamaica
│   └── Barbados
├── About
└── Contact
```

## Wireframe Fidelity: Keep It Rough

A **wireframe** is a low-fidelity schematic of a page showing layout, content zones, and navigation — without colour, real images, or final typography. Match the fidelity level to the job:

| Fidelity | What it includes | Use it for |
|----------|------------------|------------|
| Low-fi | Boxes, lines, placeholder text | Fastest exploration of layout |
| Mid-fi | Labelled content zones, approximate proportions | Communicating structure to others |
| High-fi | Near-final layout, grey-scale | Validating layout before visual design |

For this project, target **low-to-mid fidelity**. Keep it rough — polish invites arguments about colour before the structure is agreed, and rough sketches are faster and cheaper to change.

### Mobile-first quick reference

Design around **375px (phone) first**, then **768px (tablet)**, then **1024px+ (desktop)**. Mobile-first does not mean mobile-only — it means starting at the smallest screen to force prioritisation, then expanding. Since mobile is now the majority of web traffic (see the trends lessons), a mobile-first prototype is non-negotiable.

## Tools for Prototyping

Start with **pen and paper** — it is the fastest, lowest-stakes way to explore, and it is genuine professional practice. Then move to a free digital tool:

- **Figma** — free tier, real-time collaboration, wireframe libraries; the most industry-used choice
- **Balsamiq** — sketch-style, deliberately rough to avoid premature design talk
- **Miro / Whimsical** — collaborative boards for site maps and wireframes

## Annotate Behaviours and States

Static wireframes cannot show click behaviour, transitions, or form validation — write these down as notes. Every screen has more than one state, and a form page needs at least the **empty form** and **validation-error** states.

**Worked example** — a Contact page for a community youth-org site:

1. Name field — required; placeholder "Enter your full name"
2. Email field — required; validates format on blur
3. Message field — required; minimum 20 characters
4. Submit button — disabled until all fields pass validation
5. On success — "Your message has been sent. We respond within 48 hours"
6. On error — inline error messages beside the relevant field

Also wireframe the **empty state** (a gallery with no photos yet: "No images uploaded") and the **error state** (a failed submission) — not just the happy path.

## Review as a Flow

Never review wireframes in isolation. Walk the complete user journey — land on Home, navigate to the target page, perform the action, reach confirmation — and check each transition. If the user can get lost or stuck at any step, that step needs a wireframe.

## Tying Trends to the Project

The trends from Lesson 88 are not abstract trivia — they shape your design decisions. Because mobile traffic is the majority of web use, your prototype must be mobile-first. Because data costs and bandwidth matter in the Caribbean, your images and content should optimise for quick loading. Use the trends as the rationale for the choices you make in the project brief.

## Common Misconceptions

- **"The project means building a working site today."** No — it is planning plus low-fidelity prototyping: a site map and rough wireframes demonstrating structure, hierarchy, and UX thinking. The full build comes later.
- **"Wireframes have to look finished to be useful."** Low-fidelity, rough layouts are the point. Polish invites design arguments before the structure is agreed.
- **"The section's topics are unrelated."** There is one pipeline — prototypes define structure, HTML/CSS build it, UX/UI shapes the experience, platforms/WCM publish and manage it, and trends explain what is changing. Synthesis is the whole point of this review.
- **"You can wireframe without a site map."** Plan structure first to avoid forgotten pages and unclear navigation — even a four-page site benefits from a site map.
- **"Mobile-first means designing for mobile only."** It means starting at the smallest screen to force prioritisation, then expanding to tablet and desktop — always cover multiple breakpoints.
- **"One wireframe per page is enough."** Pages often need multiple states (default, empty, error, success). A form page needs at least the empty form and validation-error states.

## Summary

Section 5 is one production pipeline — plan, produce, design, publish, anticipate — and the web design project is your chance to apply it as a whole. Define the problem and audience, build a site map, wireframe each page at low-to-mid fidelity, annotate behaviours and states, and review your prototype as a complete user flow. Keep it rough and iterate cheaply: a prototype exists to be tested and improved before any expensive build. Start mobile-first at 375px, use free tools like Figma or pen and paper, and let the trends lessons justify your design decisions. Site map first, wireframes second, flow review always.
