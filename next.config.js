const gemoji = require("remark-gemoji");
const withCSS = require("@zeit/next-css");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [gemoji],
  },
});

module.exports = withMDX(
  withCSS({
    cssModules: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.js$/,
        use: ["astroturf/loader"],
      });

      return config;
    },
  })
);
