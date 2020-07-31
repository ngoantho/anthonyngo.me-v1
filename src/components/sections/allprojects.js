/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { lighten, rgba } from "polished";

import ProjectProxy from "components/projectblock";
import { useConfig } from "util/index";
import { useState } from "react";
import { withTheme } from "emotion-theming";

const useStyles = ({
  config: { brighterBgColor = lighten(0.3, "#2c2f34"), shiftDown = "20vh" },
}) => ({
  $: css`
    display: flex;
    flex-direction: column;
    padding-bottom: ${shiftDown};
  `,
  separator: css`
    display: flex;
    text-align: center;
    align-items: center;

    & > [name="project-separator"] {
      margin-top: 2rem;
    }

    &::before,
    &::after {
      content: "";
      flex: 1;
      height: 1px;
    }

    &::before {
      margin-right: 1rem;
      background: linear-gradient(
        to right,
        ${rgba(brighterBgColor, 0)},
        ${rgba(brighterBgColor, 0.5)}
      );
    }
    &::after {
      margin-left: 1rem;
      background: linear-gradient(
        to right,
        ${rgba(brighterBgColor, 0.5)},
        ${rgba(brighterBgColor, 0)}
      );
    }
  `,
  grid: css`
    @media (min-width: 40rem) {
      margin-top: -1.5rem;
    }
    justify-content: center;
    flex-wrap: wrap;
  `,
});

const AllProjects = ({ theme: { colors }, projects, ...props }) => {
  const styles = useStyles({ config: {} });
  const [moreShown, setMoreShown] = useState(false);
  const config = useConfig({
    gridInitialVisible: 4,
    showMoreButton: true,
  });

  return (
    <section {...props} css={styles.$}>
      <div css={styles.separator}>
        <h3 name="project-separator">Noteworthy Projects</h3>
      </div>
      <div className="row" css={styles.grid}>
        {projects
          .filter(({ frontMatter: { visibleInProjects } }) => visibleInProjects)
          .slice(0, !moreShown ? config.gridInitialVisible : projects.length)
          .map(({ frontMatter, html }, i) => (
            <ProjectProxy key={i} frontMatter={frontMatter} html={html} />
          ))}
      </div>
      <div
        css={css`
          display: grid;
          margin-top: 2rem;
        `}>
        <button
          className="button-outline"
          css={css`
            margin: auto;
            color: ${colors.gold} !important;
            ${!config.showMoreButton &&
            css`
              display: none;
            `}
          `}
          onClick={() => setMoreShown(!moreShown)}>
          {!moreShown ? "show more" : "show less"}
        </button>
      </div>
    </section>
  );
};

export default withTheme(AllProjects);
