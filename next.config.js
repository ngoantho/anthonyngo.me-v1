const { merge } = require("webpack-merge");
const path = require("path");

module.exports = {
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
};
