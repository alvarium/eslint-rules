module.exports = {
  extends: 'react-app',
  plugins: [
    'import',
  ],
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'import/order': 'warn',
    'no-unused-vars': [
      'error',
      {
        'args': 'after-used',
      },
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    quotes: [
      'error',
      'single',
    ],
    'react/jsx-wrap-multilines': 'error',
    semi: [
      'error',
      'never',
    ],
  },
}
