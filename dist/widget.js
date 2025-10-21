/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function On(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const B = {}, Xe = [], ae = () => {
}, Is = () => !1, Vt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), In = (e) => e.startsWith("onUpdate:"), z = Object.assign, An = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hr = Object.prototype.hasOwnProperty, H = (e, t) => Hr.call(e, t), A = Array.isArray, Ze = (e) => Wt(e) === "[object Map]", As = (e) => Wt(e) === "[object Set]", P = (e) => typeof e == "function", J = (e) => typeof e == "string", He = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", Ps = (e) => (K(e) || P(e)) && P(e.then) && P(e.catch), Ms = Object.prototype.toString, Wt = (e) => Ms.call(e), jr = (e) => Wt(e).slice(8, -1), Rs = (e) => Wt(e) === "[object Object]", Pn = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ft = /* @__PURE__ */ On(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Lr = /-\w/g, De = Kt(
  (e) => e.replace(Lr, (t) => t.slice(1).toUpperCase())
), $r = /\B([A-Z])/g, qe = Kt(
  (e) => e.replace($r, "-$1").toLowerCase()
), Fs = Kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), en = Kt(
  (e) => e ? `on${Fs(e)}` : ""
), Ve = (e, t) => !Object.is(e, t), tn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Ds = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Nr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let kn;
const qt = () => kn || (kn = typeof window < "u" ? window : typeof self < "u" ? self : typeof window < "u" || typeof window < "u" ? window : {});
function _t(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = J(s) ? Wr(s) : _t(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (J(e) || K(e))
    return e;
}
const Ur = /;(?![^(]*\))/g, Br = /:([^]+)/, Vr = /\/\*[^]*?\*\//g;
function Wr(e) {
  const t = {};
  return e.replace(Vr, "").split(Ur).forEach((n) => {
    if (n) {
      const s = n.split(Br);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Mn(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const s = Mn(e[n]);
      s && (t += s + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Kr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qr = /* @__PURE__ */ On(Kr);
function Hs(e) {
  return !!e || e === "";
}
const js = (e) => !!(e && e.__v_isRef === !0), pn = (e) => J(e) ? e : e == null ? "" : A(e) || K(e) && (e.toString === Ms || !P(e.toString)) ? js(e) ? pn(e.value) : JSON.stringify(e, Ls, 2) : String(e), Ls = (e, t) => js(t) ? Ls(e, t.value) : Ze(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[nn(s, i) + " =>"] = r, n),
    {}
  )
} : As(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => nn(n))
} : He(t) ? nn(t) : K(t) && !A(t) && !Rs(t) ? String(t) : t, nn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let re;
class Gr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = re, !t && re && (this.index = (re.scopes || (re.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = re;
      try {
        return re = this, t();
      } finally {
        re = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = re, re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (re = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Jr() {
  return re;
}
let U;
const sn = /* @__PURE__ */ new WeakSet();
class $s {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, re && re.active && re.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sn.has(this) && (sn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Us(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, es(this), Bs(this);
    const t = U, n = de;
    U = this, de = !0;
    try {
      return this.fn();
    } finally {
      Vs(this), U = t, de = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Dn(t);
      this.deps = this.depsTail = void 0, es(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gn(this) && this.run();
  }
  get dirty() {
    return gn(this);
  }
}
let Ns = 0, ut, at;
function Us(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = at, at = e;
    return;
  }
  e.next = ut, ut = e;
}
function Rn() {
  Ns++;
}
function Fn() {
  if (--Ns > 0)
    return;
  if (at) {
    let t = at;
    for (at = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ut; ) {
    let t = ut;
    for (ut = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e)
    throw e;
}
function Bs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Vs(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), Dn(s), zr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function gn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ws(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ws(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bt) || (e.globalVersion = bt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !gn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, s = de;
  U = e, de = !0;
  try {
    Bs(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ve(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = n, de = s, Vs(e), e.flags &= -3;
  }
}
function Dn(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Dn(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function zr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let de = !0;
const Ks = [];
function Ee() {
  Ks.push(de), de = !1;
}
function Oe() {
  const e = Ks.pop();
  de = e === void 0 ? !0 : e;
}
function es(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let bt = 0;
class Yr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!U || !de || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new Yr(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Gs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, bt++, this.notify(t);
  }
  notify(t) {
    Rn();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Fn();
    }
  }
}
function Gs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Gs(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const mn = /* @__PURE__ */ new WeakMap(), We = Symbol(
  ""
), _n = Symbol(
  ""
), xt = Symbol(
  ""
);
function X(e, t, n) {
  if (de && U) {
    let s = mn.get(e);
    s || mn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new qs()), r.map = s, r.key = n), r.track();
  }
}
function Te(e, t, n, s, r, i) {
  const o = mn.get(e);
  if (!o) {
    bt++;
    return;
  }
  const c = (u) => {
    u && u.trigger();
  };
  if (Rn(), t === "clear")
    o.forEach(c);
  else {
    const u = A(e), h = u && Pn(n);
    if (u && n === "length") {
      const a = Number(s);
      o.forEach((p, w) => {
        (w === "length" || w === xt || !He(w) && w >= a) && c(p);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), h && c(o.get(xt)), t) {
        case "add":
          u ? h && c(o.get("length")) : (c(o.get(We)), Ze(e) && c(o.get(_n)));
          break;
        case "delete":
          u || (c(o.get(We)), Ze(e) && c(o.get(_n)));
          break;
        case "set":
          Ze(e) && c(o.get(We));
          break;
      }
  }
  Fn();
}
function Je(e) {
  const t = L(e);
  return t === e ? t : (X(t, "iterate", xt), ye(e) ? t : t.map(ce));
}
function Hn(e) {
  return X(e = L(e), "iterate", xt), e;
}
const Xr = {
  __proto__: null,
  [Symbol.iterator]() {
    return rn(this, Symbol.iterator, ce);
  },
  concat(...e) {
    return Je(this).concat(
      ...e.map((t) => A(t) ? Je(t) : t)
    );
  },
  entries() {
    return rn(this, "entries", (e) => (e[1] = ce(e[1]), e));
  },
  every(e, t) {
    return Se(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Se(this, "filter", e, t, (n) => n.map(ce), arguments);
  },
  find(e, t) {
    return Se(this, "find", e, t, ce, arguments);
  },
  findIndex(e, t) {
    return Se(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Se(this, "findLast", e, t, ce, arguments);
  },
  findLastIndex(e, t) {
    return Se(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Se(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return on(this, "includes", e);
  },
  indexOf(...e) {
    return on(this, "indexOf", e);
  },
  join(e) {
    return Je(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return on(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Se(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ot(this, "pop");
  },
  push(...e) {
    return ot(this, "push", e);
  },
  reduce(e, ...t) {
    return ts(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ts(this, "reduceRight", e, t);
  },
  shift() {
    return ot(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Se(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ot(this, "splice", e);
  },
  toReversed() {
    return Je(this).toReversed();
  },
  toSorted(e) {
    return Je(this).toSorted(e);
  },
  toSpliced(...e) {
    return Je(this).toSpliced(...e);
  },
  unshift(...e) {
    return ot(this, "unshift", e);
  },
  values() {
    return rn(this, "values", ce);
  }
};
function rn(e, t, n) {
  const s = Hn(e), r = s[t]();
  return s !== e && !ye(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const Zr = Array.prototype;
function Se(e, t, n, s, r, i) {
  const o = Hn(e), c = o !== e && !ye(e), u = o[t];
  if (u !== Zr[t]) {
    const p = u.apply(e, i);
    return c ? ce(p) : p;
  }
  let h = n;
  o !== e && (c ? h = function(p, w) {
    return n.call(this, ce(p), w, e);
  } : n.length > 2 && (h = function(p, w) {
    return n.call(this, p, w, e);
  }));
  const a = u.call(o, h, s);
  return c && r ? r(a) : a;
}
function ts(e, t, n, s) {
  const r = Hn(e);
  let i = n;
  return r !== e && (ye(e) ? n.length > 3 && (i = function(o, c, u) {
    return n.call(this, o, c, u, e);
  }) : i = function(o, c, u) {
    return n.call(this, o, ce(c), u, e);
  }), r[t](i, ...s);
}
function on(e, t, n) {
  const s = L(e);
  X(s, "iterate", xt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Nn(n[0]) ? (n[0] = L(n[0]), s[t](...n)) : r;
}
function ot(e, t, n = []) {
  Ee(), Rn();
  const s = L(e)[t].apply(e, n);
  return Fn(), Oe(), s;
}
const Qr = /* @__PURE__ */ On("__proto__,__v_isRef,__isVue"), Js = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(He)
);
function kr(e) {
  He(e) || (e = String(e));
  const t = L(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class zs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip")
      return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? fi : Qs : i ? Zs : Xs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = A(t);
    if (!r) {
      let u;
      if (o && (u = Xr[n]))
        return u;
      if (n === "hasOwnProperty")
        return kr;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ne(t) ? t : s
    );
    if ((He(n) ? Js.has(n) : Qr(n)) || (r || X(t, "get", n), i))
      return c;
    if (ne(c)) {
      const u = o && Pn(n) ? c : c.value;
      return r && K(u) ? xn(u) : u;
    }
    return K(c) ? r ? xn(c) : Ln(c) : c;
  }
}
class Ys extends zs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const u = et(i);
      if (!ye(s) && !et(s) && (i = L(i), s = L(s)), !A(t) && ne(i) && !ne(s))
        return u || (i.value = s), !0;
    }
    const o = A(t) && Pn(n) ? Number(n) < t.length : H(t, n), c = Reflect.set(
      t,
      n,
      s,
      ne(t) ? t : r
    );
    return t === L(r) && (o ? Ve(s, i) && Te(t, "set", n, s) : Te(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = H(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && Te(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!He(n) || !Js.has(n)) && X(t, "has", n), s;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      A(t) ? "length" : We
    ), Reflect.ownKeys(t);
  }
}
class ei extends zs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const ti = /* @__PURE__ */ new Ys(), ni = /* @__PURE__ */ new ei(), si = /* @__PURE__ */ new Ys(!0);
const bn = (e) => e, Pt = (e) => Reflect.getPrototypeOf(e);
function ri(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = L(r), o = Ze(i), c = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, h = r[e](...s), a = n ? bn : t ? yn : ce;
    return !t && X(
      i,
      "iterate",
      u ? _n : We
    ), {
      // iterator protocol
      next() {
        const { value: p, done: w } = h.next();
        return w ? { value: p, done: w } : {
          value: c ? [a(p[0]), a(p[1])] : a(p),
          done: w
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Mt(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ii(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = L(i), c = L(r);
      e || (Ve(r, c) && X(o, "get", r), X(o, "get", c));
      const { has: u } = Pt(o), h = t ? bn : e ? yn : ce;
      if (u.call(o, r))
        return h(i.get(r));
      if (u.call(o, c))
        return h(i.get(c));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && X(L(r), "iterate", We), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = L(i), c = L(r);
      return e || (Ve(r, c) && X(o, "has", r), X(o, "has", c)), r === c ? i.has(r) : i.has(r) || i.has(c);
    },
    forEach(r, i) {
      const o = this, c = o.__v_raw, u = L(c), h = t ? bn : e ? yn : ce;
      return !e && X(u, "iterate", We), c.forEach((a, p) => r.call(i, h(a), h(p), o));
    }
  };
  return z(
    n,
    e ? {
      add: Mt("add"),
      set: Mt("set"),
      delete: Mt("delete"),
      clear: Mt("clear")
    } : {
      add(r) {
        !t && !ye(r) && !et(r) && (r = L(r));
        const i = L(this);
        return Pt(i).has.call(i, r) || (i.add(r), Te(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !ye(i) && !et(i) && (i = L(i));
        const o = L(this), { has: c, get: u } = Pt(o);
        let h = c.call(o, r);
        h || (r = L(r), h = c.call(o, r));
        const a = u.call(o, r);
        return o.set(r, i), h ? Ve(i, a) && Te(o, "set", r, i) : Te(o, "add", r, i), this;
      },
      delete(r) {
        const i = L(this), { has: o, get: c } = Pt(i);
        let u = o.call(i, r);
        u || (r = L(r), u = o.call(i, r)), c && c.call(i, r);
        const h = i.delete(r);
        return u && Te(i, "delete", r, void 0), h;
      },
      clear() {
        const r = L(this), i = r.size !== 0, o = r.clear();
        return i && Te(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = ri(r, e, t);
  }), n;
}
function jn(e, t) {
  const n = ii(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    H(n, r) && r in s ? n : s,
    r,
    i
  );
}
const oi = {
  get: /* @__PURE__ */ jn(!1, !1)
}, li = {
  get: /* @__PURE__ */ jn(!1, !0)
}, ci = {
  get: /* @__PURE__ */ jn(!0, !1)
};
const Xs = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap();
function ui(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ai(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ui(jr(e));
}
function Ln(e) {
  return et(e) ? e : $n(
    e,
    !1,
    ti,
    oi,
    Xs
  );
}
function di(e) {
  return $n(
    e,
    !1,
    si,
    li,
    Zs
  );
}
function xn(e) {
  return $n(
    e,
    !0,
    ni,
    ci,
    Qs
  );
}
function $n(e, t, n, s, r) {
  if (!K(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = ai(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, c), c;
}
function dt(e) {
  return et(e) ? dt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
  return !!(e && e.__v_isReadonly);
}
function ye(e) {
  return !!(e && e.__v_isShallow);
}
function Nn(e) {
  return e ? !!e.__v_raw : !1;
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function hi(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && Ds(e, "__v_skip", !0), e;
}
const ce = (e) => K(e) ? Ln(e) : e, yn = (e) => K(e) ? xn(e) : e;
function ne(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function pi(e) {
  return ne(e) ? e.value : e;
}
const gi = {
  get: (e, t, n) => t === "__v_raw" ? e : pi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ne(r) && !ne(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function ks(e) {
  return dt(e) ? e : new Proxy(e, gi);
}
class mi {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Us(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ws(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function _i(e, t, n = !1) {
  let s, r;
  return P(e) ? s = e : (s = e.get, r = e.set), new mi(s, r, n);
}
const Rt = {}, jt = /* @__PURE__ */ new WeakMap();
let Be;
function bi(e, t = !1, n = Be) {
  if (n) {
    let s = jt.get(n);
    s || jt.set(n, s = []), s.push(e);
  }
}
function xi(e, t, n = B) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: c, call: u } = n, h = (O) => r ? O : ye(O) || r === !1 || r === 0 ? Fe(O, 1) : Fe(O);
  let a, p, w, C, M = !1, F = !1;
  if (ne(e) ? (p = () => e.value, M = ye(e)) : dt(e) ? (p = () => h(e), M = !0) : A(e) ? (F = !0, M = e.some((O) => dt(O) || ye(O)), p = () => e.map((O) => {
    if (ne(O))
      return O.value;
    if (dt(O))
      return h(O);
    if (P(O))
      return u ? u(O, 2) : O();
  })) : P(e) ? t ? p = u ? () => u(e, 2) : e : p = () => {
    if (w) {
      Ee();
      try {
        w();
      } finally {
        Oe();
      }
    }
    const O = Be;
    Be = a;
    try {
      return u ? u(e, 3, [C]) : e(C);
    } finally {
      Be = O;
    }
  } : p = ae, t && r) {
    const O = p, G = r === !0 ? 1 / 0 : r;
    p = () => Fe(O(), G);
  }
  const Z = Jr(), D = () => {
    a.stop(), Z && Z.active && An(Z.effects, a);
  };
  if (i && t) {
    const O = t;
    t = (...G) => {
      O(...G), D();
    };
  }
  let V = F ? new Array(e.length).fill(Rt) : Rt;
  const q = (O) => {
    if (!(!(a.flags & 1) || !a.dirty && !O))
      if (t) {
        const G = a.run();
        if (r || M || (F ? G.some((Ae, he) => Ve(Ae, V[he])) : Ve(G, V))) {
          w && w();
          const Ae = Be;
          Be = a;
          try {
            const he = [
              G,
              // pass undefined as the old value when it's changed for the first time
              V === Rt ? void 0 : F && V[0] === Rt ? [] : V,
              C
            ];
            V = G, u ? u(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            );
          } finally {
            Be = Ae;
          }
        }
      } else
        a.run();
  };
  return c && c(q), a = new $s(p), a.scheduler = o ? () => o(q, !1) : q, C = (O) => bi(O, !1, a), w = a.onStop = () => {
    const O = jt.get(a);
    if (O) {
      if (u)
        u(O, 4);
      else
        for (const G of O)
          G();
      jt.delete(a);
    }
  }, t ? s ? q(!0) : V = a.run() : o ? o(q.bind(null, !0), !0) : a.run(), D.pause = a.pause.bind(a), D.resume = a.resume.bind(a), D.stop = D, D;
}
function Fe(e, t = 1 / 0, n) {
  if (t <= 0 || !K(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, ne(e))
    Fe(e.value, t, n);
  else if (A(e))
    for (let s = 0; s < e.length; s++)
      Fe(e[s], t, n);
  else if (As(e) || Ze(e))
    e.forEach((s) => {
      Fe(s, t, n);
    });
  else if (Rs(e)) {
    for (const s in e)
      Fe(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Fe(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function wt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Gt(r, t, n);
  }
}
function ve(e, t, n, s) {
  if (P(e)) {
    const r = wt(e, t, n, s);
    return r && Ps(r) && r.catch((i) => {
      Gt(i, t, n);
    }), r;
  }
  if (A(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(ve(e[i], t, n, s));
    return r;
  }
}
function Gt(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || B;
  if (t) {
    let c = t.parent;
    const u = t.proxy, h = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const a = c.ec;
      if (a) {
        for (let p = 0; p < a.length; p++)
          if (a[p](e, u, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (i) {
      Ee(), wt(i, null, 10, [
        e,
        u,
        h
      ]), Oe();
      return;
    }
  }
  yi(e, n, r, s, o);
}
function yi(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const ee = [];
let _e = -1;
const Qe = [];
let Me = null, ze = 0;
const er = /* @__PURE__ */ Promise.resolve();
let Lt = null;
function vi(e) {
  const t = Lt || er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Si(e) {
  let t = _e + 1, n = ee.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = ee[s], i = yt(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Un(e) {
  if (!(e.flags & 1)) {
    const t = yt(e), n = ee[ee.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yt(n) ? ee.push(e) : ee.splice(Si(t), 0, e), e.flags |= 1, tr();
  }
}
function tr() {
  Lt || (Lt = er.then(sr));
}
function wi(e) {
  A(e) ? Qe.push(...e) : Me && e.id === -1 ? Me.splice(ze + 1, 0, e) : e.flags & 1 || (Qe.push(e), e.flags |= 1), tr();
}
function ns(e, t, n = _e + 1) {
  for (; n < ee.length; n++) {
    const s = ee[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function nr(e) {
  if (Qe.length) {
    const t = [...new Set(Qe)].sort(
      (n, s) => yt(n) - yt(s)
    );
    if (Qe.length = 0, Me) {
      Me.push(...t);
      return;
    }
    for (Me = t, ze = 0; ze < Me.length; ze++) {
      const n = Me[ze];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Me = null, ze = 0;
  }
}
const yt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function sr(e) {
  const t = ae;
  try {
    for (_e = 0; _e < ee.length; _e++) {
      const n = ee[_e];
      n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), wt(
        n,
        n.i,
        n.i ? 15 : 14
      ), n.flags & 4 || (n.flags &= -2));
    }
  } finally {
    for (; _e < ee.length; _e++) {
      const n = ee[_e];
      n && (n.flags &= -2);
    }
    _e = -1, ee.length = 0, nr(), Lt = null, (ee.length || Qe.length) && sr();
  }
}
let xe = null, rr = null;
function $t(e) {
  const t = xe;
  return xe = e, rr = e && e.type.__scopeId || null, t;
}
function Ci(e, t = xe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && as(-1);
    const i = $t(t);
    let o;
    try {
      o = e(...r);
    } finally {
      $t(i), s._d && as(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ne(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const c = r[o];
    i && (c.oldValue = i[o].value);
    let u = c.dir[s];
    u && (Ee(), ve(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Oe());
  }
}
const Ti = Symbol("_vte"), Ei = (e) => e.__isTeleport, Oi = Symbol("_leaveCb");
function Bn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ir(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Nt = /* @__PURE__ */ new WeakMap();
function ht(e, t, n, s, r = !1) {
  if (A(e)) {
    e.forEach(
      (M, F) => ht(
        M,
        t && (A(t) ? t[F] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (pt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && ht(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Gn(s.component) : s.el, o = r ? null : i, { i: c, r: u } = e, h = t && t.r, a = c.refs === B ? c.refs = {} : c.refs, p = c.setupState, w = L(p), C = p === B ? Is : (M) => H(w, M);
  if (h != null && h !== u) {
    if (ss(t), J(h))
      a[h] = null, C(h) && (p[h] = null);
    else if (ne(h)) {
      h.value = null;
      const M = t;
      M.k && (a[M.k] = null);
    }
  }
  if (P(u))
    wt(u, c, 12, [o, a]);
  else {
    const M = J(u), F = ne(u);
    if (M || F) {
      const Z = () => {
        if (e.f) {
          const D = M ? C(u) ? p[u] : a[u] : u.value;
          if (r)
            A(D) && An(D, i);
          else if (A(D))
            D.includes(i) || D.push(i);
          else if (M)
            a[u] = [i], C(u) && (p[u] = a[u]);
          else {
            const V = [i];
            u.value = V, e.k && (a[e.k] = V);
          }
        } else
          M ? (a[u] = o, C(u) && (p[u] = o)) : F && (u.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const D = () => {
          Z(), Nt.delete(e);
        };
        D.id = -1, Nt.set(e, D), le(D, n);
      } else
        ss(e), Z();
    }
  }
}
function ss(e) {
  const t = Nt.get(e);
  t && (t.flags |= 8, Nt.delete(e));
}
qt().requestIdleCallback;
qt().cancelIdleCallback;
const pt = (e) => !!e.type.__asyncLoader, or = (e) => e.type.__isKeepAlive;
function Ii(e, t) {
  lr(e, "a", t);
}
function Ai(e, t) {
  lr(e, "da", t);
}
function lr(e, t, n = te) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Jt(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      or(r.parent.vnode) && Pi(s, t, n, r), r = r.parent;
  }
}
function Pi(e, t, n, s) {
  const r = Jt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  cr(() => {
    An(s[t], r);
  }, n);
}
function Jt(e, t, n = te, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      Ee();
      const c = Ct(n), u = ve(t, n, e, o);
      return c(), Oe(), u;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const Ie = (e) => (t, n = te) => {
  (!St || e === "sp") && Jt(e, (...s) => t(...s), n);
}, Mi = Ie("bm"), Ri = Ie("m"), Fi = Ie(
  "bu"
), Di = Ie("u"), Hi = Ie(
  "bum"
), cr = Ie("um"), ji = Ie(
  "sp"
), Li = Ie("rtg"), $i = Ie("rtc");
function Ni(e, t = te) {
  Jt("ec", e, t);
}
const Ui = Symbol.for("v-ndc"), vn = (e) => e ? Or(e) ? Gn(e) : vn(e.parent) : null, gt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => vn(e.parent),
    $root: (e) => vn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Vn(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Un(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = vi.bind(e.proxy)),
    $watch: (e) => co.bind(e)
  })
), ln = (e, t) => e !== B && !e.__isScriptSetup && H(e, t), Bi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: c, appContext: u } = e;
    let h;
    if (t[0] !== "$") {
      const C = o[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ln(s, t))
          return o[t] = 1, s[t];
        if (r !== B && H(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && H(h, t)
        )
          return o[t] = 3, i[t];
        if (n !== B && H(n, t))
          return o[t] = 4, n[t];
        Sn && (o[t] = 0);
      }
    }
    const a = gt[t];
    let p, w;
    if (a)
      return t === "$attrs" && X(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== B && H(n, t))
      return o[t] = 4, n[t];
    if (
      // window properties
      w = u.config.globalProperties, H(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return ln(r, t) ? (r[t] = n, !0) : s !== B && H(s, t) ? (s[t] = n, !0) : H(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i, type: o }
  }, c) {
    let u, h;
    return !!(n[c] || e !== B && c[0] !== "$" && H(e, c) || ln(t, c) || (u = i[0]) && H(u, c) || H(s, c) || H(gt, c) || H(r.config.globalProperties, c) || (h = o.__cssModules) && h[c]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function rs(e) {
  return A(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Sn = !0;
function Vi(e) {
  const t = Vn(e), n = e.proxy, s = e.ctx;
  Sn = !1, t.beforeCreate && is(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: c,
    provide: u,
    inject: h,
    // lifecycle
    created: a,
    beforeMount: p,
    mounted: w,
    beforeUpdate: C,
    updated: M,
    activated: F,
    deactivated: Z,
    beforeDestroy: D,
    beforeUnmount: V,
    destroyed: q,
    unmounted: O,
    render: G,
    renderTracked: Ae,
    renderTriggered: he,
    errorCaptured: Pe,
    serverPrefetch: Tt,
    // public API
    expose: je,
    inheritAttrs: st,
    // assets
    components: Et,
    directives: Ot,
    filters: Xt
  } = t;
  if (h && Wi(h, s, null), o)
    for (const W in o) {
      const $ = o[W];
      P($) && (s[W] = $.bind(n));
    }
  if (r) {
    const W = r.call(n, n);
    K(W) && (e.data = Ln(W));
  }
  if (Sn = !0, i)
    for (const W in i) {
      const $ = i[W], Le = P($) ? $.bind(n, n) : P($.get) ? $.get.bind(n, n) : ae, It = !P($) && P($.set) ? $.set.bind(n) : ae, $e = Ho({
        get: Le,
        set: It
      });
      Object.defineProperty(s, W, {
        enumerable: !0,
        configurable: !0,
        get: () => $e.value,
        set: (pe) => $e.value = pe
      });
    }
  if (c)
    for (const W in c)
      fr(c[W], s, n, W);
  if (u) {
    const W = P(u) ? u.call(n) : u;
    Reflect.ownKeys(W).forEach(($) => {
      Yi($, W[$]);
    });
  }
  a && is(a, e, "c");
  function Q(W, $) {
    A($) ? $.forEach((Le) => W(Le.bind(n))) : $ && W($.bind(n));
  }
  if (Q(Mi, p), Q(Ri, w), Q(Fi, C), Q(Di, M), Q(Ii, F), Q(Ai, Z), Q(Ni, Pe), Q($i, Ae), Q(Li, he), Q(Hi, V), Q(cr, O), Q(ji, Tt), A(je))
    if (je.length) {
      const W = e.exposed || (e.exposed = {});
      je.forEach(($) => {
        Object.defineProperty(W, $, {
          get: () => n[$],
          set: (Le) => n[$] = Le,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  G && e.render === ae && (e.render = G), st != null && (e.inheritAttrs = st), Et && (e.components = Et), Ot && (e.directives = Ot), Tt && ir(e);
}
function Wi(e, t, n = ae) {
  A(e) && (e = wn(e));
  for (const s in e) {
    const r = e[s];
    let i;
    K(r) ? "default" in r ? i = Ft(
      r.from || s,
      r.default,
      !0
    ) : i = Ft(r.from || s) : i = Ft(r), ne(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function is(e, t, n) {
  ve(
    A(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function fr(e, t, n, s) {
  let r = s.includes(".") ? Sr(n, s) : () => n[s];
  if (J(e)) {
    const i = t[e];
    P(i) && fn(r, i);
  } else if (P(e))
    fn(r, e.bind(n));
  else if (K(e))
    if (A(e))
      e.forEach((i) => fr(i, t, n, s));
    else {
      const i = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(i) && fn(r, i, e);
    }
}
function Vn(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = i.get(t);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach(
    (h) => Ut(u, h, o, !0)
  ), Ut(u, t, o)), K(t) && i.set(t, u), u;
}
function Ut(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Ut(e, i, n, !0), r && r.forEach(
    (o) => Ut(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const c = Ki[o] || n && n[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const Ki = {
  data: os,
  props: ls,
  emits: ls,
  // objects
  methods: ct,
  computed: ct,
  // lifecycle
  beforeCreate: k,
  created: k,
  beforeMount: k,
  mounted: k,
  beforeUpdate: k,
  updated: k,
  beforeDestroy: k,
  beforeUnmount: k,
  destroyed: k,
  unmounted: k,
  activated: k,
  deactivated: k,
  errorCaptured: k,
  serverPrefetch: k,
  // assets
  components: ct,
  directives: ct,
  // watch
  watch: Gi,
  // provide / inject
  provide: os,
  inject: qi
};
function os(e, t) {
  return t ? e ? function() {
    return z(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function qi(e, t) {
  return ct(wn(e), wn(t));
}
function wn(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function k(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ct(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ls(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    rs(e),
    rs(t ?? {})
  ) : t;
}
function Gi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = z(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = k(e[s], t[s]);
  return n;
}
function ur() {
  return {
    app: null,
    config: {
      isNativeTag: Is,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ji = 0;
function zi(e, t) {
  return function(s, r = null) {
    P(s) || (s = z({}, s)), r != null && !K(r) && (r = null);
    const i = ur(), o = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = i.app = {
      _uid: Ji++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: jo,
      get config() {
        return i.config;
      },
      set config(a) {
      },
      use(a, ...p) {
        return o.has(a) || (a && P(a.install) ? (o.add(a), a.install(h, ...p)) : P(a) && (o.add(a), a(h, ...p))), h;
      },
      mixin(a) {
        return i.mixins.includes(a) || i.mixins.push(a), h;
      },
      component(a, p) {
        return p ? (i.components[a] = p, h) : i.components[a];
      },
      directive(a, p) {
        return p ? (i.directives[a] = p, h) : i.directives[a];
      },
      mount(a, p, w) {
        if (!u) {
          const C = h._ceVNode || Ke(s, r);
          return C.appContext = i, w === !0 ? w = "svg" : w === !1 && (w = void 0), p && t ? t(C, a) : e(C, a, w), u = !0, h._container = a, a.__vue_app__ = h, Gn(C.component);
        }
      },
      onUnmount(a) {
        c.push(a);
      },
      unmount() {
        u && (ve(
          c,
          h._instance,
          16
        ), e(null, h._container), delete h._container.__vue_app__);
      },
      provide(a, p) {
        return i.provides[a] = p, h;
      },
      runWithContext(a) {
        const p = ke;
        ke = h;
        try {
          return a();
        } finally {
          ke = p;
        }
      }
    };
    return h;
  };
}
let ke = null;
function Yi(e, t) {
  if (te) {
    let n = te.provides;
    const s = te.parent && te.parent.provides;
    s === n && (n = te.provides = Object.create(s)), n[e] = t;
  }
}
function Ft(e, t, n = !1) {
  const s = Ao();
  if (s || ke) {
    let r = ke ? ke._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(s && s.proxy) : t;
  }
}
const ar = {}, dr = () => Object.create(ar), hr = (e) => Object.getPrototypeOf(e) === ar;
function Xi(e, t, n, s = !1) {
  const r = {}, i = dr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pr(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : di(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function Zi(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, c = L(r), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        let w = a[p];
        if (zt(e.emitsOptions, w))
          continue;
        const C = t[w];
        if (u)
          if (H(i, w))
            C !== i[w] && (i[w] = C, h = !0);
          else {
            const M = De(w);
            r[M] = Cn(
              u,
              c,
              M,
              C,
              e,
              !1
            );
          }
        else
          C !== i[w] && (i[w] = C, h = !0);
      }
    }
  } else {
    pr(e, t, r, i) && (h = !0);
    let a;
    for (const p in c)
      (!t || // for camelCase
      !H(t, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = qe(p)) === p || !H(t, a))) && (u ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[a] !== void 0) && (r[p] = Cn(
        u,
        c,
        p,
        void 0,
        e,
        !0
      )) : delete r[p]);
    if (i !== c)
      for (const p in i)
        (!t || !H(t, p)) && (delete i[p], h = !0);
  }
  h && Te(e.attrs, "set", "");
}
function pr(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, c;
  if (t)
    for (let u in t) {
      if (ft(u))
        continue;
      const h = t[u];
      let a;
      r && H(r, a = De(u)) ? !i || !i.includes(a) ? n[a] = h : (c || (c = {}))[a] = h : zt(e.emitsOptions, u) || (!(u in s) || h !== s[u]) && (s[u] = h, o = !0);
    }
  if (i) {
    const u = L(n), h = c || B;
    for (let a = 0; a < i.length; a++) {
      const p = i[a];
      n[p] = Cn(
        r,
        u,
        p,
        h[p],
        e,
        !H(h, p)
      );
    }
  }
  return o;
}
function Cn(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const c = H(o, "default");
    if (c && s === void 0) {
      const u = o.default;
      if (o.type !== Function && !o.skipFactory && P(u)) {
        const { propsDefaults: h } = r;
        if (n in h)
          s = h[n];
        else {
          const a = Ct(r);
          s = h[n] = u.call(
            null,
            t
          ), a();
        }
      } else
        s = u;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !c ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === qe(n)) && (s = !0));
  }
  return s;
}
const Qi = /* @__PURE__ */ new WeakMap();
function gr(e, t, n = !1) {
  const s = n ? Qi : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, c = [];
  let u = !1;
  if (!P(e)) {
    const a = (p) => {
      u = !0;
      const [w, C] = gr(p, t, !0);
      z(o, w), C && c.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!i && !u)
    return K(e) && s.set(e, Xe), Xe;
  if (A(i))
    for (let a = 0; a < i.length; a++) {
      const p = De(i[a]);
      cs(p) && (o[p] = B);
    }
  else if (i)
    for (const a in i) {
      const p = De(a);
      if (cs(p)) {
        const w = i[a], C = o[p] = A(w) || P(w) ? { type: w } : z({}, w), M = C.type;
        let F = !1, Z = !0;
        if (A(M))
          for (let D = 0; D < M.length; ++D) {
            const V = M[D], q = P(V) && V.name;
            if (q === "Boolean") {
              F = !0;
              break;
            } else
              q === "String" && (Z = !1);
          }
        else
          F = P(M) && M.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = F, C[
          1
          /* shouldCastTrue */
        ] = Z, (F || H(C, "default")) && c.push(p);
      }
    }
  const h = [o, c];
  return K(e) && s.set(e, h), h;
}
function cs(e) {
  return e[0] !== "$" && !ft(e);
}
const Wn = (e) => e === "_" || e === "_ctx" || e === "$stable", Kn = (e) => A(e) ? e.map(be) : [be(e)], ki = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ci((...r) => Kn(t(...r)), n);
  return s._c = !1, s;
}, mr = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Wn(r))
      continue;
    const i = e[r];
    if (P(i))
      t[r] = ki(r, i, s);
    else if (i != null) {
      const o = Kn(i);
      t[r] = () => o;
    }
  }
}, _r = (e, t) => {
  const n = Kn(t);
  e.slots.default = () => n;
}, br = (e, t, n) => {
  for (const s in t)
    (n || !Wn(s)) && (e[s] = t[s]);
}, eo = (e, t, n) => {
  const s = e.slots = dr();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (br(s, t, n), n && Ds(s, "_", r, !0)) : mr(t, s);
  } else
    t && _r(e, t);
}, to = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = B;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? i = !1 : br(r, t, n) : (i = !t.$stable, mr(t, r)), o = t;
  } else
    t && (_r(e, t), o = { default: 1 });
  if (i)
    for (const c in r)
      !Wn(c) && o[c] == null && delete r[c];
}, le = _o;
function no(e) {
  return so(e);
}
function so(e, t) {
  const n = qt();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: c,
    createComment: u,
    setText: h,
    setElementText: a,
    parentNode: p,
    nextSibling: w,
    setScopeId: C = ae,
    insertStaticContent: M
  } = e, F = (l, f, d, _ = null, g = null, m = null, v = void 0, y = null, x = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !lt(l, f) && (_ = At(l), pe(l, g, m, !0), l = null), f.patchFlag === -2 && (x = !1, f.dynamicChildren = null);
    const { type: b, ref: E, shapeFlag: S } = f;
    switch (b) {
      case Yt:
        Z(l, f, d, _);
        break;
      case tt:
        D(l, f, d, _);
        break;
      case an:
        l == null && V(f, d, _, v);
        break;
      case Ce:
        Et(
          l,
          f,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        );
        break;
      default:
        S & 1 ? G(
          l,
          f,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        ) : S & 6 ? Ot(
          l,
          f,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        ) : (S & 64 || S & 128) && b.process(
          l,
          f,
          d,
          _,
          g,
          m,
          v,
          y,
          x,
          Ge
        );
    }
    E != null && g ? ht(E, l && l.ref, m, f || l, !f) : E == null && l && l.ref != null && ht(l.ref, null, m, l, !0);
  }, Z = (l, f, d, _) => {
    if (l == null)
      s(
        f.el = c(f.children),
        d,
        _
      );
    else {
      const g = f.el = l.el;
      f.children !== l.children && h(g, f.children);
    }
  }, D = (l, f, d, _) => {
    l == null ? s(
      f.el = u(f.children || ""),
      d,
      _
    ) : f.el = l.el;
  }, V = (l, f, d, _) => {
    [l.el, l.anchor] = M(
      l.children,
      f,
      d,
      _,
      l.el,
      l.anchor
    );
  }, q = ({ el: l, anchor: f }, d, _) => {
    let g;
    for (; l && l !== f; )
      g = w(l), s(l, d, _), l = g;
    s(f, d, _);
  }, O = ({ el: l, anchor: f }) => {
    let d;
    for (; l && l !== f; )
      d = w(l), r(l), l = d;
    r(f);
  }, G = (l, f, d, _, g, m, v, y, x) => {
    f.type === "svg" ? v = "svg" : f.type === "math" && (v = "mathml"), l == null ? Ae(
      f,
      d,
      _,
      g,
      m,
      v,
      y,
      x
    ) : Tt(
      l,
      f,
      g,
      m,
      v,
      y,
      x
    );
  }, Ae = (l, f, d, _, g, m, v, y) => {
    let x, b;
    const { props: E, shapeFlag: S, transition: T, dirs: I } = l;
    if (x = l.el = o(
      l.type,
      m,
      E && E.is,
      E
    ), S & 8 ? a(x, l.children) : S & 16 && Pe(
      l.children,
      x,
      null,
      _,
      g,
      cn(l, m),
      v,
      y
    ), I && Ne(l, null, _, "created"), he(x, l, l.scopeId, v, _), E) {
      for (const N in E)
        N !== "value" && !ft(N) && i(x, N, null, E[N], m, _);
      "value" in E && i(x, "value", null, E.value, m), (b = E.onVnodeBeforeMount) && me(b, _, l);
    }
    I && Ne(l, null, _, "beforeMount");
    const R = ro(g, T);
    R && T.beforeEnter(x), s(x, f, d), ((b = E && E.onVnodeMounted) || R || I) && le(() => {
      b && me(b, _, l), R && T.enter(x), I && Ne(l, null, _, "mounted");
    }, g);
  }, he = (l, f, d, _, g) => {
    if (d && C(l, d), _)
      for (let m = 0; m < _.length; m++)
        C(l, _[m]);
    if (g) {
      let m = g.subTree;
      if (f === m || Cr(m.type) && (m.ssContent === f || m.ssFallback === f)) {
        const v = g.vnode;
        he(
          l,
          v,
          v.scopeId,
          v.slotScopeIds,
          g.parent
        );
      }
    }
  }, Pe = (l, f, d, _, g, m, v, y, x = 0) => {
    for (let b = x; b < l.length; b++) {
      const E = l[b] = y ? Re(l[b]) : be(l[b]);
      F(
        null,
        E,
        f,
        d,
        _,
        g,
        m,
        v,
        y
      );
    }
  }, Tt = (l, f, d, _, g, m, v) => {
    const y = f.el = l.el;
    let { patchFlag: x, dynamicChildren: b, dirs: E } = f;
    x |= l.patchFlag & 16;
    const S = l.props || B, T = f.props || B;
    let I;
    if (d && Ue(d, !1), (I = T.onVnodeBeforeUpdate) && me(I, d, f, l), E && Ne(f, l, d, "beforeUpdate"), d && Ue(d, !0), (S.innerHTML && T.innerHTML == null || S.textContent && T.textContent == null) && a(y, ""), b ? je(
      l.dynamicChildren,
      b,
      y,
      d,
      _,
      cn(f, g),
      m
    ) : v || $(
      l,
      f,
      y,
      null,
      d,
      _,
      cn(f, g),
      m,
      !1
    ), x > 0) {
      if (x & 16)
        st(y, S, T, d, g);
      else if (x & 2 && S.class !== T.class && i(y, "class", null, T.class, g), x & 4 && i(y, "style", S.style, T.style, g), x & 8) {
        const R = f.dynamicProps;
        for (let N = 0; N < R.length; N++) {
          const j = R[N], se = S[j], Y = T[j];
          (Y !== se || j === "value") && i(y, j, se, Y, g, d);
        }
      }
      x & 1 && l.children !== f.children && a(y, f.children);
    } else
      !v && b == null && st(y, S, T, d, g);
    ((I = T.onVnodeUpdated) || E) && le(() => {
      I && me(I, d, f, l), E && Ne(f, l, d, "updated");
    }, _);
  }, je = (l, f, d, _, g, m, v) => {
    for (let y = 0; y < f.length; y++) {
      const x = l[y], b = f[y], E = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === Ce || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lt(x, b) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? p(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          d
        )
      );
      F(
        x,
        b,
        E,
        null,
        _,
        g,
        m,
        v,
        !0
      );
    }
  }, st = (l, f, d, _, g) => {
    if (f !== d) {
      if (f !== B)
        for (const m in f)
          !ft(m) && !(m in d) && i(
            l,
            m,
            f[m],
            null,
            g,
            _
          );
      for (const m in d) {
        if (ft(m))
          continue;
        const v = d[m], y = f[m];
        v !== y && m !== "value" && i(l, m, y, v, g, _);
      }
      "value" in d && i(l, "value", f.value, d.value, g);
    }
  }, Et = (l, f, d, _, g, m, v, y, x) => {
    const b = f.el = l ? l.el : c(""), E = f.anchor = l ? l.anchor : c("");
    let { patchFlag: S, dynamicChildren: T, slotScopeIds: I } = f;
    I && (y = y ? y.concat(I) : I), l == null ? (s(b, d, _), s(E, d, _), Pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      d,
      E,
      g,
      m,
      v,
      y,
      x
    )) : S > 0 && S & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (je(
      l.dynamicChildren,
      T,
      d,
      g,
      m,
      v,
      y
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || g && f === g.subTree) && xr(
      l,
      f,
      !0
      /* shallow */
    )) : $(
      l,
      f,
      d,
      E,
      g,
      m,
      v,
      y,
      x
    );
  }, Ot = (l, f, d, _, g, m, v, y, x) => {
    f.slotScopeIds = y, l == null ? f.shapeFlag & 512 ? g.ctx.activate(
      f,
      d,
      _,
      v,
      x
    ) : Xt(
      f,
      d,
      _,
      g,
      m,
      v,
      x
    ) : Jn(l, f, x);
  }, Xt = (l, f, d, _, g, m, v) => {
    const y = l.component = Io(
      l,
      _,
      g
    );
    if (or(l) && (y.ctx.renderer = Ge), Po(y, !1, v), y.asyncDep) {
      if (g && g.registerDep(y, Q, v), !l.el) {
        const x = y.subTree = Ke(tt);
        D(null, x, f, d), l.placeholder = x.el;
      }
    } else
      Q(
        y,
        l,
        f,
        d,
        g,
        m,
        v
      );
  }, Jn = (l, f, d) => {
    const _ = f.component = l.component;
    if (go(l, f, d))
      if (_.asyncDep && !_.asyncResolved) {
        W(_, f, d);
        return;
      } else
        _.next = f, _.update();
    else
      f.el = l.el, _.vnode = f;
  }, Q = (l, f, d, _, g, m, v) => {
    const y = () => {
      if (l.isMounted) {
        let { next: S, bu: T, u: I, parent: R, vnode: N } = l;
        {
          const ie = yr(l);
          if (ie) {
            S && (S.el = N.el, W(l, S, v)), ie.asyncDep.then(() => {
              l.isUnmounted || y();
            });
            return;
          }
        }
        let j = S, se;
        Ue(l, !1), S ? (S.el = N.el, W(l, S, v)) : S = N, T && tn(T), (se = S.props && S.props.onVnodeBeforeUpdate) && me(se, R, S, N), Ue(l, !0);
        const Y = un(l), ue = l.subTree;
        l.subTree = Y, F(
          ue,
          Y,
          // parent may have changed if it's in a teleport
          p(ue.el),
          // anchor may have changed if it's in a fragment
          At(ue),
          l,
          g,
          m
        ), S.el = Y.el, j === null && mo(l, Y.el), I && le(I, g), (se = S.props && S.props.onVnodeUpdated) && le(
          () => me(se, R, S, N),
          g
        );
      } else {
        let S;
        const { el: T, props: I } = f, { bm: R, m: N, parent: j, root: se, type: Y } = l, ue = pt(f);
        if (Ue(l, !1), R && tn(R), !ue && (S = I && I.onVnodeBeforeMount) && me(S, j, f), Ue(l, !0), T && kt) {
          const ie = () => {
            l.subTree = un(l), kt(
              T,
              l.subTree,
              l,
              g,
              null
            );
          };
          ue && Y.__asyncHydrate ? Y.__asyncHydrate(
            T,
            l,
            ie
          ) : ie();
        } else {
          se.ce && // @ts-expect-error _def is private
          se.ce._def.shadowRoot !== !1 && se.ce._injectChildStyle(Y);
          const ie = l.subTree = un(l);
          F(
            null,
            ie,
            d,
            _,
            l,
            g,
            m
          ), f.el = ie.el;
        }
        if (N && le(N, g), !ue && (S = I && I.onVnodeMounted)) {
          const ie = f;
          le(
            () => me(S, j, ie),
            g
          );
        }
        (f.shapeFlag & 256 || j && pt(j.vnode) && j.vnode.shapeFlag & 256) && l.a && le(l.a, g), l.isMounted = !0, f = d = _ = null;
      }
    };
    l.scope.on();
    const x = l.effect = new $s(y);
    l.scope.off();
    const b = l.update = x.run.bind(x), E = l.job = x.runIfDirty.bind(x);
    E.i = l, E.id = l.uid, x.scheduler = () => Un(E), Ue(l, !0), b();
  }, W = (l, f, d) => {
    f.component = l;
    const _ = l.vnode.props;
    l.vnode = f, l.next = null, Zi(l, f.props, _, d), to(l, f.children, d), Ee(), ns(l), Oe();
  }, $ = (l, f, d, _, g, m, v, y, x = !1) => {
    const b = l && l.children, E = l ? l.shapeFlag : 0, S = f.children, { patchFlag: T, shapeFlag: I } = f;
    if (T > 0) {
      if (T & 128) {
        It(
          b,
          S,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        );
        return;
      } else if (T & 256) {
        Le(
          b,
          S,
          d,
          _,
          g,
          m,
          v,
          y,
          x
        );
        return;
      }
    }
    I & 8 ? (E & 16 && rt(b, g, m), S !== b && a(d, S)) : E & 16 ? I & 16 ? It(
      b,
      S,
      d,
      _,
      g,
      m,
      v,
      y,
      x
    ) : rt(b, g, m, !0) : (E & 8 && a(d, ""), I & 16 && Pe(
      S,
      d,
      _,
      g,
      m,
      v,
      y,
      x
    ));
  }, Le = (l, f, d, _, g, m, v, y, x) => {
    l = l || Xe, f = f || Xe;
    const b = l.length, E = f.length, S = Math.min(b, E);
    let T;
    for (T = 0; T < S; T++) {
      const I = f[T] = x ? Re(f[T]) : be(f[T]);
      F(
        l[T],
        I,
        d,
        null,
        g,
        m,
        v,
        y,
        x
      );
    }
    b > E ? rt(
      l,
      g,
      m,
      !0,
      !1,
      S
    ) : Pe(
      f,
      d,
      _,
      g,
      m,
      v,
      y,
      x,
      S
    );
  }, It = (l, f, d, _, g, m, v, y, x) => {
    let b = 0;
    const E = f.length;
    let S = l.length - 1, T = E - 1;
    for (; b <= S && b <= T; ) {
      const I = l[b], R = f[b] = x ? Re(f[b]) : be(f[b]);
      if (lt(I, R))
        F(
          I,
          R,
          d,
          null,
          g,
          m,
          v,
          y,
          x
        );
      else
        break;
      b++;
    }
    for (; b <= S && b <= T; ) {
      const I = l[S], R = f[T] = x ? Re(f[T]) : be(f[T]);
      if (lt(I, R))
        F(
          I,
          R,
          d,
          null,
          g,
          m,
          v,
          y,
          x
        );
      else
        break;
      S--, T--;
    }
    if (b > S) {
      if (b <= T) {
        const I = T + 1, R = I < E ? f[I].el : _;
        for (; b <= T; )
          F(
            null,
            f[b] = x ? Re(f[b]) : be(f[b]),
            d,
            R,
            g,
            m,
            v,
            y,
            x
          ), b++;
      }
    } else if (b > T)
      for (; b <= S; )
        pe(l[b], g, m, !0), b++;
    else {
      const I = b, R = b, N = /* @__PURE__ */ new Map();
      for (b = R; b <= T; b++) {
        const oe = f[b] = x ? Re(f[b]) : be(f[b]);
        oe.key != null && N.set(oe.key, b);
      }
      let j, se = 0;
      const Y = T - R + 1;
      let ue = !1, ie = 0;
      const it = new Array(Y);
      for (b = 0; b < Y; b++)
        it[b] = 0;
      for (b = I; b <= S; b++) {
        const oe = l[b];
        if (se >= Y) {
          pe(oe, g, m, !0);
          continue;
        }
        let ge;
        if (oe.key != null)
          ge = N.get(oe.key);
        else
          for (j = R; j <= T; j++)
            if (it[j - R] === 0 && lt(oe, f[j])) {
              ge = j;
              break;
            }
        ge === void 0 ? pe(oe, g, m, !0) : (it[ge - R] = b + 1, ge >= ie ? ie = ge : ue = !0, F(
          oe,
          f[ge],
          d,
          null,
          g,
          m,
          v,
          y,
          x
        ), se++);
      }
      const Xn = ue ? io(it) : Xe;
      for (j = Xn.length - 1, b = Y - 1; b >= 0; b--) {
        const oe = R + b, ge = f[oe], Zn = f[oe + 1], Qn = oe + 1 < E ? (
          // #13559, fallback to el placeholder for unresolved async component
          Zn.el || Zn.placeholder
        ) : _;
        it[b] === 0 ? F(
          null,
          ge,
          d,
          Qn,
          g,
          m,
          v,
          y,
          x
        ) : ue && (j < 0 || b !== Xn[j] ? $e(ge, d, Qn, 2) : j--);
      }
    }
  }, $e = (l, f, d, _, g = null) => {
    const { el: m, type: v, transition: y, children: x, shapeFlag: b } = l;
    if (b & 6) {
      $e(l.component.subTree, f, d, _);
      return;
    }
    if (b & 128) {
      l.suspense.move(f, d, _);
      return;
    }
    if (b & 64) {
      v.move(l, f, d, Ge);
      return;
    }
    if (v === Ce) {
      s(m, f, d);
      for (let S = 0; S < x.length; S++)
        $e(x[S], f, d, _);
      s(l.anchor, f, d);
      return;
    }
    if (v === an) {
      q(l, f, d);
      return;
    }
    if (_ !== 2 && b & 1 && y)
      if (_ === 0)
        y.beforeEnter(m), s(m, f, d), le(() => y.enter(m), g);
      else {
        const { leave: S, delayLeave: T, afterLeave: I } = y, R = () => {
          l.ctx.isUnmounted ? r(m) : s(m, f, d);
        }, N = () => {
          m._isLeaving && m[Oi](
            !0
            /* cancelled */
          ), S(m, () => {
            R(), I && I();
          });
        };
        T ? T(m, R, N) : N();
      }
    else
      s(m, f, d);
  }, pe = (l, f, d, _ = !1, g = !1) => {
    const {
      type: m,
      props: v,
      ref: y,
      children: x,
      dynamicChildren: b,
      shapeFlag: E,
      patchFlag: S,
      dirs: T,
      cacheIndex: I
    } = l;
    if (S === -2 && (g = !1), y != null && (Ee(), ht(y, null, d, l, !0), Oe()), I != null && (f.renderCache[I] = void 0), E & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const R = E & 1 && T, N = !pt(l);
    let j;
    if (N && (j = v && v.onVnodeBeforeUnmount) && me(j, f, l), E & 6)
      Dr(l.component, d, _);
    else {
      if (E & 128) {
        l.suspense.unmount(d, _);
        return;
      }
      R && Ne(l, null, f, "beforeUnmount"), E & 64 ? l.type.remove(
        l,
        f,
        d,
        Ge,
        _
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (m !== Ce || S > 0 && S & 64) ? rt(
        b,
        f,
        d,
        !1,
        !0
      ) : (m === Ce && S & 384 || !g && E & 16) && rt(x, f, d), _ && zn(l);
    }
    (N && (j = v && v.onVnodeUnmounted) || R) && le(() => {
      j && me(j, f, l), R && Ne(l, null, f, "unmounted");
    }, d);
  }, zn = (l) => {
    const { type: f, el: d, anchor: _, transition: g } = l;
    if (f === Ce) {
      Fr(d, _);
      return;
    }
    if (f === an) {
      O(l);
      return;
    }
    const m = () => {
      r(d), g && !g.persisted && g.afterLeave && g.afterLeave();
    };
    if (l.shapeFlag & 1 && g && !g.persisted) {
      const { leave: v, delayLeave: y } = g, x = () => v(d, m);
      y ? y(l.el, m, x) : x();
    } else
      m();
  }, Fr = (l, f) => {
    let d;
    for (; l !== f; )
      d = w(l), r(l), l = d;
    r(f);
  }, Dr = (l, f, d) => {
    const { bum: _, scope: g, job: m, subTree: v, um: y, m: x, a: b } = l;
    fs(x), fs(b), _ && tn(_), g.stop(), m && (m.flags |= 8, pe(v, l, f, d)), y && le(y, f), le(() => {
      l.isUnmounted = !0;
    }, f);
  }, rt = (l, f, d, _ = !1, g = !1, m = 0) => {
    for (let v = m; v < l.length; v++)
      pe(l[v], f, d, _, g);
  }, At = (l) => {
    if (l.shapeFlag & 6)
      return At(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = w(l.anchor || l.el), d = f && f[Ti];
    return d ? w(d) : f;
  };
  let Zt = !1;
  const Yn = (l, f, d) => {
    l == null ? f._vnode && pe(f._vnode, null, null, !0) : F(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      d
    ), f._vnode = l, Zt || (Zt = !0, ns(), nr(), Zt = !1);
  }, Ge = {
    p: F,
    um: pe,
    m: $e,
    r: zn,
    mt: Xt,
    mc: Pe,
    pc: $,
    pbc: je,
    n: At,
    o: e
  };
  let Qt, kt;
  return t && ([Qt, kt] = t(
    Ge
  )), {
    render: Yn,
    hydrate: Qt,
    createApp: zi(Yn, Qt)
  };
}
function cn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ue({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ro(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function xr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (A(s) && A(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let c = r[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[i] = Re(r[i]), c.el = o.el), !n && c.patchFlag !== -2 && xr(o, c)), c.type === Yt && // avoid cached text nodes retaining detached dom nodes
      c.patchFlag !== -1 && (c.el = o.el), c.type === tt && !c.el && (c.el = o.el);
    }
}
function io(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const h = e[s];
    if (h !== 0) {
      if (r = n[n.length - 1], e[r] < h) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        c = i + o >> 1, e[n[c]] < h ? i = c + 1 : o = c;
      h < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function yr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : yr(t);
}
function fs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const oo = Symbol.for("v-scx"), lo = () => Ft(oo);
function fn(e, t, n) {
  return vr(e, t, n);
}
function vr(e, t, n = B) {
  const { immediate: s, deep: r, flush: i, once: o } = n, c = z({}, n), u = t && s || !t && i !== "post";
  let h;
  if (St) {
    if (i === "sync") {
      const C = lo();
      h = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!u) {
      const C = () => {
      };
      return C.stop = ae, C.resume = ae, C.pause = ae, C;
    }
  }
  const a = te;
  c.call = (C, M, F) => ve(C, a, M, F);
  let p = !1;
  i === "post" ? c.scheduler = (C) => {
    le(C, a && a.suspense);
  } : i !== "sync" && (p = !0, c.scheduler = (C, M) => {
    M ? C() : Un(C);
  }), c.augmentJob = (C) => {
    t && (C.flags |= 4), p && (C.flags |= 2, a && (C.id = a.uid, C.i = a));
  };
  const w = xi(e, t, c);
  return St && (h ? h.push(w) : u && w()), w;
}
function co(e, t, n) {
  const s = this.proxy, r = J(e) ? e.includes(".") ? Sr(s, e) : () => s[e] : e.bind(s, s);
  let i;
  P(t) ? i = t : (i = t.handler, n = t);
  const o = Ct(this), c = vr(r, i.bind(s), n);
  return o(), c;
}
function Sr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const fo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${De(t)}Modifiers`] || e[`${qe(t)}Modifiers`];
function uo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || B;
  let r = n;
  const i = t.startsWith("update:"), o = i && fo(s, t.slice(7));
  o && (o.trim && (r = n.map((a) => J(a) ? a.trim() : a)), o.number && (r = n.map(Nr)));
  let c, u = s[c = en(t)] || // also try camelCase event handler (#2249)
  s[c = en(De(t))];
  !u && i && (u = s[c = en(qe(t))]), u && ve(
    u,
    e,
    6,
    r
  );
  const h = s[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ve(
      h,
      e,
      6,
      r
    );
  }
}
const ao = /* @__PURE__ */ new WeakMap();
function wr(e, t, n = !1) {
  const s = n ? ao : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, c = !1;
  if (!P(e)) {
    const u = (h) => {
      const a = wr(h, t, !0);
      a && (c = !0, z(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !c ? (K(e) && s.set(e, null), null) : (A(i) ? i.forEach((u) => o[u] = null) : z(o, i), K(e) && s.set(e, o), o);
}
function zt(e, t) {
  return !e || !Vt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, qe(t)) || H(e, t));
}
function un(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: c,
    emit: u,
    render: h,
    renderCache: a,
    props: p,
    data: w,
    setupState: C,
    ctx: M,
    inheritAttrs: F
  } = e, Z = $t(e);
  let D, V;
  try {
    if (n.shapeFlag & 4) {
      const O = r || s, G = O;
      D = be(
        h.call(
          G,
          O,
          a,
          p,
          C,
          w,
          M
        )
      ), V = c;
    } else {
      const O = t;
      D = be(
        O.length > 1 ? O(
          p,
          { attrs: c, slots: o, emit: u }
        ) : O(
          p,
          null
        )
      ), V = t.props ? c : ho(c);
    }
  } catch (O) {
    mt.length = 0, Gt(O, e, 1), D = Ke(tt);
  }
  let q = D;
  if (V && F !== !1) {
    const O = Object.keys(V), { shapeFlag: G } = q;
    O.length && G & 7 && (i && O.some(In) && (V = po(
      V,
      i
    )), q = nt(q, V, !1, !0));
  }
  return n.dirs && (q = nt(q, null, !1, !0), q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs), n.transition && Bn(q, n.transition), D = q, $t(Z), D;
}
const ho = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Vt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, po = (e, t) => {
  const n = {};
  for (const s in e)
    (!In(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function go(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: c, patchFlag: u } = t, h = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? us(s, o, h) : !!o;
    if (u & 8) {
      const a = t.dynamicProps;
      for (let p = 0; p < a.length; p++) {
        const w = a[p];
        if (o[w] !== s[w] && !zt(h, w))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === o ? !1 : s ? o ? us(s, o, h) : !0 : !!o;
  return !1;
}
function us(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (t[i] !== e[i] && !zt(n, i))
      return !0;
  }
  return !1;
}
function mo({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Cr = (e) => e.__isSuspense;
function _o(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : wi(e);
}
const Ce = Symbol.for("v-fgt"), Yt = Symbol.for("v-txt"), tt = Symbol.for("v-cmt"), an = Symbol.for("v-stc"), mt = [];
let fe = null;
function bo(e = !1) {
  mt.push(fe = e ? null : []);
}
function xo() {
  mt.pop(), fe = mt[mt.length - 1] || null;
}
let vt = 1;
function as(e, t = !1) {
  vt += e, e < 0 && fe && t && (fe.hasOnce = !0);
}
function yo(e) {
  return e.dynamicChildren = vt > 0 ? fe || Xe : null, xo(), vt > 0 && fe && fe.push(e), e;
}
function vo(e, t, n, s, r, i) {
  return yo(
    Ye(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Tr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Er = ({ key: e }) => e ?? null, Dt = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || ne(e) || P(e) ? { i: xe, r: e, k: t, f: !!n } : e : null);
function Ye(e, t = null, n = null, s = 0, r = null, i = e === Ce ? 0 : 1, o = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Er(t),
    ref: t && Dt(t),
    scopeId: rr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: xe
  };
  return c ? (qn(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= J(n) ? 8 : 16), vt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  fe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && fe.push(u), u;
}
const Ke = So;
function So(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Ui) && (e = tt), Tr(e)) {
    const c = nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && qn(c, n), vt > 0 && !i && fe && (c.shapeFlag & 6 ? fe[fe.indexOf(e)] = c : fe.push(c)), c.patchFlag = -2, c;
  }
  if (Do(e) && (e = e.__vccOpts), t) {
    t = wo(t);
    let { class: c, style: u } = t;
    c && !J(c) && (t.class = Mn(c)), K(u) && (Nn(u) && !A(u) && (u = z({}, u)), t.style = _t(u));
  }
  const o = J(e) ? 1 : Cr(e) ? 128 : Ei(e) ? 64 : K(e) ? 4 : P(e) ? 2 : 0;
  return Ye(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function wo(e) {
  return e ? Nn(e) || hr(e) ? z({}, e) : e : null;
}
function nt(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: c, transition: u } = e, h = t ? To(r || {}, t) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Er(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? A(i) ? i.concat(Dt(t)) : [i, Dt(t)] : Dt(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ce ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && nt(e.ssContent),
    ssFallback: e.ssFallback && nt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && s && Bn(
    a,
    u.clone(a)
  ), a;
}
function Co(e = " ", t = 0) {
  return Ke(Yt, null, e, t);
}
function be(e) {
  return e == null || typeof e == "boolean" ? Ke(tt) : A(e) ? Ke(
    Ce,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tr(e) ? Re(e) : Ke(Yt, null, String(e));
}
function Re(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : nt(e);
}
function qn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), qn(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !hr(t) ? t._ctx = xe : r === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    P(t) ? (t = { default: t, _ctx: xe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Co(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function To(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Mn([t.class, s.class]));
      else if (r === "style")
        t.style = _t([t.style, s.style]);
      else if (Vt(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(A(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function me(e, t, n, s = null) {
  ve(e, t, 7, [
    n,
    s
  ]);
}
const Eo = ur();
let Oo = 0;
function Io(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Eo, i = {
    uid: Oo++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Gr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: gr(s, r),
    emitsOptions: wr(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = uo.bind(null, i), e.ce && e.ce(i), i;
}
let te = null;
const Ao = () => te || xe;
let Bt, Tn;
{
  const e = qt(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Bt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), Tn = t(
    "__VUE_SSR_SETTERS__",
    (n) => St = n
  );
}
const Ct = (e) => {
  const t = te;
  return Bt(e), e.scope.on(), () => {
    e.scope.off(), Bt(t);
  };
}, ds = () => {
  te && te.scope.off(), Bt(null);
};
function Or(e) {
  return e.vnode.shapeFlag & 4;
}
let St = !1;
function Po(e, t = !1, n = !1) {
  t && Tn(t);
  const { props: s, children: r } = e.vnode, i = Or(e);
  Xi(e, s, i, t), eo(e, r, n || t);
  const o = i ? Mo(e, t) : void 0;
  return t && Tn(!1), o;
}
function Mo(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Bi);
  const { setup: s } = n;
  if (s) {
    Ee();
    const r = e.setupContext = s.length > 1 ? Fo(e) : null, i = Ct(e), o = wt(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), c = Ps(o);
    if (Oe(), i(), (c || e.sp) && !pt(e) && ir(e), c) {
      if (o.then(ds, ds), t)
        return o.then((u) => {
          hs(e, u, t);
        }).catch((u) => {
          Gt(u, e, 0);
        });
      e.asyncDep = o;
    } else
      hs(e, o, t);
  } else
    Ir(e, t);
}
function hs(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) && (e.setupState = ks(t)), Ir(e, n);
}
let ps;
function Ir(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ps && !s.render) {
      const r = s.template || Vn(e).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = e.appContext.config, { delimiters: c, compilerOptions: u } = s, h = z(
          z(
            {
              isCustomElement: i,
              delimiters: c
            },
            o
          ),
          u
        );
        s.render = ps(r, h);
      }
    }
    e.render = s.render || ae;
  }
  {
    const r = Ct(e);
    Ee();
    try {
      Vi(e);
    } finally {
      Oe(), r();
    }
  }
}
const Ro = {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function Fo(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ro),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Gn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ks(hi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in gt)
        return gt[n](e);
    },
    has(t, n) {
      return n in t || n in gt;
    }
  })) : e.proxy;
}
function Do(e) {
  return P(e) && "__vccOpts" in e;
}
const Ho = (e, t) => _i(e, t, St), jo = "3.5.22";
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let En;
const gs = typeof window < "u" && window.trustedTypes;
if (gs)
  try {
    En = /* @__PURE__ */ gs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ar = En ? (e) => En.createHTML(e) : (e) => e, Lo = "http://www.w3.org/2000/svg", $o = "http://www.w3.org/1998/Math/MathML", we = typeof document < "u" ? document : null, ms = we && /* @__PURE__ */ we.createElement("template"), No = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? we.createElementNS(Lo, e) : t === "mathml" ? we.createElementNS($o, e) : n ? we.createElement(e, { is: n }) : we.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => we.createTextNode(e),
  createComment: (e) => we.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => we.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      ms.innerHTML = Ar(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ms.content;
      if (s === "svg" || s === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Uo = Symbol("_vtc");
function Bo(e, t, n) {
  const s = e[Uo];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const _s = Symbol("_vod"), Vo = Symbol("_vsh"), Wo = Symbol(""), Ko = /(?:^|;)\s*display\s*:/;
function qo(e, t, n) {
  const s = e.style, r = J(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (J(t))
        for (const o of t.split(";")) {
          const c = o.slice(0, o.indexOf(":")).trim();
          n[c] == null && Ht(s, c, "");
        }
      else
        for (const o in t)
          n[o] == null && Ht(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), Ht(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[Wo];
      o && (n += ";" + o), s.cssText = n, i = Ko.test(n);
    }
  } else
    t && e.removeAttribute("style");
  _s in e && (e[_s] = i ? s.display : "", e[Vo] && (s.display = "none"));
}
const bs = /\s*!important$/;
function Ht(e, t, n) {
  if (A(n))
    n.forEach((s) => Ht(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Go(e, t);
    bs.test(n) ? e.setProperty(
      qe(s),
      n.replace(bs, ""),
      "important"
    ) : e[s] = n;
  }
}
const xs = ["Webkit", "Moz", "ms"], dn = {};
function Go(e, t) {
  const n = dn[t];
  if (n)
    return n;
  let s = De(t);
  if (s !== "filter" && s in e)
    return dn[t] = s;
  s = Fs(s);
  for (let r = 0; r < xs.length; r++) {
    const i = xs[r] + s;
    if (i in e)
      return dn[t] = i;
  }
  return t;
}
const ys = "http://www.w3.org/1999/xlink";
function vs(e, t, n, s, r, i = qr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ys, t.slice(6, t.length)) : e.setAttributeNS(ys, t, n) : n == null || i && !Hs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : He(n) ? String(n) : n
  );
}
function Ss(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ar(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const c = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Hs(n) : n == null && c === "string" ? (n = "", o = !0) : c === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function Jo(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function zo(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ws = Symbol("_vei");
function Yo(e, t, n, s, r = null) {
  const i = e[ws] || (e[ws] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [c, u] = Xo(t);
    if (s) {
      const h = i[t] = ko(
        s,
        r
      );
      Jo(e, c, h, u);
    } else
      o && (zo(e, c, o, u), i[t] = void 0);
  }
}
const Cs = /(?:Once|Passive|Capture)$/;
function Xo(e) {
  let t;
  if (Cs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Cs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : qe(e.slice(2)), t];
}
let hn = 0;
const Zo = /* @__PURE__ */ Promise.resolve(), Qo = () => hn || (Zo.then(() => hn = 0), hn = Date.now());
function ko(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ve(
      el(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Qo(), n;
}
function el(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const Ts = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, tl = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Bo(e, s, o) : t === "style" ? qo(e, n, s) : Vt(t) ? In(t) || Yo(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : nl(e, t, s, o)) ? (Ss(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && vs(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(s)) ? Ss(e, De(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), vs(e, t, s, o));
};
function nl(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ts(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ts(t) && J(n) ? !1 : t in e;
}
const sl = /* @__PURE__ */ z({ patchProp: tl }, No);
let Es;
function rl() {
  return Es || (Es = no(sl));
}
const Pr = (...e) => {
  const t = rl().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = ol(s);
    if (!r)
      return;
    const i = t._component;
    !P(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, il(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
};
function il(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ol(e) {
  return J(e) ? document.querySelector(e) : e;
}
const ll = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, cl = {
  name: "ChatWindow",
  props: {
    config: {
      type: Object,
      required: !0
    },
    containerId: {
      type: String,
      required: !0
    }
  },
  computed: {
    chatWindowStyle() {
      return {
        // 位置和布局
        position: "fixed",
        top: "50px",
        left: "50px",
        // 背景和边框
        background: "white",
        border: `3px solid ${this.config.primaryColor || "#1890ff"}`,
        borderRadius: "8px",
        // 阴影
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        // 尺寸
        padding: "20px",
        minWidth: "300px",
        // 层级和字体
        zIndex: "10000",
        fontFamily: "Arial, sans-serif",
        // 其他
        boxSizing: "border-box"
      };
    },
    buttonStyle() {
      return {
        // 按钮基础样式
        background: this.config.primaryColor || "#1890ff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px 16px",
        // 字体
        fontSize: "14px",
        fontFamily: "Arial, sans-serif",
        // 交互
        cursor: "pointer",
        // 布局
        marginTop: "10px",
        // 过渡效果
        transition: "background-color 0.2s ease",
        // 鼠标悬停效果
        ":hover": {
          background: this.config.primaryColor ? this.darkenColor(this.config.primaryColor, 20) : "#096dd9"
        }
      };
    }
  },
  methods: {
    testClick() {
      alert("组件工作正常！Config: " + this.config.configId);
    },
    darkenColor(e, t) {
      const n = parseInt(e.replace("#", ""), 16), s = Math.round(2.55 * t), r = (n >> 16) - s, i = (n >> 8 & 255) - s, o = (n & 255) - s;
      return "#" + (16777216 + (r < 255 ? r < 1 ? 0 : r : 255) * 65536 + (i < 255 ? i < 1 ? 0 : i : 255) * 256 + (o < 255 ? o < 1 ? 0 : o : 255)).toString(16).slice(1);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const e = this.$el.querySelector("button");
      e && (e.addEventListener("mouseenter", () => {
        const t = this.config.primaryColor || "#1890ff";
        e.style.backgroundColor = this.darkenColor(t, 20);
      }), e.addEventListener("mouseleave", () => {
        e.style.backgroundColor = this.config.primaryColor || "#1890ff";
      }));
    });
  }
};
function fl(e, t, n, s, r, i) {
  return bo(), vo("div", {
    class: "abot-chat-window",
    style: _t(i.chatWindowStyle)
  }, [
    t[1] || (t[1] = Ye("h3", null, "🎯 ABot客服组件", -1)),
    Ye("p", null, "Config: " + pn(n.config.configId), 1),
    Ye("p", null, "Container: " + pn(n.containerId), 1),
    Ye("button", {
      onClick: t[0] || (t[0] = (...o) => i.testClick && i.testClick(...o)),
      style: _t(i.buttonStyle)
    }, " 测试按钮 ", 4)
  ], 4);
}
const Mr = /* @__PURE__ */ ll(cl, [["render", fl]]);
function Os() {
  console.log("🚀 ABot开始初始化");
  let e = ul();
  console.log("📝 获取到Config ID:", e);
  const t = `abot-container-${e}`;
  Rr(t), Pr(Mr, {
    config: {
      configId: e,
      theme: "light",
      position: "bottom-right",
      primaryColor: "#1890ff",
      headerText: "在线客服",
      autoOpen: !0
    },
    containerId: t
  }).mount(`#${t}`), console.log("✅ ABot初始化完成");
}
function ul() {
  const e = document.getElementsByTagName("script");
  for (let t of e)
    if (t.src && t.src.includes("widget.js"))
      try {
        return new URL(t.src).searchParams.get("config") || "default";
      } catch {
        return console.warn("URL解析失败，使用默认config"), "default";
      }
  return "default";
}
function Rr(e) {
  if (document.getElementById(e))
    return;
  const t = document.createElement("div");
  t.id = e, document.body.appendChild(t), console.log("📦 创建容器:", e);
}
window.ABot = {
  init: function(e) {
    const t = e.configId || "manual", n = `abot-container-${t}`;
    Rr(n), Pr(Mr, {
      config: { ...e, configId: t },
      containerId: n
    }).mount(`#${n}`), console.log("✅ 手动初始化完成");
  }
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Os) : Os();
