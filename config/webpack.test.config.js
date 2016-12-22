const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const { SRC, root } = require('./utils');

module.exports = (env) => {
  console.log('starting development build');

  return webpackMerge(commonConfig(env), {
    devtool: 'inline-source-map',
    entry: {},
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          use: ['ng-annotate-loader', 'awesome-typescript-loader'],
          include: [root(SRC)]
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          include: [root(SRC)]
        },
        {
          enforce: 'post',
          test: /\.(js|ts)$/,
          loader: 'istanbul-instrumenter-loader',
          include: root(SRC),
          exclude: [
            /\.(e2e|spec)\.(ts|js)$/,
            /node_modules/
          ]
        }
      ]
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
