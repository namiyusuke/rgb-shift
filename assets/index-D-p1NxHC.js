(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const no = "162",
  ih = 0,
  Do = 1,
  rh = 2,
  xc = 1,
  sh = 2,
  bn = 3,
  Jn = 0,
  Ut = 1,
  Cn = 2,
  Yn = 0,
  Qi = 1,
  Uo = 2,
  Io = 3,
  No = 4,
  ah = 5,
  _i = 100,
  oh = 101,
  lh = 102,
  Oo = 103,
  Fo = 104,
  ch = 200,
  uh = 201,
  hh = 202,
  fh = 203,
  Pa = 204,
  La = 205,
  dh = 206,
  ph = 207,
  mh = 208,
  _h = 209,
  gh = 210,
  vh = 211,
  xh = 212,
  Mh = 213,
  Sh = 214,
  Eh = 0,
  Th = 1,
  yh = 2,
  xs = 3,
  Ah = 4,
  bh = 5,
  wh = 6,
  Rh = 7,
  Mc = 0,
  Ch = 1,
  Ph = 2,
  Kn = 0,
  Lh = 1,
  Dh = 2,
  Uh = 3,
  Ih = 4,
  Nh = 5,
  Oh = 6,
  Fh = 7,
  Sc = 300,
  rr = 301,
  sr = 302,
  Da = 303,
  Ua = 304,
  Ls = 306,
  Ia = 1e3,
  an = 1001,
  Na = 1002,
  Rt = 1003,
  Bo = 1004,
  _r = 1005,
  Lt = 1006,
  Vs = 1007,
  vi = 1008,
  $n = 1009,
  Bh = 1010,
  zh = 1011,
  io = 1012,
  Ec = 1013,
  kn = 1014,
  Pn = 1015,
  Rr = 1016,
  Tc = 1017,
  yc = 1018,
  Mi = 1020,
  Gh = 1021,
  on = 1023,
  Hh = 1024,
  Vh = 1025,
  Si = 1026,
  ar = 1027,
  kh = 1028,
  Ac = 1029,
  Wh = 1030,
  bc = 1031,
  wc = 1033,
  ks = 33776,
  Ws = 33777,
  Xs = 33778,
  qs = 33779,
  zo = 35840,
  Go = 35841,
  Ho = 35842,
  Vo = 35843,
  Rc = 36196,
  ko = 37492,
  Wo = 37496,
  Xo = 37808,
  qo = 37809,
  Yo = 37810,
  Ko = 37811,
  $o = 37812,
  Zo = 37813,
  jo = 37814,
  Jo = 37815,
  Qo = 37816,
  el = 37817,
  tl = 37818,
  nl = 37819,
  il = 37820,
  rl = 37821,
  Ys = 36492,
  sl = 36494,
  al = 36495,
  Xh = 36283,
  ol = 36284,
  ll = 36285,
  cl = 36286,
  qh = 3200,
  Yh = 3201,
  Kh = 0,
  $h = 1,
  Vn = "",
  un = "srgb",
  ti = "srgb-linear",
  ro = "display-p3",
  Ds = "display-p3-linear",
  Ms = "linear",
  Ze = "srgb",
  Ss = "rec709",
  Es = "p3",
  Di = 7680,
  ul = 519,
  Zh = 512,
  jh = 513,
  Jh = 514,
  Cc = 515,
  Qh = 516,
  ef = 517,
  tf = 518,
  nf = 519,
  hl = 35044,
  fl = "300 es",
  Oa = 1035,
  Ln = 2e3,
  Ts = 2001;
class dr {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const St = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Ks = Math.PI / 180,
  Fa = 180 / Math.PI;
function Fr() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    St[r & 255] +
    St[(r >> 8) & 255] +
    St[(r >> 16) & 255] +
    St[(r >> 24) & 255] +
    "-" +
    St[e & 255] +
    St[(e >> 8) & 255] +
    "-" +
    St[((e >> 16) & 15) | 64] +
    St[(e >> 24) & 255] +
    "-" +
    St[(t & 63) | 128] +
    St[(t >> 8) & 255] +
    "-" +
    St[(t >> 16) & 255] +
    St[(t >> 24) & 255] +
    St[n & 255] +
    St[(n >> 8) & 255] +
    St[(n >> 16) & 255] +
    St[(n >> 24) & 255]
  ).toLowerCase();
}
function Dt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function rf(r, e) {
  return ((r % e) + e) % e;
}
function $s(r, e, t) {
  return (1 - t) * r + t * e;
}
function dl(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function Ba(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function gr(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Pt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Be {
  constructor(e = 0, t = 0) {
    (Be.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (this.x = i[0] * t + i[3] * n + i[6]), (this.y = i[1] * t + i[4] * n + i[7]), this;
  }
  min(e) {
    return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this;
  }
  max(e) {
    return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this;
  }
  clamp(e, t) {
    return (this.x = Math.max(e.x, Math.min(t.x, this.x))), (this.y = Math.max(e.y, Math.min(t.y, this.y))), this;
  }
  clampScalar(e, t) {
    return (this.x = Math.max(e, Math.min(t, this.x))), (this.y = Math.max(e, Math.min(t, this.y))), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Dt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * i + e.x), (this.y = s * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class De {
  constructor(e, t, n, i, s, o, a, l, c) {
    (De.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, s, o, a, l, c);
  }
  set(e, t, n, i, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e), (u[1] = i), (u[2] = a), (u[3] = t), (u[4] = s), (u[5] = l), (u[6] = n), (u[7] = o), (u[8] = c), this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      o = n[0],
      a = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      h = n[7],
      f = n[2],
      m = n[5],
      g = n[8],
      _ = i[0],
      d = i[3],
      p = i[6],
      S = i[1],
      v = i[4],
      E = i[7],
      b = i[2],
      A = i[5],
      y = i[8];
    return (
      (s[0] = o * _ + a * S + l * b),
      (s[3] = o * d + a * v + l * A),
      (s[6] = o * p + a * E + l * y),
      (s[1] = c * _ + u * S + h * b),
      (s[4] = c * d + u * v + h * A),
      (s[7] = c * p + u * E + h * y),
      (s[2] = f * _ + m * S + g * b),
      (s[5] = f * d + m * v + g * A),
      (s[8] = f * p + m * E + g * y),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return t * o * u - t * a * c - n * s * u + n * a * l + i * s * c - i * o * l;
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = u * o - a * c,
      f = a * l - u * s,
      m = c * s - o * l,
      g = t * h + n * f + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return (
      (e[0] = h * _),
      (e[1] = (i * c - u * n) * _),
      (e[2] = (a * n - i * o) * _),
      (e[3] = f * _),
      (e[4] = (u * t - i * l) * _),
      (e[5] = (i * s - a * t) * _),
      (e[6] = m * _),
      (e[7] = (n * l - c * t) * _),
      (e[8] = (o * t - n * s) * _),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this
    );
  }
  scale(e, t) {
    return this.premultiply(Zs.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Zs.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Zs.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Zs = new De();
function Pc(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function Cr(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function sf() {
  const r = Cr("canvas");
  return (r.style.display = "block"), r;
}
const pl = {};
function af(r) {
  r in pl || ((pl[r] = !0), console.warn(r));
}
const ml = new De().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199),
  _l = new De().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735),
  Xr = {
    [ti]: { transfer: Ms, primaries: Ss, toReference: (r) => r, fromReference: (r) => r },
    [un]: {
      transfer: Ze,
      primaries: Ss,
      toReference: (r) => r.convertSRGBToLinear(),
      fromReference: (r) => r.convertLinearToSRGB(),
    },
    [Ds]: {
      transfer: Ms,
      primaries: Es,
      toReference: (r) => r.applyMatrix3(_l),
      fromReference: (r) => r.applyMatrix3(ml),
    },
    [ro]: {
      transfer: Ze,
      primaries: Es,
      toReference: (r) => r.convertSRGBToLinear().applyMatrix3(_l),
      fromReference: (r) => r.applyMatrix3(ml).convertLinearToSRGB(),
    },
  },
  of = new Set([ti, Ds]),
  Xe = {
    enabled: !0,
    _workingColorSpace: ti,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(r) {
      if (!of.has(r)) throw new Error(`Unsupported working color space, "${r}".`);
      this._workingColorSpace = r;
    },
    convert: function (r, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return r;
      const n = Xr[e].toReference,
        i = Xr[t].fromReference;
      return i(n(r));
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this._workingColorSpace);
    },
    getPrimaries: function (r) {
      return Xr[r].primaries;
    },
    getTransfer: function (r) {
      return r === Vn ? Ms : Xr[r].transfer;
    },
  };
function er(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function js(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let Ui;
class Lc {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Ui === void 0 && (Ui = Cr("canvas")), (Ui.width = e.width), (Ui.height = e.height);
      const n = Ui.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), (t = Ui);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Cr("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let o = 0; o < s.length; o++) s[o] = er(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(er(t[n] / 255) * 255))
          : (t[n] = er(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e
      );
  }
}
let lf = 0;
class Dc {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: lf++ }),
      (this.uuid = Fr()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, a = i.length; o < a; o++) i[o].isDataTexture ? s.push(Js(i[o].image)) : s.push(Js(i[o]));
      } else s = Js(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Js(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? Lc.getDataURL(r)
    : r.data
    ? { data: Array.from(r.data), width: r.width, height: r.height, type: r.data.constructor.name }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let cf = 0,
  ln = class ps extends dr {
    constructor(
      e = ps.DEFAULT_IMAGE,
      t = ps.DEFAULT_MAPPING,
      n = an,
      i = an,
      s = Lt,
      o = vi,
      a = on,
      l = $n,
      c = ps.DEFAULT_ANISOTROPY,
      u = Vn
    ) {
      super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: cf++ }),
        (this.uuid = Fr()),
        (this.name = ""),
        (this.source = new Dc(e)),
        (this.mipmaps = []),
        (this.mapping = t),
        (this.channel = 0),
        (this.wrapS = n),
        (this.wrapT = i),
        (this.magFilter = s),
        (this.minFilter = o),
        (this.anisotropy = c),
        (this.format = a),
        (this.internalFormat = null),
        (this.type = l),
        (this.offset = new Be(0, 0)),
        (this.repeat = new Be(1, 1)),
        (this.center = new Be(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new De()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.colorSpace = u),
        (this.userData = {}),
        (this.version = 0),
        (this.onUpdate = null),
        (this.isRenderTargetTexture = !1),
        (this.needsPMREMUpdate = !1);
    }
    get image() {
      return this.source.data;
    }
    set image(e = null) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return (
        (this.name = e.name),
        (this.source = e.source),
        (this.mipmaps = e.mipmaps.slice(0)),
        (this.mapping = e.mapping),
        (this.channel = e.channel),
        (this.wrapS = e.wrapS),
        (this.wrapT = e.wrapT),
        (this.magFilter = e.magFilter),
        (this.minFilter = e.minFilter),
        (this.anisotropy = e.anisotropy),
        (this.format = e.format),
        (this.internalFormat = e.internalFormat),
        (this.type = e.type),
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        (this.rotation = e.rotation),
        (this.matrixAutoUpdate = e.matrixAutoUpdate),
        this.matrix.copy(e.matrix),
        (this.generateMipmaps = e.generateMipmaps),
        (this.premultiplyAlpha = e.premultiplyAlpha),
        (this.flipY = e.flipY),
        (this.unpackAlignment = e.unpackAlignment),
        (this.colorSpace = e.colorSpace),
        (this.userData = JSON.parse(JSON.stringify(e.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
      const n = {
        metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(e) {
      if (this.mapping !== Sc) return e;
      if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
        switch (this.wrapS) {
          case Ia:
            e.x = e.x - Math.floor(e.x);
            break;
          case an:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case Na:
            Math.abs(Math.floor(e.x) % 2) === 1 ? (e.x = Math.ceil(e.x) - e.x) : (e.x = e.x - Math.floor(e.x));
            break;
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case Ia:
            e.y = e.y - Math.floor(e.y);
            break;
          case an:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case Na:
            Math.abs(Math.floor(e.y) % 2) === 1 ? (e.y = Math.ceil(e.y) - e.y) : (e.y = e.y - Math.floor(e.y));
            break;
        }
      return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
      e === !0 && (this.version++, (this.source.needsUpdate = !0));
    }
  };
ln.DEFAULT_IMAGE = null;
ln.DEFAULT_MAPPING = Sc;
ln.DEFAULT_ANISOTROPY = 1;
class xt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (xt.prototype.isVector4 = !0), (this.x = e), (this.y = t), (this.z = n), (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w !== void 0 ? e.w : 1), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), (this.w = e.w + t.w), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), (this.w += e.w * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), (this.w = e.w - t.w), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s),
      (this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s),
      (this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s),
      (this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      h = l[8],
      f = l[1],
      m = l[5],
      g = l[9],
      _ = l[2],
      d = l[6],
      p = l[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(h - _) < 0.01 && Math.abs(g - d) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(h + _) < 0.1 && Math.abs(g + d) < 0.1 && Math.abs(c + m + p - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const v = (c + 1) / 2,
        E = (m + 1) / 2,
        b = (p + 1) / 2,
        A = (u + f) / 4,
        y = (h + _) / 4,
        P = (g + d) / 4;
      return (
        v > E && v > b
          ? v < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(v)), (i = A / n), (s = y / n))
          : E > b
          ? E < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(E)), (n = A / i), (s = P / i))
          : b < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(b)), (n = y / s), (i = P / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let S = Math.sqrt((d - g) * (d - g) + (h - _) * (h - _) + (f - u) * (f - u));
    return (
      Math.abs(S) < 0.001 && (S = 1),
      (this.x = (d - g) / S),
      (this.y = (h - _) / S),
      (this.z = (f - u) / S),
      (this.w = Math.acos((c + m + p - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), (this.w = e[t + 3]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), (e[t + 3] = this.w), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), (this.w = e.getW(t)), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), (this.w = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class uf extends dr {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new xt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new xt(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: Lt,
        depthBuffer: !0,
        stencilBuffer: !1,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n
    );
    const s = new ln(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (s.flipY = !1),
      (s.generateMipmaps = n.generateMipmaps),
      (s.internalFormat = n.internalFormat),
      (this.textures = []);
    const o = n.count;
    for (let a = 0; a < o; a++) (this.textures[a] = s.clone()), (this.textures[a].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let i = 0, s = this.textures.length; i < s; i++)
        (this.textures[i].image.width = e), (this.textures[i].image.height = t), (this.textures[i].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let n = 0, i = e.textures.length; n < i; n++)
      (this.textures[n] = e.textures[n].clone()), (this.textures[n].isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Dc(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class wi extends uf {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class Uc extends ln {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Rt),
      (this.minFilter = Rt),
      (this.wrapR = an),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class hf extends ln {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = Rt),
      (this.minFilter = Rt),
      (this.wrapR = an),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Br {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0), (this._x = e), (this._y = t), (this._z = n), (this._w = i);
  }
  static slerpFlat(e, t, n, i, s, o, a) {
    let l = n[i + 0],
      c = n[i + 1],
      u = n[i + 2],
      h = n[i + 3];
    const f = s[o + 0],
      m = s[o + 1],
      g = s[o + 2],
      _ = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
      return;
    }
    if (a === 1) {
      (e[t + 0] = f), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = _);
      return;
    }
    if (h !== _ || l !== f || c !== m || u !== g) {
      let d = 1 - a;
      const p = l * f + c * m + u * g + h * _,
        S = p >= 0 ? 1 : -1,
        v = 1 - p * p;
      if (v > Number.EPSILON) {
        const b = Math.sqrt(v),
          A = Math.atan2(b, p * S);
        (d = Math.sin(d * A) / b), (a = Math.sin(a * A) / b);
      }
      const E = a * S;
      if (((l = l * d + f * E), (c = c * d + m * E), (u = u * d + g * E), (h = h * d + _ * E), d === 1 - a)) {
        const b = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        (l *= b), (c *= b), (u *= b), (h *= b);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const a = n[i],
      l = n[i + 1],
      c = n[i + 2],
      u = n[i + 3],
      h = s[o],
      f = s[o + 1],
      m = s[o + 2],
      g = s[o + 3];
    return (
      (e[t] = a * g + u * h + l * m - c * f),
      (e[t + 1] = l * g + u * f + c * h - a * m),
      (e[t + 2] = c * g + u * m + a * f - l * h),
      (e[t + 3] = u * g - a * h - l * f - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (this._x = e), (this._y = t), (this._z = n), (this._w = i), this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (this._x = e.x), (this._y = e.y), (this._z = e.z), (this._w = e.w), this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      i = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(n / 2),
      u = a(i / 2),
      h = a(s / 2),
      f = l(n / 2),
      m = l(i / 2),
      g = l(s / 2);
    switch (o) {
      case "XYZ":
        (this._x = f * u * h + c * m * g),
          (this._y = c * m * h - f * u * g),
          (this._z = c * u * g + f * m * h),
          (this._w = c * u * h - f * m * g);
        break;
      case "YXZ":
        (this._x = f * u * h + c * m * g),
          (this._y = c * m * h - f * u * g),
          (this._z = c * u * g - f * m * h),
          (this._w = c * u * h + f * m * g);
        break;
      case "ZXY":
        (this._x = f * u * h - c * m * g),
          (this._y = c * m * h + f * u * g),
          (this._z = c * u * g + f * m * h),
          (this._w = c * u * h - f * m * g);
        break;
      case "ZYX":
        (this._x = f * u * h - c * m * g),
          (this._y = c * m * h + f * u * g),
          (this._z = c * u * g - f * m * h),
          (this._w = c * u * h + f * m * g);
        break;
      case "YZX":
        (this._x = f * u * h + c * m * g),
          (this._y = c * m * h + f * u * g),
          (this._z = c * u * g - f * m * h),
          (this._w = c * u * h - f * m * g);
        break;
      case "XZY":
        (this._x = f * u * h - c * m * g),
          (this._y = c * m * h - f * u * g),
          (this._z = c * u * g + f * m * h),
          (this._w = c * u * h + f * m * g);
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      h = t[10],
      f = n + a + h;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      (this._w = 0.25 / m), (this._x = (u - l) * m), (this._y = (s - c) * m), (this._z = (o - i) * m);
    } else if (n > a && n > h) {
      const m = 2 * Math.sqrt(1 + n - a - h);
      (this._w = (u - l) / m), (this._x = 0.25 * m), (this._y = (i + o) / m), (this._z = (s + c) / m);
    } else if (a > h) {
      const m = 2 * Math.sqrt(1 + a - n - h);
      (this._w = (s - c) / m), (this._x = (i + o) / m), (this._y = 0.25 * m), (this._z = (l + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + h - n - a);
      (this._w = (o - i) / m), (this._x = (s + c) / m), (this._y = (l + u) / m), (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Dt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + o * a + i * c - s * l),
      (this._y = i * u + o * l + s * a - n * c),
      (this._z = s * u + o * c + n * l - i * a),
      (this._w = o * u - n * a - i * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (a < 0 ? ((this._w = -e._w), (this._x = -e._x), (this._y = -e._y), (this._z = -e._z), (a = -a)) : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, a),
      h = Math.sin((1 - t) * u) / c,
      f = Math.sin(t * u) / c;
    return (
      (this._w = o * h + this._w * f),
      (this._x = n * h + this._x * f),
      (this._y = i * h + this._y * f),
      (this._z = s * h + this._z * f),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      s = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]), (this._y = e[t + 1]), (this._z = e[t + 2]), (this._w = e[t + 3]), this._onChangeCallback(), this
    );
  }
  toArray(e = [], t = 0) {
    return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._w), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class G {
  constructor(e = 0, t = 0, n = 0) {
    (G.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), (this.x = e), (this.y = t), (this.z = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this;
  }
  applyEuler(e) {
    return this.applyQuaternion(gl.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(gl.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = 2 * (o * i - a * n),
      u = 2 * (a * t - s * i),
      h = 2 * (s * n - o * t);
    return (
      (this.x = t + l * c + o * h - a * u),
      (this.y = n + l * u + a * c - s * h),
      (this.z = i + l * h + s * u - o * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), (this.z = Math.min(this.z, e.z)), this;
  }
  max(e) {
    return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), (this.z = Math.max(this.z, e.z)), this;
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), (this.z = Math.floor(this.z)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), (this.z = Math.round(this.z)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), (this.z = Math.trunc(this.z)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), (this.z += (e.z - this.z) * t), this;
  }
  lerpVectors(e, t, n) {
    return (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), (this.z = e.z + (t.z - e.z) * n), this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (this.x = i * l - s * a), (this.y = s * o - n * l), (this.z = n * a - i * o), this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Qs.copy(this).projectOnVector(e), this.sub(Qs);
  }
  reflect(e) {
    return this.sub(Qs.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Dt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (this.x = i * Math.sin(n)), (this.y = Math.cos(t) * e), (this.z = i * Math.cos(n)), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Qs = new G(),
  gl = new Br();
class zr {
  constructor(e = new G(1 / 0, 1 / 0, 1 / 0), t = new G(-1 / 0, -1 / 0, -1 / 0)) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(tn.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(tn.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = tn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (this.min.x = this.min.y = this.min.z = 1 / 0), (this.max.x = this.max.y = this.max.z = -1 / 0), this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let o = 0, a = s.count; o < a; o++)
          e.isMesh === !0 ? e.getVertexPosition(o, tn) : tn.fromBufferAttribute(s, o),
            tn.applyMatrix4(e.matrixWorld),
            this.expandByPoint(tn);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(), qr.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(), qr.copy(n.boundingBox)),
          qr.applyMatrix4(e.matrixWorld),
          this.union(qr);
    }
    const i = e.children;
    for (let s = 0, o = i.length; s < o; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, tn), tn.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(vr),
      Yr.subVectors(this.max, vr),
      Ii.subVectors(e.a, vr),
      Ni.subVectors(e.b, vr),
      Oi.subVectors(e.c, vr),
      On.subVectors(Ni, Ii),
      Fn.subVectors(Oi, Ni),
      si.subVectors(Ii, Oi);
    let t = [
      0,
      -On.z,
      On.y,
      0,
      -Fn.z,
      Fn.y,
      0,
      -si.z,
      si.y,
      On.z,
      0,
      -On.x,
      Fn.z,
      0,
      -Fn.x,
      si.z,
      0,
      -si.x,
      -On.y,
      On.x,
      0,
      -Fn.y,
      Fn.x,
      0,
      -si.y,
      si.x,
      0,
    ];
    return !ea(t, Ii, Ni, Oi, Yr) || ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !ea(t, Ii, Ni, Oi, Yr))
      ? !1
      : (Kr.crossVectors(On, Fn), (t = [Kr.x, Kr.y, Kr.z]), ea(t, Ii, Ni, Oi, Yr));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, tn).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), (e.radius = this.getSize(tn).length() * 0.5)), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Sn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Sn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Sn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Sn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Sn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Sn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Sn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Sn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Sn),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Sn = [new G(), new G(), new G(), new G(), new G(), new G(), new G(), new G()],
  tn = new G(),
  qr = new zr(),
  Ii = new G(),
  Ni = new G(),
  Oi = new G(),
  On = new G(),
  Fn = new G(),
  si = new G(),
  vr = new G(),
  Yr = new G(),
  Kr = new G(),
  ai = new G();
function ea(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    ai.fromArray(r, s);
    const a = i.x * Math.abs(ai.x) + i.y * Math.abs(ai.y) + i.z * Math.abs(ai.z),
      l = e.dot(ai),
      c = t.dot(ai),
      u = n.dot(ai);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const ff = new zr(),
  xr = new G(),
  ta = new G();
class so {
  constructor(e = new G(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : ff.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++) i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), (this.radius = this.radius * e.getMaxScaleOnAxis()), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    xr.subVectors(e, this.center);
    const t = xr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(xr, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (ta.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(xr.copy(e.center).add(ta)),
            this.expandByPoint(xr.copy(e.center).sub(ta))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const En = new G(),
  na = new G(),
  $r = new G(),
  Bn = new G(),
  ia = new G(),
  Zr = new G(),
  ra = new G();
class df {
  constructor(e = new G(), t = new G(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, En)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = En.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (En.copy(this.origin).addScaledVector(this.direction, t), En.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    na.copy(e).add(t).multiplyScalar(0.5), $r.copy(t).sub(e).normalize(), Bn.copy(this.origin).sub(na);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot($r),
      a = Bn.dot(this.direction),
      l = -Bn.dot($r),
      c = Bn.lengthSq(),
      u = Math.abs(1 - o * o);
    let h, f, m, g;
    if (u > 0)
      if (((h = o * l - a), (f = o * a - l), (g = s * u), h >= 0))
        if (f >= -g)
          if (f <= g) {
            const _ = 1 / u;
            (h *= _), (f *= _), (m = h * (h + o * f + 2 * a) + f * (o * h + f + 2 * l) + c);
          } else (f = s), (h = Math.max(0, -(o * f + a))), (m = -h * h + f * (f + 2 * l) + c);
        else (f = -s), (h = Math.max(0, -(o * f + a))), (m = -h * h + f * (f + 2 * l) + c);
      else
        f <= -g
          ? ((h = Math.max(0, -(-o * s + a))),
            (f = h > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -h * h + f * (f + 2 * l) + c))
          : f <= g
          ? ((h = 0), (f = Math.min(Math.max(-s, -l), s)), (m = f * (f + 2 * l) + c))
          : ((h = Math.max(0, -(o * s + a))),
            (f = h > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -h * h + f * (f + 2 * l) + c));
    else (f = o > 0 ? -s : s), (h = Math.max(0, -(o * f + a))), (m = -h * h + f * (f + 2 * l) + c);
    return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy(na).addScaledVector($r, f), m;
  }
  intersectSphere(e, t) {
    En.subVectors(e.center, this.origin);
    const n = En.dot(this.direction),
      i = En.dot(En) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const o = Math.sqrt(s - i),
      a = n - o,
      l = n + o;
    return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      f = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - f.x) * c), (i = (e.max.x - f.x) * c))
        : ((n = (e.max.x - f.x) * c), (i = (e.min.x - f.x) * c)),
      u >= 0
        ? ((s = (e.min.y - f.y) * u), (o = (e.max.y - f.y) * u))
        : ((s = (e.max.y - f.y) * u), (o = (e.min.y - f.y) * u)),
      n > o ||
      s > i ||
      ((s > n || isNaN(n)) && (n = s),
      (o < i || isNaN(i)) && (i = o),
      h >= 0
        ? ((a = (e.min.z - f.z) * h), (l = (e.max.z - f.z) * h))
        : ((a = (e.max.z - f.z) * h), (l = (e.min.z - f.z) * h)),
      n > l || a > i) ||
      ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, En) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    ia.subVectors(t, e), Zr.subVectors(n, e), ra.crossVectors(ia, Zr);
    let o = this.direction.dot(ra),
      a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    Bn.subVectors(this.origin, e);
    const l = a * this.direction.dot(Zr.crossVectors(Bn, Zr));
    if (l < 0) return null;
    const c = a * this.direction.dot(ia.cross(Bn));
    if (c < 0 || l + c > o) return null;
    const u = -a * Bn.dot(ra);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ut {
  constructor(e, t, n, i, s, o, a, l, c, u, h, f, m, g, _, d) {
    (ut.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, s, o, a, l, c, u, h, f, m, g, _, d);
  }
  set(e, t, n, i, s, o, a, l, c, u, h, f, m, g, _, d) {
    const p = this.elements;
    return (
      (p[0] = e),
      (p[4] = t),
      (p[8] = n),
      (p[12] = i),
      (p[1] = s),
      (p[5] = o),
      (p[9] = a),
      (p[13] = l),
      (p[2] = c),
      (p[6] = u),
      (p[10] = h),
      (p[14] = f),
      (p[3] = m),
      (p[7] = g),
      (p[11] = _),
      (p[15] = d),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ut().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Fi.setFromMatrixColumn(e, 0).length(),
      s = 1 / Fi.setFromMatrixColumn(e, 1).length(),
      o = 1 / Fi.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      u = Math.cos(s),
      h = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * u,
        m = o * h,
        g = a * u,
        _ = a * h;
      (t[0] = l * u),
        (t[4] = -l * h),
        (t[8] = c),
        (t[1] = m + g * c),
        (t[5] = f - _ * c),
        (t[9] = -a * l),
        (t[2] = _ - f * c),
        (t[6] = g + m * c),
        (t[10] = o * l);
    } else if (e.order === "YXZ") {
      const f = l * u,
        m = l * h,
        g = c * u,
        _ = c * h;
      (t[0] = f + _ * a),
        (t[4] = g * a - m),
        (t[8] = o * c),
        (t[1] = o * h),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = m * a - g),
        (t[6] = _ + f * a),
        (t[10] = o * l);
    } else if (e.order === "ZXY") {
      const f = l * u,
        m = l * h,
        g = c * u,
        _ = c * h;
      (t[0] = f - _ * a),
        (t[4] = -o * h),
        (t[8] = g + m * a),
        (t[1] = m + g * a),
        (t[5] = o * u),
        (t[9] = _ - f * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === "ZYX") {
      const f = o * u,
        m = o * h,
        g = a * u,
        _ = a * h;
      (t[0] = l * u),
        (t[4] = g * c - m),
        (t[8] = f * c + _),
        (t[1] = l * h),
        (t[5] = _ * c + f),
        (t[9] = m * c - g),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === "YZX") {
      const f = o * l,
        m = o * c,
        g = a * l,
        _ = a * c;
      (t[0] = l * u),
        (t[4] = _ - f * h),
        (t[8] = g * h + m),
        (t[1] = h),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = m * h + g),
        (t[10] = f - _ * h);
    } else if (e.order === "XZY") {
      const f = o * l,
        m = o * c,
        g = a * l,
        _ = a * c;
      (t[0] = l * u),
        (t[4] = -h),
        (t[8] = c * u),
        (t[1] = f * h + _),
        (t[5] = o * u),
        (t[9] = m * h - g),
        (t[2] = g * h - m),
        (t[6] = a * u),
        (t[10] = _ * h + f);
    }
    return (t[3] = 0), (t[7] = 0), (t[11] = 0), (t[12] = 0), (t[13] = 0), (t[14] = 0), (t[15] = 1), this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(pf, e, mf);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Gt.subVectors(e, t),
      Gt.lengthSq() === 0 && (Gt.z = 1),
      Gt.normalize(),
      zn.crossVectors(n, Gt),
      zn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Gt.x += 1e-4) : (Gt.z += 1e-4), Gt.normalize(), zn.crossVectors(n, Gt)),
      zn.normalize(),
      jr.crossVectors(Gt, zn),
      (i[0] = zn.x),
      (i[4] = jr.x),
      (i[8] = Gt.x),
      (i[1] = zn.y),
      (i[5] = jr.y),
      (i[9] = Gt.y),
      (i[2] = zn.z),
      (i[6] = jr.z),
      (i[10] = Gt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      o = n[0],
      a = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      h = n[5],
      f = n[9],
      m = n[13],
      g = n[2],
      _ = n[6],
      d = n[10],
      p = n[14],
      S = n[3],
      v = n[7],
      E = n[11],
      b = n[15],
      A = i[0],
      y = i[4],
      P = i[8],
      D = i[12],
      x = i[1],
      w = i[5],
      Y = i[9],
      q = i[13],
      C = i[2],
      k = i[6],
      F = i[10],
      X = i[14],
      V = i[3],
      $ = i[7],
      Z = i[11],
      ee = i[15];
    return (
      (s[0] = o * A + a * x + l * C + c * V),
      (s[4] = o * y + a * w + l * k + c * $),
      (s[8] = o * P + a * Y + l * F + c * Z),
      (s[12] = o * D + a * q + l * X + c * ee),
      (s[1] = u * A + h * x + f * C + m * V),
      (s[5] = u * y + h * w + f * k + m * $),
      (s[9] = u * P + h * Y + f * F + m * Z),
      (s[13] = u * D + h * q + f * X + m * ee),
      (s[2] = g * A + _ * x + d * C + p * V),
      (s[6] = g * y + _ * w + d * k + p * $),
      (s[10] = g * P + _ * Y + d * F + p * Z),
      (s[14] = g * D + _ * q + d * X + p * ee),
      (s[3] = S * A + v * x + E * C + b * V),
      (s[7] = S * y + v * w + E * k + b * $),
      (s[11] = S * P + v * Y + E * F + b * Z),
      (s[15] = S * D + v * q + E * X + b * ee),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      h = e[6],
      f = e[10],
      m = e[14],
      g = e[3],
      _ = e[7],
      d = e[11],
      p = e[15];
    return (
      g * (+s * l * h - i * c * h - s * a * f + n * c * f + i * a * m - n * l * m) +
      _ * (+t * l * m - t * c * f + s * o * f - i * o * m + i * c * u - s * l * u) +
      d * (+t * c * h - t * a * m - s * o * h + n * o * m + s * a * u - n * c * u) +
      p * (-i * a * u - t * l * h + t * a * f + i * o * h - n * o * f + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z)) : ((i[12] = e), (i[13] = t), (i[14] = n)), this;
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      h = e[9],
      f = e[10],
      m = e[11],
      g = e[12],
      _ = e[13],
      d = e[14],
      p = e[15],
      S = h * d * c - _ * f * c + _ * l * m - a * d * m - h * l * p + a * f * p,
      v = g * f * c - u * d * c - g * l * m + o * d * m + u * l * p - o * f * p,
      E = u * _ * c - g * h * c + g * a * m - o * _ * m - u * a * p + o * h * p,
      b = g * h * l - u * _ * l - g * a * f + o * _ * f + u * a * d - o * h * d,
      A = t * S + n * v + i * E + s * b;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / A;
    return (
      (e[0] = S * y),
      (e[1] = (_ * f * s - h * d * s - _ * i * m + n * d * m + h * i * p - n * f * p) * y),
      (e[2] = (a * d * s - _ * l * s + _ * i * c - n * d * c - a * i * p + n * l * p) * y),
      (e[3] = (h * l * s - a * f * s - h * i * c + n * f * c + a * i * m - n * l * m) * y),
      (e[4] = v * y),
      (e[5] = (u * d * s - g * f * s + g * i * m - t * d * m - u * i * p + t * f * p) * y),
      (e[6] = (g * l * s - o * d * s - g * i * c + t * d * c + o * i * p - t * l * p) * y),
      (e[7] = (o * f * s - u * l * s + u * i * c - t * f * c - o * i * m + t * l * m) * y),
      (e[8] = E * y),
      (e[9] = (g * h * s - u * _ * s - g * n * m + t * _ * m + u * n * p - t * h * p) * y),
      (e[10] = (o * _ * s - g * a * s + g * n * c - t * _ * c - o * n * p + t * a * p) * y),
      (e[11] = (u * a * s - o * h * s - u * n * c + t * h * c + o * n * m - t * a * m) * y),
      (e[12] = b * y),
      (e[13] = (u * _ * i - g * h * i + g * n * f - t * _ * f - u * n * d + t * h * d) * y),
      (e[14] = (g * a * i - o * _ * i - g * n * l + t * _ * l + o * n * d - t * a * d) * y),
      (e[15] = (o * h * i - u * a * i + u * n * l - t * h * l - o * n * f + t * a * f) * y),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + n,
        c * a - i * l,
        c * l + i * a,
        0,
        c * a + i * l,
        u * a + n,
        u * l - i * o,
        0,
        c * l - i * a,
        u * l + i * o,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      u = o + o,
      h = a + a,
      f = s * c,
      m = s * u,
      g = s * h,
      _ = o * u,
      d = o * h,
      p = a * h,
      S = l * c,
      v = l * u,
      E = l * h,
      b = n.x,
      A = n.y,
      y = n.z;
    return (
      (i[0] = (1 - (_ + p)) * b),
      (i[1] = (m + E) * b),
      (i[2] = (g - v) * b),
      (i[3] = 0),
      (i[4] = (m - E) * A),
      (i[5] = (1 - (f + p)) * A),
      (i[6] = (d + S) * A),
      (i[7] = 0),
      (i[8] = (g + v) * y),
      (i[9] = (d - S) * y),
      (i[10] = (1 - (f + _)) * y),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Fi.set(i[0], i[1], i[2]).length();
    const o = Fi.set(i[4], i[5], i[6]).length(),
      a = Fi.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), (e.x = i[12]), (e.y = i[13]), (e.z = i[14]), nn.copy(this);
    const c = 1 / s,
      u = 1 / o,
      h = 1 / a;
    return (
      (nn.elements[0] *= c),
      (nn.elements[1] *= c),
      (nn.elements[2] *= c),
      (nn.elements[4] *= u),
      (nn.elements[5] *= u),
      (nn.elements[6] *= u),
      (nn.elements[8] *= h),
      (nn.elements[9] *= h),
      (nn.elements[10] *= h),
      t.setFromRotationMatrix(nn),
      (n.x = s),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, i, s, o, a = Ln) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      u = (2 * s) / (n - i),
      h = (t + e) / (t - e),
      f = (n + i) / (n - i);
    let m, g;
    if (a === Ln) (m = -(o + s) / (o - s)), (g = (-2 * o * s) / (o - s));
    else if (a === Ts) (m = -o / (o - s)), (g = (-o * s) / (o - s));
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = h),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = u),
      (l[9] = f),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, o, a = Ln) {
    const l = this.elements,
      c = 1 / (t - e),
      u = 1 / (n - i),
      h = 1 / (o - s),
      f = (t + e) * c,
      m = (n + i) * u;
    let g, _;
    if (a === Ln) (g = (o + s) * h), (_ = -2 * h);
    else if (a === Ts) (g = s * h), (_ = -1 * h);
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -f),
      (l[1] = 0),
      (l[5] = 2 * u),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = _),
      (l[14] = -g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Fi = new G(),
  nn = new ut(),
  pf = new G(0, 0, 0),
  mf = new G(1, 1, 1),
  zn = new G(),
  jr = new G(),
  Gt = new G(),
  vl = new ut(),
  xl = new Br();
class Dn {
  constructor(e = 0, t = 0, n = 0, i = Dn.DEFAULT_ORDER) {
    (this.isEuler = !0), (this._x = e), (this._y = t), (this._z = n), (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (this._x = e), (this._y = t), (this._z = n), (this._order = i), this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x), (this._y = e._y), (this._z = e._z), (this._order = e._order), this._onChangeCallback(), this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      o = i[4],
      a = i[8],
      l = i[1],
      c = i[5],
      u = i[9],
      h = i[2],
      f = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(Dt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(f, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-Dt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-h, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(Dt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(-h, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-Dt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(f, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(Dt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-h, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-Dt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(f, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return vl.makeRotationFromQuaternion(e), this.setFromRotationMatrix(vl, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return xl.setFromEuler(this), this.setFromQuaternion(xl, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (e[t] = this._x), (e[t + 1] = this._y), (e[t + 2] = this._z), (e[t + 3] = this._order), e;
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Dn.DEFAULT_ORDER = "XYZ";
class Ic {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let _f = 0;
const Ml = new G(),
  Bi = new Br(),
  Tn = new ut(),
  Jr = new G(),
  Mr = new G(),
  gf = new G(),
  vf = new Br(),
  Sl = new G(1, 0, 0),
  El = new G(0, 1, 0),
  Tl = new G(0, 0, 1),
  xf = { type: "added" },
  Mf = { type: "removed" },
  sa = { type: "childadded", child: null },
  aa = { type: "childremoved", child: null };
class Xt extends dr {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: _f++ }),
      (this.uuid = Fr()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Xt.DEFAULT_UP.clone());
    const e = new G(),
      t = new Dn(),
      n = new Br(),
      i = new G(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new ut() },
        normalMatrix: { value: new De() },
      }),
      (this.matrix = new ut()),
      (this.matrixWorld = new ut()),
      (this.matrixAutoUpdate = Xt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Ic()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Bi.setFromAxisAngle(e, t), this.quaternion.multiply(Bi), this;
  }
  rotateOnWorldAxis(e, t) {
    return Bi.setFromAxisAngle(e, t), this.quaternion.premultiply(Bi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Sl, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(El, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Tl, e);
  }
  translateOnAxis(e, t) {
    return Ml.copy(e).applyQuaternion(this.quaternion), this.position.add(Ml.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Sl, e);
  }
  translateY(e) {
    return this.translateOnAxis(El, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Tl, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Tn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Jr.copy(e) : Jr.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Mr.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight ? Tn.lookAt(Mr, Jr, this.up) : Tn.lookAt(Jr, Mr, this.up),
      this.quaternion.setFromRotationMatrix(Tn),
      i && (Tn.extractRotation(i.matrixWorld), Bi.setFromRotationMatrix(Tn), this.quaternion.premultiply(Bi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(xf),
            (sa.child = e),
            this.dispatchEvent(sa),
            (sa.child = null))
          : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(Mf),
        (aa.child = e),
        this.dispatchEvent(aa),
        (aa.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Tn.copy(this.matrixWorld).invert(),
      e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Tn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Tn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, o = i.length; s < o; s++) i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mr, e, gf), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Mr, vf, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) {
        const a = i[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.visibility = this._visibility),
        (i.active = this._active),
        (i.bounds = this._bounds.map((a) => ({
          boxInitialized: a.boxInitialized,
          boxMin: a.box.min.toArray(),
          boxMax: a.box.max.toArray(),
          sphereInitialized: a.sphereInitialized,
          sphereRadius: a.sphere.radius,
          sphereCenter: a.sphere.center.toArray(),
        }))),
        (i.maxGeometryCount = this._maxGeometryCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.geometryCount = this._geometryCount),
        (i.matricesTexture = this._matricesTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }),
        this.boundingBox !== null &&
          (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() }));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(e.shapes, h);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++) a.push(s(e.materials, this.material[l]));
        i.material = a;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++) i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        h = o(e.shapes),
        f = o(e.skeletons),
        m = o(e.animations),
        g = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        h.length > 0 && (n.shapes = h),
        f.length > 0 && (n.skeletons = f),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
Xt.DEFAULT_UP = new G(0, 1, 0);
Xt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const rn = new G(),
  yn = new G(),
  oa = new G(),
  An = new G(),
  zi = new G(),
  Gi = new G(),
  yl = new G(),
  la = new G(),
  ca = new G(),
  ua = new G();
class dn {
  constructor(e = new G(), t = new G(), n = new G()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), rn.subVectors(e, t), i.cross(rn);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    rn.subVectors(i, t), yn.subVectors(n, t), oa.subVectors(e, t);
    const o = rn.dot(rn),
      a = rn.dot(yn),
      l = rn.dot(oa),
      c = yn.dot(yn),
      u = yn.dot(oa),
      h = o * c - a * a;
    if (h === 0) return s.set(0, 0, 0), null;
    const f = 1 / h,
      m = (c * l - a * u) * f,
      g = (o * u - a * l) * f;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, An) === null ? !1 : An.x >= 0 && An.y >= 0 && An.x + An.y <= 1;
  }
  static getInterpolation(e, t, n, i, s, o, a, l) {
    return this.getBarycoord(e, t, n, i, An) === null
      ? ((l.x = 0), (l.y = 0), "z" in l && (l.z = 0), "w" in l && (l.w = 0), null)
      : (l.setScalar(0), l.addScaledVector(s, An.x), l.addScaledVector(o, An.y), l.addScaledVector(a, An.z), l);
  }
  static isFrontFacing(e, t, n, i) {
    return rn.subVectors(n, t), yn.subVectors(e, t), rn.cross(yn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return rn.subVectors(this.c, this.b), yn.subVectors(this.a, this.b), rn.cross(yn).length() * 0.5;
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return dn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return dn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, s) {
    return dn.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return dn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return dn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let o, a;
    zi.subVectors(i, n), Gi.subVectors(s, n), la.subVectors(e, n);
    const l = zi.dot(la),
      c = Gi.dot(la);
    if (l <= 0 && c <= 0) return t.copy(n);
    ca.subVectors(e, i);
    const u = zi.dot(ca),
      h = Gi.dot(ca);
    if (u >= 0 && h <= u) return t.copy(i);
    const f = l * h - u * c;
    if (f <= 0 && l >= 0 && u <= 0) return (o = l / (l - u)), t.copy(n).addScaledVector(zi, o);
    ua.subVectors(e, s);
    const m = zi.dot(ua),
      g = Gi.dot(ua);
    if (g >= 0 && m <= g) return t.copy(s);
    const _ = m * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0) return (a = c / (c - g)), t.copy(n).addScaledVector(Gi, a);
    const d = u * g - m * h;
    if (d <= 0 && h - u >= 0 && m - g >= 0)
      return yl.subVectors(s, i), (a = (h - u) / (h - u + (m - g))), t.copy(i).addScaledVector(yl, a);
    const p = 1 / (d + _ + f);
    return (o = _ * p), (a = f * p), t.copy(n).addScaledVector(zi, o).addScaledVector(Gi, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Nc = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Gn = { h: 0, s: 0, l: 0 },
  Qr = { h: 0, s: 0, l: 0 };
function ha(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r
  );
}
class We {
  constructor(e, t, n) {
    return (this.isColor = !0), (this.r = 1), (this.g = 1), (this.b = 1), this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = un) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Xe.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = Xe.workingColorSpace) {
    return (this.r = e), (this.g = t), (this.b = n), Xe.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Xe.workingColorSpace) {
    if (((e = rf(e, 1)), (t = Dt(t, 0, 1)), (n = Dt(n, 0, 1)), t === 0)) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = ha(o, s, e + 1 / 3)), (this.g = ha(o, s, e)), (this.b = ha(o, s, e - 1 / 3));
    }
    return Xe.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = un) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = i[1],
        a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if ((s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)))
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t
              )
            );
          if ((s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)))
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if ((s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)))
            return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = un) {
    const n = Nc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = er(e.r)), (this.g = er(e.g)), (this.b = er(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = js(e.r)), (this.g = js(e.g)), (this.b = js(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = un) {
    return (
      Xe.fromWorkingColorSpace(Et.copy(this), e),
      Math.round(Dt(Et.r * 255, 0, 255)) * 65536 +
        Math.round(Dt(Et.g * 255, 0, 255)) * 256 +
        Math.round(Dt(Et.b * 255, 0, 255))
    );
  }
  getHexString(e = un) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Xe.workingColorSpace) {
    Xe.fromWorkingColorSpace(Et.copy(this), t);
    const n = Et.r,
      i = Et.g,
      s = Et.b,
      o = Math.max(n, i, s),
      a = Math.min(n, i, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const h = o - a;
      switch (((c = u <= 0.5 ? h / (o + a) : h / (2 - o - a)), o)) {
        case n:
          l = (i - s) / h + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - i) / h + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = Xe.workingColorSpace) {
    return Xe.fromWorkingColorSpace(Et.copy(this), t), (e.r = Et.r), (e.g = Et.g), (e.b = Et.b), e;
  }
  getStyle(e = un) {
    Xe.fromWorkingColorSpace(Et.copy(this), e);
    const t = Et.r,
      n = Et.g,
      i = Et.b;
    return e !== un
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Gn), this.setHSL(Gn.h + e, Gn.s + t, Gn.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this;
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (this.r += (e.r - this.r) * t), (this.g += (e.g - this.g) * t), (this.b += (e.b - this.b) * t), this;
  }
  lerpColors(e, t, n) {
    return (this.r = e.r + (t.r - e.r) * n), (this.g = e.g + (t.g - e.g) * n), (this.b = e.b + (t.b - e.b) * n), this;
  }
  lerpHSL(e, t) {
    this.getHSL(Gn), e.getHSL(Qr);
    const n = $s(Gn.h, Qr.h, t),
      i = $s(Gn.s, Qr.s, t),
      s = $s(Gn.l, Qr.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * i),
      (this.g = s[1] * t + s[4] * n + s[7] * i),
      (this.b = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Et = new We();
We.NAMES = Nc;
let Sf = 0;
class Us extends dr {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Sf++ }),
      (this.uuid = Fr()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Qi),
      (this.side = Jn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Pa),
      (this.blendDst = La),
      (this.blendEquation = _i),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new We(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = xs),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = ul),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Di),
      (this.stencilZFail = Di),
      (this.stencilZPass = Di),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
      this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
      this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid), (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid), (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid), (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid), this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
      this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Qi && (n.blending = this.blending),
      this.side !== Jn && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== Pa && (n.blendSrc = this.blendSrc),
      this.blendDst !== La && (n.blendDst = this.blendDst),
      this.blendEquation !== _i && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== xs && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== ul && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Di && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== Di && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Di && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures),
        o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Oc extends Us {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new We(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Dn()),
      (this.combine = Mc),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const lt = new G(),
  es = new Be();
class gn {
  constructor(e, t, n = !1) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = hl),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = Pn),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      af(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        es.fromBufferAttribute(this, t), es.applyMatrix3(e), this.setXY(t, es.x, es.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        lt.fromBufferAttribute(this, t), lt.applyMatrix3(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.applyMatrix4(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.applyNormalMatrix(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      lt.fromBufferAttribute(this, t), lt.transformDirection(e), this.setXYZ(t, lt.x, lt.y, lt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = gr(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Pt(n, this.array)), (this.array[e * this.itemSize + t] = n), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = gr(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Pt(t, this.array)), (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = gr(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Pt(t, this.array)), (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = gr(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Pt(t, this.array)), (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = gr(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Pt(t, this.array)), (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Pt(t, this.array)), (n = Pt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Pt(t, this.array)), (n = Pt(n, this.array)), (i = Pt(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Pt(t, this.array)), (n = Pt(n, this.array)), (i = Pt(i, this.array)), (s = Pt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return this.name !== "" && (e.name = this.name), this.usage !== hl && (e.usage = this.usage), e;
  }
}
class Fc extends gn {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Bc extends gn {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ei extends gn {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Ef = 0;
const Zt = new ut(),
  fa = new Xt(),
  Hi = new G(),
  Ht = new zr(),
  Sr = new zr(),
  pt = new G();
class Pi extends dr {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Ef++ }),
      (this.uuid = Fr()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? (this.index = new (Pc(e) ? Bc : Fc)(e, 1)) : (this.index = e), this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new De().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Zt.makeRotationFromQuaternion(e), this.applyMatrix4(Zt), this;
  }
  rotateX(e) {
    return Zt.makeRotationX(e), this.applyMatrix4(Zt), this;
  }
  rotateY(e) {
    return Zt.makeRotationY(e), this.applyMatrix4(Zt), this;
  }
  rotateZ(e) {
    return Zt.makeRotationZ(e), this.applyMatrix4(Zt), this;
  }
  translate(e, t, n) {
    return Zt.makeTranslation(e, t, n), this.applyMatrix4(Zt), this;
  }
  scale(e, t, n) {
    return Zt.makeScale(e, t, n), this.applyMatrix4(Zt), this;
  }
  lookAt(e) {
    return fa.lookAt(e), fa.updateMatrix(), this.applyMatrix4(fa.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Hi).negate(), this.translate(Hi.x, Hi.y, Hi.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Ei(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new zr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(new G(-1 / 0, -1 / 0, -1 / 0), new G(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          Ht.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (pt.addVectors(this.boundingBox.min, Ht.min),
                this.boundingBox.expandByPoint(pt),
                pt.addVectors(this.boundingBox.max, Ht.max),
                this.boundingBox.expandByPoint(pt))
              : (this.boundingBox.expandByPoint(Ht.min), this.boundingBox.expandByPoint(Ht.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new so());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new G(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Ht.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          Sr.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (pt.addVectors(Ht.min, Sr.min),
                Ht.expandByPoint(pt),
                pt.addVectors(Ht.max, Sr.max),
                Ht.expandByPoint(pt))
              : (Ht.expandByPoint(Sr.min), Ht.expandByPoint(Sr.max));
        }
      Ht.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++) pt.fromBufferAttribute(e, s), (i = Math.max(i, n.distanceToSquared(pt)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            pt.fromBufferAttribute(a, c),
              l && (Hi.fromBufferAttribute(e, c), pt.add(Hi)),
              (i = Math.max(i, n.distanceToSquared(pt)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.position,
      i = t.normal,
      s = t.uv;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new gn(new Float32Array(4 * n.count), 4));
    const o = this.getAttribute("tangent"),
      a = [],
      l = [];
    for (let P = 0; P < n.count; P++) (a[P] = new G()), (l[P] = new G());
    const c = new G(),
      u = new G(),
      h = new G(),
      f = new Be(),
      m = new Be(),
      g = new Be(),
      _ = new G(),
      d = new G();
    function p(P, D, x) {
      c.fromBufferAttribute(n, P),
        u.fromBufferAttribute(n, D),
        h.fromBufferAttribute(n, x),
        f.fromBufferAttribute(s, P),
        m.fromBufferAttribute(s, D),
        g.fromBufferAttribute(s, x),
        u.sub(c),
        h.sub(c),
        m.sub(f),
        g.sub(f);
      const w = 1 / (m.x * g.y - g.x * m.y);
      isFinite(w) &&
        (_.copy(u).multiplyScalar(g.y).addScaledVector(h, -m.y).multiplyScalar(w),
        d.copy(h).multiplyScalar(m.x).addScaledVector(u, -g.x).multiplyScalar(w),
        a[P].add(_),
        a[D].add(_),
        a[x].add(_),
        l[P].add(d),
        l[D].add(d),
        l[x].add(d));
    }
    let S = this.groups;
    S.length === 0 && (S = [{ start: 0, count: e.count }]);
    for (let P = 0, D = S.length; P < D; ++P) {
      const x = S[P],
        w = x.start,
        Y = x.count;
      for (let q = w, C = w + Y; q < C; q += 3) p(e.getX(q + 0), e.getX(q + 1), e.getX(q + 2));
    }
    const v = new G(),
      E = new G(),
      b = new G(),
      A = new G();
    function y(P) {
      b.fromBufferAttribute(i, P), A.copy(b);
      const D = a[P];
      v.copy(D), v.sub(b.multiplyScalar(b.dot(D))).normalize(), E.crossVectors(A, D);
      const w = E.dot(l[P]) < 0 ? -1 : 1;
      o.setXYZW(P, v.x, v.y, v.z, w);
    }
    for (let P = 0, D = S.length; P < D; ++P) {
      const x = S[P],
        w = x.start,
        Y = x.count;
      for (let q = w, C = w + Y; q < C; q += 3) y(e.getX(q + 0)), y(e.getX(q + 1)), y(e.getX(q + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) (n = new gn(new Float32Array(t.count * 3), 3)), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const i = new G(),
        s = new G(),
        o = new G(),
        a = new G(),
        l = new G(),
        c = new G(),
        u = new G(),
        h = new G();
      if (e)
        for (let f = 0, m = e.count; f < m; f += 3) {
          const g = e.getX(f + 0),
            _ = e.getX(f + 1),
            d = e.getX(f + 2);
          i.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, _),
            o.fromBufferAttribute(t, d),
            u.subVectors(o, s),
            h.subVectors(i, s),
            u.cross(h),
            a.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, _),
            c.fromBufferAttribute(n, d),
            a.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(_, l.x, l.y, l.z),
            n.setXYZ(d, c.x, c.y, c.z);
        }
      else
        for (let f = 0, m = t.count; f < m; f += 3)
          i.fromBufferAttribute(t, f + 0),
            s.fromBufferAttribute(t, f + 1),
            o.fromBufferAttribute(t, f + 2),
            u.subVectors(o, s),
            h.subVectors(i, s),
            u.cross(h),
            n.setXYZ(f + 0, u.x, u.y, u.z),
            n.setXYZ(f + 1, u.x, u.y, u.z),
            n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      pt.fromBufferAttribute(e, t), pt.normalize(), e.setXYZ(t, pt.x, pt.y, pt.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        h = a.normalized,
        f = new c.constructor(l.length * u);
      let m = 0,
        g = 0;
      for (let _ = 0, d = l.length; _ < d; _++) {
        a.isInterleavedBufferAttribute ? (m = l[_] * a.data.stride + a.offset) : (m = l[_] * u);
        for (let p = 0; p < u; p++) f[g++] = c[m++];
      }
      return new gn(f, u, h);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Pi(),
      n = this.index.array,
      i = this.attributes;
    for (const a in i) {
      const l = i[a],
        c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, h = c.length; u < h; u++) {
        const f = c[u],
          m = e(f, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let h = 0, f = c.length; h < f; h++) {
        const m = c[h];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((i[l] = u), (s = !0));
    }
    s && ((e.data.morphAttributes = i), (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        h = s[c];
      for (let f = 0, m = h.length; f < m; f++) u.push(h[f].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const h = o[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Al = new ut(),
  oi = new df(),
  ts = new so(),
  bl = new G(),
  Vi = new G(),
  ki = new G(),
  Wi = new G(),
  da = new G(),
  ns = new G(),
  is = new Be(),
  rs = new Be(),
  ss = new Be(),
  wl = new G(),
  Rl = new G(),
  Cl = new G(),
  as = new G(),
  os = new G();
class mn extends Xt {
  constructor(e = new Pi(), t = new Oc()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
      (this.material = Array.isArray(e.material) ? e.material.slice() : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0), (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      s = n.morphAttributes.position,
      o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      ns.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l],
          h = s[l];
        u !== 0 && (da.fromBufferAttribute(h, e), o ? ns.addScaledVector(da, u) : ns.addScaledVector(da.sub(t), u));
      }
      t.add(ns);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ts.copy(n.boundingSphere),
      ts.applyMatrix4(s),
      oi.copy(e.ray).recast(e.near),
      !(
        ts.containsPoint(oi.origin) === !1 &&
        (oi.intersectSphere(ts, bl) === null || oi.origin.distanceToSquared(bl) > (e.far - e.near) ** 2)
      ) &&
        (Al.copy(s).invert(),
        oi.copy(e.ray).applyMatrix4(Al),
        !(n.boundingBox !== null && oi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, oi)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry,
      o = this.material,
      a = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      h = s.attributes.normal,
      f = s.groups,
      m = s.drawRange;
    if (a !== null)
      if (Array.isArray(o))
        for (let g = 0, _ = f.length; g < _; g++) {
          const d = f[g],
            p = o[d.materialIndex],
            S = Math.max(d.start, m.start),
            v = Math.min(a.count, Math.min(d.start + d.count, m.start + m.count));
          for (let E = S, b = v; E < b; E += 3) {
            const A = a.getX(E),
              y = a.getX(E + 1),
              P = a.getX(E + 2);
            (i = ls(this, p, e, n, c, u, h, A, y, P)),
              i && ((i.faceIndex = Math.floor(E / 3)), (i.face.materialIndex = d.materialIndex), t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start),
          _ = Math.min(a.count, m.start + m.count);
        for (let d = g, p = _; d < p; d += 3) {
          const S = a.getX(d),
            v = a.getX(d + 1),
            E = a.getX(d + 2);
          (i = ls(this, o, e, n, c, u, h, S, v, E)), i && ((i.faceIndex = Math.floor(d / 3)), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(o))
        for (let g = 0, _ = f.length; g < _; g++) {
          const d = f[g],
            p = o[d.materialIndex],
            S = Math.max(d.start, m.start),
            v = Math.min(l.count, Math.min(d.start + d.count, m.start + m.count));
          for (let E = S, b = v; E < b; E += 3) {
            const A = E,
              y = E + 1,
              P = E + 2;
            (i = ls(this, p, e, n, c, u, h, A, y, P)),
              i && ((i.faceIndex = Math.floor(E / 3)), (i.face.materialIndex = d.materialIndex), t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start),
          _ = Math.min(l.count, m.start + m.count);
        for (let d = g, p = _; d < p; d += 3) {
          const S = d,
            v = d + 1,
            E = d + 2;
          (i = ls(this, o, e, n, c, u, h, S, v, E)), i && ((i.faceIndex = Math.floor(d / 3)), t.push(i));
        }
      }
  }
}
function Tf(r, e, t, n, i, s, o, a) {
  let l;
  if (
    (e.side === Ut ? (l = n.intersectTriangle(o, s, i, !0, a)) : (l = n.intersectTriangle(i, s, o, e.side === Jn, a)),
    l === null)
  )
    return null;
  os.copy(a), os.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(os);
  return c < t.near || c > t.far ? null : { distance: c, point: os.clone(), object: r };
}
function ls(r, e, t, n, i, s, o, a, l, c) {
  r.getVertexPosition(a, Vi), r.getVertexPosition(l, ki), r.getVertexPosition(c, Wi);
  const u = Tf(r, e, t, n, Vi, ki, Wi, as);
  if (u) {
    i &&
      (is.fromBufferAttribute(i, a),
      rs.fromBufferAttribute(i, l),
      ss.fromBufferAttribute(i, c),
      (u.uv = dn.getInterpolation(as, Vi, ki, Wi, is, rs, ss, new Be()))),
      s &&
        (is.fromBufferAttribute(s, a),
        rs.fromBufferAttribute(s, l),
        ss.fromBufferAttribute(s, c),
        (u.uv1 = dn.getInterpolation(as, Vi, ki, Wi, is, rs, ss, new Be()))),
      o &&
        (wl.fromBufferAttribute(o, a),
        Rl.fromBufferAttribute(o, l),
        Cl.fromBufferAttribute(o, c),
        (u.normal = dn.getInterpolation(as, Vi, ki, Wi, wl, Rl, Cl, new G())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const h = { a, b: l, c, normal: new G(), materialIndex: 0 };
    dn.getNormal(Vi, ki, Wi, h.normal), (u.face = h);
  }
  return u;
}
class Gr extends Pi {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: s, depthSegments: o });
    const a = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      u = [],
      h = [];
    let f = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0),
      g("z", "y", "x", 1, -1, n, t, -e, o, s, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, o, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, o, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new Ei(c, 3)),
      this.setAttribute("normal", new Ei(u, 3)),
      this.setAttribute("uv", new Ei(h, 2));
    function g(_, d, p, S, v, E, b, A, y, P, D) {
      const x = E / y,
        w = b / P,
        Y = E / 2,
        q = b / 2,
        C = A / 2,
        k = y + 1,
        F = P + 1;
      let X = 0,
        V = 0;
      const $ = new G();
      for (let Z = 0; Z < F; Z++) {
        const ee = Z * w - q;
        for (let le = 0; le < k; le++) {
          const Ee = le * x - Y;
          ($[_] = Ee * S),
            ($[d] = ee * v),
            ($[p] = C),
            c.push($.x, $.y, $.z),
            ($[_] = 0),
            ($[d] = 0),
            ($[p] = A > 0 ? 1 : -1),
            u.push($.x, $.y, $.z),
            h.push(le / y),
            h.push(1 - Z / P),
            (X += 1);
        }
      }
      for (let Z = 0; Z < P; Z++)
        for (let ee = 0; ee < y; ee++) {
          const le = f + ee + k * Z,
            Ee = f + ee + k * (Z + 1),
            B = f + (ee + 1) + k * (Z + 1),
            j = f + (ee + 1) + k * Z;
          l.push(le, Ee, j), l.push(Ee, B, j), (V += 6);
        }
      a.addGroup(m, V, D), (m += V), (f += X);
    }
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new Gr(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function or(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function wt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = or(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function yf(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function zc(r) {
  return r.getRenderTarget() === null ? r.outputColorSpace : Xe.workingColorSpace;
}
const Af = { clone: or, merge: wt };
var bf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  wf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Un extends Us {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = bf),
      (this.fragmentShader = wf),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
        clipCullDistance: !1,
        multiDraw: !1,
      }),
      (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = or(e.uniforms)),
      (this.uniformsGroups = yf(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture
        ? (t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[i] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[i] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[i] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[i] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: o.toArray() })
        : (t.uniforms[i] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Gc extends Xt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new ut()),
      (this.projectionMatrix = new ut()),
      (this.projectionMatrixInverse = new ut()),
      (this.coordinateSystem = Ln);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Hn = new G(),
  Pl = new Be(),
  Ll = new Be();
class sn extends Gc {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Fa * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ks * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Fa * 2 * Math.atan(Math.tan(Ks * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Hn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(Hn.x, Hn.y).multiplyScalar(-e / Hn.z),
      Hn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(Hn.x, Hn.y).multiplyScalar(-e / Hn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Pl, Ll), t.subVectors(Ll, Pl);
  }
  setViewOffset(e, t, n, i, s, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Ks * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * i) / l), (t -= (o.offsetY * n) / c), (i *= o.width / l), (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Xi = -90,
  qi = 1;
class Rf extends Xt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new sn(Xi, qi, e, t);
    (i.layers = this.layers), this.add(i);
    const s = new sn(Xi, qi, e, t);
    (s.layers = this.layers), this.add(s);
    const o = new sn(Xi, qi, e, t);
    (o.layers = this.layers), this.add(o);
    const a = new sn(Xi, qi, e, t);
    (a.layers = this.layers), this.add(a);
    const l = new sn(Xi, qi, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new sn(Xi, qi, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, i, s, o, a, l] = t;
    for (const c of t) this.remove(c);
    if (e === Ln)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, 1),
        o.lookAt(0, -1, 0),
        a.up.set(0, 1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === Ts)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        o.up.set(0, 0, -1),
        o.lookAt(0, -1, 0),
        a.up.set(0, -1, 0),
        a.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem), this.updateCoordinateSystem());
    const [s, o, a, l, c, u] = this.children,
      h = e.getRenderTarget(),
      f = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, i),
      e.render(t, s),
      e.setRenderTarget(n, 1, i),
      e.render(t, o),
      e.setRenderTarget(n, 2, i),
      e.render(t, a),
      e.setRenderTarget(n, 3, i),
      e.render(t, l),
      e.setRenderTarget(n, 4, i),
      e.render(t, c),
      (n.texture.generateMipmaps = _),
      e.setRenderTarget(n, 5, i),
      e.render(t, u),
      e.setRenderTarget(h, f, m),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Hc extends ln {
  constructor(e, t, n, i, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : rr),
      super(e, t, n, i, s, o, a, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Cf extends wi {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Hc(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Lt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Gr(5, 5, 5),
      s = new Un({
        name: "CubemapFromEquirect",
        uniforms: or(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Ut,
        blending: Yn,
      });
    s.uniforms.tEquirect.value = t;
    const o = new mn(i, s),
      a = t.minFilter;
    return (
      t.minFilter === vi && (t.minFilter = Lt),
      new Rf(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const pa = new G(),
  Pf = new G(),
  Lf = new De();
class di {
  constructor(e = new G(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = pa.subVectors(n, t).cross(Pf.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(pa),
      i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Lf.getNormalMatrix(e),
      i = this.coplanarPoint(pa).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const li = new so(),
  cs = new G();
class Vc {
  constructor(e = new di(), t = new di(), n = new di(), i = new di(), s = new di(), o = new di()) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = Ln) {
    const n = this.planes,
      i = e.elements,
      s = i[0],
      o = i[1],
      a = i[2],
      l = i[3],
      c = i[4],
      u = i[5],
      h = i[6],
      f = i[7],
      m = i[8],
      g = i[9],
      _ = i[10],
      d = i[11],
      p = i[12],
      S = i[13],
      v = i[14],
      E = i[15];
    if (
      (n[0].setComponents(l - s, f - c, d - m, E - p).normalize(),
      n[1].setComponents(l + s, f + c, d + m, E + p).normalize(),
      n[2].setComponents(l + o, f + u, d + g, E + S).normalize(),
      n[3].setComponents(l - o, f - u, d - g, E - S).normalize(),
      n[4].setComponents(l - a, f - h, d - _, E - v).normalize(),
      t === Ln)
    )
      n[5].setComponents(l + a, f + h, d + _, E + v).normalize();
    else if (t === Ts) n[5].setComponents(a, h, _, v).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(li);
  }
  intersectsSprite(e) {
    return (
      li.center.set(0, 0, 0),
      (li.radius = 0.7071067811865476),
      li.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(li)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((cs.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (cs.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (cs.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(cs) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function kc() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function i(s, o) {
    t(s, o), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      r = s;
    },
  };
}
function Df(r, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, u) {
    const h = c.array,
      f = c.usage,
      m = h.byteLength,
      g = r.createBuffer();
    r.bindBuffer(u, g), r.bufferData(u, h, f), c.onUploadCallback();
    let _;
    if (h instanceof Float32Array) _ = r.FLOAT;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) _ = r.HALF_FLOAT;
        else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else _ = r.UNSIGNED_SHORT;
    else if (h instanceof Int16Array) _ = r.SHORT;
    else if (h instanceof Uint32Array) _ = r.UNSIGNED_INT;
    else if (h instanceof Int32Array) _ = r.INT;
    else if (h instanceof Int8Array) _ = r.BYTE;
    else if (h instanceof Uint8Array) _ = r.UNSIGNED_BYTE;
    else if (h instanceof Uint8ClampedArray) _ = r.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + h);
    return { buffer: g, type: _, bytesPerElement: h.BYTES_PER_ELEMENT, version: c.version, size: m };
  }
  function s(c, u, h) {
    const f = u.array,
      m = u._updateRange,
      g = u.updateRanges;
    if ((r.bindBuffer(h, c), m.count === -1 && g.length === 0 && r.bufferSubData(h, 0, f), g.length !== 0)) {
      for (let _ = 0, d = g.length; _ < d; _++) {
        const p = g[_];
        t
          ? r.bufferSubData(h, p.start * f.BYTES_PER_ELEMENT, f, p.start, p.count)
          : r.bufferSubData(h, p.start * f.BYTES_PER_ELEMENT, f.subarray(p.start, p.start + p.count));
      }
      u.clearUpdateRanges();
    }
    m.count !== -1 &&
      (t
        ? r.bufferSubData(h, m.offset * f.BYTES_PER_ELEMENT, f, m.offset, m.count)
        : r.bufferSubData(h, m.offset * f.BYTES_PER_ELEMENT, f.subarray(m.offset, m.offset + m.count)),
      (m.count = -1)),
      u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (r.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const f = n.get(c);
      (!f || f.version < c.version) &&
        n.set(c, { buffer: c.buffer, type: c.type, bytesPerElement: c.elementSize, version: c.version });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    if (h === void 0) n.set(c, i(c, u));
    else if (h.version < c.version) {
      if (h.size !== c.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      s(h.buffer, c, u), (h.version = c.version);
    }
  }
  return { get: o, remove: a, update: l };
}
class Hr extends Pi {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(n),
      l = Math.floor(i),
      c = a + 1,
      u = l + 1,
      h = e / a,
      f = t / l,
      m = [],
      g = [],
      _ = [],
      d = [];
    for (let p = 0; p < u; p++) {
      const S = p * f - o;
      for (let v = 0; v < c; v++) {
        const E = v * h - s;
        g.push(E, -S, 0), _.push(0, 0, 1), d.push(v / a), d.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++)
      for (let S = 0; S < a; S++) {
        const v = S + c * p,
          E = S + c * (p + 1),
          b = S + 1 + c * (p + 1),
          A = S + 1 + c * p;
        m.push(v, E, A), m.push(E, b, A);
      }
    this.setIndex(m),
      this.setAttribute("position", new Ei(g, 3)),
      this.setAttribute("normal", new Ei(_, 3)),
      this.setAttribute("uv", new Ei(d, 2));
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new Hr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Uf = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  If = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Nf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Of = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Ff = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Bf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  zf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Gf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Hf = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Vf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,
  kf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Wf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Xf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  qf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Yf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Kf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  $f = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Zf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  jf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Jf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Qf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  ed = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  td = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  nd = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  id = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  rd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  sd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  ad = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  od = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  ld = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  cd = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  ud = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  hd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  fd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,
  dd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  pd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  md = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  _d = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  gd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  vd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  xd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Md = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Sd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Ed = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Td = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  yd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Ad = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  bd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  wd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Rd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Cd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Pd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Ld = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Dd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Ud = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Id = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Nd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Od = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Fd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Bd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  zd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Gd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Hd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Vd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  kd = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Wd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Xd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  qd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Yd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Kd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  $d = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Zd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  jd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Jd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Qd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ep = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  tp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  np = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  ip = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  rp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  sp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  ap = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  op = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  lp = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  cp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  up = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  hp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  fp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  dp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  pp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  mp = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  _p = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  gp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  vp = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  xp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Mp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Sp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Ep = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Tp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  yp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Ap = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  bp = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  wp = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Rp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Cp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Pp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Lp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Dp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Up = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Ip = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Np = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Op = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Fp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Bp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  zp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Gp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Hp = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Vp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  kp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Wp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Xp = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  qp = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Yp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Kp = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  $p = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Zp = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  jp = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Jp = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Qp = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  em = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  tm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  nm = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  im = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  rm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  sm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  am = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  om = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  lm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  cm = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  um = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  hm = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  fm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Le = {
    alphahash_fragment: Uf,
    alphahash_pars_fragment: If,
    alphamap_fragment: Nf,
    alphamap_pars_fragment: Of,
    alphatest_fragment: Ff,
    alphatest_pars_fragment: Bf,
    aomap_fragment: zf,
    aomap_pars_fragment: Gf,
    batching_pars_vertex: Hf,
    batching_vertex: Vf,
    begin_vertex: kf,
    beginnormal_vertex: Wf,
    bsdfs: Xf,
    iridescence_fragment: qf,
    bumpmap_pars_fragment: Yf,
    clipping_planes_fragment: Kf,
    clipping_planes_pars_fragment: $f,
    clipping_planes_pars_vertex: Zf,
    clipping_planes_vertex: jf,
    color_fragment: Jf,
    color_pars_fragment: Qf,
    color_pars_vertex: ed,
    color_vertex: td,
    common: nd,
    cube_uv_reflection_fragment: id,
    defaultnormal_vertex: rd,
    displacementmap_pars_vertex: sd,
    displacementmap_vertex: ad,
    emissivemap_fragment: od,
    emissivemap_pars_fragment: ld,
    colorspace_fragment: cd,
    colorspace_pars_fragment: ud,
    envmap_fragment: hd,
    envmap_common_pars_fragment: fd,
    envmap_pars_fragment: dd,
    envmap_pars_vertex: pd,
    envmap_physical_pars_fragment: bd,
    envmap_vertex: md,
    fog_vertex: _d,
    fog_pars_vertex: gd,
    fog_fragment: vd,
    fog_pars_fragment: xd,
    gradientmap_pars_fragment: Md,
    lightmap_fragment: Sd,
    lightmap_pars_fragment: Ed,
    lights_lambert_fragment: Td,
    lights_lambert_pars_fragment: yd,
    lights_pars_begin: Ad,
    lights_toon_fragment: wd,
    lights_toon_pars_fragment: Rd,
    lights_phong_fragment: Cd,
    lights_phong_pars_fragment: Pd,
    lights_physical_fragment: Ld,
    lights_physical_pars_fragment: Dd,
    lights_fragment_begin: Ud,
    lights_fragment_maps: Id,
    lights_fragment_end: Nd,
    logdepthbuf_fragment: Od,
    logdepthbuf_pars_fragment: Fd,
    logdepthbuf_pars_vertex: Bd,
    logdepthbuf_vertex: zd,
    map_fragment: Gd,
    map_pars_fragment: Hd,
    map_particle_fragment: Vd,
    map_particle_pars_fragment: kd,
    metalnessmap_fragment: Wd,
    metalnessmap_pars_fragment: Xd,
    morphinstance_vertex: qd,
    morphcolor_vertex: Yd,
    morphnormal_vertex: Kd,
    morphtarget_pars_vertex: $d,
    morphtarget_vertex: Zd,
    normal_fragment_begin: jd,
    normal_fragment_maps: Jd,
    normal_pars_fragment: Qd,
    normal_pars_vertex: ep,
    normal_vertex: tp,
    normalmap_pars_fragment: np,
    clearcoat_normal_fragment_begin: ip,
    clearcoat_normal_fragment_maps: rp,
    clearcoat_pars_fragment: sp,
    iridescence_pars_fragment: ap,
    opaque_fragment: op,
    packing: lp,
    premultiplied_alpha_fragment: cp,
    project_vertex: up,
    dithering_fragment: hp,
    dithering_pars_fragment: fp,
    roughnessmap_fragment: dp,
    roughnessmap_pars_fragment: pp,
    shadowmap_pars_fragment: mp,
    shadowmap_pars_vertex: _p,
    shadowmap_vertex: gp,
    shadowmask_pars_fragment: vp,
    skinbase_vertex: xp,
    skinning_pars_vertex: Mp,
    skinning_vertex: Sp,
    skinnormal_vertex: Ep,
    specularmap_fragment: Tp,
    specularmap_pars_fragment: yp,
    tonemapping_fragment: Ap,
    tonemapping_pars_fragment: bp,
    transmission_fragment: wp,
    transmission_pars_fragment: Rp,
    uv_pars_fragment: Cp,
    uv_pars_vertex: Pp,
    uv_vertex: Lp,
    worldpos_vertex: Dp,
    background_vert: Up,
    background_frag: Ip,
    backgroundCube_vert: Np,
    backgroundCube_frag: Op,
    cube_vert: Fp,
    cube_frag: Bp,
    depth_vert: zp,
    depth_frag: Gp,
    distanceRGBA_vert: Hp,
    distanceRGBA_frag: Vp,
    equirect_vert: kp,
    equirect_frag: Wp,
    linedashed_vert: Xp,
    linedashed_frag: qp,
    meshbasic_vert: Yp,
    meshbasic_frag: Kp,
    meshlambert_vert: $p,
    meshlambert_frag: Zp,
    meshmatcap_vert: jp,
    meshmatcap_frag: Jp,
    meshnormal_vert: Qp,
    meshnormal_frag: em,
    meshphong_vert: tm,
    meshphong_frag: nm,
    meshphysical_vert: im,
    meshphysical_frag: rm,
    meshtoon_vert: sm,
    meshtoon_frag: am,
    points_vert: om,
    points_frag: lm,
    shadow_vert: cm,
    shadow_frag: um,
    sprite_vert: hm,
    sprite_frag: fm,
  },
  ie = {
    common: {
      diffuse: { value: new We(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new De() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null }, specularMapTransform: { value: new De() } },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new De() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new De() } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new De() } },
    bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new De() }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new De() },
      normalScale: { value: new Be(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new De() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new De() } },
    metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new De() } },
    roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new De() } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new We(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: { value: [], properties: { direction: {}, color: {} } },
      directionalLightShadows: {
        value: [],
        properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} },
      },
      spotLightShadows: {
        value: [],
        properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
      rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new We(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
      uvTransform: { value: new De() },
    },
    sprite: {
      diffuse: { value: new We(16777215) },
      opacity: { value: 1 },
      center: { value: new Be(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new De() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new De() },
      alphaTest: { value: 0 },
    },
  },
  fn = {
    basic: {
      uniforms: wt([ie.common, ie.specularmap, ie.envmap, ie.aomap, ie.lightmap, ie.fog]),
      vertexShader: Le.meshbasic_vert,
      fragmentShader: Le.meshbasic_frag,
    },
    lambert: {
      uniforms: wt([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new We(0) } },
      ]),
      vertexShader: Le.meshlambert_vert,
      fragmentShader: Le.meshlambert_frag,
    },
    phong: {
      uniforms: wt([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new We(0) }, specular: { value: new We(1118481) }, shininess: { value: 30 } },
      ]),
      vertexShader: Le.meshphong_vert,
      fragmentShader: Le.meshphong_frag,
    },
    standard: {
      uniforms: wt([
        ie.common,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.roughnessmap,
        ie.metalnessmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new We(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Le.meshphysical_vert,
      fragmentShader: Le.meshphysical_frag,
    },
    toon: {
      uniforms: wt([
        ie.common,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.gradientmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new We(0) } },
      ]),
      vertexShader: Le.meshtoon_vert,
      fragmentShader: Le.meshtoon_frag,
    },
    matcap: {
      uniforms: wt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, ie.fog, { matcap: { value: null } }]),
      vertexShader: Le.meshmatcap_vert,
      fragmentShader: Le.meshmatcap_frag,
    },
    points: { uniforms: wt([ie.points, ie.fog]), vertexShader: Le.points_vert, fragmentShader: Le.points_frag },
    dashed: {
      uniforms: wt([ie.common, ie.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]),
      vertexShader: Le.linedashed_vert,
      fragmentShader: Le.linedashed_frag,
    },
    depth: {
      uniforms: wt([ie.common, ie.displacementmap]),
      vertexShader: Le.depth_vert,
      fragmentShader: Le.depth_frag,
    },
    normal: {
      uniforms: wt([ie.common, ie.bumpmap, ie.normalmap, ie.displacementmap, { opacity: { value: 1 } }]),
      vertexShader: Le.meshnormal_vert,
      fragmentShader: Le.meshnormal_frag,
    },
    sprite: { uniforms: wt([ie.sprite, ie.fog]), vertexShader: Le.sprite_vert, fragmentShader: Le.sprite_frag },
    background: {
      uniforms: { uvTransform: { value: new De() }, t2D: { value: null }, backgroundIntensity: { value: 1 } },
      vertexShader: Le.background_vert,
      fragmentShader: Le.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new De() },
      },
      vertexShader: Le.backgroundCube_vert,
      fragmentShader: Le.backgroundCube_frag,
    },
    cube: {
      uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } },
      vertexShader: Le.cube_vert,
      fragmentShader: Le.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Le.equirect_vert,
      fragmentShader: Le.equirect_frag,
    },
    distanceRGBA: {
      uniforms: wt([
        ie.common,
        ie.displacementmap,
        { referencePosition: { value: new G() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } },
      ]),
      vertexShader: Le.distanceRGBA_vert,
      fragmentShader: Le.distanceRGBA_frag,
    },
    shadow: {
      uniforms: wt([ie.lights, ie.fog, { color: { value: new We(0) }, opacity: { value: 1 } }]),
      vertexShader: Le.shadow_vert,
      fragmentShader: Le.shadow_frag,
    },
  };
fn.physical = {
  uniforms: wt([
    fn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new De() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new De() },
      clearcoatNormalScale: { value: new Be(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new De() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new De() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new De() },
      sheen: { value: 0 },
      sheenColor: { value: new We(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new De() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new De() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new De() },
      transmissionSamplerSize: { value: new Be() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new De() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new We(0) },
      specularColor: { value: new We(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new De() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new De() },
      anisotropyVector: { value: new Be() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new De() },
    },
  ]),
  vertexShader: Le.meshphysical_vert,
  fragmentShader: Le.meshphysical_frag,
};
const us = { r: 0, b: 0, g: 0 },
  ci = new Dn(),
  dm = new ut();
function pm(r, e, t, n, i, s, o) {
  const a = new We(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    h = null,
    f = 0,
    m = null;
  function g(d, p) {
    let S = !1,
      v = p.isScene === !0 ? p.background : null;
    v && v.isTexture && (v = (p.backgroundBlurriness > 0 ? t : e).get(v)),
      v === null ? _(a, l) : v && v.isColor && (_(v, 1), (S = !0));
    const E = r.xr.getEnvironmentBlendMode();
    E === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, o)
      : E === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o),
      (r.autoClear || S) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      v && (v.isCubeTexture || v.mapping === Ls)
        ? (u === void 0 &&
            ((u = new mn(
              new Gr(1, 1, 1),
              new Un({
                name: "BackgroundCubeMaterial",
                uniforms: or(fn.backgroundCube.uniforms),
                vertexShader: fn.backgroundCube.vertexShader,
                fragmentShader: fn.backgroundCube.fragmentShader,
                side: Ut,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (b, A, y) {
              this.matrixWorld.copyPosition(y.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(u)),
          ci.copy(p.backgroundRotation),
          (ci.x *= -1),
          (ci.y *= -1),
          (ci.z *= -1),
          v.isCubeTexture && v.isRenderTargetTexture === !1 && ((ci.y *= -1), (ci.z *= -1)),
          (u.material.uniforms.envMap.value = v),
          (u.material.uniforms.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value = p.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value = p.backgroundIntensity),
          u.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(ci)),
          (u.material.toneMapped = Xe.getTransfer(v.colorSpace) !== Ze),
          (h !== v || f !== v.version || m !== r.toneMapping) &&
            ((u.material.needsUpdate = !0), (h = v), (f = v.version), (m = r.toneMapping)),
          u.layers.enableAll(),
          d.unshift(u, u.geometry, u.material, 0, 0, null))
        : v &&
          v.isTexture &&
          (c === void 0 &&
            ((c = new mn(
              new Hr(2, 2),
              new Un({
                name: "BackgroundMaterial",
                uniforms: or(fn.background.uniforms),
                vertexShader: fn.background.vertexShader,
                fragmentShader: fn.background.fragmentShader,
                side: Jn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.t2D.value = v),
          (c.material.uniforms.backgroundIntensity.value = p.backgroundIntensity),
          (c.material.toneMapped = Xe.getTransfer(v.colorSpace) !== Ze),
          v.matrixAutoUpdate === !0 && v.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(v.matrix),
          (h !== v || f !== v.version || m !== r.toneMapping) &&
            ((c.material.needsUpdate = !0), (h = v), (f = v.version), (m = r.toneMapping)),
          c.layers.enableAll(),
          d.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function _(d, p) {
    d.getRGB(us, zc(r)), n.buffers.color.setClear(us.r, us.g, us.b, p, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (d, p = 1) {
      a.set(d), (l = p), _(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (d) {
      (l = d), _(a, l);
    },
    render: g,
  };
}
function mm(r, e, t, n) {
  const i = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = d(null);
  let c = l,
    u = !1;
  function h(C, k, F, X, V) {
    let $ = !1;
    if (o) {
      const Z = _(X, F, k);
      c !== Z && ((c = Z), m(c.object)), ($ = p(C, X, F, V)), $ && S(C, X, F, V);
    } else {
      const Z = k.wireframe === !0;
      (c.geometry !== X.id || c.program !== F.id || c.wireframe !== Z) &&
        ((c.geometry = X.id), (c.program = F.id), (c.wireframe = Z), ($ = !0));
    }
    V !== null && t.update(V, r.ELEMENT_ARRAY_BUFFER),
      ($ || u) && ((u = !1), P(C, k, F, X), V !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function f() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function m(C) {
    return n.isWebGL2 ? r.bindVertexArray(C) : s.bindVertexArrayOES(C);
  }
  function g(C) {
    return n.isWebGL2 ? r.deleteVertexArray(C) : s.deleteVertexArrayOES(C);
  }
  function _(C, k, F) {
    const X = F.wireframe === !0;
    let V = a[C.id];
    V === void 0 && ((V = {}), (a[C.id] = V));
    let $ = V[k.id];
    $ === void 0 && (($ = {}), (V[k.id] = $));
    let Z = $[X];
    return Z === void 0 && ((Z = d(f())), ($[X] = Z)), Z;
  }
  function d(C) {
    const k = [],
      F = [],
      X = [];
    for (let V = 0; V < i; V++) (k[V] = 0), (F[V] = 0), (X[V] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: k,
      enabledAttributes: F,
      attributeDivisors: X,
      object: C,
      attributes: {},
      index: null,
    };
  }
  function p(C, k, F, X) {
    const V = c.attributes,
      $ = k.attributes;
    let Z = 0;
    const ee = F.getAttributes();
    for (const le in ee)
      if (ee[le].location >= 0) {
        const B = V[le];
        let j = $[le];
        if (
          (j === void 0 &&
            (le === "instanceMatrix" && C.instanceMatrix && (j = C.instanceMatrix),
            le === "instanceColor" && C.instanceColor && (j = C.instanceColor)),
          B === void 0 || B.attribute !== j || (j && B.data !== j.data))
        )
          return !0;
        Z++;
      }
    return c.attributesNum !== Z || c.index !== X;
  }
  function S(C, k, F, X) {
    const V = {},
      $ = k.attributes;
    let Z = 0;
    const ee = F.getAttributes();
    for (const le in ee)
      if (ee[le].location >= 0) {
        let B = $[le];
        B === void 0 &&
          (le === "instanceMatrix" && C.instanceMatrix && (B = C.instanceMatrix),
          le === "instanceColor" && C.instanceColor && (B = C.instanceColor));
        const j = {};
        (j.attribute = B), B && B.data && (j.data = B.data), (V[le] = j), Z++;
      }
    (c.attributes = V), (c.attributesNum = Z), (c.index = X);
  }
  function v() {
    const C = c.newAttributes;
    for (let k = 0, F = C.length; k < F; k++) C[k] = 0;
  }
  function E(C) {
    b(C, 0);
  }
  function b(C, k) {
    const F = c.newAttributes,
      X = c.enabledAttributes,
      V = c.attributeDivisors;
    (F[C] = 1),
      X[C] === 0 && (r.enableVertexAttribArray(C), (X[C] = 1)),
      V[C] !== k &&
        ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](C, k),
        (V[C] = k));
  }
  function A() {
    const C = c.newAttributes,
      k = c.enabledAttributes;
    for (let F = 0, X = k.length; F < X; F++) k[F] !== C[F] && (r.disableVertexAttribArray(F), (k[F] = 0));
  }
  function y(C, k, F, X, V, $, Z) {
    Z === !0 ? r.vertexAttribIPointer(C, k, F, V, $) : r.vertexAttribPointer(C, k, F, X, V, $);
  }
  function P(C, k, F, X) {
    if (
      n.isWebGL2 === !1 &&
      (C.isInstancedMesh || X.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    v();
    const V = X.attributes,
      $ = F.getAttributes(),
      Z = k.defaultAttributeValues;
    for (const ee in $) {
      const le = $[ee];
      if (le.location >= 0) {
        let Ee = V[ee];
        if (
          (Ee === void 0 &&
            (ee === "instanceMatrix" && C.instanceMatrix && (Ee = C.instanceMatrix),
            ee === "instanceColor" && C.instanceColor && (Ee = C.instanceColor)),
          Ee !== void 0)
        ) {
          const B = Ee.normalized,
            j = Ee.itemSize,
            ue = t.get(Ee);
          if (ue === void 0) continue;
          const Te = ue.buffer,
            me = ue.type,
            he = ue.bytesPerElement,
            ke = n.isWebGL2 === !0 && (me === r.INT || me === r.UNSIGNED_INT || Ee.gpuType === Ec);
          if (Ee.isInterleavedBufferAttribute) {
            const ye = Ee.data,
              I = ye.stride,
              gt = Ee.offset;
            if (ye.isInstancedInterleavedBuffer) {
              for (let ge = 0; ge < le.locationSize; ge++) b(le.location + ge, ye.meshPerAttribute);
              C.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = ye.meshPerAttribute * ye.count);
            } else for (let ge = 0; ge < le.locationSize; ge++) E(le.location + ge);
            r.bindBuffer(r.ARRAY_BUFFER, Te);
            for (let ge = 0; ge < le.locationSize; ge++)
              y(le.location + ge, j / le.locationSize, me, B, I * he, (gt + (j / le.locationSize) * ge) * he, ke);
          } else {
            if (Ee.isInstancedBufferAttribute) {
              for (let ye = 0; ye < le.locationSize; ye++) b(le.location + ye, Ee.meshPerAttribute);
              C.isInstancedMesh !== !0 &&
                X._maxInstanceCount === void 0 &&
                (X._maxInstanceCount = Ee.meshPerAttribute * Ee.count);
            } else for (let ye = 0; ye < le.locationSize; ye++) E(le.location + ye);
            r.bindBuffer(r.ARRAY_BUFFER, Te);
            for (let ye = 0; ye < le.locationSize; ye++)
              y(le.location + ye, j / le.locationSize, me, B, j * he, (j / le.locationSize) * ye * he, ke);
          }
        } else if (Z !== void 0) {
          const B = Z[ee];
          if (B !== void 0)
            switch (B.length) {
              case 2:
                r.vertexAttrib2fv(le.location, B);
                break;
              case 3:
                r.vertexAttrib3fv(le.location, B);
                break;
              case 4:
                r.vertexAttrib4fv(le.location, B);
                break;
              default:
                r.vertexAttrib1fv(le.location, B);
            }
        }
      }
    }
    A();
  }
  function D() {
    Y();
    for (const C in a) {
      const k = a[C];
      for (const F in k) {
        const X = k[F];
        for (const V in X) g(X[V].object), delete X[V];
        delete k[F];
      }
      delete a[C];
    }
  }
  function x(C) {
    if (a[C.id] === void 0) return;
    const k = a[C.id];
    for (const F in k) {
      const X = k[F];
      for (const V in X) g(X[V].object), delete X[V];
      delete k[F];
    }
    delete a[C.id];
  }
  function w(C) {
    for (const k in a) {
      const F = a[k];
      if (F[C.id] === void 0) continue;
      const X = F[C.id];
      for (const V in X) g(X[V].object), delete X[V];
      delete F[C.id];
    }
  }
  function Y() {
    q(), (u = !0), c !== l && ((c = l), m(c.object));
  }
  function q() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: h,
    reset: Y,
    resetDefaultState: q,
    dispose: D,
    releaseStatesOfGeometry: x,
    releaseStatesOfProgram: w,
    initAttributes: v,
    enableAttribute: E,
    disableUnusedAttributes: A,
  };
}
function _m(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(u) {
    s = u;
  }
  function a(u, h) {
    r.drawArrays(s, u, h), t.update(h, s, 1);
  }
  function l(u, h, f) {
    if (f === 0) return;
    let m, g;
    if (i) (m = r), (g = "drawArraysInstanced");
    else if (((m = e.get("ANGLE_instanced_arrays")), (g = "drawArraysInstancedANGLE"), m === null)) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    m[g](s, u, h, f), t.update(h, s, f);
  }
  function c(u, h, f) {
    if (f === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let g = 0; g < f; g++) this.render(u[g], h[g]);
    else {
      m.multiDrawArraysWEBGL(s, u, 0, h, 0, f);
      let g = 0;
      for (let _ = 0; _ < f; _++) g += h[_];
      t.update(g, s, 1);
    }
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l), (this.renderMultiDraw = c);
}
function gm(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const y = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(y) {
    if (y === "highp") {
      if (
        r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 &&
        r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0
      )
        return "highp";
      y = "mediump";
    }
    return y === "mediump" &&
      r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 &&
      r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0
      ? "mediump"
      : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && r.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), (a = l));
  const c = o || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    h = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),
    f = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = r.getParameter(r.MAX_TEXTURE_SIZE),
    g = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),
    _ = r.getParameter(r.MAX_VERTEX_ATTRIBS),
    d = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),
    p = r.getParameter(r.MAX_VARYING_VECTORS),
    S = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),
    v = f > 0,
    E = o || e.has("OES_texture_float"),
    b = v && E,
    A = o ? r.getParameter(r.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: h,
    maxVertexTextures: f,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: d,
    maxVaryings: p,
    maxFragmentUniforms: S,
    vertexTextures: v,
    floatFragmentTextures: E,
    floatVertexTextures: b,
    maxSamples: A,
  };
}
function vm(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const o = new di(),
    a = new De(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, f) {
      const m = h.length !== 0 || f || n !== 0 || i;
      return (i = f), (n = h.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (h, f) {
      t = u(h, f, 0);
    }),
    (this.setState = function (h, f, m) {
      const g = h.clippingPlanes,
        _ = h.clipIntersection,
        d = h.clipShadows,
        p = r.get(h);
      if (!i || g === null || g.length === 0 || (s && !d)) s ? u(null) : c();
      else {
        const S = s ? 0 : n,
          v = S * 4;
        let E = p.clippingState || null;
        (l.value = E), (E = u(g, f, v, m));
        for (let b = 0; b !== v; ++b) E[b] = t[b];
        (p.clippingState = E), (this.numIntersection = _ ? this.numPlanes : 0), (this.numPlanes += S);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)), (e.numPlanes = n), (e.numIntersection = 0);
  }
  function u(h, f, m, g) {
    const _ = h !== null ? h.length : 0;
    let d = null;
    if (_ !== 0) {
      if (((d = l.value), g !== !0 || d === null)) {
        const p = m + _ * 4,
          S = f.matrixWorldInverse;
        a.getNormalMatrix(S), (d === null || d.length < p) && (d = new Float32Array(p));
        for (let v = 0, E = m; v !== _; ++v, E += 4)
          o.copy(h[v]).applyMatrix4(S, a), o.normal.toArray(d, E), (d[E + 3] = o.constant);
      }
      (l.value = d), (l.needsUpdate = !0);
    }
    return (e.numPlanes = _), (e.numIntersection = 0), d;
  }
}
function xm(r) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Da ? (o.mapping = rr) : a === Ua && (o.mapping = sr), o;
  }
  function n(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === Da || a === Ua)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Cf(l.height);
            return (
              c.fromEquirectangularTexture(r, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class Wc extends Gc {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null &&
      (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      o = n + e,
      a = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= u * this.view.offsetY),
        (l = a - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const $i = 4,
  Dl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  gi = 20,
  ma = new Wc(),
  Ul = new We();
let _a = null,
  ga = 0,
  va = 0;
const pi = (1 + Math.sqrt(5)) / 2,
  Yi = 1 / pi,
  Il = [
    new G(1, 1, 1),
    new G(-1, 1, 1),
    new G(1, 1, -1),
    new G(-1, 1, -1),
    new G(0, pi, Yi),
    new G(0, pi, -Yi),
    new G(Yi, 0, pi),
    new G(-Yi, 0, pi),
    new G(pi, Yi, 0),
    new G(-pi, Yi, 0),
  ];
class Nl {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (_a = this._renderer.getRenderTarget()),
      (ga = this._renderer.getActiveCubeFace()),
      (va = this._renderer.getActiveMipmapLevel()),
      this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && ((this._cubemapMaterial = Bl()), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && ((this._equirectMaterial = Fl()), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))), (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(_a, ga, va), (e.scissorTest = !1), hs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === rr || e.mapping === sr
      ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width)
      : this._setSize(e.image.width / 4),
      (_a = this._renderer.getRenderTarget()),
      (ga = this._renderer.getActiveCubeFace()),
      (va = this._renderer.getActiveMipmapLevel());
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = { magFilter: Lt, minFilter: Lt, generateMipmaps: !1, type: Rr, format: on, colorSpace: ti, depthBuffer: !1 },
      i = Ol(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(), (this._pingPongRenderTarget = Ol(e, t, n));
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Mm(s)),
        (this._blurMaterial = Sm(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new mn(this._lodPlanes[0], e);
    this._renderer.compile(t, ma);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new sn(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      h = u.autoClear,
      f = u.toneMapping;
    u.getClearColor(Ul), (u.toneMapping = Kn), (u.autoClear = !1);
    const m = new Oc({ name: "PMREM.Background", side: Ut, depthWrite: !1, depthTest: !1 }),
      g = new mn(new Gr(), m);
    let _ = !1;
    const d = e.background;
    d ? d.isColor && (m.color.copy(d), (e.background = null), (_ = !0)) : (m.color.copy(Ul), (_ = !0));
    for (let p = 0; p < 6; p++) {
      const S = p % 3;
      S === 0
        ? (a.up.set(0, l[p], 0), a.lookAt(c[p], 0, 0))
        : S === 1
        ? (a.up.set(0, 0, l[p]), a.lookAt(0, c[p], 0))
        : (a.up.set(0, l[p], 0), a.lookAt(0, 0, c[p]));
      const v = this._cubeSize;
      hs(i, S * v, p > 2 ? v : 0, v, v), u.setRenderTarget(i), _ && u.render(g, a), u.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), (u.toneMapping = f), (u.autoClear = h), (e.background = d);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === rr || e.mapping === sr;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Bl()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Fl());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new mn(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    hs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, ma);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(this._sigmas[i] * this._sigmas[i] - this._sigmas[i - 1] * this._sigmas[i - 1]),
        o = Il[(i - 1) % Il.length];
      this._blur(e, i - 1, i, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", s), this._halfBlur(o, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error("blur direction must be either latitudinal or longitudinal!");
    const u = 3,
      h = new mn(this._lodPlanes[i], c),
      f = c.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * gi - 1),
      _ = s / g,
      d = isFinite(s) ? 1 + Math.floor(u * _) : gi;
    d > gi &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${gi}`
      );
    const p = [];
    let S = 0;
    for (let y = 0; y < gi; ++y) {
      const P = y / _,
        D = Math.exp((-P * P) / 2);
      p.push(D), y === 0 ? (S += D) : y < d && (S += 2 * D);
    }
    for (let y = 0; y < p.length; y++) p[y] = p[y] / S;
    (f.envMap.value = e.texture),
      (f.samples.value = d),
      (f.weights.value = p),
      (f.latitudinal.value = o === "latitudinal"),
      a && (f.poleAxis.value = a);
    const { _lodMax: v } = this;
    (f.dTheta.value = g), (f.mipInt.value = v - n);
    const E = this._sizeLods[i],
      b = 3 * E * (i > v - $i ? i - v + $i : 0),
      A = 4 * (this._cubeSize - E);
    hs(t, b, A, 3 * E, 2 * E), l.setRenderTarget(t), l.render(h, ma);
  }
}
function Mm(r) {
  const e = [],
    t = [],
    n = [];
  let i = r;
  const s = r - $i + 1 + Dl.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > r - $i ? (l = Dl[o - r + $i - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      u = -c,
      h = 1 + c,
      f = [u, u, h, u, h, h, u, u, h, h, u, h],
      m = 6,
      g = 6,
      _ = 3,
      d = 2,
      p = 1,
      S = new Float32Array(_ * g * m),
      v = new Float32Array(d * g * m),
      E = new Float32Array(p * g * m);
    for (let A = 0; A < m; A++) {
      const y = ((A % 3) * 2) / 3 - 1,
        P = A > 2 ? 0 : -1,
        D = [y, P, 0, y + 2 / 3, P, 0, y + 2 / 3, P + 1, 0, y, P, 0, y + 2 / 3, P + 1, 0, y, P + 1, 0];
      S.set(D, _ * g * A), v.set(f, d * g * A);
      const x = [A, A, A, A, A, A];
      E.set(x, p * g * A);
    }
    const b = new Pi();
    b.setAttribute("position", new gn(S, _)),
      b.setAttribute("uv", new gn(v, d)),
      b.setAttribute("faceIndex", new gn(E, p)),
      e.push(b),
      i > $i && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Ol(r, e, t) {
  const n = new wi(r, e, t);
  return (n.texture.mapping = Ls), (n.texture.name = "PMREM.cubeUv"), (n.scissorTest = !0), n;
}
function hs(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Sm(r, e, t) {
  const n = new Float32Array(gi),
    i = new G(0, 1, 0);
  return new Un({
    name: "SphericalGaussianBlur",
    defines: { n: gi, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: ao(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Yn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Fl() {
  return new Un({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: ao(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Yn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Bl() {
  return new Un({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: ao(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Yn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ao() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Em(r) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Da || l === Ua,
        u = l === rr || l === sr;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let h = e.get(a);
          return (
            t === null && (t = new Nl(r)),
            (h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h)),
            e.set(a, h),
            h.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const h = a.image;
            if ((c && h && h.height > 0) || (u && h && i(h))) {
              t === null && (t = new Nl(r));
              const f = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", s), f.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function Tm(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"))
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), i;
    },
  };
}
function ym(r, e, t, n) {
  const i = {},
    s = new WeakMap();
  function o(h) {
    const f = h.target;
    f.index !== null && e.remove(f.index);
    for (const g in f.attributes) e.remove(f.attributes[g]);
    for (const g in f.morphAttributes) {
      const _ = f.morphAttributes[g];
      for (let d = 0, p = _.length; d < p; d++) e.remove(_[d]);
    }
    f.removeEventListener("dispose", o), delete i[f.id];
    const m = s.get(f);
    m && (e.remove(m), s.delete(f)),
      n.releaseStatesOfGeometry(f),
      f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(h, f) {
    return i[f.id] === !0 || (f.addEventListener("dispose", o), (i[f.id] = !0), t.memory.geometries++), f;
  }
  function l(h) {
    const f = h.attributes;
    for (const g in f) e.update(f[g], r.ARRAY_BUFFER);
    const m = h.morphAttributes;
    for (const g in m) {
      const _ = m[g];
      for (let d = 0, p = _.length; d < p; d++) e.update(_[d], r.ARRAY_BUFFER);
    }
  }
  function c(h) {
    const f = [],
      m = h.index,
      g = h.attributes.position;
    let _ = 0;
    if (m !== null) {
      const S = m.array;
      _ = m.version;
      for (let v = 0, E = S.length; v < E; v += 3) {
        const b = S[v + 0],
          A = S[v + 1],
          y = S[v + 2];
        f.push(b, A, A, y, y, b);
      }
    } else if (g !== void 0) {
      const S = g.array;
      _ = g.version;
      for (let v = 0, E = S.length / 3 - 1; v < E; v += 3) {
        const b = v + 0,
          A = v + 1,
          y = v + 2;
        f.push(b, A, A, y, y, b);
      }
    } else return;
    const d = new (Pc(f) ? Bc : Fc)(f, 1);
    d.version = _;
    const p = s.get(h);
    p && e.remove(p), s.set(h, d);
  }
  function u(h) {
    const f = s.get(h);
    if (f) {
      const m = h.index;
      m !== null && f.version < m.version && c(h);
    } else c(h);
    return s.get(h);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function Am(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(m) {
    s = m;
  }
  let a, l;
  function c(m) {
    (a = m.type), (l = m.bytesPerElement);
  }
  function u(m, g) {
    r.drawElements(s, g, a, m * l), t.update(g, s, 1);
  }
  function h(m, g, _) {
    if (_ === 0) return;
    let d, p;
    if (i) (d = r), (p = "drawElementsInstanced");
    else if (((d = e.get("ANGLE_instanced_arrays")), (p = "drawElementsInstancedANGLE"), d === null)) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    d[p](s, g, a, m * l, _), t.update(g, s, _);
  }
  function f(m, g, _) {
    if (_ === 0) return;
    const d = e.get("WEBGL_multi_draw");
    if (d === null) for (let p = 0; p < _; p++) this.render(m[p] / l, g[p]);
    else {
      d.multiDrawElementsWEBGL(s, g, 0, a, m, 0, _);
      let p = 0;
      for (let S = 0; S < _; S++) p += g[S];
      t.update(p, s, 1);
    }
  }
  (this.setMode = o), (this.setIndex = c), (this.render = u), (this.renderInstances = h), (this.renderMultiDraw = f);
}
function bm(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, o, a) {
    switch ((t.calls++, o)) {
      case r.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case r.LINES:
        t.lines += a * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += a * s;
        break;
      case r.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n };
}
function wm(r, e) {
  return r[0] - e[0];
}
function Rm(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function Cm(r, e, t) {
  const n = {},
    i = new Float32Array(8),
    s = new WeakMap(),
    o = new xt(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, h) {
    const f = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color,
        _ = g !== void 0 ? g.length : 0;
      let d = s.get(u);
      if (d === void 0 || d.count !== _) {
        let q = function () {
          w.dispose(), s.delete(u), u.removeEventListener("dispose", q);
        };
        var m = q;
        d !== void 0 && d.texture.dispose();
        const p = u.morphAttributes.position !== void 0,
          S = u.morphAttributes.normal !== void 0,
          v = u.morphAttributes.color !== void 0,
          E = u.morphAttributes.position || [],
          b = u.morphAttributes.normal || [],
          A = u.morphAttributes.color || [];
        let y = 0;
        p === !0 && (y = 1), S === !0 && (y = 2), v === !0 && (y = 3);
        let P = u.attributes.position.count * y,
          D = 1;
        P > e.maxTextureSize && ((D = Math.ceil(P / e.maxTextureSize)), (P = e.maxTextureSize));
        const x = new Float32Array(P * D * 4 * _),
          w = new Uc(x, P, D, _);
        (w.type = Pn), (w.needsUpdate = !0);
        const Y = y * 4;
        for (let C = 0; C < _; C++) {
          const k = E[C],
            F = b[C],
            X = A[C],
            V = P * D * 4 * C;
          for (let $ = 0; $ < k.count; $++) {
            const Z = $ * Y;
            p === !0 &&
              (o.fromBufferAttribute(k, $),
              (x[V + Z + 0] = o.x),
              (x[V + Z + 1] = o.y),
              (x[V + Z + 2] = o.z),
              (x[V + Z + 3] = 0)),
              S === !0 &&
                (o.fromBufferAttribute(F, $),
                (x[V + Z + 4] = o.x),
                (x[V + Z + 5] = o.y),
                (x[V + Z + 6] = o.z),
                (x[V + Z + 7] = 0)),
              v === !0 &&
                (o.fromBufferAttribute(X, $),
                (x[V + Z + 8] = o.x),
                (x[V + Z + 9] = o.y),
                (x[V + Z + 10] = o.z),
                (x[V + Z + 11] = X.itemSize === 4 ? o.w : 1));
          }
        }
        (d = { count: _, texture: w, size: new Be(P, D) }), s.set(u, d), u.addEventListener("dispose", q);
      }
      if (c.isInstancedMesh === !0 && c.morphTexture !== null)
        h.getUniforms().setValue(r, "morphTexture", c.morphTexture, t);
      else {
        let p = 0;
        for (let v = 0; v < f.length; v++) p += f[v];
        const S = u.morphTargetsRelative ? 1 : 1 - p;
        h.getUniforms().setValue(r, "morphTargetBaseInfluence", S),
          h.getUniforms().setValue(r, "morphTargetInfluences", f);
      }
      h.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t),
        h.getUniforms().setValue(r, "morphTargetsTextureSize", d.size);
    } else {
      const g = f === void 0 ? 0 : f.length;
      let _ = n[u.id];
      if (_ === void 0 || _.length !== g) {
        _ = [];
        for (let E = 0; E < g; E++) _[E] = [E, 0];
        n[u.id] = _;
      }
      for (let E = 0; E < g; E++) {
        const b = _[E];
        (b[0] = E), (b[1] = f[E]);
      }
      _.sort(Rm);
      for (let E = 0; E < 8; E++)
        E < g && _[E][1]
          ? ((a[E][0] = _[E][0]), (a[E][1] = _[E][1]))
          : ((a[E][0] = Number.MAX_SAFE_INTEGER), (a[E][1] = 0));
      a.sort(wm);
      const d = u.morphAttributes.position,
        p = u.morphAttributes.normal;
      let S = 0;
      for (let E = 0; E < 8; E++) {
        const b = a[E],
          A = b[0],
          y = b[1];
        A !== Number.MAX_SAFE_INTEGER && y
          ? (d && u.getAttribute("morphTarget" + E) !== d[A] && u.setAttribute("morphTarget" + E, d[A]),
            p && u.getAttribute("morphNormal" + E) !== p[A] && u.setAttribute("morphNormal" + E, p[A]),
            (i[E] = y),
            (S += y))
          : (d && u.hasAttribute("morphTarget" + E) === !0 && u.deleteAttribute("morphTarget" + E),
            p && u.hasAttribute("morphNormal" + E) === !0 && u.deleteAttribute("morphNormal" + E),
            (i[E] = 0));
      }
      const v = u.morphTargetsRelative ? 1 : 1 - S;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", v),
        h.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return { update: l };
}
function Pm(r, e, t, n) {
  let i = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      h = e.get(l, u);
    if (
      (i.get(h) !== c && (e.update(h), i.set(h, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a),
        i.get(l) !== c &&
          (t.update(l.instanceMatrix, r.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER),
          i.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const f = l.skeleton;
      i.get(f) !== c && (f.update(), i.set(f, c));
    }
    return h;
  }
  function o() {
    i = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
class Xc extends ln {
  constructor(e, t, n, i, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : Si), u !== Si && u !== ar))
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Si && (n = kn),
      n === void 0 && u === ar && (n = Mi),
      super(null, i, s, o, a, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : Rt),
      (this.minFilter = l !== void 0 ? l : Rt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const qc = new ln(),
  Yc = new Xc(1, 1);
Yc.compareFunction = Cc;
const Kc = new Uc(),
  $c = new hf(),
  Zc = new Hc(),
  zl = [],
  Gl = [],
  Hl = new Float32Array(16),
  Vl = new Float32Array(9),
  kl = new Float32Array(4);
function pr(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = zl[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (zl[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), r[o].toArray(s, a);
  }
  return s;
}
function ht(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function ft(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function Is(r, e) {
  let t = Gl[e];
  t === void 0 && ((t = new Int32Array(e)), (Gl[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function Lm(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function Dm(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    r.uniform2fv(this.addr, e), ft(t, e);
  }
}
function Um(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b), (t[0] = e.r), (t[1] = e.g), (t[2] = e.b));
  else {
    if (ht(t, e)) return;
    r.uniform3fv(this.addr, e), ft(t, e);
  }
}
function Im(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
  else {
    if (ht(t, e)) return;
    r.uniform4fv(this.addr, e), ft(t, e);
  }
}
function Nm(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    kl.set(n), r.uniformMatrix2fv(this.addr, !1, kl), ft(t, n);
  }
}
function Om(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    Vl.set(n), r.uniformMatrix3fv(this.addr, !1, Vl), ft(t, n);
  }
}
function Fm(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ht(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), ft(t, e);
  } else {
    if (ht(t, n)) return;
    Hl.set(n), r.uniformMatrix4fv(this.addr, !1, Hl), ft(t, n);
  }
}
function Bm(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function zm(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    r.uniform2iv(this.addr, e), ft(t, e);
  }
}
function Gm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3i(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
  else {
    if (ht(t, e)) return;
    r.uniform3iv(this.addr, e), ft(t, e);
  }
}
function Hm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
  else {
    if (ht(t, e)) return;
    r.uniform4iv(this.addr, e), ft(t, e);
  }
}
function Vm(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function km(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ht(t, e)) return;
    r.uniform2uiv(this.addr, e), ft(t, e);
  }
}
function Wm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3ui(this.addr, e.x, e.y, e.z), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z));
  else {
    if (ht(t, e)) return;
    r.uniform3uiv(this.addr, e), ft(t, e);
  }
}
function Xm(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), (t[0] = e.x), (t[1] = e.y), (t[2] = e.z), (t[3] = e.w));
  else {
    if (ht(t, e)) return;
    r.uniform4uiv(this.addr, e), ft(t, e);
  }
}
function qm(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i));
  const s = this.type === r.SAMPLER_2D_SHADOW ? Yc : qc;
  t.setTexture2D(e || s, i);
}
function Ym(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTexture3D(e || $c, i);
}
function Km(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTextureCube(e || Zc, i);
}
function $m(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)), t.setTexture2DArray(e || Kc, i);
}
function Zm(r) {
  switch (r) {
    case 5126:
      return Lm;
    case 35664:
      return Dm;
    case 35665:
      return Um;
    case 35666:
      return Im;
    case 35674:
      return Nm;
    case 35675:
      return Om;
    case 35676:
      return Fm;
    case 5124:
    case 35670:
      return Bm;
    case 35667:
    case 35671:
      return zm;
    case 35668:
    case 35672:
      return Gm;
    case 35669:
    case 35673:
      return Hm;
    case 5125:
      return Vm;
    case 36294:
      return km;
    case 36295:
      return Wm;
    case 36296:
      return Xm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return qm;
    case 35679:
    case 36299:
    case 36307:
      return Ym;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Km;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return $m;
  }
}
function jm(r, e) {
  r.uniform1fv(this.addr, e);
}
function Jm(r, e) {
  const t = pr(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Qm(r, e) {
  const t = pr(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function e_(r, e) {
  const t = pr(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function t_(r, e) {
  const t = pr(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function n_(r, e) {
  const t = pr(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function i_(r, e) {
  const t = pr(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function r_(r, e) {
  r.uniform1iv(this.addr, e);
}
function s_(r, e) {
  r.uniform2iv(this.addr, e);
}
function a_(r, e) {
  r.uniform3iv(this.addr, e);
}
function o_(r, e) {
  r.uniform4iv(this.addr, e);
}
function l_(r, e) {
  r.uniform1uiv(this.addr, e);
}
function c_(r, e) {
  r.uniform2uiv(this.addr, e);
}
function u_(r, e) {
  r.uniform3uiv(this.addr, e);
}
function h_(r, e) {
  r.uniform4uiv(this.addr, e);
}
function f_(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Is(t, i);
  ht(n, s) || (r.uniform1iv(this.addr, s), ft(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || qc, s[o]);
}
function d_(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Is(t, i);
  ht(n, s) || (r.uniform1iv(this.addr, s), ft(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || $c, s[o]);
}
function p_(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Is(t, i);
  ht(n, s) || (r.uniform1iv(this.addr, s), ft(n, s));
  for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || Zc, s[o]);
}
function m_(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = Is(t, i);
  ht(n, s) || (r.uniform1iv(this.addr, s), ft(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || Kc, s[o]);
}
function __(r) {
  switch (r) {
    case 5126:
      return jm;
    case 35664:
      return Jm;
    case 35665:
      return Qm;
    case 35666:
      return e_;
    case 35674:
      return t_;
    case 35675:
      return n_;
    case 35676:
      return i_;
    case 5124:
    case 35670:
      return r_;
    case 35667:
    case 35671:
      return s_;
    case 35668:
    case 35672:
      return a_;
    case 35669:
    case 35673:
      return o_;
    case 5125:
      return l_;
    case 36294:
      return c_;
    case 36295:
      return u_;
    case 36296:
      return h_;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return f_;
    case 35679:
    case 36299:
    case 36307:
      return d_;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return p_;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return m_;
  }
}
class g_ {
  constructor(e, t, n) {
    (this.id = e), (this.addr = n), (this.cache = []), (this.type = t.type), (this.setValue = Zm(t.type));
  }
}
class v_ {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = __(t.type));
  }
}
class x_ {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const xa = /(\w+)(\])?(\[|\.)?/g;
function Wl(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function M_(r, e, t) {
  const n = r.name,
    i = n.length;
  for (xa.lastIndex = 0; ; ) {
    const s = xa.exec(n),
      o = xa.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === i))) {
      Wl(t, c === void 0 ? new g_(a, r, e) : new v_(a, r, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && ((h = new x_(a)), Wl(t, h)), (t = h);
    }
  }
}
class ms {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i),
        o = e.getUniformLocation(t, s.name);
      M_(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Xl(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const S_ = 37297;
let E_ = 0;
function T_(r, e) {
  const t = r.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function y_(r) {
  const e = Xe.getPrimaries(Xe.workingColorSpace),
    t = Xe.getPrimaries(r);
  let n;
  switch (
    (e === t
      ? (n = "")
      : e === Es && t === Ss
      ? (n = "LinearDisplayP3ToLinearSRGB")
      : e === Ss && t === Es && (n = "LinearSRGBToLinearDisplayP3"),
    r)
  ) {
    case ti:
    case Ds:
      return [n, "LinearTransferOETF"];
    case un:
    case ro:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", r), [n, "LinearTransferOETF"];
  }
}
function ql(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      T_(r.getShaderSource(e), o)
    );
  } else return i;
}
function A_(r, e) {
  const t = y_(e);
  return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function b_(r, e) {
  let t;
  switch (e) {
    case Lh:
      t = "Linear";
      break;
    case Dh:
      t = "Reinhard";
      break;
    case Uh:
      t = "OptimizedCineon";
      break;
    case Ih:
      t = "ACESFilmic";
      break;
    case Oh:
      t = "AgX";
      break;
    case Fh:
      t = "Neutral";
      break;
    case Nh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), (t = "Linear");
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function w_(r) {
  return [
    r.extensionDerivatives ||
    r.envMapCubeUVHeight ||
    r.bumpMap ||
    r.normalMapTangentSpace ||
    r.clearcoatNormalMap ||
    r.flatShading ||
    r.alphaToCoverage ||
    r.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) && r.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) && r.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Zi).join(`
`);
}
function R_(r) {
  return [
    r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Zi).join(`
`);
}
function C_(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function P_(r, e) {
  const t = {},
    n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i),
      o = s.name;
    let a = 1;
    s.type === r.FLOAT_MAT2 && (a = 2),
      s.type === r.FLOAT_MAT3 && (a = 3),
      s.type === r.FLOAT_MAT4 && (a = 4),
      (t[o] = { type: s.type, location: r.getAttribLocation(e, o), locationSize: a });
  }
  return t;
}
function Zi(r) {
  return r !== "";
}
function Yl(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Kl(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const L_ = /^[ \t]*#include +<([\w\d./]+)>/gm;
function za(r) {
  return r.replace(L_, U_);
}
const D_ = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"],
]);
function U_(r, e) {
  let t = Le[e];
  if (t === void 0) {
    const n = D_.get(e);
    if (n !== void 0)
      (t = Le[n]), console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return za(t);
}
const I_ =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function $l(r) {
  return r.replace(I_, N_);
}
function N_(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Zl(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;
  return (
    r.isWebGL2 &&
      (e += `precision ${r.precision} sampler3D;
		precision ${r.precision} sampler2DArray;
		precision ${r.precision} sampler2DShadow;
		precision ${r.precision} samplerCubeShadow;
		precision ${r.precision} sampler2DArrayShadow;
		precision ${r.precision} isampler2D;
		precision ${r.precision} isampler3D;
		precision ${r.precision} isamplerCube;
		precision ${r.precision} isampler2DArray;
		precision ${r.precision} usampler2D;
		precision ${r.precision} usampler3D;
		precision ${r.precision} usamplerCube;
		precision ${r.precision} usampler2DArray;
		`),
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function O_(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === xc
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === sh
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : r.shadowMapType === bn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function F_(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case rr:
      case sr:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ls:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function B_(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case sr:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function z_(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case Mc:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Ch:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Ph:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function G_(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function H_(r, e, t, n) {
  const i = r.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = O_(t),
    c = F_(t),
    u = B_(t),
    h = z_(t),
    f = G_(t),
    m = t.isWebGL2 ? "" : w_(t),
    g = R_(t),
    _ = C_(s),
    d = i.createProgram();
  let p,
    S,
    v = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(Zi).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (S = [m, "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _].filter(Zi).join(`
`)),
      S.length > 0 &&
        (S += `
`))
    : ((p = [
        Zl(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
        t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
        t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
        t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
        t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
        t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
        t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
        t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
        t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
        t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Zi).join(`
`)),
      (S = [
        m,
        Zl(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        _,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + h : "",
        f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
        f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
        f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Kn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Kn ? Le.tonemapping_pars_fragment : "",
        t.toneMapping !== Kn ? b_("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Le.colorspace_pars_fragment,
        A_("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Zi).join(`
`))),
    (o = za(o)),
    (o = Yl(o, t)),
    (o = Kl(o, t)),
    (a = za(a)),
    (a = Yl(a, t)),
    (a = Kl(a, t)),
    (o = $l(o)),
    (a = $l(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((v = `#version 300 es
`),
      (p =
        [
          g,
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (S =
        [
          "precision mediump sampler2DArray;",
          "#define varying in",
          t.glslVersion === fl ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === fl ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        S));
  const E = v + p + o,
    b = v + S + a,
    A = Xl(i, i.VERTEX_SHADER, E),
    y = Xl(i, i.FRAGMENT_SHADER, b);
  i.attachShader(d, A),
    i.attachShader(d, y),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(d, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(d, 0, "position"),
    i.linkProgram(d);
  function P(Y) {
    if (r.debug.checkShaderErrors) {
      const q = i.getProgramInfoLog(d).trim(),
        C = i.getShaderInfoLog(A).trim(),
        k = i.getShaderInfoLog(y).trim();
      let F = !0,
        X = !0;
      if (i.getProgramParameter(d, i.LINK_STATUS) === !1)
        if (((F = !1), typeof r.debug.onShaderError == "function")) r.debug.onShaderError(i, d, A, y);
        else {
          const V = ql(i, A, "vertex"),
            $ = ql(i, y, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(d, i.VALIDATE_STATUS) +
              `

Material Name: ` +
              Y.name +
              `
Material Type: ` +
              Y.type +
              `

Program Info Log: ` +
              q +
              `
` +
              V +
              `
` +
              $
          );
        }
      else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (C === "" || k === "") && (X = !1);
      X &&
        (Y.diagnostics = {
          runnable: F,
          programLog: q,
          vertexShader: { log: C, prefix: p },
          fragmentShader: { log: k, prefix: S },
        });
    }
    i.deleteShader(A), i.deleteShader(y), (D = new ms(i, d)), (x = P_(i, d));
  }
  let D;
  this.getUniforms = function () {
    return D === void 0 && P(this), D;
  };
  let x;
  this.getAttributes = function () {
    return x === void 0 && P(this), x;
  };
  let w = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return w === !1 && (w = i.getProgramParameter(d, S_)), w;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this), i.deleteProgram(d), (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = E_++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = d),
    (this.vertexShader = A),
    (this.fragmentShader = y),
    this
  );
}
let V_ = 0;
class k_ {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new W_(e)), t.set(e, n)), n;
  }
}
class W_ {
  constructor(e) {
    (this.id = V_++), (this.code = e), (this.usedTimes = 0);
  }
}
function X_(r, e, t, n, i, s, o) {
  const a = new Ic(),
    l = new k_(),
    c = new Set(),
    u = [],
    h = i.isWebGL2,
    f = i.logarithmicDepthBuffer,
    m = i.vertexTextures;
  let g = i.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function d(x) {
    return c.add(x), x === 0 ? "uv" : `uv${x}`;
  }
  function p(x, w, Y, q, C) {
    const k = q.fog,
      F = C.geometry,
      X = x.isMeshStandardMaterial ? q.environment : null,
      V = (x.isMeshStandardMaterial ? t : e).get(x.envMap || X),
      $ = V && V.mapping === Ls ? V.image.height : null,
      Z = _[x.type];
    x.precision !== null &&
      ((g = i.getMaxPrecision(x.precision)),
      g !== x.precision &&
        console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", g, "instead."));
    const ee = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color,
      le = ee !== void 0 ? ee.length : 0;
    let Ee = 0;
    F.morphAttributes.position !== void 0 && (Ee = 1),
      F.morphAttributes.normal !== void 0 && (Ee = 2),
      F.morphAttributes.color !== void 0 && (Ee = 3);
    let B, j, ue, Te;
    if (Z) {
      const Ye = fn[Z];
      (B = Ye.vertexShader), (j = Ye.fragmentShader);
    } else
      (B = x.vertexShader),
        (j = x.fragmentShader),
        l.update(x),
        (ue = l.getVertexShaderID(x)),
        (Te = l.getFragmentShaderID(x));
    const me = r.getRenderTarget(),
      he = C.isInstancedMesh === !0,
      ke = C.isBatchedMesh === !0,
      ye = !!x.map,
      I = !!x.matcap,
      gt = !!V,
      ge = !!x.aoMap,
      Ne = !!x.lightMap,
      xe = !!x.bumpMap,
      He = !!x.normalMap,
      Ue = !!x.displacementMap,
      Oe = !!x.emissiveMap,
      rt = !!x.metalnessMap,
      R = !!x.roughnessMap,
      M = x.anisotropy > 0,
      W = x.clearcoat > 0,
      K = x.iridescence > 0,
      Q = x.sheen > 0,
      J = x.transmission > 0,
      Re = M && !!x.anisotropyMap,
      Me = W && !!x.clearcoatMap,
      re = W && !!x.clearcoatNormalMap,
      ae = W && !!x.clearcoatRoughnessMap,
      Ce = K && !!x.iridescenceMap,
      te = K && !!x.iridescenceThicknessMap,
      ot = Q && !!x.sheenColorMap,
      Fe = Q && !!x.sheenRoughnessMap,
      _e = !!x.specularMap,
      fe = !!x.specularColorMap,
      de = !!x.specularIntensityMap,
      Ve = J && !!x.transmissionMap,
      be = J && !!x.thicknessMap,
      je = !!x.gradientMap,
      L = !!x.alphaMap,
      se = x.alphaTest > 0,
      O = !!x.alphaHash,
      ne = !!x.extensions;
    let oe = Kn;
    x.toneMapped && (me === null || me.isXRRenderTarget === !0) && (oe = r.toneMapping);
    const ze = {
      isWebGL2: h,
      shaderID: Z,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: B,
      fragmentShader: j,
      defines: x.defines,
      customVertexShaderID: ue,
      customFragmentShaderID: Te,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: g,
      batching: ke,
      instancing: he,
      instancingColor: he && C.instanceColor !== null,
      instancingMorph: he && C.morphTexture !== null,
      supportsVertexTextures: m,
      outputColorSpace: me === null ? r.outputColorSpace : me.isXRRenderTarget === !0 ? me.texture.colorSpace : ti,
      alphaToCoverage: !!x.alphaToCoverage,
      map: ye,
      matcap: I,
      envMap: gt,
      envMapMode: gt && V.mapping,
      envMapCubeUVHeight: $,
      aoMap: ge,
      lightMap: Ne,
      bumpMap: xe,
      normalMap: He,
      displacementMap: m && Ue,
      emissiveMap: Oe,
      normalMapObjectSpace: He && x.normalMapType === $h,
      normalMapTangentSpace: He && x.normalMapType === Kh,
      metalnessMap: rt,
      roughnessMap: R,
      anisotropy: M,
      anisotropyMap: Re,
      clearcoat: W,
      clearcoatMap: Me,
      clearcoatNormalMap: re,
      clearcoatRoughnessMap: ae,
      iridescence: K,
      iridescenceMap: Ce,
      iridescenceThicknessMap: te,
      sheen: Q,
      sheenColorMap: ot,
      sheenRoughnessMap: Fe,
      specularMap: _e,
      specularColorMap: fe,
      specularIntensityMap: de,
      transmission: J,
      transmissionMap: Ve,
      thicknessMap: be,
      gradientMap: je,
      opaque: x.transparent === !1 && x.blending === Qi && x.alphaToCoverage === !1,
      alphaMap: L,
      alphaTest: se,
      alphaHash: O,
      combine: x.combine,
      mapUv: ye && d(x.map.channel),
      aoMapUv: ge && d(x.aoMap.channel),
      lightMapUv: Ne && d(x.lightMap.channel),
      bumpMapUv: xe && d(x.bumpMap.channel),
      normalMapUv: He && d(x.normalMap.channel),
      displacementMapUv: Ue && d(x.displacementMap.channel),
      emissiveMapUv: Oe && d(x.emissiveMap.channel),
      metalnessMapUv: rt && d(x.metalnessMap.channel),
      roughnessMapUv: R && d(x.roughnessMap.channel),
      anisotropyMapUv: Re && d(x.anisotropyMap.channel),
      clearcoatMapUv: Me && d(x.clearcoatMap.channel),
      clearcoatNormalMapUv: re && d(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ae && d(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ce && d(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: te && d(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: ot && d(x.sheenColorMap.channel),
      sheenRoughnessMapUv: Fe && d(x.sheenRoughnessMap.channel),
      specularMapUv: _e && d(x.specularMap.channel),
      specularColorMapUv: fe && d(x.specularColorMap.channel),
      specularIntensityMapUv: de && d(x.specularIntensityMap.channel),
      transmissionMapUv: Ve && d(x.transmissionMap.channel),
      thicknessMapUv: be && d(x.thicknessMap.channel),
      alphaMapUv: L && d(x.alphaMap.channel),
      vertexTangents: !!F.attributes.tangent && (He || M),
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4,
      pointsUvs: C.isPoints === !0 && !!F.attributes.uv && (ye || L),
      fog: !!k,
      useFog: x.fog === !0,
      fogExp2: !!k && k.isFogExp2,
      flatShading: x.flatShading === !0,
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      skinning: C.isSkinnedMesh === !0,
      morphTargets: F.morphAttributes.position !== void 0,
      morphNormals: F.morphAttributes.normal !== void 0,
      morphColors: F.morphAttributes.color !== void 0,
      morphTargetsCount: le,
      morphTextureStride: Ee,
      numDirLights: w.directional.length,
      numPointLights: w.point.length,
      numSpotLights: w.spot.length,
      numSpotLightMaps: w.spotLightMap.length,
      numRectAreaLights: w.rectArea.length,
      numHemiLights: w.hemi.length,
      numDirLightShadows: w.directionalShadowMap.length,
      numPointLightShadows: w.pointShadowMap.length,
      numSpotLightShadows: w.spotShadowMap.length,
      numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps,
      numLightProbes: w.numLightProbes,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: r.shadowMap.enabled && Y.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: oe,
      useLegacyLights: r._useLegacyLights,
      decodeVideoTexture: ye && x.map.isVideoTexture === !0 && Xe.getTransfer(x.map.colorSpace) === Ze,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Cn,
      flipSided: x.side === Ut,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: ne && x.extensions.derivatives === !0,
      extensionFragDepth: ne && x.extensions.fragDepth === !0,
      extensionDrawBuffers: ne && x.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ne && x.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: ne && x.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: ne && x.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
    return (ze.vertexUv1s = c.has(1)), (ze.vertexUv2s = c.has(2)), (ze.vertexUv3s = c.has(3)), c.clear(), ze;
  }
  function S(x) {
    const w = [];
    if (
      (x.shaderID ? w.push(x.shaderID) : (w.push(x.customVertexShaderID), w.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const Y in x.defines) w.push(Y), w.push(x.defines[Y]);
    return (
      x.isRawShaderMaterial === !1 && (v(w, x), E(w, x), w.push(r.outputColorSpace)),
      w.push(x.customProgramCacheKey),
      w.join()
    );
  }
  function v(x, w) {
    x.push(w.precision),
      x.push(w.outputColorSpace),
      x.push(w.envMapMode),
      x.push(w.envMapCubeUVHeight),
      x.push(w.mapUv),
      x.push(w.alphaMapUv),
      x.push(w.lightMapUv),
      x.push(w.aoMapUv),
      x.push(w.bumpMapUv),
      x.push(w.normalMapUv),
      x.push(w.displacementMapUv),
      x.push(w.emissiveMapUv),
      x.push(w.metalnessMapUv),
      x.push(w.roughnessMapUv),
      x.push(w.anisotropyMapUv),
      x.push(w.clearcoatMapUv),
      x.push(w.clearcoatNormalMapUv),
      x.push(w.clearcoatRoughnessMapUv),
      x.push(w.iridescenceMapUv),
      x.push(w.iridescenceThicknessMapUv),
      x.push(w.sheenColorMapUv),
      x.push(w.sheenRoughnessMapUv),
      x.push(w.specularMapUv),
      x.push(w.specularColorMapUv),
      x.push(w.specularIntensityMapUv),
      x.push(w.transmissionMapUv),
      x.push(w.thicknessMapUv),
      x.push(w.combine),
      x.push(w.fogExp2),
      x.push(w.sizeAttenuation),
      x.push(w.morphTargetsCount),
      x.push(w.morphAttributeCount),
      x.push(w.numDirLights),
      x.push(w.numPointLights),
      x.push(w.numSpotLights),
      x.push(w.numSpotLightMaps),
      x.push(w.numHemiLights),
      x.push(w.numRectAreaLights),
      x.push(w.numDirLightShadows),
      x.push(w.numPointLightShadows),
      x.push(w.numSpotLightShadows),
      x.push(w.numSpotLightShadowsWithMaps),
      x.push(w.numLightProbes),
      x.push(w.shadowMapType),
      x.push(w.toneMapping),
      x.push(w.numClippingPlanes),
      x.push(w.numClipIntersection),
      x.push(w.depthPacking);
  }
  function E(x, w) {
    a.disableAll(),
      w.isWebGL2 && a.enable(0),
      w.supportsVertexTextures && a.enable(1),
      w.instancing && a.enable(2),
      w.instancingColor && a.enable(3),
      w.instancingMorph && a.enable(4),
      w.matcap && a.enable(5),
      w.envMap && a.enable(6),
      w.normalMapObjectSpace && a.enable(7),
      w.normalMapTangentSpace && a.enable(8),
      w.clearcoat && a.enable(9),
      w.iridescence && a.enable(10),
      w.alphaTest && a.enable(11),
      w.vertexColors && a.enable(12),
      w.vertexAlphas && a.enable(13),
      w.vertexUv1s && a.enable(14),
      w.vertexUv2s && a.enable(15),
      w.vertexUv3s && a.enable(16),
      w.vertexTangents && a.enable(17),
      w.anisotropy && a.enable(18),
      w.alphaHash && a.enable(19),
      w.batching && a.enable(20),
      x.push(a.mask),
      a.disableAll(),
      w.fog && a.enable(0),
      w.useFog && a.enable(1),
      w.flatShading && a.enable(2),
      w.logarithmicDepthBuffer && a.enable(3),
      w.skinning && a.enable(4),
      w.morphTargets && a.enable(5),
      w.morphNormals && a.enable(6),
      w.morphColors && a.enable(7),
      w.premultipliedAlpha && a.enable(8),
      w.shadowMapEnabled && a.enable(9),
      w.useLegacyLights && a.enable(10),
      w.doubleSided && a.enable(11),
      w.flipSided && a.enable(12),
      w.useDepthPacking && a.enable(13),
      w.dithering && a.enable(14),
      w.transmission && a.enable(15),
      w.sheen && a.enable(16),
      w.opaque && a.enable(17),
      w.pointsUvs && a.enable(18),
      w.decodeVideoTexture && a.enable(19),
      w.alphaToCoverage && a.enable(20),
      x.push(a.mask);
  }
  function b(x) {
    const w = _[x.type];
    let Y;
    if (w) {
      const q = fn[w];
      Y = Af.clone(q.uniforms);
    } else Y = x.uniforms;
    return Y;
  }
  function A(x, w) {
    let Y;
    for (let q = 0, C = u.length; q < C; q++) {
      const k = u[q];
      if (k.cacheKey === w) {
        (Y = k), ++Y.usedTimes;
        break;
      }
    }
    return Y === void 0 && ((Y = new H_(r, w, x, s)), u.push(Y)), Y;
  }
  function y(x) {
    if (--x.usedTimes === 0) {
      const w = u.indexOf(x);
      (u[w] = u[u.length - 1]), u.pop(), x.destroy();
    }
  }
  function P(x) {
    l.remove(x);
  }
  function D() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: S,
    getUniforms: b,
    acquireProgram: A,
    releaseProgram: y,
    releaseShaderCache: P,
    programs: u,
    dispose: D,
  };
}
function q_() {
  let r = new WeakMap();
  function e(s) {
    let o = r.get(s);
    return o === void 0 && ((o = {}), r.set(s, o)), o;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, o, a) {
    r.get(s)[o] = a;
  }
  function i() {
    r = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Y_(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}
function jl(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}
function Jl() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(h, f, m, g, _, d) {
    let p = r[e];
    return (
      p === void 0
        ? ((p = {
            id: h.id,
            object: h,
            geometry: f,
            material: m,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: _,
            group: d,
          }),
          (r[e] = p))
        : ((p.id = h.id),
          (p.object = h),
          (p.geometry = f),
          (p.material = m),
          (p.groupOrder = g),
          (p.renderOrder = h.renderOrder),
          (p.z = _),
          (p.group = d)),
      e++,
      p
    );
  }
  function a(h, f, m, g, _, d) {
    const p = o(h, f, m, g, _, d);
    m.transmission > 0 ? n.push(p) : m.transparent === !0 ? i.push(p) : t.push(p);
  }
  function l(h, f, m, g, _, d) {
    const p = o(h, f, m, g, _, d);
    m.transmission > 0 ? n.unshift(p) : m.transparent === !0 ? i.unshift(p) : t.unshift(p);
  }
  function c(h, f) {
    t.length > 1 && t.sort(h || Y_), n.length > 1 && n.sort(f || jl), i.length > 1 && i.sort(f || jl);
  }
  function u() {
    for (let h = e, f = r.length; h < f; h++) {
      const m = r[h];
      if (m.id === null) break;
      (m.id = null), (m.object = null), (m.geometry = null), (m.material = null), (m.group = null);
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: s, push: a, unshift: l, finish: u, sort: c };
}
function K_() {
  let r = new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let o;
    return s === void 0 ? ((o = new Jl()), r.set(n, [o])) : i >= s.length ? ((o = new Jl()), s.push(o)) : (o = s[i]), o;
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function $_() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new G(), color: new We() };
          break;
        case "SpotLight":
          t = {
            position: new G(),
            direction: new G(),
            color: new We(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new G(), color: new We(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new G(), skyColor: new We(), groundColor: new We() };
          break;
        case "RectAreaLight":
          t = { color: new We(), position: new G(), halfWidth: new G(), halfHeight: new G() };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
function Z_() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Be() };
          break;
        case "SpotLight":
          t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Be() };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Be(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
let j_ = 0;
function J_(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function Q_(r, e) {
  const t = new $_(),
    n = Z_(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let u = 0; u < 9; u++) i.probe.push(new G());
  const s = new G(),
    o = new ut(),
    a = new ut();
  function l(u, h) {
    let f = 0,
      m = 0,
      g = 0;
    for (let Y = 0; Y < 9; Y++) i.probe[Y].set(0, 0, 0);
    let _ = 0,
      d = 0,
      p = 0,
      S = 0,
      v = 0,
      E = 0,
      b = 0,
      A = 0,
      y = 0,
      P = 0,
      D = 0;
    u.sort(J_);
    const x = h === !0 ? Math.PI : 1;
    for (let Y = 0, q = u.length; Y < q; Y++) {
      const C = u[Y],
        k = C.color,
        F = C.intensity,
        X = C.distance,
        V = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight) (f += k.r * F * x), (m += k.g * F * x), (g += k.b * F * x);
      else if (C.isLightProbe) {
        for (let $ = 0; $ < 9; $++) i.probe[$].addScaledVector(C.sh.coefficients[$], F);
        D++;
      } else if (C.isDirectionalLight) {
        const $ = t.get(C);
        if (($.color.copy(C.color).multiplyScalar(C.intensity * x), C.castShadow)) {
          const Z = C.shadow,
            ee = n.get(C);
          (ee.shadowBias = Z.bias),
            (ee.shadowNormalBias = Z.normalBias),
            (ee.shadowRadius = Z.radius),
            (ee.shadowMapSize = Z.mapSize),
            (i.directionalShadow[_] = ee),
            (i.directionalShadowMap[_] = V),
            (i.directionalShadowMatrix[_] = C.shadow.matrix),
            E++;
        }
        (i.directional[_] = $), _++;
      } else if (C.isSpotLight) {
        const $ = t.get(C);
        $.position.setFromMatrixPosition(C.matrixWorld),
          $.color.copy(k).multiplyScalar(F * x),
          ($.distance = X),
          ($.coneCos = Math.cos(C.angle)),
          ($.penumbraCos = Math.cos(C.angle * (1 - C.penumbra))),
          ($.decay = C.decay),
          (i.spot[p] = $);
        const Z = C.shadow;
        if (
          (C.map && ((i.spotLightMap[y] = C.map), y++, Z.updateMatrices(C), C.castShadow && P++),
          (i.spotLightMatrix[p] = Z.matrix),
          C.castShadow)
        ) {
          const ee = n.get(C);
          (ee.shadowBias = Z.bias),
            (ee.shadowNormalBias = Z.normalBias),
            (ee.shadowRadius = Z.radius),
            (ee.shadowMapSize = Z.mapSize),
            (i.spotShadow[p] = ee),
            (i.spotShadowMap[p] = V),
            A++;
        }
        p++;
      } else if (C.isRectAreaLight) {
        const $ = t.get(C);
        $.color.copy(k).multiplyScalar(F),
          $.halfWidth.set(C.width * 0.5, 0, 0),
          $.halfHeight.set(0, C.height * 0.5, 0),
          (i.rectArea[S] = $),
          S++;
      } else if (C.isPointLight) {
        const $ = t.get(C);
        if (
          ($.color.copy(C.color).multiplyScalar(C.intensity * x),
          ($.distance = C.distance),
          ($.decay = C.decay),
          C.castShadow)
        ) {
          const Z = C.shadow,
            ee = n.get(C);
          (ee.shadowBias = Z.bias),
            (ee.shadowNormalBias = Z.normalBias),
            (ee.shadowRadius = Z.radius),
            (ee.shadowMapSize = Z.mapSize),
            (ee.shadowCameraNear = Z.camera.near),
            (ee.shadowCameraFar = Z.camera.far),
            (i.pointShadow[d] = ee),
            (i.pointShadowMap[d] = V),
            (i.pointShadowMatrix[d] = C.shadow.matrix),
            b++;
        }
        (i.point[d] = $), d++;
      } else if (C.isHemisphereLight) {
        const $ = t.get(C);
        $.skyColor.copy(C.color).multiplyScalar(F * x),
          $.groundColor.copy(C.groundColor).multiplyScalar(F * x),
          (i.hemi[v] = $),
          v++;
      }
    }
    S > 0 &&
      (e.isWebGL2
        ? r.has("OES_texture_float_linear") === !0
          ? ((i.rectAreaLTC1 = ie.LTC_FLOAT_1), (i.rectAreaLTC2 = ie.LTC_FLOAT_2))
          : ((i.rectAreaLTC1 = ie.LTC_HALF_1), (i.rectAreaLTC2 = ie.LTC_HALF_2))
        : r.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ie.LTC_FLOAT_1), (i.rectAreaLTC2 = ie.LTC_FLOAT_2))
        : r.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = ie.LTC_HALF_1), (i.rectAreaLTC2 = ie.LTC_HALF_2))
        : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),
      (i.ambient[0] = f),
      (i.ambient[1] = m),
      (i.ambient[2] = g);
    const w = i.hash;
    (w.directionalLength !== _ ||
      w.pointLength !== d ||
      w.spotLength !== p ||
      w.rectAreaLength !== S ||
      w.hemiLength !== v ||
      w.numDirectionalShadows !== E ||
      w.numPointShadows !== b ||
      w.numSpotShadows !== A ||
      w.numSpotMaps !== y ||
      w.numLightProbes !== D) &&
      ((i.directional.length = _),
      (i.spot.length = p),
      (i.rectArea.length = S),
      (i.point.length = d),
      (i.hemi.length = v),
      (i.directionalShadow.length = E),
      (i.directionalShadowMap.length = E),
      (i.pointShadow.length = b),
      (i.pointShadowMap.length = b),
      (i.spotShadow.length = A),
      (i.spotShadowMap.length = A),
      (i.directionalShadowMatrix.length = E),
      (i.pointShadowMatrix.length = b),
      (i.spotLightMatrix.length = A + y - P),
      (i.spotLightMap.length = y),
      (i.numSpotLightShadowsWithMaps = P),
      (i.numLightProbes = D),
      (w.directionalLength = _),
      (w.pointLength = d),
      (w.spotLength = p),
      (w.rectAreaLength = S),
      (w.hemiLength = v),
      (w.numDirectionalShadows = E),
      (w.numPointShadows = b),
      (w.numSpotShadows = A),
      (w.numSpotMaps = y),
      (w.numLightProbes = D),
      (i.version = j_++));
  }
  function c(u, h) {
    let f = 0,
      m = 0,
      g = 0,
      _ = 0,
      d = 0;
    const p = h.matrixWorldInverse;
    for (let S = 0, v = u.length; S < v; S++) {
      const E = u[S];
      if (E.isDirectionalLight) {
        const b = i.directional[f];
        b.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          b.direction.sub(s),
          b.direction.transformDirection(p),
          f++;
      } else if (E.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(E.matrixWorld),
          b.position.applyMatrix4(p),
          b.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          b.direction.sub(s),
          b.direction.transformDirection(p),
          g++;
      } else if (E.isRectAreaLight) {
        const b = i.rectArea[_];
        b.position.setFromMatrixPosition(E.matrixWorld),
          b.position.applyMatrix4(p),
          a.identity(),
          o.copy(E.matrixWorld),
          o.premultiply(p),
          a.extractRotation(o),
          b.halfWidth.set(E.width * 0.5, 0, 0),
          b.halfHeight.set(0, E.height * 0.5, 0),
          b.halfWidth.applyMatrix4(a),
          b.halfHeight.applyMatrix4(a),
          _++;
      } else if (E.isPointLight) {
        const b = i.point[m];
        b.position.setFromMatrixPosition(E.matrixWorld), b.position.applyMatrix4(p), m++;
      } else if (E.isHemisphereLight) {
        const b = i.hemi[d];
        b.direction.setFromMatrixPosition(E.matrixWorld), b.direction.transformDirection(p), d++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function Ql(r, e) {
  const t = new Q_(r, e),
    n = [],
    i = [];
  function s() {
    (n.length = 0), (i.length = 0);
  }
  function o(h) {
    n.push(h);
  }
  function a(h) {
    i.push(h);
  }
  function l(h) {
    t.setup(n, h);
  }
  function c(h) {
    t.setupView(n, h);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function eg(r, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0 ? ((l = new Ql(r, e)), t.set(s, [l])) : o >= a.length ? ((l = new Ql(r, e)), a.push(l)) : (l = a[o]),
      l
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class tg extends Us {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = qh),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class ng extends Us {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const ig = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  rg = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function sg(r, e, t) {
  let n = new Vc();
  const i = new Be(),
    s = new Be(),
    o = new xt(),
    a = new tg({ depthPacking: Yh }),
    l = new ng(),
    c = {},
    u = t.maxTextureSize,
    h = { [Jn]: Ut, [Ut]: Jn, [Cn]: Cn },
    f = new Un({
      defines: { VSM_SAMPLES: 8 },
      uniforms: { shadow_pass: { value: null }, resolution: { value: new Be() }, radius: { value: 4 } },
      vertexShader: ig,
      fragmentShader: rg,
    }),
    m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new Pi();
  g.setAttribute("position", new gn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new mn(g, f),
    d = this;
  (this.enabled = !1), (this.autoUpdate = !0), (this.needsUpdate = !1), (this.type = xc);
  let p = this.type;
  this.render = function (A, y, P) {
    if (d.enabled === !1 || (d.autoUpdate === !1 && d.needsUpdate === !1) || A.length === 0) return;
    const D = r.getRenderTarget(),
      x = r.getActiveCubeFace(),
      w = r.getActiveMipmapLevel(),
      Y = r.state;
    Y.setBlending(Yn), Y.buffers.color.setClear(1, 1, 1, 1), Y.buffers.depth.setTest(!0), Y.setScissorTest(!1);
    const q = p !== bn && this.type === bn,
      C = p === bn && this.type !== bn;
    for (let k = 0, F = A.length; k < F; k++) {
      const X = A[k],
        V = X.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      i.copy(V.mapSize);
      const $ = V.getFrameExtents();
      if (
        (i.multiply($),
        s.copy(V.mapSize),
        (i.x > u || i.y > u) &&
          (i.x > u && ((s.x = Math.floor(u / $.x)), (i.x = s.x * $.x), (V.mapSize.x = s.x)),
          i.y > u && ((s.y = Math.floor(u / $.y)), (i.y = s.y * $.y), (V.mapSize.y = s.y))),
        V.map === null || q === !0 || C === !0)
      ) {
        const ee = this.type !== bn ? { minFilter: Rt, magFilter: Rt } : {};
        V.map !== null && V.map.dispose(),
          (V.map = new wi(i.x, i.y, ee)),
          (V.map.texture.name = X.name + ".shadowMap"),
          V.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(V.map), r.clear();
      const Z = V.getViewportCount();
      for (let ee = 0; ee < Z; ee++) {
        const le = V.getViewport(ee);
        o.set(s.x * le.x, s.y * le.y, s.x * le.z, s.y * le.w),
          Y.viewport(o),
          V.updateMatrices(X, ee),
          (n = V.getFrustum()),
          E(y, P, V.camera, X, this.type);
      }
      V.isPointLightShadow !== !0 && this.type === bn && S(V, P), (V.needsUpdate = !1);
    }
    (p = this.type), (d.needsUpdate = !1), r.setRenderTarget(D, x, w);
  };
  function S(A, y) {
    const P = e.update(_);
    f.defines.VSM_SAMPLES !== A.blurSamples &&
      ((f.defines.VSM_SAMPLES = A.blurSamples),
      (m.defines.VSM_SAMPLES = A.blurSamples),
      (f.needsUpdate = !0),
      (m.needsUpdate = !0)),
      A.mapPass === null && (A.mapPass = new wi(i.x, i.y)),
      (f.uniforms.shadow_pass.value = A.map.texture),
      (f.uniforms.resolution.value = A.mapSize),
      (f.uniforms.radius.value = A.radius),
      r.setRenderTarget(A.mapPass),
      r.clear(),
      r.renderBufferDirect(y, null, P, f, _, null),
      (m.uniforms.shadow_pass.value = A.mapPass.texture),
      (m.uniforms.resolution.value = A.mapSize),
      (m.uniforms.radius.value = A.radius),
      r.setRenderTarget(A.map),
      r.clear(),
      r.renderBufferDirect(y, null, P, m, _, null);
  }
  function v(A, y, P, D) {
    let x = null;
    const w = P.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (w !== void 0) x = w;
    else if (
      ((x = P.isPointLight === !0 ? l : a),
      (r.localClippingEnabled &&
        y.clipShadows === !0 &&
        Array.isArray(y.clippingPlanes) &&
        y.clippingPlanes.length !== 0) ||
        (y.displacementMap && y.displacementScale !== 0) ||
        (y.alphaMap && y.alphaTest > 0) ||
        (y.map && y.alphaTest > 0))
    ) {
      const Y = x.uuid,
        q = y.uuid;
      let C = c[Y];
      C === void 0 && ((C = {}), (c[Y] = C));
      let k = C[q];
      k === void 0 && ((k = x.clone()), (C[q] = k), y.addEventListener("dispose", b)), (x = k);
    }
    if (
      ((x.visible = y.visible),
      (x.wireframe = y.wireframe),
      D === bn
        ? (x.side = y.shadowSide !== null ? y.shadowSide : y.side)
        : (x.side = y.shadowSide !== null ? y.shadowSide : h[y.side]),
      (x.alphaMap = y.alphaMap),
      (x.alphaTest = y.alphaTest),
      (x.map = y.map),
      (x.clipShadows = y.clipShadows),
      (x.clippingPlanes = y.clippingPlanes),
      (x.clipIntersection = y.clipIntersection),
      (x.displacementMap = y.displacementMap),
      (x.displacementScale = y.displacementScale),
      (x.displacementBias = y.displacementBias),
      (x.wireframeLinewidth = y.wireframeLinewidth),
      (x.linewidth = y.linewidth),
      P.isPointLight === !0 && x.isMeshDistanceMaterial === !0)
    ) {
      const Y = r.properties.get(x);
      Y.light = P;
    }
    return x;
  }
  function E(A, y, P, D, x) {
    if (A.visible === !1) return;
    if (
      A.layers.test(y.layers) &&
      (A.isMesh || A.isLine || A.isPoints) &&
      (A.castShadow || (A.receiveShadow && x === bn)) &&
      (!A.frustumCulled || n.intersectsObject(A))
    ) {
      A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse, A.matrixWorld);
      const q = e.update(A),
        C = A.material;
      if (Array.isArray(C)) {
        const k = q.groups;
        for (let F = 0, X = k.length; F < X; F++) {
          const V = k[F],
            $ = C[V.materialIndex];
          if ($ && $.visible) {
            const Z = v(A, $, D, x);
            A.onBeforeShadow(r, A, y, P, q, Z, V),
              r.renderBufferDirect(P, null, q, Z, A, V),
              A.onAfterShadow(r, A, y, P, q, Z, V);
          }
        }
      } else if (C.visible) {
        const k = v(A, C, D, x);
        A.onBeforeShadow(r, A, y, P, q, k, null),
          r.renderBufferDirect(P, null, q, k, A, null),
          A.onAfterShadow(r, A, y, P, q, k, null);
      }
    }
    const Y = A.children;
    for (let q = 0, C = Y.length; q < C; q++) E(Y[q], y, P, D, x);
  }
  function b(A) {
    A.target.removeEventListener("dispose", b);
    for (const P in c) {
      const D = c[P],
        x = A.target.uuid;
      x in D && (D[x].dispose(), delete D[x]);
    }
  }
}
function ag(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let L = !1;
    const se = new xt();
    let O = null;
    const ne = new xt(0, 0, 0, 0);
    return {
      setMask: function (oe) {
        O !== oe && !L && (r.colorMask(oe, oe, oe, oe), (O = oe));
      },
      setLocked: function (oe) {
        L = oe;
      },
      setClear: function (oe, ze, Ye, vt, Kt) {
        Kt === !0 && ((oe *= vt), (ze *= vt), (Ye *= vt)),
          se.set(oe, ze, Ye, vt),
          ne.equals(se) === !1 && (r.clearColor(oe, ze, Ye, vt), ne.copy(se));
      },
      reset: function () {
        (L = !1), (O = null), ne.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let L = !1,
      se = null,
      O = null,
      ne = null;
    return {
      setTest: function (oe) {
        oe ? he(r.DEPTH_TEST) : ke(r.DEPTH_TEST);
      },
      setMask: function (oe) {
        se !== oe && !L && (r.depthMask(oe), (se = oe));
      },
      setFunc: function (oe) {
        if (O !== oe) {
          switch (oe) {
            case Eh:
              r.depthFunc(r.NEVER);
              break;
            case Th:
              r.depthFunc(r.ALWAYS);
              break;
            case yh:
              r.depthFunc(r.LESS);
              break;
            case xs:
              r.depthFunc(r.LEQUAL);
              break;
            case Ah:
              r.depthFunc(r.EQUAL);
              break;
            case bh:
              r.depthFunc(r.GEQUAL);
              break;
            case wh:
              r.depthFunc(r.GREATER);
              break;
            case Rh:
              r.depthFunc(r.NOTEQUAL);
              break;
            default:
              r.depthFunc(r.LEQUAL);
          }
          O = oe;
        }
      },
      setLocked: function (oe) {
        L = oe;
      },
      setClear: function (oe) {
        ne !== oe && (r.clearDepth(oe), (ne = oe));
      },
      reset: function () {
        (L = !1), (se = null), (O = null), (ne = null);
      },
    };
  }
  function o() {
    let L = !1,
      se = null,
      O = null,
      ne = null,
      oe = null,
      ze = null,
      Ye = null,
      vt = null,
      Kt = null;
    return {
      setTest: function (Ke) {
        L || (Ke ? he(r.STENCIL_TEST) : ke(r.STENCIL_TEST));
      },
      setMask: function (Ke) {
        se !== Ke && !L && (r.stencilMask(Ke), (se = Ke));
      },
      setFunc: function (Ke, bt, cn) {
        (O !== Ke || ne !== bt || oe !== cn) && (r.stencilFunc(Ke, bt, cn), (O = Ke), (ne = bt), (oe = cn));
      },
      setOp: function (Ke, bt, cn) {
        (ze !== Ke || Ye !== bt || vt !== cn) && (r.stencilOp(Ke, bt, cn), (ze = Ke), (Ye = bt), (vt = cn));
      },
      setLocked: function (Ke) {
        L = Ke;
      },
      setClear: function (Ke) {
        Kt !== Ke && (r.clearStencil(Ke), (Kt = Ke));
      },
      reset: function () {
        (L = !1), (se = null), (O = null), (ne = null), (oe = null), (ze = null), (Ye = null), (vt = null), (Kt = null);
      },
    };
  }
  const a = new i(),
    l = new s(),
    c = new o(),
    u = new WeakMap(),
    h = new WeakMap();
  let f = {},
    m = {},
    g = new WeakMap(),
    _ = [],
    d = null,
    p = !1,
    S = null,
    v = null,
    E = null,
    b = null,
    A = null,
    y = null,
    P = null,
    D = new We(0, 0, 0),
    x = 0,
    w = !1,
    Y = null,
    q = null,
    C = null,
    k = null,
    F = null;
  const X = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1,
    $ = 0;
  const Z = r.getParameter(r.VERSION);
  Z.indexOf("WebGL") !== -1
    ? (($ = parseFloat(/^WebGL (\d)/.exec(Z)[1])), (V = $ >= 1))
    : Z.indexOf("OpenGL ES") !== -1 && (($ = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1])), (V = $ >= 2));
  let ee = null,
    le = {};
  const Ee = r.getParameter(r.SCISSOR_BOX),
    B = r.getParameter(r.VIEWPORT),
    j = new xt().fromArray(Ee),
    ue = new xt().fromArray(B);
  function Te(L, se, O, ne) {
    const oe = new Uint8Array(4),
      ze = r.createTexture();
    r.bindTexture(L, ze),
      r.texParameteri(L, r.TEXTURE_MIN_FILTER, r.NEAREST),
      r.texParameteri(L, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Ye = 0; Ye < O; Ye++)
      n && (L === r.TEXTURE_3D || L === r.TEXTURE_2D_ARRAY)
        ? r.texImage3D(se, 0, r.RGBA, 1, 1, ne, 0, r.RGBA, r.UNSIGNED_BYTE, oe)
        : r.texImage2D(se + Ye, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, oe);
    return ze;
  }
  const me = {};
  (me[r.TEXTURE_2D] = Te(r.TEXTURE_2D, r.TEXTURE_2D, 1)),
    (me[r.TEXTURE_CUBE_MAP] = Te(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6)),
    n &&
      ((me[r.TEXTURE_2D_ARRAY] = Te(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1)),
      (me[r.TEXTURE_3D] = Te(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1))),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    he(r.DEPTH_TEST),
    l.setFunc(xs),
    Ue(!1),
    Oe(Do),
    he(r.CULL_FACE),
    xe(Yn);
  function he(L) {
    f[L] !== !0 && (r.enable(L), (f[L] = !0));
  }
  function ke(L) {
    f[L] !== !1 && (r.disable(L), (f[L] = !1));
  }
  function ye(L, se) {
    return m[L] !== se
      ? (r.bindFramebuffer(L, se),
        (m[L] = se),
        n && (L === r.DRAW_FRAMEBUFFER && (m[r.FRAMEBUFFER] = se), L === r.FRAMEBUFFER && (m[r.DRAW_FRAMEBUFFER] = se)),
        !0)
      : !1;
  }
  function I(L, se) {
    let O = _,
      ne = !1;
    if (L) {
      (O = g.get(se)), O === void 0 && ((O = []), g.set(se, O));
      const oe = L.textures;
      if (O.length !== oe.length || O[0] !== r.COLOR_ATTACHMENT0) {
        for (let ze = 0, Ye = oe.length; ze < Ye; ze++) O[ze] = r.COLOR_ATTACHMENT0 + ze;
        (O.length = oe.length), (ne = !0);
      }
    } else O[0] !== r.BACK && ((O[0] = r.BACK), (ne = !0));
    if (ne)
      if (t.isWebGL2) r.drawBuffers(O);
      else if (e.has("WEBGL_draw_buffers") === !0) e.get("WEBGL_draw_buffers").drawBuffersWEBGL(O);
      else
        throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension");
  }
  function gt(L) {
    return d !== L ? (r.useProgram(L), (d = L), !0) : !1;
  }
  const ge = { [_i]: r.FUNC_ADD, [oh]: r.FUNC_SUBTRACT, [lh]: r.FUNC_REVERSE_SUBTRACT };
  if (n) (ge[Oo] = r.MIN), (ge[Fo] = r.MAX);
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && ((ge[Oo] = L.MIN_EXT), (ge[Fo] = L.MAX_EXT));
  }
  const Ne = {
    [ch]: r.ZERO,
    [uh]: r.ONE,
    [hh]: r.SRC_COLOR,
    [Pa]: r.SRC_ALPHA,
    [gh]: r.SRC_ALPHA_SATURATE,
    [mh]: r.DST_COLOR,
    [dh]: r.DST_ALPHA,
    [fh]: r.ONE_MINUS_SRC_COLOR,
    [La]: r.ONE_MINUS_SRC_ALPHA,
    [_h]: r.ONE_MINUS_DST_COLOR,
    [ph]: r.ONE_MINUS_DST_ALPHA,
    [vh]: r.CONSTANT_COLOR,
    [xh]: r.ONE_MINUS_CONSTANT_COLOR,
    [Mh]: r.CONSTANT_ALPHA,
    [Sh]: r.ONE_MINUS_CONSTANT_ALPHA,
  };
  function xe(L, se, O, ne, oe, ze, Ye, vt, Kt, Ke) {
    if (L === Yn) {
      p === !0 && (ke(r.BLEND), (p = !1));
      return;
    }
    if ((p === !1 && (he(r.BLEND), (p = !0)), L !== ah)) {
      if (L !== S || Ke !== w) {
        if (((v !== _i || A !== _i) && (r.blendEquation(r.FUNC_ADD), (v = _i), (A = _i)), Ke))
          switch (L) {
            case Qi:
              r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Uo:
              r.blendFunc(r.ONE, r.ONE);
              break;
            case Io:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case No:
              r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case Qi:
              r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
              break;
            case Uo:
              r.blendFunc(r.SRC_ALPHA, r.ONE);
              break;
            case Io:
              r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
              break;
            case No:
              r.blendFunc(r.ZERO, r.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        (E = null), (b = null), (y = null), (P = null), D.set(0, 0, 0), (x = 0), (S = L), (w = Ke);
      }
      return;
    }
    (oe = oe || se),
      (ze = ze || O),
      (Ye = Ye || ne),
      (se !== v || oe !== A) && (r.blendEquationSeparate(ge[se], ge[oe]), (v = se), (A = oe)),
      (O !== E || ne !== b || ze !== y || Ye !== P) &&
        (r.blendFuncSeparate(Ne[O], Ne[ne], Ne[ze], Ne[Ye]), (E = O), (b = ne), (y = ze), (P = Ye)),
      (vt.equals(D) === !1 || Kt !== x) && (r.blendColor(vt.r, vt.g, vt.b, Kt), D.copy(vt), (x = Kt)),
      (S = L),
      (w = !1);
  }
  function He(L, se) {
    L.side === Cn ? ke(r.CULL_FACE) : he(r.CULL_FACE);
    let O = L.side === Ut;
    se && (O = !O),
      Ue(O),
      L.blending === Qi && L.transparent === !1
        ? xe(Yn)
        : xe(
            L.blending,
            L.blendEquation,
            L.blendSrc,
            L.blendDst,
            L.blendEquationAlpha,
            L.blendSrcAlpha,
            L.blendDstAlpha,
            L.blendColor,
            L.blendAlpha,
            L.premultipliedAlpha
          ),
      l.setFunc(L.depthFunc),
      l.setTest(L.depthTest),
      l.setMask(L.depthWrite),
      a.setMask(L.colorWrite);
    const ne = L.stencilWrite;
    c.setTest(ne),
      ne &&
        (c.setMask(L.stencilWriteMask),
        c.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask),
        c.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)),
      R(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits),
      L.alphaToCoverage === !0 ? he(r.SAMPLE_ALPHA_TO_COVERAGE) : ke(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ue(L) {
    Y !== L && (L ? r.frontFace(r.CW) : r.frontFace(r.CCW), (Y = L));
  }
  function Oe(L) {
    L !== ih
      ? (he(r.CULL_FACE),
        L !== q && (L === Do ? r.cullFace(r.BACK) : L === rh ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK)))
      : ke(r.CULL_FACE),
      (q = L);
  }
  function rt(L) {
    L !== C && (V && r.lineWidth(L), (C = L));
  }
  function R(L, se, O) {
    L
      ? (he(r.POLYGON_OFFSET_FILL), (k !== se || F !== O) && (r.polygonOffset(se, O), (k = se), (F = O)))
      : ke(r.POLYGON_OFFSET_FILL);
  }
  function M(L) {
    L ? he(r.SCISSOR_TEST) : ke(r.SCISSOR_TEST);
  }
  function W(L) {
    L === void 0 && (L = r.TEXTURE0 + X - 1), ee !== L && (r.activeTexture(L), (ee = L));
  }
  function K(L, se, O) {
    O === void 0 && (ee === null ? (O = r.TEXTURE0 + X - 1) : (O = ee));
    let ne = le[O];
    ne === void 0 && ((ne = { type: void 0, texture: void 0 }), (le[O] = ne)),
      (ne.type !== L || ne.texture !== se) &&
        (ee !== O && (r.activeTexture(O), (ee = O)), r.bindTexture(L, se || me[L]), (ne.type = L), (ne.texture = se));
  }
  function Q() {
    const L = le[ee];
    L !== void 0 && L.type !== void 0 && (r.bindTexture(L.type, null), (L.type = void 0), (L.texture = void 0));
  }
  function J() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Re() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Me() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ae() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Ce() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function te() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ot() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Fe() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function _e() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function fe(L) {
    j.equals(L) === !1 && (r.scissor(L.x, L.y, L.z, L.w), j.copy(L));
  }
  function de(L) {
    ue.equals(L) === !1 && (r.viewport(L.x, L.y, L.z, L.w), ue.copy(L));
  }
  function Ve(L, se) {
    let O = h.get(se);
    O === void 0 && ((O = new WeakMap()), h.set(se, O));
    let ne = O.get(L);
    ne === void 0 && ((ne = r.getUniformBlockIndex(se, L.name)), O.set(L, ne));
  }
  function be(L, se) {
    const ne = h.get(se).get(L);
    u.get(se) !== ne && (r.uniformBlockBinding(se, ne, L.__bindingPointIndex), u.set(se, ne));
  }
  function je() {
    r.disable(r.BLEND),
      r.disable(r.CULL_FACE),
      r.disable(r.DEPTH_TEST),
      r.disable(r.POLYGON_OFFSET_FILL),
      r.disable(r.SCISSOR_TEST),
      r.disable(r.STENCIL_TEST),
      r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),
      r.blendEquation(r.FUNC_ADD),
      r.blendFunc(r.ONE, r.ZERO),
      r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO),
      r.blendColor(0, 0, 0, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(r.LESS),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(r.ALWAYS, 0, 4294967295),
      r.stencilOp(r.KEEP, r.KEEP, r.KEEP),
      r.clearStencil(0),
      r.cullFace(r.BACK),
      r.frontFace(r.CCW),
      r.polygonOffset(0, 0),
      r.activeTexture(r.TEXTURE0),
      r.bindFramebuffer(r.FRAMEBUFFER, null),
      n === !0 && (r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null)),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (f = {}),
      (ee = null),
      (le = {}),
      (m = {}),
      (g = new WeakMap()),
      (_ = []),
      (d = null),
      (p = !1),
      (S = null),
      (v = null),
      (E = null),
      (b = null),
      (A = null),
      (y = null),
      (P = null),
      (D = new We(0, 0, 0)),
      (x = 0),
      (w = !1),
      (Y = null),
      (q = null),
      (C = null),
      (k = null),
      (F = null),
      j.set(0, 0, r.canvas.width, r.canvas.height),
      ue.set(0, 0, r.canvas.width, r.canvas.height),
      a.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: he,
    disable: ke,
    bindFramebuffer: ye,
    drawBuffers: I,
    useProgram: gt,
    setBlending: xe,
    setMaterial: He,
    setFlipSided: Ue,
    setCullFace: Oe,
    setLineWidth: rt,
    setPolygonOffset: R,
    setScissorTest: M,
    activeTexture: W,
    bindTexture: K,
    unbindTexture: Q,
    compressedTexImage2D: J,
    compressedTexImage3D: Re,
    texImage2D: Fe,
    texImage3D: _e,
    updateUBOMapping: Ve,
    uniformBlockBinding: be,
    texStorage2D: te,
    texStorage3D: ot,
    texSubImage2D: Me,
    texSubImage3D: re,
    compressedTexSubImage2D: ae,
    compressedTexSubImage3D: Ce,
    scissor: fe,
    viewport: de,
    reset: je,
  };
}
function og(r, e, t, n, i, s, o) {
  const a = i.isWebGL2,
    l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null,
    c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    u = new Be(),
    h = new WeakMap();
  let f;
  const m = new WeakMap();
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function _(R, M) {
    return g ? new OffscreenCanvas(R, M) : Cr("canvas");
  }
  function d(R, M, W, K) {
    let Q = 1;
    const J = rt(R);
    if (((J.width > K || J.height > K) && (Q = K / Math.max(J.width, J.height)), Q < 1 || M === !0))
      if (
        (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && R instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && R instanceof VideoFrame)
      ) {
        const Re = M ? Ba : Math.floor,
          Me = Re(Q * J.width),
          re = Re(Q * J.height);
        f === void 0 && (f = _(Me, re));
        const ae = W ? _(Me, re) : f;
        return (
          (ae.width = Me),
          (ae.height = re),
          ae.getContext("2d").drawImage(R, 0, 0, Me, re),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              J.width +
              "x" +
              J.height +
              ") to (" +
              Me +
              "x" +
              re +
              ")."
          ),
          ae
        );
      } else
        return (
          "data" in R &&
            console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + J.width + "x" + J.height + ")."),
          R
        );
    return R;
  }
  function p(R) {
    const M = rt(R);
    return dl(M.width) && dl(M.height);
  }
  function S(R) {
    return a ? !1 : R.wrapS !== an || R.wrapT !== an || (R.minFilter !== Rt && R.minFilter !== Lt);
  }
  function v(R, M) {
    return R.generateMipmaps && M && R.minFilter !== Rt && R.minFilter !== Lt;
  }
  function E(R) {
    r.generateMipmap(R);
  }
  function b(R, M, W, K, Q = !1) {
    if (a === !1) return M;
    if (R !== null) {
      if (r[R] !== void 0) return r[R];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'");
    }
    let J = M;
    if (
      (M === r.RED &&
        (W === r.FLOAT && (J = r.R32F), W === r.HALF_FLOAT && (J = r.R16F), W === r.UNSIGNED_BYTE && (J = r.R8)),
      M === r.RED_INTEGER &&
        (W === r.UNSIGNED_BYTE && (J = r.R8UI),
        W === r.UNSIGNED_SHORT && (J = r.R16UI),
        W === r.UNSIGNED_INT && (J = r.R32UI),
        W === r.BYTE && (J = r.R8I),
        W === r.SHORT && (J = r.R16I),
        W === r.INT && (J = r.R32I)),
      M === r.RG &&
        (W === r.FLOAT && (J = r.RG32F), W === r.HALF_FLOAT && (J = r.RG16F), W === r.UNSIGNED_BYTE && (J = r.RG8)),
      M === r.RG_INTEGER &&
        (W === r.UNSIGNED_BYTE && (J = r.RG8UI),
        W === r.UNSIGNED_SHORT && (J = r.RG16UI),
        W === r.UNSIGNED_INT && (J = r.RG32UI),
        W === r.BYTE && (J = r.RG8I),
        W === r.SHORT && (J = r.RG16I),
        W === r.INT && (J = r.RG32I)),
      M === r.RGBA)
    ) {
      const Re = Q ? Ms : Xe.getTransfer(K);
      W === r.FLOAT && (J = r.RGBA32F),
        W === r.HALF_FLOAT && (J = r.RGBA16F),
        W === r.UNSIGNED_BYTE && (J = Re === Ze ? r.SRGB8_ALPHA8 : r.RGBA8),
        W === r.UNSIGNED_SHORT_4_4_4_4 && (J = r.RGBA4),
        W === r.UNSIGNED_SHORT_5_5_5_1 && (J = r.RGB5_A1);
    }
    return (
      (J === r.R16F || J === r.R32F || J === r.RG16F || J === r.RG32F || J === r.RGBA16F || J === r.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      J
    );
  }
  function A(R, M, W) {
    return v(R, W) === !0 || (R.isFramebufferTexture && R.minFilter !== Rt && R.minFilter !== Lt)
      ? Math.log2(Math.max(M.width, M.height)) + 1
      : R.mipmaps !== void 0 && R.mipmaps.length > 0
      ? R.mipmaps.length
      : R.isCompressedTexture && Array.isArray(R.image)
      ? M.mipmaps.length
      : 1;
  }
  function y(R) {
    return R === Rt || R === Bo || R === _r ? r.NEAREST : r.LINEAR;
  }
  function P(R) {
    const M = R.target;
    M.removeEventListener("dispose", P), x(M), M.isVideoTexture && h.delete(M);
  }
  function D(R) {
    const M = R.target;
    M.removeEventListener("dispose", D), Y(M);
  }
  function x(R) {
    const M = n.get(R);
    if (M.__webglInit === void 0) return;
    const W = R.source,
      K = m.get(W);
    if (K) {
      const Q = K[M.__cacheKey];
      Q.usedTimes--, Q.usedTimes === 0 && w(R), Object.keys(K).length === 0 && m.delete(W);
    }
    n.remove(R);
  }
  function w(R) {
    const M = n.get(R);
    r.deleteTexture(M.__webglTexture);
    const W = R.source,
      K = m.get(W);
    delete K[M.__cacheKey], o.memory.textures--;
  }
  function Y(R) {
    const M = n.get(R);
    if ((R.depthTexture && R.depthTexture.dispose(), R.isWebGLCubeRenderTarget))
      for (let K = 0; K < 6; K++) {
        if (Array.isArray(M.__webglFramebuffer[K]))
          for (let Q = 0; Q < M.__webglFramebuffer[K].length; Q++) r.deleteFramebuffer(M.__webglFramebuffer[K][Q]);
        else r.deleteFramebuffer(M.__webglFramebuffer[K]);
        M.__webglDepthbuffer && r.deleteRenderbuffer(M.__webglDepthbuffer[K]);
      }
    else {
      if (Array.isArray(M.__webglFramebuffer))
        for (let K = 0; K < M.__webglFramebuffer.length; K++) r.deleteFramebuffer(M.__webglFramebuffer[K]);
      else r.deleteFramebuffer(M.__webglFramebuffer);
      if (
        (M.__webglDepthbuffer && r.deleteRenderbuffer(M.__webglDepthbuffer),
        M.__webglMultisampledFramebuffer && r.deleteFramebuffer(M.__webglMultisampledFramebuffer),
        M.__webglColorRenderbuffer)
      )
        for (let K = 0; K < M.__webglColorRenderbuffer.length; K++)
          M.__webglColorRenderbuffer[K] && r.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);
      M.__webglDepthRenderbuffer && r.deleteRenderbuffer(M.__webglDepthRenderbuffer);
    }
    const W = R.textures;
    for (let K = 0, Q = W.length; K < Q; K++) {
      const J = n.get(W[K]);
      J.__webglTexture && (r.deleteTexture(J.__webglTexture), o.memory.textures--), n.remove(W[K]);
    }
    n.remove(R);
  }
  let q = 0;
  function C() {
    q = 0;
  }
  function k() {
    const R = q;
    return (
      R >= i.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + i.maxTextures
        ),
      (q += 1),
      R
    );
  }
  function F(R) {
    const M = [];
    return (
      M.push(R.wrapS),
      M.push(R.wrapT),
      M.push(R.wrapR || 0),
      M.push(R.magFilter),
      M.push(R.minFilter),
      M.push(R.anisotropy),
      M.push(R.internalFormat),
      M.push(R.format),
      M.push(R.type),
      M.push(R.generateMipmaps),
      M.push(R.premultiplyAlpha),
      M.push(R.flipY),
      M.push(R.unpackAlignment),
      M.push(R.colorSpace),
      M.join()
    );
  }
  function X(R, M) {
    const W = n.get(R);
    if ((R.isVideoTexture && Ue(R), R.isRenderTargetTexture === !1 && R.version > 0 && W.__version !== R.version)) {
      const K = R.image;
      if (K === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (K.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ue(W, R, M);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, W.__webglTexture, r.TEXTURE0 + M);
  }
  function V(R, M) {
    const W = n.get(R);
    if (R.version > 0 && W.__version !== R.version) {
      ue(W, R, M);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, W.__webglTexture, r.TEXTURE0 + M);
  }
  function $(R, M) {
    const W = n.get(R);
    if (R.version > 0 && W.__version !== R.version) {
      ue(W, R, M);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, W.__webglTexture, r.TEXTURE0 + M);
  }
  function Z(R, M) {
    const W = n.get(R);
    if (R.version > 0 && W.__version !== R.version) {
      Te(W, R, M);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, W.__webglTexture, r.TEXTURE0 + M);
  }
  const ee = { [Ia]: r.REPEAT, [an]: r.CLAMP_TO_EDGE, [Na]: r.MIRRORED_REPEAT },
    le = {
      [Rt]: r.NEAREST,
      [Bo]: r.NEAREST_MIPMAP_NEAREST,
      [_r]: r.NEAREST_MIPMAP_LINEAR,
      [Lt]: r.LINEAR,
      [Vs]: r.LINEAR_MIPMAP_NEAREST,
      [vi]: r.LINEAR_MIPMAP_LINEAR,
    },
    Ee = {
      [Zh]: r.NEVER,
      [nf]: r.ALWAYS,
      [jh]: r.LESS,
      [Cc]: r.LEQUAL,
      [Jh]: r.EQUAL,
      [tf]: r.GEQUAL,
      [Qh]: r.GREATER,
      [ef]: r.NOTEQUAL,
    };
  function B(R, M, W) {
    if (
      (M.type === Pn &&
        e.has("OES_texture_float_linear") === !1 &&
        (M.magFilter === Lt ||
          M.magFilter === Vs ||
          M.magFilter === _r ||
          M.magFilter === vi ||
          M.minFilter === Lt ||
          M.minFilter === Vs ||
          M.minFilter === _r ||
          M.minFilter === vi) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      W
        ? (r.texParameteri(R, r.TEXTURE_WRAP_S, ee[M.wrapS]),
          r.texParameteri(R, r.TEXTURE_WRAP_T, ee[M.wrapT]),
          (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) && r.texParameteri(R, r.TEXTURE_WRAP_R, ee[M.wrapR]),
          r.texParameteri(R, r.TEXTURE_MAG_FILTER, le[M.magFilter]),
          r.texParameteri(R, r.TEXTURE_MIN_FILTER, le[M.minFilter]))
        : (r.texParameteri(R, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
          r.texParameteri(R, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
          (R === r.TEXTURE_3D || R === r.TEXTURE_2D_ARRAY) && r.texParameteri(R, r.TEXTURE_WRAP_R, r.CLAMP_TO_EDGE),
          (M.wrapS !== an || M.wrapT !== an) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          r.texParameteri(R, r.TEXTURE_MAG_FILTER, y(M.magFilter)),
          r.texParameteri(R, r.TEXTURE_MIN_FILTER, y(M.minFilter)),
          M.minFilter !== Rt &&
            M.minFilter !== Lt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      M.compareFunction &&
        (r.texParameteri(R, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE),
        r.texParameteri(R, r.TEXTURE_COMPARE_FUNC, Ee[M.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        M.magFilter === Rt ||
        (M.minFilter !== _r && M.minFilter !== vi) ||
        (M.type === Pn && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 && M.type === Rr && e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      if (M.anisotropy > 1 || n.get(M).__currentAnisotropy) {
        const K = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(R, K.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, i.getMaxAnisotropy())),
          (n.get(M).__currentAnisotropy = M.anisotropy);
      }
    }
  }
  function j(R, M) {
    let W = !1;
    R.__webglInit === void 0 && ((R.__webglInit = !0), M.addEventListener("dispose", P));
    const K = M.source;
    let Q = m.get(K);
    Q === void 0 && ((Q = {}), m.set(K, Q));
    const J = F(M);
    if (J !== R.__cacheKey) {
      Q[J] === void 0 && ((Q[J] = { texture: r.createTexture(), usedTimes: 0 }), o.memory.textures++, (W = !0)),
        Q[J].usedTimes++;
      const Re = Q[R.__cacheKey];
      Re !== void 0 && (Q[R.__cacheKey].usedTimes--, Re.usedTimes === 0 && w(M)),
        (R.__cacheKey = J),
        (R.__webglTexture = Q[J].texture);
    }
    return W;
  }
  function ue(R, M, W) {
    let K = r.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (K = r.TEXTURE_2D_ARRAY),
      M.isData3DTexture && (K = r.TEXTURE_3D);
    const Q = j(R, M),
      J = M.source;
    t.bindTexture(K, R.__webglTexture, r.TEXTURE0 + W);
    const Re = n.get(J);
    if (J.version !== Re.__version || Q === !0) {
      t.activeTexture(r.TEXTURE0 + W);
      const Me = Xe.getPrimaries(Xe.workingColorSpace),
        re = M.colorSpace === Vn ? null : Xe.getPrimaries(M.colorSpace),
        ae = M.colorSpace === Vn || Me === re ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, M.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, M.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ae);
      const Ce = S(M) && p(M.image) === !1;
      let te = d(M.image, Ce, !1, i.maxTextureSize);
      te = Oe(M, te);
      const ot = p(te) || a,
        Fe = s.convert(M.format, M.colorSpace);
      let _e = s.convert(M.type),
        fe = b(M.internalFormat, Fe, _e, M.colorSpace, M.isVideoTexture);
      B(K, M, ot);
      let de;
      const Ve = M.mipmaps,
        be = a && M.isVideoTexture !== !0 && fe !== Rc,
        je = Re.__version === void 0 || Q === !0,
        L = J.dataReady,
        se = A(M, te, ot);
      if (M.isDepthTexture)
        (fe = r.DEPTH_COMPONENT),
          a
            ? M.type === Pn
              ? (fe = r.DEPTH_COMPONENT32F)
              : M.type === kn
              ? (fe = r.DEPTH_COMPONENT24)
              : M.type === Mi
              ? (fe = r.DEPTH24_STENCIL8)
              : (fe = r.DEPTH_COMPONENT16)
            : M.type === Pn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),
          M.format === Si &&
            fe === r.DEPTH_COMPONENT &&
            M.type !== io &&
            M.type !== kn &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (M.type = kn),
            (_e = s.convert(M.type))),
          M.format === ar &&
            fe === r.DEPTH_COMPONENT &&
            ((fe = r.DEPTH_STENCIL),
            M.type !== Mi &&
              (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
              (M.type = Mi),
              (_e = s.convert(M.type)))),
          je &&
            (be
              ? t.texStorage2D(r.TEXTURE_2D, 1, fe, te.width, te.height)
              : t.texImage2D(r.TEXTURE_2D, 0, fe, te.width, te.height, 0, Fe, _e, null));
      else if (M.isDataTexture)
        if (Ve.length > 0 && ot) {
          be && je && t.texStorage2D(r.TEXTURE_2D, se, fe, Ve[0].width, Ve[0].height);
          for (let O = 0, ne = Ve.length; O < ne; O++)
            (de = Ve[O]),
              be
                ? L && t.texSubImage2D(r.TEXTURE_2D, O, 0, 0, de.width, de.height, Fe, _e, de.data)
                : t.texImage2D(r.TEXTURE_2D, O, fe, de.width, de.height, 0, Fe, _e, de.data);
          M.generateMipmaps = !1;
        } else
          be
            ? (je && t.texStorage2D(r.TEXTURE_2D, se, fe, te.width, te.height),
              L && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, te.width, te.height, Fe, _e, te.data))
            : t.texImage2D(r.TEXTURE_2D, 0, fe, te.width, te.height, 0, Fe, _e, te.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          be && je && t.texStorage3D(r.TEXTURE_2D_ARRAY, se, fe, Ve[0].width, Ve[0].height, te.depth);
          for (let O = 0, ne = Ve.length; O < ne; O++)
            (de = Ve[O]),
              M.format !== on
                ? Fe !== null
                  ? be
                    ? L &&
                      t.compressedTexSubImage3D(
                        r.TEXTURE_2D_ARRAY,
                        O,
                        0,
                        0,
                        0,
                        de.width,
                        de.height,
                        te.depth,
                        Fe,
                        de.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, O, fe, de.width, de.height, te.depth, 0, de.data, 0, 0)
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : be
                ? L && t.texSubImage3D(r.TEXTURE_2D_ARRAY, O, 0, 0, 0, de.width, de.height, te.depth, Fe, _e, de.data)
                : t.texImage3D(r.TEXTURE_2D_ARRAY, O, fe, de.width, de.height, te.depth, 0, Fe, _e, de.data);
        } else {
          be && je && t.texStorage2D(r.TEXTURE_2D, se, fe, Ve[0].width, Ve[0].height);
          for (let O = 0, ne = Ve.length; O < ne; O++)
            (de = Ve[O]),
              M.format !== on
                ? Fe !== null
                  ? be
                    ? L && t.compressedTexSubImage2D(r.TEXTURE_2D, O, 0, 0, de.width, de.height, Fe, de.data)
                    : t.compressedTexImage2D(r.TEXTURE_2D, O, fe, de.width, de.height, 0, de.data)
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : be
                ? L && t.texSubImage2D(r.TEXTURE_2D, O, 0, 0, de.width, de.height, Fe, _e, de.data)
                : t.texImage2D(r.TEXTURE_2D, O, fe, de.width, de.height, 0, Fe, _e, de.data);
        }
      else if (M.isDataArrayTexture)
        be
          ? (je && t.texStorage3D(r.TEXTURE_2D_ARRAY, se, fe, te.width, te.height, te.depth),
            L && t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, Fe, _e, te.data))
          : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, fe, te.width, te.height, te.depth, 0, Fe, _e, te.data);
      else if (M.isData3DTexture)
        be
          ? (je && t.texStorage3D(r.TEXTURE_3D, se, fe, te.width, te.height, te.depth),
            L && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, Fe, _e, te.data))
          : t.texImage3D(r.TEXTURE_3D, 0, fe, te.width, te.height, te.depth, 0, Fe, _e, te.data);
      else if (M.isFramebufferTexture) {
        if (je)
          if (be) t.texStorage2D(r.TEXTURE_2D, se, fe, te.width, te.height);
          else {
            let O = te.width,
              ne = te.height;
            for (let oe = 0; oe < se; oe++)
              t.texImage2D(r.TEXTURE_2D, oe, fe, O, ne, 0, Fe, _e, null), (O >>= 1), (ne >>= 1);
          }
      } else if (Ve.length > 0 && ot) {
        if (be && je) {
          const O = rt(Ve[0]);
          t.texStorage2D(r.TEXTURE_2D, se, fe, O.width, O.height);
        }
        for (let O = 0, ne = Ve.length; O < ne; O++)
          (de = Ve[O]),
            be
              ? L && t.texSubImage2D(r.TEXTURE_2D, O, 0, 0, Fe, _e, de)
              : t.texImage2D(r.TEXTURE_2D, O, fe, Fe, _e, de);
        M.generateMipmaps = !1;
      } else if (be) {
        if (je) {
          const O = rt(te);
          t.texStorage2D(r.TEXTURE_2D, se, fe, O.width, O.height);
        }
        L && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, Fe, _e, te);
      } else t.texImage2D(r.TEXTURE_2D, 0, fe, Fe, _e, te);
      v(M, ot) && E(K), (Re.__version = J.version), M.onUpdate && M.onUpdate(M);
    }
    R.__version = M.version;
  }
  function Te(R, M, W) {
    if (M.image.length !== 6) return;
    const K = j(R, M),
      Q = M.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, R.__webglTexture, r.TEXTURE0 + W);
    const J = n.get(Q);
    if (Q.version !== J.__version || K === !0) {
      t.activeTexture(r.TEXTURE0 + W);
      const Re = Xe.getPrimaries(Xe.workingColorSpace),
        Me = M.colorSpace === Vn ? null : Xe.getPrimaries(M.colorSpace),
        re = M.colorSpace === Vn || Re === Me ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, M.flipY),
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha),
        r.pixelStorei(r.UNPACK_ALIGNMENT, M.unpackAlignment),
        r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, re);
      const ae = M.isCompressedTexture || M.image[0].isCompressedTexture,
        Ce = M.image[0] && M.image[0].isDataTexture,
        te = [];
      for (let O = 0; O < 6; O++)
        !ae && !Ce ? (te[O] = d(M.image[O], !1, !0, i.maxCubemapSize)) : (te[O] = Ce ? M.image[O].image : M.image[O]),
          (te[O] = Oe(M, te[O]));
      const ot = te[0],
        Fe = p(ot) || a,
        _e = s.convert(M.format, M.colorSpace),
        fe = s.convert(M.type),
        de = b(M.internalFormat, _e, fe, M.colorSpace),
        Ve = a && M.isVideoTexture !== !0,
        be = J.__version === void 0 || K === !0,
        je = Q.dataReady;
      let L = A(M, ot, Fe);
      B(r.TEXTURE_CUBE_MAP, M, Fe);
      let se;
      if (ae) {
        Ve && be && t.texStorage2D(r.TEXTURE_CUBE_MAP, L, de, ot.width, ot.height);
        for (let O = 0; O < 6; O++) {
          se = te[O].mipmaps;
          for (let ne = 0; ne < se.length; ne++) {
            const oe = se[ne];
            M.format !== on
              ? _e !== null
                ? Ve
                  ? je &&
                    t.compressedTexSubImage2D(
                      r.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                      ne,
                      0,
                      0,
                      oe.width,
                      oe.height,
                      _e,
                      oe.data
                    )
                  : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, ne, de, oe.width, oe.height, 0, oe.data)
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Ve
              ? je && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, ne, 0, 0, oe.width, oe.height, _e, fe, oe.data)
              : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, ne, de, oe.width, oe.height, 0, _e, fe, oe.data);
          }
        }
      } else {
        if (((se = M.mipmaps), Ve && be)) {
          se.length > 0 && L++;
          const O = rt(te[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, L, de, O.width, O.height);
        }
        for (let O = 0; O < 6; O++)
          if (Ce) {
            Ve
              ? je &&
                t.texSubImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                  0,
                  0,
                  0,
                  te[O].width,
                  te[O].height,
                  _e,
                  fe,
                  te[O].data
                )
              : t.texImage2D(
                  r.TEXTURE_CUBE_MAP_POSITIVE_X + O,
                  0,
                  de,
                  te[O].width,
                  te[O].height,
                  0,
                  _e,
                  fe,
                  te[O].data
                );
            for (let ne = 0; ne < se.length; ne++) {
              const ze = se[ne].image[O].image;
              Ve
                ? je &&
                  t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, ne + 1, 0, 0, ze.width, ze.height, _e, fe, ze.data)
                : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, ne + 1, de, ze.width, ze.height, 0, _e, fe, ze.data);
            }
          } else {
            Ve
              ? je && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, 0, 0, 0, _e, fe, te[O])
              : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, 0, de, _e, fe, te[O]);
            for (let ne = 0; ne < se.length; ne++) {
              const oe = se[ne];
              Ve
                ? je && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, ne + 1, 0, 0, _e, fe, oe.image[O])
                : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + O, ne + 1, de, _e, fe, oe.image[O]);
            }
          }
      }
      v(M, Fe) && E(r.TEXTURE_CUBE_MAP), (J.__version = Q.version), M.onUpdate && M.onUpdate(M);
    }
    R.__version = M.version;
  }
  function me(R, M, W, K, Q, J) {
    const Re = s.convert(W.format, W.colorSpace),
      Me = s.convert(W.type),
      re = b(W.internalFormat, Re, Me, W.colorSpace);
    if (!n.get(M).__hasExternalTextures) {
      const Ce = Math.max(1, M.width >> J),
        te = Math.max(1, M.height >> J);
      Q === r.TEXTURE_3D || Q === r.TEXTURE_2D_ARRAY
        ? t.texImage3D(Q, J, re, Ce, te, M.depth, 0, Re, Me, null)
        : t.texImage2D(Q, J, re, Ce, te, 0, Re, Me, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, R),
      He(M)
        ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, K, Q, n.get(W).__webglTexture, 0, xe(M))
        : (Q === r.TEXTURE_2D || (Q >= r.TEXTURE_CUBE_MAP_POSITIVE_X && Q <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          r.framebufferTexture2D(r.FRAMEBUFFER, K, Q, n.get(W).__webglTexture, J),
      t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function he(R, M, W) {
    if ((r.bindRenderbuffer(r.RENDERBUFFER, R), M.depthBuffer && !M.stencilBuffer)) {
      let K = a === !0 ? r.DEPTH_COMPONENT24 : r.DEPTH_COMPONENT16;
      if (W || He(M)) {
        const Q = M.depthTexture;
        Q &&
          Q.isDepthTexture &&
          (Q.type === Pn ? (K = r.DEPTH_COMPONENT32F) : Q.type === kn && (K = r.DEPTH_COMPONENT24));
        const J = xe(M);
        He(M)
          ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, J, K, M.width, M.height)
          : r.renderbufferStorageMultisample(r.RENDERBUFFER, J, K, M.width, M.height);
      } else r.renderbufferStorage(r.RENDERBUFFER, K, M.width, M.height);
      r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, R);
    } else if (M.depthBuffer && M.stencilBuffer) {
      const K = xe(M);
      W && He(M) === !1
        ? r.renderbufferStorageMultisample(r.RENDERBUFFER, K, r.DEPTH24_STENCIL8, M.width, M.height)
        : He(M)
        ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, K, r.DEPTH24_STENCIL8, M.width, M.height)
        : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, M.width, M.height),
        r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, R);
    } else {
      const K = M.textures;
      for (let Q = 0; Q < K.length; Q++) {
        const J = K[Q],
          Re = s.convert(J.format, J.colorSpace),
          Me = s.convert(J.type),
          re = b(J.internalFormat, Re, Me, J.colorSpace),
          ae = xe(M);
        W && He(M) === !1
          ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ae, re, M.width, M.height)
          : He(M)
          ? l.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ae, re, M.width, M.height)
          : r.renderbufferStorage(r.RENDERBUFFER, re, M.width, M.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function ke(R, M) {
    if (M && M.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if ((t.bindFramebuffer(r.FRAMEBUFFER, R), !(M.depthTexture && M.depthTexture.isDepthTexture)))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture ||
      M.depthTexture.image.width !== M.width ||
      M.depthTexture.image.height !== M.height) &&
      ((M.depthTexture.image.width = M.width),
      (M.depthTexture.image.height = M.height),
      (M.depthTexture.needsUpdate = !0)),
      X(M.depthTexture, 0);
    const K = n.get(M.depthTexture).__webglTexture,
      Q = xe(M);
    if (M.depthTexture.format === Si)
      He(M)
        ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, K, 0, Q)
        : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, K, 0);
    else if (M.depthTexture.format === ar)
      He(M)
        ? l.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, K, 0, Q)
        : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, K, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function ye(R) {
    const M = n.get(R),
      W = R.isWebGLCubeRenderTarget === !0;
    if (R.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (W) throw new Error("target.depthTexture not supported in Cube render targets");
      ke(M.__webglFramebuffer, R);
    } else if (W) {
      M.__webglDepthbuffer = [];
      for (let K = 0; K < 6; K++)
        t.bindFramebuffer(r.FRAMEBUFFER, M.__webglFramebuffer[K]),
          (M.__webglDepthbuffer[K] = r.createRenderbuffer()),
          he(M.__webglDepthbuffer[K], R, !1);
    } else
      t.bindFramebuffer(r.FRAMEBUFFER, M.__webglFramebuffer),
        (M.__webglDepthbuffer = r.createRenderbuffer()),
        he(M.__webglDepthbuffer, R, !1);
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function I(R, M, W) {
    const K = n.get(R);
    M !== void 0 && me(K.__webglFramebuffer, R, R.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), W !== void 0 && ye(R);
  }
  function gt(R) {
    const M = R.texture,
      W = n.get(R),
      K = n.get(M);
    R.addEventListener("dispose", D);
    const Q = R.textures,
      J = R.isWebGLCubeRenderTarget === !0,
      Re = Q.length > 1,
      Me = p(R) || a;
    if (
      (Re ||
        (K.__webglTexture === void 0 && (K.__webglTexture = r.createTexture()),
        (K.__version = M.version),
        o.memory.textures++),
      J)
    ) {
      W.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (a && M.mipmaps && M.mipmaps.length > 0) {
          W.__webglFramebuffer[re] = [];
          for (let ae = 0; ae < M.mipmaps.length; ae++) W.__webglFramebuffer[re][ae] = r.createFramebuffer();
        } else W.__webglFramebuffer[re] = r.createFramebuffer();
    } else {
      if (a && M.mipmaps && M.mipmaps.length > 0) {
        W.__webglFramebuffer = [];
        for (let re = 0; re < M.mipmaps.length; re++) W.__webglFramebuffer[re] = r.createFramebuffer();
      } else W.__webglFramebuffer = r.createFramebuffer();
      if (Re)
        if (i.drawBuffers)
          for (let re = 0, ae = Q.length; re < ae; re++) {
            const Ce = n.get(Q[re]);
            Ce.__webglTexture === void 0 && ((Ce.__webglTexture = r.createTexture()), o.memory.textures++);
          }
        else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (a && R.samples > 0 && He(R) === !1) {
        (W.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (W.__webglColorRenderbuffer = []),
          t.bindFramebuffer(r.FRAMEBUFFER, W.__webglMultisampledFramebuffer);
        for (let re = 0; re < Q.length; re++) {
          const ae = Q[re];
          (W.__webglColorRenderbuffer[re] = r.createRenderbuffer()),
            r.bindRenderbuffer(r.RENDERBUFFER, W.__webglColorRenderbuffer[re]);
          const Ce = s.convert(ae.format, ae.colorSpace),
            te = s.convert(ae.type),
            ot = b(ae.internalFormat, Ce, te, ae.colorSpace, R.isXRRenderTarget === !0),
            Fe = xe(R);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, Fe, ot, R.width, R.height),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + re,
              r.RENDERBUFFER,
              W.__webglColorRenderbuffer[re]
            );
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null),
          R.depthBuffer &&
            ((W.__webglDepthRenderbuffer = r.createRenderbuffer()), he(W.__webglDepthRenderbuffer, R, !0)),
          t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (J) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, K.__webglTexture), B(r.TEXTURE_CUBE_MAP, M, Me);
      for (let re = 0; re < 6; re++)
        if (a && M.mipmaps && M.mipmaps.length > 0)
          for (let ae = 0; ae < M.mipmaps.length; ae++)
            me(W.__webglFramebuffer[re][ae], R, M, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + re, ae);
        else me(W.__webglFramebuffer[re], R, M, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0);
      v(M, Me) && E(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Re) {
      for (let re = 0, ae = Q.length; re < ae; re++) {
        const Ce = Q[re],
          te = n.get(Ce);
        t.bindTexture(r.TEXTURE_2D, te.__webglTexture),
          B(r.TEXTURE_2D, Ce, Me),
          me(W.__webglFramebuffer, R, Ce, r.COLOR_ATTACHMENT0 + re, r.TEXTURE_2D, 0),
          v(Ce, Me) && E(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = r.TEXTURE_2D;
      if (
        ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) &&
          (a
            ? (re = R.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
        t.bindTexture(re, K.__webglTexture),
        B(re, M, Me),
        a && M.mipmaps && M.mipmaps.length > 0)
      )
        for (let ae = 0; ae < M.mipmaps.length; ae++) me(W.__webglFramebuffer[ae], R, M, r.COLOR_ATTACHMENT0, re, ae);
      else me(W.__webglFramebuffer, R, M, r.COLOR_ATTACHMENT0, re, 0);
      v(M, Me) && E(re), t.unbindTexture();
    }
    R.depthBuffer && ye(R);
  }
  function ge(R) {
    const M = p(R) || a,
      W = R.textures;
    for (let K = 0, Q = W.length; K < Q; K++) {
      const J = W[K];
      if (v(J, M)) {
        const Re = R.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D,
          Me = n.get(J).__webglTexture;
        t.bindTexture(Re, Me), E(Re), t.unbindTexture();
      }
    }
  }
  function Ne(R) {
    if (a && R.samples > 0 && He(R) === !1) {
      const M = R.textures,
        W = R.width,
        K = R.height;
      let Q = r.COLOR_BUFFER_BIT;
      const J = [],
        Re = R.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT,
        Me = n.get(R),
        re = M.length > 1;
      if (re)
        for (let ae = 0; ae < M.length; ae++)
          t.bindFramebuffer(r.FRAMEBUFFER, Me.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.RENDERBUFFER, null),
            t.bindFramebuffer(r.FRAMEBUFFER, Me.__webglFramebuffer),
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.TEXTURE_2D, null, 0);
      t.bindFramebuffer(r.READ_FRAMEBUFFER, Me.__webglMultisampledFramebuffer),
        t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Me.__webglFramebuffer);
      for (let ae = 0; ae < M.length; ae++) {
        J.push(r.COLOR_ATTACHMENT0 + ae), R.depthBuffer && J.push(Re);
        const Ce = Me.__ignoreDepthValues !== void 0 ? Me.__ignoreDepthValues : !1;
        if (
          (Ce === !1 && (R.depthBuffer && (Q |= r.DEPTH_BUFFER_BIT), R.stencilBuffer && (Q |= r.STENCIL_BUFFER_BIT)),
          re &&
            r.framebufferRenderbuffer(
              r.READ_FRAMEBUFFER,
              r.COLOR_ATTACHMENT0,
              r.RENDERBUFFER,
              Me.__webglColorRenderbuffer[ae]
            ),
          Ce === !0 &&
            (r.invalidateFramebuffer(r.READ_FRAMEBUFFER, [Re]), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [Re])),
          re)
        ) {
          const te = n.get(M[ae]).__webglTexture;
          r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, te, 0);
        }
        r.blitFramebuffer(0, 0, W, K, 0, 0, W, K, Q, r.NEAREST), c && r.invalidateFramebuffer(r.READ_FRAMEBUFFER, J);
      }
      if ((t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), re))
        for (let ae = 0; ae < M.length; ae++) {
          t.bindFramebuffer(r.FRAMEBUFFER, Me.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(
              r.FRAMEBUFFER,
              r.COLOR_ATTACHMENT0 + ae,
              r.RENDERBUFFER,
              Me.__webglColorRenderbuffer[ae]
            );
          const Ce = n.get(M[ae]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, Me.__webglFramebuffer),
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.TEXTURE_2D, Ce, 0);
        }
      t.bindFramebuffer(r.DRAW_FRAMEBUFFER, Me.__webglMultisampledFramebuffer);
    }
  }
  function xe(R) {
    return Math.min(i.maxSamples, R.samples);
  }
  function He(R) {
    const M = n.get(R);
    return a && R.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function Ue(R) {
    const M = o.render.frame;
    h.get(R) !== M && (h.set(R, M), R.update());
  }
  function Oe(R, M) {
    const W = R.colorSpace,
      K = R.format,
      Q = R.type;
    return (
      R.isCompressedTexture === !0 ||
        R.isVideoTexture === !0 ||
        R.format === Oa ||
        (W !== ti &&
          W !== Vn &&
          (Xe.getTransfer(W) === Ze
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && K === on
                ? ((R.format = Oa), (R.minFilter = Lt), (R.generateMipmaps = !1))
                : (M = Lc.sRGBToLinear(M))
              : (K !== on || Q !== $n) &&
                console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")
            : console.error("THREE.WebGLTextures: Unsupported texture color space:", W))),
      M
    );
  }
  function rt(R) {
    return (
      typeof HTMLImageElement < "u" && R instanceof HTMLImageElement
        ? ((u.width = R.naturalWidth || R.width), (u.height = R.naturalHeight || R.height))
        : typeof VideoFrame < "u" && R instanceof VideoFrame
        ? ((u.width = R.displayWidth), (u.height = R.displayHeight))
        : ((u.width = R.width), (u.height = R.height)),
      u
    );
  }
  (this.allocateTextureUnit = k),
    (this.resetTextureUnits = C),
    (this.setTexture2D = X),
    (this.setTexture2DArray = V),
    (this.setTexture3D = $),
    (this.setTextureCube = Z),
    (this.rebindTextures = I),
    (this.setupRenderTarget = gt),
    (this.updateRenderTargetMipmap = ge),
    (this.updateMultisampleRenderTarget = Ne),
    (this.setupDepthRenderbuffer = ye),
    (this.setupFrameBufferTexture = me),
    (this.useMultisampledRTT = He);
}
function lg(r, e, t) {
  const n = t.isWebGL2;
  function i(s, o = Vn) {
    let a;
    const l = Xe.getTransfer(o);
    if (s === $n) return r.UNSIGNED_BYTE;
    if (s === Tc) return r.UNSIGNED_SHORT_4_4_4_4;
    if (s === yc) return r.UNSIGNED_SHORT_5_5_5_1;
    if (s === Bh) return r.BYTE;
    if (s === zh) return r.SHORT;
    if (s === io) return r.UNSIGNED_SHORT;
    if (s === Ec) return r.INT;
    if (s === kn) return r.UNSIGNED_INT;
    if (s === Pn) return r.FLOAT;
    if (s === Rr)
      return n ? r.HALF_FLOAT : ((a = e.get("OES_texture_half_float")), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Gh) return r.ALPHA;
    if (s === on) return r.RGBA;
    if (s === Hh) return r.LUMINANCE;
    if (s === Vh) return r.LUMINANCE_ALPHA;
    if (s === Si) return r.DEPTH_COMPONENT;
    if (s === ar) return r.DEPTH_STENCIL;
    if (s === Oa) return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === kh) return r.RED;
    if (s === Ac) return r.RED_INTEGER;
    if (s === Wh) return r.RG;
    if (s === bc) return r.RG_INTEGER;
    if (s === wc) return r.RGBA_INTEGER;
    if (s === ks || s === Ws || s === Xs || s === qs)
      if (l === Ze)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (s === ks) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === Ws) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Xs) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === qs) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === ks) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === Ws) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Xs) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === qs) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === zo || s === Go || s === Ho || s === Vo)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === zo) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Go) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Ho) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Vo) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === Rc) return (a = e.get("WEBGL_compressed_texture_etc1")), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === ko || s === Wo)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (s === ko) return l === Ze ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Wo) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === Xo ||
      s === qo ||
      s === Yo ||
      s === Ko ||
      s === $o ||
      s === Zo ||
      s === jo ||
      s === Jo ||
      s === Qo ||
      s === el ||
      s === tl ||
      s === nl ||
      s === il ||
      s === rl
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (s === Xo) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === qo) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Yo) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ko) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === $o) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Zo) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === jo) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Jo) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Qo) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === el) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === tl) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === nl) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === il) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === rl) return l === Ze ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === Ys || s === sl || s === al)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (s === Ys) return l === Ze ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === sl) return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === al) return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (s === Xh || s === ol || s === ll || s === cl)
      if (((a = e.get("EXT_texture_compression_rgtc")), a !== null)) {
        if (s === Ys) return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === ol) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === ll) return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === cl) return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return s === Mi
      ? n
        ? r.UNSIGNED_INT_24_8
        : ((a = e.get("WEBGL_depth_texture")), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : r[s] !== void 0
      ? r[s]
      : null;
  }
  return { convert: i };
}
class cg extends sn {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class fs extends Xt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const ug = { type: "move" };
class Ma {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new fs()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new fs()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new G()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new G())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new fs()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new G()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new G())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const _ of e.hand.values()) {
          const d = t.getJointPose(_, n),
            p = this._getHandJoint(c, _);
          d !== null &&
            (p.matrix.fromArray(d.transform.matrix),
            p.matrix.decompose(p.position, p.rotation, p.scale),
            (p.matrixWorldNeedsUpdate = !0),
            (p.jointRadius = d.radius)),
            (p.visible = d !== null);
        }
        const u = c.joints["index-finger-tip"],
          h = c.joints["thumb-tip"],
          f = u.position.distanceTo(h.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && f > m + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this }))
          : !c.inputState.pinching &&
            f <= m - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0), l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0), l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && s !== null && (i = s),
        i !== null &&
          (a.matrix.fromArray(i.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          (a.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((a.hasLinearVelocity = !0), a.linearVelocity.copy(i.linearVelocity))
            : (a.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((a.hasAngularVelocity = !0), a.angularVelocity.copy(i.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(ug)));
    }
    return (
      a !== null && (a.visible = i !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new fs();
      (n.matrixAutoUpdate = !1), (n.visible = !1), (e.joints[t.jointName] = n), e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const hg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  fg = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class dg {
  constructor() {
    (this.texture = null), (this.mesh = null), (this.depthNear = 0), (this.depthFar = 0);
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new ln(),
        s = e.properties.get(i);
      (s.__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = i);
    }
  }
  render(e, t) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const n = t.cameras[0].viewport,
          i = new Un({
            extensions: { fragDepth: !0 },
            vertexShader: hg,
            fragmentShader: fg,
            uniforms: { depthColor: { value: this.texture }, depthWidth: { value: n.z }, depthHeight: { value: n.w } },
          });
        this.mesh = new mn(new Hr(20, 20), i);
      }
      e.render(this.mesh, t);
    }
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
}
class pg extends dr {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = 1,
      c = null,
      u = null,
      h = null,
      f = null,
      m = null,
      g = null;
    const _ = new dg(),
      d = t.getContextAttributes();
    let p = null,
      S = null;
    const v = [],
      E = [],
      b = new Be();
    let A = null;
    const y = new sn();
    y.layers.enable(1), (y.viewport = new xt());
    const P = new sn();
    P.layers.enable(2), (P.viewport = new xt());
    const D = [y, P],
      x = new cg();
    x.layers.enable(1), x.layers.enable(2);
    let w = null,
      Y = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (B) {
        let j = v[B];
        return j === void 0 && ((j = new Ma()), (v[B] = j)), j.getTargetRaySpace();
      }),
      (this.getControllerGrip = function (B) {
        let j = v[B];
        return j === void 0 && ((j = new Ma()), (v[B] = j)), j.getGripSpace();
      }),
      (this.getHand = function (B) {
        let j = v[B];
        return j === void 0 && ((j = new Ma()), (v[B] = j)), j.getHandSpace();
      });
    function q(B) {
      const j = E.indexOf(B.inputSource);
      if (j === -1) return;
      const ue = v[j];
      ue !== void 0 &&
        (ue.update(B.inputSource, B.frame, c || o), ue.dispatchEvent({ type: B.type, data: B.inputSource }));
    }
    function C() {
      i.removeEventListener("select", q),
        i.removeEventListener("selectstart", q),
        i.removeEventListener("selectend", q),
        i.removeEventListener("squeeze", q),
        i.removeEventListener("squeezestart", q),
        i.removeEventListener("squeezeend", q),
        i.removeEventListener("end", C),
        i.removeEventListener("inputsourceschange", k);
      for (let B = 0; B < v.length; B++) {
        const j = E[B];
        j !== null && ((E[B] = null), v[B].disconnect(j));
      }
      (w = null),
        (Y = null),
        _.reset(),
        e.setRenderTarget(p),
        (m = null),
        (f = null),
        (h = null),
        (i = null),
        (S = null),
        Ee.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(A),
        e.setSize(b.width, b.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (B) {
      (s = B),
        n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }),
      (this.setReferenceSpaceType = function (B) {
        (a = B),
          n.isPresenting === !0 &&
            console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }),
      (this.getReferenceSpace = function () {
        return c || o;
      }),
      (this.setReferenceSpace = function (B) {
        c = B;
      }),
      (this.getBaseLayer = function () {
        return f !== null ? f : m;
      }),
      (this.getBinding = function () {
        return h;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (B) {
        if (((i = B), i !== null)) {
          if (
            ((p = e.getRenderTarget()),
            i.addEventListener("select", q),
            i.addEventListener("selectstart", q),
            i.addEventListener("selectend", q),
            i.addEventListener("squeeze", q),
            i.addEventListener("squeezestart", q),
            i.addEventListener("squeezeend", q),
            i.addEventListener("end", C),
            i.addEventListener("inputsourceschange", k),
            d.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (A = e.getPixelRatio()),
            e.getSize(b),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const j = {
              antialias: i.renderState.layers === void 0 ? d.antialias : !0,
              alpha: !0,
              depth: d.depth,
              stencil: d.stencil,
              framebufferScaleFactor: s,
            };
            (m = new XRWebGLLayer(i, t, j)),
              i.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (S = new wi(m.framebufferWidth, m.framebufferHeight, {
                format: on,
                type: $n,
                colorSpace: e.outputColorSpace,
                stencilBuffer: d.stencil,
              }));
          } else {
            let j = null,
              ue = null,
              Te = null;
            d.depth &&
              ((Te = d.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (j = d.stencil ? ar : Si),
              (ue = d.stencil ? Mi : kn));
            const me = { colorFormat: t.RGBA8, depthFormat: Te, scaleFactor: s };
            (h = new XRWebGLBinding(i, t)),
              (f = h.createProjectionLayer(me)),
              i.updateRenderState({ layers: [f] }),
              e.setPixelRatio(1),
              e.setSize(f.textureWidth, f.textureHeight, !1),
              (S = new wi(f.textureWidth, f.textureHeight, {
                format: on,
                type: $n,
                depthTexture: new Xc(
                  f.textureWidth,
                  f.textureHeight,
                  ue,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  j
                ),
                stencilBuffer: d.stencil,
                colorSpace: e.outputColorSpace,
                samples: d.antialias ? 4 : 0,
              }));
            const he = e.properties.get(S);
            he.__ignoreDepthValues = f.ignoreDepthValues;
          }
          (S.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (o = await i.requestReferenceSpace(a)),
            Ee.setContext(i),
            Ee.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode;
      });
    function k(B) {
      for (let j = 0; j < B.removed.length; j++) {
        const ue = B.removed[j],
          Te = E.indexOf(ue);
        Te >= 0 && ((E[Te] = null), v[Te].disconnect(ue));
      }
      for (let j = 0; j < B.added.length; j++) {
        const ue = B.added[j];
        let Te = E.indexOf(ue);
        if (Te === -1) {
          for (let he = 0; he < v.length; he++)
            if (he >= E.length) {
              E.push(ue), (Te = he);
              break;
            } else if (E[he] === null) {
              (E[he] = ue), (Te = he);
              break;
            }
          if (Te === -1) break;
        }
        const me = v[Te];
        me && me.connect(ue);
      }
    }
    const F = new G(),
      X = new G();
    function V(B, j, ue) {
      F.setFromMatrixPosition(j.matrixWorld), X.setFromMatrixPosition(ue.matrixWorld);
      const Te = F.distanceTo(X),
        me = j.projectionMatrix.elements,
        he = ue.projectionMatrix.elements,
        ke = me[14] / (me[10] - 1),
        ye = me[14] / (me[10] + 1),
        I = (me[9] + 1) / me[5],
        gt = (me[9] - 1) / me[5],
        ge = (me[8] - 1) / me[0],
        Ne = (he[8] + 1) / he[0],
        xe = ke * ge,
        He = ke * Ne,
        Ue = Te / (-ge + Ne),
        Oe = Ue * -ge;
      j.matrixWorld.decompose(B.position, B.quaternion, B.scale),
        B.translateX(Oe),
        B.translateZ(Ue),
        B.matrixWorld.compose(B.position, B.quaternion, B.scale),
        B.matrixWorldInverse.copy(B.matrixWorld).invert();
      const rt = ke + Ue,
        R = ye + Ue,
        M = xe - Oe,
        W = He + (Te - Oe),
        K = ((I * ye) / R) * rt,
        Q = ((gt * ye) / R) * rt;
      B.projectionMatrix.makePerspective(M, W, K, Q, rt, R),
        B.projectionMatrixInverse.copy(B.projectionMatrix).invert();
    }
    function $(B, j) {
      j === null ? B.matrixWorld.copy(B.matrix) : B.matrixWorld.multiplyMatrices(j.matrixWorld, B.matrix),
        B.matrixWorldInverse.copy(B.matrixWorld).invert();
    }
    this.updateCamera = function (B) {
      if (i === null) return;
      _.texture !== null && ((B.near = _.depthNear), (B.far = _.depthFar)),
        (x.near = P.near = y.near = B.near),
        (x.far = P.far = y.far = B.far),
        (w !== x.near || Y !== x.far) &&
          (i.updateRenderState({ depthNear: x.near, depthFar: x.far }),
          (w = x.near),
          (Y = x.far),
          (y.near = w),
          (y.far = Y),
          (P.near = w),
          (P.far = Y),
          y.updateProjectionMatrix(),
          P.updateProjectionMatrix(),
          B.updateProjectionMatrix());
      const j = B.parent,
        ue = x.cameras;
      $(x, j);
      for (let Te = 0; Te < ue.length; Te++) $(ue[Te], j);
      ue.length === 2 ? V(x, y, P) : x.projectionMatrix.copy(y.projectionMatrix), Z(B, x, j);
    };
    function Z(B, j, ue) {
      ue === null
        ? B.matrix.copy(j.matrixWorld)
        : (B.matrix.copy(ue.matrixWorld), B.matrix.invert(), B.matrix.multiply(j.matrixWorld)),
        B.matrix.decompose(B.position, B.quaternion, B.scale),
        B.updateMatrixWorld(!0),
        B.projectionMatrix.copy(j.projectionMatrix),
        B.projectionMatrixInverse.copy(j.projectionMatrixInverse),
        B.isPerspectiveCamera && ((B.fov = Fa * 2 * Math.atan(1 / B.projectionMatrix.elements[5])), (B.zoom = 1));
    }
    (this.getCamera = function () {
      return x;
    }),
      (this.getFoveation = function () {
        if (!(f === null && m === null)) return l;
      }),
      (this.setFoveation = function (B) {
        (l = B),
          f !== null && (f.fixedFoveation = B),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = B);
      }),
      (this.hasDepthSensing = function () {
        return _.texture !== null;
      });
    let ee = null;
    function le(B, j) {
      if (((u = j.getViewerPose(c || o)), (g = j), u !== null)) {
        const ue = u.views;
        m !== null && (e.setRenderTargetFramebuffer(S, m.framebuffer), e.setRenderTarget(S));
        let Te = !1;
        ue.length !== x.cameras.length && ((x.cameras.length = 0), (Te = !0));
        for (let he = 0; he < ue.length; he++) {
          const ke = ue[he];
          let ye = null;
          if (m !== null) ye = m.getViewport(ke);
          else {
            const gt = h.getViewSubImage(f, ke);
            (ye = gt.viewport),
              he === 0 &&
                (e.setRenderTargetTextures(S, gt.colorTexture, f.ignoreDepthValues ? void 0 : gt.depthStencilTexture),
                e.setRenderTarget(S));
          }
          let I = D[he];
          I === void 0 && ((I = new sn()), I.layers.enable(he), (I.viewport = new xt()), (D[he] = I)),
            I.matrix.fromArray(ke.transform.matrix),
            I.matrix.decompose(I.position, I.quaternion, I.scale),
            I.projectionMatrix.fromArray(ke.projectionMatrix),
            I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),
            I.viewport.set(ye.x, ye.y, ye.width, ye.height),
            he === 0 && (x.matrix.copy(I.matrix), x.matrix.decompose(x.position, x.quaternion, x.scale)),
            Te === !0 && x.cameras.push(I);
        }
        const me = i.enabledFeatures;
        if (me && me.includes("depth-sensing")) {
          const he = h.getDepthInformation(ue[0]);
          he && he.isValid && he.texture && _.init(e, he, i.renderState);
        }
      }
      for (let ue = 0; ue < v.length; ue++) {
        const Te = E[ue],
          me = v[ue];
        Te !== null && me !== void 0 && me.update(Te, j, c || o);
      }
      _.render(e, x),
        ee && ee(B, j),
        j.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: j }),
        (g = null);
    }
    const Ee = new kc();
    Ee.setAnimationLoop(le),
      (this.setAnimationLoop = function (B) {
        ee = B;
      }),
      (this.dispose = function () {});
  }
}
const ui = new Dn(),
  mg = new ut();
function _g(r, e) {
  function t(d, p) {
    d.matrixAutoUpdate === !0 && d.updateMatrix(), p.value.copy(d.matrix);
  }
  function n(d, p) {
    p.color.getRGB(d.fogColor.value, zc(r)),
      p.isFog
        ? ((d.fogNear.value = p.near), (d.fogFar.value = p.far))
        : p.isFogExp2 && (d.fogDensity.value = p.density);
  }
  function i(d, p, S, v, E) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial
      ? s(d, p)
      : p.isMeshToonMaterial
      ? (s(d, p), h(d, p))
      : p.isMeshPhongMaterial
      ? (s(d, p), u(d, p))
      : p.isMeshStandardMaterial
      ? (s(d, p), f(d, p), p.isMeshPhysicalMaterial && m(d, p, E))
      : p.isMeshMatcapMaterial
      ? (s(d, p), g(d, p))
      : p.isMeshDepthMaterial
      ? s(d, p)
      : p.isMeshDistanceMaterial
      ? (s(d, p), _(d, p))
      : p.isMeshNormalMaterial
      ? s(d, p)
      : p.isLineBasicMaterial
      ? (o(d, p), p.isLineDashedMaterial && a(d, p))
      : p.isPointsMaterial
      ? l(d, p, S, v)
      : p.isSpriteMaterial
      ? c(d, p)
      : p.isShadowMaterial
      ? (d.color.value.copy(p.color), (d.opacity.value = p.opacity))
      : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(d, p) {
    (d.opacity.value = p.opacity),
      p.color && d.diffuse.value.copy(p.color),
      p.emissive && d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && ((d.map.value = p.map), t(p.map, d.mapTransform)),
      p.alphaMap && ((d.alphaMap.value = p.alphaMap), t(p.alphaMap, d.alphaMapTransform)),
      p.bumpMap &&
        ((d.bumpMap.value = p.bumpMap),
        t(p.bumpMap, d.bumpMapTransform),
        (d.bumpScale.value = p.bumpScale),
        p.side === Ut && (d.bumpScale.value *= -1)),
      p.normalMap &&
        ((d.normalMap.value = p.normalMap),
        t(p.normalMap, d.normalMapTransform),
        d.normalScale.value.copy(p.normalScale),
        p.side === Ut && d.normalScale.value.negate()),
      p.displacementMap &&
        ((d.displacementMap.value = p.displacementMap),
        t(p.displacementMap, d.displacementMapTransform),
        (d.displacementScale.value = p.displacementScale),
        (d.displacementBias.value = p.displacementBias)),
      p.emissiveMap && ((d.emissiveMap.value = p.emissiveMap), t(p.emissiveMap, d.emissiveMapTransform)),
      p.specularMap && ((d.specularMap.value = p.specularMap), t(p.specularMap, d.specularMapTransform)),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    const S = e.get(p),
      v = S.envMap,
      E = S.envMapRotation;
    if (
      (v &&
        ((d.envMap.value = v),
        ui.copy(E),
        (ui.x *= -1),
        (ui.y *= -1),
        (ui.z *= -1),
        v.isCubeTexture && v.isRenderTargetTexture === !1 && ((ui.y *= -1), (ui.z *= -1)),
        d.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(ui)),
        (d.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
        (d.reflectivity.value = p.reflectivity),
        (d.ior.value = p.ior),
        (d.refractionRatio.value = p.refractionRatio)),
      p.lightMap)
    ) {
      d.lightMap.value = p.lightMap;
      const b = r._useLegacyLights === !0 ? Math.PI : 1;
      (d.lightMapIntensity.value = p.lightMapIntensity * b), t(p.lightMap, d.lightMapTransform);
    }
    p.aoMap && ((d.aoMap.value = p.aoMap), (d.aoMapIntensity.value = p.aoMapIntensity), t(p.aoMap, d.aoMapTransform));
  }
  function o(d, p) {
    d.diffuse.value.copy(p.color),
      (d.opacity.value = p.opacity),
      p.map && ((d.map.value = p.map), t(p.map, d.mapTransform));
  }
  function a(d, p) {
    (d.dashSize.value = p.dashSize), (d.totalSize.value = p.dashSize + p.gapSize), (d.scale.value = p.scale);
  }
  function l(d, p, S, v) {
    d.diffuse.value.copy(p.color),
      (d.opacity.value = p.opacity),
      (d.size.value = p.size * S),
      (d.scale.value = v * 0.5),
      p.map && ((d.map.value = p.map), t(p.map, d.uvTransform)),
      p.alphaMap && ((d.alphaMap.value = p.alphaMap), t(p.alphaMap, d.alphaMapTransform)),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
  }
  function c(d, p) {
    d.diffuse.value.copy(p.color),
      (d.opacity.value = p.opacity),
      (d.rotation.value = p.rotation),
      p.map && ((d.map.value = p.map), t(p.map, d.mapTransform)),
      p.alphaMap && ((d.alphaMap.value = p.alphaMap), t(p.alphaMap, d.alphaMapTransform)),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
  }
  function u(d, p) {
    d.specular.value.copy(p.specular), (d.shininess.value = Math.max(p.shininess, 1e-4));
  }
  function h(d, p) {
    p.gradientMap && (d.gradientMap.value = p.gradientMap);
  }
  function f(d, p) {
    (d.metalness.value = p.metalness),
      p.metalnessMap && ((d.metalnessMap.value = p.metalnessMap), t(p.metalnessMap, d.metalnessMapTransform)),
      (d.roughness.value = p.roughness),
      p.roughnessMap && ((d.roughnessMap.value = p.roughnessMap), t(p.roughnessMap, d.roughnessMapTransform)),
      e.get(p).envMap && (d.envMapIntensity.value = p.envMapIntensity);
  }
  function m(d, p, S) {
    (d.ior.value = p.ior),
      p.sheen > 0 &&
        (d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (d.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap && ((d.sheenColorMap.value = p.sheenColorMap), t(p.sheenColorMap, d.sheenColorMapTransform)),
        p.sheenRoughnessMap &&
          ((d.sheenRoughnessMap.value = p.sheenRoughnessMap), t(p.sheenRoughnessMap, d.sheenRoughnessMapTransform))),
      p.clearcoat > 0 &&
        ((d.clearcoat.value = p.clearcoat),
        (d.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap && ((d.clearcoatMap.value = p.clearcoatMap), t(p.clearcoatMap, d.clearcoatMapTransform)),
        p.clearcoatRoughnessMap &&
          ((d.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
          t(p.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)),
        p.clearcoatNormalMap &&
          ((d.clearcoatNormalMap.value = p.clearcoatNormalMap),
          t(p.clearcoatNormalMap, d.clearcoatNormalMapTransform),
          d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          p.side === Ut && d.clearcoatNormalScale.value.negate())),
      p.iridescence > 0 &&
        ((d.iridescence.value = p.iridescence),
        (d.iridescenceIOR.value = p.iridescenceIOR),
        (d.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (d.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap &&
          ((d.iridescenceMap.value = p.iridescenceMap), t(p.iridescenceMap, d.iridescenceMapTransform)),
        p.iridescenceThicknessMap &&
          ((d.iridescenceThicknessMap.value = p.iridescenceThicknessMap),
          t(p.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))),
      p.transmission > 0 &&
        ((d.transmission.value = p.transmission),
        (d.transmissionSamplerMap.value = S.texture),
        d.transmissionSamplerSize.value.set(S.width, S.height),
        p.transmissionMap &&
          ((d.transmissionMap.value = p.transmissionMap), t(p.transmissionMap, d.transmissionMapTransform)),
        (d.thickness.value = p.thickness),
        p.thicknessMap && ((d.thicknessMap.value = p.thicknessMap), t(p.thicknessMap, d.thicknessMapTransform)),
        (d.attenuationDistance.value = p.attenuationDistance),
        d.attenuationColor.value.copy(p.attenuationColor)),
      p.anisotropy > 0 &&
        (d.anisotropyVector.value.set(
          p.anisotropy * Math.cos(p.anisotropyRotation),
          p.anisotropy * Math.sin(p.anisotropyRotation)
        ),
        p.anisotropyMap && ((d.anisotropyMap.value = p.anisotropyMap), t(p.anisotropyMap, d.anisotropyMapTransform))),
      (d.specularIntensity.value = p.specularIntensity),
      d.specularColor.value.copy(p.specularColor),
      p.specularColorMap &&
        ((d.specularColorMap.value = p.specularColorMap), t(p.specularColorMap, d.specularColorMapTransform)),
      p.specularIntensityMap &&
        ((d.specularIntensityMap.value = p.specularIntensityMap),
        t(p.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function g(d, p) {
    p.matcap && (d.matcap.value = p.matcap);
  }
  function _(d, p) {
    const S = e.get(p).light;
    d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),
      (d.nearDistance.value = S.shadow.camera.near),
      (d.farDistance.value = S.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function gg(r, e, t, n) {
  let i = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(S, v) {
    const E = v.program;
    n.uniformBlockBinding(S, E);
  }
  function c(S, v) {
    let E = i[S.id];
    E === void 0 && (g(S), (E = u(S)), (i[S.id] = E), S.addEventListener("dispose", d));
    const b = v.program;
    n.updateUBOMapping(S, b);
    const A = e.render.frame;
    s[S.id] !== A && (f(S), (s[S.id] = A));
  }
  function u(S) {
    const v = h();
    S.__bindingPointIndex = v;
    const E = r.createBuffer(),
      b = S.__size,
      A = S.usage;
    return (
      r.bindBuffer(r.UNIFORM_BUFFER, E),
      r.bufferData(r.UNIFORM_BUFFER, b, A),
      r.bindBuffer(r.UNIFORM_BUFFER, null),
      r.bindBufferBase(r.UNIFORM_BUFFER, v, E),
      E
    );
  }
  function h() {
    for (let S = 0; S < a; S++) if (o.indexOf(S) === -1) return o.push(S), S;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(S) {
    const v = i[S.id],
      E = S.uniforms,
      b = S.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, v);
    for (let A = 0, y = E.length; A < y; A++) {
      const P = Array.isArray(E[A]) ? E[A] : [E[A]];
      for (let D = 0, x = P.length; D < x; D++) {
        const w = P[D];
        if (m(w, A, D, b) === !0) {
          const Y = w.__offset,
            q = Array.isArray(w.value) ? w.value : [w.value];
          let C = 0;
          for (let k = 0; k < q.length; k++) {
            const F = q[k],
              X = _(F);
            typeof F == "number" || typeof F == "boolean"
              ? ((w.__data[0] = F), r.bufferSubData(r.UNIFORM_BUFFER, Y + C, w.__data))
              : F.isMatrix3
              ? ((w.__data[0] = F.elements[0]),
                (w.__data[1] = F.elements[1]),
                (w.__data[2] = F.elements[2]),
                (w.__data[3] = 0),
                (w.__data[4] = F.elements[3]),
                (w.__data[5] = F.elements[4]),
                (w.__data[6] = F.elements[5]),
                (w.__data[7] = 0),
                (w.__data[8] = F.elements[6]),
                (w.__data[9] = F.elements[7]),
                (w.__data[10] = F.elements[8]),
                (w.__data[11] = 0))
              : (F.toArray(w.__data, C), (C += X.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          r.bufferSubData(r.UNIFORM_BUFFER, Y, w.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function m(S, v, E, b) {
    const A = S.value,
      y = v + "_" + E;
    if (b[y] === void 0) return typeof A == "number" || typeof A == "boolean" ? (b[y] = A) : (b[y] = A.clone()), !0;
    {
      const P = b[y];
      if (typeof A == "number" || typeof A == "boolean") {
        if (P !== A) return (b[y] = A), !0;
      } else if (P.equals(A) === !1) return P.copy(A), !0;
    }
    return !1;
  }
  function g(S) {
    const v = S.uniforms;
    let E = 0;
    const b = 16;
    for (let y = 0, P = v.length; y < P; y++) {
      const D = Array.isArray(v[y]) ? v[y] : [v[y]];
      for (let x = 0, w = D.length; x < w; x++) {
        const Y = D[x],
          q = Array.isArray(Y.value) ? Y.value : [Y.value];
        for (let C = 0, k = q.length; C < k; C++) {
          const F = q[C],
            X = _(F),
            V = E % b;
          V !== 0 && b - V < X.boundary && (E += b - V),
            (Y.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT)),
            (Y.__offset = E),
            (E += X.storage);
        }
      }
    }
    const A = E % b;
    return A > 0 && (E += b - A), (S.__size = E), (S.__cache = {}), this;
  }
  function _(S) {
    const v = { boundary: 0, storage: 0 };
    return (
      typeof S == "number" || typeof S == "boolean"
        ? ((v.boundary = 4), (v.storage = 4))
        : S.isVector2
        ? ((v.boundary = 8), (v.storage = 8))
        : S.isVector3 || S.isColor
        ? ((v.boundary = 16), (v.storage = 12))
        : S.isVector4
        ? ((v.boundary = 16), (v.storage = 16))
        : S.isMatrix3
        ? ((v.boundary = 48), (v.storage = 48))
        : S.isMatrix4
        ? ((v.boundary = 64), (v.storage = 64))
        : S.isTexture
        ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.")
        : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", S),
      v
    );
  }
  function d(S) {
    const v = S.target;
    v.removeEventListener("dispose", d);
    const E = o.indexOf(v.__bindingPointIndex);
    o.splice(E, 1), r.deleteBuffer(i[v.id]), delete i[v.id], delete s[v.id];
  }
  function p() {
    for (const S in i) r.deleteBuffer(i[S]);
    (o = []), (i = {}), (s = {});
  }
  return { bind: l, update: c, dispose: p };
}
class jc {
  constructor(e = {}) {
    const {
      canvas: t = sf(),
      context: n = null,
      depth: i = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? (f = n.getContextAttributes().alpha) : (f = o);
    const m = new Uint32Array(4),
      g = new Int32Array(4);
    let _ = null,
      d = null;
    const p = [],
      S = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = un),
      (this._useLegacyLights = !1),
      (this.toneMapping = Kn),
      (this.toneMappingExposure = 1);
    const v = this;
    let E = !1,
      b = 0,
      A = 0,
      y = null,
      P = -1,
      D = null;
    const x = new xt(),
      w = new xt();
    let Y = null;
    const q = new We(0);
    let C = 0,
      k = t.width,
      F = t.height,
      X = 1,
      V = null,
      $ = null;
    const Z = new xt(0, 0, k, F),
      ee = new xt(0, 0, k, F);
    let le = !1;
    const Ee = new Vc();
    let B = !1,
      j = !1,
      ue = null;
    const Te = new ut(),
      me = new Be(),
      he = new G(),
      ke = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function ye() {
      return y === null ? X : 1;
    }
    let I = n;
    function gt(T, U) {
      for (let z = 0; z < T.length; z++) {
        const H = T[z],
          N = t.getContext(H, U);
        if (N !== null) return N;
      }
      return null;
    }
    try {
      const T = {
        alpha: !0,
        depth: i,
        stencil: s,
        antialias: a,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h,
      };
      if (
        ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${no}`),
        t.addEventListener("webglcontextlost", je, !1),
        t.addEventListener("webglcontextrestored", L, !1),
        t.addEventListener("webglcontextcreationerror", se, !1),
        I === null)
      ) {
        const U = ["webgl2", "webgl", "experimental-webgl"];
        if ((v.isWebGL1Renderer === !0 && U.shift(), (I = gt(U, T)), I === null))
          throw gt(U)
            ? new Error("Error creating WebGL context with your selected attributes.")
            : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" &&
        I instanceof WebGLRenderingContext &&
        console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),
        I.getShaderPrecisionFormat === void 0 &&
          (I.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
    } catch (T) {
      throw (console.error("THREE.WebGLRenderer: " + T.message), T);
    }
    let ge, Ne, xe, He, Ue, Oe, rt, R, M, W, K, Q, J, Re, Me, re, ae, Ce, te, ot, Fe, _e, fe, de;
    function Ve() {
      (ge = new Tm(I)),
        (Ne = new gm(I, ge, e)),
        ge.init(Ne),
        (_e = new lg(I, ge, Ne)),
        (xe = new ag(I, ge, Ne)),
        (He = new bm(I)),
        (Ue = new q_()),
        (Oe = new og(I, ge, xe, Ue, Ne, _e, He)),
        (rt = new xm(v)),
        (R = new Em(v)),
        (M = new Df(I, Ne)),
        (fe = new mm(I, ge, M, Ne)),
        (W = new ym(I, M, He, fe)),
        (K = new Pm(I, W, M, He)),
        (te = new Cm(I, Ne, Oe)),
        (re = new vm(Ue)),
        (Q = new X_(v, rt, R, ge, Ne, fe, re)),
        (J = new _g(v, Ue)),
        (Re = new K_()),
        (Me = new eg(ge, Ne)),
        (Ce = new pm(v, rt, R, xe, K, f, l)),
        (ae = new sg(v, K, Ne)),
        (de = new gg(I, He, Ne, xe)),
        (ot = new _m(I, ge, He, Ne)),
        (Fe = new Am(I, ge, He, Ne)),
        (He.programs = Q.programs),
        (v.capabilities = Ne),
        (v.extensions = ge),
        (v.properties = Ue),
        (v.renderLists = Re),
        (v.shadowMap = ae),
        (v.state = xe),
        (v.info = He);
    }
    Ve();
    const be = new pg(v, I);
    (this.xr = be),
      (this.getContext = function () {
        return I;
      }),
      (this.getContextAttributes = function () {
        return I.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const T = ge.get("WEBGL_lose_context");
        T && T.loseContext();
      }),
      (this.forceContextRestore = function () {
        const T = ge.get("WEBGL_lose_context");
        T && T.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return X;
      }),
      (this.setPixelRatio = function (T) {
        T !== void 0 && ((X = T), this.setSize(k, F, !1));
      }),
      (this.getSize = function (T) {
        return T.set(k, F);
      }),
      (this.setSize = function (T, U, z = !0) {
        if (be.isPresenting) {
          console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        (k = T),
          (F = U),
          (t.width = Math.floor(T * X)),
          (t.height = Math.floor(U * X)),
          z === !0 && ((t.style.width = T + "px"), (t.style.height = U + "px")),
          this.setViewport(0, 0, T, U);
      }),
      (this.getDrawingBufferSize = function (T) {
        return T.set(k * X, F * X).floor();
      }),
      (this.setDrawingBufferSize = function (T, U, z) {
        (k = T),
          (F = U),
          (X = z),
          (t.width = Math.floor(T * z)),
          (t.height = Math.floor(U * z)),
          this.setViewport(0, 0, T, U);
      }),
      (this.getCurrentViewport = function (T) {
        return T.copy(x);
      }),
      (this.getViewport = function (T) {
        return T.copy(Z);
      }),
      (this.setViewport = function (T, U, z, H) {
        T.isVector4 ? Z.set(T.x, T.y, T.z, T.w) : Z.set(T, U, z, H), xe.viewport(x.copy(Z).multiplyScalar(X).round());
      }),
      (this.getScissor = function (T) {
        return T.copy(ee);
      }),
      (this.setScissor = function (T, U, z, H) {
        T.isVector4 ? ee.set(T.x, T.y, T.z, T.w) : ee.set(T, U, z, H), xe.scissor(w.copy(ee).multiplyScalar(X).round());
      }),
      (this.getScissorTest = function () {
        return le;
      }),
      (this.setScissorTest = function (T) {
        xe.setScissorTest((le = T));
      }),
      (this.setOpaqueSort = function (T) {
        V = T;
      }),
      (this.setTransparentSort = function (T) {
        $ = T;
      }),
      (this.getClearColor = function (T) {
        return T.copy(Ce.getClearColor());
      }),
      (this.setClearColor = function () {
        Ce.setClearColor.apply(Ce, arguments);
      }),
      (this.getClearAlpha = function () {
        return Ce.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        Ce.setClearAlpha.apply(Ce, arguments);
      }),
      (this.clear = function (T = !0, U = !0, z = !0) {
        let H = 0;
        if (T) {
          let N = !1;
          if (y !== null) {
            const ce = y.texture.format;
            N = ce === wc || ce === bc || ce === Ac;
          }
          if (N) {
            const ce = y.texture.type,
              pe = ce === $n || ce === kn || ce === io || ce === Mi || ce === Tc || ce === yc,
              ve = Ce.getClearColor(),
              Se = Ce.getClearAlpha(),
              Ie = ve.r,
              Ae = ve.g,
              we = ve.b;
            pe
              ? ((m[0] = Ie), (m[1] = Ae), (m[2] = we), (m[3] = Se), I.clearBufferuiv(I.COLOR, 0, m))
              : ((g[0] = Ie), (g[1] = Ae), (g[2] = we), (g[3] = Se), I.clearBufferiv(I.COLOR, 0, g));
          } else H |= I.COLOR_BUFFER_BIT;
        }
        U && (H |= I.DEPTH_BUFFER_BIT),
          z && ((H |= I.STENCIL_BUFFER_BIT), this.state.buffers.stencil.setMask(4294967295)),
          I.clear(H);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", je, !1),
          t.removeEventListener("webglcontextrestored", L, !1),
          t.removeEventListener("webglcontextcreationerror", se, !1),
          Re.dispose(),
          Me.dispose(),
          Ue.dispose(),
          rt.dispose(),
          R.dispose(),
          K.dispose(),
          fe.dispose(),
          de.dispose(),
          Q.dispose(),
          be.dispose(),
          be.removeEventListener("sessionstart", Kt),
          be.removeEventListener("sessionend", Ke),
          ue && (ue.dispose(), (ue = null)),
          bt.stop();
      });
    function je(T) {
      T.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), (E = !0);
    }
    function L() {
      console.log("THREE.WebGLRenderer: Context Restored."), (E = !1);
      const T = He.autoReset,
        U = ae.enabled,
        z = ae.autoUpdate,
        H = ae.needsUpdate,
        N = ae.type;
      Ve(), (He.autoReset = T), (ae.enabled = U), (ae.autoUpdate = z), (ae.needsUpdate = H), (ae.type = N);
    }
    function se(T) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", T.statusMessage);
    }
    function O(T) {
      const U = T.target;
      U.removeEventListener("dispose", O), ne(U);
    }
    function ne(T) {
      oe(T), Ue.remove(T);
    }
    function oe(T) {
      const U = Ue.get(T).programs;
      U !== void 0 &&
        (U.forEach(function (z) {
          Q.releaseProgram(z);
        }),
        T.isShaderMaterial && Q.releaseShaderCache(T));
    }
    this.renderBufferDirect = function (T, U, z, H, N, ce) {
      U === null && (U = ke);
      const pe = N.isMesh && N.matrixWorld.determinant() < 0,
        ve = Qu(T, U, z, H, N);
      xe.setMaterial(H, pe);
      let Se = z.index,
        Ie = 1;
      if (H.wireframe === !0) {
        if (((Se = W.getWireframeAttribute(z)), Se === void 0)) return;
        Ie = 2;
      }
      const Ae = z.drawRange,
        we = z.attributes.position;
      let st = Ae.start * Ie,
        zt = (Ae.start + Ae.count) * Ie;
      ce !== null && ((st = Math.max(st, ce.start * Ie)), (zt = Math.min(zt, (ce.start + ce.count) * Ie))),
        Se !== null
          ? ((st = Math.max(st, 0)), (zt = Math.min(zt, Se.count)))
          : we != null && ((st = Math.max(st, 0)), (zt = Math.min(zt, we.count)));
      const dt = zt - st;
      if (dt < 0 || dt === 1 / 0) return;
      fe.setup(N, H, ve, z, Se);
      let Mn,
        et = ot;
      if ((Se !== null && ((Mn = M.get(Se)), (et = Fe), et.setIndex(Mn)), N.isMesh))
        H.wireframe === !0
          ? (xe.setLineWidth(H.wireframeLinewidth * ye()), et.setMode(I.LINES))
          : et.setMode(I.TRIANGLES);
      else if (N.isLine) {
        let Pe = H.linewidth;
        Pe === void 0 && (Pe = 1),
          xe.setLineWidth(Pe * ye()),
          N.isLineSegments ? et.setMode(I.LINES) : N.isLineLoop ? et.setMode(I.LINE_LOOP) : et.setMode(I.LINE_STRIP);
      } else N.isPoints ? et.setMode(I.POINTS) : N.isSprite && et.setMode(I.TRIANGLES);
      if (N.isBatchedMesh) et.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount);
      else if (N.isInstancedMesh) et.renderInstances(st, dt, N.count);
      else if (z.isInstancedBufferGeometry) {
        const Pe = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
          Bs = Math.min(z.instanceCount, Pe);
        et.renderInstances(st, dt, Bs);
      } else et.render(st, dt);
    };
    function ze(T, U, z) {
      T.transparent === !0 && T.side === Cn && T.forceSinglePass === !1
        ? ((T.side = Ut),
          (T.needsUpdate = !0),
          Wr(T, U, z),
          (T.side = Jn),
          (T.needsUpdate = !0),
          Wr(T, U, z),
          (T.side = Cn))
        : Wr(T, U, z);
    }
    (this.compile = function (T, U, z = null) {
      z === null && (z = T),
        (d = Me.get(z)),
        d.init(),
        S.push(d),
        z.traverseVisible(function (N) {
          N.isLight && N.layers.test(U.layers) && (d.pushLight(N), N.castShadow && d.pushShadow(N));
        }),
        T !== z &&
          T.traverseVisible(function (N) {
            N.isLight && N.layers.test(U.layers) && (d.pushLight(N), N.castShadow && d.pushShadow(N));
          }),
        d.setupLights(v._useLegacyLights);
      const H = new Set();
      return (
        T.traverse(function (N) {
          const ce = N.material;
          if (ce)
            if (Array.isArray(ce))
              for (let pe = 0; pe < ce.length; pe++) {
                const ve = ce[pe];
                ze(ve, z, N), H.add(ve);
              }
            else ze(ce, z, N), H.add(ce);
        }),
        S.pop(),
        (d = null),
        H
      );
    }),
      (this.compileAsync = function (T, U, z = null) {
        const H = this.compile(T, U, z);
        return new Promise((N) => {
          function ce() {
            if (
              (H.forEach(function (pe) {
                Ue.get(pe).currentProgram.isReady() && H.delete(pe);
              }),
              H.size === 0)
            ) {
              N(T);
              return;
            }
            setTimeout(ce, 10);
          }
          ge.get("KHR_parallel_shader_compile") !== null ? ce() : setTimeout(ce, 10);
        });
      });
    let Ye = null;
    function vt(T) {
      Ye && Ye(T);
    }
    function Kt() {
      bt.stop();
    }
    function Ke() {
      bt.start();
    }
    const bt = new kc();
    bt.setAnimationLoop(vt),
      typeof self < "u" && bt.setContext(self),
      (this.setAnimationLoop = function (T) {
        (Ye = T), be.setAnimationLoop(T), T === null ? bt.stop() : bt.start();
      }),
      be.addEventListener("sessionstart", Kt),
      be.addEventListener("sessionend", Ke),
      (this.render = function (T, U) {
        if (U !== void 0 && U.isCamera !== !0) {
          console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
          return;
        }
        if (E === !0) return;
        T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(),
          U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(),
          be.enabled === !0 &&
            be.isPresenting === !0 &&
            (be.cameraAutoUpdate === !0 && be.updateCamera(U), (U = be.getCamera())),
          T.isScene === !0 && T.onBeforeRender(v, T, U, y),
          (d = Me.get(T, S.length)),
          d.init(),
          S.push(d),
          Te.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse),
          Ee.setFromProjectionMatrix(Te),
          (j = this.localClippingEnabled),
          (B = re.init(this.clippingPlanes, j)),
          (_ = Re.get(T, p.length)),
          _.init(),
          p.push(_),
          cn(T, U, 0, v.sortObjects),
          _.finish(),
          v.sortObjects === !0 && _.sort(V, $),
          this.info.render.frame++,
          B === !0 && re.beginShadows();
        const z = d.state.shadowsArray;
        if (
          (ae.render(z, T, U),
          B === !0 && re.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          (be.enabled === !1 || be.isPresenting === !1 || be.hasDepthSensing() === !1) && Ce.render(_, T),
          d.setupLights(v._useLegacyLights),
          U.isArrayCamera)
        ) {
          const H = U.cameras;
          for (let N = 0, ce = H.length; N < ce; N++) {
            const pe = H[N];
            bo(_, T, pe, pe.viewport);
          }
        } else bo(_, T, U);
        y !== null && (Oe.updateMultisampleRenderTarget(y), Oe.updateRenderTargetMipmap(y)),
          T.isScene === !0 && T.onAfterRender(v, T, U),
          fe.resetDefaultState(),
          (P = -1),
          (D = null),
          S.pop(),
          S.length > 0 ? (d = S[S.length - 1]) : (d = null),
          p.pop(),
          p.length > 0 ? (_ = p[p.length - 1]) : (_ = null);
      });
    function cn(T, U, z, H) {
      if (T.visible === !1) return;
      if (T.layers.test(U.layers)) {
        if (T.isGroup) z = T.renderOrder;
        else if (T.isLOD) T.autoUpdate === !0 && T.update(U);
        else if (T.isLight) d.pushLight(T), T.castShadow && d.pushShadow(T);
        else if (T.isSprite) {
          if (!T.frustumCulled || Ee.intersectsSprite(T)) {
            H && he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);
            const pe = K.update(T),
              ve = T.material;
            ve.visible && _.push(T, pe, ve, z, he.z, null);
          }
        } else if ((T.isMesh || T.isLine || T.isPoints) && (!T.frustumCulled || Ee.intersectsObject(T))) {
          const pe = K.update(T),
            ve = T.material;
          if (
            (H &&
              (T.boundingSphere !== void 0
                ? (T.boundingSphere === null && T.computeBoundingSphere(), he.copy(T.boundingSphere.center))
                : (pe.boundingSphere === null && pe.computeBoundingSphere(), he.copy(pe.boundingSphere.center)),
              he.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),
            Array.isArray(ve))
          ) {
            const Se = pe.groups;
            for (let Ie = 0, Ae = Se.length; Ie < Ae; Ie++) {
              const we = Se[Ie],
                st = ve[we.materialIndex];
              st && st.visible && _.push(T, pe, st, z, he.z, we);
            }
          } else ve.visible && _.push(T, pe, ve, z, he.z, null);
        }
      }
      const ce = T.children;
      for (let pe = 0, ve = ce.length; pe < ve; pe++) cn(ce[pe], U, z, H);
    }
    function bo(T, U, z, H) {
      const N = T.opaque,
        ce = T.transmissive,
        pe = T.transparent;
      d.setupLightsView(z),
        B === !0 && re.setGlobalState(v.clippingPlanes, z),
        ce.length > 0 && Ju(N, ce, U, z),
        H && xe.viewport(x.copy(H)),
        N.length > 0 && kr(N, U, z),
        ce.length > 0 && kr(ce, U, z),
        pe.length > 0 && kr(pe, U, z),
        xe.buffers.depth.setTest(!0),
        xe.buffers.depth.setMask(!0),
        xe.buffers.color.setMask(!0),
        xe.setPolygonOffset(!1);
    }
    function Ju(T, U, z, H) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null) return;
      const ce = Ne.isWebGL2;
      ue === null &&
        (ue = new wi(1, 1, {
          generateMipmaps: !0,
          type: ge.has("EXT_color_buffer_half_float") ? Rr : $n,
          minFilter: vi,
          samples: ce ? 4 : 0,
        })),
        v.getDrawingBufferSize(me),
        ce ? ue.setSize(me.x, me.y) : ue.setSize(Ba(me.x), Ba(me.y));
      const pe = v.getRenderTarget();
      v.setRenderTarget(ue),
        v.getClearColor(q),
        (C = v.getClearAlpha()),
        C < 1 && v.setClearColor(16777215, 0.5),
        v.clear();
      const ve = v.toneMapping;
      (v.toneMapping = Kn), kr(T, z, H), Oe.updateMultisampleRenderTarget(ue), Oe.updateRenderTargetMipmap(ue);
      let Se = !1;
      for (let Ie = 0, Ae = U.length; Ie < Ae; Ie++) {
        const we = U[Ie],
          st = we.object,
          zt = we.geometry,
          dt = we.material,
          Mn = we.group;
        if (dt.side === Cn && st.layers.test(H.layers)) {
          const et = dt.side;
          (dt.side = Ut),
            (dt.needsUpdate = !0),
            wo(st, z, H, zt, dt, Mn),
            (dt.side = et),
            (dt.needsUpdate = !0),
            (Se = !0);
        }
      }
      Se === !0 && (Oe.updateMultisampleRenderTarget(ue), Oe.updateRenderTargetMipmap(ue)),
        v.setRenderTarget(pe),
        v.setClearColor(q, C),
        (v.toneMapping = ve);
    }
    function kr(T, U, z) {
      const H = U.isScene === !0 ? U.overrideMaterial : null;
      for (let N = 0, ce = T.length; N < ce; N++) {
        const pe = T[N],
          ve = pe.object,
          Se = pe.geometry,
          Ie = H === null ? pe.material : H,
          Ae = pe.group;
        ve.layers.test(z.layers) && wo(ve, U, z, Se, Ie, Ae);
      }
    }
    function wo(T, U, z, H, N, ce) {
      T.onBeforeRender(v, U, z, H, N, ce),
        T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, T.matrixWorld),
        T.normalMatrix.getNormalMatrix(T.modelViewMatrix),
        N.onBeforeRender(v, U, z, H, T, ce),
        N.transparent === !0 && N.side === Cn && N.forceSinglePass === !1
          ? ((N.side = Ut),
            (N.needsUpdate = !0),
            v.renderBufferDirect(z, U, H, N, T, ce),
            (N.side = Jn),
            (N.needsUpdate = !0),
            v.renderBufferDirect(z, U, H, N, T, ce),
            (N.side = Cn))
          : v.renderBufferDirect(z, U, H, N, T, ce),
        T.onAfterRender(v, U, z, H, N, ce);
    }
    function Wr(T, U, z) {
      U.isScene !== !0 && (U = ke);
      const H = Ue.get(T),
        N = d.state.lights,
        ce = d.state.shadowsArray,
        pe = N.state.version,
        ve = Q.getParameters(T, N.state, ce, U, z),
        Se = Q.getProgramCacheKey(ve);
      let Ie = H.programs;
      (H.environment = T.isMeshStandardMaterial ? U.environment : null),
        (H.fog = U.fog),
        (H.envMap = (T.isMeshStandardMaterial ? R : rt).get(T.envMap || H.environment)),
        (H.envMapRotation = H.environment !== null && T.envMap === null ? U.environmentRotation : T.envMapRotation),
        Ie === void 0 && (T.addEventListener("dispose", O), (Ie = new Map()), (H.programs = Ie));
      let Ae = Ie.get(Se);
      if (Ae !== void 0) {
        if (H.currentProgram === Ae && H.lightsStateVersion === pe) return Co(T, ve), Ae;
      } else
        (ve.uniforms = Q.getUniforms(T)),
          T.onBuild(z, ve, v),
          T.onBeforeCompile(ve, v),
          (Ae = Q.acquireProgram(ve, Se)),
          Ie.set(Se, Ae),
          (H.uniforms = ve.uniforms);
      const we = H.uniforms;
      return (
        ((!T.isShaderMaterial && !T.isRawShaderMaterial) || T.clipping === !0) && (we.clippingPlanes = re.uniform),
        Co(T, ve),
        (H.needsLights = th(T)),
        (H.lightsStateVersion = pe),
        H.needsLights &&
          ((we.ambientLightColor.value = N.state.ambient),
          (we.lightProbe.value = N.state.probe),
          (we.directionalLights.value = N.state.directional),
          (we.directionalLightShadows.value = N.state.directionalShadow),
          (we.spotLights.value = N.state.spot),
          (we.spotLightShadows.value = N.state.spotShadow),
          (we.rectAreaLights.value = N.state.rectArea),
          (we.ltc_1.value = N.state.rectAreaLTC1),
          (we.ltc_2.value = N.state.rectAreaLTC2),
          (we.pointLights.value = N.state.point),
          (we.pointLightShadows.value = N.state.pointShadow),
          (we.hemisphereLights.value = N.state.hemi),
          (we.directionalShadowMap.value = N.state.directionalShadowMap),
          (we.directionalShadowMatrix.value = N.state.directionalShadowMatrix),
          (we.spotShadowMap.value = N.state.spotShadowMap),
          (we.spotLightMatrix.value = N.state.spotLightMatrix),
          (we.spotLightMap.value = N.state.spotLightMap),
          (we.pointShadowMap.value = N.state.pointShadowMap),
          (we.pointShadowMatrix.value = N.state.pointShadowMatrix)),
        (H.currentProgram = Ae),
        (H.uniformsList = null),
        Ae
      );
    }
    function Ro(T) {
      if (T.uniformsList === null) {
        const U = T.currentProgram.getUniforms();
        T.uniformsList = ms.seqWithValue(U.seq, T.uniforms);
      }
      return T.uniformsList;
    }
    function Co(T, U) {
      const z = Ue.get(T);
      (z.outputColorSpace = U.outputColorSpace),
        (z.batching = U.batching),
        (z.instancing = U.instancing),
        (z.instancingColor = U.instancingColor),
        (z.instancingMorph = U.instancingMorph),
        (z.skinning = U.skinning),
        (z.morphTargets = U.morphTargets),
        (z.morphNormals = U.morphNormals),
        (z.morphColors = U.morphColors),
        (z.morphTargetsCount = U.morphTargetsCount),
        (z.numClippingPlanes = U.numClippingPlanes),
        (z.numIntersection = U.numClipIntersection),
        (z.vertexAlphas = U.vertexAlphas),
        (z.vertexTangents = U.vertexTangents),
        (z.toneMapping = U.toneMapping);
    }
    function Qu(T, U, z, H, N) {
      U.isScene !== !0 && (U = ke), Oe.resetTextureUnits();
      const ce = U.fog,
        pe = H.isMeshStandardMaterial ? U.environment : null,
        ve = y === null ? v.outputColorSpace : y.isXRRenderTarget === !0 ? y.texture.colorSpace : ti,
        Se = (H.isMeshStandardMaterial ? R : rt).get(H.envMap || pe),
        Ie = H.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4,
        Ae = !!z.attributes.tangent && (!!H.normalMap || H.anisotropy > 0),
        we = !!z.morphAttributes.position,
        st = !!z.morphAttributes.normal,
        zt = !!z.morphAttributes.color;
      let dt = Kn;
      H.toneMapped && (y === null || y.isXRRenderTarget === !0) && (dt = v.toneMapping);
      const Mn = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color,
        et = Mn !== void 0 ? Mn.length : 0,
        Pe = Ue.get(H),
        Bs = d.state.lights;
      if (B === !0 && (j === !0 || T !== D)) {
        const $t = T === D && H.id === P;
        re.setState(H, T, $t);
      }
      let Je = !1;
      H.version === Pe.__version
        ? ((Pe.needsLights && Pe.lightsStateVersion !== Bs.state.version) ||
            Pe.outputColorSpace !== ve ||
            (N.isBatchedMesh && Pe.batching === !1) ||
            (!N.isBatchedMesh && Pe.batching === !0) ||
            (N.isInstancedMesh && Pe.instancing === !1) ||
            (!N.isInstancedMesh && Pe.instancing === !0) ||
            (N.isSkinnedMesh && Pe.skinning === !1) ||
            (!N.isSkinnedMesh && Pe.skinning === !0) ||
            (N.isInstancedMesh && Pe.instancingColor === !0 && N.instanceColor === null) ||
            (N.isInstancedMesh && Pe.instancingColor === !1 && N.instanceColor !== null) ||
            (N.isInstancedMesh && Pe.instancingMorph === !0 && N.morphTexture === null) ||
            (N.isInstancedMesh && Pe.instancingMorph === !1 && N.morphTexture !== null) ||
            Pe.envMap !== Se ||
            (H.fog === !0 && Pe.fog !== ce) ||
            (Pe.numClippingPlanes !== void 0 &&
              (Pe.numClippingPlanes !== re.numPlanes || Pe.numIntersection !== re.numIntersection)) ||
            Pe.vertexAlphas !== Ie ||
            Pe.vertexTangents !== Ae ||
            Pe.morphTargets !== we ||
            Pe.morphNormals !== st ||
            Pe.morphColors !== zt ||
            Pe.toneMapping !== dt ||
            (Ne.isWebGL2 === !0 && Pe.morphTargetsCount !== et)) &&
          (Je = !0)
        : ((Je = !0), (Pe.__version = H.version));
      let ii = Pe.currentProgram;
      Je === !0 && (ii = Wr(H, U, N));
      let Po = !1,
        mr = !1,
        zs = !1;
      const Mt = ii.getUniforms(),
        ri = Pe.uniforms;
      if (
        (xe.useProgram(ii.program) && ((Po = !0), (mr = !0), (zs = !0)),
        H.id !== P && ((P = H.id), (mr = !0)),
        Po || D !== T)
      ) {
        Mt.setValue(I, "projectionMatrix", T.projectionMatrix), Mt.setValue(I, "viewMatrix", T.matrixWorldInverse);
        const $t = Mt.map.cameraPosition;
        $t !== void 0 && $t.setValue(I, he.setFromMatrixPosition(T.matrixWorld)),
          Ne.logarithmicDepthBuffer && Mt.setValue(I, "logDepthBufFC", 2 / (Math.log(T.far + 1) / Math.LN2)),
          (H.isMeshPhongMaterial ||
            H.isMeshToonMaterial ||
            H.isMeshLambertMaterial ||
            H.isMeshBasicMaterial ||
            H.isMeshStandardMaterial ||
            H.isShaderMaterial) &&
            Mt.setValue(I, "isOrthographic", T.isOrthographicCamera === !0),
          D !== T && ((D = T), (mr = !0), (zs = !0));
      }
      if (N.isSkinnedMesh) {
        Mt.setOptional(I, N, "bindMatrix"), Mt.setOptional(I, N, "bindMatrixInverse");
        const $t = N.skeleton;
        $t &&
          (Ne.floatVertexTextures
            ? ($t.boneTexture === null && $t.computeBoneTexture(), Mt.setValue(I, "boneTexture", $t.boneTexture, Oe))
            : console.warn(
                "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
              ));
      }
      N.isBatchedMesh &&
        (Mt.setOptional(I, N, "batchingTexture"), Mt.setValue(I, "batchingTexture", N._matricesTexture, Oe));
      const Gs = z.morphAttributes;
      if (
        ((Gs.position !== void 0 || Gs.normal !== void 0 || (Gs.color !== void 0 && Ne.isWebGL2 === !0)) &&
          te.update(N, z, ii),
        (mr || Pe.receiveShadow !== N.receiveShadow) &&
          ((Pe.receiveShadow = N.receiveShadow), Mt.setValue(I, "receiveShadow", N.receiveShadow)),
        H.isMeshGouraudMaterial &&
          H.envMap !== null &&
          ((ri.envMap.value = Se),
          (ri.flipEnvMap.value = Se.isCubeTexture && Se.isRenderTargetTexture === !1 ? -1 : 1)),
        mr &&
          (Mt.setValue(I, "toneMappingExposure", v.toneMappingExposure),
          Pe.needsLights && eh(ri, zs),
          ce && H.fog === !0 && J.refreshFogUniforms(ri, ce),
          J.refreshMaterialUniforms(ri, H, X, F, ue),
          ms.upload(I, Ro(Pe), ri, Oe)),
        H.isShaderMaterial &&
          H.uniformsNeedUpdate === !0 &&
          (ms.upload(I, Ro(Pe), ri, Oe), (H.uniformsNeedUpdate = !1)),
        H.isSpriteMaterial && Mt.setValue(I, "center", N.center),
        Mt.setValue(I, "modelViewMatrix", N.modelViewMatrix),
        Mt.setValue(I, "normalMatrix", N.normalMatrix),
        Mt.setValue(I, "modelMatrix", N.matrixWorld),
        H.isShaderMaterial || H.isRawShaderMaterial)
      ) {
        const $t = H.uniformsGroups;
        for (let Hs = 0, nh = $t.length; Hs < nh; Hs++)
          if (Ne.isWebGL2) {
            const Lo = $t[Hs];
            de.update(Lo, ii), de.bind(Lo, ii);
          } else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return ii;
    }
    function eh(T, U) {
      (T.ambientLightColor.needsUpdate = U),
        (T.lightProbe.needsUpdate = U),
        (T.directionalLights.needsUpdate = U),
        (T.directionalLightShadows.needsUpdate = U),
        (T.pointLights.needsUpdate = U),
        (T.pointLightShadows.needsUpdate = U),
        (T.spotLights.needsUpdate = U),
        (T.spotLightShadows.needsUpdate = U),
        (T.rectAreaLights.needsUpdate = U),
        (T.hemisphereLights.needsUpdate = U);
    }
    function th(T) {
      return (
        T.isMeshLambertMaterial ||
        T.isMeshToonMaterial ||
        T.isMeshPhongMaterial ||
        T.isMeshStandardMaterial ||
        T.isShadowMaterial ||
        (T.isShaderMaterial && T.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return b;
    }),
      (this.getActiveMipmapLevel = function () {
        return A;
      }),
      (this.getRenderTarget = function () {
        return y;
      }),
      (this.setRenderTargetTextures = function (T, U, z) {
        (Ue.get(T.texture).__webglTexture = U), (Ue.get(T.depthTexture).__webglTexture = z);
        const H = Ue.get(T);
        (H.__hasExternalTextures = !0),
          (H.__autoAllocateDepthBuffer = z === void 0),
          H.__autoAllocateDepthBuffer ||
            (ge.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (H.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (T, U) {
        const z = Ue.get(T);
        (z.__webglFramebuffer = U), (z.__useDefaultFramebuffer = U === void 0);
      }),
      (this.setRenderTarget = function (T, U = 0, z = 0) {
        (y = T), (b = U), (A = z);
        let H = !0,
          N = null,
          ce = !1,
          pe = !1;
        if (T) {
          const Se = Ue.get(T);
          Se.__useDefaultFramebuffer !== void 0
            ? (xe.bindFramebuffer(I.FRAMEBUFFER, null), (H = !1))
            : Se.__webglFramebuffer === void 0
            ? Oe.setupRenderTarget(T)
            : Se.__hasExternalTextures &&
              Oe.rebindTextures(T, Ue.get(T.texture).__webglTexture, Ue.get(T.depthTexture).__webglTexture);
          const Ie = T.texture;
          (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (pe = !0);
          const Ae = Ue.get(T).__webglFramebuffer;
          T.isWebGLCubeRenderTarget
            ? (Array.isArray(Ae[U]) ? (N = Ae[U][z]) : (N = Ae[U]), (ce = !0))
            : Ne.isWebGL2 && T.samples > 0 && Oe.useMultisampledRTT(T) === !1
            ? (N = Ue.get(T).__webglMultisampledFramebuffer)
            : Array.isArray(Ae)
            ? (N = Ae[z])
            : (N = Ae),
            x.copy(T.viewport),
            w.copy(T.scissor),
            (Y = T.scissorTest);
        } else x.copy(Z).multiplyScalar(X).floor(), w.copy(ee).multiplyScalar(X).floor(), (Y = le);
        if (
          (xe.bindFramebuffer(I.FRAMEBUFFER, N) && Ne.drawBuffers && H && xe.drawBuffers(T, N),
          xe.viewport(x),
          xe.scissor(w),
          xe.setScissorTest(Y),
          ce)
        ) {
          const Se = Ue.get(T.texture);
          I.framebufferTexture2D(
            I.FRAMEBUFFER,
            I.COLOR_ATTACHMENT0,
            I.TEXTURE_CUBE_MAP_POSITIVE_X + U,
            Se.__webglTexture,
            z
          );
        } else if (pe) {
          const Se = Ue.get(T.texture),
            Ie = U || 0;
          I.framebufferTextureLayer(I.FRAMEBUFFER, I.COLOR_ATTACHMENT0, Se.__webglTexture, z || 0, Ie);
        }
        P = -1;
      }),
      (this.readRenderTargetPixels = function (T, U, z, H, N, ce, pe) {
        if (!(T && T.isWebGLRenderTarget)) {
          console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
          return;
        }
        let ve = Ue.get(T).__webglFramebuffer;
        if ((T.isWebGLCubeRenderTarget && pe !== void 0 && (ve = ve[pe]), ve)) {
          xe.bindFramebuffer(I.FRAMEBUFFER, ve);
          try {
            const Se = T.texture,
              Ie = Se.format,
              Ae = Se.type;
            if (Ie !== on && _e.convert(Ie) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const we =
              Ae === Rr && (ge.has("EXT_color_buffer_half_float") || (Ne.isWebGL2 && ge.has("EXT_color_buffer_float")));
            if (
              Ae !== $n &&
              _e.convert(Ae) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(Ae === Pn && (Ne.isWebGL2 || ge.has("OES_texture_float") || ge.has("WEBGL_color_buffer_float"))) &&
              !we
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            U >= 0 &&
              U <= T.width - H &&
              z >= 0 &&
              z <= T.height - N &&
              I.readPixels(U, z, H, N, _e.convert(Ie), _e.convert(Ae), ce);
          } finally {
            const Se = y !== null ? Ue.get(y).__webglFramebuffer : null;
            xe.bindFramebuffer(I.FRAMEBUFFER, Se);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (T, U, z = 0) {
        const H = Math.pow(2, -z),
          N = Math.floor(U.image.width * H),
          ce = Math.floor(U.image.height * H);
        Oe.setTexture2D(U, 0), I.copyTexSubImage2D(I.TEXTURE_2D, z, 0, 0, T.x, T.y, N, ce), xe.unbindTexture();
      }),
      (this.copyTextureToTexture = function (T, U, z, H = 0) {
        const N = U.image.width,
          ce = U.image.height,
          pe = _e.convert(z.format),
          ve = _e.convert(z.type);
        Oe.setTexture2D(z, 0),
          I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, z.flipY),
          I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha),
          I.pixelStorei(I.UNPACK_ALIGNMENT, z.unpackAlignment),
          U.isDataTexture
            ? I.texSubImage2D(I.TEXTURE_2D, H, T.x, T.y, N, ce, pe, ve, U.image.data)
            : U.isCompressedTexture
            ? I.compressedTexSubImage2D(
                I.TEXTURE_2D,
                H,
                T.x,
                T.y,
                U.mipmaps[0].width,
                U.mipmaps[0].height,
                pe,
                U.mipmaps[0].data
              )
            : I.texSubImage2D(I.TEXTURE_2D, H, T.x, T.y, pe, ve, U.image),
          H === 0 && z.generateMipmaps && I.generateMipmap(I.TEXTURE_2D),
          xe.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (T, U, z, H, N = 0) {
        if (v.isWebGL1Renderer) {
          console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
          return;
        }
        const ce = Math.round(T.max.x - T.min.x),
          pe = Math.round(T.max.y - T.min.y),
          ve = T.max.z - T.min.z + 1,
          Se = _e.convert(H.format),
          Ie = _e.convert(H.type);
        let Ae;
        if (H.isData3DTexture) Oe.setTexture3D(H, 0), (Ae = I.TEXTURE_3D);
        else if (H.isDataArrayTexture || H.isCompressedArrayTexture)
          Oe.setTexture2DArray(H, 0), (Ae = I.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, H.flipY),
          I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, H.premultiplyAlpha),
          I.pixelStorei(I.UNPACK_ALIGNMENT, H.unpackAlignment);
        const we = I.getParameter(I.UNPACK_ROW_LENGTH),
          st = I.getParameter(I.UNPACK_IMAGE_HEIGHT),
          zt = I.getParameter(I.UNPACK_SKIP_PIXELS),
          dt = I.getParameter(I.UNPACK_SKIP_ROWS),
          Mn = I.getParameter(I.UNPACK_SKIP_IMAGES),
          et = z.isCompressedTexture ? z.mipmaps[N] : z.image;
        I.pixelStorei(I.UNPACK_ROW_LENGTH, et.width),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, et.height),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, T.min.x),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, T.min.y),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, T.min.z),
          z.isDataTexture || z.isData3DTexture
            ? I.texSubImage3D(Ae, N, U.x, U.y, U.z, ce, pe, ve, Se, Ie, et.data)
            : H.isCompressedArrayTexture
            ? I.compressedTexSubImage3D(Ae, N, U.x, U.y, U.z, ce, pe, ve, Se, et.data)
            : I.texSubImage3D(Ae, N, U.x, U.y, U.z, ce, pe, ve, Se, Ie, et),
          I.pixelStorei(I.UNPACK_ROW_LENGTH, we),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, st),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, zt),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, dt),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, Mn),
          N === 0 && H.generateMipmaps && I.generateMipmap(Ae),
          xe.unbindTexture();
      }),
      (this.initTexture = function (T) {
        T.isCubeTexture
          ? Oe.setTextureCube(T, 0)
          : T.isData3DTexture
          ? Oe.setTexture3D(T, 0)
          : T.isDataArrayTexture || T.isCompressedArrayTexture
          ? Oe.setTexture2DArray(T, 0)
          : Oe.setTexture2D(T, 0),
          xe.unbindTexture();
      }),
      (this.resetState = function () {
        (b = 0), (A = 0), (y = null), xe.reset(), fe.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Ln;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = e === ro ? "display-p3" : "srgb"),
      (t.unpackColorSpace = Xe.workingColorSpace === Ds ? "display-p3" : "srgb");
  }
  get useLegacyLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
    ),
      (this._useLegacyLights = e);
  }
}
class vg extends jc {}
vg.prototype.isWebGL1Renderer = !0;
class xg extends Xt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Dn()),
      (this.environmentRotation = new Dn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
const ec = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class Mg {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        a++, s === !1 && i.onStart !== void 0 && i.onStart(u, o, a), (s = !0);
      }),
      (this.itemEnd = function (u) {
        o++, i.onProgress !== void 0 && i.onProgress(u, o, a), o === a && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, h) {
        return c.push(u, h), this;
      }),
      (this.removeHandler = function (u) {
        const h = c.indexOf(u);
        return h !== -1 && c.splice(h, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let h = 0, f = c.length; h < f; h += 2) {
          const m = c[h],
            g = c[h + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return g;
        }
        return null;
      });
  }
}
const Sg = new Mg();
class oo {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Sg),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
oo.DEFAULT_MATERIAL_NAME = "__DEFAULT";
class Eg extends oo {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), (e = this.manager.resolveURL(e));
    const s = this,
      o = ec.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = Cr("img");
    function l() {
      u(), ec.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(h) {
      u(), i && i(h), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", l, !1),
      a.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class Tg extends oo {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ln(),
      o = new Eg(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i
      ),
      s
    );
  }
}
class yg {
  constructor(e = !0) {
    (this.autoStart = e), (this.startTime = 0), (this.oldTime = 0), (this.elapsedTime = 0), (this.running = !1);
  }
  start() {
    (this.startTime = tc()), (this.oldTime = this.startTime), (this.elapsedTime = 0), (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = tc();
      (e = (t - this.oldTime) / 1e3), (this.oldTime = t), (this.elapsedTime += e);
    }
    return e;
  }
}
function tc() {
  return (typeof performance > "u" ? Date : performance).now();
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: no } }));
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = no));
const Ag = "/assets/ponyo2-DtEs6tCi.jpg";
var bg = `varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`,
  wg = `varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uTextureAspect;
  uniform float uScreenAspect;
  uniform float uValue;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uVelo;
  uniform vec2 resolution;

  	float circle(vec2 uv, vec2 disc_center, float disc_radius, float border_size) {
		uv -= disc_center;
		uv*=resolution;
		float dist = sqrt(dot(uv, uv));
		return smoothstep(disc_radius+border_size, disc_radius-border_size, dist);
	}
  void main() {
  vec4 color = vec4(1.,0.,0.,1.);
  vec2 ratio = vec2(
    min(uScreenAspect / uTextureAspect, 1.0),
    min(uTextureAspect / uScreenAspect, 1.0)
  );


  vec2 textureUv = vec2(
    (vUv.x - 0.5) * ratio.x + 0.5,
    (vUv.y - 0.5) * ratio.y + 0.5
  );

    float c = circle(vUv, uMouse, 0.0, 0.27);
    float r = texture2D(uTexture, textureUv.xy += c * (uVelo * 1.9)).x;
		float g = texture2D(uTexture,textureUv.xy += c * (uVelo * 1.925)).y;
		float b = texture2D(uTexture,textureUv.xy += c * (uVelo * 1.95)).z;

    color = vec4(r, g, b, 1.);

  gl_FragColor = color ;
  }`;
function wn(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Jc(r, e) {
  (r.prototype = Object.create(e.prototype)), (r.prototype.constructor = r), (r.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var qt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
  lr = { duration: 0.5, overwrite: !1, delay: 0 },
  lo,
  yt,
  Qe,
  Jt = 1e8,
  $e = 1 / Jt,
  Ga = Math.PI * 2,
  Rg = Ga / 4,
  Cg = 0,
  Qc = Math.sqrt,
  Pg = Math.cos,
  Lg = Math.sin,
  _t = function (e) {
    return typeof e == "string";
  },
  it = function (e) {
    return typeof e == "function";
  },
  In = function (e) {
    return typeof e == "number";
  },
  co = function (e) {
    return typeof e > "u";
  },
  xn = function (e) {
    return typeof e == "object";
  },
  It = function (e) {
    return e !== !1;
  },
  uo = function () {
    return typeof window < "u";
  },
  ds = function (e) {
    return it(e) || _t(e);
  },
  eu = (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  At = Array.isArray,
  Ha = /(?:-?\.?\d|\.)+/gi,
  tu = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  ji = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Sa = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  nu = /[+-]=-?[.\d]+/,
  iu = /[^,'"\[\]\s]+/gi,
  Dg = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  tt,
  hn,
  Va,
  ho,
  Yt = {},
  ys = {},
  ru,
  su = function (e) {
    return (ys = Ri(e, Yt)) && Bt;
  },
  fo = function (e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
  },
  Pr = function (e, t) {
    return !t && console.warn(e);
  },
  au = function (e, t) {
    return (e && (Yt[e] = t) && ys && (ys[e] = t)) || Yt;
  },
  Lr = function () {
    return 0;
  },
  Ug = { suppressEvents: !0, isStart: !0, kill: !1 },
  _s = { suppressEvents: !0, kill: !1 },
  Ig = { suppressEvents: !0 },
  po = {},
  Zn = [],
  ka = {},
  ou,
  Vt = {},
  Ea = {},
  nc = 30,
  gs = [],
  mo = "",
  _o = function (e) {
    var t = e[0],
      n,
      i;
    if ((xn(t) || it(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (i = gs.length; i-- && !gs[i].targetTest(t); );
      n = gs[i];
    }
    for (i = e.length; i--; ) (e[i] && (e[i]._gsap || (e[i]._gsap = new Lu(e[i], n)))) || e.splice(i, 1);
    return e;
  },
  Ti = function (e) {
    return e._gsap || _o(Qt(e))[0]._gsap;
  },
  lu = function (e, t, n) {
    return (n = e[t]) && it(n) ? e[t]() : (co(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  Nt = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  at = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  mt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  tr = function (e, t) {
    var n = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (e = parseFloat(e)), n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i;
  },
  Ng = function (e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n; );
    return i < n;
  },
  As = function () {
    var e = Zn.length,
      t = Zn.slice(0),
      n,
      i;
    for (ka = {}, Zn.length = 0, n = 0; n < e; n++)
      (i = t[n]), i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  cu = function (e, t, n, i) {
    Zn.length && !yt && As(),
      e.render(t, n, i || (yt && t < 0 && (e._initted || e._startAt))),
      Zn.length && !yt && As();
  },
  uu = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(iu).length < 2 ? t : _t(e) ? e.trim() : e;
  },
  hu = function (e) {
    return e;
  },
  en = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  Og = function (e) {
    return function (t, n) {
      for (var i in n) i in t || (i === "duration" && e) || i === "ease" || (t[i] = n[i]);
    };
  },
  Ri = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  ic = function r(e, t) {
    for (var n in t)
      n !== "__proto__" &&
        n !== "constructor" &&
        n !== "prototype" &&
        (e[n] = xn(t[n]) ? r(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  },
  bs = function (e, t) {
    var n = {},
      i;
    for (i in e) i in t || (n[i] = e[i]);
    return n;
  },
  Ar = function (e) {
    var t = e.parent || tt,
      n = e.keyframes ? Og(At(e.keyframes)) : en;
    if (It(e.inherit)) for (; t; ) n(e, t.vars.defaults), (t = t.parent || t._dp);
    return e;
  },
  Fg = function (e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n]; );
    return n < 0;
  },
  fu = function (e, t, n, i, s) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var o = e[i],
      a;
    if (s) for (a = t[s]; o && o[s] > a; ) o = o._prev;
    return (
      o ? ((t._next = o._next), (o._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = o),
      (t.parent = t._dp = e),
      t
    );
  },
  Ns = function (e, t, n, i) {
    n === void 0 && (n = "_first"), i === void 0 && (i = "_last");
    var s = t._prev,
      o = t._next;
    s ? (s._next = o) : e[n] === t && (e[n] = o),
      o ? (o._prev = s) : e[i] === t && (e[i] = s),
      (t._next = t._prev = t.parent = null);
  },
  Qn = function (e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), (e._act = 0);
  },
  yi = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0)) for (var n = e; n; ) (n._dirty = 1), (n = n.parent);
    return e;
  },
  Bg = function (e) {
    for (var t = e.parent; t && t.parent; ) (t._dirty = 1), t.totalDuration(), (t = t.parent);
    return e;
  },
  Wa = function (e, t, n, i) {
    return (
      e._startAt &&
      (yt ? e._startAt.revert(_s) : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, i))
    );
  },
  zg = function r(e) {
    return !e || (e._ts && r(e.parent));
  },
  rc = function (e) {
    return e._repeat ? cr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  cr = function (e, t) {
    var n = Math.floor((e /= t));
    return e && n === e ? n - 1 : n;
  },
  ws = function (e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
  },
  Os = function (e) {
    return (e._end = mt(e._start + (e._tDur / Math.abs(e._ts || e._rts || $e) || 0)));
  },
  Fs = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = mt(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts))),
        Os(e),
        n._dirty || yi(n, e)),
      e
    );
  },
  du = function (e, t) {
    var n;
    if (
      ((t._time || (!t._dur && t._initted) || (t._start < e._time && (t._dur || !t.add))) &&
        ((n = ws(e.rawTime(), t)), (!t._dur || Vr(0, t.totalDuration(), n) - t._tTime > $e) && t.render(n, !0)),
      yi(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration()) for (n = e; n._dp; ) n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp);
      e._zTime = -$e;
    }
  },
  pn = function (e, t, n, i) {
    return (
      t.parent && Qn(t),
      (t._start = mt((In(n) ? n : n || e !== tt ? jt(e, n, t) : e._time) + t._delay)),
      (t._end = mt(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
      fu(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Xa(t) || (e._recent = t),
      i || du(e, t),
      e._ts < 0 && Fs(e, e._tTime),
      e
    );
  },
  pu = function (e, t) {
    return (Yt.ScrollTrigger || fo("scrollTrigger", t)) && Yt.ScrollTrigger.create(t, e);
  },
  mu = function (e, t, n, i, s) {
    if ((vo(e, t, s), !e._initted)) return 1;
    if (!n && e._pt && !yt && ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) && ou !== kt.frame)
      return Zn.push(e), (e._lazy = [s, i]), 1;
  },
  Gg = function r(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || r(t));
  },
  Xa = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  Hg = function (e, t, n, i) {
    var s = e.ratio,
      o =
        t < 0 || (!t && ((!e._start && Gg(e) && !(!e._initted && Xa(e))) || ((e._ts < 0 || e._dp._ts < 0) && !Xa(e))))
          ? 0
          : 1,
      a = e._rDelay,
      l = 0,
      c,
      u,
      h;
    if (
      (a &&
        e._repeat &&
        ((l = Vr(0, e._tDur, t)),
        (u = cr(l, a)),
        e._yoyo && u & 1 && (o = 1 - o),
        u !== cr(e._tTime, a) && ((s = 1 - o), e.vars.repeatRefresh && e._initted && e.invalidate())),
      o !== s || yt || i || e._zTime === $e || (!t && e._zTime))
    ) {
      if (!e._initted && mu(e, t, i, n, l)) return;
      for (
        h = e._zTime,
          e._zTime = t || (n ? $e : 0),
          n || (n = t && !h),
          e.ratio = o,
          e._from && (o = 1 - o),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;

      )
        c.r(o, c.d), (c = c._next);
      t < 0 && Wa(e, t, n, !0),
        e._onUpdate && !n && Wt(e, "onUpdate"),
        l && e._repeat && !n && e.parent && Wt(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === o &&
          (o && Qn(e, 1), !n && !yt && (Wt(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
    } else e._zTime || (e._zTime = t);
  },
  Vg = function (e, t, n) {
    var i;
    if (n > t)
      for (i = e._first; i && i._start <= n; ) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= n; ) {
        if (i.data === "isPause" && i._start < t) return i;
        i = i._prev;
      }
  },
  ur = function (e, t, n, i) {
    var s = e._repeat,
      o = mt(t) || 0,
      a = e._tTime / e._tDur;
    return (
      a && !i && (e._time *= o / e._dur),
      (e._dur = o),
      (e._tDur = s ? (s < 0 ? 1e10 : mt(o * (s + 1) + e._rDelay * s)) : o),
      a > 0 && !i && Fs(e, (e._tTime = e._tDur * a)),
      e.parent && Os(e),
      n || yi(e.parent, e),
      e
    );
  },
  sc = function (e) {
    return e instanceof Ct ? yi(e) : ur(e, e._dur);
  },
  kg = { _start: 0, endTime: Lr, totalDuration: Lr },
  jt = function r(e, t, n) {
    var i = e.labels,
      s = e._recent || kg,
      o = e.duration() >= Jt ? s.endTime(!1) : e._dur,
      a,
      l,
      c;
    return _t(t) && (isNaN(t) || t in i)
      ? ((l = t.charAt(0)),
        (c = t.substr(-1) === "%"),
        (a = t.indexOf("=")),
        l === "<" || l === ">"
          ? (a >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? s._start : s.endTime(s._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) * (c ? (a < 0 ? s : n).totalDuration() / 100 : 1))
          : a < 0
          ? (t in i || (i[t] = o), i[t])
          : ((l = parseFloat(t.charAt(a - 1) + t.substr(a + 1))),
            c && n && (l = (l / 100) * (At(n) ? n[0] : n).totalDuration()),
            a > 1 ? r(e, t.substr(0, a - 1), n) + l : o + l))
      : t == null
      ? o
      : +t;
  },
  br = function (e, t, n) {
    var i = In(t[1]),
      s = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[s],
      a,
      l;
    if ((i && (o.duration = t[1]), (o.parent = n), e)) {
      for (a = o, l = n; l && !("immediateRender" in a); )
        (a = l.vars.defaults || {}), (l = It(l.vars.inherit) && l.parent);
      (o.immediateRender = It(a.immediateRender)), e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
    }
    return new ct(t[0], o, t[s + 1]);
  },
  ni = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Vr = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Tt = function (e, t) {
    return !_t(e) || !(t = Dg.exec(e)) ? "" : t[1];
  },
  Wg = function (e, t, n) {
    return ni(n, function (i) {
      return Vr(e, t, i);
    });
  },
  qa = [].slice,
  _u = function (e, t) {
    return (
      e && xn(e) && "length" in e && ((!t && !e.length) || (e.length - 1 in e && xn(e[0]))) && !e.nodeType && e !== hn
    );
  },
  Xg = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (i) {
        var s;
        return (_t(i) && !t) || _u(i, 1) ? (s = n).push.apply(s, Qt(i)) : n.push(i);
      }) || n
    );
  },
  Qt = function (e, t, n) {
    return Qe && !t && Qe.selector
      ? Qe.selector(e)
      : _t(e) && !n && (Va || !hr())
      ? qa.call((t || ho).querySelectorAll(e), 0)
      : At(e)
      ? Xg(e, n)
      : _u(e)
      ? qa.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Ya = function (e) {
    return (
      (e = Qt(e)[0] || Pr("Invalid scope") || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Qt(t, n.querySelectorAll ? n : n === e ? Pr("Invalid scope") || ho.createElement("div") : e);
      }
    );
  },
  gu = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  vu = function (e) {
    if (it(e)) return e;
    var t = xn(e) ? e : { each: e },
      n = Ai(t.ease),
      i = t.from || 0,
      s = parseFloat(t.base) || 0,
      o = {},
      a = i > 0 && i < 1,
      l = isNaN(i) || a,
      c = t.axis,
      u = i,
      h = i;
    return (
      _t(i) ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[i] || 0) : !a && l && ((u = i[0]), (h = i[1])),
      function (f, m, g) {
        var _ = (g || t).length,
          d = o[_],
          p,
          S,
          v,
          E,
          b,
          A,
          y,
          P,
          D;
        if (!d) {
          if (((D = t.grid === "auto" ? 0 : (t.grid || [1, Jt])[1]), !D)) {
            for (y = -Jt; y < (y = g[D++].getBoundingClientRect().left) && D < _; );
            D < _ && D--;
          }
          for (
            d = o[_] = [],
              p = l ? Math.min(D, _) * u - 0.5 : i % D,
              S = D === Jt ? 0 : l ? (_ * h) / D - 0.5 : (i / D) | 0,
              y = 0,
              P = Jt,
              A = 0;
            A < _;
            A++
          )
            (v = (A % D) - p),
              (E = S - ((A / D) | 0)),
              (d[A] = b = c ? Math.abs(c === "y" ? E : v) : Qc(v * v + E * E)),
              b > y && (y = b),
              b < P && (P = b);
          i === "random" && gu(d),
            (d.max = y - P),
            (d.min = P),
            (d.v = _ =
              (parseFloat(t.amount) ||
                parseFloat(t.each) * (D > _ ? _ - 1 : c ? (c === "y" ? _ / D : D) : Math.max(D, _ / D)) ||
                0) * (i === "edges" ? -1 : 1)),
            (d.b = _ < 0 ? s - _ : s),
            (d.u = Tt(t.amount || t.each) || 0),
            (n = n && _ < 0 ? Ru(n) : n);
        }
        return (_ = (d[f] - d.min) / d.max || 0), mt(d.b + (n ? n(_) : _) * d.v) + d.u;
      }
    );
  },
  Ka = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (n) {
      var i = mt(Math.round(parseFloat(n) / e) * e * t);
      return (i - (i % 1)) / t + (In(n) ? 0 : Tt(n));
    };
  },
  xu = function (e, t) {
    var n = At(e),
      i,
      s;
    return (
      !n &&
        xn(e) &&
        ((i = n = e.radius || Jt),
        e.values ? ((e = Qt(e.values)), (s = !In(e[0])) && (i *= i)) : (e = Ka(e.increment))),
      ni(
        t,
        n
          ? it(e)
            ? function (o) {
                return (s = e(o)), Math.abs(s - o) <= i ? s : o;
              }
            : function (o) {
                for (
                  var a = parseFloat(s ? o.x : o), l = parseFloat(s ? o.y : 0), c = Jt, u = 0, h = e.length, f, m;
                  h--;

                )
                  s ? ((f = e[h].x - a), (m = e[h].y - l), (f = f * f + m * m)) : (f = Math.abs(e[h] - a)),
                    f < c && ((c = f), (u = h));
                return (u = !i || c <= i ? e[u] : o), s || u === o || In(o) ? u : u + Tt(o);
              }
          : Ka(e)
      )
    );
  },
  Mu = function (e, t, n, i) {
    return ni(At(e) ? !t : n === !0 ? !!(n = 0) : !i, function () {
      return At(e)
        ? e[~~(Math.random() * e.length)]
        : (n = n || 1e-5) &&
            (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
            Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * i) / i;
    });
  },
  qg = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function (i) {
      return t.reduce(function (s, o) {
        return o(s);
      }, i);
    };
  },
  Yg = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || Tt(n));
    };
  },
  Kg = function (e, t, n) {
    return Eu(e, t, 0, 1, n);
  },
  Su = function (e, t, n) {
    return ni(n, function (i) {
      return e[~~t(i)];
    });
  },
  $g = function r(e, t, n) {
    var i = t - e;
    return At(e)
      ? Su(e, r(0, e.length), t)
      : ni(n, function (s) {
          return ((i + ((s - e) % i)) % i) + e;
        });
  },
  Zg = function r(e, t, n) {
    var i = t - e,
      s = i * 2;
    return At(e)
      ? Su(e, r(0, e.length - 1), t)
      : ni(n, function (o) {
          return (o = (s + ((o - e) % s)) % s || 0), e + (o > i ? s - o : o);
        });
  },
  Dr = function (e) {
    for (var t = 0, n = "", i, s, o, a; ~(i = e.indexOf("random(", t)); )
      (o = e.indexOf(")", i)),
        (a = e.charAt(i + 7) === "["),
        (s = e.substr(i + 7, o - i - 7).match(a ? iu : Ha)),
        (n += e.substr(t, i - t) + Mu(a ? s : +s[0], a ? 0 : +s[1], +s[2] || 1e-5)),
        (t = o + 1);
    return n + e.substr(t, e.length - t);
  },
  Eu = function (e, t, n, i, s) {
    var o = t - e,
      a = i - n;
    return ni(s, function (l) {
      return n + (((l - e) / o) * a || 0);
    });
  },
  jg = function r(e, t, n, i) {
    var s = isNaN(e + t)
      ? 0
      : function (m) {
          return (1 - m) * e + m * t;
        };
    if (!s) {
      var o = _t(e),
        a = {},
        l,
        c,
        u,
        h,
        f;
      if ((n === !0 && (i = 1) && (n = null), o)) (e = { p: e }), (t = { p: t });
      else if (At(e) && !At(t)) {
        for (u = [], h = e.length, f = h - 2, c = 1; c < h; c++) u.push(r(e[c - 1], e[c]));
        h--,
          (s = function (g) {
            g *= h;
            var _ = Math.min(f, ~~g);
            return u[_](g - _);
          }),
          (n = t);
      } else i || (e = Ri(At(e) ? [] : {}, e));
      if (!u) {
        for (l in t) go.call(a, e, l, "get", t[l]);
        s = function (g) {
          return So(g, a) || (o ? e.p : e);
        };
      }
    }
    return ni(n, s);
  },
  ac = function (e, t, n) {
    var i = e.labels,
      s = Jt,
      o,
      a,
      l;
    for (o in i) (a = i[o] - t), a < 0 == !!n && a && s > (a = Math.abs(a)) && ((l = o), (s = a));
    return l;
  },
  Wt = function (e, t, n) {
    var i = e.vars,
      s = i[t],
      o = Qe,
      a = e._ctx,
      l,
      c,
      u;
    if (s)
      return (
        (l = i[t + "Params"]),
        (c = i.callbackScope || e),
        n && Zn.length && As(),
        a && (Qe = a),
        (u = l ? s.apply(c, l) : s.call(c)),
        (Qe = o),
        u
      );
  },
  Tr = function (e) {
    return Qn(e), e.scrollTrigger && e.scrollTrigger.kill(!!yt), e.progress() < 1 && Wt(e, "onInterrupt"), e;
  },
  Ji,
  Tu = [],
  yu = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), uo() || e.headless)) {
        var t = e.name,
          n = it(e),
          i =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          s = { init: Lr, render: So, add: go, kill: d0, modifier: f0, rawVars: 0 },
          o = { targetTest: 0, get: 0, getSetter: Mo, aliases: {}, register: 0 };
        if ((hr(), e !== i)) {
          if (Vt[t]) return;
          en(i, en(bs(e, s), o)),
            Ri(i.prototype, Ri(s, bs(e, o))),
            (Vt[(i.prop = t)] = i),
            e.targetTest && (gs.push(i), (po[t] = 1)),
            (t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin");
        }
        au(t, i), e.register && e.register(Bt, i, Ot);
      } else Tu.push(e);
  },
  qe = 255,
  yr = {
    aqua: [0, qe, qe],
    lime: [0, qe, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, qe],
    navy: [0, 0, 128],
    white: [qe, qe, qe],
    olive: [128, 128, 0],
    yellow: [qe, qe, 0],
    orange: [qe, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [qe, 0, 0],
    pink: [qe, 192, 203],
    cyan: [0, qe, qe],
    transparent: [qe, qe, qe, 0],
  },
  Ta = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1 ? t + (n - t) * e * 6 : e < 0.5 ? n : e * 3 < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * qe + 0.5) | 0
    );
  },
  Au = function (e, t, n) {
    var i = e ? (In(e) ? [e >> 16, (e >> 8) & qe, e & qe] : 0) : yr.black,
      s,
      o,
      a,
      l,
      c,
      u,
      h,
      f,
      m,
      g;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), yr[e])) i = yr[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((s = e.charAt(1)),
            (o = e.charAt(2)),
            (a = e.charAt(3)),
            (e = "#" + s + s + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (i = parseInt(e.substr(1, 6), 16)), [i >> 16, (i >> 8) & qe, i & qe, parseInt(e.substr(7), 16) / 255];
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & qe, e & qe]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = g = e.match(Ha)), !t))
          (l = (+i[0] % 360) / 360),
            (c = +i[1] / 100),
            (u = +i[2] / 100),
            (o = u <= 0.5 ? u * (c + 1) : u + c - u * c),
            (s = u * 2 - o),
            i.length > 3 && (i[3] *= 1),
            (i[0] = Ta(l + 1 / 3, s, o)),
            (i[1] = Ta(l, s, o)),
            (i[2] = Ta(l - 1 / 3, s, o));
        else if (~e.indexOf("=")) return (i = e.match(tu)), n && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(Ha) || yr.transparent;
      i = i.map(Number);
    }
    return (
      t &&
        !g &&
        ((s = i[0] / qe),
        (o = i[1] / qe),
        (a = i[2] / qe),
        (h = Math.max(s, o, a)),
        (f = Math.min(s, o, a)),
        (u = (h + f) / 2),
        h === f
          ? (l = c = 0)
          : ((m = h - f),
            (c = u > 0.5 ? m / (2 - h - f) : m / (h + f)),
            (l = h === s ? (o - a) / m + (o < a ? 6 : 0) : h === o ? (a - s) / m + 2 : (s - o) / m + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(c * 100 + 0.5)),
        (i[2] = ~~(u * 100 + 0.5))),
      n && i.length < 4 && (i[3] = 1),
      i
    );
  },
  bu = function (e) {
    var t = [],
      n = [],
      i = -1;
    return (
      e.split(jn).forEach(function (s) {
        var o = s.match(ji) || [];
        t.push.apply(t, o), n.push((i += o.length + 1));
      }),
      (t.c = n),
      t
    );
  },
  oc = function (e, t, n) {
    var i = "",
      s = (e + i).match(jn),
      o = t ? "hsla(" : "rgba(",
      a = 0,
      l,
      c,
      u,
      h;
    if (!s) return e;
    if (
      ((s = s.map(function (f) {
        return (f = Au(f, t, 1)) && o + (t ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")";
      })),
      n && ((u = bu(e)), (l = n.c), l.join(i) !== u.c.join(i)))
    )
      for (c = e.replace(jn, "1").split(ji), h = c.length - 1; a < h; a++)
        i += c[a] + (~l.indexOf(a) ? s.shift() || o + "0,0,0,0)" : (u.length ? u : s.length ? s : n).shift());
    if (!c) for (c = e.split(jn), h = c.length - 1; a < h; a++) i += c[a] + s[a];
    return i + c[h];
  },
  jn = (function () {
    var r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in yr) r += "|" + e + "\\b";
    return new RegExp(r + ")", "gi");
  })(),
  Jg = /hsl[a]?\(/,
  wu = function (e) {
    var t = e.join(" "),
      n;
    if (((jn.lastIndex = 0), jn.test(t)))
      return (n = Jg.test(t)), (e[1] = oc(e[1], n)), (e[0] = oc(e[0], n, bu(e[1]))), !0;
  },
  Ur,
  kt = (function () {
    var r = Date.now,
      e = 500,
      t = 33,
      n = r(),
      i = n,
      s = 1e3 / 240,
      o = s,
      a = [],
      l,
      c,
      u,
      h,
      f,
      m,
      g = function _(d) {
        var p = r() - i,
          S = d === !0,
          v,
          E,
          b,
          A;
        if (
          ((p > e || p < 0) && (n += p - t),
          (i += p),
          (b = i - n),
          (v = b - o),
          (v > 0 || S) &&
            ((A = ++h.frame), (f = b - h.time * 1e3), (h.time = b = b / 1e3), (o += v + (v >= s ? 4 : s - v)), (E = 1)),
          S || (l = c(_)),
          E)
        )
          for (m = 0; m < a.length; m++) a[m](b, f, A, d);
      };
    return (
      (h = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (d) {
          return f / (1e3 / (d || 60));
        },
        wake: function () {
          ru &&
            (!Va &&
              uo() &&
              ((hn = Va = window),
              (ho = hn.document || {}),
              (Yt.gsap = Bt),
              (hn.gsapVersions || (hn.gsapVersions = [])).push(Bt.version),
              su(ys || hn.GreenSockGlobals || (!hn.gsap && hn) || {}),
              Tu.forEach(yu)),
            (u = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && h.sleep(),
            (c =
              u ||
              function (d) {
                return setTimeout(d, (o - h.time * 1e3 + 1) | 0);
              }),
            (Ur = 1),
            g(2));
        },
        sleep: function () {
          (u ? cancelAnimationFrame : clearTimeout)(l), (Ur = 0), (c = Lr);
        },
        lagSmoothing: function (d, p) {
          (e = d || 1 / 0), (t = Math.min(p || 33, e));
        },
        fps: function (d) {
          (s = 1e3 / (d || 240)), (o = h.time * 1e3 + s);
        },
        add: function (d, p, S) {
          var v = p
            ? function (E, b, A, y) {
                d(E, b, A, y), h.remove(v);
              }
            : d;
          return h.remove(d), a[S ? "unshift" : "push"](v), hr(), v;
        },
        remove: function (d, p) {
          ~(p = a.indexOf(d)) && a.splice(p, 1) && m >= p && m--;
        },
        _listeners: a,
      }),
      h
    );
  })(),
  hr = function () {
    return !Ur && kt.wake();
  },
  Ge = {},
  Qg = /^[\d.\-M][\d.\-,\s]/,
  e0 = /["']/g,
  t0 = function (e) {
    for (var t = {}, n = e.substr(1, e.length - 3).split(":"), i = n[0], s = 1, o = n.length, a, l, c; s < o; s++)
      (l = n[s]),
        (a = s !== o - 1 ? l.lastIndexOf(",") : l.length),
        (c = l.substr(0, a)),
        (t[i] = isNaN(c) ? c.replace(e0, "").trim() : +c),
        (i = l.substr(a + 1).trim());
    return t;
  },
  n0 = function (e) {
    var t = e.indexOf("(") + 1,
      n = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
  },
  i0 = function (e) {
    var t = (e + "").split("("),
      n = Ge[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(null, ~e.indexOf("{") ? [t0(t[1])] : n0(e).split(",").map(uu))
      : Ge._CE && Qg.test(e)
      ? Ge._CE("", e)
      : n;
  },
  Ru = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Cu = function r(e, t) {
    for (var n = e._first, i; n; )
      n instanceof Ct
        ? r(n, t)
        : n.vars.yoyoEase &&
          (!n._yoyo || !n._repeat) &&
          n._yoyo !== t &&
          (n.timeline ? r(n.timeline, t) : ((i = n._ease), (n._ease = n._yEase), (n._yEase = i), (n._yoyo = t))),
        (n = n._next);
  },
  Ai = function (e, t) {
    return (e && (it(e) ? e : Ge[e] || i0(e))) || t;
  },
  Li = function (e, t, n, i) {
    n === void 0 &&
      (n = function (l) {
        return 1 - t(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        });
    var s = { easeIn: t, easeOut: n, easeInOut: i },
      o;
    return (
      Nt(e, function (a) {
        (Ge[a] = Yt[a] = s), (Ge[(o = a.toLowerCase())] = n);
        for (var l in s)
          Ge[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = Ge[a + "." + l] = s[l];
      }),
      s
    );
  },
  Pu = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  ya = function r(e, t, n) {
    var i = t >= 1 ? t : 1,
      s = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      o = (s / Ga) * (Math.asin(1 / i) || 0),
      a = function (u) {
        return u === 1 ? 1 : i * Math.pow(2, -10 * u) * Lg((u - o) * s) + 1;
      },
      l =
        e === "out"
          ? a
          : e === "in"
          ? function (c) {
              return 1 - a(1 - c);
            }
          : Pu(a);
    return (
      (s = Ga / s),
      (l.config = function (c, u) {
        return r(e, c, u);
      }),
      l
    );
  },
  Aa = function r(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function (o) {
        return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
      },
      i =
        e === "out"
          ? n
          : e === "in"
          ? function (s) {
              return 1 - n(1 - s);
            }
          : Pu(n);
    return (
      (i.config = function (s) {
        return r(e, s);
      }),
      i
    );
  };
Nt("Linear,Quad,Cubic,Quart,Quint,Strong", function (r, e) {
  var t = e < 5 ? e + 1 : e;
  Li(
    r + ",Power" + (t - 1),
    e
      ? function (n) {
          return Math.pow(n, t);
        }
      : function (n) {
          return n;
        },
    function (n) {
      return 1 - Math.pow(1 - n, t);
    },
    function (n) {
      return n < 0.5 ? Math.pow(n * 2, t) / 2 : 1 - Math.pow((1 - n) * 2, t) / 2;
    }
  );
});
Ge.Linear.easeNone = Ge.none = Ge.Linear.easeIn;
Li("Elastic", ya("in"), ya("out"), ya());
(function (r, e) {
  var t = 1 / e,
    n = 2 * t,
    i = 2.5 * t,
    s = function (a) {
      return a < t
        ? r * a * a
        : a < n
        ? r * Math.pow(a - 1.5 / e, 2) + 0.75
        : a < i
        ? r * (a -= 2.25 / e) * a + 0.9375
        : r * Math.pow(a - 2.625 / e, 2) + 0.984375;
    };
  Li(
    "Bounce",
    function (o) {
      return 1 - s(1 - o);
    },
    s
  );
})(7.5625, 2.75);
Li("Expo", function (r) {
  return r ? Math.pow(2, 10 * (r - 1)) : 0;
});
Li("Circ", function (r) {
  return -(Qc(1 - r * r) - 1);
});
Li("Sine", function (r) {
  return r === 1 ? 1 : -Pg(r * Rg) + 1;
});
Li("Back", Aa("in"), Aa("out"), Aa());
Ge.SteppedEase =
  Ge.steps =
  Yt.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          i = e + (t ? 0 : 1),
          s = t ? 1 : 0,
          o = 1 - $e;
        return function (a) {
          return (((i * Vr(0, o, a)) | 0) + s) * n;
        };
      },
    };
lr.ease = Ge["quad.out"];
Nt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (r) {
  return (mo += r + "," + r + "Params,");
});
var Lu = function (e, t) {
    (this.id = Cg++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : lu),
      (this.set = t ? t.getSetter : Mo);
  },
  Ir = (function () {
    function r(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        ur(this, +t.duration, 1, 1),
        (this.data = t.data),
        Qe && ((this._ctx = Qe), Qe.data.push(this)),
        Ur || kt.wake();
    }
    var e = r.prototype;
    return (
      (e.delay = function (n) {
        return n || n === 0
          ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + n - this._delay),
            (this._delay = n),
            this)
          : this._delay;
      }),
      (e.duration = function (n) {
        return arguments.length
          ? this.totalDuration(this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n)
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (n) {
        return arguments.length
          ? ((this._dirty = 0), ur(this, this._repeat < 0 ? n : (n - this._repeat * this._rDelay) / (this._repeat + 1)))
          : this._tDur;
      }),
      (e.totalTime = function (n, i) {
        if ((hr(), !arguments.length)) return this._tTime;
        var s = this._dp;
        if (s && s.smoothChildTiming && this._ts) {
          for (Fs(this, n), !s._dp || s.parent || du(s, this); s && s.parent; )
            s.parent._time !== s._start + (s._ts >= 0 ? s._tTime / s._ts : (s.totalDuration() - s._tTime) / -s._ts) &&
              s.totalTime(s._tTime, !0),
              (s = s.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && n < this._tDur) || (this._ts < 0 && n > 0) || (!this._tDur && !n)) &&
            pn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== n ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === $e) ||
            (!n && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = n), cu(this, n, i)),
          this
        );
      }),
      (e.time = function (n, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), n + rc(this)) % (this._dur + this._rDelay) || (n ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (n, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * n, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.progress = function (n, i) {
        return arguments.length
          ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) + rc(this), i)
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (n, i) {
        var s = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (n - 1) * s, i)
          : this._repeat
          ? cr(this._tTime, s) + 1
          : 1;
      }),
      (e.timeScale = function (n, i) {
        if (!arguments.length) return this._rts === -$e ? 0 : this._rts;
        if (this._rts === n) return this;
        var s = this.parent && this._ts ? ws(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +n || 0),
          (this._ts = this._ps || n === -$e ? 0 : this._rts),
          this.totalTime(Vr(-Math.abs(this._delay), this._tDur, s), i !== !1),
          Os(this),
          Bg(this)
        );
      }),
      (e.paused = function (n) {
        return arguments.length
          ? (this._ps !== n &&
              ((this._ps = n),
              n
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                : (hr(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                    this.progress() === 1 && Math.abs(this._zTime) !== $e && (this._tTime -= $e)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (n) {
        if (arguments.length) {
          this._start = n;
          var i = this.parent || this._dp;
          return i && (i._sort || !this.parent) && pn(i, this, n - this._delay), this;
        }
        return this._start;
      }),
      (e.endTime = function (n) {
        return this._start + (It(n) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
      }),
      (e.rawTime = function (n) {
        var i = this.parent || this._dp;
        return i
          ? n && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? ws(i.rawTime(n), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (n) {
        n === void 0 && (n = Ig);
        var i = yt;
        return (
          (yt = n),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(n), this.totalTime(-0.01, n.suppressEvents)),
          this.data !== "nested" && n.kill !== !1 && this.kill(),
          (yt = i),
          this
        );
      }),
      (e.globalTime = function (n) {
        for (var i = this, s = arguments.length ? n : i.rawTime(); i; )
          (s = i._start + s / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(n) : s;
      }),
      (e.repeat = function (n) {
        return arguments.length
          ? ((this._repeat = n === 1 / 0 ? -2 : n), sc(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (n) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = n), sc(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (n) {
        return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
      }),
      (e.seek = function (n, i) {
        return this.totalTime(jt(this, n), It(i));
      }),
      (e.restart = function (n, i) {
        return this.play().totalTime(n ? -this._delay : 0, It(i));
      }),
      (e.play = function (n, i) {
        return n != null && this.seek(n, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (n, i) {
        return n != null && this.seek(n || this.totalDuration(), i), this.reversed(!0).paused(!1);
      }),
      (e.pause = function (n, i) {
        return n != null && this.seek(n, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (n) {
        return arguments.length
          ? (!!n !== this.reversed() && this.timeScale(-this._rts || (n ? -$e : 0)), this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -$e), this;
      }),
      (e.isActive = function () {
        var n = this.parent || this._dp,
          i = this._start,
          s;
        return !!(
          !n ||
          (this._ts && this._initted && n.isActive() && (s = n.rawTime(!0)) >= i && s < this.endTime(!0) - $e)
        );
      }),
      (e.eventCallback = function (n, i, s) {
        var o = this.vars;
        return arguments.length > 1
          ? (i ? ((o[n] = i), s && (o[n + "Params"] = s), n === "onUpdate" && (this._onUpdate = i)) : delete o[n], this)
          : o[n];
      }),
      (e.then = function (n) {
        var i = this;
        return new Promise(function (s) {
          var o = it(n) ? n : hu,
            a = function () {
              var c = i.then;
              (i.then = null), it(o) && (o = o(i)) && (o.then || o === i) && (i.then = c), s(o), (i.then = c);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) || (!i._tTime && i._ts < 0) ? a() : (i._prom = a);
        });
      }),
      (e.kill = function () {
        Tr(this);
      }),
      r
    );
  })();
en(Ir.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -$e,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Ct = (function (r) {
  Jc(e, r);
  function e(n, i) {
    var s;
    return (
      n === void 0 && (n = {}),
      (s = r.call(this, n) || this),
      (s.labels = {}),
      (s.smoothChildTiming = !!n.smoothChildTiming),
      (s.autoRemoveChildren = !!n.autoRemoveChildren),
      (s._sort = It(n.sortChildren)),
      tt && pn(n.parent || tt, wn(s), i),
      n.reversed && s.reverse(),
      n.paused && s.paused(!0),
      n.scrollTrigger && pu(wn(s), n.scrollTrigger),
      s
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (i, s, o) {
      return br(0, arguments, this), this;
    }),
    (t.from = function (i, s, o) {
      return br(1, arguments, this), this;
    }),
    (t.fromTo = function (i, s, o, a) {
      return br(2, arguments, this), this;
    }),
    (t.set = function (i, s, o) {
      return (
        (s.duration = 0),
        (s.parent = this),
        Ar(s).repeatDelay || (s.repeat = 0),
        (s.immediateRender = !!s.immediateRender),
        new ct(i, s, jt(this, o), 1),
        this
      );
    }),
    (t.call = function (i, s, o) {
      return pn(this, ct.delayedCall(0, i, s), o);
    }),
    (t.staggerTo = function (i, s, o, a, l, c, u) {
      return (
        (o.duration = s),
        (o.stagger = o.stagger || a),
        (o.onComplete = c),
        (o.onCompleteParams = u),
        (o.parent = this),
        new ct(i, o, jt(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (i, s, o, a, l, c, u) {
      return (o.runBackwards = 1), (Ar(o).immediateRender = It(o.immediateRender)), this.staggerTo(i, s, o, a, l, c, u);
    }),
    (t.staggerFromTo = function (i, s, o, a, l, c, u, h) {
      return (a.startAt = o), (Ar(a).immediateRender = It(a.immediateRender)), this.staggerTo(i, s, a, l, c, u, h);
    }),
    (t.render = function (i, s, o) {
      var a = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        u = i <= 0 ? 0 : mt(i),
        h = this._zTime < 0 != i < 0 && (this._initted || !c),
        f,
        m,
        g,
        _,
        d,
        p,
        S,
        v,
        E,
        b,
        A,
        y;
      if ((this !== tt && u > l && i >= 0 && (u = l), u !== this._tTime || o || h)) {
        if (
          (a !== this._time && c && ((u += this._time - a), (i += this._time - a)),
          (f = u),
          (E = this._start),
          (v = this._ts),
          (p = !v),
          h && (c || (a = this._zTime), (i || !s) && (this._zTime = i)),
          this._repeat)
        ) {
          if (((A = this._yoyo), (d = c + this._rDelay), this._repeat < -1 && i < 0))
            return this.totalTime(d * 100 + i, s, o);
          if (
            ((f = mt(u % d)),
            u === l
              ? ((_ = this._repeat), (f = c))
              : ((_ = ~~(u / d)), _ && _ === u / d && ((f = c), _--), f > c && (f = c)),
            (b = cr(this._tTime, d)),
            !a && this._tTime && b !== _ && this._tTime - b * d - this._dur <= 0 && (b = _),
            A && _ & 1 && ((f = c - f), (y = 1)),
            _ !== b && !this._lock)
          ) {
            var P = A && b & 1,
              D = P === (A && _ & 1);
            if (
              (_ < b && (P = !P),
              (a = P ? 0 : u % c ? c : u),
              (this._lock = 1),
              (this.render(a || (y ? 0 : mt(_ * d)), s, !c)._lock = 0),
              (this._tTime = u),
              !s && this.parent && Wt(this, "onRepeat"),
              this.vars.repeatRefresh && !y && (this.invalidate()._lock = 1),
              (a && a !== this._time) || p !== !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              D &&
                ((this._lock = 2),
                (a = P ? c : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !y && this.invalidate()),
              (this._lock = 0),
              !this._ts && !p)
            )
              return this;
            Cu(this, y);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((S = Vg(this, mt(a), mt(f))), S && (u -= f - (f = S._start))),
          (this._tTime = u),
          (this._time = f),
          (this._act = !v),
          this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = i), (a = 0)),
          !a && f && !s && !_ && (Wt(this, "onStart"), this._tTime !== u))
        )
          return this;
        if (f >= a && i >= 0)
          for (m = this._first; m; ) {
            if (((g = m._next), (m._act || f >= m._start) && m._ts && S !== m)) {
              if (m.parent !== this) return this.render(i, s, o);
              if (
                (m.render(
                  m._ts > 0
                    ? (f - m._start) * m._ts
                    : (m._dirty ? m.totalDuration() : m._tDur) + (f - m._start) * m._ts,
                  s,
                  o
                ),
                f !== this._time || (!this._ts && !p))
              ) {
                (S = 0), g && (u += this._zTime = -$e);
                break;
              }
            }
            m = g;
          }
        else {
          m = this._last;
          for (var x = i < 0 ? i : f; m; ) {
            if (((g = m._prev), (m._act || x <= m._end) && m._ts && S !== m)) {
              if (m.parent !== this) return this.render(i, s, o);
              if (
                (m.render(
                  m._ts > 0
                    ? (x - m._start) * m._ts
                    : (m._dirty ? m.totalDuration() : m._tDur) + (x - m._start) * m._ts,
                  s,
                  o || (yt && (m._initted || m._startAt))
                ),
                f !== this._time || (!this._ts && !p))
              ) {
                (S = 0), g && (u += this._zTime = x ? -$e : $e);
                break;
              }
            }
            m = g;
          }
        }
        if (S && !s && (this.pause(), (S.render(f >= a ? 0 : -$e)._zTime = f >= a ? 1 : -1), this._ts))
          return (this._start = E), Os(this), this.render(i, s, o);
        this._onUpdate && !s && Wt(this, "onUpdate", !0),
          ((u === l && this._tTime >= this.totalDuration()) || (!u && a)) &&
            (E === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !c) && ((u === l && this._ts > 0) || (!u && this._ts < 0)) && Qn(this, 1),
              !s &&
                !(i < 0 && !a) &&
                (u || a || !l) &&
                (Wt(this, u === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (t.add = function (i, s) {
      var o = this;
      if ((In(s) || (s = jt(this, s, i)), !(i instanceof Ir))) {
        if (At(i))
          return (
            i.forEach(function (a) {
              return o.add(a, s);
            }),
            this
          );
        if (_t(i)) return this.addLabel(i, s);
        if (it(i)) i = ct.delayedCall(0, i);
        else return this;
      }
      return this !== i ? pn(this, i, s) : this;
    }),
    (t.getChildren = function (i, s, o, a) {
      i === void 0 && (i = !0), s === void 0 && (s = !0), o === void 0 && (o = !0), a === void 0 && (a = -Jt);
      for (var l = [], c = this._first; c; )
        c._start >= a &&
          (c instanceof ct ? s && l.push(c) : (o && l.push(c), i && l.push.apply(l, c.getChildren(!0, s, o)))),
          (c = c._next);
      return l;
    }),
    (t.getById = function (i) {
      for (var s = this.getChildren(1, 1, 1), o = s.length; o--; ) if (s[o].vars.id === i) return s[o];
    }),
    (t.remove = function (i) {
      return _t(i)
        ? this.removeLabel(i)
        : it(i)
        ? this.killTweensOf(i)
        : (Ns(this, i), i === this._recent && (this._recent = this._last), yi(this));
    }),
    (t.totalTime = function (i, s) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = mt(kt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
          r.prototype.totalTime.call(this, i, s),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (i, s) {
      return (this.labels[i] = jt(this, s)), this;
    }),
    (t.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (t.addPause = function (i, s, o) {
      var a = ct.delayedCall(0, s || Lr, o);
      return (a.data = "isPause"), (this._hasPause = 1), pn(this, a, jt(this, i));
    }),
    (t.removePause = function (i) {
      var s = this._first;
      for (i = jt(this, i); s; ) s._start === i && s.data === "isPause" && Qn(s), (s = s._next);
    }),
    (t.killTweensOf = function (i, s, o) {
      for (var a = this.getTweensOf(i, o), l = a.length; l--; ) Wn !== a[l] && a[l].kill(i, s);
      return this;
    }),
    (t.getTweensOf = function (i, s) {
      for (var o = [], a = Qt(i), l = this._first, c = In(s), u; l; )
        l instanceof ct
          ? Ng(l._targets, a) &&
            (c
              ? (!Wn || (l._initted && l._ts)) && l.globalTime(0) <= s && l.globalTime(l.totalDuration()) > s
              : !s || l.isActive()) &&
            o.push(l)
          : (u = l.getTweensOf(a, s)).length && o.push.apply(o, u),
          (l = l._next);
      return o;
    }),
    (t.tweenTo = function (i, s) {
      s = s || {};
      var o = this,
        a = jt(o, i),
        l = s,
        c = l.startAt,
        u = l.onStart,
        h = l.onStartParams,
        f = l.immediateRender,
        m,
        g = ct.to(
          o,
          en(
            {
              ease: s.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration: s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale()) || $e,
              onStart: function () {
                if ((o.pause(), !m)) {
                  var d = s.duration || Math.abs((a - (c && "time" in c ? c.time : o._time)) / o.timeScale());
                  g._dur !== d && ur(g, d, 0, 1).render(g._time, !0, !0), (m = 1);
                }
                u && u.apply(g, h || []);
              },
            },
            s
          )
        );
      return f ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (i, s, o) {
      return this.tweenTo(s, en({ startAt: { time: jt(this, i) } }, o));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (i) {
      return i === void 0 && (i = this._time), ac(this, jt(this, i));
    }),
    (t.previousLabel = function (i) {
      return i === void 0 && (i = this._time), ac(this, jt(this, i), 1);
    }),
    (t.currentLabel = function (i) {
      return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + $e);
    }),
    (t.shiftChildren = function (i, s, o) {
      o === void 0 && (o = 0);
      for (var a = this._first, l = this.labels, c; a; )
        a._start >= o && ((a._start += i), (a._end += i)), (a = a._next);
      if (s) for (c in l) l[c] >= o && (l[c] += i);
      return yi(this);
    }),
    (t.invalidate = function (i) {
      var s = this._first;
      for (this._lock = 0; s; ) s.invalidate(i), (s = s._next);
      return r.prototype.invalidate.call(this, i);
    }),
    (t.clear = function (i) {
      i === void 0 && (i = !0);
      for (var s = this._first, o; s; ) (o = s._next), this.remove(s), (s = o);
      return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), yi(this);
    }),
    (t.totalDuration = function (i) {
      var s = 0,
        o = this,
        a = o._last,
        l = Jt,
        c,
        u,
        h;
      if (arguments.length)
        return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
      if (o._dirty) {
        for (h = o.parent; a; )
          (c = a._prev),
            a._dirty && a.totalDuration(),
            (u = a._start),
            u > l && o._sort && a._ts && !o._lock ? ((o._lock = 1), (pn(o, a, u - a._delay, 1)._lock = 0)) : (l = u),
            u < 0 &&
              a._ts &&
              ((s -= u),
              ((!h && !o._dp) || (h && h.smoothChildTiming)) &&
                ((o._start += u / o._ts), (o._time -= u), (o._tTime -= u)),
              o.shiftChildren(-u, !1, -1 / 0),
              (l = 0)),
            a._end > s && a._ts && (s = a._end),
            (a = c);
        ur(o, o === tt && o._time > s ? o._time : s, 1, 1), (o._dirty = 0);
      }
      return o._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((tt._ts && (cu(tt, ws(i, tt)), (ou = kt.frame)), kt.frame >= nc)) {
        nc += qt.autoSleep || 120;
        var s = tt._first;
        if ((!s || !s._ts) && qt.autoSleep && kt._listeners.length < 2) {
          for (; s && !s._ts; ) s = s._next;
          s || kt.sleep();
        }
      }
    }),
    e
  );
})(Ir);
en(Ct.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var r0 = function (e, t, n, i, s, o, a) {
    var l = new Ot(this._pt, e, t, 0, 1, Fu, null, s),
      c = 0,
      u = 0,
      h,
      f,
      m,
      g,
      _,
      d,
      p,
      S;
    for (
      l.b = n,
        l.e = i,
        n += "",
        i += "",
        (p = ~i.indexOf("random(")) && (i = Dr(i)),
        o && ((S = [n, i]), o(S, e, t), (n = S[0]), (i = S[1])),
        f = n.match(Sa) || [];
      (h = Sa.exec(i));

    )
      (g = h[0]),
        (_ = i.substring(c, h.index)),
        m ? (m = (m + 1) % 5) : _.substr(-5) === "rgba(" && (m = 1),
        g !== f[u++] &&
          ((d = parseFloat(f[u - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: _ || u === 1 ? _ : ",",
            s: d,
            c: g.charAt(1) === "=" ? tr(d, g) - d : parseFloat(g) - d,
            m: m && m < 4 ? Math.round : 0,
          }),
          (c = Sa.lastIndex));
    return (
      (l.c = c < i.length ? i.substring(c, i.length) : ""),
      (l.fp = a),
      (nu.test(i) || p) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  go = function (e, t, n, i, s, o, a, l, c, u) {
    it(i) && (i = i(s || 0, e, o));
    var h = e[t],
      f =
        n !== "get"
          ? n
          : it(h)
          ? c
            ? e[t.indexOf("set") || !it(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](c)
            : e[t]()
          : h,
      m = it(h) ? (c ? c0 : Nu) : xo,
      g;
    if (
      (_t(i) &&
        (~i.indexOf("random(") && (i = Dr(i)),
        i.charAt(1) === "=" && ((g = tr(f, i) + (Tt(f) || 0)), (g || g === 0) && (i = g))),
      !u || f !== i || $a)
    )
      return !isNaN(f * i) && i !== ""
        ? ((g = new Ot(this._pt, e, t, +f || 0, i - (f || 0), typeof h == "boolean" ? h0 : Ou, 0, m)),
          c && (g.fp = c),
          a && g.modifier(a, this, e),
          (this._pt = g))
        : (!h && !(t in e) && fo(t, i), r0.call(this, e, t, f, i, m, l || qt.stringFilter, c));
  },
  s0 = function (e, t, n, i, s) {
    if ((it(e) && (e = wr(e, s, t, n, i)), !xn(e) || (e.style && e.nodeType) || At(e) || eu(e)))
      return _t(e) ? wr(e, s, t, n, i) : e;
    var o = {},
      a;
    for (a in e) o[a] = wr(e[a], s, t, n, i);
    return o;
  },
  Du = function (e, t, n, i, s, o) {
    var a, l, c, u;
    if (
      Vt[e] &&
      (a = new Vt[e]()).init(s, a.rawVars ? t[e] : s0(t[e], i, s, o, n), n, i, o) !== !1 &&
      ((n._pt = l = new Ot(n._pt, s, e, 0, 1, a.render, a, 0, a.priority)), n !== Ji)
    )
      for (c = n._ptLookup[n._targets.indexOf(s)], u = a._props.length; u--; ) c[a._props[u]] = l;
    return a;
  },
  Wn,
  $a,
  vo = function r(e, t, n) {
    var i = e.vars,
      s = i.ease,
      o = i.startAt,
      a = i.immediateRender,
      l = i.lazy,
      c = i.onUpdate,
      u = i.runBackwards,
      h = i.yoyoEase,
      f = i.keyframes,
      m = i.autoRevert,
      g = e._dur,
      _ = e._startAt,
      d = e._targets,
      p = e.parent,
      S = p && p.data === "nested" ? p.vars.targets : d,
      v = e._overwrite === "auto" && !lo,
      E = e.timeline,
      b,
      A,
      y,
      P,
      D,
      x,
      w,
      Y,
      q,
      C,
      k,
      F,
      X;
    if (
      (E && (!f || !s) && (s = "none"),
      (e._ease = Ai(s, lr.ease)),
      (e._yEase = h ? Ru(Ai(h === !0 ? s : h, lr.ease)) : 0),
      h && e._yoyo && !e._repeat && ((h = e._yEase), (e._yEase = e._ease), (e._ease = h)),
      (e._from = !E && !!i.runBackwards),
      !E || (f && !i.stagger))
    ) {
      if (
        ((Y = d[0] ? Ti(d[0]).harness : 0),
        (F = Y && i[Y.prop]),
        (b = bs(i, po)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          t < 0 && u && a && !m ? _.render(-1, !0) : _.revert(u && g ? _s : Ug),
          (_._lazy = 0)),
        o)
      ) {
        if (
          (Qn(
            (e._startAt = ct.set(
              d,
              en(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: p,
                  immediateRender: !0,
                  lazy: !_ && It(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return Wt(e, "onUpdate");
                    },
                  stagger: 0,
                },
                o
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (yt || (!a && !m)) && e._startAt.revert(_s),
          a && g && t <= 0 && n <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (u && g && !_) {
        if (
          (t && (a = !1),
          (y = en(
            { overwrite: !1, data: "isFromStart", lazy: a && !_ && It(l), immediateRender: a, stagger: 0, parent: p },
            b
          )),
          F && (y[Y.prop] = F),
          Qn((e._startAt = ct.set(d, y))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (yt ? e._startAt.revert(_s) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !a)
        )
          r(e._startAt, $e, $e);
        else if (!t) return;
      }
      for (e._pt = e._ptCache = 0, l = (g && It(l)) || (l && !g), A = 0; A < d.length; A++) {
        if (
          ((D = d[A]),
          (w = D._gsap || _o(d)[A]._gsap),
          (e._ptLookup[A] = C = {}),
          ka[w.id] && Zn.length && As(),
          (k = S === d ? A : S.indexOf(D)),
          Y &&
            (q = new Y()).init(D, F || b, e, k, S) !== !1 &&
            ((e._pt = P = new Ot(e._pt, D, q.name, 0, 1, q.render, q, 0, q.priority)),
            q._props.forEach(function (V) {
              C[V] = P;
            }),
            q.priority && (x = 1)),
          !Y || F)
        )
          for (y in b)
            Vt[y] && (q = Du(y, b, e, k, D, S))
              ? q.priority && (x = 1)
              : (C[y] = P = go.call(e, D, y, "get", b[y], k, S, 0, i.stringFilter));
        e._op && e._op[A] && e.kill(D, e._op[A]),
          v && e._pt && ((Wn = e), tt.killTweensOf(D, C, e.globalTime(t)), (X = !e.parent), (Wn = 0)),
          e._pt && l && (ka[w.id] = 1);
      }
      x && Bu(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = c), (e._initted = (!e._op || e._pt) && !X), f && t <= 0 && E.render(Jt, !0, !0);
  },
  a0 = function (e, t, n, i, s, o, a, l) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      u,
      h,
      f,
      m;
    if (!c)
      for (c = e._ptCache[t] = [], f = e._ptLookup, m = e._targets.length; m--; ) {
        if (((u = f[m][t]), u && u.d && u.d._pt)) for (u = u.d._pt; u && u.p !== t && u.fp !== t; ) u = u._next;
        if (!u) return ($a = 1), (e.vars[t] = "+=0"), vo(e, a), ($a = 0), l ? Pr(t + " not eligible for reset") : 1;
        c.push(u);
      }
    for (m = c.length; m--; )
      (h = c[m]),
        (u = h._pt || h),
        (u.s = (i || i === 0) && !s ? i : u.s + (i || 0) + o * u.c),
        (u.c = n - u.s),
        h.e && (h.e = at(n) + Tt(h.e)),
        h.b && (h.b = u.s + Tt(h.b));
  },
  o0 = function (e, t) {
    var n = e[0] ? Ti(e[0]).harness : 0,
      i = n && n.aliases,
      s,
      o,
      a,
      l;
    if (!i) return t;
    s = Ri({}, t);
    for (o in i) if (o in s) for (l = i[o].split(","), a = l.length; a--; ) s[l[a]] = s[o];
    return s;
  },
  l0 = function (e, t, n, i) {
    var s = t.ease || i || "power1.inOut",
      o,
      a;
    if (At(t))
      (a = n[e] || (n[e] = [])),
        t.forEach(function (l, c) {
          return a.push({ t: (c / (t.length - 1)) * 100, v: l, e: s });
        });
    else for (o in t) (a = n[o] || (n[o] = [])), o === "ease" || a.push({ t: parseFloat(e), v: t[o], e: s });
  },
  wr = function (e, t, n, i, s) {
    return it(e) ? e.call(t, n, i, s) : _t(e) && ~e.indexOf("random(") ? Dr(e) : e;
  },
  Uu = mo + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  Iu = {};
Nt(Uu + ",id,stagger,delay,duration,paused,scrollTrigger", function (r) {
  return (Iu[r] = 1);
});
var ct = (function (r) {
  Jc(e, r);
  function e(n, i, s, o) {
    var a;
    typeof i == "number" && ((s.duration = i), (i = s), (s = null)), (a = r.call(this, o ? i : Ar(i)) || this);
    var l = a.vars,
      c = l.duration,
      u = l.delay,
      h = l.immediateRender,
      f = l.stagger,
      m = l.overwrite,
      g = l.keyframes,
      _ = l.defaults,
      d = l.scrollTrigger,
      p = l.yoyoEase,
      S = i.parent || tt,
      v = (At(n) || eu(n) ? In(n[0]) : "length" in i) ? [n] : Qt(n),
      E,
      b,
      A,
      y,
      P,
      D,
      x,
      w;
    if (
      ((a._targets = v.length
        ? _o(v)
        : Pr("GSAP target " + n + " not found. https://gsap.com", !qt.nullTargetWarn) || []),
      (a._ptLookup = []),
      (a._overwrite = m),
      g || f || ds(c) || ds(u))
    ) {
      if (
        ((i = a.vars),
        (E = a.timeline =
          new Ct({ data: "nested", defaults: _ || {}, targets: S && S.data === "nested" ? S.vars.targets : v })),
        E.kill(),
        (E.parent = E._dp = wn(a)),
        (E._start = 0),
        f || ds(c) || ds(u))
      ) {
        if (((y = v.length), (x = f && vu(f)), xn(f))) for (P in f) ~Uu.indexOf(P) && (w || (w = {}), (w[P] = f[P]));
        for (b = 0; b < y; b++)
          (A = bs(i, Iu)),
            (A.stagger = 0),
            p && (A.yoyoEase = p),
            w && Ri(A, w),
            (D = v[b]),
            (A.duration = +wr(c, wn(a), b, D, v)),
            (A.delay = (+wr(u, wn(a), b, D, v) || 0) - a._delay),
            !f && y === 1 && A.delay && ((a._delay = u = A.delay), (a._start += u), (A.delay = 0)),
            E.to(D, A, x ? x(b, D, v) : 0),
            (E._ease = Ge.none);
        E.duration() ? (c = u = 0) : (a.timeline = 0);
      } else if (g) {
        Ar(en(E.vars.defaults, { ease: "none" })), (E._ease = Ai(g.ease || i.ease || "none"));
        var Y = 0,
          q,
          C,
          k;
        if (At(g))
          g.forEach(function (F) {
            return E.to(v, F, ">");
          }),
            E.duration();
        else {
          A = {};
          for (P in g) P === "ease" || P === "easeEach" || l0(P, g[P], A, g.easeEach);
          for (P in A)
            for (
              q = A[P].sort(function (F, X) {
                return F.t - X.t;
              }),
                Y = 0,
                b = 0;
              b < q.length;
              b++
            )
              (C = q[b]),
                (k = { ease: C.e, duration: ((C.t - (b ? q[b - 1].t : 0)) / 100) * c }),
                (k[P] = C.v),
                E.to(v, k, Y),
                (Y += k.duration);
          E.duration() < c && E.to({}, { duration: c - E.duration() });
        }
      }
      c || a.duration((c = E.duration()));
    } else a.timeline = 0;
    return (
      m === !0 && !lo && ((Wn = wn(a)), tt.killTweensOf(v), (Wn = 0)),
      pn(S, wn(a), s),
      i.reversed && a.reverse(),
      i.paused && a.paused(!0),
      (h || (!c && !g && a._start === mt(S._time) && It(h) && zg(wn(a)) && S.data !== "nested")) &&
        ((a._tTime = -$e), a.render(Math.max(0, -u) || 0)),
      d && pu(wn(a), d),
      a
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (i, s, o) {
      var a = this._time,
        l = this._tDur,
        c = this._dur,
        u = i < 0,
        h = i > l - $e && !u ? l : i < $e ? 0 : i,
        f,
        m,
        g,
        _,
        d,
        p,
        S,
        v,
        E;
      if (!c) Hg(this, i, s, o);
      else if (
        h !== this._tTime ||
        !i ||
        o ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== u)
      ) {
        if (((f = h), (v = this.timeline), this._repeat)) {
          if (((_ = c + this._rDelay), this._repeat < -1 && u)) return this.totalTime(_ * 100 + i, s, o);
          if (
            ((f = mt(h % _)),
            h === l
              ? ((g = this._repeat), (f = c))
              : ((g = ~~(h / _)), g && g === mt(h / _) && ((f = c), g--), f > c && (f = c)),
            (p = this._yoyo && g & 1),
            p && ((E = this._yEase), (f = c - f)),
            (d = cr(this._tTime, _)),
            f === a && !o && this._initted && g === d)
          )
            return (this._tTime = h), this;
          g !== d &&
            (v && this._yEase && Cu(v, p),
            this.vars.repeatRefresh &&
              !p &&
              !this._lock &&
              this._time !== _ &&
              this._initted &&
              ((this._lock = o = 1), (this.render(mt(_ * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (mu(this, u ? i : f, o, s, h)) return (this._tTime = 0), this;
          if (a !== this._time && !(o && this.vars.repeatRefresh && g !== d)) return this;
          if (c !== this._dur) return this.render(i, s, o);
        }
        if (
          ((this._tTime = h),
          (this._time = f),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = S = (E || this._ease)(f / c)),
          this._from && (this.ratio = S = 1 - S),
          f && !a && !s && !g && (Wt(this, "onStart"), this._tTime !== h))
        )
          return this;
        for (m = this._pt; m; ) m.r(S, m.d), (m = m._next);
        (v && v.render(i < 0 ? i : v._dur * v._ease(f / this._dur), s, o)) || (this._startAt && (this._zTime = i)),
          this._onUpdate && !s && (u && Wa(this, i, s, o), Wt(this, "onUpdate")),
          this._repeat && g !== d && this.vars.onRepeat && !s && this.parent && Wt(this, "onRepeat"),
          (h === this._tDur || !h) &&
            this._tTime === h &&
            (u && !this._onUpdate && Wa(this, i, !0, !0),
            (i || !c) && ((h === this._tDur && this._ts > 0) || (!h && this._ts < 0)) && Qn(this, 1),
            !s &&
              !(u && !a) &&
              (h || a || p) &&
              (Wt(this, h === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(h < l && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        r.prototype.invalidate.call(this, i)
      );
    }),
    (t.resetTo = function (i, s, o, a, l) {
      Ur || kt.wake(), this._ts || this.play();
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        u;
      return (
        this._initted || vo(this, c),
        (u = this._ease(c / this._dur)),
        a0(this, i, s, o, a, u, c, l)
          ? this.resetTo(i, s, o, a, 1)
          : (Fs(this, 0),
            this.parent || fu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
            this.render(0))
      );
    }),
    (t.kill = function (i, s) {
      if ((s === void 0 && (s = "all"), !i && (!s || s === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Tr(this) : this;
      if (this.timeline) {
        var o = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, s, Wn && Wn.vars.overwrite !== !0)._first || Tr(this),
          this.parent && o !== this.timeline.totalDuration() && ur(this, (this._dur * this.timeline._tDur) / o, 0, 1),
          this
        );
      }
      var a = this._targets,
        l = i ? Qt(i) : a,
        c = this._ptLookup,
        u = this._pt,
        h,
        f,
        m,
        g,
        _,
        d,
        p;
      if ((!s || s === "all") && Fg(a, l)) return s === "all" && (this._pt = 0), Tr(this);
      for (
        h = this._op = this._op || [],
          s !== "all" &&
            (_t(s) &&
              ((_ = {}),
              Nt(s, function (S) {
                return (_[S] = 1);
              }),
              (s = _)),
            (s = o0(a, s))),
          p = a.length;
        p--;

      )
        if (~l.indexOf(a[p])) {
          (f = c[p]), s === "all" ? ((h[p] = s), (g = f), (m = {})) : ((m = h[p] = h[p] || {}), (g = s));
          for (_ in g)
            (d = f && f[_]),
              d && ((!("kill" in d.d) || d.d.kill(_) === !0) && Ns(this, d, "_pt"), delete f[_]),
              m !== "all" && (m[_] = 1);
        }
      return this._initted && !this._pt && u && Tr(this), this;
    }),
    (e.to = function (i, s) {
      return new e(i, s, arguments[2]);
    }),
    (e.from = function (i, s) {
      return br(1, arguments);
    }),
    (e.delayedCall = function (i, s, o, a) {
      return new e(s, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: s,
        onReverseComplete: s,
        onCompleteParams: o,
        onReverseCompleteParams: o,
        callbackScope: a,
      });
    }),
    (e.fromTo = function (i, s, o) {
      return br(2, arguments);
    }),
    (e.set = function (i, s) {
      return (s.duration = 0), s.repeatDelay || (s.repeat = 0), new e(i, s);
    }),
    (e.killTweensOf = function (i, s, o) {
      return tt.killTweensOf(i, s, o);
    }),
    e
  );
})(Ir);
en(ct.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Nt("staggerTo,staggerFrom,staggerFromTo", function (r) {
  ct[r] = function () {
    var e = new Ct(),
      t = qa.call(arguments, 0);
    return t.splice(r === "staggerFromTo" ? 5 : 4, 0, 0), e[r].apply(e, t);
  };
});
var xo = function (e, t, n) {
    return (e[t] = n);
  },
  Nu = function (e, t, n) {
    return e[t](n);
  },
  c0 = function (e, t, n, i) {
    return e[t](i.fp, n);
  },
  u0 = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Mo = function (e, t) {
    return it(e[t]) ? Nu : co(e[t]) && e.setAttribute ? u0 : xo;
  },
  Ou = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  h0 = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  Fu = function (e, t) {
    var n = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n; ) (i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + i), (n = n._next);
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  },
  So = function (e, t) {
    for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
  },
  f0 = function (e, t, n, i) {
    for (var s = this._pt, o; s; ) (o = s._next), s.p === i && s.modifier(e, t, n), (s = o);
  },
  d0 = function (e) {
    for (var t = this._pt, n, i; t; )
      (i = t._next), (t.p === e && !t.op) || t.op === e ? Ns(this, t, "_pt") : t.dep || (n = 1), (t = i);
    return !n;
  },
  p0 = function (e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
  },
  Bu = function (e) {
    for (var t = e._pt, n, i, s, o; t; ) {
      for (n = t._next, i = s; i && i.pr > t.pr; ) i = i._next;
      (t._prev = i ? i._prev : o) ? (t._prev._next = t) : (s = t), (t._next = i) ? (i._prev = t) : (o = t), (t = n);
    }
    e._pt = s;
  },
  Ot = (function () {
    function r(t, n, i, s, o, a, l, c, u) {
      (this.t = n),
        (this.s = s),
        (this.c = o),
        (this.p = i),
        (this.r = a || Ou),
        (this.d = l || this),
        (this.set = c || xo),
        (this.pr = u || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    var e = r.prototype;
    return (
      (e.modifier = function (n, i, s) {
        (this.mSet = this.mSet || this.set), (this.set = p0), (this.m = n), (this.mt = s), (this.tween = i);
      }),
      r
    );
  })();
Nt(
  mo +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (r) {
    return (po[r] = 1);
  }
);
Yt.TweenMax = Yt.TweenLite = ct;
Yt.TimelineLite = Yt.TimelineMax = Ct;
tt = new Ct({ sortChildren: !1, defaults: lr, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 });
qt.stringFilter = wu;
var bi = [],
  vs = {},
  m0 = [],
  lc = 0,
  _0 = 0,
  ba = function (e) {
    return (vs[e] || m0).map(function (t) {
      return t();
    });
  },
  Za = function () {
    var e = Date.now(),
      t = [];
    e - lc > 2 &&
      (ba("matchMediaInit"),
      bi.forEach(function (n) {
        var i = n.queries,
          s = n.conditions,
          o,
          a,
          l,
          c;
        for (a in i) (o = hn.matchMedia(i[a]).matches), o && (l = 1), o !== s[a] && ((s[a] = o), (c = 1));
        c && (n.revert(), l && t.push(n));
      }),
      ba("matchMediaRevert"),
      t.forEach(function (n) {
        return n.onMatch(n, function (i) {
          return n.add(null, i);
        });
      }),
      (lc = e),
      ba("matchMedia"));
  },
  zu = (function () {
    function r(t, n) {
      (this.selector = n && Ya(n)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = _0++),
        t && this.add(t);
    }
    var e = r.prototype;
    return (
      (e.add = function (n, i, s) {
        it(n) && ((s = i), (i = n), (n = it));
        var o = this,
          a = function () {
            var c = Qe,
              u = o.selector,
              h;
            return (
              c && c !== o && c.data.push(o),
              s && (o.selector = Ya(s)),
              (Qe = o),
              (h = i.apply(o, arguments)),
              it(h) && o._r.push(h),
              (Qe = c),
              (o.selector = u),
              (o.isReverted = !1),
              h
            );
          };
        return (
          (o.last = a),
          n === it
            ? a(o, function (l) {
                return o.add(null, l);
              })
            : n
            ? (o[n] = a)
            : a
        );
      }),
      (e.ignore = function (n) {
        var i = Qe;
        (Qe = null), n(this), (Qe = i);
      }),
      (e.getTweens = function () {
        var n = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof r
              ? n.push.apply(n, i.getTweens())
              : i instanceof ct && !(i.parent && i.parent.data === "nested") && n.push(i);
          }),
          n
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (n, i) {
        var s = this;
        if (
          (n
            ? (function () {
                for (var a = s.getTweens(), l = s.data.length, c; l--; )
                  (c = s.data[l]),
                    c.data === "isFlip" &&
                      (c.revert(),
                      c.getChildren(!0, !0, !1).forEach(function (u) {
                        return a.splice(a.indexOf(u), 1);
                      }));
                for (
                  a
                    .map(function (u) {
                      return {
                        g: u._dur || u._delay || (u._sat && !u._sat.vars.immediateRender) ? u.globalTime(0) : -1 / 0,
                        t: u,
                      };
                    })
                    .sort(function (u, h) {
                      return h.g - u.g || -1 / 0;
                    })
                    .forEach(function (u) {
                      return u.t.revert(n);
                    }),
                    l = s.data.length;
                  l--;

                )
                  (c = s.data[l]),
                    c instanceof Ct
                      ? c.data !== "nested" && (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof ct) && c.revert && c.revert(n);
                s._r.forEach(function (u) {
                  return u(n, s);
                }),
                  (s.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          i)
        )
          for (var o = bi.length; o--; ) bi[o].id === this.id && bi.splice(o, 1);
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      r
    );
  })(),
  g0 = (function () {
    function r(t) {
      (this.contexts = []), (this.scope = t), Qe && Qe.data.push(this);
    }
    var e = r.prototype;
    return (
      (e.add = function (n, i, s) {
        xn(n) || (n = { matches: n });
        var o = new zu(0, s || this.scope),
          a = (o.conditions = {}),
          l,
          c,
          u;
        Qe && !o.selector && (o.selector = Qe.selector),
          this.contexts.push(o),
          (i = o.add("onMatch", i)),
          (o.queries = n);
        for (c in n)
          c === "all"
            ? (u = 1)
            : ((l = hn.matchMedia(n[c])),
              l &&
                (bi.indexOf(o) < 0 && bi.push(o),
                (a[c] = l.matches) && (u = 1),
                l.addListener ? l.addListener(Za) : l.addEventListener("change", Za)));
        return (
          u &&
            i(o, function (h) {
              return o.add(null, h);
            }),
          this
        );
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      (e.kill = function (n) {
        this.contexts.forEach(function (i) {
          return i.kill(n, !0);
        });
      }),
      r
    );
  })(),
  Rs = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      t.forEach(function (i) {
        return yu(i);
      });
    },
    timeline: function (e) {
      return new Ct(e);
    },
    getTweensOf: function (e, t) {
      return tt.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, i) {
      _t(e) && (e = Qt(e)[0]);
      var s = Ti(e || {}).get,
        o = n ? hu : uu;
      return (
        n === "native" && (n = ""),
        e &&
          (t
            ? o(((Vt[t] && Vt[t].get) || s)(e, t, n, i))
            : function (a, l, c) {
                return o(((Vt[a] && Vt[a].get) || s)(e, a, l, c));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Qt(e)), e.length > 1)) {
        var i = e.map(function (u) {
            return Bt.quickSetter(u, t, n);
          }),
          s = i.length;
        return function (u) {
          for (var h = s; h--; ) i[h](u);
        };
      }
      e = e[0] || {};
      var o = Vt[t],
        a = Ti(e),
        l = (a.harness && (a.harness.aliases || {})[t]) || t,
        c = o
          ? function (u) {
              var h = new o();
              (Ji._pt = 0), h.init(e, n ? u + n : u, Ji, 0, [e]), h.render(1, h), Ji._pt && So(1, Ji);
            }
          : a.set(e, l);
      return o
        ? c
        : function (u) {
            return c(e, l, n ? u + n : u, a, 1);
          };
    },
    quickTo: function (e, t, n) {
      var i,
        s = Bt.to(e, Ri(((i = {}), (i[t] = "+=0.1"), (i.paused = !0), i), n || {})),
        o = function (l, c, u) {
          return s.resetTo(t, l, c, u);
        };
      return (o.tween = s), o;
    },
    isTweening: function (e) {
      return tt.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Ai(e.ease, lr.ease)), ic(lr, e || {});
    },
    config: function (e) {
      return ic(qt, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        i = e.plugins,
        s = e.defaults,
        o = e.extendTimeline;
      (i || "").split(",").forEach(function (a) {
        return a && !Vt[a] && !Yt[a] && Pr(t + " effect requires " + a + " plugin.");
      }),
        (Ea[t] = function (a, l, c) {
          return n(Qt(a), en(l || {}, s), c);
        }),
        o &&
          (Ct.prototype[t] = function (a, l, c) {
            return this.add(Ea[t](a, xn(l) ? l : (c = l) && {}, this), c);
          });
    },
    registerEase: function (e, t) {
      Ge[e] = Ai(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Ai(e, t) : Ge;
    },
    getById: function (e) {
      return tt.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new Ct(e),
        i,
        s;
      for (
        n.smoothChildTiming = It(e.smoothChildTiming),
          tt.remove(n),
          n._dp = 0,
          n._time = n._tTime = tt._time,
          i = tt._first;
        i;

      )
        (s = i._next),
          (t || !(!i._dur && i instanceof ct && i.vars.onComplete === i._targets[0])) && pn(n, i, i._start - i._delay),
          (i = s);
      return pn(tt, n, 0), n;
    },
    context: function (e, t) {
      return e ? new zu(e, t) : Qe;
    },
    matchMedia: function (e) {
      return new g0(e);
    },
    matchMediaRefresh: function () {
      return (
        bi.forEach(function (e) {
          var t = e.conditions,
            n,
            i;
          for (i in t) t[i] && ((t[i] = !1), (n = 1));
          n && e.revert();
        }) || Za()
      );
    },
    addEventListener: function (e, t) {
      var n = vs[e] || (vs[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = vs[e],
        i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    },
    utils: {
      wrap: $g,
      wrapYoyo: Zg,
      distribute: vu,
      random: Mu,
      snap: xu,
      normalize: Kg,
      getUnit: Tt,
      clamp: Wg,
      splitColor: Au,
      toArray: Qt,
      selector: Ya,
      mapRange: Eu,
      pipe: qg,
      unitize: Yg,
      interpolate: jg,
      shuffle: gu,
    },
    install: su,
    effects: Ea,
    ticker: kt,
    updateRoot: Ct.updateRoot,
    plugins: Vt,
    globalTimeline: tt,
    core: {
      PropTween: Ot,
      globals: au,
      Tween: ct,
      Timeline: Ct,
      Animation: Ir,
      getCache: Ti,
      _removeLinkedListItem: Ns,
      reverting: function () {
        return yt;
      },
      context: function (e) {
        return e && Qe && (Qe.data.push(e), (e._ctx = Qe)), Qe;
      },
      suppressOverwrites: function (e) {
        return (lo = e);
      },
    },
  };
Nt("to,from,fromTo,delayedCall,set,killTweensOf", function (r) {
  return (Rs[r] = ct[r]);
});
kt.add(Ct.updateRoot);
Ji = Rs.to({}, { duration: 0 });
var v0 = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t; ) n = n._next;
    return n;
  },
  x0 = function (e, t) {
    var n = e._targets,
      i,
      s,
      o;
    for (i in t)
      for (s = n.length; s--; )
        (o = e._ptLookup[s][i]),
          o && (o = o.d) && (o._pt && (o = v0(o, i)), o && o.modifier && o.modifier(t[i], e, n[s], i));
  },
  wa = function (e, t) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, s, o) {
        o._onInit = function (a) {
          var l, c;
          if (
            (_t(s) &&
              ((l = {}),
              Nt(s, function (u) {
                return (l[u] = 1);
              }),
              (s = l)),
            t)
          ) {
            l = {};
            for (c in s) l[c] = t(s[c]);
            s = l;
          }
          x0(a, s);
        };
      },
    };
  },
  Bt =
    Rs.registerPlugin(
      {
        name: "attr",
        init: function (e, t, n, i, s) {
          var o, a, l;
          this.tween = n;
          for (o in t)
            (l = e.getAttribute(o) || ""),
              (a = this.add(e, "setAttribute", (l || 0) + "", t[o], i, s, 0, 0, o)),
              (a.op = o),
              (a.b = l),
              this._props.push(o);
        },
        render: function (e, t) {
          for (var n = t._pt; n; ) yt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next);
        },
      },
      {
        name: "endArray",
        init: function (e, t) {
          for (var n = t.length; n--; ) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      wa("roundProps", Ka),
      wa("modifiers"),
      wa("snap", xu)
    ) || Rs;
ct.version = Ct.version = Bt.version = "3.12.5";
ru = 1;
uo() && hr();
Ge.Power0;
Ge.Power1;
Ge.Power2;
Ge.Power3;
Ge.Power4;
Ge.Linear;
Ge.Quad;
Ge.Cubic;
Ge.Quart;
Ge.Quint;
Ge.Strong;
Ge.Elastic;
Ge.Back;
Ge.SteppedEase;
Ge.Bounce;
Ge.Sine;
Ge.Expo;
Ge.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var cc,
  Xn,
  nr,
  Eo,
  xi,
  uc,
  To,
  M0 = function () {
    return typeof window < "u";
  },
  Nn = {},
  mi = 180 / Math.PI,
  ir = Math.PI / 180,
  Ki = Math.atan2,
  hc = 1e8,
  yo = /([A-Z])/g,
  S0 = /(left|right|width|margin|padding|x)/i,
  E0 = /[\s,\(]\S/,
  _n = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
  ja = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  T0 = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  y0 = function (e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
  },
  A0 = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  Gu = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  Hu = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  b0 = function (e, t, n) {
    return (e.style[t] = n);
  },
  w0 = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  R0 = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  C0 = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  P0 = function (e, t, n, i, s) {
    var o = e._gsap;
    (o.scaleX = o.scaleY = n), o.renderTransform(s, o);
  },
  L0 = function (e, t, n, i, s) {
    var o = e._gsap;
    (o[t] = n), o.renderTransform(s, o);
  },
  nt = "transform",
  Ft = nt + "Origin",
  D0 = function r(e, t) {
    var n = this,
      i = this.target,
      s = i.style,
      o = i._gsap;
    if (e in Nn && s) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = _n[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (a) {
                return (n.tfm[a] = Rn(i, a));
              })
            : (this.tfm[e] = o.x ? o[e] : Rn(i, e)),
          e === Ft && (this.tfm.zOrigin = o.zOrigin);
      else
        return _n.transform.split(",").forEach(function (a) {
          return r.call(n, a, t);
        });
      if (this.props.indexOf(nt) >= 0) return;
      o.svg && ((this.svgo = i.getAttribute("data-svg-origin")), this.props.push(Ft, t, "")), (e = nt);
    }
    (s || t) && this.props.push(e, t, s[e]);
  },
  Vu = function (e) {
    e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
  },
  U0 = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      i = t._gsap,
      s,
      o;
    for (s = 0; s < e.length; s += 3)
      e[s + 1]
        ? (t[e[s]] = e[s + 2])
        : e[s + 2]
        ? (n[e[s]] = e[s + 2])
        : n.removeProperty(e[s].substr(0, 2) === "--" ? e[s] : e[s].replace(yo, "-$1").toLowerCase());
    if (this.tfm) {
      for (o in this.tfm) i[o] = this.tfm[o];
      i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")),
        (s = To()),
        (!s || !s.isStart) &&
          !n[nt] &&
          (Vu(n),
          i.zOrigin && n[Ft] && ((n[Ft] += " " + i.zOrigin + "px"), (i.zOrigin = 0), i.renderTransform()),
          (i.uncache = 1));
    }
  },
  ku = function (e, t) {
    var n = { target: e, props: [], revert: U0, save: D0 };
    return (
      e._gsap || Bt.core.getCache(e),
      t &&
        t.split(",").forEach(function (i) {
          return n.save(i);
        }),
      n
    );
  },
  Wu,
  Ja = function (e, t) {
    var n = Xn.createElementNS
      ? Xn.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e)
      : Xn.createElement(e);
    return n && n.style ? n : Xn.createElement(e);
  },
  vn = function r(e, t, n) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(yo, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!n && r(e, fr(t) || t, 1)) ||
      ""
    );
  },
  fc = "O,Moz,ms,Ms,Webkit".split(","),
  fr = function (e, t, n) {
    var i = t || xi,
      s = i.style,
      o = 5;
    if (e in s && !n) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(fc[o] + e in s); );
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? fc[o] : "") + e;
  },
  Qa = function () {
    M0() &&
      window.document &&
      ((cc = window),
      (Xn = cc.document),
      (nr = Xn.documentElement),
      (xi = Ja("div") || { style: {} }),
      Ja("div"),
      (nt = fr(nt)),
      (Ft = nt + "Origin"),
      (xi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
      (Wu = !!fr("perspective")),
      (To = Bt.core.reverting),
      (Eo = 1));
  },
  Ra = function r(e) {
    var t = Ja(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      n = this.parentNode,
      i = this.nextSibling,
      s = this.style.cssText,
      o;
    if ((nr.appendChild(t), t.appendChild(this), (this.style.display = "block"), e))
      try {
        (o = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = r);
      } catch {}
    else this._gsapBBox && (o = this._gsapBBox());
    return n && (i ? n.insertBefore(this, i) : n.appendChild(this)), nr.removeChild(t), (this.style.cssText = s), o;
  },
  dc = function (e, t) {
    for (var n = t.length; n--; ) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  Xu = function (e) {
    var t;
    try {
      t = e.getBBox();
    } catch {
      t = Ra.call(e, !0);
    }
    return (
      (t && (t.width || t.height)) || e.getBBox === Ra || (t = Ra.call(e, !0)),
      t && !t.width && !t.x && !t.y
        ? { x: +dc(e, ["x", "cx", "x1"]) || 0, y: +dc(e, ["y", "cy", "y1"]) || 0, width: 0, height: 0 }
        : t
    );
  },
  qu = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Xu(e));
  },
  Ci = function (e, t) {
    if (t) {
      var n = e.style,
        i;
      t in Nn && t !== Ft && (t = nt),
        n.removeProperty
          ? ((i = t.substr(0, 2)),
            (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            n.removeProperty(i === "--" ? t : t.replace(yo, "-$1").toLowerCase()))
          : n.removeAttribute(t);
    }
  },
  qn = function (e, t, n, i, s, o) {
    var a = new Ot(e._pt, t, n, 0, 1, o ? Hu : Gu);
    return (e._pt = a), (a.b = i), (a.e = s), e._props.push(n), a;
  },
  pc = { deg: 1, rad: 1, turn: 1 },
  I0 = { grid: 1, flex: 1 },
  ei = function r(e, t, n, i) {
    var s = parseFloat(n) || 0,
      o = (n + "").trim().substr((s + "").length) || "px",
      a = xi.style,
      l = S0.test(t),
      c = e.tagName.toLowerCase() === "svg",
      u = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      h = 100,
      f = i === "px",
      m = i === "%",
      g,
      _,
      d,
      p;
    if (i === o || !s || pc[i] || pc[o]) return s;
    if (
      (o !== "px" && !f && (s = r(e, t, n, "px")),
      (p = e.getCTM && qu(e)),
      (m || o === "%") && (Nn[t] || ~t.indexOf("adius")))
    )
      return (g = p ? e.getBBox()[l ? "width" : "height"] : e[u]), at(m ? (s / g) * h : (s / 100) * g);
    if (
      ((a[l ? "width" : "height"] = h + (f ? o : i)),
      (_ = ~t.indexOf("adius") || (i === "em" && e.appendChild && !c) ? e : e.parentNode),
      p && (_ = (e.ownerSVGElement || {}).parentNode),
      (!_ || _ === Xn || !_.appendChild) && (_ = Xn.body),
      (d = _._gsap),
      d && m && d.width && l && d.time === kt.time && !d.uncache)
    )
      return at((s / d.width) * h);
    if (m && (t === "height" || t === "width")) {
      var S = e.style[t];
      (e.style[t] = h + i), (g = e[u]), S ? (e.style[t] = S) : Ci(e, t);
    } else
      (m || o === "%") && !I0[vn(_, "display")] && (a.position = vn(e, "position")),
        _ === e && (a.position = "static"),
        _.appendChild(xi),
        (g = xi[u]),
        _.removeChild(xi),
        (a.position = "absolute");
    return (
      l && m && ((d = Ti(_)), (d.time = kt.time), (d.width = _[u])), at(f ? (g * s) / h : g && s ? (h / g) * s : 0)
    );
  },
  Rn = function (e, t, n, i) {
    var s;
    return (
      Eo || Qa(),
      t in _n && t !== "transform" && ((t = _n[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      Nn[t] && t !== "transform"
        ? ((s = Or(e, i)),
          (s = t !== "transformOrigin" ? s[t] : s.svg ? s.origin : Ps(vn(e, Ft)) + " " + s.zOrigin + "px"))
        : ((s = e.style[t]),
          (!s || s === "auto" || i || ~(s + "").indexOf("calc(")) &&
            (s = (Cs[t] && Cs[t](e, t, n)) || vn(e, t) || lu(e, t) || (t === "opacity" ? 1 : 0))),
      n && !~(s + "").trim().indexOf(" ") ? ei(e, t, s, n) + n : s
    );
  },
  N0 = function (e, t, n, i) {
    if (!n || n === "none") {
      var s = fr(t, e, 1),
        o = s && vn(e, s, 1);
      o && o !== n ? ((t = s), (n = o)) : t === "borderColor" && (n = vn(e, "borderTopColor"));
    }
    var a = new Ot(this._pt, e.style, t, 0, 1, Fu),
      l = 0,
      c = 0,
      u,
      h,
      f,
      m,
      g,
      _,
      d,
      p,
      S,
      v,
      E,
      b;
    if (
      ((a.b = n),
      (a.e = i),
      (n += ""),
      (i += ""),
      i === "auto" && ((_ = e.style[t]), (e.style[t] = i), (i = vn(e, t) || i), _ ? (e.style[t] = _) : Ci(e, t)),
      (u = [n, i]),
      wu(u),
      (n = u[0]),
      (i = u[1]),
      (f = n.match(ji) || []),
      (b = i.match(ji) || []),
      b.length)
    ) {
      for (; (h = ji.exec(i)); )
        (d = h[0]),
          (S = i.substring(l, h.index)),
          g ? (g = (g + 1) % 5) : (S.substr(-5) === "rgba(" || S.substr(-5) === "hsla(") && (g = 1),
          d !== (_ = f[c++] || "") &&
            ((m = parseFloat(_) || 0),
            (E = _.substr((m + "").length)),
            d.charAt(1) === "=" && (d = tr(m, d) + E),
            (p = parseFloat(d)),
            (v = d.substr((p + "").length)),
            (l = ji.lastIndex - v.length),
            v || ((v = v || qt.units[t] || E), l === i.length && ((i += v), (a.e += v))),
            E !== v && (m = ei(e, t, _, v) || 0),
            (a._pt = {
              _next: a._pt,
              p: S || c === 1 ? S : ",",
              s: m,
              c: p - m,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            }));
      a.c = l < i.length ? i.substring(l, i.length) : "";
    } else a.r = t === "display" && i === "none" ? Hu : Gu;
    return nu.test(i) && (a.e = 0), (this._pt = a), a;
  },
  mc = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  O0 = function (e) {
    var t = e.split(" "),
      n = t[0],
      i = t[1] || "50%";
    return (
      (n === "top" || n === "bottom" || i === "left" || i === "right") && ((e = n), (n = i), (i = e)),
      (t[0] = mc[n] || n),
      (t[1] = mc[i] || i),
      t.join(" ")
    );
  },
  F0 = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        i = n.style,
        s = t.u,
        o = n._gsap,
        a,
        l,
        c;
      if (s === "all" || s === !0) (i.cssText = ""), (l = 1);
      else
        for (s = s.split(","), c = s.length; --c > -1; )
          (a = s[c]), Nn[a] && ((l = 1), (a = a === "transformOrigin" ? Ft : nt)), Ci(n, a);
      l && (Ci(n, nt), o && (o.svg && n.removeAttribute("transform"), Or(n, 1), (o.uncache = 1), Vu(i)));
    }
  },
  Cs = {
    clearProps: function (e, t, n, i, s) {
      if (s.data !== "isFromStart") {
        var o = (e._pt = new Ot(e._pt, t, n, 0, 0, F0));
        return (o.u = i), (o.pr = -10), (o.tween = s), e._props.push(n), 1;
      }
    },
  },
  Nr = [1, 0, 0, 1, 0, 0],
  Yu = {},
  Ku = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  _c = function (e) {
    var t = vn(e, nt);
    return Ku(t) ? Nr : t.substr(7).match(tu).map(at);
  },
  Ao = function (e, t) {
    var n = e._gsap || Ti(e),
      i = e.style,
      s = _c(e),
      o,
      a,
      l,
      c;
    return n.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (s = [l.a, l.b, l.c, l.d, l.e, l.f]),
        s.join(",") === "1,0,0,1,0,0" ? Nr : s)
      : (s === Nr &&
          !e.offsetParent &&
          e !== nr &&
          !n.svg &&
          ((l = i.display),
          (i.display = "block"),
          (o = e.parentNode),
          (!o || !e.offsetParent) && ((c = 1), (a = e.nextElementSibling), nr.appendChild(e)),
          (s = _c(e)),
          l ? (i.display = l) : Ci(e, "display"),
          c && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : nr.removeChild(e))),
        t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
  },
  eo = function (e, t, n, i, s, o) {
    var a = e._gsap,
      l = s || Ao(e, !0),
      c = a.xOrigin || 0,
      u = a.yOrigin || 0,
      h = a.xOffset || 0,
      f = a.yOffset || 0,
      m = l[0],
      g = l[1],
      _ = l[2],
      d = l[3],
      p = l[4],
      S = l[5],
      v = t.split(" "),
      E = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      A,
      y,
      P,
      D;
    n
      ? l !== Nr &&
        (y = m * d - g * _) &&
        ((P = E * (d / y) + b * (-_ / y) + (_ * S - d * p) / y),
        (D = E * (-g / y) + b * (m / y) - (m * S - g * p) / y),
        (E = P),
        (b = D))
      : ((A = Xu(e)),
        (E = A.x + (~v[0].indexOf("%") ? (E / 100) * A.width : E)),
        (b = A.y + (~(v[1] || v[0]).indexOf("%") ? (b / 100) * A.height : b))),
      i || (i !== !1 && a.smooth)
        ? ((p = E - c), (S = b - u), (a.xOffset = h + (p * m + S * _) - p), (a.yOffset = f + (p * g + S * d) - S))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = E),
      (a.yOrigin = b),
      (a.smooth = !!i),
      (a.origin = t),
      (a.originIsAbsolute = !!n),
      (e.style[Ft] = "0px 0px"),
      o &&
        (qn(o, a, "xOrigin", c, E),
        qn(o, a, "yOrigin", u, b),
        qn(o, a, "xOffset", h, a.xOffset),
        qn(o, a, "yOffset", f, a.yOffset)),
      e.setAttribute("data-svg-origin", E + " " + b);
  },
  Or = function (e, t) {
    var n = e._gsap || new Lu(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style,
      s = n.scaleX < 0,
      o = "px",
      a = "deg",
      l = getComputedStyle(e),
      c = vn(e, Ft) || "0",
      u,
      h,
      f,
      m,
      g,
      _,
      d,
      p,
      S,
      v,
      E,
      b,
      A,
      y,
      P,
      D,
      x,
      w,
      Y,
      q,
      C,
      k,
      F,
      X,
      V,
      $,
      Z,
      ee,
      le,
      Ee,
      B,
      j;
    return (
      (u = h = f = _ = d = p = S = v = E = 0),
      (m = g = 1),
      (n.svg = !!(e.getCTM && qu(e))),
      l.translate &&
        ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") &&
          (i[nt] =
            (l.translate !== "none"
              ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") +
            (l[nt] !== "none" ? l[nt] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (y = Ao(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((V = e.getBBox()), (c = n.xOrigin - V.x + "px " + (n.yOrigin - V.y) + "px"), (X = ""))
          : (X = !t && e.getAttribute("data-svg-origin")),
        eo(e, X || c, !!X || n.originIsAbsolute, n.smooth !== !1, y)),
      (b = n.xOrigin || 0),
      (A = n.yOrigin || 0),
      y !== Nr &&
        ((w = y[0]),
        (Y = y[1]),
        (q = y[2]),
        (C = y[3]),
        (u = k = y[4]),
        (h = F = y[5]),
        y.length === 6
          ? ((m = Math.sqrt(w * w + Y * Y)),
            (g = Math.sqrt(C * C + q * q)),
            (_ = w || Y ? Ki(Y, w) * mi : 0),
            (S = q || C ? Ki(q, C) * mi + _ : 0),
            S && (g *= Math.abs(Math.cos(S * ir))),
            n.svg && ((u -= b - (b * w + A * q)), (h -= A - (b * Y + A * C))))
          : ((j = y[6]),
            (Ee = y[7]),
            (Z = y[8]),
            (ee = y[9]),
            (le = y[10]),
            (B = y[11]),
            (u = y[12]),
            (h = y[13]),
            (f = y[14]),
            (P = Ki(j, le)),
            (d = P * mi),
            P &&
              ((D = Math.cos(-P)),
              (x = Math.sin(-P)),
              (X = k * D + Z * x),
              (V = F * D + ee * x),
              ($ = j * D + le * x),
              (Z = k * -x + Z * D),
              (ee = F * -x + ee * D),
              (le = j * -x + le * D),
              (B = Ee * -x + B * D),
              (k = X),
              (F = V),
              (j = $)),
            (P = Ki(-q, le)),
            (p = P * mi),
            P &&
              ((D = Math.cos(-P)),
              (x = Math.sin(-P)),
              (X = w * D - Z * x),
              (V = Y * D - ee * x),
              ($ = q * D - le * x),
              (B = C * x + B * D),
              (w = X),
              (Y = V),
              (q = $)),
            (P = Ki(Y, w)),
            (_ = P * mi),
            P &&
              ((D = Math.cos(P)),
              (x = Math.sin(P)),
              (X = w * D + Y * x),
              (V = k * D + F * x),
              (Y = Y * D - w * x),
              (F = F * D - k * x),
              (w = X),
              (k = V)),
            d && Math.abs(d) + Math.abs(_) > 359.9 && ((d = _ = 0), (p = 180 - p)),
            (m = at(Math.sqrt(w * w + Y * Y + q * q))),
            (g = at(Math.sqrt(F * F + j * j))),
            (P = Ki(k, F)),
            (S = Math.abs(P) > 2e-4 ? P * mi : 0),
            (E = B ? 1 / (B < 0 ? -B : B) : 0)),
        n.svg &&
          ((X = e.getAttribute("transform")),
          (n.forceCSS = e.setAttribute("transform", "") || !Ku(vn(e, nt))),
          X && e.setAttribute("transform", X))),
      Math.abs(S) > 90 &&
        Math.abs(S) < 270 &&
        (s
          ? ((m *= -1), (S += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((g *= -1), (S += S <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        u -
        ((n.xPercent = u && ((!t && n.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        o),
      (n.y =
        h -
        ((n.yPercent = h && ((!t && n.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        o),
      (n.z = f + o),
      (n.scaleX = at(m)),
      (n.scaleY = at(g)),
      (n.rotation = at(_) + a),
      (n.rotationX = at(d) + a),
      (n.rotationY = at(p) + a),
      (n.skewX = S + a),
      (n.skewY = v + a),
      (n.transformPerspective = E + o),
      (n.zOrigin = parseFloat(c.split(" ")[2]) || (!t && n.zOrigin) || 0) && (i[Ft] = Ps(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = qt.force3D),
      (n.renderTransform = n.svg ? z0 : Wu ? $u : B0),
      (n.uncache = 0),
      n
    );
  },
  Ps = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Ca = function (e, t, n) {
    var i = Tt(t);
    return at(parseFloat(t) + parseFloat(ei(e, "x", n + "px", i))) + i;
  },
  B0 = function (e, t) {
    (t.z = "0px"), (t.rotationY = t.rotationX = "0deg"), (t.force3D = 0), $u(e, t);
  },
  hi = "0deg",
  Er = "0px",
  fi = ") ",
  $u = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      s = n.yPercent,
      o = n.x,
      a = n.y,
      l = n.z,
      c = n.rotation,
      u = n.rotationY,
      h = n.rotationX,
      f = n.skewX,
      m = n.skewY,
      g = n.scaleX,
      _ = n.scaleY,
      d = n.transformPerspective,
      p = n.force3D,
      S = n.target,
      v = n.zOrigin,
      E = "",
      b = (p === "auto" && e && e !== 1) || p === !0;
    if (v && (h !== hi || u !== hi)) {
      var A = parseFloat(u) * ir,
        y = Math.sin(A),
        P = Math.cos(A),
        D;
      (A = parseFloat(h) * ir),
        (D = Math.cos(A)),
        (o = Ca(S, o, y * D * -v)),
        (a = Ca(S, a, -Math.sin(A) * -v)),
        (l = Ca(S, l, P * D * -v + v));
    }
    d !== Er && (E += "perspective(" + d + fi),
      (i || s) && (E += "translate(" + i + "%, " + s + "%) "),
      (b || o !== Er || a !== Er || l !== Er) &&
        (E += l !== Er || b ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + fi),
      c !== hi && (E += "rotate(" + c + fi),
      u !== hi && (E += "rotateY(" + u + fi),
      h !== hi && (E += "rotateX(" + h + fi),
      (f !== hi || m !== hi) && (E += "skew(" + f + ", " + m + fi),
      (g !== 1 || _ !== 1) && (E += "scale(" + g + ", " + _ + fi),
      (S.style[nt] = E || "translate(0, 0)");
  },
  z0 = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      s = n.yPercent,
      o = n.x,
      a = n.y,
      l = n.rotation,
      c = n.skewX,
      u = n.skewY,
      h = n.scaleX,
      f = n.scaleY,
      m = n.target,
      g = n.xOrigin,
      _ = n.yOrigin,
      d = n.xOffset,
      p = n.yOffset,
      S = n.forceCSS,
      v = parseFloat(o),
      E = parseFloat(a),
      b,
      A,
      y,
      P,
      D;
    (l = parseFloat(l)),
      (c = parseFloat(c)),
      (u = parseFloat(u)),
      u && ((u = parseFloat(u)), (c += u), (l += u)),
      l || c
        ? ((l *= ir),
          (c *= ir),
          (b = Math.cos(l) * h),
          (A = Math.sin(l) * h),
          (y = Math.sin(l - c) * -f),
          (P = Math.cos(l - c) * f),
          c &&
            ((u *= ir),
            (D = Math.tan(c - u)),
            (D = Math.sqrt(1 + D * D)),
            (y *= D),
            (P *= D),
            u && ((D = Math.tan(u)), (D = Math.sqrt(1 + D * D)), (b *= D), (A *= D))),
          (b = at(b)),
          (A = at(A)),
          (y = at(y)),
          (P = at(P)))
        : ((b = h), (P = f), (A = y = 0)),
      ((v && !~(o + "").indexOf("px")) || (E && !~(a + "").indexOf("px"))) &&
        ((v = ei(m, "x", o, "px")), (E = ei(m, "y", a, "px"))),
      (g || _ || d || p) && ((v = at(v + g - (g * b + _ * y) + d)), (E = at(E + _ - (g * A + _ * P) + p))),
      (i || s) && ((D = m.getBBox()), (v = at(v + (i / 100) * D.width)), (E = at(E + (s / 100) * D.height))),
      (D = "matrix(" + b + "," + A + "," + y + "," + P + "," + v + "," + E + ")"),
      m.setAttribute("transform", D),
      S && (m.style[nt] = D);
  },
  G0 = function (e, t, n, i, s) {
    var o = 360,
      a = _t(s),
      l = parseFloat(s) * (a && ~s.indexOf("rad") ? mi : 1),
      c = l - i,
      u = i + c + "deg",
      h,
      f;
    return (
      a &&
        ((h = s.split("_")[1]),
        h === "short" && ((c %= o), c !== c % (o / 2) && (c += c < 0 ? o : -o)),
        h === "cw" && c < 0
          ? (c = ((c + o * hc) % o) - ~~(c / o) * o)
          : h === "ccw" && c > 0 && (c = ((c - o * hc) % o) - ~~(c / o) * o)),
      (e._pt = f = new Ot(e._pt, t, n, i, c, T0)),
      (f.e = u),
      (f.u = "deg"),
      e._props.push(n),
      f
    );
  },
  gc = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  H0 = function (e, t, n) {
    var i = gc({}, n._gsap),
      s = "perspective,force3D,transformOrigin,svgOrigin",
      o = n.style,
      a,
      l,
      c,
      u,
      h,
      f,
      m,
      g;
    i.svg
      ? ((c = n.getAttribute("transform")),
        n.setAttribute("transform", ""),
        (o[nt] = t),
        (a = Or(n, 1)),
        Ci(n, nt),
        n.setAttribute("transform", c))
      : ((c = getComputedStyle(n)[nt]), (o[nt] = t), (a = Or(n, 1)), (o[nt] = c));
    for (l in Nn)
      (c = i[l]),
        (u = a[l]),
        c !== u &&
          s.indexOf(l) < 0 &&
          ((m = Tt(c)),
          (g = Tt(u)),
          (h = m !== g ? ei(n, l, c, g) : parseFloat(c)),
          (f = parseFloat(u)),
          (e._pt = new Ot(e._pt, a, l, h, f - h, ja)),
          (e._pt.u = g || 0),
          e._props.push(l));
    gc(a, i);
  };
Nt("padding,margin,Width,Radius", function (r, e) {
  var t = "Top",
    n = "Right",
    i = "Bottom",
    s = "Left",
    o = (e < 3 ? [t, n, i, s] : [t + s, t + n, i + n, i + s]).map(function (a) {
      return e < 2 ? r + a : "border" + a + r;
    });
  Cs[e > 1 ? "border" + r : r] = function (a, l, c, u, h) {
    var f, m;
    if (arguments.length < 4)
      return (
        (f = o.map(function (g) {
          return Rn(a, g, c);
        })),
        (m = f.join(" ")),
        m.split(f[0]).length === 5 ? f[0] : m
      );
    (f = (u + "").split(" ")),
      (m = {}),
      o.forEach(function (g, _) {
        return (m[g] = f[_] = f[_] || f[((_ - 1) / 2) | 0]);
      }),
      a.init(l, m, h);
  };
});
var Zu = {
  name: "css",
  register: Qa,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, i, s) {
    var o = this._props,
      a = e.style,
      l = n.vars.startAt,
      c,
      u,
      h,
      f,
      m,
      g,
      _,
      d,
      p,
      S,
      v,
      E,
      b,
      A,
      y,
      P;
    Eo || Qa(), (this.styles = this.styles || ku(e)), (P = this.styles.props), (this.tween = n);
    for (_ in t)
      if (_ !== "autoRound" && ((u = t[_]), !(Vt[_] && Du(_, t, n, i, e, s)))) {
        if (
          ((m = typeof u),
          (g = Cs[_]),
          m === "function" && ((u = u.call(n, i, e, s)), (m = typeof u)),
          m === "string" && ~u.indexOf("random(") && (u = Dr(u)),
          g)
        )
          g(this, e, _, u, n) && (y = 1);
        else if (_.substr(0, 2) === "--")
          (c = (getComputedStyle(e).getPropertyValue(_) + "").trim()),
            (u += ""),
            (jn.lastIndex = 0),
            jn.test(c) || ((d = Tt(c)), (p = Tt(u))),
            p ? d !== p && (c = ei(e, _, c, p) + p) : d && (u += d),
            this.add(a, "setProperty", c, u, i, s, 0, 0, _),
            o.push(_),
            P.push(_, 0, a[_]);
        else if (m !== "undefined") {
          if (
            (l && _ in l
              ? ((c = typeof l[_] == "function" ? l[_].call(n, i, e, s) : l[_]),
                _t(c) && ~c.indexOf("random(") && (c = Dr(c)),
                Tt(c + "") || c === "auto" || (c += qt.units[_] || Tt(Rn(e, _)) || ""),
                (c + "").charAt(1) === "=" && (c = Rn(e, _)))
              : (c = Rn(e, _)),
            (f = parseFloat(c)),
            (S = m === "string" && u.charAt(1) === "=" && u.substr(0, 2)),
            S && (u = u.substr(2)),
            (h = parseFloat(u)),
            _ in _n &&
              (_ === "autoAlpha" &&
                (f === 1 && Rn(e, "visibility") === "hidden" && h && (f = 0),
                P.push("visibility", 0, a.visibility),
                qn(this, a, "visibility", f ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)),
              _ !== "scale" && _ !== "transform" && ((_ = _n[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (v = _ in Nn),
            v)
          ) {
            if (
              (this.styles.save(_),
              E ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) || Or(e, t.parseTransform),
                (A = t.smoothOrigin !== !1 && b.smooth),
                (E = this._pt = new Ot(this._pt, a, nt, 0, 1, b.renderTransform, b, 0, -1)),
                (E.dep = 1)),
              _ === "scale")
            )
              (this._pt = new Ot(this._pt, b, "scaleY", b.scaleY, (S ? tr(b.scaleY, S + h) : h) - b.scaleY || 0, ja)),
                (this._pt.u = 0),
                o.push("scaleY", _),
                (_ += "X");
            else if (_ === "transformOrigin") {
              P.push(Ft, 0, a[Ft]),
                (u = O0(u)),
                b.svg
                  ? eo(e, u, 0, A, 0, this)
                  : ((p = parseFloat(u.split(" ")[2]) || 0),
                    p !== b.zOrigin && qn(this, b, "zOrigin", b.zOrigin, p),
                    qn(this, a, _, Ps(c), Ps(u)));
              continue;
            } else if (_ === "svgOrigin") {
              eo(e, u, 1, A, 0, this);
              continue;
            } else if (_ in Yu) {
              G0(this, b, _, f, S ? tr(f, S + u) : u);
              continue;
            } else if (_ === "smoothOrigin") {
              qn(this, b, "smooth", b.smooth, u);
              continue;
            } else if (_ === "force3D") {
              b[_] = u;
              continue;
            } else if (_ === "transform") {
              H0(this, u, e);
              continue;
            }
          } else _ in a || (_ = fr(_) || _);
          if (v || ((h || h === 0) && (f || f === 0) && !E0.test(u) && _ in a))
            (d = (c + "").substr((f + "").length)),
              h || (h = 0),
              (p = Tt(u) || (_ in qt.units ? qt.units[_] : d)),
              d !== p && (f = ei(e, _, c, p)),
              (this._pt = new Ot(
                this._pt,
                v ? b : a,
                _,
                f,
                (S ? tr(f, S + h) : h) - f,
                !v && (p === "px" || _ === "zIndex") && t.autoRound !== !1 ? A0 : ja
              )),
              (this._pt.u = p || 0),
              d !== p && p !== "%" && ((this._pt.b = c), (this._pt.r = y0));
          else if (_ in a) N0.call(this, e, _, c, S ? S + u : u);
          else if (_ in e) this.add(e, _, c || e[_], S ? S + u : u, i, s);
          else if (_ !== "parseTransform") {
            fo(_, u);
            continue;
          }
          v || (_ in a ? P.push(_, 0, a[_]) : P.push(_, 1, c || e[_])), o.push(_);
        }
      }
    y && Bu(this);
  },
  render: function (e, t) {
    if (t.tween._time || !To()) for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
    else t.styles.revert();
  },
  get: Rn,
  aliases: _n,
  getSetter: function (e, t, n) {
    var i = _n[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in Nn && t !== Ft && (e._gsap.x || Rn(e, "x"))
        ? n && uc === n
          ? t === "scale"
            ? C0
            : R0
          : (uc = n || {}) && (t === "scale" ? P0 : L0)
        : e.style && !co(e.style[t])
        ? b0
        : ~t.indexOf("-")
        ? w0
        : Mo(e, t)
    );
  },
  core: { _removeProperty: Ci, _getMatrix: Ao },
};
Bt.utils.checkPrefix = fr;
Bt.core.getStyleSaver = ku;
(function (r, e, t, n) {
  var i = Nt(r + "," + e + "," + t, function (s) {
    Nn[s] = 1;
  });
  Nt(e, function (s) {
    (qt.units[s] = "deg"), (Yu[s] = 1);
  }),
    (_n[i[13]] = r + "," + e),
    Nt(n, function (s) {
      var o = s.split(":");
      _n[o[1]] = i[o[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Nt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (r) {
  qt.units[r] = "px";
});
Bt.registerPlugin(Zu);
var to = Bt.registerPlugin(Zu) || Bt;
to.core.Tween;
const ju = document.querySelector("#canvas");
if (!ju) throw new Error("canvas not found");
const vc = () => {
    const r = window.innerWidth,
      e = window.innerHeight,
      t = r / e;
    return { width: r, height: e, aspect: t };
  },
  V0 = (r) => {
    const { width: e, height: t, aspect: n } = vc(),
      i = new jc({ canvas: ju });
    i.setClearColor(new We(0)), i.setPixelRatio(window.devicePixelRatio), i.setSize(e, t);
    const s = new xg(),
      o = new Wc();
    o.matrixAutoUpdate = !1;
    const a = r.image,
      l = a.width / a.height;
    let c = 0,
      u = 0,
      h = new Be(),
      f = new Be(),
      m = new Be();
    const g = new Hr(2, 2),
      _ = new Un({
        uniforms: {
          uTexture: { value: r },
          uScreenAspect: { value: n },
          uTextureAspect: { value: l },
          uValue: { value: 0 },
          uTime: { value: 0 },
          uMouse: { value: new Be(0.5, 0.5) },
          uVelo: { value: 0 },
          resolution: { value: new Be(1, window.innerHeight / window.innerWidth) },
        },
        vertexShader: bg,
        fragmentShader: wg,
      });
    function d() {
      window.addEventListener("mousemove", (y) => {
        (m.x = y.clientX / window.innerWidth),
          (m.y = 1 - y.clientY / window.innerHeight),
          (_.uniforms.uMouse.value = new Be(m.x, m.y));
      });
    }
    d();
    function p() {
      (u = Math.sqrt((f.x - m.x) ** 2 + (f.y - m.y) ** 2)),
        (c -= 0.1 * (c - u)),
        (h.x -= 0.1 * (h.x - m.x)),
        (h.y -= 0.1 * (h.y - m.y)),
        (f.x = m.x),
        (f.y = m.y);
    }
    let S = !1;
    window.addEventListener("click", (y) => {
      S == !1
        ? (to.to(_.uniforms.uValue, { value: 1, duration: 2, ease: "power3.out" }), (S = !0))
        : (to.to(_.uniforms.uValue, { value: 0, duration: 2, ease: "power3.in" }), (S = !1));
    });
    const v = new mn(g, _);
    s.add(v);
    const E = new yg(),
      b = () => {
        requestAnimationFrame(b);
        const y = E.getElapsedTime();
        (_.uniforms.uTime.value = y),
          p(),
          (_.uniforms.uVelo.value = Math.min(c, 0.05)),
          (c *= 0.999),
          console.log(_.uniforms.uVelo.value),
          i.render(s, o);
      };
    b();
    const A = () => {
      const { width: y, height: P, aspect: D } = vc();
      (_.uniforms.uScreenAspect.value = D),
        i.setPixelRatio(window.devicePixelRatio),
        i.setSize(y, P),
        console.log(_.uniforms.uScreenAspect.value);
    };
    window.addEventListener("resize", A);
  },
  k0 = async () => {
    const r = await new Tg().loadAsync(Ag);
    V0(r);
  };
k0();
