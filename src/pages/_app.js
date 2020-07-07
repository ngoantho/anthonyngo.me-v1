import { GlobalStyles } from "../styles";
import { MDXProvider } from "@mdx-js/react";
import ThemeContext from "@/theme";
import { css } from "linaria";
import { cx } from "../utils";
import useDarkMode from "use-dark-mode";
import { useState } from "react";
import { variant } from "../theme";

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
            }
            body.dark-mode {
              background-color: ${variant.normal.primary};
              color: ${variant.normal.quaternary};
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
  const [currVariant, setCurrVariant] = useState(variant.normal);
  useDarkMode(false, {
    storageKey: null,
    onChange: null,
  });
  useDarkMode(false, {
    storageKey: null,
    onChange: (darkMode) => {
      setCurrVariant(!darkMode ? variant.alternate : variant.normal);
    },
  });

  return (
    <ThemeContext.Provider value={currVariant}>
      <MDXProvider components={{}}>
        <BackgroundStyles>
          <Component {...pageProps} />
        </BackgroundStyles>
      </MDXProvider>
    </ThemeContext.Provider>
  );
};

export default App;
