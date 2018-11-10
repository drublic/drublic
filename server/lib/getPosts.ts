import * as fs from "fs-extra";
import * as path from "path";
import * as showdown from "showdown";
import { POSTS_DIR } from "../constants";

const converter: showdown.Converter = new showdown.Converter();

const getFolders = async (): Promise<string[]> => {
  const directory: any[] = await fs.readdir(POSTS_DIR);

  return directory
    .filter((folder) => !folder.startsWith("."))
    .sort()
    .reverse();
};

const getPost = async (postPath: string): Promise<any> => {
  const postDataPath: string = path.resolve(POSTS_DIR, postPath, "data.json");

  try {
    const postData: string = await fs.readFile(postDataPath, "utf-8");
    const post = JSON.parse(postData);

    return {
      ...post,
      abstract: converter.makeHtml(post.abstract),
      slug: postPath.split("-").splice(1).join("-"),
      path: postPath,
    };
  } catch (error) {
    console.error(error);
  }

  return null;
};

const getPosts = async (hasPreview: boolean = false): Promise<any> => {
  const folders = await getFolders();

  const postsPromises = folders.map((folder) => getPost(folder));
  const posts = await Promise.all(postsPromises);
  const filteredPosts = posts.filter((post) => post !== null);

  if (hasPreview) {
    return filteredPosts;
  }

  return filteredPosts.filter((post) => post.hidden !== true);
};

export default getPosts;
