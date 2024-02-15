const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    library: 'bookAPI',
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9900
  }
};

module.exports = config;