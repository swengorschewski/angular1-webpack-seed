const { getPlugins } = require('./webpack.plugins');
const { getRules } = require('./webpack.rules');
const { SRC, DIST, root } = require('./utils');

module.exports = function (env) {
    Object.assign({}, env, {
        prod: env && env.prod || false,
        test: env && env.test || false
    })
    console.log(env.prod ? 'starting production build' : 'starting development build');

    return {
        devtool: 'source-map',
        entry: env.test ? {} : {
            main: [root(SRC, 'main.ts'), root(SRC, 'less', 'main.less')]
        },
        output: {
            path: root(DIST),
            filename: '[name].[hash].js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json', '.less', '.scss'],
            modules: [SRC, 'node_modules']
        },
        module: { rules: getRules(env) },
        plugins: getPlugins(env),
        devServer: { stats: 'minimal' }
    };
}