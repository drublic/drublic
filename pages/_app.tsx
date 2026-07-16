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
      <Analytics />
      <SpeedInsights />
    </ViewTransitionProvider>
  );
};

export default MyApp;
