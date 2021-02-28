import { RaindropRenderer, RenderOptions } from "./renderer";
import { RaindropSimulator, SimulatorOptions } from "./simulator";
interface Options extends SimulatorOptions, RenderOptions {
}
declare class RaindropFX {
    options: Options;
    renderer: RaindropRenderer;
    simulator: RaindropSimulator;
    private animHandle;
    constructor(options: Partial<Options> & {
        canvas: HTMLCanvasElement;
    });
    start(): Promise<void>;
    stop(): void;
    resize(width: number, height: number): void;
    private update;
}
export = RaindropFX;
//# sourceMappingURL=index.d.ts.map