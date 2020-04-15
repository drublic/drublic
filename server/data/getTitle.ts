import { PageInterface } from "../../pages";

const shortTitle: string = "drublic – Software Architecture";
const longTitle: string = "drublic – Software Architecture - Hans Christian Reinl, Cologne";

const getTitle = (page?: PageInterface, post?: any): string => {
  if (!page) {
    return `Not Found | ${longTitle}`;
  }

  if (post) {
    return `${post["meta-title"]} | ${shortTitle}`;
  }

  if (page.action === "blog") {
    return `Blog | ${longTitle}`;
  }

  if (page.action !== "/" && page.title) {
    return `${page.title} | ${longTitle}`;
  }

  return longTitle;
};

export default getTitle;
