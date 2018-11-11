import { PageInterface } from "../../pages";
import getBaseUrl from "./getBaseUrl";

const getCurrentUrl = (page: PageInterface): string => {
  return page.action;
};

export default getCurrentUrl;
