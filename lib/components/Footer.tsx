import Link from "next/link";

const Footer = () => (
  <>
    <footer className="footer">
      <p>
        Made with love. {new Date().getFullYear()}. Cologne, Germany.{" "}
        <Link href="/legal">
          <a title="Who does this stuff?">Legal/Impressum</a>
        </Link>{" "}
        &bull;{" "}
        <Link href="/privacy">
          <a title="Privacy Protection Page">Privacy</a>
        </Link>
      </p>

      <ul className="social">
        <li className="social__link social__link--github">
          <a href="https://github.com/drublic" title="GitHub/drublic">
            GitHub
          </a>
        </li>
        <li className="social__link social__link--linkedin">
          <a href="https://www.linkedin.com/in/hreinl/" title="LinkedIn">
            LinkedIn
          </a>
        </li>
        <li className="social__link social__link--twitter">
          <a href="https://twitter.com/drublic" title="Twitter: @drublic">
            Twitter
          </a>
        </li>
      </ul>

      <a href="#" className="visuallyhidden">
        go back up to top
      </a>
    </footer>

    <button
      className="layout__scroll-top is-hidden"
      onClick={() => scrollTo(0, 0)}
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
