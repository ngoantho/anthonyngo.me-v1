import { Footer, Navbar } from "components";
import { commonTransition, navScrollHeight } from "theme";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { styled } from "goober";
import useMedia from "use-media";
import { useRouter } from "next/router";

const { node, shape, string } = PropTypes;

const StyledMainWrapper = styled("main")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;
  transition: ${commonTransition};

  @media (max-height: 40rem) {
    top: ${navScrollHeight / 2}px;
  }

  &.blur {
    filter: opacity(0.2);
  }
`;

const SocialBar = dynamic(() => import("./socialbar"));

export default function Layout({
  children,
  footerData = {
    github: "//github.com/ngoantho/portfolio",
    blurb: "Designed & Built by Anthony Ngo",
  },
}) {
  const notMobile = useMedia("(min-width: 40rem)");
  const { pathname } = useRouter();
  const homePage = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("noscroll", menuOpen);
  }, [menuOpen]);

  return (
    <>
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        homePage={homePage}
        mobile={!notMobile}
      />
      <StyledMainWrapper
        className={["container", menuOpen && "blur"].filter(Boolean).join(" ")}>
        {children}
        <Footer data={footerData} isMobile={!notMobile} />
        {notMobile ? <SocialBar homePage={homePage} /> : null}
      </StyledMainWrapper>
    </>
  );
}

Layout.propTypes = {
  children: node,
  footerData: shape({
    github: string,
    blurb: string,
  }),
};
