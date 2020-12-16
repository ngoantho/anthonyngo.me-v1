import styled from "astroturf";

import NavLinks, { count } from "./cms/menu.md";

let Table = styled("table")`
  table-layout: auto;
  margin-bottom: 0;
`;

let HeaderStyle = styled("header")`
  @import "../styles/mixins.scss";
  @media (--not-mobile) {
    @include squeeze();
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
      text-align: right;
      & > a {
        color: var(--text-main);
        font-weight: normal;
      }
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
                "--count": count,
              }}>
              <NavLinks />
            </LinksContainer>
          </tr>
        </thead>
        <tbody>{}</tbody>
      </Table>
    </HeaderStyle>
  );
}
