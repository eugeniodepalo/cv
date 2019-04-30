const withTypescript = require('@zeit/next-typescript')
const update = require('immutability-helper')
const path = require('path')

module.exports = withTypescript({
  target: 'serverless',

  webpack(config) {
    return update(config, {
      resolve: {
        alias: {
          cv: { $set: path.join(__dirname, 'lib') }
        }
      }
    })
  }
})
