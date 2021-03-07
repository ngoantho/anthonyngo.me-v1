import { ServerPortal } from "@jesstelford/react-portal-universal/server"
import Document, { Head, Html, Main, NextScript } from "next/document"

import config from "../config"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const portals = new ServerPortal()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          portals.collectPortals(<App {...props} />),
      })

    const { html, ...props } = await Document.getInitialProps(ctx)

    const htmlWithPortals = portals.appendUniversalPortals(html)

    return {
      html: htmlWithPortals,
      ...props,
    }
  }

  render() {
    return (
      <Html lang={config.language}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="alternate icon" href="/favicon.ico" />
          <link rel="mask-icon" href="/favicon.svg" color="#ff8a01" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
