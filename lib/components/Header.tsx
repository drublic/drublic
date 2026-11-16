import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TransitionLink } from "./TransitionLink";
import Navigation from "./Navigation";

type HeaderProps = {
  noNavigation?: boolean;
};

/**
 * Site header — Multiverse floating pill on every page.
 * Transparent until scroll, then pill. Homepage uses light type over the hero.
 */
const Header = ({ noNavigation = false }: HeaderProps) => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 16);
  }, [router.asPath]);

  return (
    <>
      <header
        className={classNames("header", "header--overlay", {
          "header--home": isHome,
          "header--no-navigation": noNavigation,
          "header--scrolled": scrolled,
        })}
      >
        <div className="header__inner">
          <TransitionLink
            href="/"
            className="header__title"
            title="Hans Reinl — home"
          >
            <span className="header__title__line">
              Hans Reinl <span className="cursor">▁</span>
            </span>
          </TransitionLink>

          {!noNavigation && (
            <>
              <Navigation variant="overlay" />

              <div className="header__actions">
                <TransitionLink
                  href="/work-with-me"
                  className="header__cta button"
                >
                  Work with me
                </TransitionLink>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Fixed overlay is out of flow — reserve space on non-home pages */}
      {!isHome && !noNavigation ? (
        <div className="header-spacer" aria-hidden="true" />
      ) : null}
    </>
  );
};

export default Header;
