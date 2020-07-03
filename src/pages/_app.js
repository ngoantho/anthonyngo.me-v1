/* eslint-disable guard-for-in */
import { MDXProvider } from "@mdx-js/react";
import { variant } from "../theme";
import { css } from "linaria";
import { flatten } from "../utils";
import useDarkMode from "use-dark-mode";
import "normalize.css";

const MiscGlobalStyles = ({ children }) => {
  return (
    <>
      <div
        className={css`
          :global() {
            html {
              scroll-behavior: smooth;
            }
            body {
              &.light-mode {
                background: ${variant.light.primary};
                ${flatten(variant.light)}
              }
              &.dark-mode {
                background: ${variant.dark.primary};
                ${flatten(variant.dark)}
              }
            }
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  useDarkMode(false, { storageKey: null, onChange: null });

  return (
    <MDXProvider components={{}}>
      <MiscGlobalStyles>
        <Component {...pageProps} />
      </MiscGlobalStyles>
    </MDXProvider>
  );
};

export default App;
