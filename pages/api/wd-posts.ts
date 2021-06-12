import { format } from "date-fns";
const Parser = require("rss-parser");

const getWdPosts = async (): Promise<any> => {
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

export default async (req, res) => {
  const posts = await getWdPosts();

  res.status(200).json(posts);
};
