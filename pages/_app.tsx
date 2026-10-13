import React, { FunctionComponent } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitionProvider } from "../lib/components/ViewTransitionProvider";
import { roboto, sora, vollkorn } from "../lib/fonts";
import "../styles/main.css";
import "@toast-ui/editor/dist/toastui-editor.css";

type Props = {
  Component: any;
  pageProps: any;
};

const fontVariables = `${sora.variable} ${roboto.variable} ${vollkorn.variable}`;

const MyApp: FunctionComponent<Props> = ({ Component, pageProps }) => {
  return (
    <ViewTransitionProvider>
      <div className={`fonts-root ${fontVariables}`}>
        <Component {...pageProps} />
      </div>
      {/* Cookie banner is injected on body (outside fonts-root); pin it to Roboto */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .termsfeed-com---nb.termsfeed-com---reset,
            .termsfeed-com---nb.termsfeed-com---palette-light .cc-nb-title,
            .termsfeed-com---palette-light .cc-nb-main-container,
            .termsfeed-com---palette-light .cc-nb-main-container .cc-nb-okagree,
            .termsfeed-com---palette-light .cc-nb-main-container .cc-nb-reject,
            .termsfeed-com---palette-light .cc-nb-main-container .cc-nb-changep {
              font-family: ${roboto.style.fontFamily}, "Roboto", sans-serif !important;
            }
          `,
        }}
      />
      <Analytics />
      <SpeedInsights />
    </ViewTransitionProvider>
  );
};

export default MyApp;
