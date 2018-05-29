module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'no-shadow': 0
  },
  env: {
    browser: 1
  }
};
