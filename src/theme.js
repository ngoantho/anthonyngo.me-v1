import invert from "invert-color";

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

const colors = {
  primary: "#222831",
  secondary: "#393E46",
  tertiary: "#00ADB5",
  quaternary: "#EEEEEE",
};

const variant = {
  dark: colors,
  light: {
    primary: invert(colors.primary),
    secondary: invert(colors.secondary),
    tertiary: invert(colors.tertiary),
    quaternary: invert(colors.quaternary),
  },
};

export { variant };
