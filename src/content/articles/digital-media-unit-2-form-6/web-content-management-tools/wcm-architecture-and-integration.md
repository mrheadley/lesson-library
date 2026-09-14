---
title: "WCM Architecture and Integration"
subject: "Digital Media"
subjectSlug: "digital-media-unit-2-form-6"
form: "Form 6"
topic: "Web Content Management Tools"
topicId: "web-content-management-tools"
order: 5
---
# Inside a WCM: Architecture and Integration

## Every CMS Is a Layered Stack

The page you see in a browser is the last stage of work the CMS did behind the scenes. Every content management system rests on a layered stack: a **presentation layer** (the pages), an **application layer** (the logic that renders and processes), and a **database** (the storage). Understanding where each layer lives is what makes "monolithic" versus "headless" meaningful — and what makes an error message like "database connection error" actually diagnosable, because it points at one specific layer.

A CMS is not one program. It is a coordinated stack — web server, database engine, PHP (or similar) application layer, plugins, and theme. When a site breaks, one of those layers is usually at fault.

## The Database: Source of Truth

Everything a content site holds lives in structured tables. In a traditional CMS like WordPress (PHP + a MySQL-compatible database), the tables are the single source of truth:

- **wp_posts** — posts, pages, media items, **and revisions** (every edit history)
- **wp_options** — site settings: title, timezone, theme choice
- **wp_terms** — categories and tags
- **wp_users** — accounts and roles
- **meta tables** (wp_postmeta and friends) — the extra fields plugins and content types store

This is why version history works in a class wiki: two students editing the same page do not overwrite one another's work permanently, because each revision is a row being stored, not just displayed. A typical blog database stays comfortably small — well under 100 MB — until media and plugins pile up.

## Monolithic vs Headless: Two Delivery Designs

The architecture question is *where the presentation layer lives*. A **monolithic** CMS couples everything: WordPress runs on a LAMP-style stack (Linux, Apache, MySQL/MariaDB, PHP), and when a visitor requests a page, the server runs theme templates that query the database directly and returns finished HTML. A **headless** (fully decoupled) CMS strips the presentation layer away entirely: the same database and admin backend exist, but content is served as data through an API, and a separate frontend codebase — a website, an app, a kiosk — fetches and displays it.

| Dimension | Monolithic CMS | Headless CMS |
|-----------|----------------|--------------|
| Where content lives | Database (MySQL) | Database (same) |
| How pages are delivered | Server-rendered HTML from templates | API-fetched data; frontend renders |
| Frontend | Bundled themes, built in | Separate codebase you build |
| API | Optional add-on (still present) | The core delivery mechanism |
| Getting content to an app | Extra work | Native — the API *is* the delivery |
| Best for | One website, non-technical editors | Website + app + kiosk sharing content |

What students find counterintuitive: headless still has a database and a full admin backend — editors log in and manage content exactly as before. Only the presentation layer has been removed. The flip side of that freedom: with no default frontend, *someone* must build one.

## The Back Office and the Storefront

Every CMS has two faces. The **back office** (in WordPress, the `/wp-admin` dashboard) is where editors write, review, and publish. The **delivery** side is what visitors actually get. The web page is the *output* of a theme rendering database content — it is not the CMS itself. That is why two sites can share an identical database schema but look completely different: the theme supplies the appearance, the database supplies the substance.

## Templates and the Presentation Layer

The presentation layer turns content into pages through **templates**. A theme is a collection of template files that define where the header, menu, article text, sidebar, and footer appear on screen. Because content and layout are separate concerns, an organisation can change its entire look without touching a single post — which is exactly what a school magazine does when it swaps themes for carnival, or a ministry does when it rebrands.

## Plugins and Hooks

Extensibility in a CMS is not "editing the source code." It is the **plugin architecture** — installable modules protected by the platform's own seams. In WordPress those seams are **hooks**, of two kinds:

- **Action hooks** run code at a specific point — for example, send a notification email when a post is published.
- **Filter hooks** modify data in transit — for example, rewrite a heading, or alter how a plugin displays its output before it reaches the page.

A small student exercise drives this home: use a filter hook to customise a plugin's display, change one line of code, and watch the site update — all without touching WordPress core. This is the design that keeps core intact so updates can be applied and plugins can be switched off without breaking the platform. It is also why the plugin ecosystem is double-edged: about 60,000+ free plugins make capability cheap, but every installed plugin is an update obligation and a potential attack surface.

## APIs: REST and GraphQL

APIs are the integration backbone. A **REST API** exposes content as resources addressed by URLs using standard HTTP verbs. In WordPress it has been built in by default since version 4.7 (December 2016) at `/wp-json/`, in the `wp/v2` namespace — for example `https://sitename.org/wp-json/wp/v2/posts`. Open that URL in a browser and JSON arrives: posts, titles, authors, dates. Even the block editor (Gutenberg) uses the REST API internally for its own read/write operations.

Two security-relevant facts about REST: responses are JSON, and while **read** (GET) endpoints are usually public — the content is already public on the site, after all — **write** operations (POST/PUT/DELETE) require authentication. The API's existence is not a hole; the risk comes from misconfigured permissions or sensitive data registered without access checks.

**GraphQL** (arriving in WordPress via the WPGraphQL plugin) takes the opposite approach: one endpoint, and the client asks for exactly the fields it wants in one round trip.

| | REST | GraphQL |
|--|------|---------|
| Endpoints | Many fixed URLs | One flexible endpoint |
| Payload | Fixed — can over- or under-fetch | Exactly what you ask for |
| Caching | Simple, built into HTTP | Trickier, needs care |
| Best for | Simple single-resource fetches | Complex, related, multi-relation queries |

Neither wins outright — the right call depends on the query shape.

## Integrating Third-Party Tools

Integration with the outside software world happens at three seams:

- **Plugins and APIs** for software — payment gateways, e-commerce (WooCommerce), analytics, marketing automation
- **CSS and theme** for design — injecting your own look over a provider's embed
- **Files and configuration** for hosting — CDNs, caching layers, SSL certificates

Most integration is *configuration of a plugin or API call*, not custom programming. Accepting card payments on a school fundraising store is a plugin install and API-key setup, not a coding project. A **webhook** takes this further: the CMS fires an HTTP callback to another system when an event happens — for example, a build platform automatically regenerates a static-framework site every time a post is published.

The payoff of API-driven architecture is **"create once, publish everywhere."** A school news site writes one article; the website renders it immediately, and a companion mobile app pulls the same item from `/wp-json`. A band updates tour dates once; a festival kiosk and the band's app both update. The content is written once and the API becomes the delivery pipeline — which is why headless and API-first architecture is the enterprise trend, with specialists (Contentful, Sanity, Strapi) and traditional platforms (WordPress, AEM, Sitecore) all converging on it.

## Common Misconceptions

### "Headless means no database"
Headless CMS have the same databases and backends; only the presentation layer is removed. Content is still stored, edited, and versioned.

### "The website you see is the CMS"
The page is a theme rendering database content. Change the database directly and the site changes without the templates being touched.

### "Plugins modify WordPress core"
Plugins *hook into* core; core stays intact. That is why updates can be applied safely and plugins can be deactivated without breaking the platform.

### "REST is always better than GraphQL (or vice versa)"
They trade off. REST is simpler and easier to cache; GraphQL is more flexible and efficient for complex related data. The choice depends on the query shape.

### "Exposing the REST API is a security hole"
The API exists by default and returns already-public content. The danger is misconfigured write permissions and sensitive data registered without access checks — not the API's existence.

### "A CMS is one program"
It is a coordinated stack: server, database engine, application layer, plugins, theme. The classic "database connection error" is a database-layer failure, not a mystery.

### "Third-party integration requires coding"
Most integration is configuration of plugins and APIs. Custom code is only needed when no off-the-shelf seam exists.

## Key Terms

| Term | Definition |
|------|-----------|
| Monolithic CMS | One application bundling management, database, and presentation on a single server |
| Headless CMS | Content backend exposing content via API, with no presentation layer |
| Source of Truth | The database, where all content and settings actually live |
| REST API | Web API exposing resources as URLs with HTTP verbs; in WordPress, `/wp-json` |
| GraphQL | Query language where clients request an exact data shape from one endpoint |
| Endpoint | A specific API URL performing one operation, e.g. `/wp-json/wp/v2/posts/42` |
| Hook | A plugin seam — actions run code, filters change data |
| Webhook | An HTTP callback the CMS fires at third-party systems on an event |
| JAMstack | JavaScript + APIs + pre-built Markup served as static files from a CDN |
| CDN | A distributed network of cached servers delivering assets from near the visitor |

## Summary

Every CMS is a layered stack — presentation, application, database — with the database as the single source of truth for content, settings, revisions, and users. Monolithic architectures couple that stack and render pages server-side from theme templates; headless architectures keep the content backend but deliver content as data through REST or GraphQL APIs to any frontend. Extensibility comes from plugin architectures built on hooks, not core edits, and third-party tools integrate through plugins, themes, and hosting configuration rather than custom code. Understand the layers and the phrase "create once, publish everywhere" stops being marketing and becomes a description of the pipeline.
