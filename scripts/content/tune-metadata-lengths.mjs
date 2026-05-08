import fs from "fs/promises";
import { readAllPosts, stripHtml } from "./_metadata-utils.mjs";

const repoRoot = process.cwd();
const MAX_TITLE_LENGTH = 70;
const MIN_DESCRIPTION_LENGTH = 80;
const MAX_DESCRIPTION_LENGTH = 180;
const MIN_ABSTRACT_LENGTH = 80;

const GENERIC_SUFFIX = " Read the full article for practical guidance and examples.";

const normalizeSpacing = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

const truncateAtWord = (value, maxLength) => {
  const text = normalizeSpacing(value);
  if (text.length <= maxLength) {
    return text;
  }

  const budget = Math.max(1, maxLength - 3);
  const sliced = text.slice(0, budget + 1);
  const lastSpace = sliced.lastIndexOf(" ");
  if (lastSpace > 40) {
    return `${sliced.slice(0, lastSpace).trim()}...`;
  }

  return `${text.slice(0, budget).trim()}...`;
};

const sentenceCandidates = (value) =>
  normalizeSpacing(value)
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

const fitDescriptionLength = (value, fallback) => {
  const text = normalizeSpacing(stripHtml(value));
  const fallbackText = normalizeSpacing(stripHtml(fallback));
  const source = text || fallbackText;

  if (source.length === 0) {
    return "";
  }

  if (source.length >= MIN_DESCRIPTION_LENGTH && source.length <= MAX_DESCRIPTION_LENGTH) {
    return source;
  }

  if (source.length > MAX_DESCRIPTION_LENGTH) {
    for (const sentence of sentenceCandidates(source)) {
      if (
        sentence.length >= MIN_DESCRIPTION_LENGTH &&
        sentence.length <= MAX_DESCRIPTION_LENGTH
      ) {
        return sentence;
      }
    }

    return truncateAtWord(source, MAX_DESCRIPTION_LENGTH);
  }

  let expanded = source;
  if (!expanded.endsWith(".")) {
    expanded = `${expanded}.`;
  }
  while (expanded.length < MIN_DESCRIPTION_LENGTH) {
    expanded = `${expanded}${GENERIC_SUFFIX}`;
    if (expanded.length > MAX_DESCRIPTION_LENGTH) {
      expanded = truncateAtWord(expanded, MAX_DESCRIPTION_LENGTH);
      break;
    }
  }
  return expanded;
};

const fitAbstractLength = (abstract, fallbackDescription, title) => {
  const current = normalizeSpacing(stripHtml(abstract));
  if (current.length >= MIN_ABSTRACT_LENGTH) {
    return current;
  }

  const fromDescription = normalizeSpacing(stripHtml(fallbackDescription));
  if (fromDescription.length >= MIN_ABSTRACT_LENGTH) {
    return fromDescription;
  }

  const withSuffix = fitDescriptionLength(
    fromDescription || current || normalizeSpacing(title),
    normalizeSpacing(title)
  );
  return withSuffix;
};

const posts = await readAllPosts(repoRoot);
let updatedCount = 0;

for (const post of posts) {
  if (post.parseError || !post.data || post.data.hidden === true) {
    continue;
  }

  const next = { ...post.data };
  const original = JSON.stringify(post.data);

  next["meta-title"] = truncateAtWord(next["meta-title"] ?? next.title ?? "", MAX_TITLE_LENGTH);
  next["meta-description"] = fitDescriptionLength(
    next["meta-description"],
    next.abstract || next.title
  );
  next.abstract = fitAbstractLength(next.abstract, next["meta-description"], next.title);

  const changed = JSON.stringify(next) !== original;
  if (changed) {
    updatedCount += 1;
    await fs.writeFile(post.dataPath, `${JSON.stringify(next, null, 2)}\n`, "utf-8");
  }
}

console.log(`Tuned metadata lengths for ${updatedCount} file(s).`);
