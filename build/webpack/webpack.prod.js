const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const VueLoaderPlugin = require("vue-loader-plugin");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(common, {
    mode: 'production',
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
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.common.prod.js',
        }
    },
    optimization: {
        chunkIds: 'size',
        minimize: false,
        minimizer: [new TerserPlugin()],
        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             chunks: "initial",
        //             minChunks: 2,
        //             maxInitialRequests: 5, // The default limit is too small to showcase the effect
        //             minSize: 0 // This is example is too small to create commons chunks
        //         },
        //         vendor: {
        //             test: /node_modules/,
        //             chunks: "initial",
        //             name: "vendor",
        //             priority: 10,
        //             enforce: true
        //         }

        //     },
        // }
    },
});