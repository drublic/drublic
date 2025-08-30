import React from "react";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import Cookiescript from "./Cookiescript";

const Layout = ({
  title = "Hans Reinl - Engineering Management & Software Architecture - Hans Christian Reinl, Cologne",
  description = `Engineering Management & Software Architecture, Hans Christian Reinl - Working Draft, Node.js, React, CSS, JavaScript & Agile`,
  image = undefined,
  noIndex = false,
  noNavigation = false,
  noFooter = false,
  children,
}) => {
  return (
    <>
      <Head
        title={`${title} | Hans Reinl`}
        description={description}
        image={image}
        noIndex={noIndex}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: `
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XSLJDELHFG"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-XSLJDELHFG');
            </script>`,
        }}
      />

      <Header noNavigation={noNavigation} />

      {children}

      {!noFooter && (
        <>
          <Footer />
          <Cookiescript />
        </>
      )}
    </>
  );
};

export default Layout;
