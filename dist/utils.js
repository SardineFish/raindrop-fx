"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lerp = exports.clamp = void 0;
function clamp(x, l, h) {
    return Math.min(Math.max(x, l), h);
}
exports.clamp = clamp;
function lerp(a, b, t) {
    return a + (b - a) * t;
}
exports.lerp = lerp;
