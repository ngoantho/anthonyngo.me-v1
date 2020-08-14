import { Footer, Loader, Navbar } from "components";
import { commonTransition, navHeight } from "config";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";
import { styled } from "goober";
import useMedia from "use-media";
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
    @media (min-height: 40rem) {
      padding-top: 10rem;
    }
  }

  &.extPage {
    padding-top: ${navHeight}px;
  }
`;

const SocialBar = dynamic(() => import("./socialbar"));

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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.body.classList.toggle("noscroll", isLoading);
  }, [isLoading]);

  const notMobile = useMedia("(min-width: 40rem)");
  const { pathname } = useRouter();
  const homePage = pathname === "/";

  return (
    <>
      {isLoading ? (
        <Loader onFinishLoading={() => setIsLoading(false)} />
      ) : null}
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
        <Footer data={footerData} isMobile={!notMobile} />
        {notMobile ? <SocialBar homePage={homePage} /> : null}
      </StyledMainWrapper>
    </>
  );
}

export default Layout;
