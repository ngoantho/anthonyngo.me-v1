/* eslint-disable no-undef */
const withPlugins = require("next-compose-plugins")
const optimizedImages = require("next-optimized-images")
const nextOffline = require("next-offline")
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
  PHASE_EXPORT,
} = require("next/constants")
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const mdx = require("@next/mdx")({
  extension: /\.mdx?$/,
})

module.exports = withPlugins(
  [
    [mdx, { pageExtensions: ["js", "jsx", "mdx"] }],
    [bundleAnalyzer, {}, [PHASE_PRODUCTION_BUILD, PHASE_EXPORT]],
    [
      optimizedImages,
      {
        handleImages: ["png", "svg", "webp", "ico"],
        inlineImageLimit: 16384,
        [PHASE_DEVELOPMENT_SERVER]: {
          inlineImageLimit: -1,
        },
      },
    ],
    [
      nextOffline,
      {
        workboxOpts: {
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: "NetworkFirst",
              options: {
                cacheName: "offlineCache",
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        },
      },
      [PHASE_PRODUCTION_BUILD, PHASE_EXPORT],
    ],
  ],
  {
    pageExtensions: ["js", "jsx", "mdx"],
    webpack(config) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: "preact/compat",
        "react-dom": "preact/compat",
        "react-render-to-string": "preact-render-to-string",
        "react-ssr-prepass": "preact-ssr-prepass",
      }
      return config
    },
    exportPathMap() {
      return {
        "/": { page: "/" },
        "/index.html": { page: "/" },
      }
    },
  }
)
