// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   plugins: ['prettier'],
//   extends: ['eslint:recommended', 'some-other-config-you-use', 'prettier'],
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   rules: {
//     'prettier/prettier': 'error',
//     semi: ['error', 'always'],
//     // quotes: ['error', 'double'],
//   },
//   'editor.formatOnPaste': false,
//   'editor.formatOnSave': true,
//   '[javascript]': {
//     'editor.formatOnSave': true,
//   },
//   '[html]': {
//     'editor.formatOnSave': false,
//   },
//   '[json]': {
//     'editor.formatOnSave': false,
//   },
//   'eslint.autoFixOnSave': true,
//   'eslint.alwaysShowStatus': true,
// }

module.exports = {
  extends: ['plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-duplicate-imports': 'error',
  },
}
