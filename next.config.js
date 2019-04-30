const withTypescript = require('@zeit/next-typescript')
const webpackConfig = require('./webpack.config')

module.exports = withTypescript({
  target: 'serverless',

  webpack(config) {
    Object.assign(config.resolve.alias, webpackConfig.resolve.alias)
    return config
  }
})
