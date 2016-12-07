const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');

const commonPlugins = [
    new HtmlWebpackPlugin({ template: './src/index.html', chunksSortMode: 'dependency' })
];

const prodPlugins = commonPlugins.concat([
    new ExtractTextPlugin('styles.[hash].css'),
    new UglifyJsPlugin({
        beautify: false,
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
            context: __dirname
        }
    })
]);

const devPlugins = commonPlugins.concat([]);

exports.getPlugins = (isProd) => {
    return isProd ? prodPlugins : devPlugins;
}