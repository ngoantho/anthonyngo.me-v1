import { Landing } from "components/sections";
// import { Layout } from "components";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("components/layout"), {
  ssr: true,
});

export default function () {
  return (
    <Layout>
      <Landing id="landing" />
    </Layout>
  );
}
