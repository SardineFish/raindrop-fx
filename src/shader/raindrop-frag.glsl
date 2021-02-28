#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;
in float vSize;

uniform sampler2D uMainTex;
uniform float uSize;

out vec4 fragColor;

void main()
{
    vec4 color = texture(uMainTex, vUV.xy).rgba;
    
    fragColor = vec4(color.rg * color.a, vSize * color.a, color.a);
}