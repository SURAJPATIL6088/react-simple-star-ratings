import terser from "@rollup/plugin-terser";
import sucrase from "@rollup/plugin-sucrase";

const devMode = process.env.MODE_ENV === "development";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "es",
      sourcemap: devMode ? "inline" : false,
    },
    plugins: [
      terser({
        ecma: 2020,
        mangle: { toplevel: true },
        compress: {
          module: true,
          toplevel: true,
          unsafe_arrows: true,
          drop_console: !devMode,
          drop_debugger: !devMode,
        },
        output: { quote_style: 1 },
      }),
      sucrase({
        exclude: ["node_modules/**"],
        transforms: ["typescript", "jsx"],
      }),
    ],
  },
];
