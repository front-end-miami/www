module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['@vue/standard', 'eslint:recommended', 'plugin:vue/recommended'],
  rules: {
    indent: ['error', 2],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }], // Ident script tags
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
