import { css } from "astroturf";
import React from "react";

import Footer from "./footer";
import Header from "./header";
import Side from "./side";

let styles = css`
  .main {
    display: flex;
    flex-direction: column;
    position: relative;

    section {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .separator {
    width: 25%;
    &:last-of-type {
      display: none;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <Header />
      <Side />
      {React.Children.map(children, (child) => (
        <>
          {child}
          <hr className={styles.separator} />
        </>
      ))}
      <Footer />
    </main>
  );
}
