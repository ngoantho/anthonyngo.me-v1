import styled from "astroturf";

import ContactLinks, { count } from "./cms/contact.md";

let StyledFooter = styled("footer")`
  padding-top: 15px;
  padding-left: 25%;
  padding-right: 25%;
  @media (--not-mobile) {
    display: none;
  }

  ul {
    columns: var(--count);
    list-style: none;
    margin: 0;
  }
`;

export default function Footer() {
  return (
    <StyledFooter
      style={{
        "--count": count,
      }}>
      <ContactLinks />
    </StyledFooter>
  );
}
