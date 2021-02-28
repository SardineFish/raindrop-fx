"use strict";
const zogra_renderer_1 = require("zogra-renderer");
const renderer_1 = require("./renderer");
const simulator_1 = require("./simulator");
class RaindropFX {
    constructor(options) {
        this.animHandle = 0;
        const canvas = options.canvas;
        const defaultOptions = {
            // Simulator options
            spawnInterval: [0.1, 0.1],
            spawnSize: [60, 100],
            spawnLimit: 2000,
            viewport: new zogra_renderer_1.Rect(zogra_renderer_1.vec2.zero(), zogra_renderer_1.vec2(canvas.width, canvas.height)),
            canvas: canvas,
            width: canvas.width,
            height: canvas.height,
            background: "",
            gravity: 2400,
            slipRate: 0,
            motionInterval: [0.1, 0.4],
            colliderSize: 1,
            trailDropDensity: 0.2,
            trailDistance: [20, 30],
            trailDropSize: [0.3, 0.5],
            trailSpread: 0.6,
            initialSpread: 0.5,
            shrinkRate: 0.01,
            velocitySpread: 0.3,
            evaporate: 10,
            xShifting: [0, 0.1],
            // Rendering options
            backgroundBlurSteps: 3,
            mist: true,
            mistColor: [0.01, 0.01, 0.01, 1],
            mistBlurStep: 4,
            mistTime: 10,
            dropletsPerSeconds: 500,
            dropletSize: [10, 30],
            smoothRaindrop: [0.96, 0.99],
            refractBase: 0.4,
            refractScale: 0.6,
            raindropCompose: "smoother",
            raindropLightPos: [-1, 1, 2, 0],
            raindropDiffuseLight: [0.2, 0.2, 0.2],
            raindropShadowOffset: 0.8,
            raindropEraserSize: [0.93, 1.0],
            raindropSpecularLight: [0, 0, 0],
            raindropSpecularShininess: 256,
            raindropLightBump: 1,
        };
        this.options = { ...defaultOptions, ...options };
        this.simulator = new simulator_1.RaindropSimulator(this.options);
        this.renderer = new renderer_1.RaindropRenderer(this.options);
    }
    async start() {
        await this.renderer.loadAssets();
        let lastFrameTime = 0;
        const update = (delay) => {
            const dt = (delay - lastFrameTime) / 1000;
            lastFrameTime = delay;
            const time = {
                dt: 0.03,
                total: delay / 1000
            };
            this.update(time);
            this.animHandle = requestAnimationFrame(update);
        };
        this.animHandle = requestAnimationFrame(update);
    }
    stop() {
        cancelAnimationFrame(this.animHandle);
    }
    resize(width, height) {
        this.options.width = width;
        this.options.height = height;
        this.options.viewport = new zogra_renderer_1.Rect(zogra_renderer_1.vec2.zero(), zogra_renderer_1.vec2(width, height));
        this.renderer.resize();
    }
    update(time) {
        this.simulator.update(time);
        this.renderer.render(this.simulator.raindrops, time);
    }
}
module.exports = RaindropFX;
