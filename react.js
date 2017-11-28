module.exports = {
  extends: 'react-app',
  plugins: [
    'import',
  ],
  rules: {
    semi: [
      'error',
      'never',
    ],
    quotes: [
      'error',
      'single',
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'import/order': 'warn',
    'prefer-const': 'error',
    'react/jsx-wrap-multilines': 'error',
    'prefer-destructuring': 'error',
  },
}
