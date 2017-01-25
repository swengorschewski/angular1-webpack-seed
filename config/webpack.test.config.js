const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const { isTestWatch, stringifyEnv, root, DIST, SRC } = require('./utils');

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
  return {
    devtool: 'inline-source-map',
    module: {
      rules: isTestWatch ? baseRules : baseRules.concat(istanbulLoader)
    },
    output: {
      path: root(DIST),
      filename: '[name].[hash].js'
    },
    resolve: {
      extensions: ['.ts', '.js', '.json', '.scss'],
      modules: [root(SRC), root('node_modules')]
    },
    plugins: [
      new CheckerPlugin(),
      new DefinePlugin(stringifyEnv(env)),
      new LoaderOptionsPlugin({
        minimize: false,
        debug: true,
        options: { context: __dirname }
      })
    ]
  };
};
