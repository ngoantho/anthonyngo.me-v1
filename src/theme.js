const h = [
  [1, "4.6rem"], // 1 h1
  [2, "3.6rem"], // 2 h2
  [3, "2.8rem"], // 3 h3
  [4, "2.2rem"], // 4 h4
  [5, "1.8rem"], // 5 h5
  [6, "1.6rem"], // 6 h6
];
export const sizes = {
  ...Object.fromEntries(h),
  l: "5.8rem",
  xl: "7.2rem",
  xxl: "8.8rem",
  s: "1.4rem",
  xs: "1.0rem",
  xxs: "0.4rem",
};

export const colors = {
  primary: "#eeeeee",
  secondary: "#222831",
  tertiary: "#4f8a8b",
  quaternary: "#fbd46d",
};

export * from "./config";
