import styles from "styles/herobanner.module.scss"
import { cx } from "utils"

export default function HeroBanner({ hero }) {
  return (
    <div className={styles.grid}>
      <div className={cx(styles.bg, styles["grid-item"])}></div>
      <div className={cx("container", styles["grid-item"])}>{hero()}</div>
    </div>
  )
}
