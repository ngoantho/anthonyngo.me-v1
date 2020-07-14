import { css } from "@emotion/core";
export default css`
  @font-face {
    font-family: "mono";
    font-display: auto;
    src: local("SFMono-Regular"), local("Menlo"), local("Monaco"),
      local("Consolas"), local("Liberation Mono"), local("Courier New");
  }

  /* 🤷 */
  @font-face {
    font-family: system;
    font-display: auto;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"),
      local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"),
      local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }
`;
