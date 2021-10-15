import Link from "next/link";
import React, { FunctionComponent } from "react";
import ArticleTeaserSmall from "../components/ArticleTeaserSmall";
import BlogMessage from "../components/BlogMessage";
import Layout from "../components/Layout";

interface Post {
  post: any;
  posts: any[];
}

const Post: FunctionComponent<Post> = ({ post, posts, children }) => {
  if (!post) {
    return null;
  }

  return (
    <Layout
      title={`${post["meta-title"]} | Blog | drublic – Software Architecture`}
      description={post.metaDescription}
    >
      <meta name="twitter:title" content={post["meta-title"]} />
      <meta name="twitter:description" content={post["meta-description"]} />

      {post.image && (
        <>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={post.image} />
        </>
      )}

      <BlogMessage />

      <main id="content" className="main container" role="main">
        <article
          className="post"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <header className="post__header">
            <h1 itemProp="name">
              <Link href={`/blog/${post.slug}/`}>
                <a
                  title={`Permalink to ${post.title}`}
                  itemProp="url"
                  rel="entry-title"
                >
                  {post.title}
                </a>
              </Link>
            </h1>

            <time className="post__header__date">{post.date}</time>

            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="description" content={post.abstract} />
          </header>

          <div itemProp="articleBody">{children}</div>

          <footer className="post__footer">
            <p>
              Post by <span itemProp="author">Hans Christian Reinl</span>.
            </p>
          </footer>
        </article>

        <div className="post__crosslinks">
          <h3>Latest publications</h3>

          <ul className="posts__list posts__list--bound posts__list--no-divider">
            {posts?.slice(0, 5).map(({ title, slug, date }) => (
              <ArticleTeaserSmall
                key={slug}
                title={title}
                date={date}
                slug={slug}
              />
            ))}
          </ul>
        </div>

        <ul className="post__navigation">
          <li>
            <Link href="/blog">
              <a title="Back to blog overview">
                <svg
                  fill="#333333"
                  height="32"
                  viewBox="0 0 24 24"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z" />
                </svg>
              </a>
            </Link>
          </li>
        </ul>
      </main>

      <script async src="//platform.twitter.com/widgets.js"></script>
    </Layout>
  );
};

export default Post;
