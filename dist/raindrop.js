"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RainDrop = void 0;
const zogra_renderer_1 = require("zogra-renderer");
const random_1 = require("./random");
const utils_1 = require("./utils");
class RainDrop {
    constructor(simulator, pos, size, density = 1) {
        this.density = 1;
        this.velocity = zogra_renderer_1.vec2.zero();
        this.destroied = false;
        this._mass = 0;
        this._size = zogra_renderer_1.vec2.zero();
        this.resistance = 0;
        this.shifting = 0;
        this.nextRandomTime = 0;
        this.pos = pos;
        this.simulator = simulator;
        this.density = density;
        this.lastTrailPos = pos.clone();
        this.nextTrailDistance = random_1.randomRange(...simulator.options.trailDistance);
        this.spread = zogra_renderer_1.vec2(simulator.options.initialSpread);
        this.mass = (size * density) ** 2;
    }
    get mass() { return this._mass; }
    set mass(m) {
        this._mass = m;
        const sqrtM = Math.sqrt(m) / this.density;
        this._size.x = (this.spread.x + 1) * sqrtM;
        this._size.y = (this.spread.y + 1) * sqrtM;
        // this._size = mul(plus(this.spread, vec2.one()), Math.sqrt(m));
    }
    get size() {
        return this._size;
    }
    get mergeDistance() {
        return this.size.x * (1 + this.spread.x) * 0.16 * this.simulator.options.colliderSize;
    }
    get options() { return this.simulator.options; }
    updateRaindrop(time) {
        if (this.nextRandomTime <= time.total) {
            this.nextRandomTime = time.total + random_1.randomRange(...this.simulator.options.motionInterval);
            this.randomMotion();
        }
        this.mass -= this.simulator.options.evaporate * time.dt;
        const force = this.options.gravity * this.mass - this.resistance;
        const acceleration = force / this.mass;
        this.velocity.y -= acceleration * time.dt;
        if (this.velocity.y > 0)
            this.velocity.y = 0;
        this.velocity.x = Math.abs(this.velocity.y) * this.shifting;
        this.pos.x += this.velocity.x * time.dt;
        this.pos.y += this.velocity.y * time.dt;
        // this.pos.plus(mul(this.velocity, vec2(time.dt)));
        const spreadByVelocity = this.simulator.options.velocitySpread * 2 * Math.atan(Math.abs(this.velocity.y * 0.005)) / Math.PI;
        this.spread.y = Math.max(this.spread.y, spreadByVelocity);
        this.spread.x *= Math.pow(this.simulator.options.shrinkRate, time.dt);
        this.spread.y *= Math.pow(this.simulator.options.shrinkRate, time.dt);
        // this.spread.y +=  Math.abs(this.velocity.y) * 0.0001;
        if (zogra_renderer_1.Vector2.distanceSquared(this.lastTrailPos, this.pos) > this.nextTrailDistance * this.nextTrailDistance) {
            this.split();
        }
    }
    split() {
        // return;
        if (this.mass < 1000)
            return;
        let size = this.size.x * random_1.randomRange(...this.simulator.options.trailDropSize);
        const pos = zogra_renderer_1.plus(zogra_renderer_1.vec2(random_1.randomRange(-5, 5), this.size.y / 4), this.pos);
        let trailDrop = this.simulator.spawner.spawn(pos.clone(), size, this.simulator.options.trailDropDensity);
        trailDrop.spread = zogra_renderer_1.vec2(0.1, Math.abs(this.velocity.y) * 0.01 * this.options.trailSpread);
        trailDrop.parent = this;
        this.mass -= trailDrop.mass;
        this.simulator.add(trailDrop);
        this.lastTrailPos = this.pos.clone();
        this.nextTrailDistance = random_1.randomRange(...this.simulator.options.trailDistance);
    }
    randomMotion() {
        const maxResistance = utils_1.lerp(...this.simulator.options.spawnSize, 1 - this.simulator.options.slipRate) ** 2 * 4;
        this.resistance = random_1.randomRange(0, 1) * this.options.gravity * maxResistance;
        this.shifting = random_1.random() * random_1.randomRange(...this.simulator.options.xShifting);
    }
    merge(target) {
        const selfMomentum = zogra_renderer_1.mul(this.velocity, this.mass);
        const targetMomentum = zogra_renderer_1.mul(target.velocity, target.mass);
        const momentum = zogra_renderer_1.plus(selfMomentum, targetMomentum);
        this.mass += target.mass;
        this.velocity = zogra_renderer_1.div(momentum, this.mass);
    }
}
exports.RainDrop = RainDrop;
