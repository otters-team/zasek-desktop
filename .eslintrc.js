module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue/essential',
    'plugin:vue/base',
  ],
  rules: {
    // include our prettier config file
    'no-console': 'warn',
    'no-unreachable': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreStrings: true,
        ignoreComments: true,
      },
    ],
    'no-extra-semi': 'error',
    'no-trailing-spaces': 'error',
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'semi': ['error', 'never',],
    'quote-props': ['error', 'consistent-as-needed',],
    'comma-dangle': [
      'error',
      {
        arrays: 'always', // let [a,]
        objects: 'always', // let {a,}
        imports: 'always', // import {a,}
        exports: 'always', // export {a,}
        functions: 'ignore', // function(a,)
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}