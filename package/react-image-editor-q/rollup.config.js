// import typescript from 'rollup-plugin-typescript2';
// import copy from 'rollup-plugin-copy';

// export default {
//   input: 'src/index.js',
//   output: [
//     { file: 'dist/index.js', format: 'cjs' },
//     { file: 'dist/index.esm.js', format: 'esm' }
//   ],
//   external: ['react', 'react-dom'],
//   plugins: [
//     typescript({ tsconfig: './tsconfig.json' }),
//     copy({
//       targets: [
//         { src: 'src/actions', dest: 'dist' },
//         { src: 'src/components', dest: 'dist' },
//         { src: 'src/context', dest: 'dist' },
//         { src: 'src/custom', dest: 'dist' },
//         { src: 'src/hooks', dest: 'dist' },
//         { src: 'src/utils', dest: 'dist' }
//       ]
//     })
//   ]
// };


import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    { file: 'dist/index.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'esm' }
  ],
  external: ['canvas','react', 'react-dom', 'styled-components'],
  plugins: [
    resolve({ extensions: ['.js', '.jsx'] }),
    postcss(),
    commonjs(),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx'],
      include: ['src/**/*']
    }),
    typescript({ tsconfig: './tsconfig.json' })
  ]
};
