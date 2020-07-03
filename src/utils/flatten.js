export const flatten = (theme) =>
  Object.keys(theme).reduce(
    (accumulator, name) =>
      Object.assign(accumulator, {
        [`--colors-${name}`]: theme[name],
      }),
    {}
  );
