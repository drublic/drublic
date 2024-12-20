import Link from "next/link";

const Footer = () => (
  <>
    <div className=" footer_links">
      <div className="container container--large">
        <h3>Content Pages</h3>
        <div className="footer_lists">
          <ul className="footer_list">
            <li>
              <Link href="/blog" title="Blog">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/blog?tag=ai" title="Blog posts related to AI">
                AI & Generative AI
              </Link>
            </li>
            <li>
              <Link href="/ai" title="More blog posts related to AI">
                More content on AI
              </Link>
            </li>
          </ul>
          <ul className="footer_list">
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
                href="/leadership"
                title="More blog posts related to Engineering Management"
              >
                More content on Engineering Management
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
          </ul>

          <div style={{ flex: 1 }}></div>

          <ul className="footer_list">
            <li>
              <Link href="/legal" title="Who does this stuff?">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/privacy" title="Privacy Protection Page">
                Privacy Note
              </Link>
            </li>
          </ul>
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
            >
              GitHub
            </a>
          </li>
          <li className="social__link social__link--linkedin">
            <a
              href="https://www.linkedin.com/in/hreinl/"
              title="LinkedIn"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <p>Made with love. {new Date().getFullYear()}. Cologne, Germany. </p>

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
