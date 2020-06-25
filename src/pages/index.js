/* eslint-disable no-unused-vars */
import Head from "next/head";
import Landing from "@/components/templates/Landing";
import landingMDX, {
  metadata as landingMeta,
} from "@/components/templates/Landing.mdx";

const Home = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Landing mdx={landingMDX} metadata={landingMeta} />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {
      landingContent: (await import("@/components/templates/Landing.mdx"))
        .default,
    },
  };
}

export default Home;
