import "milligram/dist/milligram.css";
import "styles/accent.css";
import "styles/nprogress.css";

import React, { useEffect } from "react";

import { GlobalStyles } from "styles";
import { Layout } from "components";
import NProgress from "nprogress";
import { prefix } from "goober-autoprefixer";
import { setup } from "goober";
import { useRouter } from "next/router";

// goober's needs to know how to render the `styled` nodes.
// So to let it know, we run the `setup` function with the
// `createElement` function and prefixer function.
setup(React.createElement, prefix);

export default function App({ Component, pageProps }) {
  const { events } = useRouter();

  const handleRouteStart = () => NProgress.start();
  const handleRouteChange = (url) => {
    NProgress.done();

    if (CSS.supports("scroll-behavior: smooth")) return;
    if (
      window.matchMedia("screen and (prefers-reduced-motion: reduce)").matches
    )
      return;

    if (url.includes("#")) {
      const id = url.substring(2);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  };

  useEffect(() => {
    events.on("routeChangeStart", handleRouteStart);
    events.on("routeChangeComplete", handleRouteChange);
    return () => {
      events.off("routeChangeStart", handleRouteStart);
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <GlobalStyles>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalStyles>
  );
}
