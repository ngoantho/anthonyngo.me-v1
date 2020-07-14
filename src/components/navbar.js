/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import { withConfig } from "utils";

function Navbar({ config }) {
  const { data } = config;

  const styles = {
    MainHeader: css`
      pointer-events: auto;
      user-select: auto;
      box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
      flex-direction: row !important;
    `,

    MenuWrap: css`
      box-sizing: content-box;
      overflow-x: scroll;
      overflow-y: hidden;
    `,

    NavMenu: css`
      display: flex;
      justify-content: space-evenly;
      /* list-style: none; */
      margin: 0;
      padding: 0;
    `,
  };

  return (
    <header css={styles.MainHeader} className="row clearfix">
      <div className="column column-25 float-left">column</div>
      <nav
        className="column column-50 column-offset-20 float-right"
        css={styles.MenuWrap}>
        <ol css={styles.NavMenu}>
          {data.map(([name, href], i) => (
            <li key={i}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}

export default withConfig(Navbar, {
  data: [
    ["Projects", "#projects"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Contact", "#contact"],
  ],
});
