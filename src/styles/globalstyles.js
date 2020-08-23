import "./fonts";
import "./transitions";

import { colors } from "theme";
// for styled-components extension
import { glob as css } from "goober";

css`
  html {
    /* https://caniuse.com/#feat=css-scroll-behavior */
    @supports (scroll-behavior: smooth) {
      scroll-behavior: smooth;
    }
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
  }

  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    &.noscroll {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3 {
    text-rendering: optimizeLegibility;
  }

  /* == ACCENT == */
  body {
    --colors-text: ${colors.secondary};
    --colors-accent: ${colors.tertiary};
  }
`;

export default function GlobalStyles({ children }) {
  return children;
}
