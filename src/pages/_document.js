import Document, { Head, Html, Main, NextScript } from "next/document";
export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/*
import Document, { Html, Head, Main, NextScript } from "next/document";
import { site, contactMe, name } from "@/config";
const { language, description, keywords, url } = site;

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const { default: icon192 } = await import("public/favicon192.png");
    const { default: icon96 } = await import("public/favicon96.png");
    const { default: icon72 } = await import("public/favicon72.png");
    const { default: thumbnail } = await import("public/favicon.png");
    const { default: favicon } = await import("public/favicon.ico");

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, favicon, thumbnail, icon72, icon96, icon192 };
  }

  render() {
    return (
      <Html lang={language}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />

          <meta name="application-name" content={name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={name} />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href={this.props.icon192}
          />
          <meta name="description" content={description} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-tap-highlight" content="no" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={url} />
          <meta name="twitter:title" content={name} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:creator" content={contactMe.Twitter.handle} />
          <meta name="twitter:image" content={this.props.icon192} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={name} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={name} />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={this.props.thumbnail} />

          <meta name="author" content={name} />
          <meta name="keywords" content={keywords} />
          <meta name="copyright" content={name} />
          <meta name="creator" content={name} />
          <meta name="rating" content="General" />
          <meta name="coverage" content="Worldwide" />

          <link
            rel="icon"
            type="image/png"
            sizes="72x72"
            href={this.props.icon72}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={this.props.icon96}
          />
          <link rel="shortcut icon" href={this.props.favicon} />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
*/
