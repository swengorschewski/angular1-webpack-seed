const autoprefixer = require('autoprefixer');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const { root, ASSETS, DIST, SRC, STYLES } = require('./utils');

module.exports = (env = {}) => {
  console.log('starting production build');

  return webpackMerge(commonConfig(env), {
    devtool: 'source-map',
    entry: {
      vendor: [root(SRC, 'polyfills.ts'), root(SRC, 'vendor.ts')],
      main: [
        root(SRC, 'main.ts'),
        root(SRC, STYLES, 'vendor.scss'),
        root(SRC, STYLES, 'main.scss')
      ]
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
          test: /\.html$/,
          loader: 'html-loader',
          include: [root(SRC)],
          query: { minimize: true }
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader?sourceMap!less-loader?sourceMap')
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap')
        },
        {
          test: /\.(png|jpg)$/,
          loader: `file-loader?name=${ASSETS}/images/[name].[ext]`
        },
        {
          test: /\.(ttf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
          loader: `file-loader?name=${ASSETS}/fonts/[name].[ext]`
        }
      ]
    },
    plugins: [
      new CommonsChunkPlugin({ name: ['vendor'] }),
      new HtmlWebpackPlugin({
        template: root(SRC, 'index.html'),
        chunksSortMode: 'dependency',
        favicon: root(SRC, ASSETS, 'favicon.ico')
      }),
      new ExtractTextPlugin('styles.[hash].css'),
      // ngAnnotate needs to run before uglify!!!!
      new ngAnnotatePlugin({ add: true }),
      new UglifyJsPlugin({
        beautify: false,
        sourceMap: true,
        output: { comments: false },
        mangle: { screw_ie8: true },
        compress: {
          screw_ie8: true,
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false
        },
      }),
      new LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        options: {
          postcss: [autoprefixer({ browsers: ['last 5 versions'] })],
          context: __dirname
        }
      })
    ],
    performance: {
      maxAssetSize: 200000,
      maxEntrypointSize: 200000,
      hints: 'warning'
    }
  });
};
