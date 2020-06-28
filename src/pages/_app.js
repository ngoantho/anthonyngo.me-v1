import Head from "next/head"
import "@styles/main.scss"
import theme from "@/styles/_theme.scss"
import { site } from "@/config"

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
      <Component {...pageProps} />
    </>
  )
}

export default App
