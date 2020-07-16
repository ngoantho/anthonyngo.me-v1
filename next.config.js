const { merge } = require("webpack-merge");
const path = require("path");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
/* const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
}); */

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
        optimizeImages: process.env.NODE_ENV === "production",
      },
    ],
  ],
  {
    webpack(config, options) {
      return merge(config, {
        resolve: {
          alias: {
            src: path.resolve(__dirname, "src/"),
          },
          modules: [path.resolve(__dirname, "src")],
        },
      });
    },
    experimental: {
      modern: true,
    },
    exportPathMap() {
      return {
        "/": { page: "/" },
        "/index.html": { page: "/" },
      };
    },
  }
);
