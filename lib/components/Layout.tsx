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
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-45228510-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-45228510-1');
          </script>`,
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
