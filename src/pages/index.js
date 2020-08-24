import { getProjectByFile, getProjectsFrom } from "../lib/api";

import { CoreSection } from "styles";
import Head from "next/head";
import PropTypes from "prop-types";
import { Sections } from "components";
import { join } from "path";
import schema from "assets/schema";
import { styled } from "goober";

const { Projects, Hero, About } = Sections;
const { arrayOf, shape, string } = PropTypes;

const StyledContainer = styled(CoreSection)``;

export default function Home({ featuredProjects, allProjects, miscData }) {
  return (
    <>
      <Head>
        <title>Anthony Ngo</title>
      </Head>
      <StyledContainer>
        <Hero id="home" data={miscData.landing} />
        <Projects id="projects" data={{ featuredProjects, allProjects }} />
        <About id="about" data={miscData.about} />
      </StyledContainer>
    </>
  );
}

Home.propTypes = {
  featuredProjects: arrayOf(
    shape({
      html: string,
      frontMatter: schema,
    })
  ),
  allProjects: arrayOf(
    shape({
      html: string,
      frontMatter: schema,
    })
  ),
  miscData: shape({
    landing: shape({
      html: string,
    }),
    about: shape({
      html: string,
    }),
  }),
};

export async function getStaticProps() {
  const featuredProjectsDir = join(process.cwd(), "src/assets/featured");
  const projectsDir = join(process.cwd(), "src/assets/projects");
  return {
    props: {
      featuredProjects: await getProjectsFrom(featuredProjectsDir, true),
      allProjects: await getProjectsFrom(projectsDir),
      miscData: {
        landing: await getProjectByFile("src/assets/sections/landing.mdx"),
        about: await getProjectByFile("src/assets/sections/about.mdx"),
      },
    },
  };
}
