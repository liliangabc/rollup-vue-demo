import path from 'path'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import nodeGlobals from 'rollup-plugin-node-globals'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import alias from 'rollup-plugin-alias'
import url from 'rollup-plugin-url'

const isProductionEnv = process.env.NODE_ENV === 'production'

export const resolveFile = filePath => path.join(__dirname, '..', filePath)

export default [
  {
    input: resolveFile('src/main.js'),
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd'
    },
    plugins: [
      alias({
        resolve: ['.js', '.vue', '.less', '.css'],
        '@': resolveFile('src')
      }),
      vue(),
      nodeResolve(),
      commonjs(),
      nodeGlobals(),
      postcss({
        minimize: isProductionEnv
      }),
      url(),
      buble()
    ]
  }
]