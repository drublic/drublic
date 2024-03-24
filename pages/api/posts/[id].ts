import fs from "fs";
import path from "path";
import * as showdown from "showdown";
import { POSTS_DIR, getPosts, getFolderPath } from ".";

const converter: showdown.Converter = new showdown.Converter();
export const getFullPost = async (
  postData: any,
  folderPath: string
): Promise<any> => {
  if (!postData) {
    return {
      error: true,
      message: "Post not found",
    };
  }

  if (postData.url) {
    return {
      error: true,
      message: "URL not found",
    };
  }

  try {
    const articlePath: string = path.resolve(
      folderPath,
      postData.path,
      "article.md"
    );
    const entry: string = await fs.promises.readFile(articlePath, "utf-8");

    return {
      ...postData,
      entry: converter.makeHtml(entry),
      rawEntry: process.env.NODE_ENV === "development" ? entry : null,
    };
  } catch (error) {
    console.error(error);
    if (postData.url) {
      return {
        redirect: postData.url,
      };
    }
  }
};

const saveToFile = (postData: any, rawEntry: string): Promise<void> => {
  const filePath: string = path.resolve(POSTS_DIR, postData.path, "article.md");

  return fs.promises.writeFile(filePath, rawEntry);
};

const saveToJson = (
  postData: any,
  data: Record<string, any>
): Promise<void> => {
  const filePath: string = path.resolve(POSTS_DIR, postData.path, "data.json");

  return fs.promises.writeFile(filePath, JSON.stringify(data, null, 2));
};

const readSlug = (url: string): string => url.split("/").pop().split("?")[0];

export const findPost = (posts: any[], slug: string): any =>
  posts.find((post) => post.slug === slug);

export default async (req, res) => {
  const hasPreview = !!req.query.preview;
  const folder = req.query.folder;

  const folderPath = getFolderPath(folder);
  const posts = await getPosts(hasPreview, folderPath);
  const postData = findPost(posts, readSlug(req.url));

  if (process.env.NODE_ENV === "development" && req.method === "PATCH") {
    const { rawEntry, entry, path, slug, ...rest } = JSON.parse(req.body);
    await saveToFile(postData, rawEntry);
    await saveToJson(postData, rest);

    return res.status(200).json({ message: "ok" });
  }

  const post = await getFullPost(postData, folderPath);

  return res.status(200).json(post);
};
