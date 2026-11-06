import Link from "next/link";
import { TransitionLink } from "./TransitionLink";

const Footer = () => (
  <>
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__mast">
          <TransitionLink
            href="/"
            className="footer__brand"
            title="Hans Reinl — home"
          >
            Hans Reinl <span className="cursor">▁</span>
          </TransitionLink>
          <p className="footer__tagline">
            AI coaching, systems &amp; engineering advice from Cologne.
          </p>
          <a
            className="footer__mail"
            href="mailto:hi@hansreinl.de"
            title="Email Hans"
          >
            hi@hansreinl.de
          </a>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <div className="footer__column">
            <h2 className="footer__heading">About</h2>
            <ul className="footer__list">
              <li>
                <Link href="/resume" title="About Hans Christian Reinl">
                  About me
                </Link>
              </li>
              <li>
                <Link
                  href="/what-i-want-to-do"
                  title="AI coaching, advisory, and speaking"
                >
                  Work with me
                </Link>
              </li>
              <li>
                <Link href="/portfolio" title="Portfolio and projects">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about/speaking" title="Conference speaking">
                  Speaking
                </Link>
              </li>
              <li>
                <Link href="/podcasting" title="Working Draft podcast">
                  Podcasting
                </Link>
              </li>
              <li>
                <Link href="/info" title="Press and speaker information">
                  Press info
                </Link>
              </li>
              <li>
                <Link
                  href="/engineering-metrics-program"
                  title="Engineering Metrics Program"
                >
                  Engineering Metrics
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Writing</h2>
            <ul className="footer__list">
              <li>
                <Link href="/blog" title="Blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/ai" title="AI articles">
                  AI
                </Link>
              </li>
              <li>
                <Link href="/leadership" title="Engineering leadership articles">
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?tag=agentic%20engineering"
                  title="Blog posts about agentic engineering"
                >
                  Agentic Engineering
                </Link>
              </li>
              <li>
                <Link href="/about/writings" title="External writings">
                  External writings
                </Link>
              </li>
              <li>
                <Link href="/feed" title="RSS feed">
                  RSS
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h2 className="footer__heading">Elsewhere</h2>
            <ul className="footer__list">
              <li>
                <a
                  href="https://github.com/drublic"
                  title="GitHub/drublic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/hreinl/"
                  title="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="/llms.txt" title="LLM-readable site overview">
                  llms.txt
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer__meta">
          <p className="footer__credit">
            <span className="footer__credit-mark" aria-hidden="true">
              ▁
            </span>
            {new Date().getFullYear()} · Cologne, Germany
          </p>
          <ul className="footer__legal">
            <li>
              <Link href="/legal" title="Imprint">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/privacy" title="Privacy protection">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    <button
      className="layout__scroll-top is-hidden"
      onClick={() => scrollTo(0, 0)}
      title="Scroll to top"
      type="button"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
        aria-hidden="true"
      >
        <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
      </svg>
    </button>
  </>
);

export default Footer;
