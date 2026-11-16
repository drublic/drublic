import Link from "next/link";
import React from "react";
import UpdatesArticleList from "./UpdatesArticleList";
import RailSection from "./RailSection";

const IndexArticles = ({ posts }) => {
  const featured = posts?.slice(0, 3) ?? [];

  return (
    <RailSection
      label="Blog"
      heading="From the Blog"
      headingId="updates-heading"
    >
      <UpdatesArticleList posts={featured} />

      <p className="updates__footer">
        <Link href="/blog/" className="button button--outline">
          More on the blog
        </Link>
      </p>
    </RailSection>
  );
};

export default IndexArticles;
