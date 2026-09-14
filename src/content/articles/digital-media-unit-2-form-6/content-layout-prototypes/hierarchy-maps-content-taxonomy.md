---
title: "Hierarchy Maps & Content Taxonomy"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Content Layout Prototypes"
topicId: "content-layout-prototypes"
order: 4
---
# Hierarchy Maps and Content Taxonomy

## How Do You Decide What Goes Where?

You've built a sitemap that shows which pages exist and how they nest. But a deeper question underlies every sitemap decision: **how should content be classified?** If you have 50 recipes on a food blog, what system determines which ones appear under "Breakfast" vs. "Lunch"? If you have 200 products in an online shop, how do you decide whether to organise them by brand, by type, or by colour?

The answer is **content taxonomy** — the classification system that gives your site's structure its logic.

## What Is Content Taxonomy?

Taxonomy is the science of classification. In web design, content taxonomy is the system of categories, subcategories, and labels used to organise and group content. It defines how content is classified, named, and related within a site.

A good taxonomy does two things:
1. **It helps users find things.** Users should be able to predict where content lives based on category names.
2. **It accommodates growth.** When new content is added, it should slot into the existing structure without requiring a reorganisation.

### Taxonomy vs. Folksonomy

There's a key distinction:

- **Taxonomy** is a controlled, predefined system of categories — created by the site's designers and maintained consistently. Think of it as the Dewey Decimal System of your website.
- **Folksonomy** is user-generated categorisation — tags, hashtags, and labels created by users organically. Social media platforms thrive on folksonomies. They're flexible but messy.

Most websites use a **taxonomy** for their primary structure (navigation, categories) and may allow **folksonomy** features (tags, user-generated labels) for secondary discovery.

## Card Sorting: Building Taxonomy from Users' Minds

The most reliable way to develop a taxonomy is **card sorting** — a user research method where participants group content topics into categories that make sense to *them*.

### How It Works

Write each content topic on a separate card (or digital equivalent). Give the cards to users and ask: "Group these into categories that make sense to you." Then ask them to name each category.

There are three types:

| Type | How It Works | Best For |
|------|-------------|----------|
| **Open** | Users create their own categories from scratch | New products, exploring unknown mental models |
| **Closed** | You provide predefined categories; users sort cards into them | Redesigns, validating existing structure |
| **Hybrid** | You provide some categories; users can add new ones | Refining an existing taxonomy without constraining users |

### Why It Works

Card sorting reveals how your *actual users* think about your content — which is often very different from how the internal team thinks about it. A school's administration might organise content by department ("English," "Science," "Math"), but students and parents might think by need ("Homework Help," "Exam Dates," "Class Schedule").

## Hierarchy Maps: Visualising the Structure

A **hierarchy map** is a specific type of sitemap that focuses on the parent-child nesting structure. It shows which pages are children of which sections, and how deeply content is organised.

The hierarchy map helps you answer:
- How many levels deep does this site go?
- Are any sections disproportionately deep or shallow?
- Where does content naturally nest, and where does it need cross-linking?

### The Three-Click Guideline

A useful rule of thumb: users should be able to reach most content within **three clicks** from the homepage. This isn't an absolute law — some content legitimately lives deep in a hierarchy — but if important content requires four or five clicks, consider adding alternative paths (cross-links, search, mega menus).

### Depth vs. Breadth

There's a trade-off between deep hierarchies (many levels, narrow sections) and flat hierarchies (few levels, many items per level):

- **Deep hierarchy**: Home → Products → Electronics → Phones → smartphones → Brand → Model
- **Flat hierarchy**: Home → Phones → iPhone 15 / Galaxy S24 / Pixel 8

Flat hierarchies with strong cross-linking are generally easier to navigate than deep hierarchies. The exception is very large sites (500+ pages), where some depth is necessary to keep section sizes manageable.

## Types of Classification

### Hierarchical Classification
A single tree structure where content has one clear parent. Every item belongs to exactly one branch.

Example: A school site where "Exam Schedule" lives under "Academics" — it can't also live under "Student Life" without creating confusion.

### Faceted Classification
Content is organised along **multiple independent dimensions** (facets). A single recipe might be classified by:
- **Meal type**: Breakfast, Lunch, Dinner
- **Cuisine**: Italian, Thai, Mexican
- **Dietary need**: Vegetarian, Vegan, Gluten-free

Each facet creates a different path to the same content. This is how most modern e-commerce sites and recipe databases work.

## Worked Example: School Website Taxonomy

Let's say you're building a school website. You could organise the "Academics" section in multiple ways:

**By Department**: English, Science, Mathematics, History, Art
**By Level**: Year 7, Year 8, Year 9, Year 10, Year 11, Year 12
**By Need**: Homework Help, Exam Preparation, Course Selection, University Applications

A card sort with students would reveal which structure matches their mental model. If most students say "I need help with my Year 10 Science homework," they're thinking in terms of level + subject — suggesting a two-dimensional (faceted) approach might work better than a single hierarchy.

## Worked Example: Gaming Blog Taxonomy

For a gaming blog, the top-level taxonomy might be:
- **Reviews** (sub: By Platform: PC, Console, Mobile | By Genre: RPG, FPS, Strategy)
- **News**
- **Guides**

The "By Platform" and "By Genre" facets mean a single review can be found through multiple paths — a PC RPG review appears under both "PC" and "RPG."

## Common Misconceptions

### "The taxonomy should reflect our org chart"
Content should be grouped by how *users think about it*, not by which department created it. A parent browsing a school site doesn't care that "Exam Schedule" is managed by the Academic Office — they care that it exists and they can find it.

### "Deeper nesting means better organisation"
Deeper nesting makes content harder to find. If you find yourself at four or five levels, consider whether the content can be reorganised into a flatter structure with better cross-linking.

### "Taxonomy is set once and never changes"
Good taxonomy is a living system. As content grows, user needs evolve, and new content types appear, the taxonomy needs periodic review. Plan for iteration, not permanence.

## Key Terms

| Term | Definition |
|------|-----------|
| Taxonomy | A classification system — categories and subcategories used to organise content |
| Controlled vocabulary | A predefined, standardised set of labels used consistently across a site |
| Folksonomy | User-generated tags and categories (e.g. hashtags) |
| Faceted classification | Organising content along multiple independent dimensions |
| Card sorting | A research method where users group content into categories |
| Orphan content | Content with no clear parent category or unreachable through navigation |

## Summary

Content taxonomy is the classification system that gives your site's structure its logic. By using card sorting to understand how users naturally categorise content, and by choosing between hierarchical and faceted classification based on the content's nature, you build a structure that feels intuitive. The goal is a taxonomy that helps users predict where things are, accommodates growth, and reflects users' mental models — not the internal org chart.
