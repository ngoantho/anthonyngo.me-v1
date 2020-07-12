import "styles/themesys.css";

import { Fonts, ThemeSysOverrides } from "styles";

import { ThemeProvider } from "theming";
// import { css } from "linaria";
import { cx } from "utils";
import theme from "theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <data className={cx(ThemeSysOverrides, Fonts)} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
