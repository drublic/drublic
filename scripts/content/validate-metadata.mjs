import { REQUIRED_FIELDS, isHiddenPost, readAllPosts, stripHtml } from "./_metadata-utils.mjs";

const repoRoot = process.cwd();
const posts = await readAllPosts(repoRoot);

const errors = [];
const warnings = [];

for (const post of posts) {
  if (post.parseError) {
    errors.push(`${post.relativePath}: invalid JSON (${post.parseError})`);
    continue;
  }

  const data = post.data;
  if (isHiddenPost(data)) {
    continue;
  }

  for (const field of REQUIRED_FIELDS) {
    if (!(field in data) || String(data[field] ?? "").trim().length === 0) {
      errors.push(`${post.relativePath}: missing required field "${field}"`);
    }
  }

  if ("tags" in data && !Array.isArray(data.tags)) {
    errors.push(`${post.relativePath}: "tags" must be an array when present`);
  }

  const metaTitle = stripHtml(data["meta-title"] ?? "");
  const metaDescription = stripHtml(data["meta-description"] ?? "");
  const abstract = stripHtml(data.abstract ?? "");

  if (metaTitle.length > 70) {
    warnings.push(
      `${post.relativePath}: "meta-title" length ${metaTitle.length} exceeds 70`
    );
  }

  if (metaDescription.length > 180) {
    warnings.push(
      `${post.relativePath}: "meta-description" length ${metaDescription.length} exceeds 180`
    );
  }

  if (metaDescription.length > 0 && metaDescription.length < 80) {
    warnings.push(
      `${post.relativePath}: "meta-description" length ${metaDescription.length} below 80`
    );
  }

  if (abstract.length > 0 && abstract.length < 80) {
    warnings.push(`${post.relativePath}: "abstract" length ${abstract.length} below 80`);
  }
}

if (warnings.length > 0) {
  console.log(`Metadata warnings: ${warnings.length}`);
  warnings.slice(0, 80).forEach((warning) => console.log(`WARN: ${warning}`));
  if (warnings.length > 80) {
    console.log(`...and ${warnings.length - 80} more warnings`);
  }
}

if (errors.length > 0) {
  console.error(`Metadata validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`ERROR: ${error}`));
  process.exit(1);
}

console.log(`Metadata validation passed for ${posts.length} post file(s).`);
