import Link from "next/link";
import React, { FunctionComponent } from "react";
import ArticleTeaserSmall from "../components/ArticleTeaserSmall";
import BlogMessage from "../components/BlogMessage";
import Layout from "../components/Layout";
import JsonLd from "../components/JsonLd";
import Toc from "./Toc";
import Image from "next/image";
import { getDate } from "../utils/date";
import { resolveSocialPreviewImage } from "../utils/socialImage";
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

  const publishedAt = getDate(post.date);
  const postUrl = `https://hansreinl.de${category.slug}/${post.slug}/`;
  const socialImage = resolveSocialPreviewImage(post.image, post.headerImage);
  const absoluteImage = socialImage
    ? socialImage.startsWith("http")
      ? socialImage
      : `https://hansreinl.de${socialImage}`
    : "https://hansreinl.de/img/me.jpg";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post["meta-description"] || post.abstract,
    image: absoluteImage,
    datePublished: publishedAt.toISOString(),
    dateModified: publishedAt.toISOString(),
    author: {
      "@type": "Person",
      "@id": "https://hansreinl.de/#person",
      name: "Hans Christian Reinl",
      url: "https://hansreinl.de/",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://hansreinl.de/#person",
      name: "Hans Christian Reinl",
      url: "https://hansreinl.de/",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
  };

  return (
    <Layout
      title={`${post["meta-title"] ? post["meta-title"] : post.title} | Blog`}
      description={post["meta-description"]}
      image={socialImage}
      ogType="article"
      articlePublishedTime={publishedAt.toISOString()}
      articleAuthor="Hans Christian Reinl"
    >
      <JsonLd data={articleJsonLd} />
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
              Hans is an AI-Native Systems Architect &amp; Engineering Advisor
              with 15+ years of experience building high-scale platforms. He
              helps organizations transition to AI-native products, speaks at
              conferences, and co-hosts the Working Draft podcast. Based in
              Cologne, Germany.
            </p>
          </div>
          <meta itemProp="name" content="Hans Reinl" />
          <meta
            itemProp="jobTitle"
            content="AI-Native Systems Architect & Engineering Advisor"
          />
          <meta itemProp="url" content="https://hansreinl.de" />
          <meta itemProp="image" content="/img/me.jpg" />
          <meta itemProp="worksFor" content="Self-employed" />
          <meta
            itemProp="sameAs"
            content="https://www.linkedin.com/in/hansreinl/"
          />
          <meta itemProp="sameAs" content="https://github.com/drublic" />
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
