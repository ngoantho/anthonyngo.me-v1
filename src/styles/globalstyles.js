import { Global, css } from "@emotion/core";

import Defaults from "./defaults";
import Fonts from "./fonts";

export default (
  <Global
    styles={css`
      ${Fonts}
      ${Defaults}
      
      body {
        width: 100%;
        overflow-x: hidden;
        overflow-y: visible;
        -webkit-overflow-scrolling: touch;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
      }
    `}
  />
);
