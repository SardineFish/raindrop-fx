import { Rect, vec2 } from "zogra-renderer";
export interface JitterOption<T extends number | vec2 | [number, number]> {
    base: T;
    jitter: T;
}
export declare function randomJittered<T extends number | vec2>(option: JitterOption<T>): T;
export declare function randomInRect(rect: Rect): vec2;
/**
 * Generate noise in [-1, 1]
 * @param xy Should be non zero integer
 * @param seed Non zero integer
 */
export declare function goldNoise(xy: vec2, seed: number): number;
export declare function tentNoise(t: number, seed: number): void;
/**
 * Get random value in (-1, 1)
 */
export declare function random(): number;
export declare function randomRange(min: number, max: number): number;
//# sourceMappingURL=random.d.ts.map