const path = require('path');

module.exports = {
  SRC: 'src',
  DIST: 'dist',
  ASSETS: 'assets',
  STYLES: 'scss',
  root: (...args) => {
    return path.resolve(__dirname, '..', ...args);
  }
};
