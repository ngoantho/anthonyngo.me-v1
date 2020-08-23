import "milligram/dist/milligram.css";
import "styles/nprogress.css";
import "styles/accent.css";

import React, { useEffect } from "react";

import { GlobalStyles } from "styles";
import { Layout } from "components";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import { prefix } from "goober-autoprefixer";
import { setup } from "goober";
import { useRouter } from "next/router";

// goober's needs to know how to render the `styled` nodes.
// So to let it know, we run the `setup` function with the
// `createElement` function and prefixer function.
setup(React.createElement, prefix);
const { func, object } = PropTypes;

export default function App({ Component, pageProps }) {
  const { events } = useRouter();

  const handleRouteStart = () => NProgress.start();
  const handleRouteChange = () => NProgress.done();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    events.on("routeChangeStart", handleRouteStart);
    events.on("routeChangeComplete", handleRouteChange);
    events.on("hashChangeComplete", handleRouteChange);

    return () => {
      events.off("routeChangeStart", handleRouteStart);
      events.off("routeChangeComplete", handleRouteChange);
      events.off("hashChangeComplete", handleRouteChange);
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

App.propTypes = {
  Component: func,
  pageProps: object,
};
