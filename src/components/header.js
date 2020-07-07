import { darken, lighten } from "polished";
import { hash, withTheme } from "@/utils";

import { styled } from "linaria/react";
import { useState } from "react";

const StyledHeader = styled.header`
  width: 100%;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.theme.secondary && darken(0.1, props.theme.secondary)};
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  margin-left: auto;
  margin-right: auto;
  margin-block-start: 0em;
  margin-block-end: 0em;
  padding-inline-start: 0px;

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
  padding: 2vh 2vw;
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

    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-inline-start: 0px;
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
    <StyledHeader theme={theme.colors}>
      <StyledNav>
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
      <MobileNav id="mobileNav">{listItems}</MobileNav>
    </StyledHeader>
  );
};

export default withTheme(Header, {
  wow: true,
});
