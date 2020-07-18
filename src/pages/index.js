/* eslint-disable no-unused-vars */
/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import Fade from "react-reveal/Fade";
import { Layout } from "components";
import PropTypes from "prop-types";
import Reveal from "react-reveal/reveal";
import dynamic from "next/dynamic";
import fs from "fs";
import path from "path";
import schema from "assets/schema";

// import { useState } from "react";

const { arrayOf, shape, string } = PropTypes;
const Landing = dynamic(() =>
  import("components/sections").then((mod) => mod.Landing)
);
const FeaturedProjects = dynamic(() =>
  import("components/sections").then((mod) => mod.FeaturedProjects)
);

function Index({ featuredPosts, morePosts }) {
  return (
    <Layout>
      {/*
        <Reveal>
          <Landing id="landing" />
        </Reveal>
        <Fade bottom>
          <FeaturedProjects id="projects" posts={featuredPosts} />
        </Fade>
      */}
      <Landing />
      <Fade bottom>
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
  const featuredDirectory = path.join(process.cwd(), "src/assets/featured");
  const featuredFilenames = fs.readdirSync(featuredDirectory);
  const featuredPosts = featuredFilenames.map((filename) => {
    const filePath = path.join(featuredDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    return {
      filename,
      content: JSON.parse(fileContents),
    };
  });

  const moreDirectory = path.join(process.cwd(), "src/assets/other");
  const moreFilenames = fs.readdirSync(moreDirectory);
  const morePosts = moreFilenames.map((filename) => {
    const filePath = path.join(moreDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    return {
      filename,
      content: JSON.parse(fileContents),
    };
  });

  return {
    props: {
      featuredPosts,
      morePosts,
    },
  };
}
