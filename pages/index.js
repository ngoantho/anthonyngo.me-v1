import Head from "next/head"
import { common } from "../seo.config"
import Bio from "../components/bio"
import dynamic from "next/dynamic"
import fs from "fs"
import path from "path"

export default function Home({ filenames }) {
  const Projects = filenames.map((name) =>
    dynamic(() => import(`./projects/${name}`))
  )
  const metas = filenames.map((name) => require(`./projects/${name}`).meta)

  return (
    <>
      <Head>
        <title>{common.name}</title>
      </Head>
      <Bio />
      <div className="row root">
        <style jsx>{`
          .root {
            max-width: 60%;
            margin: 0 auto;
          }
        `}</style>
        {Projects.map((Project, i) => (
          <div key={i} className="col card">
            <strong>{metas[i].header}</strong>
            <Project />
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const projectsDir = path.join(process.cwd(), "pages/projects")
  const filenames = fs.readdirSync(projectsDir)

  return {
    props: {
      filenames,
    },
  }
}
