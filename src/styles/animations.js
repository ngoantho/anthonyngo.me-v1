import { css, keyframes } from "@emotion/core";

const fadeInUpAnim = keyframes`
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

const fadeInDownAnim = keyframes`
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

const fadeInLeftAnim = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
    visibility: visible;
  }
`;

const fadeInRightAnim = keyframes`
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
    visibility: visible;
  }
`;

export const fadeInAnim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`;

export const fadeInUp = css`
  animation: ${fadeInUpAnim} 0.75s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const fadeInDown = css`
  animation: ${fadeInDownAnim} 0.75s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const fadeInLeft = css`
  animation: ${fadeInLeftAnim} 0.75s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const fadeInRight = css`
  animation: ${fadeInRightAnim} 0.75s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;

export const fadeIn = css`
  animation: ${fadeInAnim} 0.75s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;
