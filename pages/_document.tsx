import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `</style>
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:wght@300;700&family=Vollkorn:ital@1&display=swap"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <style>`,
          }}
        ></style>
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@900&family=Roboto:wght@300;700&family=Vollkorn:ital@1&display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
