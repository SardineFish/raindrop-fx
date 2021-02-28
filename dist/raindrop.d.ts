import { vec2 } from "zogra-renderer";
import { RaindropSimulator } from "./simulator";
import { Time } from "./utils";
export declare class RainDrop {
    pos: vec2;
    density: number;
    velocity: vec2;
    spread: vec2;
    destroied: boolean;
    parent?: RainDrop;
    grid?: Set<RainDrop>;
    private _mass;
    private _size;
    private simulator;
    private resistance;
    private shifting;
    private lastTrailPos;
    private nextTrailDistance;
    private nextRandomTime;
    constructor(simulator: RaindropSimulator, pos: vec2, size: number, density?: number);
    get mass(): number;
    set mass(m: number);
    get size(): vec2;
    get mergeDistance(): number;
    get options(): import("./simulator").SimulatorOptions;
    updateRaindrop(time: Time): void;
    split(): void;
    randomMotion(): void;
    merge(target: RainDrop): void;
}
//# sourceMappingURL=raindrop.d.ts.map