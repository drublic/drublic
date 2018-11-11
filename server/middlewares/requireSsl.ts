import { Request, Response, NextFunction } from "express";

const requireSsl = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === "production" &&
    (req.headers.host && req.headers.host.includes("drublic.de")) &&
    !req.secure
  ) {
    return res.redirect("https://" + req.headers.host + req.url);
  }

  next();
};

export default requireSsl;
