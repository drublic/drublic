import { Request, Response, Router } from "express";
import { PAGES, PageInterface } from "../../pages";
import { getTemplateData, TemplateDataInterface } from "../data";
import getPosts from "../lib/getPosts";
import getWdPosts from "../lib/getWdPosts";
import getPost from "../lib/getPost";
import renderError from "../lib/renderError";

const indexRoutes: Router = Router();
let posts: any[];
let wdPosts: any[];

const getPostsData = () => ({
  posts,
});

const getWdPostsData = () => ({
  wdPosts,
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
          ...getPostsData(),
          post,
        });
      }

      if (page.action === "/") {
        const data = {
          ...templateData,
          ...getPostsData(),
          ...getWdPostsData(),
        };

        return res
          .set({
            "Cache-Control": `max-age=${60 * 60 * 24}`,
          })
          .render(page.content, data);
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
    },
  );
};

export default async () => {
  posts = await getPosts();
  wdPosts = await getWdPosts();

  PAGES.forEach(getPageController);

  return indexRoutes;
};
