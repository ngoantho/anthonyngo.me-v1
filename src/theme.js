import { invert } from "polished";

export const weights = {
  thin: 100,
  light: 300,
  regular: 400,
  bold: 700,
  black: 900,
};

export const sizes = [
  "14px", // 0
  "16px", // 1
  "18px", // 2
  "22px", // 3
  "26px", // 4
  "32px", // 5
  "40px", // 6
];

export const spacing = {
  extrasmall: "0.5em",
  small: "1em",
  normal: "1.5em",
  large: "2em",
  extralarge: "2.5em",
};

// https://colorhunt.co/palette/2763
const colors = {
  primary: "#222831",
  secondary: "#393e46",
  tertiary: "#00adb5",
  quaternary: "#eeeeee",
};
const inverted = Object.keys(colors).reduce(
  (accumulator, name) =>
    Object.assign(accumulator, {
      [name]: invert(colors[name]),
    }),
  {}
);

export const variant = {
  normal: colors, // dark
  alternate: inverted, // light
};

export default Object.keys(colors).reduce(
  (accumulator, name) =>
    Object.assign(accumulator, {
      [name]: `var(--colors-${name})`,
    }),
  {}
);
