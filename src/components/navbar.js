/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import icon from "../../public/icons/favicon48.png";
import { navLinks } from "config";
import { withConfig } from "utils";

function Navbar({ config }) {
  const { data } = config;

  const styles = {
    MainHeader: css`
      position: sticky;
      top: 0;
      pointer-events: auto;
      user-select: auto;
      align-items: center;
      flex-direction: row;
      box-shadow: ${config.boxShadow};
    `,

    MenuWrap: css`
      box-sizing: content-box;
      overflow-x: scroll;
      overflow-y: hidden;
      @media (min-width: 40rem) {
        padding: 0 0 !important;
        margin-left: -1rem !important;
      }
    `,

    Nav: {
      List: css`
        display: flex;
        justify-content: flex-end;
        list-style: none;
        margin: 0;
        padding: 0;
      `,
      Link: css`
        padding-top: ${config.navMenuItemPadding};
        padding-right: ${config.navMenuItemPadding};
        @media (min-width: 40rem) {
          counter-increment: item 1;
          &::before {
            content: "0" counter(item) ".";
            text-align: right;
            font-size: smaller;
          }
        }
      `,
    },
  };

  return (
    <header css={styles.MainHeader} className="row clearfix">
      <div className="column column-20 float-left">
        <a href="/">
          <img
            css={css`
              padding-left: 0.5rem;
              padding-top: 0.5rem;
            `}
            src={icon}
          />
        </a>
      </div>
      <nav className="column column-80 float-right" css={styles.MenuWrap}>
        <ol css={styles.Nav.List}>
          {data.map(([name, href], i) => (
            <li key={i} css={styles.Nav.Link}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}

export default withConfig(Navbar, {
  data: navLinks,
  boxShadow: "0 2px 20px 0 rgba(0, 0, 0, 0.1)",
  navMenuItemPadding: "1rem",
});
