/* eslint-disable no-undef */
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const mdx = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withPlugins(
  [
    [mdx, { pageExtensions: ["js", "jsx", "mdx"] }],
    [optimizedImages, { handleImages: ["png", "svg", "webp", "ico"] }],
  ],
  {
    pageExtensions: ["js", "jsx", "mdx"],
    exportPathMap() {
      return {
        "/": { page: "/" },
        "/index.html": { page: "/" },
      };
    },
  }
);
