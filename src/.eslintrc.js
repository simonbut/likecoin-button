module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
  ],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
  },
  globals: {},
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
};

