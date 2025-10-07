import React from "react";
import Layout from "../lib/components/Layout";
import Card from "../lib/components/Card";
import Grid from "../lib/components/Grid";
import ProcessFlow from "../lib/components/ProcessFlow";
import Image from "next/image";

const EngineeringMetricsProgram = () => (
  <Layout
    title="The Engineering Metrics Program for your Organisation"
    description="Establish a light, actionable Engineering Metrics Program that improves delivery flow and team health in 6 weeks."
  >
    <main id="content" className="main" role="main">
      <div className="container">
        <h1 className="hero-title">
          The Engineering Metrics Program for your Organisation
        </h1>

        <p className="hero-subtitle">
          Establish a light, actionable Engineering Metrics Program for
          engineering leaders that improves delivery flow and team health in 6
          weeks.
        </p>
      </div>

      <div className="container container--large">
        <ProcessFlow />
      </div>

      <div className="container">
        <Grid>
          <Card
            title="Why does this matter?"
            items={[
              "Without measurement, we guess.",
              "With guesses, we misdiagnose.",
              "Misdiagnosis costs time, and trust.",
            ]}
          />
          <Card
            title="Outcomes we want"
            items={[
              "Faster, more predictable delivery.",
              "Fewer surprises in production.",
              "Shared facts for better decisions.",
              "A common language.",
            ]}
          />
        </Grid>
      </div>

      <div className="container container--large">
        <h2 className="section-title">Operating Rules</h2>
        <Grid>
          <Card subtitle="Metrics inform. They don't punish." />
          <Card subtitle="Don't rank teams by metrics." />
          <Card subtitle="Trends over single points." />
          <Card subtitle="If a metric turns red, try one specific action for one sprint." />
        </Grid>
      </div>

      <div className="container container--large">
        <h2 className="section-title">Which Metrics Should I Choose?</h2>
        <p className="my-2 text-center">
          Start with 3-5 metrics from this set as a good starting point.
        </p>
        <Grid>
          <Card
            icon={
              <img
                src="/icons/delivery.svg"
                alt="Delivery"
                width={48}
                height={48}
              />
            }
            title="Delivery"
            items={[
              "Deployment frequency (DF): How often do we deploy to production?",
              "Lead time for changes: Time from first commit to production.",
            ]}
          />
          <Card
            icon={
              <img
                src="/icons/quality.svg"
                alt="quality and stability"
                width={48}
                height={48}
              />
            }
            title="Quality and stability"
            items={[
              "Change failure rate (CFR): Percentage of deployments causing a rollback or fix.",
              "MTTR: Time to restore service after a customer-impacting incident.",
            ]}
          />
        </Grid>
        <Grid className="my-1">
          <Card
            icon={
              <img src="/icons/flow.svg" alt="Flow" width={48} height={48} />
            }
            title="Flow"
            items={[
              "WIP or flow efficiency: How much work is in progress and how much time work spends actively moving vs. waiting.",
            ]}
          />
          <Card
            icon={
              <img
                src="/icons/health.svg"
                alt="Team health"
                width={48}
                height={48}
              />
            }
            title="Team health"
            items={[
              "Team pulse: Short weekly check-in across clarity, focus, and sustainability.",
            ]}
          />
        </Grid>
      </div>
      <div className="container container--small">
        <Card title="No Data? Start Anyway." className="card--highlight">
          <ul>
            <li>
              If DF and Lead Time aren't automated: count deploys manually for 2
              weeks.
            </li>
            <li>
              If CFR is unclear: flag any hotfix within 24 hours as a failure.
            </li>
            <li>
              If MTTR missing: record 'restore to green' times in on-call notes.
            </li>
            <li>Replace manual steps with CI/CD and incident tooling later.</li>
          </ul>
        </Card>
      </div>

      <div className="container">
        <h2 className="section-title">Two Key Rituals</h2>
        <p className="my-2 text-center">
          Introduce the following two key rituals to make your Engineering
          Metrics Program successful.
        </p>

        <Grid>
          <Card
            number="01"
            title="The Weekly Metrics Snapshot"
            items={[
              "What changed vs. last week?",
              "Any thresholds breached?",
              "What's the smallest experiment we'll try next week?",
            ]}
          />
          <Card
            number="02"
            title="The Monthly Retro"
            items={[
              "Keep, change, drop metrics.",
              "Decide on next month's focus area.",
            ]}
          />
        </Grid>

        <p className="my-2">
          These rituals create a sustainable rhythm that keeps your Metrics
          Program actionable and continuously improving. The weekly cadence
          ensures rapid feedback loops, while monthly reviews provide the space
          for strategic adjustments and deeper reflection on what's working.
        </p>
      </div>

      <div className="container container--large">
        <h2 className="section-title">Visibility</h2>
        <Grid>
          <Card
            number="01"
            title="Share your metrics frequently"
            description="Regular communication with peer teams and stakeholders builds trust and alignment."
          />
          <Card
            number="02"
            title="Have one shared dashboard per team"
            description="Centralized, accessible view that everyone can reference and understand."
          />
          <Card
            number="03"
            title="Post a snapshot every Friday"
            description="Consistent communication rhythm with three key bullets:"
            items={[
              "Biggest change this week",
              "Hypothesis for next week",
              "Ask or help needed",
            ]}
          />
        </Grid>
      </div>

      <div className="container">
        <h2 className="section-title">Getting Started in 30 Minutes</h2>
        <Grid variant="steps">
          <Card
            number={1}
            variant="step"
            description="Create a team documentation 'Engineering Metrics Program'."
          />
          <Card
            number={2}
            variant="step"
            description="Pick 3 metrics you can measure tomorrow and fill with initial value."
          />
          <Card
            number={3}
            variant="step"
            description="Schedule a 30-minute weekly review."
          />
          <Card
            number={4}
            variant="step"
            description="Assign an EM/TPM as the dedicated facilitator to drive consistency."
          />
        </Grid>
      </div>

      <div className="container container--large">
        <h2 className="section-title">6-Week Program Plan</h2>
        <Grid>
          <Card
            number="Week 0"
            subtitle="Set definitions, connect data, dry run."
          />
          <Card
            number="Weeks 1–5"
            subtitle="Run weekly loop and one experiment per week."
          />
          <Card
            number="Week 6"
            subtitle="Review outcomes. Decide to scale, adjust, or stop."
          />
        </Grid>
      </div>

      <div className="container">
        <h2 className="section-title">Let's get started 🚀</h2>
      </div>

      <div className="container">
        <section
          className="claim author"
          itemScope
          itemType="http://schema.org/Person"
        >
          <figure className="claim__me">
            <Image
              src="/img/me.jpg"
              alt="Hans Reinl"
              width={128}
              height={128}
            />
          </figure>

          <div className="author_content">
            <h3>About the Author</h3>

            <p
              itemProp="description"
              className="author_description typography--body1"
            >
              My name is Hans Reinl. I am an Engineering and Leadership
              Consultant with a passion for technology and a focus on leading
              and developing strong engineering teams.
            </p>
            <p className="author_description typography--body1">
              I created this Engineering Metrics Program to help organizations
              like yours measure what matters and drive real improvements.
              <strong> Ready to implement this in your team?</strong>{" "}
              <a href="mailto:hi@hansreinl.de">Let's work together</a> to
              establish an effective metrics framework, strengthen your
              engineering teams, and accelerate your delivery.
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
      </div>
    </main>
  </Layout>
);

export default EngineeringMetricsProgram;
