#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;
uniform vec4 uBackgroundSize; // (x, y, 1/x, 1/y)
uniform sampler2D uRaindropTex;
uniform sampler2D uDropletTex;
uniform sampler2D uMistTex;
uniform vec4 uColor;
uniform vec2 uSmoothRaindrop;
uniform vec2 uRefractParams; // (refractBase, refractScale)
uniform vec4 uLightPos;
uniform vec4 uDiffuseColor; // (color.rgb, shadowOffset)
uniform vec4 uSpecularParams; // (color.rgb, exponent)
uniform float uBump;

out vec4 fragColor;

void main()
{
    // vec3 lightPos = vec3(0.5, 1, 1);

    vec4 raindrop = texture(uRaindropTex, vUV.xy).rgba;
    vec4 droplet = texture(uDropletTex, vUV.xy).rgba;
    float mist = texture(uMistTex, vUV.xy).r;

    vec4 compose = vec4(raindrop.rgb + droplet.rgb - vec3(2.0) * raindrop.rgb * droplet.rgb, max(droplet.a, raindrop.a));

    float mask = smoothstep(uSmoothRaindrop.x, uSmoothRaindrop.y, compose.a);
    
    vec2 uv = vUV.xy + -(compose.xy - vec2(0.5)) * vec2(compose.b * uRefractParams.y + uRefractParams.x);
    vec3 normal = normalize(vec3((compose.xy - vec2(0.5)) * vec2(2), 1.0));

    // vec3 lightDir = lightPos - vec3(vUV, 0);
    vec3 lightDir = uLightPos.xyz - uLightPos.w * vec3(vUV.xy, 0.0);
    vec3 viewDir = vec3(0, 0, 1);
    vec3 halfDir = normalize(lightDir + viewDir);
    float lambertian = clamp(dot(normalize(lightDir), normal), 0.0, 1.0);
    float blinnPhon = pow(max(dot(normal, halfDir), 0.0), uSpecularParams.a);


    // offset = pow(offset, vec2(2));
    vec4 color = texture(uMainTex, uv.xy).rgba;
    vec3 diffuse = vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);

    color.rgb += vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);
    color.rgb += vec3(blinnPhon) * uSpecularParams.rgb;
    

    // fragColor = vec4(mask, mask, mask, 1);
    // color = color * vec3(uColor);

    fragColor = vec4(color.rgb, mask);// vec4(color.rgb, mask);
}