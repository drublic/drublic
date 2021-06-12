import fs from "fs";
import path from "path";
import * as showdown from "showdown";
import { POSTS_DIR, getPosts } from ".";

const converter: showdown.Converter = new showdown.Converter();
const getFullPost = async (posts: any[], slug: string): Promise<any> => {
  const postData = posts.find((post) => post.slug === slug);

  if (!postData) {
    return {
      error: true,
    };
  }

  try {
    const articlePath: string = path.resolve(
      POSTS_DIR,
      postData.path,
      "article.md"
    );
    const entry: string = await fs.promises.readFile(articlePath, "utf-8");

    return {
      ...postData,
      entry: converter.makeHtml(entry),
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

export default async (req, res) => {
  const posts = await getPosts();
  const post = await getFullPost(posts, req.url.split("/").pop());

  return res.status(200).json(post);
};
