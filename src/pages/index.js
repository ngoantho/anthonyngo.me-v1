import { Landing } from "components/sections";
import PropTypes from "prop-types";
const { arrayOf, shape, string, bool } = PropTypes;

function Index({ metadata, frontMatter }) {
  const { landing } = frontMatter;

  return <Landing frontMatter={landing} />;
}

Index.propTypes = {
  headerData: arrayOf(
    shape({
      href: string.isRequired,
      display: string.isRequired,
      visible: bool,
    })
  ),
};

export async function getStaticProps() {
  const { landing } = await import("assets/index");
  const landingParsed = (({ frontMatter, ...metadata }) => ({
    frontMatter,
    metadata,
  }))(await landing);

  return {
    props: {
      metadata: [landingParsed.metadata],
      frontMatter: {
        landing: landingParsed.frontMatter,
      },
    },
  };
}

export default Index;
