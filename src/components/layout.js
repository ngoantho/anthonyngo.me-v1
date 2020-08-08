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

function Layout({ children, footerData }) {
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
