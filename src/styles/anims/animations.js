import { keyframes } from "@emotion/core";

export const fadeInUp = keyframes`
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
`;
export const fadeInDown = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
`;
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;
