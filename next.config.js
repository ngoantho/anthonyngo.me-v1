const withPreact = require("next-plugin-preact")
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withPreact(
  withMDX({
    webpack(config, { isServer }) {
      if (!isServer) {
        config.node = {
          fs: "empty",
        }
      }
      config.module.rules = [
        ...config.module.rules,
        {
          test: /\.(ico|txt|pdf)$/,
          use: {
            loader: "file-loader",
          },
        },
      ]
      return config
    },
  })
)
