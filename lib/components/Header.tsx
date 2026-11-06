import classNames from "classnames";
import React from "react";
import { TransitionLink } from "./TransitionLink";
import Navigation from "./Navigation";

const Header = ({ noNavigation = false }) => (
  <header
    className={classNames("header", {
      "header--no-navigation": noNavigation,
    })}
  >
    <div className="header__inner">
      <TransitionLink
        href="/"
        className="header__title"
        title="Website of Hans Reinl - @drublic"
      >
        <span className="header__title__line">
          Hans Reinl <span className="cursor">▁</span>
        </span>
      </TransitionLink>

      <div className="header__spacer" />

      {!noNavigation && <Navigation />}
    </div>
  </header>
);

export default Header;
