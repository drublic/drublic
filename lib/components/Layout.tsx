import React from "react";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import Cookiescript from "./Cookiescript";

const Layout = ({
  title = "drublic - Engineering Management & Software Architecture - Hans Christian Reinl, Cologne",
  description = `Engineering Management & Software Architecture, Hans Christian Reinl - Working Draft, Node.js, React, CSS, JavaScript & Agile`,
  image = undefined,
  children,
}) => {
  return (
    <>
      <Head
        title={`${title} - Engineering Management & Software Architecture - Hans Christian Reinl, Cologne `}
        description={description}
        image={image}
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

      <Header />

      {children}

      <Footer />
      <Cookiescript />
    </>
  );
};

export default Layout;
