import { Request, Response, Router } from "express";
import secondsToDaysHHMMSS from "../utils/time";

export default () => {
  const healthRoutes: Router = Router();

  healthRoutes.get("/alive", (req: Request, res: Response): void => {
    res.status(200).end();
  });

  healthRoutes.get("/admin/health", (req: Request, res: Response): void => {
    const health = {
      status: "UP",
      uptime: secondsToDaysHHMMSS(process.uptime()),
      version: "1.0.0",
    };

    res.status(200).json(health);
  });

  healthRoutes.get("/admin/healthcheck", (req: Request, res: Response): void => {
    res.status(200).end();
  });

  return healthRoutes;
};

