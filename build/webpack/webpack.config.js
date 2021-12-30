const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader-plugin")
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
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
            // {
            //     test: /\.ts?*/,
            //     use: 'ts-loader',
            //     options: { appendTsSuffixTo: [/\.vue$/] }
            // }
        ]
    },
    plugins: [
        //new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.common.dev.js',
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
}
