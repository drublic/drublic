import React, { FunctionComponent } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitionProvider } from "../lib/components/ViewTransitionProvider";
import "../styles/main.css";

type Props = {
  Component: any;
  pageProps: any;
};

const MyApp: FunctionComponent<Props> = ({ Component, pageProps }) => {
  return (
    <ViewTransitionProvider>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ViewTransitionProvider>
  );
};

export default MyApp;
