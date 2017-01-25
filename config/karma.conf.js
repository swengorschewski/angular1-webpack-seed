const webpackConfig = require('./webpack.test.config')({});
const { isTestWatch,  root, SRC } = require('./utils');
const tests = './karma-spec.js';

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [tests],
    preprocessors: {
      [tests]: ['webpack', 'sourcemap']
    },
    reporters: isTestWatch ? ['mocha'] : ['mocha', 'coverage'],
    coverageReporter: {
      dir: root('.tmp', 'coverage'),
      reporters: [
        { type: 'html', subdir: 'coverage-html' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    client: {
      captureConsole: true
    },
    colors: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
