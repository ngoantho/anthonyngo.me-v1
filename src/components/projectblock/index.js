import FeaturedProject from "./featured";
import Project from "./project";
import { withTheme } from "emotion-theming";

const ProjectProxy = ({ theme: { colors }, featured, ...props }) =>
  featured ? (
    <FeaturedProject theme={colors} {...props} />
  ) : (
    <Project theme={colors} {...props} />
  );

export default withTheme(ProjectProxy);
