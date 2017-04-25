const path = require('path');

module.exports = {
  context: __dirname + '/app',

  entry: {
    javascript: './js/app.js',
    html: './index.html',
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: path.resolve(__dirname, './app/js')
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot', 
          'babel-loader?presets[]=es2015,presets[]=react'
        ]
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  }
};
