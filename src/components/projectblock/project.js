/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { cnx } from "util/index";
import { lighten } from "polished";
import useMedia from "use-media";

const useStyles = ({
  colors,
  bodyBg = "#2c2f34",
  projectBgLightLevel = 0.02,
  projectSpacing = "2%",
}) => ({
  base: css`
    border-radius: 1rem;
    min-height: 25rem;
    background-color: ${lighten(projectBgLightLevel, bodyBg)};
    border-left: 0px solid #000000;
    display: grid !important;
    @media (min-width: 40rem) {
      margin-left: ${projectSpacing} !important;
    }
  `,
  content: {
    base: css`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      grid-row: 1;
      grid-column: 1;
    `,
    preview: css`
      grid-row: 1;
      grid-column: 1;
      opacity: 0.1;
      pointer-events: none;
      display: grid !important;

      & > img {
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: auto !important;
      }
    `,
    icon: css`
      width: 50%;
      height: auto;
    `,
  },
  footer: {
    base: css`
      flex-direction: row;
    `,
    tags: css`
      color: ${lighten(0.7, "#000000")};
    `,
    item: css`
      display: flex !important;
      list-style: none;
      margin-bottom: 0;
      & :first-child {
        flex-wrap: wrap;
        > li {
          padding-right: 1.5rem;
        }
      }
      & :last-child > li {
        margin-bottom: 0;
      }
    `,
  },
});

export default function ({ frontMatter, html, theme }) {
  const styles = useStyles({ colors: theme });
  const notMobile = useMedia("(min-width: 40rem)");

  return (
    <blockquote
      tabIndex="0"
      className={cnx("column", {
        "column-40": notMobile,
      })}
      css={styles.base}>
      <div css={styles.content.base}>
        <h4>
          <strong>{frontMatter.title}</strong>
        </h4>
        <main
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
        <footer className="row" css={styles.footer.base}>
          <ul className="column column-75" css={styles.footer.item}>
            {frontMatter.tags.map((tag, i) => (
              <li key={i} css={styles.footer.tags}>
                {tag}
              </li>
            ))}
          </ul>
          <ul className="column column-25" css={styles.footer.item}>
            <li>
              {frontMatter.github ? (
                <a href={`//github.com/ngoantho/${frontMatter.github}`}>
                  <img
                    src={require("public/icons/github-mark-light.png")}
                    alt={frontMatter.github}
                    css={styles.content.icon}
                  />
                </a>
              ) : null}
            </li>
            <li>
              {frontMatter.external ? (
                <a href={`//${frontMatter.external}`}>
                  <img
                    src={require("public/icons/external.png")}
                    alt={frontMatter.external}
                    css={styles.content.icon}
                  />
                </a>
              ) : null}
            </li>
          </ul>
        </footer>
      </div>
      {frontMatter.preview ? (
        <picture css={styles.content.preview}>
          <source
            srcSet={require(`public/${frontMatter.preview}?webp`)}
            type="image/webp"
          />
          <source
            srcSet={require(`public/${frontMatter.preview}`)}
            type="image/png"
          />
          <img
            src={require(`public/${frontMatter.preview}`)}
            alt={frontMatter.preview}
          />
        </picture>
      ) : null}
    </blockquote>
  );
}
