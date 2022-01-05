import Link from "next/link";
import Layout from "../lib/components/Layout";
import Clients from "../lib/components/Clients";
import IndexArticles from "../lib/components/IndexArticles";
import { getPosts } from "./api/posts";

const Index = ({ posts }) => {
  return (
    <Layout>
      <main id="content" className="main" role="main">
        <section className="claim">
          <div className="container">
            <div className="claim__desc">
              <p>
                Working with and developing teams is what I am really passionate
                about. Dealing with complex distributed mirco-service based
                architectures is my daily business. And I love it.
              </p>
              <p>
                Currently I work for{" "}
                <a href="https://www.prosiebensat1.com/">ProSiebenSat.1</a> as
                Vice President Engineering.
              </p>
            </div>

            <p>
              <Link href="/resume">
                <a
                  className="button"
                  title="My skills, my background"
                  data-ga-category="Resume"
                  data-ga-action="Resume"
                  data-ga-label="Resume"
                  style={{ marginTop: "1rem" }}
                >
                  More about me
                </a>
              </Link>
            </p>
          </div>
        </section>

        <IndexArticles posts={posts} />

        <section className="container work" id="work">
          <h2>Companies I worked for</h2>

          <div className="work__for">
            <Clients />
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Index;
