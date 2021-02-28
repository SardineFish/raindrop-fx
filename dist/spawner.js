"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spawner = void 0;
const raindrop_1 = require("./raindrop");
const random_1 = require("./random");
class Spawner {
    constructor(simulator, options) {
        this.currentTime = 0;
        this.nextSpawn = 0;
        this.simulator = simulator;
    }
    get interval() { return this.simulator.options.spawnInterval; }
    get size() { return this.simulator.options.spawnSize; }
    get spawnRect() { return this.simulator.options.viewport; }
    update(dt) {
        this.currentTime += dt;
        return this;
    }
    *trySpawn() {
        while (this.currentTime >= this.nextSpawn) {
            const size = random_1.randomRange(...this.size);
            const pos = random_1.randomInRect(this.spawnRect);
            this.nextSpawn += random_1.randomRange(...this.interval);
            yield new raindrop_1.RainDrop(this.simulator, pos, size);
        }
        if (this.currentTime >= this.nextSpawn) {
        }
        return undefined;
    }
    spawn(pos, size, density = 1) {
        return new raindrop_1.RainDrop(this.simulator, pos, size, density);
    }
}
exports.Spawner = Spawner;
