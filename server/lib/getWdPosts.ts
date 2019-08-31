import { format } from "date-fns";
const Parser = require("rss-parser");

const getWdPosts = async (): Promise<any> => {
  const parser = new Parser();
  const feed: any = await parser.parseURL('https://workingdraft.de/feed/');

  return feed.items.splice(0, 5).map((item: any) => ({
    title: item.title,
    url: item.link,
    date: format(new Date(item.isoDate), "dd.MM.yyyy"),
  }));
};

export default getWdPosts;
