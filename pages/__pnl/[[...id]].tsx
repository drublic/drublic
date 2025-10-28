import React, { useEffect, useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../lib/components/Layout";
import fetcher from "../../lib/utils/fetcher";
import ArticleList from "../../lib/components/PNL/ArticleList";
import { POSTS_DIR, getPosts } from "../api/posts";
import Toolbar from "../../lib/components/PNL/Toolbar";
import Topline from "../../lib/components/PNL/Topline";
import Error from "../404";
import { getDate } from "../../lib/utils/date";
import styles from "./[[...id]].module.css";

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
  const editorRef = useRef<any>(null);
  const [currentPost, setCurrentPost] = useState({
    slug: undefined,
    rawEntry: undefined,
    title: undefined,
    tags: undefined,
  });
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Overview mode state
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all"); // all, published, draft
  const [sortBy, setSortBy] = useState("date"); // date, title, status

  const handleTitleChange = (e) =>
    setCurrentPost({ ...currentPost, title: e.target.value });

  const refreshData = () => {
    router.replace(router.asPath);
  };

  // Filter and sort posts for overview mode
  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.abstract?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags?.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Filter by status
    if (filterStatus === "published") {
      filtered = filtered.filter((post) => !post.hidden);
    } else if (filterStatus === "draft") {
      filtered = filtered.filter((post) => post.hidden);
    }

    // Sort posts
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return (a.title || "").localeCompare(b.title || "");
        case "status":
          return (a.hidden ? 1 : 0) - (b.hidden ? 1 : 0);
        case "date":
        default:
          return getDate(b.date).getTime() - getDate(a.date).getTime();
      }
    });
  }, [posts, searchTerm, filterStatus, sortBy]);

  const stats = useMemo(() => {
    const total = posts.length;
    const published = posts.filter((post) => !post.hidden).length;
    const draft = posts.filter((post) => post.hidden).length;
    return { total, published, draft };
  }, [posts]);

  const [activeSlug, setActiveSlug] = React.useState<string>(null);

  const loadFile = async (slug: string) => {
    setActiveSlug(slug);
    setIsLoading(true);

    await fetcher(`/api/posts/${slug}?preview=true`, {}).then((post) => {
      setCurrentPost(post);
      setIsLoading(false);

      // Wait for editor to be ready before setting content
      const setEditorContent = () => {
        if (editorRef.current?.getInstance()) {
          editorRef.current.getInstance().setMarkdown(post.rawEntry);
        } else {
          // Retry after a short delay if editor is not ready
          setTimeout(setEditorContent, 100);
        }
      };

      setEditorContent();
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
    // Wait for router to be ready
    if (!router.isReady) {
      return;
    }

    // If no ID or if it's the overview page, show overview
    if (
      !router.query.id ||
      router.query.id[0] === "__pnl" ||
      router.query.id.length === 0
    ) {
      setActiveSlug(null);
      return;
    }

    const slug = router.query.id[0];

    // Only load if the slug has changed
    if (activeSlug === slug) {
      return;
    }

    loadFile(slug);
    setActiveSlug(slug);
  }, [router.query.id, router.isReady]);

  // Handle editor content loading when editor becomes available (only on initial load or manual update)
  useEffect(() => {
    if (currentPost.rawEntry && editorRef.current?.getInstance()) {
      // Only set markdown if it's different from what's in the editor
      const editorContent = editorRef.current.getInstance().getMarkdown();
      if (editorContent !== currentPost.rawEntry) {
        editorRef.current.getInstance().setMarkdown(currentPost.rawEntry);
      }
    }
  }, [currentPost.rawEntry]);

  return (
    <Layout title="PNL" noIndex noNavigation noFooter>
      <main id="content" className={styles.main} role="main">
        <div className={`container ${styles.containerFull}`}>
          {!activeSlug || (!currentPost.title && !isLoading) ? (
            // Overview mode
            <div className={styles.overview}>
              <header className={styles.header}>
                <h1>Personal Note Library</h1>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>{stats.total}</span>
                    <span className={styles.statLabel}>Total</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>{stats.published}</span>
                    <span className={styles.statLabel}>Published</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>{stats.draft}</span>
                    <span className={styles.statLabel}>Drafts</span>
                  </div>
                </div>
              </header>

              <div className={styles.controls}>
                <div className={styles.search}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                  />
                </div>

                <div className={styles.filters}>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="all">All Articles</option>
                    <option value="published">Published</option>
                    <option value="draft">Drafts</option>
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="date">Sort by Date</option>
                    <option value="title">Sort by Title</option>
                    <option value="status">Sort by Status</option>
                  </select>
                </div>
              </div>

              <ArticleList
                posts={filteredAndSortedPosts}
                activeSlug={activeSlug}
                onPostCreated={() => refreshData()}
                isOverview={true}
              />
            </div>
          ) : (
            // Detail mode
            <div className={styles.grid}>
              {isLoading ? (
                <div style={{ padding: "2rem", textAlign: "center" }}>
                  <p>Loading...</p>
                </div>
              ) : (
                <>
                  <div className={styles.content}>
                    <div className={styles.contentHeader}>
                      <Link
                        href="/__pnl"
                        className={`button ${styles.buttonSmall} ${styles.editButton}`}
                      >
                        ← Back to Overview
                      </Link>
                      <input
                        type="text"
                        value={currentPost.title}
                        className={`typography--h3 input ${styles.titleInput}`}
                        onChange={handleTitleChange}
                        placeholder="Article title..."
                      />
                    </div>

                    <Topline
                      post={currentPost}
                      onTitleChange={handleTitleChange}
                      onSlugChange={saveFile}
                    />

                    <MarkdownEditor
                      forwardedRef={(element) => (editorRef.current = element)}
                      onChange={() =>
                        setCurrentPost({
                          ...currentPost,
                          rawEntry: editorRef.current
                            .getInstance()
                            .getMarkdown(),
                        })
                      }
                    />
                  </div>

                  <Toolbar
                    isSaving={isSaving}
                    currentPost={currentPost}
                    posts={posts}
                    onSave={saveFile}
                    setCurrentPost={setCurrentPost}
                  />
                </>
              )}
            </div>
          )}
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
