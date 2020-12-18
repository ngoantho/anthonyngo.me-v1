import styled from "astroturf";
import ContactLinks from "cms/contact.md";

let StyledAside = styled("aside")`
  position: absolute;
  top: 0;
  right: 0;
  @media (--is-mobile) {
    display: none;
  }

  ul {
    list-style: none;
  }
`;

export default function Side() {
  return (
    <StyledAside>
      <ContactLinks />
    </StyledAside>
  );
}
