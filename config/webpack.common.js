const { root, stringifyEnv, DIST, SRC } = require('./utils');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = (env) => {
  return {
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
    },
    plugins: [
      new CheckerPlugin(),
      new DefinePlugin(stringifyEnv(env))
    ],
    performance: { hints: false }
  };
};
