import { Header, Layout } from "@/components";

import Landing from "./sections/landing";

const Index = ({ headerData, frontMatter }) => {
  return (
    <Layout>
      <Header data={headerData} />
      <Landing frontMatter={frontMatter.landing} />
    </Layout>
  );
};

export async function getStaticProps() {
  const landing = await Landing.getMetadata();
  const collected = {
    landing,
  };

  return {
    props: {
      frontMatter: {
        ...collected,
      },
      headerData: [collected.landing.metadata].filter(
        (section) => section.visible
      ),
    },
  };
}

export default Index;
