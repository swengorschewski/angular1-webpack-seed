const { SRC, DIST, root } = require('./utils');

module.exports = (env) => {
    return {
        devtool: 'source-map',
        output: {
            path: root(DIST),
            filename: '[name].[hash].js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json', '.less', '.scss'],
            modules: [SRC, 'node_modules']
        },
        devServer: {
            contentBase: root(SRC),
            port: 9001,
            proxy: require('./proxy.json'),
            stats: 'minimal'
        }
    };
}
