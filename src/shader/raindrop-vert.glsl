#version 300 es
precision mediump float;

in vec3 aPos;
in vec4 aColor;
in vec2 aUV;
in vec3 aNormal;

in float aSize;
in mat4 aModelMatrix;

uniform mat4 uTransformM;
uniform mat4 uTransformVP;
uniform mat4 uTransformMVP;
uniform mat4 uTransformM_IT;

out vec4 vColor;
out vec4 vPos;
out vec2 vUV;
out vec3 vNormal;
out vec3 vWorldPos;
out float vSize;

void main()
{
    mat4 mvp = uTransformVP * aModelMatrix;
    gl_Position = mvp * vec4(aPos, 1);
    vPos = gl_Position;
    vColor = aColor;
    vUV = aUV;
    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;
    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;
    vSize = aSize;
}