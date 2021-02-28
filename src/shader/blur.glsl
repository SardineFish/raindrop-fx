#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;
uniform vec4 uTexSize; // (w, h, 1/w, 1/h)
uniform float uSampleOffset;

out vec4 fragColor;

void main()
{
    vec2 delta = vec2(-uSampleOffset, uSampleOffset);
    vec4 color = 
      texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xx, vec2(0), vec2(1)))
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yx, vec2(0), vec2(1)))
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yy, vec2(0), vec2(1)))
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xy, vec2(0), vec2(1)));

    color /= vec4(4.0);

    fragColor = color.rgba;
}