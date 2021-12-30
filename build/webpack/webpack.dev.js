const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const VueLoaderPlugin = require("vue-loader-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
    module: {
        rules: [
            // 解析vue文件
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            // 解析ES5+到ES5
            {
                test: /\.js?$/,
                use: "babel-loader",
                // node_modules加入单文件白名单
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.s?css$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.dev.js',
        }
    },
    mode: 'development',
    devServer: {
        port: 8080,
        host: '127.0.0.1',
        overlay: {
            errors: true // 将webpack编译的错误显示在网页上面
        },
        open: true // 在启用webpack-dev-server时，自动打开浏览器
    }
});