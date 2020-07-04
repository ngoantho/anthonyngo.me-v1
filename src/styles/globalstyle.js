// import { weights, sizes, spacing } from "../theme";
import { css } from "linaria";
import "./dedupe.css";

// ref: https://www.client9.com/css-system-font-stack-monospace-v2/
const GlobalStyle = css`
  :global {
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
  }
`;

export default GlobalStyle;
