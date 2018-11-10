import { PageInterface } from "../../pages";

import getBaseUrl from "./getBaseUrl";
import getTitle from "./getTitle";
import getCurrentUrl from "./getCurrentUrl";
import getDescription from "./getDescription";
import getVersion from "./getVersion";

export interface TemplateDataInterface {
  version: string;
  baseUrl: string;
  title: string;
  currentUrl: string;
  description: string;
  year: number;
  isDev: boolean;
}

const defaultPage: PageInterface = {
  title: "Error",
  action: "error",
  content: "error",
};

const getData = (attribute: string, page: PageInterface = defaultPage): any => {
  switch (attribute) {
    case "version":
      return getVersion();
    case "baseUrl":
      return getBaseUrl();
    case "currentUrl":
      return getCurrentUrl(page);
    case "title":
      return getTitle(page);
    case "description":
      return getDescription(page);
    default:
      break;
  }
  return;
};

export const getTemplateData = (page?: PageInterface): TemplateDataInterface => {
  return {
    version: getData("version", page),
    baseUrl: getData("baseUrl", page),
    currentUrl: getData("currentUrl", page),
    title: getData("title", page),
    description: getData("getDescription", page),
    year: new Date().getFullYear(),
    isDev: process.env.NODE_ENV !== "production",
  };
};
