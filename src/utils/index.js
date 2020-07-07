// credit: https://stackoverflow.com/a/7616484
export function hash(string) {
  let hash = 0;
  let i;
  let chr;
  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

export const flatten = (theme) =>
  Object.keys(theme).reduce(
    (accumulator, name) =>
      Object.assign(accumulator, {
        [`--colors-${name}`]: theme[name],
      }),
    {}
  );

export { cx } from "./cx";
export { useTheme, withTheme } from "./themeutils";
export { default as media } from "./media";
