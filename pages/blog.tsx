import React from "react";
import Link from "next/link";
import ArticleTeaserSmall from "../lib/components/ArticleTeaserSmall";
import ArticleTeaser from "../lib/components/ArticleTeaser";
import BlogMessage from "../lib/components/BlogMessage";
import Layout from "../lib/components/Layout";
import { getPosts } from "./api/posts";

const Blog = ({ posts, tag, tags }) => {
  return (
    <Layout title="Blog">
      <main
        id="main"
        className="main container"
        role="main"
        itemScope
        itemType="http://schema.org/Blog"
      >
        {tag && (
          <>
            <p className="typography--h2">
              Posts matching <span className="tag">{tag}</span>
            </p>

            <p className="typography--h3">
              {posts.length} {posts.length > 1 ? "results" : "result"}
            </p>

            <hr />
          </>
        )}

        {posts?.slice(0, 1).map(({ title, slug, date, abstract }) => (
          <ArticleTeaser
            key={slug}
            title={title}
            date={date}
            slug={slug}
            abstract={abstract}
          />
        ))}

        {!tag && (
          <>
            <div className="tags-list">
              <h3>Topics</h3>
              <p>
                {tags?.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag).toLowerCase()}`}
                  >
                    <a className="tag">{tag}</a>
                  </Link>
                ))}
              </p>
            </div>

            <BlogMessage />
          </>
        )}

        {posts?.slice(1, 5).map(({ title, slug, date, abstract }) => (
          <ArticleTeaser
            key={slug}
            title={title}
            date={date}
            slug={slug}
            abstract={abstract}
          />
        ))}

        <ul className="posts__list">
          {posts?.slice(5, -1).map(({ title, slug, date }) => (
            <ArticleTeaserSmall
              key={slug}
              title={title}
              date={date}
              slug={slug}
            />
          ))}
        </ul>

        {!tag && (
          <>
            <h3>On other websites</h3>

            <ul className="posts__list posts__list--no-divider posts__list--no-top">
              <ArticleTeaserSmall
                title="CSS Naming Conventions: Less Rules, more Fun on Medium.com"
                url="https://medium.com/@drublic/css-naming-conventions-less-rules-more-fun-12af220e949b"
                date="19.06.2014"
                description=""
              />

              <ArticleTeaserSmall
                title="A counter statement: Putting the CSS in the head on Medium.com"
                url="https://medium.com/programming-ideas-tutorial-and-experience/f98103d09ce1"
                date="03.02.2014"
                description=""
              />

              <ArticleTeaserSmall
                title="Shared Grunt Configuration for The Nitty Gritty"
                url="https://thenittygritty.co/shared-grunt-configuration"
                date="09.06.2013"
                description=""
              />
            </ul>
          </>
        )}
      </main>
    </Layout>
  );
};

const matchTag = (matchingTag: string) => (tag: string) =>
  tag && tag.toLowerCase() === matchingTag;

const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

export const getServerSideProps = async ({ query }) => {
  const posts = await getPosts(!!query.preview);

  const matchingPosts = query.tag
    ? posts.filter((post) => post?.tags?.find(matchTag(query.tag)))
    : posts;
  const matchingTag = matchingPosts[0].tags?.find(matchTag(query.tag));
  const tags = matchingPosts
    ?.flatMap((post) => (post.tags ? post.tags : []))
    .filter(onlyUnique)
    .sort();

  return {
    props: {
      posts: matchingPosts,
      tag: matchingTag ?? null,
      tags,
    },
  };
};

export default Blog;
