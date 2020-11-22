import Head from "next/head"
import { common } from "../seo.config"
import Bio from "../components/bio"
import Projects from "../components/projects"
import filenames from "./projects/index.json"

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
  return {
    props: {
      filenames,
    },
  }
}
