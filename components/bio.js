/* eslint-disable react/display-name */
import Avatar from "./avatar"
import BioMDX from "../pages/_bio.md"
import styles from "../styles/bio.module.scss"
import { cx } from "../utils"
import { contact } from "../seo.config"

export default function Bio() {
  return (
    <div className={cx("row", styles.container)}>
      <div className={cx("col", "col-9", styles.bio)}>
        <BioMDX />
        <div className="row">
          <div className="col col-3">
            <a href="mailto:contact@anthonyngo.me">
              <input type="submit" value="Get In Touch" className="outline" />
              <style jsx>{`
                input[type="submit"]:hover,
                input[type="submit"]:focus {
                  background: lightgray;
                }
              `}</style>
            </a>
          </div>
          <div className="nav col col-9">
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
      </div>
      <div className={cx("col", "col-3", styles.avatar)}>
        <Avatar />
      </div>
    </div>
  )
}
