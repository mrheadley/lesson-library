---
title: "Site Maps: Building & Interpreting"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Content Layout Prototypes"
topicId: "content-layout-prototypes"
order: 3
---
# Site Maps — Building and Interpreting

## From Ideas to Pages

You've created a concept map that shows what content exists and how it relates. Now you need to translate that into a concrete page hierarchy — which pages will exist, how they nest within each other, and which pages appear in the main menu. That's what a **sitemap** does.

A sitemap is the bridge between the abstract relationships of your concept map and the tangible structure of your website. It answers: "If I built this site, what pages would I need to create?"

## What a Sitemap Shows

A sitemap is a visual diagram where:

- **Nodes (boxes)** represent individual pages or sections
- **Connecting lines** show the parent-child hierarchy
- The **homepage** sits at the top
- **Sections** branch downward from the homepage
- **Individual pages** branch from their parent section

The depth of your sitemap — how many levels it has — depends on the size of your site. Most websites under 50 pages need **two levels** of hierarchy (homepage → sections → pages). Larger sites may need three or four levels.

## Visual Sitemap vs. XML Sitemap vs. HTML Sitemap

It's important to distinguish three things that share the name "sitemap":

### Visual Sitemap (What We're Building)
A diagram for planning and communication — used by designers, developers, and stakeholders before and during the build. This is a tool for *people*, not machines.

### HTML Sitemap
A page on the live website that lists all (or most) pages as clickable links — a human-readable directory. Some sites include these for accessibility and SEO, though they're less common now that search engines use XML sitemaps.

### XML Sitemap
A machine-readable file (sitemap.xml) submitted to search engines. It lists URLs so crawlers can find and index pages. It's not a planning tool — it's a technical SEO deliverable.

For this lesson, when we say "sitemap," we mean the **visual planning diagram**.

## The Sitemapping Process

Building a sitemap is an iterative process. Here's a practical approach:

### Step 1: Start with Your Concept Map
Review your concept map and identify the central node (homepage) and its major branches (sections). These become your first-tier pages.

### Step 2: Define Primary Navigation
Decide which sections appear in the global navigation. Remember: 5–7 top-level items maximum. Use specific, user-friendly labels.

### Step 3: Define Secondary Hierarchy
Under each section, list the sub-pages. These are the second tier — pages that live within a section but don't appear in the global nav.

### Step 4: Add Utility Pages
Don't forget pages that aren't primary content but are legally or functionally necessary:
- Contact page
- Privacy Policy
- Terms of Service
- 404 error page
- Search results page

These often live in the footer rather than the global nav, but they must exist in the sitemap.

### Step 5: Add Page Notes
For each page in the sitemap, jot down a brief note about what it contains. This turns the sitemap from a structural diagram into a content plan.

### Step 6: Iterate
Version 1 of the sitemap is almost never the final version. Show it to stakeholders, test it with users (can they find what they're looking for?), and revise.

## Worked Example: School Website Sitemap

```
Home
├── About
│   ├── History
│   ├── Mission & Values
│   └── Leadership
├── Academics
│   ├── Departments
│   │   ├── English
│   │   ├── Science
│   │   └── Mathematics
│   ├── Course Catalogue
│   └── Exam Schedule
├── Student Life
│   ├── Clubs
│   ├── Events
│   └── Sports
├── Contact
├── Privacy Policy
└── (Footer) Terms of Service | Sitemap
```

**Analysis**: Three levels of hierarchy (Home → Academics → English). Most content is accessible within 2–3 clicks. Utility pages (Contact, Privacy Policy) are at the top level for easy access.

## Worked Example: Personal Portfolio Sitemap

```
Home
├── Projects
│   ├── Photography Portfolio
│   ├── Graphic Design Work
│   └── Web Development Projects
├── About
├── Skills
├── Blog
│   ├── Post 1
│   └── Post 2
└── Contact
```

**Analysis**: Simple, flat structure. The portfolio is the centrepiece (under "Projects"), with a blog for ongoing content. Only two levels deep — ideal for a personal site.

## Worked Example: Food Blog Sitemap

```
Home
├── Recipes
│   ├── By Meal
│   │   ├── Breakfast
│   │   ├── Lunch
│   │   └── Dinner
│   └── By Diet
│       ├── Vegetarian
│       └── Vegan
├── About
├── Equipment Reviews
├── Contact
└── (Footer) Privacy Policy
```

**Analysis**: Uses **faceted organisation** — the same recipes can be reached through different paths (by meal type or by dietary need). This is more flexible than a single hierarchy but requires careful cross-linking.

## Sitemap Quality Checklist

Before finalising your sitemap, check:

- [ ] **Completeness**: Does every piece of planned content have a place in the hierarchy?
- [ ] **Balance**: Are any sections overloaded with sub-pages while others are empty?
- [ ] **Depth**: Is any section more than 3 levels deep? If so, can it be flattened?
- [ ] **Labels**: Are all page names clear, specific, and user-friendly (not jargon)?
- [ ] **Utility pages**: Are contact, privacy policy, and error pages accounted for?
- [ ] **Accessibility**: Can a user reach the most important content in 3 clicks or fewer?
- [ ] **Multiple entry points**: Are important pages accessible from more than one path?

## Common Mistakes

### "The sitemap IS the information architecture"
The sitemap is one deliverable of IA work. IA also includes taxonomy development, content audits, card sorting, and labelling systems. The sitemap visualises the result but doesn't capture all the reasoning behind it.

### "Version 1 is final"
Sitemaps should be iterative. Version 1 almost never survives contact with user testing or stakeholder feedback. Build iteration into the process — expect to revise.

### "Every page needs primary navigation"
Utility pages, legal pages, and deep content can live in the footer or behind secondary navigation. Primary nav should surface only the most important user tasks.

## Key Terms

| Term | Definition |
|------|-----------|
| Page hierarchy | The nesting structure of a website — homepage at the top, sections below |
| Primary navigation | Top-level menu items appearing on every page |
| Secondary navigation | Sub-pages within a section |
| Utility pages | Functional pages (contact, privacy policy, 404) that aren't primary content |
| Faceted organisation | Content organised along multiple independent dimensions, allowing different paths to the same content |

## Summary

A sitemap translates the conceptual relationships from your concept map into a concrete page hierarchy. It's a planning and communication tool — not a final product. Build it iteratively, keep it shallow (2–3 levels), use user-friendly labels, and validate it against real user tasks. The sitemap is the blueprint your designers, developers, and content creators will build from.
