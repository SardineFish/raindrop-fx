#version 300 es
precision mediump float;

in vec2 vUV;

uniform sampler2D uMainTex;
uniform vec4 uColor;

out vec4 fragColor;

void main()
{
    vec4 color = texture(uMainTex, vUV.xy).rgba;
    color.rgb *= color.a;
    fragColor = vec4(color.rg, 0.0, color.a);
}