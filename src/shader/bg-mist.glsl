#version 300 es
precision mediump float;

in vec2 vUV;

uniform sampler2D uMainTex;
uniform sampler2D uMistTex;
uniform vec4 uMistColor;

out vec4 fragColor;

void main()
{
    vec4 color = texture(uMainTex, vUV.xy).rgba;
    color.rgb += vec3(uMistColor);
    color.a = texture(uMistTex, vUV.xy).r * uMistColor.a;
    fragColor = color.rgba;
}