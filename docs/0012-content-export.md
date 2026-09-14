# 0012: Content Export — Flat-File Generation to Astro Repo, Full Regenerate

**Context**: The public Astro site (ADR 0009) has no database connection. Published content (ADR 0011) living in Postgres must be turned into the flat markdown/frontmatter files Astro's content collections consume, and delivered into the Astro site's git repo.

**Decision**:
- **Shared export function**, owned by teacher-assistant (co-located with Prisma and DB credentials — no other codebase is granted DB access). Given all currently-published Articles and Course Outlines, it:
  1. Queries Postgres for all rows where `published = true`.
  2. Writes one markdown file per Article/Course Outline, with frontmatter encoding taxonomy fields (subject, form, topic, tags) so Astro's routing can mirror the taxonomy path directly (`/subject/form/topic/article-slug`, per taxonomy in ADR 0010).
  3. Commits and pushes the changes to a local clone of the Astro site's repo, using a git credential scoped only to that repo.
- **Two thin triggers, one implementation**: (a) a button in teacher-assistant's admin UI, and (b) a standalone CLI script for manual/scheduled runs. Both call the same underlying export function — no duplicated logic.
- **Full regenerate every run**: the export always processes *all* currently-published content from scratch, rather than tracking incremental changes. Git naturally no-ops on unchanged files, so this stays cheap at the current content scale.
- A git push to the Astro repo is the only deploy trigger needed — the static host's own build-on-push behavior (Netlify/Vercel/Cloudflare Pages/GitHub Pages) handles the rebuild. No custom webhook infrastructure required.

**Why**: Confining DB credentials to one codebase (teacher-assistant) is a smaller, safer surface than granting them to the Astro repo too. A single shared export function invoked by two thin triggers avoids logic drift between "publish from the UI" and "run it manually." Full regenerate is simple, hard to get wrong, and appropriate at current content volume; incremental export can be revisited if the content library grows substantially.
