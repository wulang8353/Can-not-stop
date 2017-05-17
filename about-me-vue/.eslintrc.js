// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
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
    // js一直有分号
    'semi': ['error','always'],
    // 允许有连续空行，最大不超过2行
    'no-multiple-empty-lines': ['error', {
      max: 3,
      maxEOF: 3,
      maxBOF: 3
    }],
    // 缩进不需要使用默认
    'indent': 0,
    // 函数名和括号之间不需要有空格
    'space-before-function-paren': 0,
    // 允许有未被使用的变量
    'no-unused-vars':0
  }
}
