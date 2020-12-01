import { styled } from "goober"
import HeroBanner from "./herobanner"

let StyledContent = styled("main")`
  display: flex;
  flex-direction: column;
  counter-reset: count;

  section {
    margin-top: 3rem;
    margin-bottom: 3rem;
    &:first-child {
      margin-top: 6rem;
    }

    .heading {
      font-weight: 400;
      /* margin-bottom: 0; */

      &::before {
        counter-increment: count;
        content: counter(count) ". ";
        font-size: smaller;
        color: gray;
      }
      &::after {
        content: "";
        width: 16rem;
        display: block;
        margin-top: 0.25rem;
        border: 1px solid whitesmoke;
      }
    }
  }
`

let StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`

export default function Layout({ hero, children }) {
  return (
    <StyledWrapper>
      <HeroBanner hero={hero} />
      <StyledContent className="container">{children}</StyledContent>
    </StyledWrapper>
  )
}
