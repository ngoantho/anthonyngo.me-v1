/* eslint-disable no-unused-vars */
/* @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useEffect, useState } from "react";

import Navbar from "./navbar";

function Layout({ children, config }) {
  /*
  const [scrollDirection, setScrollDirection] = useState("down");
  const [y, setY] = useState(window.scrollY);

  const cb = (e) => {
    const view = e.currentTarget;
    console.log(view.scrollY);
    console.log(y);
    /*
    if (y > view.scrollY) {
      console.log("scroll up");
    } else if (y < view.scrollY) {
      console.log("scroll down");
    } */
  /*
    setY(view.scrollY);
  }; */

  useEffect(() => {
    // window.addEventListener("scroll", (e) => cb(e));

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
      <Navbar scrollDirection="up" />
      <main className="container">{children}</main>
    </div>
  );
}

export default Layout;
