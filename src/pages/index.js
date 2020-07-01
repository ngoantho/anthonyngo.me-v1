import { withTheme } from "theming";
import { Layout } from "@/components";
import { Main } from "@/styles";

import { metadata } from "../components/sections/*.mdx";
import glob from "glob-promise";
import { join } from "path";

const Index = ({ theme, slugs, metadata }) => {
  console.log(slugs);
  console.log(metadata);

  return (
    <Layout theme={theme}>
      <Main />
    </Layout>
  );
};

export async function getStaticProps() {
  const slugs = await glob(join(process.cwd(), "src/components/sections/*"));

  return {
    props: {
      slugs,
      metadata,
    },
  };
}

export default withTheme(Index);
