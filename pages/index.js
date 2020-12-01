import Layout from "components/layout"
import Head from "next/head"
import About from "sections/about"
import Hero from "sections/hero"
import Projects from "sections/projects"
import { common } from "seo.config"
import ProjectsAPI from "utils/projects"

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
