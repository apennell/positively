const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

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
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss!sass'
      }
    ]
  },

  postcss() {
    return [autoprefixer, precss];
  }
};

