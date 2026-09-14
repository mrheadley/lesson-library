# 0013: Content Versioning — None; Postgres is Staging, Git History is the Version History

**Context**: Lesson-forge may be re-run on a lesson topic that has already been published (e.g. correcting a sequencing issue found during a curriculum audit). A decision was needed on whether re-forging should overwrite existing content in place or create a distinct version pending separate re-publication.

**Decision**: **Re-forging overwrites the existing `LessonPlan`/Article row in Postgres directly. No versioning table or in-app history mechanism is built.**

This is safe specifically because of the export architecture (ADR 0012): Postgres holds only staging/working data, never the live public copy. The live public copy is the flat files already committed to the Astro site's repo, which are untouched by any Postgres write and only change when export is explicitly re-run. Consequently:
- A re-forge can freely overwrite Postgres without any risk of an in-progress edit becoming visible to the public mid-revision.
- "Rollback" requires no special mechanism — it is simply not re-running export, or reverting the Astro repo to a prior git commit if a bad export was already pushed.
- Version history of what was actually public, at any point in time, is exactly the Astro repo's git log — free, and already durable.

**Why**: Building a `LessonContentVersion` table and draft/live field-splitting logic would duplicate a guarantee the two-repo split already provides for free. The flat-file export boundary is a strictly simpler and equally safe substitute for in-database versioning at this project's scale.
