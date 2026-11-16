import React, { FunctionComponent } from "react";
import Link from "next/link";
import BlogMessage from "../components/BlogMessage";
import ElsewhereLinks from "../components/ElsewhereLinks";
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import PageShell from "../components/PageShell";
import ThemeIndex from "../components/ThemeIndex";
import UpdatesArticleList from "../components/UpdatesArticleList";
import RailSection from "../components/RailSection";
import JsonLd, { breadcrumbJsonLd } from "../components/JsonLd";
import { formatTag, tagHref } from "../utils/tags";

/** Full Multiverse rows for the latest posts; the rest use a 2-up grid. */
const FEATURED_COUNT = 6;

export type BlogIndexProps = {
  posts: any[];
  tag?: string | null;
  tags: Record<string, number> | Array<[string, number]>;
};

const Blog: FunctionComponent<BlogIndexProps> = ({ posts, tag: rawTag, tags }) => {
  const tag = rawTag ? formatTag(rawTag) : null;
  const allPosts = posts ?? [];
  const featuredPosts = allPosts.slice(0, FEATURED_COUNT);
  const compactPosts = allPosts.slice(FEATURED_COUNT);
  const firstPost = featuredPosts.slice(0, 1);
  const moreFeatured = featuredPosts.slice(1);

  return (
    <Layout
      title={tag ? `Tag: ${tag} | Blog` : "Blog"}
      description={
        tag
          ? `Articles tagged “${tag}” by Hans Christian Reinl on engineering, leadership, and web development.`
          : "Blog by Hans Christian Reinl — articles on engineering, leadership, AI-native systems, and web development."
      }
    >
      <JsonLd
        data={breadcrumbJsonLd(
          rawTag
            ? [
                { name: "Blog", path: "/blog" },
                { name: tag, path: tagHref(rawTag) },
              ]
            : [{ name: "Blog", path: "/blog" }],
        )}
      />
      <main
        id="content"
        className="main"
        role="main"
        itemScope
        itemType="http://schema.org/Blog"
      >
        <PageShell>
          <PageHeader
            label={tag ? "Filtered" : "Writing"}
            title={tag ? `Tag: ${tag}` : "Blog"}
            lead={
              tag ? (
                <p>
                  {allPosts.length} {allPosts.length > 1 ? "results" : "result"}{" "}
                  matching <span className="tag">{tag}</span>.{" "}
                  <Link href="/blog">View all posts</Link>
                </p>
              ) : (
                <p>
                  Articles on engineering leadership, AI-native systems, and web
                  development.
                </p>
              )
            }
          />
        </PageShell>

        <RailSection
          label="Blog"
          heading={tag ? `Posts tagged ${tag}` : "All blog posts"}
          headingId="blog-posts-heading"
          className="updates--page"
        >
          <UpdatesArticleList posts={firstPost} />

          {!tag && (
            <div className="updates__insert">
              <ThemeIndex tags={tags} />
              <BlogMessage />
            </div>
          )}

          <UpdatesArticleList posts={moreFeatured} startIndex={1} />

          {compactPosts.length > 0 ? (
            <UpdatesArticleList
              posts={compactPosts}
              startIndex={FEATURED_COUNT}
              variant="compact"
            />
          ) : null}
        </RailSection>

        {!tag && <ElsewhereLinks />}
      </main>
    </Layout>
  );
};

export default Blog;
