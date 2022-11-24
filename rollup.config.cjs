const { babel } = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('rollup-plugin-terser');
const external = require('rollup-plugin-peer-deps-external');
const dts = require('rollup-plugin-dts');
const postcss = require('rollup-plugin-postcss');

const packageJson = require('./package.json');

const config =  [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      }, {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      }
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss()
    ]
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: "esm" }],
    external: [/\.s?css$/],
    plugins: [dts.default()],
  },
]

module.exports = config;