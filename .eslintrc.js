// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Yakov preferences
    'comma-dangle': ["error", "only-multiline"],
    'space-before-function-paren': ["error", "never"],
    'no-trailing-spaces': 1,
    'camelcase': 1,
    'no-unused-vars': 1,
    'semi': 1,
    'comma-spacing': 1,
    'no-undef': 1,
    'quotes': 1,
    'block-spacing': 1,
    'eqeqeq': 1,
    'spaced-comment': 1,
    'padded-blocks': 1,
    'eol-last': 1,
  }
}
