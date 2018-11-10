import { Request, Response, Router } from "express";
import { getTemplateData } from "../data";
import getPosts from "../lib/getPosts";

export default () => {
  const feedRoutes: Router = Router();

  feedRoutes.get(
    "/feed.xml",
    async (req: Request, res: Response): Promise<void> => {
      const templateData = getTemplateData({
        title: "",
        action: "/",
      });
      const posts: any[] = await getPosts();

      return res
        .set({
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": `max-age=${60 * 60 * 24}`,
        })
        .render("feed", {
          layout: false,
          ...templateData,
          posts,
        });
    },
  );

  return feedRoutes;
};
