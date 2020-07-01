const withPlugins = require("next-compose-plugins");
const mdx = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withPlugins(
  [[mdx, { pageExtensions: ["js", "jsx", "mdx"] }]],
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
