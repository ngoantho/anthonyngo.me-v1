/* @jsx jsx */
import { css, jsx } from "@emotion/core";
import { cx, withConfig } from "utils";
import { fadeInLeft, fadeInRight, fadeInUp } from "styles/anims";

import picture from "assets/me.png";
import useMedia from "use-media";
import { withTheme } from "emotion-theming";

const useStyles = ({ config, weights }) => ({
  $: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${config.fullPage &&
    css`
      min-height: 100vh;
    `}
  `,
  container: {
    $: css`
      flex-direction: column-reverse;
      @media (min-width: 40rem) {
        flex-direction: row;
      }
    `,
    content: {
      $: css`
        @media (max-width: 40rem) {
          max-width: 100% !important;
        }

        & > .button {
          ${fadeInUp}
          animation-delay: 0.75s;
        }
      `,
      superTitle: css`
        margin-bottom: 0;
        font-family: "mono", monospace;
        font-size: smaller;
        visibility: hidden;
      `,
      title: css`
        margin-bottom: 0;
        font-weight: ${weights.bold - 100};
        ${fadeInUp}

        @media (min-width: 80rem) {
          font-size: 8rem;
        }
        @media (min-width: 60rem) and (max-width: 80rem) {
          font-size: 7rem;
        }
        @media (max-width: 60rem) {
          font-size: 6rem;
        }
        @media (max-width: 40rem) {
          font-size: 5rem;
        }
      `,
      subTitle: css`
        ${fadeInUp}
        animation-delay: 0.25s;

        @media (min-width: 80rem) {
          font-size: 6rem;
        }
        @media (min-width: 60rem) and (max-width: 80rem) {
          font-size: 5rem;
        }
        @media (max-width: 60rem) {
          font-size: 4rem;
        }
        @media (max-width: 40rem) {
          font-size: 3rem;
        }
      `,
      blurb: css`
        ${fadeInUp}
        animation-delay: 0.5s;

        @media (min-width: 40rem) {
          font-size: larger;
        }
      `,
    },
    pic: (isMobile) => css`
      display: grid !important;
      ${isMobile ? fadeInLeft : fadeInRight}

      img {
        margin: auto;
        border-radius: 40%;
      }
    `,
  },
});

const Landing = ({
  config: { showHeadshot, ...config },
  theme: { weights },
  ...props
}) => {
  const styles = useStyles({
    config,
    weights,
  });
  const {
    container: { content },
  } = styles;
  const isMobile = useMedia("(max-width: 40rem)");

  return (
    <section {...props} css={styles.$}>
      <div className="row" css={styles.container.$}>
        <div
          className={cx("column", {
            "column-50": showHeadshot,
          })}
          css={content.$}>
          {/* eslint-disable react/no-unescaped-entities */}
          <h5 css={content.superTitle}>Hi, I'm</h5>
          <h1 css={content.title}>Anthony Ngo</h1>
          <h2 css={content.subTitle}>aspiring software engineer</h2>
          <p css={content.blurb}>
            Hi, I'm Anthony! I'm a current computer science student studying at{" "}
            <a href="//seattleu.edu">Seattle University</a>, who is passionate
            about making open source software, creating technology to help
            others, and building a better future.
          </p>
          <a
            href="#projects"
            className="button button-outline"
            css={css`
              margin-right: 1rem;
            `}>
            featured projects
          </a>
          <a
            href="mailto:ngo.anthony.me@gmail.com"
            className="button button-clear">
            hire me
          </a>
        </div>
        {showHeadshot ? (
          <div
            className="column column-50"
            css={styles.container.pic(isMobile)}>
            <img src={picture} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default withTheme(
  withConfig(Landing, {
    superTitleSpacing: "0rem",
    showHeadshot: true,
    fullPage: true,
  })
);
