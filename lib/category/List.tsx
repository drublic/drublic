import React, { FunctionComponent } from "react";
import Link from "next/link";
import ArticleTeaser from "../../lib/components/ArticleTeaser";
import Layout from "../../lib/components/Layout";

type Props = {
  posts: any[];
  category: { name: string; link: string };
  title: string;
  baseUrl: string;
};

const List: FunctionComponent<Props> = ({
  title,
  posts,
  category,
  baseUrl,
}) => {
  return (
    <Layout title={title}>
      <main
        id="main"
        className="main"
        role="main"
        itemScope
        itemType="http://schema.org/Blog"
      >
        <div className="container">
          <div className="breadcrumb">
            <ol>
              <li>
                <Link href="/">hansreinl.de</Link>
              </li>
              <li>
                <Link href={category.link}>{category.name}</Link>
              </li>
            </ol>
          </div>
          {posts.map(({ title, slug, date, abstract, tags, image }) => (
            <ArticleTeaser
              key={slug}
              title={title}
              date={date}
              slug={slug}
              abstract={abstract}
              tags={tags}
              image={image}
              baseUrl={baseUrl}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default List;
