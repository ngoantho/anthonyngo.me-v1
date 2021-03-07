import "styles/global.css"

import { prepareClientPortals } from "@jesstelford/react-portal-universal"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "components/MDXComponents"
import MainLayout from "layouts/main"
import { DefaultSeo } from "next-seo"

import SEO from "../seo"

if (typeof window !== "undefined") {
  // On the client, we have to run this once before React attempts a render.
  // Here in _app is a great place to do it as this file is only required once,
  // and right now (outside the constructor) is before React is invoked.
  prepareClientPortals()
}

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <MainLayout>
        <DefaultSeo {...SEO} />
        <div id="modal" />
        <Component {...pageProps} />
      </MainLayout>
    </MDXProvider>
  )
}

export default MyApp
