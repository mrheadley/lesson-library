import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { load as loadYaml } from 'js-yaml';

const projectRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const lessonsRoot = path.resolve(projectRoot, '..');
const articlesOutRoot = path.join(projectRoot, 'src/content/articles');

type ArticleEntry = {
  file: string;
  title: string;
  slug: string;
  order: number;
};

type TopicEntry = {
  id: string;
  title: string;
  order: number;
  articles: ArticleEntry[];
};

type CourseManifest = {
  subject: string;
  form: string;
  slug: string;
  topics: TopicEntry[];
};

function isReview(file: string): boolean {
  return /^summative-.*-review-article\.md$/.test(file);
}

function frontmatter(entry: ArticleEntry, topic: TopicEntry, manifest: CourseManifest): string {
  const fields = [
    `title: ${JSON.stringify(entry.title)}`,
    `subject: ${JSON.stringify(manifest.subject)}`,
    `subjectSlug: ${JSON.stringify(manifest.slug)}`,
    `form: ${JSON.stringify(manifest.form)}`,
    `topic: ${JSON.stringify(topic.title)}`,
    `topicId: ${JSON.stringify(topic.id)}`,
    `order: ${entry.order}`,
  ];
  if (isReview(entry.file)) {
    fields.push(`isReview: true`);
  }
  return ['---', ...fields, '---', ''].join('\n');
}

function courseOutline(manifest: CourseManifest): string {
  const lines = [
    '---',
    `subject: ${JSON.stringify(manifest.subject)}`,
    `subjectSlug: ${JSON.stringify(manifest.slug)}`,
    `form: ${JSON.stringify(manifest.form)}`,
    '---',
    '',
    `# ${manifest.subject} — ${manifest.form}: Course Outline`,
    '',
  ];
  const topics = (manifest.topics ?? [])
    .slice()
    .sort((a, b) => a.order - b.order);
  for (const topic of topics) {
    lines.push(`${topic.order}. [${topic.title}](/${manifest.slug}/${topic.id})`);
  }
  return lines.join('\n') + '\n';
}

function stripExistingFrontmatter(markdown: string): string {
  if (!markdown.startsWith('---')) return markdown;
  const end = markdown.indexOf('\n---');
  if (end === -1) return markdown;
  return markdown.slice(end + 4).replace(/^\n+/, '');
}

async function ingestSubject(folder: string): Promise<void> {
  const manifestPath = path.join(folder, 'course.meta.yaml');
  let raw: string;
  try {
    raw = await readFile(manifestPath, 'utf8');
  } catch {
    return;
  }
  let manifest: CourseManifest;
  try {
    manifest = loadYaml(raw) as CourseManifest;
  } catch {
    console.warn(`[ingest] skipping ${folder}: could not parse course.meta.yaml`);
    return;
  }

  const articlesDir = path.join(folder, 'output/03-articles');

  for (const topic of manifest.topics ?? []) {
    for (const entry of topic.articles ?? []) {
      const sourcePath = path.join(articlesDir, entry.file);
      let body: string;
      try {
        body = await readFile(sourcePath, 'utf8');
      } catch {
        console.warn(
          `[ingest] skipping ${manifest.slug}/${topic.id}/${entry.slug}: missing source file ${sourcePath}`,
        );
        continue;
      }

      const targetDir = path.join(articlesOutRoot, manifest.slug, topic.id);
      await mkdir(targetDir, { recursive: true });
      const targetPath = path.join(targetDir, `${entry.slug}.md`);
      const output =
        frontmatter(entry, topic, manifest) + stripExistingFrontmatter(body).trimEnd() + '\n';

      await writeFile(targetPath, output, 'utf8');
      console.log(`[ingest] wrote ${path.relative(projectRoot, targetPath)}`);
    }
  }

  const outlinesOutDir = path.join(projectRoot, 'src/content/courseOutlines');
  await mkdir(outlinesOutDir, { recursive: true });
  const outlinePath = path.join(outlinesOutDir, `${manifest.slug}.md`);
  await writeFile(outlinePath, courseOutline(manifest), 'utf8');
  console.log(`[ingest] wrote ${path.relative(projectRoot, outlinePath)}`);
}

const entries = await readdir(lessonsRoot, { withFileTypes: true });
const subjectFolders = entries
  .filter((e) => e.isDirectory())
  .filter((e) => !e.name.startsWith('.'))
  .map((e) => path.join(lessonsRoot, e.name));

for (const folder of subjectFolders) {
  await ingestSubject(folder);
}