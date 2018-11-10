import { Response } from "express";
import { TemplateDataInterface, getTemplateData } from "../data";

const renderError = (res: Response, templateData?: TemplateDataInterface): void => {
  let data: TemplateDataInterface;

  if (!templateData) {
    data = getTemplateData();
  } else {
    data = templateData;
  }

  return res.status(404).render("error", data);
};

export default renderError;
