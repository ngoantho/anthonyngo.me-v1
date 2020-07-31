const { merge } = require("webpack-merge");
const path = require("path");
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png", "svg", "webp", "gif", "ico"],
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

        module: {
          rules: [
            {
              test: /\.txt$/i,
              use: "raw-loader",
            },
          ],
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
