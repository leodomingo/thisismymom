const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const express = require('express');

module.exports = {
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
        before: function (app) {
            app.use(express.static(path.join(__dirname, 'public')));

            app.get('/akash', function (req, res) {
                res.sendFile(path.join(__dirname, 'akash.html'));
            });
            app.get('/chivo-guisado', function (req, res) {
                res.sendFile(path.join(__dirname, 'chivo-guisado.html'));
            });
            app.get('/pictures', function (req, res) {
                res.sendFile(path.join(__dirname, 'photos.html'));
            });
            app.get('/pay-the-players', function (req, res) {
                res.sendFile(path.join(__dirname, 'mmm.html'));
            });
            app.get('/wallet', function (req, res) {
                res.sendFile(path.join(__dirname, 'wallet.html'));
            });
        },
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