import { colors, commonMargin, commonTransition, navLinks } from "theme";

import { Link as BaseLink } from "styles";
import NextLink from "next/link";
import PropTypes from "prop-types";
import { styled } from "goober";

const { func, bool } = PropTypes;

const S = {
  layout: {
    MainOverlay: styled("div")`
      position: fixed;
      z-index: 4;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      visibility: hidden;
      transform: translateX(100vw);
      transition: ${commonTransition};
      @media (min-width: 40rem) {
        display: none;
      }
      &.active {
        transform: translateX(0vw);
        visibility: visible;
      }
    `,
    MobileMenu: styled("aside")`
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 5rem;
      height: 100%;
      width: 60vw;
      right: 0;
      position: relative;
      z-index: 5;
      margin-left: auto;
      background: ${colors.primary};
    `,
    NavLinks: styled("nav")`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      text-align: center;
    `,
  },
  with: {
    NavLinksList: styled("ul")`
      padding: 0;
      margin: 0;
      width: 100%;
    `,
    NavLinksItem: styled("li")`
      margin: 0 auto ${commonMargin}rem;
      a {
        font-family: "mono", monospace;
        font-weight: 400;
      }
    `,
    ResumeButton: styled(BaseLink)`
      margin: 10% auto 0;
      width: max-content;
      font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    `,
  },
};

const MobileMenu = ({ menuOpen, setMenuOpen }) => (
  <S.layout.MainOverlay className={menuOpen ? "active" : ""}>
    <S.layout.MobileMenu>
      <S.layout.NavLinks>
        <S.with.NavLinksList>
          {navLinks.map(([name, hash], i) => (
            <S.with.NavLinksItem key={i}>
              <NextLink href={{ pathname: "/", hash }} passHref>
                <BaseLink onClick={() => setMenuOpen(false)}>{name}</BaseLink>
              </NextLink>
            </S.with.NavLinksItem>
          ))}
        </S.with.NavLinksList>
        <S.with.ResumeButton
          href="/resume.pdf"
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="button button-outline"
          title="View my resumé">
          Resumé
        </S.with.ResumeButton>
      </S.layout.NavLinks>
    </S.layout.MobileMenu>
  </S.layout.MainOverlay>
);

MobileMenu.propTypes = {
  menuOpen: bool,
  setMenuOpen: func,
};

export default MobileMenu;
