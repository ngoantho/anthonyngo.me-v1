import { useRouter } from "next/router"
import Link from "next/link"

export default function Layout({ children }) {
  const { pathname } = useRouter()

  return (
    <div id="container">
      {pathname !== "/" && (
        <Link href="/">
          <a id="back-button">← Home</a>
        </Link>
      )}
      {children}
      <style jsx>{`
        #container {
          max-width: var(--global-box);
          margin: 0 auto;
          width: 100%;
        }
        #back-button {
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
