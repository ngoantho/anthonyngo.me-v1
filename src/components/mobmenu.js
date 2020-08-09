import { darken } from "polished";
import { hamVisibleCutoff } from "config";
import { styled } from "goober";

const S = {};
S.layout = {
  MainOverlay: styled("div")`
    position: fixed;
    /* z-index: 4; */
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    visibility: hidden;
    @media (min-width: ${hamVisibleCutoff}) {
      display: none;
    }
    &.active {
      visibility: visible;
    }
  `,
  MobileMenu: styled("aside")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem;
    height: 100%;
    width: 50vw;
    right: 0;
    position: relative;
    z-index: 5;
    margin-left: auto;
    background-color: ${darken(0.1, "#2c2f34")};
  `,
  NavLinks: styled("nav")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    text-align: center;
  `,
};
S.with = {
  NavLinksList: styled("ul")``,
  NavLinksItem: styled("li")``,
};

export default function MobileMenu({ menuOpen }) {
  return (
    <S.layout.MainOverlay className={menuOpen ? "active" : ""}>
      <S.layout.MobileMenu>
        <S.layout.NavLinks>{}</S.layout.NavLinks>
      </S.layout.MobileMenu>
    </S.layout.MainOverlay>
  );
}
