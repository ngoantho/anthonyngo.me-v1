/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import ProjectProxy from "components/projectblock";
import { withTheme } from "emotion-theming";

const useStyles = ({ config: { sectionNumber = 1 } }) => ({
  $: css`
    display: flex;
    flex-direction: column;
  `,
  overline: {
    $: css`
      display: flex;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
    `,
    wrapper: css`
      counter-increment: item ${sectionNumber};

      &::before {
        content: "0" counter(item) ". ";
        text-align: right;
        @media (max-width: 40rem) {
          font-size: smaller;
        }
      }
    `,
    text: css`
      display: inline-block;
    `,
    line: css`
      @media (min-width: 40rem) {
        border: 1px solid darkslategrey;
        height: 0.2rem;
        width: 25%;
        margin: 0 0 2rem 2rem;
      }
    `,
  },
  grid: css`
    justify-content: space-evenly;
    flex-wrap: wrap;

    & blockquote:nth-child(even) {
      flex-direction: row-reverse;
    }
  `,
});

const FeaturedProjects = ({ theme, projects, ...props }) => {
  const styles = useStyles({ config: {} });

  return (
    <section {...props} css={styles.$}>
      <ol css={styles.overline.$}>
        <li css={styles.overline.wrapper}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 css={styles.overline.text}>Some things I've built</h2>
        </li>
        <li css={styles.overline.line} />
      </ol>
      <div className="row" css={styles.grid}>
        {projects
          .filter(({ frontMatter: { visibleInProjects } }) => visibleInProjects)
          .map(({ frontMatter, html }, i) => (
            <ProjectProxy
              key={i}
              frontMatter={frontMatter}
              html={html}
              featured
            />
          ))}
      </div>
    </section>
  );
};

export default withTheme(FeaturedProjects);
