const defaults = require('./node.js')

module.exports = Object.assign({}, defaults, {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      modules: true
    },
  },
})
