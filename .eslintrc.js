module.exports = {
  extends: [
    '@njakob/eslint-config/es6-flow-react',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  env: {
    browser: true,
  },
};
