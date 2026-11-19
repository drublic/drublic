import Link from "next/link";
import React, { FunctionComponent } from "react";
import BlogMessage from "../components/BlogMessage";
import Layout from "../components/Layout";
import JsonLd, {
  PERSON_ID,
  SITE_URL,
  absoluteUrl,
  breadcrumbJsonLd,
} from "../components/JsonLd";
import PageShell from "../components/PageShell";
import UpdatesArticleList from "../components/UpdatesArticleList";
import Toc from "./Toc";
import Image from "next/image";
import { getDate } from "../utils/date";
import { formatTag, tagHref } from "../utils/tags";
import { resolveSocialPreviewImage } from "../utils/socialImage";
import * as showdown from "showdown";
import SectionLabel from "../components/SectionLabel";
import ShareButton from "../components/ShareButton";

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
  const postPath = `${category.slug}/${post.slug}`;
  const postUrl = absoluteUrl(postPath);
  const relatedPosts =
    posts?.filter((item) => item.slug !== post.slug).slice(0, 4) ?? [];
  const socialImage = resolveSocialPreviewImage(post.image, post.headerImage);
  const absoluteImage = socialImage
    ? socialImage.startsWith("http")
      ? socialImage
      : `${SITE_URL}${socialImage}`
    : `${SITE_URL}/img/me.jpg`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description:
      post["meta-description"] ||
      String(post.abstract ?? "")
        .replace(/<[^>]+>/g, "")
        .trim(),
    image: absoluteImage,
    datePublished: publishedAt.toISOString(),
    dateModified: publishedAt.toISOString(),
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Hans Christian Reinl",
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Hans Christian Reinl",
      url: `${SITE_URL}/`,
    },
    ...(post.tags?.length
      ? { keywords: post.tags.map(formatTag).join(", ") }
      : {}),
    inLanguage: "en",
    ...(post.readingMinutes ? { timeRequired: `PT${post.readingMinutes}M` } : {}),
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
      <JsonLd
        data={[
          articleJsonLd,
          breadcrumbJsonLd([
            { name: category.name, path: category.slug },
            { name: post.title, path: postPath },
          ]),
        ]}
      />
      <main id="content" className="main" role="main">
        <PageShell>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">hansreinl.de</Link>
              </li>
              <li>
                <Link href={category.slug}>{category.name}</Link>
              </li>
              <li aria-current="page">{post.title}</li>
            </ol>
          </nav>

          <article
            className="post"
            itemScope
            itemType="http://schema.org/BlogPosting"
          >
            <header className="post__header">
              <SectionLabel>{category.name}</SectionLabel>
              <h1 className="post__title" itemProp="name">
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
                <time dateTime={publishedAt.toISOString()}>
                  Published on{" "}
                  {getDate(post.date).toLocaleDateString("de-DE", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </time>{" "}
                by <span itemProp="author">Hans Reinl</span>
                {post.readingMinutes ? (
                  <>
                    <span aria-hidden="true"> · </span>
                    <span className="post__reading-time">
                      {post.readingMinutes} min read
                    </span>
                  </>
                ) : null}
                <ShareButton
                  className="post__share"
                  title={post.title}
                  text={post["meta-description"] || undefined}
                  url={postUrl}
                />
              </div>

              <meta itemProp="datePublished" content={post.date} />
              <meta itemProp="description" content={post.abstract} />

              {post.tags && (
                <p className="post__tags">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={tagHref(tag)} className="tag">
                      {formatTag(tag)}
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
            <figure className="author_headshot">
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
              content="https://www.linkedin.com/in/hreinl/"
            />
            <meta itemProp="sameAs" content="https://github.com/drublic" />
          </section>
        </PageShell>
      </main>

      <aside className="main">
        <div className="container">
          <BlogMessage />
        </div>

        <div className="container container--large">
          <div className="post__crosslinks">
            <UpdatesArticleList
              posts={relatedPosts}
              baseUrl={category.slug}
              variant="compact"
              label="Keep Reading"
              heading="Latest publications"
            />
          </div>

          <div className="post__navigation">
            <Link
              href={category.slug}
              title="Back to overview"
              className="button button--outline"
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
