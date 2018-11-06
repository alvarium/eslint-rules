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
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'import/order': 'warn',
    'no-redeclare': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        }
      }
    ],
    'space-after-keywords': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],
    'space-infix-ops': 'error',
  },
}
