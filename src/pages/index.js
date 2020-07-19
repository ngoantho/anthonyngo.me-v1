/* eslint-disable no-unused-vars */
import { Fade } from "react-awesome-reveal";
import { Landing } from "components/sections";
import { Layout } from "components";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { join } from "path";
import { promises } from "fs";
import schema from "assets/schema";

const { arrayOf, shape, string } = PropTypes;
const { readdir, readFile } = promises;

const FeaturedProjects = dynamic(() =>
  import("components/sections").then((mod) => mod.FeaturedProjects)
);

function Index({ featuredPosts, morePosts }) {
  return (
    <Layout>
      <Landing />
      <Fade direction="top" triggerOnce="true">
        <FeaturedProjects id="projects" posts={featuredPosts} />
      </Fade>
    </Layout>
  );
}

Index.propTypes = {
  featuredPosts: arrayOf(
    shape({
      filename: string,
      content: schema,
    })
  ),
  morePosts: arrayOf(
    shape({
      filename: string,
      content: schema,
    })
  ),
};

export default Index;

export async function getStaticProps() {
  let featuredPosts = [];
  const featuredDirectory = join(process.cwd(), "src/assets/featured");
  for (const filename of await readdir(featuredDirectory)) {
    const filePath = join(featuredDirectory, filename);
    const fileContents = await readFile(filePath, "utf8");
    featuredPosts = [
      ...featuredPosts,
      {
        filename,
        content: JSON.parse(fileContents),
      },
    ];
  }

  let morePosts = [];
  const moreDirectory = join(process.cwd(), "src/assets/other");
  for (const filename of await readdir(moreDirectory)) {
    const filePath = join(moreDirectory, filename);
    const fileContents = await readFile(filePath, "utf8");
    morePosts = [
      ...morePosts,
      {
        filename,
        content: JSON.parse(fileContents),
      },
    ];
  }

  return {
    props: {
      featuredPosts,
      morePosts,
    },
  };
}
