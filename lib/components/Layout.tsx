import React from "react";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import Cookiescript from "./Cookiescript";
import { useRouter } from "next/router";

const Layout = ({
  title = "Hans Reinl - Engineering Management & Software Architecture - Hans Christian Reinl, Cologne",
  description = `Engineering Management & Software Architecture, Hans Christian Reinl - Working Draft, Node.js, React, CSS, JavaScript & Agile`,
  image = undefined,
  noIndex = false,
  noNavigation = false,
  noFooter = false,
  children,
}) => {
  const router = useRouter();

  // Get page type for view transitions
  const getPageType = (path: string): string => {
    if (path === "/") return "home";
    if (path.startsWith("/blog")) return "blog";
    if (path.startsWith("/ai")) return "ai";
    if (path.startsWith("/leadership")) return "leadership";
    if (path === "/resume") return "resume";
    if (path === "/podcasting") return "podcasting";
    if (path === "/portfolio") return "portfolio";
    return "default";
  };

  const pageType = getPageType(router.asPath);

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

      <main
        className="page-content"
        style={
          {
            viewTransitionName: pageType,
          } as React.CSSProperties & { viewTransitionName: string }
        }
      >
        {children}
      </main>

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
