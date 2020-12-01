import React, { createContext, useContext, useEffect } from "react"
import { prefix } from "goober-autoprefixer"
import { setup, glob } from "goober"
import { DefaultSeo } from "next-seo"
import SEO from "seo.config.js"
import { sizes, useSizes } from "utils"

import "milligram/dist/milligram.min.css"
import "styles/global.scss"

// goober's needs to know how to render the `styled` nodes.
// So to let it know, we run the `setup` function with the
// `createElement` function and prefixer function.
setup(React.createElement, prefix, useSizes)
glob`
  html {
    min-width: ${sizes.mobile};
  }

  body {
    --mobile: ${sizes.mobile};
    --tablet: ${sizes.tablet};
    --desktop: ${sizes.desktop};
  }
`

export default function App({ Component, pageProps }) {
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"))
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer")
          link.setAttribute("target", "_blank")
        }
      })
    }
  }
  useEffect(() => {
    handleExternalLinks()
  }, [])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
