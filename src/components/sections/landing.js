import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { withTheme } from "theming";
const { shape, string } = PropTypes;

function Landing({ theme, frontMatter }) {
  const { path } = frontMatter;
  const MDXContent = dynamic(() => import(`src/${path}`));
  // console.log(theme);

  return <MDXContent />;
}

Landing.propTypes = {
  frontMatter: shape({
    path: string.isRequired,
  }),
};

export default withTheme(Landing);
