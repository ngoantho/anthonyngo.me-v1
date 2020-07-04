module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? {
        'postcss-grid-kiss': {},
        'cssnano': {
          preset: 'default'
        }
      }
      : {
        'postcss-grid-kiss': {}
      }
}