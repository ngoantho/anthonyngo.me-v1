// import { weights, sizes, spacing } from "../theme";
/* stylelint-disable */
import { css } from "linaria";
import { normalize } from "polished";

export default css`
  :global() {
    ${normalize()}

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    @font-face {
      font-family: "mono";
      src: local("SFMono-Regular"), local("Menlo"), local("Monaco"),
        local("Consolas"), local("Liberation Mono"), local("Courier New");
    }

    html {
      scroll-behavior: smooth;
      font-size: 100%;
      width: 100%;
    }

    ${/* ref: https://www.client9.com/css-system-font-stack-monospace-v2/ */ ""}
    body {
      font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica,
        Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }
  }
`;
