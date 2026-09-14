# 0011: Publish Workflow — Manual Review & Toggle Inside Teacher-Assistant

**Context**: Reference Articles and Course Outlines produced by lesson-forge should not automatically become public the moment a pipeline run completes — the teacher actively audits and revises this content (e.g. the Form 1 English B Greek Myths audit found missing chapters and sequencing issues) and needs a review step before anything goes live to students.

**Decision**:
- All lesson-forge output relevant to public content (Reference Articles, Course Outlines) lands in Postgres in a **draft** state by default (e.g. `published: boolean`, default `false`, plus `publishedAt: DateTime?`).
- Review and the publish toggle live **entirely inside teacher-assistant** — no separate admin panel or login for the public site. The public Astro site carries no authentication code at all (per ADR 0009).
- Publishing an item is a manual, explicit admin action taken in teacher-assistant. It does not by itself push content live — it marks the row as publishable; the export step (ADR 0012) is what actually produces the live public files, and is triggered separately (by a button, which may immediately follow a publish action, or by the standalone CLI script).

**Why**: Reusing teacher-assistant's existing Better-auth session (ADR 0007) avoids building and maintaining a second auth system for what would otherwise be a "just show articles" static site. Keeping the public site fully auth-free keeps its attack surface and complexity minimal, consistent with it being a static, serverless deployment.
