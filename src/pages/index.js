import { Layout } from "@/components";
import { Main } from "@/styles";
import dynamic from "next/dynamic";

const LandingSection = dynamic(() =>
  import("../components/sections/landing.js")
);

const Index = ({ metadata }) => {
  return (
    <Layout>
      {/* header */}
      <Main>
        <LandingSection />
        {/* sections */}
      </Main>
      {/* footer */}
    </Layout>
  );
};

export function getStaticProps() {
  return {
    props: {},
  };
}

export default Index;
