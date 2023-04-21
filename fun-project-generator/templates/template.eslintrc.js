module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['google', 'prettier', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'require-jsdoc': 'off',
    'no-invalid-this': 'off'
  }
};
