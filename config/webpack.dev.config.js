const autoprefixer = require('autoprefixer');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const { SRC, STYLES, root } = require('./utils');

module.exports = (env) => {
  console.log('starting development build');

  return webpackMerge(commonConfig(env), {
    entry: {
      polyfills: root(SRC, 'polyfills.ts'),
      vendor: root(SRC, 'vendor.ts'),
      main: root(SRC, 'main.ts'),
      vendorStyles: root(SRC, STYLES, 'vendor.scss'),
      appStyles: root(SRC, STYLES, 'main.scss')
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)$/,
          use: ['ng-annotate-loader', 'awesome-typescript-loader'],
          include: [root(SRC)],
          exclude: [/\.(spec|e2e)\.(ts|js)$/]
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader?sourceMap', 'less-loader?sourceMap']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap']
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        },
        {
          test: /\.(ttf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [
      new CommonsChunkPlugin({ name: ['polyfills', 'vendor'].reverse() }),
      new HtmlWebpackPlugin({ template: root(SRC, 'index.html'), chunksSortMode: 'dependency' }),
      new LoaderOptionsPlugin({
        minimize: false,
        debug: true,
        options: {
          postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
          context: __dirname
        }
      })
    ]
  });
};
