module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
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
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'none',
      arrowParens: 'always',
      printWidth: 120,
      semi: false
    }],
  }
};
