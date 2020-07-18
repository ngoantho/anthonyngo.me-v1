import {
  fadeIn as fadeInAnim,
  fadeInDown as fadeInDownAnim,
  fadeInUp as fadeInUpAnim,
} from "./animations";

import { css } from "@emotion/core";

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

export const fadeIn = css`
  animation: ${fadeInAnim} 0.75s;
  animation-fill-mode: forwards;
  visibility: hidden;
`;
