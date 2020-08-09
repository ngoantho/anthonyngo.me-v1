import "milligram/dist/milligram.css";
import "styles/accent.css";

import React, { useEffect } from "react";

import { GlobalStyles } from "styles";
import { Layout } from "components";
import { prefix } from "goober-autoprefixer";
import { setup } from "goober";

// goober's needs to know how to render the `styled` nodes.
// So to let it know, we run the `setup` function with the
// `createElement` function and prefixer function.
setup(React.createElement, prefix);

((client, cb) => client && cb())(typeof window !== "undefined", () => {
  if (CSS.supports("scroll-behavior: smooth")) return;
  if (window.matchMedia("screen and (prefers-reduced-motion: reduce)").matches)
    return;
  require("smooth-scroll")('a[href*="#"]');
});

export default function App({ Component, pageProps }) {
  function cbHashChange() {
    history.replaceState(null, null, " ");
  }
  useEffect(() => {
    window.addEventListener("hashchange", cbHashChange, false);
    return () => window.removeEventListener("hashchange", cbHashChange, false);
  }, []);

  return (
    <GlobalStyles>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalStyles>
  );
}
