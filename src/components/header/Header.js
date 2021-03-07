import useMobileDetect from "use-mobile-detect-hook"

import Exec from "./Exec"
import Nav from "./Nav"

const Header = () => {
  let detectMobile = useMobileDetect()

  return (
    <header>
      <Exec />
      {detectMobile.isDesktop() && <Nav />}
      <style jsx>{`
        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          font-size: larger;
        }
      `}</style>
    </header>
  )
}

export default Header
