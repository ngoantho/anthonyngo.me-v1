const { merge } = require("webpack-merge");
const path = require("path");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

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
    webpack(config, { dev }) {
      return merge(config, {
        resolve: {
          alias: {
            src: path.resolve(__dirname, "src/"),
            public: path.resolve(__dirname, "public/"),
          },
          modules: [path.resolve(__dirname, "src")],
        },

        ...(dev && {
          devtool: "eval-cheap-source-map",
        }),
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
