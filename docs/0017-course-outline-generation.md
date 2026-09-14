# 0017: Course Outline Generation — Derived Output from Existing Manifests

**Context**: Per ADR 0010, Course Outlines are public content alongside Articles. Mark decided the public Course Outline should be a clean table of contents (topic titles and order only — no assessment dates, no narrative framing), with each topic title linking to that topic's article list. This content requires no new source data — every field it needs (subject, form, topic titles, topic order) already exists in each subject's `course.meta.yaml`.

**Decision**: Extend the existing `scripts/ingest.ts` (built in ADR 0016) to emit one additional file per manifest it processes — do not build a separate script or introduce a new manifest.

## Behavior to add

For each `course.meta.yaml` the script already reads, after writing that subject's article files, also write:

```
src/content/courseOutlines/<subjectSlug>.md
```

with frontmatter matching the `courseOutlines` collection schema already defined in `src/content.config.ts` (subject, subjectSlug, form), and a body consisting of an ordered list of the manifest's topics, each rendered as a link to that topic's article listing page:

```md
---
subject: "English B"
subjectSlug: english-b-form-1
form: "Form 1"
---
# English B — Form 1: Course Outline

1. [Foundations of Mythology](/english-b-form-1/foundations-of-mythology)
2. [Creation: Gaia and the Titans](/english-b-form-1/creation-gaia-and-the-titans)
3. [Prometheus and Pandora](/english-b-form-1/prometheus-and-pandora)
...
```

- Link paths follow the same `/subjectSlug/topicId` convention as the article URL structure (ADR 0012), pointing at the topic-listing level (not a specific article) — this assumes a topic-index page/route exists or will exist that lists all articles under that topic; if that route doesn't exist yet, flag it rather than link to a 404.
- Topic order in the list follows each topic's `order` field from the manifest, same as article ordering elsewhere.
- No assessment dates, summative markers, week numbers, or narrative text from the source outline documents are included — topic titles and links only, per Mark's explicit decision.
- This output is regenerated every ingestion run (full regenerate, consistent with ADR 0012's export policy) — it is fully derived, so there is nothing to preserve between runs.

**Why**: The Course Outline's public content is a strict subset of data the manifest already carries, so generating it as a second write inside the same script avoids a fourth data format or a redundant manual authoring step. Keeping it link-based rather than plain text makes it a genuine entry point into the taxonomy (per Mark's earlier decision that outlines are "one of several ways in," not the only one).
