/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import GlobalStylesWithTheme from "./globalStylesWithTheme";
import { fluidRange } from "polished";
import { useEffect } from "react";

function Layout({ children }) {
  useEffect(() => {
    if (CSS.supports("scroll-behavior: smooth")) return;
    if (window.matchMedia("all and (prefers-reduced-motion: reduce)").matches)
      return;
    require("smooth-scroll")('a[href*="#"]');
  }, []);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}>
      <GlobalStylesWithTheme />
      <main
        className="container"
        css={css`
          ${fluidRange(
            {
              prop: "paddingLeft",
              fromSize: "2rem",
              toSize: "4rem",
            },
            "40rem",
            "80rem"
          )}
          ${fluidRange(
            {
              prop: "paddingRight",
              fromSize: "2rem",
              toSize: "4rem",
            },
            "40rem",
            "80rem"
          )}
        `}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
