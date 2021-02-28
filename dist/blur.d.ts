import { RenderTexture, Texture, vec4, ZograRenderer } from "zogra-renderer";
declare const MaterialBlur_base: typeof import("zogra-renderer").MaterialType;
declare class MaterialBlur extends MaterialBlur_base {
    texture: Texture | null;
    textureSize: vec4;
    sampleOffset: number;
}
export declare class BlurRenderer {
    renderer: ZograRenderer;
    steps: RenderTexture[];
    mateiralBlur: MaterialBlur;
    constructor(renderer: ZograRenderer);
    init(texture: Texture): void;
    blur(texture: Texture, iteration?: number, output?: RenderTexture): RenderTexture;
    downSample(input: Texture, iteration: number): void;
    upSample(iteration: number, finalOutput?: RenderTexture): RenderTexture;
}
export {};
//# sourceMappingURL=blur.d.ts.map