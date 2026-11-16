import React, { FunctionComponent } from "react";
import Layout from "../../lib/components/Layout";
import PageHeader from "../../lib/components/PageHeader";
import PageShell from "../../lib/components/PageShell";
import UpdatesArticleList from "../../lib/components/UpdatesArticleList";
import RailSection from "../components/RailSection";
import JsonLd, { breadcrumbJsonLd } from "../components/JsonLd";

type Props = {
  posts: any[];
  category: { name: string; link: string };
  title: string;
  description?: string;
  baseUrl: string;
};

const List: FunctionComponent<Props> = ({
  title,
  description,
  posts,
  category,
  baseUrl,
}) => {
  return (
    <Layout title={title} description={description}>
      <JsonLd
        data={breadcrumbJsonLd([{ name: category.name, path: category.link }])}
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
            label="Writing"
            title={category.name}
            lead={<p>{description || `Articles in ${category.name}.`}</p>}
          />
        </PageShell>

        <RailSection
          label="Blog"
          heading={`${category.name} posts`}
          headingId="category-posts-heading"
          className="updates--page"
        >
          <UpdatesArticleList posts={posts ?? []} baseUrl={baseUrl} />
        </RailSection>
      </main>
    </Layout>
  );
};

export default List;
