import fs from "fs/promises";
import path from "path";

export const CONTENT_DIRS = ["content", "content-ai", "content-leadership"];
export const REQUIRED_FIELDS = [
  "title",
  "date",
  "abstract",
  "meta-title",
  "meta-description",
];

export const normalizeWhitespace = (value) =>
  String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();

export const stripHtml = (value) =>
  String(value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

export const isHiddenPost = (data) => data?.hidden === true;

const readJson = async (filePath) => {
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw);
};

const directoryExists = async (dirPath) => {
  try {
    const stat = await fs.stat(dirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
};

const getPostDirectories = async (rootDir) => {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => path.join(rootDir, entry.name))
    .sort();
};

export const getAllContentFiles = async (repoRoot) => {
  const files = [];

  for (const relativeDir of CONTENT_DIRS) {
    const absoluteDir = path.join(repoRoot, relativeDir);
    if (!(await directoryExists(absoluteDir))) {
      continue;
    }

    const postDirectories = await getPostDirectories(absoluteDir);
    for (const postDirectory of postDirectories) {
      const dataPath = path.join(postDirectory, "data.json");
      try {
        await fs.access(dataPath);
        files.push({
          dataPath,
          relativePath: path.relative(repoRoot, dataPath),
          collection: relativeDir,
        });
      } catch {
        // Ignore folders without data.json
      }
    }
  }

  return files;
};

export const readAllPosts = async (repoRoot) => {
  const files = await getAllContentFiles(repoRoot);
  const posts = [];

  for (const file of files) {
    try {
      const data = await readJson(file.dataPath);
      posts.push({
        ...file,
        data,
      });
    } catch (error) {
      posts.push({
        ...file,
        data: null,
        parseError: error instanceof Error ? error.message : String(error),
      });
    }
  }

  return posts;
};

export const ensureReportsDirectory = async (repoRoot) => {
  const reportsDir = path.join(repoRoot, "reports");
  await fs.mkdir(reportsDir, { recursive: true });
  return reportsDir;
};

export const writeJsonFile = async (filePath, value) => {
  await fs.writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf-8");
};
