import { extractCss } from "goober"
import Document, { Head, Html, Main, NextScript } from "next/document"
import { common } from "seo.config"

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = await renderPage()
    // Extrach the css for each page render
    const css = extractCss()
    return { ...page, css }
  }

  render() {
    return (
      <Html lang={common.language}>
        <Head>
          <style
            id={"_goober"}
            // And defined it in here
            dangerouslySetInnerHTML={{ __html: " " + this.props.css }}
          />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/favicons/favicon192.png"
          />
          <meta name="twitter:image" content="/favicons/favicon192.png" />
          <meta property="og:image" content="/favicons/favicon48.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href="/favicons/favicon72.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicons/favicon72.png"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
