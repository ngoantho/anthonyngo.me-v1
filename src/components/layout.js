import { Loader, Navbar, SocialBar } from "components";
import { commonTransition, navHeight } from "config";
import { useEffect, useState } from "react";

import { Footer } from "components/sections";
import { styled } from "goober";
import { useRouter } from "next/router";

const BLUR_AMOUNT = 0.2;

const StyledMainWrapper = styled("main")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;
  transition: ${commonTransition};

  &.blur {
    filter: opacity(${BLUR_AMOUNT});
  }

  &.homePage {
    padding-top: 10rem;
    footer {
      padding-top: 10rem !important;
    }
  }

  &.extPage {
    padding-top: ${navHeight}px;
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

  const { pathname } = useRouter();
  const homePage = pathname === "/";
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Loader onFinishLoading={() => setIsLoading(false)} />
  ) : (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        blurAmount={BLUR_AMOUNT}
        homePage={homePage}
      />
      <StyledMainWrapper
        className={[
          "container",
          menuOpen && "blur",
          homePage && "homePage",
          !homePage && "extPage",
        ]
          .filter(Boolean)
          .join(" ")}>
        {children}
        <Footer data={footerData} />
        <SocialBar />
      </StyledMainWrapper>
    </>
  );
}

export default Layout;
