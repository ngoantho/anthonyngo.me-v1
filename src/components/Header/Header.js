/* eslint-disable react/self-closing-comp */
import styles from "./Header.module.scss"
import { useState } from "react"
import { withTheme } from "emotion-theming"
import { css } from "@emotion/core"
import { cx } from "@/utils"

const Header = ({ metadata, theme }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const menuItems = metadata.map(({ id, name }, i) => {
    return (
      <li key={i} class={styles["nav-item"]}>
        <a
          href={`#${id}`}
          class={styles["nav-item__link"]}
          css={css`
            color: ${theme.quaternary};
            &:hover {
              color: ${theme.tertiary};
            }
          `}
        >
          {name}
        </a>
      </li>
    )
  })

  return (
    <>
      <nav
        class={cx(styles.nav, styles["vertical-nav"])}
        css={css`
          background: ${theme.secondary};
          width: ${isMenuOpen ? "auto" : 0};
        `}
      >
        <a
          class={cx(styles["drawer-button"], styles.close)}
          href="#"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </a>
        <ul class={cx(styles["nav-list"], styles["type-vertical"])}>
          {menuItems}
        </ul>
      </nav>
      <header
        class={cx(styles.nav, styles["main-header"])}
        css={css`
          background: ${theme.primary};
        `}
      >
        <a
          class={cx(styles["drawer-button"], styles.open)}
          href="#"
          onClick={() => setMenuOpen(true)}
        >
          ≡
        </a>
        <ul class={cx(styles["nav-list"], styles["type-horizontal"])}>
          {menuItems}
        </ul>
      </header>
    </>
  )
}

export default withTheme(Header)
