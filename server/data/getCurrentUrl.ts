import { PageInterface } from "../../pages";
import getBaseUrl from "./getBaseUrl";

const getCurrentUrl = (page: PageInterface): string => {
  return `${getBaseUrl()}${page.action}`;
};

export default getCurrentUrl;
