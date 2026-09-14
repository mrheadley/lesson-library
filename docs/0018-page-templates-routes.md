# 0018: Public Site Page Templates & Routes

**Context**: Content collections (articles, courseOutlines) and the ingestion pipeline (ADR 0016, 0017) are working end-to-end. No pages/routes exist yet to actually render this content. Independent article discovery is handled entirely by search (Pagefind, ADR 0014) — no tag taxonomy is being built (explicitly decided against, to avoid an unpopulated data dimension).

**Decision**: Since Subject and Form are always 1:1 in practice (confirmed: no subject currently has multiple forms), the taxonomy collapses to a two-level structure for routing purposes — `course` (= Subject+Form, keyed by `subjectSlug`) → `topic` → `article`. The full Subject/Form fields remain in frontmatter for display, just not as separate route levels.

## 1. Schema addition: `isReview` field

Add to the `articles` collection schema in `src/content.config.ts`:
```ts
isReview: z.boolean().default(false),
```

Update `scripts/ingest.ts`: when processing a manifest entry whose `file` matches the `summative-*-review-article.md` pattern, set `isReview: true` in that article's generated frontmatter. All other articles get `isReview: false` (the schema default handles this if the field is simply omitted for non-review articles).

Re-run ingestion after this change so all three subjects' existing article files pick up the new field.

## 2. Routes

- **`/` (homepage)**: search bar (Pagefind UI) + one card per course. Each card shows the course's subject + form (e.g. "English B — Form 1") and links to `/<subjectSlug>/`. Card list is built by querying the `articles` collection for distinct `subjectSlug`/`subject`/`form` combinations, or equivalently by listing entries in the `courseOutlines` collection (one per course) — prefer the latter, since it's already exactly one entry per course.

- **`/<subjectSlug>/` (course page)**: renders the corresponding `courseOutlines/<subjectSlug>.md` entry — the linked table of contents built in ADR 0017. This page *is* the Course Outline; no separate outline route.

- **`/<subjectSlug>/<topicId>/` (topic page)**: lists all articles in the `articles` collection matching this `subjectSlug` + `topicId`, ordered by each article's `order` field. Each list item shows:
  - Article title (linked to `/<subjectSlug>/<topicId>/<articleSlug>/`)
  - A short excerpt (first ~150–200 characters of the article body, stripped of markdown formatting, truncated at a word boundary)
  - Position within the topic, e.g. "Lesson {order} of {total articles in this topic}" — computed from the existing `order` field and the topic's article count, not stored data
  - Estimated reading time, computed at build time from word count (standard ~200–250 wpm calculation)
  - A visible "Review" badge/label when `isReview` is `true`

- **`/<subjectSlug>/<topicId>/<articleSlug>/` (article page)**: renders the full article body. Should include simple prev/next navigation to the adjacent article in the same topic (by `order`), since this is a sequential reading experience.

## 3. Notes for implementation

- All routes are static (`getStaticPaths` generating one page per collection entry, or Astro's file-based dynamic routing equivalent) — consistent with the site's fully static architecture (ADR 0009).
- The `/<subjectSlug>/<topicId>/` route is the link target ADR 0017's Course Outline generation already points to — confirm those links resolve correctly against whatever this route's exact file path ends up being.
- No `/tags/` or `/articles/` flat-browse route — independent discovery is search-only, per explicit decision.

**Why**: Collapsing Subject/Form into one routing level matches the real data (no subject currently spans multiple forms) without discarding those fields from display or frontmatter. Deriving position and reading time at build time avoids storing data that's cheaply computable and would otherwise need to stay in sync manually. The explicit `isReview` field (set once, at ingestion time, since the script already knows which files are summative reviews) is simpler and more reliable than pattern-matching on title/slug text in the page template.
