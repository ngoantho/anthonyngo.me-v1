/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import icon from "public/icons/favicon48.png";
import { navLinks } from "config";
import { withConfig } from "utils";

const Navbar = ({ config: { data, ...context }, scrollDirection }) => {
  return (
    <header
      css={styles(context)}
      className="row clearfix"
      data-scroll={scrollDirection}>
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
      <nav name="menu-wrap" className="column column-80 float-right">
        <ol name="nav-list">
          {data.map(([name, href], i) => (
            <li key={i} className="nav-list_item">
              <a href={href}>{name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

const styles = (context) => css`
  position: sticky;
  top: 0;
  pointer-events: auto;
  user-select: auto;
  align-items: center;
  flex-direction: row;
  box-shadow: ${context.boxShadow};

  &[data-scroll="down"] {
    overflow: hidden;
    height: 0;
    opacity: 0;
    transition: height 0ms 400ms, opacity 400ms 0ms;
  }
  &[data-scroll="up"] {
    height: auto;
    opacity: 1;
    transition: height 0ms 0ms, opacity 600ms 0ms;
  }

  & > [name="menu-wrap"] {
    box-sizing: content-box;
    overflow-x: scroll;
    overflow-y: hidden;
    @media (min-width: 40rem) {
      padding: 0 0 !important;
      margin-left: -1rem !important;
    }

    [name="nav-list"] {
      display: flex;
      justify-content: flex-end;
      list-style: none;
      margin: 0;
      padding: 0;

      .nav-list_item {
        padding-top: ${context.navMenuItemPadding};
        padding-right: ${context.navMenuItemPadding};
        @media (min-width: 40rem) {
          counter-increment: item 1;
          &::before {
            content: "0" counter(item) ".";
            text-align: right;
            font-size: smaller;
          }
        }
      }
    }
  }
`;

export default withConfig(Navbar, {
  data: navLinks,
  boxShadow: "0 2px 20px 0 rgba(0, 0, 0, 0.1)",
  navMenuItemPadding: "1rem",
});
