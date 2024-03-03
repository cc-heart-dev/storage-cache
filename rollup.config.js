import typescript from 'rollup-plugin-typescript2'
import tsConfig from './tsconfig.json' assert { type: 'json' }
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

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
    }
  ],
  plugins: [resolve(), commonjs(), typescript(tsConfig)],
}