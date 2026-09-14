# 0016: Initial Population — File-Based Ingestion (Pre-Database)

**Context**: No content exists in Postgres yet. Existing lesson-forge output lives in `Lessons/<SubjectForm>/output/03-articles/*.md`, one folder per Subject+Form combination, with plain markdown (no frontmatter, no taxonomy metadata). ADR 0012's export step assumes Postgres as the source; that doesn't exist yet, so the first population must read taxonomy from somewhere else without abandoning the target architecture.

**Decision**:

## 1. Per-subject manifest (interim taxonomy source of truth)

Add one `course.meta.yaml` at the root of each `Lessons/<SubjectForm>/` folder:

```yaml
subject: "English B"
form: "Form 1"
slug: english-b-form-1
topics:
  - id: greek-myths
    title: "Greek Myths"
    order: 1
    articles:
      - file: lesson-01-article.md
        title: "What is a Myth?"
        slug: what-is-a-myth
        order: 1
      - file: lesson-02-article.md
        title: "..."
        slug: "..."
        order: 2
```

This manifest carries exactly the fields ADR 0010's `Subject/Form/Topic/Article` model needs. When Postgres is introduced, this file becomes seed data (a straightforward script converts each `course.meta.yaml` into `Subject`/`Form`/`Topic`/`Article` rows) rather than being discarded.

Path convention: manifest lives at `Lessons/<SubjectForm>/course.meta.yaml`; article files it references are relative to `Lessons/<SubjectForm>/output/03-articles/`.

## 2. Ingestion script with a swappable source

Build the ingestion/export logic (owned by teacher-assistant, per ADR 0012) around one interface:

```ts
type ContentItem = {
  subject: string; subjectSlug: string;
  form: string;
  topicId: string; topicTitle: string; topicOrder: number;
  title: string; slug: string; order: number;
  body: string; // raw markdown content
};

function getPublishedContent(): ContentItem[]
```

**Phase 1 (now)**: `getPublishedContent()` walks `Lessons/*/course.meta.yaml`, reads each referenced article file's raw markdown, and returns the flattened list — no database involved, no "published" filter yet (everything present is treated as publishable, since manual review of the manifest IS the publish step for now).

**Phase 2 (later, per ADR 0012)**: `getPublishedContent()` is swapped to query Postgres for `published = true` rows instead. Everything downstream — writing Astro files, frontmatter shape, git commit/push — is unchanged, since the function's return shape doesn't change.

## 3. Target Astro content structure

```
src/content/
  articles/
    <subjectSlug>/
      <topicId>/
        <articleSlug>.md
```

Each written file gets frontmatter injected by the ingestion script:

```yaml
---
title: "What is a Myth?"
subject: "English B"
subjectSlug: english-b-form-1
form: "Form 1"
topic: "Greek Myths"
topicId: greek-myths
order: 1
---
<original markdown body, unchanged>
```

Course Outlines follow the same pattern once they exist as content: `src/content/courseOutlines/<subjectSlug>.md`.

URL routing (per ADR 0012's URL decision) derives directly from this path: `/subjectSlug/topicId/articleSlug`.

## 4. Manifest ownership going forward

Until Postgres is live, adding a new article means: drop the file in `output/03-articles/`, add an entry to that subject's `course.meta.yaml` (title, slug, order, topic). This is manual but small — a handful of lines per article — and it's the natural placeholder for what will later be "fill in these fields in the teacher-assistant UI, then hit publish."

**Why**: This lets the public site launch today, from files that already exist, without inventing throwaway scaffolding — the manifest and the ingestion function's shape are both direct previews of the Postgres-backed versions in ADR 0010/0012, not a separate system to migrate away from later. Folder = one Subject+Form pair (confirmed), so no per-file form-splitting logic is needed.
