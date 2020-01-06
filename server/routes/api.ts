import { Request, Response, Router } from "express";
import { EMAIL, RECPIENT } from "../constants";

const getPostParams = (body: any) => ({
  name: body["form-name"],
  email: body["form-email"],
  message: body["form-message"],
  website: body["form-website"],
});

export default () => {
  const apiRoutes: Router = Router();

  return apiRoutes;
};
