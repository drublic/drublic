import { PageInterface } from "../../pages";

// @TODO: Fix description for posts

const baseDescription = `
  Front-end Development &amp; Architecture, Hans Christian Reinl - Projects:
  INIT, HTML5 Boilerplate, Working Draft - CSS, JavaScript - Scrum
`;

const getDescription = (page: PageInterface): string => {
  return baseDescription.trim();
};

export default getDescription;
