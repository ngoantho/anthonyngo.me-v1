import { hash, withTheme } from "@/utils";

import { styled } from "linaria/react";

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
`;

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

const StyledNavItem = styled.li`
  & > a,
  & > a:link {
    text-decoration: none !important;
    color: ${(props) => props.theme.quaternary};
    transition: color 500ms;
  }

  & > a:hover {
    color: ${(props) => props.theme.tertiary};
  }
  & > a:active {
    background-color: ${(props) => props.theme.primary};
  }
`;

const Header = ({ data, theme }) => {
  return (
    <StyledHeader theme={theme.colors}>
      <StyledNav>
        {data.map((section) => (
          <StyledNavItem
            theme={theme.colors}
            key={hash(section.show + section.href)}>
            <a href={`#${section.href}`}>{section.show}</a>
          </StyledNavItem>
        ))}
      </StyledNav>
    </StyledHeader>
  );
};

export default withTheme(Header);
