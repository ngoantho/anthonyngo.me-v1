import { GlobalStyles } from "../styles";
import { MDXProvider } from "@mdx-js/react";
import { css } from "linaria";
import { cx } from "../utils";
import useDarkMode from "use-dark-mode";
import { variant } from "../theme";

const flatten = (theme) =>
  Object.keys(theme).reduce(
    (accumulator, name) =>
      Object.assign(accumulator, {
        [`--colors-${name}`]: theme[name],
      }),
    {}
  );

// credit: https://levelup.gitconnected.com/adding-dark-mode-to-your-react-app-with-emotion-css-in-js-fc5c0f926838
const BackgroundStyles = ({ children }) => (
  <>
    <data
      className={cx(
        GlobalStyles,
        css`
          :global() {
            body.light-mode {
              background-color: ${variant.alternate.primary};
              color: ${variant.alternate.quaternary};
              ${flatten(variant.alternate)}
            }
            body.dark-mode {
              background-color: ${variant.normal.primary};
              color: ${variant.normal.quaternary};
              ${flatten(variant.normal)}
            }
          }
          display: none;
        `
      )}
    />
    {children}
  </>
);

const App = ({ Component, pageProps }) => {
  useDarkMode(false, { storageKey: null, onChange: null });

  return (
    <MDXProvider components={{}}>
      <BackgroundStyles>
        <Component {...pageProps} />
      </BackgroundStyles>
    </MDXProvider>
  );
};

export default App;
