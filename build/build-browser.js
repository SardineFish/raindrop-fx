const process = require("process");
const dev = process.argv.includes("--dev");
const watch = process.argv.find(arg => arg === "-w" || arg === "--watch") !== undefined;
const fs = require("fs");

require("esbuild").build({
    entryPoints: [
        "./src/browser.ts"
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
}).then((result) =>
{
    fs.renameSync("./bundle/browser.js", "./bundle/index.js");
    fs.renameSync("./bundle/browser.js.map", "./bundle/index.js.map");
});