import { css } from "@emotion/core"

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 768,
  tablet2: 600,
  phone: 376,
  phone2: 480,
  tiny: 330,
}

const media = () => {
  let result = {}
  Object.keys(sizes).forEach((size) => {
    const normEm = sizes[size] / 16
    result[size] = (...args) => css`
      @media (max-width: ${normEm}em) {
        ${css(...args)}
      }
    `
  })
  return result
}
export default media
