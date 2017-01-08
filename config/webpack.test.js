const path = require('path')

module.exports = {
    devtool: 'inline-source-map',

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
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'null-loader'
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "src", "demo", "app"),
                use: 'null-loader'
            }
        ]
    }
}