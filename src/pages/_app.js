/* eslint-disable guard-for-in */
import { MDXProvider } from "@mdx-js/react";
import invert from "invert-color";
import useDarkMode from "use-dark-mode";

import { ThemeProvider } from "theming";
import theme from "../theme";

const App = ({ Component, pageProps }) => {
  const { value } = useDarkMode(false, { storageKey: null, onChange: null });
  if (!value) {
    theme.colors = Object.values(theme.colors).map((color) => {
      return invert(color);
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={{}}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
