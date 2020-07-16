/* eslint-disable react/jsx-curly-brace-presence */
/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import { withConfig } from "utils";

function Landing({ config, ...props }) {
  const styles = {
    Container: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;
    `,
    InnerLeft: {
      Glob: css`
        @media (max-width: 40rem) {
          max-width: 100% !important;
        }
      `,
      SuperTitle: css`
        letter-spacing: 0rem;
      `,
      Title: css`
        font-weight: bold;
      `,
    },
  };

  return (
    <section {...props} css={styles.Container}>
      <div className="row">
        <div className="column column-50" css={styles.InnerLeft.Glob}>
          <h4 css={styles.InnerLeft.SuperTitle}>Hello, my name is</h4>
          <h1 css={styles.InnerLeft.Title}>Anthony Ngo</h1>
          <h2>I build for the betterment</h2>
          <p>
            {
              "I'm a computer science student based in Seattle, WA. Currently studying at "
            }
            <a href="http://www.seattleu.edu">Seattle University</a>
            {"."}
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
        <div className="column column-50" />
      </div>
    </section>
  );
}

export default withConfig(Landing, {});
