import path from 'path'

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import { emptyDir } from 'rollup-plugin-empty-dir'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import zip from 'rollup-plugin-zip'

export default {
  input: 'src/manifest.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    chunkFileNames: path.join('chunks', '[name]-[hash].js'),
  },
  plugins: [
    chromeExtension(),
    simpleReloader(),
    resolve({ browser: true }),
    commonjs(),
    typescript(),
    emptyDir(),
    injectProcessEnv({
      NODE_ENV: process.env.NODE_ENV,
    }),
    process.env.NODE_ENV === 'production' && zip({ dir: 'releases' }),
  ],
}
