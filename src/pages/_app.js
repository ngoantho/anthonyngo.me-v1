import "milligram/dist/milligram.css";

import { CacheProvider } from "@emotion/core";
import { GlobalStyles } from "styles";
import { ThemeProvider } from "emotion-theming";
import { cache } from "emotion";
import theme from "src/config";

export default function ({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {GlobalStyles}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
