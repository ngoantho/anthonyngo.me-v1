import { Layout } from "@/components";
import { Main } from "@/styles";
import dynamic from "next/dynamic";
import { metadata } from "../components/sections/*.mdx";

const LandingSection = dynamic(() =>
  import("../components/sections/landing.js")
);

const Index = ({ metadata }) => {
  return (
    <Layout>
      {/* header */}
      <Main>
        <LandingSection
          metadata={metadata.filter((mdx) => mdx.bind === "landing")}
        />
        {/* sections */}
      </Main>
      {/* footer */}
    </Layout>
  );
};

export function getStaticProps() {
  return {
    props: {
      metadata,
    },
  };
}

export default Index
