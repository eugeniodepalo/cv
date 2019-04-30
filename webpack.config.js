const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      cv: path.join(__dirname, 'lib')
    }
  }
}
