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
    'operator-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'implicit-arrow-linebreak': 'off',
    'object-curly-newline': 'off',
    'func-names': ['error', 'as-needed', { generators: 'as-needed' }],
    'function-paren-newline': 'off',
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: false
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none',
              requireLast: false
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false
            }
          }
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true
          }
        ],
        'react/prop-types': 'off'
      }
    }
  ]
}
