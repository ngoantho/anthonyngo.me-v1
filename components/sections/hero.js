import { styled } from "goober"
import { common } from "seo.config"
import styles from "styles/hero.module.scss"
import { cx, useSizes } from "utils"

/* eslint-disable react/no-unescaped-entities */
import Avatar from "../avatar"

let StyledSection = styled("section")`
  @media (max-width: ${(props) => props.mobile}) {
    flex-direction: column-reverse !important;
    align-items: center;
  }
`

let StyledBanner = styled("div")`
  text-align: center;
  padding-top: 1rem;
  @media (min-width: ${(props) => props.mobile}) {
    text-align: left;
    padding-top: 0;
  }
`

let StyledContact = styled("ul")`
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li:last-child {
    margin-left: 1rem;
  }
`

export default function Hero() {
  let { mobile } = useSizes()

  return (
    <StyledSection className={cx("row", styles.section)} mobile={mobile}>
      <div className="column column-75">
        <StyledBanner className={styles.banner} mobile={mobile}>
          <h1></h1>
          <h2>Hi, I'm Anthony</h2>
          <h3>Seattle University '22</h3>
          <StyledContact>
            <li>
              <a
                href={`mailto:${common.email}`}
                className="button button-outline">
                Get In Touch
              </a>
            </li>
            <li>
              <a href="/resume.pdf" className="button">
                My Resume
              </a>
            </li>
          </StyledContact>
        </StyledBanner>
      </div>
      <div className="column column-25">
        <div className={styles.avatar}>
          <Avatar />
        </div>
      </div>
    </StyledSection>
  )
}
