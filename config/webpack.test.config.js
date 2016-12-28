const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const { isTestWatch, root, SRC } = require('./utils');
const istanbulLoader = {
  enforce: 'post',
  test: /\.(js|ts)$/,
  loader: 'istanbul-instrumenter-loader',
  include: root(SRC),
  exclude: [
    /\.(e2e|spec)\.(ts|js)$/,
    /node_modules/
  ]
};
const baseRules = [{
  test: /\.(ts|js)$/,
  use: ['ng-annotate-loader', 'awesome-typescript-loader'],
  include: [root(SRC)]
},
{
  test: /\.html$/,
  loader: 'html-loader',
  include: [root(SRC)]
}];

module.exports = (env = {}) => {
  console.log('starting development build');

  return webpackMerge(commonConfig(env), {
    devtool: 'inline-source-map',
    entry: {},
    module: {
      rules: isTestWatch ? baseRules : baseRules.concat(istanbulLoader)
    },
    plugins: [
      new LoaderOptionsPlugin({
        minimize: false,
        debug: true,
        options: { context: __dirname }
      })
    ]
  });
};
