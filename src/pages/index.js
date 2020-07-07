import { Header, Layout } from "@/components";

import Landing from "./landing";

const Index = ({ headerData, frontMatter }) => {
  return (
    <Layout>
      <Header data={headerData} />
      <Landing frontMatter={frontMatter.landing} />
    </Layout>
  );
};

export async function getStaticProps() {
  const { landing } = await Landing.getMetadata();

  return {
    props: {
      frontMatter: {
        landing,
      },
      // headerData: [landing].filter((section) => section.visible),
      headerData: [
        {
          href: "landing",
          show: "Landing",
        },
        {
          href: "landing",
          show: "Landing",
        },
        {
          href: "landing",
          show: "Landing",
        },
      ],
    },
  };
}

export default Index;
