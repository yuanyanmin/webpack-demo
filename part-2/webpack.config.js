const HtmlWebpackPlugin = require('html-webpack-plugin')
const EslintWebpackPlugin = require('eslint-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WorkboxPlugin = require('workbox-webpack-plugin')

const path = require('path')
const webpack = require('webpack')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: {
        app: {
            import: './src/app.js',
            filename: 'chanel1/[name].js'
        },
        app2: {
            import: './src/app2.js',
            filename: 'chanel2/[name].js'
        },
        app3: './src/app3.ts'
    },
    output: {
        publicPath: '/',
        clean: true
    },
    // devtool: 'cheap-source-map',
    devtool: 'inline-source-map',
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
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader', 'postcss-loader']
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            title: '自定义title',
            filename: 'chanel1/index.html',
            chunks: ['app'],
            publicPath: 'http://www.a.com'
        }),
        new HtmlWebpackPlugin({
            template: './index2.html',
            inject: 'body',
            title: '自定义title',
            filename: 'chanel2/index2.html',
            chunks: ['app2'],
            publicPath: 'http://www.b.com'
        }),
        new EslintWebpackPlugin(),
        // new BundleAnalyzerPlugin()
        // new WorkboxPlugin.GenerateSW({
        //     clientsClaim: true,
        //     skipWaiting: true
        // }),
        new webpack.ProvidePlugin({
            _: 'lodash'
        })
    ],
    externalsType: 'script',
    externals: {
        jQuery: [
            'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
            '$'
        ]
    },
    devServer: {
        client: {
            overlay: false
        },
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
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
    // optimization: {
    //     usedExports: true
    // }
}