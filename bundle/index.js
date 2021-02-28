var RaindropFX = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __exportStar = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true})), module);
  };
  var __decorate = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };
  var __toBinary = false ? (base64) => new Uint8Array(Buffer.from(base64, "base64")) : /* @__PURE__ */ (() => {
    var table = new Uint8Array(128);
    for (var i = 0; i < 64; i++)
      table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
    return (base64) => {
      var n = base64.length, bytes = new Uint8Array((n - (base64[n - 1] == "=") - (base64[n - 2] == "=")) * 3 / 4 | 0);
      for (var i2 = 0, j = 0; i2 < n; ) {
        var c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
        var c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
        bytes[j++] = c0 << 2 | c1 >> 4;
        bytes[j++] = c1 << 4 | c2 >> 2;
        bytes[j++] = c2 << 6 | c3;
      }
      return bytes;
    };
  })();

  // zogra-renderer/node_modules/gl-matrix/cjs/common.js
  var require_common = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setMatrixArrayType = setMatrixArrayType;
    exports.toRadian = toRadian;
    exports.equals = equals;
    exports.RANDOM = exports.ARRAY_TYPE = exports.EPSILON = void 0;
    var EPSILON = 1e-6;
    exports.EPSILON = EPSILON;
    var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
    exports.ARRAY_TYPE = ARRAY_TYPE;
    var RANDOM = Math.random;
    exports.RANDOM = RANDOM;
    function setMatrixArrayType(type) {
      exports.ARRAY_TYPE = ARRAY_TYPE = type;
    }
    var degree = Math.PI / 180;
    function toRadian(a) {
      return a * degree;
    }
    function equals(a, b) {
      return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
    }
    if (!Math.hypot)
      Math.hypot = function() {
        var y = 0, i = arguments.length;
        while (i--) {
          y += arguments[i] * arguments[i];
        }
        return Math.sqrt(y);
      };
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/mat2.js
  var require_mat2 = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.clone = clone;
    exports.copy = copy;
    exports.identity = identity;
    exports.fromValues = fromValues;
    exports.set = set;
    exports.transpose = transpose;
    exports.invert = invert;
    exports.adjoint = adjoint;
    exports.determinant = determinant;
    exports.multiply = multiply;
    exports.rotate = rotate;
    exports.scale = scale;
    exports.fromRotation = fromRotation;
    exports.fromScaling = fromScaling;
    exports.str = str;
    exports.frob = frob;
    exports.LDU = LDU;
    exports.add = add;
    exports.subtract = subtract;
    exports.exactEquals = exactEquals;
    exports.equals = equals;
    exports.multiplyScalar = multiplyScalar;
    exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
    exports.sub = exports.mul = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var out = new glMatrix.ARRAY_TYPE(4);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
      }
      out[0] = 1;
      out[3] = 1;
      return out;
    }
    function clone(a) {
      var out = new glMatrix.ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    function identity(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    }
    function fromValues(m00, m01, m10, m11) {
      var out = new glMatrix.ARRAY_TYPE(4);
      out[0] = m00;
      out[1] = m01;
      out[2] = m10;
      out[3] = m11;
      return out;
    }
    function set(out, m00, m01, m10, m11) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m10;
      out[3] = m11;
      return out;
    }
    function transpose(out, a) {
      if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
      } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
      }
      return out;
    }
    function invert(out, a) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
      var det = a0 * a3 - a2 * a1;
      if (!det) {
        return null;
      }
      det = 1 / det;
      out[0] = a3 * det;
      out[1] = -a1 * det;
      out[2] = -a2 * det;
      out[3] = a0 * det;
      return out;
    }
    function adjoint(out, a) {
      var a0 = a[0];
      out[0] = a[3];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a0;
      return out;
    }
    function determinant(a) {
      return a[0] * a[3] - a[2] * a[1];
    }
    function multiply(out, a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
      var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
      out[0] = a0 * b0 + a2 * b1;
      out[1] = a1 * b0 + a3 * b1;
      out[2] = a0 * b2 + a2 * b3;
      out[3] = a1 * b2 + a3 * b3;
      return out;
    }
    function rotate(out, a, rad) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      out[0] = a0 * c + a2 * s;
      out[1] = a1 * c + a3 * s;
      out[2] = a0 * -s + a2 * c;
      out[3] = a1 * -s + a3 * c;
      return out;
    }
    function scale(out, a, v) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
      var v0 = v[0], v1 = v[1];
      out[0] = a0 * v0;
      out[1] = a1 * v0;
      out[2] = a2 * v1;
      out[3] = a3 * v1;
      return out;
    }
    function fromRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      out[0] = c;
      out[1] = s;
      out[2] = -s;
      out[3] = c;
      return out;
    }
    function fromScaling(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = v[1];
      return out;
    }
    function str(a) {
      return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
    }
    function frob(a) {
      return Math.hypot(a[0], a[1], a[2], a[3]);
    }
    function LDU(L, D, U, a) {
      L[2] = a[2] / a[0];
      U[0] = a[0];
      U[1] = a[1];
      U[3] = a[3] - L[2] * U[1];
      return [L, D, U];
    }
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      return out;
    }
    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      return out;
    }
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    function equals(a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
      var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
      return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
    }
    function multiplyScalar(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      return out;
    }
    function multiplyScalarAndAdd(out, a, b, scale2) {
      out[0] = a[0] + b[0] * scale2;
      out[1] = a[1] + b[1] * scale2;
      out[2] = a[2] + b[2] * scale2;
      out[3] = a[3] + b[3] * scale2;
      return out;
    }
    var mul4 = multiply;
    exports.mul = mul4;
    var sub = subtract;
    exports.sub = sub;
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/mat2d.js
  var require_mat2d = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.clone = clone;
    exports.copy = copy;
    exports.identity = identity;
    exports.fromValues = fromValues;
    exports.set = set;
    exports.invert = invert;
    exports.determinant = determinant;
    exports.multiply = multiply;
    exports.rotate = rotate;
    exports.scale = scale;
    exports.translate = translate;
    exports.fromRotation = fromRotation;
    exports.fromScaling = fromScaling;
    exports.fromTranslation = fromTranslation;
    exports.str = str;
    exports.frob = frob;
    exports.add = add;
    exports.subtract = subtract;
    exports.multiplyScalar = multiplyScalar;
    exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
    exports.exactEquals = exactEquals;
    exports.equals = equals;
    exports.sub = exports.mul = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var out = new glMatrix.ARRAY_TYPE(6);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[4] = 0;
        out[5] = 0;
      }
      out[0] = 1;
      out[3] = 1;
      return out;
    }
    function clone(a) {
      var out = new glMatrix.ARRAY_TYPE(6);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      return out;
    }
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      return out;
    }
    function identity(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      out[4] = 0;
      out[5] = 0;
      return out;
    }
    function fromValues(a, b, c, d, tx, ty) {
      var out = new glMatrix.ARRAY_TYPE(6);
      out[0] = a;
      out[1] = b;
      out[2] = c;
      out[3] = d;
      out[4] = tx;
      out[5] = ty;
      return out;
    }
    function set(out, a, b, c, d, tx, ty) {
      out[0] = a;
      out[1] = b;
      out[2] = c;
      out[3] = d;
      out[4] = tx;
      out[5] = ty;
      return out;
    }
    function invert(out, a) {
      var aa = a[0], ab = a[1], ac = a[2], ad = a[3];
      var atx = a[4], aty = a[5];
      var det = aa * ad - ab * ac;
      if (!det) {
        return null;
      }
      det = 1 / det;
      out[0] = ad * det;
      out[1] = -ab * det;
      out[2] = -ac * det;
      out[3] = aa * det;
      out[4] = (ac * aty - ad * atx) * det;
      out[5] = (ab * atx - aa * aty) * det;
      return out;
    }
    function determinant(a) {
      return a[0] * a[3] - a[1] * a[2];
    }
    function multiply(out, a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
      var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
      out[0] = a0 * b0 + a2 * b1;
      out[1] = a1 * b0 + a3 * b1;
      out[2] = a0 * b2 + a2 * b3;
      out[3] = a1 * b2 + a3 * b3;
      out[4] = a0 * b4 + a2 * b5 + a4;
      out[5] = a1 * b4 + a3 * b5 + a5;
      return out;
    }
    function rotate(out, a, rad) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      out[0] = a0 * c + a2 * s;
      out[1] = a1 * c + a3 * s;
      out[2] = a0 * -s + a2 * c;
      out[3] = a1 * -s + a3 * c;
      out[4] = a4;
      out[5] = a5;
      return out;
    }
    function scale(out, a, v) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
      var v0 = v[0], v1 = v[1];
      out[0] = a0 * v0;
      out[1] = a1 * v0;
      out[2] = a2 * v1;
      out[3] = a3 * v1;
      out[4] = a4;
      out[5] = a5;
      return out;
    }
    function translate(out, a, v) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
      var v0 = v[0], v1 = v[1];
      out[0] = a0;
      out[1] = a1;
      out[2] = a2;
      out[3] = a3;
      out[4] = a0 * v0 + a2 * v1 + a4;
      out[5] = a1 * v0 + a3 * v1 + a5;
      return out;
    }
    function fromRotation(out, rad) {
      var s = Math.sin(rad), c = Math.cos(rad);
      out[0] = c;
      out[1] = s;
      out[2] = -s;
      out[3] = c;
      out[4] = 0;
      out[5] = 0;
      return out;
    }
    function fromScaling(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = v[1];
      out[4] = 0;
      out[5] = 0;
      return out;
    }
    function fromTranslation(out, v) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      out[4] = v[0];
      out[5] = v[1];
      return out;
    }
    function str(a) {
      return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
    }
    function frob(a) {
      return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
    }
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      return out;
    }
    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      return out;
    }
    function multiplyScalar(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      return out;
    }
    function multiplyScalarAndAdd(out, a, b, scale2) {
      out[0] = a[0] + b[0] * scale2;
      out[1] = a[1] + b[1] * scale2;
      out[2] = a[2] + b[2] * scale2;
      out[3] = a[3] + b[3] * scale2;
      out[4] = a[4] + b[4] * scale2;
      out[5] = a[5] + b[5] * scale2;
      return out;
    }
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
    }
    function equals(a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
      var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
      return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5));
    }
    var mul4 = multiply;
    exports.mul = mul4;
    var sub = subtract;
    exports.sub = sub;
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/mat3.js
  var require_mat3 = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.fromMat4 = fromMat4;
    exports.clone = clone;
    exports.copy = copy;
    exports.fromValues = fromValues;
    exports.set = set;
    exports.identity = identity;
    exports.transpose = transpose;
    exports.invert = invert;
    exports.adjoint = adjoint;
    exports.determinant = determinant;
    exports.multiply = multiply;
    exports.translate = translate;
    exports.rotate = rotate;
    exports.scale = scale;
    exports.fromTranslation = fromTranslation;
    exports.fromRotation = fromRotation;
    exports.fromScaling = fromScaling;
    exports.fromMat2d = fromMat2d;
    exports.fromQuat = fromQuat;
    exports.normalFromMat4 = normalFromMat4;
    exports.projection = projection;
    exports.str = str;
    exports.frob = frob;
    exports.add = add;
    exports.subtract = subtract;
    exports.multiplyScalar = multiplyScalar;
    exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
    exports.exactEquals = exactEquals;
    exports.equals = equals;
    exports.sub = exports.mul = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var out = new glMatrix.ARRAY_TYPE(9);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
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
    function fromMat4(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[4];
      out[4] = a[5];
      out[5] = a[6];
      out[6] = a[8];
      out[7] = a[9];
      out[8] = a[10];
      return out;
    }
    function clone(a) {
      var out = new glMatrix.ARRAY_TYPE(9);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    }
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    }
    function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      var out = new glMatrix.ARRAY_TYPE(9);
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m10;
      out[4] = m11;
      out[5] = m12;
      out[6] = m20;
      out[7] = m21;
      out[8] = m22;
      return out;
    }
    function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m10;
      out[4] = m11;
      out[5] = m12;
      out[6] = m20;
      out[7] = m21;
      out[8] = m22;
      return out;
    }
    function identity(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 1;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    }
    function transpose(out, a) {
      if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
      } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
      }
      return out;
    }
    function invert(out, a) {
      var a00 = a[0], a01 = a[1], a02 = a[2];
      var a10 = a[3], a11 = a[4], a12 = a[5];
      var a20 = a[6], a21 = a[7], a22 = a[8];
      var b01 = a22 * a11 - a12 * a21;
      var b11 = -a22 * a10 + a12 * a20;
      var b21 = a21 * a10 - a11 * a20;
      var det = a00 * b01 + a01 * b11 + a02 * b21;
      if (!det) {
        return null;
      }
      det = 1 / det;
      out[0] = b01 * det;
      out[1] = (-a22 * a01 + a02 * a21) * det;
      out[2] = (a12 * a01 - a02 * a11) * det;
      out[3] = b11 * det;
      out[4] = (a22 * a00 - a02 * a20) * det;
      out[5] = (-a12 * a00 + a02 * a10) * det;
      out[6] = b21 * det;
      out[7] = (-a21 * a00 + a01 * a20) * det;
      out[8] = (a11 * a00 - a01 * a10) * det;
      return out;
    }
    function adjoint(out, a) {
      var a00 = a[0], a01 = a[1], a02 = a[2];
      var a10 = a[3], a11 = a[4], a12 = a[5];
      var a20 = a[6], a21 = a[7], a22 = a[8];
      out[0] = a11 * a22 - a12 * a21;
      out[1] = a02 * a21 - a01 * a22;
      out[2] = a01 * a12 - a02 * a11;
      out[3] = a12 * a20 - a10 * a22;
      out[4] = a00 * a22 - a02 * a20;
      out[5] = a02 * a10 - a00 * a12;
      out[6] = a10 * a21 - a11 * a20;
      out[7] = a01 * a20 - a00 * a21;
      out[8] = a00 * a11 - a01 * a10;
      return out;
    }
    function determinant(a) {
      var a00 = a[0], a01 = a[1], a02 = a[2];
      var a10 = a[3], a11 = a[4], a12 = a[5];
      var a20 = a[6], a21 = a[7], a22 = a[8];
      return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
    }
    function multiply(out, a, b) {
      var a00 = a[0], a01 = a[1], a02 = a[2];
      var a10 = a[3], a11 = a[4], a12 = a[5];
      var a20 = a[6], a21 = a[7], a22 = a[8];
      var b00 = b[0], b01 = b[1], b02 = b[2];
      var b10 = b[3], b11 = b[4], b12 = b[5];
      var b20 = b[6], b21 = b[7], b22 = b[8];
      out[0] = b00 * a00 + b01 * a10 + b02 * a20;
      out[1] = b00 * a01 + b01 * a11 + b02 * a21;
      out[2] = b00 * a02 + b01 * a12 + b02 * a22;
      out[3] = b10 * a00 + b11 * a10 + b12 * a20;
      out[4] = b10 * a01 + b11 * a11 + b12 * a21;
      out[5] = b10 * a02 + b11 * a12 + b12 * a22;
      out[6] = b20 * a00 + b21 * a10 + b22 * a20;
      out[7] = b20 * a01 + b21 * a11 + b22 * a21;
      out[8] = b20 * a02 + b21 * a12 + b22 * a22;
      return out;
    }
    function translate(out, a, v) {
      var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a10;
      out[4] = a11;
      out[5] = a12;
      out[6] = x * a00 + y * a10 + a20;
      out[7] = x * a01 + y * a11 + a21;
      out[8] = x * a02 + y * a12 + a22;
      return out;
    }
    function rotate(out, a, rad) {
      var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
      out[0] = c * a00 + s * a10;
      out[1] = c * a01 + s * a11;
      out[2] = c * a02 + s * a12;
      out[3] = c * a10 - s * a00;
      out[4] = c * a11 - s * a01;
      out[5] = c * a12 - s * a02;
      out[6] = a20;
      out[7] = a21;
      out[8] = a22;
      return out;
    }
    function scale(out, a, v) {
      var x = v[0], y = v[1];
      out[0] = x * a[0];
      out[1] = x * a[1];
      out[2] = x * a[2];
      out[3] = y * a[3];
      out[4] = y * a[4];
      out[5] = y * a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    }
    function fromTranslation(out, v) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 1;
      out[5] = 0;
      out[6] = v[0];
      out[7] = v[1];
      out[8] = 1;
      return out;
    }
    function fromRotation(out, rad) {
      var s = Math.sin(rad), c = Math.cos(rad);
      out[0] = c;
      out[1] = s;
      out[2] = 0;
      out[3] = -s;
      out[4] = c;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    }
    function fromScaling(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = v[1];
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    }
    function fromMat2d(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = 0;
      out[3] = a[2];
      out[4] = a[3];
      out[5] = 0;
      out[6] = a[4];
      out[7] = a[5];
      out[8] = 1;
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
      out[3] = yx - wz;
      out[6] = zx + wy;
      out[1] = yx + wz;
      out[4] = 1 - xx - zz;
      out[7] = zy - wx;
      out[2] = zx - wy;
      out[5] = zy + wx;
      out[8] = 1 - xx - yy;
      return out;
    }
    function normalFromMat4(out, a) {
      var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
      var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
      var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
      var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
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
      out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      return out;
    }
    function projection(out, width, height) {
      out[0] = 2 / width;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = -2 / height;
      out[5] = 0;
      out[6] = -1;
      out[7] = 1;
      out[8] = 1;
      return out;
    }
    function str(a) {
      return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
    }
    function frob(a) {
      return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
    }
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      return out;
    }
    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      return out;
    }
    function multiplyScalar(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      out[6] = a[6] * b;
      out[7] = a[7] * b;
      out[8] = a[8] * b;
      return out;
    }
    function multiplyScalarAndAdd(out, a, b, scale2) {
      out[0] = a[0] + b[0] * scale2;
      out[1] = a[1] + b[1] * scale2;
      out[2] = a[2] + b[2] * scale2;
      out[3] = a[3] + b[3] * scale2;
      out[4] = a[4] + b[4] * scale2;
      out[5] = a[5] + b[5] * scale2;
      out[6] = a[6] + b[6] * scale2;
      out[7] = a[7] + b[7] * scale2;
      out[8] = a[8] + b[8] * scale2;
      return out;
    }
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
    }
    function equals(a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
      var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
      return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8));
    }
    var mul4 = multiply;
    exports.mul = mul4;
    var sub = subtract;
    exports.sub = sub;
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/mat4.js
  var require_mat4 = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.clone = clone;
    exports.copy = copy;
    exports.fromValues = fromValues;
    exports.set = set;
    exports.identity = identity;
    exports.transpose = transpose;
    exports.invert = invert;
    exports.adjoint = adjoint;
    exports.determinant = determinant;
    exports.multiply = multiply;
    exports.translate = translate;
    exports.scale = scale;
    exports.rotate = rotate;
    exports.rotateX = rotateX;
    exports.rotateY = rotateY;
    exports.rotateZ = rotateZ;
    exports.fromTranslation = fromTranslation;
    exports.fromScaling = fromScaling;
    exports.fromRotation = fromRotation;
    exports.fromXRotation = fromXRotation;
    exports.fromYRotation = fromYRotation;
    exports.fromZRotation = fromZRotation;
    exports.fromRotationTranslation = fromRotationTranslation;
    exports.fromQuat2 = fromQuat2;
    exports.getTranslation = getTranslation;
    exports.getScaling = getScaling;
    exports.getRotation = getRotation;
    exports.fromRotationTranslationScale = fromRotationTranslationScale;
    exports.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin;
    exports.fromQuat = fromQuat;
    exports.frustum = frustum;
    exports.perspective = perspective;
    exports.perspectiveFromFieldOfView = perspectiveFromFieldOfView;
    exports.ortho = ortho;
    exports.lookAt = lookAt;
    exports.targetTo = targetTo;
    exports.str = str;
    exports.frob = frob;
    exports.add = add;
    exports.subtract = subtract;
    exports.multiplyScalar = multiplyScalar;
    exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
    exports.exactEquals = exactEquals;
    exports.equals = equals;
    exports.sub = exports.mul = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var out = new glMatrix.ARRAY_TYPE(16);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
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
    function clone(a) {
      var out = new glMatrix.ARRAY_TYPE(16);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      var out = new glMatrix.ARRAY_TYPE(16);
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
    function transpose(out, a) {
      if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3];
        var a12 = a[6], a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
      } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
      }
      return out;
    }
    function invert(out, a) {
      var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
      var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
      var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
      var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
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
    function adjoint(out, a) {
      var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
      var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
      var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
      var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
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
    function determinant(a) {
      var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
      var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
      var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
      var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
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
    function multiply(out, a, b) {
      var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
      var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
      var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
      var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
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
    function translate(out, a, v) {
      var x = v[0], y = v[1], z = v[2];
      var a00, a01, a02, a03;
      var a10, a11, a12, a13;
      var a20, a21, a22, a23;
      if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
      } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
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
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
      }
      return out;
    }
    function scale(out, a, v) {
      var x = v[0], y = v[1], z = v[2];
      out[0] = a[0] * x;
      out[1] = a[1] * x;
      out[2] = a[2] * x;
      out[3] = a[3] * x;
      out[4] = a[4] * y;
      out[5] = a[5] * y;
      out[6] = a[6] * y;
      out[7] = a[7] * y;
      out[8] = a[8] * z;
      out[9] = a[9] * z;
      out[10] = a[10] * z;
      out[11] = a[11] * z;
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }
    function rotate(out, a, rad, axis) {
      var x = axis[0], y = axis[1], z = axis[2];
      var len = Math.hypot(x, y, z);
      var s, c, t;
      var a00, a01, a02, a03;
      var a10, a11, a12, a13;
      var a20, a21, a22, a23;
      var b00, b01, b02;
      var b10, b11, b12;
      var b20, b21, b22;
      if (len < glMatrix.EPSILON) {
        return null;
      }
      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11];
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
      if (a !== out) {
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }
      return out;
    }
    function rotateX(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];
      if (a !== out) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
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
    function rotateY(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];
      if (a !== out) {
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
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
    function rotateZ(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];
      if (a !== out) {
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
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
    function fromTranslation(out, v) {
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
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    function fromScaling(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = v[1];
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = v[2];
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }
    function fromRotation(out, rad, axis) {
      var x = axis[0], y = axis[1], z = axis[2];
      var len = Math.hypot(x, y, z);
      var s, c, t;
      if (len < glMatrix.EPSILON) {
        return null;
      }
      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
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
    function fromRotationTranslation(out, q, v) {
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
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    function fromQuat2(out, a) {
      var translation = new glMatrix.ARRAY_TYPE(3);
      var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
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
      fromRotationTranslation(out, a, translation);
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
      var scaling = new glMatrix.ARRAY_TYPE(3);
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
    function fromRotationTranslationScale(out, q, v, s) {
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
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }
    function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
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
      var ox = o[0];
      var oy = o[1];
      var oz = o[2];
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
      out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
      out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
      out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
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
    function perspective(out, fovy, aspect, near, far) {
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
    function ortho(out, left, right, bottom, top, near, far) {
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
    function lookAt(out, eye, center, up) {
      var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
      var eyex = eye[0];
      var eyey = eye[1];
      var eyez = eye[2];
      var upx = up[0];
      var upy = up[1];
      var upz = up[2];
      var centerx = center[0];
      var centery = center[1];
      var centerz = center[2];
      if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
        return identity(out);
      }
      z0 = eyex - centerx;
      z1 = eyey - centery;
      z2 = eyez - centerz;
      len = 1 / Math.hypot(z0, z1, z2);
      z0 *= len;
      z1 *= len;
      z2 *= len;
      x0 = upy * z2 - upz * z1;
      x1 = upz * z0 - upx * z2;
      x2 = upx * z1 - upy * z0;
      len = Math.hypot(x0, x1, x2);
      if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
      } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }
      y0 = z1 * x2 - z2 * x1;
      y1 = z2 * x0 - z0 * x2;
      y2 = z0 * x1 - z1 * x0;
      len = Math.hypot(y0, y1, y2);
      if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
      } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
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
      var len = z0 * z0 + z1 * z1 + z2 * z2;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
      }
      var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
      len = x0 * x0 + x1 * x1 + x2 * x2;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
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
    function str(a) {
      return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
    }
    function frob(a) {
      return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
    }
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      out[9] = a[9] + b[9];
      out[10] = a[10] + b[10];
      out[11] = a[11] + b[11];
      out[12] = a[12] + b[12];
      out[13] = a[13] + b[13];
      out[14] = a[14] + b[14];
      out[15] = a[15] + b[15];
      return out;
    }
    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      out[9] = a[9] - b[9];
      out[10] = a[10] - b[10];
      out[11] = a[11] - b[11];
      out[12] = a[12] - b[12];
      out[13] = a[13] - b[13];
      out[14] = a[14] - b[14];
      out[15] = a[15] - b[15];
      return out;
    }
    function multiplyScalar(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      out[6] = a[6] * b;
      out[7] = a[7] * b;
      out[8] = a[8] * b;
      out[9] = a[9] * b;
      out[10] = a[10] * b;
      out[11] = a[11] * b;
      out[12] = a[12] * b;
      out[13] = a[13] * b;
      out[14] = a[14] * b;
      out[15] = a[15] * b;
      return out;
    }
    function multiplyScalarAndAdd(out, a, b, scale2) {
      out[0] = a[0] + b[0] * scale2;
      out[1] = a[1] + b[1] * scale2;
      out[2] = a[2] + b[2] * scale2;
      out[3] = a[3] + b[3] * scale2;
      out[4] = a[4] + b[4] * scale2;
      out[5] = a[5] + b[5] * scale2;
      out[6] = a[6] + b[6] * scale2;
      out[7] = a[7] + b[7] * scale2;
      out[8] = a[8] + b[8] * scale2;
      out[9] = a[9] + b[9] * scale2;
      out[10] = a[10] + b[10] * scale2;
      out[11] = a[11] + b[11] * scale2;
      out[12] = a[12] + b[12] * scale2;
      out[13] = a[13] + b[13] * scale2;
      out[14] = a[14] + b[14] * scale2;
      out[15] = a[15] + b[15] * scale2;
      return out;
    }
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    }
    function equals(a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
      var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
      var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
      var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
      var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
      var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
      var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
      var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
      return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
    }
    var mul4 = multiply;
    exports.mul = mul4;
    var sub = subtract;
    exports.sub = sub;
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/vec3.js
  var require_vec3 = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.clone = clone;
    exports.length = length;
    exports.fromValues = fromValues;
    exports.copy = copy;
    exports.set = set;
    exports.add = add;
    exports.subtract = subtract;
    exports.multiply = multiply;
    exports.divide = divide;
    exports.ceil = ceil;
    exports.floor = floor;
    exports.min = min;
    exports.max = max;
    exports.round = round;
    exports.scale = scale;
    exports.scaleAndAdd = scaleAndAdd;
    exports.distance = distance2;
    exports.squaredDistance = squaredDistance;
    exports.squaredLength = squaredLength;
    exports.negate = negate;
    exports.inverse = inverse;
    exports.normalize = normalize;
    exports.dot = dot;
    exports.cross = cross;
    exports.lerp = lerp2;
    exports.hermite = hermite;
    exports.bezier = bezier;
    exports.random = random2;
    exports.transformMat4 = transformMat4;
    exports.transformMat3 = transformMat3;
    exports.transformQuat = transformQuat;
    exports.rotateX = rotateX;
    exports.rotateY = rotateY;
    exports.rotateZ = rotateZ;
    exports.angle = angle;
    exports.zero = zero;
    exports.str = str;
    exports.exactEquals = exactEquals;
    exports.equals = equals;
    exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var out = new glMatrix.ARRAY_TYPE(3);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }
      return out;
    }
    function clone(a) {
      var out = new glMatrix.ARRAY_TYPE(3);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }
    function length(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return Math.hypot(x, y, z);
    }
    function fromValues(x, y, z) {
      var out = new glMatrix.ARRAY_TYPE(3);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }
    function set(out, x, y, z) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out;
    }
    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out;
    }
    function multiply(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      return out;
    }
    function divide(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      return out;
    }
    function ceil(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      out[2] = Math.ceil(a[2]);
      return out;
    }
    function floor(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      out[2] = Math.floor(a[2]);
      return out;
    }
    function min(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      return out;
    }
    function max(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      return out;
    }
    function round(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      out[2] = Math.round(a[2]);
      return out;
    }
    function scale(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      return out;
    }
    function scaleAndAdd(out, a, b, scale2) {
      out[0] = a[0] + b[0] * scale2;
      out[1] = a[1] + b[1] * scale2;
      out[2] = a[2] + b[2] * scale2;
      return out;
    }
    function distance2(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      return Math.hypot(x, y, z);
    }
    function squaredDistance(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      return x * x + y * y + z * z;
    }
    function squaredLength(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return x * x + y * y + z * z;
    }
    function negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      return out;
    }
    function inverse(out, a) {
      out[0] = 1 / a[0];
      out[1] = 1 / a[1];
      out[2] = 1 / a[2];
      return out;
    }
    function normalize(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var len2 = x * x + y * y + z * z;
      if (len2 > 0) {
        len2 = 1 / Math.sqrt(len2);
      }
      out[0] = a[0] * len2;
      out[1] = a[1] * len2;
      out[2] = a[2] * len2;
      return out;
    }
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }
    function cross(out, a, b) {
      var ax = a[0], ay = a[1], az = a[2];
      var bx = b[0], by = b[1], bz = b[2];
      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out;
    }
    function lerp2(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      return out;
    }
    function hermite(out, a, b, c, d, t) {
      var factorTimes2 = t * t;
      var factor1 = factorTimes2 * (2 * t - 3) + 1;
      var factor2 = factorTimes2 * (t - 2) + t;
      var factor3 = factorTimes2 * (t - 1);
      var factor4 = factorTimes2 * (3 - 2 * t);
      out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
      out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
      out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
      return out;
    }
    function bezier(out, a, b, c, d, t) {
      var inverseFactor = 1 - t;
      var inverseFactorTimesTwo = inverseFactor * inverseFactor;
      var factorTimes2 = t * t;
      var factor1 = inverseFactorTimesTwo * inverseFactor;
      var factor2 = 3 * t * inverseFactorTimesTwo;
      var factor3 = 3 * factorTimes2 * inverseFactor;
      var factor4 = factorTimes2 * t;
      out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
      out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
      out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
      return out;
    }
    function random2(out, scale2) {
      scale2 = scale2 || 1;
      var r = glMatrix.RANDOM() * 2 * Math.PI;
      var z = glMatrix.RANDOM() * 2 - 1;
      var zScale = Math.sqrt(1 - z * z) * scale2;
      out[0] = Math.cos(r) * zScale;
      out[1] = Math.sin(r) * zScale;
      out[2] = z * scale2;
      return out;
    }
    function transformMat4(out, a, m) {
      var x = a[0], y = a[1], z = a[2];
      var w = m[3] * x + m[7] * y + m[11] * z + m[15];
      w = w || 1;
      out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
      out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
      out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
      return out;
    }
    function transformMat3(out, a, m) {
      var x = a[0], y = a[1], z = a[2];
      out[0] = x * m[0] + y * m[3] + z * m[6];
      out[1] = x * m[1] + y * m[4] + z * m[7];
      out[2] = x * m[2] + y * m[5] + z * m[8];
      return out;
    }
    function transformQuat(out, a, q) {
      var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
      var x = a[0], y = a[1], z = a[2];
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
    function rotateX(out, a, b, rad) {
      var p = [], r = [];
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];
      r[0] = p[0];
      r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
      r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    }
    function rotateY(out, a, b, rad) {
      var p = [], r = [];
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];
      r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
      r[1] = p[1];
      r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    }
    function rotateZ(out, a, b, rad) {
      var p = [], r = [];
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];
      r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
      r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
      r[2] = p[2];
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    }
    function angle(a, b) {
      var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
      return Math.acos(Math.min(Math.max(cosine, -1), 1));
    }
    function zero(out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      return out;
    }
    function str(a) {
      return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
    }
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }
    function equals(a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2];
      var b0 = b[0], b1 = b[1], b2 = b[2];
      return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
    }
    var sub = subtract;
    exports.sub = sub;
    var mul4 = multiply;
    exports.mul = mul4;
    var div3 = divide;
    exports.div = div3;
    var dist = distance2;
    exports.dist = dist;
    var sqrDist = squaredDistance;
    exports.sqrDist = sqrDist;
    var len = length;
    exports.len = len;
    var sqrLen = squaredLength;
    exports.sqrLen = sqrLen;
    var forEach = function() {
      var vec = create();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
          stride = 3;
        }
        if (!offset) {
          offset = 0;
        }
        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }
        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
        }
        return a;
      };
    }();
    exports.forEach = forEach;
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/vec4.js
  var require_vec4 = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.clone = clone;
    exports.fromValues = fromValues;
    exports.copy = copy;
    exports.set = set;
    exports.add = add;
    exports.subtract = subtract;
    exports.multiply = multiply;
    exports.divide = divide;
    exports.ceil = ceil;
    exports.floor = floor;
    exports.min = min;
    exports.max = max;
    exports.round = round;
    exports.scale = scale;
    exports.scaleAndAdd = scaleAndAdd;
    exports.distance = distance2;
    exports.squaredDistance = squaredDistance;
    exports.length = length;
    exports.squaredLength = squaredLength;
    exports.negate = negate;
    exports.inverse = inverse;
    exports.normalize = normalize;
    exports.dot = dot;
    exports.cross = cross;
    exports.lerp = lerp2;
    exports.random = random2;
    exports.transformMat4 = transformMat4;
    exports.transformQuat = transformQuat;
    exports.zero = zero;
    exports.str = str;
    exports.exactEquals = exactEquals;
    exports.equals = equals;
    exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var out = new glMatrix.ARRAY_TYPE(4);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
      }
      return out;
    }
    function clone(a) {
      var out = new glMatrix.ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    function fromValues(x, y, z, w) {
      var out = new glMatrix.ARRAY_TYPE(4);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }
    function set(out, x, y, z, w) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      return out;
    }
    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      return out;
    }
    function multiply(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      out[3] = a[3] * b[3];
      return out;
    }
    function divide(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      out[3] = a[3] / b[3];
      return out;
    }
    function ceil(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      out[2] = Math.ceil(a[2]);
      out[3] = Math.ceil(a[3]);
      return out;
    }
    function floor(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      out[2] = Math.floor(a[2]);
      out[3] = Math.floor(a[3]);
      return out;
    }
    function min(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      out[3] = Math.min(a[3], b[3]);
      return out;
    }
    function max(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      out[3] = Math.max(a[3], b[3]);
      return out;
    }
    function round(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      out[2] = Math.round(a[2]);
      out[3] = Math.round(a[3]);
      return out;
    }
    function scale(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      return out;
    }
    function scaleAndAdd(out, a, b, scale2) {
      out[0] = a[0] + b[0] * scale2;
      out[1] = a[1] + b[1] * scale2;
      out[2] = a[2] + b[2] * scale2;
      out[3] = a[3] + b[3] * scale2;
      return out;
    }
    function distance2(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      var w = b[3] - a[3];
      return Math.hypot(x, y, z, w);
    }
    function squaredDistance(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      var w = b[3] - a[3];
      return x * x + y * y + z * z + w * w;
    }
    function length(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return Math.hypot(x, y, z, w);
    }
    function squaredLength(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return x * x + y * y + z * z + w * w;
    }
    function negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = -a[3];
      return out;
    }
    function inverse(out, a) {
      out[0] = 1 / a[0];
      out[1] = 1 / a[1];
      out[2] = 1 / a[2];
      out[3] = 1 / a[3];
      return out;
    }
    function normalize(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      var len2 = x * x + y * y + z * z + w * w;
      if (len2 > 0) {
        len2 = 1 / Math.sqrt(len2);
      }
      out[0] = x * len2;
      out[1] = y * len2;
      out[2] = z * len2;
      out[3] = w * len2;
      return out;
    }
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }
    function cross(out, u, v, w) {
      var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
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
    function lerp2(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      var aw = a[3];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      out[3] = aw + t * (b[3] - aw);
      return out;
    }
    function random2(out, scale2) {
      scale2 = scale2 || 1;
      var v1, v2, v3, v4;
      var s1, s2;
      do {
        v1 = glMatrix.RANDOM() * 2 - 1;
        v2 = glMatrix.RANDOM() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
      } while (s1 >= 1);
      do {
        v3 = glMatrix.RANDOM() * 2 - 1;
        v4 = glMatrix.RANDOM() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
      } while (s2 >= 1);
      var d = Math.sqrt((1 - s1) / s2);
      out[0] = scale2 * v1;
      out[1] = scale2 * v2;
      out[2] = scale2 * v3 * d;
      out[3] = scale2 * v4 * d;
      return out;
    }
    function transformMat4(out, a, m) {
      var x = a[0], y = a[1], z = a[2], w = a[3];
      out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
      out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
      out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
      out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
      return out;
    }
    function transformQuat(out, a, q) {
      var x = a[0], y = a[1], z = a[2];
      var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
      var ix = qw * x + qy * z - qz * y;
      var iy = qw * y + qz * x - qx * z;
      var iz = qw * z + qx * y - qy * x;
      var iw = -qx * x - qy * y - qz * z;
      out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      out[3] = a[3];
      return out;
    }
    function zero(out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      return out;
    }
    function str(a) {
      return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
    }
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }
    function equals(a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
      var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
      return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
    }
    var sub = subtract;
    exports.sub = sub;
    var mul4 = multiply;
    exports.mul = mul4;
    var div3 = divide;
    exports.div = div3;
    var dist = distance2;
    exports.dist = dist;
    var sqrDist = squaredDistance;
    exports.sqrDist = sqrDist;
    var len = length;
    exports.len = len;
    var sqrLen = squaredLength;
    exports.sqrLen = sqrLen;
    var forEach = function() {
      var vec = create();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
          stride = 4;
        }
        if (!offset) {
          offset = 0;
        }
        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }
        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          vec[3] = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
          a[i + 3] = vec[3];
        }
        return a;
      };
    }();
    exports.forEach = forEach;
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/quat.js
  var require_quat = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.identity = identity;
    exports.setAxisAngle = setAxisAngle;
    exports.getAxisAngle = getAxisAngle;
    exports.getAngle = getAngle;
    exports.multiply = multiply;
    exports.rotateX = rotateX;
    exports.rotateY = rotateY;
    exports.rotateZ = rotateZ;
    exports.calculateW = calculateW;
    exports.exp = exp;
    exports.ln = ln;
    exports.pow = pow;
    exports.slerp = slerp;
    exports.random = random2;
    exports.invert = invert;
    exports.conjugate = conjugate;
    exports.fromMat3 = fromMat3;
    exports.fromEuler = fromEuler;
    exports.str = str;
    exports.setAxes = exports.sqlerp = exports.rotationTo = exports.equals = exports.exactEquals = exports.normalize = exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.lerp = exports.dot = exports.scale = exports.mul = exports.add = exports.set = exports.copy = exports.fromValues = exports.clone = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    var mat3 = _interopRequireWildcard(require_mat3());
    var vec32 = _interopRequireWildcard(require_vec3());
    var vec43 = _interopRequireWildcard(require_vec4());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var out = new glMatrix.ARRAY_TYPE(4);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }
      out[3] = 1;
      return out;
    }
    function identity(out) {
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
      if (s > glMatrix.EPSILON) {
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
    function getAngle(a, b) {
      var dotproduct = dot(a, b);
      return Math.acos(2 * dotproduct * dotproduct - 1);
    }
    function multiply(out, a, b) {
      var ax = a[0], ay = a[1], az = a[2], aw = a[3];
      var bx = b[0], by = b[1], bz = b[2], bw = b[3];
      out[0] = ax * bw + aw * bx + ay * bz - az * by;
      out[1] = ay * bw + aw * by + az * bx - ax * bz;
      out[2] = az * bw + aw * bz + ax * by - ay * bx;
      out[3] = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    }
    function rotateX(out, a, rad) {
      rad *= 0.5;
      var ax = a[0], ay = a[1], az = a[2], aw = a[3];
      var bx = Math.sin(rad), bw = Math.cos(rad);
      out[0] = ax * bw + aw * bx;
      out[1] = ay * bw + az * bx;
      out[2] = az * bw - ay * bx;
      out[3] = aw * bw - ax * bx;
      return out;
    }
    function rotateY(out, a, rad) {
      rad *= 0.5;
      var ax = a[0], ay = a[1], az = a[2], aw = a[3];
      var by = Math.sin(rad), bw = Math.cos(rad);
      out[0] = ax * bw - az * by;
      out[1] = ay * bw + aw * by;
      out[2] = az * bw + ax * by;
      out[3] = aw * bw - ay * by;
      return out;
    }
    function rotateZ(out, a, rad) {
      rad *= 0.5;
      var ax = a[0], ay = a[1], az = a[2], aw = a[3];
      var bz = Math.sin(rad), bw = Math.cos(rad);
      out[0] = ax * bw + ay * bz;
      out[1] = ay * bw - ax * bz;
      out[2] = az * bw + aw * bz;
      out[3] = aw * bw - az * bz;
      return out;
    }
    function calculateW(out, a) {
      var x = a[0], y = a[1], z = a[2];
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
      return out;
    }
    function exp(out, a) {
      var x = a[0], y = a[1], z = a[2], w = a[3];
      var r = Math.sqrt(x * x + y * y + z * z);
      var et = Math.exp(w);
      var s = r > 0 ? et * Math.sin(r) / r : 0;
      out[0] = x * s;
      out[1] = y * s;
      out[2] = z * s;
      out[3] = et * Math.cos(r);
      return out;
    }
    function ln(out, a) {
      var x = a[0], y = a[1], z = a[2], w = a[3];
      var r = Math.sqrt(x * x + y * y + z * z);
      var t = r > 0 ? Math.atan2(r, w) / r : 0;
      out[0] = x * t;
      out[1] = y * t;
      out[2] = z * t;
      out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
      return out;
    }
    function pow(out, a, b) {
      ln(out, a);
      scale(out, out, b);
      exp(out, out);
      return out;
    }
    function slerp(out, a, b, t) {
      var ax = a[0], ay = a[1], az = a[2], aw = a[3];
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
      if (1 - cosom > glMatrix.EPSILON) {
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
    function random2(out) {
      var u1 = glMatrix.RANDOM();
      var u2 = glMatrix.RANDOM();
      var u3 = glMatrix.RANDOM();
      var sqrt1MinusU1 = Math.sqrt(1 - u1);
      var sqrtU1 = Math.sqrt(u1);
      out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
      out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
      out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
      out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
      return out;
    }
    function invert(out, a) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
      var dot2 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
      var invDot = dot2 ? 1 / dot2 : 0;
      out[0] = -a0 * invDot;
      out[1] = -a1 * invDot;
      out[2] = -a2 * invDot;
      out[3] = a3 * invDot;
      return out;
    }
    function conjugate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a[3];
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
        var i = 0;
        if (m[4] > m[0])
          i = 1;
        if (m[8] > m[i * 3 + i])
          i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
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
    function str(a) {
      return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
    }
    var clone = vec43.clone;
    exports.clone = clone;
    var fromValues = vec43.fromValues;
    exports.fromValues = fromValues;
    var copy = vec43.copy;
    exports.copy = copy;
    var set = vec43.set;
    exports.set = set;
    var add = vec43.add;
    exports.add = add;
    var mul4 = multiply;
    exports.mul = mul4;
    var scale = vec43.scale;
    exports.scale = scale;
    var dot = vec43.dot;
    exports.dot = dot;
    var lerp2 = vec43.lerp;
    exports.lerp = lerp2;
    var length = vec43.length;
    exports.length = length;
    var len = length;
    exports.len = len;
    var squaredLength = vec43.squaredLength;
    exports.squaredLength = squaredLength;
    var sqrLen = squaredLength;
    exports.sqrLen = sqrLen;
    var normalize = vec43.normalize;
    exports.normalize = normalize;
    var exactEquals = vec43.exactEquals;
    exports.exactEquals = exactEquals;
    var equals = vec43.equals;
    exports.equals = equals;
    var rotationTo = function() {
      var tmpvec3 = vec32.create();
      var xUnitVec3 = vec32.fromValues(1, 0, 0);
      var yUnitVec3 = vec32.fromValues(0, 1, 0);
      return function(out, a, b) {
        var dot2 = vec32.dot(a, b);
        if (dot2 < -0.999999) {
          vec32.cross(tmpvec3, xUnitVec3, a);
          if (vec32.len(tmpvec3) < 1e-6)
            vec32.cross(tmpvec3, yUnitVec3, a);
          vec32.normalize(tmpvec3, tmpvec3);
          setAxisAngle(out, tmpvec3, Math.PI);
          return out;
        } else if (dot2 > 0.999999) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 1;
          return out;
        } else {
          vec32.cross(tmpvec3, a, b);
          out[0] = tmpvec3[0];
          out[1] = tmpvec3[1];
          out[2] = tmpvec3[2];
          out[3] = 1 + dot2;
          return normalize(out, out);
        }
      };
    }();
    exports.rotationTo = rotationTo;
    var sqlerp = function() {
      var temp1 = create();
      var temp2 = create();
      return function(out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));
        return out;
      };
    }();
    exports.sqlerp = sqlerp;
    var setAxes = function() {
      var matr = mat3.create();
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
        return normalize(out, fromMat3(out, matr));
      };
    }();
    exports.setAxes = setAxes;
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/quat2.js
  var require_quat2 = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.clone = clone;
    exports.fromValues = fromValues;
    exports.fromRotationTranslationValues = fromRotationTranslationValues;
    exports.fromRotationTranslation = fromRotationTranslation;
    exports.fromTranslation = fromTranslation;
    exports.fromRotation = fromRotation;
    exports.fromMat4 = fromMat4;
    exports.copy = copy;
    exports.identity = identity;
    exports.set = set;
    exports.getDual = getDual;
    exports.setDual = setDual;
    exports.getTranslation = getTranslation;
    exports.translate = translate;
    exports.rotateX = rotateX;
    exports.rotateY = rotateY;
    exports.rotateZ = rotateZ;
    exports.rotateByQuatAppend = rotateByQuatAppend;
    exports.rotateByQuatPrepend = rotateByQuatPrepend;
    exports.rotateAroundAxis = rotateAroundAxis;
    exports.add = add;
    exports.multiply = multiply;
    exports.scale = scale;
    exports.lerp = lerp2;
    exports.invert = invert;
    exports.conjugate = conjugate;
    exports.normalize = normalize;
    exports.str = str;
    exports.exactEquals = exactEquals;
    exports.equals = equals;
    exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.dot = exports.mul = exports.setReal = exports.getReal = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    var quat2 = _interopRequireWildcard(require_quat());
    var mat42 = _interopRequireWildcard(require_mat4());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var dq = new glMatrix.ARRAY_TYPE(8);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
        dq[0] = 0;
        dq[1] = 0;
        dq[2] = 0;
        dq[4] = 0;
        dq[5] = 0;
        dq[6] = 0;
        dq[7] = 0;
      }
      dq[3] = 1;
      return dq;
    }
    function clone(a) {
      var dq = new glMatrix.ARRAY_TYPE(8);
      dq[0] = a[0];
      dq[1] = a[1];
      dq[2] = a[2];
      dq[3] = a[3];
      dq[4] = a[4];
      dq[5] = a[5];
      dq[6] = a[6];
      dq[7] = a[7];
      return dq;
    }
    function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
      var dq = new glMatrix.ARRAY_TYPE(8);
      dq[0] = x1;
      dq[1] = y1;
      dq[2] = z1;
      dq[3] = w1;
      dq[4] = x2;
      dq[5] = y2;
      dq[6] = z2;
      dq[7] = w2;
      return dq;
    }
    function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
      var dq = new glMatrix.ARRAY_TYPE(8);
      dq[0] = x1;
      dq[1] = y1;
      dq[2] = z1;
      dq[3] = w1;
      var ax = x2 * 0.5, ay = y2 * 0.5, az = z2 * 0.5;
      dq[4] = ax * w1 + ay * z1 - az * y1;
      dq[5] = ay * w1 + az * x1 - ax * z1;
      dq[6] = az * w1 + ax * y1 - ay * x1;
      dq[7] = -ax * x1 - ay * y1 - az * z1;
      return dq;
    }
    function fromRotationTranslation(out, q, t) {
      var ax = t[0] * 0.5, ay = t[1] * 0.5, az = t[2] * 0.5, bx = q[0], by = q[1], bz = q[2], bw = q[3];
      out[0] = bx;
      out[1] = by;
      out[2] = bz;
      out[3] = bw;
      out[4] = ax * bw + ay * bz - az * by;
      out[5] = ay * bw + az * bx - ax * bz;
      out[6] = az * bw + ax * by - ay * bx;
      out[7] = -ax * bx - ay * by - az * bz;
      return out;
    }
    function fromTranslation(out, t) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      out[4] = t[0] * 0.5;
      out[5] = t[1] * 0.5;
      out[6] = t[2] * 0.5;
      out[7] = 0;
      return out;
    }
    function fromRotation(out, q) {
      out[0] = q[0];
      out[1] = q[1];
      out[2] = q[2];
      out[3] = q[3];
      out[4] = 0;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      return out;
    }
    function fromMat4(out, a) {
      var outer = quat2.create();
      mat42.getRotation(outer, a);
      var t = new glMatrix.ARRAY_TYPE(3);
      mat42.getTranslation(t, a);
      fromRotationTranslation(out, outer, t);
      return out;
    }
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      return out;
    }
    function identity(out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      out[4] = 0;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      return out;
    }
    function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
      out[0] = x1;
      out[1] = y1;
      out[2] = z1;
      out[3] = w1;
      out[4] = x2;
      out[5] = y2;
      out[6] = z2;
      out[7] = w2;
      return out;
    }
    var getReal = quat2.copy;
    exports.getReal = getReal;
    function getDual(out, a) {
      out[0] = a[4];
      out[1] = a[5];
      out[2] = a[6];
      out[3] = a[7];
      return out;
    }
    var setReal = quat2.copy;
    exports.setReal = setReal;
    function setDual(out, q) {
      out[4] = q[0];
      out[5] = q[1];
      out[6] = q[2];
      out[7] = q[3];
      return out;
    }
    function getTranslation(out, a) {
      var ax = a[4], ay = a[5], az = a[6], aw = a[7], bx = -a[0], by = -a[1], bz = -a[2], bw = a[3];
      out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
      out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
      out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
      return out;
    }
    function translate(out, a, v) {
      var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3], bx1 = v[0] * 0.5, by1 = v[1] * 0.5, bz1 = v[2] * 0.5, ax2 = a[4], ay2 = a[5], az2 = a[6], aw2 = a[7];
      out[0] = ax1;
      out[1] = ay1;
      out[2] = az1;
      out[3] = aw1;
      out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
      out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
      out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
      out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
      return out;
    }
    function rotateX(out, a, rad) {
      var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
      quat2.rotateX(out, a, rad);
      bx = out[0];
      by = out[1];
      bz = out[2];
      bw = out[3];
      out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
      out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
      out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
      out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
      return out;
    }
    function rotateY(out, a, rad) {
      var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
      quat2.rotateY(out, a, rad);
      bx = out[0];
      by = out[1];
      bz = out[2];
      bw = out[3];
      out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
      out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
      out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
      out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
      return out;
    }
    function rotateZ(out, a, rad) {
      var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7], ax1 = ax * bw + aw * bx + ay * bz - az * by, ay1 = ay * bw + aw * by + az * bx - ax * bz, az1 = az * bw + aw * bz + ax * by - ay * bx, aw1 = aw * bw - ax * bx - ay * by - az * bz;
      quat2.rotateZ(out, a, rad);
      bx = out[0];
      by = out[1];
      bz = out[2];
      bw = out[3];
      out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
      out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
      out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
      out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
      return out;
    }
    function rotateByQuatAppend(out, a, q) {
      var qx = q[0], qy = q[1], qz = q[2], qw = q[3], ax = a[0], ay = a[1], az = a[2], aw = a[3];
      out[0] = ax * qw + aw * qx + ay * qz - az * qy;
      out[1] = ay * qw + aw * qy + az * qx - ax * qz;
      out[2] = az * qw + aw * qz + ax * qy - ay * qx;
      out[3] = aw * qw - ax * qx - ay * qy - az * qz;
      ax = a[4];
      ay = a[5];
      az = a[6];
      aw = a[7];
      out[4] = ax * qw + aw * qx + ay * qz - az * qy;
      out[5] = ay * qw + aw * qy + az * qx - ax * qz;
      out[6] = az * qw + aw * qz + ax * qy - ay * qx;
      out[7] = aw * qw - ax * qx - ay * qy - az * qz;
      return out;
    }
    function rotateByQuatPrepend(out, q, a) {
      var qx = q[0], qy = q[1], qz = q[2], qw = q[3], bx = a[0], by = a[1], bz = a[2], bw = a[3];
      out[0] = qx * bw + qw * bx + qy * bz - qz * by;
      out[1] = qy * bw + qw * by + qz * bx - qx * bz;
      out[2] = qz * bw + qw * bz + qx * by - qy * bx;
      out[3] = qw * bw - qx * bx - qy * by - qz * bz;
      bx = a[4];
      by = a[5];
      bz = a[6];
      bw = a[7];
      out[4] = qx * bw + qw * bx + qy * bz - qz * by;
      out[5] = qy * bw + qw * by + qz * bx - qx * bz;
      out[6] = qz * bw + qw * bz + qx * by - qy * bx;
      out[7] = qw * bw - qx * bx - qy * by - qz * bz;
      return out;
    }
    function rotateAroundAxis(out, a, axis, rad) {
      if (Math.abs(rad) < glMatrix.EPSILON) {
        return copy(out, a);
      }
      var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
      rad = rad * 0.5;
      var s = Math.sin(rad);
      var bx = s * axis[0] / axisLength;
      var by = s * axis[1] / axisLength;
      var bz = s * axis[2] / axisLength;
      var bw = Math.cos(rad);
      var ax1 = a[0], ay1 = a[1], az1 = a[2], aw1 = a[3];
      out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
      out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
      out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
      out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
      var ax = a[4], ay = a[5], az = a[6], aw = a[7];
      out[4] = ax * bw + aw * bx + ay * bz - az * by;
      out[5] = ay * bw + aw * by + az * bx - ax * bz;
      out[6] = az * bw + aw * bz + ax * by - ay * bx;
      out[7] = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    }
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      return out;
    }
    function multiply(out, a, b) {
      var ax0 = a[0], ay0 = a[1], az0 = a[2], aw0 = a[3], bx1 = b[4], by1 = b[5], bz1 = b[6], bw1 = b[7], ax1 = a[4], ay1 = a[5], az1 = a[6], aw1 = a[7], bx0 = b[0], by0 = b[1], bz0 = b[2], bw0 = b[3];
      out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
      out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
      out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
      out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
      out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
      out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
      out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
      out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
      return out;
    }
    var mul4 = multiply;
    exports.mul = mul4;
    function scale(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      out[6] = a[6] * b;
      out[7] = a[7] * b;
      return out;
    }
    var dot = quat2.dot;
    exports.dot = dot;
    function lerp2(out, a, b, t) {
      var mt = 1 - t;
      if (dot(a, b) < 0)
        t = -t;
      out[0] = a[0] * mt + b[0] * t;
      out[1] = a[1] * mt + b[1] * t;
      out[2] = a[2] * mt + b[2] * t;
      out[3] = a[3] * mt + b[3] * t;
      out[4] = a[4] * mt + b[4] * t;
      out[5] = a[5] * mt + b[5] * t;
      out[6] = a[6] * mt + b[6] * t;
      out[7] = a[7] * mt + b[7] * t;
      return out;
    }
    function invert(out, a) {
      var sqlen = squaredLength(a);
      out[0] = -a[0] / sqlen;
      out[1] = -a[1] / sqlen;
      out[2] = -a[2] / sqlen;
      out[3] = a[3] / sqlen;
      out[4] = -a[4] / sqlen;
      out[5] = -a[5] / sqlen;
      out[6] = -a[6] / sqlen;
      out[7] = a[7] / sqlen;
      return out;
    }
    function conjugate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a[3];
      out[4] = -a[4];
      out[5] = -a[5];
      out[6] = -a[6];
      out[7] = a[7];
      return out;
    }
    var length = quat2.length;
    exports.length = length;
    var len = length;
    exports.len = len;
    var squaredLength = quat2.squaredLength;
    exports.squaredLength = squaredLength;
    var sqrLen = squaredLength;
    exports.sqrLen = sqrLen;
    function normalize(out, a) {
      var magnitude = squaredLength(a);
      if (magnitude > 0) {
        magnitude = Math.sqrt(magnitude);
        var a0 = a[0] / magnitude;
        var a1 = a[1] / magnitude;
        var a2 = a[2] / magnitude;
        var a3 = a[3] / magnitude;
        var b0 = a[4];
        var b1 = a[5];
        var b2 = a[6];
        var b3 = a[7];
        var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
        out[0] = a0;
        out[1] = a1;
        out[2] = a2;
        out[3] = a3;
        out[4] = (b0 - a0 * a_dot_b) / magnitude;
        out[5] = (b1 - a1 * a_dot_b) / magnitude;
        out[6] = (b2 - a2 * a_dot_b) / magnitude;
        out[7] = (b3 - a3 * a_dot_b) / magnitude;
      }
      return out;
    }
    function str(a) {
      return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
    }
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
    }
    function equals(a, b) {
      var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
      var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
      return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7));
    }
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/vec2.js
  var require_vec2 = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.create = create;
    exports.clone = clone;
    exports.fromValues = fromValues;
    exports.copy = copy;
    exports.set = set;
    exports.add = add;
    exports.subtract = subtract;
    exports.multiply = multiply;
    exports.divide = divide;
    exports.ceil = ceil;
    exports.floor = floor;
    exports.min = min;
    exports.max = max;
    exports.round = round;
    exports.scale = scale;
    exports.scaleAndAdd = scaleAndAdd;
    exports.distance = distance2;
    exports.squaredDistance = squaredDistance;
    exports.length = length;
    exports.squaredLength = squaredLength;
    exports.negate = negate;
    exports.inverse = inverse;
    exports.normalize = normalize;
    exports.dot = dot;
    exports.cross = cross;
    exports.lerp = lerp2;
    exports.random = random2;
    exports.transformMat2 = transformMat2;
    exports.transformMat2d = transformMat2d;
    exports.transformMat3 = transformMat3;
    exports.transformMat4 = transformMat4;
    exports.rotate = rotate;
    exports.angle = angle;
    exports.zero = zero;
    exports.str = str;
    exports.exactEquals = exactEquals;
    exports.equals = equals;
    exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function create() {
      var out = new glMatrix.ARRAY_TYPE(2);
      if (glMatrix.ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
      }
      return out;
    }
    function clone(a) {
      var out = new glMatrix.ARRAY_TYPE(2);
      out[0] = a[0];
      out[1] = a[1];
      return out;
    }
    function fromValues(x, y) {
      var out = new glMatrix.ARRAY_TYPE(2);
      out[0] = x;
      out[1] = y;
      return out;
    }
    function copy(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      return out;
    }
    function set(out, x, y) {
      out[0] = x;
      out[1] = y;
      return out;
    }
    function add(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out;
    }
    function subtract(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out;
    }
    function multiply(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out;
    }
    function divide(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out;
    }
    function ceil(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      return out;
    }
    function floor(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      return out;
    }
    function min(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      return out;
    }
    function max(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      return out;
    }
    function round(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      return out;
    }
    function scale(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      return out;
    }
    function scaleAndAdd(out, a, b, scale2) {
      out[0] = a[0] + b[0] * scale2;
      out[1] = a[1] + b[1] * scale2;
      return out;
    }
    function distance2(a, b) {
      var x = b[0] - a[0], y = b[1] - a[1];
      return Math.hypot(x, y);
    }
    function squaredDistance(a, b) {
      var x = b[0] - a[0], y = b[1] - a[1];
      return x * x + y * y;
    }
    function length(a) {
      var x = a[0], y = a[1];
      return Math.hypot(x, y);
    }
    function squaredLength(a) {
      var x = a[0], y = a[1];
      return x * x + y * y;
    }
    function negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      return out;
    }
    function inverse(out, a) {
      out[0] = 1 / a[0];
      out[1] = 1 / a[1];
      return out;
    }
    function normalize(out, a) {
      var x = a[0], y = a[1];
      var len2 = x * x + y * y;
      if (len2 > 0) {
        len2 = 1 / Math.sqrt(len2);
      }
      out[0] = a[0] * len2;
      out[1] = a[1] * len2;
      return out;
    }
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1];
    }
    function cross(out, a, b) {
      var z = a[0] * b[1] - a[1] * b[0];
      out[0] = out[1] = 0;
      out[2] = z;
      return out;
    }
    function lerp2(out, a, b, t) {
      var ax = a[0], ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out;
    }
    function random2(out, scale2) {
      scale2 = scale2 || 1;
      var r = glMatrix.RANDOM() * 2 * Math.PI;
      out[0] = Math.cos(r) * scale2;
      out[1] = Math.sin(r) * scale2;
      return out;
    }
    function transformMat2(out, a, m) {
      var x = a[0], y = a[1];
      out[0] = m[0] * x + m[2] * y;
      out[1] = m[1] * x + m[3] * y;
      return out;
    }
    function transformMat2d(out, a, m) {
      var x = a[0], y = a[1];
      out[0] = m[0] * x + m[2] * y + m[4];
      out[1] = m[1] * x + m[3] * y + m[5];
      return out;
    }
    function transformMat3(out, a, m) {
      var x = a[0], y = a[1];
      out[0] = m[0] * x + m[3] * y + m[6];
      out[1] = m[1] * x + m[4] * y + m[7];
      return out;
    }
    function transformMat4(out, a, m) {
      var x = a[0];
      var y = a[1];
      out[0] = m[0] * x + m[4] * y + m[12];
      out[1] = m[1] * x + m[5] * y + m[13];
      return out;
    }
    function rotate(out, a, b, rad) {
      var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
      out[0] = p0 * cosC - p1 * sinC + b[0];
      out[1] = p0 * sinC + p1 * cosC + b[1];
      return out;
    }
    function angle(a, b) {
      var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
      return Math.acos(Math.min(Math.max(cosine, -1), 1));
    }
    function zero(out) {
      out[0] = 0;
      out[1] = 0;
      return out;
    }
    function str(a) {
      return "vec2(" + a[0] + ", " + a[1] + ")";
    }
    function exactEquals(a, b) {
      return a[0] === b[0] && a[1] === b[1];
    }
    function equals(a, b) {
      var a0 = a[0], a1 = a[1];
      var b0 = b[0], b1 = b[1];
      return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
    }
    var len = length;
    exports.len = len;
    var sub = subtract;
    exports.sub = sub;
    var mul4 = multiply;
    exports.mul = mul4;
    var div3 = divide;
    exports.div = div3;
    var dist = distance2;
    exports.dist = dist;
    var sqrDist = squaredDistance;
    exports.sqrDist = sqrDist;
    var sqrLen = squaredLength;
    exports.sqrLen = sqrLen;
    var forEach = function() {
      var vec = create();
      return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
          stride = 2;
        }
        if (!offset) {
          offset = 0;
        }
        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }
        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
        }
        return a;
      };
    }();
    exports.forEach = forEach;
  });

  // zogra-renderer/node_modules/gl-matrix/cjs/index.js
  var require_cjs = __commonJS((exports) => {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.vec4 = exports.vec3 = exports.vec2 = exports.quat2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = void 0;
    var glMatrix = _interopRequireWildcard(require_common());
    exports.glMatrix = glMatrix;
    var mat2 = _interopRequireWildcard(require_mat2());
    exports.mat2 = mat2;
    var mat2d = _interopRequireWildcard(require_mat2d());
    exports.mat2d = mat2d;
    var mat3 = _interopRequireWildcard(require_mat3());
    exports.mat3 = mat3;
    var mat42 = _interopRequireWildcard(require_mat4());
    exports.mat4 = mat42;
    var quat2 = _interopRequireWildcard(require_quat());
    exports.quat = quat2;
    var quat22 = _interopRequireWildcard(require_quat2());
    exports.quat2 = quat22;
    var vec25 = _interopRequireWildcard(require_vec2());
    exports.vec2 = vec25;
    var vec32 = _interopRequireWildcard(require_vec3());
    exports.vec3 = vec32;
    var vec43 = _interopRequireWildcard(require_vec4());
    exports.vec4 = vec43;
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return {default: obj};
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
  });

  // zogra-renderer/dist/types/vec3.js
  var require_vec32 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.vec3 = exports.Vector3 = void 0;
    var vec4_1 = require_vec42();
    var vec2_1 = require_vec22();
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
      plus(v) {
        this[0] += v[0];
        this[1] += v[1];
        this[2] += v[2];
        return this;
      }
      minus(v) {
        this[0] -= v[0];
        this[1] -= v[1];
        this[2] -= v[2];
        return this;
      }
      mul(v) {
        this[0] *= v[0];
        this[1] *= v[1];
        this[2] *= v[2];
        return this;
      }
      div(v) {
        this[0] /= v[0];
        this[1] /= v[1];
        this[2] /= v[2];
        return this;
      }
      dot(v) {
        return this[0] * v[0] + this[1] * v[1] + this[2] * v[2];
      }
      normalize() {
        const m = this.magnitude;
        return m == 0 ? vec32.zero() : this.clone().div(vec32(m, m, m));
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
      clone() {
        return vec32(this[0], this[1], this[2]);
      }
      toVec2() {
        return vec2_1.vec2(this[0], this[1]);
      }
      equals(v) {
        if (v === void 0)
          return false;
        return v[0] === this[0] && v[1] === this[1] && v[2] === this[2];
      }
      __to(type) {
        switch (type) {
          case vec4_1.Vector4:
            return vec4_1.vec4(this[0], this[1], this[2], 0);
          case vec2_1.Vector2:
            return vec2_1.vec2(this[0], this[1]);
        }
        return this.clone();
      }
    };
    exports.Vector3 = Vector3;
    function vec32(x, y = x, z = x) {
      return new Vector3(x, y, z);
    }
    exports.vec3 = vec32;
    vec32.from = (src) => {
      const [x = 0, y = 0, z = 0] = src;
      return vec32(x, y, z);
    };
    vec32.floor = (v) => vec32(Math.floor(v.x), Math.floor(v.y), Math.floor(v.z));
    vec32.zero = Vector3.zero;
    vec32.one = Vector3.one;
  });

  // zogra-renderer/dist/types/vec4.js
  var require_vec42 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.vec4 = exports.Vector4 = void 0;
    var vec3_1 = require_vec32();
    var vec2_1 = require_vec22();
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
        return m == 0 ? vec43.zero() : this.clone().div(vec43(m, m, m, m));
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
      plus(v) {
        this[0] += v[0];
        this[1] += v[1];
        this[2] += v[2];
        this[3] += v[3];
        return this;
      }
      minus(v) {
        this[0] -= v[0];
        this[1] -= v[1];
        this[2] -= v[2];
        this[3] -= v[3];
        return this;
      }
      mul(v) {
        this[0] *= v[0];
        this[1] *= v[1];
        this[2] *= v[2];
        this[3] *= v[3];
        return this;
      }
      div(v) {
        this[0] /= v[0];
        this[1] /= v[1];
        this[2] /= v[2];
        this[3] /= v[3];
        return this;
      }
      dot(v) {
        return this[0] * v[0] + this[1] * v[1] + this[2] * v[2] + this[3] * v[3];
      }
      normalize() {
        const m = this.magnitude;
        return m == 0 ? vec43.zero() : this.clone().div(vec43(m, m, m, m));
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
      clone() {
        return vec43(this[0], this[1], this[2], this[3]);
      }
      equals(v) {
        if (v === void 0)
          return false;
        return v[0] === this[0] && v[1] === this[1] && v[2] === this[2] && v[3] === this[3];
      }
      __to(type) {
        switch (type) {
          case Vector4:
            return this.clone();
          case vec3_1.Vector3:
            return vec3_1.vec3(this[0], this[1], this[2]);
          case vec2_1.Vector2:
            return vec2_1.vec2(this[0], this[1]);
        }
        return this.clone();
      }
    };
    exports.Vector4 = Vector4;
    function vec43(x, y = x, z = x, w = x) {
      return new Vector4(x, y, z, w);
    }
    exports.vec4 = vec43;
    vec43.from = (src) => {
      const [x = 0, y = 0, z = 0, w = 0] = src;
      return vec43(x, y, z, w);
    };
    vec43.floor = (v) => vec43(Math.floor(v.x), Math.floor(v.y), Math.floor(v.z), Math.floor(v.w));
    vec43.zero = Vector4.zero;
    vec43.one = Vector4.one;
  });

  // zogra-renderer/dist/types/vec2.js
  var require_vec22 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.vec2 = exports.Vector2 = void 0;
    var vec4_1 = require_vec42();
    var vec3_1 = require_vec32();
    var V2Constructor = Array;
    var Vector23 = class extends V2Constructor {
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
      get normalized() {
        const m = this.magnitude;
        return m == 0 ? vec25.zero() : this.clone().div(vec25(m, m));
      }
      get negative() {
        return this.clone().negate();
      }
      get inversed() {
        return this.clone().inverse();
      }
      constructor(x, y) {
        super(x, y);
      }
      static zero() {
        return new Vector23(0, 0);
      }
      static one() {
        return new Vector23(1, 1);
      }
      static up() {
        return new Vector23(0, 1);
      }
      static down() {
        return new Vector23(0, -1);
      }
      static left() {
        return new Vector23(-1, 0);
      }
      static right() {
        return new Vector23(1, 0);
      }
      static distance(u, v) {
        return Math.sqrt((u.x - v.x) * (u.x - v.x) + (u.y - v.y) * (u.y - v.y));
      }
      static distanceSquared(u, v) {
        return (u.x - v.x) * (u.x - v.x) + (u.y - v.y) * (u.y - v.y);
      }
      plus(v) {
        this[0] += v[0];
        this[1] += v[1];
        return this;
      }
      minus(v) {
        this[0] -= v[0];
        this[1] -= v[1];
        return this;
      }
      mul(v) {
        this[0] *= v[0];
        this[1] *= v[1];
        return this;
      }
      div(v) {
        this[0] /= v[0];
        this[1] /= v[1];
        return this;
      }
      dot(v) {
        return this[0] * v[0] + this[1] * v[1];
      }
      normalize() {
        const m = this.magnitude;
        return m == 0 ? vec25.zero() : this.clone().div(vec25(m, m));
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
      cross(b) {
        return this.x * b.y - this.y * b.x;
      }
      clone() {
        return vec25(this[0], this[1]);
      }
      toVec3(z = 0) {
        return vec3_1.vec3(this[0], this[1], z);
      }
      __to(type) {
        switch (type) {
          case vec4_1.Vector4:
            return vec4_1.vec4(this[0], this[1], 0, 0);
          case vec3_1.Vector3:
            return vec3_1.vec3(this[0], this[1], 0);
        }
        return this.clone();
      }
      equals(v) {
        if (v === void 0)
          return false;
        return v[0] === this[0] && v[1] === this[1];
      }
    };
    exports.Vector2 = Vector23;
    function vec25(x, y = x) {
      return new Vector23(x, y);
    }
    exports.vec2 = vec25;
    vec25.from = (src) => {
      const [x = 0, y = 0] = src;
      return vec25(x, y);
    };
    vec25.floor = (v) => vec25(Math.floor(v.x), Math.floor(v.y));
    vec25.zero = Vector23.zero;
    vec25.one = Vector23.one;
    vec25.left = Vector23.left;
    vec25.right = Vector23.right;
    vec25.down = Vector23.down;
    vec25.up = Vector23.up;
  });

  // zogra-renderer/dist/types/color.js
  var require_color = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.rgb = exports.rgba = exports.Color = void 0;
    var vec4_1 = require_vec42();
    var Color2 = class extends vec4_1.Vector4 {
      get r() {
        return this[0];
      }
      set r(r) {
        this[0] = r;
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
      set a(a) {
        this[3] = a;
      }
      constructor(r, g, b, a = 1) {
        super(r, g, b, a);
      }
      static get white() {
        return new Color2(1, 1, 1);
      }
      static get transparent() {
        return new Color2(1, 1, 1, 0);
      }
      static get black() {
        return new Color2(0, 0, 0);
      }
      static get red() {
        return new Color2(1, 0, 0);
      }
      static get green() {
        return new Color2(0, 1, 0);
      }
      static get blue() {
        return new Color2(0, 0, 1);
      }
      static get cyan() {
        return new Color2(0, 1, 1);
      }
      static get yellow() {
        return new Color2(1, 1, 0);
      }
      static get magenta() {
        return new Color2(1, 0, 1);
      }
      static get gray() {
        return new Color2(0.5, 0.5, 0.5);
      }
      transparent() {
        return new Color2(this.r, this.g, this.b, 0);
      }
    };
    exports.Color = Color2;
    var rgba = (r, g, b, a = 1) => new Color2(r, g, b, a);
    exports.rgba = rgba;
    var rgb = (r, g, b) => new Color2(r, g, b, 1);
    exports.rgb = rgb;
  });

  // zogra-renderer/dist/types/math.js
  var require_math = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Rad2Deg = exports.Deg2Rad = exports.distance = exports.cross = exports.dot = exports.div = exports.mul = exports.minus = exports.plus = void 0;
    var vec3_1 = require_vec32();
    var vec4_1 = require_vec42();
    var vec2_1 = require_vec22();
    Number.prototype.__to = function(type) {
      switch (type) {
        case vec4_1.Vector4:
          return vec4_1.vec4(this.valueOf(), this.valueOf(), this.valueOf(), this.valueOf());
        case vec3_1.Vector3:
          return vec3_1.vec3(this.valueOf(), this.valueOf(), this.valueOf());
        case vec2_1.Vector2:
          return vec2_1.vec2(this.valueOf(), this.valueOf());
      }
      return this.valueOf();
    };
    function arithOrder(a, b) {
      if (typeof a === "number")
        return [b, a, true];
      else if (typeof b === "number")
        return [a, b, false];
      return b.length > a.length ? [b, a, true] : [a, b, false];
    }
    function plus2(a, b) {
      const [lhs, rhs] = arithOrder(a, b);
      return rhs.__to(lhs.constructor).plus(lhs);
    }
    exports.plus = plus2;
    function minus(a, b) {
      const [lhs, rhs, invert] = arithOrder(a, b);
      return invert ? rhs.__to(lhs.constructor).minus(lhs) : rhs.__to(lhs.constructor).minus(lhs).negate();
    }
    exports.minus = minus;
    function mul4(a, b) {
      const [lhs, rhs] = arithOrder(a, b);
      return rhs.__to(lhs.constructor).mul(lhs);
    }
    exports.mul = mul4;
    function div3(a, b) {
      const [lhs, rhs, invert] = arithOrder(a, b);
      return invert ? rhs.__to(lhs.constructor).div(lhs) : rhs.__to(lhs.constructor).div(lhs).inversed;
    }
    exports.div = div3;
    function dot(a, b) {
      return a.dot(b);
    }
    exports.dot = dot;
    function cross(a, b) {
      return a.cross(b);
    }
    exports.cross = cross;
    function distance2(a, b) {
      return minus(b, a).magnitude;
    }
    exports.distance = distance2;
    exports.Deg2Rad = Math.PI / 180;
    exports.Rad2Deg = 180 / Math.PI;
  });

  // zogra-renderer/dist/types/mat4.js
  var require_mat42 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.mat4 = exports.Matrix4x4 = void 0;
    var gl_matrix_1 = require_cjs();
    var vec3_1 = require_vec32();
    var vec4_1 = require_vec42();
    function Matrix4x4(values) {
      const mat = gl_matrix_1.mat4.clone(values);
      return mat;
    }
    exports.Matrix4x4 = Matrix4x4;
    Matrix4x4.identity = () => {
      const mat = gl_matrix_1.mat4.create();
      return gl_matrix_1.mat4.identity(mat);
    };
    Matrix4x4.rts = (rotation, translation, scale) => {
      const m = exports.mat4.identity();
      gl_matrix_1.mat4.fromRotationTranslationScale(m, rotation, translation, scale);
      return m;
    };
    Matrix4x4.translate = (translate) => {
      const m = exports.mat4.identity();
      return gl_matrix_1.mat4.translate(m, gl_matrix_1.mat4.identity(m), translate);
    };
    Matrix4x4.invert = (m) => {
      const out = gl_matrix_1.mat4.create();
      gl_matrix_1.mat4.invert(out, m);
      return out;
    };
    Matrix4x4.getTranslation = (m) => {
      let out = vec3_1.vec3(0, 0, 0);
      gl_matrix_1.mat4.getTranslation(out, m);
      return out;
    };
    Matrix4x4.getRotation = (m) => {
      let out = gl_matrix_1.quat.create();
      gl_matrix_1.mat4.getRotation(out, m);
      return out;
    };
    Matrix4x4.getScaling = (m) => {
      let out = vec3_1.vec3(0, 0, 0);
      gl_matrix_1.mat4.getScaling(out, m);
      return out;
    };
    Matrix4x4.mulPoint = (m, p) => {
      let v = vec4_1.vec4(p.x, p.y, p.z, 1);
      let out = vec4_1.vec4.zero();
      gl_matrix_1.vec4.transformMat4(out, v, m);
      return vec3_1.vec3(out.x, out.y, out.z);
    };
    Matrix4x4.mulVector = (m, v) => {
      let v4 = vec4_1.vec4(v.x, v.y, v.z, 0);
      let out = vec4_1.vec4.zero();
      gl_matrix_1.vec4.transformMat4(out, v4, m);
      return vec3_1.vec3(out.x, out.y, out.z);
    };
    Matrix4x4.mulVec4 = (m, v) => {
      let out = vec4_1.vec4.zero();
      gl_matrix_1.vec4.transformMat4(out, v, m);
      return out;
    };
    Matrix4x4.perspective = (fov, aspect, near, far) => {
      const out = gl_matrix_1.mat4.create();
      return gl_matrix_1.mat4.perspective(out, fov, aspect, near, far);
    };
    Matrix4x4.transpose = (m) => {
      return gl_matrix_1.mat4.transpose(gl_matrix_1.mat4.create(), m);
    };
    function simpleOrthogonal(height, aspect, near, far) {
      const out = gl_matrix_1.mat4.create();
      gl_matrix_1.mat4.ortho(out, -aspect * height, aspect * height, -height, height, near, far);
      return out;
    }
    function orthogonal(...args) {
      if (args.length === 4)
        return simpleOrthogonal(...args);
      const out = gl_matrix_1.mat4.create();
      gl_matrix_1.mat4.ortho(...[out, ...args]);
      return out;
    }
    Matrix4x4.ortho = orthogonal;
    Matrix4x4.rotate = (m, axis, rad) => {
      return gl_matrix_1.mat4.rotate(gl_matrix_1.mat4.create(), m, rad, axis);
    };
    Matrix4x4.scale = (m, scaling) => {
      return gl_matrix_1.mat4.scale(gl_matrix_1.mat4.create(), m, scaling);
    };
    Matrix4x4.fromRotation = (axis, rad) => {
      return gl_matrix_1.mat4.fromRotation(gl_matrix_1.mat4.create(), rad, axis);
    };
    Matrix4x4.fromScaling = (scaling) => {
      return gl_matrix_1.mat4.fromScaling(gl_matrix_1.mat4.create(), scaling);
    };
    Matrix4x4.equal = (a, b) => {
      if (a === void 0 || b === void 0)
        return false;
      if (!(a instanceof Array || a instanceof Float32Array) || !(b instanceof Array || b instanceof Float32Array))
        return false;
      return gl_matrix_1.mat4.exactEquals(a, b);
    };
    Matrix4x4.mul = (out, a, b) => {
      if (!b) {
        b = a;
        a = out;
        out = gl_matrix_1.mat4.create();
      }
      return gl_matrix_1.mat4.mul(out, a, b);
    };
    exports.mat4 = Matrix4x4;
  });

  // zogra-renderer/dist/types/quat.js
  var require_quat3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.quat = exports.Quaternion = void 0;
    var gl_matrix_1 = require_cjs();
    var vec3_1 = require_vec32();
    var math_1 = require_math();
    function Quaternion() {
      const quat2 = gl_matrix_1.quat.create();
      return quat2;
    }
    exports.Quaternion = Quaternion;
    Quaternion.identity = () => {
      const quat2 = gl_matrix_1.quat.create();
      gl_matrix_1.quat.identity(quat2);
      return quat2;
    };
    Quaternion.axis = (axis, rad) => {
      return gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), axis, rad);
    };
    Quaternion.mul = (a, b) => {
      const out = gl_matrix_1.quat.create();
      return gl_matrix_1.quat.mul(out, a, b);
    };
    Quaternion.invert = (q) => {
      const out = gl_matrix_1.quat.create();
      return gl_matrix_1.quat.invert(out, q);
    };
    Quaternion.normalize = (q) => {
      return gl_matrix_1.quat.normalize(gl_matrix_1.quat.create(), q);
    };
    Quaternion.euler = (q) => {
      return vec3_1.vec3(Math.atan2(2 * (q[3] * q[0] + q[1] * q[2]), 1 - 2 * (q[0] ** 2 + q[1] ** 2)) * math_1.Rad2Deg, Math.asin(2 * (q[3] * q[1] - q[2] * q[0])) * math_1.Rad2Deg, Math.atan2(2 * (q[3] * q[2] + q[0] * q[1]), 1 - 2 * (q[1] ** 2, q[2] ** 2)) * math_1.Rad2Deg);
    };
    Quaternion.fromEuler = (e) => {
      return gl_matrix_1.quat.fromEuler(gl_matrix_1.quat.create(), e[0], e[1], e[2]);
    };
    Quaternion.rotate = (q, v) => {
      return gl_matrix_1.vec3.transformQuat(vec3_1.vec3(0, 0, 0), v, q);
    };
    Quaternion.equals = (a, b) => {
      return gl_matrix_1.quat.exactEquals(a, b);
    };
    exports.quat = Quaternion;
    exports.quat.identity = Quaternion.identity;
  });

  // zogra-renderer/dist/types/ray.js
  var require_ray = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.ray = void 0;
    function ray(origin, direction) {
      return {origin, direction: direction.normalized};
    }
    exports.ray = ray;
  });

  // zogra-renderer/dist/types/rect.js
  var require_rect = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Rect = void 0;
    var math_1 = require_math();
    var vec2_1 = require_vec22();
    var Rect2 = class {
      constructor(min, size) {
        this.min = min;
        this.max = math_1.plus(min, size);
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
      get size() {
        return math_1.minus(this.max, this.min);
      }
      get center() {
        return math_1.plus(this.min, this.max).mul(vec2_1.vec2(0.5));
      }
      shrink(thickness) {
        let min = math_1.plus(this.min, vec2_1.vec2(thickness));
        let max = math_1.minus(this.max, vec2_1.vec2(thickness));
        if (min.x > max.x)
          min.x = max.x = (min.x + max.x) / 2;
        if (min.y > max.y)
          min.y = max.y = (min.y + max.y) / 2;
        return new Rect2(min, max.minus(min));
      }
      expand(thickness) {
        return new Rect2(math_1.minus(this.min, vec2_1.vec2(thickness)), math_1.plus(this.size, vec2_1.vec2(2 * thickness)));
      }
      static box01() {
        return new Rect2(vec2_1.vec2.zero(), vec2_1.vec2.one());
      }
    };
    exports.Rect = Rect2;
  });

  // zogra-renderer/dist/types/types.js
  var require_types = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    var gl_matrix_1 = require_cjs();
    gl_matrix_1.glMatrix.setMatrixArrayType(Array);
    __exportStar2(require_vec22(), exports);
    __exportStar2(require_vec32(), exports);
    __exportStar2(require_vec42(), exports);
    __exportStar2(require_color(), exports);
    __exportStar2(require_math(), exports);
    __exportStar2(require_mat42(), exports);
    __exportStar2(require_quat3(), exports);
    __exportStar2(require_ray(), exports);
    __exportStar2(require_rect(), exports);
  });

  // zogra-renderer/node_modules/reflect-metadata/Reflect.js
  var require_Reflect = __commonJS(() => {
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
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
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
          for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
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
          var set = new _Set();
          var keys = [];
          for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
              keys.push(key);
            }
          }
          for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
              set.add(key);
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
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
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
                for (var i = index + 1; i < size; i++) {
                  this._keys[i - 1] = this._keys[i];
                  this._values[i - 1] = this._values[i];
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
          function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
              if (!create)
                return void 0;
              Object.defineProperty(target, rootKey, {value: HashMap.create()});
            }
            return target[rootKey];
          }
          function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
              buffer[i] = Math.random() * 255 | 0;
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
  });

  // zogra-renderer/dist/core/global.js
  var require_global = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.GL = exports.GlobalContext = exports.setGlobalContext = void 0;
    var ctx;
    var setGlobalContext = (_ctx) => ctx = _ctx;
    exports.setGlobalContext = setGlobalContext;
    var GlobalContext = () => ctx;
    exports.GlobalContext = GlobalContext;
    var GL = () => {
      var _a;
      return (_a = exports.GlobalContext()) === null || _a === void 0 ? void 0 : _a.gl;
    };
    exports.GL = GL;
  });

  // zogra-renderer/dist/core/texture-format.js
  var require_texture_format = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.mapGLFormat = exports.TextureFormat = void 0;
    var TextureFormat3;
    (function(TextureFormat4) {
      TextureFormat4[TextureFormat4["RGB"] = 1] = "RGB";
      TextureFormat4[TextureFormat4["RGBA"] = 2] = "RGBA";
      TextureFormat4[TextureFormat4["LUMINANCE_ALPHA"] = 3] = "LUMINANCE_ALPHA";
      TextureFormat4[TextureFormat4["LUMINANCE"] = 4] = "LUMINANCE";
      TextureFormat4[TextureFormat4["ALPHA"] = 5] = "ALPHA";
      TextureFormat4[TextureFormat4["R8"] = 6] = "R8";
      TextureFormat4[TextureFormat4["R16F"] = 7] = "R16F";
      TextureFormat4[TextureFormat4["R32F"] = 8] = "R32F";
      TextureFormat4[TextureFormat4["R8UI"] = 9] = "R8UI";
      TextureFormat4[TextureFormat4["RG8"] = 10] = "RG8";
      TextureFormat4[TextureFormat4["RG16F"] = 11] = "RG16F";
      TextureFormat4[TextureFormat4["RG32F"] = 12] = "RG32F";
      TextureFormat4[TextureFormat4["RG8UI"] = 13] = "RG8UI";
      TextureFormat4[TextureFormat4["RGB8"] = 14] = "RGB8";
      TextureFormat4[TextureFormat4["SRGB8"] = 15] = "SRGB8";
      TextureFormat4[TextureFormat4["RGB565"] = 16] = "RGB565";
      TextureFormat4[TextureFormat4["R11F_G11F_B10F"] = 17] = "R11F_G11F_B10F";
      TextureFormat4[TextureFormat4["RGB9_E5"] = 18] = "RGB9_E5";
      TextureFormat4[TextureFormat4["RGB16F"] = 19] = "RGB16F";
      TextureFormat4[TextureFormat4["RGB32F"] = 20] = "RGB32F";
      TextureFormat4[TextureFormat4["RGB8UI"] = 21] = "RGB8UI";
      TextureFormat4[TextureFormat4["RGBA8"] = 22] = "RGBA8";
      TextureFormat4[TextureFormat4["SRGB8_ALPHA8"] = 23] = "SRGB8_ALPHA8";
      TextureFormat4[TextureFormat4["RGB5_A1"] = 24] = "RGB5_A1";
      TextureFormat4[TextureFormat4["RGB10_A2"] = 25] = "RGB10_A2";
      TextureFormat4[TextureFormat4["RGBA4"] = 26] = "RGBA4";
      TextureFormat4[TextureFormat4["RGBA16F"] = 27] = "RGBA16F";
      TextureFormat4[TextureFormat4["RGBA32F"] = 28] = "RGBA32F";
      TextureFormat4[TextureFormat4["RGBA8UI"] = 29] = "RGBA8UI";
      TextureFormat4[TextureFormat4["DEPTH_COMPONENT"] = 30] = "DEPTH_COMPONENT";
      TextureFormat4[TextureFormat4["DEPTH_STENCIL"] = 31] = "DEPTH_STENCIL";
    })(TextureFormat3 = exports.TextureFormat || (exports.TextureFormat = {}));
    function mapGLFormat(gl, format) {
      const map = {
        [TextureFormat3.RGB]: [gl.RGB, gl.RGB, gl.UNSIGNED_BYTE],
        [TextureFormat3.RGBA]: [gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE],
        [TextureFormat3.LUMINANCE_ALPHA]: [gl.LUMINANCE_ALPHA, gl.LUMINANCE_ALPHA, gl.UNSIGNED_BYTE],
        [TextureFormat3.LUMINANCE]: [gl.LUMINANCE, gl.LUMINANCE, gl.UNSIGNED_BYTE],
        [TextureFormat3.ALPHA]: [gl.ALPHA, gl.ALPHA, gl.UNSIGNED_BYTE],
        [TextureFormat3.R8]: [gl.R8, gl.RED, gl.UNSIGNED_BYTE],
        [TextureFormat3.R16F]: [gl.R16F, gl.RED, gl.HALF_FLOAT],
        [TextureFormat3.R32F]: [gl.R32F, gl.RED, gl.FLOAT],
        [TextureFormat3.R8UI]: [gl.R8UI, gl.RED_INTEGER, gl.UNSIGNED_BYTE],
        [TextureFormat3.RG8]: [gl.RG8, gl.RG, gl.UNSIGNED_BYTE],
        [TextureFormat3.RG16F]: [gl.RG16F, gl.RG, gl.HALF_FLOAT],
        [TextureFormat3.RG32F]: [gl.RG32F, gl.RG, gl.FLOAT],
        [TextureFormat3.RG8UI]: [gl.RG8UI, gl.RG_INTEGER, gl.UNSIGNED_BYTE],
        [TextureFormat3.RGB8]: [gl.RGB8, gl.RGB, gl.UNSIGNED_BYTE],
        [TextureFormat3.SRGB8]: [gl.SRGB8, gl.RGB, gl.UNSIGNED_BYTE],
        [TextureFormat3.RGB565]: [gl.RGB565, gl.RGB, gl.UNSIGNED_BYTE],
        [TextureFormat3.R11F_G11F_B10F]: [gl.R11F_G11F_B10F, gl.RGB, gl.UNSIGNED_INT_10F_11F_11F_REV],
        [TextureFormat3.RGB9_E5]: [gl.RGB9_E5, gl.RGB, gl.HALF_FLOAT],
        [TextureFormat3.RGB16F]: [gl.RGB16F, gl.RGB, gl.HALF_FLOAT],
        [TextureFormat3.RGB32F]: [gl.RGB32F, gl.RGB, gl.FLOAT],
        [TextureFormat3.RGB8UI]: [gl.RGB8UI, gl.RGB_INTEGER, gl.UNSIGNED_BYTE],
        [TextureFormat3.RGBA8]: [gl.RGBA8, gl.RGBA, gl.UNSIGNED_BYTE],
        [TextureFormat3.SRGB8_ALPHA8]: [gl.SRGB8_ALPHA8, gl.RGBA, gl.UNSIGNED_BYTE],
        [TextureFormat3.RGB5_A1]: [gl.RGB5_A1, gl.RGBA, gl.UNSIGNED_BYTE],
        [TextureFormat3.RGB10_A2]: [gl.RGB10_A2, gl.RGBA, gl.UNSIGNED_INT_2_10_10_10_REV],
        [TextureFormat3.RGBA4]: [gl.RGBA4, gl.RGBA, gl.UNSIGNED_BYTE],
        [TextureFormat3.RGBA16F]: [gl.RGBA16F, gl.RGBA, gl.HALF_FLOAT],
        [TextureFormat3.RGBA32F]: [gl.RGBA32F, gl.RGBA, gl.FLOAT],
        [TextureFormat3.RGBA8UI]: [gl.RGBA8UI, gl.RGBA_INTEGER, gl.UNSIGNED_BYTE],
        [TextureFormat3.DEPTH_COMPONENT]: [gl.DEPTH_COMPONENT, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT],
        [TextureFormat3.DEPTH_STENCIL]: [gl.DEPTH_STENCIL, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT]
      };
      return map[format];
    }
    exports.mapGLFormat = mapGLFormat;
  });

  // zogra-renderer/dist/utils/util.js
  var require_util = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.setImmediate = exports.DoubleBuffer = exports.fillArray = exports.getUniformsLocation = exports.decorator = exports.warn = exports.panic = exports.panicNull = void 0;
    require_Reflect();
    function panicNull(t, msg) {
      if (t === null)
        throw new Error(msg);
      return t;
    }
    exports.panicNull = panicNull;
    function panic(msg) {
      throw new Error(msg);
    }
    exports.panic = panic;
    function warn(msg) {
      console.warn(msg);
      return null;
    }
    exports.warn = warn;
    function decorator(name, defaultValue = void 0, dataWrapper = (v) => v) {
      const metadataKey = Symbol(name);
      return [
        (value) => {
          if (value === void 0)
            value = defaultValue;
          return Reflect.metadata(metadataKey, dataWrapper(value));
        },
        (target, propKey) => {
          if (propKey === void 0)
            return Reflect.getMetadata(metadataKey, target);
          else
            return Reflect.getMetadata(metadataKey, target, propKey);
        }
      ];
    }
    exports.decorator = decorator;
    function getUniformsLocation(gl, program, uniforms) {
      const out = {};
      for (const key in uniforms) {
        out[key] = gl.getUniformLocation(program, uniforms[key]);
      }
      return out;
    }
    exports.getUniformsLocation = getUniformsLocation;
    function fillArray(element, count) {
      const arr = new Array(count);
      for (let i = 0; i < count; i++)
        arr[i] = typeof element === "function" ? element(i) : element;
      return arr;
    }
    exports.fillArray = fillArray;
    var DoubleBuffer = class {
      constructor(init) {
        this.currentIdx = 0;
        this.buffers = [init(), init()];
      }
      get current() {
        return this.buffers[this.currentIdx % 2];
      }
      set current(value) {
        this.buffers[this.currentIdx % 2] = value;
      }
      get back() {
        return this.buffers[(this.currentIdx + 1) % 2];
      }
      set back(value) {
        this.buffers[(this.currentIdx + 1) % 2] = value;
      }
      update() {
        this.currentIdx++;
      }
    };
    exports.DoubleBuffer = DoubleBuffer;
    function setImmediate(invoker) {
      setTimeout(invoker, 0);
    }
    exports.setImmediate = setImmediate;
  });

  // zogra-renderer/dist/core/event.js
  var require_event = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.EventEmitter = void 0;
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
    };
    exports.EventEmitter = EventEmitter;
  });

  // zogra-renderer/dist/core/asset.js
  var require_asset = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.AssetManager = exports.LazyInitAsset = exports.Asset = void 0;
    var util_1 = require_util();
    var event_1 = require_event();
    var global_1 = require_global();
    var Asset = class {
      constructor(name) {
        this.destroyed = false;
        this.assetID = exports.AssetManager.newAssetID(this);
        this.name = name || `Asset_${this.assetID}`;
      }
      destroy() {
        this.destroyed = true;
        exports.AssetManager.destroy(this.assetID);
      }
    };
    exports.Asset = Asset;
    var LazyInitAsset = class extends Asset {
      constructor(ctx = global_1.GlobalContext()) {
        super();
        this.initialzed = false;
        this.ctx = ctx;
      }
      tryInit(required = false) {
        if (this.initialzed)
          return true;
        const ctx = this.ctx || global_1.GlobalContext();
        if (!ctx) {
          if (required)
            throw new Error("Failed to initialize GPU resource withou a global GL context.");
          return false;
        }
        this.ctx = ctx;
        if (this.init()) {
          this.initialzed = true;
          return true;
        } else {
          if (required)
            throw new Error("Failed to initialize required GPU resource.");
          return false;
        }
      }
    };
    exports.LazyInitAsset = LazyInitAsset;
    var AssetManagerType = class {
      constructor() {
        this.assetsMap = new Map();
        this.id = 1;
        this.eventEmitter = new event_1.EventEmitter();
      }
      newAssetID(asset) {
        const currentId = ++this.id;
        this.assetsMap.set(currentId, asset);
        util_1.setImmediate(() => this.eventEmitter.emit("asset-created", asset));
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
        util_1.setImmediate(() => this.eventEmitter.emit("asset-destroyed", asset));
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
    exports.AssetManager = new AssetManagerType();
  });

  // zogra-renderer/dist/core/shader.js
  var require_shader = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Shader = exports.DefaultShaderAttributeNames = exports.Culling = exports.Blending = exports.DepthTest = void 0;
    var util_1 = require_util();
    var global_1 = require_global();
    var shaders_1 = require_shaders();
    var util_2 = require_util();
    var asset_1 = require_asset();
    var DepthTest2;
    (function(DepthTest3) {
      DepthTest3[DepthTest3["Disable"] = -1] = "Disable";
      DepthTest3[DepthTest3["Always"] = WebGL2RenderingContext.ALWAYS] = "Always";
      DepthTest3[DepthTest3["Never"] = WebGL2RenderingContext.NEVER] = "Never";
      DepthTest3[DepthTest3["Less"] = WebGL2RenderingContext.LESS] = "Less";
      DepthTest3[DepthTest3["Equal"] = WebGL2RenderingContext.EQUAL] = "Equal";
      DepthTest3[DepthTest3["LEqual"] = WebGL2RenderingContext.LEQUAL] = "LEqual";
      DepthTest3[DepthTest3["Greater"] = WebGL2RenderingContext.GREATER] = "Greater";
      DepthTest3[DepthTest3["NotEqual"] = WebGL2RenderingContext.NOTEQUAL] = "NotEqual";
      DepthTest3[DepthTest3["GEqual"] = WebGL2RenderingContext.GEQUAL] = "GEqual";
    })(DepthTest2 = exports.DepthTest || (exports.DepthTest = {}));
    var Blending2;
    (function(Blending3) {
      Blending3[Blending3["Disable"] = -1] = "Disable";
      Blending3[Blending3["Zero"] = WebGL2RenderingContext.ZERO] = "Zero";
      Blending3[Blending3["One"] = WebGL2RenderingContext.ONE] = "One";
      Blending3[Blending3["SrcColor"] = WebGL2RenderingContext.SRC_COLOR] = "SrcColor";
      Blending3[Blending3["OneMinusSrcColor"] = WebGL2RenderingContext.ONE_MINUS_SRC_COLOR] = "OneMinusSrcColor";
      Blending3[Blending3["DstColor"] = WebGL2RenderingContext.DST_COLOR] = "DstColor";
      Blending3[Blending3["OneMinusDstColor"] = WebGL2RenderingContext.ONE_MINUS_DST_COLOR] = "OneMinusDstColor";
      Blending3[Blending3["SrcAlpha"] = WebGL2RenderingContext.SRC_ALPHA] = "SrcAlpha";
      Blending3[Blending3["OneMinusSrcAlpha"] = WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA] = "OneMinusSrcAlpha";
      Blending3[Blending3["DstAlpha"] = WebGL2RenderingContext.DST_ALPHA] = "DstAlpha";
      Blending3[Blending3["OneMinusDstAlpha"] = WebGL2RenderingContext.ONE_MINUS_DST_ALPHA] = "OneMinusDstAlpha";
    })(Blending2 = exports.Blending || (exports.Blending = {}));
    var Culling;
    (function(Culling2) {
      Culling2[Culling2["Disable"] = -1] = "Disable";
      Culling2[Culling2["Back"] = WebGL2RenderingContext.BACK] = "Back";
      Culling2[Culling2["Front"] = WebGL2RenderingContext.FRONT] = "Front";
      Culling2[Culling2["Both"] = WebGL2RenderingContext.FRONT_AND_BACK] = "Both";
    })(Culling = exports.Culling || (exports.Culling = {}));
    exports.DefaultShaderAttributeNames = {
      vert: "aPos",
      color: "aColor",
      uv: "aUV",
      uv2: "aUV2",
      normal: "aNormal"
    };
    var Shader3 = class extends asset_1.Asset {
      constructor(vertexShader, fragmentShader, options = {}, gl = global_1.GL()) {
        super(options.name);
        this.attributes = null;
        this.initialized = false;
        this.gl = null;
        this.program = null;
        this.vertexShader = null;
        this.fragmentShader = null;
        this.pipelineStates = null;
        this.builtinUniformLocations = null;
        this._compiled = false;
        if (!options.name)
          this.name = `Shader_${this.assetID}`;
        this.vertexShaderSource = vertexShader;
        this.fragmentShaderSouce = fragmentShader;
        this.options = options;
        this.gl = gl;
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
      setupPipelineStates() {
        const gl = this.gl;
        if (this.pipelineStates.depth === DepthTest2.Disable)
          gl.disable(gl.DEPTH_TEST);
        else {
          gl.enable(gl.DEPTH_TEST);
          gl.depthMask(this.pipelineStates.zWrite);
          gl.depthFunc(this.pipelineStates.depth);
        }
        if (!this.pipelineStates.blend)
          gl.disable(gl.BLEND);
        else {
          const [srcRGB, dstRGB] = this.pipelineStates.blendRGB;
          const [srcAlpha, dstAlpha] = this.pipelineStates.blendAlpha;
          gl.enable(gl.BLEND);
          gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
        }
        if (this.pipelineStates.cull === Culling.Disable)
          gl.disable(gl.CULL_FACE);
        else {
          gl.enable(gl.CULL_FACE);
          gl.cullFace(this.pipelineStates.cull);
          gl.frontFace(gl.CCW);
        }
      }
      setupBuiltinUniform(params) {
        this.tryInit(true);
        const gl = this.gl;
        this.builtinUniformLocations.matM && gl.uniformMatrix4fv(this.builtinUniformLocations.matM, false, params.matM);
        this.builtinUniformLocations.matVP && gl.uniformMatrix4fv(this.builtinUniformLocations.matVP, false, params.matVP);
        this.builtinUniformLocations.matMVP && gl.uniformMatrix4fv(this.builtinUniformLocations.matMVP, false, params.matMVP);
        this.builtinUniformLocations.matM_IT && gl.uniformMatrix4fv(this.builtinUniformLocations.matM_IT, false, params.matM_IT);
        this.builtinUniformLocations.matMV_IT && gl.uniformMatrix4fv(this.builtinUniformLocations.matMV_IT, false, params.matMV_IT);
      }
      setPipelineStates(settings) {
        if (this.initialized)
          this.setPipelineStateInternal(settings);
        else
          this.options = Object.assign(Object.assign({}, this.options), settings);
      }
      setPipelineStateInternal(settings) {
        let blend = false;
        let blendRGB = [Blending2.One, Blending2.Zero];
        let blendAlpha = [Blending2.One, Blending2.OneMinusSrcAlpha];
        if (typeof settings.blend === "number" && settings.blend !== Blending2.Disable) {
          blend = true;
          blendRGB = [settings.blend, settings.blend];
          blendAlpha = [settings.blend, settings.blend];
        } else if (settings.blend instanceof Array) {
          blend = true;
          blendRGB = settings.blend;
        }
        if (settings.blendRGB) {
          blend = settings.blend !== false && settings.blend !== Blending2.Disable;
          blendRGB = settings.blendRGB;
        }
        if (settings.blendAlpha) {
          blend = settings.blend !== false && settings.blend !== Blending2.Disable;
          blendAlpha = settings.blendAlpha;
        }
        this.pipelineStates = {
          depth: settings.depth || DepthTest2.Less,
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
          attributes: this.attributes
        };
      }
      tryInit(required = false) {
        if (this.initialized)
          return true;
        const gl = this.gl || global_1.GL();
        if (!gl) {
          return required ? util_1.panic("Failed to init shader without a global GL context") : false;
        }
        this.gl = gl;
        this.program = util_1.panicNull(gl.createProgram(), "Failed to create shader program");
        this.vertexShader = util_1.panicNull(gl.createShader(gl.VERTEX_SHADER), "Failed to create vertex shader");
        this.fragmentShader = util_1.panicNull(gl.createShader(gl.FRAGMENT_SHADER), "Failed to create fragment shader");
        this.compile();
        gl.useProgram(this.program);
        const attributeNames = Object.assign(Object.assign({}, exports.DefaultShaderAttributeNames), this.options.attributes);
        this.attributes = {};
        for (const key in attributeNames) {
          this.attributes[key] = gl.getAttribLocation(this.program, attributeNames[key]);
        }
        this.setPipelineStateInternal(this.options);
        this.builtinUniformLocations = util_2.getUniformsLocation(gl, this.program, shaders_1.BuiltinUniformNames);
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
        this.gl.linkProgram(this.program);
        if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
          throw new Error("Failed to link shader program:\r\n" + this.gl.getProgramInfoLog(this.program));
        }
      }
    };
    exports.Shader = Shader3;
  });

  // zogra-renderer/dist/builtin-assets/shaders.js
  var require_shaders = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.compileBuiltinShaders = exports.BuiltinUniformNames = exports.BuiltinShaderSources = void 0;
    var shader_1 = require_shader();
    var defaultVert = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec4 aColor;
in vec2 aUV;
in vec3 aNormal;

uniform mat4 uTransformM;
uniform mat4 uTransformVP;
uniform mat4 uTransformMVP;

out vec4 vColor;
out vec4 vPos;
out vec2 vUV;
out vec3 vNormal;

void main()
{
    gl_Position = uTransformMVP * vec4(aPos, 1);
    vColor = aColor;
    vUV = aUV;
    vNormal = aNormal;
}
`;
    var defaultFrag = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;
uniform vec4 uColor;

out vec4 fragColor;

void main()
{
    vec4 color = texture(uMainTex, vUV.xy).rgba;
    color = color * vColor * uColor;
    fragColor = color;
}
`;
    var blitCopy = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;
in vec3 vNormal;

uniform sampler2D uMainTex;

out vec4 fragColor;

void main()
{
    fragColor = texture(uMainTex, vUV).rgba;
}
`;
    var flipVert = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec2 aUV;

out vec2 vUV;

void main()
{
    gl_Position = vec4(aPos, 1);
    vUV = vec2(aUV.x, vec2(1) - aUV.y);
}`;
    var colorVert = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec4 aColor;

uniform mat4 uTransformM;
uniform mat4 uTransformVP;
uniform mat4 uTransformMVP;

out vec4 vColor;
out vec4 vPos;

void main()
{
    gl_Position = uTransformMVP * vec4(aPos, 1);
    vColor = aColor;
}
`;
    var colorFrag = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;

out vec4 fragColor;

void main()
{
    fragColor = vColor;
}
`;
    var textureFrag = `#version 300 es
precision mediump float;

in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;

out vec4 fragColor;

void main()
{
    fragColor = texture(uMainTex, vUV).rgba;
}
`;
    exports.BuiltinShaderSources = {
      DefaultVert: defaultVert,
      DefaultFrag: defaultFrag,
      BlitCopyFrag: blitCopy,
      FlipTexVert: flipVert
    };
    exports.BuiltinUniformNames = {
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
        DefaultShader: new shader_1.Shader(exports.BuiltinShaderSources.DefaultVert, exports.BuiltinShaderSources.DefaultFrag, {name: "DefaultShader"}, gl),
        BlitCopy: new shader_1.Shader(exports.BuiltinShaderSources.DefaultVert, exports.BuiltinShaderSources.BlitCopyFrag, {
          name: "BlitCopy",
          depth: shader_1.DepthTest.Always,
          blend: shader_1.Blending.Disable,
          zWrite: false
        }, gl),
        FlipTexture: new shader_1.Shader(exports.BuiltinShaderSources.FlipTexVert, exports.BuiltinShaderSources.BlitCopyFrag, {}, gl),
        ColoredLine: new shader_1.Shader(colorVert, colorFrag, {
          blend: [shader_1.Blending.SrcAlpha, shader_1.Blending.OneMinusSrcAlpha],
          depth: shader_1.DepthTest.Disable,
          zWrite: false
        }, gl),
        ErrorShader: new shader_1.Shader(defaultVert, textureFrag, {
          name: "Error"
        }, gl)
      };
    }
    exports.compileBuiltinShaders = compileBuiltinShaders;
  });

  // zogra-renderer/dist/utils/image-sizing.js
  var require_image_sizing = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.imageResize = exports.ImageSizing = void 0;
    var rect_1 = require_rect();
    var vec2_1 = require_vec22();
    var ImageSizing;
    (function(ImageSizing2) {
      ImageSizing2[ImageSizing2["Stretch"] = 1] = "Stretch";
      ImageSizing2[ImageSizing2["Cover"] = 2] = "Cover";
      ImageSizing2[ImageSizing2["Contain"] = 3] = "Contain";
      ImageSizing2[ImageSizing2["KeepLower"] = 4] = "KeepLower";
      ImageSizing2[ImageSizing2["KeepHigher"] = 5] = "KeepHigher";
      ImageSizing2[ImageSizing2["Center"] = 6] = "Center";
    })(ImageSizing = exports.ImageSizing || (exports.ImageSizing = {}));
    function imageResize(srcSize, dstSize, sizing) {
      let srcRect = new rect_1.Rect(vec2_1.vec2.zero(), srcSize);
      let dstRect = new rect_1.Rect(vec2_1.vec2.zero(), dstSize);
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
    exports.imageResize = imageResize;
  });

  // zogra-renderer/dist/core/texture.js
  var require_texture = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.RenderTexture = exports.DepthTexture = exports.Texture2D = exports.TextureResizing = exports.Texture = exports.WrapMode = exports.FilterMode = void 0;
    var global_1 = require_global();
    var texture_format_1 = require_texture_format();
    var util_1 = require_util();
    var asset_1 = require_asset();
    var shaders_1 = require_shaders();
    var vec2_1 = require_vec22();
    var image_sizing_1 = require_image_sizing();
    var FilterMode2;
    (function(FilterMode3) {
      FilterMode3[FilterMode3["Linear"] = WebGL2RenderingContext.LINEAR] = "Linear";
      FilterMode3[FilterMode3["Nearest"] = WebGL2RenderingContext.NEAREST] = "Nearest";
    })(FilterMode2 = exports.FilterMode || (exports.FilterMode = {}));
    var WrapMode3;
    (function(WrapMode4) {
      WrapMode4[WrapMode4["Repeat"] = WebGL2RenderingContext.REPEAT] = "Repeat";
      WrapMode4[WrapMode4["Clamp"] = WebGL2RenderingContext.CLAMP_TO_EDGE] = "Clamp";
      WrapMode4[WrapMode4["Mirror"] = WebGL2RenderingContext.MIRRORED_REPEAT] = "Mirror";
    })(WrapMode3 = exports.WrapMode || (exports.WrapMode = {}));
    var Texture3 = class extends asset_1.Asset {
    };
    exports.Texture = Texture3;
    var TextureResizing2;
    (function(TextureResizing3) {
      TextureResizing3[TextureResizing3["Discard"] = 0] = "Discard";
      TextureResizing3[TextureResizing3["Stretch"] = 1] = "Stretch";
      TextureResizing3[TextureResizing3["Cover"] = 2] = "Cover";
      TextureResizing3[TextureResizing3["Contain"] = 3] = "Contain";
      TextureResizing3[TextureResizing3["KeepLower"] = 4] = "KeepLower";
      TextureResizing3[TextureResizing3["KeepHigher"] = 5] = "KeepHigher";
      TextureResizing3[TextureResizing3["Center"] = 6] = "Center";
    })(TextureResizing2 = exports.TextureResizing || (exports.TextureResizing = {}));
    var TextureBase = class extends asset_1.Asset {
      constructor(width, height, format = texture_format_1.TextureFormat.RGBA, filterMode = FilterMode2.Linear, ctx = global_1.GlobalContext()) {
        super();
        this.autoMipmap = true;
        this.wrapMode = WrapMode3.Repeat;
        this._glTex = null;
        this.initialized = false;
        this.created = false;
        this.name = `Texture_${this.assetID}`;
        this.ctx = ctx;
        this.format = format;
        this.width = width;
        this.height = height;
        this.filterMode = filterMode;
        this.tryInit(false);
      }
      get size() {
        return vec2_1.vec2(this.width, this.height);
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
      resize(width, height, textureContent = TextureResizing2.Discard) {
        this.tryInit(true);
        const gl = this.ctx.gl;
        let oldTex = TextureBase.wrapGlTex(this._glTex, this.width, this.height, this.format, this.filterMode, this.ctx);
        let newTex = new RenderTexture3(width, height, false, this.format, this.filterMode, this.ctx);
        newTex.wrapMode = this.wrapMode;
        newTex.autoMipmap = this.autoMipmap;
        newTex.create();
        newTex.updateParameters();
        const prevSize = this.size;
        this.width = width;
        this.height = height;
        switch (textureContent) {
          case TextureResizing2.Discard:
            break;
          default:
            const [srcRect, dstrEect] = image_sizing_1.imageResize(prevSize, newTex.size, textureContent);
            this.ctx.renderer.blit(oldTex, newTex, this.ctx.assets.materials.blitCopy, srcRect, dstrEect);
            break;
        }
        if (this.autoMipmap)
          newTex.generateMipmap();
        this._glTex = newTex._glTex;
        gl.deleteTexture(oldTex._glTex);
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
        const [internalFormat, format, type] = texture_format_1.mapGLFormat(gl, this.format);
        gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, this.width, this.height, 0, format, type, null);
        this.created = true;
        this.updateParameters();
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
        const ctx = this.ctx || global_1.GlobalContext();
        if (!ctx) {
          if (required)
            throw new Error("Failed to initialize texture without a global GL context");
          return false;
        }
        const gl = ctx.gl;
        this._glTex = (_a = gl.createTexture()) !== null && _a !== void 0 ? _a : util_1.panic("Failed to create texture.");
        this.initialized = true;
        return true;
      }
      static wrapGlTex(glTex, width, height, format = texture_format_1.TextureFormat.RGBA, filterMode = FilterMode2.Linear, ctx = global_1.GlobalContext()) {
        var texture = new TextureBase(width, height, format, filterMode, ctx);
        texture._glTex = glTex;
        texture.initialized = true;
        texture.created = true;
        return texture;
      }
    };
    var Texture2D3 = class extends TextureBase {
      constructor(width = 0, height = 0, format = texture_format_1.TextureFormat.RGBA, filterMode = FilterMode2.Linear, ctx = global_1.GlobalContext()) {
        super(width, height, format, filterMode, ctx);
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
        let rt = new RenderTexture3(this.width, this.height, false, this.format, this.filterMode, this.ctx);
        this.ctx.renderer.blit(this, rt);
        let tex = new Texture2D3(this.width, this.height, this.format, this.filterMode, this.ctx);
        tex._glTex = rt.glTex();
        tex.initialized = true;
        tex.created = true;
        return tex;
      }
    };
    exports.Texture2D = Texture2D3;
    var DepthTexture = class extends TextureBase {
      constructor(width, height, ctx = global_1.GlobalContext()) {
        super(width, height, texture_format_1.TextureFormat.DEPTH_COMPONENT, FilterMode2.Nearest, ctx);
      }
      create() {
        super.create();
      }
    };
    exports.DepthTexture = DepthTexture;
    var RenderTexture3 = class extends TextureBase {
      constructor(width, height, depth = false, format = texture_format_1.TextureFormat.RGBA, filterMode = FilterMode2.Linear, ctx = global_1.GlobalContext()) {
        super(width, height, format, filterMode, ctx);
        this.depthTexture = null;
        if (depth) {
          this.depthTexture = new DepthTexture(width, height, ctx);
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
    };
    exports.RenderTexture = RenderTexture3;
    function flipTexture(ctx, dst, src, width, height, texFormat, filterMode, wrapMode, mipmapLevel) {
      var _a, _b;
      const gl = ctx.gl;
      const renderer = ctx.renderer;
      const srcTex = (_a = gl.createTexture()) !== null && _a !== void 0 ? _a : util_1.panic("Failed to create texture.");
      const [internalFormat, format, type] = texture_format_1.mapGLFormat(gl, texFormat);
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
      const fbo = (_b = gl.createFramebuffer()) !== null && _b !== void 0 ? _b : util_1.panic("Failed to create frame buffer");
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, dst, 0);
      gl.viewport(0, 0, width, height);
      gl.drawBuffers([gl.COLOR_ATTACHMENT0]);
      const shader = ctx.assets.shaders.FlipTexture;
      shader.use();
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, srcTex);
      gl.uniform1i(shader.uniformLocation(shaders_1.BuiltinUniformNames.mainTex), 0);
      const mesh = ctx.assets.meshes.screenQuad;
      mesh.bind(shader);
      gl.drawElements(gl.TRIANGLE_STRIP, mesh.triangles.length, gl.UNSIGNED_INT, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, null);
      gl.deleteFramebuffer(fbo);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.deleteTexture(srcTex);
    }
  });

  // zogra-renderer/dist/core/material.js
  var require_material = __commonJS((exports) => {
    "use strict";
    var __decorate2 = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.materialDefine = exports.SimpleTexturedMaterial = exports.MaterialFromShader = exports.shaderProp = exports.Material = void 0;
    var color_1 = require_color();
    require_Reflect();
    var global_1 = require_global();
    require_Reflect();
    var texture_1 = require_texture();
    var asset_1 = require_asset();
    var shaders_1 = require_shaders();
    var ValueReference;
    (function(ValueReference2) {
      ValueReference2[ValueReference2["Field"] = 0] = "Field";
      ValueReference2[ValueReference2["Dynamic"] = 1] = "Dynamic";
    })(ValueReference || (ValueReference = {}));
    var Material = class extends asset_1.Asset {
      constructor(shader, gl = global_1.GL()) {
        super();
        this.properties = {};
        this.textureCount = 0;
        this.initialized = false;
        this.name = `Material_${this.assetID}`;
        this.gl = gl;
        this._shader = shader;
      }
      get shader() {
        return this._shader;
      }
      upload(data) {
        this.tryInit(true);
        for (const uniformName in this.properties) {
          const prop = this.properties[uniformName];
          const value = prop.key ? this[prop.key] : prop.value;
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
        else
          prop.value = value;
      }
      unbindRenderTextures() {
        this.tryInit(true);
        const gl = this.gl;
        for (const uniformName in this.properties) {
          const prop = this.properties[uniformName];
          if (prop.uploaded instanceof texture_1.RenderTexture) {
            prop.uploaded.unbind(prop.textureUnit);
            prop.uploaded = null;
          }
        }
      }
      tryInit(required = false) {
        if (this.initialized)
          return true;
        const gl = this.gl || global_1.GL();
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
        switch (type) {
          case "tex2d":
            prop = {
              type,
              uploaded: void 0,
              location: this.shader.uniformLocation(uniformName),
              textureUnit: this.textureCount++
            };
            break;
          default:
            prop = {
              type,
              location: this.shader.uniformLocation(uniformName),
              uploaded: void 0
            };
        }
        this.properties[uniformName] = prop;
        return prop;
      }
      uploadUniform(prop, value) {
        const gl = this.gl;
        const ctx = global_1.GlobalContext();
        if (!prop.location)
          return false;
        let dirty = false;
        if (prop.uploaded === null && value === null)
          return false;
        switch (prop.type) {
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
          case "tex2d":
            value = value || ctx.renderer.assets.textures.default;
            value.bind(prop.textureUnit);
            if (!prop.uniformSet) {
              gl.uniform1i(prop.location, prop.textureUnit);
              prop.uniformSet = true;
            }
            break;
        }
        prop.uploaded = value;
      }
    };
    exports.Material = Material;
    var shaderPropMetaKey = Symbol("shaderProp");
    function shaderProp3(name, type) {
      return Reflect.metadata(shaderPropMetaKey, {name, type});
    }
    exports.shaderProp = shaderProp3;
    function getShaderProp(target, propKey) {
      return Reflect.getMetadata(shaderPropMetaKey, target, propKey);
    }
    function MaterialFromShader3(shader) {
      return class Mat extends Material {
        constructor(gl = global_1.GL()) {
          super(shader, gl);
        }
      };
    }
    exports.MaterialFromShader = MaterialFromShader3;
    function SimpleTexturedMaterial2(shader) {
      class Mat extends MaterialFromShader3(shader) {
        constructor() {
          super(...arguments);
          this.texture = null;
          this.color = new color_1.Color(1, 1, 1, 1);
        }
      }
      __decorate2([
        shaderProp3(shaders_1.BuiltinUniformNames.mainTex, "tex2d")
      ], Mat.prototype, "texture", void 0);
      __decorate2([
        shaderProp3(shaders_1.BuiltinUniformNames.color, "color")
      ], Mat.prototype, "color", void 0);
      return Mat;
    }
    exports.SimpleTexturedMaterial = SimpleTexturedMaterial2;
    function materialDefine(constructor) {
      return class extends constructor {
        constructor(...arg) {
          super(...arg);
        }
      };
    }
    exports.materialDefine = materialDefine;
  });

  // zogra-renderer/dist/core/material-type.js
  var require_material_type = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    var material_1 = require_material();
  });

  // zogra-renderer/dist/core/mesh.js
  var require_mesh = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Mesh = void 0;
    var vec3_1 = require_vec32();
    var vec2_1 = require_vec22();
    var color_1 = require_color();
    var global_1 = require_global();
    var util_1 = require_util();
    var math_1 = require_math();
    var asset_1 = require_asset();
    var VertDataFloatCount = 14;
    var Mesh = class extends asset_1.Asset {
      constructor(gl = global_1.GL()) {
        super();
        this._verts = [];
        this._triangles = [];
        this._uvs = [];
        this._uv2 = [];
        this._colors = [];
        this._normals = [];
        this.dirty = true;
        this.uploaded = false;
        this.vertices = new Float32Array(0);
        this.indices = new Uint32Array(0);
        this.VBO = null;
        this.EBO = null;
        this.initialized = false;
        this.name = `Mesh_${this.assetID}`;
        this.gl = gl;
        this.tryInit(false);
      }
      get verts() {
        return this._verts;
      }
      set verts(verts) {
        this._verts = verts;
        this.dirty = true;
      }
      get triangles() {
        return this._triangles;
      }
      set triangles(triangles) {
        this._triangles = triangles;
        this.dirty = true;
      }
      get uvs() {
        return this._uvs;
      }
      set uvs(uvs) {
        this._uvs = uvs;
        this.dirty = true;
      }
      get uv2() {
        return this._uv2;
      }
      set uv2(uv) {
        this._uv2 = uv;
        this.dirty = true;
      }
      get colors() {
        return this._colors;
      }
      set colors(colors) {
        this._colors = colors;
        this.dirty = true;
      }
      get normals() {
        return this._normals;
      }
      set normals(normals) {
        this._normals = normals;
        this.dirty = true;
      }
      clear() {
        this.verts = [];
        this.uvs = [];
        this.triangles = [];
        this.colors = [];
        this.normals = [];
      }
      calculateNormals(angleThreshold = 0) {
        if (this.triangles.length % 3 !== 0)
          throw new Error("Invalid triangles.");
        this.normals = util_1.fillArray(() => vec3_1.vec3(0, 0, 0), this.verts.length);
        for (let i = 0; i < this.triangles.length; i += 3) {
          const a = this.verts[this.triangles[i]];
          const b = this.verts[this.triangles[i + 1]];
          const c = this.verts[this.triangles[i + 2]];
          const u = math_1.minus(b, a);
          const v = math_1.minus(c, a);
          const normal = math_1.cross(u, v).normalize();
          this.normals[this.triangles[i + 0]].plus(normal);
          this.normals[this.triangles[i + 1]].plus(normal);
          this.normals[this.triangles[i + 2]].plus(normal);
        }
        for (let i = 0; i < this.normals.length; i++)
          this.normals[i] = this.normals[i].normalize();
      }
      update() {
        if (this.dirty) {
          if (this.triangles.length % 3 !== 0)
            throw new Error("Invalid triangles.");
          if (this.colors.length !== this.verts.length)
            this.colors = [...this.colors, ...util_1.fillArray(color_1.Color.white, this.verts.length - this.colors.length)];
          if (this.uvs.length !== this.verts.length)
            this.uvs = [...this.uvs, ...util_1.fillArray(vec2_1.vec2(0, 0), this.verts.length - this.uvs.length)];
          if (this.uv2.length !== this.verts.length)
            this.uv2 = [...this.uv2, ...util_1.fillArray(vec2_1.vec2(0, 0), this.verts.length - this.uv2.length)];
          if (this.normals.length !== this.verts.length)
            this.normals = [...this.normals, ...util_1.fillArray(vec3_1.vec3(0, 0, 0), this.verts.length - this.normals.length)];
          this.vertices = new Float32Array(this.verts.flatMap((vert, idx) => [
            ...vert,
            ...this.colors[idx],
            ...this.uvs[idx],
            ...this.uv2[idx],
            ...this.normals[idx]
          ]));
          if (this.vertices.length != this.verts.length * VertDataFloatCount)
            throw new Error("Buffer with invalid length.");
          this.indices = new Uint32Array(this.triangles.flat());
          this.dirty = false;
          this.uploaded = false;
        }
      }
      setup() {
        this.update();
        this.tryInit(true);
        const gl = this.gl;
        if (!this.uploaded) {
          gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
          gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.EBO);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);
          this.uploaded = true;
        }
        return [this.VBO, this.EBO];
      }
      bind(shader) {
        this.setup();
        const gl = this.gl;
        const attributes = shader._internal().attributes;
        const stride = VertDataFloatCount * 4;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
        if (attributes.vert >= 0) {
          gl.vertexAttribPointer(attributes.vert, 3, gl.FLOAT, false, stride, 0);
          gl.enableVertexAttribArray(attributes.vert);
        }
        if (attributes.color >= 0) {
          gl.vertexAttribPointer(attributes.color, 4, gl.FLOAT, false, stride, 3 * 4);
          gl.enableVertexAttribArray(attributes.color);
        }
        if (attributes.uv >= 0) {
          gl.vertexAttribPointer(attributes.uv, 2, gl.FLOAT, false, stride, 7 * 4);
          gl.enableVertexAttribArray(attributes.uv);
        }
        if (attributes.uv2 >= 0) {
          gl.vertexAttribPointer(attributes.uv2, 2, gl.FLOAT, false, stride, 9 * 4);
          gl.enableVertexAttribArray(attributes.uv2);
        }
        if (attributes.uv) {
          if (attributes.normal >= 0) {
            gl.vertexAttribPointer(attributes.normal, 3, gl.FLOAT, true, stride, 11 * 4);
            gl.enableVertexAttribArray(attributes.normal);
          }
        }
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.EBO);
      }
      destroy() {
        if (!this.initialized)
          return;
        if (this.destroyed)
          return;
        this.gl.deleteBuffer(this.VBO);
        this.gl.deleteBuffer(this.EBO);
        super.destroy();
      }
      tryInit(required = false) {
        var _a, _b;
        if (this.initialized)
          return true;
        const gl = this.gl || global_1.GL();
        if (!gl) {
          if (required)
            throw new Error("Failed to init mesh without global GL context");
          return false;
        }
        this.gl = gl;
        this.VBO = (_a = gl.createBuffer()) !== null && _a !== void 0 ? _a : util_1.panic("Failed to create vertex buffer.");
        this.EBO = (_b = gl.createBuffer()) !== null && _b !== void 0 ? _b : util_1.panic("Failed to create element buffer.");
        this.initialized = true;
        return true;
      }
    };
    exports.Mesh = Mesh;
  });

  // zogra-renderer/dist/core/render-target.js
  var require_render_target = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.RenderTarget = void 0;
    var global_1 = require_global();
    var util_1 = require_util();
    var vec2_1 = require_vec22();
    var FrameBufferAttachment = {
      canvasOutput: {tex: null, attachPoint: WebGL2RenderingContext.BACK},
      fromRenderTexture: (rt) => ({tex: rt.glTex()})
    };
    var RenderTarget2 = class {
      constructor(width = 0, height = 0, ctx = global_1.GlobalContext()) {
        var _a;
        this.colorAttachments = [];
        this.depthAttachment = FrameBufferAttachment.canvasOutput;
        this.isCanvasTarget = true;
        this.width = width;
        this.height = height;
        if (!ctx)
          this.frameBuffer = null;
        else
          this.frameBuffer = (_a = ctx.gl.createFramebuffer()) !== null && _a !== void 0 ? _a : util_1.panic("Failed to create frame buffer");
      }
      get size() {
        return vec2_1.vec2(this.width, this.height);
      }
      addColorAttachment(rt) {
        if (rt === null) {
          return;
        }
        this.isCanvasTarget = false;
        if (this.width == 0 && this.height == 0) {
          this.width = rt.width;
          this.height = rt.height;
        }
        if (this.width != rt.width || this.height != rt.height)
          throw new Error("Framebuffer attachments must in same resolution.");
        this.colorAttachments.push(FrameBufferAttachment.fromRenderTexture(rt));
      }
      setDepthAttachment(rt) {
        var _a;
        if (this.width == 0 && this.height == 0) {
          this.width = rt.width;
          this.height = rt.height;
        }
        if (this.width != rt.width || this.height != rt.height)
          throw new Error("Framebuffer attachments must in same resolution.");
        this.depthAttachment = {tex: (_a = rt === null || rt === void 0 ? void 0 : rt.glTex) !== null && _a !== void 0 ? _a : null, attachPoint: WebGL2RenderingContext.DEPTH_ATTACHMENT};
      }
      bind(ctx = global_1.GlobalContext()) {
        const gl = ctx.gl;
        if (this.isCanvasTarget) {
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          gl.viewport(0, 0, ctx.width, ctx.height);
        } else {
          gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);
          let attachIdx = 0;
          for (let i = 0; i < this.colorAttachments.length; i++) {
            if (this.colorAttachments[i].tex) {
              this.colorAttachments[i].attachPoint = gl.COLOR_ATTACHMENT0 + attachIdx++;
              gl.framebufferTexture2D(gl.FRAMEBUFFER, this.colorAttachments[i].attachPoint, gl.TEXTURE_2D, this.colorAttachments[i].tex, 0);
            }
          }
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, this.depthAttachment.tex, 0);
          gl.viewport(0, 0, this.width, this.height);
          const buffers = this.colorAttachments.map((t) => t.attachPoint);
          gl.drawBuffers(buffers);
        }
      }
      release(ctx = global_1.GlobalContext()) {
        if (this.isCanvasTarget)
          return;
        const gl = ctx.gl;
        gl.deleteFramebuffer(this.frameBuffer);
      }
    };
    exports.RenderTarget = RenderTarget2;
    RenderTarget2.CanvasTarget = Object.freeze(new RenderTarget2());
  });

  // zogra-renderer/dist/builtin-assets/materials.js
  var require_materials = __commonJS((exports) => {
    "use strict";
    var __decorate2 = exports && exports.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if (d = decorators[i])
            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.createBuiltinMaterialTypes = exports.createBuiltinMaterial = void 0;
    var material_1 = require_material();
    var color_1 = require_color();
    var material_type_1 = require_material_type();
    var vec2_1 = require_vec22();
    function createBuiltinMaterial(gl, types, shaders, textures) {
      const errorMat = new material_1.Material(shaders.ErrorShader, gl);
      errorMat.setProp("uMainTex", "tex2d", textures.error);
      return {
        error: errorMat,
        default: new types.DefaultMaterial(gl),
        blitCopy: new types.BlitCopy(gl),
        ColoredLine: new material_1.Material(shaders.ColoredLine, gl)
      };
    }
    exports.createBuiltinMaterial = createBuiltinMaterial;
    function createBuiltinMaterialTypes(gl, builtinTexs, shaders) {
      let DefaultMaterial = class DefaultMaterial extends material_1.MaterialFromShader(shaders.DefaultShader) {
        constructor() {
          super(...arguments);
          this.color = color_1.Color.white;
          this.mainTexture = builtinTexs.default;
        }
      };
      __decorate2([
        material_1.shaderProp("uColor", "color")
      ], DefaultMaterial.prototype, "color", void 0);
      __decorate2([
        material_1.shaderProp("uMainTex", "tex2d")
      ], DefaultMaterial.prototype, "mainTexture", void 0);
      DefaultMaterial = __decorate2([
        material_1.materialDefine
      ], DefaultMaterial);
      let BlitCopy = class BlitCopy extends material_1.MaterialFromShader(shaders.BlitCopy) {
        constructor() {
          super(...arguments);
          this.source = null;
          this.flip = vec2_1.vec2(0, 0);
        }
      };
      __decorate2([
        material_1.shaderProp("uMainTex", "tex2d")
      ], BlitCopy.prototype, "source", void 0);
      __decorate2([
        material_1.shaderProp("uFlip", "vec2")
      ], BlitCopy.prototype, "flip", void 0);
      BlitCopy = __decorate2([
        material_1.materialDefine
      ], BlitCopy);
      let DefaultLit = class DefaultLit extends material_1.MaterialFromShader(shaders.DefaultShader) {
        constructor() {
          super(...arguments);
          this.color = color_1.Color.white;
          this.mainTexture = builtinTexs.default;
          this.normalTexture = builtinTexs.defaultNormal;
          this.emission = color_1.Color.black;
          this.specular = color_1.Color.white;
          this.metiallic = 0.023;
          this.smoothness = 0.5;
          this.fresnel = 5;
        }
      };
      __decorate2([
        material_1.shaderProp("uColor", "color")
      ], DefaultLit.prototype, "color", void 0);
      __decorate2([
        material_1.shaderProp("uMainTex", "tex2d")
      ], DefaultLit.prototype, "mainTexture", void 0);
      __decorate2([
        material_1.shaderProp("uNormalTex", "tex2d")
      ], DefaultLit.prototype, "normalTexture", void 0);
      __decorate2([
        material_1.shaderProp("uEmission", "color")
      ], DefaultLit.prototype, "emission", void 0);
      __decorate2([
        material_1.shaderProp("uSpecular", "color")
      ], DefaultLit.prototype, "specular", void 0);
      __decorate2([
        material_1.shaderProp("uMetallic", "float")
      ], DefaultLit.prototype, "metiallic", void 0);
      __decorate2([
        material_1.shaderProp("uSmoothness", "float")
      ], DefaultLit.prototype, "smoothness", void 0);
      __decorate2([
        material_1.shaderProp("uFresnel", "float")
      ], DefaultLit.prototype, "fresnel", void 0);
      DefaultLit = __decorate2([
        material_1.materialDefine
      ], DefaultLit);
      return {
        DefaultMaterial,
        BlitCopy,
        DefaultLit
      };
    }
    exports.createBuiltinMaterialTypes = createBuiltinMaterialTypes;
  });

  // zogra-renderer/dist/builtin-assets/textures.js
  var require_textures = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.createDefaultTextures = void 0;
    var util_1 = require_util();
    var texture_1 = require_texture();
    var texture_format_1 = require_texture_format();
    function createDefaultTextures(context) {
      var _a;
      const size = 64;
      const canvas = document.createElement("canvas");
      canvas.width = canvas.height = size;
      const ctx = (_a = canvas.getContext("2d")) !== null && _a !== void 0 ? _a : util_1.panic("Failed to create default texture.");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = "cyan";
      ctx.fillRect(0, 0, size / 2, size / 2);
      ctx.fillRect(size / 2, size / 2, size / 2, size / 2);
      const errorTex = new texture_1.Texture2D(size, size, texture_format_1.TextureFormat.RGBA, texture_1.FilterMode.Linear, context);
      errorTex.setData(canvas);
      errorTex.name = "Texture-Error";
      ctx.fillStyle = "blue";
      ctx.fillRect(0, 0, size, size);
      const defaultNormalTex = new texture_1.Texture2D(size, size, texture_format_1.TextureFormat.RGBA, texture_1.FilterMode.Linear, context);
      defaultNormalTex.setData(canvas);
      defaultNormalTex.name = "Default-Normal";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, size, size);
      const defaultTex = new texture_1.Texture2D(size, size, texture_format_1.TextureFormat.RGBA, texture_1.FilterMode.Linear, context);
      defaultTex.setData(canvas);
      defaultTex.name = "Default-White";
      return {
        default: defaultTex,
        defaultNormal: defaultNormalTex,
        error: errorTex
      };
    }
    exports.createDefaultTextures = createDefaultTextures;
  });

  // zogra-renderer/dist/utils/mesh-builder.js
  var require_mesh_builder = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.MeshBuilder = void 0;
    var types_1 = require_types();
    var global_1 = require_global();
    var mesh_1 = require_mesh();
    var MeshBuilder2 = class {
      constructor(capacity = 0, gl = global_1.GlobalContext().gl) {
        this.verts = [];
        this.triangles = [];
        this.uvs = [];
        this.colors = [];
        this.gl = gl;
      }
      addPolygon(verts, uvs) {
        const base = this.verts.length;
        for (let i = 0; i < verts.length; i++) {
          this.verts.push(verts[i]);
          this.uvs.push(uvs[i]);
          this.colors.push(types_1.Color.white);
        }
        for (let i = 2; i < verts.length; i++) {
          this.triangles.push(base + 0, base + i - 1, base + i);
        }
      }
      addSubMesh(verts, triangles, colors = [types_1.Color.white], uvs = [types_1.vec2(0, 0)]) {
        const base = this.verts.length;
        if (triangles.length % 3 !== 0)
          throw new Error("Invalid number of triangles.");
        for (let i = 0; i < verts.length; i++) {
          this.verts.push(verts[i]);
          this.uvs.push(i >= uvs.length ? uvs[uvs.length - 1] : uvs[i]);
          this.colors.push(i >= colors.length ? colors[colors.length - 1] : colors[i]);
        }
        for (let i = 0; i < triangles.length; i++) {
          this.triangles.push(base + triangles[i]);
        }
      }
      toMesh() {
        const mesh = new mesh_1.Mesh(this.gl);
        mesh.verts = this.verts;
        mesh.triangles = this.triangles;
        mesh.colors = this.colors;
        mesh.uvs = this.uvs;
        mesh.calculateNormals();
        return mesh;
      }
      static quad(center = types_1.vec2.zero(), size = types_1.vec2.one()) {
        const halfSize = types_1.mul(size, types_1.vec2(0.5));
        const quad = new mesh_1.Mesh();
        quad.verts = [
          types_1.vec3(center.x - halfSize.x, center.y - halfSize.y, 0),
          types_1.vec3(center.x + halfSize.x, center.y - halfSize.y, 0),
          types_1.vec3(center.x + halfSize.x, center.y + halfSize.y, 0),
          types_1.vec3(center.x - halfSize.x, center.y + halfSize.y, 0)
        ];
        quad.triangles = [
          0,
          1,
          3,
          1,
          2,
          3
        ];
        quad.uvs = [
          types_1.vec2(0, 0),
          types_1.vec2(1, 0),
          types_1.vec2(1, 1),
          types_1.vec2(0, 1)
        ];
        quad.normals = [
          types_1.vec3(0, 0, 1),
          types_1.vec3(0, 0, 1),
          types_1.vec3(0, 0, 1),
          types_1.vec3(0, 0, 1)
        ];
        quad.name = "mesh_quad";
        return quad;
      }
      static ndcQuad() {
        return this.quad(types_1.vec2.zero(), types_1.vec2(2, 2));
      }
      static ndcTriangle() {
        const mesh = new mesh_1.Mesh();
        mesh.verts = [
          types_1.vec3(-1, -1, 0),
          types_1.vec3(3, -1, 0),
          types_1.vec3(-1, 3, 0)
        ];
        mesh.triangles = [0, 1, 2];
        mesh.uvs = [
          types_1.vec2(0, 0),
          types_1.vec2(2, 0),
          types_1.vec2(0, 2)
        ];
        mesh.normals = [
          types_1.vec3(0, 0, 1),
          types_1.vec3(0, 0, 1),
          types_1.vec3(0, 0, 1)
        ];
        mesh.name = "mesh_ndc_triangle";
        return mesh;
      }
    };
    exports.MeshBuilder = MeshBuilder2;
  });

  // zogra-renderer/dist/builtin-assets/mesh.js
  var require_mesh2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.createBuiltinMesh = void 0;
    var mesh_1 = require_mesh();
    var vec3_1 = require_vec32();
    var vec2_1 = require_vec22();
    var mesh_builder_1 = require_mesh_builder();
    function createBuiltinMesh(gl) {
      return {
        quad: quad(gl),
        screenQuad: screenQuad(gl),
        cube: cube(gl)
      };
    }
    exports.createBuiltinMesh = createBuiltinMesh;
    function quad(gl) {
      const quad2 = new mesh_1.Mesh(gl);
      quad2.verts = [
        vec3_1.vec3(-0.5, -0.5, 0),
        vec3_1.vec3(0.5, -0.5, 0),
        vec3_1.vec3(0.5, 0.5, 0),
        vec3_1.vec3(-0.5, 0.5, 0)
      ];
      quad2.triangles = [
        0,
        1,
        3,
        1,
        2,
        3
      ];
      quad2.uvs = [
        vec2_1.vec2(0, 0),
        vec2_1.vec2(1, 0),
        vec2_1.vec2(1, 1),
        vec2_1.vec2(0, 1)
      ];
      quad2.calculateNormals();
      quad2.name = "mesh_quad";
      return quad2;
    }
    function screenQuad(gl) {
      const screenQuad2 = new mesh_1.Mesh(gl);
      screenQuad2.verts = [
        vec3_1.vec3(-1, -1, 0),
        vec3_1.vec3(1, -1, 0),
        vec3_1.vec3(1, 1, 0),
        vec3_1.vec3(-1, 1, 0)
      ];
      screenQuad2.triangles = [
        0,
        1,
        3,
        1,
        2,
        3
      ];
      screenQuad2.uvs = [
        vec2_1.vec2(0, 0),
        vec2_1.vec2(1, 0),
        vec2_1.vec2(1, 1),
        vec2_1.vec2(0, 1)
      ];
      screenQuad2.calculateNormals();
      screenQuad2.name = "mesh_screen_quad";
      return screenQuad2;
    }
    function cube(gl) {
      const verts = [
        vec3_1.vec3(-0.5, -0.5, -0.5),
        vec3_1.vec3(0.5, -0.5, -0.5),
        vec3_1.vec3(0.5, 0.5, -0.5),
        vec3_1.vec3(-0.5, 0.5, -0.5),
        vec3_1.vec3(-0.5, -0.5, 0.5),
        vec3_1.vec3(0.5, -0.5, 0.5),
        vec3_1.vec3(0.5, 0.5, 0.5),
        vec3_1.vec3(-0.5, 0.5, 0.5)
      ];
      const uvs = [
        vec2_1.vec2(0, 0),
        vec2_1.vec2(1, 0),
        vec2_1.vec2(1, 1),
        vec2_1.vec2(0, 1)
      ];
      const mb = new mesh_builder_1.MeshBuilder(24, gl);
      mb.addPolygon([
        verts[1],
        verts[0],
        verts[3],
        verts[2]
      ], [
        uvs[0],
        uvs[1],
        uvs[2],
        uvs[3]
      ]);
      mb.addPolygon([
        verts[5],
        verts[1],
        verts[2],
        verts[6]
      ], [
        uvs[0],
        uvs[1],
        uvs[2],
        uvs[3]
      ]);
      mb.addPolygon([
        verts[4],
        verts[5],
        verts[6],
        verts[7]
      ], [
        uvs[0],
        uvs[1],
        uvs[2],
        uvs[3]
      ]);
      mb.addPolygon([
        verts[0],
        verts[4],
        verts[7],
        verts[3]
      ], [
        uvs[0],
        uvs[1],
        uvs[2],
        uvs[3]
      ]);
      mb.addPolygon([
        verts[7],
        verts[6],
        verts[2],
        verts[3]
      ], [
        uvs[0],
        uvs[1],
        uvs[2],
        uvs[3]
      ]);
      mb.addPolygon([
        verts[0],
        verts[1],
        verts[5],
        verts[4]
      ], [
        uvs[0],
        uvs[1],
        uvs[2],
        uvs[3]
      ]);
      const mesh = mb.toMesh();
      mesh.name = "mesh_cube";
      return mesh;
    }
  });

  // zogra-renderer/dist/builtin-assets/assets.js
  var require_assets = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.BuiltinAssets = void 0;
    var materials_1 = require_materials();
    var shaders_1 = require_shaders();
    var textures_1 = require_textures();
    var mesh_1 = require_mesh2();
    var BuiltinAssets = class {
      constructor(gl) {
        let ctx = {
          assets: this,
          gl,
          width: 0,
          height: 0,
          renderer: null
        };
        this.gl = gl;
        this.BuiltinUniforms = shaders_1.BuiltinUniformNames;
        this.shaderSources = shaders_1.BuiltinShaderSources;
        this.shaders = shaders_1.compileBuiltinShaders(gl);
        this.meshes = mesh_1.createBuiltinMesh(gl);
        this.textures = textures_1.createDefaultTextures(ctx);
        this.types = materials_1.createBuiltinMaterialTypes(gl, this.textures, this.shaders);
        this.materials = materials_1.createBuiltinMaterial(gl, this.types, this.shaders, this.textures);
      }
    };
    exports.BuiltinAssets = BuiltinAssets;
  });

  // zogra-renderer/dist/core/renderer.js
  var require_renderer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.ZograRenderer = void 0;
    var util_1 = require_util();
    var global_1 = require_global();
    var color_1 = require_color();
    var mat4_1 = require_mat42();
    var render_target_1 = require_render_target();
    var texture_1 = require_texture();
    var vec2_1 = require_vec22();
    var assets_1 = require_assets();
    var rect_1 = require_rect();
    var mesh_builder_1 = require_mesh_builder();
    var math_1 = require_math();
    var shaders_1 = require_shaders();
    var ZograRenderer3 = class {
      constructor(canvasElement, width, height) {
        this.viewProjectionMatrix = mat4_1.mat4.identity();
        this.viewMatrix = mat4_1.mat4.identity();
        this.projectionMatrix = mat4_1.mat4.identity();
        this.target = render_target_1.RenderTarget.CanvasTarget;
        this.shader = null;
        this.globalUniforms = new Map();
        this.globalTextures = new Map();
        this.canvas = canvasElement;
        this.width = width === void 0 ? canvasElement.width : width;
        this.height = height === void 0 ? canvasElement.height : height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.scissor = new rect_1.Rect(vec2_1.vec2.zero(), vec2_1.vec2(this.width, this.height));
        this.gl = util_1.panicNull(this.canvas.getContext("webgl2"), "WebGL2 is not support on current device.");
        this.assets = new assets_1.BuiltinAssets(this.gl);
        this.ctx = {
          gl: this.gl,
          width: this.width,
          height: this.height,
          assets: this.assets,
          renderer: this
        };
        if (!global_1.GlobalContext())
          this.use();
        this.helperAssets = {
          clipBlitMesh: mesh_builder_1.MeshBuilder.ndcQuad(),
          blitMesh: mesh_builder_1.MeshBuilder.ndcTriangle()
        };
      }
      use() {
        global_1.setGlobalContext(this.ctx);
      }
      setSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.width = width;
        this.height = height;
        this.ctx.width = width;
        this.ctx.height = height;
      }
      get canvasSize() {
        return vec2_1.vec2(this.width, this.height);
      }
      setViewProjection(view, projection) {
        this.viewProjectionMatrix = mat4_1.mat4.mul(projection, view);
      }
      setRenderTarget(colorAttachments, depthAttachment) {
        if (colorAttachments instanceof render_target_1.RenderTarget) {
          if (this.target !== colorAttachments)
            this.target.release();
          this.target = colorAttachments;
        } else if (colorAttachments instanceof Array) {
          this.target.release();
          this.target = new render_target_1.RenderTarget(colorAttachments[0].width, colorAttachments[0].height, this.ctx);
          for (let i = 0; i < colorAttachments.length; i++)
            this.target.addColorAttachment(colorAttachments[i]);
        } else if (colorAttachments instanceof texture_1.RenderTexture) {
          this.target.release();
          this.target = new render_target_1.RenderTarget(colorAttachments.width, colorAttachments.height, this.ctx);
          this.target.addColorAttachment(colorAttachments);
        }
        if (depthAttachment)
          this.target.setDepthAttachment(depthAttachment);
        this.scissor = new rect_1.Rect(vec2_1.vec2.zero(), this.target.size);
        this.target.bind(this.ctx);
      }
      clear(color = color_1.Color.black, clearDepth = true) {
        this.gl.clearColor(color.r, color.g, color.b, color.a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | (clearDepth ? this.gl.DEPTH_BUFFER_BIT : 0));
      }
      blit(src, dst, material = this.assets.materials.blitCopy, srcRect, dstRect) {
        if (dst instanceof texture_1.RenderTexture) {
          const target = new render_target_1.RenderTarget(dst.width, dst.height, this.ctx);
          target.addColorAttachment(dst);
          dst = target;
        } else if (dst instanceof Array) {
          const target = new render_target_1.RenderTarget(0, 0, this.ctx);
          for (let i = 0; i < dst.length; i++) {
            target.addColorAttachment(dst[i]);
          }
          dst = target;
        }
        const prevVP = this.viewProjectionMatrix;
        const prevTarget = this.target;
        let mesh = this.helperAssets.blitMesh;
        let viewport = dst === render_target_1.RenderTarget.CanvasTarget ? new rect_1.Rect(vec2_1.vec2.zero(), this.canvasSize) : new rect_1.Rect(vec2_1.vec2.zero(), dst.size);
        if (src && (srcRect || dstRect)) {
          viewport = dstRect || viewport;
          if (srcRect) {
            mesh = this.helperAssets.clipBlitMesh;
            let uvMin = math_1.div(srcRect.min, src.size);
            let uvMax = math_1.div(srcRect.max, src.size);
            mesh.uvs = [
              vec2_1.vec2(uvMin.x, uvMin.y),
              vec2_1.vec2(uvMax.x, uvMin.y),
              vec2_1.vec2(uvMax.x, uvMax.y),
              vec2_1.vec2(uvMin.x, uvMax.y)
            ];
            mesh.update();
          }
        }
        this.target = dst;
        this.scissor = viewport;
        this.viewProjectionMatrix = mat4_1.mat4.identity();
        if (src)
          material.setProp(shaders_1.BuiltinUniformNames.mainTex, "tex2d", src);
        this.drawMesh(mesh, mat4_1.mat4.identity(), material);
        this.setRenderTarget(prevTarget);
        this.viewProjectionMatrix = prevVP;
      }
      useShader(shader) {
        const gl = this.gl;
        this.shader = shader;
        shader.use();
        shader.setupPipelineStates();
      }
      setupTransforms(shader, transformModel) {
        const gl = this.gl;
        const mvp = mat4_1.mat4.mul(this.viewProjectionMatrix, transformModel);
        const mit = mat4_1.mat4.transpose(mat4_1.mat4.invert(transformModel));
        const mvit = mat4_1.mat4.transpose(mat4_1.mat4.invert(mat4_1.mat4.mul(this.viewMatrix, transformModel)));
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
          size: vec2_1.vec2(this.width, this.height)
        };
        this.target.bind(this.ctx);
        this.setupScissor();
        this.useShader(material.shader);
        material.upload(data);
        this.setupTransforms(material.shader, mat4_1.mat4.identity());
        mesh.bind(material.shader);
        buffer.bindInstanceDraw(material.shader);
        gl.drawElementsInstanced(gl.TRIANGLES, mesh.triangles.length, gl.UNSIGNED_INT, 0, count);
        buffer.cleanupInstanceDraw(material.shader);
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
          size: vec2_1.vec2(this.width, this.height)
        };
        this.target.bind(this.ctx);
        this.setupScissor();
        this.useShader(material.shader);
        material.upload(data);
        this.setupTransforms(material.shader, mat4_1.mat4.identity());
        mesh.bind(material.shader);
        gl.drawElementsInstanced(gl.TRIANGLES, mesh.triangles.length, gl.UNSIGNED_INT, 0, count);
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
          size: vec2_1.vec2(this.width, this.height)
        };
        this.target.bind(this.ctx);
        this.setupScissor();
        this.useShader(material.shader);
        material.upload(data);
        this.setupTransforms(material.shader, transform);
        mesh.bind(material.shader);
        gl.drawElements(gl.TRIANGLES, mesh.triangles.length, gl.UNSIGNED_INT, 0);
        material.unbindRenderTextures();
      }
      drawLines(lines, transform, material) {
        const gl = this.gl;
        const data = {
          assets: this.assets,
          gl,
          nextTextureUnit: 0,
          size: vec2_1.vec2(this.width, this.height)
        };
        this.target.bind(this.ctx);
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
    exports.ZograRenderer = ZograRenderer3;
  });

  // zogra-renderer/dist/core/lines.js
  var require_lines = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.LineBuilder = exports.Lines = void 0;
    var color_1 = require_color();
    var global_1 = require_global();
    var util_1 = require_util();
    var asset_1 = require_asset();
    var Lines = class extends asset_1.Asset {
      constructor(gl = global_1.GL()) {
        var _a, _b;
        super();
        this._verts = [];
        this._colors = [];
        this._lines = [];
        this.dirty = true;
        this.vertices = new Float32Array(0);
        this.indices = new Uint32Array(0);
        this.name = `Lines_${this.assetID}`;
        this.gl = gl;
        this.VBO = (_a = gl.createBuffer()) !== null && _a !== void 0 ? _a : util_1.panic("Failed to create vertex buffer.");
        this.EBO = (_b = gl.createBuffer()) !== null && _b !== void 0 ? _b : util_1.panic("Failed to create element buffer.");
      }
      get verts() {
        return this._verts;
      }
      set verts(verts) {
        this._verts = verts;
        this.dirty = true;
      }
      get colors() {
        return this._colors;
      }
      set colors(colors) {
        this._colors = colors;
        this.dirty = true;
      }
      get lines() {
        return this._lines;
      }
      set lines(lines) {
        this._lines = lines;
        this.dirty = true;
      }
      clear() {
        this.verts = [];
        this.colors = [];
        this.lines = [];
      }
      update() {
        if (this.dirty) {
          const gl = this.gl;
          if (this.lines.length % 2 !== 0)
            throw new Error("Invalid lines.");
          if (this.colors.length !== this.verts.length)
            this.colors = [...this.colors, ...util_1.fillArray(color_1.Color.white, this.verts.length - this.colors.length)];
          this.vertices = new Float32Array(this.verts.flatMap((vert, idx) => [
            ...vert,
            ...this.colors[idx]
          ]));
          if (this.vertices.length != this.verts.length * 7)
            throw new Error("Buffer with invalid length.");
          this.indices = new Uint32Array(this.lines.flat());
          gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
          gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.EBO);
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.DYNAMIC_DRAW);
          this.dirty = false;
        }
      }
      bind(shader) {
        const gl = this.gl;
        this.update();
        const attributes = shader._internal().attributes;
        const stride = 7 * 4;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
        if (attributes.vert >= 0) {
          gl.vertexAttribPointer(attributes.vert, 3, gl.FLOAT, false, stride, 0);
          gl.enableVertexAttribArray(attributes.vert);
        }
        if (attributes.color >= 0) {
          gl.vertexAttribPointer(attributes.color, 4, gl.FLOAT, false, stride, 3 * 4);
          gl.enableVertexAttribArray(attributes.color);
        }
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.EBO);
      }
      destroy() {
        if (this.destroyed)
          return;
        this.gl.deleteBuffer(this.VBO);
        this.gl.deleteBuffer(this.EBO);
        super.destroy();
      }
    };
    exports.Lines = Lines;
    var LineBuilder = class {
      constructor(capacity = 0, gl = global_1.GL()) {
        this.verts = [];
        this.colors = [];
        this.lines = [];
        this.gl = gl;
      }
      addLine(line, color = color_1.Color.white) {
        const base = this.verts.length;
        const [u, v] = line;
        this.verts.push(u, v);
        this.colors.push(color, color);
        this.lines.push(base, base + 1);
      }
      toLines() {
        const line = new Lines(this.gl);
        line.verts = this.verts;
        line.colors = this.colors;
        line.lines = this.lines;
        line.update();
        return line;
      }
    };
    exports.LineBuilder = LineBuilder;
  });

  // zogra-renderer/dist/core/buffer.js
  var require_buffer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.RenderBuffer = void 0;
    var util_1 = require_util();
    var global_1 = require_global();
    var RenderBuffer2 = class extends Array {
      constructor(structure, items, ctx = global_1.GlobalContext()) {
        super(items);
        this.static = false;
        this.dirty = false;
        this.initialized = false;
        this.glBuf = null;
        this.structure = structure;
        this.ctx = ctx;
        let elementSize = 0;
        for (const key in structure) {
          switch (structure[key]) {
            case "float":
              elementSize += 1;
              break;
            case "vec2":
              elementSize += 2;
              break;
            case "vec3":
              elementSize += 3;
              break;
            case "vec4":
              elementSize += 4;
              break;
            case "mat4":
              elementSize += 16;
              break;
          }
        }
        const elementBytes = elementSize * 4;
        this.buffer = null;
        this.byteSize = elementBytes * items;
        this.elementSize = elementSize;
        this.elementByteSize = elementBytes;
        this.resize(items);
        this.tryInit(false);
      }
      tryInit(required = false) {
        var _a;
        if (this.initialized)
          return true;
        const ctx = this.ctx || global_1.GlobalContext();
        if (!ctx) {
          if (required)
            throw new Error("Failed to init render buffer without a global GL context.");
          return false;
        }
        this.ctx = ctx;
        const gl = ctx.gl;
        this.glBuf = (_a = gl.createBuffer()) !== null && _a !== void 0 ? _a : util_1.panic("Failed to create render buffer");
        gl.bindBuffer(gl.ARRAY_BUFFER, this.glBuf);
        gl.bufferData(gl.ARRAY_BUFFER, this.byteSize, this.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW);
        this.initialized = true;
        return true;
      }
      resize(length, keepContent = true) {
        const oldBuffer = this.buffer;
        this.buffer = new Float32Array(this.elementSize * length);
        if (keepContent && oldBuffer) {
          this.buffer.set(oldBuffer, 0);
        }
        this.length = length;
        const elementBytes = this.elementByteSize;
        for (let i = 0; i < this.length; i++) {
          const element = {};
          let offset = 0;
          for (const key in this.structure) {
            switch (this.structure[key]) {
              case "float":
                element[key] = new Float32Array(this.buffer.buffer, i * elementBytes + offset * 4, 1);
                offset += 1;
                break;
              case "vec2":
                element[key] = new Float32Array(this.buffer.buffer, i * elementBytes + offset * 4, 2);
                offset += 2;
                break;
              case "vec3":
                element[key] = new Float32Array(this.buffer.buffer, i * elementBytes + offset * 4, 3);
                offset += 3;
                break;
              case "vec4":
                element[key] = new Float32Array(this.buffer.buffer, i * elementBytes + offset * 4, 4);
                offset += 4;
                break;
              case "mat4":
                element[key] = new Float32Array(this.buffer.buffer, i * elementBytes + offset * 4, 16);
                offset += 16;
                break;
            }
          }
          this[i] = element;
        }
        this.dirty = true;
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
        gl.bufferData(gl.ARRAY_BUFFER, this.buffer, this.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW);
        this.dirty = false;
        return true;
      }
      bindInstanceDraw(shader) {
        this.tryInit(true);
        const gl = this.ctx.gl;
        this.upload() || gl.bindBuffer(gl.ARRAY_BUFFER, this.glBuf);
        const locations = shader.attributes;
        let floatOffset = 0;
        for (const key in this.structure) {
          const loc = locations[key];
          loc >= 0 && gl.enableVertexAttribArray(loc);
          switch (this.structure[key]) {
            case "float":
              loc >= 0 && gl.vertexAttribPointer(loc, 1, gl.FLOAT, false, this.elementByteSize, floatOffset * 4);
              floatOffset += 1;
              break;
            case "vec2":
              loc >= 0 && gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, this.elementByteSize, floatOffset * 4);
              floatOffset += 2;
              break;
            case "vec3":
              loc >= 0 && gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, this.elementByteSize, floatOffset * 4);
              floatOffset += 3;
              break;
            case "vec4":
              loc >= 0 && gl.vertexAttribPointer(loc, 4, gl.FLOAT, false, this.elementByteSize, floatOffset * 4);
              floatOffset += 4;
              break;
            case "mat4":
              if (loc >= 0) {
                gl.enableVertexAttribArray(loc + 0);
                gl.enableVertexAttribArray(loc + 1);
                gl.enableVertexAttribArray(loc + 2);
                gl.enableVertexAttribArray(loc + 3);
                gl.vertexAttribPointer(loc + 0, 4, gl.FLOAT, false, this.elementByteSize, (floatOffset + 0) * 4);
                gl.vertexAttribPointer(loc + 1, 4, gl.FLOAT, false, this.elementByteSize, (floatOffset + 4) * 4);
                gl.vertexAttribPointer(loc + 2, 4, gl.FLOAT, false, this.elementByteSize, (floatOffset + 8) * 4);
                gl.vertexAttribPointer(loc + 3, 4, gl.FLOAT, false, this.elementByteSize, (floatOffset + 12) * 4);
                gl.vertexAttribDivisor(loc + 0, 1);
                gl.vertexAttribDivisor(loc + 1, 1);
                gl.vertexAttribDivisor(loc + 2, 1);
                gl.vertexAttribDivisor(loc + 3, 1);
              }
              floatOffset += 16;
              break;
          }
          loc >= 0 && gl.vertexAttribDivisor(loc, 1);
        }
      }
      cleanupInstanceDraw(shader) {
        this.tryInit(true);
        const gl = this.ctx.gl;
        const locations = shader.attributes;
        for (const key in this.structure) {
          const loc = locations[key];
          switch (this.structure[key]) {
            case "float":
            case "vec2":
            case "vec3":
            case "vec4":
              loc >= 0 && gl.vertexAttribDivisor(loc, 0);
              loc >= 0 && gl.disableVertexAttribArray(loc);
              break;
            case "mat4":
              if (loc >= 0) {
                gl.vertexAttribDivisor(loc + 0, 0);
                gl.vertexAttribDivisor(loc + 1, 0);
                gl.vertexAttribDivisor(loc + 2, 0);
                gl.vertexAttribDivisor(loc + 3, 0);
                gl.disableVertexAttribArray(loc + 0);
                gl.disableVertexAttribArray(loc + 1);
                gl.disableVertexAttribArray(loc + 2);
                gl.disableVertexAttribArray(loc + 3);
              }
              break;
          }
        }
      }
    };
    exports.RenderBuffer = RenderBuffer2;
  });

  // zogra-renderer/dist/core/core.js
  var require_core = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.TextureFormat = void 0;
    __exportStar2(require_material(), exports);
    __exportStar2(require_material_type(), exports);
    __exportStar2(require_mesh(), exports);
    __exportStar2(require_renderer(), exports);
    __exportStar2(require_shader(), exports);
    __exportStar2(require_texture(), exports);
    __exportStar2(require_asset(), exports);
    __exportStar2(require_lines(), exports);
    __exportStar2(require_event(), exports);
    __exportStar2(require_buffer(), exports);
    __exportStar2(require_render_target(), exports);
    var texture_format_1 = require_texture_format();
    Object.defineProperty(exports, "TextureFormat", {enumerable: true, get: function() {
      return texture_format_1.TextureFormat;
    }});
  });

  // zogra-renderer/dist/engine/transform.js
  var require_transform = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Transform = void 0;
    var mat4_1 = require_mat42();
    var vec3_1 = require_vec32();
    var quat_1 = require_quat3();
    var Transform = class {
      constructor() {
        this._parent = null;
        this.children = new Set();
        this.localPosition = vec3_1.vec3.zero();
        this.localRotation = quat_1.quat.identity();
        this.localScaling = vec3_1.vec3.one();
      }
      get position() {
        if (!this._parent)
          return this.localPosition;
        return mat4_1.mat4.mulPoint(this._parent.localToWorldMatrix, this.localPosition);
      }
      set position(position) {
        if (!this._parent)
          this.localPosition = position;
        else
          this.localPosition = mat4_1.mat4.mulPoint(this._parent.worldToLocalMatrix, position);
      }
      get rotation() {
        if (!this._parent)
          return this.localRotation;
        return quat_1.quat.mul(this._parent.rotation, this.localRotation);
      }
      set rotation(rotation) {
        if (!this._parent)
          this.localRotation = quat_1.quat.normalize(rotation);
        else
          this.localRotation = quat_1.quat.normalize(quat_1.quat.mul(quat_1.quat.invert(this._parent.rotation), rotation));
      }
      get localToWorldMatrix() {
        if (!this._parent)
          return mat4_1.mat4.rts(this.localRotation, this.localPosition, this.localScaling);
        const mat = mat4_1.mat4.rts(this.localRotation, this.localPosition, this.localScaling);
        return mat4_1.mat4.mul(mat, this._parent.localToWorldMatrix, mat);
      }
      get worldToLocalMatrix() {
        return mat4_1.mat4.invert(this.localToWorldMatrix);
      }
      get parent() {
        return this._parent;
      }
      set parent(p) {
        this._parent = p;
        if (p) {
          p.children.add(this);
        }
      }
    };
    exports.Transform = Transform;
  });

  // zogra-renderer/dist/engine/entity.js
  var require_entity = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.EntityManager = exports.Entity = void 0;
    var transform_1 = require_transform();
    var asset_1 = require_asset();
    var event_1 = require_event();
    var Entity = class extends transform_1.Transform {
      constructor() {
        super(...arguments);
        this.assetID = asset_1.AssetManager.newAssetID(this);
        this.name = `Entity_${this.assetID}`;
        this.eventEmitter = new event_1.EventEmitter();
        this.destroyed = false;
      }
      on(event, listener) {
        return this.eventEmitter.on(event, listener);
      }
      off(event, listener) {
        this.eventEmitter.off(event, listener);
      }
      __updateRecursive(time) {
        this.eventEmitter.emit("update", this, time);
        for (const entity of this.children)
          entity.__updateRecursive(time);
      }
      destroy() {
        this.destroyed = true;
        asset_1.AssetManager.destroy(this.assetID);
      }
    };
    exports.Entity = Entity;
    var EntityManager = class {
      constructor() {
        this.entityMap = new Map();
        this._entities = [];
      }
      get entities() {
        return this._entities;
      }
      add(entity) {
        this.entityMap.set(entity.assetID, entity);
        this._entities = Array.from(this.entityMap.values());
      }
      removeRecursive(entity) {
        this.entityMap.delete(entity.assetID);
        for (const child of entity.children)
          this.removeRecursive(child);
      }
      remove(entity) {
        this.removeRecursive(entity);
        if (entity.parent) {
          entity.parent.children.delete(entity);
        }
        this._entities = Array.from(this.entityMap.values());
      }
    };
    exports.EntityManager = EntityManager;
  });

  // zogra-renderer/dist/engine/camera.js
  var require_camera = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Camera = exports.Projection = void 0;
    var texture_1 = require_texture();
    var render_target_1 = require_render_target();
    var global_1 = require_global();
    var vec2_1 = require_vec22();
    var entity_1 = require_entity();
    var mat4_1 = require_mat42();
    var math_1 = require_math();
    var color_1 = require_color();
    var vec3_1 = require_vec32();
    var ray_1 = require_ray();
    var vec4_1 = require_vec42();
    var Projection;
    (function(Projection2) {
      Projection2[Projection2["Perspective"] = 0] = "Perspective";
      Projection2[Projection2["Orthographic"] = 1] = "Orthographic";
    })(Projection = exports.Projection || (exports.Projection = {}));
    var Camera = class extends entity_1.Entity {
      constructor(ctx = global_1.GlobalContext()) {
        super();
        this.output = render_target_1.RenderTarget.CanvasTarget;
        this.FOV = 30;
        this.near = 0.3;
        this.far = 1e3;
        this.viewHeight = 1;
        this.projection = Projection.Perspective;
        this.clearColor = color_1.Color.black;
        this.clearDepth = true;
        this.ctx = ctx;
      }
      get pixelSize() {
        if (this.output instanceof texture_1.RenderTexture)
          return vec2_1.vec2(this.output.width, this.output.height);
        else
          return vec2_1.vec2(this.ctx.width, this.ctx.height);
      }
      get aspectRatio() {
        return this.pixelSize.x / this.pixelSize.y;
      }
      get viewProjectionMatrix() {
        const matView = this.worldToLocalMatrix;
        const matProjection = this.projectionMatrix;
        return mat4_1.mat4.mul(matProjection, matView);
      }
      get projectionMatrix() {
        return this.projection === Projection.Perspective ? mat4_1.mat4.perspective(this.FOV * math_1.Deg2Rad, this.aspectRatio, this.near, this.far) : mat4_1.mat4.ortho(this.viewHeight, this.aspectRatio, this.near, this.far);
      }
      on(event, listener) {
        this.eventEmitter.on(event, listener);
      }
      off(event, listener) {
        this.eventEmitter.on(event, listener);
      }
      __preRender(context) {
        this.eventEmitter.emit("prerender", this, context);
      }
      __postRender(contect) {
        this.eventEmitter.emit("postrender", this, contect);
      }
      screenToRay(pos) {
        const p = this.screenToWorld(pos);
        return ray_1.ray(this.position, math_1.minus(vec3_1.vec3(p.x, p.y, p.z), this.position));
      }
      screenToWorld(pos) {
        const w = this.projection == Projection.Perspective ? this.near : 1;
        const ndcXY = this.screenToViewport(pos).mul(vec2_1.vec2(2, -2)).minus(vec2_1.vec2(1, -1));
        const clip = math_1.mul(vec4_1.vec4(ndcXY.x, ndcXY.y, -1, 1), w);
        const matVPInv = mat4_1.mat4.invert(this.viewProjectionMatrix);
        const p = mat4_1.mat4.mulVec4(matVPInv, clip);
        return vec3_1.vec3(p[0], p[1], p[2]);
      }
      screenToViewport(pos) {
        if (this.output === render_target_1.RenderTarget.CanvasTarget)
          return math_1.div(pos, vec2_1.vec2(this.ctx.width, this.ctx.height));
        else if (this.output instanceof texture_1.RenderTexture) {
          return math_1.div(pos, vec2_1.vec2(this.output.width, this.output.height));
        } else
          return vec2_1.vec2.zero();
      }
    };
    exports.Camera = Camera;
  });

  // zogra-renderer/dist/engine/render-object.js
  var require_render_object = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.RenderObject = void 0;
    var global_1 = require_global();
    var entity_1 = require_entity();
    var RenderObject = class extends entity_1.Entity {
      constructor(ctx = global_1.GlobalContext()) {
        super();
        this.meshes = [];
        this.materials = [];
        this.materials = [ctx.assets.materials.default];
      }
      on(event, listener) {
        this.eventEmitter.on(event, listener);
      }
      off(event, listener) {
        this.eventEmitter.off(event, listener);
      }
      __onRender(context, data) {
        this.eventEmitter.emit("render", this, context, data);
      }
    };
    exports.RenderObject = RenderObject;
  });

  // zogra-renderer/dist/engine/light.js
  var require_light = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Light = exports.LightType = void 0;
    var entity_1 = require_entity();
    var color_1 = require_color();
    var LightType;
    (function(LightType2) {
      LightType2[LightType2["Directional"] = 0] = "Directional";
      LightType2[LightType2["Point"] = 1] = "Point";
    })(LightType = exports.LightType || (exports.LightType = {}));
    var Light = class extends entity_1.Entity {
      constructor(type = LightType.Directional) {
        super();
        this.intensity = 1;
        this.color = color_1.Color.white;
        this.type = type;
      }
    };
    exports.Light = Light;
  });

  // zogra-renderer/dist/engine/scene.js
  var require_scene = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Scene = void 0;
    var entity_1 = require_entity();
    var event_1 = require_event();
    var core_1 = require_core();
    var Scene = class extends entity_1.EntityManager {
      constructor() {
        super();
        this.eventEmitter = new event_1.EventEmitter();
        this.assetID = core_1.AssetManager.newAssetID(this);
        this.name = `Scene_${this.assetID}`;
      }
      add(entity, parent) {
        super.add(entity);
        const type = entity.constructor;
        if (parent)
          entity.parent = parent;
        for (const child of entity.children)
          this.add(child, entity);
        this.eventEmitter.emit("entity-add", entity, parent ? parent : null);
      }
      remove(entity) {
        super.remove(entity);
        this.eventEmitter.emit("entity-remove", entity, entity.parent);
      }
      rootEntities() {
        return this._entities.filter((entity) => entity.parent === null);
      }
      getEntities() {
        return this._entities;
      }
      getEntitiesOfType(type) {
        return this.entities.filter((entity) => entity instanceof type);
      }
      on(event, listener) {
        this.eventEmitter.on(event, listener);
      }
      off(event, listener) {
        this.eventEmitter.off(event, listener);
      }
      destroy() {
        this._entities = [];
        this.entityMap.clear();
        throw new Error("Method not implemented.");
      }
    };
    exports.Scene = Scene;
  });

  // zogra-renderer/dist/render-pipeline/render-data.js
  var require_render_data = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.RenderData = exports.RenderOrder = void 0;
    var render_object_1 = require_render_object();
    var light_1 = require_light();
    var mat4_1 = require_mat42();
    var RenderOrder;
    (function(RenderOrder2) {
      RenderOrder2[RenderOrder2["NearToFar"] = 0] = "NearToFar";
      RenderOrder2[RenderOrder2["FarToNear"] = 1] = "FarToNear";
    })(RenderOrder = exports.RenderOrder || (exports.RenderOrder = {}));
    var RenderData = class {
      constructor(camera, scene) {
        this.visibleObjects = [];
        this.visibleLights = [];
        this.camera = camera;
        this.visibleLights = scene.getEntitiesOfType(light_1.Light);
        this.visibleObjects = scene.getEntitiesOfType(render_object_1.RenderObject);
      }
      getVisibleObjects(renderOrder = RenderOrder.NearToFar) {
        const viewMat = this.camera.worldToLocalMatrix;
        let wrap = this.visibleObjects.map((obj) => ({pos: mat4_1.mat4.mulPoint(viewMat, obj.position), obj}));
        if (renderOrder === RenderOrder.NearToFar)
          wrap = wrap.sort((a, b) => a.pos.z - b.pos.z);
        else
          wrap = wrap.sort((a, b) => b.pos.z - a.pos.z);
        return wrap.map((t) => t.obj);
      }
      getVisibleLights() {
        return this.visibleLights;
      }
    };
    exports.RenderData = RenderData;
  });

  // zogra-renderer/dist/render-pipeline/debug-layer.js
  var require_debug_layer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.DebugLayerRenderer = void 0;
    var core_1 = require_core();
    var color_1 = require_color();
    var mat4_1 = require_mat42();
    var vec2_1 = require_vec22();
    var DebugLayerRenderer = class {
      constructor() {
        this.lines = new core_1.Lines();
      }
      drawLine(from, to, color = color_1.Color.white) {
        const verts = this.lines.verts;
        const lines = this.lines.lines;
        const colors = this.lines.colors;
        const base = verts.length;
        verts.push(from, to);
        colors.push(color, color);
        lines.push(base, base + 1);
        this.lines.verts = verts;
        this.lines.colors = colors;
        this.lines.lines = lines;
      }
      drawRect(min, max, color = color_1.Color.white) {
        this.drawLine(vec2_1.vec2(min.x, min.y).toVec3(), vec2_1.vec2(max.x, min.y).toVec3(), color);
        this.drawLine(vec2_1.vec2(max.x, min.y).toVec3(), vec2_1.vec2(max.x, max.y).toVec3(), color);
        this.drawLine(vec2_1.vec2(max.x, max.y).toVec3(), vec2_1.vec2(min.x, max.y).toVec3(), color);
        this.drawLine(vec2_1.vec2(min.x, max.y).toVec3(), vec2_1.vec2(min.x, min.y).toVec3(), color);
      }
      render(context, data) {
        context.renderer.drawLines(this.lines, mat4_1.mat4.identity(), context.renderer.assets.materials.ColoredLine);
        this.lines.clear();
      }
    };
    exports.DebugLayerRenderer = DebugLayerRenderer;
  });

  // zogra-renderer/dist/render-pipeline/preview-renderer.js
  var require_preview_renderer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.PreviewRenderer = void 0;
    var mat4_1 = require_mat42();
    var render_data_1 = require_render_data();
    var color_1 = require_color();
    var render_target_1 = require_render_target();
    var lines_1 = require_lines();
    var vec3_1 = require_vec32();
    var debug_layer_1 = require_debug_layer();
    var PreviewRenderer = class {
      constructor(renderer) {
        this.materialReplaceMap = new Map();
        this.debugLayer = new debug_layer_1.DebugLayerRenderer();
        this.renderer = renderer;
        const lineColor = color_1.rgba(1, 1, 1, 0.1);
        const lb = new lines_1.LineBuilder(0, renderer.gl);
        const Size = 10;
        const Grid = 1;
        for (let i = -Size; i <= Size; i += Grid) {
          lb.addLine([
            vec3_1.vec3(i, 0, -Size),
            vec3_1.vec3(i, 0, Size)
          ], lineColor);
          lb.addLine([
            vec3_1.vec3(-Size, 0, i),
            vec3_1.vec3(Size, 0, i)
          ], lineColor);
        }
        this.grid = lb.toLines();
      }
      render(context, cameras) {
        for (let i = 0; i < cameras.length; i++) {
          const data = new render_data_1.RenderData(cameras[i], context.scene);
          this.renderCamera(context, data);
        }
      }
      setupLight(context, data) {
        context.renderer.setGlobalUniform("uLightDir", "vec3", vec3_1.vec3(-1, 1, 0).normalize());
        context.renderer.setGlobalUniform("uAmbientSky", "color", color_1.rgb(0.2, 0.2, 0.2));
        context.renderer.setGlobalUniform("uLightPos", "vec3", data.camera.position);
        context.renderer.setGlobalUniform("uLightColor", "color", color_1.rgb(0.8, 0.8, 0.8));
      }
      renderCamera(context, data) {
        context.renderer.clear(color_1.rgb(0.3, 0.3, 0.3), true);
        const camera = data.camera;
        camera.__preRender(context);
        if (camera.output === render_target_1.RenderTarget.CanvasTarget)
          context.renderer.setRenderTarget(render_target_1.RenderTarget.CanvasTarget);
        else
          context.renderer.setRenderTarget(camera.output);
        context.renderer.clear(camera.clearColor, camera.clearDepth);
        context.renderer.setViewProjection(camera.worldToLocalMatrix, camera.projectionMatrix);
        context.renderer.setGlobalUniform("uCameraPos", "vec3", camera.position);
        this.setupLight(context, data);
        const objs = data.getVisibleObjects(render_data_1.RenderOrder.NearToFar);
        for (const obj of objs) {
          obj.__onRender(context, data);
          const modelMatrix = obj.localToWorldMatrix;
          for (let i = 0; i < obj.meshes.length; i++) {
            if (!obj.meshes[i])
              continue;
            const mat = obj.materials[i] || context.renderer.assets.materials.default;
            this.drawWithMaterial(obj.meshes[i], modelMatrix, mat);
          }
        }
        this.debugLayer.render(context, data);
        camera.__postRender(context);
      }
      renderGrid(context, data) {
        this.renderer.drawLines(this.grid, mat4_1.mat4.identity(), this.renderer.assets.materials.ColoredLine);
      }
      drawWithMaterial(mesh, transform, material) {
        if (this.materialReplaceMap.has(material.constructor))
          this.renderer.drawMesh(mesh, transform, this.materialReplaceMap.get(material.constructor));
        else
          this.renderer.drawMesh(mesh, transform, material);
      }
      replaceMaterial(MaterialType, material) {
        this.materialReplaceMap.set(MaterialType, material);
      }
    };
    exports.PreviewRenderer = PreviewRenderer;
  });

  // zogra-renderer/dist/engine/zogra-engine.js
  var require_zogra_engine = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.ZograEngine = void 0;
    var scene_1 = require_scene();
    var preview_renderer_1 = require_preview_renderer();
    var camera_1 = require_camera();
    var core_1 = require_core();
    var event_1 = require_event();
    var ZograEngine = class {
      constructor(canvas, RenderPipeline = preview_renderer_1.PreviewRenderer) {
        this._time = {deltaTime: 0, time: 0};
        this.renderer = new core_1.ZograRenderer(canvas, canvas.width, canvas.height);
        this.renderPipeline = new RenderPipeline(this.renderer);
        this._scene = new scene_1.Scene();
        this.eventEmitter = new event_1.EventEmitter();
      }
      get time() {
        return this._time;
      }
      get scene() {
        return this._scene;
      }
      set scene(value) {
        const previous = this._scene;
        this._scene = value;
        this.eventEmitter.emit("scene-change", value, previous);
      }
      renderScene() {
        const cameras = this.scene.getEntitiesOfType(camera_1.Camera);
        this.renderPipeline.render({
          renderer: this.renderer,
          scene: this.scene
        }, cameras);
      }
      updateEntities(time) {
        const entities = this.scene.rootEntities();
        for (const entity of entities)
          entity.__updateRecursive(time);
      }
      start() {
        let previousDelay = 0;
        let startDelay = 0;
        const update = (delay) => {
          if (previousDelay === 0) {
            startDelay = previousDelay = delay;
            requestAnimationFrame(update);
            return;
          }
          const time = (delay - startDelay) / 1e3;
          const dt = (delay - previousDelay) / 1e3;
          previousDelay = delay;
          const t = {
            time,
            deltaTime: dt
          };
          this._time = t;
          this.eventEmitter.emit("update", t);
          this.updateEntities(t);
          this.eventEmitter.emit("render", this.scene.getEntitiesOfType(camera_1.Camera));
          this.renderScene();
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
      on(event, listener) {
        this.eventEmitter.on(event, listener);
      }
      off(event, listener) {
        this.eventEmitter.off(event, listener);
      }
    };
    exports.ZograEngine = ZograEngine;
  });

  // zogra-renderer/dist/engine/input.js
  var require_input = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Keys = exports.InputManager = exports.KeyState = void 0;
    var vec2_1 = require_vec22();
    var math_1 = require_math();
    var util_1 = require_util();
    var KeyState;
    (function(KeyState2) {
      KeyState2[KeyState2["Pressed"] = 1] = "Pressed";
      KeyState2[KeyState2["Released"] = 0] = "Released";
    })(KeyState = exports.KeyState || (exports.KeyState = {}));
    var InputStates = class {
      constructor() {
        this.keyStates = new Map();
        this.keyStatesThisFrame = new Map();
        this.mousePos = vec2_1.vec2.zero();
        this.mouseDelta = vec2_1.vec2.zero();
        this.wheelDelta = 0;
      }
    };
    var InputManager = class {
      constructor(options = {}) {
        var _a, _b;
        this.preventBrowserShortcut = true;
        this.states = new util_1.DoubleBuffer(() => new InputStates());
        this.eventTarget = options.target || window;
        if (options.bound)
          this.bound = options.bound;
        else if ((_a = options.target) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect)
          this.bound = options.target;
        this.pointerLockElement = (_b = options.pointerLockElement) !== null && _b !== void 0 ? _b : document.body;
        this.eventTarget.addEventListener("keydown", (e) => {
          this.states.back.keyStates.set(e.keyCode, KeyState.Pressed);
          this.states.back.keyStatesThisFrame.set(e.keyCode, KeyState.Pressed);
          if (this.preventBrowserShortcut && e.ctrlKey && (e.keyCode == Keys.S || e.keyCode == Keys.W)) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
        this.eventTarget.addEventListener("keyup", (e) => {
          this.states.back.keyStates.set(e.keyCode, KeyState.Released);
          this.states.back.keyStatesThisFrame.set(e.keyCode, KeyState.Released);
        });
        this.eventTarget.addEventListener("mousedown", (e) => {
          var _a2;
          const rect = (_a2 = this.bound) === null || _a2 === void 0 ? void 0 : _a2.getBoundingClientRect();
          if (rect) {
            const offset = vec2_1.vec2(rect.left, rect === null || rect === void 0 ? void 0 : rect.top);
            const pos = math_1.minus(vec2_1.vec2(e.clientX, e.clientY), offset);
            if (pos.x < 0 || pos.y < 0 || pos.x > rect.width || pos.y > rect.height)
              return;
          }
          this.states.back.keyStates.set(Keys.Mouse0 + e.button, KeyState.Pressed);
          this.states.back.keyStatesThisFrame.set(Keys.Mouse0 + e.button, KeyState.Pressed);
        });
        this.eventTarget.addEventListener("mouseup", (e) => {
          var _a2;
          const rect = (_a2 = this.bound) === null || _a2 === void 0 ? void 0 : _a2.getBoundingClientRect();
          if (rect) {
            const offset = vec2_1.vec2(rect.left, rect === null || rect === void 0 ? void 0 : rect.top);
            const pos = math_1.minus(vec2_1.vec2(e.clientX, e.clientY), offset);
            if (pos.x < 0 || pos.y < 0 || pos.x > rect.width || pos.y > rect.height)
              return;
          }
          this.states.back.keyStates.set(Keys.Mouse0 + e.button, KeyState.Released);
          this.states.back.keyStatesThisFrame.set(Keys.Mouse0 + e.button, KeyState.Released);
        });
        this.eventTarget.addEventListener("mousemove", (e) => {
          var _a2, _b2, _c;
          const rect = (_a2 = this.bound) === null || _a2 === void 0 ? void 0 : _a2.getBoundingClientRect();
          const offset = vec2_1.vec2((_b2 = rect === null || rect === void 0 ? void 0 : rect.left) !== null && _b2 !== void 0 ? _b2 : 0, (_c = rect === null || rect === void 0 ? void 0 : rect.top) !== null && _c !== void 0 ? _c : 0);
          const pos = math_1.minus(vec2_1.vec2(e.clientX, e.clientY), offset);
          this.states.back.mouseDelta.plus(vec2_1.vec2(e.movementX, e.movementY));
          this.states.back.mousePos = pos;
        });
        this.eventTarget.addEventListener("wheel", (e) => {
          this.states.back.wheelDelta = e.deltaY;
        });
        for (const key in Keys) {
          if (!isNaN(key))
            continue;
          if (Keys.hasOwnProperty(key)) {
            this.states.back.keyStates.set(Keys[key], KeyState.Released);
          }
        }
        window.addEventListener("beforeunload", (e) => {
          if (this.preventBrowserShortcut && (this.states.back.keyStates.get(Keys.W) === KeyState.Pressed || this.states.back.keyStates.get(Keys.Control) === KeyState.Pressed)) {
            e.preventDefault();
            e.returnValue = "Really want to quit?";
          }
        });
      }
      get pointerPosition() {
        return this.states.current.mousePos;
      }
      get pointerDelta() {
        return this.states.current.mouseDelta;
      }
      get wheelDelta() {
        return this.states.current.wheelDelta;
      }
      getKey(key) {
        return this.states.current.keyStates.get(key) === KeyState.Pressed ? true : false;
      }
      getKeyDown(key) {
        return this.states.current.keyStatesThisFrame.get(key) === KeyState.Pressed ? true : false;
      }
      getKeyUp(key) {
        return this.states.current.keyStatesThisFrame.get(key) === KeyState.Released ? true : false;
      }
      update() {
        this.states.update();
        this.states.back.keyStatesThisFrame.clear();
        this.states.back.mouseDelta = vec2_1.vec2.zero();
        this.states.back.wheelDelta = 0;
        for (const [key, value] of this.states.current.keyStates) {
          this.states.back.keyStates.set(key, value);
        }
        this.states.back.mousePos = this.states.current.mousePos;
      }
      lockPointer() {
        this.pointerLockElement.requestPointerLock();
      }
      releasePointer() {
        document.exitPointerLock();
      }
    };
    exports.InputManager = InputManager;
    var Keys;
    (function(Keys2) {
      Keys2[Keys2["BackSpace"] = 8] = "BackSpace";
      Keys2[Keys2["Tab"] = 9] = "Tab";
      Keys2[Keys2["Clear"] = 12] = "Clear";
      Keys2[Keys2["Enter"] = 13] = "Enter";
      Keys2[Keys2["Shift"] = 16] = "Shift";
      Keys2[Keys2["Control"] = 17] = "Control";
      Keys2[Keys2["Alt"] = 18] = "Alt";
      Keys2[Keys2["Pause"] = 19] = "Pause";
      Keys2[Keys2["CapsLock"] = 20] = "CapsLock";
      Keys2[Keys2["Escape"] = 27] = "Escape";
      Keys2[Keys2["Space"] = 32] = "Space";
      Keys2[Keys2["Prior"] = 33] = "Prior";
      Keys2[Keys2["Next"] = 34] = "Next";
      Keys2[Keys2["End"] = 35] = "End";
      Keys2[Keys2["Home"] = 36] = "Home";
      Keys2[Keys2["Left"] = 37] = "Left";
      Keys2[Keys2["Up"] = 38] = "Up";
      Keys2[Keys2["Right"] = 39] = "Right";
      Keys2[Keys2["Down"] = 40] = "Down";
      Keys2[Keys2["Select"] = 41] = "Select";
      Keys2[Keys2["Print"] = 42] = "Print";
      Keys2[Keys2["Execute"] = 43] = "Execute";
      Keys2[Keys2["Insert"] = 45] = "Insert";
      Keys2[Keys2["Delete"] = 46] = "Delete";
      Keys2[Keys2["Help"] = 47] = "Help";
      Keys2[Keys2["Num0"] = 48] = "Num0";
      Keys2[Keys2["Num1"] = 49] = "Num1";
      Keys2[Keys2["Num2"] = 50] = "Num2";
      Keys2[Keys2["Num3"] = 51] = "Num3";
      Keys2[Keys2["Num4"] = 52] = "Num4";
      Keys2[Keys2["Num5"] = 53] = "Num5";
      Keys2[Keys2["Num6"] = 54] = "Num6";
      Keys2[Keys2["Num7"] = 55] = "Num7";
      Keys2[Keys2["Num8"] = 56] = "Num8";
      Keys2[Keys2["Num9"] = 57] = "Num9";
      Keys2[Keys2["A"] = 65] = "A";
      Keys2[Keys2["B"] = 66] = "B";
      Keys2[Keys2["C"] = 67] = "C";
      Keys2[Keys2["D"] = 68] = "D";
      Keys2[Keys2["E"] = 69] = "E";
      Keys2[Keys2["F"] = 70] = "F";
      Keys2[Keys2["G"] = 71] = "G";
      Keys2[Keys2["H"] = 72] = "H";
      Keys2[Keys2["I"] = 73] = "I";
      Keys2[Keys2["J"] = 74] = "J";
      Keys2[Keys2["K"] = 75] = "K";
      Keys2[Keys2["L"] = 76] = "L";
      Keys2[Keys2["M"] = 77] = "M";
      Keys2[Keys2["N"] = 78] = "N";
      Keys2[Keys2["O"] = 79] = "O";
      Keys2[Keys2["P"] = 80] = "P";
      Keys2[Keys2["Q"] = 81] = "Q";
      Keys2[Keys2["R"] = 82] = "R";
      Keys2[Keys2["S"] = 83] = "S";
      Keys2[Keys2["T"] = 84] = "T";
      Keys2[Keys2["U"] = 85] = "U";
      Keys2[Keys2["V"] = 86] = "V";
      Keys2[Keys2["W"] = 87] = "W";
      Keys2[Keys2["X"] = 88] = "X";
      Keys2[Keys2["Y"] = 89] = "Y";
      Keys2[Keys2["Z"] = 90] = "Z";
      Keys2[Keys2["KP0"] = 96] = "KP0";
      Keys2[Keys2["KP1"] = 97] = "KP1";
      Keys2[Keys2["KP2"] = 98] = "KP2";
      Keys2[Keys2["KP3"] = 99] = "KP3";
      Keys2[Keys2["KP4"] = 100] = "KP4";
      Keys2[Keys2["KP5"] = 101] = "KP5";
      Keys2[Keys2["KP6"] = 102] = "KP6";
      Keys2[Keys2["KP7"] = 103] = "KP7";
      Keys2[Keys2["KP8"] = 104] = "KP8";
      Keys2[Keys2["KP9"] = 105] = "KP9";
      Keys2[Keys2["KPMultiply"] = 106] = "KPMultiply";
      Keys2[Keys2["KPAdd"] = 107] = "KPAdd";
      Keys2[Keys2["KPSeparator"] = 108] = "KPSeparator";
      Keys2[Keys2["KPSubtract"] = 109] = "KPSubtract";
      Keys2[Keys2["KPDecimal"] = 110] = "KPDecimal";
      Keys2[Keys2["KPDivide"] = 111] = "KPDivide";
      Keys2[Keys2["F1"] = 112] = "F1";
      Keys2[Keys2["F2"] = 113] = "F2";
      Keys2[Keys2["F3"] = 114] = "F3";
      Keys2[Keys2["F4"] = 115] = "F4";
      Keys2[Keys2["F5"] = 116] = "F5";
      Keys2[Keys2["F6"] = 117] = "F6";
      Keys2[Keys2["F7"] = 118] = "F7";
      Keys2[Keys2["F8"] = 119] = "F8";
      Keys2[Keys2["F9"] = 120] = "F9";
      Keys2[Keys2["F10"] = 121] = "F10";
      Keys2[Keys2["F11"] = 122] = "F11";
      Keys2[Keys2["F12"] = 123] = "F12";
      Keys2[Keys2["F13"] = 124] = "F13";
      Keys2[Keys2["F14"] = 125] = "F14";
      Keys2[Keys2["F15"] = 126] = "F15";
      Keys2[Keys2["F16"] = 127] = "F16";
      Keys2[Keys2["F17"] = 128] = "F17";
      Keys2[Keys2["F18"] = 129] = "F18";
      Keys2[Keys2["F19"] = 130] = "F19";
      Keys2[Keys2["F20"] = 131] = "F20";
      Keys2[Keys2["F21"] = 132] = "F21";
      Keys2[Keys2["F22"] = 133] = "F22";
      Keys2[Keys2["F23"] = 134] = "F23";
      Keys2[Keys2["F24"] = 135] = "F24";
      Keys2[Keys2["NumLock"] = 136] = "NumLock";
      Keys2[Keys2["ScrollLock"] = 137] = "ScrollLock";
      Keys2[Keys2["Mouse0"] = 256] = "Mouse0";
      Keys2[Keys2["Mouse1"] = 257] = "Mouse1";
      Keys2[Keys2["Mouse2"] = 258] = "Mouse2";
      Keys2[Keys2["Mouse3"] = 259] = "Mouse3";
      Keys2[Keys2["Mouse4"] = 260] = "Mouse4";
      Keys2[Keys2["Mouse5"] = 261] = "Mouse5";
      Keys2[Keys2["Mouse6"] = 262] = "Mouse6";
    })(Keys = exports.Keys || (exports.Keys = {}));
  });

  // zogra-renderer/dist/engine/engine.js
  var require_engine = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    __exportStar2(require_camera(), exports);
    __exportStar2(require_render_object(), exports);
    __exportStar2(require_light(), exports);
    __exportStar2(require_entity(), exports);
    __exportStar2(require_scene(), exports);
    __exportStar2(require_transform(), exports);
    __exportStar2(require_zogra_engine(), exports);
    __exportStar2(require_input(), exports);
  });

  // zogra-renderer/dist/render-pipeline/render-pipeline.js
  var require_render_pipeline = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
  });

  // zogra-renderer/dist/render-pipeline/2d-default.js
  var require_d_default = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Default2DRenderPipeline = void 0;
    var render_data_1 = require_render_data();
    var render_target_1 = require_render_target();
    var debug_layer_1 = require_debug_layer();
    var Default2DRenderPipeline = class {
      constructor() {
        this.debuglayer = new debug_layer_1.DebugLayerRenderer();
      }
      render(renderer, cameras) {
        for (const camera of cameras) {
          const data = new render_data_1.RenderData(camera, renderer.scene);
          this.renderCamera(renderer, data);
        }
      }
      replaceMaterial(MaterialType, material) {
        throw new Error("Method not implemented.");
      }
      renderCamera(context, data) {
        const camera = data.camera;
        camera.__preRender(context);
        if (camera.output === render_target_1.RenderTarget.CanvasTarget)
          context.renderer.setRenderTarget(render_target_1.RenderTarget.CanvasTarget);
        else
          context.renderer.setRenderTarget(camera.output);
        context.renderer.clear(camera.clearColor, camera.clearDepth);
        context.renderer.setViewProjection(camera.worldToLocalMatrix, camera.projectionMatrix);
        const objs = data.getVisibleObjects(render_data_1.RenderOrder.FarToNear);
        for (const obj of objs) {
          obj.__onRender(context, data);
          const modelMatrix = obj.localToWorldMatrix;
          for (let i = 0; i < obj.meshes.length; i++) {
            if (!obj.meshes[i])
              continue;
            const mat = obj.materials[i] || context.renderer.assets.materials.default;
            mat.setProp("uCameraPos", "vec3", camera.position);
            context.renderer.drawMesh(obj.meshes[i], modelMatrix, mat);
          }
        }
        this.debuglayer.render(context, data);
        camera.__postRender(context);
      }
    };
    exports.Default2DRenderPipeline = Default2DRenderPipeline;
  });

  // zogra-renderer/dist/render-pipeline/rp.js
  var require_rp = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    __exportStar2(require_preview_renderer(), exports);
    __exportStar2(require_render_data(), exports);
    __exportStar2(require_render_pipeline(), exports);
    __exportStar2(require_debug_layer(), exports);
    __exportStar2(require_d_default(), exports);
  });

  // zogra-renderer/dist/plugins/assets-importer/types.js
  var require_types2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.AssetsPack = void 0;
    var AssetsPack = class {
      constructor() {
        this.mainAsset = null;
        this.assets = new Map();
      }
      add(name, asset) {
        asset.name = name;
        this.assets.set(name, asset);
      }
      setMain(asset) {
        this.mainAsset = asset;
      }
      get(Type) {
        for (const [name, asset] of this.assets) {
          if (asset instanceof Type)
            return asset;
        }
        return null;
      }
      getAll(Type) {
        return Array.from(this.assets.values()).filter((asset) => asset instanceof Type);
      }
    };
    exports.AssetsPack = AssetsPack;
  });

  // zogra-renderer/dist/plugins/assets-importer/assets-importer.js
  var require_assets_importer = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.AssetsImporter = void 0;
    var global_1 = require_global();
    __exportStar2(require_types2(), exports);
    var AssetsImporter = class {
      constructor(importers) {
        this.importers = importers;
      }
      async url(url, ctx = global_1.GlobalContext()) {
        const buffer = await fetch(url).then((r) => r.arrayBuffer());
        return await this.buffer(buffer, ctx);
      }
      async buffer(buffer, ctx = global_1.GlobalContext()) {
        const bufImporters = {};
        for (const key in this.importers) {
          bufImporters[key] = (options) => this.importers[key].import(buffer, options, ctx);
        }
        return bufImporters;
      }
    };
    exports.AssetsImporter = AssetsImporter;
  });

  // zogra-renderer/dist/plugins/texture-importer/texture-importer.js
  var require_texture_importer = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.TextureImporter = void 0;
    var core_1 = require_core();
    var global_1 = require_global();
    var texture_format_1 = require_texture_format();
    var assets_importer_1 = require_assets_importer();
    var Texture2DImporter = {
      import(buffer, options, ctx = global_1.GlobalContext()) {
        return new Promise((resolve, reject) => {
          const blob = new Blob([buffer]);
          const img = new Image();
          img.src = URL.createObjectURL(blob);
          const complete = () => {
            const defulatOptions = {
              width: img.width,
              height: img.height,
              filterMode: core_1.FilterMode.Linear,
              format: texture_format_1.TextureFormat.RGBA,
              mipmap: true,
              wrapMpde: core_1.WrapMode.Repeat
            };
            const opt = Object.assign(Object.assign({}, defulatOptions), options);
            const tex = new core_1.Texture2D(opt.width, opt.height, opt.format, opt.filterMode, ctx);
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
    exports.TextureImporter = new assets_importer_1.AssetsImporter(importers);
  });

  // zogra-renderer/dist/plugins/plugins.js
  var require_plugins = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    __exportStar2(require_assets_importer(), exports);
    __exportStar2(require_texture_importer(), exports);
  });

  // zogra-renderer/dist/utils/public-utils.js
  var require_public_utils = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    __exportStar2(require_mesh_builder(), exports);
  });

  // zogra-renderer/dist/utils/index.js
  var require_utils = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    __exportStar2(require_image_sizing(), exports);
  });

  // zogra-renderer/dist/index.js
  var require_dist = __commonJS((exports) => {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, {enumerable: true, get: function() {
        return m[k];
      }});
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", {enumerable: true, value: v});
    } : function(o, v) {
      o["default"] = v;
    });
    var __exportStar2 = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", {value: true});
    exports.Utils = exports.GlobalContext = exports.plugins = void 0;
    __exportStar2(require_types(), exports);
    __exportStar2(require_core(), exports);
    __exportStar2(require_engine(), exports);
    __exportStar2(require_rp(), exports);
    var pluginsExport = __importStar(require_plugins());
    exports.plugins = pluginsExport;
    __exportStar2(require_plugins(), exports);
    __exportStar2(require_public_utils(), exports);
    var global_1 = require_global();
    Object.defineProperty(exports, "GlobalContext", {enumerable: true, get: function() {
      return global_1.GlobalContext;
    }});
    var Utils2 = __importStar(require_utils());
    exports.Utils = Utils2;
  });

  // src/index.ts
  var require_src = __commonJS((exports, module) => {
    var import_zogra_renderer5 = __toModule(require_dist());
    var RaindropFX = class {
      constructor(options) {
        this.animHandle = 0;
        const canvas = options.canvas;
        const defaultOptions = {
          spawnInterval: [0.1, 0.1],
          spawnSize: [60, 100],
          spawnLimit: 2e3,
          viewport: new import_zogra_renderer5.Rect(import_zogra_renderer5.vec2.zero(), import_zogra_renderer5.vec2(canvas.width, canvas.height)),
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
        this.options.viewport = new import_zogra_renderer5.Rect(import_zogra_renderer5.vec2.zero(), import_zogra_renderer5.vec2(width, height));
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

  // src/renderer.ts
  var import_zogra_renderer3 = __toModule(require_dist());

  // assets/img/raindrop.png
  var raindrop_default = __toBinary("iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QIZBzY36WJJGwAAABJ0RVh0RmlsZSBOYW1lAM60serM4i0xjMwnJwAAOd9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMS0wMi0yNVQxNTo1NDo1MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNTVhOWVmYy1kMmYwLTBkNDItYTcwYS02ZGY5M2UwNjljYWE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2NjBiMDZmYi0xZjczLWFkNDQtYWQwMS1kNGU5ZDlhOTE4NDM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjYwYjA2ZmItMWY3My1hZDQ0LWFkMDEtZDRlOWQ5YTkxODQzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PsD6WFoAAAAYdEVYdFNvZnR3YXJlAEFkb2JlIFBob3Rvc2hvcDTLjmcAAAAPdEVYdFdyaXRlcgBTdXBlclBOR8XEr90AACAASURBVHja7V3pduPMCgTZz32f/LO4P6KFpllb7YyTKOfMxIvseFEVRUHT+L//wf1z/9w/f/RnuT+C++f++bs/z/sj+DU/+M1/j+6P/CaA++d3gnvWa7pJ4iaA++eHA/0d7+cmhpsA7p9fCPjR930Twk0AN+B/KInQTQg3Adw/7wUn/tD3SDch3ARwg/4zwF59XnrT36SLz3OTwU0Avwr4+A/+5uznpgvPS4Ov6yaCmwD+FOi/W1nQxeemgceO/s2bDG4C+Hjg4xuO/WQFMEIKV8ngJoKbAD4K+DOBjG98nVdVAQ6SAk0mg5sIbgL4McDHN98/gxCo8Dw0AHYsksFNBDcBfCzwr4L+Hfd9x/unpArAAmFklAbdRHATwE8H/qzb300Eo8DHJCHQAHDxJoKb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");

  // src/blur.ts
  var import_zogra_renderer = __toModule(require_dist());
  var import_texture_format = __toModule(require_texture_format());

  // src/shader/2d-vert.glsl
  var d_vert_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec3 aPos;\r\nin vec4 aColor;\r\nin vec2 aUV;\r\nin vec3 aNormal;\r\n\r\nuniform mat4 uTransformM;\r\nuniform mat4 uTransformVP;\r\nuniform mat4 uTransformMVP;\r\nuniform mat4 uTransformM_IT;\r\n\r\nout vec4 vColor;\r\nout vec4 vPos;\r\nout vec2 vUV;\r\nout vec3 vNormal;\r\nout vec3 vWorldPos;\r\n\r\nvoid main()\r\n{\r\n    gl_Position = uTransformMVP * vec4(aPos, 1);\r\n    vPos = gl_Position;\r\n    vColor = aColor;\r\n    vUV = aUV;\r\n    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r\n    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r\n    \r\n}";

  // src/shader/blur.glsl
  var blur_default = "#version 300 es\r\nprecision mediump float;\r\n\r\nin vec4 vColor;\r\nin vec4 vPos;\r\nin vec2 vUV;\r\n\r\nuniform sampler2D uMainTex;\r\nuniform vec4 uTexSize; // (w, h, 1/w, 1/h)\r\nuniform float uSampleOffset;\r\n\r\nout vec4 fragColor;\r\n\r\nvoid main()\r\n{\r\n    vec2 delta = vec2(-uSampleOffset, uSampleOffset);\r\n    vec4 color = \r\n      texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xx, vec2(0), vec2(1)))\r\n    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yx, vec2(0), vec2(1)))\r\n    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yy, vec2(0), vec2(1)))\r\n    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xy, vec2(0), vec2(1)));\r\n\r\n    color /= vec4(4.0);\r\n\r\n    fragColor = color.rgba;\r\n}";

  // src/blur.ts
  var MaterialBlur = class extends import_zogra_renderer.MaterialFromShader(new import_zogra_renderer.Shader(d_vert_default, blur_default)) {
    constructor() {
      super(...arguments);
      this.texture = null;
      this.textureSize = import_zogra_renderer.vec4.one();
      this.sampleOffset = 1;
    }
  };
  __decorate([
    import_zogra_renderer.shaderProp("uMainTex", "tex2d")
  ], MaterialBlur.prototype, "texture", 2);
  __decorate([
    import_zogra_renderer.shaderProp("uTexSize", "vec4")
  ], MaterialBlur.prototype, "textureSize", 2);
  __decorate([
    import_zogra_renderer.shaderProp("uSampleOffset", "float")
  ], MaterialBlur.prototype, "sampleOffset", 2);
  var BlurRenderer = class {
    constructor(renderer) {
      this.steps = [];
      this.mateiralBlur = new MaterialBlur();
      this.renderer = renderer;
    }
    init(texture) {
      if (!this.steps[0]) {
        this.steps[0] = new import_zogra_renderer.RenderTexture(texture.width, texture.height, false, texture.format, texture.filterMode);
        this.steps[0].wrapMode = import_zogra_renderer.WrapMode.Clamp;
        this.steps[0].updateParameters();
      }
      if (this.steps[0].width !== texture.width || this.steps[0].height !== texture.height)
        this.steps[0].resize(texture.width, texture.height, import_zogra_renderer.TextureResizing.Discard);
    }
    blur(texture, iteration = 4, output = this.steps[0]) {
      if (!this.steps[0])
        this.steps[0] = new import_zogra_renderer.RenderTexture(texture.width, texture.height, false, texture.format, texture.filterMode);
      output = output || this.steps[0];
      if (this.steps[0].width !== texture.width || this.steps[0].height !== texture.height)
        this.steps[0].resize(texture.width, texture.height, import_zogra_renderer.TextureResizing.Discard);
      this.downSample(texture, iteration);
      return this.upSample(iteration, output);
    }
    downSample(input, iteration) {
      for (let i = 1; i <= iteration; i++) {
        const downSize = import_zogra_renderer.vec2.floor(import_zogra_renderer.div(input.size, import_zogra_renderer.vec2(2)));
        if (!this.steps[i]) {
          this.steps[i] = new import_zogra_renderer.RenderTexture(downSize.x, downSize.y, false, import_texture_format.TextureFormat.RGBA, import_zogra_renderer.FilterMode.Linear);
          this.steps[i].wrapMode = import_zogra_renderer.WrapMode.Clamp;
          this.steps[i].updateParameters();
        }
        const output = this.steps[i];
        if (output.width !== downSize.x || output.height !== downSize.y)
          output.resize(downSize.x, downSize.y, import_zogra_renderer.TextureResizing.Discard);
        this.mateiralBlur.texture = input;
        this.mateiralBlur.textureSize = import_zogra_renderer.vec4(input.width, input.height, 1 / input.width, 1 / input.height);
        this.mateiralBlur.sampleOffset = 1;
        this.renderer.blit(input, output, this.mateiralBlur);
        input = output;
      }
    }
    upSample(iteration, finalOutput = this.steps[0]) {
      let input = this.steps[iteration];
      for (let i = iteration - 1; i >= 0; i--) {
        const upSize = import_zogra_renderer.mul(input.size, import_zogra_renderer.vec2(2));
        if (!this.steps[i]) {
          this.steps[i] = new import_zogra_renderer.RenderTexture(upSize.x, upSize.y, false, import_texture_format.TextureFormat.RGBA, import_zogra_renderer.FilterMode.Linear);
          this.steps[i].wrapMode = import_zogra_renderer.WrapMode.Clamp;
          this.steps[i].updateParameters();
        }
        const output = i === 0 ? finalOutput : this.steps[i];
        this.mateiralBlur.texture = input;
        this.mateiralBlur.textureSize = import_zogra_renderer.vec4(input.width, input.height, 1 / input.width, 1 / input.height);
        this.mateiralBlur.sampleOffset = 1;
        this.renderer.blit(input, output, this.mateiralBlur);
        input = output;
      }
      return input;
    }
  };

  // src/random.ts
  var import_zogra_renderer2 = __toModule(require_dist());
  function randomInRect(rect) {
    return import_zogra_renderer2.vec2(Math.random(), Math.random()).mul(rect.size).plus(rect.min);
  }
  function random() {
    return Math.random() * 2 - 1;
  }
  function randomRange(min, max) {
    return Math.random() * (max - min) + min;
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
  var RaindropMaterial = class extends import_zogra_renderer3.MaterialFromShader(new import_zogra_renderer3.Shader(raindrop_vert_default, raindrop_frag_default, {
    blendRGB: [import_zogra_renderer3.Blending.OneMinusDstColor, import_zogra_renderer3.Blending.OneMinusSrcColor],
    depth: import_zogra_renderer3.DepthTest.Disable,
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
    import_zogra_renderer3.shaderProp("uMainTex", "tex2d")
  ], RaindropMaterial.prototype, "texture", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uSize", "float")
  ], RaindropMaterial.prototype, "size", 2);
  var DropletMaterial = class extends import_zogra_renderer3.MaterialFromShader(new import_zogra_renderer3.Shader(droplet_vert_default, droplet_default, {
    blendRGB: [import_zogra_renderer3.Blending.OneMinusDstColor, import_zogra_renderer3.Blending.OneMinusSrcColor],
    depth: import_zogra_renderer3.DepthTest.Disable,
    zWrite: false,
    attributes: {
      size: "aSize",
      modelMatrix: "aModelMatrix"
    }
  })) {
    constructor() {
      super(...arguments);
      this.texture = null;
      this.spawnRect = import_zogra_renderer3.vec4(0, 0, 1, 1);
      this.sizeRange = import_zogra_renderer3.vec2(10, 20);
      this.seed = 1;
    }
  };
  __decorate([
    import_zogra_renderer3.shaderProp("uMainTex", "tex2d")
  ], DropletMaterial.prototype, "texture", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uSpawnRect", "vec4")
  ], DropletMaterial.prototype, "spawnRect", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uSizeRange", "vec2")
  ], DropletMaterial.prototype, "sizeRange", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uSeed", "float")
  ], DropletMaterial.prototype, "seed", 2);
  var FinalCompose = class extends import_zogra_renderer3.MaterialFromShader(new import_zogra_renderer3.Shader(d_vert_default, compose_default, {
    blend: [import_zogra_renderer3.Blending.SrcAlpha, import_zogra_renderer3.Blending.OneMinusSrcAlpha],
    depth: import_zogra_renderer3.DepthTest.Disable,
    zWrite: false
  })) {
    constructor() {
      super(...arguments);
      this.background = null;
      this.backgroundSize = import_zogra_renderer3.vec4.one();
      this.raindropTex = null;
      this.dropletTex = null;
      this.mistTex = null;
      this.smoothRaindrop = import_zogra_renderer3.vec2(0.95, 1);
      this.refractParams = import_zogra_renderer3.vec2(0.4, 0.6);
      this.lightPos = import_zogra_renderer3.vec4(0.5, 0.5, 2, 1);
      this.diffuseLight = new import_zogra_renderer3.Color(0.3, 0.3, 0.3, 0.8);
      this.specularParams = import_zogra_renderer3.vec4(1, 1, 1, 32);
      this.bump = 1;
    }
  };
  __decorate([
    import_zogra_renderer3.shaderProp("uMainTex", "tex2d")
  ], FinalCompose.prototype, "background", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uBackgroundSize", "vec4")
  ], FinalCompose.prototype, "backgroundSize", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uRaindropTex", "tex2d")
  ], FinalCompose.prototype, "raindropTex", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uDropletTex", "tex2d")
  ], FinalCompose.prototype, "dropletTex", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uMistTex", "tex2d")
  ], FinalCompose.prototype, "mistTex", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uSmoothRaindrop", "vec2")
  ], FinalCompose.prototype, "smoothRaindrop", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uRefractParams", "vec2")
  ], FinalCompose.prototype, "refractParams", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uLightPos", "vec4")
  ], FinalCompose.prototype, "lightPos", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uDiffuseColor", "color")
  ], FinalCompose.prototype, "diffuseLight", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uSpecularParams", "vec4")
  ], FinalCompose.prototype, "specularParams", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uBump", "float")
  ], FinalCompose.prototype, "bump", 2);
  var RaindropErase = class extends import_zogra_renderer3.SimpleTexturedMaterial(new import_zogra_renderer3.Shader(d_vert_default, erase_default, {
    blendRGB: [import_zogra_renderer3.Blending.Zero, import_zogra_renderer3.Blending.OneMinusSrcAlpha],
    blendAlpha: [import_zogra_renderer3.Blending.Zero, import_zogra_renderer3.Blending.OneMinusSrcAlpha]
  })) {
    constructor() {
      super(...arguments);
      this.eraserSize = import_zogra_renderer3.vec2(0.93, 1);
    }
  };
  __decorate([
    import_zogra_renderer3.shaderProp("uEraserSmooth", "vec2")
  ], RaindropErase.prototype, "eraserSize", 2);
  var MistAccumulate = import_zogra_renderer3.SimpleTexturedMaterial(new import_zogra_renderer3.Shader(d_vert_default, d_frag_default, {
    blend: [import_zogra_renderer3.Blending.One, import_zogra_renderer3.Blending.One]
  }));
  var MistBackgroundCompose = class extends import_zogra_renderer3.SimpleTexturedMaterial(new import_zogra_renderer3.Shader(d_vert_default, bg_mist_default, {
    blend: [import_zogra_renderer3.Blending.SrcAlpha, import_zogra_renderer3.Blending.OneMinusSrcAlpha]
  })) {
    constructor() {
      super(...arguments);
      this.mistColor = new import_zogra_renderer3.Color(0.01, 0.01, 0.01, 1);
      this.mistTex = null;
    }
  };
  __decorate([
    import_zogra_renderer3.shaderProp("uMistColor", "color")
  ], MistBackgroundCompose.prototype, "mistColor", 2);
  __decorate([
    import_zogra_renderer3.shaderProp("uMistTex", "tex2d")
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
      this.mesh = import_zogra_renderer3.MeshBuilder.quad();
      this.raindropBuffer = new import_zogra_renderer3.RenderBuffer({
        size: "float",
        modelMatrix: "mat4"
      }, 3e3);
      this.renderer = new import_zogra_renderer3.ZograRenderer(options.canvas);
      this.renderer.gl.getExtension("EXT_color_buffer_float");
      this.options = options;
      this.projectionMatrix = import_zogra_renderer3.mat4.ortho(0, options.width, 0, options.height, 1, -1);
      this.raindropComposeTex = new import_zogra_renderer3.RenderTexture(options.width, options.height, false);
      this.background = new import_zogra_renderer3.RenderTexture(options.width, options.height, false);
      this.dropletTexture = new import_zogra_renderer3.RenderTexture(options.width, options.height, false);
      this.blurryBackground = new import_zogra_renderer3.RenderTexture(options.width, options.height, false);
      this.mistBackground = new import_zogra_renderer3.RenderTexture(options.width, options.height, false);
      this.mistTexture = new import_zogra_renderer3.RenderTexture(options.width, options.height, false, import_zogra_renderer3.TextureFormat.R16F);
      this.blurRenderer = new BlurRenderer(this.renderer);
      this.renderer.setViewProjection(import_zogra_renderer3.mat4.identity(), this.projectionMatrix);
    }
    async loadAssets() {
      this.raindropTex = await import_zogra_renderer3.TextureImporter.buffer(raindrop_default).then((t) => t.tex2d());
      this.matrlRaindrop.texture = this.raindropTex;
      this.matrlDroplet.texture = this.raindropTex;
      await this.reloadBackground();
    }
    async reloadBackground() {
      this.originalBackground?.destroy();
      if (typeof this.options.background === "string") {
        this.originalBackground = await import_zogra_renderer3.TextureImporter.url(this.options.background).then((t) => t.tex2d({wrapMpde: import_zogra_renderer3.WrapMode.Clamp}));
        this.originalBackground.wrapMode = import_zogra_renderer3.WrapMode.Clamp;
        this.originalBackground.updateParameters();
      } else {
        this.originalBackground = new import_zogra_renderer3.Texture2D();
        this.originalBackground.setData(this.options.background);
        this.originalBackground.updateParameters();
      }
      const [srcRect, dstRect] = import_zogra_renderer3.Utils.imageResize(this.originalBackground.size, this.background.size, import_zogra_renderer3.Utils.ImageSizing.Cover);
      this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials.blitCopy, srcRect, dstRect);
      this.background.generateMipmap();
      this.blurBackground();
    }
    resize() {
      this.renderer.setSize(this.options.width, this.options.height);
      this.projectionMatrix = import_zogra_renderer3.mat4.ortho(0, this.options.width, 0, this.options.height, 1, -1);
      this.renderer.setViewProjection(import_zogra_renderer3.mat4.identity(), this.projectionMatrix);
      this.raindropComposeTex.resize(this.options.width, this.options.height);
      this.background.resize(this.options.width, this.options.height);
      this.dropletTexture.resize(this.options.width, this.options.height);
      this.blurryBackground.resize(this.options.width, this.options.height);
      this.mistBackground.resize(this.options.width, this.options.height);
      this.mistTexture.resize(this.options.width, this.options.height);
      const [srcRect, dstRect] = import_zogra_renderer3.Utils.imageResize(this.originalBackground.size, this.background.size, import_zogra_renderer3.Utils.ImageSizing.Cover);
      this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials.blitCopy, srcRect, dstRect);
      this.background.generateMipmap();
      this.blurBackground();
    }
    render(raindrops, time) {
      this.drawDroplet(time);
      this.drawMist(time.dt);
      this.drawRaindrops(raindrops);
      this.renderer.setRenderTarget(import_zogra_renderer3.RenderTarget.CanvasTarget);
      this.renderer.clear(import_zogra_renderer3.Color.black);
      this.drawBackground();
      this.matrlCompose.background = this.blurryBackground;
      this.matrlCompose.backgroundSize = import_zogra_renderer3.vec4(this.options.width, this.options.height, 1 / this.options.width, 1 / this.options.height);
      this.matrlCompose.raindropTex = this.raindropComposeTex;
      this.matrlCompose.dropletTex = this.dropletTexture;
      this.matrlCompose.mistTex = this.mistTexture;
      this.matrlCompose.smoothRaindrop = import_zogra_renderer3.vec2(...this.options.smoothRaindrop);
      this.matrlCompose.refractParams = import_zogra_renderer3.vec2(this.options.refractBase, this.options.refractScale);
      this.matrlCompose.lightPos = import_zogra_renderer3.vec4(...this.options.raindropLightPos);
      this.matrlCompose.diffuseLight = new import_zogra_renderer3.Color(...this.options.raindropDiffuseLight, this.options.raindropShadowOffset);
      this.matrlCompose.specularParams = import_zogra_renderer3.vec4(...this.options.raindropSpecularLight, this.options.raindropSpecularShininess);
      this.matrlCompose.bump = this.options.raindropLightBump;
      this.renderer.blit(null, import_zogra_renderer3.RenderTarget.CanvasTarget, this.matrlCompose);
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
      this.renderer.blit(this.blurryBackground, import_zogra_renderer3.RenderTarget.CanvasTarget);
      if (this.options.mist) {
        this.matrlMistCompose.mistTex = this.mistTexture;
        this.matrlMistCompose.texture = this.mistBackground;
        this.matrlMistCompose.mistColor = new import_zogra_renderer3.Color(...this.options.mistColor);
        this.renderer.blit(this.mistBackground, import_zogra_renderer3.RenderTarget.CanvasTarget, this.matrlMistCompose);
      }
    }
    drawRaindrops(raindrops) {
      if (raindrops.length > this.raindropBuffer.length)
        this.raindropBuffer.resize(this.raindropBuffer.length * 2);
      this.renderer.setRenderTarget(this.raindropComposeTex);
      this.renderer.clear(import_zogra_renderer3.Color.black.transparent());
      for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];
        const model = import_zogra_renderer3.mat4.rts(import_zogra_renderer3.quat.identity(), raindrop.pos.toVec3(), raindrop.size.toVec3(1));
        this.raindropBuffer[i].modelMatrix.set(model);
        this.raindropBuffer[i].size[0] = raindrop.size.x / 100;
      }
      switch (this.options.raindropCompose) {
        case "smoother":
          this.matrlRaindrop.shader.setPipelineStates({
            blendRGB: [import_zogra_renderer3.Blending.OneMinusDstColor, import_zogra_renderer3.Blending.OneMinusSrcColor]
          });
          this.matrlDroplet.shader.setPipelineStates({
            blendRGB: [import_zogra_renderer3.Blending.OneMinusDstColor, import_zogra_renderer3.Blending.OneMinusSrcColor]
          });
          break;
        case "harder":
          this.matrlRaindrop.shader.setPipelineStates({
            blendRGB: [import_zogra_renderer3.Blending.One, import_zogra_renderer3.Blending.OneMinusSrcAlpha]
          });
          this.matrlDroplet.shader.setPipelineStates({
            blendRGB: [import_zogra_renderer3.Blending.One, import_zogra_renderer3.Blending.OneMinusSrcAlpha]
          });
          break;
      }
      this.renderer.drawMeshInstance(this.mesh, this.raindropBuffer, this.matrlRaindrop, raindrops.length);
      this.matrlErase.eraserSize = import_zogra_renderer3.vec2(...this.options.raindropEraserSize);
      this.renderer.blit(this.raindropComposeTex, this.dropletTexture, this.matrlErase);
      if (this.options.mist)
        this.renderer.blit(this.raindropComposeTex, this.mistTexture, this.matrlErase);
    }
    drawDroplet(time) {
      this.renderer.setRenderTarget(this.dropletTexture);
      const count = this.options.dropletsPerSeconds * time.dt;
      this.matrlDroplet.spawnRect = import_zogra_renderer3.vec4(0, 0, this.options.width, this.options.height);
      this.matrlDroplet.sizeRange = import_zogra_renderer3.vec2(...this.options.dropletSize);
      this.matrlDroplet.seed = randomRange(0, 133);
      this.renderer.drawMeshProceduralInstance(this.mesh, this.matrlDroplet, count);
    }
  };

  // src/raindrop.ts
  var import_zogra_renderer4 = __toModule(require_dist());

  // src/utils.ts
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  // src/raindrop.ts
  var RainDrop = class {
    constructor(simulator, pos, size, density = 1) {
      this.density = 1;
      this.velocity = import_zogra_renderer4.vec2.zero();
      this.destroied = false;
      this._mass = 0;
      this._size = import_zogra_renderer4.vec2.zero();
      this.resistance = 0;
      this.shifting = 0;
      this.nextRandomTime = 0;
      this.pos = pos;
      this.simulator = simulator;
      this.density = density;
      this.lastTrailPos = pos.clone();
      this.nextTrailDistance = randomRange(...simulator.options.trailDistance);
      this.spread = import_zogra_renderer4.vec2(simulator.options.initialSpread);
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
      if (import_zogra_renderer4.Vector2.distanceSquared(this.lastTrailPos, this.pos) > this.nextTrailDistance * this.nextTrailDistance) {
        this.split();
      }
    }
    split() {
      if (this.mass < 1e3)
        return;
      let size = this.size.x * randomRange(...this.simulator.options.trailDropSize);
      const pos = import_zogra_renderer4.plus(import_zogra_renderer4.vec2(randomRange(-5, 5), this.size.y / 4), this.pos);
      let trailDrop = this.simulator.spawner.spawn(pos.clone(), size, this.simulator.options.trailDropDensity);
      trailDrop.spread = import_zogra_renderer4.vec2(0.1, Math.abs(this.velocity.y) * 0.01 * this.options.trailSpread);
      trailDrop.parent = this;
      this.mass -= trailDrop.mass;
      this.simulator.add(trailDrop);
      this.lastTrailPos = this.pos.clone();
      this.nextTrailDistance = randomRange(...this.simulator.options.trailDistance);
    }
    randomMotion() {
      const maxResistance = lerp(...this.simulator.options.spawnSize, 1 - this.simulator.options.slipRate) ** 2 * 4;
      this.resistance = randomRange(0, 1) * this.options.gravity * maxResistance;
      this.shifting = random() * randomRange(...this.simulator.options.xShifting);
    }
    merge(target) {
      const selfMomentum = import_zogra_renderer4.mul(this.velocity, this.mass);
      const targetMomentum = import_zogra_renderer4.mul(target.velocity, target.mass);
      const momentum = import_zogra_renderer4.plus(selfMomentum, targetMomentum);
      this.mass += target.mass;
      this.velocity = import_zogra_renderer4.div(momentum, this.mass);
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
      const len = super.push(raindrop);
      raindrop.gridIdx = len - 1;
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
      for (let i = base; i < this.grid.length; i++)
        this.grid[i] = new CollisionGrid();
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
      for (let i = 0; i < this.raindrops.length; i++) {
        if (this.raindrops[i].destroied) {
          this.raindrops[i].grid?.delete(this.raindrops[i]);
          this.raindrops[i] = this.raindrops[this.raindrops.length - 1];
          this.raindrops.length--;
        }
      }
    }
    raindropUpdate(time) {
      for (let i = 0; i < this.raindrops.length; i++) {
        const raindrop = this.raindrops[i];
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
      for (let i = 0; i < this.raindrops.length; i++) {
        const raindrop = this.raindrops[i];
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
              let distance2 = Math.sqrt(dx * dx + dy * dy);
              if (distance2 - raindrop.mergeDistance - other.mergeDistance < 0) {
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
