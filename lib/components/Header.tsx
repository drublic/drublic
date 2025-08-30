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
        role="banner"
        className="header__title"
        title="Website of Hans Reinl - @drublic"
      >
        <h1 className="header__title__line">
          Hans Reinl <span className="cursor">▁</span>
        </h1>
      </TransitionLink>

      <div className="header__spacer" />

      {!noNavigation && <Navigation />}
    </div>
  </header>
);

export default Header;
