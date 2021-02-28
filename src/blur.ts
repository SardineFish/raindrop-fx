import { div, FilterMode, MaterialFromShader, mul, RenderTexture, Shader, shaderProp, Texture, Texture2D, TextureResizing, vec2, vec4, WrapMode, ZograRenderer } from "zogra-renderer";
import { TextureFormat } from "zogra-renderer/dist/core/texture-format";
import vert from "./shader/2d-vert.glsl";
import frag from "./shader/blur.glsl";

class MaterialBlur extends MaterialFromShader(new Shader(vert, frag))
{
    @shaderProp("uMainTex", "tex2d")
    texture: Texture | null = null;

    @shaderProp("uTexSize", "vec4")
    textureSize: vec4 = vec4.one();

    @shaderProp("uSampleOffset", "float")
    sampleOffset: number = 1;
}

export class BlurRenderer
{
    renderer: ZograRenderer;
    steps: RenderTexture[] = [];
    mateiralBlur = new MaterialBlur();

    constructor(renderer: ZograRenderer)
    {
        this.renderer = renderer;
    }

    init(texture: Texture)
    {
        if (!this.steps[0])
        {
            this.steps[0] = new RenderTexture(texture.width, texture.height, false, texture.format, texture.filterMode);
            this.steps[0].wrapMode = WrapMode.Clamp;
            this.steps[0].updateParameters();
        }
        if (this.steps[0].width !== texture.width || this.steps[0].height !== texture.height)
            this.steps[0].resize(texture.width, texture.height, TextureResizing.Discard);
    }

    blur(texture: Texture, iteration: number = 4, output = this.steps[0])
    {
        if (!this.steps[0])
            this.steps[0] = new RenderTexture(texture.width, texture.height, false, texture.format, texture.filterMode);   
        output = output || this.steps[0];

        if (this.steps[0].width !== texture.width || this.steps[0].height !== texture.height)
            this.steps[0].resize(texture.width, texture.height, TextureResizing.Discard);
        
        this.downSample(texture, iteration);

        return this.upSample(iteration, output);
    }

    downSample(input: Texture, iteration: number)
    {
        for (let i = 1; i <= iteration; i++)
        {
            const downSize = vec2.floor(div(input.size, vec2(2)));
            if (!this.steps[i])
            {
                this.steps[i] = new RenderTexture(downSize.x, downSize.y, false, TextureFormat.RGBA, FilterMode.Linear);
                this.steps[i].wrapMode = WrapMode.Clamp;
                this.steps[i].updateParameters();
            }

            const output = this.steps[i];
            if (output.width !== downSize.x || output.height !== downSize.y)
                output.resize(downSize.x, downSize.y, TextureResizing.Discard);

            this.mateiralBlur.texture = input;
            this.mateiralBlur.textureSize = vec4(input.width, input.height, 1 / input.width, 1 / input.height);
            this.mateiralBlur.sampleOffset = 1;
            this.renderer.blit(input, output, this.mateiralBlur);
            input = output;
        }
    }

    upSample(iteration: number, finalOutput = this.steps[0])
    {
        let input = this.steps[iteration];
        for (let i = iteration - 1; i >= 0; i--)
        {
            const upSize = mul(input.size, vec2(2));
            if (!this.steps[i])
            {
                this.steps[i] = new RenderTexture(upSize.x, upSize.y, false, TextureFormat.RGBA, FilterMode.Linear);
                this.steps[i].wrapMode = WrapMode.Clamp;
                this.steps[i].updateParameters();
            }

            const output = i === 0 ? finalOutput : this.steps[i];

            this.mateiralBlur.texture = input;
            this.mateiralBlur.textureSize = vec4(input.width, input.height, 1 / input.width, 1 / input.height);
            this.mateiralBlur.sampleOffset = 1;
            this.renderer.blit(input, output, this.mateiralBlur);
            input = output;
        }
        return input;
    }
}