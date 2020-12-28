/* eslint-env node */
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
};
const external = Object.keys(globals);
const extensions = ['.ts', '.tsx'];
const isProd = process.env.NODE_ENV === 'production';

export default {
  input: 'src/index.ts',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    commonjs(),
    nodeResolve({
      extensions,
    }),
    typescript(),
    isProd &&
    terser({
      module: true,
      output: {
        comments: false,
      },
    }),
  ],
  external,
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
      globals,
    },
    isProd && {
      file: 'dist/index.cjs.js',
      name: 'puregrid',
      format: 'cjs',
      interop: false,
      globals,
    },
  ],
};
