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
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'import/order': 'warn',
    'no-unused-vars': [
      'error',
      {
        'args': 'after-used',
      },
    ],
    'no-redeclare': 'error',
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
    'space-before-function-paren': ['error', 'never'],
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],
    'space-infix-ops': 'error',
  },
}
