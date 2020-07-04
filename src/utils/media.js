// import { css } from "linaria";

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  tablet2: 600,
  phone: 376,
  phone2: 480,
  tiny: 330,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const remSize = sizes[label] / 16;
  accumulator[label] = (...args) => `
    @media(max-width: ${remSize}rem) {
      ${args}
    }
`
  return accumulator;
}, {})

export default media;
