import resolve from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { name, homepage, version } from './package.json';

export default {
  external: ['three'],
  input: 'src/index.js',
  output: [
    {
      globals: { three: 'THREE' }, // a-frame exposes three as global
      format: 'umd',
      name: 'GlobeAR',
      file: `dist/${name}.js`,
      sourcemap: true,
      banner: `// Version ${version} ${name} - ${homepage}`
    }
  ],
  plugins: [
    resolve(),
    commonJs(),
    babel({ exclude: 'node_modules/**' })
  ]
};