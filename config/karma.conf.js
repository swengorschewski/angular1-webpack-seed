const webpackConfig = require('./webpack.test.config')({});
const { root, SRC } = require('./utils');
const tests = './karma-spec.js';

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [tests],
    preprocessors: {
      [tests]: ['webpack', 'sourcemap']
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: root('coverage'),
      reporters: [
        { type: 'html', subdir: 'coverage-html' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
