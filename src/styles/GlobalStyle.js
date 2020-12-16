import { css } from "astroturf";

css`
  @import "./water.css";
  @import "./misc.css";
  @custom-media --not-mobile (min-width: 40rem);
  @custom-media --is-mobile (max-width: 40rem);

  :root {
    font-size: responsive;
    @supports (scroll-behavior: smooth) {
      scroll-behavior: smooth;
    }
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: initial;
    }
  }
`;

export default function GlobalStyle({ children }) {
  return children;
}
