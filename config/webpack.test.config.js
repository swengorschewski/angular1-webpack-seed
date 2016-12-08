const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common.js');
const { SRC, root } = require('./utils');

module.exports = (env) => {
    console.log('starting development build');

    return webpackMerge(commonConfig(env), {
        entry: {},
        module: {
            rules: [
                {
                    test: /\.(ts|js)$/,
                    use: ['ng-annotate-loader', 'awesome-typescript-loader'],
                    include: [root(SRC)]
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
}
