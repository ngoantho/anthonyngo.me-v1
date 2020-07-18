/* @jsx jsx */
import { css, jsx } from "@emotion/core";
import { cx, withConfig } from "utils";
import { fadeIn, fadeInDown, fadeInUp } from "styles/anims";

import picture from "assets/me.png";
import { withTheme } from "emotion-theming";

const Landing = ({
  config: { showRightPicture, ...config },
  theme: { weights },
  ...props
}) => (
  <section {...props} css={styles(config)}>
    <div className="row">
      <div
        name="inner-left"
        className={cx("column", {
          "column-50": showRightPicture,
        })}>
        {/* eslint-disable react/no-unescaped-entities */}
        <h5 name="super-title">Hi, I'm</h5>
        <h1
          name="title"
          style={{
            fontWeight: weights.bold - 100,
          }}>
          Anthony Ngo
        </h1>
        <h2 name="sub-title">aspiring software engineer</h2>
        <p name="blurb">
          Hi, I'm Anthony! I'm a current computer science student studying at{" "}
          <a href="//seattleu.edu">Seattle University</a>, who is passionate
          about making open source software, creating technology to help others,
          and building a better future.
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
      {showRightPicture ? (
        <div className="column column-50" name="inner-right">
          <img src={picture} />
        </div>
      ) : null}
    </div>
  </section>
);

const styles = (context) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${context.fullPage ? "min-height: 100vh" : ""}

  & > .row {
    flex-direction: column-reverse;
    @media (min-width: ${context.mobileCutoff}) {
      flex-direction: row;
    }

    & > [name="inner-left"] {
      @media (max-width: ${context.mobileCutoff}) {
        max-width: 100% !important;
      }

      [name="super-title"] {
        letter-spacing: ${context.superTitleSpacing};
        margin-bottom: 0;
        font-family: "mono", monospace;
        font-size: smaller;
        visibility: hidden;
      }
      [name="title"] {
        margin-bottom: 0;
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
      }
      [name="sub-title"] {
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
      }
      [name="blurb"] {
        ${fadeInUp}
        animation-delay: 0.5s;

        @media (min-width: ${context.mobileCutoff}) {
          font-size: larger;
        }
      }

      .button {
        ${fadeInUp}
        animation-delay: 0.75s;
      }
    }

    & > [name="inner-right"] {
      @media (max-width: ${context.mobileCutoff}) {
        max-width: 100% !important;
      }

      display: grid;
      ${fadeIn}

      img {
        margin: auto;
        border-radius: 40%;
      }
    }
  }
`;

export default withTheme(
  withConfig(Landing, {
    mobileCutoff: "40rem",
    superTitleSpacing: "0rem",
    showRightPicture: true,
    fullPage: true,
  })
);
