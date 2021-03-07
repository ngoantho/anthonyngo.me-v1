import { UniversalPortal } from "@jesstelford/react-portal-universal"
import { useState } from "react"

import Nav from "./header/Nav"

let Hamburger = () => {
  const [isOpen, toggle] = useState(false)

  return (
    <>
      <button onClick={() => toggle(!isOpen)} className="button-clear">
        ≡
        <style jsx>{`
          button {
            padding-left: 0.5rem;
            padding-right: 1rem;
            font-size: larger;
            transform: scale(1.5);
          }
        `}</style>
      </button>
      {isOpen && (
        <UniversalPortal selector="#modal">
          <div
            style={{
              position: "fixed",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}>
            <div
              style={{
                backgroundColor: "white",
                position: "absolute",
                top: "10%",
                right: "10%",
                bottom: "10%",
                left: "10%",
                padding: "1em",
              }}>
              <Nav mobile={true} closeMenu={() => toggle(!isOpen)} />
              <button
                className="button-outline"
                onClick={() => toggle(!isOpen)}
                style={{
                  position: "absolute",
                  right: "2.5%",
                  top: "2.5%",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                }}>
                X
              </button>
            </div>
          </div>
        </UniversalPortal>
      )}
    </>
  )
}

export default Hamburger
