import Head from "next/head"
import Layout from "components/layout"
import Projects from "sections/projects"
import Hero from "sections/hero"
import ProjectsAPI from "utils/projects"
import { common } from "seo.config"
import About from "sections/about"

export default function Index({ projects }) {
  return (
    <>
      <Head>
        <title>{common.name}</title>
      </Head>
      <Layout hero={() => <Hero />}>
        <Projects data={projects} />
        <About />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: ProjectsAPI(),
    },
  }
}
