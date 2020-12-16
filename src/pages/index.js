import Layout from "components/layout";
import Head from "next/head";

import Sections from "../components/sections/*";

export default function IndexPage() {
  let [Projects, ReadMe] = Sections;

  return (
    <>
      <Head>
        <title>Anthony Ngo</title>
      </Head>
      <Layout>
        <ReadMe id="about" />
        <Projects id="projects" />
      </Layout>
    </>
  );
}
