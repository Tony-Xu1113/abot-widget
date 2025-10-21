/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(","))
    t[n] = 1;
  return (n) => n in t;
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], z = () => {
}, Dr = () => !1, Bt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ln = (e) => e.startsWith("onUpdate:"), G = Object.assign, po = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hs = Object.prototype.hasOwnProperty, j = (e, t) => Hs.call(e, t), T = Array.isArray, it = (e) => bn(e) === "[object Map]", wr = (e) => bn(e) === "[object Set]", $ = (e) => typeof e == "function", J = (e) => typeof e == "string", tt = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", ho = (e) => (K(e) || $(e)) && $(e.then) && $(e.catch), xr = Object.prototype.toString, bn = (e) => xr.call(e), go = (e) => bn(e).slice(8, -1), Vr = (e) => bn(e) === "[object Object]", mo = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $t = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ls = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Us = /-\w/g, ye = yn(
  (e) => e.replace(Us, (t) => t.slice(1).toUpperCase())
), Bs = /\B([A-Z])/g, Ze = yn(
  (e) => e.replace(Bs, "-$1").toLowerCase()
), On = yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), rt = yn(
  (e) => e ? `on${On(e)}` : ""
), ct = (e, t) => !Object.is(e, t), wt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Ws = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Uo;
const Wt = () => Uo || (Uo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = J(o) ? Gs(o) : Dn(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (J(e) || K(e))
    return e;
}
const Ks = /;(?![^(]*\))/g, ks = /:([^]+)/, qs = /\/\*[^]*?\*\//g;
function Gs(e) {
  const t = {};
  return e.replace(qs, "").split(Ks).forEach((n) => {
    if (n) {
      const o = n.split(ks);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function _o(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = _o(e[n]);
      o && (t += o + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Js = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ys = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", zs = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Xs = /* @__PURE__ */ Ke(Js), Zs = /* @__PURE__ */ Ke(Ys), Qs = /* @__PURE__ */ Ke(zs), ei = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ti = /* @__PURE__ */ Ke(ei);
function Sr(e) {
  return !!e || e === "";
}
const Cr = (e) => !!(e && e.__v_isRef === !0), Tr = (e) => J(e) ? e : e == null ? "" : T(e) || K(e) && (e.toString === xr || !$(e.toString)) ? Cr(e) ? Tr(e.value) : JSON.stringify(e, $r, 2) : String(e), $r = (e, t) => Cr(t) ? $r(e, t.value) : it(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[Fn(o, s) + " =>"] = r, n),
    {}
  )
} : wr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Fn(n))
} : tt(t) ? Fn(t) : K(t) && !T(t) && !Vr(t) ? String(t) : t, Fn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    tt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function we(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let fe;
class ni {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = fe, !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(
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
      const n = fe;
      try {
        return fe = this, t();
      } finally {
        fe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && we("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = fe, fe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (fe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
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
function oi() {
  return fe;
}
let U;
const jn = /* @__PURE__ */ new WeakSet();
class Ir {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, fe && fe.active && fe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, jn.has(this) && (jn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Mr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bo(this), Pr(this);
    const t = U, n = Oe;
    U = this, Oe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && U !== this && we(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Rr(this), U = t, Oe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        No(t);
      this.deps = this.depsTail = void 0, Bo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? jn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yn(this) && this.run();
  }
  get dirty() {
    return Yn(this);
  }
}
let Ar = 0, It, At;
function Mr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = At, At = e;
    return;
  }
  e.next = It, It = e;
}
function Eo() {
  Ar++;
}
function vo() {
  if (--Ar > 0)
    return;
  if (At) {
    let t = At;
    for (At = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; It; ) {
    let t = It;
    for (It = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e)
    throw e;
}
function Pr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rr(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), No(o), ri(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Fr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Fr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ft) || (e.globalVersion = Ft, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, o = Oe;
  U = e, Oe = !0;
  try {
    Pr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ct(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    U = n, Oe = o, Rr(e), e.flags &= -3;
  }
}
function No(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      No(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ri(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Oe = !0;
const jr = [];
function xe() {
  jr.push(Oe), Oe = !1;
}
function Ve() {
  const e = jr.pop();
  Oe = e === void 0 ? !0 : e;
}
function Bo(e) {
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
let Ft = 0;
class si {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Hr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !Oe || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new si(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Lr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = o);
    }
    return process.env.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      G(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Ft++, this.notify(t);
  }
  notify(t) {
    Eo();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            G(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      vo();
    }
  }
}
function Lr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Lr(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const zn = /* @__PURE__ */ new WeakMap(), lt = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Xn = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), jt = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Y(e, t, n) {
  if (Oe && U) {
    let o = zn.get(e);
    o || zn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new Hr()), r.map = o, r.key = n), process.env.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function Ae(e, t, n, o, r, s) {
  const i = zn.get(e);
  if (!i) {
    Ft++;
    return;
  }
  const l = (f) => {
    f && (process.env.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: s
    }) : f.trigger());
  };
  if (Eo(), t === "clear")
    i.forEach(l);
  else {
    const f = T(e), d = f && mo(n);
    if (f && n === "length") {
      const p = Number(o);
      i.forEach((a, g) => {
        (g === "length" || g === jt || !tt(g) && g >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(jt)), t) {
        case "add":
          f ? d && l(i.get("length")) : (l(i.get(lt)), it(e) && l(i.get(Xn)));
          break;
        case "delete":
          f || (l(i.get(lt)), it(e) && l(i.get(Xn)));
          break;
        case "set":
          it(e) && l(i.get(lt));
          break;
      }
  }
  vo();
}
function gt(e) {
  const t = M(e);
  return t === e ? t : (Y(t, "iterate", jt), me(e) ? t : t.map(de));
}
function bo(e) {
  return Y(e = M(e), "iterate", jt), e;
}
const ii = {
  __proto__: null,
  [Symbol.iterator]() {
    return Hn(this, Symbol.iterator, de);
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => T(t) ? gt(t) : t)
    );
  },
  entries() {
    return Hn(this, "entries", (e) => (e[1] = de(e[1]), e));
  },
  every(e, t) {
    return je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return je(this, "filter", e, t, (n) => n.map(de), arguments);
  },
  find(e, t) {
    return je(this, "find", e, t, de, arguments);
  },
  findIndex(e, t) {
    return je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return je(this, "findLast", e, t, de, arguments);
  },
  findLastIndex(e, t) {
    return je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ln(this, "includes", e);
  },
  indexOf(...e) {
    return Ln(this, "indexOf", e);
  },
  join(e) {
    return gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ln(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return xt(this, "pop");
  },
  push(...e) {
    return xt(this, "push", e);
  },
  reduce(e, ...t) {
    return Wo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Wo(this, "reduceRight", e, t);
  },
  shift() {
    return xt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return xt(this, "splice", e);
  },
  toReversed() {
    return gt(this).toReversed();
  },
  toSorted(e) {
    return gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return xt(this, "unshift", e);
  },
  values() {
    return Hn(this, "values", de);
  }
};
function Hn(e, t, n) {
  const o = bo(e), r = o[t]();
  return o !== e && !me(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.done || (s.value = n(s.value)), s;
  }), r;
}
const ci = Array.prototype;
function je(e, t, n, o, r, s) {
  const i = bo(e), l = i !== e && !me(e), f = i[t];
  if (f !== ci[t]) {
    const a = f.apply(e, s);
    return l ? de(a) : a;
  }
  let d = n;
  i !== e && (l ? d = function(a, g) {
    return n.call(this, de(a), g, e);
  } : n.length > 2 && (d = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const p = f.call(i, d, o);
  return l && r ? r(p) : p;
}
function Wo(e, t, n, o) {
  const r = bo(e);
  let s = n;
  return r !== e && (me(e) ? n.length > 3 && (s = function(i, l, f) {
    return n.call(this, i, l, f, e);
  }) : s = function(i, l, f) {
    return n.call(this, i, de(l), f, e);
  }), r[t](s, ...o);
}
function Ln(e, t, n) {
  const o = M(e);
  Y(o, "iterate", jt);
  const r = o[t](...n);
  return (r === -1 || r === !1) && un(n[0]) ? (n[0] = M(n[0]), o[t](...n)) : r;
}
function xt(e, t, n = []) {
  xe(), Eo();
  const o = M(e)[t].apply(e, n);
  return vo(), Ve(), o;
}
const li = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), Ur = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(tt)
);
function fi(e) {
  tt(e) || (e = String(e));
  const t = M(this);
  return Y(t, "has", e), t.hasOwnProperty(e);
}
class Br {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip")
      return t.__v_skip;
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? Jr : Gr : s ? qr : kr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = T(t);
    if (!r) {
      let f;
      if (i && (f = ii[n]))
        return f;
      if (n === "hasOwnProperty")
        return fi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      X(t) ? t : o
    );
    if ((tt(n) ? Ur.has(n) : li(n)) || (r || Y(t, "get", n), s))
      return l;
    if (X(l)) {
      const f = i && mo(n) ? l : l.value;
      return r && K(f) ? Qn(f) : f;
    }
    return K(l) ? r ? Qn(l) : yo(l) : l;
  }
}
class Wr extends Br {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const f = Qe(s);
      if (!me(o) && !Qe(o) && (s = M(s), o = M(o)), !T(t) && X(s) && !X(o))
        return f ? (process.env.NODE_ENV !== "production" && we(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (s.value = o, !0);
    }
    const i = T(t) && mo(n) ? Number(n) < t.length : j(t, n), l = Reflect.set(
      t,
      n,
      o,
      X(t) ? t : r
    );
    return t === M(r) && (i ? ct(o, s) && Ae(t, "set", n, o, s) : Ae(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = j(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Ae(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!tt(n) || !Ur.has(n)) && Y(t, "has", n), o;
  }
  ownKeys(t) {
    return Y(
      t,
      "iterate",
      T(t) ? "length" : lt
    ), Reflect.ownKeys(t);
  }
}
class Kr extends Br {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && we(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && we(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ui = /* @__PURE__ */ new Wr(), ai = /* @__PURE__ */ new Kr(), pi = /* @__PURE__ */ new Wr(!0), di = /* @__PURE__ */ new Kr(!0), Zn = (e) => e, zt = (e) => Reflect.getPrototypeOf(e);
function hi(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = M(r), i = it(s), l = e === "entries" || e === Symbol.iterator && i, f = e === "keys" && i, d = r[e](...o), p = n ? Zn : t ? eo : de;
    return !t && Y(
      s,
      "iterate",
      f ? Xn : lt
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = d.next();
        return g ? { value: a, done: g } : {
          value: l ? [p(a[0]), p(a[1])] : p(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Xt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      we(
        `${On(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function gi(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, i = M(s), l = M(r);
      e || (ct(r, l) && Y(i, "get", r), Y(i, "get", l));
      const { has: f } = zt(i), d = t ? Zn : e ? eo : de;
      if (f.call(i, r))
        return d(s.get(r));
      if (f.call(i, l))
        return d(s.get(l));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && Y(M(r), "iterate", lt), r.size;
    },
    has(r) {
      const s = this.__v_raw, i = M(s), l = M(r);
      return e || (ct(r, l) && Y(i, "has", r), Y(i, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    },
    forEach(r, s) {
      const i = this, l = i.__v_raw, f = M(l), d = t ? Zn : e ? eo : de;
      return !e && Y(f, "iterate", lt), l.forEach((p, a) => r.call(s, d(p), d(a), i));
    }
  };
  return G(
    n,
    e ? {
      add: Xt("add"),
      set: Xt("set"),
      delete: Xt("delete"),
      clear: Xt("clear")
    } : {
      add(r) {
        !t && !me(r) && !Qe(r) && (r = M(r));
        const s = M(this);
        return zt(s).has.call(s, r) || (s.add(r), Ae(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !me(s) && !Qe(s) && (s = M(s));
        const i = M(this), { has: l, get: f } = zt(i);
        let d = l.call(i, r);
        d ? process.env.NODE_ENV !== "production" && Ko(i, l, r) : (r = M(r), d = l.call(i, r));
        const p = f.call(i, r);
        return i.set(r, s), d ? ct(s, p) && Ae(i, "set", r, s, p) : Ae(i, "add", r, s), this;
      },
      delete(r) {
        const s = M(this), { has: i, get: l } = zt(s);
        let f = i.call(s, r);
        f ? process.env.NODE_ENV !== "production" && Ko(s, i, r) : (r = M(r), f = i.call(s, r));
        const d = l ? l.call(s, r) : void 0, p = s.delete(r);
        return f && Ae(s, "delete", r, void 0, d), p;
      },
      clear() {
        const r = M(this), s = r.size !== 0, i = process.env.NODE_ENV !== "production" ? it(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return s && Ae(
          r,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = hi(r, e, t);
  }), n;
}
function wn(e, t) {
  const n = gi(e, t);
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    j(n, r) && r in o ? n : o,
    r,
    s
  );
}
const mi = {
  get: /* @__PURE__ */ wn(!1, !1)
}, _i = {
  get: /* @__PURE__ */ wn(!1, !0)
}, Ei = {
  get: /* @__PURE__ */ wn(!0, !1)
}, vi = {
  get: /* @__PURE__ */ wn(!0, !0)
};
function Ko(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const r = go(e);
    we(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const kr = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap();
function Ni(e) {
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
function bi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ni(go(e));
}
function yo(e) {
  return Qe(e) ? e : xn(
    e,
    !1,
    ui,
    mi,
    kr
  );
}
function yi(e) {
  return xn(
    e,
    !1,
    pi,
    _i,
    qr
  );
}
function Qn(e) {
  return xn(
    e,
    !0,
    ai,
    Ei,
    Gr
  );
}
function Me(e) {
  return xn(
    e,
    !0,
    di,
    vi,
    Jr
  );
}
function xn(e, t, n, o, r) {
  if (!K(e))
    return process.env.NODE_ENV !== "production" && we(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = bi(e);
  if (s === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, l), l;
}
function Et(e) {
  return Qe(e) ? Et(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Qe(e) {
  return !!(e && e.__v_isReadonly);
}
function me(e) {
  return !!(e && e.__v_isShallow);
}
function un(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Oi(e) {
  return !j(e, "__v_skip") && Object.isExtensible(e) && fn(e, "__v_skip", !0), e;
}
const de = (e) => K(e) ? yo(e) : e, eo = (e) => K(e) ? Qn(e) : e;
function X(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Di(e) {
  return X(e) ? e.value : e;
}
const wi = {
  get: (e, t, n) => t === "__v_raw" ? e : Di(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return X(r) && !X(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Yr(e) {
  return Et(e) ? e : new Proxy(e, wi);
}
class xi {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Hr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ft - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Mr(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Fr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && we("Write operation failed: computed value is readonly");
  }
}
function Vi(e, t, n = !1) {
  let o, r;
  $(e) ? o = e : (o = e.get, r = e.set);
  const s = new xi(o, r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (s.onTrack = t.onTrack, s.onTrigger = t.onTrigger), s;
}
const Zt = {}, an = /* @__PURE__ */ new WeakMap();
let st;
function Si(e, t = !1, n = st) {
  if (n) {
    let o = an.get(n);
    o || an.set(n, o = []), o.push(e);
  } else
    process.env.NODE_ENV !== "production" && !t && we(
      "onWatcherCleanup() was called when there was no active watcher to associate with."
    );
}
function Ci(e, t, n = W) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: l, call: f } = n, d = (S) => {
    (n.onWarn || we)(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (S) => r ? S : me(S) || r === !1 || r === 0 ? Xe(S, 1) : Xe(S);
  let a, g, D, I, V = !1, Z = !1;
  if (X(e) ? (g = () => e.value, V = me(e)) : Et(e) ? (g = () => p(e), V = !0) : T(e) ? (Z = !0, V = e.some((S) => Et(S) || me(S)), g = () => e.map((S) => {
    if (X(S))
      return S.value;
    if (Et(S))
      return p(S);
    if ($(S))
      return f ? f(S, 2) : S();
    process.env.NODE_ENV !== "production" && d(S);
  })) : $(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (D) {
      xe();
      try {
        D();
      } finally {
        Ve();
      }
    }
    const S = st;
    st = a;
    try {
      return f ? f(e, 3, [I]) : e(I);
    } finally {
      st = S;
    }
  } : (g = z, process.env.NODE_ENV !== "production" && d(e)), t && r) {
    const S = g, Q = r === !0 ? 1 / 0 : r;
    g = () => Xe(S(), Q);
  }
  const q = oi(), L = () => {
    a.stop(), q && q.active && po(q.effects, a);
  };
  if (s && t) {
    const S = t;
    t = (...Q) => {
      S(...Q), L();
    };
  }
  let H = Z ? new Array(e.length).fill(Zt) : Zt;
  const ue = (S) => {
    if (!(!(a.flags & 1) || !a.dirty && !S))
      if (t) {
        const Q = a.run();
        if (r || V || (Z ? Q.some((_e, te) => ct(_e, H[te])) : ct(Q, H))) {
          D && D();
          const _e = st;
          st = a;
          try {
            const te = [
              Q,
              // pass undefined as the old value when it's changed for the first time
              H === Zt ? void 0 : Z && H[0] === Zt ? [] : H,
              I
            ];
            H = Q, f ? f(t, 3, te) : (
              // @ts-expect-error
              t(...te)
            );
          } finally {
            st = _e;
          }
        }
      } else
        a.run();
  };
  return l && l(ue), a = new Ir(g), a.scheduler = i ? () => i(ue, !1) : ue, I = (S) => Si(S, !1, a), D = a.onStop = () => {
    const S = an.get(a);
    if (S) {
      if (f)
        f(S, 4);
      else
        for (const Q of S)
          Q();
      an.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ue(!0) : H = a.run() : i ? i(ue.bind(null, !0), !0) : a.run(), L.pause = a.pause.bind(a), L.resume = a.resume.bind(a), L.stop = L, L;
}
function Xe(e, t = 1 / 0, n) {
  if (t <= 0 || !K(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, X(e))
    Xe(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      Xe(e[o], t, n);
  else if (wr(e) || it(e))
    e.forEach((o) => {
      Xe(o, t, n);
    });
  else if (Vr(e)) {
    for (const o in e)
      Xe(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Xe(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ft = [];
function Qt(e) {
  ft.push(e);
}
function en() {
  ft.pop();
}
let Un = !1;
function y(e, ...t) {
  if (Un)
    return;
  Un = !0, xe();
  const n = ft.length ? ft[ft.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Ti();
  if (o)
    bt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, l;
          return (l = (i = s.toString) == null ? void 0 : i.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${$n(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...$i(r)), console.warn(...s);
  }
  Ve(), Un = !1;
}
function Ti() {
  let e = ft[ft.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function $i(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ii(n));
  }), t;
}
function Ii({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${$n(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Ai(e.props), s] : [r + s];
}
function Ai(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...zr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function zr(e, t, n) {
  return J(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : X(t) ? (t = zr(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const Oo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function bt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Kt(r, t, n);
  }
}
function Re(e, t, n, o) {
  if ($(e)) {
    const r = bt(e, t, n, o);
    return r && ho(r) && r.catch((s) => {
      Kt(s, t, n);
    }), r;
  }
  if (T(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(Re(e[s], t, n, o));
    return r;
  } else
    process.env.NODE_ENV !== "production" && y(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Kt(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || W;
  if (t) {
    let l = t.parent;
    const f = t.proxy, d = process.env.NODE_ENV !== "production" ? Oo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, f, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      xe(), bt(s, null, 10, [
        e,
        f,
        d
      ]), Ve();
      return;
    }
  }
  Mi(e, n, r, o, i);
}
function Mi(e, t, n, o = !0, r = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = Oo[t];
    if (n && Qt(n), y(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && en(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const se = [];
let $e = -1;
const vt = [];
let Ye = null, mt = 0;
const Xr = /* @__PURE__ */ Promise.resolve();
let pn = null;
const Pi = 100;
function Ri(e) {
  const t = pn || Xr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Fi(e) {
  let t = $e + 1, n = se.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = se[o], s = Ht(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Vn(e) {
  if (!(e.flags & 1)) {
    const t = Ht(e), n = se[se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ht(n) ? se.push(e) : se.splice(Fi(t), 0, e), e.flags |= 1, Zr();
  }
}
function Zr() {
  pn || (pn = Xr.then(ts));
}
function Qr(e) {
  T(e) ? vt.push(...e) : Ye && e.id === -1 ? Ye.splice(mt + 1, 0, e) : e.flags & 1 || (vt.push(e), e.flags |= 1), Zr();
}
function ko(e, t, n = $e + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < se.length; n++) {
    const o = se[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Do(t, o))
        continue;
      se.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function es(e) {
  if (vt.length) {
    const t = [...new Set(vt)].sort(
      (n, o) => Ht(n) - Ht(o)
    );
    if (vt.length = 0, Ye) {
      Ye.push(...t);
      return;
    }
    for (Ye = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), mt = 0; mt < Ye.length; mt++) {
      const n = Ye[mt];
      process.env.NODE_ENV !== "production" && Do(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ye = null, mt = 0;
  }
}
const Ht = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ts(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Do(e, n) : z;
  try {
    for ($e = 0; $e < se.length; $e++) {
      const n = se[$e];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), bt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; $e < se.length; $e++) {
      const n = se[$e];
      n && (n.flags &= -2);
    }
    $e = -1, se.length = 0, es(e), pn = null, (se.length || vt.length) && ts(e);
  }
}
function Do(e, t) {
  const n = e.get(t) || 0;
  if (n > Pi) {
    const o = t.i, r = o && As(o.type);
    return Kt(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Pe = !1;
const tn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Wt().__VUE_HMR_RUNTIME__ = {
  createRecord: Bn(ns),
  rerender: Bn(Li),
  reload: Bn(Ui)
});
const pt = /* @__PURE__ */ new Map();
function ji(e) {
  const t = e.type.__hmrId;
  let n = pt.get(t);
  n || (ns(t, e.type), n = pt.get(t)), n.instances.add(e);
}
function Hi(e) {
  pt.get(e.type.__hmrId).instances.delete(e);
}
function ns(e, t) {
  return pt.has(e) ? !1 : (pt.set(e, {
    initialDef: dn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function dn(e) {
  return Ms(e) ? e.__vccOpts : e;
}
function Li(e, t) {
  const n = pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, dn(o.type).render = t), o.renderCache = [], Pe = !0, o.job.flags & 8 || o.update(), Pe = !1;
  }));
}
function Ui(e, t) {
  const n = pt.get(e);
  if (!n)
    return;
  t = dn(t), qo(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], i = dn(s.type);
    let l = tn.get(i);
    l || (i !== n.initialDef && qo(i, t), tn.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? Vn(() => {
      s.job.flags & 8 || (Pe = !0, s.parent.update(), Pe = !1, l.delete(s));
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Qr(() => {
    tn.clear();
  });
}
function qo(e, t) {
  G(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Bn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let be, Ct = [], to = !1;
function kt(e, ...t) {
  be ? be.emit(e, ...t) : to || Ct.push({ event: e, args: t });
}
function wo(e, t) {
  var n, o;
  be = e, be ? (be.enabled = !0, Ct.forEach(({ event: r, args: s }) => be.emit(r, ...s)), Ct = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    wo(s, t);
  }), setTimeout(() => {
    be || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, to = !0, Ct = []);
  }, 3e3)) : (to = !0, Ct = []);
}
function Bi(e, t) {
  kt("app:init", e, t, {
    Fragment: Ie,
    Text: qt,
    Comment: De,
    Static: rn
  });
}
function Wi(e) {
  kt("app:unmount", e);
}
const Ki = /* @__PURE__ */ xo(
  "component:added"
  /* COMPONENT_ADDED */
), os = /* @__PURE__ */ xo(
  "component:updated"
  /* COMPONENT_UPDATED */
), ki = /* @__PURE__ */ xo(
  "component:removed"
  /* COMPONENT_REMOVED */
), qi = (e) => {
  be && typeof be.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !be.cleanupBuffer(e) && ki(e);
};
// @__NO_SIDE_EFFECTS__
function xo(e) {
  return (t) => {
    kt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Gi = /* @__PURE__ */ rs(
  "perf:start"
  /* PERFORMANCE_START */
), Ji = /* @__PURE__ */ rs(
  "perf:end"
  /* PERFORMANCE_END */
);
function rs(e) {
  return (t, n, o) => {
    kt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Yi(e, t, n) {
  kt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let he = null, ss = null;
function hn(e) {
  const t = he;
  return he = e, ss = e && e.type.__scopeId || null, t;
}
function zi(e, t = he, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && sr(-1);
    const s = hn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      hn(s), o._d && sr(1);
    }
    return process.env.NODE_ENV !== "production" && os(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function is(e) {
  Ls(e) && y("Do not use built-in directive ids as custom directive id: " + e);
}
function nt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let f = l.dir[o];
    f && (xe(), Re(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ve());
  }
}
const Xi = Symbol("_vte"), Zi = (e) => e.__isTeleport, Qi = Symbol("_leaveCb");
function Vo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Vo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function ec(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => G({ name: e.name }, t, { setup: e }))()
  ) : e;
}
function cs(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Go = /* @__PURE__ */ new WeakSet(), gn = /* @__PURE__ */ new WeakMap();
function Mt(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach(
      (V, Z) => Mt(
        V,
        t && (T(t) ? t[Z] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Pt(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Mt(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? Po(o.component) : o.el, i = r ? null : s, { i: l, r: f } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    y(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = l.refs === W ? l.refs = {} : l.refs, a = l.setupState, g = M(a), D = a === W ? Dr : (V) => process.env.NODE_ENV !== "production" && (j(g, V) && !X(g[V]) && y(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), Go.has(g[V])) ? !1 : j(g, V), I = (V) => process.env.NODE_ENV === "production" || !Go.has(V);
  if (d != null && d !== f) {
    if (Jo(t), J(d))
      p[d] = null, D(d) && (a[d] = null);
    else if (X(d)) {
      I(d) && (d.value = null);
      const V = t;
      V.k && (p[V.k] = null);
    }
  }
  if ($(f))
    bt(f, l, 12, [i, p]);
  else {
    const V = J(f), Z = X(f);
    if (V || Z) {
      const q = () => {
        if (e.f) {
          const L = V ? D(f) ? a[f] : p[f] : I(f) || !e.k ? f.value : p[e.k];
          if (r)
            T(L) && po(L, s);
          else if (T(L))
            L.includes(s) || L.push(s);
          else if (V)
            p[f] = [s], D(f) && (a[f] = p[f]);
          else {
            const H = [s];
            I(f) && (f.value = H), e.k && (p[e.k] = H);
          }
        } else
          V ? (p[f] = i, D(f) && (a[f] = i)) : Z ? (I(f) && (f.value = i), e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (i) {
        const L = () => {
          q(), gn.delete(e);
        };
        L.id = -1, gn.set(e, L), pe(L, n);
      } else
        Jo(e), q();
    } else
      process.env.NODE_ENV !== "production" && y("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function Jo(e) {
  const t = gn.get(e);
  t && (t.flags |= 8, gn.delete(e));
}
Wt().requestIdleCallback;
Wt().cancelIdleCallback;
const Pt = (e) => !!e.type.__asyncLoader, So = (e) => e.type.__isKeepAlive;
function tc(e, t) {
  ls(e, "a", t);
}
function nc(e, t) {
  ls(e, "da", t);
}
function ls(e, t, n = ee) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Sn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      So(r.parent.vnode) && oc(o, t, n, r), r = r.parent;
  }
}
function oc(e, t, n, o) {
  const r = Sn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  fs(() => {
    po(o[t], r);
  }, n);
}
function Sn(e, t, n = ee, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      xe();
      const l = Gt(n), f = Re(t, n, e, i);
      return l(), Ve(), f;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = rt(Oo[e].replace(/ hook$/, ""));
    y(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ke = (e) => (t, n = ee) => {
  (!Ut || e === "sp") && Sn(e, (...o) => t(...o), n);
}, rc = ke("bm"), sc = ke("m"), ic = ke(
  "bu"
), cc = ke("u"), lc = ke(
  "bum"
), fs = ke("um"), fc = ke(
  "sp"
), uc = ke("rtg"), ac = ke("rtc");
function pc(e, t = ee) {
  Sn("ec", e, t);
}
const dc = Symbol.for("v-ndc"), no = (e) => e ? $s(e) ? Po(e) : no(e.parent) : null, ut = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ G(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Me(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Me(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Me(e.refs) : e.refs,
    $parent: (e) => no(e.parent),
    $root: (e) => no(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => To(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ri.bind(e.proxy)),
    $watch: (e) => qc.bind(e)
  })
), Co = (e) => e === "_" || e === "$", Wn = (e, t) => e !== W && !e.__isScriptSetup && j(e, t), us = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: f } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const D = i[t];
      if (D !== void 0)
        switch (D) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Wn(o, t))
          return i[t] = 1, o[t];
        if (r !== W && j(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && j(d, t)
        )
          return i[t] = 3, s[t];
        if (n !== W && j(n, t))
          return i[t] = 4, n[t];
        oo && (i[t] = 0);
      }
    }
    const p = ut[t];
    let a, g;
    if (p)
      return t === "$attrs" ? (Y(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && En()) : process.env.NODE_ENV !== "production" && t === "$slots" && Y(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== W && j(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = f.config.globalProperties, j(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && he && (!J(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== W && Co(t[0]) && j(r, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === he && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return Wn(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && j(r, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && j(o, t) ? (o[t] = n, !0) : j(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s, type: i }
  }, l) {
    let f, d;
    return !!(n[l] || e !== W && l[0] !== "$" && j(e, l) || Wn(t, l) || (f = s[0]) && j(f, l) || j(o, l) || j(ut, l) || j(r.config.globalProperties, l) || (d = i.__cssModules) && d[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (us.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function hc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ut).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ut[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: z
    });
  }), t;
}
function gc(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: z
    });
  });
}
function mc(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Co(o[0])) {
        y(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: z
      });
    }
  });
}
function Yo(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function _c() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? y(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let oo = !0;
function Ec(e) {
  const t = To(e), n = e.proxy, o = e.ctx;
  oo = !1, t.beforeCreate && zo(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: l,
    provide: f,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: g,
    beforeUpdate: D,
    updated: I,
    activated: V,
    deactivated: Z,
    beforeDestroy: q,
    beforeUnmount: L,
    destroyed: H,
    unmounted: ue,
    render: S,
    renderTracked: Q,
    renderTriggered: _e,
    errorCaptured: te,
    serverPrefetch: ie,
    // public API
    expose: Fe,
    inheritAttrs: qe,
    // assets
    components: Ee,
    directives: Jt,
    filters: Ro
  } = t, Ge = process.env.NODE_ENV !== "production" ? _c() : null;
  if (process.env.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const P in R)
        Ge("Props", P);
  }
  if (d && vc(d, o, Ge), i)
    for (const R in i) {
      const P = i[R];
      $(P) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, R, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[R] = P.bind(n), process.env.NODE_ENV !== "production" && Ge("Methods", R)) : process.env.NODE_ENV !== "production" && y(
        `Method "${R}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !$(r) && y(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && ho(R) && y(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(R))
      process.env.NODE_ENV !== "production" && y("data() should return an object.");
    else if (e.data = yo(R), process.env.NODE_ENV !== "production")
      for (const P in R)
        Ge("Data", P), Co(P[0]) || Object.defineProperty(o, P, {
          configurable: !0,
          enumerable: !0,
          get: () => R[P],
          set: z
        });
  }
  if (oo = !0, s)
    for (const R in s) {
      const P = s[R], Se = $(P) ? P.bind(n, n) : $(P.get) ? P.get.bind(n, n) : z;
      process.env.NODE_ENV !== "production" && Se === z && y(`Computed property "${R}" has no getter.`);
      const In = !$(P) && $(P.set) ? P.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        y(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : z, yt = Nl({
        get: Se,
        set: In
      });
      Object.defineProperty(o, R, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (dt) => yt.value = dt
      }), process.env.NODE_ENV !== "production" && Ge("Computed", R);
    }
  if (l)
    for (const R in l)
      as(l[R], o, n, R);
  if (f) {
    const R = $(f) ? f.call(n) : f;
    Reflect.ownKeys(R).forEach((P) => {
      wc(P, R[P]);
    });
  }
  p && zo(p, e, "c");
  function ce(R, P) {
    T(P) ? P.forEach((Se) => R(Se.bind(n))) : P && R(P.bind(n));
  }
  if (ce(rc, a), ce(sc, g), ce(ic, D), ce(cc, I), ce(tc, V), ce(nc, Z), ce(pc, te), ce(ac, Q), ce(uc, _e), ce(lc, L), ce(fs, ue), ce(fc, ie), T(Fe))
    if (Fe.length) {
      const R = e.exposed || (e.exposed = {});
      Fe.forEach((P) => {
        Object.defineProperty(R, P, {
          get: () => n[P],
          set: (Se) => n[P] = Se,
          enumerable: !0
        });
      });
    } else
      e.exposed || (e.exposed = {});
  S && e.render === z && (e.render = S), qe != null && (e.inheritAttrs = qe), Ee && (e.components = Ee), Jt && (e.directives = Jt), ie && cs(e);
}
function vc(e, t, n = z) {
  T(e) && (e = ro(e));
  for (const o in e) {
    const r = e[o];
    let s;
    K(r) ? "default" in r ? s = nn(
      r.from || o,
      r.default,
      !0
    ) : s = nn(r.from || o) : s = nn(r), X(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function zo(e, t, n) {
  Re(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function as(e, t, n, o) {
  let r = o.includes(".") ? Os(n, o) : () => n[o];
  if (J(e)) {
    const s = t[e];
    $(s) ? kn(r, s) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e}"`, s);
  } else if ($(e))
    kn(r, e.bind(n));
  else if (K(e))
    if (T(e))
      e.forEach((s) => as(s, t, n, o));
    else {
      const s = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(s) ? kn(r, s, e) : process.env.NODE_ENV !== "production" && y(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && y(`Invalid watch option: "${o}"`, e);
}
function To(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let f;
  return l ? f = l : !r.length && !n && !o ? f = t : (f = {}, r.length && r.forEach(
    (d) => mn(f, d, i, !0)
  ), mn(f, t, i)), K(t) && s.set(t, f), f;
}
function mn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && mn(e, s, n, !0), r && r.forEach(
    (i) => mn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Nc[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Nc = {
  data: Xo,
  props: Zo,
  emits: Zo,
  // objects
  methods: Tt,
  computed: Tt,
  // lifecycle
  beforeCreate: re,
  created: re,
  beforeMount: re,
  mounted: re,
  beforeUpdate: re,
  updated: re,
  beforeDestroy: re,
  beforeUnmount: re,
  destroyed: re,
  unmounted: re,
  activated: re,
  deactivated: re,
  errorCaptured: re,
  serverPrefetch: re,
  // assets
  components: Tt,
  directives: Tt,
  // watch
  watch: yc,
  // provide / inject
  provide: Xo,
  inject: bc
};
function Xo(e, t) {
  return t ? e ? function() {
    return G(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function bc(e, t) {
  return Tt(ro(e), ro(t));
}
function ro(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tt(e, t) {
  return e ? G(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Zo(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : G(
    /* @__PURE__ */ Object.create(null),
    Yo(e),
    Yo(t ?? {})
  ) : t;
}
function yc(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = G(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = re(e[o], t[o]);
  return n;
}
function ps() {
  return {
    app: null,
    config: {
      isNativeTag: Dr,
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
let Oc = 0;
function Dc(e, t) {
  return function(o, r = null) {
    $(o) || (o = G({}, o)), r != null && !K(r) && (process.env.NODE_ENV !== "production" && y("root props passed to app.mount() must be an object."), r = null);
    const s = ps(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const d = s.app = {
      _uid: Oc++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: fr,
      get config() {
        return s.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && y(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && y("Plugin has already been applied to target app.") : p && $(p.install) ? (i.add(p), p.install(d, ...a)) : $(p) ? (i.add(p), p(d, ...a)) : process.env.NODE_ENV !== "production" && y(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return s.mixins.includes(p) ? process.env.NODE_ENV !== "production" && y(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : s.mixins.push(p), d;
      },
      component(p, a) {
        return process.env.NODE_ENV !== "production" && fo(p, s.config), a ? (process.env.NODE_ENV !== "production" && s.components[p] && y(`Component "${p}" has already been registered in target app.`), s.components[p] = a, d) : s.components[p];
      },
      directive(p, a) {
        return process.env.NODE_ENV !== "production" && is(p), a ? (process.env.NODE_ENV !== "production" && s.directives[p] && y(`Directive "${p}" has already been registered in target app.`), s.directives[p] = a, d) : s.directives[p];
      },
      mount(p, a, g) {
        if (f)
          process.env.NODE_ENV !== "production" && y(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && y(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const D = d._ceVNode || at(o, r);
          return D.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            const I = et(D);
            I.el = null, e(I, p, g);
          }), a && t ? t(D, p) : e(D, p, g), f = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = D.component, Bi(d, fr)), Po(D.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && y(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        f ? (Re(
          l,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, Wi(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && y("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return process.env.NODE_ENV !== "production" && p in s.provides && (j(s.provides, p) ? y(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : y(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[p] = a, d;
      },
      runWithContext(p) {
        const a = Nt;
        Nt = d;
        try {
          return p();
        } finally {
          Nt = a;
        }
      }
    };
    return d;
  };
}
let Nt = null;
function wc(e, t) {
  if (!ee)
    process.env.NODE_ENV !== "production" && y("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const o = ee.parent && ee.parent.provides;
    o === n && (n = ee.provides = Object.create(o)), n[e] = t;
  }
}
function nn(e, t, n = !1) {
  const o = Ts();
  if (o || Nt) {
    let r = Nt ? Nt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const ds = {}, hs = () => Object.create(ds), gs = (e) => Object.getPrototypeOf(e) === ds;
function xc(e, t, n, o = !1) {
  const r = {}, s = hs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ms(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && Es(t || {}, r, e), n ? e.props = o ? r : yi(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Vc(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function Sc(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, l = M(r), [f] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Vc(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let g = p[a];
        if (Cn(e.emitsOptions, g))
          continue;
        const D = t[g];
        if (f)
          if (j(s, g))
            D !== s[g] && (s[g] = D, d = !0);
          else {
            const I = ye(g);
            r[I] = so(
              f,
              l,
              I,
              D,
              e,
              !1
            );
          }
        else
          D !== s[g] && (s[g] = D, d = !0);
      }
    }
  } else {
    ms(e, t, r, s) && (d = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !j(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Ze(a)) === a || !j(t, p))) && (f ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (r[a] = so(
        f,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete r[a]);
    if (s !== l)
      for (const a in s)
        (!t || !j(t, a)) && (delete s[a], d = !0);
  }
  d && Ae(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Es(t || {}, r, e);
}
function ms(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let f in t) {
      if ($t(f))
        continue;
      const d = t[f];
      let p;
      r && j(r, p = ye(f)) ? !s || !s.includes(p) ? n[p] = d : (l || (l = {}))[p] = d : Cn(e.emitsOptions, f) || (!(f in o) || d !== o[f]) && (o[f] = d, i = !0);
    }
  if (s) {
    const f = M(n), d = l || W;
    for (let p = 0; p < s.length; p++) {
      const a = s[p];
      n[a] = so(
        r,
        f,
        a,
        d[a],
        e,
        !j(d, a)
      );
    }
  }
  return i;
}
function so(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = j(i, "default");
    if (l && o === void 0) {
      const f = i.default;
      if (i.type !== Function && !i.skipFactory && $(f)) {
        const { propsDefaults: d } = r;
        if (n in d)
          o = d[n];
        else {
          const p = Gt(r);
          o = d[n] = f.call(
            null,
            t
          ), p();
        }
      } else
        o = f;
      r.ce && r.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ze(n)) && (o = !0));
  }
  return o;
}
const Cc = /* @__PURE__ */ new WeakMap();
function _s(e, t, n = !1) {
  const o = n ? Cc : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let f = !1;
  if (!$(e)) {
    const p = (a) => {
      f = !0;
      const [g, D] = _s(a, t, !0);
      G(i, g), D && l.push(...D);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !f)
    return K(e) && o.set(e, _t), _t;
  if (T(s))
    for (let p = 0; p < s.length; p++) {
      process.env.NODE_ENV !== "production" && !J(s[p]) && y("props must be strings when using array syntax.", s[p]);
      const a = ye(s[p]);
      Qo(a) && (i[a] = W);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !K(s) && y("invalid props options", s);
    for (const p in s) {
      const a = ye(p);
      if (Qo(a)) {
        const g = s[p], D = i[a] = T(g) || $(g) ? { type: g } : G({}, g), I = D.type;
        let V = !1, Z = !0;
        if (T(I))
          for (let q = 0; q < I.length; ++q) {
            const L = I[q], H = $(L) && L.name;
            if (H === "Boolean") {
              V = !0;
              break;
            } else
              H === "String" && (Z = !1);
          }
        else
          V = $(I) && I.name === "Boolean";
        D[
          0
          /* shouldCast */
        ] = V, D[
          1
          /* shouldCastTrue */
        ] = Z, (V || j(D, "default")) && l.push(a);
      }
    }
  }
  const d = [i, l];
  return K(e) && o.set(e, d), d;
}
function Qo(e) {
  return e[0] !== "$" && !$t(e) ? !0 : (process.env.NODE_ENV !== "production" && y(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Tc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Es(e, t, n) {
  const o = M(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => ye(i));
  for (const i in r) {
    let l = r[i];
    l != null && $c(
      i,
      o[i],
      l,
      process.env.NODE_ENV !== "production" ? Me(o) : o,
      !s.includes(i)
    );
  }
}
function $c(e, t, n, o, r) {
  const { type: s, required: i, validator: l, skipCheck: f } = n;
  if (i && r) {
    y('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !f) {
      let d = !1;
      const p = T(s) ? s : [s], a = [];
      for (let g = 0; g < p.length && !d; g++) {
        const { valid: D, expectedType: I } = Ac(t, p[g]);
        a.push(I || ""), d = D;
      }
      if (!d) {
        y(Mc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && y('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ic = /* @__PURE__ */ Ke(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ac(e, t) {
  let n;
  const o = Tc(t);
  if (o === "null")
    n = e === null;
  else if (Ic(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = K(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Mc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(On).join(" | ")}`;
  const r = n[0], s = go(t), i = er(t, r), l = er(t, s);
  return n.length === 1 && tr(r) && !Pc(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, tr(s) && (o += `with value ${l}.`), o;
}
function er(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function tr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Pc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const $o = (e) => e === "_" || e === "_ctx" || e === "$stable", Io = (e) => T(e) ? e.map(Ne) : [Ne(e)], Rc = (e, t, n) => {
  if (t._n)
    return t;
  const o = zi((...r) => (process.env.NODE_ENV !== "production" && ee && !(n === null && he) && !(n && n.root !== ee.root) && y(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Io(t(...r))), n);
  return o._c = !1, o;
}, vs = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if ($o(r))
      continue;
    const s = e[r];
    if ($(s))
      t[r] = Rc(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && y(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = Io(s);
      t[r] = () => i;
    }
  }
}, Ns = (e, t) => {
  process.env.NODE_ENV !== "production" && !So(e.vnode) && y(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Io(t);
  e.slots.default = () => n;
}, io = (e, t, n) => {
  for (const o in t)
    (n || !$o(o)) && (e[o] = t[o]);
}, Fc = (e, t, n) => {
  const o = e.slots = hs();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (io(o, t, n), n && fn(o, "_", r, !0)) : vs(t, o);
  } else
    t && Ns(e, t);
}, jc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = W;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Pe ? (io(r, t, n), Ae(e, "set", "$slots")) : n && l === 1 ? s = !1 : io(r, t, n) : (s = !t.$stable, vs(t, r)), i = t;
  } else
    t && (Ns(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !$o(l) && i[l] == null && delete r[l];
};
let Vt, Be;
function He(e, t) {
  e.appContext.config.performance && _n() && Be.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Gi(e, t, _n() ? Be.now() : Date.now());
}
function Le(e, t) {
  if (e.appContext.config.performance && _n()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", r = `<${$n(e, e.type)}> ${t}`;
    Be.mark(o), Be.measure(r, n, o), Be.clearMeasures(r), Be.clearMarks(n), Be.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Ji(e, t, _n() ? Be.now() : Date.now());
}
function _n() {
  return Vt !== void 0 || (typeof window < "u" && window.performance ? (Vt = !0, Be = window.performance) : Vt = !1), Vt;
}
function Hc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const pe = el;
function Lc(e) {
  return Uc(e);
}
function Uc(e, t) {
  Hc();
  const n = Wt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && wo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: l,
    createComment: f,
    setText: d,
    setElementText: p,
    parentNode: a,
    nextSibling: g,
    setScopeId: D = z,
    insertStaticContent: I
  } = e, V = (c, u, h, E = null, m = null, _ = null, O = void 0, b = null, N = process.env.NODE_ENV !== "production" && Pe ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !St(c, u) && (E = Yt(c), Je(c, m, _, !0), c = null), u.patchFlag === -2 && (N = !1, u.dynamicChildren = null);
    const { type: v, ref: C, shapeFlag: w } = u;
    switch (v) {
      case qt:
        Z(c, u, h, E);
        break;
      case De:
        q(c, u, h, E);
        break;
      case rn:
        c == null ? L(u, h, E, O) : process.env.NODE_ENV !== "production" && H(c, u, h, O);
        break;
      case Ie:
        Jt(
          c,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        break;
      default:
        w & 1 ? Q(
          c,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        ) : w & 6 ? Ro(
          c,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        ) : w & 64 || w & 128 ? v.process(
          c,
          u,
          h,
          E,
          m,
          _,
          O,
          b,
          N,
          ht
        ) : process.env.NODE_ENV !== "production" && y("Invalid VNode type:", v, `(${typeof v})`);
    }
    C != null && m ? Mt(C, c && c.ref, _, u || c, !u) : C == null && c && c.ref != null && Mt(c.ref, null, _, c, !0);
  }, Z = (c, u, h, E) => {
    if (c == null)
      o(
        u.el = l(u.children),
        h,
        E
      );
    else {
      const m = u.el = c.el;
      u.children !== c.children && d(m, u.children);
    }
  }, q = (c, u, h, E) => {
    c == null ? o(
      u.el = f(u.children || ""),
      h,
      E
    ) : u.el = c.el;
  }, L = (c, u, h, E) => {
    [c.el, c.anchor] = I(
      c.children,
      u,
      h,
      E,
      c.el,
      c.anchor
    );
  }, H = (c, u, h, E) => {
    if (u.children !== c.children) {
      const m = g(c.anchor);
      S(c), [u.el, u.anchor] = I(
        u.children,
        h,
        m,
        E
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, ue = ({ el: c, anchor: u }, h, E) => {
    let m;
    for (; c && c !== u; )
      m = g(c), o(c, h, E), c = m;
    o(u, h, E);
  }, S = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = g(c), r(c), c = h;
    r(u);
  }, Q = (c, u, h, E, m, _, O, b, N) => {
    u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), c == null ? _e(
      u,
      h,
      E,
      m,
      _,
      O,
      b,
      N
    ) : Fe(
      c,
      u,
      m,
      _,
      O,
      b,
      N
    );
  }, _e = (c, u, h, E, m, _, O, b) => {
    let N, v;
    const { props: C, shapeFlag: w, transition: x, dirs: A } = c;
    if (N = c.el = i(
      c.type,
      _,
      C && C.is,
      C
    ), w & 8 ? p(N, c.children) : w & 16 && ie(
      c.children,
      N,
      null,
      E,
      m,
      Kn(c, _),
      O,
      b
    ), A && nt(c, null, E, "created"), te(N, c, c.scopeId, O, E), C) {
      for (const k in C)
        k !== "value" && !$t(k) && s(N, k, null, C[k], _, E);
      "value" in C && s(N, "value", null, C.value, _), (v = C.onVnodeBeforeMount) && Te(v, E, c);
    }
    process.env.NODE_ENV !== "production" && (fn(N, "__vnode", c, !0), fn(N, "__vueParentComponent", E, !0)), A && nt(c, null, E, "beforeMount");
    const F = Bc(m, x);
    F && x.beforeEnter(N), o(N, u, h), ((v = C && C.onVnodeMounted) || F || A) && pe(() => {
      v && Te(v, E, c), F && x.enter(N), A && nt(c, null, E, "mounted");
    }, m);
  }, te = (c, u, h, E, m) => {
    if (h && D(c, h), E)
      for (let _ = 0; _ < E.length; _++)
        D(c, E[_]);
    if (m) {
      let _ = m.subTree;
      if (process.env.NODE_ENV !== "production" && _.patchFlag > 0 && _.patchFlag & 2048 && (_ = Ao(_.children) || _), u === _ || xs(_.type) && (_.ssContent === u || _.ssFallback === u)) {
        const O = m.vnode;
        te(
          c,
          O,
          O.scopeId,
          O.slotScopeIds,
          m.parent
        );
      }
    }
  }, ie = (c, u, h, E, m, _, O, b, N = 0) => {
    for (let v = N; v < c.length; v++) {
      const C = c[v] = b ? ze(c[v]) : Ne(c[v]);
      V(
        null,
        C,
        u,
        h,
        E,
        m,
        _,
        O,
        b
      );
    }
  }, Fe = (c, u, h, E, m, _, O) => {
    const b = u.el = c.el;
    process.env.NODE_ENV !== "production" && (b.__vnode = u);
    let { patchFlag: N, dynamicChildren: v, dirs: C } = u;
    N |= c.patchFlag & 16;
    const w = c.props || W, x = u.props || W;
    let A;
    if (h && ot(h, !1), (A = x.onVnodeBeforeUpdate) && Te(A, h, u, c), C && nt(u, c, h, "beforeUpdate"), h && ot(h, !0), process.env.NODE_ENV !== "production" && Pe && (N = 0, O = !1, v = null), (w.innerHTML && x.innerHTML == null || w.textContent && x.textContent == null) && p(b, ""), v ? (qe(
      c.dynamicChildren,
      v,
      b,
      h,
      E,
      Kn(u, m),
      _
    ), process.env.NODE_ENV !== "production" && on(c, u)) : O || Se(
      c,
      u,
      b,
      null,
      h,
      E,
      Kn(u, m),
      _,
      !1
    ), N > 0) {
      if (N & 16)
        Ee(b, w, x, h, m);
      else if (N & 2 && w.class !== x.class && s(b, "class", null, x.class, m), N & 4 && s(b, "style", w.style, x.style, m), N & 8) {
        const F = u.dynamicProps;
        for (let k = 0; k < F.length; k++) {
          const B = F[k], le = w[B], ne = x[B];
          (ne !== le || B === "value") && s(b, B, le, ne, m, h);
        }
      }
      N & 1 && c.children !== u.children && p(b, u.children);
    } else
      !O && v == null && Ee(b, w, x, h, m);
    ((A = x.onVnodeUpdated) || C) && pe(() => {
      A && Te(A, h, u, c), C && nt(u, c, h, "updated");
    }, E);
  }, qe = (c, u, h, E, m, _, O) => {
    for (let b = 0; b < u.length; b++) {
      const N = c[b], v = u[b], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !St(N, v) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? a(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      V(
        N,
        v,
        C,
        null,
        E,
        m,
        _,
        O,
        !0
      );
    }
  }, Ee = (c, u, h, E, m) => {
    if (u !== h) {
      if (u !== W)
        for (const _ in u)
          !$t(_) && !(_ in h) && s(
            c,
            _,
            u[_],
            null,
            m,
            E
          );
      for (const _ in h) {
        if ($t(_))
          continue;
        const O = h[_], b = u[_];
        O !== b && _ !== "value" && s(c, _, b, O, m, E);
      }
      "value" in h && s(c, "value", u.value, h.value, m);
    }
  }, Jt = (c, u, h, E, m, _, O, b, N) => {
    const v = u.el = c ? c.el : l(""), C = u.anchor = c ? c.anchor : l("");
    let { patchFlag: w, dynamicChildren: x, slotScopeIds: A } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Pe || w & 2048) && (w = 0, N = !1, x = null), A && (b = b ? b.concat(A) : A), c == null ? (o(v, h, E), o(C, h, E), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      C,
      m,
      _,
      O,
      b,
      N
    )) : w > 0 && w & 64 && x && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (qe(
      c.dynamicChildren,
      x,
      h,
      m,
      _,
      O,
      b
    ), process.env.NODE_ENV !== "production" ? on(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || m && u === m.subTree) && on(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Se(
      c,
      u,
      h,
      C,
      m,
      _,
      O,
      b,
      N
    );
  }, Ro = (c, u, h, E, m, _, O, b, N) => {
    u.slotScopeIds = b, c == null ? u.shapeFlag & 512 ? m.ctx.activate(
      u,
      h,
      E,
      O,
      N
    ) : Ge(
      u,
      h,
      E,
      m,
      _,
      O,
      N
    ) : ce(c, u, N);
  }, Ge = (c, u, h, E, m, _, O) => {
    const b = c.component = al(
      c,
      E,
      m
    );
    if (process.env.NODE_ENV !== "production" && b.type.__hmrId && ji(b), process.env.NODE_ENV !== "production" && (Qt(c), He(b, "mount")), So(c) && (b.ctx.renderer = ht), process.env.NODE_ENV !== "production" && He(b, "init"), dl(b, !1, O), process.env.NODE_ENV !== "production" && Le(b, "init"), process.env.NODE_ENV !== "production" && Pe && (c.el = null), b.asyncDep) {
      if (m && m.registerDep(b, R, O), !c.el) {
        const N = b.subTree = at(De);
        q(null, N, u, h), c.placeholder = N.el;
      }
    } else
      R(
        b,
        c,
        u,
        h,
        m,
        _,
        O
      );
    process.env.NODE_ENV !== "production" && (en(), Le(b, "mount"));
  }, ce = (c, u, h) => {
    const E = u.component = c.component;
    if (Zc(c, u, h))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Qt(u), P(E, u, h), process.env.NODE_ENV !== "production" && en();
        return;
      } else
        E.next = u, E.update();
    else
      u.el = c.el, E.vnode = u;
  }, R = (c, u, h, E, m, _, O) => {
    const b = () => {
      if (c.isMounted) {
        let { next: w, bu: x, u: A, parent: F, vnode: k } = c;
        {
          const ae = bs(c);
          if (ae) {
            w && (w.el = k.el, P(c, w, O)), ae.asyncDep.then(() => {
              c.isUnmounted || b();
            });
            return;
          }
        }
        let B = w, le;
        process.env.NODE_ENV !== "production" && Qt(w || c.vnode), ot(c, !1), w ? (w.el = k.el, P(c, w, O)) : w = k, x && wt(x), (le = w.props && w.props.onVnodeBeforeUpdate) && Te(le, F, w, k), ot(c, !0), process.env.NODE_ENV !== "production" && He(c, "render");
        const ne = qn(c);
        process.env.NODE_ENV !== "production" && Le(c, "render");
        const ve = c.subTree;
        c.subTree = ne, process.env.NODE_ENV !== "production" && He(c, "patch"), V(
          ve,
          ne,
          // parent may have changed if it's in a teleport
          a(ve.el),
          // anchor may have changed if it's in a fragment
          Yt(ve),
          c,
          m,
          _
        ), process.env.NODE_ENV !== "production" && Le(c, "patch"), w.el = ne.el, B === null && Qc(c, ne.el), A && pe(A, m), (le = w.props && w.props.onVnodeUpdated) && pe(
          () => Te(le, F, w, k),
          m
        ), process.env.NODE_ENV !== "production" && os(c), process.env.NODE_ENV !== "production" && en();
      } else {
        let w;
        const { el: x, props: A } = u, { bm: F, m: k, parent: B, root: le, type: ne } = c, ve = Pt(u);
        if (ot(c, !1), F && wt(F), !ve && (w = A && A.onVnodeBeforeMount) && Te(w, B, u), ot(c, !0), x && Rn) {
          const ae = () => {
            process.env.NODE_ENV !== "production" && He(c, "render"), c.subTree = qn(c), process.env.NODE_ENV !== "production" && Le(c, "render"), process.env.NODE_ENV !== "production" && He(c, "hydrate"), Rn(
              x,
              c.subTree,
              c,
              m,
              null
            ), process.env.NODE_ENV !== "production" && Le(c, "hydrate");
          };
          ve && ne.__asyncHydrate ? ne.__asyncHydrate(
            x,
            c,
            ae
          ) : ae();
        } else {
          le.ce && // @ts-expect-error _def is private
          le.ce._def.shadowRoot !== !1 && le.ce._injectChildStyle(ne), process.env.NODE_ENV !== "production" && He(c, "render");
          const ae = c.subTree = qn(c);
          process.env.NODE_ENV !== "production" && Le(c, "render"), process.env.NODE_ENV !== "production" && He(c, "patch"), V(
            null,
            ae,
            h,
            E,
            c,
            m,
            _
          ), process.env.NODE_ENV !== "production" && Le(c, "patch"), u.el = ae.el;
        }
        if (k && pe(k, m), !ve && (w = A && A.onVnodeMounted)) {
          const ae = u;
          pe(
            () => Te(w, B, ae),
            m
          );
        }
        (u.shapeFlag & 256 || B && Pt(B.vnode) && B.vnode.shapeFlag & 256) && c.a && pe(c.a, m), c.isMounted = !0, process.env.NODE_ENV !== "production" && Ki(c), u = h = E = null;
      }
    };
    c.scope.on();
    const N = c.effect = new Ir(b);
    c.scope.off();
    const v = c.update = N.run.bind(N), C = c.job = N.runIfDirty.bind(N);
    C.i = c, C.id = c.uid, N.scheduler = () => Vn(C), ot(c, !0), process.env.NODE_ENV !== "production" && (N.onTrack = c.rtc ? (w) => wt(c.rtc, w) : void 0, N.onTrigger = c.rtg ? (w) => wt(c.rtg, w) : void 0), v();
  }, P = (c, u, h) => {
    u.component = c;
    const E = c.vnode.props;
    c.vnode = u, c.next = null, Sc(c, u.props, E, h), jc(c, u.children, h), xe(), ko(c), Ve();
  }, Se = (c, u, h, E, m, _, O, b, N = !1) => {
    const v = c && c.children, C = c ? c.shapeFlag : 0, w = u.children, { patchFlag: x, shapeFlag: A } = u;
    if (x > 0) {
      if (x & 128) {
        yt(
          v,
          w,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        return;
      } else if (x & 256) {
        In(
          v,
          w,
          h,
          E,
          m,
          _,
          O,
          b,
          N
        );
        return;
      }
    }
    A & 8 ? (C & 16 && Ot(v, m, _), w !== v && p(h, w)) : C & 16 ? A & 16 ? yt(
      v,
      w,
      h,
      E,
      m,
      _,
      O,
      b,
      N
    ) : Ot(v, m, _, !0) : (C & 8 && p(h, ""), A & 16 && ie(
      w,
      h,
      E,
      m,
      _,
      O,
      b,
      N
    ));
  }, In = (c, u, h, E, m, _, O, b, N) => {
    c = c || _t, u = u || _t;
    const v = c.length, C = u.length, w = Math.min(v, C);
    let x;
    for (x = 0; x < w; x++) {
      const A = u[x] = N ? ze(u[x]) : Ne(u[x]);
      V(
        c[x],
        A,
        h,
        null,
        m,
        _,
        O,
        b,
        N
      );
    }
    v > C ? Ot(
      c,
      m,
      _,
      !0,
      !1,
      w
    ) : ie(
      u,
      h,
      E,
      m,
      _,
      O,
      b,
      N,
      w
    );
  }, yt = (c, u, h, E, m, _, O, b, N) => {
    let v = 0;
    const C = u.length;
    let w = c.length - 1, x = C - 1;
    for (; v <= w && v <= x; ) {
      const A = c[v], F = u[v] = N ? ze(u[v]) : Ne(u[v]);
      if (St(A, F))
        V(
          A,
          F,
          h,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      v++;
    }
    for (; v <= w && v <= x; ) {
      const A = c[w], F = u[x] = N ? ze(u[x]) : Ne(u[x]);
      if (St(A, F))
        V(
          A,
          F,
          h,
          null,
          m,
          _,
          O,
          b,
          N
        );
      else
        break;
      w--, x--;
    }
    if (v > w) {
      if (v <= x) {
        const A = x + 1, F = A < C ? u[A].el : E;
        for (; v <= x; )
          V(
            null,
            u[v] = N ? ze(u[v]) : Ne(u[v]),
            h,
            F,
            m,
            _,
            O,
            b,
            N
          ), v++;
      }
    } else if (v > x)
      for (; v <= w; )
        Je(c[v], m, _, !0), v++;
    else {
      const A = v, F = v, k = /* @__PURE__ */ new Map();
      for (v = F; v <= x; v++) {
        const oe = u[v] = N ? ze(u[v]) : Ne(u[v]);
        oe.key != null && (process.env.NODE_ENV !== "production" && k.has(oe.key) && y(
          "Duplicate keys found during update:",
          JSON.stringify(oe.key),
          "Make sure keys are unique."
        ), k.set(oe.key, v));
      }
      let B, le = 0;
      const ne = x - F + 1;
      let ve = !1, ae = 0;
      const Dt = new Array(ne);
      for (v = 0; v < ne; v++)
        Dt[v] = 0;
      for (v = A; v <= w; v++) {
        const oe = c[v];
        if (le >= ne) {
          Je(oe, m, _, !0);
          continue;
        }
        let Ce;
        if (oe.key != null)
          Ce = k.get(oe.key);
        else
          for (B = F; B <= x; B++)
            if (Dt[B - F] === 0 && St(oe, u[B])) {
              Ce = B;
              break;
            }
        Ce === void 0 ? Je(oe, m, _, !0) : (Dt[Ce - F] = v + 1, Ce >= ae ? ae = Ce : ve = !0, V(
          oe,
          u[Ce],
          h,
          null,
          m,
          _,
          O,
          b,
          N
        ), le++);
      }
      const jo = ve ? Wc(Dt) : _t;
      for (B = jo.length - 1, v = ne - 1; v >= 0; v--) {
        const oe = F + v, Ce = u[oe], Ho = u[oe + 1], Lo = oe + 1 < C ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ho.el || Ho.placeholder
        ) : E;
        Dt[v] === 0 ? V(
          null,
          Ce,
          h,
          Lo,
          m,
          _,
          O,
          b,
          N
        ) : ve && (B < 0 || v !== jo[B] ? dt(Ce, h, Lo, 2) : B--);
      }
    }
  }, dt = (c, u, h, E, m = null) => {
    const { el: _, type: O, transition: b, children: N, shapeFlag: v } = c;
    if (v & 6) {
      dt(c.component.subTree, u, h, E);
      return;
    }
    if (v & 128) {
      c.suspense.move(u, h, E);
      return;
    }
    if (v & 64) {
      O.move(c, u, h, ht);
      return;
    }
    if (O === Ie) {
      o(_, u, h);
      for (let w = 0; w < N.length; w++)
        dt(N[w], u, h, E);
      o(c.anchor, u, h);
      return;
    }
    if (O === rn) {
      ue(c, u, h);
      return;
    }
    if (E !== 2 && v & 1 && b)
      if (E === 0)
        b.beforeEnter(_), o(_, u, h), pe(() => b.enter(_), m);
      else {
        const { leave: w, delayLeave: x, afterLeave: A } = b, F = () => {
          c.ctx.isUnmounted ? r(_) : o(_, u, h);
        }, k = () => {
          _._isLeaving && _[Qi](
            !0
            /* cancelled */
          ), w(_, () => {
            F(), A && A();
          });
        };
        x ? x(_, F, k) : k();
      }
    else
      o(_, u, h);
  }, Je = (c, u, h, E = !1, m = !1) => {
    const {
      type: _,
      props: O,
      ref: b,
      children: N,
      dynamicChildren: v,
      shapeFlag: C,
      patchFlag: w,
      dirs: x,
      cacheIndex: A
    } = c;
    if (w === -2 && (m = !1), b != null && (xe(), Mt(b, null, h, c, !0), Ve()), A != null && (u.renderCache[A] = void 0), C & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const F = C & 1 && x, k = !Pt(c);
    let B;
    if (k && (B = O && O.onVnodeBeforeUnmount) && Te(B, u, c), C & 6)
      js(c.component, h, E);
    else {
      if (C & 128) {
        c.suspense.unmount(h, E);
        return;
      }
      F && nt(c, null, u, "beforeUnmount"), C & 64 ? c.type.remove(
        c,
        u,
        h,
        ht,
        E
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== Ie || w > 0 && w & 64) ? Ot(
        v,
        u,
        h,
        !1,
        !0
      ) : (_ === Ie && w & 384 || !m && C & 16) && Ot(N, u, h), E && An(c);
    }
    (k && (B = O && O.onVnodeUnmounted) || F) && pe(() => {
      B && Te(B, u, c), F && nt(c, null, u, "unmounted");
    }, h);
  }, An = (c) => {
    const { type: u, el: h, anchor: E, transition: m } = c;
    if (u === Ie) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((O) => {
        O.type === De ? r(O.el) : An(O);
      }) : Fs(h, E);
      return;
    }
    if (u === rn) {
      S(c);
      return;
    }
    const _ = () => {
      r(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: O, delayLeave: b } = m, N = () => O(h, _);
      b ? b(c.el, _, N) : N();
    } else
      _();
  }, Fs = (c, u) => {
    let h;
    for (; c !== u; )
      h = g(c), r(c), c = h;
    r(u);
  }, js = (c, u, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && Hi(c);
    const { bum: E, scope: m, job: _, subTree: O, um: b, m: N, a: v } = c;
    nr(N), nr(v), E && wt(E), m.stop(), _ && (_.flags |= 8, Je(O, c, u, h)), b && pe(b, u), pe(() => {
      c.isUnmounted = !0;
    }, u), process.env.NODE_ENV !== "production" && qi(c);
  }, Ot = (c, u, h, E = !1, m = !1, _ = 0) => {
    for (let O = _; O < c.length; O++)
      Je(c[O], u, h, E, m);
  }, Yt = (c) => {
    if (c.shapeFlag & 6)
      return Yt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = g(c.anchor || c.el), h = u && u[Xi];
    return h ? g(h) : u;
  };
  let Mn = !1;
  const Fo = (c, u, h) => {
    c == null ? u._vnode && Je(u._vnode, null, null, !0) : V(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, Mn || (Mn = !0, ko(), es(), Mn = !1);
  }, ht = {
    p: V,
    um: Je,
    m: dt,
    r: An,
    mt: Ge,
    mc: ie,
    pc: Se,
    pbc: qe,
    n: Yt,
    o: e
  };
  let Pn, Rn;
  return t && ([Pn, Rn] = t(
    ht
  )), {
    render: Fo,
    hydrate: Pn,
    createApp: Dc(Fo, Pn)
  };
}
function Kn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Bc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function on(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = ze(r[s]), l.el = i.el), !n && l.patchFlag !== -2 && on(i, l)), l.type === qt && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = i.el), l.type === De && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Wc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const d = e[o];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < d ? s = l + 1 : i = l;
      d < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function bs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : bs(t);
}
function nr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Kc = Symbol.for("v-scx"), kc = () => {
  {
    const e = nn(Kc);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function kn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !$(t) && y(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ys(e, t, n);
}
function ys(e, t, n = W) {
  const { immediate: o, deep: r, flush: s, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = G({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = y);
  const f = t && o || !t && s !== "post";
  let d;
  if (Ut) {
    if (s === "sync") {
      const D = kc();
      d = D.__watcherHandles || (D.__watcherHandles = []);
    } else if (!f) {
      const D = () => {
      };
      return D.stop = z, D.resume = z, D.pause = z, D;
    }
  }
  const p = ee;
  l.call = (D, I, V) => Re(D, p, I, V);
  let a = !1;
  s === "post" ? l.scheduler = (D) => {
    pe(D, p && p.suspense);
  } : s !== "sync" && (a = !0, l.scheduler = (D, I) => {
    I ? D() : Vn(D);
  }), l.augmentJob = (D) => {
    t && (D.flags |= 4), a && (D.flags |= 2, p && (D.id = p.uid, D.i = p));
  };
  const g = Ci(e, t, l);
  return Ut && (d ? d.push(g) : f && g()), g;
}
function qc(e, t, n) {
  const o = this.proxy, r = J(e) ? e.includes(".") ? Os(o, e) : () => o[e] : e.bind(o, o);
  let s;
  $(t) ? s = t : (s = t.handler, n = t);
  const i = Gt(this), l = ys(r, s.bind(o), n);
  return i(), l;
}
function Os(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const Gc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ye(t)}Modifiers`] || e[`${Ze(t)}Modifiers`];
function Jc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || W;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(rt(ye(t)) in a)) && y(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${rt(ye(t))}" prop.`
        );
      else {
        const g = p[t];
        $(g) && (g(...n) || y(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && Gc(o, t.slice(7));
  if (i && (i.trim && (r = n.map((p) => J(p) ? p.trim() : p)), i.number && (r = n.map(Ws))), process.env.NODE_ENV !== "production" && Yi(e, t, r), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[rt(p)] && y(
      `Event "${p}" is emitted in component ${$n(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ze(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = rt(t)] || // also try camelCase event handler (#2249)
  o[l = rt(ye(t))];
  !f && s && (f = o[l = rt(Ze(t))]), f && Re(
    f,
    e,
    6,
    r
  );
  const d = o[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Re(
      d,
      e,
      6,
      r
    );
  }
}
const Yc = /* @__PURE__ */ new WeakMap();
function Ds(e, t, n = !1) {
  const o = n ? Yc : t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!$(e)) {
    const f = (d) => {
      const p = Ds(d, t, !0);
      p && (l = !0, G(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !l ? (K(e) && o.set(e, null), null) : (T(s) ? s.forEach((f) => i[f] = null) : G(i, s), K(e) && o.set(e, i), i);
}
function Cn(e, t) {
  return !e || !Bt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, Ze(t)) || j(e, t));
}
let co = !1;
function En() {
  co = !0;
}
function qn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: f,
    render: d,
    renderCache: p,
    props: a,
    data: g,
    setupState: D,
    ctx: I,
    inheritAttrs: V
  } = e, Z = hn(e);
  let q, L;
  process.env.NODE_ENV !== "production" && (co = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = r || o, Q = process.env.NODE_ENV !== "production" && D.__isScriptSetup ? new Proxy(S, {
        get(_e, te, ie) {
          return y(
            `Property '${String(
              te
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(_e, te, ie);
        }
      }) : S;
      q = Ne(
        d.call(
          Q,
          S,
          p,
          process.env.NODE_ENV !== "production" ? Me(a) : a,
          D,
          g,
          I
        )
      ), L = l;
    } else {
      const S = t;
      process.env.NODE_ENV !== "production" && l === a && En(), q = Ne(
        S.length > 1 ? S(
          process.env.NODE_ENV !== "production" ? Me(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return En(), Me(l);
            },
            slots: i,
            emit: f
          } : { attrs: l, slots: i, emit: f }
        ) : S(
          process.env.NODE_ENV !== "production" ? Me(a) : a,
          null
        )
      ), L = t.props ? l : zc(l);
    }
  } catch (S) {
    Rt.length = 0, Kt(S, e, 1), q = at(De);
  }
  let H = q, ue;
  if (process.env.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([H, ue] = ws(q)), L && V !== !1) {
    const S = Object.keys(L), { shapeFlag: Q } = H;
    if (S.length) {
      if (Q & 7)
        s && S.some(ln) && (L = Xc(
          L,
          s
        )), H = et(H, L, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !co && H.type !== De) {
        const _e = Object.keys(l), te = [], ie = [];
        for (let Fe = 0, qe = _e.length; Fe < qe; Fe++) {
          const Ee = _e[Fe];
          Bt(Ee) ? ln(Ee) || te.push(Ee[2].toLowerCase() + Ee.slice(3)) : ie.push(Ee);
        }
        ie.length && y(
          `Extraneous non-props attributes (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), te.length && y(
          `Extraneous non-emits event listeners (${te.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !or(H) && y(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), H = et(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !or(H) && y(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Vo(H, n.transition)), process.env.NODE_ENV !== "production" && ue ? ue(H) : q = H, hn(Z), q;
}
const ws = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Ao(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return ws(o);
  } else
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ne(o), i];
};
function Ao(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (Tn(r)) {
      if (r.type !== De || r.children === "v-if") {
        if (n)
          return;
        if (n = r, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ao(n.children);
      }
    } else
      return;
  }
  return n;
}
const zc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Xc = (e, t) => {
  const n = {};
  for (const o in e)
    (!ln(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, or = (e) => e.shapeFlag & 7 || e.type === De;
function Zc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: f } = t, d = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && Pe || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? rr(o, i, d) : !!i;
    if (f & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const g = p[a];
        if (i[g] !== o[g] && !Cn(d, g))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? rr(o, i, d) : !0 : !!i;
  return !1;
}
function rr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !Cn(n, s))
      return !0;
  }
  return !1;
}
function Qc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const xs = (e) => e.__isSuspense;
function el(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : Qr(e);
}
const Ie = Symbol.for("v-fgt"), qt = Symbol.for("v-txt"), De = Symbol.for("v-cmt"), rn = Symbol.for("v-stc"), Rt = [];
let ge = null;
function tl(e = !1) {
  Rt.push(ge = e ? null : []);
}
function nl() {
  Rt.pop(), ge = Rt[Rt.length - 1] || null;
}
let Lt = 1;
function sr(e, t = !1) {
  Lt += e, e < 0 && ge && t && (ge.hasOnce = !0);
}
function ol(e) {
  return e.dynamicChildren = Lt > 0 ? ge || _t : null, nl(), Lt > 0 && ge && ge.push(e), e;
}
function rl(e, t, n, o, r, s) {
  return ol(
    vn(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
    )
  );
}
function Tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function St(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = tn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const sl = (...e) => Ss(
  ...e
), Vs = ({ key: e }) => e ?? null, sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? J(e) || X(e) || $(e) ? { i: he, r: e, k: t, f: !!n } : e : null);
function vn(e, t = null, n = null, o = 0, r = null, s = e === Ie ? 0 : 1, i = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vs(t),
    ref: t && sn(t),
    scopeId: ss,
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
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return l ? (Mo(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= J(n) ? 8 : 16), process.env.NODE_ENV !== "production" && f.key !== f.key && y("VNode created with invalid key (NaN). VNode type:", f.type), Lt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ge.push(f), f;
}
const at = process.env.NODE_ENV !== "production" ? sl : Ss;
function Ss(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === dc) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = De), Tn(e)) {
    const l = et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Mo(l, n), Lt > 0 && !s && ge && (l.shapeFlag & 6 ? ge[ge.indexOf(e)] = l : ge.push(l)), l.patchFlag = -2, l;
  }
  if (Ms(e) && (e = e.__vccOpts), t) {
    t = il(t);
    let { class: l, style: f } = t;
    l && !J(l) && (t.class = _o(l)), K(f) && (un(f) && !T(f) && (f = G({}, f)), t.style = Dn(f));
  }
  const i = J(e) ? 1 : xs(e) ? 128 : Zi(e) ? 64 : K(e) ? 4 : $(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && un(e) && (e = M(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), vn(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function il(e) {
  return e ? un(e) || gs(e) ? G({}, e) : e : null;
}
function et(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: l, transition: f } = e, d = t ? ll(r || {}, t) : r, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Vs(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? T(s) ? s.concat(sn(t)) : [s, sn(t)] : sn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && T(l) ? l.map(Cs) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ie ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && et(e.ssContent),
    ssFallback: e.ssFallback && et(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && Vo(
    p,
    f.clone(p)
  ), p;
}
function Cs(e) {
  const t = et(e);
  return T(e.children) && (t.children = e.children.map(Cs)), t;
}
function cl(e = " ", t = 0) {
  return at(qt, null, e, t);
}
function Ne(e) {
  return e == null || typeof e == "boolean" ? at(De) : T(e) ? at(
    Ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tn(e) ? ze(e) : at(qt, null, String(e));
}
function ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : et(e);
}
function Mo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Mo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !gs(t) ? t._ctx = he : r === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    $(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [cl(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ll(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = _o([t.class, o.class]));
      else if (r === "style")
        t.style = Dn([t.style, o.style]);
      else if (Bt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(T(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Te(e, t, n, o = null) {
  Re(e, t, 7, [
    n,
    o
  ]);
}
const fl = ps();
let ul = 0;
function al(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || fl, s = {
    uid: ul++,
    vnode: e,
    type: o,
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
    scope: new ni(
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
    propsOptions: _s(o, r),
    emitsOptions: Ds(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
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
  return process.env.NODE_ENV !== "production" ? s.ctx = hc(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Jc.bind(null, s), e.ce && e.ce(s), s;
}
let ee = null;
const Ts = () => ee || he;
let Nn, lo;
{
  const e = Wt(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  Nn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ee = n
  ), lo = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ut = n
  );
}
const Gt = (e) => {
  const t = ee;
  return Nn(e), e.scope.on(), () => {
    e.scope.off(), Nn(t);
  };
}, ir = () => {
  ee && ee.scope.off(), Nn(null);
}, pl = /* @__PURE__ */ Ke("slot,component");
function fo(e, { isNativeTag: t }) {
  (pl(e) || t(e)) && y(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function $s(e) {
  return e.vnode.shapeFlag & 4;
}
let Ut = !1;
function dl(e, t = !1, n = !1) {
  t && lo(t);
  const { props: o, children: r } = e.vnode, s = $s(e);
  xc(e, o, s, t), Fc(e, r, n || t);
  const i = s ? hl(e, t) : void 0;
  return t && lo(!1), i;
}
function hl(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && fo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        fo(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        is(s[i]);
    }
    o.compilerOptions && gl() && y(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, us), process.env.NODE_ENV !== "production" && gc(e);
  const { setup: r } = o;
  if (r) {
    xe();
    const s = e.setupContext = r.length > 1 ? _l(e) : null, i = Gt(e), l = bt(
      r,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Me(e.props) : e.props,
        s
      ]
    ), f = ho(l);
    if (Ve(), i(), (f || e.sp) && !Pt(e) && cs(e), f) {
      if (l.then(ir, ir), t)
        return l.then((d) => {
          cr(e, d, t);
        }).catch((d) => {
          Kt(d, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = o.name) != null ? n : "Anonymous";
        y(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      cr(e, l, t);
  } else
    Is(e, t);
}
function cr(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (process.env.NODE_ENV !== "production" && Tn(t) && y(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Yr(t), process.env.NODE_ENV !== "production" && mc(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && y(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Is(e, n);
}
let uo;
const gl = () => !uo;
function Is(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && uo && !o.render) {
      const r = o.template || To(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && He(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: f } = o, d = G(
          G(
            {
              isCustomElement: s,
              delimiters: l
            },
            i
          ),
          f
        );
        o.render = uo(r, d), process.env.NODE_ENV !== "production" && Le(e, "compile");
      }
    }
    e.render = o.render || z;
  }
  {
    const r = Gt(e);
    xe();
    try {
      Ec(e);
    } finally {
      Ve(), r();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === z && !t && (o.template ? y(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : y("Component is missing template or render function: ", o));
}
const lr = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return En(), Y(e, "get", ""), e[t];
  },
  set() {
    return y("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return y("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Y(e, "get", ""), e[t];
  }
};
function ml(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Y(e, "get", "$slots"), t[n];
    }
  });
}
function _l(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && y("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : X(n) && (o = "ref")), o !== "object" && y(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, lr));
      },
      get slots() {
        return o || (o = ml(e));
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, lr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Po(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yr(Oi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ut)
        return ut[n](e);
    },
    has(t, n) {
      return n in t || n in ut;
    }
  })) : e.proxy;
}
const El = /(?:^|[-_])\w/g, vl = (e) => e.replace(El, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function As(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $n(e, t, n = !1) {
  let o = As(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? vl(o) : n ? "App" : "Anonymous";
}
function Ms(e) {
  return $(e) && "__vccOpts" in e;
}
const Nl = (e, t) => {
  const n = Vi(e, t, Ut);
  if (process.env.NODE_ENV !== "production") {
    const o = Ts();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function bl() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!K(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (X(a)) {
        xe();
        const g = a.value;
        return Ve(), [
          "div",
          {},
          ["span", e, p(a)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (Et(a))
          return [
            "div",
            {},
            ["span", e, me(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${Qe(a) ? " (readonly)" : ""}`
          ];
        if (Qe(a))
          return [
            "div",
            {},
            ["span", e, me(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...s(a.$)
        ];
    }
  };
  function s(a) {
    const g = [];
    a.type.props && a.props && g.push(i("props", M(a.props))), a.setupState !== W && g.push(i("setup", a.setupState)), a.data !== W && g.push(i("data", M(a.data)));
    const D = f(a, "computed");
    D && g.push(i("computed", D));
    const I = f(a, "inject");
    return I && g.push(i("injected", I)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function i(a, g) {
    return g = G({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((D) => [
          "div",
          {},
          ["span", o, D + ": "],
          l(g[D], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : K(a) ? ["object", { object: g ? M(a) : a }] : ["span", n, String(a)];
  }
  function f(a, g) {
    const D = a.type;
    if ($(D))
      return;
    const I = {};
    for (const V in a.ctx)
      d(D, V, g) && (I[V] = a.ctx[V]);
    return I;
  }
  function d(a, g, D) {
    const I = a[D];
    if (T(I) && I.includes(g) || K(I) && g in I || a.extends && d(a.extends, g, D) || a.mixins && a.mixins.some((V) => d(V, g, D)))
      return !0;
  }
  function p(a) {
    return me(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const fr = "3.5.22", We = process.env.NODE_ENV !== "production" ? y : z;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ao;
const ur = typeof window < "u" && window.trustedTypes;
if (ur)
  try {
    ao = /* @__PURE__ */ ur.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && We(`Error creating trusted types policy: ${e}`);
  }
const Ps = ao ? (e) => ao.createHTML(e) : (e) => e, yl = "http://www.w3.org/2000/svg", Ol = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, ar = Ue && /* @__PURE__ */ Ue.createElement("template"), Dl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? Ue.createElementNS(yl, e) : t === "mathml" ? Ue.createElementNS(Ol, e) : n ? Ue.createElement(e, { is: n }) : Ue.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => Ue.createTextNode(e),
  createComment: (e) => Ue.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ue.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      ar.innerHTML = Ps(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ar.content;
      if (o === "svg" || o === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, wl = Symbol("_vtc");
function xl(e, t, n) {
  const o = e[wl];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const pr = Symbol("_vod"), Vl = Symbol("_vsh"), Sl = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Cl = /(?:^|;)\s*display\s*:/;
function Tl(e, t, n) {
  const o = e.style, r = J(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (J(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && cn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && cn(o, i, "");
    for (const i in n)
      i === "display" && (s = !0), cn(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[Sl];
      i && (n += ";" + i), o.cssText = n, s = Cl.test(n);
    }
  } else
    t && e.removeAttribute("style");
  pr in e && (e[pr] = s ? o.display : "", e[Vl] && (o.display = "none"));
}
const $l = /[^\\];\s*$/, dr = /\s*!important$/;
function cn(e, t, n) {
  if (T(n))
    n.forEach((o) => cn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && $l.test(n) && We(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Il(e, t);
    dr.test(n) ? e.setProperty(
      Ze(o),
      n.replace(dr, ""),
      "important"
    ) : e[o] = n;
  }
}
const hr = ["Webkit", "Moz", "ms"], Gn = {};
function Il(e, t) {
  const n = Gn[t];
  if (n)
    return n;
  let o = ye(t);
  if (o !== "filter" && o in e)
    return Gn[t] = o;
  o = On(o);
  for (let r = 0; r < hr.length; r++) {
    const s = hr[r] + o;
    if (s in e)
      return Gn[t] = s;
  }
  return t;
}
const gr = "http://www.w3.org/1999/xlink";
function mr(e, t, n, o, r, s = ti(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(gr, t.slice(6, t.length)) : e.setAttributeNS(gr, t, n) : n == null || s && !Sr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : tt(n) ? String(n) : n
  );
}
function _r(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ps(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Sr(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && We(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(r || t);
}
function Al(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Ml(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Er = Symbol("_vei");
function Pl(e, t, n, o, r = null) {
  const s = e[Er] || (e[Er] = {}), i = s[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? Nr(o, t) : o;
  else {
    const [l, f] = Rl(t);
    if (o) {
      const d = s[t] = Hl(
        process.env.NODE_ENV !== "production" ? Nr(o, t) : o,
        r
      );
      Al(e, l, d, f);
    } else
      i && (Ml(e, l, i, f), s[t] = void 0);
  }
}
const vr = /(?:Once|Passive|Capture)$/;
function Rl(e) {
  let t;
  if (vr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(vr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ze(e.slice(2)), t];
}
let Jn = 0;
const Fl = /* @__PURE__ */ Promise.resolve(), jl = () => Jn || (Fl.then(() => Jn = 0), Jn = Date.now());
function Hl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Re(
      Ll(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = jl(), n;
}
function Nr(e, t) {
  return $(e) || T(e) ? e : (We(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), z);
}
function Ll(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const br = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ul = (e, t, n, o, r, s) => {
  const i = r === "svg";
  t === "class" ? xl(e, o, i) : t === "style" ? Tl(e, n, o) : Bt(t) ? ln(t) || Pl(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Bl(e, t, o, i)) ? (_r(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mr(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !J(o)) ? _r(e, ye(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), mr(e, t, o, i));
};
function Bl(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && br(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return br(t) && J(n) ? !1 : t in e;
}
const Wl = /* @__PURE__ */ G({ patchProp: Ul }, Dl);
let yr;
function Kl() {
  return yr || (yr = Lc(Wl));
}
const kl = (...e) => {
  const t = Kl().createApp(...e);
  process.env.NODE_ENV !== "production" && (Gl(t), Jl(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Yl(o);
    if (!r)
      return;
    const s = t._component;
    !$(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, ql(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function ql(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gl(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Xs(t) || Zs(t) || Qs(t),
    writable: !1
  });
}
function Jl(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        We(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return We(o), n;
      },
      set() {
        We(o);
      }
    });
  }
}
function Yl(e) {
  if (J(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && We(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && We(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function zl() {
  bl();
}
process.env.NODE_ENV !== "production" && zl();
const Xl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Zl = /* @__PURE__ */ ec({
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
  }
}), Ql = { class: "abot-widget-test" };
function ef(e, t, n, o, r, s) {
  return tl(), rl("div", Ql, [
    vn("p", {
      style: Dn({ color: e.config.primaryColor })
    }, "This is a very simple test of abot-widget", 4),
    vn("p", null, "containerId: " + Tr(e.containerId), 1)
  ]);
}
const tf = /* @__PURE__ */ Xl(Zl, [["render", ef]]);
function Or() {
  const e = document.currentScript;
  if (!e)
    return;
  const t = e.src, o = new URL(t).searchParams.get("config");
  if (!o) {
    console.error("ABot: Missing config parameter in script URL");
    return;
  }
  Rs(o);
}
async function Rs(e) {
  try {
    const t = await nf(e), n = `abot-container-${e}`;
    rf(n), kl(tf, {
      config: t,
      containerId: n
    }).mount(`#${n}`), console.log("✅ ABot客服组件加载成功", t);
  } catch (t) {
    console.error("❌ ABot初始化失败:", t);
  }
}
async function nf(e) {
  try {
    const t = await fetch(
      `https://api.yourdomain.com/configs/${e}`
    );
    if (!t.ok)
      throw new Error("配置获取失败");
    return await t.json();
  } catch (t) {
    return console.warn("使用默认配置:", t), of(e);
  }
}
function of(e) {
  return {
    configId: e,
    theme: "light",
    position: "bottom-right",
    primaryColor: "#1890ff",
    headerText: "在线客服",
    autoOpen: !1,
    apiUrl: "https://api.yourdomain.com"
  };
}
function rf(e) {
  if (document.getElementById(e))
    return;
  const t = document.createElement("div");
  t.id = e, t.className = "abot-widget-container", document.body.appendChild(t);
}
window.ABot = {
  init: function(e) {
    e.configId ? Rs(e.configId) : console.error("ABot.init: configId is required");
  }
};
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", Or) : Or();
