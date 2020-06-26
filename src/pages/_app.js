import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "emotion-theming";

import { site } from "@/config";
const { title } = site;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
