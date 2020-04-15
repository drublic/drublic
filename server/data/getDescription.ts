import { PageInterface } from "../../pages";

const baseDescription = `
  Software Development &amp; Architecture, Hans Christian Reinl - Projects:
  HTML5 Boilerplate, Working Draft - Node.js, React, CSS, JavaScript - Scrum
`;

const getDescription = (page?: PageInterface, post?: any): string => {
  return (post && post["meta-description"] || baseDescription).trim();
};

export default getDescription;
