const esbuild = require("esbuild");

const isDevelopment = process.env.NODE_ENV === "development";

esbuild.build({
  entryPoints: ["./src/main.ts"],
  outfile: "./dist/bundle.js",
  bundle: true,
  minify: true,
  sourcemap: isDevelopment,
  platform: "node",
  tsconfig: "./tsconfig.json",
});
