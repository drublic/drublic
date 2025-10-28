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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const initGallery = () => {
                  const gallery = document.querySelector('.gallery');
                  if (!gallery) {
                    setTimeout(initGallery, 100);
                    return;
                  }

                  const images = Array.from(gallery.querySelectorAll('img'));
                  if (images.length === 0) {
                    setTimeout(initGallery, 100);
                    return;
                  }

                  // Add click handlers to gallery links to open images in new tab
                  const links = gallery.querySelectorAll('li > a');

                  links.forEach((link, index) => {
                    const img = link.querySelector('img');
                    if (img) {
                      // Set the href to the image source
                      link.href = img.src;
                      link.target = '_blank';
                      link.rel = 'noopener noreferrer';
                    }
                  });
                };

                initGallery();
              });
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
