import Document, { Head, Html, Main, NextScript } from "next/document";
import { contactMe, name, site } from "config";

import { extractCss } from "goober";

const { language, description, keywords, url } = site;

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const { default: icon192 } = await import("public/favicons/favicon192.png");
    const { default: icon96 } = await import("public/favicons/favicon96.png");
    const { default: icon72 } = await import("public/favicons/favicon72.png");
    const { default: icon48 } = await import("public/favicons/favicon48.png");

    const page = renderPage();

    // Extrach the css for each page render
    const css = extractCss();
    return { ...page, css, icon48, icon72, icon96, icon192 };
  }

  render() {
    return (
      <Html lang={language}>
        <Head>
          <style
            id="_goober"
            // And defined it in here
            dangerouslySetInnerHTML={{ __html: " " + this.props.css }}
          />

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />

          <meta name="application-name" content={name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href={this.props.icon192}
          />
          <meta name="apple-mobile-web-app-title" content={name} />
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
          <meta property="og:image" content={this.props.icon48} />

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
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
