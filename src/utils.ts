export interface Time
{
    dt: number,
    total: number,
}

export function clamp(x: number, l: number, h: number)
{
    return Math.min(Math.max(x, l), h);
}

export function lerp(a: number, b: number, t: number)
{
    return a + (b - a) * t;
}