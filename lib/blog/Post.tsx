import Link from "next/link";
import React, { FunctionComponent, useEffect } from "react";
import Head from "next/head";
import ArticleTeaserSmall from "../components/ArticleTeaserSmall";
import BlogMessage from "../components/BlogMessage";
import Layout from "../components/Layout";
import Toc from "./Toc";
import Image from "next/image";
import { getDate } from "../utils/date";
import * as showdown from "showdown";

interface Post {
  post: any;
  posts: any[];
  category?: { name: string; slug: string };
  children?: React.ReactNode;
}

const converter: showdown.Converter = new showdown.Converter();

const Post: FunctionComponent<Post> = ({
  post,
  posts,
  category = { name: "Blog", slug: "/blog" },
  children,
}) => {
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
              <Link href="/">hansreinl.de</Link>
            </li>
            <li>
              <Link href={category.slug}>{category.name}</Link>
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
                href={`${category.slug}/${post.slug}/`}
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
              <time>
                Published on{" "}
                {getDate(post.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </time>{" "}
              by <span itemProp="author">Hans Reinl</span>
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
              {post.headerImageCaption && (
                <figcaption
                  className="image__caption image__caption--no-border"
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(post.headerImageCaption),
                  }}
                />
              )}
            </figure>
          )}

          {post.hasToc && <Toc entry={post.entry} />}

          <div itemProp="articleBody">{children}</div>
        </article>

        <section
          className="claim author"
          itemScope
          itemType="http://schema.org/Person"
        >
          <figure className="claim__me author_headshot">
            <Image
              src="/img/me.jpg"
              alt="Hans Reinl"
              width={128}
              height={128}
            />
          </figure>

          <div className="author_content">
            <p className="author_headline">Written by Hans Reinl</p>

            <p
              itemProp="description"
              className="author_description typography--body2"
            >
              Hans is an Engineering and Leadership Consultant with a passion
              for technology and a focus on leading and developing strong
              engineering teams. Committed to delivering high-quality products
              and driving business growth through technical excellence.
            </p>
          </div>
          <meta itemProp="name" content="Hans Reinl" />
          <meta
            itemProp="jobTitle"
            content="Engineering and Leadership Consultant"
          />
          <meta itemProp="url" content="https://hansreinl.de" />
          <meta itemProp="image" content="/img/me.jpg" />
          <meta itemProp="worksFor" content="Self-employed" />
          <meta itemProp="sameAs" content="https://x.com/hansreinl" />
          <meta itemProp="sameAs" content="https://linkedin.com/in/hansreinl" />
          <meta itemProp="sameAs" content="https://github.com/hansreinl" />
          <meta
            itemProp="sameAs"
            content="https://www.linkedin.com/in/hansreinl/"
          />
        </section>
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
                  basePath={category.slug}
                />
              ))}
            </ul>
          </div>

          <div className="post__navigation">
            <Link
              href={category.slug}
              title="Back to overview"
              className="button"
            >
              View all posts
            </Link>
          </div>
        </div>
      </aside>
    </Layout>
  );
};

export default Post;
