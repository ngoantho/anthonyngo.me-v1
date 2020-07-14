/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import Navbar from "./navbar";
import { useEffect } from "react";

function Layout({ children, config }) {
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
      <Navbar />
      <main className="container">{children}</main>
    </div>
  );
}

export default Layout;
