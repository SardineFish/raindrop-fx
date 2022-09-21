import { Rect, vec2 } from "zogra-renderer";
import { RainDrop } from "./raindrop";
import { RaindropSimulator, SimulatorOptions } from "./simulator";
export declare class Spawner {
    currentTime: number;
    nextSpawn: number;
    private simulator;
    constructor(simulator: RaindropSimulator, options: SimulatorOptions);
    get interval(): [number, number];
    get size(): [number, number];
    get spawnRect(): Rect;
    update(dt: number): this;
    trySpawn(): Iterable<RainDrop>;
    spawn(pos: vec2, size: number, density?: number): RainDrop;
}
//# sourceMappingURL=spawner.d.ts.map