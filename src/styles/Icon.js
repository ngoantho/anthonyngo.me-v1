import { commonTransition } from "config";
import { styled } from "goober";

export default styled("img")`
  filter: grayscale(100%);
  transition: ${commonTransition};

  &:hover,
  &:focus {
    filter: initial;
    transform: translateY(-3px);
  }
`;
