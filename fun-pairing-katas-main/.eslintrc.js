module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'google',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-len': 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'space-before-function-paren': 'off',
    'require-jsdoc': 'off',
    'no-tabs': 'off',
  },
};
