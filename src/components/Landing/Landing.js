import MDXContent from "./Landing.mdx";
import styles from "./Landing.module.css";
import { withTheme } from "emotion-theming";
import { css } from "@emotion/core";

const Landing = ({ theme }) => {
  return (
    <section
      className={styles.landing}
      id="landing"
      css={css`
        height: 1000px;
      `}>
      <MDXContent />
    </section>
  );
};

export default withTheme(Landing);
