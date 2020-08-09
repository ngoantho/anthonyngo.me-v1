import { Navbar, SocialBar } from "components";
import { glob as css, styled } from "goober";

import { Footer } from "components/sections";

const StyledMainWrapper = styled("main")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

css`
  #__next {
    position: relative;
  }
`;

function Layout({
  children,
  footerData = {
    github: "//github.com/ngoantho/portfolio",
    blurb: "Designed & Built by Anthony Ngo",
  },
}) {
  return (
    <>
      <Navbar />
      <StyledMainWrapper className="container">
        {children}
        <Footer data={footerData} />
        <SocialBar />
      </StyledMainWrapper>
    </>
  );
}

export default Layout;
