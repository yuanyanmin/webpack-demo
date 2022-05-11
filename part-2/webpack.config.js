const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './app.js',
    devtool: 'eval',
    plugins: [
        new HtmlWebpackPlugin()
    ]
}