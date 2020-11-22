import "wingcss"
import "../styles/card.scss"
import "../styles/nprogress.css"
import "../styles/global.scss"
import { DefaultSeo } from "next-seo"
import SEO from "../seo.config"
import NProgress from "nprogress"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Layout from "../components/layout"

export default function MyApp({ Component, pageProps }) {
  const { events } = useRouter()
  const handleRouteStart = () => NProgress.start()
  const handleRouteChange = () => NProgress.done()

  useEffect(() => {
    events.on("routeChangeStart", handleRouteStart)
    events.on("routeChangeComplete", handleRouteChange)
    events.on("hashChangeComplete", handleRouteChange)

    return () => {
      events.off("routeChangeStart", handleRouteStart)
      events.off("routeChangeComplete", handleRouteChange)
      events.off("hashChangeComplete", handleRouteChange)
    }
  }, [])

  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  )
}
