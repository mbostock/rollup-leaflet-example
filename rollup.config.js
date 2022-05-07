import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import styles from "rollup-plugin-styles";
import {terser} from "rollup-plugin-terser";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/leaflet.js",
      format: "es"
    },
    plugins: [
      resolve(),
      commonjs(),
      styles(),
      terser()
    ]
  }
];
