module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier', 'jest'],
  settings: {
    'import/resolver': 'webpack'
  },
  env: {
    'jest/globals': true
  },
  rules: {
    'max-len': ['error', 120],
    'react/jsx-filename-extension': ['error', { 'extensions': ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'none',
      arrowParens: 'always',
      printWidth: 120,
      semi: false
    }],
  }
};
