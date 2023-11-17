import Link from "next/link";
import React, { FunctionComponent, useEffect } from "react";
import Head from "next/head";
import ArticleTeaserSmall from "../components/ArticleTeaserSmall";
import BlogMessage from "../components/BlogMessage";
import Layout from "../components/Layout";
import Toc from "./Toc";
import Image from "next/image";

interface Post {
  post: any;
  posts: any[];
  children?: React.ReactNode;
}

const Post: FunctionComponent<Post> = ({ post, posts, children }) => {
  if (!post) {
    return null;
  }

  return (
    <Layout
      title={`${post["meta-title"] ? post["meta-title"] : post.title} | Blog`}
      description={post["meta-description"]}
      image={post.image}
    >
      <Head>
        <meta name="article:author" content="Hans Christian Reinl" />

        <meta
          name="publish_date"
          property="og:publish_date"
          content={post.date}
        />
      </Head>

      <main id="content" className="main container" role="main">
        <div className="breadcrumb">
          <ol>
            <li>
              <Link href="/">drublic.de</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>{post.title}</li>
          </ol>
        </div>

        <article
          className="post"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <header className="post__header">
            <h1 itemProp="name">
              <Link
                href={`/blog/${post.slug}/`}
                title={`Permalink to ${post.title}`}
                itemProp="url"
                rel="entry-title"
              >
                {post.title}

                {post.subtitle && (
                  <span className="post__subtitle">{post.subtitle}</span>
                )}
              </Link>
            </h1>

            <div className="post__header__date">
              <time>Published on {post.date}</time> by{" "}
              <span itemProp="author">Hans Reinl</span>
            </div>

            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="description" content={post.abstract} />

            {post.tags && (
              <p>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag).toLowerCase()}`}
                    className="tag"
                  >
                    {tag}
                  </Link>
                ))}
              </p>
            )}
          </header>

          {post.headerImage && (
            <figure className="image image--block image--header">
              <Image
                src={post.headerImage}
                alt={post.title}
                itemProp="image"
                loading="lazy"
                width={2000}
                height={855}
              />
            </figure>
          )}

          {post.hasToc && <Toc entry={post.entry} />}

          <div itemProp="articleBody">{children}</div>
        </article>
      </main>

      <aside className="main">
        <div className="container">
          <BlogMessage />
        </div>

        <div className="container container--large">
          <div className="post__crosslinks">
            <h3>Latest publications</h3>

            <ul className="posts__list posts__list--bound posts__list--no-divider">
              {posts?.slice(0, 4).map(({ title, slug, date }) => (
                <ArticleTeaserSmall
                  key={slug}
                  title={title}
                  date={date}
                  slug={slug}
                />
              ))}
            </ul>
          </div>

          <div className="post__navigation">
            <Link href="/blog" title="Back to blog overview" className="button">
              View all posts
            </Link>
          </div>
        </div>
      </aside>
    </Layout>
  );
};

export default Post;
