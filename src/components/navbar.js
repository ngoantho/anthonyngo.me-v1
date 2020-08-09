import { colors, config } from "theme";

import Menu from "./mobmenu";
import { styled } from "goober";

const { navHeight, hamburgerClamp, hamHeight } = config;

const S = {};
S.layout = {
  Container: styled("header")`
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 0;
    position: relative;
    z-index: 2;
    padding: 0 2rem;
    height: ${`${navHeight}px`};
  `,
  MainNav: styled("nav")`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    z-index: 3;
    width: 100%;
    font-family: "mono", monospace;
  `,
  Hamburger: styled("div")`
    display: flex;
    justify-content: center;
    align-content: center;
    height: 25%;
  `,
  HamburgerInner: styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    &:hover,
    &:focus {
      cursor: pointer;
    }
  `,
};
S.with = {
  HamburgerInnerLine: styled("div")`
    background: ${colors.tertiary};
    height: ${`${hamHeight}rem`};
    border-radius: 1rem;
    width: ${(props) => `${hamburgerClamp - props.line / 2}rem`};
  `,
};

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <S.layout.Container className="header" style={{ position: "sticky" }}>
      <S.layout.MainNav>
        <S.layout.Hamburger>
          <S.layout.HamburgerInner onClick={() => setMenuOpen(!menuOpen)}>
            <S.with.HamburgerInnerLine line="1" />
            <S.with.HamburgerInnerLine line="2" />
            <S.with.HamburgerInnerLine line="3" />
          </S.layout.HamburgerInner>
        </S.layout.Hamburger>
      </S.layout.MainNav>
      <Menu menuOpen={menuOpen} />
    </S.layout.Container>
  );
}

export default Navbar;
