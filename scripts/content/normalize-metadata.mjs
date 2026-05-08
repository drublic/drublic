import fs from "fs/promises";
import path from "path";
import {
  normalizeWhitespace,
  readAllPosts,
  stripHtml,
} from "./_metadata-utils.mjs";

const repoRoot = process.cwd();
const isWriteMode = process.argv.includes("--write");

const normalizeTags = (tags) => {
  if (!Array.isArray(tags)) {
    return tags;
  }

  const normalized = tags
    .map((tag) => normalizeWhitespace(tag))
    .filter(Boolean)
    .map((tag) => tag.toLowerCase())
    .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1));

  return Array.from(new Set(normalized));
};

const normalizePostData = (input) => {
  const output = { ...input };

  output.title = normalizeWhitespace(output.title ?? "");
  output.date = normalizeWhitespace(output.date ?? "");

  const existingAbstract = normalizeWhitespace(output.abstract ?? "");
  const existingMetaDescription = normalizeWhitespace(output["meta-description"] ?? "");
  output.abstract = existingAbstract || stripHtml(existingMetaDescription) || output.title;

  const metaTitle = normalizeWhitespace(output["meta-title"] ?? "");
  output["meta-title"] = metaTitle || output.title;

  output["meta-description"] =
    existingMetaDescription || stripHtml(output.abstract) || output.title;

  if (output.tags !== undefined) {
    output.tags = normalizeTags(output.tags);
  }

  return output;
};

const posts = await readAllPosts(repoRoot);
const changedFiles = [];

for (const post of posts) {
  if (post.parseError || !post.data) {
    continue;
  }

  const normalizedData = normalizePostData(post.data);
  const before = JSON.stringify(post.data);
  const after = JSON.stringify(normalizedData);

  if (before !== after) {
    changedFiles.push(post.relativePath);

    if (isWriteMode) {
      await fs.writeFile(
        post.dataPath,
        `${JSON.stringify(normalizedData, null, 2)}\n`,
        "utf-8"
      );
    }
  }
}

if (!isWriteMode) {
  console.log("Dry run complete.");
  console.log(`Files that would change: ${changedFiles.length}`);
  changedFiles.slice(0, 50).forEach((filePath) => console.log(`- ${filePath}`));
  if (changedFiles.length > 50) {
    console.log(`...and ${changedFiles.length - 50} more`);
  }
  console.log('Run with "--write" to apply changes.');
} else {
  console.log(`Normalization complete. Updated files: ${changedFiles.length}`);
}
