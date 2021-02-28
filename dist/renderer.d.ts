import { TextureData, ZograRenderer } from "zogra-renderer";
import { RainDrop } from "./raindrop";
import { Time } from "./utils";
export interface RenderOptions {
    canvas: HTMLCanvasElement;
    width: number;
    height: number;
    background: TextureData | string;
    /**
     * Background blur steps used for background & raindrop refract image.
     * Value should be integer from 0 to log2(backgroundSize).
     * Recommend 3 or 4
     */
    backgroundBlurSteps: number;
    /**
     * Enable blurry mist effect
     */
    mist: boolean;
    /**
     * [r, g, b, a] mist color, each component in range (0..1).
     * The alpha is used for whole mist layer.
     * Recommend [0.01, 0.01, 0.01, 1]
     */
    mistColor: [number, number, number, number];
    /**
     * Describe how long takes mist alpha from 0 to 1
     */
    mistTime: number;
    /**
     * Background blur steps used for mist.
     * Value should be integer from 0 to log2(backgroundSize).
     * Recommended value = backgroundBlurSteps + 1
     */
    mistBlurStep: number;
    /**
     * Tiny droplet spawn rate.
     */
    dropletsPerSeconds: number;
    /**
     * Random size range of tiny drplets.
     * Recommend [10, 30]
     */
    dropletSize: [number, number];
    /**
     * Smooth range [a, b] of raindrop edge.
     * Recommend [0.96, 1.0]
     *
     * Larger range of (b - a) have smoother edge.
     *
     * Lower value b makes raindrop larger with a distort edge
     */
    smoothRaindrop: [number, number];
    /**
     * Refract uv scale of minimal raindrop.
     * Recommend in range (0.2, 0.6)
     */
    refractBase: number;
    /**
     * Refract uv scaled by raindrop size.
     * Rocommend in range (0.4, 0.8)
     */
    refractScale: number;
    /**
     * Describe how raindrops are composed.
     *
     * - `smoother` compose raindrops normal with 'exclusion' blend mode
     *
     * - `harder` compose raindrops normal with 'normal' blend mode
     */
    raindropCompose: "smoother" | "harder";
    /**
     * Screen space (0..1) light direction or position.
     * Recommend [-1, 1, 2, 0]
     *
     * - Use [x, y, z, 0] to indicate a direction
     *
     * - Use [x, y, z, 1] to indicate a position
     */
    raindropLightPos: [number, number, number, number];
    /**
     * Lambertian diffuse lighting Color.
     * Recommend [0.3, 0.3, 0.3]
     */
    raindropDiffuseLight: [number, number, number];
    /**
     * Higher value makes more shadow.
     * Recommend in range (0.6..0.8)
     */
    raindropShadowOffset: number;
    /**
     * Similar to `smoothRaindrop`. Used to erase droplets & mist.
     * Recommended value [0.93, 1.0]
     */
    raindropEraserSize: [number, number];
    /**
     * Specular light clor.
     * Recommend disable it with [0, 0, 0] :)
     */
    raindropSpecularLight: [number, number, number];
    /**
     * Blinn-Phong exponent representing shininess.
     * Value from 0 to 1024 is ok
     */
    raindropSpecularShininess: number;
    /**
     * Will apply to calculate screen space normal for lighting.
     * Larger value makes raindrops looks more flat.
     * Recommend in range (0.3..1)
     */
    raindropLightBump: number;
}
export declare class RaindropRenderer {
    renderer: ZograRenderer;
    options: RenderOptions;
    private raindropTex;
    private originalBackground;
    private background;
    private raindropComposeTex;
    private dropletTexture;
    private mistTexture;
    private blurryBackground;
    private mistBackground;
    private blurRenderer;
    private matrlCompose;
    private matrlRaindrop;
    private matrlDroplet;
    private matrlErase;
    private matrlMist;
    private matrlMistCompose;
    private projectionMatrix;
    private mesh;
    private raindropBuffer;
    constructor(options: RenderOptions);
    loadAssets(): Promise<void>;
    reloadBackground(): Promise<void>;
    resize(): void;
    render(raindrops: RainDrop[], time: Time): void;
    private blurBackground;
    private drawMist;
    private drawBackground;
    private drawRaindrops;
    private drawDroplet;
}
//# sourceMappingURL=renderer.d.ts.map