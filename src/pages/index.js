import Layout from "components/layout";
import Projects from "components/projects";
import ReadMe from "components/readme";
import Head from "next/head";

export default function IndexPage() {
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
