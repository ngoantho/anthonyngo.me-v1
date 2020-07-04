import { MDXProvider } from "@mdx-js/react";
import { variant } from "../theme";
import { css } from "linaria";
import { flatten, cx } from "../utils";
import { GlobalStyle } from "../styles";
import useDarkMode from "use-dark-mode";

// credit: https://levelup.gitconnected.com/adding-dark-mode-to-your-react-app-with-emotion-css-in-js-fc5c0f926838
const BackgroundStyles = ({ children }) => (
  <>
    <data
      className={cx(
        css`
          :global {
            body.light-mode {
              background-color: ${variant.alternate.primary};
              color: ${variant.alternate.quaternary};
              ${flatten(variant.alternate)};
            }
            body.dark-mode {
              background-color: ${variant.normal.primary};
              color: ${variant.normal.quaternary};
              ${flatten(variant.normal)};
            }
          }
        `,
        GlobalStyle
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
