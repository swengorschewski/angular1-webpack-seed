const path = require('path');

module.exports = {
    SRC: 'src',
    DIST: 'dist',
    ASSETS: 'assets',
    root: (...args) => {
        return path.resolve(__dirname, '..', ...args);
    }
}