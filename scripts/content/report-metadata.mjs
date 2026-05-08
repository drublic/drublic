import path from "path";
import {
  REQUIRED_FIELDS,
  ensureReportsDirectory,
  isHiddenPost,
  readAllPosts,
  stripHtml,
  writeJsonFile,
} from "./_metadata-utils.mjs";

const repoRoot = process.cwd();

const countBy = (items, keyFn) => {
  const counts = new Map();
  for (const item of items) {
    const key = keyFn(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
};

const buildIssueList = (posts) => {
  const issues = [];
  const descriptionMap = new Map();

  for (const post of posts) {
    if (post.parseError) {
      issues.push({
        type: "json_parse_error",
        file: post.relativePath,
        details: post.parseError,
      });
      continue;
    }

    const data = post.data;

    for (const field of REQUIRED_FIELDS) {
      if (
        !(field in data) ||
        data[field] === null ||
        String(data[field]).trim().length === 0
      ) {
        issues.push({
          type: "missing_required_field",
          field,
          file: post.relativePath,
        });
      }
    }

    if (Array.isArray(data.tags) === false && data.tags !== undefined) {
      issues.push({
        type: "invalid_tags_type",
        file: post.relativePath,
        details: `Expected array, received ${typeof data.tags}`,
      });
    }

    if (!isHiddenPost(data)) {
      const plainMetaDescription = stripHtml(data["meta-description"] ?? "");
      if (plainMetaDescription.length > 0 && plainMetaDescription.length < 80) {
        issues.push({
          type: "short_meta_description",
          file: post.relativePath,
          details: `Length ${plainMetaDescription.length}`,
        });
      }

      const abstractText = stripHtml(data.abstract ?? "");
      if (abstractText.length > 0 && abstractText.length < 80) {
        issues.push({
          type: "short_abstract",
          file: post.relativePath,
          details: `Length ${abstractText.length}`,
        });
      }
    }

    const key = stripHtml(data["meta-description"] ?? "").toLowerCase();
    if (key.length > 0) {
      const files = descriptionMap.get(key) ?? [];
      files.push(post.relativePath);
      descriptionMap.set(key, files);
    }
  }

  for (const [description, files] of descriptionMap.entries()) {
    if (files.length >= 4) {
      issues.push({
        type: "highly_duplicated_meta_description",
        details: `Used ${files.length} times`,
        files,
        sample: description.slice(0, 180),
      });
    }
  }

  return issues;
};

const posts = await readAllPosts(repoRoot);
const issues = buildIssueList(posts);
const issueCounts = Object.fromEntries(countBy(issues, (issue) => issue.type));

const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    totalPosts: posts.length,
    hiddenPosts: posts.filter((post) => post.data && isHiddenPost(post.data)).length,
    parseErrors: posts.filter((post) => post.parseError).length,
    issueCount: issues.length,
    issueCounts,
  },
  issues,
};

const reportsDir = await ensureReportsDirectory(repoRoot);
const outPath = path.join(reportsDir, "content-baseline.json");
await writeJsonFile(outPath, report);

console.log(`Wrote metadata report: ${path.relative(repoRoot, outPath)}`);
console.log(`Total posts: ${report.summary.totalPosts}`);
console.log(`Issues: ${report.summary.issueCount}`);
