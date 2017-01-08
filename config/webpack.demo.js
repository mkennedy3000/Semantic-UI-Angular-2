const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {

    devtool: 'eval-source-map',

    entry: {
        polyfills: './src/demo/polyfills.ts',
        vender: './src/demo/vendor.ts',
        app: './src/demo/main.ts'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'http://localhost:3000',
        filename: '[name].js'
    },

    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, "src")
        ],
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFileName: './src/demo/tsconfig.json'
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "src", "demo", "app"),
                use: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader"
                })
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/demo/index.html'
        }),

        new ExtractTextPlugin('[name].css')
    ]
}