module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'plugin:react/recommended', 'plugin:jest/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'jest', '@typescript-eslint'],
  settings: {
    'import/resolver': 'webpack'
  },
  env: {
    'jest/globals': true
  },
  rules: {
    'max-len': ['error', 120],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/jsx-one-expression-per-line': 'off',
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'operator-linebreak': ['error', 'after']
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowHigherOrderFunctions: true
          }
        ]
      }
    }
  ]
}
