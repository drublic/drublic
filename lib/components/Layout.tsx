import React from "react";
import NextHead from "next/head";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import Cookiescript from "./Cookiescript";

const Layout = ({
  title = "drublic – Software Architecture - Hans Christian Reinl, Cologne",
  description = "Software Development &amp;amp; Architecture, Hans Christian Reinl - Projects: HTML5 Boilerplate, Working Draft - Node.js, React, CSS, JavaScript - Scrum",
  children,
}) => {
  return (
    <>
      <NextHead>
        <Head title={title} description={description} />
      </NextHead>

      <div
        dangerouslySetInnerHTML={{
          __html: `
          <script async>document.documentElement.className += ' js';</script>`,
        }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: `
          <script async>
            (function (i, s, o, g, r, a, m) {
              i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
              }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-41497561-1', 'auto');
            ga('set', 'anonymizeIp', true);
            ga('send', 'pageview');
          </script>`,
        }}
      />

      <div
        dangerouslySetInnerHTML={{
          __html: `
          <script async src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>`,
        }}
      />

      <Header />

      {children}

      <Footer />
      <Cookiescript />
    </>
  );
};

export default Layout;
