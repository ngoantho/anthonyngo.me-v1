import { Navbar, SocialBar } from "components";
import { commonTransition, navHeight } from "config";
import { glob as css, styled } from "goober";
import { useEffect, useState } from "react";

import { Footer } from "components/sections";
import { useRouter } from "next/router";

const StyledMainWrapper = styled("main")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;
  transition: ${commonTransition};

  &.blur {
    filter: opacity(0.2);
  }

  &.adjustForNav {
    padding-top: ${navHeight}px;
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
  const { pathname } = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("noscroll", menuOpen);
  }, [menuOpen]);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <StyledMainWrapper
        className={[
          "container",
          menuOpen && "blur",
          pathname !== "/" && "adjustForNav",
        ]
          .filter(Boolean)
          .join(" ")}>
        {children}
        <Footer data={footerData} pathname={pathname} />
        <SocialBar />
      </StyledMainWrapper>
    </>
  );
}

export default Layout;
