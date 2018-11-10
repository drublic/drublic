import { PageInterface } from "../../pages";

const shortTitle: string = "drublic – Front-end Architecture";
const longTitle: string = "drublic – Front-end Architecture - Hans Christian Reinl, Cologne";

const getTitle = (page: PageInterface): string => {
  // @TODO: Title for blog pages

  if (!page) {
    return `Not Found | ${longTitle}`;
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
