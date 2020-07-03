const withPlugins = require("next-compose-plugins");
const nextCss = require("@zeit/next-css");
const mdx = require("@next/mdx")({
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
  [nextCss, [mdx, { pageExtensions: ["js", "jsx", "mdx"] }]],
  {
    pageExtensions: ["js", "jsx", "mdx"],
    webpack(config, { dev }) {
      config.module.rules.push({
        test: /\.js$/,
        use: [
          {
            loader: "linaria/loader",
            options: {
              sourceMap: process.env.NODE_ENV !== "production",
            },
          },
        ],
      });

      if (dev) config.devtool = "eval-cheap-source-map";
      return config;
    },
    exportPathMap() {
      return {
        "/": { page: "/" },
        "/index.html": { page: "/" },
      };
    },
  }
);
