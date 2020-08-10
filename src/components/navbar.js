import { colors, config } from "theme";

import Menu from "./mobmenu";
import { styled } from "goober";

const {
  navHeight,
  hamburgerClamp,
  hamHeight,
  hamVisibleCutoff,
  commonMargin,
  commonTransition,
  borderRadius,
} = config;

const S = {};
S.layout = {
  Container: styled("header")`
    display: flex;
    justify-content: space-between;
    width: 100%;
    top: 0;
    z-index: 2;
    padding: 0 ${commonMargin}rem;
    height: ${`${navHeight}px`};
    position: fixed;
    /* position: relative; */
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
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
    height: 25%;
    transition: ${commonTransition};
    @media (min-width: ${hamVisibleCutoff}) {
      display: none;
    }
  `,
};
S.with = {
  HamburgerLine: styled("div")`
    background: ${colors.tertiary};
    height: ${`${hamHeight}rem`};
    border-radius: ${borderRadius};
    width: ${(props) => `${hamburgerClamp - props.line / 2}rem`};
  `,
};

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <S.layout.Container>
      <S.layout.MainNav>
        <S.layout.Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <S.with.HamburgerLine line="1" />
          <S.with.HamburgerLine line="2" />
          <S.with.HamburgerLine line="3" />
        </S.layout.Hamburger>
      </S.layout.MainNav>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </S.layout.Container>
  );
}

export default Navbar;
