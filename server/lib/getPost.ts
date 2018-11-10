import * as fs from "fs-extra";
import * as path from "path";
import * as showdown from "showdown";
import { POSTS_DIR } from "../constants";

const converter: showdown.Converter = new showdown.Converter();

const getPost = async (posts: any[], slug: string): Promise<any> => {
  const postData = posts.find((post) => post.slug === slug);

  if (!postData) {
    return {
      error: true,
    };
  }

  try {
    const articlePath: string = path.resolve(POSTS_DIR, postData.path, "article.md");
    const entry: string = await fs.readFile(articlePath, "utf-8");

    return {
      ...postData,
      entry: converter.makeHtml(entry),
    };
  } catch (error) {
    if (postData.url) {
      return {
        redirect: postData.url,
      };
    }
  }
};

export default getPost;
