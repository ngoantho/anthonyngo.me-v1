import { Global, css } from "@emotion/core";

// import { lighten } from "polished";
import { withTheme } from "emotion-theming";

const GlobalStylesWithTheme = ({ theme: { colors } }) => (
  <Global
    styles={css`
      body {
        background: #2c2f34;
        color: #f2f2f2;
        --colors-accent: #7fdbff;
      }

      a {
        color: var(--colors-accent);
      }

      .button,
      button,
      input[type="button"],
      input[type="reset"],
      input[type="submit"] {
        background-color: var(--colors-accent);
        border: 0.1rem solid var(--colors-accent);
      }

      .button.button-outline,
      button.button-outline,
      input[type="button"].button-outline,
      input[type="reset"].button-outline,
      input[type="submit"].button-outline {
        color: var(--colors-accent);
      }

      .button.button-clear,
      button.button-clear,
      input[type="button"].button-clear,
      input[type="reset"].button-clear,
      input[type="submit"].button-clear {
        color: var(--colors-accent);
      }

      .navigation .title,
      .navigation-title {
        color: #f2f2f2;

        &:hover {
          color: var(--colors-accent-bright);
        }
      }

      .navigation {
        background: #34373c;
        border-bottom: 0.1rem solid #1b1c1d;
      }

      .header {
        background-color: #141518;
      }
    `}
  />
);

export default withTheme(GlobalStylesWithTheme);
