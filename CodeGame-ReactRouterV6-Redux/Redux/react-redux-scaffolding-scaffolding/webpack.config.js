const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin   = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react'
                        ]
                    }
                }
            },
            {
                test: [/.css$|.scss$/],
                use:[
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            modules: {
                                context: path.resolve(__dirname, './dist/styles')
                            }
                        },
                      },
                    'css-loader',
                    'sass-loader'
                ]
            }, 
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        alias: {
            '@scss': path.resolve(__dirname, '../src/scss'),
            '@img': path.resolve(__dirname, '../src/assets'),
            '@': path.resolve(__dirname, '../src')
        },
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.ts']
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            path: path.resolve(__dirname, './dist'),
            filename: 'style.[chunkhash].css'
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.join(__dirname, '..')
        }),
        new CompressionPlugin()
    ]
}