const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                        loader: 'awesome-typescript-loader',
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
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/demo/index.html'
        })
    ]
}