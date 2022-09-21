var RaindropFX = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __decorate = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i2 = decorators.length - 1, decorator; i2 >= 0; i2--)
      if (decorator = decorators[i2])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __toBinary = false ? (base64) => new Uint8Array(Buffer.from(base64, "base64")) : /* @__PURE__ */ (() => {
    var table = new Uint8Array(128);
    for (var i2 = 0; i2 < 64; i2++)
      table[i2 < 26 ? i2 + 65 : i2 < 52 ? i2 + 71 : i2 < 62 ? i2 - 4 : i2 * 4 - 205] = i2;
    return (base64) => {
      var n2 = base64.length, bytes = new Uint8Array((n2 - (base64[n2 - 1] == "=") - (base64[n2 - 2] == "=")) * 3 / 4 | 0);
      for (var i3 = 0, j = 0; i3 < n2; ) {
        var c0 = table[base64.charCodeAt(i3++)], c1 = table[base64.charCodeAt(i3++)];
        var c2 = table[base64.charCodeAt(i3++)], c3 = table[base64.charCodeAt(i3++)];
        bytes[j++] = c0 << 2 | c1 >> 4;
        bytes[j++] = c1 << 4 | c2 >> 2;
        bytes[j++] = c2 << 6 | c3;
      }
      return bytes;
    };
  })();

  // src/index.ts
  var require_src = __commonJS((exports, module) => {
    var RaindropFX = class {
      constructor(options) {
        this.animHandle = 0;
        const canvas = options.canvas;
        const defaultOptions = {
          spawnInterval: [0.1, 0.1],
          spawnSize: [60, 100],
          spawnLimit: 2e3,
          viewport: new Rect(vec2.zero(), vec2(canvas.width, canvas.height)),
          canvas,
          width: canvas.width,
          height: canvas.height,
          background: "",
          gravity: 2400,
          slipRate: 0,
          motionInterval: [0.1, 0.4],
          colliderSize: 1,
          trailDropDensity: 0.2,
          trailDistance: [20, 30],
          trailDropSize: [0.3, 0.5],
          trailSpread: 0.6,
          initialSpread: 0.5,
          shrinkRate: 0.01,
          velocitySpread: 0.3,
          evaporate: 10,
          xShifting: [0, 0.1],
          backgroundBlurSteps: 3,
          mist: true,
          mistColor: [0.01, 0.01, 0.01, 1],
          mistBlurStep: 4,
          mistTime: 10,
          dropletsPerSeconds: 500,
          dropletSize: [10, 30],
          smoothRaindrop: [0.96, 0.99],
          refractBase: 0.4,
          refractScale: 0.6,
          raindropCompose: "smoother",
          raindropLightPos: [-1, 1, 2, 0],
          raindropDiffuseLight: [0.2, 0.2, 0.2],
          raindropShadowOffset: 0.8,
          raindropEraserSize: [0.93, 1],
          raindropSpecularLight: [0, 0, 0],
          raindropSpecularShininess: 256,
          raindropLightBump: 1
        };
        this.options = {...defaultOptions, ...options};
        this.simulator = new RaindropSimulator(this.options);
        this.renderer = new RaindropRenderer(this.options);
      }
      async start() {
        await this.renderer.loadAssets();
        let lastFrameTime = 0;
        const update = (delay) => {
          const dt = (delay - lastFrameTime) / 1e3;
          lastFrameTime = delay;
          const time = {
            dt: 0.03,
            total: delay / 1e3
          };
          this.update(time);
          this.animHandle = requestAnimationFrame(update);
        };
        this.animHandle = requestAnimationFrame(update);
      }
      stop() {
        cancelAnimationFrame(this.animHandle);
      }
      resize(width, height) {
        this.options.width = width;
        this.options.height = height;
        this.options.viewport = new Rect(vec2.zero(), vec2(width, height));
        this.renderer.resize();
      }
      async setBackground(background) {
        this.renderer.options.background = background;
        await this.renderer.reloadBackground();
      }
      update(time) {
        this.simulator.update(time);
        this.renderer.render(this.simulator.raindrops, time);
      }
    };
    module.exports = RaindropFX;
  });

  // node_modules/gl-matrix/esm/common.js
  var EPSILON = 1e-6;
  var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
  var RANDOM = Math.random;
  var degree = Math.PI / 180;
  if (!Math.hypot)
    Math.hypot = function() {
      var y = 0, i2 = arguments.length;
      while (i2--) {
        y += arguments[i2] * arguments[i2];
      }
      return Math.sqrt(y);
    };

  // node_modules/gl-matrix/esm/mat3.js
  function create() {
    var out = new ARRAY_TYPE(9);
    if (ARRAY_TYPE != Float32Array) {
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
    }
    out[0] = 1;
    out[4] = 1;
    out[8] = 1;
    return out;
  }

  // node_modules/gl-matrix/esm/mat4.js
  var mat4_exports = {};
  __export(mat4_exports, {
    add: () => add,
    adjoint: () => adjoint,
    clone: () => clone,
    copy: () => copy,
    create: () => create2,
    determinant: () => determinant,
    equals: () => equals,
    exactEquals: () => exactEquals,
    frob: () => frob,
    fromQuat: () => fromQuat,
    fromQuat2: () => fromQuat2,
    fromRotation: () => fromRotation,
    fromRotationTranslation: () => fromRotationTranslation,
    fromRotationTranslationScale: () => fromRotationTranslationScale,
    fromRotationTranslationScaleOrigin: () => fromRotationTranslationScaleOrigin,
    fromScaling: () => fromScaling,
    fromTranslation: () => fromTranslation,
    fromValues: () => fromValues,
    fromXRotation: () => fromXRotation,
    fromYRotation: () => fromYRotation,
    fromZRotation: () => fromZRotation,
    frustum: () => frustum,
    getRotation: () => getRotation,
    getScaling: () => getScaling,
    getTranslation: () => getTranslation,
    identity: () => identity,
    invert: () => invert,
    lookAt: () => lookAt,
    mul: () => mul,
    multiply: () => multiply,
    multiplyScalar: () => multiplyScalar,
    multiplyScalarAndAdd: () => multiplyScalarAndAdd,
    ortho: () => ortho,
    orthoNO: () => orthoNO,
    orthoZO: () => orthoZO,
    perspective: () => perspective,
    perspectiveFromFieldOfView: () => perspectiveFromFieldOfView,
    perspectiveNO: () => perspectiveNO,
    perspectiveZO: () => perspectiveZO,
    rotate: () => rotate,
    rotateX: () => rotateX,
    rotateY: () => rotateY,
    rotateZ: () => rotateZ,
    scale: () => scale,
    set: () => set,
    str: () => str,
    sub: () => sub,
    subtract: () => subtract,
    targetTo: () => targetTo,
    translate: () => translate,
    transpose: () => transpose
  });
  function create2() {
    var out = new ARRAY_TYPE(16);
    if (ARRAY_TYPE != Float32Array) {
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
  }
  function clone(a2) {
    var out = new ARRAY_TYPE(16);
    out[0] = a2[0];
    out[1] = a2[1];
    out[2] = a2[2];
    out[3] = a2[3];
    out[4] = a2[4];
    out[5] = a2[5];
    out[6] = a2[6];
    out[7] = a2[7];
    out[8] = a2[8];
    out[9] = a2[9];
    out[10] = a2[10];
    out[11] = a2[11];
    out[12] = a2[12];
    out[13] = a2[13];
    out[14] = a2[14];
    out[15] = a2[15];
    return out;
  }
  function copy(out, a2) {
    out[0] = a2[0];
    out[1] = a2[1];
    out[2] = a2[2];
    out[3] = a2[3];
    out[4] = a2[4];
    out[5] = a2[5];
    out[6] = a2[6];
    out[7] = a2[7];
    out[8] = a2[8];
    out[9] = a2[9];
    out[10] = a2[10];
    out[11] = a2[11];
    out[12] = a2[12];
    out[13] = a2[13];
    out[14] = a2[14];
    out[15] = a2[15];
    return out;
  }
  function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new ARRAY_TYPE(16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
  }
  function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function transpose(out, a2) {
    if (out === a2) {
      var a01 = a2[1], a02 = a2[2], a03 = a2[3];
      var a12 = a2[6], a13 = a2[7];
      var a23 = a2[11];
      out[1] = a2[4];
      out[2] = a2[8];
      out[3] = a2[12];
      out[4] = a01;
      out[6] = a2[9];
      out[7] = a2[13];
      out[8] = a02;
      out[9] = a12;
      out[11] = a2[14];
      out[12] = a03;
      out[13] = a13;
      out[14] = a23;
    } else {
      out[0] = a2[0];
      out[1] = a2[4];
      out[2] = a2[8];
      out[3] = a2[12];
      out[4] = a2[1];
      out[5] = a2[5];
      out[6] = a2[9];
      out[7] = a2[13];
      out[8] = a2[2];
      out[9] = a2[6];
      out[10] = a2[10];
      out[11] = a2[14];
      out[12] = a2[3];
      out[13] = a2[7];
      out[14] = a2[11];
      out[15] = a2[15];
    }
    return out;
  }
  function invert(out, a2) {
    var a00 = a2[0], a01 = a2[1], a02 = a2[2], a03 = a2[3];
    var a10 = a2[4], a11 = a2[5], a12 = a2[6], a13 = a2[7];
    var a20 = a2[8], a21 = a2[9], a22 = a2[10], a23 = a2[11];
    var a30 = a2[12], a31 = a2[13], a32 = a2[14], a33 = a2[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
      return null;
    }
    det = 1 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
  }
  function adjoint(out, a2) {
    var a00 = a2[0], a01 = a2[1], a02 = a2[2], a03 = a2[3];
    var a10 = a2[4], a11 = a2[5], a12 = a2[6], a13 = a2[7];
    var a20 = a2[8], a21 = a2[9], a22 = a2[10], a23 = a2[11];
    var a30 = a2[12], a31 = a2[13], a32 = a2[14], a33 = a2[15];
    out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
    out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
    out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
    out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
    out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
    out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
    out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
    out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
    out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
    out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
    out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
    out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
    out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
    out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
    out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
    out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
    return out;
  }
  function determinant(a2) {
    var a00 = a2[0], a01 = a2[1], a02 = a2[2], a03 = a2[3];
    var a10 = a2[4], a11 = a2[5], a12 = a2[6], a13 = a2[7];
    var a20 = a2[8], a21 = a2[9], a22 = a2[10], a23 = a2[11];
    var a30 = a2[12], a31 = a2[13], a32 = a2[14], a33 = a2[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  }
  function multiply(out, a2, b) {
    var a00 = a2[0], a01 = a2[1], a02 = a2[2], a03 = a2[3];
    var a10 = a2[4], a11 = a2[5], a12 = a2[6], a13 = a2[7];
    var a20 = a2[8], a21 = a2[9], a22 = a2[10], a23 = a2[11];
    var a30 = a2[12], a31 = a2[13], a32 = a2[14], a33 = a2[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  }
  function translate(out, a2, v2) {
    var x = v2[0], y = v2[1], z = v2[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a2 === out) {
      out[12] = a2[0] * x + a2[4] * y + a2[8] * z + a2[12];
      out[13] = a2[1] * x + a2[5] * y + a2[9] * z + a2[13];
      out[14] = a2[2] * x + a2[6] * y + a2[10] * z + a2[14];
      out[15] = a2[3] * x + a2[7] * y + a2[11] * z + a2[15];
    } else {
      a00 = a2[0];
      a01 = a2[1];
      a02 = a2[2];
      a03 = a2[3];
      a10 = a2[4];
      a11 = a2[5];
      a12 = a2[6];
      a13 = a2[7];
      a20 = a2[8];
      a21 = a2[9];
      a22 = a2[10];
      a23 = a2[11];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a03;
      out[4] = a10;
      out[5] = a11;
      out[6] = a12;
      out[7] = a13;
      out[8] = a20;
      out[9] = a21;
      out[10] = a22;
      out[11] = a23;
      out[12] = a00 * x + a10 * y + a20 * z + a2[12];
      out[13] = a01 * x + a11 * y + a21 * z + a2[13];
      out[14] = a02 * x + a12 * y + a22 * z + a2[14];
      out[15] = a03 * x + a13 * y + a23 * z + a2[15];
    }
    return out;
  }
  function scale(out, a2, v2) {
    var x = v2[0], y = v2[1], z = v2[2];
    out[0] = a2[0] * x;
    out[1] = a2[1] * x;
    out[2] = a2[2] * x;
    out[3] = a2[3] * x;
    out[4] = a2[4] * y;
    out[5] = a2[5] * y;
    out[6] = a2[6] * y;
    out[7] = a2[7] * y;
    out[8] = a2[8] * z;
    out[9] = a2[9] * z;
    out[10] = a2[10] * z;
    out[11] = a2[11] * z;
    out[12] = a2[12];
    out[13] = a2[13];
    out[14] = a2[14];
    out[15] = a2[15];
    return out;
  }
  function rotate(out, a2, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len5 = Math.hypot(x, y, z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len5 < EPSILON) {
      return null;
    }
    len5 = 1 / len5;
    x *= len5;
    y *= len5;
    z *= len5;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a2[0];
    a01 = a2[1];
    a02 = a2[2];
    a03 = a2[3];
    a10 = a2[4];
    a11 = a2[5];
    a12 = a2[6];
    a13 = a2[7];
    a20 = a2[8];
    a21 = a2[9];
    a22 = a2[10];
    a23 = a2[11];
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a2 !== out) {
      out[12] = a2[12];
      out[13] = a2[13];
      out[14] = a2[14];
      out[15] = a2[15];
    }
    return out;
  }
  function rotateX(out, a2, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a2[4];
    var a11 = a2[5];
    var a12 = a2[6];
    var a13 = a2[7];
    var a20 = a2[8];
    var a21 = a2[9];
    var a22 = a2[10];
    var a23 = a2[11];
    if (a2 !== out) {
      out[0] = a2[0];
      out[1] = a2[1];
      out[2] = a2[2];
      out[3] = a2[3];
      out[12] = a2[12];
      out[13] = a2[13];
      out[14] = a2[14];
      out[15] = a2[15];
    }
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
  }
  function rotateY(out, a2, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a2[0];
    var a01 = a2[1];
    var a02 = a2[2];
    var a03 = a2[3];
    var a20 = a2[8];
    var a21 = a2[9];
    var a22 = a2[10];
    var a23 = a2[11];
    if (a2 !== out) {
      out[4] = a2[4];
      out[5] = a2[5];
      out[6] = a2[6];
      out[7] = a2[7];
      out[12] = a2[12];
      out[13] = a2[13];
      out[14] = a2[14];
      out[15] = a2[15];
    }
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
  }
  function rotateZ(out, a2, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a2[0];
    var a01 = a2[1];
    var a02 = a2[2];
    var a03 = a2[3];
    var a10 = a2[4];
    var a11 = a2[5];
    var a12 = a2[6];
    var a13 = a2[7];
    if (a2 !== out) {
      out[8] = a2[8];
      out[9] = a2[9];
      out[10] = a2[10];
      out[11] = a2[11];
      out[12] = a2[12];
      out[13] = a2[13];
      out[14] = a2[14];
      out[15] = a2[15];
    }
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
  }
  function fromTranslation(out, v2) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v2[0];
    out[13] = v2[1];
    out[14] = v2[2];
    out[15] = 1;
    return out;
  }
  function fromScaling(out, v2) {
    out[0] = v2[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v2[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v2[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromRotation(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len5 = Math.hypot(x, y, z);
    var s, c, t;
    if (len5 < EPSILON) {
      return null;
    }
    len5 = 1 / len5;
    x *= len5;
    y *= len5;
    z *= len5;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function fromRotationTranslation(out, q, v2) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v2[0];
    out[13] = v2[1];
    out[14] = v2[2];
    out[15] = 1;
    return out;
  }
  function fromQuat2(out, a2) {
    var translation = new ARRAY_TYPE(3);
    var bx = -a2[0], by = -a2[1], bz = -a2[2], bw = a2[3], ax = a2[4], ay = a2[5], az = a2[6], aw = a2[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw;
    if (magnitude > 0) {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
      translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
      translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
      translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a2, translation);
    return out;
  }
  function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
  }
  function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.hypot(m11, m12, m13);
    out[1] = Math.hypot(m21, m22, m23);
    out[2] = Math.hypot(m31, m32, m33);
    return out;
  }
  function getRotation(out, mat) {
    var scaling = new ARRAY_TYPE(3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
      S = Math.sqrt(trace + 1) * 2;
      out[3] = 0.25 * S;
      out[0] = (sm23 - sm32) / S;
      out[1] = (sm31 - sm13) / S;
      out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
      S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
      out[3] = (sm23 - sm32) / S;
      out[0] = 0.25 * S;
      out[1] = (sm12 + sm21) / S;
      out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
      S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
      out[3] = (sm31 - sm13) / S;
      out[0] = (sm12 + sm21) / S;
      out[1] = 0.25 * S;
      out[2] = (sm23 + sm32) / S;
    } else {
      S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
      out[3] = (sm12 - sm21) / S;
      out[0] = (sm31 + sm13) / S;
      out[1] = (sm23 + sm32) / S;
      out[2] = 0.25 * S;
    }
    return out;
  }
  function fromRotationTranslationScale(out, q, v2, s) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v2[0];
    out[13] = v2[1];
    out[14] = v2[2];
    out[15] = 1;
    return out;
  }
  function fromRotationTranslationScaleOrigin(out, q, v2, s, o2) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o2[0];
    var oy = o2[1];
    var oz = o2[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v2[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v2[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v2[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
  }
  function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
  }
  function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
  }
  function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = (far + near) * nf;
      out[14] = 2 * far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -2 * near;
    }
    return out;
  }
  var perspective = perspectiveNO;
  function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1 / Math.tan(fovy / 2), nf;
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
      nf = 1 / (near - far);
      out[10] = far * nf;
      out[14] = far * near * nf;
    } else {
      out[10] = -1;
      out[14] = -near;
    }
    return out;
  }
  function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
    var xScale = 2 / (leftTan + rightTan);
    var yScale = 2 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = yScale;
    out[6] = 0;
    out[7] = 0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near / (near - far);
    out[15] = 0;
    return out;
  }
  function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
  }
  var ortho = orthoNO;
  function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
  }
  function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len5;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
      return identity(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len5 = 1 / Math.hypot(z0, z1, z2);
    z0 *= len5;
    z1 *= len5;
    z2 *= len5;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len5 = Math.hypot(x0, x1, x2);
    if (!len5) {
      x0 = 0;
      x1 = 0;
      x2 = 0;
    } else {
      len5 = 1 / len5;
      x0 *= len5;
      x1 *= len5;
      x2 *= len5;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len5 = Math.hypot(y0, y1, y2);
    if (!len5) {
      y0 = 0;
      y1 = 0;
      y2 = 0;
    } else {
      len5 = 1 / len5;
      y0 *= len5;
      y1 *= len5;
      y2 *= len5;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
  }
  function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len5 = z0 * z0 + z1 * z1 + z2 * z2;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
      z0 *= len5;
      z1 *= len5;
      z2 *= len5;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len5 = x0 * x0 + x1 * x1 + x2 * x2;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
      x0 *= len5;
      x1 *= len5;
      x2 *= len5;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
  }
  function str(a2) {
    return "mat4(" + a2[0] + ", " + a2[1] + ", " + a2[2] + ", " + a2[3] + ", " + a2[4] + ", " + a2[5] + ", " + a2[6] + ", " + a2[7] + ", " + a2[8] + ", " + a2[9] + ", " + a2[10] + ", " + a2[11] + ", " + a2[12] + ", " + a2[13] + ", " + a2[14] + ", " + a2[15] + ")";
  }
  function frob(a2) {
    return Math.hypot(a2[0], a2[1], a2[2], a2[3], a2[4], a2[5], a2[6], a2[7], a2[8], a2[9], a2[10], a2[11], a2[12], a2[13], a2[14], a2[15]);
  }
  function add(out, a2, b) {
    out[0] = a2[0] + b[0];
    out[1] = a2[1] + b[1];
    out[2] = a2[2] + b[2];
    out[3] = a2[3] + b[3];
    out[4] = a2[4] + b[4];
    out[5] = a2[5] + b[5];
    out[6] = a2[6] + b[6];
    out[7] = a2[7] + b[7];
    out[8] = a2[8] + b[8];
    out[9] = a2[9] + b[9];
    out[10] = a2[10] + b[10];
    out[11] = a2[11] + b[11];
    out[12] = a2[12] + b[12];
    out[13] = a2[13] + b[13];
    out[14] = a2[14] + b[14];
    out[15] = a2[15] + b[15];
    return out;
  }
  function subtract(out, a2, b) {
    out[0] = a2[0] - b[0];
    out[1] = a2[1] - b[1];
    out[2] = a2[2] - b[2];
    out[3] = a2[3] - b[3];
    out[4] = a2[4] - b[4];
    out[5] = a2[5] - b[5];
    out[6] = a2[6] - b[6];
    out[7] = a2[7] - b[7];
    out[8] = a2[8] - b[8];
    out[9] = a2[9] - b[9];
    out[10] = a2[10] - b[10];
    out[11] = a2[11] - b[11];
    out[12] = a2[12] - b[12];
    out[13] = a2[13] - b[13];
    out[14] = a2[14] - b[14];
    out[15] = a2[15] - b[15];
    return out;
  }
  function multiplyScalar(out, a2, b) {
    out[0] = a2[0] * b;
    out[1] = a2[1] * b;
    out[2] = a2[2] * b;
    out[3] = a2[3] * b;
    out[4] = a2[4] * b;
    out[5] = a2[5] * b;
    out[6] = a2[6] * b;
    out[7] = a2[7] * b;
    out[8] = a2[8] * b;
    out[9] = a2[9] * b;
    out[10] = a2[10] * b;
    out[11] = a2[11] * b;
    out[12] = a2[12] * b;
    out[13] = a2[13] * b;
    out[14] = a2[14] * b;
    out[15] = a2[15] * b;
    return out;
  }
  function multiplyScalarAndAdd(out, a2, b, scale6) {
    out[0] = a2[0] + b[0] * scale6;
    out[1] = a2[1] + b[1] * scale6;
    out[2] = a2[2] + b[2] * scale6;
    out[3] = a2[3] + b[3] * scale6;
    out[4] = a2[4] + b[4] * scale6;
    out[5] = a2[5] + b[5] * scale6;
    out[6] = a2[6] + b[6] * scale6;
    out[7] = a2[7] + b[7] * scale6;
    out[8] = a2[8] + b[8] * scale6;
    out[9] = a2[9] + b[9] * scale6;
    out[10] = a2[10] + b[10] * scale6;
    out[11] = a2[11] + b[11] * scale6;
    out[12] = a2[12] + b[12] * scale6;
    out[13] = a2[13] + b[13] * scale6;
    out[14] = a2[14] + b[14] * scale6;
    out[15] = a2[15] + b[15] * scale6;
    return out;
  }
  function exactEquals(a2, b) {
    return a2[0] === b[0] && a2[1] === b[1] && a2[2] === b[2] && a2[3] === b[3] && a2[4] === b[4] && a2[5] === b[5] && a2[6] === b[6] && a2[7] === b[7] && a2[8] === b[8] && a2[9] === b[9] && a2[10] === b[10] && a2[11] === b[11] && a2[12] === b[12] && a2[13] === b[13] && a2[14] === b[14] && a2[15] === b[15];
  }
  function equals(a2, b) {
    var a0 = a2[0], a1 = a2[1], a22 = a2[2], a3 = a2[3];
    var a4 = a2[4], a5 = a2[5], a6 = a2[6], a7 = a2[7];
    var a8 = a2[8], a9 = a2[9], a10 = a2[10], a11 = a2[11];
    var a12 = a2[12], a13 = a2[13], a14 = a2[14], a15 = a2[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a22 - b2) <= EPSILON * Math.max(1, Math.abs(a22), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
  }
  var mul = multiply;
  var sub = subtract;

  // node_modules/gl-matrix/esm/quat.js
  var quat_exports = {};
  __export(quat_exports, {
    add: () => add4,
    calculateW: () => calculateW,
    clone: () => clone4,
    conjugate: () => conjugate,
    copy: () => copy4,
    create: () => create5,
    dot: () => dot3,
    equals: () => equals4,
    exactEquals: () => exactEquals4,
    exp: () => exp,
    fromEuler: () => fromEuler,
    fromMat3: () => fromMat3,
    fromValues: () => fromValues4,
    getAngle: () => getAngle,
    getAxisAngle: () => getAxisAngle,
    identity: () => identity2,
    invert: () => invert2,
    len: () => len3,
    length: () => length3,
    lerp: () => lerp3,
    ln: () => ln,
    mul: () => mul4,
    multiply: () => multiply4,
    normalize: () => normalize3,
    pow: () => pow,
    random: () => random3,
    rotateX: () => rotateX3,
    rotateY: () => rotateY3,
    rotateZ: () => rotateZ3,
    rotationTo: () => rotationTo,
    scale: () => scale4,
    set: () => set4,
    setAxes: () => setAxes,
    setAxisAngle: () => setAxisAngle,
    slerp: () => slerp,
    sqlerp: () => sqlerp,
    sqrLen: () => sqrLen3,
    squaredLength: () => squaredLength3,
    str: () => str4
  });

  // node_modules/gl-matrix/esm/vec3.js
  var vec3_exports = {};
  __export(vec3_exports, {
    add: () => add2,
    angle: () => angle,
    bezier: () => bezier,
    ceil: () => ceil,
    clone: () => clone2,
    copy: () => copy2,
    create: () => create3,
    cross: () => cross,
    dist: () => dist,
    distance: () => distance,
    div: () => div,
    divide: () => divide,
    dot: () => dot,
    equals: () => equals2,
    exactEquals: () => exactEquals2,
    floor: () => floor,
    forEach: () => forEach,
    fromValues: () => fromValues2,
    hermite: () => hermite,
    inverse: () => inverse,
    len: () => len,
    length: () => length,
    lerp: () => lerp,
    max: () => max,
    min: () => min,
    mul: () => mul2,
    multiply: () => multiply2,
    negate: () => negate,
    normalize: () => normalize,
    random: () => random,
    rotateX: () => rotateX2,
    rotateY: () => rotateY2,
    rotateZ: () => rotateZ2,
    round: () => round,
    scale: () => scale2,
    scaleAndAdd: () => scaleAndAdd,
    set: () => set2,
    sqrDist: () => sqrDist,
    sqrLen: () => sqrLen,
    squaredDistance: () => squaredDistance,
    squaredLength: () => squaredLength,
    str: () => str2,
    sub: () => sub2,
    subtract: () => subtract2,
    transformMat3: () => transformMat3,
    transformMat4: () => transformMat4,
    transformQuat: () => transformQuat,
    zero: () => zero
  });
  function create3() {
    var out = new ARRAY_TYPE(3);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
    return out;
  }
  function clone2(a2) {
    var out = new ARRAY_TYPE(3);
    out[0] = a2[0];
    out[1] = a2[1];
    out[2] = a2[2];
    return out;
  }
  function length(a2) {
    var x = a2[0];
    var y = a2[1];
    var z = a2[2];
    return Math.hypot(x, y, z);
  }
  function fromValues2(x, y, z) {
    var out = new ARRAY_TYPE(3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function copy2(out, a2) {
    out[0] = a2[0];
    out[1] = a2[1];
    out[2] = a2[2];
    return out;
  }
  function set2(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
  }
  function add2(out, a2, b) {
    out[0] = a2[0] + b[0];
    out[1] = a2[1] + b[1];
    out[2] = a2[2] + b[2];
    return out;
  }
  function subtract2(out, a2, b) {
    out[0] = a2[0] - b[0];
    out[1] = a2[1] - b[1];
    out[2] = a2[2] - b[2];
    return out;
  }
  function multiply2(out, a2, b) {
    out[0] = a2[0] * b[0];
    out[1] = a2[1] * b[1];
    out[2] = a2[2] * b[2];
    return out;
  }
  function divide(out, a2, b) {
    out[0] = a2[0] / b[0];
    out[1] = a2[1] / b[1];
    out[2] = a2[2] / b[2];
    return out;
  }
  function ceil(out, a2) {
    out[0] = Math.ceil(a2[0]);
    out[1] = Math.ceil(a2[1]);
    out[2] = Math.ceil(a2[2]);
    return out;
  }
  function floor(out, a2) {
    out[0] = Math.floor(a2[0]);
    out[1] = Math.floor(a2[1]);
    out[2] = Math.floor(a2[2]);
    return out;
  }
  function min(out, a2, b) {
    out[0] = Math.min(a2[0], b[0]);
    out[1] = Math.min(a2[1], b[1]);
    out[2] = Math.min(a2[2], b[2]);
    return out;
  }
  function max(out, a2, b) {
    out[0] = Math.max(a2[0], b[0]);
    out[1] = Math.max(a2[1], b[1]);
    out[2] = Math.max(a2[2], b[2]);
    return out;
  }
  function round(out, a2) {
    out[0] = Math.round(a2[0]);
    out[1] = Math.round(a2[1]);
    out[2] = Math.round(a2[2]);
    return out;
  }
  function scale2(out, a2, b) {
    out[0] = a2[0] * b;
    out[1] = a2[1] * b;
    out[2] = a2[2] * b;
    return out;
  }
  function scaleAndAdd(out, a2, b, scale6) {
    out[0] = a2[0] + b[0] * scale6;
    out[1] = a2[1] + b[1] * scale6;
    out[2] = a2[2] + b[2] * scale6;
    return out;
  }
  function distance(a2, b) {
    var x = b[0] - a2[0];
    var y = b[1] - a2[1];
    var z = b[2] - a2[2];
    return Math.hypot(x, y, z);
  }
  function squaredDistance(a2, b) {
    var x = b[0] - a2[0];
    var y = b[1] - a2[1];
    var z = b[2] - a2[2];
    return x * x + y * y + z * z;
  }
  function squaredLength(a2) {
    var x = a2[0];
    var y = a2[1];
    var z = a2[2];
    return x * x + y * y + z * z;
  }
  function negate(out, a2) {
    out[0] = -a2[0];
    out[1] = -a2[1];
    out[2] = -a2[2];
    return out;
  }
  function inverse(out, a2) {
    out[0] = 1 / a2[0];
    out[1] = 1 / a2[1];
    out[2] = 1 / a2[2];
    return out;
  }
  function normalize(out, a2) {
    var x = a2[0];
    var y = a2[1];
    var z = a2[2];
    var len5 = x * x + y * y + z * z;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
    }
    out[0] = a2[0] * len5;
    out[1] = a2[1] * len5;
    out[2] = a2[2] * len5;
    return out;
  }
  function dot(a2, b) {
    return a2[0] * b[0] + a2[1] * b[1] + a2[2] * b[2];
  }
  function cross(out, a2, b) {
    var ax = a2[0], ay = a2[1], az = a2[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
  }
  function lerp(out, a2, b, t) {
    var ax = a2[0];
    var ay = a2[1];
    var az = a2[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
  }
  function hermite(out, a2, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a2[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a2[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a2[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  function bezier(out, a2, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a2[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a2[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a2[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
  }
  function random(out, scale6) {
    scale6 = scale6 || 1;
    var r2 = RANDOM() * 2 * Math.PI;
    var z = RANDOM() * 2 - 1;
    var zScale = Math.sqrt(1 - z * z) * scale6;
    out[0] = Math.cos(r2) * zScale;
    out[1] = Math.sin(r2) * zScale;
    out[2] = z * scale6;
    return out;
  }
  function transformMat4(out, a2, m) {
    var x = a2[0], y = a2[1], z = a2[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
  }
  function transformMat3(out, a2, m) {
    var x = a2[0], y = a2[1], z = a2[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
  }
  function transformQuat(out, a2, q) {
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var x = a2[0], y = a2[1], z = a2[2];
    var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
    var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
    var w2 = qw * 2;
    uvx *= w2;
    uvy *= w2;
    uvz *= w2;
    uuvx *= 2;
    uuvy *= 2;
    uuvz *= 2;
    out[0] = x + uvx + uuvx;
    out[1] = y + uvy + uuvy;
    out[2] = z + uvz + uuvz;
    return out;
  }
  function rotateX2(out, a2, b, rad) {
    var p = [], r2 = [];
    p[0] = a2[0] - b[0];
    p[1] = a2[1] - b[1];
    p[2] = a2[2] - b[2];
    r2[0] = p[0];
    r2[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r2[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
    out[0] = r2[0] + b[0];
    out[1] = r2[1] + b[1];
    out[2] = r2[2] + b[2];
    return out;
  }
  function rotateY2(out, a2, b, rad) {
    var p = [], r2 = [];
    p[0] = a2[0] - b[0];
    p[1] = a2[1] - b[1];
    p[2] = a2[2] - b[2];
    r2[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r2[1] = p[1];
    r2[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
    out[0] = r2[0] + b[0];
    out[1] = r2[1] + b[1];
    out[2] = r2[2] + b[2];
    return out;
  }
  function rotateZ2(out, a2, b, rad) {
    var p = [], r2 = [];
    p[0] = a2[0] - b[0];
    p[1] = a2[1] - b[1];
    p[2] = a2[2] - b[2];
    r2[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r2[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r2[2] = p[2];
    out[0] = r2[0] + b[0];
    out[1] = r2[1] + b[1];
    out[2] = r2[2] + b[2];
    return out;
  }
  function angle(a2, b) {
    var ax = a2[0], ay = a2[1], az = a2[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a2, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }
  function zero(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    return out;
  }
  function str2(a2) {
    return "vec3(" + a2[0] + ", " + a2[1] + ", " + a2[2] + ")";
  }
  function exactEquals2(a2, b) {
    return a2[0] === b[0] && a2[1] === b[1] && a2[2] === b[2];
  }
  function equals2(a2, b) {
    var a0 = a2[0], a1 = a2[1], a22 = a2[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a22 - b2) <= EPSILON * Math.max(1, Math.abs(a22), Math.abs(b2));
  }
  var sub2 = subtract2;
  var mul2 = multiply2;
  var div = divide;
  var dist = distance;
  var sqrDist = squaredDistance;
  var len = length;
  var sqrLen = squaredLength;
  var forEach = function() {
    var vec = create3();
    return function(a2, stride, offset, count, fn, arg) {
      var i2, l2;
      if (!stride) {
        stride = 3;
      }
      if (!offset) {
        offset = 0;
      }
      if (count) {
        l2 = Math.min(count * stride + offset, a2.length);
      } else {
        l2 = a2.length;
      }
      for (i2 = offset; i2 < l2; i2 += stride) {
        vec[0] = a2[i2];
        vec[1] = a2[i2 + 1];
        vec[2] = a2[i2 + 2];
        fn(vec, vec, arg);
        a2[i2] = vec[0];
        a2[i2 + 1] = vec[1];
        a2[i2 + 2] = vec[2];
      }
      return a2;
    };
  }();

  // node_modules/gl-matrix/esm/vec4.js
  var vec4_exports = {};
  __export(vec4_exports, {
    add: () => add3,
    ceil: () => ceil2,
    clone: () => clone3,
    copy: () => copy3,
    create: () => create4,
    cross: () => cross2,
    dist: () => dist2,
    distance: () => distance2,
    div: () => div2,
    divide: () => divide2,
    dot: () => dot2,
    equals: () => equals3,
    exactEquals: () => exactEquals3,
    floor: () => floor2,
    forEach: () => forEach2,
    fromValues: () => fromValues3,
    inverse: () => inverse2,
    len: () => len2,
    length: () => length2,
    lerp: () => lerp2,
    max: () => max2,
    min: () => min2,
    mul: () => mul3,
    multiply: () => multiply3,
    negate: () => negate2,
    normalize: () => normalize2,
    random: () => random2,
    round: () => round2,
    scale: () => scale3,
    scaleAndAdd: () => scaleAndAdd2,
    set: () => set3,
    sqrDist: () => sqrDist2,
    sqrLen: () => sqrLen2,
    squaredDistance: () => squaredDistance2,
    squaredLength: () => squaredLength2,
    str: () => str3,
    sub: () => sub3,
    subtract: () => subtract3,
    transformMat4: () => transformMat42,
    transformQuat: () => transformQuat2,
    zero: () => zero2
  });
  function create4() {
    var out = new ARRAY_TYPE(4);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
    }
    return out;
  }
  function clone3(a2) {
    var out = new ARRAY_TYPE(4);
    out[0] = a2[0];
    out[1] = a2[1];
    out[2] = a2[2];
    out[3] = a2[3];
    return out;
  }
  function fromValues3(x, y, z, w) {
    var out = new ARRAY_TYPE(4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  function copy3(out, a2) {
    out[0] = a2[0];
    out[1] = a2[1];
    out[2] = a2[2];
    out[3] = a2[3];
    return out;
  }
  function set3(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
  }
  function add3(out, a2, b) {
    out[0] = a2[0] + b[0];
    out[1] = a2[1] + b[1];
    out[2] = a2[2] + b[2];
    out[3] = a2[3] + b[3];
    return out;
  }
  function subtract3(out, a2, b) {
    out[0] = a2[0] - b[0];
    out[1] = a2[1] - b[1];
    out[2] = a2[2] - b[2];
    out[3] = a2[3] - b[3];
    return out;
  }
  function multiply3(out, a2, b) {
    out[0] = a2[0] * b[0];
    out[1] = a2[1] * b[1];
    out[2] = a2[2] * b[2];
    out[3] = a2[3] * b[3];
    return out;
  }
  function divide2(out, a2, b) {
    out[0] = a2[0] / b[0];
    out[1] = a2[1] / b[1];
    out[2] = a2[2] / b[2];
    out[3] = a2[3] / b[3];
    return out;
  }
  function ceil2(out, a2) {
    out[0] = Math.ceil(a2[0]);
    out[1] = Math.ceil(a2[1]);
    out[2] = Math.ceil(a2[2]);
    out[3] = Math.ceil(a2[3]);
    return out;
  }
  function floor2(out, a2) {
    out[0] = Math.floor(a2[0]);
    out[1] = Math.floor(a2[1]);
    out[2] = Math.floor(a2[2]);
    out[3] = Math.floor(a2[3]);
    return out;
  }
  function min2(out, a2, b) {
    out[0] = Math.min(a2[0], b[0]);
    out[1] = Math.min(a2[1], b[1]);
    out[2] = Math.min(a2[2], b[2]);
    out[3] = Math.min(a2[3], b[3]);
    return out;
  }
  function max2(out, a2, b) {
    out[0] = Math.max(a2[0], b[0]);
    out[1] = Math.max(a2[1], b[1]);
    out[2] = Math.max(a2[2], b[2]);
    out[3] = Math.max(a2[3], b[3]);
    return out;
  }
  function round2(out, a2) {
    out[0] = Math.round(a2[0]);
    out[1] = Math.round(a2[1]);
    out[2] = Math.round(a2[2]);
    out[3] = Math.round(a2[3]);
    return out;
  }
  function scale3(out, a2, b) {
    out[0] = a2[0] * b;
    out[1] = a2[1] * b;
    out[2] = a2[2] * b;
    out[3] = a2[3] * b;
    return out;
  }
  function scaleAndAdd2(out, a2, b, scale6) {
    out[0] = a2[0] + b[0] * scale6;
    out[1] = a2[1] + b[1] * scale6;
    out[2] = a2[2] + b[2] * scale6;
    out[3] = a2[3] + b[3] * scale6;
    return out;
  }
  function distance2(a2, b) {
    var x = b[0] - a2[0];
    var y = b[1] - a2[1];
    var z = b[2] - a2[2];
    var w = b[3] - a2[3];
    return Math.hypot(x, y, z, w);
  }
  function squaredDistance2(a2, b) {
    var x = b[0] - a2[0];
    var y = b[1] - a2[1];
    var z = b[2] - a2[2];
    var w = b[3] - a2[3];
    return x * x + y * y + z * z + w * w;
  }
  function length2(a2) {
    var x = a2[0];
    var y = a2[1];
    var z = a2[2];
    var w = a2[3];
    return Math.hypot(x, y, z, w);
  }
  function squaredLength2(a2) {
    var x = a2[0];
    var y = a2[1];
    var z = a2[2];
    var w = a2[3];
    return x * x + y * y + z * z + w * w;
  }
  function negate2(out, a2) {
    out[0] = -a2[0];
    out[1] = -a2[1];
    out[2] = -a2[2];
    out[3] = -a2[3];
    return out;
  }
  function inverse2(out, a2) {
    out[0] = 1 / a2[0];
    out[1] = 1 / a2[1];
    out[2] = 1 / a2[2];
    out[3] = 1 / a2[3];
    return out;
  }
  function normalize2(out, a2) {
    var x = a2[0];
    var y = a2[1];
    var z = a2[2];
    var w = a2[3];
    var len5 = x * x + y * y + z * z + w * w;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
    }
    out[0] = x * len5;
    out[1] = y * len5;
    out[2] = z * len5;
    out[3] = w * len5;
    return out;
  }
  function dot2(a2, b) {
    return a2[0] * b[0] + a2[1] * b[1] + a2[2] * b[2] + a2[3] * b[3];
  }
  function cross2(out, u, v2, w) {
    var A = v2[0] * w[1] - v2[1] * w[0], B = v2[0] * w[2] - v2[2] * w[0], C = v2[0] * w[3] - v2[3] * w[0], D = v2[1] * w[2] - v2[2] * w[1], E = v2[1] * w[3] - v2[3] * w[1], F = v2[2] * w[3] - v2[3] * w[2];
    var G = u[0];
    var H = u[1];
    var I = u[2];
    var J = u[3];
    out[0] = H * F - I * E + J * D;
    out[1] = -(G * F) + I * C - J * B;
    out[2] = G * E - H * C + J * A;
    out[3] = -(G * D) + H * B - I * A;
    return out;
  }
  function lerp2(out, a2, b, t) {
    var ax = a2[0];
    var ay = a2[1];
    var az = a2[2];
    var aw = a2[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
  }
  function random2(out, scale6) {
    scale6 = scale6 || 1;
    var v1, v2, v3, v4;
    var s1, s2;
    do {
      v1 = RANDOM() * 2 - 1;
      v2 = RANDOM() * 2 - 1;
      s1 = v1 * v1 + v2 * v2;
    } while (s1 >= 1);
    do {
      v3 = RANDOM() * 2 - 1;
      v4 = RANDOM() * 2 - 1;
      s2 = v3 * v3 + v4 * v4;
    } while (s2 >= 1);
    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale6 * v1;
    out[1] = scale6 * v2;
    out[2] = scale6 * v3 * d;
    out[3] = scale6 * v4 * d;
    return out;
  }
  function transformMat42(out, a2, m) {
    var x = a2[0], y = a2[1], z = a2[2], w = a2[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
  }
  function transformQuat2(out, a2, q) {
    var x = a2[0], y = a2[1], z = a2[2];
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var ix = qw * x + qy * z - qz * y;
    var iy = qw * y + qz * x - qx * z;
    var iz = qw * z + qx * y - qy * x;
    var iw = -qx * x - qy * y - qz * z;
    out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    out[3] = a2[3];
    return out;
  }
  function zero2(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    return out;
  }
  function str3(a2) {
    return "vec4(" + a2[0] + ", " + a2[1] + ", " + a2[2] + ", " + a2[3] + ")";
  }
  function exactEquals3(a2, b) {
    return a2[0] === b[0] && a2[1] === b[1] && a2[2] === b[2] && a2[3] === b[3];
  }
  function equals3(a2, b) {
    var a0 = a2[0], a1 = a2[1], a22 = a2[2], a3 = a2[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a22 - b2) <= EPSILON * Math.max(1, Math.abs(a22), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
  }
  var sub3 = subtract3;
  var mul3 = multiply3;
  var div2 = divide2;
  var dist2 = distance2;
  var sqrDist2 = squaredDistance2;
  var len2 = length2;
  var sqrLen2 = squaredLength2;
  var forEach2 = function() {
    var vec = create4();
    return function(a2, stride, offset, count, fn, arg) {
      var i2, l2;
      if (!stride) {
        stride = 4;
      }
      if (!offset) {
        offset = 0;
      }
      if (count) {
        l2 = Math.min(count * stride + offset, a2.length);
      } else {
        l2 = a2.length;
      }
      for (i2 = offset; i2 < l2; i2 += stride) {
        vec[0] = a2[i2];
        vec[1] = a2[i2 + 1];
        vec[2] = a2[i2 + 2];
        vec[3] = a2[i2 + 3];
        fn(vec, vec, arg);
        a2[i2] = vec[0];
        a2[i2 + 1] = vec[1];
        a2[i2 + 2] = vec[2];
        a2[i2 + 3] = vec[3];
      }
      return a2;
    };
  }();

  // node_modules/gl-matrix/esm/quat.js
  function create5() {
    var out = new ARRAY_TYPE(4);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
    }
    out[3] = 1;
    return out;
  }
  function identity2(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
  }
  function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
  }
  function getAxisAngle(out_axis, q) {
    var rad = Math.acos(q[3]) * 2;
    var s = Math.sin(rad / 2);
    if (s > EPSILON) {
      out_axis[0] = q[0] / s;
      out_axis[1] = q[1] / s;
      out_axis[2] = q[2] / s;
    } else {
      out_axis[0] = 1;
      out_axis[1] = 0;
      out_axis[2] = 0;
    }
    return rad;
  }
  function getAngle(a2, b) {
    var dotproduct = dot3(a2, b);
    return Math.acos(2 * dotproduct * dotproduct - 1);
  }
  function multiply4(out, a2, b) {
    var ax = a2[0], ay = a2[1], az = a2[2], aw = a2[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
  }
  function rotateX3(out, a2, rad) {
    rad *= 0.5;
    var ax = a2[0], ay = a2[1], az = a2[2], aw = a2[3];
    var bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
  }
  function rotateY3(out, a2, rad) {
    rad *= 0.5;
    var ax = a2[0], ay = a2[1], az = a2[2], aw = a2[3];
    var by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
  }
  function rotateZ3(out, a2, rad) {
    rad *= 0.5;
    var ax = a2[0], ay = a2[1], az = a2[2], aw = a2[3];
    var bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
  }
  function calculateW(out, a2) {
    var x = a2[0], y = a2[1], z = a2[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
    return out;
  }
  function exp(out, a2) {
    var x = a2[0], y = a2[1], z = a2[2], w = a2[3];
    var r2 = Math.sqrt(x * x + y * y + z * z);
    var et = Math.exp(w);
    var s = r2 > 0 ? et * Math.sin(r2) / r2 : 0;
    out[0] = x * s;
    out[1] = y * s;
    out[2] = z * s;
    out[3] = et * Math.cos(r2);
    return out;
  }
  function ln(out, a2) {
    var x = a2[0], y = a2[1], z = a2[2], w = a2[3];
    var r2 = Math.sqrt(x * x + y * y + z * z);
    var t = r2 > 0 ? Math.atan2(r2, w) / r2 : 0;
    out[0] = x * t;
    out[1] = y * t;
    out[2] = z * t;
    out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
    return out;
  }
  function pow(out, a2, b) {
    ln(out, a2);
    scale4(out, out, b);
    exp(out, out);
    return out;
  }
  function slerp(out, a2, b, t) {
    var ax = a2[0], ay = a2[1], az = a2[2], aw = a2[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    var omega, cosom, sinom, scale0, scale1;
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    if (cosom < 0) {
      cosom = -cosom;
      bx = -bx;
      by = -by;
      bz = -bz;
      bw = -bw;
    }
    if (1 - cosom > EPSILON) {
      omega = Math.acos(cosom);
      sinom = Math.sin(omega);
      scale0 = Math.sin((1 - t) * omega) / sinom;
      scale1 = Math.sin(t * omega) / sinom;
    } else {
      scale0 = 1 - t;
      scale1 = t;
    }
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
  }
  function random3(out) {
    var u1 = RANDOM();
    var u2 = RANDOM();
    var u3 = RANDOM();
    var sqrt1MinusU1 = Math.sqrt(1 - u1);
    var sqrtU1 = Math.sqrt(u1);
    out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
    out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
    out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
    out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
    return out;
  }
  function invert2(out, a2) {
    var a0 = a2[0], a1 = a2[1], a22 = a2[2], a3 = a2[3];
    var dot5 = a0 * a0 + a1 * a1 + a22 * a22 + a3 * a3;
    var invDot = dot5 ? 1 / dot5 : 0;
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a22 * invDot;
    out[3] = a3 * invDot;
    return out;
  }
  function conjugate(out, a2) {
    out[0] = -a2[0];
    out[1] = -a2[1];
    out[2] = -a2[2];
    out[3] = a2[3];
    return out;
  }
  function fromMat3(out, m) {
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;
    if (fTrace > 0) {
      fRoot = Math.sqrt(fTrace + 1);
      out[3] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[0] = (m[5] - m[7]) * fRoot;
      out[1] = (m[6] - m[2]) * fRoot;
      out[2] = (m[1] - m[3]) * fRoot;
    } else {
      var i2 = 0;
      if (m[4] > m[0])
        i2 = 1;
      if (m[8] > m[i2 * 3 + i2])
        i2 = 2;
      var j = (i2 + 1) % 3;
      var k = (i2 + 2) % 3;
      fRoot = Math.sqrt(m[i2 * 3 + i2] - m[j * 3 + j] - m[k * 3 + k] + 1);
      out[i2] = 0.5 * fRoot;
      fRoot = 0.5 / fRoot;
      out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
      out[j] = (m[j * 3 + i2] + m[i2 * 3 + j]) * fRoot;
      out[k] = (m[k * 3 + i2] + m[i2 * 3 + k]) * fRoot;
    }
    return out;
  }
  function fromEuler(out, x, y, z) {
    var halfToRad = 0.5 * Math.PI / 180;
    x *= halfToRad;
    y *= halfToRad;
    z *= halfToRad;
    var sx = Math.sin(x);
    var cx = Math.cos(x);
    var sy = Math.sin(y);
    var cy = Math.cos(y);
    var sz = Math.sin(z);
    var cz = Math.cos(z);
    out[0] = sx * cy * cz - cx * sy * sz;
    out[1] = cx * sy * cz + sx * cy * sz;
    out[2] = cx * cy * sz - sx * sy * cz;
    out[3] = cx * cy * cz + sx * sy * sz;
    return out;
  }
  function str4(a2) {
    return "quat(" + a2[0] + ", " + a2[1] + ", " + a2[2] + ", " + a2[3] + ")";
  }
  var clone4 = clone3;
  var fromValues4 = fromValues3;
  var copy4 = copy3;
  var set4 = set3;
  var add4 = add3;
  var mul4 = multiply4;
  var scale4 = scale3;
  var dot3 = dot2;
  var lerp3 = lerp2;
  var length3 = length2;
  var len3 = length3;
  var squaredLength3 = squaredLength2;
  var sqrLen3 = squaredLength3;
  var normalize3 = normalize2;
  var exactEquals4 = exactEquals3;
  var equals4 = equals3;
  var rotationTo = function() {
    var tmpvec3 = create3();
    var xUnitVec3 = fromValues2(1, 0, 0);
    var yUnitVec3 = fromValues2(0, 1, 0);
    return function(out, a2, b) {
      var dot5 = dot(a2, b);
      if (dot5 < -0.999999) {
        cross(tmpvec3, xUnitVec3, a2);
        if (len(tmpvec3) < 1e-6)
          cross(tmpvec3, yUnitVec3, a2);
        normalize(tmpvec3, tmpvec3);
        setAxisAngle(out, tmpvec3, Math.PI);
        return out;
      } else if (dot5 > 0.999999) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      } else {
        cross(tmpvec3, a2, b);
        out[0] = tmpvec3[0];
        out[1] = tmpvec3[1];
        out[2] = tmpvec3[2];
        out[3] = 1 + dot5;
        return normalize3(out, out);
      }
    };
  }();
  var sqlerp = function() {
    var temp1 = create5();
    var temp2 = create5();
    return function(out, a2, b, c, d, t) {
      slerp(temp1, a2, d, t);
      slerp(temp2, b, c, t);
      slerp(out, temp1, temp2, 2 * t * (1 - t));
      return out;
    };
  }();
  var setAxes = function() {
    var matr = create();
    return function(out, view, right, up) {
      matr[0] = right[0];
      matr[3] = right[1];
      matr[6] = right[2];
      matr[1] = up[0];
      matr[4] = up[1];
      matr[7] = up[2];
      matr[2] = -view[0];
      matr[5] = -view[1];
      matr[8] = -view[2];
      return normalize3(out, fromMat3(out, matr));
    };
  }();

  // node_modules/gl-matrix/esm/vec2.js
  var vec2_exports = {};
  __export(vec2_exports, {
    add: () => add5,
    angle: () => angle2,
    ceil: () => ceil3,
    clone: () => clone5,
    copy: () => copy5,
    create: () => create6,
    cross: () => cross3,
    dist: () => dist3,
    distance: () => distance3,
    div: () => div3,
    divide: () => divide3,
    dot: () => dot4,
    equals: () => equals5,
    exactEquals: () => exactEquals5,
    floor: () => floor3,
    forEach: () => forEach3,
    fromValues: () => fromValues5,
    inverse: () => inverse3,
    len: () => len4,
    length: () => length4,
    lerp: () => lerp4,
    max: () => max3,
    min: () => min3,
    mul: () => mul5,
    multiply: () => multiply5,
    negate: () => negate3,
    normalize: () => normalize4,
    random: () => random4,
    rotate: () => rotate2,
    round: () => round3,
    scale: () => scale5,
    scaleAndAdd: () => scaleAndAdd3,
    set: () => set5,
    sqrDist: () => sqrDist3,
    sqrLen: () => sqrLen4,
    squaredDistance: () => squaredDistance3,
    squaredLength: () => squaredLength4,
    str: () => str5,
    sub: () => sub4,
    subtract: () => subtract4,
    transformMat2: () => transformMat2,
    transformMat2d: () => transformMat2d,
    transformMat3: () => transformMat32,
    transformMat4: () => transformMat43,
    zero: () => zero3
  });
  function create6() {
    var out = new ARRAY_TYPE(2);
    if (ARRAY_TYPE != Float32Array) {
      out[0] = 0;
      out[1] = 0;
    }
    return out;
  }
  function clone5(a2) {
    var out = new ARRAY_TYPE(2);
    out[0] = a2[0];
    out[1] = a2[1];
    return out;
  }
  function fromValues5(x, y) {
    var out = new ARRAY_TYPE(2);
    out[0] = x;
    out[1] = y;
    return out;
  }
  function copy5(out, a2) {
    out[0] = a2[0];
    out[1] = a2[1];
    return out;
  }
  function set5(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
  }
  function add5(out, a2, b) {
    out[0] = a2[0] + b[0];
    out[1] = a2[1] + b[1];
    return out;
  }
  function subtract4(out, a2, b) {
    out[0] = a2[0] - b[0];
    out[1] = a2[1] - b[1];
    return out;
  }
  function multiply5(out, a2, b) {
    out[0] = a2[0] * b[0];
    out[1] = a2[1] * b[1];
    return out;
  }
  function divide3(out, a2, b) {
    out[0] = a2[0] / b[0];
    out[1] = a2[1] / b[1];
    return out;
  }
  function ceil3(out, a2) {
    out[0] = Math.ceil(a2[0]);
    out[1] = Math.ceil(a2[1]);
    return out;
  }
  function floor3(out, a2) {
    out[0] = Math.floor(a2[0]);
    out[1] = Math.floor(a2[1]);
    return out;
  }
  function min3(out, a2, b) {
    out[0] = Math.min(a2[0], b[0]);
    out[1] = Math.min(a2[1], b[1]);
    return out;
  }
  function max3(out, a2, b) {
    out[0] = Math.max(a2[0], b[0]);
    out[1] = Math.max(a2[1], b[1]);
    return out;
  }
  function round3(out, a2) {
    out[0] = Math.round(a2[0]);
    out[1] = Math.round(a2[1]);
    return out;
  }
  function scale5(out, a2, b) {
    out[0] = a2[0] * b;
    out[1] = a2[1] * b;
    return out;
  }
  function scaleAndAdd3(out, a2, b, scale6) {
    out[0] = a2[0] + b[0] * scale6;
    out[1] = a2[1] + b[1] * scale6;
    return out;
  }
  function distance3(a2, b) {
    var x = b[0] - a2[0], y = b[1] - a2[1];
    return Math.hypot(x, y);
  }
  function squaredDistance3(a2, b) {
    var x = b[0] - a2[0], y = b[1] - a2[1];
    return x * x + y * y;
  }
  function length4(a2) {
    var x = a2[0], y = a2[1];
    return Math.hypot(x, y);
  }
  function squaredLength4(a2) {
    var x = a2[0], y = a2[1];
    return x * x + y * y;
  }
  function negate3(out, a2) {
    out[0] = -a2[0];
    out[1] = -a2[1];
    return out;
  }
  function inverse3(out, a2) {
    out[0] = 1 / a2[0];
    out[1] = 1 / a2[1];
    return out;
  }
  function normalize4(out, a2) {
    var x = a2[0], y = a2[1];
    var len5 = x * x + y * y;
    if (len5 > 0) {
      len5 = 1 / Math.sqrt(len5);
    }
    out[0] = a2[0] * len5;
    out[1] = a2[1] * len5;
    return out;
  }
  function dot4(a2, b) {
    return a2[0] * b[0] + a2[1] * b[1];
  }
  function cross3(out, a2, b) {
    var z = a2[0] * b[1] - a2[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
  }
  function lerp4(out, a2, b, t) {
    var ax = a2[0], ay = a2[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
  }
  function random4(out, scale6) {
    scale6 = scale6 || 1;
    var r2 = RANDOM() * 2 * Math.PI;
    out[0] = Math.cos(r2) * scale6;
    out[1] = Math.sin(r2) * scale6;
    return out;
  }
  function transformMat2(out, a2, m) {
    var x = a2[0], y = a2[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
  }
  function transformMat2d(out, a2, m) {
    var x = a2[0], y = a2[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
  }
  function transformMat32(out, a2, m) {
    var x = a2[0], y = a2[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
  }
  function transformMat43(out, a2, m) {
    var x = a2[0];
    var y = a2[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
  }
  function rotate2(out, a2, b, rad) {
    var p0 = a2[0] - b[0], p1 = a2[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
    out[0] = p0 * cosC - p1 * sinC + b[0];
    out[1] = p0 * sinC + p1 * cosC + b[1];
    return out;
  }
  function angle2(a2, b) {
    var x1 = a2[0], y1 = a2[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
  }
  function zero3(out) {
    out[0] = 0;
    out[1] = 0;
    return out;
  }
  function str5(a2) {
    return "vec2(" + a2[0] + ", " + a2[1] + ")";
  }
  function exactEquals5(a2, b) {
    return a2[0] === b[0] && a2[1] === b[1];
  }
  function equals5(a2, b) {
    var a0 = a2[0], a1 = a2[1];
    var b0 = b[0], b1 = b[1];
    return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
  }
  var len4 = length4;
  var sub4 = subtract4;
  var mul5 = multiply5;
  var div3 = divide3;
  var dist3 = distance3;
  var sqrDist3 = squaredDistance3;
  var sqrLen4 = squaredLength4;
  var forEach3 = function() {
    var vec = create6();
    return function(a2, stride, offset, count, fn, arg) {
      var i2, l2;
      if (!stride) {
        stride = 2;
      }
      if (!offset) {
        offset = 0;
      }
      if (count) {
        l2 = Math.min(count * stride + offset, a2.length);
      } else {
        l2 = a2.length;
      }
      for (i2 = offset; i2 < l2; i2 += stride) {
        vec[0] = a2[i2];
        vec[1] = a2[i2 + 1];
        fn(vec, vec, arg);
        a2[i2] = vec[0];
        a2[i2 + 1] = vec[1];
      }
      return a2;
    };
  }();

  // node_modules/zogra-renderer/dist/types/utils.js
  function wrapGlMatrix(func, argCount, allocator) {
    return (...args) => {
      if (args.length <= argCount) {
        const out = allocator();
        return func(out, ...args);
      } else {
        let [out, ...rest] = args;
        if (out === void 0)
          out = allocator();
        return func(out, ...rest);
      }
    };
  }
  var DAMP_EPSLON = 0.01;
  var DAMP_DURATION = -Math.log(DAMP_EPSLON);

  // node_modules/zogra-renderer/dist/types/vec3.js
  var V3Constructor = Array;
  var Vector3 = class extends V3Constructor {
    get x() {
      return this[0];
    }
    set x(x) {
      this[0] = x;
    }
    get y() {
      return this[1];
    }
    set y(y) {
      this[1] = y;
    }
    get z() {
      return this[2];
    }
    set z(z) {
      this[2] = z;
    }
    get magnitude() {
      return Math.hypot(...this);
    }
    get magnitudeSqr() {
      return this[0] * this[0] + this[1] * this[1] + this[2] * this[2];
    }
    get normalized() {
      const m = this.magnitude;
      return m == 0 ? vec32.zero() : this.clone().div(vec32(m, m, m));
    }
    get negative() {
      return this.clone().negate();
    }
    get inversed() {
      return this.clone().inverse();
    }
    constructor(x, y, z) {
      super(x, y, z);
    }
    static zero() {
      return new Vector3(0, 0, 0);
    }
    static one() {
      return new Vector3(1, 1, 1);
    }
    asMut() {
      return this;
    }
    plus(v2) {
      return vec32.plus(this, this, v2);
    }
    minus(v2) {
      return vec32.minus(this, this, v2);
    }
    mul(v2) {
      return vec32.mul(this, this, v2);
    }
    div(v2) {
      return vec32.div(this, this, v2);
    }
    dot(v2) {
      return this[0] * v2[0] + this[1] * v2[1] + this[2] * v2[2];
    }
    normalize() {
      return vec32.normalize(this, this);
    }
    inverse() {
      this[0] = 1 / this[0];
      this[1] = 1 / this[1];
      this[2] = 1 / this[2];
      return this;
    }
    negate() {
      this[0] = -this[0];
      this[1] = -this[1];
      this[2] = -this[2];
      return this;
    }
    cross(b) {
      return vec32(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x);
    }
    set(v2) {
      this[0] = v2[0] || 0;
      this[1] = v2[1] || 0;
      this[2] = v2[2] || 0;
      return this;
    }
    fill(n2) {
      this[0] = this[1] = this[2] = n2;
      return this;
    }
    clone(out = vec32.zero()) {
      return out.set(this);
    }
    setX(x) {
      this[0] = x;
      return this;
    }
    setY(y) {
      this[1] = y;
      return this;
    }
    setZ(z) {
      this[2] = z;
      return this;
    }
    toVec2() {
      return vec2(this[0], this[1]);
    }
    toVec4(w = 0) {
      return vec42(this[0], this[1], this[2], w);
    }
    equals(v2) {
      if (v2 === void 0)
        return false;
      return v2[0] === this[0] && v2[1] === this[1] && v2[2] === this[2];
    }
    static math(func) {
      return (...args) => {
        return vec32(func(...args.map((v2) => v2.x)), func(...args.map((v2) => v2.y)), func(...args.map((v2) => v2.z)));
      };
    }
    static mathNonAlloc(func, out, ...args) {
      out[0] = func(...args.map((v2) => v2[0]));
      out[1] = func(...args.map((v2) => v2[1]));
      out[2] = func(...args.map((v2) => v2[2]));
      return out;
    }
    __to(type) {
      switch (type) {
        case Vector4:
          return vec42(this[0], this[1], this[2], 0);
        case Vector2:
          return vec2(this[0], this[1]);
      }
      return this.clone();
    }
  };
  function vec32(x, y = x, z = x) {
    return new Vector3(x, y, z);
  }
  vec32.from = (src) => {
    const [x = 0, y = 0, z = 0] = src;
    return vec32(x, y, z);
  };
  vec32.zero = Vector3.zero;
  vec32.one = Vector3.one;
  vec32.math = Vector3.math;
  vec32.normalize = wrapGlMatrix(vec3_exports.normalize, 1, vec32.zero);
  vec32.inverse = wrapGlMatrix(vec3_exports.inverse, 1, vec32.zero);
  vec32.negate = wrapGlMatrix(vec3_exports.negate, 1, vec32.zero);
  vec32.plus = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] + b;
      out[1] = a2[1] + b;
      out[2] = a2[2] + b;
    } else {
      out[0] = a2[0] + b[0];
      out[1] = a2[1] + (b[1] || 0);
      out[2] = a2[2] + (b[2] || 0);
    }
    return out;
  }, 2, vec32.zero);
  vec32.minus = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] - b;
      out[1] = a2[1] - b;
      out[2] = a2[2] - b;
    } else {
      out[0] = a2[0] - b[0];
      out[1] = a2[1] - (b[1] || 0);
      out[2] = a2[2] - (b[2] || 0);
    }
    return out;
  }, 2, vec32.zero);
  vec32.mul = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] * b;
      out[1] = a2[1] * b;
      out[2] = a2[2] * b;
    } else {
      out[0] = a2[0] * b[0];
      out[1] = a2[1] * (b[1] === void 0 ? 1 : b[1]);
      out[2] = a2[2] * (b[2] === void 0 ? 1 : b[2]);
    }
    return out;
  }, 2, vec32.zero);
  vec32.div = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] / b;
      out[1] = a2[1] / b;
      out[2] = a2[2] / b;
    } else {
      out[0] = a2[0] / b[0];
      out[1] = a2[1] / (b[1] === void 0 ? 1 : b[1]);
      out[2] = a2[2] / (b[2] === void 0 ? 1 : b[2]);
    }
    return out;
  }, 2, vec32.zero);
  vec32.set = wrapGlMatrix((out, v2) => {
    out[0] = v2[0];
    out[1] = v2[1];
    out[2] = v2[2];
    return out;
  }, 1, vec32.zero);
  vec32.fill = wrapGlMatrix((out, n2) => {
    out[0] = out[1] = out[2] = n2;
    return out;
  }, 1, vec32.zero);
  vec32.distance = (u, v2) => Math.hypot(u.x - v2.x, u.y - v2.y, u.z - v2.z);

  // node_modules/zogra-renderer/dist/types/vec4.js
  var V4Constructor = Array;
  var Vector4 = class extends V4Constructor {
    get x() {
      return this[0];
    }
    set x(x) {
      this[0] = x;
    }
    get y() {
      return this[1];
    }
    set y(y) {
      this[1] = y;
    }
    get z() {
      return this[2];
    }
    set z(z) {
      this[2] = z;
    }
    get w() {
      return this[3];
    }
    set w(w) {
      this[3] = w;
    }
    get magnitude() {
      return Math.hypot(...this);
    }
    get normalized() {
      const m = this.magnitude;
      return m == 0 ? vec42.zero() : this.clone().div(vec42(m, m, m, m));
    }
    get negative() {
      return this.clone().negate();
    }
    get inversed() {
      return this.clone().inverse();
    }
    constructor(x, y, z = 0, w = 0) {
      super(x, y, z || 0, w || 0);
    }
    static zero() {
      return new Vector4(0, 0, 0, 0);
    }
    static one() {
      return new Vector4(1, 1, 1, 1);
    }
    asMut() {
      return this;
    }
    plus(v2) {
      return vec42.plus(this, this, v2);
    }
    minus(v2) {
      return vec42.minus(this, this, v2);
    }
    mul(v2) {
      return vec42.mul(this, this, v2);
    }
    div(v2) {
      return vec42.div(this, this, v2);
    }
    dot(v2) {
      return this[0] * v2[0] + this[1] * v2[1] + this[2] * v2[2] + this[3] * v2[3];
    }
    normalize() {
      return vec42.normalize(this, this);
    }
    inverse() {
      this[0] = 1 / this[0];
      this[1] = 1 / this[1];
      this[2] = 1 / this[2];
      this[3] = 1 / this[3];
      return this;
    }
    negate() {
      this[0] = -this[0];
      this[1] = -this[1];
      this[2] = -this[2];
      this[3] = -this[3];
      return this;
    }
    clone(out = vec42.zero()) {
      return out.set(this);
    }
    equals(v2) {
      if (v2 === void 0)
        return false;
      return v2[0] === this[0] && v2[1] === this[1] && v2[2] === this[2] && v2[3] === this[3];
    }
    set(v2) {
      this[0] = v2[0] || 0;
      this[1] = v2[1] || 0;
      this[2] = v2[2] || 0;
      this[3] = v2[3] || 0;
      return this;
    }
    fill(n2) {
      this[0] = this[1] = this[2] = this[3] = n2;
      return this;
    }
    static math(func) {
      return (...args) => {
        return vec42(func(...args.map((v2) => v2.x)), func(...args.map((v2) => v2.y)), func(...args.map((v2) => v2.z)), func(...args.map((v2) => v2.w)));
      };
    }
    static mathNonAlloc(func) {
      return (out, ...args) => {
        out[0] = func(...args.map((v2) => v2[0]));
        out[1] = func(...args.map((v2) => v2[1]));
        out[2] = func(...args.map((v2) => v2[2]));
        out[3] = func(...args.map((v2) => v2[3]));
        return out;
      };
    }
    __to(type) {
      switch (type) {
        case Vector4:
          return this.clone();
        case Vector3:
          return vec32(this[0], this[1], this[2]);
        case Vector2:
          return vec2(this[0], this[1]);
      }
      return this.clone();
    }
  };
  function vec42(x, y = x, z = x, w = x) {
    return new Vector4(x, y, z, w);
  }
  vec42.from = (src) => {
    const [x = 0, y = 0, z = 0, w = 0] = src;
    return vec42(x, y, z, w);
  };
  vec42.floor = (v2) => vec42(Math.floor(v2.x), Math.floor(v2.y), Math.floor(v2.z), Math.floor(v2.w));
  vec42.zero = Vector4.zero;
  vec42.one = Vector4.one;
  vec42.math = Vector4.math;
  vec42.mathNonAlloc = Vector4.mathNonAlloc;
  vec42.normalize = wrapGlMatrix(vec4_exports.normalize, 1, vec42.zero);
  vec42.plus = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] + b;
      out[1] = a2[1] + b;
      out[2] = a2[2] + b;
      out[3] = a2[3] + b;
    } else {
      out[0] = a2[0] + b[0];
      out[1] = a2[1] + (b[1] || 0);
      out[2] = a2[2] + (b[2] || 0);
      out[3] = a2[3] + (b[3] || 0);
    }
    return out;
  }, 2, vec42.zero);
  vec42.minus = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] - b;
      out[1] = a2[1] - b;
      out[2] = a2[2] - b;
      out[3] = a2[3] - b;
    } else {
      out[0] = a2[0] - b[0];
      out[1] = a2[1] - (b[1] || 0);
      out[2] = a2[2] - (b[2] || 0);
      out[3] = a2[3] - (b[3] || 0);
    }
    return out;
  }, 2, vec42.zero);
  vec42.mul = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] * b;
      out[1] = a2[1] * b;
      out[2] = a2[2] * b;
      out[3] = a2[3] * b;
    } else {
      out[0] = a2[0] * b[0];
      out[1] = a2[1] * (b[1] === void 0 ? 1 : b[1]);
      out[2] = a2[2] * (b[2] === void 0 ? 1 : b[2]);
      out[3] = a2[3] * (b[3] === void 0 ? 1 : b[3]);
    }
    return out;
  }, 2, vec42.zero);
  vec42.div = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] / b;
      out[1] = a2[1] / b;
      out[2] = a2[2] / b;
      out[3] = a2[3] / b;
    } else {
      out[0] = a2[0] / b[0];
      out[1] = a2[1] / (b[1] === void 0 ? 1 : b[1]);
      out[2] = a2[2] / (b[2] === void 0 ? 1 : b[2]);
      out[3] = a2[3] / (b[3] === void 0 ? 1 : b[3]);
    }
    return out;
  }, 2, vec42.zero);
  vec42.set = wrapGlMatrix((out, v2) => {
    out[0] = v2[0];
    out[1] = v2[1];
    out[2] = v2[2];
    out[3] = v2[3];
    return out;
  }, 1, vec42.zero);
  vec42.fill = wrapGlMatrix((out, n2) => {
    out[0] = out[1] = out[2] = out[3] = n2;
    return out;
  }, 1, vec42.zero);

  // node_modules/zogra-renderer/dist/types/vec2.js
  var V2Constructor = Array;
  var Vector2 = class extends V2Constructor {
    get x() {
      return this[0];
    }
    set x(x) {
      this[0] = x;
    }
    get y() {
      return this[1];
    }
    set y(y) {
      this[1] = y;
    }
    get magnitude() {
      return Math.hypot(...this);
    }
    get magnitudeSqr() {
      return this[0] * this[0] + this[1] * this[1];
    }
    get normalized() {
      const m = this.magnitude;
      return m == 0 ? vec2.zero() : this.clone().div(vec2(m, m));
    }
    get negative() {
      return this.clone().negate();
    }
    get inversed() {
      return this.clone().inverse();
    }
    get isZero() {
      return this.x === 0 && this.y === 0;
    }
    constructor(x, y) {
      super(x, y);
    }
    static zero() {
      return new Vector2(0, 0);
    }
    static one() {
      return new Vector2(1, 1);
    }
    static up() {
      return new Vector2(0, 1);
    }
    static down() {
      return new Vector2(0, -1);
    }
    static left() {
      return new Vector2(-1, 0);
    }
    static right() {
      return new Vector2(1, 0);
    }
    static distance(u, v2) {
      return Math.sqrt((u.x - v2.x) * (u.x - v2.x) + (u.y - v2.y) * (u.y - v2.y));
    }
    static distanceSquared(u, v2) {
      return (u.x - v2.x) * (u.x - v2.x) + (u.y - v2.y) * (u.y - v2.y);
    }
    static math(func) {
      return (...args) => {
        return vec2(func(...args.map((v2) => v2.x)), func(...args.map((v2) => v2.y)));
      };
    }
    asMut() {
      return this;
    }
    plus(v2) {
      return vec2.plus(this, this, v2);
    }
    minus(v2) {
      return vec2.minus(this, this, v2);
    }
    mul(v2) {
      return vec2.mul(this, this, v2);
    }
    div(v2) {
      return vec2.div(this, this, v2);
    }
    dot(v2) {
      return this[0] * v2[0] + this[1] * v2[1];
    }
    normalize() {
      return vec2.normalize(this, this);
    }
    inverse() {
      this[0] = 1 / this[0];
      this[1] = 1 / this[1];
      return this;
    }
    negate() {
      this[0] = -this[0];
      this[1] = -this[1];
      return this;
    }
    oneMinus() {
      this[0] = 1 - this[0];
      this[1] = 1 - this[1];
      return this;
    }
    equals(v2) {
      if (v2 === void 0)
        return false;
      return v2[0] === this[0] && v2[1] === this[1];
    }
    clone(out = vec2.zero()) {
      return out.set(this);
    }
    set(v2) {
      this[0] = v2[0] || 0;
      this[1] = v2[1] || 0;
      return this;
    }
    fill(n2) {
      this[0] = this[1] = n2;
      return this;
    }
    toVec3(z = 0) {
      return vec32(this[0], this[1], z);
    }
    __to(type) {
      switch (type) {
        case Vector4:
          return vec42(this[0], this[1], 0, 0);
        case Vector3:
          return vec32(this[0], this[1], 0);
      }
      return this.clone();
    }
  };
  function vec2(x, y = x) {
    return new Vector2(x, y);
  }
  vec2.from = (src) => {
    const [x = 0, y = 0] = src;
    return vec2(x, y);
  };
  vec2.floor = (v2) => vec2(Math.floor(v2.x), Math.floor(v2.y));
  vec2.zero = Vector2.zero;
  vec2.one = Vector2.one;
  vec2.left = Vector2.left;
  vec2.right = Vector2.right;
  vec2.down = Vector2.down;
  vec2.up = Vector2.up;
  vec2.math = Vector2.math;
  vec2.plus = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] + b;
      out[1] = a2[1] + b;
    } else {
      out[0] = a2[0] + b[0];
      out[1] = a2[1] + (b[1] || 0);
    }
    return out;
  }, 2, vec2.zero);
  vec2.minus = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] - b;
      out[1] = a2[1] - b;
    } else {
      out[0] = a2[0] - b[0];
      out[1] = a2[1] - (b[1] || 0);
    }
    return out;
  }, 2, vec2.zero);
  vec2.mul = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] * b;
      out[1] = a2[1] * b;
    } else {
      out[0] = a2[0] * b[0];
      out[1] = a2[1] * b[1];
    }
    return out;
  }, 2, vec2.zero);
  vec2.div = wrapGlMatrix((out, a2, b) => {
    if (typeof b === "number") {
      out[0] = a2[0] / b;
      out[1] = a2[1] / b;
    } else {
      out[0] = a2[0] / b[0];
      out[1] = a2[1] / b[1];
    }
    return out;
  }, 2, vec2.zero);
  vec2.exp = wrapGlMatrix((out, x) => {
    if (typeof x === "number") {
      out[0] = Math.exp(x);
      out[1] = Math.exp(x);
    } else {
      out[0] = Math.exp(x[0]);
      out[1] = Math.exp(x[1]);
    }
    return out;
  }, 1, vec2.zero);
  vec2.inverse = wrapGlMatrix((out, v2) => {
    out[0] = 1 / v2[0];
    out[1] = 1 / v2[1];
    return out;
  }, 1, vec2.zero);
  vec2.dot = (a2, b) => {
    return a2[0] * b[0] + a2[1] * b[1];
  };
  vec2.cross = (a2, b) => {
    return a2[0] * b[1] - a2[1] * b[0];
  };
  vec2.normalize = wrapGlMatrix(vec2_exports.normalize, 1, vec2.zero);
  vec2.perpendicular = wrapGlMatrix((out, v2) => {
    out[0] = -v2[1];
    out[1] = v2[0];
    return out;
  }, 1, vec2.zero);
  vec2.set = wrapGlMatrix((out, v2) => {
    out[0] = v2[0];
    out[1] = v2[1];
    return out;
  }, 1, vec2.zero);
  vec2.fill = wrapGlMatrix((out, n2) => {
    out[0] = out[1] = n2;
    return out;
  }, 1, vec2.zero);

  // node_modules/zogra-renderer/dist/types/color.js
  var Color = class extends Vector4 {
    get r() {
      return this[0];
    }
    set r(r2) {
      this[0] = r2;
    }
    get g() {
      return this[1];
    }
    set g(g) {
      this[1] = g;
    }
    get b() {
      return this[2];
    }
    set b(b) {
      this[2] = b;
    }
    get a() {
      return this[3];
    }
    set a(a2) {
      this[3] = a2;
    }
    constructor(r2, g, b, a2 = 1) {
      super(r2, g, b, a2);
    }
    static get white() {
      return new Color(1, 1, 1);
    }
    static get transparent() {
      return new Color(1, 1, 1, 0);
    }
    static get black() {
      return new Color(0, 0, 0);
    }
    static get red() {
      return new Color(1, 0, 0);
    }
    static get green() {
      return new Color(0, 1, 0);
    }
    static get blue() {
      return new Color(0, 0, 1);
    }
    static get cyan() {
      return new Color(0, 1, 1);
    }
    static get yellow() {
      return new Color(1, 1, 0);
    }
    static get magenta() {
      return new Color(1, 0, 1);
    }
    static get gray() {
      return new Color(0.5, 0.5, 0.5);
    }
    transparent() {
      return new Color(this.r, this.g, this.b, 0);
    }
    setHSL(h, s, l2) {
      h = h < 0 ? h + 360 : h;
      const chroma = (1 - Math.abs(2 * l2 - 1)) * s;
      if (isNaN(h)) {
        this.r = this.g = this.b = 0;
        return this;
      }
      h = h / 60;
      const x = chroma * (1 - Math.abs(h % 2 - 1));
      let color = [0, 0, 0];
      if (0 <= h && h <= 1)
        color = [chroma, x, 0];
      else if (h <= 2)
        color = [x, chroma, 0];
      else if (h <= 3)
        color = [0, chroma, x];
      else if (h <= 4)
        color = [0, x, chroma];
      else if (h <= 5)
        color = [x, 0, chroma];
      else if (h <= 6)
        color = [chroma, 0, x];
      let m = l2 - chroma / 2;
      this.r = color[0] + m;
      this.g = color[1] + m;
      this.b = color[2] + m;
      return this;
    }
    get hue() {
      const R = this.r;
      const G = this.g;
      const B = this.b;
      const max4 = Math.max(R, G, B);
      const min4 = Math.min(R, G, B);
      let h = 0;
      if (max4 === min4)
        h = 0;
      else if (max4 === R)
        h = 60 * (0 + (G - B) / (max4 - min4));
      else if (max4 === G)
        h = 60 * (2 + (B - R) / (max4 - min4));
      else if (max4 === B)
        h = 60 * (4 + (R - G) / (max4 - min4));
      return h < 0 ? h + 360 : h;
    }
    get saturation() {
      const max4 = Math.max(this.r, this.g, this.b);
      const min4 = Math.min(this.r, this.g, this.b);
      if (max4 === 0)
        return 0;
      else if (min4 == 1)
        return 0;
      return (max4 - min4) / (1 - Math.abs(max4 + min4 - 1));
    }
    get lightness() {
      const max4 = Math.max(this.r, this.g, this.b);
      const min4 = Math.min(this.r, this.g, this.b);
      return (max4 + min4) / 2;
    }
    toHSL() {
      return [this.hue, this.saturation, this.lightness];
    }
    static fromHSL(h, s, l2, alpha = 1) {
      return new Color(0, 0, 0, alpha).setHSL(h, s, l2);
    }
    static fromString(str6, alpha) {
      str6 = str6.replace(new RegExp(/\s/g), "");
      var reg = new RegExp("#[0-9a-fA-F]{6}");
      if (reg.test(str6)) {
        str6 = str6.replace("#", "");
        var strR = str6.charAt(0) + str6.charAt(1);
        var strG = str6.charAt(2) + str6.charAt(3);
        var strB = str6.charAt(4) + str6.charAt(5);
        var r2 = parseInt(strR, 16);
        var g = parseInt(strG, 16);
        var b = parseInt(strB, 16);
        return new Color(r2 / 255, g / 255, b / 255, alpha || 1);
      }
      reg = new RegExp("rgb\\(([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1})\\)");
      if (reg.test(str6)) {
        var colorArray = str6.replace("rgb(", "").replace(")", "").split(",");
        var r2 = parseInt(colorArray[0]);
        var g = parseInt(colorArray[1]);
        var b = parseInt(colorArray[2]);
        var a2 = alpha || 1;
        return new Color(r2 / 255, g / 255, b / 255, a2 / 255);
      }
      reg = new RegExp("rgba\\(([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1}),([0-9]+(\\.[0-9]+){0,1})\\)");
      if (reg.test(str6)) {
        var colorArray = str6.replace("rgba(", "").replace(")", "").split(",");
        var r2 = parseInt(colorArray[0]);
        var g = parseInt(colorArray[1]);
        var b = parseInt(colorArray[2]);
        var a2 = alpha || parseFloat(colorArray[3]);
        return new Color(r2 / 255, g / 255, b / 255, a2);
      }
      throw new Error(`Invalid color string '${str6}'`);
    }
  };
  var hsl = Color.fromHSL;

  // node_modules/zogra-renderer/dist/types/quat.js
  var V4Constructor2 = Array;
  var Quaternion = class extends V4Constructor2 {
    static create() {
      return new Quaternion(0, 0, 0, 0);
    }
    asMut() {
      return this;
    }
    equals(v2) {
      if (!v2 || !(v2 instanceof Array))
        return false;
      return quat_exports.exactEquals(this, v2);
    }
    clone(out = Quaternion.create()) {
      return out.set(this);
    }
    set(value) {
      this[0] = value[0] || 0;
      this[1] = value[1] || 0;
      this[2] = value[2] || 0;
      this[3] = value[3] || 0;
      return this;
    }
    fill(value) {
      this[0] = value;
      this[1] = value;
      this[2] = value;
      this[3] = value;
      return this;
    }
  };
  function quat(x = 0, y = x, z = x, w = x) {
    return new Quaternion(x, y, z, w);
  }
  quat.create = () => {
    return quat(0);
  };
  quat.identity = wrapGlMatrix(quat_exports.identity, 0, quat.create);
  quat.axisAngle = wrapGlMatrix((out, axis, rad) => quat_exports.setAxisAngle(out, axis, rad), 2, quat.create);
  quat.mul = wrapGlMatrix(quat_exports.mul, 2, quat.create);
  quat.invert = wrapGlMatrix(quat_exports.invert, 1, quat.create);
  quat.normalize = wrapGlMatrix(quat_exports.normalize, 1, quat.create);
  quat.euler = wrapGlMatrix((out, q) => {
    out[0] = Math.atan2(2 * (q[3] * q[0] + q[1] * q[2]), 1 - 2 * (q[0] ** 2 + q[1] ** 2)) * Rad2Deg;
    out[1] = Math.asin(2 * (q[3] * q[1] - q[2] * q[0])) * Rad2Deg;
    out[2] = Math.atan2(2 * (q[3] * q[2] + q[0] * q[1]), 1 - 2 * (q[1] ** 2, q[2] ** 2)) * Rad2Deg;
    return out;
  }, 1, vec32.zero);
  quat.fromEuler = wrapGlMatrix((out, angles) => quat_exports.fromEuler(out, angles[0], angles[1], angles[2]), 1, quat.create);
  quat.rotate = wrapGlMatrix((out, q, v2) => vec3_exports.transformQuat(out, v2, q), 2, vec32.zero);
  quat.equals = (a2, b) => {
    return quat_exports.exactEquals(a2, b);
  };

  // node_modules/zogra-renderer/dist/types/mat4.js
  var Mat4Constructor = Array;
  var __vec4_temp = vec42.zero();
  var Matrix4x4 = class extends Mat4Constructor {
    constructor(p_0 = 0, p_1 = 0, p_2 = 0, p_3 = 0, p_4 = 0, p_5 = 0, p_6 = 0, p_7 = 0, p_8 = 0, p_9 = 0, p_10 = 0, p_11 = 0, p_12 = 0, p_13 = 0, p_14 = 0, p_15 = 0) {
      super(p_0, p_1, p_2, p_3, p_4, p_5, p_6, p_7, p_8, p_9, p_10, p_11, p_12, p_13, p_14, p_15);
    }
    static create() {
      return new Matrix4x4();
    }
    asMut() {
      return this;
    }
    set(m) {
      return mat4_exports.set(this, ...m);
    }
    fill(n2) {
      return mat4.fill(this, n2);
    }
    clone(out = mat4.create()) {
      return out.set(this);
    }
    equals(other) {
      return mat4.equal(this, other);
    }
  };
  function mat4(p_0 = 0, p_1 = 0, p_2 = 0, p_3 = 0, p_4 = 0, p_5 = 0, p_6 = 0, p_7 = 0, p_8 = 0, p_9 = 0, p_10 = 0, p_11 = 0, p_12 = 0, p_13 = 0, p_14 = 0, p_15 = 0) {
    return new Matrix4x4(p_0, p_1, p_2, p_3, p_4, p_5, p_6, p_7, p_8, p_9, p_10, p_11, p_12, p_13, p_14, p_15);
  }
  mat4.create = Matrix4x4.create;
  mat4.identity = wrapGlMatrix(mat4_exports.identity, 0, mat4.create);
  mat4.rts = wrapGlMatrix(mat4_exports.fromRotationTranslationScale, 3, mat4.create);
  mat4.translate = wrapGlMatrix(mat4_exports.translate, 2, Matrix4x4.create);
  mat4.invert = wrapGlMatrix(mat4_exports.invert, 1, Matrix4x4.create);
  mat4.getTranslation = wrapGlMatrix(mat4_exports.getTranslation, 1, vec32.zero);
  mat4.getRotation = wrapGlMatrix(mat4_exports.getRotation, 1, quat.create);
  mat4.getScaling = wrapGlMatrix(mat4_exports.getScaling, 1, vec32.zero);
  mat4.mulVec4 = wrapGlMatrix((out, m, v2) => vec4_exports.transformMat4(out, v2, m), 2, vec42.zero);
  mat4.perspective = wrapGlMatrix(mat4_exports.perspective, 4, Matrix4x4.create);
  mat4.transpose = wrapGlMatrix(mat4_exports.transpose, 1, Matrix4x4.create);
  mat4.rotate = wrapGlMatrix((out, m, axis, rad) => mat4_exports.rotate(out, m, rad, axis), 3, Matrix4x4.create);
  mat4.scale = wrapGlMatrix(mat4_exports.scale, 2, Matrix4x4.create);
  mat4.fromTranslation = wrapGlMatrix(mat4_exports.fromTranslation, 1, Matrix4x4.create);
  mat4.fromRotation = wrapGlMatrix(mat4_exports.fromRotation, 1, Matrix4x4.create);
  mat4.fromScaling = wrapGlMatrix(mat4_exports.fromScaling, 1, Matrix4x4.create);
  mat4.mul = wrapGlMatrix(mat4_exports.mul, 2, Matrix4x4.create);
  mat4.add = wrapGlMatrix(mat4_exports.add, 2, mat4.create);
  mat4.sub = wrapGlMatrix(mat4_exports.sub, 2, mat4.create);
  mat4.plus = mat4.add;
  mat4.minus = mat4.sub;
  mat4.mulVector = wrapGlMatrix((out, m, v2) => {
    __vec4_temp[0] = v2[0];
    __vec4_temp[1] = v2[1];
    __vec4_temp[2] = v2[2];
    __vec4_temp[3] = 0;
    vec4_exports.transformMat4(__vec4_temp, __vec4_temp, m);
    out[0] = __vec4_temp[0];
    out[1] = __vec4_temp[1];
    out[2] = __vec4_temp[2];
    return out;
  }, 2, vec32.zero);
  mat4.mulPoint = wrapGlMatrix((out, m, v2) => {
    __vec4_temp[0] = v2[0];
    __vec4_temp[1] = v2[1];
    __vec4_temp[2] = v2[2];
    __vec4_temp[3] = 1;
    vec4_exports.transformMat4(__vec4_temp, __vec4_temp, m);
    out[0] = __vec4_temp[0];
    out[1] = __vec4_temp[1];
    out[2] = __vec4_temp[2];
    return out;
  }, 2, vec32.zero);
  mat4.mulPoint2 = wrapGlMatrix((out, m, v2) => {
    __vec4_temp[0] = v2[0];
    __vec4_temp[1] = v2[1];
    __vec4_temp[2] = 0;
    __vec4_temp[3] = 1;
    vec4_exports.transformMat4(__vec4_temp, __vec4_temp, m);
    out[0] = __vec4_temp[0];
    out[1] = __vec4_temp[1];
    return out;
  }, 2, vec2.zero);
  mat4.mulVector2 = wrapGlMatrix((out, m, v2) => {
    __vec4_temp[0] = v2[0];
    __vec4_temp[1] = v2[1];
    __vec4_temp[2] = 0;
    __vec4_temp[3] = 0;
    vec4_exports.transformMat4(__vec4_temp, __vec4_temp, m);
    out[0] = __vec4_temp[0];
    out[1] = __vec4_temp[1];
    return out;
  }, 2, vec2.zero);
  function simpleOrthogonal(height, aspect, near, far) {
    const out = mat4.create();
    mat4_exports.ortho(out, -aspect * height, aspect * height, -height, height, near, far);
    return out;
  }
  function orthogonal(...args) {
    if (args.length === 4)
      return simpleOrthogonal(...args);
    const out = mat4.create();
    mat4_exports.ortho(...[out, ...args]);
    return out;
  }
  mat4.ortho = orthogonal;
  mat4.equal = (a2, b) => {
    if (a2 === void 0 || b === void 0)
      return false;
    if (!(a2 instanceof Array || a2 instanceof Float32Array) || !(b instanceof Array || b instanceof Float32Array))
      return false;
    return mat4_exports.exactEquals(a2, b);
  };
  mat4.set = wrapGlMatrix(mat4_exports.set, 1, mat4.create);
  mat4.fill = wrapGlMatrix((out, n2) => {
    out[0] = out[1] = out[2] = out[3] = out[4] = out[5] = out[6] = out[7] = out[8] = out[9] = out[10] = out[11] = out[12] = out[13] = out[14] = out[15] = n2;
    return out;
  }, 1, mat4.create);

  // node_modules/zogra-renderer/dist/types/math.js
  Number.prototype.__to = function(type) {
    switch (type) {
      case Vector4:
        return vec42(this.valueOf(), this.valueOf(), this.valueOf(), this.valueOf());
      case Vector3:
        return vec32(this.valueOf(), this.valueOf(), this.valueOf());
      case Vector2:
        return vec2(this.valueOf(), this.valueOf());
    }
    return this.valueOf();
  };
  function allocateOutput(a2, b) {
    let length5 = Math.max(a2.length || 0, b.length || 0);
    switch (length5) {
      case 2:
        return typeof a2 === "number" ? vec2.fill(a2) : vec2.set(a2);
      case 3:
        return typeof a2 === "number" ? vec2.fill(a2) : vec32.set(a2);
      case 4:
        return typeof a2 === "number" ? vec2.fill(a2) : vec42.set(a2);
      case 16:
        return typeof a2 === "number" ? vec2.fill(a2) : mat4.set(a2);
    }
    console.warn(`Unsupported vector length '${length5}'`);
    return new Array();
  }
  function plus(a2, b, out) {
    if (typeof a2 === "number" && typeof b === "number")
      return a2 + b;
    let output = out || allocateOutput(a2, b);
    switch (output.length) {
      case 2:
        return vec2.plus(output, output, b);
      case 3:
        return vec32.plus(output, output, b);
      case 4:
        return vec42.plus(output, output, b);
    }
    console.warn(`Unsupported vector length '${output.length}'`);
    return vec42.plus(output, output, b);
  }
  function minus(a2, b, out) {
    if (typeof a2 === "number" && typeof b === "number")
      return a2 + b;
    let output = out || allocateOutput(a2, b);
    switch (output.length) {
      case 2:
        return vec2.minus(output, output, b);
      case 3:
        return vec32.minus(output, output, b);
      case 4:
        return vec42.minus(output, output, b);
    }
    console.warn(`Unsupported vector length '${output.length}'`);
    return vec42.minus(output, output, b);
  }
  function mul6(a2, b, out) {
    if (typeof a2 === "number" && typeof b === "number")
      return a2 + b;
    let output = out || allocateOutput(a2, b);
    switch (output.length) {
      case 2:
        return vec2.mul(output, output, b);
      case 3:
        return vec32.mul(output, output, b);
      case 4:
        return vec42.mul(output, output, b);
    }
    console.warn(`Unsupported vector length '${output.length}'`);
    return vec42.mul(output, output, b);
  }
  function div4(a2, b, out) {
    if (typeof a2 === "number" && typeof b === "number")
      return a2 + b;
    let output = out || allocateOutput(a2, b);
    switch (output.length) {
      case 2:
        return vec2.div(output, output, b);
      case 3:
        return vec32.div(output, output, b);
      case 4:
        return vec42.div(output, output, b);
    }
    console.warn(`Unsupported vector length '${output.length}'`);
    return vec42.div(output, output, b);
  }
  function cross4(a2, b, out = vec32.zero()) {
    out[0] = a2[1] * b[2] - a2[2] * b[1];
    out[1] = a2[2] * b[0] - a2[0] * b[2];
    out[2] = a2[0] * b[1] - a2[1] * b[0];
    return out;
  }
  var Deg2Rad = Math.PI / 180;
  var Rad2Deg = 180 / Math.PI;

  // node_modules/zogra-renderer/dist/types/rect.js
  var Rect = class {
    constructor(min4, size) {
      this.min = min4;
      this.max = plus(min4, size);
    }
    get xMin() {
      return this.min.x;
    }
    get yMin() {
      return this.min.y;
    }
    get xMax() {
      return this.max.x;
    }
    get yMax() {
      return this.max.y;
    }
    get width() {
      return this.max.x - this.min.x;
    }
    get height() {
      return this.max.y - this.min.y;
    }
    get size() {
      return minus(this.max, this.min);
    }
    get center() {
      return plus(this.min, this.max).mul(vec2(0.5));
    }
    shrink(thickness) {
      let min4 = plus(this.min, vec2(thickness));
      let max4 = minus(this.max, vec2(thickness));
      if (min4.x > max4.x)
        min4.x = max4.x = (min4.x + max4.x) / 2;
      if (min4.y > max4.y)
        min4.y = max4.y = (min4.y + max4.y) / 2;
      return new Rect(min4, max4.minus(min4));
    }
    expand(thickness) {
      return new Rect(minus(this.min, vec2(thickness)), plus(this.size, vec2(2 * thickness)));
    }
    static box01() {
      return new Rect(vec2.zero(), vec2.one());
    }
  };

  // node_modules/reflect-metadata/Reflect.js
  /*! *****************************************************************************
  Copyright (C) Microsoft. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      } else {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter);
      function makeExporter(target, previous) {
        return function(key, value) {
          if (typeof target[key] !== "function") {
            Object.defineProperty(target, key, {configurable: true, writable: true, value});
          }
          if (previous)
            previous(key, value);
        };
      }
    })(function(exporter) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = {__proto__: []} instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        create: supportsCreate ? function() {
          return MakeDictionary(Object.create(null));
        } : supportsProto ? function() {
          return MakeDictionary({__proto__: null});
        } : function() {
          return MakeDictionary({});
        },
        has: downLevel ? function(map, key) {
          return hasOwn.call(map, key);
        } : function(map, key) {
          return key in map;
        },
        get: downLevel ? function(map, key) {
          return hasOwn.call(map, key) ? map[key] : void 0;
        } : function(map, key) {
          return map[key];
        }
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
      var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
      var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var Metadata = new _WeakMap();
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsObject(target))
            throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError();
          if (IsNull(attributes))
            attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsConstructor(target))
            throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey, false);
        if (IsUndefined(metadataMap))
          return false;
        if (!metadataMap.delete(metadataKey))
          return false;
        if (metadataMap.size > 0)
          return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0)
          return true;
        Metadata.delete(target);
        return true;
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i2 = decorators.length - 1; i2 >= 0; --i2) {
          var decorator = decorators[i2];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
          if (!Create)
            return void 0;
          targetMetadata = new _Map();
          Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
          if (!Create)
            return void 0;
          metadataMap = new _Map();
          targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (IsUndefined(metadataMap))
          return false;
        return ToBoolean(metadataMap.has(MetadataKey));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (IsUndefined(metadataMap))
          return void 0;
        return metadataMap.get(MetadataKey);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, true);
        metadataMap.set(MetadataKey, MetadataValue);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set6 = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set6.has(key);
          if (!hasKey) {
            set6.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set6.has(key);
          if (!hasKey) {
            set6.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P, false);
        if (IsUndefined(metadataMap))
          return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
          var next = IteratorStep(iterator);
          if (!next) {
            keys.length = k;
            return keys;
          }
          var nextValue = IteratorValue(next);
          try {
            keys[k] = nextValue;
          } catch (e2) {
            try {
              IteratorClose(iterator);
            } finally {
              throw e2;
            }
          }
          k++;
        }
      }
      function Type(x) {
        if (x === null)
          return 1;
        switch (typeof x) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x) {
        return x === void 0;
      }
      function IsNull(x) {
        return x === null;
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
      }
      function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
        } else {
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
          var toString_2 = O.toString;
          if (IsCallable(toString_2)) {
            var result = toString_2.call(O);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3);
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function GetMethod(V, P) {
        var func = V[P];
        if (func === void 0 || func === null)
          return void 0;
        if (!IsCallable(func))
          throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
          f.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O)
          return proto;
        return constructor;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = function() {
          function MapIterator2(keys, values, selector) {
            this._index = 0;
            this._keys = keys;
            this._values = values;
            this._selector = selector;
          }
          MapIterator2.prototype["@@iterator"] = function() {
            return this;
          };
          MapIterator2.prototype[iteratorSymbol] = function() {
            return this;
          };
          MapIterator2.prototype.next = function() {
            var index = this._index;
            if (index >= 0 && index < this._keys.length) {
              var result = this._selector(this._keys[index], this._values[index]);
              if (index + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              } else {
                this._index++;
              }
              return {value: result, done: false};
            }
            return {value: void 0, done: true};
          };
          MapIterator2.prototype.throw = function(error) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            throw error;
          };
          MapIterator2.prototype.return = function(value) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            }
            return {value, done: true};
          };
          return MapIterator2;
        }();
        return function() {
          function Map2() {
            this._keys = [];
            this._values = [];
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          }
          Object.defineProperty(Map2.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: true,
            configurable: true
          });
          Map2.prototype.has = function(key) {
            return this._find(key, false) >= 0;
          };
          Map2.prototype.get = function(key) {
            var index = this._find(key, false);
            return index >= 0 ? this._values[index] : void 0;
          };
          Map2.prototype.set = function(key, value) {
            var index = this._find(key, true);
            this._values[index] = value;
            return this;
          };
          Map2.prototype.delete = function(key) {
            var index = this._find(key, false);
            if (index >= 0) {
              var size = this._keys.length;
              for (var i2 = index + 1; i2 < size; i2++) {
                this._keys[i2 - 1] = this._keys[i2];
                this._values[i2 - 1] = this._values[i2];
              }
              this._keys.length--;
              this._values.length--;
              if (key === this._cacheKey) {
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
              }
              return true;
            }
            return false;
          };
          Map2.prototype.clear = function() {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = cacheSentinel;
            this._cacheIndex = -2;
          };
          Map2.prototype.keys = function() {
            return new MapIterator(this._keys, this._values, getKey);
          };
          Map2.prototype.values = function() {
            return new MapIterator(this._keys, this._values, getValue);
          };
          Map2.prototype.entries = function() {
            return new MapIterator(this._keys, this._values, getEntry);
          };
          Map2.prototype["@@iterator"] = function() {
            return this.entries();
          };
          Map2.prototype[iteratorSymbol] = function() {
            return this.entries();
          };
          Map2.prototype._find = function(key, insert) {
            if (this._cacheKey !== key) {
              this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
            }
            if (this._cacheIndex < 0 && insert) {
              this._cacheIndex = this._keys.length;
              this._keys.push(key);
              this._values.push(void 0);
            }
            return this._cacheIndex;
          };
          return Map2;
        }();
        function getKey(key, _) {
          return key;
        }
        function getValue(_, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      function CreateSetPolyfill() {
        return function() {
          function Set2() {
            this._map = new _Map();
          }
          Object.defineProperty(Set2.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: true,
            configurable: true
          });
          Set2.prototype.has = function(value) {
            return this._map.has(value);
          };
          Set2.prototype.add = function(value) {
            return this._map.set(value, value), this;
          };
          Set2.prototype.delete = function(value) {
            return this._map.delete(value);
          };
          Set2.prototype.clear = function() {
            this._map.clear();
          };
          Set2.prototype.keys = function() {
            return this._map.keys();
          };
          Set2.prototype.values = function() {
            return this._map.values();
          };
          Set2.prototype.entries = function() {
            return this._map.entries();
          };
          Set2.prototype["@@iterator"] = function() {
            return this.keys();
          };
          Set2.prototype[iteratorSymbol] = function() {
            return this.keys();
          };
          return Set2;
        }();
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return function() {
          function WeakMap2() {
            this._key = CreateUniqueKey();
          }
          WeakMap2.prototype.has = function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== void 0 ? HashMap.has(table, this._key) : false;
          };
          WeakMap2.prototype.get = function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== void 0 ? HashMap.get(table, this._key) : void 0;
          };
          WeakMap2.prototype.set = function(target, value) {
            var table = GetOrCreateWeakMapTable(target, true);
            table[this._key] = value;
            return this;
          };
          WeakMap2.prototype.delete = function(target) {
            var table = GetOrCreateWeakMapTable(target, false);
            return table !== void 0 ? delete table[this._key] : false;
          };
          WeakMap2.prototype.clear = function() {
            this._key = CreateUniqueKey();
          };
          return WeakMap2;
        }();
        function CreateUniqueKey() {
          var key;
          do
            key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create7) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create7)
              return void 0;
            Object.defineProperty(target, rootKey, {value: HashMap.create()});
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
          for (var i2 = 0; i2 < size; ++i2)
            buffer[i2] = Math.random() * 255 | 0;
          return buffer;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            if (typeof crypto !== "undefined")
              return crypto.getRandomValues(new Uint8Array(size));
            if (typeof msCrypto !== "undefined")
              return msCrypto.getRandomValues(new Uint8Array(size));
            return FillRandomBytes(new Uint8Array(size), size);
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 79 | 64;
          data[8] = data[8] & 191 | 128;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8)
              result += "-";
            if (byte < 16)
              result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = void 0;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));

  // node_modules/zogra-renderer/dist/utils/util.js
  function panicNull(t, msg) {
    if (t === null)
      throw new Error(msg);
    return t;
  }
  function panic(msg) {
    throw new Error(msg);
  }
  function getUniformsLocation(gl, program, uniforms) {
    const out = {};
    for (const key in uniforms) {
      out[key] = gl.getUniformLocation(program, uniforms[key]);
    }
    return out;
  }

  // node_modules/zogra-renderer/dist/core/debug.js
  var DebugProvider = class {
    drawRay(origin, dir, distance5 = 1, color = Color.red, overlay = false) {
      this.drawLine(origin, mul6(dir, distance5).plus(origin), color, overlay);
    }
    drawRect(...args) {
      let min4, max4, color;
      let overlay = false;
      if (args[0] instanceof Rect) {
        min4 = args[0].min;
        max4 = args[0].max;
        color = args[1] || Color.red;
        overlay = args[2] || false;
      } else {
        min4 = args[0];
        max4 = args[1];
        color = args[2] || Color.red;
        overlay = args[3] || false;
      }
      this.drawLine(vec2(min4.x, min4.y).toVec3(), vec2(max4.x, min4.y).toVec3(), color, overlay);
      this.drawLine(vec2(max4.x, min4.y).toVec3(), vec2(max4.x, max4.y).toVec3(), color, overlay);
      this.drawLine(vec2(max4.x, max4.y).toVec3(), vec2(min4.x, max4.y).toVec3(), color, overlay);
      this.drawLine(vec2(min4.x, max4.y).toVec3(), vec2(min4.x, min4.y).toVec3(), color, overlay);
    }
    drawLines(points, color = Color.red, overlay = false) {
      for (let i2 = 0; i2 < points.length; i2++) {
        this.drawLine(points[i2], points[(i2 + 1) % points.length], color, overlay);
      }
    }
    drawCircle(center, radius, color = Color.red, overlay = false) {
      const edges = 24;
      for (let i2 = 0; i2 < edges; i2++) {
        const p0 = vec32(Math.cos(i2 * 2 * Math.PI / edges), Math.sin(i2 * 2 * Math.PI / edges), 0);
        const p1 = vec32(Math.cos((i2 + 1) % edges * 2 * Math.PI / edges), Math.sin((i2 + 1) % edges * 2 * Math.PI / edges), 0);
        this.drawLine(p0.mul(radius).plus(center), p1.mul(radius).plus(center), color, overlay);
      }
    }
  };

  // node_modules/zogra-renderer/dist/core/global.js
  var GLContext = class {
    constructor() {
      this.gl = null;
      this.width = 0;
      this.height = 0;
      this.assets = null;
      this.renderer = null;
    }
  };
  var ctx;
  var debugProvider = new class EmptyDebugProvider extends DebugProvider {
    drawLine(start, end, color) {
    }
  }();
  var setGlobalContext = (_ctx) => ctx = _ctx;
  var GlobalContext = () => ctx;
  var GL = () => {
    var _a;
    return (_a = GlobalContext()) === null || _a === void 0 ? void 0 : _a.gl;
  };

  // node_modules/zogra-renderer/dist/builtin-assets/generated/index.js
  var o = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
in vec2 aUV;\r
in vec3 aNormal;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
out vec2 vUV;\r
out vec3 vNormal;\r
\r
void main()\r
{\r
    gl_Position = uTransformMVP * vec4(aPos, 1);\r
    vColor = aColor;\r
    vUV = aUV;\r
    vNormal = aNormal;\r
}`;
  var r = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color = color * vColor * uColor;\r
    fragColor = color;\r
}`;
  var e = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
in vec3 vNormal;\r
\r
uniform sampler2D uMainTex;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    fragColor = texture(uMainTex, vUV).rgba;\r
}`;
  var i = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    fragColor = vColor;\r
}`;
  var a = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
\r
void main()\r
{\r
    gl_Position = uTransformMVP * vec4(aPos, 1);\r
    vColor = aColor;\r
}`;
  var v = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec2 aUV;\r
\r
out vec2 vUV;\r
\r
void main()\r
{\r
    gl_Position = vec4(aPos, 1);\r
    vUV = vec2(aUV.x, vec2(1) - aUV.y);\r
}`;
  var l = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    fragColor = texture(uMainTex, vUV).rgba;\r
}`;
  var n = {defaultVert: o, defaultFrag: r, blitCopy: e, colorFrag: i, colorVert: a, flipVert: v, texFrag: l};

  // node_modules/zogra-renderer/dist/builtin-assets/shaders.js
  var BuiltinUniformNames = {
    matM: "uTransformM",
    matM_IT: "uTransformM_IT",
    matMInv: "uTransformMInv",
    matVP: "uTransformVP",
    matMVP: "uTransformMVP",
    matMV_IT: "uTransformMV_IT",
    flipUV: "uFlipUV",
    mainTex: "uMainTex",
    color: "uColor"
  };
  function compileBuiltinShaders(gl) {
    return {
      DefaultShader: new Shader(n.defaultVert, n.defaultFrag, {name: "DefaultShader"}, gl),
      BlitCopy: new Shader(n.defaultVert, n.blitCopy, {
        name: "BlitCopy",
        depth: DepthTest.Always,
        blend: Blending.Disable,
        zWrite: false
      }, gl),
      FlipTexture: new Shader(n.flipVert, n.blitCopy, {}, gl),
      ColoredLine: new Shader(n.colorVert, n.colorFrag, {
        blend: [Blending.SrcAlpha, Blending.OneMinusSrcAlpha],
        depth: DepthTest.Disable,
        zWrite: false
      }, gl),
      ErrorShader: new Shader(n.defaultVert, n.texFrag, {
        name: "Error"
      }, gl)
    };
  }

  // node_modules/zogra-renderer/dist/core/event.js
  var EventEmitter = class {
    constructor() {
      this.listeners = new Map();
    }
    on(event, listener) {
      var _a;
      if (!this.listeners.has(event))
        this.listeners.set(event, []);
      (_a = this.listeners.get(event)) === null || _a === void 0 ? void 0 : _a.push(listener);
    }
    off(event, listener) {
      var _a, _b;
      if (this.listeners.has(event))
        this.listeners.set(event, (_b = (_a = this.listeners.get(event)) === null || _a === void 0 ? void 0 : _a.filter((f) => f !== listener)) !== null && _b !== void 0 ? _b : []);
    }
    emit(event, ...args) {
      var _a;
      (_a = this.listeners.get(event)) === null || _a === void 0 ? void 0 : _a.forEach((f) => f(...args));
    }
    with() {
      return this;
    }
  };

  // node_modules/zogra-renderer/dist/core/asset.js
  var Asset = class {
    constructor(name) {
      this.destroyed = false;
      this.assetID = AssetManager.newAssetID(this);
      this.name = name || `Asset_${this.assetID}`;
    }
    destroy() {
      this.destroyed = true;
      AssetManager.destroy(this.assetID);
    }
  };
  var GPUAsset = class extends Asset {
    constructor(ctx2 = GlobalContext(), name) {
      super(name);
      this.initialized = false;
      this.ctx = ctx2;
    }
    tryInit(required = false) {
      if (this.initialized)
        return true;
      if (!this.ctx)
        this.ctx = GlobalContext();
      const success = this.ctx && this.init();
      if (!success && required)
        throw new Error(`Failed to init GPU Asset '${this.name}' without global gl context.`);
      this.initialized = success;
      return success;
    }
  };
  var AssetManagerType = class {
    constructor() {
      this.assetsMap = new Map();
      this.id = 1;
      this.eventEmitter = new EventEmitter();
    }
    newAssetID(asset) {
      const currentId = ++this.id;
      this.assetsMap.set(currentId, asset);
      return asset.assetID = currentId;
    }
    find(id) {
      if (typeof id === "number")
        return this.assetsMap.get(id);
      else if (typeof id === "string") {
        for (const asset of this.assetsMap.values())
          if (asset.name === id)
            return asset;
      }
      return void 0;
    }
    destroy(id) {
      const asset = this.assetsMap.get(id);
      if (!asset)
        return;
      this.assetsMap.delete(id);
    }
    findAssetsOfType(type) {
      return Array.from(this.assetsMap.values()).filter((asset) => asset instanceof type);
    }
    on(event, listener) {
      return this.eventEmitter.on(event, listener);
    }
    off(event, listener) {
      return this.eventEmitter.off(event, listener);
    }
  };
  var AssetManager = new AssetManagerType();

  // node_modules/zogra-renderer/dist/core/array-buffer.js
  function BufferStructure(structure) {
    return structure;
  }
  var ElementLength = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    mat4: 16,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4
  };
  var BufferStructureInfo = {
    from(structure) {
      const structInfo = {
        elements: [],
        byteSize: 0,
        totalSize: 0
      };
      let location = 0;
      for (const key in structure) {
        const element = {
          key,
          type: structure[key],
          location,
          length: ElementLength[structure[key]]
        };
        element.byteLength = element.length * 4;
        element.offset = structInfo.totalSize;
        element.byteOffset = structInfo.byteSize;
        structInfo.totalSize += element.length;
        structInfo.byteSize += element.byteLength;
        structInfo.elements.push(element);
        location += structure[key] === "mat4" ? 4 : 1;
      }
      return structInfo;
    }
  };
  var GLArrayBuffer = class extends Array {
    constructor(structure, items, createElementView = true, ctx2 = GlobalContext()) {
      super(items);
      this.static = true;
      this.Data = null;
      this.dirty = false;
      this.initialized = false;
      this.destroyed = false;
      this.glBuf = null;
      this.swapBuffer = null;
      this.structure = BufferStructureInfo.from(structure);
      this.ctx = ctx2;
      this.innerBuffer = null;
      this.resize(items, createElementView);
      this.tryInit(false);
      this.assetID = AssetManager.newAssetID(this);
      this.name = `GLArrayBuffer_${this.assetID}`;
    }
    get byteLength() {
      return this.length * this.structure.byteSize;
    }
    resize(length5, keepContent = true, createElementView = true) {
      const oldBuffer = this.innerBuffer;
      this.innerBuffer = new Float32Array(this.structure.totalSize * length5);
      if (keepContent && oldBuffer) {
        if (oldBuffer.length > this.innerBuffer.length) {
          this.innerBuffer.set(new Float32Array(oldBuffer.buffer, 0, this.innerBuffer.length));
        } else
          this.innerBuffer.set(oldBuffer, 0);
      }
      this.length = length5;
      if (createElementView) {
        for (let i2 = 0; i2 < this.length; i2++) {
          const elementView = {};
          for (const element of this.structure.elements) {
            const bufferOffset = i2 * this.structure.byteSize + element.byteOffset;
            switch (element.type) {
              case "float":
              case "vec2":
              case "vec3":
              case "vec4":
              case "mat4":
                elementView[element.key] = new Float32Array(this.innerBuffer.buffer, bufferOffset, ElementLength[element.type]);
                break;
              case "int":
              case "ivec2":
              case "ivec3":
              case "ivec4":
                elementView[element.key] = new Int32Array(this.innerBuffer.buffer, bufferOffset, ElementLength[element.type]);
                break;
              default:
                console.warn(`Unknown element type '${element.type}'`);
            }
          }
          this[i2] = elementView;
        }
      }
      this.dirty = true;
    }
    copyFrom(source, selfElementOffset = 0, sourceElementOffset = 0, sourceElementLength = source.length) {
      const byteOffset = selfElementOffset * this.structure.byteSize;
      const maxWriteSize = this.innerBuffer.buffer.byteLength - byteOffset;
      const srcByteOffset = sourceElementOffset * source.structure.byteSize;
      const srcSize = (sourceElementLength - sourceElementOffset) * source.structure.byteSize;
      const writeSize = Math.min(maxWriteSize, srcSize);
      const dstView = new Uint8Array(this.innerBuffer.buffer, byteOffset, writeSize);
      const srcView = new Uint8Array(source.innerBuffer.buffer, srcByteOffset, writeSize);
      dstView.set(srcView);
    }
    swapVertices(a2, b) {
      if (!this.swapBuffer)
        this.swapBuffer = new Float32Array(this.structure.totalSize);
      const offsetI = a2 * this.structure.byteSize;
      const offsetJ = b * this.structure.byteSize;
      let temp = this.swapBuffer;
      let viewA = new Float32Array(this.innerBuffer.buffer, offsetI, this.structure.totalSize);
      temp.set(viewA);
      const viewB = new Float32Array(this.innerBuffer.buffer, offsetJ, this.structure.totalSize);
      this.innerBuffer.set(viewB, a2 * this.structure.totalSize);
      this.innerBuffer.set(temp, b * this.structure.totalSize);
    }
    markDirty() {
      this.dirty = true;
    }
    upload(force = false) {
      this.tryInit(true);
      if (!this.dirty && !force && this.static)
        return false;
      const gl = this.ctx.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.glBuf);
      gl.bufferData(gl.ARRAY_BUFFER, this.innerBuffer, this.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW);
      this.dirty = false;
      return true;
    }
    bind() {
      this.tryInit(true);
      const gl = this.ctx.gl;
      this.upload();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.glBuf);
    }
    bindVertexArray(instancing = false, attributes) {
      this.tryInit(true);
      const gl = this.ctx.gl;
      this.upload();
      gl.bindBuffer(gl.ARRAY_BUFFER, this.glBuf);
      for (const element of this.structure.elements) {
        const location = attributes ? attributes[element.key] || -1 : element.location;
        if (location < 0)
          continue;
        switch (element.type) {
          case "float":
          case "vec2":
          case "vec3":
          case "vec4":
            gl.enableVertexAttribArray(location);
            gl.vertexAttribPointer(location, element.length, gl.FLOAT, false, this.structure.byteSize, element.byteOffset);
            instancing && gl.vertexAttribDivisor(location, 1);
            break;
          case "int":
          case "ivec2":
          case "ivec3":
          case "ivec4":
            gl.enableVertexAttribArray(location);
            gl.vertexAttribIPointer(location, element.length, gl.INT, this.structure.byteSize, element.byteOffset);
            instancing && gl.vertexAttribDivisor(location, 1);
            break;
          case "mat4":
            gl.enableVertexAttribArray(location + 0);
            gl.enableVertexAttribArray(location + 1);
            gl.enableVertexAttribArray(location + 2);
            gl.enableVertexAttribArray(location + 3);
            gl.vertexAttribPointer(location + 0, 4, gl.FLOAT, false, this.structure.byteSize, element.byteOffset + 0);
            gl.vertexAttribPointer(location + 1, 4, gl.FLOAT, false, this.structure.byteSize, element.byteOffset + 1);
            gl.vertexAttribPointer(location + 2, 4, gl.FLOAT, false, this.structure.byteSize, element.byteOffset + 2);
            gl.vertexAttribPointer(location + 3, 4, gl.FLOAT, false, this.structure.byteSize, element.byteOffset + 3);
            if (instancing) {
              gl.vertexAttribDivisor(location + 0, 1);
              gl.vertexAttribDivisor(location + 1, 1);
              gl.vertexAttribDivisor(location + 2, 1);
              gl.vertexAttribDivisor(location + 3, 1);
            }
            break;
          default:
            console.warn(`Unknown attribute type '${element.type}'`);
        }
      }
    }
    unbindVertexArray(instancing = false, attributes) {
      this.tryInit(true);
      const gl = this.ctx.gl;
      for (const element of this.structure.elements) {
        const location = attributes ? attributes[element.key] || -1 : element.location;
        if (location < 0)
          continue;
        if (element.type === "mat4") {
          gl.disableVertexAttribArray(location + 0);
          gl.disableVertexAttribArray(location + 1);
          gl.disableVertexAttribArray(location + 2);
          gl.disableVertexAttribArray(location + 3);
          if (instancing) {
            gl.vertexAttribDivisor(location + 0, 0);
            gl.vertexAttribDivisor(location + 1, 0);
            gl.vertexAttribDivisor(location + 2, 0);
            gl.vertexAttribDivisor(location + 3, 0);
          }
        } else {
          gl.disableVertexAttribArray(location);
          instancing && gl.vertexAttribDivisor(location, 0);
        }
      }
    }
    unbind() {
      this.tryInit(true);
      const gl = this.ctx.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      gl.bindVertexArray(null);
    }
    destroy() {
      if (this.destroyed)
        return;
      if (!this.initialized)
        return;
      const gl = this.ctx.gl;
      this.length = 0;
      gl.deleteBuffer(this.glBuf);
      this.destroyed = true;
      this.initialized = false;
    }
    tryInit(required = false) {
      var _a;
      if (this.destroyed)
        throw new Error("Attempt to use destroyed array buffer.");
      if (this.initialized)
        return true;
      const ctx2 = this.ctx || GlobalContext();
      if (!ctx2) {
        if (required)
          throw new Error("Failed to init render buffer without a global GL context.");
        return false;
      }
      this.ctx = ctx2;
      const gl = ctx2.gl;
      this.glBuf = (_a = gl.createBuffer()) !== null && _a !== void 0 ? _a : panic("Failed to create render buffer");
      gl.bindBuffer(gl.ARRAY_BUFFER, this.glBuf);
      gl.bufferData(gl.ARRAY_BUFFER, this.byteLength, this.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      this.initialized = true;
      return true;
    }
  };

  // node_modules/zogra-renderer/dist/core/mesh.js
  var DefaultVertexData = {
    vert: "vec3",
    color: "vec4",
    normal: "vec3",
    uv: "vec2",
    uv2: "vec2"
  };
  var DefaultVertexStructInfo = BufferStructureInfo.from(DefaultVertexData);
  var Mesh = class extends Asset {
    constructor(...args) {
      super("Mesh");
      this.ctx = null;
      this.initialized = false;
      this.vertexArray = null;
      this.elementBuffer = null;
      this.dirty = true;
      this.indices = new Uint32Array();
      if (args.length === 0) {
        this.ctx = GlobalContext();
        this.vertices = new GLArrayBuffer(DefaultVertexData, 0, true, this.ctx);
      } else if (args.length === 1) {
        if (args[0] instanceof GLContext) {
          this.ctx = args[0];
          this.vertices = new GLArrayBuffer(DefaultVertexData, 0, true, this.ctx);
        } else {
          this.ctx = GlobalContext();
          this.vertices = new GLArrayBuffer(args[0], 0, true, this.ctx);
        }
      } else {
        this.ctx = args[1] || GlobalContext();
        this.vertices = new GLArrayBuffer(args[0], 0, true, this.ctx);
      }
      this.tryInit(false);
    }
    get verts() {
      return this.getVertexDataArray("vert", vec32.zero);
    }
    set verts(verts) {
      this.setVertexDataArray("vert", verts);
    }
    get uvs() {
      return this.getVertexDataArray("uv", vec2.zero);
    }
    set uvs(uvs) {
      this.setVertexDataArray("uv", uvs);
    }
    get colors() {
      return this.getVertexDataArray("color", () => Color.black);
    }
    set colors(colors) {
      this.setVertexDataArray("color", colors);
    }
    get normals() {
      return this.getVertexDataArray("uv2", vec32.zero);
    }
    set normals(normals) {
      this.setVertexDataArray("normal", normals);
    }
    get uv2() {
      return this.getVertexDataArray("uv2", vec2.zero);
    }
    set uv2(uv2) {
      this.setVertexDataArray("uv2", uv2);
    }
    get triangles() {
      return Array.from(this.indices);
    }
    set triangles(triangles) {
      if (triangles.length > this.indices.length)
        this.indices = new Uint32Array(triangles.length);
      this.indices.set(triangles);
    }
    getVertexDataArray(key, allocator) {
      return this.vertices.map((vert) => allocator().set(vert[key]));
    }
    setVertexDataArray(key, values) {
      const vertices = this.vertices;
      if (values.length >= this.vertices.length)
        this.vertices.resize(values.length);
      values.forEach((value, i2) => this.vertices[i2][key].set(value));
    }
    resize(vertices, indices, keepData = false) {
      this.vertices.resize(vertices, keepData);
      let oldTriangles = this.indices;
      this.indices = new Uint32Array(indices);
      if (keepData) {
        if (indices < oldTriangles.length) {
          oldTriangles = new Uint32Array(oldTriangles.buffer, 0, indices);
        }
        this.indices.set(oldTriangles, 0);
      }
      this.dirty = true;
    }
    update(upload = false) {
      this.dirty = true;
      this.vertices.markDirty();
      if (upload)
        this.upload();
    }
    upload() {
      this.tryInit(true);
      if (!this.dirty)
        return false;
      const gl = this.ctx.gl;
      this.vertices.upload();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.elementBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
      this.dirty = false;
      return true;
    }
    bind() {
      this.upload();
      const gl = this.ctx.gl;
      gl.bindVertexArray(this.vertexArray);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.elementBuffer);
      return this.indices.length;
    }
    unbind() {
      this.tryInit(true);
      const gl = this.ctx.gl;
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      gl.bindVertexArray(null);
    }
    calculateNormals(angleThreshold = 0) {
      if (this.triangles.length % 3 !== 0)
        throw new Error("Invalid triangles.");
      for (let i2 = 0; i2 < this.triangles.length; i2 += 3) {
        const a2 = this.vertices[this.triangles[i2 + 0]].vert;
        const b = this.vertices[this.triangles[i2 + 1]].vert;
        const c = this.vertices[this.triangles[i2 + 2]].vert;
        const u = minus(b, a2);
        const v2 = minus(c, a2);
        const normal = cross4(u, v2).normalize();
        vec32.plus(this.vertices[this.triangles[i2 + 0]].normal, this.vertices[this.triangles[i2 + 0]].normal, normal);
        vec32.plus(this.vertices[this.triangles[i2 + 1]].normal, this.vertices[this.triangles[i2 + 1]].normal, normal);
        vec32.plus(this.vertices[this.triangles[i2 + 2]].normal, this.vertices[this.triangles[i2 + 2]].normal, normal);
      }
      for (let i2 = 0; i2 < this.vertices.length; i2++) {
        vec32.normalize(this.vertices[i2].normal, this.vertices[i2].normal);
      }
    }
    destroy() {
      super.destroy();
      if (this.destroyed)
        return;
      this.vertices.destroy();
      const gl = this.ctx.gl;
      gl.deleteBuffer(this.elementBuffer);
      gl.deleteVertexArray(this.vertexArray);
      this.destroyed = true;
      this.initialized = false;
    }
    tryInit(required = false) {
      var _a, _b;
      if (this.initialized)
        return true;
      if (this.destroyed)
        throw new Error("Attempt to use destroyed mesh");
      this.ctx = this.ctx || GlobalContext();
      if (!this.ctx) {
        if (required)
          throw new Error("Failed to init mesh without global GL context");
        return false;
      }
      const gl = this.ctx.gl;
      this.elementBuffer = (_a = gl.createBuffer()) !== null && _a !== void 0 ? _a : panic("Failed to create element buffer object.");
      this.vertexArray = (_b = gl.createVertexArray()) !== null && _b !== void 0 ? _b : panic("Failed to create vertex array object.");
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.elementBuffer);
      gl.bindVertexArray(this.vertexArray);
      this.vertices.bindVertexArray();
      gl.bindVertexArray(null);
      this.initialized = true;
      return true;
    }
  };

  // node_modules/zogra-renderer/dist/core/shader.js
  var DepthTest;
  (function(DepthTest2) {
    DepthTest2[DepthTest2["Disable"] = -1] = "Disable";
    DepthTest2[DepthTest2["Always"] = WebGL2RenderingContext.ALWAYS] = "Always";
    DepthTest2[DepthTest2["Never"] = WebGL2RenderingContext.NEVER] = "Never";
    DepthTest2[DepthTest2["Less"] = WebGL2RenderingContext.LESS] = "Less";
    DepthTest2[DepthTest2["Equal"] = WebGL2RenderingContext.EQUAL] = "Equal";
    DepthTest2[DepthTest2["LEqual"] = WebGL2RenderingContext.LEQUAL] = "LEqual";
    DepthTest2[DepthTest2["Greater"] = WebGL2RenderingContext.GREATER] = "Greater";
    DepthTest2[DepthTest2["NotEqual"] = WebGL2RenderingContext.NOTEQUAL] = "NotEqual";
    DepthTest2[DepthTest2["GEqual"] = WebGL2RenderingContext.GEQUAL] = "GEqual";
  })(DepthTest || (DepthTest = {}));
  var Blending;
  (function(Blending2) {
    Blending2[Blending2["Disable"] = -1] = "Disable";
    Blending2[Blending2["Zero"] = WebGL2RenderingContext.ZERO] = "Zero";
    Blending2[Blending2["One"] = WebGL2RenderingContext.ONE] = "One";
    Blending2[Blending2["SrcColor"] = WebGL2RenderingContext.SRC_COLOR] = "SrcColor";
    Blending2[Blending2["OneMinusSrcColor"] = WebGL2RenderingContext.ONE_MINUS_SRC_COLOR] = "OneMinusSrcColor";
    Blending2[Blending2["DstColor"] = WebGL2RenderingContext.DST_COLOR] = "DstColor";
    Blending2[Blending2["OneMinusDstColor"] = WebGL2RenderingContext.ONE_MINUS_DST_COLOR] = "OneMinusDstColor";
    Blending2[Blending2["SrcAlpha"] = WebGL2RenderingContext.SRC_ALPHA] = "SrcAlpha";
    Blending2[Blending2["OneMinusSrcAlpha"] = WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA] = "OneMinusSrcAlpha";
    Blending2[Blending2["DstAlpha"] = WebGL2RenderingContext.DST_ALPHA] = "DstAlpha";
    Blending2[Blending2["OneMinusDstAlpha"] = WebGL2RenderingContext.ONE_MINUS_DST_ALPHA] = "OneMinusDstAlpha";
  })(Blending || (Blending = {}));
  var Culling;
  (function(Culling2) {
    Culling2[Culling2["Disable"] = -1] = "Disable";
    Culling2[Culling2["Back"] = WebGL2RenderingContext.BACK] = "Back";
    Culling2[Culling2["Front"] = WebGL2RenderingContext.FRONT] = "Front";
    Culling2[Culling2["Both"] = WebGL2RenderingContext.FRONT_AND_BACK] = "Both";
  })(Culling || (Culling = {}));
  var DefaultShaderAttributeNames = {
    vert: "aPos",
    color: "aColor",
    uv: "aUV",
    uv2: "aUV2",
    normal: "aNormal"
  };
  var Shader = class extends Asset {
    constructor(vertexShader, fragmentShader, options = {}, gl = GL()) {
      super(options.name);
      this.attributes = {};
      this.initialized = false;
      this.gl = null;
      this.program = null;
      this.vertexShader = null;
      this.fragmentShader = null;
      this.pipelineStates = {};
      this.builtinUniformLocations = null;
      this._compiled = false;
      if (!options.name)
        this.name = `Shader_${this.assetID}`;
      this.vertexShaderSource = vertexShader;
      this.fragmentShaderSouce = fragmentShader;
      this.options = options;
      this.gl = gl;
      this.vertexStruct = BufferStructureInfo.from(this.options.vertexStructure || DefaultVertexData);
      this.attributeNames = Object.assign(Object.assign({}, DefaultShaderAttributeNames), options.attributes);
      this.setPipelineStateInternal(this.options);
      this.tryInit();
    }
    get compiled() {
      return this._compiled;
    }
    uniformLocation(name) {
      this.tryInit(true);
      return this.gl.getUniformLocation(this.program, name);
    }
    use() {
      this.tryInit(true);
      this.gl.useProgram(this.program);
    }
    setupBuiltinUniform(params) {
      this.tryInit(true);
      const gl = this.gl;
      this.builtinUniformLocations.matM && gl.uniformMatrix4fv(this.builtinUniformLocations.matM, false, params.matM.asMut());
      this.builtinUniformLocations.matVP && gl.uniformMatrix4fv(this.builtinUniformLocations.matVP, false, params.matVP.asMut());
      this.builtinUniformLocations.matMVP && gl.uniformMatrix4fv(this.builtinUniformLocations.matMVP, false, params.matMVP.asMut());
      this.builtinUniformLocations.matM_IT && gl.uniformMatrix4fv(this.builtinUniformLocations.matM_IT, false, params.matM_IT.asMut());
      this.builtinUniformLocations.matMV_IT && gl.uniformMatrix4fv(this.builtinUniformLocations.matMV_IT, false, params.matMV_IT.asMut());
    }
    setPipelineStateInternal(settings) {
      let blend = false;
      let blendRGB = [Blending.One, Blending.Zero];
      let blendAlpha = [Blending.One, Blending.OneMinusSrcAlpha];
      if (typeof settings.blend === "number" && settings.blend !== Blending.Disable) {
        blend = true;
        blendRGB = [settings.blend, settings.blend];
        blendAlpha = [settings.blend, settings.blend];
      } else if (settings.blend instanceof Array) {
        blend = true;
        blendRGB = settings.blend;
      }
      if (settings.blendRGB) {
        blend = settings.blend !== false && settings.blend !== Blending.Disable;
        blendRGB = settings.blendRGB;
      }
      if (settings.blendAlpha) {
        blend = settings.blend !== false && settings.blend !== Blending.Disable;
        blendAlpha = settings.blendAlpha;
      }
      this.pipelineStates = {
        depth: settings.depth || DepthTest.Less,
        blend,
        blendRGB,
        blendAlpha,
        zWrite: settings.zWrite === false ? false : true,
        cull: settings.cull || Culling.Back
      };
    }
    _internal() {
      this.tryInit(true);
      return {
        options: this.options
      };
    }
    tryInit(required = false) {
      if (this.initialized)
        return true;
      const gl = this.gl || GL();
      if (!gl) {
        return required ? panic("Failed to init shader without a global GL context") : false;
      }
      this.gl = gl;
      this.program = panicNull(gl.createProgram(), "Failed to create shader program");
      this.vertexShader = panicNull(gl.createShader(gl.VERTEX_SHADER), "Failed to create vertex shader");
      this.fragmentShader = panicNull(gl.createShader(gl.FRAGMENT_SHADER), "Failed to create fragment shader");
      this.compile();
      gl.useProgram(this.program);
      const attributeNames = Object.assign(Object.assign({}, DefaultShaderAttributeNames), this.options.attributes);
      this.attributes = {};
      for (const key in attributeNames) {
        this.attributes[key] = gl.getAttribLocation(this.program, attributeNames[key]);
      }
      this.builtinUniformLocations = getUniformsLocation(gl, this.program, BuiltinUniformNames);
      this.initialized = true;
      return true;
    }
    compile() {
      this.gl.shaderSource(this.vertexShader, this.vertexShaderSource);
      this.gl.compileShader(this.vertexShader);
      if (!this.gl.getShaderParameter(this.vertexShader, this.gl.COMPILE_STATUS)) {
        throw new Error("Failed to compile vertex shader:\r\n" + this.gl.getShaderInfoLog(this.vertexShader));
      }
      this.gl.shaderSource(this.fragmentShader, this.fragmentShaderSouce);
      this.gl.compileShader(this.fragmentShader);
      if (!this.gl.getShaderParameter(this.fragmentShader, this.gl.COMPILE_STATUS)) {
        throw new Error("Failed to compile fragment shader:\r\n" + this.gl.getShaderInfoLog(this.fragmentShader));
      }
      this.gl.attachShader(this.program, this.vertexShader);
      this.gl.attachShader(this.program, this.fragmentShader);
      for (const element of this.vertexStruct.elements) {
        if (this.attributeNames[element.key])
          this.gl.bindAttribLocation(this.program, element.location, this.attributeNames[element.key]);
      }
      this.gl.linkProgram(this.program);
      if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
        throw new Error("Failed to link shader program:\r\n" + this.gl.getProgramInfoLog(this.program));
      }
    }
  };

  // node_modules/zogra-renderer/dist/core/texture-format.js
  var TextureFormat;
  (function(TextureFormat2) {
    TextureFormat2[TextureFormat2["RGB"] = WebGL2RenderingContext.RGB] = "RGB";
    TextureFormat2[TextureFormat2["RGBA"] = WebGL2RenderingContext.RGBA] = "RGBA";
    TextureFormat2[TextureFormat2["LUMINANCE_ALPHA"] = WebGL2RenderingContext.LUMINANCE_ALPHA] = "LUMINANCE_ALPHA";
    TextureFormat2[TextureFormat2["LUMINANCE"] = WebGL2RenderingContext.LUMINANCE] = "LUMINANCE";
    TextureFormat2[TextureFormat2["ALPHA"] = WebGL2RenderingContext.ALPHA] = "ALPHA";
    TextureFormat2[TextureFormat2["R8"] = WebGL2RenderingContext.R8] = "R8";
    TextureFormat2[TextureFormat2["R16F"] = WebGL2RenderingContext.R16F] = "R16F";
    TextureFormat2[TextureFormat2["R32F"] = WebGL2RenderingContext.R32F] = "R32F";
    TextureFormat2[TextureFormat2["R8UI"] = WebGL2RenderingContext.R8UI] = "R8UI";
    TextureFormat2[TextureFormat2["RG8"] = WebGL2RenderingContext.RG8] = "RG8";
    TextureFormat2[TextureFormat2["RG16F"] = WebGL2RenderingContext.RG16F] = "RG16F";
    TextureFormat2[TextureFormat2["RG32F"] = WebGL2RenderingContext.RG32F] = "RG32F";
    TextureFormat2[TextureFormat2["RG8UI"] = WebGL2RenderingContext.RG8UI] = "RG8UI";
    TextureFormat2[TextureFormat2["RGB8"] = WebGL2RenderingContext.RGB8] = "RGB8";
    TextureFormat2[TextureFormat2["SRGB8"] = WebGL2RenderingContext.SRGB8] = "SRGB8";
    TextureFormat2[TextureFormat2["RGB565"] = WebGL2RenderingContext.RGB565] = "RGB565";
    TextureFormat2[TextureFormat2["R11F_G11F_B10F"] = WebGL2RenderingContext.R11F_G11F_B10F] = "R11F_G11F_B10F";
    TextureFormat2[TextureFormat2["RGB9_E5"] = WebGL2RenderingContext.RGB9_E5] = "RGB9_E5";
    TextureFormat2[TextureFormat2["RGB16F"] = WebGL2RenderingContext.RGB16F] = "RGB16F";
    TextureFormat2[TextureFormat2["RGB32F"] = WebGL2RenderingContext.RGB32F] = "RGB32F";
    TextureFormat2[TextureFormat2["RGB8UI"] = WebGL2RenderingContext.RGB8UI] = "RGB8UI";
    TextureFormat2[TextureFormat2["RGBA8"] = WebGL2RenderingContext.RGBA8] = "RGBA8";
    TextureFormat2[TextureFormat2["SRGB8_ALPHA8"] = WebGL2RenderingContext.SRGB8_ALPHA8] = "SRGB8_ALPHA8";
    TextureFormat2[TextureFormat2["RGB5_A1"] = WebGL2RenderingContext.RGB5_A1] = "RGB5_A1";
    TextureFormat2[TextureFormat2["RGB10_A2"] = WebGL2RenderingContext.RGB10_A2] = "RGB10_A2";
    TextureFormat2[TextureFormat2["RGBA4"] = WebGL2RenderingContext.RGBA4] = "RGBA4";
    TextureFormat2[TextureFormat2["RGBA16F"] = WebGL2RenderingContext.RGBA16F] = "RGBA16F";
    TextureFormat2[TextureFormat2["RGBA32F"] = WebGL2RenderingContext.RGBA32F] = "RGBA32F";
    TextureFormat2[TextureFormat2["RGBA8UI"] = WebGL2RenderingContext.RGBA8UI] = "RGBA8UI";
    TextureFormat2[TextureFormat2["DEPTH_COMPONENT"] = WebGL2RenderingContext.DEPTH_COMPONENT] = "DEPTH_COMPONENT";
    TextureFormat2[TextureFormat2["DEPTH_STENCIL"] = WebGL2RenderingContext.DEPTH_STENCIL] = "DEPTH_STENCIL";
    TextureFormat2[TextureFormat2["DEPTH24_STENCIL8"] = WebGL2RenderingContext.DEPTH24_STENCIL8] = "DEPTH24_STENCIL8";
    TextureFormat2[TextureFormat2["DEPTH32F_STENCIL8"] = WebGL2RenderingContext.DEPTH32F_STENCIL8] = "DEPTH32F_STENCIL8";
    TextureFormat2[TextureFormat2["DEPTH_COMPONENT24"] = WebGL2RenderingContext.DEPTH_COMPONENT24] = "DEPTH_COMPONENT24";
    TextureFormat2[TextureFormat2["DEPTH_COMPONENT32F"] = WebGL2RenderingContext.DEPTH_COMPONENT32F] = "DEPTH_COMPONENT32F";
  })(TextureFormat || (TextureFormat = {}));
  function mapGLFormat(gl, format) {
    const map = {
      [TextureFormat.RGB]: [gl.RGB, gl.RGB, gl.UNSIGNED_BYTE],
      [TextureFormat.RGBA]: [gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE],
      [TextureFormat.LUMINANCE_ALPHA]: [gl.LUMINANCE_ALPHA, gl.LUMINANCE_ALPHA, gl.UNSIGNED_BYTE],
      [TextureFormat.LUMINANCE]: [gl.LUMINANCE, gl.LUMINANCE, gl.UNSIGNED_BYTE],
      [TextureFormat.ALPHA]: [gl.ALPHA, gl.ALPHA, gl.UNSIGNED_BYTE],
      [TextureFormat.R8]: [gl.R8, gl.RED, gl.UNSIGNED_BYTE],
      [TextureFormat.R16F]: [gl.R16F, gl.RED, gl.HALF_FLOAT],
      [TextureFormat.R32F]: [gl.R32F, gl.RED, gl.FLOAT],
      [TextureFormat.R8UI]: [gl.R8UI, gl.RED_INTEGER, gl.UNSIGNED_BYTE],
      [TextureFormat.RG8]: [gl.RG8, gl.RG, gl.UNSIGNED_BYTE],
      [TextureFormat.RG16F]: [gl.RG16F, gl.RG, gl.HALF_FLOAT],
      [TextureFormat.RG32F]: [gl.RG32F, gl.RG, gl.FLOAT],
      [TextureFormat.RG8UI]: [gl.RG8UI, gl.RG_INTEGER, gl.UNSIGNED_BYTE],
      [TextureFormat.RGB8]: [gl.RGB8, gl.RGB, gl.UNSIGNED_BYTE],
      [TextureFormat.SRGB8]: [gl.SRGB8, gl.RGB, gl.UNSIGNED_BYTE],
      [TextureFormat.RGB565]: [gl.RGB565, gl.RGB, gl.UNSIGNED_BYTE],
      [TextureFormat.R11F_G11F_B10F]: [gl.R11F_G11F_B10F, gl.RGB, gl.UNSIGNED_INT_10F_11F_11F_REV],
      [TextureFormat.RGB9_E5]: [gl.RGB9_E5, gl.RGB, gl.HALF_FLOAT],
      [TextureFormat.RGB16F]: [gl.RGB16F, gl.RGB, gl.HALF_FLOAT],
      [TextureFormat.RGB32F]: [gl.RGB32F, gl.RGB, gl.FLOAT],
      [TextureFormat.RGB8UI]: [gl.RGB8UI, gl.RGB_INTEGER, gl.UNSIGNED_BYTE],
      [TextureFormat.RGBA8]: [gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE],
      [TextureFormat.SRGB8_ALPHA8]: [gl.SRGB8_ALPHA8, gl.RGBA, gl.UNSIGNED_BYTE],
      [TextureFormat.RGB5_A1]: [gl.RGB5_A1, gl.RGBA, gl.UNSIGNED_BYTE],
      [TextureFormat.RGB10_A2]: [gl.RGB10_A2, gl.RGBA, gl.UNSIGNED_INT_2_10_10_10_REV],
      [TextureFormat.RGBA4]: [gl.RGBA4, gl.RGBA, gl.UNSIGNED_BYTE],
      [TextureFormat.RGBA16F]: [gl.RGBA16F, gl.RGBA, gl.HALF_FLOAT],
      [TextureFormat.RGBA32F]: [gl.RGBA32F, gl.RGBA, gl.FLOAT],
      [TextureFormat.RGBA8UI]: [gl.RGBA8UI, gl.RGBA_INTEGER, gl.UNSIGNED_BYTE],
      [TextureFormat.DEPTH_COMPONENT]: [gl.DEPTH_COMPONENT, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT],
      [TextureFormat.DEPTH_STENCIL]: [gl.DEPTH_STENCIL, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT],
      [TextureFormat.DEPTH_COMPONENT24]: [gl.DEPTH_COMPONENT24, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT],
      [TextureFormat.DEPTH_COMPONENT32F]: [gl.DEPTH_COMPONENT32F, gl.DEPTH_COMPONENT, gl.FLOAT]
    };
    return map[format];
  }

  // node_modules/zogra-renderer/dist/utils/image-sizing.js
  var ImageSizing;
  (function(ImageSizing2) {
    ImageSizing2[ImageSizing2["Stretch"] = 1] = "Stretch";
    ImageSizing2[ImageSizing2["Cover"] = 2] = "Cover";
    ImageSizing2[ImageSizing2["Contain"] = 3] = "Contain";
    ImageSizing2[ImageSizing2["KeepLower"] = 4] = "KeepLower";
    ImageSizing2[ImageSizing2["KeepHigher"] = 5] = "KeepHigher";
    ImageSizing2[ImageSizing2["Center"] = 6] = "Center";
  })(ImageSizing || (ImageSizing = {}));
  function imageResize(srcSize, dstSize, sizing) {
    let srcRect = new Rect(vec2.zero(), srcSize);
    let dstRect = new Rect(vec2.zero(), dstSize);
    if (sizing === ImageSizing.Contain) {
      let srcAspectRatio = srcSize.x / srcSize.y;
      let dstAspectRatio = dstSize.x / dstSize.y;
      if (srcAspectRatio > dstAspectRatio) {
        const delta = dstSize.y - srcSize.y * (dstSize.x / srcSize.x);
        dstRect.min.y += delta / 2;
        dstRect.max.y -= delta / 2;
      } else {
        const delta = dstSize.x - srcSize.x * (dstSize.y / srcSize.y);
        dstRect.min.x += delta / 2;
        dstRect.max.x -= delta / 2;
      }
    } else if (sizing === ImageSizing.Cover) {
      let srcAspectRatio = srcSize.x / srcSize.y;
      let dstAspectRatio = dstSize.x / dstSize.y;
      if (srcAspectRatio > dstAspectRatio) {
        const delta = srcSize.x - dstSize.x * (srcSize.y / dstSize.y);
        srcRect.min.x += delta / 2;
        srcRect.max.x -= delta / 2;
      } else {
        const delta = srcSize.y - dstSize.y * (srcSize.x / dstSize.x);
        srcRect.min.y += delta / 2;
        srcRect.max.y -= delta / 2;
      }
    } else {
      if (srcSize.x < dstSize.x) {
        switch (sizing) {
          case ImageSizing.Center:
            const delta = dstSize.x - srcSize.x;
            dstRect.min.x += delta / 2;
            dstRect.max.x -= delta / 2;
            break;
          case ImageSizing.KeepHigher:
            dstRect.min.x = dstSize.x - srcSize.x;
            break;
          case ImageSizing.KeepLower:
            dstRect.max.x = srcSize.x;
            break;
        }
      } else if (srcSize.x > dstSize.x) {
        switch (sizing) {
          case ImageSizing.Center:
            const delta = srcSize.x - dstSize.x;
            srcRect.min.x += delta / 2;
            srcRect.max.x -= delta / 2;
            break;
          case ImageSizing.KeepHigher:
            srcRect.min.x = srcSize.x - dstSize.x;
            break;
          case ImageSizing.KeepLower:
            srcRect.max.x = dstSize.x;
            break;
        }
      }
      if (srcSize.y < dstSize.y) {
        switch (sizing) {
          case ImageSizing.Center:
            const delta = dstSize.y - srcSize.y;
            dstRect.min.y += delta / 2;
            dstRect.max.y -= delta / 2;
            break;
          case ImageSizing.KeepHigher:
            dstRect.min.y = dstSize.y - srcSize.y;
            break;
          case ImageSizing.KeepLower:
            dstRect.max.y = srcSize.y;
            break;
        }
      } else if (srcSize.y > dstSize.y) {
        switch (sizing) {
          case ImageSizing.Center:
            const delta = srcSize.y - dstSize.y;
            srcRect.min.y += delta / 2;
            srcRect.max.y -= delta / 2;
            break;
          case ImageSizing.KeepHigher:
            srcRect.min.y = srcSize.y - dstSize.y;
            break;
          case ImageSizing.KeepLower:
            srcRect.max.y = dstSize.y;
            break;
        }
      }
    }
    return [srcRect, dstRect];
  }

  // node_modules/zogra-renderer/dist/core/frame-buffer.js
  var FrameBufferAttachment = {
    canvasOutput: {tex: null, attachPoint: WebGL2RenderingContext.BACK},
    fromRenderTexture: (rt) => ({tex: rt.glTex()})
  };
  var CanvasBuffer = class {
    get name() {
      return "";
    }
    get assetID() {
      return -1;
    }
    get width() {
      return GlobalContext().width;
    }
    get height() {
      return GlobalContext().height;
    }
    get size() {
      return GlobalContext().renderer.canvasSize;
    }
    bind() {
      const gl = GlobalContext().gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, this.width, this.height);
    }
    destroy() {
    }
  };
  var FrameBuffer = class extends GPUAsset {
    constructor(width = 0, height = 0, ctx2 = GlobalContext()) {
      super(ctx2);
      this.frameBuffer = null;
      this._colorAttachments = [];
      this._depthAttachment = null;
      this.activeBuffers = [];
      this.dirty = true;
      this.size = vec2(Math.floor(width), Math.floor(height));
      this.tryInit(false);
    }
    get width() {
      return this.size.x;
    }
    get height() {
      return this.size.y;
    }
    get colorAttachments() {
      return this._colorAttachments;
    }
    get depthAttachment() {
      return this._depthAttachment;
    }
    glFBO() {
      this.tryInit(true);
      return this.frameBuffer;
    }
    addColorAttachment(attachment, attachPoit = this._colorAttachments.length) {
      if (attachment.width !== this.size.x || attachment.height !== this.size.y)
        console.warn(`Color attachment size [${attachment.width}, ${attachment.height}] missmatch with framebuffer.`);
      this._colorAttachments[attachPoit] = attachment;
      this.dirty = true;
    }
    setDepthAttachment(attachment) {
      if (attachment.width !== this.size.x || attachment.height !== this.size.y)
        console.warn(`Depth attachment size [${attachment.width}, ${attachment.height}] missmatch with framebuffer.`);
      this._depthAttachment = attachment;
      this.dirty = true;
    }
    reset(width = this.width, height = this.height) {
      this.size.x = width;
      this.size.y = height;
      this._colorAttachments = [];
      this._depthAttachment = null;
      this.dirty = true;
    }
    init() {
      var _a;
      const gl = this.ctx.gl;
      this.frameBuffer = (_a = gl.createFramebuffer()) !== null && _a !== void 0 ? _a : panic("Failed to create frame buffer object");
      return true;
    }
    bind() {
      this.tryInit(true);
      const gl = this.ctx.gl;
      this.activeBuffers = [];
      gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
      for (let i2 = 0; i2 < this._colorAttachments.length; i2++) {
        if (this._colorAttachments[i2]) {
          this._colorAttachments[i2].bindFramebuffer(i2);
          this.activeBuffers.push(gl.COLOR_ATTACHMENT0 + i2);
        } else
          gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i2, gl.RENDERBUFFER, null);
      }
      if (this._depthAttachment) {
        this._depthAttachment.bindFramebuffer();
      } else
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, null);
      gl.viewport(0, 0, this.width, this.height);
      gl.drawBuffers(this.activeBuffers);
    }
    destroy() {
      super.destroy();
      const gl = this.ctx.gl;
      gl.deleteFramebuffer(this.frameBuffer);
    }
  };
  FrameBuffer.CanvasBuffer = Object.freeze(new CanvasBuffer());

  // node_modules/zogra-renderer/dist/core/texture.js
  var FilterMode;
  (function(FilterMode2) {
    FilterMode2[FilterMode2["Linear"] = WebGL2RenderingContext.LINEAR] = "Linear";
    FilterMode2[FilterMode2["Nearest"] = WebGL2RenderingContext.NEAREST] = "Nearest";
  })(FilterMode || (FilterMode = {}));
  var WrapMode;
  (function(WrapMode2) {
    WrapMode2[WrapMode2["Repeat"] = WebGL2RenderingContext.REPEAT] = "Repeat";
    WrapMode2[WrapMode2["Clamp"] = WebGL2RenderingContext.CLAMP_TO_EDGE] = "Clamp";
    WrapMode2[WrapMode2["Mirror"] = WebGL2RenderingContext.MIRRORED_REPEAT] = "Mirror";
  })(WrapMode || (WrapMode = {}));
  var TextureResizing;
  (function(TextureResizing2) {
    TextureResizing2[TextureResizing2["Discard"] = 0] = "Discard";
    TextureResizing2[TextureResizing2["Stretch"] = 1] = "Stretch";
    TextureResizing2[TextureResizing2["Cover"] = 2] = "Cover";
    TextureResizing2[TextureResizing2["Contain"] = 3] = "Contain";
    TextureResizing2[TextureResizing2["KeepLower"] = 4] = "KeepLower";
    TextureResizing2[TextureResizing2["KeepHigher"] = 5] = "KeepHigher";
    TextureResizing2[TextureResizing2["Center"] = 6] = "Center";
  })(TextureResizing || (TextureResizing = {}));
  var TextureBase = class extends Asset {
    constructor(width, height, format = TextureFormat.RGBA, filterMode = FilterMode.Linear, ctx2 = GlobalContext()) {
      super();
      this.autoMipmap = true;
      this.wrapMode = WrapMode.Repeat;
      this._glTex = null;
      this.initialized = false;
      this.created = false;
      this.name = `Texture_${this.assetID}`;
      this.ctx = ctx2;
      this.format = format;
      this.width = width;
      this.height = height;
      this.filterMode = filterMode;
      this.tryInit(false);
    }
    get size() {
      return vec2(this.width, this.height);
    }
    glTex() {
      this.create();
      return this._glTex;
    }
    bind(unit) {
      this.create();
      const gl = this.ctx.gl;
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, this._glTex);
    }
    unbind(unit) {
      this.create();
      const gl = this.ctx.gl;
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
    destroy() {
      if (!this.initialized || this.destroyed)
        return;
      const gl = this.ctx.gl;
      gl.deleteTexture(this._glTex);
      super.destroy();
    }
    resize(width, height, textureContent = TextureResizing.Discard) {
      this.tryInit(true);
      const gl = this.ctx.gl;
      let oldTex = TextureBase.wrapGlTex(this._glTex, this.width, this.height, this.format, this.filterMode, this.ctx);
      let newTex = new RenderTexture(width, height, false, this.format, this.filterMode, this.ctx);
      newTex.wrapMode = this.wrapMode;
      newTex.autoMipmap = this.autoMipmap;
      newTex.create();
      newTex.updateParameters();
      const prevSize = this.size;
      this.width = width;
      this.height = height;
      switch (textureContent) {
        case TextureResizing.Discard:
          break;
        default:
          const [srcRect, dstrEect] = imageResize(prevSize, newTex.size, textureContent);
          this.ctx.renderer.blit(oldTex, newTex, this.ctx.assets.materials.blitCopy, srcRect, dstrEect);
          break;
      }
      if (this.autoMipmap)
        newTex.generateMipmap();
      this._glTex = newTex._glTex;
      gl.deleteTexture(oldTex._glTex);
      return this;
    }
    generateMipmap() {
      this.create();
      const gl = this.ctx.gl;
      gl.bindTexture(gl.TEXTURE_2D, this._glTex);
      gl.generateMipmap(gl.TEXTURE_2D);
    }
    updateParameters() {
      this.create();
      const gl = this.ctx.gl;
      gl.bindTexture(gl.TEXTURE_2D, this._glTex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this.filterMode);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this.filterMode);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this.wrapMode);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this.wrapMode);
    }
    create() {
      if (this.created)
        return;
      this.tryInit(true);
      const gl = this.ctx.gl;
      gl.bindTexture(gl.TEXTURE_2D, this._glTex);
      const [internalFormat, format, type] = mapGLFormat(gl, this.format);
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, this.width, this.height, 0, format, type, null);
      this.created = true;
      this.updateParameters();
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
    setData(pixels) {
      this.create();
      const gl = this.ctx.gl;
      gl.bindTexture(gl.TEXTURE_2D, this._glTex);
      flipTexture(this.ctx, this._glTex, pixels, this.width, this.height, this.format, this.filterMode, this.wrapMode, 0);
    }
    tryInit(required = false) {
      var _a;
      if (this.initialized)
        return true;
      const ctx2 = this.ctx || GlobalContext();
      if (!ctx2) {
        if (required)
          throw new Error("Failed to initialize texture without a global GL context");
        return false;
      }
      const gl = ctx2.gl;
      this._glTex = (_a = gl.createTexture()) !== null && _a !== void 0 ? _a : panic("Failed to create texture.");
      this.initialized = true;
      return true;
    }
    static wrapGlTex(glTex, width, height, format = TextureFormat.RGBA, filterMode = FilterMode.Linear, ctx2 = GlobalContext()) {
      var texture = new TextureBase(width, height, format, filterMode, ctx2);
      texture._glTex = glTex;
      texture.initialized = true;
      texture.created = true;
      return texture;
    }
  };
  var Texture2D = class extends TextureBase {
    constructor(width = 0, height = 0, format = TextureFormat.RGBA, filterMode = FilterMode.Linear, ctx2 = GlobalContext()) {
      super(width, height, format, filterMode, ctx2);
    }
    setData(pixels) {
      if (pixels.width !== void 0 && pixels.height !== void 0) {
        pixels = pixels;
        this.width = pixels.width;
        this.height = pixels.height;
      }
      super.setData(pixels);
    }
    clone() {
      if (!this.created)
        this.create();
      let rt = new RenderTexture(this.width, this.height, false, this.format, this.filterMode, this.ctx);
      this.ctx.renderer.blit(this, rt);
      let tex = new Texture2D(this.width, this.height, this.format, this.filterMode, this.ctx);
      tex._glTex = rt.glTex();
      tex.initialized = true;
      tex.created = true;
      return tex;
    }
  };
  var DepthTexture = class extends TextureBase {
    constructor(width, height, ctx2 = GlobalContext()) {
      super(width, height, TextureFormat.DEPTH_COMPONENT32F, FilterMode.Nearest, ctx2);
      this.autoMipmap = false;
    }
    bindFramebuffer() {
      this.create();
      const gl = this.ctx.gl;
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_COMPONENT32F, gl.TEXTURE_2D, this._glTex, 0);
    }
  };
  var RenderTexture = class extends TextureBase {
    constructor(width, height, depth = false, format = TextureFormat.RGBA, filterMode = FilterMode.Linear, ctx2 = GlobalContext()) {
      super(width, height, format, filterMode, ctx2);
      this.depthTexture = null;
      if (depth) {
        this.depthTexture = new DepthTexture(width, height, ctx2);
      }
    }
    setData(pixels) {
      super.setData(pixels);
    }
    destroy() {
      var _a;
      if (!this.initialized || this.destroyed)
        return;
      (_a = this.depthTexture) === null || _a === void 0 ? void 0 : _a.destroy();
      super.destroy();
    }
    bindFramebuffer(attachment) {
      this.create();
      const gl = this.ctx.gl;
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + attachment, gl.TEXTURE_2D, this._glTex, 0);
    }
    createFramebuffer() {
      this.create();
      const fbo = new FrameBuffer(this.width, this.height);
      fbo.addColorAttachment(this, 0);
      return fbo;
    }
  };
  function flipTexture(ctx2, dst, src, width, height, texFormat, filterMode, wrapMode, mipmapLevel) {
    var _a, _b;
    const gl = ctx2.gl;
    const renderer = ctx2.renderer;
    const srcTex = (_a = gl.createTexture()) !== null && _a !== void 0 ? _a : panic("Failed to create texture.");
    const [internalFormat, format, type] = mapGLFormat(gl, texFormat);
    gl.bindTexture(gl.TEXTURE_2D, srcTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapMode);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapMode);
    if (src.width !== void 0 && src.height !== void 0) {
      src = src;
      gl.texImage2D(gl.TEXTURE_2D, mipmapLevel, internalFormat, format, type, src);
    } else {
      src = src;
      gl.texImage2D(gl.TEXTURE_2D, mipmapLevel, internalFormat, width, height, 0, format, type, src);
    }
    const fbo = (_b = gl.createFramebuffer()) !== null && _b !== void 0 ? _b : panic("Failed to create frame buffer");
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, dst, 0);
    gl.viewport(0, 0, width, height);
    gl.drawBuffers([gl.COLOR_ATTACHMENT0]);
    gl.disable(gl.CULL_FACE);
    const shader = ctx2.assets.shaders.FlipTexture;
    shader.use();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, srcTex);
    gl.uniform1i(shader.uniformLocation(BuiltinUniformNames.mainTex), 0);
    const mesh = ctx2.assets.meshes.screenQuad;
    mesh.bind();
    gl.drawElements(gl.TRIANGLE_STRIP, mesh.indices.length, gl.UNSIGNED_INT, 0);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.deleteFramebuffer(fbo);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.deleteTexture(srcTex);
  }

  // node_modules/zogra-renderer/dist/core/material.js
  var __decorate2 = function(decorators, target, key, desc) {
    var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r2 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i2 = decorators.length - 1; i2 >= 0; i2--)
        if (d = decorators[i2])
          r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
    return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
  };
  var ValueReference;
  (function(ValueReference2) {
    ValueReference2[ValueReference2["Field"] = 0] = "Field";
    ValueReference2[ValueReference2["Dynamic"] = 1] = "Dynamic";
  })(ValueReference || (ValueReference = {}));
  var Material = class extends Asset {
    constructor(shader, gl = GL()) {
      super();
      this.properties = {};
      this.textureCount = 0;
      this.boundTextures = [];
      this.initialized = false;
      this.name = `Material_${this.assetID}`;
      this.gl = gl;
      this._shader = shader;
      this.pipelineStateOverride = Object.assign({}, shader.pipelineStates);
    }
    get shader() {
      return this._shader;
    }
    upload(data) {
      this.tryInit(true);
      this.setupPipelineStateOverride();
      for (const uniformName in this.properties) {
        const prop = this.properties[uniformName];
        const value = prop.key ? this[prop.key] : prop.value;
        if (value !== void 0)
          this.uploadUniform(prop, value);
      }
    }
    setProp(uniformName, type, value) {
      this.tryInit(true);
      const prop = this.getOrCreatePropInfo(uniformName, type);
      if (type !== prop.type) {
        console.warn("Uniform type missmatch");
        return;
      }
      if (prop.key)
        this[prop.key] = value;
      else {
        prop.value = value;
      }
    }
    unbindRenderTextures() {
      this.tryInit(true);
      const gl = this.gl;
      for (let unit = 0; unit < this.boundTextures.length; unit++) {
        const texture = this.boundTextures[unit];
        if (texture instanceof RenderTexture) {
          texture.unbind(unit);
        }
      }
      this.boundTextures.length = 0;
    }
    tryInit(required = false) {
      if (this.initialized)
        return true;
      const gl = this.gl || GL();
      if (!gl) {
        if (required)
          throw new Error("Failed to intialize material without global GL context");
        return false;
      }
      this.gl = gl;
      for (const key in this) {
        const propInfo = getShaderProp(this, key);
        if (!propInfo)
          continue;
        const prop = this.getOrCreatePropInfo(propInfo.name, propInfo.type);
        prop.key = key;
      }
      this.initialized = true;
      return true;
    }
    setUniformDirectly(uniformName, type, value) {
      if (value === void 0)
        throw new Error("");
      this.tryInit(true);
      const prop = this.getOrCreatePropInfo(uniformName, type);
      if (!prop.location)
        return;
      this.uploadUniform(prop, value);
    }
    getOrCreatePropInfo(uniformName, type) {
      let prop = this.properties[uniformName];
      if (prop)
        return prop;
      if (type === "tex2d") {
        prop = {
          type,
          value: void 0,
          uploaed: void 0,
          location: this.shader.uniformLocation(uniformName)
        };
      } else if (type === "tex2d[]") {
        prop = {
          type,
          value: void 0,
          uploaded: void 0,
          location: this.shader.uniformLocation(uniformName),
          buffer: new Array()
        };
      } else if (type.endsWith("[]"))
        prop = {
          type,
          value: void 0,
          uploaded: void 0,
          location: this.shader.uniformLocation(uniformName),
          buffer: new Float32Array()
        };
      else {
        prop = {
          type,
          value: void 0,
          uploaded: void 0,
          location: this.shader.uniformLocation(uniformName)
        };
      }
      this.properties[uniformName] = prop;
      return prop;
    }
    setPipelineStateOverride(settings) {
      let blend = false;
      let blendRGB = [Blending.One, Blending.Zero];
      let blendAlpha = [Blending.One, Blending.OneMinusSrcAlpha];
      if (typeof settings.blend === "number" && settings.blend !== Blending.Disable) {
        blend = true;
        blendRGB = [settings.blend, settings.blend];
        blendAlpha = [settings.blend, settings.blend];
      } else if (settings.blend instanceof Array) {
        blend = true;
        blendRGB = settings.blend;
      }
      if (settings.blendRGB) {
        blend = settings.blend !== false && settings.blend !== Blending.Disable;
        blendRGB = settings.blendRGB;
      }
      if (settings.blendAlpha) {
        blend = settings.blend !== false && settings.blend !== Blending.Disable;
        blendAlpha = settings.blendAlpha;
      }
      this.pipelineStateOverride = {
        depth: settings.depth || DepthTest.Less,
        blend,
        blendRGB,
        blendAlpha,
        zWrite: settings.zWrite === false ? false : true,
        cull: settings.cull || Culling.Back
      };
    }
    setupPipelineStateOverride() {
      const gl = this.gl;
      if (this.pipelineStateOverride.depth === DepthTest.Disable)
        gl.disable(gl.DEPTH_TEST);
      else {
        gl.enable(gl.DEPTH_TEST);
        gl.depthMask(this.pipelineStateOverride.zWrite);
        gl.depthFunc(this.pipelineStateOverride.depth);
      }
      if (!this.pipelineStateOverride.blend)
        gl.disable(gl.BLEND);
      else {
        const [srcRGB, dstRGB] = this.pipelineStateOverride.blendRGB;
        const [srcAlpha, dstAlpha] = this.pipelineStateOverride.blendAlpha;
        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
      }
      if (this.pipelineStateOverride.cull === Culling.Disable)
        gl.disable(gl.CULL_FACE);
      else {
        gl.enable(gl.CULL_FACE);
        gl.cullFace(this.pipelineStateOverride.cull);
        gl.frontFace(gl.CCW);
      }
    }
    uploadUniform(prop, value) {
      var _a;
      const gl = this.gl;
      const ctx2 = GlobalContext();
      if (!prop.location)
        return false;
      let dirty = false;
      if (prop.uploaded === null && value === null && prop.type !== "tex2d")
        return false;
      let uploaded = value;
      switch (prop.type) {
        case "int":
          gl.uniform1i(prop.location, value);
          break;
        case "float":
          gl.uniform1f(prop.location, value);
          break;
        case "vec2":
          gl.uniform2fv(prop.location, value);
          break;
        case "vec3":
          gl.uniform3fv(prop.location, value);
          break;
        case "vec4":
          gl.uniform4fv(prop.location, value);
          break;
        case "color":
          gl.uniform4fv(prop.location, value);
          break;
        case "mat4":
          gl.uniformMatrix4fv(prop.location, false, value);
          break;
        case "int[]":
          value.length && gl.uniform1iv(prop.location, value);
          break;
        case "float[]":
          value.length && gl.uniform1fv(prop.location, value);
          break;
        case "vec2[]": {
          const length5 = this.setVectorUniformBuffer(prop, 2, value);
          length5 && gl.uniform2fv(prop.location, prop.buffer, 0, length5);
          break;
        }
        case "vec3[]": {
          const length5 = this.setVectorUniformBuffer(prop, 3, value);
          length5 && gl.uniform3fv(prop.location, prop.buffer, 0, length5);
          break;
        }
        case "color[]":
        case "vec4[]": {
          const length5 = this.setVectorUniformBuffer(prop, 4, value);
          length5 && gl.uniform4fv(prop.location, prop.buffer, 0, length5);
          break;
        }
        case "mat4[]": {
          const length5 = this.setVectorUniformBuffer(prop, 16, value);
          length5 && gl.uniform4fv(prop.location, prop.buffer, 0, length5);
          break;
        }
        case "tex2d": {
          const texProp = prop;
          value = value || ctx2.renderer.assets.textures.default;
          let unit = this.bindNextTexture(value);
          if (texProp.uploaded !== unit) {
            gl.uniform1i(texProp.location, unit);
            texProp.uploaded = unit;
          }
          uploaded = unit;
          break;
        }
        case "tex2d[]": {
          const texProp = prop;
          const texArray = value;
          let shouldUpload = false;
          const uniformValues = texProp.uploaded || [];
          for (let i2 = 0; i2 < texArray.length; i2++) {
            const tex = texArray[i2] || ctx2.renderer.assets.textures.default;
            let unit = this.bindNextTexture(tex);
            if (((_a = texProp.uploaded) === null || _a === void 0 ? void 0 : _a[i2]) !== unit)
              shouldUpload = true;
            uniformValues[i2] = unit;
          }
          if (shouldUpload) {
            gl.uniform1iv(texProp.location, uniformValues, 0, texArray.length);
            texProp.uploaded = uniformValues;
          }
          uploaded = uniformValues;
        }
      }
      prop.uploaded = uploaded;
    }
    bindNextTexture(texture) {
      texture.bind(this.boundTextures.length);
      return this.boundTextures.push(texture) - 1;
    }
    setVectorUniformBuffer(prop, elementSize, valueArray) {
      if (prop.buffer.length < elementSize * valueArray.length) {
        prop.buffer = new Float32Array(elementSize * valueArray.length);
      }
      for (let i2 = 0; i2 < valueArray.length; i2++) {
        prop.buffer.set(valueArray[i2], i2 * elementSize);
      }
      return elementSize * valueArray.length;
    }
  };
  var shaderPropMetaKey = Symbol("shaderProp");
  function shaderProp(name, type) {
    return Reflect.metadata(shaderPropMetaKey, {name, type});
  }
  function getShaderProp(target, propKey) {
    return Reflect.getMetadata(shaderPropMetaKey, target, propKey);
  }
  function MaterialFromShader(shader) {
    return class Mat extends Material {
      constructor(gl = GL()) {
        super(shader, gl);
      }
    };
  }
  function SimpleTexturedMaterial(shader) {
    class Mat extends MaterialFromShader(shader) {
      constructor() {
        super(...arguments);
        this.texture = null;
        this.color = new Color(1, 1, 1, 1);
      }
    }
    __decorate2([
      shaderProp(BuiltinUniformNames.mainTex, "tex2d")
    ], Mat.prototype, "texture", void 0);
    __decorate2([
      shaderProp(BuiltinUniformNames.color, "color")
    ], Mat.prototype, "color", void 0);
    return Mat;
  }
  function materialDefine(constructor) {
    return class extends constructor {
      constructor(...arg) {
        super(...arg);
      }
    };
  }

  // node_modules/zogra-renderer/dist/builtin-assets/materials.js
  var __decorate3 = function(decorators, target, key, desc) {
    var c = arguments.length, r2 = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r2 = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i2 = decorators.length - 1; i2 >= 0; i2--)
        if (d = decorators[i2])
          r2 = (c < 3 ? d(r2) : c > 3 ? d(target, key, r2) : d(target, key)) || r2;
    return c > 3 && r2 && Object.defineProperty(target, key, r2), r2;
  };
  function createBuiltinMaterial(gl, types, shaders, textures) {
    const errorMat = new Material(shaders.ErrorShader, gl);
    errorMat.setProp("uMainTex", "tex2d", textures.error);
    return {
      error: errorMat,
      default: new types.DefaultMaterial(gl),
      blitCopy: new types.BlitCopy(gl),
      ColoredLine: new Material(shaders.ColoredLine, gl)
    };
  }
  function createBuiltinMaterialTypes(gl, builtinTexs, shaders) {
    let DefaultMaterial = class DefaultMaterial extends MaterialFromShader(shaders.DefaultShader) {
      constructor() {
        super(...arguments);
        this.color = Color.white;
        this.mainTexture = builtinTexs.default;
      }
    };
    __decorate3([
      shaderProp("uColor", "color")
    ], DefaultMaterial.prototype, "color", void 0);
    __decorate3([
      shaderProp("uMainTex", "tex2d")
    ], DefaultMaterial.prototype, "mainTexture", void 0);
    DefaultMaterial = __decorate3([
      materialDefine
    ], DefaultMaterial);
    let BlitCopy = class BlitCopy extends MaterialFromShader(shaders.BlitCopy) {
      constructor() {
        super(...arguments);
        this.source = null;
        this.flip = vec2(0, 0);
      }
    };
    __decorate3([
      shaderProp("uMainTex", "tex2d")
    ], BlitCopy.prototype, "source", void 0);
    __decorate3([
      shaderProp("uFlip", "vec2")
    ], BlitCopy.prototype, "flip", void 0);
    BlitCopy = __decorate3([
      materialDefine
    ], BlitCopy);
    let DefaultLit = class DefaultLit extends MaterialFromShader(shaders.DefaultShader) {
      constructor() {
        super(...arguments);
        this.color = Color.white;
        this.mainTexture = builtinTexs.default;
        this.normalTexture = builtinTexs.defaultNormal;
        this.emission = Color.black;
        this.specular = Color.white;
        this.metiallic = 0.023;
        this.smoothness = 0.5;
        this.fresnel = 5;
      }
    };
    __decorate3([
      shaderProp("uColor", "color")
    ], DefaultLit.prototype, "color", void 0);
    __decorate3([
      shaderProp("uMainTex", "tex2d")
    ], DefaultLit.prototype, "mainTexture", void 0);
    __decorate3([
      shaderProp("uNormalTex", "tex2d")
    ], DefaultLit.prototype, "normalTexture", void 0);
    __decorate3([
      shaderProp("uEmission", "color")
    ], DefaultLit.prototype, "emission", void 0);
    __decorate3([
      shaderProp("uSpecular", "color")
    ], DefaultLit.prototype, "specular", void 0);
    __decorate3([
      shaderProp("uMetallic", "float")
    ], DefaultLit.prototype, "metiallic", void 0);
    __decorate3([
      shaderProp("uSmoothness", "float")
    ], DefaultLit.prototype, "smoothness", void 0);
    __decorate3([
      shaderProp("uFresnel", "float")
    ], DefaultLit.prototype, "fresnel", void 0);
    DefaultLit = __decorate3([
      materialDefine
    ], DefaultLit);
    return {
      DefaultMaterial,
      BlitCopy,
      DefaultLit
    };
  }

  // node_modules/zogra-renderer/dist/builtin-assets/textures.js
  function createDefaultTextures(context) {
    var _a;
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx2 = (_a = canvas.getContext("2d")) !== null && _a !== void 0 ? _a : panic("Failed to create default texture.");
    ctx2.fillStyle = "black";
    ctx2.fillRect(0, 0, size, size);
    ctx2.fillStyle = "cyan";
    ctx2.fillRect(0, 0, size / 2, size / 2);
    ctx2.fillRect(size / 2, size / 2, size / 2, size / 2);
    const errorTex = new Texture2D(size, size, TextureFormat.RGBA, FilterMode.Linear, context);
    errorTex.setData(canvas);
    errorTex.name = "Texture-Error";
    ctx2.fillStyle = "blue";
    ctx2.fillRect(0, 0, size, size);
    const defaultNormalTex = new Texture2D(size, size, TextureFormat.RGBA, FilterMode.Linear, context);
    defaultNormalTex.setData(canvas);
    defaultNormalTex.name = "Default-Normal";
    ctx2.fillStyle = "white";
    ctx2.fillRect(0, 0, size, size);
    const defaultTex = new Texture2D(size, size, TextureFormat.RGBA, FilterMode.Linear, context);
    defaultTex.setData(canvas);
    defaultTex.name = "Default-White";
    return {
      default: defaultTex,
      defaultNormal: defaultNormalTex,
      error: errorTex
    };
  }

  // node_modules/zogra-renderer/dist/utils/mesh-builder.js
  var MeshBuilder = class {
    constructor(verticesCapacity = 16, trianglesCapacity = verticesCapacity * 3, structure = DefaultVertexData, ctx2 = GlobalContext()) {
      this.verticesCount = 0;
      this.indicesCount = 0;
      this.mesh = new Mesh(structure, ctx2);
      this.mesh.resize(verticesCapacity, trianglesCapacity);
    }
    addPolygon(...verts) {
      if (verts.length <= 0)
        return;
      if (this.verticesCount + verts.length > this.mesh.vertices.length) {
        this.mesh.resize(this.mesh.vertices.length * 2, this.mesh.indices.length * 2, true);
      }
      const base = this.verticesCount;
      for (const key in verts[0]) {
        for (let i2 = 0; i2 < verts.length; i2++) {
          this.mesh.vertices[base + i2][key].set(verts[i2][key]);
        }
      }
      for (let i2 = 0; i2 < verts.length - 2; i2++) {
        this.mesh.indices[this.indicesCount + i2 * 3 + 0] = base + 0;
        this.mesh.indices[this.indicesCount + i2 * 3 + 1] = base + i2 + 1;
        this.mesh.indices[this.indicesCount + i2 * 3 + 2] = base + i2 + 2;
      }
      this.verticesCount += verts.length;
      this.indicesCount += (verts.length - 2) * 3;
    }
    toMesh() {
      if (this.mesh.indices.length != this.indicesCount)
        this.mesh.resize(this.verticesCount, this.indicesCount, true);
      else if (this.mesh.vertices.length != this.verticesCount)
        this.mesh.vertices.resize(this.verticesCount, true);
      return this.mesh;
    }
    static quad(center = vec2.zero(), size = vec2.one(), ctx2 = GlobalContext()) {
      const halfSize = vec2.mul(size, 0.5);
      const mesh = new Mesh(ctx2);
      mesh.resize(4, 6);
      mesh.vertices[0].vert.set([center.x - halfSize.x, center.y - halfSize.y, 0]);
      mesh.vertices[1].vert.set([center.x + halfSize.x, center.y - halfSize.y, 0]);
      mesh.vertices[2].vert.set([center.x + halfSize.x, center.y + halfSize.y, 0]);
      mesh.vertices[3].vert.set([center.x - halfSize.x, center.y + halfSize.y, 0]);
      mesh.vertices[0].uv.set([0, 0]);
      mesh.vertices[1].uv.set([1, 0]);
      mesh.vertices[2].uv.set([1, 1]);
      mesh.vertices[3].uv.set([0, 1]);
      mesh.vertices[0].normal.set([0, 0, 1]);
      mesh.vertices[1].normal.set([0, 0, 1]);
      mesh.vertices[2].normal.set([0, 0, 1]);
      mesh.vertices[3].normal.set([0, 0, 1]);
      mesh.vertices[0].color.fill(1);
      mesh.vertices[1].color.fill(1);
      mesh.vertices[2].color.fill(1);
      mesh.vertices[3].color.fill(1);
      mesh.indices.set([0, 1, 2, 0, 2, 3]);
      return mesh;
    }
    static ndcQuad(ctx2 = GlobalContext()) {
      return this.quad(vec2.zero(), vec2(2, 2), ctx2);
    }
    static ndcTriangle(ctx2 = GlobalContext()) {
      const mesh = new Mesh(ctx2);
      mesh.resize(3, 3);
      mesh.vertices[0].vert.set([-1, -1, 0]);
      mesh.vertices[1].vert.set([3, -1, 0]);
      mesh.vertices[2].vert.set([-1, 3, 0]);
      mesh.vertices[0].uv.set([0, 0]);
      mesh.vertices[1].uv.set([2, 0]);
      mesh.vertices[2].uv.set([0, 2]);
      mesh.vertices[0].normal.set([0, 0, 1]);
      mesh.vertices[1].normal.set([0, 0, 1]);
      mesh.vertices[2].normal.set([0, 0, 1]);
      mesh.vertices[0].color.fill(1);
      mesh.vertices[1].color.fill(1);
      mesh.vertices[2].color.fill(1);
      mesh.indices.set([0, 1, 2]);
      mesh.name = "mesh_ndc_triangle";
      return mesh;
    }
    static cube(center = vec32.zero(), size = vec32.one(), ctx2 = GlobalContext()) {
      const verts = [
        vec32(-0.5, -0.5, -0.5).mul(size).plus(center),
        vec32(0.5, -0.5, -0.5).mul(size).plus(center),
        vec32(0.5, 0.5, -0.5).mul(size).plus(center),
        vec32(-0.5, 0.5, -0.5).mul(size).plus(center),
        vec32(-0.5, -0.5, 0.5).mul(size).plus(center),
        vec32(0.5, -0.5, 0.5).mul(size).plus(center),
        vec32(0.5, 0.5, 0.5).mul(size).plus(center),
        vec32(-0.5, 0.5, 0.5).mul(size).plus(center)
      ];
      const uvs = [
        vec2(0, 0),
        vec2(1, 0),
        vec2(1, 1),
        vec2(0, 1)
      ];
      const mb = new MeshBuilder(24, 36, DefaultVertexData, ctx2);
      mb.addPolygon({
        vert: verts[1],
        uv: uvs[0],
        normal: vec32(0, 0, -1)
      }, {
        vert: verts[0],
        uv: uvs[1],
        normal: vec32(0, 0, -1)
      }, {
        vert: verts[3],
        uv: uvs[2],
        normal: vec32(0, 0, -1)
      }, {
        vert: verts[2],
        uv: uvs[3],
        normal: vec32(0, 0, -1)
      });
      mb.addPolygon({
        vert: verts[5],
        uv: uvs[0],
        normal: vec32(1, 0, 0)
      }, {
        vert: verts[1],
        uv: uvs[1],
        normal: vec32(1, 0, 0)
      }, {
        vert: verts[2],
        uv: uvs[2],
        normal: vec32(1, 0, 0)
      }, {
        vert: verts[6],
        uv: uvs[3],
        normal: vec32(1, 0, 0)
      });
      mb.addPolygon({
        vert: verts[4],
        uv: uvs[0],
        normal: vec32(0, 0, 1)
      }, {
        vert: verts[5],
        uv: uvs[1],
        normal: vec32(0, 0, 1)
      }, {
        vert: verts[6],
        uv: uvs[2],
        normal: vec32(0, 0, 1)
      }, {
        vert: verts[7],
        uv: uvs[3],
        normal: vec32(0, 0, 1)
      });
      mb.addPolygon({
        vert: verts[0],
        uv: uvs[0],
        normal: vec32(-1, 0, 0)
      }, {
        vert: verts[4],
        uv: uvs[1],
        normal: vec32(-1, 0, 0)
      }, {
        vert: verts[7],
        uv: uvs[2],
        normal: vec32(-1, 0, 0)
      }, {
        vert: verts[3],
        uv: uvs[3],
        normal: vec32(-1, 0, 0)
      });
      mb.addPolygon({
        vert: verts[7],
        uv: uvs[0],
        normal: vec32(0, 1, 0)
      }, {
        vert: verts[6],
        uv: uvs[1],
        normal: vec32(0, 1, 0)
      }, {
        vert: verts[2],
        uv: uvs[2],
        normal: vec32(0, 1, 0)
      }, {
        vert: verts[3],
        uv: uvs[3],
        normal: vec32(0, 1, 0)
      });
      mb.addPolygon({
        vert: verts[0],
        uv: uvs[0],
        normal: vec32(0, -1, 0)
      }, {
        vert: verts[1],
        uv: uvs[1],
        normal: vec32(0, -1, 0)
      }, {
        vert: verts[5],
        uv: uvs[2],
        normal: vec32(0, -1, 0)
      }, {
        vert: verts[4],
        uv: uvs[3],
        normal: vec32(0, -1, 0)
      });
      const mesh = mb.toMesh();
      mesh.vertices.forEach((vert) => vert.color.fill(1));
      mesh.name = "mesh_cube";
      return mesh;
    }
    static sphereNormalizedCube(center = vec32.zero(), radius = 0.5, segments = 12, ctx2 = GlobalContext()) {
      const totalVerts = 6 * (segments + 1) * (segments + 1);
      const totalIndices = segments * segments * 3 * 2 * 6;
      let mesh = new Mesh();
      mesh.resize(totalVerts, totalIndices);
      let indexIdx = 0;
      const uniqueVerts = [];
      const uniqueVertsMap = [];
      for (let f = 0; f < 6; ++f) {
        for (let i2 = 0; i2 <= segments; ++i2) {
          for (let j = 0; j <= segments; ++j) {
            let idx = [
              () => vec32(0, i2, j),
              () => vec32(segments, i2, j),
              () => vec32(i2, j, 0),
              () => vec32(i2, j, segments),
              () => vec32(i2, 0, j),
              () => vec32(i2, segments, j)
            ][f]();
            let x = uniqueVertsMap[idx.x] || (uniqueVertsMap[idx.x] = []);
            let y = x[idx.y] || (x[idx.y] = []);
            let z = y[idx.z];
            if (z === void 0) {
              y[idx.z] = uniqueVerts.length;
              uniqueVerts.push(idx);
            }
          }
        }
      }
      mesh.resize(uniqueVerts.length, totalIndices);
      uniqueVerts.forEach((vertIdx, idx) => {
        let normal = vec32.div(vertIdx, segments).mul(2).minus(1).normalize();
        let pos = vec32.mul(normal, radius);
        const [_, theta, phi] = sphericalCoord(pos);
        const uv = [phi / (Math.PI * 2), theta / Math.PI];
        mesh.vertices[idx].vert.set(pos);
        mesh.vertices[idx].normal.set(normal);
        mesh.vertices[idx].color.set(Color.white);
        mesh.vertices[idx].uv.set(uv);
        mesh.vertices[idx].uv2.set(uv);
      });
      const usedVerts = [];
      for (let f = 0; f < 6; ++f) {
        for (let i2 = 0; i2 <= segments; ++i2) {
          for (let j = 0; j <= segments; ++j) {
            let vertIdx = [
              () => vec32(segments, i2, j),
              () => vec32(0, i2, segments - j),
              () => vec32(i2, j, segments),
              () => vec32(i2, segments - j, 0),
              () => vec32(i2, segments, segments - j),
              () => vec32(i2, 0, j)
            ][f]();
            usedVerts.push(uniqueVertsMap[vertIdx.x][vertIdx.y][vertIdx.z]);
          }
        }
        for (let i2 = 0; i2 < segments; ++i2) {
          for (let j = 0; j < segments; ++j) {
            let u = f * (segments + 1) * (segments + 1) + i2 * (segments + 1) + j;
            let v2 = u + (segments + 1);
            mesh.indices[indexIdx++] = usedVerts[v2 + 0];
            mesh.indices[indexIdx++] = usedVerts[u + 1];
            mesh.indices[indexIdx++] = usedVerts[u + 0];
            mesh.indices[indexIdx++] = usedVerts[v2 + 0];
            mesh.indices[indexIdx++] = usedVerts[v2 + 1];
            mesh.indices[indexIdx++] = usedVerts[u + 1];
          }
        }
      }
      return mesh;
    }
  };
  function sphericalCoord(p) {
    const r2 = p.magnitude;
    const theta = Math.acos(p.y / r2);
    const phi = Math.atan2(p.z, p.x);
    return [r2, theta, phi];
  }

  // node_modules/zogra-renderer/dist/builtin-assets/mesh.js
  function createBuiltinMesh(ctx2) {
    return {
      quad: MeshBuilder.quad(vec2.zero(), vec2.one(), ctx2),
      screenQuad: MeshBuilder.ndcQuad(ctx2),
      cube: MeshBuilder.cube(vec32.zero(), vec32.one(), ctx2)
    };
  }

  // node_modules/zogra-renderer/dist/builtin-assets/assets.js
  var BuiltinAssets = class {
    constructor(ctx2) {
      const gl = ctx2.gl;
      this.gl = gl;
      ctx2.assets = this;
      this.BuiltinUniforms = BuiltinUniformNames;
      this.shaderSources = n;
      this.shaders = compileBuiltinShaders(gl);
      this.meshes = createBuiltinMesh(ctx2);
      this.textures = createDefaultTextures(ctx2);
      this.types = createBuiltinMaterialTypes(gl, this.textures, this.shaders);
      this.materials = createBuiltinMaterial(gl, this.types, this.shaders, this.textures);
    }
  };

  // node_modules/zogra-renderer/dist/utils/object-pool.js
  var ObjectPool = class {
    constructor(allocator) {
      this.pool = [];
      this.allocator = allocator;
    }
    get(...args) {
      if (this.pool.length <= 0)
        return this.allocator(...args);
      return this.pool.pop();
    }
    release(obj) {
      this.pool.push(obj);
    }
  };

  // node_modules/zogra-renderer/dist/core/renderer.js
  var ZograRenderer = class {
    constructor(canvasElement, width, height) {
      this.viewProjectionMatrix = mat4.identity();
      this.viewMatrix = mat4.identity();
      this.projectionMatrix = mat4.identity();
      this.target = FrameBuffer.CanvasBuffer;
      this.shader = null;
      this.globalUniforms = new Map();
      this.globalTextures = new Map();
      this.framebufferPool = new ObjectPool((w, h) => new FrameBuffer(w, h));
      this.blitFramebuffer = [new FrameBuffer(), new FrameBuffer()];
      this.canvas = canvasElement;
      this.width = width === void 0 ? canvasElement.width : width;
      this.height = height === void 0 ? canvasElement.height : height;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.scissor = new Rect(vec2.zero(), vec2(this.width, this.height));
      this.gl = panicNull(this.canvas.getContext("webgl2"), "WebGL2 is not support on current device.");
      this.gl.getExtension("EXT_color_buffer_float");
      this.gl.getExtension("EXT_color_buffer_half_float");
      this.gl.getExtension("WEBGL_depth_texture");
      console.log(this.gl.getExtension("WEBGL_depth_texture") || this.gl.getExtension("MOZ_WEBGL_depth_texture") || this.gl.getExtension("WEBKIT_WEBGL_depth_texture"));
      console.log(this.gl.getSupportedExtensions());
      this.ctx = new GLContext();
      Object.assign(this.ctx, {
        gl: this.gl,
        width: this.width,
        height: this.height,
        assets: {},
        renderer: this
      });
      this.assets = new BuiltinAssets(this.ctx);
      this.ctx.assets = this.assets;
      if (!GlobalContext())
        this.use();
      this.helperAssets = {
        clipBlitMesh: MeshBuilder.ndcQuad(),
        blitMesh: MeshBuilder.ndcTriangle(),
        depthBlitTex: new DepthTexture(this.width, this.height)
      };
    }
    use() {
      setGlobalContext(this.ctx);
    }
    setSize(width, height) {
      width = Math.floor(width);
      height = Math.floor(height);
      this.canvas.width = width;
      this.canvas.height = height;
      this.width = width;
      this.height = height;
      this.ctx.width = width;
      this.ctx.height = height;
    }
    get canvasSize() {
      return vec2(this.width, this.height);
    }
    setViewProjection(view, projection) {
      mat4.mul(this.viewProjectionMatrix, projection, view);
    }
    setFramebuffer(colorAttachments, depthAttachment) {
      let newFramebuffer;
      if (colorAttachments === FrameBuffer.CanvasBuffer)
        newFramebuffer = FrameBuffer.CanvasBuffer;
      else if (colorAttachments instanceof FrameBuffer) {
        newFramebuffer = colorAttachments;
      } else {
        if (colorAttachments instanceof Array) {
          let width = 0, height = 0;
          if (colorAttachments.length > 0) {
            width = colorAttachments[0].width;
            height = colorAttachments[0].height;
          } else if (depthAttachment) {
            width = depthAttachment.width;
            height = depthAttachment.height;
          }
          const framebuffer = this.getTempFramebuffer(width, height);
          for (let i2 = 0; i2 < colorAttachments.length; i2++)
            framebuffer.addColorAttachment(colorAttachments[i2], i2);
          if (depthAttachment)
            framebuffer.setDepthAttachment(depthAttachment);
          newFramebuffer = framebuffer;
        } else {
          const colorAttachment = colorAttachments;
          const framebuffer = this.getTempFramebuffer(colorAttachment.width, colorAttachment.height);
          framebuffer.addColorAttachment(colorAttachment, 0);
          if (depthAttachment)
            framebuffer.setDepthAttachment(depthAttachment);
          newFramebuffer = framebuffer;
        }
      }
      if (newFramebuffer !== this.target) {
        this.detachCurrentFramebuffer();
        this.target = newFramebuffer;
      }
      this.scissor.min.set([0, 0]);
      this.scissor.max.set(this.target.size);
      this.target.bind();
    }
    detachCurrentFramebuffer() {
      if (this.target.__isTemp) {
        this.framebufferPool.release(this.target);
      }
    }
    getTempFramebuffer(width, height) {
      const framebuffer = this.framebufferPool.get(width, height);
      framebuffer.__isTemp = true;
      framebuffer.reset(width, height);
      return framebuffer;
    }
    blitCopy(src, dst) {
      const gl = this.gl;
      const [readBuffer, writeBuffer] = this.blitFramebuffer;
      readBuffer.reset(src.width, src.height);
      readBuffer.addColorAttachment(src);
      readBuffer.bind();
      writeBuffer.reset(src.width, src.height);
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, readBuffer.glFBO());
      src instanceof RenderTexture ? gl.framebufferTexture2D(gl.READ_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, src.glTex(), 0) : gl.framebufferRenderbuffer(gl.READ_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, src.glBuf());
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, writeBuffer.glFBO());
      dst instanceof RenderTexture ? gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, dst.glTex(), 0) : gl.framebufferRenderbuffer(gl.DRAW_FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, dst.glBuf());
      gl.blitFramebuffer(0, 0, src.width, src.height, 0, 0, dst.width, dst.height, gl.COLOR_BUFFER_BIT, gl.NEAREST);
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
      gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
    }
    blitCopyDepth(src, dst) {
      const gl = this.gl;
      if (src instanceof DepthBuffer) {
        const depthTex = this.helperAssets.depthBlitTex;
        depthTex.resize(src.width, src.height);
        const [readBuffer, writeBuffer] = this.blitFramebuffer;
        readBuffer.reset(src.width, src.height);
        readBuffer.bind();
        writeBuffer.reset(src.width, src.height);
        writeBuffer.bind();
        gl.bindFramebuffer(gl.READ_FRAMEBUFFER, readBuffer.glFBO());
        gl.framebufferRenderbuffer(gl.READ_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, src.glBuf());
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, writeBuffer.glFBO());
        gl.framebufferTexture2D(gl.DRAW_FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depthTex.glTex(), 0);
        gl.blitFramebuffer(0, 0, src.width, src.height, 0, 0, dst.width, dst.height, gl.DEPTH_BUFFER_BIT, gl.NEAREST);
        src = depthTex;
      }
      this.blit(src, dst);
    }
    clear(color = Color.black, clearDepth = true) {
      this.target.bind();
      this.setupScissor();
      this.gl.clearColor(color.r, color.g, color.b, color.a);
      this.gl.clearDepth(1);
      this.gl.depthMask(clearDepth);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT | this.gl.STENCIL_BUFFER_BIT);
    }
    blit(src, dst, material = this.assets.materials.blitCopy, srcRect, dstRect) {
      const prevTarget = this.target;
      this.setFramebuffer(dst);
      dst = this.target;
      const prevVP = this.viewProjectionMatrix;
      let mesh = this.helperAssets.blitMesh;
      let viewport = dst === FrameBuffer.CanvasBuffer ? new Rect(vec2.zero(), this.canvasSize) : new Rect(vec2.zero(), dst.size.clone());
      if (src && (srcRect || dstRect)) {
        viewport = dstRect || viewport;
        if (srcRect) {
          mesh = this.helperAssets.clipBlitMesh;
          let uvMin = div4(srcRect.min, src.size);
          let uvMax = div4(srcRect.max, src.size);
          mesh.uvs = [
            vec2(uvMin.x, uvMin.y),
            vec2(uvMax.x, uvMin.y),
            vec2(uvMax.x, uvMax.y),
            vec2(uvMin.x, uvMax.y)
          ];
          mesh.update();
        }
      }
      this.target = dst;
      this.scissor = viewport;
      this.viewProjectionMatrix = mat4.identity();
      if (src)
        material.setProp(BuiltinUniformNames.mainTex, "tex2d", src);
      this.drawMesh(mesh, mat4.identity(), material);
      this.setFramebuffer(prevTarget);
      this.viewProjectionMatrix = prevVP;
    }
    useShader(shader) {
      const gl = this.gl;
      this.shader = shader;
      shader.use();
    }
    setupTransforms(shader, transformModel) {
      const gl = this.gl;
      const mvp = mat4.mul(this.viewProjectionMatrix, transformModel);
      const mit = mat4.create();
      if (mat4.invert(mit, transformModel))
        mat4.transpose(mit, mit);
      else
        mit.fill(0);
      const mvit = mat4.mul(this.viewMatrix, transformModel);
      if (mat4.invert(mvit, mvit))
        mat4.transpose(mvit, mvit);
      else
        mvit.fill(0);
      shader.setupBuiltinUniform({
        matM: transformModel,
        matVP: this.viewProjectionMatrix,
        matMVP: mvp,
        matM_IT: mit,
        matMV_IT: mvit
      });
    }
    setupGlobalUniforms(material) {
      for (const val of this.globalUniforms.values()) {
        material.setUniformDirectly(val.name, val.type, val.value);
      }
    }
    drawMeshInstance(mesh, buffer, material, count) {
      if (!material)
        material = this.assets.materials.error;
      const gl = this.gl;
      const data = {
        assets: this.assets,
        gl,
        nextTextureUnit: 0,
        size: vec2(this.width, this.height)
      };
      this.target.bind();
      this.setupScissor();
      this.useShader(material.shader);
      material.upload(data);
      this.setupTransforms(material.shader, mat4.identity());
      const elementCount = mesh.bind();
      buffer.bindVertexArray(true, material.shader.attributes);
      gl.drawElementsInstanced(gl.TRIANGLES, elementCount, gl.UNSIGNED_INT, 0, count);
      buffer.unbindVertexArray(true, material.shader.attributes);
      mesh.unbind();
      material.unbindRenderTextures();
    }
    drawMeshProceduralInstance(mesh, material, count) {
      if (!material)
        material = this.assets.materials.error;
      const gl = this.gl;
      const data = {
        assets: this.assets,
        gl,
        nextTextureUnit: 0,
        size: vec2(this.width, this.height)
      };
      this.target.bind();
      this.setupScissor();
      this.useShader(material.shader);
      material.upload(data);
      this.setupTransforms(material.shader, mat4.identity());
      const elementCount = mesh.bind();
      gl.drawElementsInstanced(gl.TRIANGLES, elementCount, gl.UNSIGNED_INT, 0, count);
      material.unbindRenderTextures();
    }
    drawMesh(mesh, transform, material) {
      if (!material)
        material = this.assets.materials.error;
      const gl = this.gl;
      const data = {
        assets: this.assets,
        gl,
        nextTextureUnit: 0,
        size: vec2(this.width, this.height)
      };
      this.target.bind();
      this.setupScissor();
      this.useShader(material.shader);
      material.upload(data);
      this.setupTransforms(material.shader, transform);
      this.setupGlobalUniforms(material);
      let elementCount = mesh.bind();
      gl.drawElements(gl.TRIANGLES, elementCount, gl.UNSIGNED_INT, 0);
      mesh.unbind();
      material.unbindRenderTextures();
    }
    drawLines(lines, transform, material) {
      const gl = this.gl;
      const data = {
        assets: this.assets,
        gl,
        nextTextureUnit: 0,
        size: vec2(this.width, this.height)
      };
      this.target.bind();
      this.setupScissor();
      this.useShader(material.shader);
      material.upload(data);
      this.setupTransforms(material.shader, transform);
      lines.bind(material.shader);
      gl.drawElements(gl.LINES, lines.lines.length, gl.UNSIGNED_INT, 0);
    }
    setGlobalUniform(name, type, value) {
      this.globalUniforms.set(name, {
        name,
        type,
        value
      });
    }
    unsetGlobalUniform(name) {
      this.globalUniforms.delete(name);
    }
    setupScissor() {
      const gl = this.gl;
      gl.viewport(this.scissor.xMin, this.scissor.yMin, this.scissor.size.x, this.scissor.size.y);
    }
  };

  // node_modules/zogra-renderer/dist/core/render-buffer.js
  var DepthBuffer = class extends GPUAsset {
    constructor(width, height, multiSampling = 0, ctx2 = GlobalContext()) {
      super(ctx2);
      this.multiSampling = 0;
      this.format = TextureFormat.DEPTH_COMPONENT;
      this._glBuf = null;
      this.size = vec2(width, height);
      this.format = TextureFormat.DEPTH_COMPONENT;
      this.multiSampling = multiSampling;
      this.tryInit(false);
    }
    glBuf() {
      this.tryInit(true);
      return this._glBuf;
    }
    get width() {
      return this.size.x;
    }
    set width(w) {
      this.size.x = w;
    }
    get height() {
      return this.size.y;
    }
    set height(h) {
      this.size.y = h;
    }
    updateParams() {
      this.tryInit(true);
      const gl = this.ctx.gl;
      gl.bindRenderbuffer(gl.RENDERBUFFER, this._glBuf);
      gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.multiSampling, WebGL2RenderingContext.DEPTH_COMPONENT32F, this.size.x, this.size.y);
    }
    init() {
      var _a;
      const gl = this.ctx.gl;
      this._glBuf = (_a = gl.createRenderbuffer()) !== null && _a !== void 0 ? _a : panic("Failed to create render buffer.");
      gl.bindRenderbuffer(gl.RENDERBUFFER, this._glBuf);
      gl.renderbufferStorageMultisample(gl.RENDERBUFFER, this.multiSampling, WebGL2RenderingContext.DEPTH_COMPONENT32F, this.size.x, this.size.y);
      gl.bindRenderbuffer(gl.RENDERBUFFER, null);
      return true;
    }
    bindFramebuffer() {
      this.tryInit(true);
      const gl = this.ctx.gl;
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this._glBuf);
    }
    destroy() {
      super.destroy();
      const gl = this.ctx.gl;
      gl.deleteRenderbuffer(this._glBuf);
    }
  };

  // node_modules/zogra-renderer/dist/plugins/assets-importer/assets-importer.js
  var AssetsImporter = class {
    constructor(importers2) {
      this.importers = importers2;
    }
    async url(url, ctx2 = GlobalContext()) {
      const buffer = await fetch(url).then((r2) => r2.arrayBuffer());
      return await this.buffer(buffer, ctx2);
    }
    async blob(blob, ctx2 = GlobalContext()) {
      const buffer = await blob.arrayBuffer();
      return await this.buffer(buffer, ctx2);
    }
    async buffer(buffer, ctx2 = GlobalContext()) {
      const bufImporters = {};
      for (const key in this.importers) {
        bufImporters[key] = (options) => this.importers[key].import(buffer, options, ctx2);
      }
      return bufImporters;
    }
  };

  // node_modules/zogra-renderer/dist/plugins/texture-importer/texture-importer.js
  var Texture2DImporter = {
    import(buffer, options, ctx2 = GlobalContext()) {
      return new Promise((resolve, reject) => {
        const blob = new Blob([buffer]);
        const img = new Image();
        img.src = URL.createObjectURL(blob);
        const complete = () => {
          const defulatOptions = {
            width: img.width,
            height: img.height,
            filterMode: FilterMode.Linear,
            format: TextureFormat.RGBA,
            mipmap: true,
            wrapMpde: WrapMode.Repeat
          };
          const opt = Object.assign(Object.assign({}, defulatOptions), options);
          const tex = new Texture2D(opt.width, opt.height, opt.format, opt.filterMode, ctx2);
          tex.autoMipmap = opt.mipmap;
          tex.wrapMode = opt.wrapMpde;
          tex.updateParameters();
          tex.setData(img);
          resolve(tex);
        };
        if (img.complete)
          complete();
        else
          img.onload = complete;
      });
    }
  };
  var importers = {
    tex2d: Texture2DImporter
  };
  var TextureImporter = new AssetsImporter(importers);

  // node_modules/zogra-renderer/dist/utils/public-utils.js
  var public_utils_exports = {};
  __export(public_utils_exports, {
    ImageSizing: () => ImageSizing,
    imageResize: () => imageResize
  });

  // assets/img/raindrop.png
  var raindrop_default = __toBinary("iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QIZBzY36WJJGwAAABJ0RVh0RmlsZSBOYW1lAM60serM4i0xjMwnJwAAOd9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMS0wMi0yNVQxNTo1NDo1MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNTVhOWVmYy1kMmYwLTBkNDItYTcwYS02ZGY5M2UwNjljYWE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2NjBiMDZmYi0xZjczLWFkNDQtYWQwMS1kNGU5ZDlhOTE4NDM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjYwYjA2ZmItMWY3My1hZDQ0LWFkMDEtZDRlOWQ5YTkxODQzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PsD6WFoAAAAYdEVYdFNvZnR3YXJlAEFkb2JlIFBob3Rvc2hvcDTLjmcAAAAPdEVYdFdyaXRlcgBTdXBlclBOR8XEr90AACAASURBVHja7V3pduPMCgTZz32f/LO4P6KFpllb7YyTKOfMxIvseFEVRUHT+L//wf1z/9w/f/RnuT+C++f++bs/z/sj+DU/+M1/j+6P/CaA++d3gnvWa7pJ4iaA++eHA/0d7+cmhpsA7p9fCPjR930Twk0AN+B/KInQTQg3Adw/7wUn/tD3SDch3ARwg/4zwF59XnrT36SLz3OTwU0Avwr4+A/+5uznpgvPS4Ov6yaCmwD+FOi/W1nQxeemgceO/s2bDG4C+Hjg4xuO/WQFMEIKV8ngJoKbAD4K+DOBjG98nVdVAQ6SAk0mg5sIbgL4McDHN98/gxCo8Dw0AHYsksFNBDcBfCzwr4L+Hfd9x/unpArAAmFklAbdRHATwE8H/qzb300Eo8DHJCHQAHDxJoKb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");

  // src/shader/2d-vert.glsl
  var d_vert_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec3 aPos;\r\nin vec4 aColor;\r\nin vec2 aUV;\r\nin vec3 aNormal;\r\n\r\nuniform mat4 uTransformM;\r\nuniform mat4 uTransformVP;\r\nuniform mat4 uTransformMVP;\r\nuniform mat4 uTransformM_IT;\r\n\r\nout vec4 vColor;\r\nout vec4 vPos;\r\nout vec2 vUV;\r\nout vec3 vNormal;\r\nout vec3 vWorldPos;\r\n\r\nvoid main()\r\n{\r\n    gl_Position = uTransformMVP * vec4(aPos, 1);\r\n    vPos = gl_Position;\r\n    vColor = aColor;\r\n    vUV = aUV;\r\n    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r\n    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r\n    \r\n}";

  // src/shader/blur.glsl
  var blur_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec4 vColor;\r\nin vec4 vPos;\r\nin vec2 vUV;\r\n\r\nuniform sampler2D uMainTex;\r\nuniform vec4 uTexSize; // (w, h, 1/w, 1/h)\r\nuniform float uSampleOffset;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main()\r\n{\r\n    vec2 delta = vec2(-uSampleOffset, uSampleOffset);\r\n    vec4 color = \r\n      texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xx, vec2(0), vec2(1)))\r\n    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yx, vec2(0), vec2(1)))\r\n    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yy, vec2(0), vec2(1)))\r\n    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xy, vec2(0), vec2(1)));\r\n\r\n    color /= vec4(4.0);\r\n\r\n    fragColor = color.rgba;\r\n}";

  // src/blur.ts
  var MaterialBlur = class extends MaterialFromShader(new Shader(d_vert_default, blur_default)) {
    constructor() {
      super(...arguments);
      this.texture = null;
      this.textureSize = vec42.one();
      this.sampleOffset = 1;
    }
  };
  __decorate([
    shaderProp("uMainTex", "tex2d")
  ], MaterialBlur.prototype, "texture", 2);
  __decorate([
    shaderProp("uTexSize", "vec4")
  ], MaterialBlur.prototype, "textureSize", 2);
  __decorate([
    shaderProp("uSampleOffset", "float")
  ], MaterialBlur.prototype, "sampleOffset", 2);
  var BlurRenderer = class {
    constructor(renderer) {
      this.steps = [];
      this.mateiralBlur = new MaterialBlur();
      this.renderer = renderer;
    }
    init(texture) {
      if (!this.steps[0]) {
        this.steps[0] = new RenderTexture(texture.width, texture.height, false, texture.format, texture.filterMode);
        this.steps[0].wrapMode = WrapMode.Clamp;
        this.steps[0].updateParameters();
      }
      if (this.steps[0].width !== texture.width || this.steps[0].height !== texture.height)
        this.steps[0].resize(texture.width, texture.height, TextureResizing.Discard);
    }
    blur(texture, iteration = 4, output = this.steps[0]) {
      if (!this.steps[0])
        this.steps[0] = new RenderTexture(texture.width, texture.height, false, texture.format, texture.filterMode);
      output = output || this.steps[0];
      if (this.steps[0].width !== texture.width || this.steps[0].height !== texture.height)
        this.steps[0].resize(texture.width, texture.height, TextureResizing.Discard);
      this.downSample(texture, iteration);
      return this.upSample(iteration, output);
    }
    downSample(input, iteration) {
      for (let i2 = 1; i2 <= iteration; i2++) {
        const downSize = vec2.floor(div4(input.size, vec2(2)));
        if (!this.steps[i2]) {
          this.steps[i2] = new RenderTexture(downSize.x, downSize.y, false, TextureFormat.RGBA, FilterMode.Linear);
          this.steps[i2].wrapMode = WrapMode.Clamp;
          this.steps[i2].updateParameters();
        }
        const output = this.steps[i2];
        if (output.width !== downSize.x || output.height !== downSize.y)
          output.resize(downSize.x, downSize.y, TextureResizing.Discard);
        this.mateiralBlur.texture = input;
        this.mateiralBlur.textureSize = vec42(input.width, input.height, 1 / input.width, 1 / input.height);
        this.mateiralBlur.sampleOffset = 1;
        this.renderer.blit(input, output, this.mateiralBlur);
        input = output;
      }
    }
    upSample(iteration, finalOutput = this.steps[0]) {
      let input = this.steps[iteration];
      for (let i2 = iteration - 1; i2 >= 0; i2--) {
        const upSize = mul6(input.size, vec2(2));
        if (!this.steps[i2]) {
          this.steps[i2] = new RenderTexture(upSize.x, upSize.y, false, TextureFormat.RGBA, FilterMode.Linear);
          this.steps[i2].wrapMode = WrapMode.Clamp;
          this.steps[i2].updateParameters();
        }
        const output = i2 === 0 ? finalOutput : this.steps[i2];
        this.mateiralBlur.texture = input;
        this.mateiralBlur.textureSize = vec42(input.width, input.height, 1 / input.width, 1 / input.height);
        this.mateiralBlur.sampleOffset = 1;
        this.renderer.blit(input, output, this.mateiralBlur);
        input = output;
      }
      return input;
    }
  };

  // src/random.ts
  function randomInRect(rect) {
    return vec2(Math.random(), Math.random()).mul(rect.size).plus(rect.min);
  }
  function random5() {
    return Math.random() * 2 - 1;
  }
  function randomRange(min4, max4) {
    return Math.random() * (max4 - min4) + min4;
  }

  // src/shader/2d-frag.glsl
  var d_frag_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec4 vColor;\r\nin vec4 vPos;\r\nin vec2 vUV;\r\n\r\nuniform sampler2D uMainTex;\r\nuniform vec4 uColor;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main()\r\n{\r\n    vec4 color = texture(uMainTex, vUV.xy).rgba;\r\n    color.rgba = color * uColor;\r\n    fragColor = color.rgba;\r\n}";

  // src/shader/bg-mist.glsl
  var bg_mist_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec2 vUV;\r\n\r\nuniform sampler2D uMainTex;\r\nuniform sampler2D uMistTex;\r\nuniform vec4 uMistColor;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main()\r\n{\r\n    vec4 color = texture(uMainTex, vUV.xy).rgba;\r\n    color.rgb += vec3(uMistColor);\r\n    color.a = texture(uMistTex, vUV.xy).r * uMistColor.a;\r\n    fragColor = color.rgba;\r\n}";

  // src/shader/compose.glsl
  var compose_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec4 vColor;\r\nin vec4 vPos;\r\nin vec2 vUV;\r\n\r\nuniform sampler2D uMainTex;\r\nuniform vec4 uBackgroundSize; // (x, y, 1/x, 1/y)\r\nuniform sampler2D uRaindropTex;\r\nuniform sampler2D uDropletTex;\r\nuniform sampler2D uMistTex;\r\nuniform vec4 uColor;\r\nuniform vec2 uSmoothRaindrop;\r\nuniform vec2 uRefractParams; // (refractBase, refractScale)\r\nuniform vec4 uLightPos;\r\nuniform vec4 uDiffuseColor; // (color.rgb, shadowOffset)\r\nuniform vec4 uSpecularParams; // (color.rgb, exponent)\r\nuniform float uBump;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main()\r\n{\r\n    // vec3 lightPos = vec3(0.5, 1, 1);\r\n\r\n    vec4 raindrop = texture(uRaindropTex, vUV.xy).rgba;\r\n    vec4 droplet = texture(uDropletTex, vUV.xy).rgba;\r\n    float mist = texture(uMistTex, vUV.xy).r;\r\n\r\n    vec4 compose = vec4(raindrop.rgb + droplet.rgb - vec3(2.0) * raindrop.rgb * droplet.rgb, max(droplet.a, raindrop.a));\r\n\r\n    float mask = smoothstep(uSmoothRaindrop.x, uSmoothRaindrop.y, compose.a);\r\n    \r\n    vec2 uv = vUV.xy + -(compose.xy - vec2(0.5)) * vec2(compose.b * uRefractParams.y + uRefractParams.x);\r\n    vec3 normal = normalize(vec3((compose.xy - vec2(0.5)) * vec2(2), 1.0));\r\n\r\n    // vec3 lightDir = lightPos - vec3(vUV, 0);\r\n    vec3 lightDir = uLightPos.xyz - uLightPos.w * vec3(vUV.xy, 0.0);\r\n    vec3 viewDir = vec3(0, 0, 1);\r\n    vec3 halfDir = normalize(lightDir + viewDir);\r\n    float lambertian = clamp(dot(normalize(lightDir), normal), 0.0, 1.0);\r\n    float blinnPhon = pow(max(dot(normal, halfDir), 0.0), uSpecularParams.a);\r\n\r\n\r\n    // offset = pow(offset, vec2(2));\r\n    vec4 color = texture(uMainTex, uv.xy).rgba;\r\n    vec3 diffuse = vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);\r\n\r\n    color.rgb += vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);\r\n    color.rgb += vec3(blinnPhon) * uSpecularParams.rgb;\r\n    \r\n\r\n    // fragColor = vec4(mask, mask, mask, 1);\r\n    // color = color * vec3(uColor);\r\n\r\n    fragColor = vec4(color.rgb, mask);// vec4(color.rgb, mask);\r\n}";

  // src/shader/droplet-vert.glsl
  var droplet_vert_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec3 aPos;\r\nin vec2 aUV;\r\n\r\nuniform mat4 uTransformVP;\r\n\r\nuniform float uSeed;\r\nuniform vec4 uSpawnRect; // (xmin, ymin, xsize, ysize)\r\nuniform vec2 uSizeRange; \r\n\r\nout vec2 vUV;\r\n\r\n// Gold Noise \xA92015 dcerisano@standard3d.com\r\n// - based on the Golden Ratio\r\n// - uniform normalized distribution\r\n// - fastest static noise generator function (also runs at low precision)\r\n// Ref: https://www.shadertoy.com/view/ltB3zD\r\nconst float PHI = 1.61803398874989484820459; // \u03A6 = Golden Ratio \r\n\r\nfloat gold_noise(in vec2 xy, in float seed)\r\n{\r\n    return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);\r\n}\r\n\r\nvec2 lerp(vec2 a, vec2 b, vec2 t)\r\n{\r\n    return a + (b - a) * t;\r\n}\r\n\r\nvoid main()\r\n{\r\n    int id = gl_InstanceID + 1;\r\n    vec2 pos = uSpawnRect.xy + uSpawnRect.zw * vec2(\r\n        gold_noise(vec2(1, id), uSeed + 1.0),\r\n        gold_noise(vec2(id, 1), uSeed + 2.0));\r\n\r\n    vec2 size = vec2(\r\n        gold_noise(vec2(1, id), uSeed + 3.0),\r\n        gold_noise(vec2(id, 1), uSeed + 4.0));\r\n    size = lerp(vec2(uSizeRange.x), vec2(uSizeRange.y), size);\r\n    \r\n    mat4 model = mat4(size.x, 0.0, 0.0, 0.0,  \r\n                      0.0, size.x, 0.0, 0.0,  \r\n                      0.0, 0.0, 1, 0.0,  \r\n                      pos.x, pos.y, 0.0, 1.0); \r\n    mat4 mvp = uTransformVP * model;\r\n    gl_Position = mvp * vec4(aPos, 1);\r\n    vUV = aUV;\r\n}";

  // src/shader/droplet.glsl
  var droplet_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec2 vUV;\r\n\r\nuniform sampler2D uMainTex;\r\nuniform vec4 uColor;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main()\r\n{\r\n    vec4 color = texture(uMainTex, vUV.xy).rgba;\r\n    color.rgb *= color.a;\r\n    fragColor = vec4(color.rg, 0.0, color.a);\r\n}";

  // src/shader/erase.glsl
  var erase_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec4 vColor;\r\nin vec4 vPos;\r\nin vec2 vUV;\r\n\r\nuniform sampler2D uMainTex;\r\nuniform vec4 uColor;\r\nuniform vec2 uEraserSmooth;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main()\r\n{\r\n    vec4 color = texture(uMainTex, vUV.xy).rgba;\r\n    color.a = smoothstep(uEraserSmooth.x, uEraserSmooth.y, color.a);\r\n    fragColor = color.rgba;\r\n}";

  // src/shader/raindrop-frag.glsl
  var raindrop_frag_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec4 vColor;\r\nin vec4 vPos;\r\nin vec2 vUV;\r\nin float vSize;\r\n\r\nuniform sampler2D uMainTex;\r\nuniform float uSize;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main()\r\n{\r\n    vec4 color = texture(uMainTex, vUV.xy).rgba;\r\n    \r\n    fragColor = vec4(color.rg * color.a, vSize * color.a, color.a);\r\n}";

  // src/shader/raindrop-vert.glsl
  var raindrop_vert_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec3 aPos;\r\nin vec4 aColor;\r\nin vec2 aUV;\r\nin vec3 aNormal;\r\n\r\nin float aSize;\r\nin mat4 aModelMatrix;\r\n\r\nuniform mat4 uTransformM;\r\nuniform mat4 uTransformVP;\r\nuniform mat4 uTransformMVP;\r\nuniform mat4 uTransformM_IT;\r\n\r\nout vec4 vColor;\r\nout vec4 vPos;\r\nout vec2 vUV;\r\nout vec3 vNormal;\r\nout vec3 vWorldPos;\r\nout float vSize;\r\n\r\nvoid main()\r\n{\r\n    mat4 mvp = uTransformVP * aModelMatrix;\r\n    gl_Position = mvp * vec4(aPos, 1);\r\n    vPos = gl_Position;\r\n    vColor = aColor;\r\n    vUV = aUV;\r\n    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r\n    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r\n    vSize = aSize;\r\n}";

  // src/renderer.ts
  var RaindropInstanceStruct = BufferStructure({
    size: "float",
    modelMatrix: "mat4"
  });
  var RaindropMaterial = class extends MaterialFromShader(new Shader(raindrop_vert_default, raindrop_frag_default, {
    blendRGB: [Blending.OneMinusDstColor, Blending.OneMinusSrcColor],
    depth: DepthTest.Disable,
    zWrite: false,
    attributes: {
      size: "aSize",
      modelMatrix: "aModelMatrix"
    }
  })) {
    constructor() {
      super(...arguments);
      this.texture = null;
      this.size = 0;
    }
  };
  __decorate([
    shaderProp("uMainTex", "tex2d")
  ], RaindropMaterial.prototype, "texture", 2);
  __decorate([
    shaderProp("uSize", "float")
  ], RaindropMaterial.prototype, "size", 2);
  var DropletMaterial = class extends MaterialFromShader(new Shader(droplet_vert_default, droplet_default, {
    vertexStructure: DefaultVertexData,
    blendRGB: [Blending.OneMinusDstColor, Blending.OneMinusSrcColor],
    depth: DepthTest.Disable,
    zWrite: false,
    attributes: {
      size: "aSize",
      modelMatrix: "aModelMatrix"
    }
  })) {
    constructor() {
      super(...arguments);
      this.texture = null;
      this.spawnRect = vec42(0, 0, 1, 1);
      this.sizeRange = vec2(10, 20);
      this.seed = 1;
    }
  };
  __decorate([
    shaderProp("uMainTex", "tex2d")
  ], DropletMaterial.prototype, "texture", 2);
  __decorate([
    shaderProp("uSpawnRect", "vec4")
  ], DropletMaterial.prototype, "spawnRect", 2);
  __decorate([
    shaderProp("uSizeRange", "vec2")
  ], DropletMaterial.prototype, "sizeRange", 2);
  __decorate([
    shaderProp("uSeed", "float")
  ], DropletMaterial.prototype, "seed", 2);
  var FinalCompose = class extends MaterialFromShader(new Shader(d_vert_default, compose_default, {
    blend: [Blending.SrcAlpha, Blending.OneMinusSrcAlpha],
    depth: DepthTest.Disable,
    zWrite: false
  })) {
    constructor() {
      super(...arguments);
      this.background = null;
      this.backgroundSize = vec42.one();
      this.raindropTex = null;
      this.dropletTex = null;
      this.mistTex = null;
      this.smoothRaindrop = vec2(0.95, 1);
      this.refractParams = vec2(0.4, 0.6);
      this.lightPos = vec42(0.5, 0.5, 2, 1);
      this.diffuseLight = new Color(0.3, 0.3, 0.3, 0.8);
      this.specularParams = vec42(1, 1, 1, 32);
      this.bump = 1;
    }
  };
  __decorate([
    shaderProp("uMainTex", "tex2d")
  ], FinalCompose.prototype, "background", 2);
  __decorate([
    shaderProp("uBackgroundSize", "vec4")
  ], FinalCompose.prototype, "backgroundSize", 2);
  __decorate([
    shaderProp("uRaindropTex", "tex2d")
  ], FinalCompose.prototype, "raindropTex", 2);
  __decorate([
    shaderProp("uDropletTex", "tex2d")
  ], FinalCompose.prototype, "dropletTex", 2);
  __decorate([
    shaderProp("uMistTex", "tex2d")
  ], FinalCompose.prototype, "mistTex", 2);
  __decorate([
    shaderProp("uSmoothRaindrop", "vec2")
  ], FinalCompose.prototype, "smoothRaindrop", 2);
  __decorate([
    shaderProp("uRefractParams", "vec2")
  ], FinalCompose.prototype, "refractParams", 2);
  __decorate([
    shaderProp("uLightPos", "vec4")
  ], FinalCompose.prototype, "lightPos", 2);
  __decorate([
    shaderProp("uDiffuseColor", "color")
  ], FinalCompose.prototype, "diffuseLight", 2);
  __decorate([
    shaderProp("uSpecularParams", "vec4")
  ], FinalCompose.prototype, "specularParams", 2);
  __decorate([
    shaderProp("uBump", "float")
  ], FinalCompose.prototype, "bump", 2);
  var RaindropErase = class extends SimpleTexturedMaterial(new Shader(d_vert_default, erase_default, {
    blendRGB: [Blending.Zero, Blending.OneMinusSrcAlpha],
    blendAlpha: [Blending.Zero, Blending.OneMinusSrcAlpha]
  })) {
    constructor() {
      super(...arguments);
      this.eraserSize = vec2(0.93, 1);
    }
  };
  __decorate([
    shaderProp("uEraserSmooth", "vec2")
  ], RaindropErase.prototype, "eraserSize", 2);
  var MistAccumulate = SimpleTexturedMaterial(new Shader(d_vert_default, d_frag_default, {
    blend: [Blending.One, Blending.One]
  }));
  var MistBackgroundCompose = class extends SimpleTexturedMaterial(new Shader(d_vert_default, bg_mist_default, {
    blend: [Blending.SrcAlpha, Blending.OneMinusSrcAlpha]
  })) {
    constructor() {
      super(...arguments);
      this.mistColor = new Color(0.01, 0.01, 0.01, 1);
      this.mistTex = null;
    }
  };
  __decorate([
    shaderProp("uMistColor", "color")
  ], MistBackgroundCompose.prototype, "mistColor", 2);
  __decorate([
    shaderProp("uMistTex", "tex2d")
  ], MistBackgroundCompose.prototype, "mistTex", 2);
  var RaindropRenderer = class {
    constructor(options) {
      this.raindropTex = null;
      this.originalBackground = null;
      this.matrlCompose = new FinalCompose();
      this.matrlRaindrop = new RaindropMaterial();
      this.matrlDroplet = new DropletMaterial();
      this.matrlErase = new RaindropErase();
      this.matrlMist = new MistAccumulate();
      this.matrlMistCompose = new MistBackgroundCompose();
      this.raindropBuffer = new GLArrayBuffer(RaindropInstanceStruct, 3e3);
      this.renderer = new ZograRenderer(options.canvas);
      this.renderer.gl.getExtension("EXT_color_buffer_float");
      this.options = options;
      this.projectionMatrix = mat4.ortho(0, options.width, 0, options.height, 1, -1);
      this.raindropComposeTex = new RenderTexture(options.width, options.height, false);
      this.background = new RenderTexture(options.width, options.height, false);
      this.dropletTexture = new RenderTexture(options.width, options.height, false);
      this.blurryBackground = new RenderTexture(options.width, options.height, false);
      this.mistBackground = new RenderTexture(options.width, options.height, false);
      this.mistTexture = new RenderTexture(options.width, options.height, false, TextureFormat.R16F);
      this.blurRenderer = new BlurRenderer(this.renderer);
      this.mesh = MeshBuilder.quad();
      this.renderer.setViewProjection(mat4.identity(), this.projectionMatrix);
    }
    async loadAssets() {
      this.raindropTex = await TextureImporter.buffer(raindrop_default).then((t) => t.tex2d());
      this.matrlRaindrop.texture = this.raindropTex;
      this.matrlDroplet.texture = this.raindropTex;
      await this.reloadBackground();
    }
    async reloadBackground() {
      this.originalBackground?.destroy();
      if (typeof this.options.background === "string") {
        this.originalBackground = await TextureImporter.url(this.options.background).then((t) => t.tex2d({wrapMpde: WrapMode.Clamp}));
        this.originalBackground.wrapMode = WrapMode.Clamp;
        this.originalBackground.updateParameters();
      } else {
        this.originalBackground = new Texture2D();
        this.originalBackground.setData(this.options.background);
        this.originalBackground.updateParameters();
      }
      const [srcRect, dstRect] = public_utils_exports.imageResize(this.originalBackground.size, this.background.size, public_utils_exports.ImageSizing.Cover);
      this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials.blitCopy, srcRect, dstRect);
      this.background.generateMipmap();
      this.blurBackground();
    }
    resize() {
      this.renderer.setSize(this.options.width, this.options.height);
      this.projectionMatrix = mat4.ortho(0, this.options.width, 0, this.options.height, 1, -1);
      this.renderer.setViewProjection(mat4.identity(), this.projectionMatrix);
      this.raindropComposeTex.resize(this.options.width, this.options.height);
      this.background.resize(this.options.width, this.options.height);
      this.dropletTexture.resize(this.options.width, this.options.height);
      this.blurryBackground.resize(this.options.width, this.options.height);
      this.mistBackground.resize(this.options.width, this.options.height);
      this.mistTexture.resize(this.options.width, this.options.height);
      const [srcRect, dstRect] = public_utils_exports.imageResize(this.originalBackground.size, this.background.size, public_utils_exports.ImageSizing.Cover);
      this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials.blitCopy, srcRect, dstRect);
      this.background.generateMipmap();
      this.blurBackground();
    }
    render(raindrops, time) {
      this.drawDroplet(time);
      this.drawMist(time.dt);
      this.drawRaindrops(raindrops);
      this.renderer.setFramebuffer(FrameBuffer.CanvasBuffer);
      this.renderer.clear(Color.black);
      this.drawBackground();
      this.matrlCompose.background = this.blurryBackground;
      this.matrlCompose.backgroundSize = vec42(this.options.width, this.options.height, 1 / this.options.width, 1 / this.options.height);
      this.matrlCompose.raindropTex = this.raindropComposeTex;
      this.matrlCompose.dropletTex = this.dropletTexture;
      this.matrlCompose.mistTex = this.mistTexture;
      this.matrlCompose.smoothRaindrop = vec2(...this.options.smoothRaindrop);
      this.matrlCompose.refractParams = vec2(this.options.refractBase, this.options.refractScale);
      this.matrlCompose.lightPos = vec42(...this.options.raindropLightPos);
      this.matrlCompose.diffuseLight = new Color(...this.options.raindropDiffuseLight, this.options.raindropShadowOffset);
      this.matrlCompose.specularParams = vec42(...this.options.raindropSpecularLight, this.options.raindropSpecularShininess);
      this.matrlCompose.bump = this.options.raindropLightBump;
      this.renderer.blit(null, FrameBuffer.CanvasBuffer, this.matrlCompose);
    }
    blurBackground() {
      if (!this.options.mist) {
        this.blurRenderer.blur(this.background, this.options.backgroundBlurSteps, this.blurryBackground);
      } else {
        this.blurRenderer.init(this.background);
        this.blurRenderer.downSample(this.background, Math.max(this.options.backgroundBlurSteps, this.options.mistBlurStep));
        if (this.options.backgroundBlurSteps === this.options.mistBlurStep) {
          this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground);
          this.renderer.blit(this.blurryBackground, this.mistBackground);
        } else if (this.options.mistBlurStep > this.options.backgroundBlurSteps) {
          this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground);
          this.blurRenderer.upSample(this.options.mistBlurStep, this.mistBackground);
        } else {
          this.blurRenderer.upSample(this.options.mistBlurStep, this.mistBackground);
          this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground);
        }
      }
    }
    drawMist(dt) {
      if (!this.options.mist)
        return;
      this.matrlMist.color.r = dt / this.options.mistTime;
      this.renderer.blit(this.renderer.assets.textures.default, this.mistTexture, this.matrlMist);
    }
    drawBackground() {
      this.renderer.blit(this.blurryBackground, FrameBuffer.CanvasBuffer);
      if (this.options.mist) {
        this.matrlMistCompose.mistTex = this.mistTexture;
        this.matrlMistCompose.texture = this.mistBackground;
        this.matrlMistCompose.mistColor = new Color(...this.options.mistColor);
        this.renderer.blit(this.mistBackground, FrameBuffer.CanvasBuffer, this.matrlMistCompose);
      }
    }
    drawRaindrops(raindrops) {
      if (raindrops.length > this.raindropBuffer.length)
        this.raindropBuffer.resize(this.raindropBuffer.length * 2);
      this.renderer.setFramebuffer(this.raindropComposeTex);
      this.renderer.clear(Color.black.transparent());
      for (let i2 = 0; i2 < raindrops.length; i2++) {
        const raindrop = raindrops[i2];
        const model = mat4.rts(quat.identity(), raindrop.pos.toVec3(), raindrop.size.toVec3(1));
        this.raindropBuffer[i2].modelMatrix.set(model);
        this.raindropBuffer[i2].size[0] = raindrop.size.x / 100;
      }
      switch (this.options.raindropCompose) {
        case "smoother":
          this.matrlRaindrop.setPipelineStateOverride({
            blendRGB: [Blending.OneMinusDstColor, Blending.OneMinusSrcColor]
          });
          this.matrlDroplet.setPipelineStateOverride({
            blendRGB: [Blending.OneMinusDstColor, Blending.OneMinusSrcColor]
          });
          break;
        case "harder":
          this.matrlRaindrop.setPipelineStateOverride({
            blendRGB: [Blending.One, Blending.OneMinusSrcAlpha]
          });
          this.matrlDroplet.setPipelineStateOverride({
            blendRGB: [Blending.One, Blending.OneMinusSrcAlpha]
          });
          break;
      }
      this.renderer.drawMeshInstance(this.mesh, this.raindropBuffer, this.matrlRaindrop, raindrops.length);
      this.matrlErase.eraserSize = vec2(...this.options.raindropEraserSize);
      this.renderer.blit(this.raindropComposeTex, this.dropletTexture, this.matrlErase);
      if (this.options.mist)
        this.renderer.blit(this.raindropComposeTex, this.mistTexture, this.matrlErase);
    }
    drawDroplet(time) {
      this.renderer.setFramebuffer(this.dropletTexture);
      const count = this.options.dropletsPerSeconds * time.dt;
      this.matrlDroplet.spawnRect = vec42(0, 0, this.options.width, this.options.height);
      this.matrlDroplet.sizeRange = vec2(...this.options.dropletSize);
      this.matrlDroplet.seed = randomRange(0, 133);
      this.renderer.drawMeshProceduralInstance(this.mesh, this.matrlDroplet, count);
    }
  };

  // src/utils.ts
  function lerp5(a2, b, t) {
    return a2 + (b - a2) * t;
  }

  // src/raindrop.ts
  var RainDrop = class {
    constructor(simulator, pos, size, density = 1) {
      this.density = 1;
      this.velocity = vec2.zero();
      this.destroied = false;
      this._mass = 0;
      this._size = vec2.zero();
      this.resistance = 0;
      this.shifting = 0;
      this.nextRandomTime = 0;
      this.pos = pos;
      this.simulator = simulator;
      this.density = density;
      this.lastTrailPos = pos.clone();
      this.nextTrailDistance = randomRange(...simulator.options.trailDistance);
      this.spread = vec2(simulator.options.initialSpread);
      this.mass = (size * density) ** 2;
    }
    get mass() {
      return this._mass;
    }
    set mass(m) {
      this._mass = m;
      const sqrtM = Math.sqrt(m) / this.density;
      this._size.x = (this.spread.x + 1) * sqrtM;
      this._size.y = (this.spread.y + 1) * sqrtM;
    }
    get size() {
      return this._size;
    }
    get mergeDistance() {
      return this.size.x * (1 + this.spread.x) * 0.16 * this.simulator.options.colliderSize;
    }
    get options() {
      return this.simulator.options;
    }
    updateRaindrop(time) {
      if (this.nextRandomTime <= time.total) {
        this.nextRandomTime = time.total + randomRange(...this.simulator.options.motionInterval);
        this.randomMotion();
      }
      this.mass -= this.simulator.options.evaporate * time.dt;
      const force = this.options.gravity * this.mass - this.resistance;
      const acceleration = force / this.mass;
      this.velocity.y -= acceleration * time.dt;
      if (this.velocity.y > 0)
        this.velocity.y = 0;
      this.velocity.x = Math.abs(this.velocity.y) * this.shifting;
      this.pos.x += this.velocity.x * time.dt;
      this.pos.y += this.velocity.y * time.dt;
      const spreadByVelocity = this.simulator.options.velocitySpread * 2 * Math.atan(Math.abs(this.velocity.y * 5e-3)) / Math.PI;
      this.spread.y = Math.max(this.spread.y, spreadByVelocity);
      this.spread.x *= Math.pow(this.simulator.options.shrinkRate, time.dt);
      this.spread.y *= Math.pow(this.simulator.options.shrinkRate, time.dt);
      if (Vector2.distanceSquared(this.lastTrailPos, this.pos) > this.nextTrailDistance * this.nextTrailDistance) {
        this.split();
      }
    }
    split() {
      if (this.mass < 1e3)
        return;
      let size = this.size.x * randomRange(...this.simulator.options.trailDropSize);
      const pos = plus(vec2(randomRange(-5, 5), this.size.y / 4), this.pos);
      let trailDrop = this.simulator.spawner.spawn(pos.clone(), size, this.simulator.options.trailDropDensity);
      trailDrop.spread = vec2(0.1, Math.abs(this.velocity.y) * 0.01 * this.options.trailSpread);
      trailDrop.parent = this;
      this.mass -= trailDrop.mass;
      this.simulator.add(trailDrop);
      this.lastTrailPos = this.pos.clone();
      this.nextTrailDistance = randomRange(...this.simulator.options.trailDistance);
    }
    randomMotion() {
      const maxResistance = lerp5(...this.simulator.options.spawnSize, 1 - this.simulator.options.slipRate) ** 2 * 4;
      this.resistance = randomRange(0, 1) * this.options.gravity * maxResistance;
      this.shifting = random5() * randomRange(...this.simulator.options.xShifting);
    }
    merge(target) {
      const selfMomentum = mul6(this.velocity, this.mass);
      const targetMomentum = mul6(target.velocity, target.mass);
      const momentum = plus(selfMomentum, targetMomentum);
      this.mass += target.mass;
      this.velocity = div4(momentum, this.mass);
    }
  };

  // src/spawner.ts
  var Spawner = class {
    constructor(simulator, options) {
      this.currentTime = 0;
      this.nextSpawn = 0;
      this.simulator = simulator;
    }
    get interval() {
      return this.simulator.options.spawnInterval;
    }
    get size() {
      return this.simulator.options.spawnSize;
    }
    get spawnRect() {
      return this.simulator.options.viewport;
    }
    update(dt) {
      this.currentTime += dt;
      return this;
    }
    *trySpawn() {
      while (this.currentTime >= this.nextSpawn) {
        const size = randomRange(...this.size);
        const pos = randomInRect(this.spawnRect);
        this.nextSpawn += randomRange(...this.interval);
        yield new RainDrop(this.simulator, pos, size);
      }
      if (this.currentTime >= this.nextSpawn) {
      }
      return void 0;
    }
    spawn(pos, size, density = 1) {
      return new RainDrop(this.simulator, pos, size, density);
    }
  };

  // src/simulator.ts
  var CollisionGrid = class extends Array {
    push(...item) {
      return super.push(...item);
    }
    add(raindrop) {
      const len5 = super.push(raindrop);
      raindrop.gridIdx = len5 - 1;
      raindrop.grid = this;
    }
    delete(raindrop) {
      this[raindrop.gridIdx] = this[this.length - 1];
      this[raindrop.gridIdx].gridIdx = raindrop.gridIdx;
      this.length--;
      raindrop.gridIdx = -1;
      raindrop.grid = void 0;
    }
  };
  var RaindropSimulator = class {
    constructor(options) {
      this.raindrops = [];
      this.grid = [];
      this.options = options;
      this.spawner = new Spawner(this, options);
      this.resize();
    }
    get gridSize() {
      return this.options.spawnSize[1] * 0.3;
    }
    resize() {
      const w = Math.ceil(this.options.viewport.size.x / this.gridSize);
      const h = Math.ceil(this.options.viewport.size.y / this.gridSize);
      let base = 0;
      if (this.grid.length < w * h) {
        base = this.grid.length;
        this.grid.length = w * h;
      }
      for (let i2 = base; i2 < this.grid.length; i2++)
        this.grid[i2] = new CollisionGrid();
    }
    gridAt(gridX, gridY) {
      if (gridX < 0 || gridY < 0)
        return void 0;
      const gridWidth = Math.ceil((this.options.viewport.xMax - this.options.viewport.xMin) / this.gridSize);
      const idx = gridY * gridWidth + gridX;
      if (idx >= this.grid.length)
        return void 0;
      return this.grid[idx];
    }
    gridAtWorldPos(x, y) {
      return this.gridAt(...this.worldToGrid(x, y));
    }
    worldToGrid(x, y) {
      const gridX = Math.floor(x / this.gridSize);
      const gridY = Math.floor(y / this.gridSize);
      return [gridX, gridY];
    }
    add(raindrop) {
      this.raindrops.push(raindrop);
      let grid = this.gridAtWorldPos(raindrop.pos.x, raindrop.pos.y);
      if (grid) {
        grid.add(raindrop);
        raindrop.gridIdx = grid.length - 1;
      }
    }
    update(time) {
      if (this.raindrops.length <= this.options.spawnLimit) {
        for (const newDrop of this.spawner.update(time.dt).trySpawn()) {
          this.raindrops.push(newDrop);
        }
      }
      this.raindropUpdate(time);
      this.collisionUpdate();
      for (let i2 = 0; i2 < this.raindrops.length; i2++) {
        if (this.raindrops[i2].destroied) {
          this.raindrops[i2].grid?.delete(this.raindrops[i2]);
          this.raindrops[i2] = this.raindrops[this.raindrops.length - 1];
          this.raindrops.length--;
        }
      }
    }
    raindropUpdate(time) {
      for (let i2 = 0; i2 < this.raindrops.length; i2++) {
        const raindrop = this.raindrops[i2];
        if (raindrop.destroied)
          continue;
        raindrop.updateRaindrop(time);
        if (raindrop.pos.y < -100)
          raindrop.destroied = true;
        if (raindrop.destroied)
          continue;
        const [gridX, gridY] = this.worldToGrid(raindrop.pos.x, raindrop.pos.y);
        const grid = this.gridAt(gridX, gridY);
        if (grid !== raindrop.grid) {
          raindrop.grid?.delete(raindrop);
          grid?.add(raindrop);
          raindrop.grid = grid;
        }
      }
    }
    collisionUpdate() {
      for (let i2 = 0; i2 < this.raindrops.length; i2++) {
        const raindrop = this.raindrops[i2];
        if (raindrop.destroied)
          continue;
        const [gridX, gridY] = this.worldToGrid(raindrop.pos.x, raindrop.pos.y);
        for (let x = -1; x <= 1; x++) {
          for (let y = -1; y <= 1; y++) {
            const grid = this.gridAt(gridX + x, gridY + y);
            if (!grid)
              continue;
            for (const other of grid) {
              const isSame = other === raindrop;
              const isParent = other.parent === raindrop || raindrop.parent === other;
              const isAdjacent = raindrop.parent && raindrop.parent === other.parent;
              if (other.destroied || isParent || isAdjacent || isSame)
                continue;
              let dx = raindrop.pos.x - other.pos.x;
              let dy = raindrop.pos.y - other.pos.y;
              let distance5 = Math.sqrt(dx * dx + dy * dy);
              if (distance5 - raindrop.mergeDistance - other.mergeDistance < 0) {
                if (raindrop.mass >= other.mass) {
                  raindrop.merge(other);
                  other.destroied = true;
                } else {
                  other.merge(raindrop);
                  raindrop.destroied = true;
                }
              }
            }
          }
        }
      }
    }
  };
  return require_src();
})();
//# sourceMappingURL=index.js.map
