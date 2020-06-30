import Head from "next/head";
import { ThemeProvider } from "emotion-theming";
import { site } from "@/config";
import theme from "@styles/settings";
import "@styles/global.css";

const favicon = (async () => {
  return (await import("public/favicon.ico")).default;
})();
const { title } = site;

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={theme.colors.tertiary} />
        <meta name="msapplication-TileColor" content={theme.colors.primary} />
        <link rel="mask-icon" href={favicon} color={theme.colors.primary} />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
