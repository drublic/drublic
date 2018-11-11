import { Request, Response, Router } from "express";
import { PAGES, PageInterface } from "../../pages";
import { getTemplateData, TemplateDataInterface } from "../data";
import getPosts from "../lib/getPosts";
import getPost from "../lib/getPost";
import renderError from "../lib/renderError";

const indexRoutes: Router = Router();
let posts: any[];

const withPosts = (templateData: TemplateDataInterface) => ({
  ...templateData,
  posts,
});

const getPageController = (page: PageInterface): void => {
  indexRoutes.get(
    page.action,
    async (req: Request, res: Response): Promise<void> => {
      const templateData: TemplateDataInterface = getTemplateData(page);

      if (!page.content) {
        return renderError(res, templateData);
      }

      // Blog Page render
      if (page.action.startsWith("/blog")) {
        const slug: string = req.params.id;
        const post = page.action !== "/blog"
          ? await getPost(posts, slug)
          : null;

        if (post) {
          if (post.error) {
            return renderError(res, templateData);
          }

          if (post.redirect) {
            return res.status(301)
              .redirect(`https://archive.drublic.de/blog/${post.redirect}`);
          }
        }

        return res.render(page.content, {
          ...withPosts(templateData),
          post,
        });
      }
      if (page.action === "/") {
        console.log(templateData)
        return res
          .set({
            "Cache-Control": `max-age=${60 * 60 * 24}`,
          })
          .render(page.content, withPosts(templateData));
      }

      // Normal page render
      try {
        return res
          .set({
            "Cache-Control": `max-age=${60 * 60 * 24}`,
          })
          .render(page.content, templateData);
      } catch (error) {
        return renderError(res, templateData);
      }
    }
  )
};

export default async () => {
  posts = await getPosts();

  PAGES.forEach(getPageController);

  return indexRoutes;
};
