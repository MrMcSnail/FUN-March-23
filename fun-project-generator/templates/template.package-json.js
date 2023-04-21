const { argv } = require('process');
const repoName = argv[2];
const url = argv[3];

module.exports = {
  name: `${repoName}`,
  version: '1.0.0',
  description:
    'Blank template repository created with ProjGenerator by McSnail',
  main: 'index.js',
  scripts: {
    test: 'jest'
  },
  repository: {
    type: 'git',
    url: `git+${url}`
  },
  keywords: [],
  author: '',
  license: 'ISC',
  bugs: {
    url: `https://github.com/MrMcSnail/${repoName}/issues`
  },
  homepage: `https://github.com/MrMcSnail/${repoName}#readme`,
  devDependencies: {
    jest: '^29.5.0',
    eslint: '^8.37.0',
    'eslint-config-google': '^0.14.0'
  },
  dependencies: {
    "@babel/eslint-parser": "^7.21.3",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-prettier": "^4.2.1",
    "gh": "^2.8.9",
    "prettier": "^2.8.7"
  }
};
