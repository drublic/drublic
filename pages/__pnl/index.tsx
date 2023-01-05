import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Layout from "../../lib/components/Layout";
import fetcher from "../../lib/utils/fetcher";
import ArticleList from "../../lib/components/PNL/ArticleList";
import { getPosts } from "../api/posts";
import Toolbar from "../../lib/components/PNL/Toolbar";
import Icon from "../../lib/components/icons/Icon";
import PreviewIcon from "../../lib/components/icons/Preview";
import FullscreenIcon from "../../lib/components/icons/Fullscreen";
import classNames from "classnames";
import CloseFullscreenIcon from "../../lib/components/icons/CloseFullscreen";

const MarkdownEditor = dynamic(
  () => import("../../lib/components/PNL/MarkdownEditor"),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

const PNL = ({ posts }) => {
  const editorRef = useRef<any>();
  const [currentPost, setCurrentPost] = useState({
    slug: undefined,
    rawEntry: undefined,
    title: undefined,
    tags: undefined,
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const saveFile = async (slug: string) => {
    setIsSaving(true);

    await fetcher(`/api/posts/${slug}?preview=true`, {
      method: "PATCH",
      body: JSON.stringify(currentPost),
    });

    setIsSaving(false);
  };

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

            .button--fullscreen {
              -webkit-appearance: none;
              padding: 0;
              margin-left: 1rem;
              background-color: transparent;
              border: 0;
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
              onArticleLoaded={(post) => {
                editorRef.current?.getInstance()?.setMarkdown(post.rawEntry);
                setCurrentPost(post);
              }}
            />

            <div className="content">
              <div style={{ display: "flex", marginBottom: "2rem" }}>
                <input
                  type="text"
                  value={currentPost.title}
                  className="typography--h3 input"
                  onChange={(e) =>
                    setCurrentPost({ ...currentPost, title: e.target.value })
                  }
                />

                <button
                  className="button--fullscreen"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  <Icon width={48} height={48}>
                    {isFullscreen ? (
                      <CloseFullscreenIcon />
                    ) : (
                      <FullscreenIcon />
                    )}
                  </Icon>
                </button>
              </div>

              <p className="typography--body2" style={{ marginBottom: "2rem" }}>
                https://drublic.de/blog/
                <code>{currentPost.slug ?? "..."}</code>
                {currentPost.slug && (
                  <a
                    href={`/blog/${currentPost.slug}?preview=true`}
                    target="drublic:preview"
                    className="button button--small"
                    style={{ float: "right", marginTop: "-0.5rem" }}
                  >
                    <Icon width={24} height={24}>
                      <PreviewIcon />
                    </Icon>
                    Preview
                  </a>
                )}
              </p>

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
  const posts = await getPosts(true);

  return {
    props: {
      posts,
    },
  };
};

export default PNL;
