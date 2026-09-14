# 0010: Content Model & Taxonomy — Subject → Form → Topic → Article, with Triad Linking

**Context**: Lesson-forge's four-phase pipeline output must be split between admin-only working content and public-facing content, and the public content needs a structured way for students to browse it (per ADR 0009).

**Decision**:
- **Content type mapping**:
  - Lesson-forge Phase 4 (delivery-ready plan) → populates `LessonPlan` (existing entity, ADR 0003). Admin-only, lives entirely in teacher-assistant.
  - Research Notes → admin-only, lives in teacher-assistant, no public exposure.
  - Reference Article → **public**, once published.
  - Lesson Maps → **not a stored public or admin content type on their own**; used as working input, alongside the timetable, to build the Scheme of Work and Course Outline inside teacher-assistant.
  - Course Outline → **public**, once published, in addition to its existing internal role.
- **Triad linking**: one lesson-forge pipeline run produces one Reference Article + one set of Notes + one Lesson Plan, all describing the same lesson/topic. These three are linked by a shared lesson/topic identity (a foreign key, e.g. `lessonTopicId`), not by taxonomy. This lets the admin view all three side-by-side in teacher-assistant for comparison/editing.
- **Public taxonomy** (independent of the triad's linking key): `Subject → Form → Topic → Article`, where Topic is drawn from the Subject's Course Outline structure. Tags are a cross-cutting filter, not a hierarchy level (e.g. "persuasive writing" spanning multiple subjects/forms).
- **Multiple entry points**: Articles are independently browsable/searchable (not only reachable by drilling through a Course Outline). A Course Outline is one path in; direct Subject/Form/tag browsing and search (ADR 0014) are others.

**Why**: Separating the *linking key* (lesson identity, for admin comparison) from the *browsing facet* (taxonomy, for public navigation) avoids conflating two different jobs. Subject-first browsing matches how visitors (parents, students, colleagues) naturally think ("show me English B"), with Form as a strong secondary filter since subjects span forms unevenly. Reusing the Course Outline's existing topic structure as the taxonomy's Topic level avoids inventing and maintaining a second, parallel structure.
