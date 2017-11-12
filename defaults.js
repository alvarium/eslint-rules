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
    'import/order': 'warn'
  },
}
