import "milligram/dist/milligram.css";

import { CacheProvider } from "@emotion/core";
import { GlobalStyles } from "styles";
import { ThemeProvider } from "emotion-theming";
import { cache } from "emotion";
import theme from "theme";
import { useEffect } from "react";

export default function ({ Component, pageProps }) {
  function cb() {
    history.replaceState(null, null, " ");
  }
  useEffect(() => {
    window.addEventListener("hashchange", cb, false);
    return () => window.removeEventListener("hashchange", cb, false);
  }, []);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {GlobalStyles}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
