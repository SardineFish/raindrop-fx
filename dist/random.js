"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomRange = exports.random = exports.tentNoise = exports.goldNoise = exports.randomInRect = exports.randomJittered = void 0;
const zogra_renderer_1 = require("zogra-renderer");
function randomJittered(option) {
    if (typeof (option.base) === "number")
        return option.base + option.jitter * (Math.random() * 2 - 1);
    else {
        let opt = option;
        return zogra_renderer_1.vec2(opt.base[0] + (opt.jitter[0]) * (Math.random() * 2 - 1), opt.base[1] + (opt.jitter[1]) * (Math.random() * 2 - 1));
    }
}
exports.randomJittered = randomJittered;
function randomInRect(rect) {
    return zogra_renderer_1.vec2(Math.random(), Math.random()).mul(rect.size).plus(rect.min);
}
exports.randomInRect = randomInRect;
// https://www.shadertoy.com/view/ltB3zD
const PHI = 1.61803398874989484820459; // Φ = Golden Ratio 
function fract(x) {
    return x - Math.floor(x);
}
/**
 * Generate noise in [-1, 1]
 * @param xy Should be non zero integer
 * @param seed Non zero integer
 */
function goldNoise(xy, seed) {
    return fract(Math.tan(zogra_renderer_1.distance(zogra_renderer_1.mul(xy, zogra_renderer_1.vec2(PHI)), xy) * seed) * xy.x);
}
exports.goldNoise = goldNoise;
function tentNoise(t, seed) {
    let frac = fract(t);
    let grid = Math.floor(t += seed);
}
exports.tentNoise = tentNoise;
/**
 * Get random value in (-1, 1)
 */
function random() {
    return Math.random() * 2 - 1;
}
exports.random = random;
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
exports.randomRange = randomRange;
