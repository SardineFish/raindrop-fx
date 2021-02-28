import { Rect } from "zogra-renderer";
import { RainDrop } from "./raindrop";
import { Spawner } from "./spawner";
import { Time } from "./utils";
export interface SimulatorOptions {
    viewport: Rect;
    /**
     * Time range between two raindrop spwan.
     */
    spawnInterval: [number, number];
    /**
     * Random size range when spawn a new raindrop
     */
    spawnSize: [number, number];
    /**
     * Maximal amount of spawned raindrops.
     * Recommend less than 2000
     */
    spawnLimit: number;
    /**
     * Recommend in range (0..1), other value should be ok.
     */
    slipRate: number;
    /**
     * Describe how often a raindrop change its motion state
     */
    motionInterval: [number, number];
    /**
     * Random velociy x relative to velocity y. Recommend in range (0..0.1)
     */
    xShifting: [number, number];
    /**
     * Relative size for collision check. Recommend in range (0.6..1.2)
     */
    colliderSize: number;
    /**
     * Mass density of the slipping trail raindrop.
     * Recommend in range (0.1..0.3)
     *
     * A large value cause a raindrop quickly lose its size during slipping.
     */
    trailDropDensity: number;
    /**
     * Random size range of slipping trail drop. Recommend in range (0.3..0.5)
     */
    trailDropSize: [number, number];
    /**
     * Random distance range between two slipping trail drop. Recommend in range (20..40)
     */
    trailDistance: [number, number];
    /**
     * Vertical spread of a new spawned slipping trail drop. Recommend in range (0.4..0.6)
     */
    trailSpread: number;
    /**
     * Spread rate when a new spawned raindrop hit the screen. Recommend in range (0.4..0.7)
     */
    initialSpread: number;
    /**
     * Spread shrink rate per seconds. Recommend in range (0.01..0.02)
     */
    shrinkRate: number;
    /**
     * Spread rate by velocity Y. Recommend in range (0.2..0.4)
     *
     * Raindrop with higher fall speed looks more narrow.
     */
    velocitySpread: number;
    /**
     * Mass lose per second. Recommend in range (10..30)
     */
    evaporate: number;
    /**
     * Gravity acceleration in pixels/s. Recommend 2400
     */
    gravity: number;
}
export declare class RaindropSimulator {
    options: SimulatorOptions;
    spawner: Spawner;
    raindrops: RainDrop[];
    grid: Set<RainDrop>[];
    constructor(options: SimulatorOptions);
    get gridSize(): number;
    resize(): void;
    gridAt(gridX: number, gridY: number): Set<RainDrop> | undefined;
    gridAtWorldPos(x: number, y: number): Set<RainDrop> | undefined;
    worldToGrid(x: number, y: number): [number, number];
    add(raindrop: RainDrop): void;
    update(time: Time): void;
    raindropUpdate(time: Time): void;
    collisionUpdate(): void;
}
//# sourceMappingURL=simulator.d.ts.map