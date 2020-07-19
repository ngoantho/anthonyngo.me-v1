import PropTypes from "prop-types";
const { shape, string, number, oneOfType, arrayOf, bool } = PropTypes;

export default shape({
  date: oneOfType([string, number]).isRequired,
  title: string.isRequired,
  github: string,
  external: string,
  tags: arrayOf(string).isRequired,
  show: bool.isRequired,
  content: string.isRequired,
});