import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Layout from "../../lib/components/Layout";
import fetcher from "../../lib/utils/fetcher";
import ArticleList from "../../lib/components/PNL/ArticleList";
import { POSTS_DIR, getPosts } from "../api/posts";
import Toolbar from "../../lib/components/PNL/Toolbar";
import classNames from "classnames";
import Topline from "../../lib/components/PNL/Topline";
import Error from "../404";

const MarkdownEditor = dynamic(
  () => import("../../lib/components/PNL/MarkdownEditor"),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

const PNL = ({ isDev, posts }) => {
  if (!isDev) {
    return <Error />;
  }

  const router = useRouter();
  const editorRef = useRef<any>();
  const [currentPost, setCurrentPost] = useState({
    slug: undefined,
    rawEntry: undefined,
    title: undefined,
    tags: undefined,
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleTitleChange = (e) =>
    setCurrentPost({ ...currentPost, title: e.target.value });

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [activeSlug, setActiveSlug] = React.useState<string>(null);
  const loadFile = async (slug: string) => {
    setActiveSlug(slug);

    await fetcher(`/api/posts/${slug}?preview=true`, {}).then((post) => {
      editorRef.current?.getInstance()?.setMarkdown(post.rawEntry);
      setCurrentPost(post);
    });
  };

  const saveFile = async (slug: string) => {
    setIsSaving(true);

    await fetcher(`/api/posts/${slug}?preview=true`, {
      method: "PATCH",
      body: JSON.stringify({ ...currentPost, slug }),
    });

    setIsSaving(false);
  };

  useEffect(() => {
    if (router.query.id === activeSlug) {
      return;
    }

    if (!router.query.id || router.query.id[0] === "__pnl") {
      return;
    }

    loadFile(router.query.id[0]);
    setActiveSlug(router.query.id[0]);
  }, [router.query.id]);

  return (
    <Layout title="PNL" noIndex noNavigation noFooter>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            html {
              background-color: var(--color-lightest);
            }

            .main {
              padding: 0;
            }

            .container--full {
              max-width: 100%;
              padding: 0 1rem;
            }

            .grid {
              display: grid;
              grid-gap: 1rem;
              gap: 1rem;
              grid-template-columns: 1fr 3fr 1.25fr;
              transition: all 0.2s ease-in-out;
            }

            .grid--full {
              margin-left: -18.5rem;
              margin-right: -18.5rem;
              grid-template-columns: 1fr 5fr 1fr;
              overflow: hidden;
            }

            .content {
              background-color: #fff;
              padding: 1.5rem;
              border-radius: 1rem 1rem 0 0  ;
            }

            .button--small {
              padding: 0.25rem 0.5rem;
              font-size: 1rem;
              border-radius: 0.25rem;
              border: 1px solid var(--border-color);
              background-color: #fff;
              cursor: pointer;
            }

            .button--small:hover {
              color: var(--color-primary);
              background-color: var(--color-lightest);
              border-color: var(--border-color-dark)
            }

            .button--small:before {
              display: none;
            }

            .button--small span {
              margin-right: 0.25rem;
            }

            .button--icon {
              background: none;
               border: 0;
               padding: 0.125rem;
               cursor: pointer;
            }

            .input {
              flex: 1;
              margin-top: 0;
              margin-bottom: 0;
              border-color: var(--border-color);
            }
        `,
        }}
      />

      <main id="content" className="main" role="main">
        <div className="container container--full">
          <div
            className={classNames("grid", {
              "grid--full": isFullscreen,
            })}
          >
            <ArticleList
              posts={posts}
              activeSlug={activeSlug}
              onPostCreated={() => refreshData()}
            />

            <div className="content">
              <Topline
                post={currentPost}
                onTitleChange={handleTitleChange}
                onSlugChange={saveFile}
                isFullscreen={isFullscreen}
                onFullscreenChange={() => setIsFullscreen(!isFullscreen)}
              />

              <MarkdownEditor
                forwardedRef={(element) => (editorRef.current = element)}
                onChange={() =>
                  setCurrentPost({
                    ...currentPost,
                    rawEntry: editorRef.current.getInstance().getMarkdown(),
                  })
                }
              />
            </div>

            <Toolbar
              isSaving={isSaving}
              currentPost={currentPost}
              posts={posts}
              onSave={saveFile}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const posts = await getPosts(true, POSTS_DIR);

  return {
    props: {
      posts,
      isDev: process.env.NODE_ENV === "development",
    },
  };
};

export default PNL;
