import { css } from "astroturf";
import React from "react";

import Header from "./header";

let styles = css`
  .main {
    display: flex;
    flex-direction: column;

    section {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }

  .separator {
    width: 25%;
    &:last-child {
      display: none;
    }
  }
`;

export default function Layout({ children }) {
  return (
    <main className={styles.main}>
      <Header />
      {React.Children.map(children, (child) => (
        <>
          {child}
          <hr className={styles.separator} />
        </>
      ))}
    </main>
  );
}
