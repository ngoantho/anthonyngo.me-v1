import styled from "astroturf";

import ContactLinks, { count as contactCount } from "../../ngoantho/contact.md";
import NavLinks, { count as navCount } from "../../ngoantho/menu.md";

let Table = styled("table")`
  table-layout: auto;
  margin-bottom: 0;
`;

let HeaderStyle = styled("header")`
  @import "../styles/mixins.scss";
  @media (--not-mobile) {
    @include squeezeLess();
  }

  background: var(--background-body);
  position: sticky;
  top: 0;
`;

let LinksContainer = styled("th")`
  ul {
    columns: var(--count);
    list-style: none;
    margin: 0;

    li {
      text-align: center;
      & > a {
        color: var(--text-main);
        font-weight: normal;
      }
    }
  }

  &:last-child {
    ul > li {
      text-align: right;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Table>
        <thead>
          <tr>
            <th>Anthony Ngo</th>
            <LinksContainer
              style={{
                "--count": navCount,
              }}>
              <NavLinks />
            </LinksContainer>
            <LinksContainer
              style={{
                "--count": contactCount,
              }}>
              <ContactLinks />
            </LinksContainer>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </Table>
    </HeaderStyle>
  );
}
