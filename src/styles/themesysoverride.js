import { css } from "linaria";
export default css`
  :global() {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      width: 100%;
    }
  }
`;
