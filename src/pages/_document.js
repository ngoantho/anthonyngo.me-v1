import Document, { Head, Html, Main, NextScript } from "next/document";
import { contactMe, name, site } from "seo";

import { extractCritical } from "emotion-server";

const { language, description, keywords, url } = site;

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(" ")}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang={language}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />

          <meta name="application-name" content={name} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
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

          <meta property="og:type" content="website" />
          <meta property="og:title" content={name} />
          <meta property="og:description" content={description} />
          <meta property="og:site_name" content={name} />
          <meta property="og:url" content={url} />

          <meta name="author" content={name} />
          <meta name="keywords" content={keywords} />
          <meta name="copyright" content={name} />
          <meta name="creator" content={name} />
          <meta name="rating" content="General" />
          <meta name="coverage" content="Worldwide" />
        </Head>
        <body>
          <div id="modal" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
