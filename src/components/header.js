import { darken, lighten } from "polished";
import { hash, withTheme } from "@/utils";
import { useEffect, useState } from "react";

import { mixins } from "../styles";
import { styled } from "linaria/react";

const StyledHeader = styled.header`
  width: 100%;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.theme.secondary && darken(0.1, props.theme.secondary)};
  transition: min-height 0.26s ease;

  &[fill="fill"] {
    min-height: 100vh;
  }
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 44rem) {
    & > li:not([for="hamburger"]) {
      visibility: hidden;
    }
  }
`;

const StyledNavLink = styled.a`
  text-decoration: none !important;
  color: ${(props) => props.theme.quaternary};
  transition: background-color 500ms;
  padding: 4vh 2vw;
  display: block;
  height: 100%;

  &:hover,
  &:focus {
    background-color: ${(props) =>
      props.theme.secondary && lighten(0.001, props.theme.secondary)};
  }
`;

const StyledHamburger = styled(StyledNavLink)`
  font-size: 1.75rem;
  padding: 2vh 4vw;
  display: none;

  @media (max-width: 44rem) {
    display: block;
    cursor: pointer;
  }
`;

const MobileNav = styled.ul`
  display: none;

  @media (max-width: 44rem) {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    visibility: hidden;
    height: 0px;

    &:target {
      visibility: visible;
      height: 100%;
      transform: scaleY(1);
      transform-origin: top;
      transition: transform 0.26s ease;
    }
    &:not(:target) {
      transform: scaleY(0);
      transform-origin: top;
      transition: transform 0.26s ease;
    }
  }
`;

const Header = ({ data, theme, config }) => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  useEffect(() => {
    // clear #mobileNav hash from url
    if (navMenuOpen) history.replaceState({}, document.title, ".");
  }, [navMenuOpen]);

  const listItems = data.map((section, i) => {
    return (
      <li key={hash(section.show + i)}>
        <StyledNavLink
          theme={theme.colors}
          href={`#${section.href}`}
          onClick={() => setNavMenuOpen(false)}>
          {section.show}
        </StyledNavLink>
      </li>
    );
  });

  return (
    <StyledHeader theme={theme.colors} fill={navMenuOpen ? "fill" : null}>
      <StyledNav className={mixins.clearUAMargins}>
        {listItems}
        <li htmlFor="hamburger">
          <StyledHamburger
            theme={theme.colors}
            href={navMenuOpen ? "#mobileNav" : "#"}
            onClick={() => setNavMenuOpen(!navMenuOpen)}>
            {navMenuOpen ? "✕" : "≡"}
          </StyledHamburger>
        </li>
      </StyledNav>
      <MobileNav id="mobileNav" className={mixins.clearUAMargins}>
        {listItems}
      </MobileNav>
    </StyledHeader>
  );
};

export default withTheme(Header, {});
