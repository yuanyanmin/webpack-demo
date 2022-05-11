const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './app.js',
    output: {
        publicPath: '/',
        clean: true
    },
    // devtool: 'cheap-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }

                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    devServer: {
        hot: true,
        liveReload: true,
        static: path.resolve(__dirname, './dist'),
        compress: false,
        port: 3000,
        host: '0.0.0.0',
        headers: {
            'X-Access-Token': '1212'
        },
        proxy: {
            '/api': {
                target: 'http://localhost:9000/',

            }
        },
        // https: true
        // http2: true
        historyApiFallback: true
    }
}