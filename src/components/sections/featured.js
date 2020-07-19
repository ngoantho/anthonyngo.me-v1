/* @jsx jsx */
import { css, jsx } from "@emotion/core";
import { cx, withConfig } from "utils";

import { fadeInUp } from "styles/anims";
import useMedia from "use-media";
import { useTheme } from "emotion-theming";

const useStyles = ({ config, colors }) => ({
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
      counter-increment: item 1;

      &::before {
        content: "0" counter(item) ". ";
        text-align: right;
      }
    `,
    text: css`
      display: inline-block;
    `,
    line: css`
      @media (min-width: ${config.overlineVisibilityCutoff}) {
        border: 1px solid lightgrey;
        height: 0.2rem;
        width: ${config.overlineWidth};
        margin: 0 0 2rem 2rem;
      }
    `,
  },
  grid: {
    $: css`
      @media (max-width: 40rem) {
        align-items: center;
      }
      @media (min-width: 40rem) and (max-width: 80rem) {
        flex-wrap: wrap;
        justify-content: space-evenly;
      }
      @media (min-width: 80rem) {
        justify-content: space-around;
      }
    `,
    project: {
      $: css`
        display: flex;
        flex-direction: column;
        background: ${colors.tan};
        border-radius: 1rem;
        margin-bottom: 2rem;
        ${fadeInUp}

        @media (min-width: 40rem) and (max-width: 80rem) {
          & :last-child {
            margin-top: 2rem;
          }
        }
      `,
      nameWrapper: css`
        display: flex;
        flex-direction: column;

        & > .project-type {
          font-family: "mono", monospace;
          font-size: smaller;
        }
        & > .project-name {
          margin-bottom: 0.35rem;
        }
      `,
      contentWrapper: css`
        & > .project-content {
          margin-bottom: 1.5rem;
        }
      `,
      meta: css`
        display: flex;
        flex-direction: column;

        & > .tags,
        & > .links {
          display: flex;
          flex-wrap: wrap;
          list-style: none;
          margin-bottom: 0;
          > li {
            padding-right: 0.5rem;
            margin-bottom: 0;
          }
        }
      `,
    },
  },
});

const FeaturedProjects = ({
  posts,
  config: { gridTabletZone, gridMobileZone, gridDesktopZone, ...config },
  ...props
}) => {
  const { colors } = useTheme();
  const styles = useStyles({ config, colors });
  const {
    grid: { project: projectCss },
  } = styles;

  const isMobile = useMedia(gridMobileZone);
  const isTablet = useMedia(gridTabletZone);
  const isDesktop = useMedia(gridDesktopZone);

  return (
    <section {...props} css={styles.$}>
      <ol css={styles.overline.$}>
        <li css={styles.overline.wrapper}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 css={styles.overline.text}>Some things I've built</h2>
        </li>
        <div css={styles.overline.line} />
      </ol>
      <div className="row" css={styles.grid.$}>
        {posts
          .sort(({ content: { date: a } }, { content: { date: b } }) => a - b)
          .map(({ content: project }, i) => {
            return project.show ? (
              <div
                key={i}
                className={cx("column", {
                  "column-80": isMobile,
                  "column-40": isTablet,
                  "column-25": isDesktop,
                })}
                css={[
                  projectCss.$,
                  css`
                    animation-delay: ${(i + 1) / posts.length}s;
                  `,
                ]}>
                <header css={projectCss.nameWrapper}>
                  <em className="project-type">Featured Project</em>
                  <h4 className="project-name">
                    <strong>{project.title}</strong>
                  </h4>
                </header>
                <main css={projectCss.contentWrapper}>
                  <p
                    className="project-content"
                    dangerouslySetInnerHTML={{
                      __html: project.content,
                    }}
                  />
                </main>
                <footer css={projectCss.meta}>
                  <ul className="tags">
                    {project.tags.map((tag, i) => (
                      <li key={i}>{tag}</li>
                    ))}
                  </ul>
                  <ul className="links">
                    <li>
                      <a>{project.github.length > 0 ? project.github : " "}</a>
                    </li>
                    <li>
                      <a>
                        {project.external.length > 0 ? project.external : " "}
                      </a>
                    </li>
                  </ul>
                </footer>
              </div>
            ) : null;
          })}
      </div>
    </section>
  );
};

export default withConfig(FeaturedProjects, {
  overlineVisibilityCutoff: "38rem",
  overlineWidth: "35%",
  gridDesktopZone: "(min-width: 80rem)",
  gridTabletZone: "(min-width: 40rem) and (max-width: 80rem)",
  gridMobileZone: "(max-width: 40rem)",
});
