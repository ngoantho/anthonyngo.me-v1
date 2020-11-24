import { useRouter } from "next/router"
import Link from "next/link"

export default function Layout({ children }) {
  const { pathname } = useRouter()

  return (
    <div id="container">
      {children}
      <style jsx>{`
        #container {
          max-width: var(--global-box);
          margin: 0 auto;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
