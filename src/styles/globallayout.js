import "./fonts";

// for styled-components extension
import { glob as css } from "goober";

css`
  html {
    /* https://caniuse.com/#feat=css-scroll-behavior */
    /* fixme: implement JS polyfill via scrollIntoView */
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
    overflow-y: visible;
    -webkit-overflow-scrolling: touch;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3 {
    text-rendering: optimizeLegibility;
  }
`;

export default function GlobalStyles({ children }) {
  return children;
}
