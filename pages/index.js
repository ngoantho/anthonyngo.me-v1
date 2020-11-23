import Head from "next/head"
import { common } from "../seo.config"
import Bio from "../components/bio"
import Projects from "../components/projects"
import fs from "fs"
import path from "path"

export default function Home({ projects, projectsMeta }) {
  return (
    <>
      <Head>
        <title>{common.name}</title>
      </Head>
      <Bio />
      <Projects projects={projects} metas={projectsMeta} />
    </>
  )
}

export async function getStaticProps() {
  const projects = fs.readdirSync(path.join(process.cwd(), "pages/projects/"))
  const projectsMeta = projects.map(
    (name) => require(`../pages/projects/${name}`).meta
  )

  return {
    props: {
      projects,
      projectsMeta,
    },
  }
}
