#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;
uniform vec4 uColor;
uniform vec2 uEraserSmooth;

out vec4 fragColor;

void main()
{
    vec4 color = texture(uMainTex, vUV.xy).rgba;
    color.a = smoothstep(uEraserSmooth.x, uEraserSmooth.y, color.a);
    fragColor = color.rgba;
}