import App from "next/app"
import Head from "next/head"
import { ThemeProvider } from "emotion-theming"

import "@/styles/main.scss"
import theme from "@/styles/_theme.scss"
import { site } from "@/config"
const favicon = (async () => {
  return (await import("public/icons/favicon.ico")).default
})()
const { title } = site

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="theme-color" content={theme.primary} />
          <meta name="msapplication-TileColor" content={theme.primary} />
          <link rel="mask-icon" href={favicon} color={theme.primary} />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
