/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { fluidRange, invert, lighten } from "polished";

// import { cnx } from "util";
import { withTheme } from "emotion-theming";

const useStyles = ({
  weights,
  sizes,
  colors,
  config: { shiftDown = "20", supColor = lighten(0.35, colors.dusk) },
  subColor = lighten(0.7, "#000000"),
}) => ({
  $: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  container: {
    $: css`
      padding-top: ${shiftDown - 5}vh;
      padding-bottom: ${shiftDown}vh;
      @media (min-width: 40rem) {
        flex-direction: column;
      }
    `,
    styled: css`
      & > #sup {
        margin-bottom: 0;
        font-family: "mono", monospace;
        font-size: smaller;
        color: ${supColor};
        @media (min-width: 40rem) {
          font-size: initial;
        }
      }

      & > #title {
        margin-bottom: 0;
        text-shadow: ${invert(colors.dusk)} 0px 2px 2px;
        font-weight: ${weights.regular + 200};
        @media (min-width: 80rem) {
          font-size: ${sizes["xxl"]};
        }
        ${fluidRange(
          {
            prop: "fontSize",
            fromSize: sizes[0],
            toSize: sizes["l"],
          },
          "40rem",
          "80rem"
        )}
      }

      & > #sub {
        color: ${subColor};
        @media (min-width: 80rem) {
          font-size: ${sizes["xl"]};
        }
        ${fluidRange(
          {
            prop: "fontSize",
            fromSize: sizes[1],
            toSize: sizes[0],
          },
          "40rem",
          "80rem"
        )}
      }

      & > p {
        & > a {
          text-decoration: underline;
        }

        @media (min-width: 40rem) {
          font-size: larger;
        }
      }
    `,
  },
});

const Landing = ({ theme: { weights, colors, sizes }, data, ...props }) => {
  const styles = useStyles({ weights, colors, sizes, config: {} });

  return (
    <section {...props} css={styles.$}>
      <div className="row" css={styles.container.$}>
        <div
          className="column"
          css={styles.container.styled}
          dangerouslySetInnerHTML={{
            __html: data.html,
          }}
        />
        <aside className="row">
          <div className="column">
            <a
              href="mailto:ngo.anthony.me@gmail.com"
              className="button button-outline">
              get in touch
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default withTheme(Landing);
