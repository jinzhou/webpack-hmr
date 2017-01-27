var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ReloadHtmlWebpackPlugin = require('reload-html-webpack-plugin');
var port = '3000';

var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
    // https://webpack.js.org/concepts/entry-points/
    entry: [
        //'webpack-dev-server/client?http://localhost:' + port,
        //'webpack/hot/only-dev-server',
        './src/entry.js'
    ],

    // https://webpack.js.org/concepts/output/
    output: {
        filename: '[name].bundle.js',
        path: './dist/',

        // https://webpack.js.org/configuration/output/#output-publicpath
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style!css!less'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new ReloadHtmlWebpackPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        //new webpack.NoErrorsPlugin()
        new DashboardPlugin(dashboard.setData)
    ],

    devServer: {
        port: port,
        contentBase: './dist/',
        //hot: true
        quiet: true
    }
};
