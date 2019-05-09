const withTypescript = require('@zeit/next-typescript')
const webpackConfig = require('./webpack.config')

const { assign } = Object

module.exports = withTypescript({
  target: 'serverless',

  webpack(config) {
    assign(config.resolve.alias, webpackConfig.resolve.alias)
    return config
  }
})
