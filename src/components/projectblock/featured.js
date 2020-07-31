/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { darken, lighten } from "polished";

import { cnx } from "util/index";
import useMedia from "use-media";

const useStyles = ({
  colors,
  bodyBg = "#2c2f34",
  projectBgLightLevel = 0.02,
}) => ({
  base: css`
    min-height: 25rem;
    border-left: 0px solid #000000;
    @media (min-width: 40rem) {
      display: flex !important;
    }
    @media (max-width: 40rem) {
      display: grid !important;
      border-radius: 1rem;
      background-color: ${lighten(projectBgLightLevel, bodyBg)};
      border-left: 0.3rem solid ${darken(0.2, colors.gold)};
    }
  `,
  content: {
    base: css`
      display: flex !important;
      flex-direction: column;
      justify-content: space-around;

      @media (max-width: 40rem) {
        grid-row: 1;
        grid-column: 1;
      }
    `,
    preview: css`
      pointer-events: none;
      & > picture {
        display: grid;
        > img {
          margin-top: auto;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: auto !important;
        }
      }

      @media (max-width: 40rem) {
        grid-row: 1;
        grid-column: 1;
        opacity: 0.1;
      }
    `,
    blurb: css`
      border-left: 0px solid #000000;
      @media (min-width: 40rem) {
        border-radius: 0.5rem;
        background-color: ${lighten(projectBgLightLevel * 2, bodyBg)};
      }
      @media (max-width: 40rem) {
        padding: 0;
      }
    `,
    icon: css`
      width: 50%;
      height: auto;
    `,
  },
  header: {
    type: css`
      font-family: "mono", monospace;
      font-size: 0.7em;
      color: var(--colors-accent);
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
      /* flex-wrap: wrap; */
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
        row: notMobile,
      })}
      css={styles.base}>
      <div className={notMobile ? "column" : ""} css={styles.content.base}>
        <header>
          <em css={styles.header.type}>Featured Project</em>
          <h4>
            <strong>{frontMatter.title}</strong>
          </h4>
        </header>
        <blockquote
          css={styles.content.blurb}
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
      <div className={notMobile ? "column" : ""} css={styles.content.preview}>
        {frontMatter.preview ? (
          <picture>
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
      </div>
    </blockquote>
  );
}
