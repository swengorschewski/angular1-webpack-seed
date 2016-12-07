const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { ASSETS, SRC, root } = require('./utils');

exports.getRules = (env) => {
    return [
        {
            test: /\.(ts|js)$/,
            use: ['ng-annotate-loader', 'awesome-typescript-loader'],
            include: [root(SRC)],
            exclude: env.test ? [] : [/\.(spec|e2e)\.ts$/]
        },
        {
            test: /\.less$/,
            loader: env.prod
                ? ExtractTextPlugin.extract('css-loader?sourceMap!less-loader?sourceMap')
                : 'style-loader!css-loader?sourceMap!less-loader?sourceMap'
        },
        {
            test: /\.scss$/,
            loader: env.prod
                ? ExtractTextPlugin.extract('css-loader?sourceMap!less-loader?sourceMap')
                : 'style-loader!css-loader?sourceMap!sass-loader?sourceMap'
        },
        {
            test: /\.(png|jpg)$/,
            loader: env.prod ? `file-loader?name=${ASSETS}/images/[name].[ext]` : 'url-loader?limit=8192'
        },
        {
            test: /\.(ttf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
            loader: env.prod ? `file-loader?name=${ASSETS}/images/[name].[ext]` : 'url-loader'
        }
    ];
}
