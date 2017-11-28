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
    'no-unused-vars': [
      'error',
      {
        'args': 'after-used'
      },
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'import/order': 'warn',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
  },
}
