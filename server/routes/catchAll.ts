import { Request, Response, Router } from "express";
import renderError from "../lib/renderError";

export default () => {
  const catchAllRoutes: Router = Router();

  catchAllRoutes.get("*", (req: Request, res: Response): void => {
    renderError(res);
  });

  return catchAllRoutes;
};
