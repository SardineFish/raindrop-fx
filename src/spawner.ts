import { Rect, vec2 } from "zogra-renderer";
import { RainDrop } from "./raindrop";
import { randomJittered, JitterOption, randomInRect, randomRange } from "./random";
import { RaindropSimulator, SimulatorOptions } from "./simulator";

export class Spawner
{


    currentTime = 0;
    nextSpawn = 0;

    private simulator: RaindropSimulator;

    constructor(simulator: RaindropSimulator, options: SimulatorOptions)
    {

        this.simulator = simulator;
    }
    
    get interval() { return this.simulator.options.spawnInterval }
    get size() { return this.simulator.options.spawnSize }
    get spawnRect() { return this.simulator.options.viewport }

    update(dt: number): this
    {
        this.currentTime += dt;
        return this;
    }
    *trySpawn(): Iterable<RainDrop>
    {
        while (this.currentTime >= this.nextSpawn)
        {
            const size = randomRange(...this.size);
            const pos = randomInRect(this.spawnRect);
            this.nextSpawn += randomRange(...this.interval);
            yield new RainDrop(this.simulator, pos, size);
        }
        if (this.currentTime >= this.nextSpawn)
        {

        }
        return undefined;
    }
    spawn(pos: vec2, size: number, density = 1)
    {
        return new RainDrop(this.simulator, pos, size, density);
    }
}