const path = require('path');

module.exports = {
  SRC: 'src',
  DIST: '.tmp/dist',
  ASSETS: 'assets',
  STYLES: 'scss',
  root: (...args) => {
    return path.resolve(__dirname, '..', ...args);
  }
};
