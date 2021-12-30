const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const VueLoaderPlugin = require("vue-loader-plugin")
module.exports = {
    entry: "./src/main.js",
    // devtool: 'source-map',
    output: {
        // 以webpack配置文件目录为基路径
        path: path.resolve(__dirname, '../../dist'),
        // 和entry名称一样  比如 entry是 main.js   编译出来也叫main.js
        // filename: '[id].js',
        // chunkFilename: '[id].js',
        filename: '[name].[fullhash].[id].js',
        // library: {
        // 编译脚本类型  amd  umd  cjs window
        // type: 'amd',
        // 用于导出的属性名
        // name: 'hyyVue'
        // },
        // asyncChunks: true,
        // iife: true
        // html引用路径
        // publicPath: '/assets/'
    },
    plugins: [
        //new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
}
