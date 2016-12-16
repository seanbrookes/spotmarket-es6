var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets:['react']
        },
        exclude: /node_modules/
      }
    ]
  }
};