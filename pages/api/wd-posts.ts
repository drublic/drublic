import { format } from "date-fns";
const Parser = require("rss-parser");

export const getWdPosts = async (): Promise<any> => {
  const parser = new Parser();
  try {
    const feed: any = await parser.parseURL("https://workingdraft.de/feed/");

    return feed.items.splice(0, 5).map((item: any) => ({
      title: item.title,
      url: item.link,
      date: format(new Date(item.isoDate), "dd.MM.yyyy"),
      description: item.content,
    }));
  } catch (error) {
    return [];
  }
};

let postsStore = [];

export default async (req, res) => {
  if (postsStore.length === 0) {
    const posts = await getWdPosts();

    postsStore = posts;
  }

  res.status(200).json(postsStore);
};
