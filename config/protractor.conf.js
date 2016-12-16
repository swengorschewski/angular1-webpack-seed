const { root, SRC } = require('./utils.js');

require('ts-node/register');

exports.config = {
  baseUrl: 'http://localhost:9001/',

  specs: [root(SRC, '**/*.e2e.ts')],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function () {
    browser.ignoreSynchronization = true;
  }
};
