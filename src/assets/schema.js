import PropTypes from "prop-types";
const { shape, string, number, oneOfType, arrayOf, bool } = PropTypes;

export default shape({
  date: oneOfType([string, number]).isRequired,
  title: string.isRequired,
  tags: arrayOf(string).isRequired,
  visibleInProjects: bool.isRequired,
  company: string,
  github: string,
  external: string,
  preview: string,
});
