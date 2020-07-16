/* @jsx jsx */
import { css, jsx } from "@emotion/core";
import { cx, withConfig } from "utils";

import picture from "assets/me.png";

const Landing = ({ config: { showRightPicture, ...config }, ...props }) => (
  <section {...props} css={styles(config)}>
    <div className="row">
      <div
        name="inner-left"
        className={cx("column", {
          "column-50": showRightPicture,
        })}>
        <h5 name="super-title">Hi, my name is</h5>
        <h1 name="title">Anthony Ngo</h1>
        <h2 name="sub-title">I build things in my free time</h2>
        <p name="blurb">
          {
            "I'm a computer science student based in Seattle, WA. Currently studying at "
          }
          <a href="http://www.seattleu.edu">Seattle University</a>.
        </p>
        <a
          href="#projects"
          className="button button-outline"
          css={css`
            margin-right: 1rem;
          `}>
          find out more about my work
        </a>
        <a href="#contact" className="button button-clear">
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
  min-height: 100vh;

  & > .row {
    & > [name="inner-left"] {
      @media (max-width: ${context.mobileCutoff}) {
        max-width: 100% !important;
      }

      [name="super-title"] {
        letter-spacing: ${context.superTitleSpacing};
        margin-bottom: 0;
        font-family: "mono";
        font-size: smaller;
      }
      [name="title"] {
        font-weight: ${context.titleWeight};
        margin-bottom: 0;
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
    }

    & > [name="inner-right"] {
      @media (max-width: ${context.mobileCutoff}) {
        max-width: 100% !important;
      }

      display: grid;
      img {
        margin: auto;
      }
    }
  }
`;

export default withConfig(Landing, {
  mobileCutoff: "40rem",
  titleWeight: "600",
  superTitleSpacing: "0rem",
  showRightPicture: false,
});
