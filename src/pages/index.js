import { Landing } from "components/sections";
// import { Layout } from "components";
import dynamic from "next/dynamic";
import Head from 'next/head';

const Layout = dynamic(() => import("components/layout"), {
  ssr: true,
});

export default function () {
  return (
    <Layout>
      <Head>
        <title>Anthony Ngo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Landing id="landing" />
    </Layout>
  );
}
