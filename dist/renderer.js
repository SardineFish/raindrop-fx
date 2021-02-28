"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaindropRenderer = void 0;
const zogra_renderer_1 = require("zogra-renderer");
const raindrop_png_1 = __importDefault(require("../assets/img/raindrop.png"));
const blur_1 = require("./blur");
const random_1 = require("./random");
const _2d_frag_glsl_1 = __importDefault(require("./shader/2d-frag.glsl"));
const _2d_vert_glsl_1 = __importDefault(require("./shader/2d-vert.glsl"));
const bg_mist_glsl_1 = __importDefault(require("./shader/bg-mist.glsl"));
const compose_glsl_1 = __importDefault(require("./shader/compose.glsl"));
const droplet_vert_glsl_1 = __importDefault(require("./shader/droplet-vert.glsl"));
const droplet_glsl_1 = __importDefault(require("./shader/droplet.glsl"));
const erase_glsl_1 = __importDefault(require("./shader/erase.glsl"));
const raindrop_frag_glsl_1 = __importDefault(require("./shader/raindrop-frag.glsl"));
const raindrop_vert_glsl_1 = __importDefault(require("./shader/raindrop-vert.glsl"));
class RaindropMaterial extends zogra_renderer_1.MaterialFromShader(new zogra_renderer_1.Shader(raindrop_vert_glsl_1.default, raindrop_frag_glsl_1.default, {
    blendRGB: [zogra_renderer_1.Blending.OneMinusDstColor, zogra_renderer_1.Blending.OneMinusSrcColor],
    depth: zogra_renderer_1.DepthTest.Disable,
    zWrite: false,
    attributes: {
        size: "aSize",
        modelMatrix: "aModelMatrix",
    }
})) {
    constructor() {
        super(...arguments);
        this.texture = null;
        this.size = 0;
    }
}
__decorate([
    zogra_renderer_1.shaderProp("uMainTex", "tex2d")
], RaindropMaterial.prototype, "texture", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uSize", "float")
], RaindropMaterial.prototype, "size", void 0);
class DropletMaterial extends zogra_renderer_1.MaterialFromShader(new zogra_renderer_1.Shader(droplet_vert_glsl_1.default, droplet_glsl_1.default, {
    blendRGB: [zogra_renderer_1.Blending.OneMinusDstColor, zogra_renderer_1.Blending.OneMinusSrcColor],
    depth: zogra_renderer_1.DepthTest.Disable,
    zWrite: false,
    attributes: {
        size: "aSize",
        modelMatrix: "aModelMatrix",
    }
})) {
    constructor() {
        super(...arguments);
        this.texture = null;
        this.spawnRect = zogra_renderer_1.vec4(0, 0, 1, 1);
        this.sizeRange = zogra_renderer_1.vec2(10, 20);
        this.seed = 1;
    }
}
__decorate([
    zogra_renderer_1.shaderProp("uMainTex", "tex2d")
], DropletMaterial.prototype, "texture", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uSpawnRect", "vec4")
], DropletMaterial.prototype, "spawnRect", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uSizeRange", "vec2")
], DropletMaterial.prototype, "sizeRange", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uSeed", "float")
], DropletMaterial.prototype, "seed", void 0);
class FinalCompose extends zogra_renderer_1.MaterialFromShader(new zogra_renderer_1.Shader(_2d_vert_glsl_1.default, compose_glsl_1.default, {
    blend: [zogra_renderer_1.Blending.SrcAlpha, zogra_renderer_1.Blending.OneMinusSrcAlpha],
    depth: zogra_renderer_1.DepthTest.Disable,
    zWrite: false
})) {
    constructor() {
        super(...arguments);
        this.background = null;
        this.backgroundSize = zogra_renderer_1.vec4.one();
        this.raindropTex = null;
        this.dropletTex = null;
        this.mistTex = null;
        this.smoothRaindrop = zogra_renderer_1.vec2(0.95, 1.0);
        this.refractParams = zogra_renderer_1.vec2(0.4, 0.6);
        this.lightPos = zogra_renderer_1.vec4(.5, .5, 2, 1);
        this.diffuseLight = new zogra_renderer_1.Color(0.3, 0.3, 0.3, 0.8);
        this.specularParams = zogra_renderer_1.vec4(1, 1, 1, 32);
        this.bump = 1;
    }
}
__decorate([
    zogra_renderer_1.shaderProp("uMainTex", "tex2d")
], FinalCompose.prototype, "background", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uBackgroundSize", "vec4")
], FinalCompose.prototype, "backgroundSize", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uRaindropTex", "tex2d")
], FinalCompose.prototype, "raindropTex", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uDropletTex", "tex2d")
], FinalCompose.prototype, "dropletTex", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uMistTex", "tex2d")
], FinalCompose.prototype, "mistTex", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uSmoothRaindrop", "vec2")
], FinalCompose.prototype, "smoothRaindrop", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uRefractParams", "vec2")
], FinalCompose.prototype, "refractParams", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uLightPos", "vec4")
], FinalCompose.prototype, "lightPos", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uDiffuseColor", "color")
], FinalCompose.prototype, "diffuseLight", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uSpecularParams", "vec4")
], FinalCompose.prototype, "specularParams", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uBump", "float")
], FinalCompose.prototype, "bump", void 0);
class RaindropErase extends zogra_renderer_1.SimpleTexturedMaterial(new zogra_renderer_1.Shader(_2d_vert_glsl_1.default, erase_glsl_1.default, {
    // blend: [Blending.Zero, Blending.OneMinusSrcAlpha],
    blendRGB: [zogra_renderer_1.Blending.Zero, zogra_renderer_1.Blending.OneMinusSrcAlpha],
    blendAlpha: [zogra_renderer_1.Blending.Zero, zogra_renderer_1.Blending.OneMinusSrcAlpha],
})) {
    constructor() {
        super(...arguments);
        this.eraserSize = zogra_renderer_1.vec2(0.93, 1.0);
    }
}
__decorate([
    zogra_renderer_1.shaderProp("uEraserSmooth", "vec2")
], RaindropErase.prototype, "eraserSize", void 0);
const MistAccumulate = zogra_renderer_1.SimpleTexturedMaterial(new zogra_renderer_1.Shader(_2d_vert_glsl_1.default, _2d_frag_glsl_1.default, {
    blend: [zogra_renderer_1.Blending.One, zogra_renderer_1.Blending.One]
}));
class MistBackgroundCompose extends zogra_renderer_1.SimpleTexturedMaterial(new zogra_renderer_1.Shader(_2d_vert_glsl_1.default, bg_mist_glsl_1.default, {
    blend: [zogra_renderer_1.Blending.SrcAlpha, zogra_renderer_1.Blending.OneMinusSrcAlpha]
})) {
    constructor() {
        super(...arguments);
        this.mistColor = new zogra_renderer_1.Color(0.01, 0.01, 0.01, 1);
        this.mistTex = null;
    }
}
__decorate([
    zogra_renderer_1.shaderProp("uMistColor", "color")
], MistBackgroundCompose.prototype, "mistColor", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uMistTex", "tex2d")
], MistBackgroundCompose.prototype, "mistTex", void 0);
class RaindropRenderer {
    // deubg: DebugLayerRenderer = new DebugLayerRenderer();
    constructor(options) {
        this.raindropTex = null;
        this.originalBackground = null;
        this.matrlCompose = new FinalCompose();
        this.matrlRaindrop = new RaindropMaterial();
        this.matrlDroplet = new DropletMaterial();
        this.matrlErase = new RaindropErase();
        this.matrlMist = new MistAccumulate();
        this.matrlMistCompose = new MistBackgroundCompose();
        this.mesh = zogra_renderer_1.MeshBuilder.quad();
        this.raindropBuffer = new zogra_renderer_1.RenderBuffer({
            size: "float",
            modelMatrix: "mat4",
        }, 3000);
        this.renderer = new zogra_renderer_1.ZograRenderer(options.canvas);
        this.renderer.gl.getExtension("EXT_color_buffer_float");
        this.options = options;
        this.projectionMatrix = zogra_renderer_1.mat4.ortho(0, options.width, 0, options.height, 1, -1);
        this.raindropComposeTex = new zogra_renderer_1.RenderTexture(options.width, options.height, false);
        this.background = new zogra_renderer_1.RenderTexture(options.width, options.height, false);
        this.dropletTexture = new zogra_renderer_1.RenderTexture(options.width, options.height, false);
        this.blurryBackground = new zogra_renderer_1.RenderTexture(options.width, options.height, false);
        this.mistBackground = new zogra_renderer_1.RenderTexture(options.width, options.height, false);
        this.mistTexture = new zogra_renderer_1.RenderTexture(options.width, options.height, false, zogra_renderer_1.TextureFormat.R16F);
        this.blurRenderer = new blur_1.BlurRenderer(this.renderer);
        this.renderer.setViewProjection(zogra_renderer_1.mat4.identity(), this.projectionMatrix);
    }
    async loadAssets() {
        // this.renderer.blit(null, RenderTarget.CanvasTarget);
        this.raindropTex = await zogra_renderer_1.TextureImporter
            .buffer(raindrop_png_1.default)
            .then(t => t.tex2d());
        this.matrlRaindrop.texture = this.raindropTex;
        this.matrlDroplet.texture = this.raindropTex;
        await this.reloadBackground();
    }
    async reloadBackground() {
        if (typeof (this.options.background) === "string") {
            this.originalBackground = await zogra_renderer_1.TextureImporter
                .url(this.options.background)
                .then(t => t.tex2d({ wrapMpde: zogra_renderer_1.WrapMode.Clamp }));
            this.originalBackground.wrapMode = zogra_renderer_1.WrapMode.Clamp;
            this.originalBackground.updateParameters();
        }
        else {
            this.originalBackground = new zogra_renderer_1.Texture2D();
            this.originalBackground.setData(this.options.background);
            this.originalBackground.updateParameters();
        }
        const [srcRect, dstRect] = zogra_renderer_1.Utils.imageResize(this.originalBackground.size, this.background.size, zogra_renderer_1.Utils.ImageSizing.Cover);
        this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials.blitCopy, srcRect, dstRect);
        this.background.generateMipmap();
        this.blurBackground();
    }
    resize() {
        this.renderer.setSize(this.options.width, this.options.height);
        this.projectionMatrix = zogra_renderer_1.mat4.ortho(0, this.options.width, 0, this.options.height, 1, -1);
        this.renderer.setViewProjection(zogra_renderer_1.mat4.identity(), this.projectionMatrix);
        this.raindropComposeTex.resize(this.options.width, this.options.height);
        this.background.resize(this.options.width, this.options.height);
        this.dropletTexture.resize(this.options.width, this.options.height);
        this.blurryBackground.resize(this.options.width, this.options.height);
        this.mistBackground.resize(this.options.width, this.options.height);
        this.mistTexture.resize(this.options.width, this.options.height);
        const [srcRect, dstRect] = zogra_renderer_1.Utils.imageResize(this.originalBackground.size, this.background.size, zogra_renderer_1.Utils.ImageSizing.Cover);
        this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials.blitCopy, srcRect, dstRect);
        this.background.generateMipmap();
        this.blurBackground();
    }
    render(raindrops, time) {
        this.drawDroplet(time);
        this.drawMist(time.dt);
        this.drawRaindrops(raindrops);
        this.renderer.setRenderTarget(zogra_renderer_1.RenderTarget.CanvasTarget);
        this.renderer.clear(zogra_renderer_1.Color.black);
        this.drawBackground();
        this.matrlCompose.background = this.blurryBackground;
        this.matrlCompose.backgroundSize = zogra_renderer_1.vec4(this.options.width, this.options.height, 1 / this.options.width, 1 / this.options.height);
        this.matrlCompose.raindropTex = this.raindropComposeTex;
        this.matrlCompose.dropletTex = this.dropletTexture;
        this.matrlCompose.mistTex = this.mistTexture;
        this.matrlCompose.smoothRaindrop = zogra_renderer_1.vec2(...this.options.smoothRaindrop);
        this.matrlCompose.refractParams = zogra_renderer_1.vec2(this.options.refractBase, this.options.refractScale);
        this.matrlCompose.lightPos = zogra_renderer_1.vec4(...this.options.raindropLightPos);
        this.matrlCompose.diffuseLight = new zogra_renderer_1.Color(...this.options.raindropDiffuseLight, this.options.raindropShadowOffset);
        this.matrlCompose.specularParams = zogra_renderer_1.vec4(...this.options.raindropSpecularLight, this.options.raindropSpecularShininess);
        this.matrlCompose.bump = this.options.raindropLightBump;
        this.renderer.blit(null, zogra_renderer_1.RenderTarget.CanvasTarget, this.matrlCompose);
    }
    blurBackground() {
        // Blur background with N steps downsample + N steps upsample
        if (!this.options.mist) {
            this.blurRenderer.blur(this.background, this.options.backgroundBlurSteps, this.blurryBackground);
        }
        else {
            // Downsample to max steps
            // Then upsample from a larger texture before smaller texture to avoid override
            this.blurRenderer.init(this.background);
            this.blurRenderer.downSample(this.background, Math.max(this.options.backgroundBlurSteps, this.options.mistBlurStep));
            if (this.options.backgroundBlurSteps === this.options.mistBlurStep) {
                this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground);
                this.renderer.blit(this.blurryBackground, this.mistBackground);
            }
            else if (this.options.mistBlurStep > this.options.backgroundBlurSteps) {
                this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground);
                this.blurRenderer.upSample(this.options.mistBlurStep, this.mistBackground);
            }
            else {
                this.blurRenderer.upSample(this.options.mistBlurStep, this.mistBackground);
                this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground);
            }
        }
    }
    drawMist(dt) {
        if (!this.options.mist)
            return;
        this.matrlMist.color.r = dt / this.options.mistTime;
        this.renderer.blit(this.renderer.assets.textures.default, this.mistTexture, this.matrlMist);
    }
    drawBackground() {
        this.renderer.blit(this.blurryBackground, zogra_renderer_1.RenderTarget.CanvasTarget);
        if (this.options.mist) {
            this.matrlMistCompose.mistTex = this.mistTexture;
            this.matrlMistCompose.texture = this.mistBackground;
            this.matrlMistCompose.mistColor = new zogra_renderer_1.Color(...this.options.mistColor);
            this.renderer.blit(this.mistBackground, zogra_renderer_1.RenderTarget.CanvasTarget, this.matrlMistCompose);
        }
    }
    drawRaindrops(raindrops) {
        if (raindrops.length > this.raindropBuffer.length)
            this.raindropBuffer.resize(this.raindropBuffer.length * 2);
        this.renderer.setRenderTarget(this.raindropComposeTex);
        this.renderer.clear(zogra_renderer_1.Color.black.transparent());
        for (let i = 0; i < raindrops.length; i++) {
            const raindrop = raindrops[i];
            const model = zogra_renderer_1.mat4.rts(zogra_renderer_1.quat.identity(), raindrop.pos.toVec3(), raindrop.size.toVec3(1));
            this.raindropBuffer[i].modelMatrix.set(model);
            this.raindropBuffer[i].size[0] = raindrop.size.x / 100;
        }
        switch (this.options.raindropCompose) {
            case "smoother":
                this.matrlRaindrop.shader.setPipelineStates({
                    blendRGB: [zogra_renderer_1.Blending.OneMinusDstColor, zogra_renderer_1.Blending.OneMinusSrcColor]
                });
                this.matrlDroplet.shader.setPipelineStates({
                    blendRGB: [zogra_renderer_1.Blending.OneMinusDstColor, zogra_renderer_1.Blending.OneMinusSrcColor],
                });
                break;
            case "harder":
                this.matrlRaindrop.shader.setPipelineStates({
                    blendRGB: [zogra_renderer_1.Blending.One, zogra_renderer_1.Blending.OneMinusSrcAlpha]
                });
                this.matrlDroplet.shader.setPipelineStates({
                    blendRGB: [zogra_renderer_1.Blending.One, zogra_renderer_1.Blending.OneMinusSrcAlpha],
                });
                break;
        }
        this.renderer.drawMeshInstance(this.mesh, this.raindropBuffer, this.matrlRaindrop, raindrops.length);
        this.matrlErase.eraserSize = zogra_renderer_1.vec2(...this.options.raindropEraserSize);
        this.renderer.blit(this.raindropComposeTex, this.dropletTexture, this.matrlErase);
        if (this.options.mist)
            this.renderer.blit(this.raindropComposeTex, this.mistTexture, this.matrlErase);
    }
    drawDroplet(time) {
        this.renderer.setRenderTarget(this.dropletTexture);
        const count = this.options.dropletsPerSeconds * time.dt;
        this.matrlDroplet.spawnRect = zogra_renderer_1.vec4(0, 0, this.options.width, this.options.height);
        this.matrlDroplet.sizeRange = zogra_renderer_1.vec2(...this.options.dropletSize);
        this.matrlDroplet.seed = random_1.randomRange(0, 133);
        this.renderer.drawMeshProceduralInstance(this.mesh, this.matrlDroplet, count);
    }
}
exports.RaindropRenderer = RaindropRenderer;
