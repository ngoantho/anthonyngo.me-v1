import { css } from "@emotion/core";

export default css`
  html {
    /* https://caniuse.com/#feat=css-scroll-behavior */
    /* fixme: implement JS polyfill via scrollIntoView */
    @supports (scroll-behavior: smooth) {
      scroll-behavior: smooth;
    }
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }
    box-sizing: border-box;
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-rendering: optimizeLegibility;
  }
`;
