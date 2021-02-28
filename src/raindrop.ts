import { div, mul, plus, vec2, Vector2 } from "zogra-renderer";
import { random, randomRange } from "./random";
import { CollisionGrid, RaindropSimulator } from "./simulator";
import { lerp, Time } from "./utils";

export class RainDrop
{
    pos: vec2;
    density: number = 1;
    velocity: vec2 = vec2.zero();
    spread: vec2;
    destroied = false;
    parent?: RainDrop;
    grid?: CollisionGrid;
    gridIdx?: number;

    private _mass: number = 0;
    private _size: vec2 = vec2.zero();
    private simulator: RaindropSimulator;
    private resistance = 0;
    private shifting = 0;
    private lastTrailPos: vec2;
    private nextTrailDistance: number;

    private nextRandomTime = 0;

    constructor(simulator: RaindropSimulator, pos: vec2, size: number, density = 1)
    {
        this.pos = pos;
        this.simulator = simulator;
        this.density = density;

        this.lastTrailPos = pos.clone();
        this.nextTrailDistance = randomRange(...simulator.options.trailDistance);

        this.spread = vec2(simulator.options.initialSpread);

        this.mass = (size * density) ** 2;
    }

    get mass() { return this._mass; }
    set mass(m: number)
    {
        this._mass = m;
        const sqrtM = Math.sqrt(m) / this.density;
        this._size.x = (this.spread.x + 1) * sqrtM;
        this._size.y = (this.spread.y + 1) * sqrtM;
        // this._size = mul(plus(this.spread, vec2.one()), Math.sqrt(m));
    }
    
    get size(): vec2
    {
        return this._size;
    }

    get mergeDistance()
    {
        return this.size.x * (1 + this.spread.x) * 0.16 * this.simulator.options.colliderSize;
    }

    get options() { return this.simulator.options }

    updateRaindrop(time: Time)
    {
        if (this.nextRandomTime <= time.total)
        {
            this.nextRandomTime = time.total + randomRange(...this.simulator.options.motionInterval)
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

        if (Vector2.distanceSquared(this.lastTrailPos, this.pos) > this.nextTrailDistance * this.nextTrailDistance)
        {
            this.split();
        }
    }

    split()
    {
        // return;
        if (this.mass < 1000)
            return;
        let size = this.size.x * randomRange(...this.simulator.options.trailDropSize);
        const pos = plus(vec2(randomRange(-5, 5), this.size.y / 4), this.pos);
        let trailDrop = this.simulator.spawner.spawn(pos.clone(), size, this.simulator.options.trailDropDensity);
        trailDrop.spread = vec2(0.1, Math.abs(this.velocity.y) * 0.01 * this.options.trailSpread);
        trailDrop.parent = this;
        this.mass -= trailDrop.mass;
        this.simulator.add(trailDrop);
        this.lastTrailPos = this.pos.clone();
        this.nextTrailDistance = randomRange(...this.simulator.options.trailDistance);
    }

    randomMotion()
    {
        const maxResistance = lerp(...this.simulator.options.spawnSize, 1 - this.simulator.options.slipRate) ** 2 * 4;
        this.resistance = randomRange(0, 1) * this.options.gravity * maxResistance;
        this.shifting = random() * randomRange(...this.simulator.options.xShifting);
    }

    merge(target: RainDrop)
    {
        const selfMomentum = mul(this.velocity, this.mass);
        const targetMomentum = mul(target.velocity, target.mass);
        const momentum = plus(selfMomentum, targetMomentum);
        this.mass += target.mass;
        this.velocity = div(momentum, this.mass);
    }
}