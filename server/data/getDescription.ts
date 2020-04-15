import { PageInterface } from "../../pages";

// @TODO: Fix description for posts

const baseDescription = `
  Software Development &amp; Architecture, Hans Christian Reinl - Projects:
  HTML5 Boilerplate, Working Draft - Node.js, React, CSS, JavaScript - Scrum
`;

const getDescription = (page: PageInterface): string => {
  return baseDescription.trim();
};

export default getDescription;
