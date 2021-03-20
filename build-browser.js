const process = require("process");
const dev = process.argv.includes("--dev");
const watch = process.argv.find(arg => arg === "-w" || arg === "--watch") !== undefined;

require("esbuild").build({
    entryPoints: [
        "./src/index.ts"
    ],
    bundle: true,
    loader: {
        ".png": "binary",
        ".jpg": "binary",
        ".glsl": "text",
    },
    minify: !dev,
    watch: watch,
    sourcemap: true,
    outdir: "./bundle",
    publicPath: "bundle",
    globalName: "RaindropFX",
})