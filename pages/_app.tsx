import React, { FunctionComponent } from "react";
import "../styles/main.css";

type Props = {
  Component: any;
  pageProps: any;
};

const MyApp: FunctionComponent<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
