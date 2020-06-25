/* eslint-disable no-undef */
const withPlugins = require("next-compose-plugins");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const optimizedImages = require("next-optimized-images");

const mdx = require("@next/mdx")({
  extension: /\.mdx?$/,
});
module.exports = withPlugins(
  [
    [mdx, { pageExtensions: ["mdx", "jsx", "js"] }],
    [
      optimizedImages,
      {
        imagesFolder: "src/images",
        handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
        [PHASE_DEVELOPMENT_SERVER]: {
          responsive: {
            adapter: require("responsive-loader/sharp"),
            disable: true,
          },
        },
      },
    ],
  ],
  {
    pageExtensions: ["mdx", "jsx", "js"],
    exportPathMap() {
      return {
        "/": { page: "/" },
      };
    },
  }
);
