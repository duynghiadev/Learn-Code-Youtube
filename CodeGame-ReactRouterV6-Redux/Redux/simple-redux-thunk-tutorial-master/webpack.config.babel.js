const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = env => {
  return {
    entry: {
      app: './src/index.js'
    },
    devtool: 'inline-source-maps',
    devServer: {
      contentBase: '.dist/',
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new ManifestPlugin(),
      new HtmlWebpackPlugin({
        title: 'Thunk tutorial',
        template: './src/index.html'
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    }
  }
}
