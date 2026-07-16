import Link from "next/link";

const Footer = () => (
  <>
    <div className="footer_links">
      <div className="container container--large">
        <h3>Explore</h3>
        <div className="footer_lists">
          <div className="footer_column">
            <h4 className="footer_column__title">About</h4>
            <ul className="footer_list">
              <li>
                <Link href="/resume" title="About Hans Christian Reinl">
                  About me
                </Link>
              </li>
              <li>
                <Link href="/what-i-want-to-do" title="Work with Hans">
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
                <Link href="/about/writings" title="External writings">
                  Writings
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

          <div className="footer_column">
            <h4 className="footer_column__title">Writing</h4>
            <ul className="footer_list">
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
                <Link
                  href="/blog?tag=engineering%20leadership"
                  title="Blog posts related to Engineering Leadership"
                >
                  Engineering Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?tag=people%20management"
                  title="Blog posts related to People Management"
                >
                  People Management
                </Link>
              </li>
              <li>
                <Link href="/about/writings" title="External writings">
                  External writings
                </Link>
              </li>
              <li>
                <Link href="/feed" title="RSS feed">
                  RSS Feed
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer_column">
            <h4 className="footer_column__title">Legal</h4>
            <ul className="footer_list">
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
              <li>
                <a href="/llms.txt" title="LLM-readable site overview">
                  llms.txt
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="footer__inner">
        <ul className="social">
          <li className="social__link social__link--github">
            <a
              href="https://github.com/drublic"
              title="GitHub/drublic"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="social__link social__link--linkedin">
            <a
              href="https://www.linkedin.com/in/hansreinl/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <p>Made with love. {new Date().getFullYear()}. Cologne, Germany.</p>

        <a href="#" className="visuallyhidden">
          go back up to top
        </a>
      </div>
    </footer>

    <button
      className="layout__scroll-top is-hidden"
      onClick={() => scrollTo(0, 0)}
      title="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon"
      >
        <path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" />
      </svg>
    </button>
  </>
);

export default Footer;
