import { PageInterface } from "../../pages";

const getCurrentUrl = (page: PageInterface): string => {
  return page.action;
};

export default getCurrentUrl;
