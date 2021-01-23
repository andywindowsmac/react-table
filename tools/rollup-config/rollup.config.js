import { terser } from "rollup-plugin-terser";
import strip from '@rollup/plugin-strip';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

const packageJson = require(process.env.PWD + "/package.json");

const peerDependencies = packageJson.peerDependencies
const optionalDependencies = packageJson.optionalDependencies

const external = [...Object.keys(peerDependencies || {}), ...Object.keys(optionalDependencies || {})]

export default {
  external,
  input: process.env.ROLLUP_INPUT || "index.ts",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    commonjs(),
    peerDepsExternal(),
    resolve({ preferBuiltins: true }),
    typescript({ check: false, useTsconfigDeclarationDir: true }),
    strip(),
    terser(),
  ]
};
