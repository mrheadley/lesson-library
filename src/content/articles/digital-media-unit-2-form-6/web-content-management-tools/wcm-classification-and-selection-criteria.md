---
title: "WCM Classification and Selection Criteria"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Web Content Management Tools"
topicId: "web-content-management-tools"
order: 4
---
# WCM Classification and Selection Criteria

## Three Problems, Three Families

Choosing a Content Management System is not about picking a brand you have heard of. "Everyone uses WordPress" is not a strategy — it is a habit. In practice, every WCM currently in use sorts into one of three families, and each family is optimised for a different problem. Once you know which problem you are solving, the choice narrows to a shortlist of two or three genuinely plausible tools.

The decision is a three-step process: **classify** what the project needs, **evaluate** candidate platforms against explicit criteria, then **choose**. Get the order right and the tool mostly picks itself.

## Classifying: Which Family Fits?

Classification is really three questions: **who** manages the content, **which channels** the content must reach, and **how much technical control** the team wants.

- **Traditional or legacy web CMS** — a monolithic, all-in-one system where the management backend, the database, and the theme-based presentation layer ship together. Examples: WordPress, Drupal, Joomla. The content and the website are one package.
- **Enterprise WCM** — heavyweight, governed platforms for large multi-team organisations that need approval workflows, granular permissions, audit trails, digital asset management, and multi-site or multi-language control. Examples: Adobe Experience Manager (AEM) and Sitecore, both marketed now as Digital Experience Platforms (DXPs).
- **Headless (API-first) WCM** — a content repository with no built-in presentation layer at all. Content is served as data through REST or GraphQL APIs to whatever frontend you choose — a website, a mobile app, a digital sign. Examples: Contentful, Sanity, Strapi.

The family table:

| Family | Typical example | Strength | Main trade-off | Fits when |
|--------|----------------|----------|----------------|-----------|
| Traditional | WordPress, Drupal, Joomla | Everything in one box; huge ecosystem; cheap to start | Tied to one website; plugin sprawl | Sites edited by non-developers |
| Enterprise | AEM, Sitecore | Governance, personalisation, audit, multi-brand | Expensive to buy AND to operate | Ministries, banks, telecoms |
| Headless | Contentful, Sanity, Strapi | One article reaches every channel via API | You must build the frontend yourself | Apps + website + kiosks sharing content |

A school magazine run by student editors is a traditional-CMS problem. A government ministry that must approve every page in four languages with an audit log is an enterprise problem. A regional airline publishing a single article to its website, mobile app, and airport displays is a headless problem. Same task — "manage content" — three different tools.

## Evaluating: The Selection Criteria

Once classified, score candidates against an explicit checklist. The criteria that recur across vendor and analyst guidance are:

- **Cost — total cost of ownership (TCO), not the download price.** Faster to buy is not cheaper to own. A free open-source CMS still costs you hosting, a theme, plugins, and developer labour. Get the full five-year picture before comparing "free" against a subscription.
- **Ease of use for editors.** Who will actually log in and write? A volunteer at an NGO has no training budget; a ministry editor might complete a week-long course.
- **Extensibility.** Plugins, modules, and integrations. WordPress's ecosystem of 60,000+ free plugins makes feature breadth cheap — but it is also the main attack surface.
- **Scalability.** Traffic spikes, hundreds of thousands of content items, and structured, related content (a university course catalogue linking departments, courses, and lecturers).
- **Security posture.** Built-in safeguards versus an open plugin market you must keep patched. Plugin flaws drive most CMS hacks.
- **Support and community.** Tutorials, hiring, and long-term viability. A shrinking community (Joomla's, for instance) is itself a risk to price in — migrations happen, and lock-in is a criterion, not an afterthought.
- **Hosting.** Self-hosted on your own server, local, or a managed/SaaS service. Some platforms only exist as subscriptions.

Score them. A project needing French, Spanish, Dutch, and English with strict pre-publication approval scores AEM or Drupal high; the same matrix sinks them for a soca artist promoting an album, whose real requirement is "publish to my site, my YouTube feed, and my app in one pass" — headless territory.

## Classify → Evaluate → Choose: A Worked Scenario

The Caribbean Co-operative Society wants a site where staff on three islands post fundraising announcements and volunteers sign up to help, all on a small budget, with no developers on staff. **Classify:** single-language, five to ten editors, one channel (the website), low traffic. That is a traditional-CMS problem. **Evaluate:** WordPress scores top on ease of use, cost, and ecosystem; Drupal is over-engineered here. **Choose:** WordPress — and, crucially, a student asked to justify the pick can present the scored matrix rather than an opinion.

Run two contrasts through the same drill. A government ministry portal needs multilingual approval workflows and audit trails — **classify** as enterprise; **evaluate** AEM or Sitecore against Drupal; the deciding factors are governance depth and long-term budget, not popularity. A tourism board wants one article pushed to a website, an app, and digital signs at the harbour — **classify** as headless; **evaluate** Contentful, Sanity, or Strapi against the team's willingness to build a frontend.

Market share is context, not a verdict. WordPress powers roughly **42–43% of all websites** and about 59–61% of sites running a known CMS (W3Techs, 2025–2026); the share dipped slightly through 2026 as Wix and Shopify grew, so cited figures vary between ~41% and ~44% depending on the exact month — always quote a date with the number. Wix and Shopify are the fastest-growing named platforms. What the numbers really say is that popularity buys cheap support and hiring; they say nothing about whether a ministry should trust its audit trail to a blog CMS.

## Common Misconceptions

### "Enterprise WCM is just an expensive WordPress"
Enterprise platforms add workflow governance, personalisation, digital asset management, and multi-brand control that WordPress core does not offer. The premium buys process control, not features a brochure site would notice. Implementation costs for AEM-class systems often run from tens of thousands of dollars to six figures (vendor estimates — treat as indicative).

### "Headless means no content management"
Headless has a full admin backend — editors still log in to write and review. It simply ships with no default frontend, so nothing is rendered until you build or pick one.

### "Open-source equals free, so it is always cheapest"
The TCO of an open-source system includes hosting, themes, plugins, and developer time. Enterprise projects routinely outspend simpler systems five- or ten-fold.

### "Most popular means best fit"
Popularity helps with hiring and support. It does not make a government ministry's governance needs the same problem as a musician's promo site.

### "Selection is deciding the brand"
Selection is first clarifying requirements, then scoring candidates against them. The brand decision is the final step, not the first.

### "Headless is only for giant companies"
Small teams use Sanity or Strapi for portfolios and apps all the time. It is enterprise *tooling* that prices out small budgets, not headless generally.

### "Once chosen, a CMS is permanent"
Migrations happen. Vendor lock-in and a shrinking community are themselves selection criteria — Joomla's decline is a live example of a platform that still works but whose ecosystem is thinner every year.

## Key Terms

| Term | Definition |
|------|-----------|
| Traditional Web CMS | Monolithic CMS where management backend, database, and theme-based presentation ship together |
| Enterprise WCM | Large-scale, governed platform with approval workflows, permissions, versioning, and asset management |
| Headless WCM | Content repository with an API-only delivery layer and no built-in frontend |
| DXP | Digital Experience Platform — enterprise WCM plus personalisation and analytics |
| API-first | Designing content to be exposed through programmatic interfaces before any interface is built |
| TCO | Total cost of ownership — licence, hosting, themes, plugins, training, and maintenance over the lifetime |
| Content Modelling | Defining structured content types, fields, and relationships |
| Multi-User Workflow | The draft → review → approve → publish pipeline enforced by roles |
| Selection Criteria | The explicit requirement list candidate platforms are scored against |

## Summary

WCM decisions start from classification, not brand loyalty. Sort the problem into one of three families — traditional, enterprise, or headless — then score shortlisted platforms against explicit criteria: cost as TCO, ease of use for the real editors, extensibility, scalability, security, support and community, and hosting. Run that drill and the tool mostly chooses itself; skip it and you are arguing opinions. For a single site edited by non-technical staff on a small budget, a traditional CMS like WordPress is usually the answer; for governed multi-language portals, enterprise tooling; for content that must reach many channels at once, a headless backend with a "create once, publish everywhere" API.
