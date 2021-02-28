#version 300 es
precision mediump float;

in vec3 aPos;
in vec2 aUV;

uniform mat4 uTransformVP;

uniform float uSeed;
uniform vec4 uSpawnRect; // (xmin, ymin, xsize, ysize)
uniform vec2 uSizeRange; 

out vec2 vUV;

// Gold Noise ©2015 dcerisano@standard3d.com
// - based on the Golden Ratio
// - uniform normalized distribution
// - fastest static noise generator function (also runs at low precision)
// Ref: https://www.shadertoy.com/view/ltB3zD
const float PHI = 1.61803398874989484820459; // Φ = Golden Ratio 

float gold_noise(in vec2 xy, in float seed)
{
    return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);
}

vec2 lerp(vec2 a, vec2 b, vec2 t)
{
    return a + (b - a) * t;
}

void main()
{
    int id = gl_InstanceID + 1;
    vec2 pos = uSpawnRect.xy + uSpawnRect.zw * vec2(
        gold_noise(vec2(1, id), uSeed + 1.0),
        gold_noise(vec2(id, 1), uSeed + 2.0));

    vec2 size = vec2(
        gold_noise(vec2(1, id), uSeed + 3.0),
        gold_noise(vec2(id, 1), uSeed + 4.0));
    size = lerp(vec2(uSizeRange.x), vec2(uSizeRange.y), size);
    
    mat4 model = mat4(size.x, 0.0, 0.0, 0.0,  
                      0.0, size.x, 0.0, 0.0,  
                      0.0, 0.0, 1, 0.0,  
                      pos.x, pos.y, 0.0, 1.0); 
    mat4 mvp = uTransformVP * model;
    gl_Position = mvp * vec4(aPos, 1);
    vUV = aUV;
}