/* eslint-disable react/display-name */
import Avatar from "./avatar"
import BioMDX from "../pages/_bio.md"
import styles from "../styles/bio.module.scss"
import { cx } from "../utils"
import { contact } from "../seo.config"

export default function Bio() {
  return (
    <div className={cx("row", styles.container)}>
      <div className={cx("col", "col-7", styles.bio)}>
        <BioMDX />
        <div className="nav">
          {Object.entries(contact).map(([key, value], i) => (
            <a
              target="_blank"
              rel="noreferrer"
              className="nav-item"
              key={i}
              href={value.url || value}>
              {key}
            </a>
          ))}
        </div>
      </div>
      <div className={cx("col", "col-5", styles.avatar)}>
        <Avatar />
      </div>
    </div>
  )
}
