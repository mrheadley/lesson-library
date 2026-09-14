---
title: "Summative Assessment 3: Web Design — Review Article"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Trends in Web Publishing"
topicId: "trends-in-web-publishing"
order: 7
isReview: true
---
# Summative Assessment 3: Web Design — Review Article

## What This Summative Covers

Summative 3 brings together everything from **Section 5 — Web Design, Structure & Digital Content Production**. It is sat in a single 35-minute period, with up to 30 minutes of assessment, so your preparation happens here, independently. This review is your study guide — it does not re-teach the lessons; it connects them, flags the places students most often stumble, and shows you the one pipeline that runs through every topic.

The assessment blends two kinds of knowledge:

- **Practical web-design knowledge** — how you plan a small multi-page site (site map → wireframe) and how you build a page with HTML and CSS.
- **Conceptual/strategic knowledge** — how you choose a form of publishing, a hosted platform, a WCM, and how you judge a web-publishing trend.

The single idea that ties it all together: **content layout prototypes define the structure; HTML/CSS realise it; UX/UI shapes how people experience it; publishing platforms and WCM deliver and manage it; and trends explain the forces reshaping all of it** (Lesson 89). Hold on to that sentence — everything below hangs off it.

---

## Key Concepts Review

### Content Layout Prototypes: Plan Before You Build

Section 5 opens with four planning tools that build on one another (Lessons 19, 41–46). A **concept map** brainstorms what content exists and how it relates (nodes, labelled links, hierarchy, cross-links — it reveals redundant and orphaned content). A **site map** turns those relationships into a concrete page hierarchy: which pages exist and how they nest, keeping most content within **three clicks** of home and limiting depth to 2–3 levels (Lesson 43, 44). A **navigational chart** plans how users move — global (5–7 items max), local, utility, and breadcrumb navigation (Lesson 42). A **hierarchy map / taxonomy** decides relative importance on a page and how content is classified — hierarchical vs. faceted, guided by card sorting with real users (Lesson 44).

**Your practical takeaway:** for a small multi-page site the convention is a minimum of **four pages — Home, About, one content/gallery page, and Contact** (Lessons 65, 89). Plan structure **first**, wireframe **second** — never wireframe without a site map. Keep wireframes **low-fidelity** and rough on purpose; rudeness invites structural feedback, and structure is the cheapest thing to change (Lessons 65, 89).

### Digital Content Production Tools & Techniques

Producing web content means capturing, editing, and optimising images, audio, and video (Lessons 25, 47–52). The equipment myth is the biggest player here: **your smartphone is enough** — composition, lighting, and storytelling matter more than specs (Lessons 25, 47). The production cluster runs on three ideas:

- **File formats and compression** — JPEG for photos, PNG for transparency, WebP (25–35% smaller) for everything, SVG for vector logos/icons (Lessons 25, 47, 52). Export images under ~200KB at 80–85% quality in **sRGB**; keep the working file, export the deliverable (Lesson 48).
- **Non-destructive, optimised workflow** — GIMP/Photopea crop → adjust → sharpen → export; Audacity trim → reduce noise → compress → normalise → export MP3; DaVinci Resolve import → trim → cut → title → colour → export H.264/MP4 (Lessons 48, 49, 50).
- **Web optimisation** — resize to display size, use `srcset`, lazy-load below-the-fold images, host video on YouTube/Vimeo and embed instead of self-hosting (Lessons 51, 52, 55).

In the Caribbean context this is not just good practice — with 72–78% of traffic mobile and data costs real, a heavy page is a design failure (Lessons 25, 26, 52).

### HTML & CSS Fundamentals: Structure and Style

HTML is a **markup language** (structure), not a programming language; CSS is presentation. The separation is the foundation (Lessons 26, 53). Key things to know cold:

- **Document skeleton:** `<!DOCTYPE html>`, `<html>`, `<head>` (with the **viewport meta tag** — mandatory for mobile) and `<body>` (Lessons 26, 53).
- **Semantic HTML** over `div` soup: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` — better for accessibility and SEO (Lessons 26, 53). Use one `<h1>` per page, never skip heading levels (Lesson 54).
- **Text and media elements:** headings, paragraphs, lists, semantic emphasis (`<strong>`/`<em>`), tables for tabular data only, `alt` on every `<img>`, responsive images via `srcset`, `<video>`/`<audio>` with multiple sources, descriptive link text (Lessons 54, 55, 56).
- **CSS:** selectors (element, class — preferred, ID), the **box model** (content → padding → border → margin), specificity, and **`box-sizing: border-box`** set globally to avoid width overflow surprises (Lessons 26, 57).
- **Layout:** Flexbox for everyday layout (`display: flex`, `justify-content`, `align-items`, `gap`); position (`relative`/`absolute`/`fixed`/`sticky`) sparingly (Lesson 58).
- **Responsive design:** mobile-first — base styles for phones, `min-width` media queries to scale up; relative units (`%`, `rem`, `vw`); the viewport tag; only 2–4 breakpoints (Lessons 26, 58, 59).

### UX/UI & Usability

UX is the whole experience; UI is the visual layer. UI is a subset of UX — a beautiful but confusing site fails (Lessons 27, 61). Cluster:

- **UX and user-centred design:** start from users, not the org chart; Nielsen's 10 heuristics are your evaluation toolkit; **POUR** accessibility (Perceivable, Operable, Understandable, Robust) and WCAG AA — contrast 4.5:1, keyboard navigation, alt text, focus indicators, skip-link (Lessons 27, 60, 63).
- **UI visual hierarchy:** size, colour/contrast, position, whitespace, and weight direct the eye; F- and Z-pattern scanning; **8pt grid**; one or two typefaces; restrained colour with the saturated accent reserved for the primary CTA (Lesson 61).
- **Responsive across devices:** mobile-first at 375px → 768px → 1024px+; fluid grids; LCP under 2.5s; DevTools plus real-device testing (Lessons 62).
- **Testing:** heuristic evaluation + think-aloud with 3–5 users + accessibility audits; card sorting/tree testing validate the IA; the RITE method iterates (Lessons 60, 64).

### Forms of Digital Publishing

Digital publishing takes many forms — websites, blogs, e-books, podcasts, video channels, social media — each with strengths, weaknesses, and risks (Lessons 28, 66–71). The strategic core is **"rented land" vs. "owned land"**: social platforms algorithmically control your reach and can take your audience; a website and an email list are yours. The strongest publishers use both — social for discovery, website as home base (Lessons 28, 70). Know the comparison: websites (control, SEO, maintenance), blogs (frequent updates, lower barrier), e-books (EPUB reflowable, not just PDFs), podcasts (intimate, low bandwidth), YouTube (reach, algorithm-dependent) vs. TikTok (virality), social media (reach but no ownership). Security: HTTPS for any site collecting data, copyright, and platform risk are everyone's responsibility (Lessons 28, 69).

### Hosted Platforms & Deployment

Hosted platforms trade **control for convenience** — no servers, low barrier, built-in audience — but bring vendor lock-in, limited customisation, and shared failure (Lessons 29, 72). Different forms deploy differently: blogs (WordPress.com/Blogger/Medium — three philosophies of ownership, simplicity, distribution), video (YouTube for reach and SEO vs. Vimeo for professional, ad-free portfolio — they are *different platforms*, not a small and a big YouTube), streaming (Twitch via OBS, prioritising consistency and community over view counts), e-books (Amazon KDP vs. Smashwords/Draft2Digital for the non-Amazon ecosystem) (Lessons 29, 73, 74, 75, 67).

**Choosing a platform is a strategic decision** — score candidates on content type, audience behaviour, budget, technical skills, timeline, and monetisation, and always verify **export capability** and **own your domain** (Lessons 70, 71, 76).

### Web Content Management (WCM)

A CMS separates content creation from web development. WCMs sort into **three families** (Lessons 30, 78–83):

- **Traditional web CMS** (WordPress, Drupal, Joomla) — monolithic, everything in one box, best for non-developers and small sites; WordPress powers ~43% of the web.
- **Enterprise WCM** (Adobe Experience Manager, Sitecore) — governance, four-eyes approval, workflows, audit trails, versioning; $20k–$200k+/yr, overkill for small projects (Lessons 78, 81).
- **Headless CMS** (Contentful, Sanity, Strapi) — content served via API to any frontend; "create once, publish everywhere," but you must build the frontend (Lessons 79, 81).

Select by **classify → evaluate → choose**: sort the problem into a family, then score candidates on TCO, ease of use, extensibility, scalability, security, support/community, and hosting — not brand familiarity (Lesson 81). Every CMS is a layered stack (server → database → app → theme → plugins); "the CMS" is not one program (Lesson 82).

### Trends in Web Publishing

Trends meet users where they already are (Lessons 31, 84–87): **PWAs** (installable, offline-capable — ideal for low-bandwidth Caribbean users), **serverless** computing (pay per use, auto-scaling, vendor lock-in and cold-start costs), **JAMstack**-style pre-rendered architecture (the label faded, the ideas became the default under "headless"/"composable"/"edge-first"), **AI-generated content** (AI drafts, humans edit and verify — unedited "AI slop" underperforms), and **voice search** (plateaued near 20% but important for snippet-friendly answers).

**Judging trends is a skill** (Lessons 85, 86, 87): trace hype with the **Gartner Hype Cycle**, check real adoption with Rogers' **diffusion curve**, and scrutinise evidence with **CRAP + SIFT** and triangulation (two independent sources beat one flashy number). Always stress-test a global trend against a **Caribbean reality check** — bandwidth, data costs, device mix. Trends that are quietly infrastructure (HTTP/3) beat loudly promised ones that collapsed (Web3).

---

## Likely Trouble Spots

### Confusing the Planning Tools
Students mix up the site map and the concept map. **Concept map = what content exists and how it relates.** **Site map = which pages exist and how they nest.** The navigational chart maps *user movement*; the hierarchy map sets *page-level importance*. They are a sequence — concept map → site map → navigational chart → hierarchy map — not interchangeable names for the same sketch (Lessons 19, 45).

### "HTML is programming" / "CSS controls structure"
HTML is markup that describes *what* content is; it does not control how it looks, and it is not the same as JavaScript (which does behaviour). CSS controls presentation. The most common CSS breakage: forgetting **`box-sizing: border-box`** so padding inflates widths and causes overflow — set it globally on the first line of every stylesheet (Lessons 26, 53, 57).

### Treating Ubiquity as Strategy
"Everyone uses WordPress" is a habit, not a decision. Similarly, "the most popular platform is best" and "be on every platform" are both wrong — popularity buys cheap support but says nothing about fit, and spreading thin produces mediocre results. Choose the **simplest platform that meets the actual requirement**, master 2–3 channels, and always own your audience relationship (Lessons 81, 76, 70).

### Renting Your Audience Without Knowing It
Building only on social media means your reach lives at the platform's pleasure — an algorithm change or shutdown can erase it overnight (the Vine lesson). Mitigate with an owned site, an email list, and mastered export paths. Related: **not verifying export capability** before committing (Lessons 28, 70, 72).

### Treating Every Trend as Fact and Every Fad as Future
Two errors at once (Lessons 86, 87): repeating one impressive number without checking its source/date, and assuming every "future of the web" claim is imminent. Run every claim through CRAP + SIFT, triangulate, and keep the hype cycle in mind — PWA "failed" yet quietly became the right tool in clear niches.

### Skipping the Mobile-First Reality
Designing for the desktop and shrinking down is not responsive design. In the Caribbean, 72–78% of traffic is mobile; test at 360–375px, start mobile-first, include the viewport tag, and optimise media or the site simply fails for most of your audience (Lessons 26, 31, 52).

### Confusing the Three WCM Families and the HTML/CSS Separation
Enterprise WCM is not "an expensive WordPress" — it adds governance and compliance the small tool lacks. Headless still has a full admin backend (just no default frontend). And "headless" ≠ "no database." Match the architecture to the problem (Lessons 78, 79, 81, 82).

---

## How the Topics Connect

The whole section is **one production pipeline: PLAN → PRODUCE → DESIGN → PUBLISH → ANTICIPATE** (Lesson 89). Follow a single thread across it, from smallest to largest scale:

**A site is planned, then built, then published.** Your **site map and wireframes** (PLAN) directly become the containers you mark up with **semantic HTML** and lay out with **CSS** (PRODUCE). The **UX/UI** decisions — hierarchy, contrast, mobile-first, accessibility — are the same decisions you sketched in the wireframes and annotated into states (DESIGN). That page is then deployed through a **hosted platform** and managed in a **WCM** chosen by classify-evaluate-choose (PUBLISH). Finally, **trends** — PWA offline caching, AI workflow, mobile-first — justify the choices you made all the way through (ANTICIPATE). Lesson 19's prototype becomes Lesson 89's web design project.

**Cross-cutting threads you can cite:**

- **Content layout ↔ HTML/CSS layout.** The three-click rule and 5–7-item global nav from the planning lessons become the `<nav>` list and semantic structure in HTML (Lessons 42, 43, 54). The hierarchy map's primary/secondary/tertiary becomes visual hierarchy in CSS and UI (Lessons 44, 61).
- **Production tools ↔ responsive HTML.** The resize/WebP/`srcset` optimisation from the media lessons is literally the `srcset`, `loading="lazy"`, and picture-element markup in HTML (Lessons 52, 55, 56).
- **UX/UI ↔ HTML/CSS.** Accessibility is not a separate topic: POUR, contrast, alt text, keyboard nav, and semantic HTML are one principle seen from the design and the code side (Lessons 61, 63, 26, 53).
- **Publishing forms ↔ platforms ↔ WCM.** Understanding a form (blog, podcast, e-book) tells you which platform fits, and the WCM family you choose matches the same scale question — a personal blog is a traditional-CMS problem, a ministry is enterprise, an airline is headless (Lessons 28, 29, 30, 81).
- **Trends ↔ everything.** Mobile-first explains why you wireframe at 375px; bandwidth explains why you optimise media; AI explains the content workflow; PWAs explain a delivery choice. The trends are not trivia — they are the *rationale* for design decisions (Lessons 31, 84, 89).

---

## Final Preparation Tips

1. **Walk the pipeline on one imaginary project.** Take a four-page site (Home, About, Gallery, Contact). Draft its site map, sketch a low-fi wireframe of the Home page at 375px, then write the HTML (`<nav>`, `<main>`, semantic tags, viewport meta, one `<h1>`) and a mobile-first CSS rule. Doing it once end-to-end beats re-reading the notes.

2. **Practise the distinctions that repeat.** Site map vs. concept map; HTML vs. CSS vs. JS; UI vs. UX; margin vs. padding; `border-box` on vs. off; WordPress.com vs. WordPress.org; YouTube vs. Vimeo; hosted vs. self-hosted; traditional vs. enterprise vs. headless WCM; hype vs. substance. If you can explain the difference in a sentence, you understand it.

3. **Know the "why," not just the "what."** "I set `box-sizing: border-box` because otherwise padding expands the width and breaks the layout" is worth more than "I used border-box." Justify platform and WCM choices against explicit criteria (cost, control, scalability, skills, ownership), not popularity.

4. **Justify choices with the Caribbean context.** Mobile-first, optimised media, data-conscious design and accessible, snippet-friendly content are *rationales*, not add-ons — use them to justify decisions and to weigh a trend.

5. **Treat trend claims with the research toolkit.** For any trend, run CRAP + SIFT, triangulate the source, place it on the Gartner hype cycle, and ask whether it holds for a Caribbean audience. A plain, well-sourced claim beats a flashy, unsourced one.

6. **Keep the wireframe rough.** For the practical part, low-to-mid fidelity with annotated states (default, empty, error, success) and a flow review is exactly what the assessment is looking for — polish is not the target, structure and reasoning are.

---

## Summary

Summative 3 assesses the whole of Section 5 as **one production pipeline: plan → produce → design → publish → anticipate**. Master four planning tools, real HTML/CSS semantics and layout, UX/UI and accessibility, the forms of publishing, platform and WCM selection, and trend analysis — then connect them. The persistent traps are confusing the planning tools, treating HTML as programming, mistaking popularity for fit, renting your audience unknowingly, treating trends as facts, skipping mobile-first, and mixing up the WCM families. Prepare by running one small site through the full pipeline and practising the distinctions above. Structure and reasoning beat decoration every time.
