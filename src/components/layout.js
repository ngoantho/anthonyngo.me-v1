import { Navbar, SocialBar } from "components";
import { glob as css, styled } from "goober";
import { useEffect, useState } from "react";

import { Footer } from "components/sections";
import { commonTransition } from "config";

const StyledMainWrapper = styled("main")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;
  transition: ${commonTransition};

  &.blur {
    filter: opacity(0.2);
  }
`;

css`
  #__next {
  }
`;

function Layout({
  children,
  footerData = {
    github: "//github.com/ngoantho/portfolio",
    blurb: "Designed & Built by Anthony Ngo",
  },
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("noscroll", menuOpen);
  }, [menuOpen]);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <StyledMainWrapper
        className={["container", menuOpen ? "blur" : ""].join(" ")}>
        {children}
        <SocialBar />
        <Footer data={footerData} />
      </StyledMainWrapper>
    </>
  );
}

export default Layout;
