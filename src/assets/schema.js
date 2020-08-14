import PropTypes from "prop-types";
const { shape, string, arrayOf, bool } = PropTypes;

export default shape({
  date: function (props, propName, componentName) {
    if (
      !/^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9]$/.test(props[propName])
    ) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
  title: string.isRequired,
  visibleInProjects: bool.isRequired,
  tags: arrayOf(string),
  company: string,
  github: string,
  external: string,
  preview: string,
});
