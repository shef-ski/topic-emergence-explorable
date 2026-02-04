(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-lg:1.125rem;--tw-text-lg--line-height:calc(1.75/1.125);--tw-text-xl:1.25rem;--tw-text-xl--line-height:calc(1.75/1.25);--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const yo = {
  display_type: "svg",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function de(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function mo(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Vr(t) {
  let e, n, r;
  t.length !== 2 ? (e = de, n = (s, u) => de(t(s), u), r = (s, u) => t(s) - u) : (e = t === de || t === mo ? t : wo, n = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (e(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        n(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (e(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        n(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function wo() {
  return 0;
}
function vo(t) {
  return t === null ? NaN : +t;
}
const xo = Vr(de), bo = xo.right;
Vr(vo).center;
const Mo = Math.sqrt(50), $o = Math.sqrt(10), Ao = Math.sqrt(2);
function ve(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Mo ? 10 : o >= $o ? 5 : o >= Ao ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(e * l), s / l < t && ++s, u / l > e && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(e / l), s * l < t && ++s, u * l > e && --u), u < s && 0.5 <= n && n < 2 ? ve(t, e, n * 2) : [s, u, l];
}
function tn(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? ve(e, t, n) : ve(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function en(t, e, n) {
  return e = +e, t = +t, n = +n, ve(t, e, n)[2];
}
function To(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? en(e, t, n) : en(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function ie(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function So(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
function Po(t, e) {
  let n = 0;
  for (let r of t)
    (r = +r) && (n += r);
  return n;
}
var Eo = { value: () => {
} };
function Mn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new pe(n);
}
function pe(t) {
  this._ = t;
}
function ko(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
pe.prototype = Mn.prototype = {
  constructor: pe,
  on: function(t, e) {
    var n = this._, r = ko(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = No(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = Kn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Kn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new pe(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function No(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Kn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Eo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var nn = "http://www.w3.org/1999/xhtml";
const Wn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: nn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ee(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Wn.hasOwnProperty(e) ? { space: Wn[e], local: t } : t;
}
function zo(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === nn && e.documentElement.namespaceURI === nn ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Oo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Kr(t) {
  var e = Ee(t);
  return (e.local ? Oo : zo)(e);
}
function Io() {
}
function $n(t) {
  return t == null ? Io : function() {
    return this.querySelector(t);
  };
}
function Co(t) {
  typeof t != "function" && (t = $n(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new C(r, this._parents);
}
function Ro(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Fo() {
  return [];
}
function Wr(t) {
  return t == null ? Fo : function() {
    return this.querySelectorAll(t);
  };
}
function Lo(t) {
  return function() {
    return Ro(t.apply(this, arguments));
  };
}
function Do(t) {
  typeof t == "function" ? t = Lo(t) : t = Wr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new C(r, i);
}
function Zr(t) {
  return function() {
    return this.matches(t);
  };
}
function Jr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Ho = Array.prototype.find;
function Bo(t) {
  return function() {
    return Ho.call(this.children, t);
  };
}
function Go() {
  return this.firstElementChild;
}
function qo(t) {
  return this.select(t == null ? Go : Bo(typeof t == "function" ? t : Jr(t)));
}
var Xo = Array.prototype.filter;
function Uo() {
  return Array.from(this.children);
}
function Yo(t) {
  return function() {
    return Xo.call(this.children, t);
  };
}
function Vo(t) {
  return this.selectAll(t == null ? Uo : Yo(typeof t == "function" ? t : Jr(t)));
}
function Ko(t) {
  typeof t != "function" && (t = Zr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new C(r, this._parents);
}
function Qr(t) {
  return new Array(t.length);
}
function Wo() {
  return new C(this._enter || this._groups.map(Qr), this._parents);
}
function xe(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
xe.prototype = {
  constructor: xe,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Zo(t) {
  return function() {
    return t;
  };
}
function Jo(t, e, n, r, i, o) {
  for (var a = 0, s, u = e.length, l = o.length; a < l; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new xe(t, o[a]);
  for (; a < u; ++a)
    (s = e[a]) && (i[a] = s);
}
function Qo(t, e, n, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = e.length, f = o.length, h = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = e[s]) && (h[s] = g = a.call(u, u.__data__, s, e) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : n[s] = new xe(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = e[s]) && l.get(h[s]) === u && (i[s] = u);
}
function jo(t) {
  return t.__data__;
}
function ta(t, e) {
  if (!arguments.length) return Array.from(this, jo);
  var n = e ? Qo : Jo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Zo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, g = ea(t.call(c, c && c.__data__, l, r)), d = g.length, p = s[l] = new Array(d), w = a[l] = new Array(d), _ = u[l] = new Array(h);
    n(c, f, p, w, _, g, e);
    for (var M = 0, A = 0, y, v; M < d; ++M)
      if (y = p[M]) {
        for (M >= A && (A = M + 1); !(v = w[A]) && ++A < d; ) ;
        y._next = v || null;
      }
  }
  return a = new C(a, r), a._enter = s, a._exit = u, a;
}
function ea(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function na() {
  return new C(this._exit || this._groups.map(Qr), this._parents);
}
function ra(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function ia(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = n[u], c = r[u], f = l.length, h = s[u] = new Array(f), g, d = 0; d < f; ++d)
      (g = l[d] || c[d]) && (h[d] = g);
  for (; u < i; ++u)
    s[u] = n[u];
  return new C(s, this._parents);
}
function oa() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function aa(t) {
  t || (t = sa);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(e);
  }
  return new C(i, this._parents).order();
}
function sa(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ua() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function la() {
  return Array.from(this);
}
function ca() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function fa() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function ha() {
  return !this.node();
}
function da(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function pa(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ga(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function _a(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ya(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ma(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function wa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function va(t, e) {
  var n = Ee(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? ga : pa : typeof e == "function" ? n.local ? wa : ma : n.local ? ya : _a)(n, e));
}
function jr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function xa(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ba(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Ma(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function $a(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? xa : typeof e == "function" ? Ma : ba)(t, e, n ?? "")) : Pt(this.node(), t);
}
function Pt(t, e) {
  return t.style.getPropertyValue(e) || jr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Aa(t) {
  return function() {
    delete this[t];
  };
}
function Ta(t, e) {
  return function() {
    this[t] = e;
  };
}
function Sa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Pa(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Aa : typeof e == "function" ? Sa : Ta)(t, e)) : this.node()[t];
}
function ti(t) {
  return t.trim().split(/^|\s+/);
}
function An(t) {
  return t.classList || new ei(t);
}
function ei(t) {
  this._node = t, this._names = ti(t.getAttribute("class") || "");
}
ei.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ni(t, e) {
  for (var n = An(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function ri(t, e) {
  for (var n = An(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Ea(t) {
  return function() {
    ni(this, t);
  };
}
function ka(t) {
  return function() {
    ri(this, t);
  };
}
function Na(t, e) {
  return function() {
    (e.apply(this, arguments) ? ni : ri)(this, t);
  };
}
function za(t, e) {
  var n = ti(t + "");
  if (arguments.length < 2) {
    for (var r = An(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Na : e ? Ea : ka)(n, e));
}
function Oa() {
  this.textContent = "";
}
function Ia(t) {
  return function() {
    this.textContent = t;
  };
}
function Ca(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ra(t) {
  return arguments.length ? this.each(t == null ? Oa : (typeof t == "function" ? Ca : Ia)(t)) : this.node().textContent;
}
function Fa() {
  this.innerHTML = "";
}
function La(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Da(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ha(t) {
  return arguments.length ? this.each(t == null ? Fa : (typeof t == "function" ? Da : La)(t)) : this.node().innerHTML;
}
function Ba() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ga() {
  return this.each(Ba);
}
function qa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xa() {
  return this.each(qa);
}
function Ua(t) {
  var e = typeof t == "function" ? t : Kr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ya() {
  return null;
}
function Va(t, e) {
  var n = typeof t == "function" ? t : Kr(t), r = e == null ? Ya : typeof e == "function" ? e : $n(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ka() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Wa() {
  return this.each(Ka);
}
function Za() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ja() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Qa(t) {
  return this.select(t ? Ja : Za);
}
function ja(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ts(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function es(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function ns(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function rs(t, e, n) {
  return function() {
    var r = this.__on, i, o = ts(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function is(t, e, n) {
  var r = es(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = e ? rs : ns, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function ii(t, e, n) {
  var r = jr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function os(t, e) {
  return function() {
    return ii(this, t, e);
  };
}
function as(t, e) {
  return function() {
    return ii(this, t, e.apply(this, arguments));
  };
}
function ss(t, e) {
  return this.each((typeof e == "function" ? as : os)(t, e));
}
function* us() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var oi = [null];
function C(t, e) {
  this._groups = t, this._parents = e;
}
function Jt() {
  return new C([[document.documentElement]], oi);
}
function ls() {
  return this;
}
C.prototype = Jt.prototype = {
  constructor: C,
  select: Co,
  selectAll: Do,
  selectChild: qo,
  selectChildren: Vo,
  filter: Ko,
  data: ta,
  enter: Wo,
  exit: na,
  join: ra,
  merge: ia,
  selection: ls,
  order: oa,
  sort: aa,
  call: ua,
  nodes: la,
  node: ca,
  size: fa,
  empty: ha,
  each: da,
  attr: va,
  style: $a,
  property: Pa,
  classed: za,
  text: Ra,
  html: Ha,
  raise: Ga,
  lower: Xa,
  append: Ua,
  insert: Va,
  remove: Wa,
  clone: Qa,
  datum: ja,
  on: is,
  dispatch: ss,
  [Symbol.iterator]: us
};
function S(t) {
  return typeof t == "string" ? new C([[document.querySelector(t)]], [document.documentElement]) : new C([[t]], oi);
}
function cs(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function rn(t, e) {
  if (t = cs(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const fs = { passive: !1 }, Gt = { capture: !0, passive: !1 };
function Ue(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function hs(t) {
  var e = t.document.documentElement, n = S(t).on("dragstart.drag", At, Gt);
  "onselectstart" in e ? n.on("selectstart.drag", At, Gt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ds(t, e) {
  var n = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  e && (r.on("click.drag", At, Gt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const oe = (t) => () => t;
function on(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
on.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function ps(t) {
  return !t.ctrlKey && !t.button;
}
function gs() {
  return this.parentNode;
}
function _s(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ys() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ms() {
  var t = ps, e = gs, n = _s, r = ys, i = {}, o = Mn("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(y) {
    y.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, fs).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(y, v) {
    if (!(c || !t.call(this, y, v))) {
      var P = A(this, e.call(this, y, v), y, v, "mouse");
      P && (S(y.view).on("mousemove.drag", d, Gt).on("mouseup.drag", p, Gt), hs(y.view), Ue(y), l = !1, s = y.clientX, u = y.clientY, P("start", y));
    }
  }
  function d(y) {
    if (At(y), !l) {
      var v = y.clientX - s, P = y.clientY - u;
      l = v * v + P * P > f;
    }
    i.mouse("drag", y);
  }
  function p(y) {
    S(y.view).on("mousemove.drag mouseup.drag", null), ds(y.view, l), At(y), i.mouse("end", y);
  }
  function w(y, v) {
    if (t.call(this, y, v)) {
      var P = y.changedTouches, E = e.call(this, y, v), N = P.length, X, W;
      for (X = 0; X < N; ++X)
        (W = A(this, E, y, v, P[X].identifier, P[X])) && (Ue(y), W("start", y, P[X]));
    }
  }
  function _(y) {
    var v = y.changedTouches, P = v.length, E, N;
    for (E = 0; E < P; ++E)
      (N = i[v[E].identifier]) && (At(y), N("drag", y, v[E]));
  }
  function M(y) {
    var v = y.changedTouches, P = v.length, E, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < P; ++E)
      (N = i[v[E].identifier]) && (Ue(y), N("end", y, v[E]));
  }
  function A(y, v, P, E, N, X) {
    var W = o.copy(), x = rn(X || P, v), U, z, L;
    if ((L = n.call(y, new on("beforestart", {
      sourceEvent: P,
      target: h,
      identifier: N,
      active: a,
      x: x[0],
      y: x[1],
      dx: 0,
      dy: 0,
      dispatch: W
    }), E)) != null)
      return U = L.x - x[0] || 0, z = L.y - x[1] || 0, function re(st, ct, bt) {
        var F = x, Xe;
        switch (st) {
          case "start":
            i[N] = re, Xe = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            x = rn(bt || ct, v), Xe = a;
            break;
        }
        W.call(
          st,
          y,
          new on(st, {
            sourceEvent: ct,
            subject: L,
            target: h,
            identifier: N,
            active: Xe,
            x: x[0] + U,
            y: x[1] + z,
            dx: x[0] - F[0],
            dy: x[1] - F[1],
            dispatch: W
          }),
          E
        );
      };
  }
  return h.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : oe(!!y), h) : t;
  }, h.container = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : oe(y), h) : e;
  }, h.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : oe(y), h) : n;
  }, h.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : oe(!!y), h) : r;
  }, h.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? h : y;
  }, h.clickDistance = function(y) {
    return arguments.length ? (f = (y = +y) * y, h) : Math.sqrt(f);
  }, h;
}
function Tn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function ai(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Qt() {
}
var qt = 0.7, be = 1 / qt, Tt = "\\s*([+-]?\\d+)\\s*", Xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ws = /^#([0-9a-f]{3,8})$/, vs = new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`), xs = new RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), bs = new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${Xt}\\)$`), Ms = new RegExp(`^rgba\\(${Y},${Y},${Y},${Xt}\\)$`), $s = new RegExp(`^hsl\\(${Xt},${Y},${Y}\\)$`), As = new RegExp(`^hsla\\(${Xt},${Y},${Y},${Xt}\\)$`), Zn = {
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
  yellowgreen: 10145074
};
Tn(Qt, _t, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Jn,
  // Deprecated! Use color.formatHex.
  formatHex: Jn,
  formatHex8: Ts,
  formatHsl: Ss,
  formatRgb: Qn,
  toString: Qn
});
function Jn() {
  return this.rgb().formatHex();
}
function Ts() {
  return this.rgb().formatHex8();
}
function Ss() {
  return si(this).formatHsl();
}
function Qn() {
  return this.rgb().formatRgb();
}
function _t(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = ws.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? jn(e) : n === 3 ? new O(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ae(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ae(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = vs.exec(t)) ? new O(e[1], e[2], e[3], 1) : (e = xs.exec(t)) ? new O(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = bs.exec(t)) ? ae(e[1], e[2], e[3], e[4]) : (e = Ms.exec(t)) ? ae(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = $s.exec(t)) ? nr(e[1], e[2] / 100, e[3] / 100, 1) : (e = As.exec(t)) ? nr(e[1], e[2] / 100, e[3] / 100, e[4]) : Zn.hasOwnProperty(t) ? jn(Zn[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function jn(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ae(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new O(t, e, n, r);
}
function Ps(t) {
  return t instanceof Qt || (t = _t(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function an(t, e, n, r) {
  return arguments.length === 1 ? Ps(t) : new O(t, e, n, r ?? 1);
}
function O(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Tn(O, an, ai(Qt, {
  brighter(t) {
    return t = t == null ? be : Math.pow(be, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(dt(this.r), dt(this.g), dt(this.b), Me(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: tr,
  // Deprecated! Use color.formatHex.
  formatHex: tr,
  formatHex8: Es,
  formatRgb: er,
  toString: er
}));
function tr() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}`;
}
function Es() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}${ht((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function er() {
  const t = Me(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${dt(this.r)}, ${dt(this.g)}, ${dt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Me(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function dt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ht(t) {
  return t = dt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function nr(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new H(t, e, n, r);
}
function si(t) {
  if (t instanceof H) return new H(t.h, t.s, t.l, t.opacity);
  if (t instanceof Qt || (t = _t(t)), !t) return new H();
  if (t instanceof H) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new H(a, s, u, t.opacity);
}
function ks(t, e, n, r) {
  return arguments.length === 1 ? si(t) : new H(t, e, n, r ?? 1);
}
function H(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Tn(H, ks, ai(Qt, {
  brighter(t) {
    return t = t == null ? be : Math.pow(be, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? qt : Math.pow(qt, t), new H(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new O(
      Ye(t >= 240 ? t - 240 : t + 120, i, r),
      Ye(t, i, r),
      Ye(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new H(rr(this.h), se(this.s), se(this.l), Me(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Me(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${rr(this.h)}, ${se(this.s) * 100}%, ${se(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function rr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function se(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ye(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Sn = (t) => () => t;
function Ns(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function zs(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Os(t) {
  return (t = +t) == 1 ? ui : function(e, n) {
    return n - e ? zs(e, n, t) : Sn(isNaN(e) ? n : e);
  };
}
function ui(t, e) {
  var n = e - t;
  return n ? Ns(t, n) : Sn(isNaN(t) ? e : t);
}
const $e = (function t(e) {
  var n = Os(e);
  function r(i, o) {
    var a = n((i = an(i)).r, (o = an(o)).r), s = n(i.g, o.g), u = n(i.b, o.b), l = ui(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Is(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Cs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Rs(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Pn(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Fs(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function D(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Ls(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Pn(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ve = new RegExp(sn.source, "g");
function Ds(t) {
  return function() {
    return t;
  };
}
function Hs(t) {
  return function(e) {
    return t(e) + "";
  };
}
function li(t, e) {
  var n = sn.lastIndex = Ve.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", e = e + ""; (r = sn.exec(t)) && (i = Ve.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: D(r, i) })), n = Ve.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Hs(u[0].x) : Ds(e) : (e = u.length, function(l) {
    for (var c = 0, f; c < e; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function Pn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Sn(e) : (n === "number" ? D : n === "string" ? (r = _t(e)) ? (e = r, $e) : li : e instanceof _t ? $e : e instanceof Date ? Fs : Cs(e) ? Is : Array.isArray(e) ? Rs : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ls : D)(t, e);
}
function Bs(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var ir = 180 / Math.PI, un = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ci(t, e, n, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (u = t * n + e * r) && (n -= t * u, r -= e * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), t * r < e * n && (t = -t, e = -e, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * ir,
    skewX: Math.atan(u) * ir,
    scaleX: a,
    scaleY: s
  };
}
var ue;
function Gs(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? un : ci(e.a, e.b, e.c, e.d, e.e, e.f);
}
function qs(t) {
  return t == null || (ue || (ue = document.createElementNS("http://www.w3.org/2000/svg", "g")), ue.setAttribute("transform", t), !(t = ue.transform.baseVal.consolidate())) ? un : (t = t.matrix, ci(t.a, t.b, t.c, t.d, t.e, t.f));
}
function fi(t, e, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push("translate(", null, e, null, n);
      d.push({ i: p - 4, x: D(l, f) }, { i: p - 2, x: D(c, h) });
    } else (f || h) && g.push("translate(" + f + e + h + n);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: D(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: D(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push(i(g) + "scale(", null, ",", null, ")");
      d.push({ i: p - 4, x: D(l, f) }, { i: p - 2, x: D(c, h) });
    } else (f !== 1 || h !== 1) && g.push(i(g) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(g) {
      for (var d = -1, p = h.length, w; ++d < p; ) f[(w = h[d]).i] = w.x(g);
      return f.join("");
    };
  };
}
var Xs = fi(Gs, "px, ", "px)", "deg)"), Us = fi(qs, ", ", ")", ")"), Et = 0, It = 0, zt = 0, hi = 1e3, Ae, Ct, Te = 0, yt = 0, ke = 0, Ut = typeof performance == "object" && performance.now ? performance : Date, di = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ne() {
  return yt || (di(Ys), yt = Ut.now() + ke);
}
function Ys() {
  yt = 0;
}
function Yt() {
  this._call = this._time = this._next = null;
}
Yt.prototype = pi.prototype = {
  constructor: Yt,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Ne() : +n) + (e == null ? 0 : +e), !this._next && Ct !== this && (Ct ? Ct._next = this : Ae = this, Ct = this), this._call = t, this._time = n, ln();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ln());
  }
};
function pi(t, e, n) {
  var r = new Yt();
  return r.restart(t, e, n), r;
}
function Vs() {
  Ne(), ++Et;
  for (var t = Ae, e; t; )
    (e = yt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Et;
}
function or() {
  yt = (Te = Ut.now()) + ke, Et = It = 0;
  try {
    Vs();
  } finally {
    Et = 0, Ws(), yt = 0;
  }
}
function Ks() {
  var t = Ut.now(), e = t - Te;
  e > hi && (ke -= e, Te = t);
}
function Ws() {
  for (var t, e = Ae, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ae = n);
  Ct = t, ln(r);
}
function ln(t) {
  if (!Et) {
    It && (It = clearTimeout(It));
    var e = t - yt;
    e > 24 ? (t < 1 / 0 && (It = setTimeout(or, t - Ut.now() - ke)), zt && (zt = clearInterval(zt))) : (zt || (Te = Ut.now(), zt = setInterval(Ks, hi)), Et = 1, di(or));
  }
}
function ar(t, e, n) {
  var r = new Yt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Zs(t, e, n) {
  var r = new Yt(), i = e;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Ne() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, e, n), r;
}
var Js = Mn("start", "end", "cancel", "interrupt"), Qs = [], gi = 0, sr = 1, cn = 2, ge = 3, ur = 4, fn = 5, _e = 6;
function ze(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  js(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Js,
    tween: Qs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: gi
  });
}
function En(t, e) {
  var n = G(t, e);
  if (n.state > gi) throw new Error("too late; already scheduled");
  return n;
}
function K(t, e) {
  var n = G(t, e);
  if (n.state > ge) throw new Error("too late; already running");
  return n;
}
function G(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function js(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = pi(o, 0, n.time);
  function o(l) {
    n.state = sr, n.timer.restart(a, n.delay, n.time), n.delay <= l && a(l - n.delay);
  }
  function a(l) {
    var c, f, h, g;
    if (n.state !== sr) return u();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === ge) return ar(a);
        g.state === ur ? (g.state = _e, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[c]) : +c < e && (g.state = _e, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[c]);
      }
    if (ar(function() {
      n.state === ge && (n.state = ur, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = cn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === cn) {
      for (n.state = ge, i = new Array(h = n.tween.length), c = 0, f = -1; c < h; ++c)
        (g = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = g);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = fn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    n.state === fn && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = _e, n.timer.stop(), delete r[e];
    for (var l in r) return;
    delete t.__transition;
  }
}
function tu(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > cn && r.state < fn, r.state = _e, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function eu(t) {
  return this.each(function() {
    tu(this, t);
  });
}
function nu(t, e) {
  var n, r;
  return function() {
    var i = K(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function ru(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = K(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === e) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function iu(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = G(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? nu : ru)(n, t, e));
}
function kn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = K(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return G(i, r).value[e];
  };
}
function _i(t, e) {
  var n;
  return (typeof e == "number" ? D : e instanceof _t ? $e : (n = _t(e)) ? (e = n, $e) : li)(t, e);
}
function ou(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function au(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function su(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function uu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function lu(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function cu(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function fu(t, e) {
  var n = Ee(t), r = n === "transform" ? Us : _i;
  return this.attrTween(t, typeof e == "function" ? (n.local ? cu : lu)(n, r, kn(this, "attr." + t, e)) : e == null ? (n.local ? au : ou)(n) : (n.local ? uu : su)(n, r, e));
}
function hu(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function du(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function pu(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && du(t, o)), n;
  }
  return i._value = e, i;
}
function gu(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && hu(t, o)), n;
  }
  return i._value = e, i;
}
function _u(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ee(t);
  return this.tween(n, (r.local ? pu : gu)(r, e));
}
function yu(t, e) {
  return function() {
    En(this, t).delay = +e.apply(this, arguments);
  };
}
function mu(t, e) {
  return e = +e, function() {
    En(this, t).delay = e;
  };
}
function wu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? yu : mu)(e, t)) : G(this.node(), e).delay;
}
function vu(t, e) {
  return function() {
    K(this, t).duration = +e.apply(this, arguments);
  };
}
function xu(t, e) {
  return e = +e, function() {
    K(this, t).duration = e;
  };
}
function bu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? vu : xu)(e, t)) : G(this.node(), e).duration;
}
function Mu(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    K(this, t).ease = e;
  };
}
function $u(t) {
  var e = this._id;
  return arguments.length ? this.each(Mu(e, t)) : G(this.node(), e).ease;
}
function Au(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    K(this, t).ease = n;
  };
}
function Tu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Au(this._id, t));
}
function Su(t) {
  typeof t != "function" && (t = Zr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new et(r, this._parents, this._name, this._id);
}
function Pu(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = e[s], l = n[s], c = u.length, f = a[s] = new Array(c), h, g = 0; g < c; ++g)
      (h = u[g] || l[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = e[s];
  return new et(a, this._parents, this._name, this._id);
}
function Eu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ku(t, e, n) {
  var r, i, o = Eu(e) ? En : K;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function Nu(t, e) {
  var n = this._id;
  return arguments.length < 2 ? G(this.node(), n).on.on(t) : this.each(ku(n, t, e));
}
function zu(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ou() {
  return this.on("end.remove", zu(this._id));
}
function Iu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = $n(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, ze(l[h], e, n, h, l, G(c, n)));
  return new et(o, this._parents, e, n);
}
function Cu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Wr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), g, d = G(c, n), p = 0, w = h.length; p < w; ++p)
          (g = h[p]) && ze(g, e, n, p, h, d);
        o.push(h), a.push(c);
      }
  return new et(o, a, e, n);
}
var Ru = Jt.prototype.constructor;
function Fu() {
  return new Ru(this._groups, this._parents);
}
function Lu(t, e) {
  var n, r, i;
  return function() {
    var o = Pt(this, t), a = (this.style.removeProperty(t), Pt(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function yi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Du(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = Pt(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Hu(t, e, n) {
  var r, i, o;
  return function() {
    var a = Pt(this, t), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Pt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s));
  };
}
function Bu(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var u = K(this, t), l = u.on, c = u.value[o] == null ? s || (s = yi(e)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(a, i = c), u.on = r;
  };
}
function Gu(t, e, n) {
  var r = (t += "") == "transform" ? Xs : _i;
  return e == null ? this.styleTween(t, Lu(t, r)).on("end.style." + t, yi(t)) : typeof e == "function" ? this.styleTween(t, Hu(t, r, kn(this, "style." + t, e))).each(Bu(this._id, t)) : this.styleTween(t, Du(t, r, e), n).on("end.style." + t, null);
}
function qu(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Xu(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && qu(t, a, n)), r;
  }
  return o._value = e, o;
}
function Uu(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Xu(t, e, n ?? ""));
}
function Yu(t) {
  return function() {
    this.textContent = t;
  };
}
function Vu(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Ku(t) {
  return this.tween("text", typeof t == "function" ? Vu(kn(this, "text", t)) : Yu(t == null ? "" : t + ""));
}
function Wu(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Zu(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Wu(i)), e;
  }
  return r._value = t, r;
}
function Ju(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Zu(t));
}
function Qu() {
  for (var t = this._name, e = this._id, n = mi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = G(u, e);
        ze(u, t, n, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new et(r, this._parents, t, n);
}
function ju() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var l = K(this, r), c = l.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(u)), l.on = e;
    }), i === 0 && o();
  });
}
var tl = 0;
function et(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function mi() {
  return ++tl;
}
var Z = Jt.prototype;
et.prototype = {
  constructor: et,
  select: Iu,
  selectAll: Cu,
  selectChild: Z.selectChild,
  selectChildren: Z.selectChildren,
  filter: Su,
  merge: Pu,
  selection: Fu,
  transition: Qu,
  call: Z.call,
  nodes: Z.nodes,
  node: Z.node,
  size: Z.size,
  empty: Z.empty,
  each: Z.each,
  on: Nu,
  attr: fu,
  attrTween: _u,
  style: Gu,
  styleTween: Uu,
  text: Ku,
  textTween: Ju,
  remove: Ou,
  tween: iu,
  delay: wu,
  duration: bu,
  ease: $u,
  easeVarying: Tu,
  end: ju,
  [Symbol.iterator]: Z[Symbol.iterator]
};
const el = (t) => +t;
function nl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var rl = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: nl
};
function il(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function ol(t) {
  var e, n;
  t instanceof et ? (e = t._id, t = t._name) : (e = mi(), (n = rl).time = Ne(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && ze(u, t, e, l, a, n || il(u, e));
  return new et(r, this._parents, t, e);
}
Jt.prototype.interrupt = eu;
Jt.prototype.transition = ol;
const hn = Math.PI, dn = 2 * hn, ft = 1e-6, al = dn - ft;
function wi(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function sl(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return wi;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class vi {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? wi : sl(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, o, a) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(e, n, r, i, o) {
    if (e = +e, n = +n, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - e, l = i - n, c = a - e, f = s - n, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > ft) if (!(Math.abs(f * u - l * c) > ft) || !o)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let g = r - a, d = i - s, p = u * u + l * l, w = g * g + d * d, _ = Math.sqrt(p), M = Math.sqrt(h), A = o * Math.tan((hn - Math.acos((p + h - w) / (2 * _ * M))) / 2), y = A / M, v = A / _;
      Math.abs(y - 1) > ft && this._append`L${e + y * c},${n + y * f}`, this._append`A${o},${o},0,0,${+(f * g > c * d)},${this._x1 = e + v * u},${this._y1 = n + v * l}`;
    }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = e + s, c = n + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ft || Math.abs(this._y1 - c) > ft) && this._append`L${l},${c}`, r && (h < 0 && (h = h % dn + dn), h > al ? this._append`A${r},${r},0,1,${f},${e - s},${n - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ft && this._append`A${r},${r},0,${+(h >= hn)},${f},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function q() {
  return new vi();
}
q.prototype = vi.prototype;
function ul(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Se(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function kt(t) {
  return t = Se(Math.abs(t)), t ? t[1] : NaN;
}
function ll(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(n.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function cl(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var fl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Vt(t) {
  if (!(e = fl.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Nn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Vt.prototype = Nn.prototype;
function Nn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Nn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function hl(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var xi;
function dl(t, e) {
  var n = Se(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (xi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Se(t, Math.max(0, e + o - 1))[0];
}
function lr(t, e) {
  var n = Se(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const cr = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: ul,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => lr(t * 100, e),
  r: lr,
  s: dl,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function fr(t) {
  return t;
}
var hr = Array.prototype.map, dr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function pl(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? fr : ll(hr.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? fr : cl(hr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = Vt(f);
    var h = f.fill, g = f.align, d = f.sign, p = f.symbol, w = f.zero, _ = f.width, M = f.comma, A = f.precision, y = f.trim, v = f.type;
    v === "n" ? (M = !0, v = "g") : cr[v] || (A === void 0 && (A = 12), y = !0, v = "g"), (w || h === "0" && g === "=") && (w = !0, h = "0", g = "=");
    var P = p === "$" ? n : p === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", E = p === "$" ? r : /[%p]/.test(v) ? a : "", N = cr[v], X = /[defgprs%]/.test(v);
    A = A === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function W(x) {
      var U = P, z = E, L, re, st;
      if (v === "c")
        z = N(x) + z, x = "";
      else {
        x = +x;
        var ct = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? u : N(Math.abs(x), A), y && (x = hl(x)), ct && +x == 0 && d !== "+" && (ct = !1), U = (ct ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + U, z = (v === "s" ? dr[8 + xi / 3] : "") + z + (ct && d === "(" ? ")" : ""), X) {
          for (L = -1, re = x.length; ++L < re; )
            if (st = x.charCodeAt(L), 48 > st || st > 57) {
              z = (st === 46 ? i + x.slice(L + 1) : x.slice(L)) + z, x = x.slice(0, L);
              break;
            }
        }
      }
      M && !w && (x = e(x, 1 / 0));
      var bt = U.length + x.length + z.length, F = bt < _ ? new Array(_ - bt + 1).join(h) : "";
      switch (M && w && (x = e(F + x, F.length ? _ - z.length : 1 / 0), F = ""), g) {
        case "<":
          x = U + x + z + F;
          break;
        case "=":
          x = U + F + x + z;
          break;
        case "^":
          x = F.slice(0, bt = F.length >> 1) + U + x + z + F.slice(bt);
          break;
        default:
          x = F + U + x + z;
          break;
      }
      return o(x);
    }
    return W.toString = function() {
      return f + "";
    }, W;
  }
  function c(f, h) {
    var g = l((f = Vt(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(kt(h) / 3))) * 3, p = Math.pow(10, -d), w = dr[8 + d / 3];
    return function(_) {
      return g(p * _) + w;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var le, jt, bi;
gl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function gl(t) {
  return le = pl(t), jt = le.format, bi = le.formatPrefix, le;
}
function _l(t) {
  return Math.max(0, -kt(Math.abs(t)));
}
function yl(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(kt(e) / 3))) * 3 - kt(Math.abs(t)));
}
function ml(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, kt(e) - kt(t)) + 1;
}
function Mi(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
function wl(t) {
  return function() {
    return t;
  };
}
function vl(t) {
  return +t;
}
var pr = [0, 1];
function Mt(t) {
  return t;
}
function pn(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : wl(isNaN(e) ? NaN : 0.5);
}
function xl(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function bl(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = pn(i, r), o = n(a, o)) : (r = pn(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function Ml(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = pn(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var u = bo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function $i(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Ai() {
  var t = pr, e = pr, n = Pn, r, i, o, a = Mt, s, u, l;
  function c() {
    var h = Math.min(t.length, e.length);
    return a !== Mt && (a = xl(t[0], t[h - 1])), s = h > 2 ? Ml : bl, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), e, n)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(e, t.map(r), D)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, vl), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), c()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = Bs, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : Mt, c()) : a !== Mt;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, c()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return r = h, i = g, c();
  };
}
function $l() {
  return Ai()(Mt, Mt);
}
function Al(t, e, n, r) {
  var i = To(t, e, n), o;
  switch (r = Vt(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = yl(i, a)) && (r.precision = o), bi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = ml(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = _l(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return jt(r);
}
function Tl(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return tn(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Al(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = en(a, s, n), l === u)
        return r[i] = a, r[o] = s, e(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function B() {
  var t = $l();
  return t.copy = function() {
    return $i(t, B());
  }, Mi.apply(t, arguments), Tl(t);
}
function Sl(t, e) {
  t = t.slice();
  var n = 0, r = t.length - 1, i = t[n], o = t[r], a;
  return o < i && (a = n, n = r, r = a, a = i, i = o, o = a), t[n] = e.floor(i), t[r] = e.ceil(o), t;
}
function gr(t) {
  return Math.log(t);
}
function _r(t) {
  return Math.exp(t);
}
function Pl(t) {
  return -Math.log(-t);
}
function El(t) {
  return -Math.exp(-t);
}
function kl(t) {
  return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
}
function Nl(t) {
  return t === 10 ? kl : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
}
function zl(t) {
  return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), (e) => Math.log(e) / t);
}
function yr(t) {
  return (e, n) => -t(-e, n);
}
function Ol(t) {
  const e = t(gr, _r), n = e.domain;
  let r = 10, i, o;
  function a() {
    return i = zl(r), o = Nl(r), n()[0] < 0 ? (i = yr(i), o = yr(o), t(Pl, El)) : t(gr, _r), e;
  }
  return e.base = function(s) {
    return arguments.length ? (r = +s, a()) : r;
  }, e.domain = function(s) {
    return arguments.length ? (n(s), a()) : n();
  }, e.ticks = (s) => {
    const u = n();
    let l = u[0], c = u[u.length - 1];
    const f = c < l;
    f && ([l, c] = [c, l]);
    let h = i(l), g = i(c), d, p;
    const w = s == null ? 10 : +s;
    let _ = [];
    if (!(r % 1) && g - h < w) {
      if (h = Math.floor(h), g = Math.ceil(g), l > 0) {
        for (; h <= g; ++h)
          for (d = 1; d < r; ++d)
            if (p = h < 0 ? d / o(-h) : d * o(h), !(p < l)) {
              if (p > c) break;
              _.push(p);
            }
      } else for (; h <= g; ++h)
        for (d = r - 1; d >= 1; --d)
          if (p = h > 0 ? d / o(-h) : d * o(h), !(p < l)) {
            if (p > c) break;
            _.push(p);
          }
      _.length * 2 < w && (_ = tn(l, c, w));
    } else
      _ = tn(h, g, Math.min(g - h, w)).map(o);
    return f ? _.reverse() : _;
  }, e.tickFormat = (s, u) => {
    if (s == null && (s = 10), u == null && (u = r === 10 ? "s" : ","), typeof u != "function" && (!(r % 1) && (u = Vt(u)).precision == null && (u.trim = !0), u = jt(u)), s === 1 / 0) return u;
    const l = Math.max(1, r * s / e.ticks().length);
    return (c) => {
      let f = c / o(Math.round(i(c)));
      return f * r < r - 0.5 && (f *= r), f <= l ? u(c) : "";
    };
  }, e.nice = () => n(Sl(n(), {
    floor: (s) => o(Math.floor(i(s))),
    ceil: (s) => o(Math.ceil(i(s)))
  })), e;
}
function Ti() {
  const t = Ol(Ai()).domain([1, 10]);
  return t.copy = () => $i(t, Ti()).base(t.base()), Mi.apply(t, arguments), t;
}
function Rt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Rt.prototype = {
  constructor: Rt,
  scale: function(t) {
    return t === 1 ? this : new Rt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Rt(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Rt.prototype;
var Si = typeof global == "object" && global && global.Object === Object && global, Il = typeof self == "object" && self && self.Object === Object && self, it = Si || Il || Function("return this")(), V = it.Symbol, Pi = Object.prototype, Cl = Pi.hasOwnProperty, Rl = Pi.toString, Ot = V ? V.toStringTag : void 0;
function Fl(t) {
  var e = Cl.call(t, Ot), n = t[Ot];
  try {
    t[Ot] = void 0;
    var r = !0;
  } catch {
  }
  var i = Rl.call(t);
  return r && (e ? t[Ot] = n : delete t[Ot]), i;
}
var Ll = Object.prototype, Dl = Ll.toString;
function Hl(t) {
  return Dl.call(t);
}
var Bl = "[object Null]", Gl = "[object Undefined]", mr = V ? V.toStringTag : void 0;
function wt(t) {
  return t == null ? t === void 0 ? Gl : Bl : mr && mr in Object(t) ? Fl(t) : Hl(t);
}
function lt(t) {
  return t != null && typeof t == "object";
}
var ql = "[object Symbol]";
function Oe(t) {
  return typeof t == "symbol" || lt(t) && wt(t) == ql;
}
function te(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var R = Array.isArray, wr = V ? V.prototype : void 0, vr = wr ? wr.toString : void 0;
function Ei(t) {
  if (typeof t == "string")
    return t;
  if (R(t))
    return te(t, Ei) + "";
  if (Oe(t))
    return vr ? vr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Xl = /\s/;
function Ul(t) {
  for (var e = t.length; e-- && Xl.test(t.charAt(e)); )
    ;
  return e;
}
var Yl = /^\s+/;
function Vl(t) {
  return t && t.slice(0, Ul(t) + 1).replace(Yl, "");
}
function nt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var xr = NaN, Kl = /^[-+]0x[0-9a-f]+$/i, Wl = /^0b[01]+$/i, Zl = /^0o[0-7]+$/i, Jl = parseInt;
function Ql(t) {
  if (typeof t == "number")
    return t;
  if (Oe(t))
    return xr;
  if (nt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Vl(t);
  var n = Wl.test(t);
  return n || Zl.test(t) ? Jl(t.slice(2), n ? 2 : 8) : Kl.test(t) ? xr : +t;
}
var br = 1 / 0, jl = 17976931348623157e292;
function Ke(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Ql(t), t === br || t === -br) {
    var e = t < 0 ? -1 : 1;
    return e * jl;
  }
  return t === t ? t : 0;
}
function Ie(t) {
  return t;
}
var tc = "[object AsyncFunction]", ec = "[object Function]", nc = "[object GeneratorFunction]", rc = "[object Proxy]";
function ki(t) {
  if (!nt(t))
    return !1;
  var e = wt(t);
  return e == ec || e == nc || e == tc || e == rc;
}
var We = it["__core-js_shared__"], Mr = (function() {
  var t = /[^.]+$/.exec(We && We.keys && We.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function ic(t) {
  return !!Mr && Mr in t;
}
var oc = Function.prototype, ac = oc.toString;
function vt(t) {
  if (t != null) {
    try {
      return ac.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var sc = /[\\^$.*+?()[\]{}|]/g, uc = /^\[object .+?Constructor\]$/, lc = Function.prototype, cc = Object.prototype, fc = lc.toString, hc = cc.hasOwnProperty, dc = RegExp(
  "^" + fc.call(hc).replace(sc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pc(t) {
  if (!nt(t) || ic(t))
    return !1;
  var e = ki(t) ? dc : uc;
  return e.test(vt(t));
}
function gc(t, e) {
  return t == null ? void 0 : t[e];
}
function xt(t, e) {
  var n = gc(t, e);
  return pc(n) ? n : void 0;
}
var gn = xt(it, "WeakMap");
function _c(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
var yc = 800, mc = 16, wc = Date.now;
function vc(t) {
  var e = 0, n = 0;
  return function() {
    var r = wc(), i = mc - (r - n);
    if (n = r, i > 0) {
      if (++e >= yc)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function xc(t) {
  return function() {
    return t;
  };
}
var Pe = (function() {
  try {
    var t = xt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), bc = Pe ? function(t, e) {
  return Pe(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: xc(e),
    writable: !0
  });
} : Ie, Mc = vc(bc);
function $c(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function Ac(t, e, n, r) {
  for (var i = t.length, o = n + -1; ++o < i; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function Tc(t) {
  return t !== t;
}
function Sc(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function Pc(t, e, n) {
  return e === e ? Sc(t, e, n) : Ac(t, Tc, n);
}
function Ec(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && Pc(t, e, 0) > -1;
}
var kc = 9007199254740991, Nc = /^(?:0|[1-9]\d*)$/;
function Ce(t, e) {
  var n = typeof t;
  return e = e ?? kc, !!e && (n == "number" || n != "symbol" && Nc.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function zc(t, e, n) {
  e == "__proto__" && Pe ? Pe(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Re(t, e) {
  return t === e || t !== t && e !== e;
}
var Oc = Object.prototype, Ic = Oc.hasOwnProperty;
function Cc(t, e, n) {
  var r = t[e];
  (!(Ic.call(t, e) && Re(r, n)) || n === void 0 && !(e in t)) && zc(t, e, n);
}
var $r = Math.max;
function Rc(t, e, n) {
  return e = $r(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = $r(r.length - e, 0), a = Array(o); ++i < o; )
      a[i] = r[e + i];
    i = -1;
    for (var s = Array(e + 1); ++i < e; )
      s[i] = r[i];
    return s[e] = n(a), _c(t, this, s);
  };
}
function Fc(t, e) {
  return Mc(Rc(t, e, Ie), t + "");
}
var Lc = 9007199254740991;
function zn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Lc;
}
function Nt(t) {
  return t != null && zn(t.length) && !ki(t);
}
function Dc(t, e, n) {
  if (!nt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Nt(n) && Ce(e, n.length) : r == "string" && e in n) ? Re(n[e], t) : !1;
}
var Hc = Object.prototype;
function Ni(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Hc;
  return t === n;
}
function Bc(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Gc = "[object Arguments]";
function Ar(t) {
  return lt(t) && wt(t) == Gc;
}
var zi = Object.prototype, qc = zi.hasOwnProperty, Xc = zi.propertyIsEnumerable, On = Ar(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ar : function(t) {
  return lt(t) && qc.call(t, "callee") && !Xc.call(t, "callee");
};
function Uc() {
  return !1;
}
var Oi = typeof exports == "object" && exports && !exports.nodeType && exports, Tr = Oi && typeof module == "object" && module && !module.nodeType && module, Yc = Tr && Tr.exports === Oi, Sr = Yc ? it.Buffer : void 0, Vc = Sr ? Sr.isBuffer : void 0, _n = Vc || Uc, Kc = "[object Arguments]", Wc = "[object Array]", Zc = "[object Boolean]", Jc = "[object Date]", Qc = "[object Error]", jc = "[object Function]", tf = "[object Map]", ef = "[object Number]", nf = "[object Object]", rf = "[object RegExp]", of = "[object Set]", af = "[object String]", sf = "[object WeakMap]", uf = "[object ArrayBuffer]", lf = "[object DataView]", cf = "[object Float32Array]", ff = "[object Float64Array]", hf = "[object Int8Array]", df = "[object Int16Array]", pf = "[object Int32Array]", gf = "[object Uint8Array]", _f = "[object Uint8ClampedArray]", yf = "[object Uint16Array]", mf = "[object Uint32Array]", $ = {};
$[cf] = $[ff] = $[hf] = $[df] = $[pf] = $[gf] = $[_f] = $[yf] = $[mf] = !0;
$[Kc] = $[Wc] = $[uf] = $[Zc] = $[lf] = $[Jc] = $[Qc] = $[jc] = $[tf] = $[ef] = $[nf] = $[rf] = $[of] = $[af] = $[sf] = !1;
function wf(t) {
  return lt(t) && zn(t.length) && !!$[wt(t)];
}
function vf(t) {
  return function(e) {
    return t(e);
  };
}
var Ii = typeof exports == "object" && exports && !exports.nodeType && exports, Dt = Ii && typeof module == "object" && module && !module.nodeType && module, xf = Dt && Dt.exports === Ii, Ze = xf && Si.process, Pr = (function() {
  try {
    var t = Dt && Dt.require && Dt.require("util").types;
    return t || Ze && Ze.binding && Ze.binding("util");
  } catch {
  }
})(), Er = Pr && Pr.isTypedArray, Ci = Er ? vf(Er) : wf, bf = Object.prototype, Mf = bf.hasOwnProperty;
function Ri(t, e) {
  var n = R(t), r = !n && On(t), i = !n && !r && _n(t), o = !n && !r && !i && Ci(t), a = n || r || i || o, s = a ? Bc(t.length, String) : [], u = s.length;
  for (var l in t)
    (e || Mf.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Ce(l, u))) && s.push(l);
  return s;
}
function Fi(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var $f = Fi(Object.keys, Object), Af = Object.prototype, Tf = Af.hasOwnProperty;
function Sf(t) {
  if (!Ni(t))
    return $f(t);
  var e = [];
  for (var n in Object(t))
    Tf.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function ee(t) {
  return Nt(t) ? Ri(t) : Sf(t);
}
function Pf(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Ef = Object.prototype, kf = Ef.hasOwnProperty;
function Nf(t) {
  if (!nt(t))
    return Pf(t);
  var e = Ni(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !kf.call(t, r)) || n.push(r);
  return n;
}
function zf(t) {
  return Nt(t) ? Ri(t, !0) : Nf(t);
}
var Of = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, If = /^\w*$/;
function In(t, e) {
  if (R(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Oe(t) ? !0 : If.test(t) || !Of.test(t) || e != null && t in Object(e);
}
var Kt = xt(Object, "create");
function Cf() {
  this.__data__ = Kt ? Kt(null) : {}, this.size = 0;
}
function Rf(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ff = "__lodash_hash_undefined__", Lf = Object.prototype, Df = Lf.hasOwnProperty;
function Hf(t) {
  var e = this.__data__;
  if (Kt) {
    var n = e[t];
    return n === Ff ? void 0 : n;
  }
  return Df.call(e, t) ? e[t] : void 0;
}
var Bf = Object.prototype, Gf = Bf.hasOwnProperty;
function qf(t) {
  var e = this.__data__;
  return Kt ? e[t] !== void 0 : Gf.call(e, t);
}
var Xf = "__lodash_hash_undefined__";
function Uf(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Kt && e === void 0 ? Xf : e, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = Cf;
mt.prototype.delete = Rf;
mt.prototype.get = Hf;
mt.prototype.has = qf;
mt.prototype.set = Uf;
function Yf() {
  this.__data__ = [], this.size = 0;
}
function Fe(t, e) {
  for (var n = t.length; n--; )
    if (Re(t[n][0], e))
      return n;
  return -1;
}
var Vf = Array.prototype, Kf = Vf.splice;
function Wf(t) {
  var e = this.__data__, n = Fe(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Kf.call(e, n, 1), --this.size, !0;
}
function Zf(t) {
  var e = this.__data__, n = Fe(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Jf(t) {
  return Fe(this.__data__, t) > -1;
}
function Qf(t, e) {
  var n = this.__data__, r = Fe(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function ot(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = Yf;
ot.prototype.delete = Wf;
ot.prototype.get = Zf;
ot.prototype.has = Jf;
ot.prototype.set = Qf;
var Wt = xt(it, "Map");
function jf() {
  this.size = 0, this.__data__ = {
    hash: new mt(),
    map: new (Wt || ot)(),
    string: new mt()
  };
}
function th(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Le(t, e) {
  var n = t.__data__;
  return th(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function eh(t) {
  var e = Le(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function nh(t) {
  return Le(this, t).get(t);
}
function rh(t) {
  return Le(this, t).has(t);
}
function ih(t, e) {
  var n = Le(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function at(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = jf;
at.prototype.delete = eh;
at.prototype.get = nh;
at.prototype.has = rh;
at.prototype.set = ih;
var oh = "Expected a function";
function Cn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(oh);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (Cn.Cache || at)(), n;
}
Cn.Cache = at;
var ah = 500;
function sh(t) {
  var e = Cn(t, function(r) {
    return n.size === ah && n.clear(), r;
  }), n = e.cache;
  return e;
}
var uh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, lh = /\\(\\)?/g, ch = sh(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(uh, function(n, r, i, o) {
    e.push(i ? o.replace(lh, "$1") : r || n);
  }), e;
});
function De(t) {
  return t == null ? "" : Ei(t);
}
function He(t, e) {
  return R(t) ? t : In(t, e) ? [t] : ch(De(t));
}
function ne(t) {
  if (typeof t == "string" || Oe(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Rn(t, e) {
  e = He(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[ne(e[n++])];
  return n && n == r ? t : void 0;
}
function fh(t, e, n) {
  var r = t == null ? void 0 : Rn(t, e);
  return r === void 0 ? n : r;
}
function Fn(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var kr = V ? V.isConcatSpreadable : void 0;
function hh(t) {
  return R(t) || On(t) || !!(kr && t && t[kr]);
}
function dh(t, e, n, r, i) {
  var o = -1, a = t.length;
  for (n || (n = hh), i || (i = []); ++o < a; ) {
    var s = t[o];
    n(s) ? Fn(i, s) : i[i.length] = s;
  }
  return i;
}
function ph(t) {
  var e = t == null ? 0 : t.length;
  return e ? dh(t) : [];
}
var gh = Fi(Object.getPrototypeOf, Object);
function _h(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + e];
  return o;
}
function yh(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, !e && n >= r ? t : _h(t, e, n);
}
var mh = "\\ud800-\\udfff", wh = "\\u0300-\\u036f", vh = "\\ufe20-\\ufe2f", xh = "\\u20d0-\\u20ff", bh = wh + vh + xh, Mh = "\\ufe0e\\ufe0f", $h = "\\u200d", Ah = RegExp("[" + $h + mh + bh + Mh + "]");
function Li(t) {
  return Ah.test(t);
}
function Th(t) {
  return t.split("");
}
var Di = "\\ud800-\\udfff", Sh = "\\u0300-\\u036f", Ph = "\\ufe20-\\ufe2f", Eh = "\\u20d0-\\u20ff", kh = Sh + Ph + Eh, Nh = "\\ufe0e\\ufe0f", zh = "[" + Di + "]", yn = "[" + kh + "]", mn = "\\ud83c[\\udffb-\\udfff]", Oh = "(?:" + yn + "|" + mn + ")", Hi = "[^" + Di + "]", Bi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ih = "\\u200d", qi = Oh + "?", Xi = "[" + Nh + "]?", Ch = "(?:" + Ih + "(?:" + [Hi, Bi, Gi].join("|") + ")" + Xi + qi + ")*", Rh = Xi + qi + Ch, Fh = "(?:" + [Hi + yn + "?", yn, Bi, Gi, zh].join("|") + ")", Lh = RegExp(mn + "(?=" + mn + ")|" + Fh + Rh, "g");
function Dh(t) {
  return t.match(Lh) || [];
}
function Hh(t) {
  return Li(t) ? Dh(t) : Th(t);
}
function Bh(t) {
  return function(e) {
    e = De(e);
    var n = Li(e) ? Hh(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? yh(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var Gh = Bh("toUpperCase");
function qh(t) {
  return Gh(De(t).toLowerCase());
}
function Xh() {
  this.__data__ = new ot(), this.size = 0;
}
function Uh(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Yh(t) {
  return this.__data__.get(t);
}
function Vh(t) {
  return this.__data__.has(t);
}
var Kh = 200;
function Wh(t, e) {
  var n = this.__data__;
  if (n instanceof ot) {
    var r = n.__data__;
    if (!Wt || r.length < Kh - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new at(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function tt(t) {
  var e = this.__data__ = new ot(t);
  this.size = e.size;
}
tt.prototype.clear = Xh;
tt.prototype.delete = Uh;
tt.prototype.get = Yh;
tt.prototype.has = Vh;
tt.prototype.set = Wh;
function Zh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function Ui() {
  return [];
}
var Jh = Object.prototype, Qh = Jh.propertyIsEnumerable, Nr = Object.getOwnPropertySymbols, Yi = Nr ? function(t) {
  return t == null ? [] : (t = Object(t), Zh(Nr(t), function(e) {
    return Qh.call(t, e);
  }));
} : Ui, jh = Object.getOwnPropertySymbols, td = jh ? function(t) {
  for (var e = []; t; )
    Fn(e, Yi(t)), t = gh(t);
  return e;
} : Ui;
function Vi(t, e, n) {
  var r = e(t);
  return R(t) ? r : Fn(r, n(t));
}
function zr(t) {
  return Vi(t, ee, Yi);
}
function ed(t) {
  return Vi(t, zf, td);
}
var wn = xt(it, "DataView"), vn = xt(it, "Promise"), xn = xt(it, "Set"), Or = "[object Map]", nd = "[object Object]", Ir = "[object Promise]", Cr = "[object Set]", Rr = "[object WeakMap]", Fr = "[object DataView]", rd = vt(wn), id = vt(Wt), od = vt(vn), ad = vt(xn), sd = vt(gn), Q = wt;
(wn && Q(new wn(new ArrayBuffer(1))) != Fr || Wt && Q(new Wt()) != Or || vn && Q(vn.resolve()) != Ir || xn && Q(new xn()) != Cr || gn && Q(new gn()) != Rr) && (Q = function(t) {
  var e = wt(t), n = e == nd ? t.constructor : void 0, r = n ? vt(n) : "";
  if (r)
    switch (r) {
      case rd:
        return Fr;
      case id:
        return Or;
      case od:
        return Ir;
      case ad:
        return Cr;
      case sd:
        return Rr;
    }
  return e;
});
var Lr = it.Uint8Array, ud = "__lodash_hash_undefined__";
function ld(t) {
  return this.__data__.set(t, ud), this;
}
function cd(t) {
  return this.__data__.has(t);
}
function Zt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new at(); ++e < n; )
    this.add(t[e]);
}
Zt.prototype.add = Zt.prototype.push = ld;
Zt.prototype.has = cd;
function fd(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Ki(t, e) {
  return t.has(e);
}
var hd = 1, dd = 2;
function Wi(t, e, n, r, i, o) {
  var a = n & hd, s = t.length, u = e.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(e);
  if (l && c)
    return l == e && c == t;
  var f = -1, h = !0, g = n & dd ? new Zt() : void 0;
  for (o.set(t, e), o.set(e, t); ++f < s; ) {
    var d = t[f], p = e[f];
    if (r)
      var w = a ? r(p, d, f, e, t, o) : r(d, p, f, t, e, o);
    if (w !== void 0) {
      if (w)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!fd(e, function(_, M) {
        if (!Ki(g, M) && (d === _ || i(d, _, n, r, o)))
          return g.push(M);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === p || i(d, p, n, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), h;
}
function Zi(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function pd(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var gd = 1, _d = 2, yd = "[object Boolean]", md = "[object Date]", wd = "[object Error]", vd = "[object Map]", xd = "[object Number]", bd = "[object RegExp]", Md = "[object Set]", $d = "[object String]", Ad = "[object Symbol]", Td = "[object ArrayBuffer]", Sd = "[object DataView]", Dr = V ? V.prototype : void 0, Je = Dr ? Dr.valueOf : void 0;
function Pd(t, e, n, r, i, o, a) {
  switch (n) {
    case Sd:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Td:
      return !(t.byteLength != e.byteLength || !o(new Lr(t), new Lr(e)));
    case yd:
    case md:
    case xd:
      return Re(+t, +e);
    case wd:
      return t.name == e.name && t.message == e.message;
    case bd:
    case $d:
      return t == e + "";
    case vd:
      var s = Zi;
    case Md:
      var u = r & gd;
      if (s || (s = pd), t.size != e.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == e;
      r |= _d, a.set(t, e);
      var c = Wi(s(t), s(e), r, i, o, a);
      return a.delete(t), c;
    case Ad:
      if (Je)
        return Je.call(t) == Je.call(e);
  }
  return !1;
}
var Ed = 1, kd = Object.prototype, Nd = kd.hasOwnProperty;
function zd(t, e, n, r, i, o) {
  var a = n & Ed, s = zr(t), u = s.length, l = zr(e), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in e : Nd.call(e, h)))
      return !1;
  }
  var g = o.get(t), d = o.get(e);
  if (g && d)
    return g == e && d == t;
  var p = !0;
  o.set(t, e), o.set(e, t);
  for (var w = a; ++f < u; ) {
    h = s[f];
    var _ = t[h], M = e[h];
    if (r)
      var A = a ? r(M, _, h, e, t, o) : r(_, M, h, t, e, o);
    if (!(A === void 0 ? _ === M || i(_, M, n, r, o) : A)) {
      p = !1;
      break;
    }
    w || (w = h == "constructor");
  }
  if (p && !w) {
    var y = t.constructor, v = e.constructor;
    y != v && "constructor" in t && "constructor" in e && !(typeof y == "function" && y instanceof y && typeof v == "function" && v instanceof v) && (p = !1);
  }
  return o.delete(t), o.delete(e), p;
}
var Od = 1, Hr = "[object Arguments]", Br = "[object Array]", ce = "[object Object]", Id = Object.prototype, Gr = Id.hasOwnProperty;
function Cd(t, e, n, r, i, o) {
  var a = R(t), s = R(e), u = a ? Br : Q(t), l = s ? Br : Q(e);
  u = u == Hr ? ce : u, l = l == Hr ? ce : l;
  var c = u == ce, f = l == ce, h = u == l;
  if (h && _n(t)) {
    if (!_n(e))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new tt()), a || Ci(t) ? Wi(t, e, n, r, i, o) : Pd(t, e, u, n, r, i, o);
  if (!(n & Od)) {
    var g = c && Gr.call(t, "__wrapped__"), d = f && Gr.call(e, "__wrapped__");
    if (g || d) {
      var p = g ? t.value() : t, w = d ? e.value() : e;
      return o || (o = new tt()), i(p, w, n, r, o);
    }
  }
  return h ? (o || (o = new tt()), zd(t, e, n, r, i, o)) : !1;
}
function Ln(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !lt(t) && !lt(e) ? t !== t && e !== e : Cd(t, e, n, r, Ln, i);
}
var Rd = 1, Fd = 2;
function Ld(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new tt(), f;
      if (!(f === void 0 ? Ln(l, u, Rd | Fd, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Ji(t) {
  return t === t && !nt(t);
}
function Dd(t) {
  for (var e = ee(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Ji(i)];
  }
  return e;
}
function Qi(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Hd(t) {
  var e = Dd(t);
  return e.length == 1 && e[0][2] ? Qi(e[0][0], e[0][1]) : function(n) {
    return n === t || Ld(n, t, e);
  };
}
function Bd(t, e) {
  return t != null && e in Object(t);
}
function ji(t, e, n) {
  e = He(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = ne(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && zn(i) && Ce(a, i) && (R(t) || On(t)));
}
function Gd(t, e) {
  return t != null && ji(t, e, Bd);
}
var qd = 1, Xd = 2;
function Ud(t, e) {
  return In(t) && Ji(e) ? Qi(ne(t), e) : function(n) {
    var r = fh(n, t);
    return r === void 0 && r === e ? Gd(n, t) : Ln(e, r, qd | Xd);
  };
}
function Yd(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Vd(t) {
  return function(e) {
    return Rn(e, t);
  };
}
function Kd(t) {
  return In(t) ? Yd(ne(t)) : Vd(t);
}
function to(t) {
  return typeof t == "function" ? t : t == null ? Ie : typeof t == "object" ? R(t) ? Ud(t[0], t[1]) : Hd(t) : Kd(t);
}
function Wd(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var u = a[++i];
      if (n(o[u], u, o) === !1)
        break;
    }
    return e;
  };
}
var Zd = Wd();
function Jd(t, e) {
  return t && Zd(t, e, ee);
}
function Qd(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Nt(n))
      return t(n, r);
    for (var i = n.length, o = -1, a = Object(n); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return n;
  };
}
var eo = Qd(Jd);
function jd(t) {
  return lt(t) && Nt(t);
}
var t0 = 200;
function e0(t, e, n, r) {
  var i = -1, o = Ec, a = !0, s = t.length, u = [], l = e.length;
  if (!s)
    return u;
  e.length >= t0 && (o = Ki, a = !1, e = new Zt(e));
  t:
    for (; ++i < s; ) {
      var c = t[i], f = c;
      if (c = c !== 0 ? c : 0, a && f === f) {
        for (var h = l; h--; )
          if (e[h] === f)
            continue t;
        u.push(c);
      } else o(e, f, r) || u.push(c);
    }
  return u;
}
function n0(t) {
  return typeof t == "function" ? t : Ie;
}
function ye(t, e) {
  var n = R(t) ? $c : eo;
  return n(t, n0(e));
}
function r0(t, e) {
  return te(e, function(n) {
    return [n, t[n]];
  });
}
function i0(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var o0 = "[object Map]", a0 = "[object Set]";
function s0(t) {
  return function(e) {
    var n = Q(e);
    return n == o0 ? Zi(e) : n == a0 ? i0(e) : r0(e, t(e));
  };
}
var no = s0(ee);
function u0(t, e) {
  var n = -1, r = Nt(t) ? Array(t.length) : [];
  return eo(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function rt(t, e) {
  var n = R(t) ? te : u0;
  return n(t, to(e));
}
var l0 = Object.prototype, c0 = l0.hasOwnProperty;
function f0(t, e) {
  return t != null && c0.call(t, e);
}
function ro(t, e) {
  return t != null && ji(t, e, f0);
}
function h0(t, e) {
  return te(e, function(n) {
    return t[n];
  });
}
function d0(t) {
  return t == null ? [] : h0(t, ee(t));
}
var p0 = "[object Boolean]";
function g0(t) {
  return t === !0 || t === !1 || lt(t) && wt(t) == p0;
}
function _0(t, e, n, r) {
  if (!nt(t))
    return t;
  e = He(e, t);
  for (var i = -1, o = e.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = ne(e[i]), l = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = nt(c) ? c : Ce(e[i + 1]) ? [] : {});
    }
    Cc(s, u, l), s = s[u];
  }
  return t;
}
function y0(t, e, n) {
  for (var r = -1, i = e.length, o = {}; ++r < i; ) {
    var a = e[r], s = Rn(t, a);
    n(s, a) && _0(o, He(a, t), s);
  }
  return o;
}
function Dn(t, e) {
  if (t == null)
    return {};
  var n = te(ed(t), function(r) {
    return [r];
  });
  return e = to(e), y0(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var m0 = Math.floor, w0 = Math.random;
function v0(t, e) {
  return t + m0(w0() * (e - t + 1));
}
var x0 = Math.ceil, b0 = Math.max;
function M0(t, e, n, r) {
  for (var i = -1, o = b0(x0((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function $0(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && Dc(e, n, r) && (n = r = void 0), e = Ke(e), n === void 0 ? (n = e, e = 0) : n = Ke(n), r = r === void 0 ? e < n ? 1 : -1 : Ke(r), M0(e, n, r);
  };
}
var St = $0();
function A0() {
  var t = arguments, e = De(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function io(t) {
  var e = t.length;
  return e ? t[v0(0, e - 1)] : void 0;
}
function T0(t) {
  return io(d0(t));
}
function S0(t) {
  var e = R(t) ? io : T0;
  return e(t);
}
var P0 = Fc(function(t, e) {
  return jd(t) ? e0(t, e) : [];
});
const qr = (t, e, n = 12, r = 12) => {
  const i = B().domain([0, n]).range([0, t]), o = B().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return St((n + 1) * (r + 1)).map(function(u) {
        return { m: u % (n + 1), n: Math.floor(u / (n + 1)), x: i(u % (n + 1)), y: o(Math.floor(u / (n + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = ph(rt(l, function(f) {
        return rt(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, E0 = "_widget_18g36_1", k0 = "_label_18g36_19", N0 = "_lit_18g36_24", z0 = "_button_18g36_29", O0 = "_symbol_18g36_29", I0 = "_radio_18g36_29", C0 = "_radiobutton_18g36_29", R0 = "_selected_18g36_35", F0 = "_toggle_18g36_35", L0 = "_slider_18g36_44", D0 = "_track_18g36_44", H0 = "_track_overlay_18g36_48", B0 = "_handle_18g36_55", m = {
  widget: E0,
  label: k0,
  lit: N0,
  button: z0,
  symbol: O0,
  radio: I0,
  radiobutton: C0,
  selected: R0,
  toggle: F0,
  slider: L0,
  track: D0,
  track_overlay: H0,
  handle: B0
}, Be = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, Hn = (t, e, n) => {
  var r, i, o, a;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, G0 = (t = 1) => {
  const e = q();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, q0 = (t = 1) => {
  const e = q(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, X0 = (t = 1) => {
  const e = q();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, U0 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = q();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -n), r.lineTo(t * (n * e), t * -n), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -n), r.lineTo(-t * (n * e), t * -n), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, Y0 = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), e.arc(0, 0, t * (1 - o), r, i, !1), e.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), e.closePath(), e.toString();
}, V0 = (t = 1) => {
  const e = q(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, o = n, a = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, a), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, o, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, K0 = (t = 1) => {
  const e = q(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), e.arc(0, 0, t * (1 - o), i, r, !0), e.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), e.closePath(), e.toString();
}, W0 = (t = 1) => {
  var e = q(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -n, t * n), e.lineTo(t * -n, t * -n), e.lineTo(t * n, t * -n), e.closePath(), e.toString();
}, Z0 = (t = 1) => {
  const e = q(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, bn = (t) => {
  switch (t) {
    case "play":
      return G0;
    case "forward":
      return q0;
    case "back":
      return X0;
    case "pause":
      return U0;
    case "reload":
      return Y0;
    case "capture":
      return V0;
    case "rewind":
      return K0;
    case "stop":
      return W0;
    case "push":
      return Z0;
  }
}, Bn = () => {
  const t = "button";
  var e = Be(), n = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), S(this.parentNode).select("." + m.symbol).attr("d", bn(c[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + e).select("." + m.symbol).attr("d", bn(c[f])(r * n));
    }
  };
}, J0 = () => {
  const t = "slider", e = jt(".3f");
  var n = Be(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(_) {
  }, f = function(_) {
  }, h = [0, 1], g = 0, d = null, p = B().domain(h).range([0, r]).clamp(!0);
  const w = function(_, M, A = h) {
    const y = _.select("#slider_" + n);
    p.domain(A), g = M, y.selectAll("." + m.handle).transition().attr("cx", p(M)), a && y.select("." + m.label).text(d + " = " + e(g)), c(), f();
  };
  return {
    type: t,
    scale: p,
    id: function(_) {
      return typeof _ > "u" ? n : (n = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return c = _, this;
      c(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    range: function(_) {
      return typeof _ > "u" ? h : (h = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? g : (g = _, this);
    },
    reset: w,
    click: w
  };
}, Q0 = () => {
  const t = "toggle";
  var e = Be(), n = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, u = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = S(this.parentNode);
      f.select("." + m.handle).transition().attr("cx", u ? 2 * n : 0), f.classed(m.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const g = f.select("#toggle_" + e);
      g.selectAll("." + m.handle).transition().attr("cx", u ? 2 * n : 0), g.classed(m.selected, u), s();
    }
  };
}, j0 = () => {
  const t = "radio";
  var e = Be(), n = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, c = function(p) {
  }, f = [], h = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return c = p, this;
      c(p);
    },
    choices: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    click: function(p, w) {
      h = w, S(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), c();
    },
    reset: function(p, w) {
      h = w, p.select("#radio_" + e).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), c();
    }
  };
}, tp = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", bn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Hn(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, oo = (t, e) => {
  const n = q();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, ep = (t, e) => {
  const n = jt(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", oo(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const p = rn(d, this)[0];
    t.value(a.invert(p)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
  }).call(
    ms().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, g = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? ie([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -ie([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? ie([t.girth() / 2, t.knob()]) + 7 : -ie([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, np = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", oo(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Hn(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, rp = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = So(a), u = B().domain([0, a - 1]).range([0, t.size()]), l = B().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(c).attr("class", m.widget + " " + m.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (w) => "b" + w).attr("transform", (w) => t.orientation() == "vertical" ? "translate(0," + l(w) + ")" : "translate(" + u(w) + ",0)");
  var g, d;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), g.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((w) => w == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const p = Hn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(w, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), c;
}, fe = (t, e) => {
  switch (t.type) {
    case "button":
      return tp(t);
    case "slider":
      return ep(t);
    case "radio":
      return rp(t);
    case "toggle":
      return np(t);
  }
}, ip = (t, e) => {
  const n = qr(
    e.controls_size.width,
    300,
    // Height for bottom section
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = qr(
    150,
    // Width of button area
    200,
    // Height of button area
    4,
    // nx
    4
    // ny
  ), i = S("#" + t).classed(e.id + " " + e.container_class, !0), o = i.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("viewBox", `0 0 ${e.display_size.width} ${e.display_size.height}`).style("width", "100%"), a = i.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).style("display", "flex").style("flex-direction", "column"), s = a.append("div").style("display", "flex").style("flex-direction", "row").style("width", "100%").style("height", "200px").style("margin-bottom", "10px"), u = s.append("svg").attr("id", "buttons").attr("viewBox", "0 0 150 200").style("width", "30%").style("height", "100%"), l = s.append("svg").attr("id", "plots").attr("viewBox", "0 0 350 200").style("width", "70%").style("height", "100%"), c = a.append("svg").attr("viewBox", `0 0 ${e.controls_size.width} 300`).style("width", "100%");
  return e.controls_border && a.style("border", e.controls_border), e.display_border && o.style("border", e.display_border), e.debug && (c.selectAll(".debug-dot").data(n.points).enter().append("circle").attr("r", 2).attr("transform", (f) => `translate(${f.x},${f.y})`).style("fill", "black"), u.selectAll(".debug-dot").data(r.points).enter().append("circle").attr("r", 2).attr("transform", (f) => `translate(${f.x},${f.y})`).style("fill", "red")), { display: o, plots: l, controls: c, buttons: u, grid_controls: n, grid_buttons: r };
}, T = {
  widgets: {
    // --- BUTTONS (Top Left Container) ---
    // Coordinates relative to a small 4x4 grid
    playbutton_size: 100,
    // Slightly smaller to fit
    playbutton_anchor: { x: 1.8, y: 1.1 },
    backbutton_anchor: { x: 2.8, y: 2.7 },
    resetbutton_anchor: { x: 0.8, y: 2.7 },
    // --- SLIDERS (Bottom Container) ---
    // Coordinates relative to the main controls grid
    // Note: Y positions reset to near 0 since this is a new SVG
    slider_size: 250,
    // Adjusted width
    slider_gap: 2,
    slider_anchor: { x: 0.35, y: 1.4 },
    // Starts at top of bottom section
    // --- TOGGLES ---
    toggle_anchor: { x: 8, y: 1.4 },
    toggle_vertical_gap: 2,
    toggle_label_pos: "right",
    // --- RADIO BUTTONS ---
    radio_anchor: { x: 2.15, y: 5.8 },
    radio_size: 140,
    radio_orientation: "horizontal",
    radio_item_gap: 2,
    radio_label_position: "right",
    radio_shape: "rect"
  },
  simulation: {
    delay: 10
  }
}, b = {
  dt: 1,
  // I think datetime, not used
  L: 100,
  // =length=width
  agentsize: 1.2,
  // define weights for the update function
  weight_inherent_nv: 0.5,
  // for the inherent news value of a topic
  weight_network_nv: 1,
  // for the news value based on following
  weight_age_punishment: 5,
  // older topics become less attractive
  importance_of_ideology: {
    range: [0, 10],
    default: 1
  },
  max_inherent_news_val: 3,
  // speed := number of steps per second
  speed: 30,
  // (formerly similarity_threshold)
  likelihood_to_switch: {
    range: [0, 1],
    default: 0.3
  },
  number_of_agents: {
    choices: [100, 500, 1500],
    default: 1
  },
  number_of_topics: {
    choices: [3, 5, 8],
    default: 1
  },
  culture_is_polarized: {
    default: !0
  },
  noise_switching: {
    default: !0,
    label: "Exponential Dist."
  }
}, Gn = (t) => rt(no(t), (e) => {
  e[1].id = e[0], e[1].label = A0(qh(e[0]), /_/g, " ");
}), qn = (t) => rt(no(t), (e) => e[1]), Xn = (t, e) => ye(t, (n, r) => n.widget = e[r]), op = (t) => Dn(t, (e) => ro(e, "range")), ap = (t) => Dn(t, (e) => g0(e.default)), sp = (t) => Dn(t, (e) => ro(e, "choices"));
B().domain([0, 360]).range([0, 2 * Math.PI]);
B().range([0, 360]).domain([0, 2 * Math.PI]);
function Ft() {
  let t = 0, e = 0;
  for (; t === 0; ) t = Math.random();
  for (; e === 0; ) e = Math.random();
  let n = Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e);
  return n = n / 10 + 0.5, n > 1 || n < 0 ? Ft() : n;
}
function up(t) {
  const e = 1 - Math.random();
  return -Math.log(e) / t;
}
const ao = (t, e) => {
  let n;
  do
    n = up(t);
  while (n > e);
  return n;
};
function Qe(t, e) {
  let n = 1 - Math.random(), r = Math.random();
  return Math.sqrt(-2 * Math.log(n)) * Math.cos(2 * Math.PI * r) * e + t;
}
const Un = op(b), Yn = ap(b), Vn = sp(b);
Gn(Un);
Gn(Yn);
Gn(Vn);
const so = qn(Un), uo = qn(Yn), lo = qn(Vn), me = rt(so, (t) => J0().id(t.id).label(t.label).range(t.range).value(t.default).size(T.widgets.slider_size)), pt = rt(uo, (t) => Q0().id(t.id).label(t.label).value(t.default).labelposition(T.widgets.toggle_label_pos)), we = rt(lo, (t) => j0().choices(t.choices).id(t.id).value(t.default).orientation(T.widgets.radio_orientation).labelposition(T.widgets.radio_label_position));
Xn(so, me);
Xn(uo, pt);
Xn(lo, we);
const ut = Bn().actions(["play", "pause"]), Ge = Bn().actions(["back"]), qe = Bn().actions(["rewind"]), lp = [ut, Ge, qe], cp = (t, e, n, r) => {
  ut.position(n.position(T.widgets.playbutton_anchor.x, T.widgets.playbutton_anchor.y)).size(T.widgets.playbutton_size), qe.position(n.position(T.widgets.backbutton_anchor.x, T.widgets.backbutton_anchor.y)), Ge.position(n.position(T.widgets.resetbutton_anchor.x, T.widgets.resetbutton_anchor.y)), t.selectAll(null).data(lp).enter().append(fe);
  const i = r.position(
    T.widgets.slider_anchor.x,
    St(me.length).map((l) => T.widgets.slider_anchor.y + T.widgets.slider_gap * l)
  );
  me.forEach((l, c) => l.position(i[c]));
  const o = St(pt.length).map((l) => r.position(
    T.widgets.toggle_anchor.x,
    T.widgets.toggle_anchor.y + l * T.widgets.toggle_vertical_gap
  ));
  pt.forEach((l, c) => l.position(o[c]));
  const a = St(we.length).map(
    (l) => r.position(
      T.widgets.radio_anchor.x,
      T.widgets.radio_anchor.y + l * T.widgets.radio_item_gap
    )
  );
  we.forEach((l, c) => {
    l.position(a[c]).size(T.widgets.radio_size).shape(T.widgets.radio_shape);
  }), e.selectAll(null).data(me).enter().append(fe), e.selectAll(null).data(pt).enter().append(fe), e.selectAll(null).data(we).enter().append(fe);
  const s = r.position(0.35, 5.9), u = r.position(0.35, 7.9);
  e.append("text").attr("x", s.x).attr("y", s.y).attr("class", "static-label").text("Agents:"), e.append("text").attr("x", u.x).attr("y", u.y).attr("class", "static-label").text("Topics:");
}, fp = (t) => {
  ye(Un, (e) => e.widget.reset(t, e.default)), ye(Yn, (e) => e.widget.reset(t, e.default)), ye(Vn, (e) => e.widget.reset(t, e.default)), b.number_of_agents.widget.update();
}, j = b.L, co = 1.5, hp = 0.1, fo = 150, dp = 50, pp = 0.15, gp = [
  "#e74ae2ff",
  "#005397ff",
  "#32CD32",
  "#FFD700",
  "#ff0000ff",
  "#ffa007ff",
  "#20B2AA",
  "#794002ff"
];
var gt = [], k = [];
const ho = (t, e) => {
  e.forEach((n) => {
    n._incoming_links_count = 0;
  }), t.forEach((n) => {
    n.focussed_topic && n.focussed_topic._incoming_links_count++;
  }), e.forEach((n) => {
    n.network_news_val = n._incoming_links_count / t.length, n.age_absolute++;
  });
}, _p = () => {
  b.timer = {}, b.tick = 0;
  const t = b.number_of_topics.choices[b.number_of_topics.widget.value()], e = 0.05, r = j * (1 - 2 * e) / (t - 1);
  k = rt(St(t), (s) => {
    let u = Math.random(), l = j * e + s * r, c = ao(co, b.max_inherent_news_val), f = Math.random() * 500 + 1500;
    return {
      index: s,
      generation: 0,
      // Track generation
      id: `t_${s}_g_0`,
      // Unique ID for D3 binding
      history: [],
      // For the comet trails
      x: j * u,
      y: l,
      frame: u,
      initial_news_val: c,
      relevance_multiplier: f,
      network_news_val: 0,
      // this is a dynamic parameter
      get size() {
        return 3.5 + 1 / (k.length + 1) * this.network_news_val ** 2 * 140;
      },
      color: gp[s],
      // Assign color from list
      age_absolute: 0,
      // in seconds
      get max_relevance() {
        return Math.max(fo, this.network_news_val * this.initial_news_val * this.relevance_multiplier);
      },
      get age_relative() {
        return this.age_absolute / this.max_relevance;
      }
    };
  });
  const i = k.reduce((s, u) => s + (u.max_relevance || 0), 0);
  k.forEach((s) => {
    i > 0 ? s.relevance_proportion = (s.max_relevance || 0) / i : s.relevance_proportion = 1 / k.length;
  });
  const o = b.number_of_agents.choices[b.number_of_agents.widget.value()], a = b.culture_is_polarized.widget.value();
  gt = rt(St(o), (s) => {
    let u;
    return a ? u = Math.random() > 0.5 ? Qe(0.15, 0.1) : Qe(0.85, 0.1) : u = Qe(0.5, 0.25), u = Math.max(0, Math.min(1, u)), {
      index: s,
      culture: u,
      x: j * u,
      // x pos depends on culture for sorted viz
      y: j * Math.random(),
      focussed_topic: null,
      time_on_topic: 0
    };
  }), ho(gt, k);
}, yp = (t) => {
  let e = Math.random();
  t.frame = e, t.x = j * e, t.frame = e, t.x = j * e, t.initial_news_val = ao(co, b.max_inherent_news_val), t.relevance_multiplier = Math.random() * 500 + 1500, t.network_news_val = 0, t._incoming_links_count = 0, t.age_absolute = 0, t.generation += 1, t.id = `t_${t.index}_g_${t.generation}`, t.history = [];
}, he = (t) => {
  const e = t.focussed_topic ? P0(k, t.focussed_topic) : k;
  t.focussed_topic = S0(e), t.time_on_topic = 0;
}, mp = () => {
  b.tick++, ho(gt, k);
  const t = k.reduce((n, r) => n + (r.max_relevance || 0), 0);
  k.forEach((n) => {
    t > 0 ? n.relevance_proportion = (n.max_relevance || 0) / t : n.relevance_proportion = 1 / k.length;
  });
  let e = [];
  for (const n of k)
    if (n.age_absolute > fo && n.age_relative > 0.99) {
      yp(n), e.push(n.index);
      break;
    }
  e.length > 0 && gt.forEach((n) => {
    n.focussed_topic && e.includes(n.focussed_topic.index) && he(n);
  }), gt.forEach((n) => {
    const r = n.focussed_topic;
    if (!r) {
      he(n);
      return;
    }
    const o = (0.3 - Math.abs(n.culture - r.frame)) * b.importance_of_ideology.widget.value(), a = r.network_news_val * b.weight_network_nv, s = r.initial_news_val * b.weight_inherent_nv, u = r.age_relative ** 2 * b.weight_age_punishment, l = o + a + s - u, c = 0.2 * b.importance_of_ideology.widget.value() + // factor in slightly
    b.weight_network_nv + b.weight_inherent_nv, f = b.likelihood_to_switch.widget.value() * c;
    if (n.index === 0 && b.tick % 60 === 0 && (console.table({
      Factor: ["Alignment", "Network News (Popularity)", "Inherent Value", "Age Punishment", "TOTAL ATTACHMENT"],
      Value: [
        o.toFixed(3),
        a.toFixed(3),
        s.toFixed(3),
        `-${u.toFixed(3)}`,
        l.toFixed(3)
      ]
    }), console.log(`Switch Threshold: ${f.toFixed(3)}`)), n.time_on_topic > dp) {
      if (l < f) {
        he(n);
        return;
      }
      if (b.noise_switching.widget.value() && Ft() < pp) {
        he(n);
        return;
      }
    }
    if (n.time_on_topic++, n.focussed_topic) {
      const h = k.length, g = j / h, d = n.focussed_topic.y;
      let p;
      Ft() < 0.5 ? p = d - Ft() * g : p = d + Ft() * g, p = Math.max(0, Math.min(j, p)), n.y += (p - n.y) * hp;
    }
  });
}, wp = "_node_19yup_1", vp = {
  node: wp
}, po = b.L, $t = B().domain([0, po]), Ht = B().domain([0, po]), go = 40, xp = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415", bp = (t, e) => {
  const n = e.display_size.width, r = e.display_size.height;
  $t.range([0, n]), Ht.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  i.selectAll("g.topic-group").data(k, (a) => a.index).enter().append("g").attr("class", "topic-group").attr("transform", (a) => `translate(${$t(a.x)},${Ht(a.y)}) scale(${go})`).append("path").attr("class", "topic-shape").attr("d", xp).style("fill", (a) => a.color).style("stroke", "black").style("vector-effect", "non-scaling-stroke").style("stroke-width", "1px").style("fill-opacity", 1).style("stroke-opacity", 1), i.selectAll(null).data(gt).enter().append("circle").attr("class", `${vp.node} agent`).attr("cx", (a) => $t(a.x)).attr("cy", (a) => Ht(a.y)).attr("r", $t(b.agentsize / 2)).style("fill", (a) => a.focussed_topic ? a.focussed_topic.color : "#d2cdcd09").style("stroke", "black").style("stroke-width", 0.5).style("stroke-opacity", 1);
}, Mp = (t, e) => {
  t.selectAll(".agent").data(gt, (r) => r.index).attr("cx", (r) => $t(r.x)).attr("cy", (r) => Ht(r.y)).style("fill", (r) => r.focussed_topic ? r.focussed_topic.color : "#d2cdcd09").style("fill-opacity", (r) => r.focussed_topic ? Math.max(0, 1 - r.focussed_topic.age_relative) : 1), t.selectAll("g.topic-group").data(k, (r) => r.index).attr("transform", (r) => `translate(${$t(r.x)},${Ht(r.y)}) scale(${go})`).select(".topic-shape").style("fill", (r) => r.color).style("fill-opacity", (r) => Math.max(0, 1 - r.age_relative)).style("stroke-opacity", (r) => Math.max(0, 1 - r.age_relative));
}, je = 350, Xr = 200, I = { top: 10, right: 10, bottom: 35, left: 35 }, $p = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415";
let Bt, J;
const Ap = (t, e) => {
  t.selectAll("*").remove(), Bt = Ti().domain([0.05, b.max_inherent_news_val]).range([I.left, je - I.right]), J = B().domain([0, 1]).range([Xr - I.bottom, I.top]);
  const n = t.append("g").attr("class", "axes");
  n.append("line").attr("x1", I.left).attr("x2", je - I.right).attr("y1", J(0)).attr("y2", J(0)).attr("stroke", "#333").attr("stroke-width", 1), n.append("line").attr("x1", I.left).attr("x2", I.left).attr("y1", J(0)).attr("y2", J(1)).attr("stroke", "#333").attr("stroke-width", 1), t.append("line").attr("x1", Bt(0.05)).attr("y1", J(0)).attr("x2", Bt(5)).attr("y2", J(1)).attr("stroke", "#ccc").attr("stroke-dasharray", "4 4"), t.append("text").attr("class", "x-axis-label").attr("text-anchor", "middle").attr("x", I.left + (je - I.left - I.right) / 2).attr("y", Xr - 5).style("font-size", "14px").style("font-family", "sans-serif").style("fill", "#555").text("Topic News Value (Log)"), t.append("text").attr("class", "y-axis-label").attr("text-anchor", "middle").attr("transform", "rotate(-90)").attr("y", 12).attr("x", -87.5).style("font-size", "14px").style("font-family", "sans-serif").style("fill", "#555").text("Topic Popularity"), t.append("text").attr("class", "gini-label").attr("x", I.left + 15).attr("y", I.top + 15).style("font-size", "14px").style("font-family", "sans-serif").style("fill", "#333").text("Normalized Gini = 0.00"), t.append("g").attr("class", "dots-layer");
}, Tp = (t, e) => {
  if (!e) return;
  const n = e.map((s) => s.network_news_val).sort((s, u) => s - u), r = n.length;
  let i = 0;
  if (r > 0) {
    const s = Po(n);
    if (s > 0) {
      let u = 0;
      for (let f = 0; f < r; f++)
        u += (f + 1) * n[f];
      const l = 2 * u / (r * s) - (r + 1) / r, c = (r - 1) / r;
      i = c > 0 ? l / c : 0;
    }
  }
  i = Math.max(0, Math.min(1, i)), t.select(".gini-label").text(`Normalized Gini = ${i.toFixed(2)}`);
  const o = t.select(".dots-layer").selectAll("path.dot").data(e, (s) => s.id || s.index);
  o.exit().remove();
  const a = o.enter().append("path").attr("class", "dot").attr("d", $p).attr("transform", (s) => `translate(${Bt(Math.max(0.05, s.initial_news_val))}, ${J(0)}) scale(0)`).style("fill", (s) => s.color).style("stroke", "black").style("vector-effect", "non-scaling-stroke").style("stroke-width", "1px");
  o.merge(a).transition().duration(50).ease(el).attr("transform", (s) => {
    const u = Math.max(0.05, s.initial_news_val);
    return `translate(${Bt(u)}, ${J(s.network_news_val)}) scale(20)`;
  }).style("fill-opacity", 1).style("stroke-opacity", 1);
};
let Ur = 0;
function _o(t, e, n) {
  const r = performance.now(), i = 1e3 / b.speed, o = r - Ur;
  o >= i && (Ur = r - o % i, mp(), Mp(t), Tp(e, k));
}
function Lt(t, e, n) {
  _p(), bp(t, n), Ap(e), d3.timer(() => _o(t, e));
}
var Yr = {};
const Sp = (t, e, n) => {
  ut.value() == 1 ? Yr = Zs(
    () => _o(t, e),
    // Pass plots
    T.simulation.delay
  ) : Yr.stop();
}, Pp = (t, e, n, r) => {
  qe.update(() => fp(n)), ut.update(() => Sp(t, e)), Ge.update(() => Lt(t, e, r)), b.number_of_agents.widget.update(() => Lt(t, e, r)), b.number_of_topics.widget.update(() => Lt(t, e, r)), pt && pt.length > 0 && pt.forEach((i) => {
    i.id() === "culture_is_polarized" && i.update(() => Lt(t, e, r));
  });
}, Ep = {
  name: "@explorables/explorable_template",
  title: "Social Issue Emergence",
  subtitle: "User attention dynamics",
  description: "How hashtag campaigns such as #MeToo or #BlackLivesMatter once dominated online discussions",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function kp(t, e = yo) {
  const n = ip(t, e), r = n.display, i = n.plots, o = n.controls, a = n.buttons, s = n.grid_controls, u = n.grid_buttons;
  return cp(a, o, u, s), Pp(r, i, o, e), Lt(r, i, e), {
    halt() {
      ut.value() === 1 && ut.press(controls);
    },
    reset() {
      ut.value() === 1 && ut.press(controls), qe.press(controls), Ge.press(controls);
    },
    config: e,
    meta: Ep
  };
}
export {
  yo as config,
  kp as default,
  kp as load,
  Ep as meta
};
