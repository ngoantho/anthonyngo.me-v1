import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import GlobalStyle from "styles/GlobalStyle";

import SEO from "../seo";

export default function App({ Component, pageProps }) {
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };
  useEffect(() => {
    handleExternalLinks();
  }, []);

  return (
    <GlobalStyle>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </GlobalStyle>
  );
}
