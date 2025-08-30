import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="navigation js-navigation" id="menu" role="navigation">
      <a href="#content" className="visuallyhidden">
        Skip to Content
      </a>

      <ul id="navigation" className="navigation__menu">
        <li
          className={classNames({
            "is-active": router.asPath === "/",
          })}
        >
          <Link href="/" title="Hans Reinl - Front-End Architecture">
            Start
          </Link>
        </li>
        <li
          className={classNames({
            "is-active": router.asPath === "/resume",
          })}
        >
          <Link href="/resume" title="Read more about me">
            Me
          </Link>
        </li>
        <li
          className={classNames({
            "is-active": router.asPath === "/podcasting",
          })}
        >
          <Link
            href="/podcasting"
            title="Working Draft Podcast, latest equipment"
          >
            Podcasting
          </Link>
        </li>

        <li
          className={classNames({
            "is-active": router.asPath.startsWith("/blog"),
          })}
        >
          <Link href="/blog" title="Get some cutting edge goodness">
            Blog
          </Link>
        </li>
        {/* <li
          className={classNames("navigation__menu__hidden-mobile", {
            "is-active": router.asPath === "/portfolio",
          })}
        >
          <Link href="/portfolio">
            <a title="View some of the work I do">Portfolio</a>
          </Link>
        </li> */}

        {/* <li className="navigation__menu__hidden-mobile">
      <a href="/#hire-me" title="I do client work and propably would love to work with you">Hire me</a>
</li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
