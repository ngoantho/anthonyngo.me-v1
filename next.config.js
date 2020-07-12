const path = require("path");
const { merge } = require("webpack-merge");
const CssnanoPlugin = require("cssnano-webpack-plugin");

const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      require("remark-attr"),
      require("remark-align", {
        left: "align-left",
        center: "align-center",
        right: "align-right",
      }),
    ],
  },
});

module.exports = withPlugins(
  [
    withCSS,
    [
      withMDX,
      {
        pageExtensions: ["js", "jsx", "mdx"],
      },
    ],
  ],
  {
    pageExtensions: ["js", "jsx", "mdx"],
    webpack(config, options) {
      return merge(config, {
        module: {
          rules: [
            {
              test: /\.js$/,
              use: [
                {
                  loader: "linaria/loader",
                  options: {
                    sourceMap: process.env.NODE_ENV !== "production",
                    displayName: process.env.NODE_ENV !== "production",
                  },
                },
              ],
            },
          ],
        },
        resolve: {
          alias: {
            src: path.resolve(__dirname, "src/"),
          },
          modules: [path.resolve(__dirname, "src")],
        },
        optimization: {
          minimizer: [new CssnanoPlugin()],
        },
      });
    },
    exportPathMap() {
      return {
        "/": { page: "/" },
        "/index.html": { page: "/" },
      };
    },
  }
);
