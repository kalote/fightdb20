var glob = require('glob');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

process.env.NODE_ENV = 'production';

module.exports = {
  // Use all js files in project root (except the webpack config) as an entry
  entry: globEntries('!(webpack.config).js'),
  target: 'node',
  externals: [nodeExternals()],
  // Run babel on all .js files and skip those in node_modules
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: process.cwd(),
      exclude: /node_modules/,
    }]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
};

function globEntries(globPath) {
  var files = glob.sync(globPath);
  var entries = {};

  for (var i = 0; i < files.length; i++) {
    var entry = files[i];
    entries[path.basename(entry, path.extname(entry))] = './' + entry;
  }

  return entries;
}
