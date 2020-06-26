import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "emotion-theming";

import { site } from "@/config";
const { title } = site;
const icon192 = require("@/images/favicon192.png");
const icon96 = require("@/images/favicon96.png");
const icon72 = require("@/images/favicon72.png");
const thumbnail = require("@/images/favicon.png");

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="twitter:image" content={icon192} />
          <meta property="og:image" content={thumbnail} />
          <link rel="apple-touch-icon" sizes="192x192" href={icon192} />
          <link rel="icon" type="image/png" sizes="72x72" href={icon72} />
          <link rel="icon" type="image/png" sizes="96x96" href={icon96} />
          <link rel="mask-icon" href="/favicon.ico" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
