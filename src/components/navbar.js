/* @jsx jsx */
import { css, jsx } from "@emotion/core";

import { fadeInDown } from "styles/anims";
import icon from "public/icons/favicon48.png";
import { withConfig } from "utils";
import { withTheme } from "emotion-theming";

const useStyles = ({ config, colors }) => ({
  $: css`
    /* position: sticky; */
    /* top: 0; */
    pointer-events: auto;
    user-select: auto;
    align-items: center;
    flex-direction: row;
    ${fadeInDown}
    box-shadow: ${config.boxShadow};
    background: ${colors.dusk};
  `,
  navigation: {
    wrapper: css`
      box-sizing: content-box;
      overflow-x: scroll;
      overflow-y: hidden;
      @media (min-width: 40rem) {
        padding: 0 0 !important;
        margin-left: -1rem !important;
      }
    `,
    list: css`
      display: flex;
      justify-content: flex-end;
      list-style: none;
      margin: 0;
      padding: 0;
    `,
    item: (vars) => css`
      ${fadeInDown}
      padding-top: ${config.navMenuItemPadding};
      padding-right: ${config.navMenuItemPadding};
      & > a {
        color: ${vars["--link-color"]};
      }

      @media (min-width: 40rem) {
        counter-increment: item 1;
        &::before {
          content: "0" counter(item) ".";
          text-align: right;
          font-size: smaller;
          color: ${vars["--num-color"]};
        }
      }
    `,
  },
});

const Navbar = ({ config, theme: { colors, navLinks } }) => {
  const styles = useStyles({
    config,
    colors,
  });

  return (
    <header css={styles.$} className="row clearfix">
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
      <nav
        className="column column-80 float-right"
        css={styles.navigation.wrapper}>
        <ol css={styles.navigation.list}>
          {navLinks.map(([name, href], i) => (
            <li
              key={i}
              css={[
                styles.navigation.item({
                  "--link-color": colors.gold,
                  "--num-color": colors.tan,
                }),
                css`
                  animation-delay: ${i / 4 + 0.1}s;
                `,
              ]}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
};

export default withTheme(
  withConfig(Navbar, {
    boxShadow: "0 2px 20px 0 rgba(0, 0, 0, 0.1)",
    navMenuItemPadding: "1rem",
  })
);
