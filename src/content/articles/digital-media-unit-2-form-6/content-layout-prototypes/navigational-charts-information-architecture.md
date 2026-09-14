---
title: "Navigational Charts & Information Architecture"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Content Layout Prototypes"
topicId: "content-layout-prototypes"
order: 2
---
# Navigational Charts and Information Architecture

## The Invisible Structure Behind Every Website

When you visit a well-designed website, you don't think about navigation — you just find what you need. That seamlessness is the result of careful **Information Architecture (IA)**: the invisible organisational structure that determines what content exists, how it's grouped, what it's called, and how users move through it.

A **navigational chart** is one of the tools that makes this invisible structure visible — mapping the paths a user can take through your site.

## Information Architecture vs. Navigation

These two terms are often confused, but they describe different things:

**Information Architecture** is the structural foundation — the decisions about how content is organised, categorised, and labelled. It's documented in spreadsheets, content inventories, and taxonomy diagrams. You don't "see" IA in a browser; you experience its effects.

**Navigation** is the visible expression of that foundation — the menus, links, breadcrumbs, and buttons that let users move through the structure. Navigation is the user-facing layer; IA is the architectural blueprint underneath.

The relationship is like a building's plumbing (IA) and its faucets (navigation). The faucets are what you interact with, but their effectiveness depends entirely on the plumbing behind the walls.

## Types of Navigation

A well-structured website typically uses several navigation components working together:

### Global Navigation
The primary menu that appears consistently on every page — usually across the top of the page or in a sidebar. This is the user's main way of orienting themselves and jumping between major sections.

**Rule of thumb**: keep global navigation to **5–7 top-level items**. More than that overwhelms users and signals that the site's IA might be too flat or trying to serve too many audiences.

### Local Navigation
Section-specific navigation that appears within a content area. If you're in the "Academics" section, local nav might show links to "Departments," "Course Catalogue," and "Exam Schedule." It helps users explore a section without returning to the global menu.

### Utility Navigation
A small, separate menu for administrative features — "Log in," "My Account," "Cart," "Search." It's not about content; it's about tools.

### Breadcrumbs
A hierarchical trail showing the user's current location: Home > Academics > Departments > Science. Breadcrumbs work well for deep, hierarchical sites (e-commerce, documentation) but add clutter on flat, marketing-focused sites.

### Footer Navigation
The bottom of the page often houses secondary links that don't belong in the global nav — "Privacy Policy," "Terms of Service," "Careers," "Sitemap."

## Designing Navigation: Principles

### Use Common Language
Navigation labels should be specific, descriptive, and use the words your users actually use — not your internal jargon. "Student Resources" is better than "LMS Portal." "What We Do" is vague; "Services" is clear.

**Card sorting** is the fastest way to validate your labels. Give users a stack of cards, each with a topic written on it, and ask them to group the cards into categories that make sense. The categories they create become your navigation structure.

### Support the User's Mental Model
Users don't navigate based on your org chart — they navigate based on how *they* think about the content. A parent visiting a school site doesn't care that "Exam Schedules" is managed by the Academic Office. They care that it exists and they can find it.

### Mobile Navigation Is Its Own Problem
On mobile, screen space is limited. The hamburger menu (three horizontal lines) is universally understood and widely used. But the menu behind it must use **large tap targets**, **clear hierarchy**, and a **full-screen overlay or slide-in panel** rather than a shrunk-down version of the desktop menu.

For apps where users frequently switch between categories, a **bottom tab bar** (like iOS or Android apps) can outperform a hamburger menu — it's always visible and requires only one tap.

### Accessibility Is Non-Negotiable
Navigation must work for everyone:

- Use semantic HTML: `<nav>` elements with `aria-label` to distinguish multiple nav regions.
- Every interactive element must be reachable via keyboard (Tab key).
- Provide visible focus indicators so keyboard users can see where they are.
- Include a **skip-to-main-content** link so screen reader users don't have to tab through the entire menu on every page.
- Manage focus correctly when opening/closing mobile menus — when the menu opens, focus should move into it; when it closes, focus should return to the button that opened it.

## Building a Navigational Chart

A navigational chart maps out the user's journey — which links they click, which menus they open, and in what order pages are encountered.

### Worked Example: A Student Project Website

Imagine you're building a website for a local business as a class project:

- **Global nav**: Home | Services | Gallery | Contact
- **Under "Services"**: local nav shows Web Design | Graphic Design | Photography
- **Breadcrumbs**: Home > Services > Web Design
- **Footer**: Privacy Policy | About the Students | Contact

The navigational chart would show arrows from the homepage to each top-level section, from "Services" to each sub-service, and from every page back to the homepage (via the global nav).

### Worked Example: A Class Blog Platform

- **Global nav**: Latest Posts | Categories | About Us
- **Local nav**: Under "Categories" → By Topic | By Author | By Date
- **Utility nav**: Log in | Search
- **Footer**: Privacy Policy | How to Contribute

## Common Misconceptions

### "IA and navigation are the same thing"
IA is the invisible structure; navigation is one way it's expressed. You can change navigation patterns (tabs vs. dropdowns vs. mega menus) without changing the underlying IA. But if the IA is bad — if content is poorly categorised or labelled — no navigation pattern will save it.

### "More navigation options = better"
Too many top-level items overwhelm users and make scanning difficult. The best navigation surfaces the most important paths and hides less-critical ones behind progressive disclosure (e.g. expandable sections, "More" dropdowns).

### "Always use a hamburger menu on mobile"
The pattern should match user behaviour. If users frequently switch between top-level sections, a bottom tab bar may be more usable than a hamburger menu that hides everything behind a tap.

## Key Terms

| Term | Definition |
|------|-----------|
| Information Architecture (IA) | The structural backbone of a website — how content is organised, labelled, and related |
| Global navigation | The primary menu appearing on every page |
| Local navigation | Section-specific navigation within a content area |
| Breadcrumbs | A hierarchical trail showing the user's current location |
| Card sorting | A research method where users group content into categories |
| Mega menu | A large dropdown with multiple columns of links and featured content |

## Summary

Information architecture is the invisible foundation that determines whether users can find what they need. Navigation is the visible layer that makes that foundation usable. By designing IA based on user mental models — not org charts — and expressing it through clear, accessible navigation components, you create websites where users feel oriented and confident from the moment they arrive.
