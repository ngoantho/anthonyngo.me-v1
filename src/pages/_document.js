import Document, { Html, Head, Main, NextScript } from "next/document";
import { site, contactMe, name } from "@/config";
const { language, description, keywords, url } = site;

class AppDocument extends Document {
  render() {
    return (
      <Html lang={language}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />

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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
