import { distance, mul, Rect, vec2, vec3, Vector2 } from "zogra-renderer";

export interface JitterOption<T extends number | vec2 | [number, number]>
{
    base: T;
    jitter: T;
}

export function randomJittered<T extends number | vec2>(option: JitterOption<T>): T
{
    if (typeof (option.base) === "number")
        return option.base + (option.jitter as number) * (Math.random() * 2 - 1) as T;
    else
    {
        let opt = option as JitterOption<[number, number]>;
        return vec2(
            opt.base[0] + (opt.jitter[0]) * (Math.random() * 2 - 1),
            opt.base[1] + (opt.jitter[1]) * (Math.random() * 2 - 1)
        ) as T;
    }
}
export function randomInRect(rect: Rect): vec2
{
    return vec2(Math.random(), Math.random()).mul(rect.size).plus(rect.min);
}

// https://www.shadertoy.com/view/ltB3zD
const PHI = 1.61803398874989484820459; // Φ = Golden Ratio 
function fract(x: number)
{
    return x - Math.floor(x);
}
/**
 * Generate noise in [-1, 1]
 * @param xy Should be non zero integer
 * @param seed Non zero integer
 */
export function goldNoise(xy: vec2, seed: number)
{
    return fract(Math.tan(distance(mul(xy, vec2(PHI)), xy) * seed) * xy.x);
}

export function tentNoise(t: number, seed: number)
{
    let frac = fract(t);
    let grid = Math.floor(t += seed);
}

/**
 * Get random value in (-1, 1)
 */
export function random()
{
    return Math.random() * 2 - 1;
}

export function randomRange(min: number, max: number)
{
    return Math.random() * (max - min) + min;
}