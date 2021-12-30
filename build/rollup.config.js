import vue from "rollup-plugin-vue"
// import buble from '@rollup/plugin-buble';
import typescript from '@rollup/plugin-typescript'
// import ts from 'typescript';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'
// import scss from 'rollup-plugin-scss';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
// 压缩代码插件
import { terser } from 'rollup-plugin-terser';
// node环境定义
import globals from 'rollup-plugin-node-globals';
import pkg from './package.json';
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.scss', '.css'];
const deps = Object.keys(pkg.peerDependencies);
const config = [
    {
        input: 'src/index.ts',
        external(id) {
            return deps.some(k => new RegExp('^' + k).test(id))
        },
        plugins: [
            resolve({ extensions, mainFields: ["module", "main", "browser"] }),
            typescript(),
            vue(),
            postcss({
                 extensions: ['.scss', '.css'],
            }),
            // scss(),
            babel({ babelHelpers: "bundled", extensions }),
            commonjs({ sourceMap: true }),
            globals()
        ],
        output: [
            {
                file: 'dist/@farris/mobile-business-ui.esm.js',
                format: 'es',
                name: 'lazyLoad2',
                plugins: [terser()]
            },
            {
                file: 'dist/@farris/mobile-business-ui.umd.js',
                format: 'umd',
                sourcemap: true,
                name: 'lazyLoad',
            },
            {
                file: 'dist/@farris/mobile-business-ui.min.js',
                format: 'umd',
                sourcemap: true,
                name: 'umd_min',
                plugins: [terser()]
            },
            {
                file: 'dist/@farris/mobile-business-ui.js',
                format: 'system',
                sourcemap: true,
                plugins: [terser()],
            }
            // {
            //     file: 'dist/vue-mobile-business-ui.min.js',
            //     format: 'iife',
            //     name: 'version',
            //     plugins: [terser()]
            // }
        ],
        onwarn(warning) {
            // 跳过某些警告
            if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;

            // // 抛出异常
            // if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);

            // // 控制台打印一切警告
            //   console.warn(warning.message);
        }
    }
]

export default config;