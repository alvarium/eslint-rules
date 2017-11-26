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
    'import/order': 'warn',
    'prefer-const': 'error',
  },
}
