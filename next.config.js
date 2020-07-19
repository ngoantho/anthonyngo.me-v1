const { merge } = require("webpack-merge");
const path = require("path");
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withPWA = require("next-pwa");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
        optimizeImages: process.env.NODE_ENV === "production",
      },
    ],
    [
      withPWA,
      {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
      },
    ],
  ],
  {
    webpack(config, { dev, isServer }) {
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
        ...(!isServer && {
          node: {
            fs: "empty",
          },
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
