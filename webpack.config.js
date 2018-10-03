const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        boot: './src/podaplayer/PoDaBoot.js',
        loader: './src/podaplayer/PoDaLoaderV1.js'

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }

        }, {
            test: /\.css?$/,
            use: ['style-loader', 'css-loader']
        }],

    },

    node: {
        fs: 'empty',
        net: 'empty'
    },
    devServer: {
        historyApiFallback: {
            index: '/dist/index.html'
        }
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: 'http://localhost:8080/',
            historyApiFallback: {
                index: '/dist/index.html'
            }
        })
    ]
};