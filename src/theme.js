export const weights = {
  thin: 100,
  light: 300,
  regular: 400,
  bold: 700,
  black: 900,
};

const h = [
  [0, "4.6rem"], // 0 h1
  [1, "3.6rem"], // 1 h2
  [2, "2.8rem"], // 2 h3
  [3, "2.2rem"], // 3 h4
  [4, "1.8rem"], // 4 h5
  [5, "1.6rem"], // 5 h6
];
export const sizes = {
  ...Object.fromEntries(h),
  l: "5.8rem",
  xl: "7.2rem",
  xxl: "8.8rem",
};

export const spacing = {
  extrasmall: "0.5em",
  small: "1em",
  normal: "1.5em",
  large: "2em",
  extralarge: "2.5em",
};

export const colors = {
  tan: "#f0ece3",
  grey: "#dfd3c3",
  gray: "#dfd3c3",
  gold: "#c7b198",
  dusk: "#596e79",
};

import * as seo from "./seo";

export default {
  colors,
  weights,
  sizes,
  spacing,
  seo,
};
