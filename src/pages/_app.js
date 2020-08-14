import "milligram/dist/milligram.css";
import "styles/accent.css";
import "styles/nprogress.css";

import React, { useEffect } from "react";

import { GlobalStyles } from "styles";
import { Layout } from "components";
import NProgress from "nprogress";
import jump from "jump.js";
import { prefix } from "goober-autoprefixer";
import { setup } from "goober";
import { useRouter } from "next/router";

// goober's needs to know how to render the `styled` nodes.
// So to let it know, we run the `setup` function with the
// `createElement` function and prefixer function.
setup(React.createElement, prefix);

export default function App({ Component, pageProps }) {
  const { events } = useRouter();

  const handleHashChange = () => {
    if (CSS.supports("scroll-behavior: smooth")) return;
    if (
      window.matchMedia("screen and (prefers-reduced-motion: reduce)").matches
    )
      return;

    setTimeout(() => {
      if (location.hash) {
        const id = location.hash.substring(1);
        const el = document.getElementById(id);
        if (el) {
          jump(el, {
            duration: 500,
          });
        }
      }
    }, 0);
  };
  const handleRouteStart = () => NProgress.start();
  const handleRouteChange = () => {
    NProgress.done();
    handleHashChange();
  };

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    NProgress.start();

    events.on("routeChangeStart", handleRouteStart);
    events.on("routeChangeComplete", handleRouteChange);
    events.on("hashChangeComplete", handleHashChange);

    return () => {
      events.off("routeChangeStart", handleRouteStart);
      events.off("routeChangeComplete", handleRouteChange);
      events.off("hashChangeComplete", handleHashChange);
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
