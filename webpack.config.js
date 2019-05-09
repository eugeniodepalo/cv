const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '~': path.join(__dirname, 'lib')
    }
  }
}
