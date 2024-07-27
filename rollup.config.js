import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { readFileSync } from 'fs'
import typescript from 'rollup-plugin-typescript2'

const tsConfigStr = readFileSync('./tsconfig.json')
const tsConfig = JSON.parse(tsConfigStr)

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
    },
    {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: '__storage_cache__'
    }
  ],
  plugins: [resolve(), commonjs(), typescript(tsConfig)],
}
