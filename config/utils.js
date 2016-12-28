const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'develop';

module.exports = {
  SRC: 'src',
  DIST: '.tmp/dist',
  ASSETS: 'assets',
  STYLES: 'scss',
  root: (...args) => {
    return path.resolve(__dirname, '..', ...args);
  },
  stringifyEnv: (env) => {
    env = Object
      .keys(env)
      .reduce((env, key) => {
        env[key] = JSON.stringify(env[key]);
        return env;
      }, {});
    return Object.assign({}, env, {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    });
  },
  isTestWatch: process.env.npm_lifecycle_script.indexOf('--auto-watch') !== -1
};
