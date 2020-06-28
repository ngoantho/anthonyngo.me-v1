import Head from "next/head"
import "@styles/main.scss"
import theme from "@/styles/_theme.scss"
import { site } from "@/config"
import { ThemeProvider } from "@/utils/theme"

const favicon = (async () => {
  return (await import("public/favicon.ico")).default
})()
const { title } = site

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="theme-color" content={theme.tertiary} />
        <meta name="msapplication-TileColor" content={theme.primary} />
        <link rel="mask-icon" href={favicon} color={theme.primary} />
      </Head>
      <ThemeProvider value={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
