const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {    
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
        template: "./index.html",
        filename: "index.html"
    })]
};