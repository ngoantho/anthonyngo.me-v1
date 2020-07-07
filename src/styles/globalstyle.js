// import { weights, sizes, spacing } from "../theme";
import { css } from "linaria";
import { cx } from "@/utils";
import fonts from "./fonts";
import { normalize } from "polished";

export default cx(
  fonts,
  css`
    :global() {
      ${normalize()}

      *,
    *::before,
    *::after {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
        font-size: 100%;
        width: 100%;
      }

      body {
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica,
          Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
      }
    }
  `
);
