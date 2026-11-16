import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import { TransitionLink } from "./TransitionLink";

type NavigationProps = {
  variant?: "default" | "overlay";
};

const Navigation = ({ variant = "default" }: NavigationProps) => {
  const router = useRouter();
  const [underlineStyle, setUnderlineStyle] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  const getActiveItem = () => {
    if (router.asPath === "/") return "start";
    if (router.asPath.startsWith("/work-with-me")) return "work";
    if (router.asPath === "/resume") return "me";
    if (router.asPath === "/podcasting") return "podcasting";
    if (router.asPath.startsWith("/blog")) return "blog";
    return null;
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (rootRef.current && target && !rootRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [menuOpen]);

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
    }, 100);

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
    _itemKey: string,
    event: React.MouseEvent<HTMLLIElement>
  ) => {
    updateUnderlinePosition(event.currentTarget);
  };

  const handleMouseLeave = () => {
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
    <nav
      ref={rootRef}
      className={classNames("navigation js-navigation", {
        "navigation--overlay": variant === "overlay",
        "navigation--open": menuOpen,
      })}
      id="menu"
      role="navigation"
    >
      <a href="#content" className="visuallyhidden">
        Skip to Content
      </a>

      <button
        type="button"
        className="navigation__toggle"
        aria-expanded={menuOpen}
        aria-controls="navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="visuallyhidden">
          {menuOpen ? "Close menu" : "Open menu"}
        </span>
        <span className="navigation__toggle-bar" aria-hidden="true" />
        <span className="navigation__toggle-bar" aria-hidden="true" />
      </button>

      <ul ref={navRef} id="navigation" className="navigation__menu">
        <li
          data-nav-item="start"
          className={classNames({
            "is-active": router.asPath === "/",
          })}
          onMouseEnter={(e) => handleMouseEnter("start", e)}
          onMouseLeave={handleMouseLeave}
        >
          <TransitionLink
            href="/"
            title="Home"
          >
            Start
          </TransitionLink>
        </li>
        <li
          data-nav-item="work"
          className={classNames({
            "is-active": router.asPath.startsWith("/work-with-me"),
          })}
          onMouseEnter={(e) => handleMouseEnter("work", e)}
          onMouseLeave={handleMouseLeave}
        >
          <TransitionLink
            href="/work-with-me"
            title="Coaching, advisory and speaking"
          >
            Work
          </TransitionLink>
        </li>
        <li
          data-nav-item="me"
          className={classNames({
            "is-active": router.asPath === "/resume",
          })}
          onMouseEnter={(e) => handleMouseEnter("me", e)}
          onMouseLeave={handleMouseLeave}
        >
          <TransitionLink href="/resume" title="About Hans Reinl">
            Me
          </TransitionLink>
        </li>
        <li
          data-nav-item="podcasting"
          className={classNames({
            "is-active": router.asPath === "/podcasting",
          })}
          onMouseEnter={(e) => handleMouseEnter("podcasting", e)}
          onMouseLeave={handleMouseLeave}
        >
          <TransitionLink
            href="/podcasting"
            title="Working Draft podcast"
          >
            Podcasting
          </TransitionLink>
        </li>
        <li
          data-nav-item="blog"
          className={classNames({
            "is-active": router.asPath.startsWith("/blog"),
          })}
          onMouseEnter={(e) => handleMouseEnter("blog", e)}
          onMouseLeave={handleMouseLeave}
        >
          <TransitionLink href="/blog" title="Writing on AI, engineering and leadership">
            Blog
          </TransitionLink>
        </li>
      </ul>

      <div className="navigation__underline" style={underlineStyle} />
    </nav>
  );
};

export default Navigation;
