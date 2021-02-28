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
exports.BlurRenderer = void 0;
const zogra_renderer_1 = require("zogra-renderer");
const texture_format_1 = require("zogra-renderer/dist/core/texture-format");
const _2d_vert_glsl_1 = __importDefault(require("./shader/2d-vert.glsl"));
const blur_glsl_1 = __importDefault(require("./shader/blur.glsl"));
class MaterialBlur extends zogra_renderer_1.MaterialFromShader(new zogra_renderer_1.Shader(_2d_vert_glsl_1.default, blur_glsl_1.default)) {
    constructor() {
        super(...arguments);
        this.texture = null;
        this.textureSize = zogra_renderer_1.vec4.one();
        this.sampleOffset = 1;
    }
}
__decorate([
    zogra_renderer_1.shaderProp("uMainTex", "tex2d")
], MaterialBlur.prototype, "texture", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uTexSize", "vec4")
], MaterialBlur.prototype, "textureSize", void 0);
__decorate([
    zogra_renderer_1.shaderProp("uSampleOffset", "float")
], MaterialBlur.prototype, "sampleOffset", void 0);
class BlurRenderer {
    constructor(renderer) {
        this.steps = [];
        this.mateiralBlur = new MaterialBlur();
        this.renderer = renderer;
    }
    init(texture) {
        if (!this.steps[0]) {
            this.steps[0] = new zogra_renderer_1.RenderTexture(texture.width, texture.height, false, texture.format, texture.filterMode);
            this.steps[0].wrapMode = zogra_renderer_1.WrapMode.Clamp;
            this.steps[0].updateParameters();
        }
        if (this.steps[0].width !== texture.width || this.steps[0].height !== texture.height)
            this.steps[0].resize(texture.width, texture.height, zogra_renderer_1.TextureResizing.Discard);
    }
    blur(texture, iteration = 4, output = this.steps[0]) {
        if (!this.steps[0])
            this.steps[0] = new zogra_renderer_1.RenderTexture(texture.width, texture.height, false, texture.format, texture.filterMode);
        output = output || this.steps[0];
        if (this.steps[0].width !== texture.width || this.steps[0].height !== texture.height)
            this.steps[0].resize(texture.width, texture.height, zogra_renderer_1.TextureResizing.Discard);
        this.downSample(texture, iteration);
        return this.upSample(iteration, output);
    }
    downSample(input, iteration) {
        for (let i = 1; i <= iteration; i++) {
            const downSize = zogra_renderer_1.vec2.floor(zogra_renderer_1.div(input.size, zogra_renderer_1.vec2(2)));
            if (!this.steps[i]) {
                this.steps[i] = new zogra_renderer_1.RenderTexture(downSize.x, downSize.y, false, texture_format_1.TextureFormat.RGBA, zogra_renderer_1.FilterMode.Linear);
                this.steps[i].wrapMode = zogra_renderer_1.WrapMode.Clamp;
                this.steps[i].updateParameters();
            }
            const output = this.steps[i];
            if (output.width !== downSize.x || output.height !== downSize.y)
                output.resize(downSize.x, downSize.y, zogra_renderer_1.TextureResizing.Discard);
            this.mateiralBlur.texture = input;
            this.mateiralBlur.textureSize = zogra_renderer_1.vec4(input.width, input.height, 1 / input.width, 1 / input.height);
            this.mateiralBlur.sampleOffset = 1;
            this.renderer.blit(input, output, this.mateiralBlur);
            input = output;
        }
    }
    upSample(iteration, finalOutput = this.steps[0]) {
        let input = this.steps[iteration];
        for (let i = iteration - 1; i >= 0; i--) {
            const upSize = zogra_renderer_1.mul(input.size, zogra_renderer_1.vec2(2));
            if (!this.steps[i]) {
                this.steps[i] = new zogra_renderer_1.RenderTexture(upSize.x, upSize.y, false, texture_format_1.TextureFormat.RGBA, zogra_renderer_1.FilterMode.Linear);
                this.steps[i].wrapMode = zogra_renderer_1.WrapMode.Clamp;
                this.steps[i].updateParameters();
            }
            const output = i === 0 ? finalOutput : this.steps[i];
            this.mateiralBlur.texture = input;
            this.mateiralBlur.textureSize = zogra_renderer_1.vec4(input.width, input.height, 1 / input.width, 1 / input.height);
            this.mateiralBlur.sampleOffset = 1;
            this.renderer.blit(input, output, this.mateiralBlur);
            input = output;
        }
        return input;
    }
}
exports.BlurRenderer = BlurRenderer;
