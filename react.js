const defaults = require('./index.js')

module.exports = {
  extends: 'react-app',
  plugins: [
    'import',
  ],
  rules: Object.extends({}, defaults.rules, {
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
    'no-var': 'error',
    'import/order': 'warn',
    'prefer-const': 'error',
    'react/jsx-wrap-multilines': 'error',
    'prefer-destructuring': 'error',
  }),
}
