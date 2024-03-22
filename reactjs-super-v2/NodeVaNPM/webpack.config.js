const path = require('path')

// when build so that me see these log below in terminal
console.log('__dirname:', __dirname)
console.log('path.resolve():', path.resolve())
console.log(`path.resolve(__dirname, 'dist'):`, path.resolve(__dirname, 'dist'))

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve('src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
