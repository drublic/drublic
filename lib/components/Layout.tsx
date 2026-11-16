import React, { type ReactNode } from "react";
import Head from "./Head";
import Header from "./Header";
import Footer from "./Footer";
import Cookiescript from "./Cookiescript";
import JsonLd, { personJsonLd, websiteJsonLd } from "./JsonLd";

type LayoutProps = {
  title?: string;
  description?: string;
  image?: string;
  ogType?: string;
  articlePublishedTime?: string;
  articleAuthor?: string;
  noIndex?: boolean;
  noNavigation?: boolean;
  noFooter?: boolean;
  children: ReactNode;
};

const Layout = ({
  title = "AI-Native Systems Architect & Engineering Advisor - Cologne",
  description = `Hans Christian Reinl, AI-Native Systems Architect & Engineering Advisor in Cologne. Building AI-native products, advising engineering organizations, and co-hosting Working Draft. Next.js, TypeScript, Vercel AI SDK.`,
  image = undefined,
  ogType = "website",
  articlePublishedTime,
  articleAuthor,
  noIndex = false,
  noNavigation = false,
  noFooter = false,
  children,
}: LayoutProps) => {
  return (
    <>
      <Head
        title={`${title} | Hans Reinl`}
        description={description}
        image={image}
        ogType={ogType}
        articlePublishedTime={articlePublishedTime}
        articleAuthor={articleAuthor}
        noIndex={noIndex}
      />

      <JsonLd data={[personJsonLd, websiteJsonLd]} />

      {/*
        Google Analytics is inert (type="text/plain") until the cookie consent
        manager activates it after the visitor accepts "tracking" cookies.
      */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <script type="text/plain" data-cookie-consent="tracking" async src="https://www.googletagmanager.com/gtag/js?id=G-XSLJDELHFG"></script>
            <script type="text/plain" data-cookie-consent="tracking">
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-XSLJDELHFG');
            </script>`,
        }}
      />

      <Header noNavigation={noNavigation} />

      {/* Page components own the <main> landmark to avoid nested mains */}
      <div className="page-content">
        {children}
      </div>

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
