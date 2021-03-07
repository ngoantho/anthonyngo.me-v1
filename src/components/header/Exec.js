import Hamburger from "components/Hamburger"
import Link from "next/link"
import { useRouter } from "next/router"
import useMobileDetect from "use-mobile-detect-hook"

const Exec = () => {
  const { pathname } = useRouter()
  let detectMobile = useMobileDetect()
  let parts = pathname.split("/")

  let stream = parts.reduce((acc, currPart) => {
    if (currPart === "") currPart = "/"
    return { ...acc, [currPart]: Object.keys(acc).concat([currPart]) }
  }, {})

  let links = parts.map((part, i) => {
    let currPath = (stream[part] || ["//"]).join("/").substring(1)
    let displayedPath = part
    if (part === "") displayedPath = "./anthony"
    else if (part === "_error") displayedPath = "404"

    return (
      <Link href={currPath} key={i}>
        <a className="special">{displayedPath}</a>
      </Link>
    )
  })

  return (
    <div>
      {detectMobile.isMobile() && <Hamburger />}
      <span id="prompt">$ </span>
      {links.map((link, i) => {
        return pathname === "/" && i === 1 ? null : (
          <span key={i} className="link">
            {link}
          </span>
        )
      })}
      <style jsx>{`
        #prompt {
          color: green;
        }

        .link {
          font-family: monospace;

          &::after {
            content: "/";
          }
          &:last-child::after {
            content: "";
          }
        }
      `}</style>
    </div>
  )
}

export default Exec
