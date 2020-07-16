import { Global, css } from "@emotion/core";

import Defaults from "./defaults";
import Fonts from "./fonts";

export default (
  <Global
    styles={css`
      ${Fonts}
      ${Defaults}
      
      body {
        background: #2c2f34;
        color: #f2f2f2;

        width: 100%;
        overflow-x: hidden;
        overflow-y: visible;
        -webkit-overflow-scrolling: touch;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }

      /* https://github.com/milligram/milligram-themes/blob/master/src/dark2.css */
      .navigation .title,
      .navigation-title {
        color: #f2f2f2;
      }

      .navigation {
        background: #34373c;
        border-bottom: 0.1rem solid #1b1c1d;
      }

      .header {
        background-color: #141518;
      }

      pre {
        background: #141518;
      }

      .prettyprint {
        color: #f2f2f2;
      }

      .prettyprint.lang-md * {
        color: #f2f2f2 !important;
      }

      code {
        background: #141518;
      }

      .prettyprint .atv {
        color: rgba(73, 158, 223, 1);
      }
    `}
  />
);
