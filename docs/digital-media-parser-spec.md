# One-Off Task: Generate course.meta.yaml for Digital Media (CAPE) from 01-lesson-map.md

**Context**: Unlike the other two subjects, Digital Media's lesson map (176 lessons) is too large and structurally irregular (non-sequential lesson numbers within sections, e.g. Section 4 covers 17–18 and 21–24 but not 19–20) to hand-transcribe into `course.meta.yaml` reliably. The source document already has the structure needed to generate it programmatically.

**Task**: Write a one-off Node/TypeScript script (`scripts/parse-digital-media-map.ts` or similar — this is throwaway tooling, not part of the permanent ingestion pipeline) that reads `01-lesson-map.md` and outputs a valid `course.meta.yaml` for this subject.

## Source document structure to parse

- Topics are delimited by headers of the form:
  - `### Section N — Title (Lessons X–Y)`
  - `#### Section N Expansion — Title (Lessons X–Y)`
  Each such header starts a new topic. Use the section title (strip the "Section N — " / "Section N Expansion — " prefix and the trailing "(Lessons X–Y)") as the topic's `title`. Derive `id` by slugifying that title. Preserve document order for topic `order`.
- Within each topic, individual lessons are delimited by:
  `**Lesson N — Title**`
  Use N as the lesson number, and the title portion (after the em-dash) as the article `title`.
- A lesson block tagged `[SUMMATIVE]` (immediately after the title, e.g. `**Lesson 16 — Asset Creation: Project Pitching (Audio-Visual Pitch)** [SUMMATIVE]`) has **no corresponding lesson article file** — skip it when generating `articles:` entries for that topic. There are exactly 6 of these, at lessons 8, 16, 90, 153, 172, 176.
- There is also a `### Summative N (Lesson N)` header immediately preceding each summative lesson block — treat this as a topic-boundary marker only; do not create a topic entry for it. The summative's corresponding review article (see below) should be appended as the final article in the topic that precedes it.

## Filename and article mapping rules

- Content lesson N maps to file `lesson-{N, zero-padded to at least 2 digits}-article.md` — e.g. lesson 7 → `lesson-07-article.md`, lesson 125 → `lesson-125-article.md`. All referenced files are confirmed to exist (content complete through lesson 175).
- Each of the 6 summative slots (8, 16, 90, 153, 172, 176) has a corresponding `summative-0N-review-article.md` (numbered 1–6 in lesson order, not by lesson number) — e.g. lesson 8's summative is `summative-01-review-article.md`, lesson 16's is `summative-02-review-article.md`, and so on through lesson 176 → `summative-06-review-article.md`.
- Place each summative's review-article entry as the **last article** in the topic whose lessons it immediately follows (same pattern used in English B's manifest) — e.g. lesson 8 is the summative closing Section 1 (Lessons 1–7), so `summative-01-review-article.md` becomes the final entry in that topic, with the next topic (Section 2) starting fresh after it.
- Do **not** include `summative-0N-review-resources.md` files (teacher-only prep material) — these are out of scope per ADR 0016/0010, same exclusion as the other subjects.

## Output

- `subject: "Digital Media"`, `form: "Form 6"`, `slug: digital-media-form-6`.
- Same YAML shape as the English B and Digital Citizenship manifests: `topics: [{ id, title, order, articles: [{ file, title, slug, order }] }]`.
- Slugify article titles for the `slug` field (lowercase, hyphenated, strip punctuation).
- Write the result to `course.meta.yaml` and print a summary count (topics, articles, summative reviews included) so Mark can sanity-check totals before dropping it into the subject folder.

## Corrections from first parser run

- **Target count was wrong in the original spec.** Correct math: 176 total lessons − 6 summative slots (8, 16, 90, 153, 172, 176) = 170 content lessons + 6 summative reviews = **176 total article entries**. (The original "181" was a miscalculation — ignore it.)
- **Lesson 36** has no `**Lesson 36 — ...**` detail block in the per-lesson detail section, but it exists in the lesson table and has `lesson-36-article.md` on disk. Parser must fall back to the summary table (the `| N | Content | Topic |...` rows near the top of the document) for title/topic-placement whenever a lesson number has no matching detail block, rather than silently skipping it.
- **"### Course Review (Lessons 173–176)"** is a real topic — it just doesn't match the `### Section N — Title` naming pattern. Widen the topic-header match to also accept `### Course Review (Lessons X–Y)` as its own topic (title: "Course Review"), not folded into the preceding topic.
- **Lessons 145, 146, 147 are deliberately excluded — not a gap.** These are multi-part project/workshop days ("Mobile App Development Project: Concept to Prototype" / "Refinement & Testing" and the related capstone lessons) with no standalone reference article produced, by design — the same pattern as a workshop/debate day in the other subjects' manifests. Skip these three lesson numbers entirely when generating `articles:` entries; do not treat their absence as an error.

**Corrected verification target**: 170 content lessons − 3 deliberately-excluded project days (145, 146, 147) = 167 content articles + 6 summative reviews = **173 total article entries**. This matches the 173 real, referenceable files already confirmed to exist on disk. If the script's count doesn't equal 173, stop and report the discrepancy rather than writing a mismatched file.
