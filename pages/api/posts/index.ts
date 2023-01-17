import fs from "fs";
import path from "path";
import * as showdown from "showdown";

export const POSTS_DIR =
  process.env.NODE_ENV === "production"
    ? path.join(process.cwd(), "content")
    : path.join(process.cwd(), "content");

const converter: showdown.Converter = new showdown.Converter();

const getFolders = async (): Promise<string[]> => {
  try {
    const directory: any[] = await fs.promises.readdir(POSTS_DIR);

    return directory
      .filter((folder) => !folder.startsWith("."))
      .sort()
      .reverse();
  } catch (error) {
    console.error(`cannot load POSTS_DIR <${POSTS_DIR}>`, error);
  }
};

const getPost = async (postPath: string): Promise<any> => {
  const postDataPath: string = path.resolve(POSTS_DIR, postPath, "data.json");

  try {
    const postData: string = await fs.promises.readFile(postDataPath, "utf-8");
    const post = JSON.parse(postData);

    return {
      ...post,
      slug: postPath.split("-").splice(1).join("-"),
      path: postPath,
      abstract: converter.makeHtml(post.abstract),
    };
  } catch (error) {
    console.error(`cannot load post data <${postDataPath}>`, error);
  }

  return null;
};

export const getDate = (date: string) => {
  const splitted = date.split(".");

  return new Date(`${splitted[1]}/${splitted[0]}/${splitted[2]}`);
};

export const getPosts = async (hasPreview: boolean = false): Promise<any> => {
  const folders = await getFolders();

  const postsPromises = folders?.map((folder) => getPost(folder)) ?? [];
  const posts = await Promise.all(postsPromises);
  const filteredPosts = posts
    .filter((post) => post !== null)
    .sort((a, b) =>
      getDate(a.date).getTime() < getDate(b.date).getTime() ? 1 : -1
    );

  if (hasPreview) {
    return filteredPosts;
  }

  return filteredPosts.filter((post) => post.hidden !== true);
};

const createPost = async (slug: string) => {
  const folderName = `99-${slug}`;

  const folderPath: string = path.resolve(POSTS_DIR, folderName);
  await fs.promises.mkdir(folderPath);

  const articlePath: string = path.resolve(POSTS_DIR, folderName, "article.md");
  await fs.promises.writeFile(articlePath, "", "utf-8");

  const dataPath: string = path.resolve(POSTS_DIR, folderName, "data.json");
  await fs.promises.writeFile(
    dataPath,
    JSON.stringify({
      title: slug,
      date: new Date().toLocaleDateString("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
      abstract: "",
      "meta-title": "",
      "meta-description": "",
      hidden: true,
    }),
    "utf-8"
  );

  return folderName;
};

export default async (req, res) => {
  const hasPreview = !!req.query.preview;
  const posts = await getPosts(hasPreview);

  if (process.env.NODE_ENV === "development" && req.method === "POST") {
    console.log("create post", req.body);
    const { slug } = JSON.parse(req.body);
    await createPost(slug);

    return res.status(201).json({ created: "ok" });
  }

  if (req.query.limit) {
    return res.status(200).json(posts.slice(0, req.query.limit));
  }

  return res.status(200).json(posts);
};
