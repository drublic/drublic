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

        {/* Projects */}
        <section className="container work" id="work">
          <h2>Companies I worked for</h2>

          <div className="work__for">
            <Clients />
          </div>
        </section>

        {/* Hire Me */}
        {/* <section className="container hire-me" id="hire-me">
          <h2>Hire Me</h2>

          <p>I do work for businesses, agencies and other clients that value great front-end work.</p>
          <p>Work that I like to do includes consulting and educational work (workshops et cetera) as well as projects that
            have a focus on JavaScript application development or a deep need of scalability and consistency throughout a
            website. <a href="/portfolio/">Review the projects I am involved in</a> to get an overview of my
            skills.</p>
          <p>If you would like me to deliver a talk on your conference <a href="/portfolio/">please see my
              projects</a> and decide whether I am a good choice for yourself.</p>

          <p>Contact me via e-mail if you think I am a fit for your project:
            <a href="mailto:info@drublic.de" title="I am a Software Architect, hire me!" data-ga-category="Contact"
              data-ga-action="Hire" data-ga-label="Contact me">info@drublic.de</a>.
          </p>
        </section> */}
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
