import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";

const Navigation = () => {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef<HTMLUListElement>(null);

  // Get the current active item based on router path
  const getActiveItem = () => {
    if (router.asPath === "/") return "start";
    if (router.asPath === "/resume") return "me";
    if (router.asPath === "/podcasting") return "podcasting";
    if (router.asPath.startsWith("/blog")) return "blog";
    return null;
  };

  // Update underline position when active item changes
  useEffect(() => {
    const activeItem = getActiveItem();
    if (activeItem && navRef.current) {
      const activeElement = navRef.current.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement;
      if (activeElement) {
        updateUnderlinePosition(activeElement);
      }
    }
  }, [router.asPath]);

  // Set initial underline position
  useEffect(() => {
    const timer = setTimeout(() => {
      const activeItem = getActiveItem();
      if (activeItem && navRef.current) {
        const activeElement = navRef.current.querySelector(
          `[data-nav-item="${activeItem}"]`
        ) as HTMLElement;
        if (activeElement) {
          updateUnderlinePosition(activeElement);
        }
      }
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  const updateUnderlinePosition = (element: HTMLElement) => {
    if (navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      setUnderlineStyle({
        left: `${elementRect.left - navRect.left}px`,
        width: `${elementRect.width}px`,
        opacity: 1,
      });
    }
  };

  const handleMouseEnter = (
    itemKey: string,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    setHoveredItem(itemKey);
    updateUnderlinePosition(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    // Return to active item position
    const activeItem = getActiveItem();
    if (activeItem && navRef.current) {
      const activeElement = navRef.current.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement;
      if (activeElement) {
        updateUnderlinePosition(activeElement);
      }
    }
  };

  return (
    <nav className="navigation js-navigation" id="menu" role="navigation">
      <a href="#content" className="visuallyhidden">
        Skip to Content
      </a>

      <ul ref={navRef} id="navigation" className="navigation__menu">
        <li
          data-nav-item="start"
          className={classNames({
            "is-active": router.asPath === "/",
          })}
          onMouseEnter={(e) => handleMouseEnter("start", e)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/" title="Hans Reinl - Front-End Architecture">
            Start
          </Link>
        </li>
        <li
          data-nav-item="me"
          className={classNames({
            "is-active": router.asPath === "/resume",
          })}
          onMouseEnter={(e) => handleMouseEnter("me", e)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href="/resume" title="Read more about me">
            Me
          </Link>
        </li>
        <li
          data-nav-item="podcasting"
          className={classNames({
            "is-active": router.asPath === "/podcasting",
          })}
          onMouseEnter={(e) => handleMouseEnter("podcasting", e)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href="/podcasting"
            title="Working Draft Podcast, latest equipment"
          >
            Podcasting
          </Link>
        </li>

        <li
          data-nav-item="blog"
          className={classNames({
            "is-active": router.asPath.startsWith("/blog"),
          })}
          onMouseEnter={(e) => handleMouseEnter("blog", e)}
          onMouseLeave={handleMouseLeave}
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

      {/* Single animated underline */}
      <div className="navigation__underline" style={underlineStyle} />
    </nav>
  );
};

export default Navigation;
