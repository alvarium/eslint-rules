const defaults = require('./index.js')

module.exports = Object.assign({}, defaults, {
  env: Object.assign({}, defaults.env, {
    node: true,
    browser: false,
  }),
  rules: Object.assign({}, defaults.rules, {
    strict: [
      'error',
      'never',
    ],
  }),
})
