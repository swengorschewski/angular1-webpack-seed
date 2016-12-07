const webpackConfig = require("./webpack.config")({ prod: false, test: true });
const tests = './karma-spec.js';

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [tests],
    preprocessors: {
      [tests]: ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
