import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { dump } from 'js-yaml';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const subjectDir = path.join(projectRoot, '..', 'digital-media');
const mapPath = path.join(subjectDir, 'output/01-lesson-map.md');
const articlesDir = path.join(subjectDir, 'output/03-articles');
const outPath = path.join(subjectDir, 'course.meta.yaml');

const SUMMATIVE_LESSONS = [8, 16, 90, 153, 172, 176];
const EXCLUDED_LESSONS = [145, 146, 147];
const EXPECTED_TOTAL = 173;

type ArticleEntry = {
  file: string;
  title: string;
  slug: string;
  order: number;
  lesson?: number;
};
type Topic = { id: string; title: string; order: number; articles: ArticleEntry[] };

function slugify(s: string): string {
  return s
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function topicTitleFromHeader(line: string): string | null {
  const section = line.match(/^#{3,4} Section \d+(?: Expansion)? — (.+?) \(Lessons .+\)$/);
  if (section) return section[1];
  const review = line.match(/^#{3,4} Course Review \(Lessons .+\)$/);
  if (review) return 'Course Review';
  return null;
}

function lessonFromHeader(line: string): { n: number; title: string; summative: boolean } | null {
  const m = line.match(/^\*\*Lesson (\d+) — (.+?)\*\*( \[SUMMATIVE\])?$/);
  if (!m) return null;
  return { n: Number(m[1]), title: m[2], summative: Boolean(m[3]) };
}

const lines = (await readFile(mapPath, 'utf8')).split('\n');

const summaryTable = new Map<number, string>();
let inSummaryTable = false;
for (const rawLine of lines) {
  const line = rawLine.trim();
  if (line === '## Assignment Placement') inSummaryTable = false;
  if (!inSummaryTable && /^\|\s*Lesson #\s*\|/.test(line)) inSummaryTable = true;
  if (!inSummaryTable) continue;
  const parts = line.split('|').slice(1, -1).map((p) => p.trim());
  if (parts.length < 3 || !/^\d+$/.test(parts[0])) continue;
  summaryTable.set(Number(parts[0]), parts[2]);
}

const topics: Topic[] = [];
let current: Topic | null = null;
let contentEntries = 0;
let reviewEntries = 0;
const placed = new Map<number, Topic>();

for (const rawLine of lines) {
  const line = rawLine.trim();
  if (!line) continue;

  const topicTitle = topicTitleFromHeader(line);
  if (topicTitle !== null) {
    current = {
      id: slugify(topicTitle),
      title: topicTitle,
      order: topics.length + 1,
      articles: [],
    };
    topics.push(current);
    continue;
  }

  // "### Summative N (Lesson N)" — topic-boundary marker only; no topic entry.
  if (/^### Summative \d+ \(Lesson \d+\)$/.test(line)) continue;

  const lesson = lessonFromHeader(line);
  if (!lesson || !current) continue;

  if (lesson.summative) {
    const index = SUMMATIVE_LESSONS.indexOf(lesson.n);
    if (index === -1) {
      console.error(`[parse] unexpected [SUMMATIVE] at lesson ${lesson.n}`);
      process.exit(1);
    }
    const file = `summative-0${index + 1}-review-article.md`;
    const firstLine = (await readFile(path.join(articlesDir, file), 'utf8'))
      .split('\n')
      .find((l) => l.startsWith('# '))
      ?.replace(/^# /, '');
    const title = firstLine ?? `Summative ${index + 1} Review`;
    current.articles.push({
      file,
      title,
      slug: slugify(title),
      order: current.articles.length + 1,
    });
    reviewEntries++;
    continue;
  }

  if (EXCLUDED_LESSONS.includes(lesson.n)) continue;

  current.articles.push({
    file: `lesson-${String(lesson.n).padStart(2, '0')}-article.md`,
    title: lesson.title,
    slug: slugify(lesson.title),
    order: current.articles.length + 1,
    lesson: lesson.n,
  });
  placed.set(lesson.n, current);
  contentEntries++;
}

// Fallback for table lessons with no detail block (e.g. lesson 36): place via the nearest
// already-placed lesson, keeping lesson-number order within the topic.
const missingFromDetail = [...summaryTable.keys()]
  .filter((n) => !SUMMATIVE_LESSONS.includes(n))
  .filter((n) => !EXCLUDED_LESSONS.includes(n))
  .filter((n) => !placed.has(n));

for (const n of missingFromDetail) {
  const objectives = summaryTable.get(n) ?? `Lesson ${n}`;
  const dashIdx = objectives.search(/[-–—]/);
  const title = dashIdx === -1 ? objectives : objectives.slice(dashIdx + 1).trim();
  const topic = placed.get(n - 1) ?? placed.get(n + 1) ?? topics[topics.length - 1];
  if (!topic) {
    console.error(`[parse] cannot place lesson ${n} (no detail block, no neighbor topic)`);
    process.exit(1);
  }
  const article = {
    file: `lesson-${String(n).padStart(2, '0')}-article.md`,
    title,
    slug: slugify(title),
    order: 0,
    lesson: n,
  };
  const insertAt = topic.articles.findIndex((a) => (a.lesson ?? Infinity) > n);
  if (insertAt === -1) topic.articles.push(article);
  else topic.articles.splice(insertAt, 0, article);
  placed.set(n, topic);
  contentEntries++;
}

for (const topic of topics) {
  topic.articles.forEach((a, i) => {
    a.order = i + 1;
    delete a.lesson;
  });
}

const totalEntries = contentEntries + reviewEntries;

console.log(
  `[parse] ${topics.length} topics, ${contentEntries} content lessons, ${reviewEntries} summative reviews = ${totalEntries} article entries`,
);
console.log(`[parse] spec verification target: ${EXPECTED_TOTAL}`);

const missingFiles: string[] = [];
for (const topic of topics) {
  for (const entry of topic.articles) {
    try {
      await readFile(path.join(articlesDir, entry.file), 'utf8');
    } catch {
      missingFiles.push(`${entry.file} (referenced by topic "${topic.title}")`);
    }
  }
}
if (missingFiles.length > 0) {
  console.log(`[parse] referenced files missing on disk (${missingFiles.length}):`);
  for (const f of missingFiles) console.log(`  - ${f}`);
}

if (totalEntries !== EXPECTED_TOTAL || missingFiles.length > 0) {
  console.error('[parse] VERIFICATION FAILED — not writing course.meta.yaml');
  process.exit(1);
}

const manifest = {
  subject: 'Digital Media',
  form: 'Form 6',
  slug: 'digital-media-form-6',
  topics,
};
await writeFile(outPath, dump(manifest, { lineWidth: -1 }), 'utf8');
console.log(`[parse] wrote ${outPath}`);