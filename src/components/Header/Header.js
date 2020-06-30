/* eslint-disable react/self-closing-comp */
import styles from "./Header.module.scss";
import { useState } from "react";
import { withTheme } from "emotion-theming";
import { css } from "@emotion/core";
import { cx } from "@/utils";

const Header = ({ metadata, theme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuItems = metadata.map(({ id, name }, i) => {
    return (
      <li key={i} className={styles["nav-item"]}>
        <a
          href={`#${id}`}
          className={styles["nav-item__link"]}
          css={css`
            color: ${theme.colors.quaternary};
            &:hover {
              color: ${theme.colors.tertiary};
            }
          `}>
          {name}
        </a>
      </li>
    );
  });

  return (
    <>
      <nav
        className={cx(styles.nav, styles["vertical-nav"])}
        css={css`
          background: ${theme.colors.secondary};
          width: ${isMenuOpen ? `${theme.vertNavEaseIn}` : 0};
        `}>
        <a
          className={cx(styles["drawer-button"], styles.close)}
          href="#"
          onClick={() => setMenuOpen(false)}>
          ✕
        </a>
        <ul className={cx(styles["nav-list"], styles["type-vertical"])}>
          {menuItems}
        </ul>
      </nav>
      <header
        className={cx(styles.nav, styles["main-header"])}
        css={css`
          background: ${theme.colors.primary};
        `}>
        <a
          className={cx(styles["drawer-button"], styles.open)}
          href="#"
          onClick={() => setMenuOpen(true)}>
          ≡
        </a>
        <ul className={cx(styles["nav-list"], styles["type-horizontal"])}>
          {menuItems}
        </ul>
      </header>
    </>
  );
};

export default withTheme(Header);
