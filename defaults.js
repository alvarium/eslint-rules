module.exports = {
  env: {
    es6: true,
  },
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
    'import/order': 'warn'
  },
}
