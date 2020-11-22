import Head from "next/head"
import { common } from "../seo.config"
import Bio from "../components/bio"
import Projects from "../components/projects"
import fs from "fs"
import path from "path"

export default function Home({ filenames }) {
  return (
    <>
      <Head>
        <title>{common.name}</title>
      </Head>
      <Bio />
      <Projects filenames={filenames} />
    </>
  )
}

export async function getStaticProps() {
  const filenames = fs.readdirSync(path.join(process.cwd(), "pages/projects/"))

  return {
    props: {
      filenames,
    },
  }
}
