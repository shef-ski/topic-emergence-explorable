(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-blue-600:oklch(54.6% .245 262.881);--tw-spacing:.25rem;--tw-container-4xl:56rem;--tw-container-5xl:64rem;--tw-text-lg:1.125rem;--tw-text-lg--line-height:calc(1.75/1.125);--tw-text-xl:1.25rem;--tw-text-xl--line-height:calc(1.75/1.25);--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:mx-auto{margin-inline:auto}.tw\\:my-4{margin-block:calc(var(--tw-spacing)*4)}.tw\\:my-8{margin-block:calc(var(--tw-spacing)*8)}.tw\\:mt-8{margin-top:calc(var(--tw-spacing)*8)}.tw\\:mb-2{margin-bottom:calc(var(--tw-spacing)*2)}.tw\\:mb-4{margin-bottom:calc(var(--tw-spacing)*4)}.tw\\:ml-6{margin-left:calc(var(--tw-spacing)*6)}.tw\\:grid{display:grid}.tw\\:max-w-4xl{max-width:var(--tw-container-4xl)}.tw\\:list-outside{list-style-position:outside}.tw\\:list-decimal{list-style-type:decimal}.tw\\:list-disc{list-style-type:disc}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:pb-20{padding-bottom:calc(var(--tw-spacing)*20)}.tw\\:text-center{text-align:center}.tw\\:text-left{text-align:left}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-blue-600{color:var(--tw-color-blue-600)}.tw\\:underline{text-decoration-line:underline}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const wo = {
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
function he(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function vo(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Kr(t) {
  let e, n, r;
  t.length !== 2 ? (e = he, n = (s, u) => he(t(s), u), r = (s, u) => t(s) - u) : (e = t === he || t === vo ? t : xo, n = t, r = t);
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
function xo() {
  return 0;
}
function bo(t) {
  return t === null ? NaN : +t;
}
const Mo = Kr(he), $o = Mo.right;
Kr(bo).center;
const Ao = Math.sqrt(50), To = Math.sqrt(10), So = Math.sqrt(2);
function ve(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Ao ? 10 : o >= To ? 5 : o >= So ? 2 : 1;
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
function Po(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? en(e, t, n) : en(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function re(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function Eo(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
function No(t, e) {
  let n = 0;
  for (let r of t)
    (r = +r) && (n += r);
  return n;
}
var ko = { value: () => {
} };
function Mn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new de(n);
}
function de(t) {
  this._ = t;
}
function zo(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
de.prototype = Mn.prototype = {
  constructor: de,
  on: function(t, e) {
    var n = this._, r = zo(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Oo(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = Vn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Vn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new de(t);
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
function Oo(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Vn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ko, t = t.slice(0, r).concat(t.slice(r + 1));
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
function Io(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === nn && e.documentElement.namespaceURI === nn ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Co(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Vr(t) {
  var e = Ee(t);
  return (e.local ? Co : Io)(e);
}
function Ro() {
}
function $n(t) {
  return t == null ? Ro : function() {
    return this.querySelector(t);
  };
}
function Fo(t) {
  typeof t != "function" && (t = $n(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new R(r, this._parents);
}
function Lo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Do() {
  return [];
}
function Wr(t) {
  return t == null ? Do : function() {
    return this.querySelectorAll(t);
  };
}
function Ho(t) {
  return function() {
    return Lo(t.apply(this, arguments));
  };
}
function Bo(t) {
  typeof t == "function" ? t = Ho(t) : t = Wr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new R(r, i);
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
var Go = Array.prototype.find;
function qo(t) {
  return function() {
    return Go.call(this.children, t);
  };
}
function Xo() {
  return this.firstElementChild;
}
function Uo(t) {
  return this.select(t == null ? Xo : qo(typeof t == "function" ? t : Jr(t)));
}
var Yo = Array.prototype.filter;
function Ko() {
  return Array.from(this.children);
}
function Vo(t) {
  return function() {
    return Yo.call(this.children, t);
  };
}
function Wo(t) {
  return this.selectAll(t == null ? Ko : Vo(typeof t == "function" ? t : Jr(t)));
}
function Zo(t) {
  typeof t != "function" && (t = Zr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new R(r, this._parents);
}
function Qr(t) {
  return new Array(t.length);
}
function Jo() {
  return new R(this._enter || this._groups.map(Qr), this._parents);
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
function Qo(t) {
  return function() {
    return t;
  };
}
function jo(t, e, n, r, i, o) {
  for (var a = 0, s, u = e.length, l = o.length; a < l; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new xe(t, o[a]);
  for (; a < u; ++a)
    (s = e[a]) && (i[a] = s);
}
function ta(t, e, n, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = e.length, f = o.length, h = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = e[s]) && (h[s] = g = a.call(u, u.__data__, s, e) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : n[s] = new xe(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = e[s]) && l.get(h[s]) === u && (i[s] = u);
}
function ea(t) {
  return t.__data__;
}
function na(t, e) {
  if (!arguments.length) return Array.from(this, ea);
  var n = e ? ta : jo, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Qo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, g = ra(t.call(c, c && c.__data__, l, r)), d = g.length, p = s[l] = new Array(d), w = a[l] = new Array(d), _ = u[l] = new Array(h);
    n(c, f, p, w, _, g, e);
    for (var b = 0, $ = 0, y, v; b < d; ++b)
      if (y = p[b]) {
        for (b >= $ && ($ = b + 1); !(v = w[$]) && ++$ < d; ) ;
        y._next = v || null;
      }
  }
  return a = new R(a, r), a._enter = s, a._exit = u, a;
}
function ra(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ia() {
  return new R(this._exit || this._groups.map(Qr), this._parents);
}
function oa(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function aa(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = n[u], c = r[u], f = l.length, h = s[u] = new Array(f), g, d = 0; d < f; ++d)
      (g = l[d] || c[d]) && (h[d] = g);
  for (; u < i; ++u)
    s[u] = n[u];
  return new R(s, this._parents);
}
function sa() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function ua(t) {
  t || (t = la);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(e);
  }
  return new R(i, this._parents).order();
}
function la(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function ca() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function fa() {
  return Array.from(this);
}
function ha() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function da() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function pa() {
  return !this.node();
}
function ga(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function _a(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ya(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ma(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function wa(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function va(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function xa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function ba(t, e) {
  var n = Ee(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? ya : _a : typeof e == "function" ? n.local ? xa : va : n.local ? wa : ma)(n, e));
}
function jr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ma(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function $a(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Aa(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function Ta(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Ma : typeof e == "function" ? Aa : $a)(t, e, n ?? "")) : Pt(this.node(), t);
}
function Pt(t, e) {
  return t.style.getPropertyValue(e) || jr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Sa(t) {
  return function() {
    delete this[t];
  };
}
function Pa(t, e) {
  return function() {
    this[t] = e;
  };
}
function Ea(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Na(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Sa : typeof e == "function" ? Ea : Pa)(t, e)) : this.node()[t];
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
function ka(t) {
  return function() {
    ni(this, t);
  };
}
function za(t) {
  return function() {
    ri(this, t);
  };
}
function Oa(t, e) {
  return function() {
    (e.apply(this, arguments) ? ni : ri)(this, t);
  };
}
function Ia(t, e) {
  var n = ti(t + "");
  if (arguments.length < 2) {
    for (var r = An(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Oa : e ? ka : za)(n, e));
}
function Ca() {
  this.textContent = "";
}
function Ra(t) {
  return function() {
    this.textContent = t;
  };
}
function Fa(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function La(t) {
  return arguments.length ? this.each(t == null ? Ca : (typeof t == "function" ? Fa : Ra)(t)) : this.node().textContent;
}
function Da() {
  this.innerHTML = "";
}
function Ha(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ba(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ga(t) {
  return arguments.length ? this.each(t == null ? Da : (typeof t == "function" ? Ba : Ha)(t)) : this.node().innerHTML;
}
function qa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Xa() {
  return this.each(qa);
}
function Ua() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Ya() {
  return this.each(Ua);
}
function Ka(t) {
  var e = typeof t == "function" ? t : Vr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Va() {
  return null;
}
function Wa(t, e) {
  var n = typeof t == "function" ? t : Vr(t), r = e == null ? Va : typeof e == "function" ? e : $n(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Za() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ja() {
  return this.each(Za);
}
function Qa() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ja() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ts(t) {
  return this.select(t ? ja : Qa);
}
function es(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ns(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function rs(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function is(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function os(t, e, n) {
  return function() {
    var r = this.__on, i, o = ns(e);
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
function as(t, e, n) {
  var r = rs(t + ""), i, o = r.length, a;
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
  for (s = e ? os : is, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function ii(t, e, n) {
  var r = jr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function ss(t, e) {
  return function() {
    return ii(this, t, e);
  };
}
function us(t, e) {
  return function() {
    return ii(this, t, e.apply(this, arguments));
  };
}
function ls(t, e) {
  return this.each((typeof e == "function" ? us : ss)(t, e));
}
function* cs() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var oi = [null];
function R(t, e) {
  this._groups = t, this._parents = e;
}
function Zt() {
  return new R([[document.documentElement]], oi);
}
function fs() {
  return this;
}
R.prototype = Zt.prototype = {
  constructor: R,
  select: Fo,
  selectAll: Bo,
  selectChild: Uo,
  selectChildren: Wo,
  filter: Zo,
  data: na,
  enter: Jo,
  exit: ia,
  join: oa,
  merge: aa,
  selection: fs,
  order: sa,
  sort: ua,
  call: ca,
  nodes: fa,
  node: ha,
  size: da,
  empty: pa,
  each: ga,
  attr: ba,
  style: Ta,
  property: Na,
  classed: Ia,
  text: La,
  html: Ga,
  raise: Xa,
  lower: Ya,
  append: Ka,
  insert: Wa,
  remove: Ja,
  clone: ts,
  datum: es,
  on: as,
  dispatch: ls,
  [Symbol.iterator]: cs
};
function P(t) {
  return typeof t == "string" ? new R([[document.querySelector(t)]], [document.documentElement]) : new R([[t]], oi);
}
function hs(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function rn(t, e) {
  if (t = hs(t), e === void 0 && (e = t.currentTarget), e) {
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
const ds = { passive: !1 }, Bt = { capture: !0, passive: !1 };
function Ue(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ps(t) {
  var e = t.document.documentElement, n = P(t).on("dragstart.drag", At, Bt);
  "onselectstart" in e ? n.on("selectstart.drag", At, Bt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function gs(t, e) {
  var n = t.document.documentElement, r = P(t).on("dragstart.drag", null);
  e && (r.on("click.drag", At, Bt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const ie = (t) => () => t;
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
function _s(t) {
  return !t.ctrlKey && !t.button;
}
function ys() {
  return this.parentNode;
}
function ms(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ws() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function vs() {
  var t = _s, e = ys, n = ms, r = ws, i = {}, o = Mn("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(y) {
    y.on("mousedown.drag", g).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, ds).on("touchend.drag touchcancel.drag", b).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(y, v) {
    if (!(c || !t.call(this, y, v))) {
      var E = $(this, e.call(this, y, v), y, v, "mouse");
      E && (P(y.view).on("mousemove.drag", d, Bt).on("mouseup.drag", p, Bt), ps(y.view), Ue(y), l = !1, s = y.clientX, u = y.clientY, E("start", y));
    }
  }
  function d(y) {
    if (At(y), !l) {
      var v = y.clientX - s, E = y.clientY - u;
      l = v * v + E * E > f;
    }
    i.mouse("drag", y);
  }
  function p(y) {
    P(y.view).on("mousemove.drag mouseup.drag", null), gs(y.view, l), At(y), i.mouse("end", y);
  }
  function w(y, v) {
    if (t.call(this, y, v)) {
      var E = y.changedTouches, N = e.call(this, y, v), k = E.length, U, Z;
      for (U = 0; U < k; ++U)
        (Z = $(this, N, y, v, E[U].identifier, E[U])) && (Ue(y), Z("start", y, E[U]));
    }
  }
  function _(y) {
    var v = y.changedTouches, E = v.length, N, k;
    for (N = 0; N < E; ++N)
      (k = i[v[N].identifier]) && (At(y), k("drag", y, v[N]));
  }
  function b(y) {
    var v = y.changedTouches, E = v.length, N, k;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), N = 0; N < E; ++N)
      (k = i[v[N].identifier]) && (Ue(y), k("end", y, v[N]));
  }
  function $(y, v, E, N, k, U) {
    var Z = o.copy(), x = rn(U || E, v), Y, z, D;
    if ((D = n.call(y, new on("beforestart", {
      sourceEvent: E,
      target: h,
      identifier: k,
      active: a,
      x: x[0],
      y: x[1],
      dx: 0,
      dy: 0,
      dispatch: Z
    }), N)) != null)
      return Y = D.x - x[0] || 0, z = D.y - x[1] || 0, function ne(st, ct, bt) {
        var L = x, Xe;
        switch (st) {
          case "start":
            i[k] = ne, Xe = a++;
            break;
          case "end":
            delete i[k], --a;
          // falls through
          case "drag":
            x = rn(bt || ct, v), Xe = a;
            break;
        }
        Z.call(
          st,
          y,
          new on(st, {
            sourceEvent: ct,
            subject: D,
            target: h,
            identifier: k,
            active: Xe,
            x: x[0] + Y,
            y: x[1] + z,
            dx: x[0] - L[0],
            dy: x[1] - L[1],
            dispatch: Z
          }),
          N
        );
      };
  }
  return h.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : ie(!!y), h) : t;
  }, h.container = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : ie(y), h) : e;
  }, h.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : ie(y), h) : n;
  }, h.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : ie(!!y), h) : r;
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
function Jt() {
}
var Gt = 0.7, be = 1 / Gt, Tt = "\\s*([+-]?\\d+)\\s*", qt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", K = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", xs = /^#([0-9a-f]{3,8})$/, bs = new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`), Ms = new RegExp(`^rgb\\(${K},${K},${K}\\)$`), $s = new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${qt}\\)$`), As = new RegExp(`^rgba\\(${K},${K},${K},${qt}\\)$`), Ts = new RegExp(`^hsl\\(${qt},${K},${K}\\)$`), Ss = new RegExp(`^hsla\\(${qt},${K},${K},${qt}\\)$`), Zn = {
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
Tn(Jt, _t, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Jn,
  // Deprecated! Use color.formatHex.
  formatHex: Jn,
  formatHex8: Ps,
  formatHsl: Es,
  formatRgb: Qn,
  toString: Qn
});
function Jn() {
  return this.rgb().formatHex();
}
function Ps() {
  return this.rgb().formatHex8();
}
function Es() {
  return si(this).formatHsl();
}
function Qn() {
  return this.rgb().formatRgb();
}
function _t(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = xs.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? jn(e) : n === 3 ? new O(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? oe(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? oe(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = bs.exec(t)) ? new O(e[1], e[2], e[3], 1) : (e = Ms.exec(t)) ? new O(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = $s.exec(t)) ? oe(e[1], e[2], e[3], e[4]) : (e = As.exec(t)) ? oe(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Ts.exec(t)) ? nr(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ss.exec(t)) ? nr(e[1], e[2] / 100, e[3] / 100, e[4]) : Zn.hasOwnProperty(t) ? jn(Zn[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function jn(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function oe(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new O(t, e, n, r);
}
function Ns(t) {
  return t instanceof Jt || (t = _t(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function an(t, e, n, r) {
  return arguments.length === 1 ? Ns(t) : new O(t, e, n, r ?? 1);
}
function O(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
Tn(O, an, ai(Jt, {
  brighter(t) {
    return t = t == null ? be : Math.pow(be, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Gt : Math.pow(Gt, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
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
  formatHex8: ks,
  formatRgb: er,
  toString: er
}));
function tr() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}`;
}
function ks() {
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
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new B(t, e, n, r);
}
function si(t) {
  if (t instanceof B) return new B(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jt || (t = _t(t)), !t) return new B();
  if (t instanceof B) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new B(a, s, u, t.opacity);
}
function zs(t, e, n, r) {
  return arguments.length === 1 ? si(t) : new B(t, e, n, r ?? 1);
}
function B(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
Tn(B, zs, ai(Jt, {
  brighter(t) {
    return t = t == null ? be : Math.pow(be, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Gt : Math.pow(Gt, t), new B(this.h, this.s, this.l * t, this.opacity);
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
    return new B(rr(this.h), ae(this.s), ae(this.l), Me(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Me(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${rr(this.h)}, ${ae(this.s) * 100}%, ${ae(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function rr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ae(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ye(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Sn = (t) => () => t;
function Os(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Is(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function Cs(t) {
  return (t = +t) == 1 ? ui : function(e, n) {
    return n - e ? Is(e, n, t) : Sn(isNaN(e) ? n : e);
  };
}
function ui(t, e) {
  var n = e - t;
  return n ? Os(t, n) : Sn(isNaN(t) ? e : t);
}
const $e = (function t(e) {
  var n = Cs(e);
  function r(i, o) {
    var a = n((i = an(i)).r, (o = an(o)).r), s = n(i.g, o.g), u = n(i.b, o.b), l = ui(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Rs(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function Fs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ls(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Pn(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Ds(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function H(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Hs(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Pn(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var sn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ke = new RegExp(sn.source, "g");
function Bs(t) {
  return function() {
    return t;
  };
}
function Gs(t) {
  return function(e) {
    return t(e) + "";
  };
}
function li(t, e) {
  var n = sn.lastIndex = Ke.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", e = e + ""; (r = sn.exec(t)) && (i = Ke.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: H(r, i) })), n = Ke.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Gs(u[0].x) : Bs(e) : (e = u.length, function(l) {
    for (var c = 0, f; c < e; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function Pn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? Sn(e) : (n === "number" ? H : n === "string" ? (r = _t(e)) ? (e = r, $e) : li : e instanceof _t ? $e : e instanceof Date ? Ds : Fs(e) ? Rs : Array.isArray(e) ? Ls : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Hs : H)(t, e);
}
function qs(t, e) {
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
var se;
function Xs(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? un : ci(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Us(t) {
  return t == null || (se || (se = document.createElementNS("http://www.w3.org/2000/svg", "g")), se.setAttribute("transform", t), !(t = se.transform.baseVal.consolidate())) ? un : (t = t.matrix, ci(t.a, t.b, t.c, t.d, t.e, t.f));
}
function fi(t, e, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push("translate(", null, e, null, n);
      d.push({ i: p - 4, x: H(l, f) }, { i: p - 2, x: H(c, h) });
    } else (f || h) && g.push("translate(" + f + e + h + n);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: H(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: H(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push(i(g) + "scale(", null, ",", null, ")");
      d.push({ i: p - 4, x: H(l, f) }, { i: p - 2, x: H(c, h) });
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
var Ys = fi(Xs, "px, ", "px)", "deg)"), Ks = fi(Us, ", ", ")", ")"), Et = 0, It = 0, zt = 0, hi = 1e3, Ae, Ct, Te = 0, yt = 0, Ne = 0, Xt = typeof performance == "object" && performance.now ? performance : Date, di = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ke() {
  return yt || (di(Vs), yt = Xt.now() + Ne);
}
function Vs() {
  yt = 0;
}
function Ut() {
  this._call = this._time = this._next = null;
}
Ut.prototype = pi.prototype = {
  constructor: Ut,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? ke() : +n) + (e == null ? 0 : +e), !this._next && Ct !== this && (Ct ? Ct._next = this : Ae = this, Ct = this), this._call = t, this._time = n, ln();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ln());
  }
};
function pi(t, e, n) {
  var r = new Ut();
  return r.restart(t, e, n), r;
}
function Ws() {
  ke(), ++Et;
  for (var t = Ae, e; t; )
    (e = yt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Et;
}
function or() {
  yt = (Te = Xt.now()) + Ne, Et = It = 0;
  try {
    Ws();
  } finally {
    Et = 0, Js(), yt = 0;
  }
}
function Zs() {
  var t = Xt.now(), e = t - Te;
  e > hi && (Ne -= e, Te = t);
}
function Js() {
  for (var t, e = Ae, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ae = n);
  Ct = t, ln(r);
}
function ln(t) {
  if (!Et) {
    It && (It = clearTimeout(It));
    var e = t - yt;
    e > 24 ? (t < 1 / 0 && (It = setTimeout(or, t - Xt.now() - Ne)), zt && (zt = clearInterval(zt))) : (zt || (Te = Xt.now(), zt = setInterval(Zs, hi)), Et = 1, di(or));
  }
}
function ar(t, e, n) {
  var r = new Ut();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Qs(t, e, n) {
  var r = new Ut(), i = e;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? ke() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, e, n), r;
}
var js = Mn("start", "end", "cancel", "interrupt"), tu = [], gi = 0, sr = 1, cn = 2, pe = 3, ur = 4, fn = 5, ge = 6;
function ze(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  eu(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: js,
    tween: tu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: gi
  });
}
function En(t, e) {
  var n = q(t, e);
  if (n.state > gi) throw new Error("too late; already scheduled");
  return n;
}
function W(t, e) {
  var n = q(t, e);
  if (n.state > pe) throw new Error("too late; already running");
  return n;
}
function q(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function eu(t, e, n) {
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
        if (g.state === pe) return ar(a);
        g.state === ur ? (g.state = ge, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[c]) : +c < e && (g.state = ge, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[c]);
      }
    if (ar(function() {
      n.state === pe && (n.state = ur, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = cn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === cn) {
      for (n.state = pe, i = new Array(h = n.tween.length), c = 0, f = -1; c < h; ++c)
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
    n.state = ge, n.timer.stop(), delete r[e];
    for (var l in r) return;
    delete t.__transition;
  }
}
function nu(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > cn && r.state < fn, r.state = ge, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function ru(t) {
  return this.each(function() {
    nu(this, t);
  });
}
function iu(t, e) {
  var n, r;
  return function() {
    var i = W(this, t), o = i.tween;
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
function ou(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = W(this, t), a = o.tween;
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
function au(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = q(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? iu : ou)(n, t, e));
}
function Nn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = W(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[e];
  };
}
function _i(t, e) {
  var n;
  return (typeof e == "number" ? H : e instanceof _t ? $e : (n = _t(e)) ? (e = n, $e) : li)(t, e);
}
function su(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function uu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function lu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function cu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function fu(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function hu(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function du(t, e) {
  var n = Ee(t), r = n === "transform" ? Ks : _i;
  return this.attrTween(t, typeof e == "function" ? (n.local ? hu : fu)(n, r, Nn(this, "attr." + t, e)) : e == null ? (n.local ? uu : su)(n) : (n.local ? cu : lu)(n, r, e));
}
function pu(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function gu(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function _u(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && gu(t, o)), n;
  }
  return i._value = e, i;
}
function yu(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && pu(t, o)), n;
  }
  return i._value = e, i;
}
function mu(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ee(t);
  return this.tween(n, (r.local ? _u : yu)(r, e));
}
function wu(t, e) {
  return function() {
    En(this, t).delay = +e.apply(this, arguments);
  };
}
function vu(t, e) {
  return e = +e, function() {
    En(this, t).delay = e;
  };
}
function xu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? wu : vu)(e, t)) : q(this.node(), e).delay;
}
function bu(t, e) {
  return function() {
    W(this, t).duration = +e.apply(this, arguments);
  };
}
function Mu(t, e) {
  return e = +e, function() {
    W(this, t).duration = e;
  };
}
function $u(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? bu : Mu)(e, t)) : q(this.node(), e).duration;
}
function Au(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    W(this, t).ease = e;
  };
}
function Tu(t) {
  var e = this._id;
  return arguments.length ? this.each(Au(e, t)) : q(this.node(), e).ease;
}
function Su(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    W(this, t).ease = n;
  };
}
function Pu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Su(this._id, t));
}
function Eu(t) {
  typeof t != "function" && (t = Zr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new et(r, this._parents, this._name, this._id);
}
function Nu(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = e[s], l = n[s], c = u.length, f = a[s] = new Array(c), h, g = 0; g < c; ++g)
      (h = u[g] || l[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = e[s];
  return new et(a, this._parents, this._name, this._id);
}
function ku(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function zu(t, e, n) {
  var r, i, o = ku(e) ? En : W;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function Ou(t, e) {
  var n = this._id;
  return arguments.length < 2 ? q(this.node(), n).on.on(t) : this.each(zu(n, t, e));
}
function Iu(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Cu() {
  return this.on("end.remove", Iu(this._id));
}
function Ru(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = $n(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, ze(l[h], e, n, h, l, q(c, n)));
  return new et(o, this._parents, e, n);
}
function Fu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Wr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), g, d = q(c, n), p = 0, w = h.length; p < w; ++p)
          (g = h[p]) && ze(g, e, n, p, h, d);
        o.push(h), a.push(c);
      }
  return new et(o, a, e, n);
}
var Lu = Zt.prototype.constructor;
function Du() {
  return new Lu(this._groups, this._parents);
}
function Hu(t, e) {
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
function Bu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = Pt(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Gu(t, e, n) {
  var r, i, o;
  return function() {
    var a = Pt(this, t), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Pt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s));
  };
}
function qu(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var u = W(this, t), l = u.on, c = u.value[o] == null ? s || (s = yi(e)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(a, i = c), u.on = r;
  };
}
function Xu(t, e, n) {
  var r = (t += "") == "transform" ? Ys : _i;
  return e == null ? this.styleTween(t, Hu(t, r)).on("end.style." + t, yi(t)) : typeof e == "function" ? this.styleTween(t, Gu(t, r, Nn(this, "style." + t, e))).each(qu(this._id, t)) : this.styleTween(t, Bu(t, r, e), n).on("end.style." + t, null);
}
function Uu(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Yu(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Uu(t, a, n)), r;
  }
  return o._value = e, o;
}
function Ku(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Yu(t, e, n ?? ""));
}
function Vu(t) {
  return function() {
    this.textContent = t;
  };
}
function Wu(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Zu(t) {
  return this.tween("text", typeof t == "function" ? Wu(Nn(this, "text", t)) : Vu(t == null ? "" : t + ""));
}
function Ju(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Qu(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ju(i)), e;
  }
  return r._value = t, r;
}
function ju(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Qu(t));
}
function tl() {
  for (var t = this._name, e = this._id, n = mi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = q(u, e);
        ze(u, t, n, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new et(r, this._parents, t, n);
}
function el() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var l = W(this, r), c = l.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(u)), l.on = e;
    }), i === 0 && o();
  });
}
var nl = 0;
function et(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function mi() {
  return ++nl;
}
var J = Zt.prototype;
et.prototype = {
  constructor: et,
  select: Ru,
  selectAll: Fu,
  selectChild: J.selectChild,
  selectChildren: J.selectChildren,
  filter: Eu,
  merge: Nu,
  selection: Du,
  transition: tl,
  call: J.call,
  nodes: J.nodes,
  node: J.node,
  size: J.size,
  empty: J.empty,
  each: J.each,
  on: Ou,
  attr: du,
  attrTween: mu,
  style: Xu,
  styleTween: Ku,
  text: Zu,
  textTween: ju,
  remove: Cu,
  tween: au,
  delay: xu,
  duration: $u,
  ease: Tu,
  easeVarying: Pu,
  end: el,
  [Symbol.iterator]: J[Symbol.iterator]
};
const rl = (t) => +t;
function il(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var ol = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: il
};
function al(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function sl(t) {
  var e, n;
  t instanceof et ? (e = t._id, t = t._name) : (e = mi(), (n = ol).time = ke(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && ze(u, t, e, l, a, n || al(u, e));
  return new et(r, this._parents, t, e);
}
Zt.prototype.interrupt = ru;
Zt.prototype.transition = sl;
const hn = Math.PI, dn = 2 * hn, ft = 1e-6, ul = dn - ft;
function wi(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function ll(t) {
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
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? wi : ll(e);
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
      let g = r - a, d = i - s, p = u * u + l * l, w = g * g + d * d, _ = Math.sqrt(p), b = Math.sqrt(h), $ = o * Math.tan((hn - Math.acos((p + h - w) / (2 * _ * b))) / 2), y = $ / b, v = $ / _;
      Math.abs(y - 1) > ft && this._append`L${e + y * c},${n + y * f}`, this._append`A${o},${o},0,0,${+(f * g > c * d)},${this._x1 = e + v * u},${this._y1 = n + v * l}`;
    }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = e + s, c = n + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ft || Math.abs(this._y1 - c) > ft) && this._append`L${l},${c}`, r && (h < 0 && (h = h % dn + dn), h > ul ? this._append`A${r},${r},0,1,${f},${e - s},${n - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ft && this._append`A${r},${r},0,${+(h >= hn)},${f},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function X() {
  return new vi();
}
X.prototype = vi.prototype;
function cl(t) {
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
function Nt(t) {
  return t = Se(Math.abs(t)), t ? t[1] : NaN;
}
function fl(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(n.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function hl(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var dl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Yt(t) {
  if (!(e = dl.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new kn({
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
Yt.prototype = kn.prototype;
function kn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
kn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function pl(t) {
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
function gl(t, e) {
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
  d: cl,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => lr(t * 100, e),
  r: lr,
  s: gl,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function fr(t) {
  return t;
}
var hr = Array.prototype.map, dr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function _l(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? fr : fl(hr.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? fr : hl(hr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = Yt(f);
    var h = f.fill, g = f.align, d = f.sign, p = f.symbol, w = f.zero, _ = f.width, b = f.comma, $ = f.precision, y = f.trim, v = f.type;
    v === "n" ? (b = !0, v = "g") : cr[v] || ($ === void 0 && ($ = 12), y = !0, v = "g"), (w || h === "0" && g === "=") && (w = !0, h = "0", g = "=");
    var E = p === "$" ? n : p === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", N = p === "$" ? r : /[%p]/.test(v) ? a : "", k = cr[v], U = /[defgprs%]/.test(v);
    $ = $ === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function Z(x) {
      var Y = E, z = N, D, ne, st;
      if (v === "c")
        z = k(x) + z, x = "";
      else {
        x = +x;
        var ct = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? u : k(Math.abs(x), $), y && (x = pl(x)), ct && +x == 0 && d !== "+" && (ct = !1), Y = (ct ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + Y, z = (v === "s" ? dr[8 + xi / 3] : "") + z + (ct && d === "(" ? ")" : ""), U) {
          for (D = -1, ne = x.length; ++D < ne; )
            if (st = x.charCodeAt(D), 48 > st || st > 57) {
              z = (st === 46 ? i + x.slice(D + 1) : x.slice(D)) + z, x = x.slice(0, D);
              break;
            }
        }
      }
      b && !w && (x = e(x, 1 / 0));
      var bt = Y.length + x.length + z.length, L = bt < _ ? new Array(_ - bt + 1).join(h) : "";
      switch (b && w && (x = e(L + x, L.length ? _ - z.length : 1 / 0), L = ""), g) {
        case "<":
          x = Y + x + z + L;
          break;
        case "=":
          x = Y + L + x + z;
          break;
        case "^":
          x = L.slice(0, bt = L.length >> 1) + Y + x + z + L.slice(bt);
          break;
        default:
          x = L + Y + x + z;
          break;
      }
      return o(x);
    }
    return Z.toString = function() {
      return f + "";
    }, Z;
  }
  function c(f, h) {
    var g = l((f = Yt(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(Nt(h) / 3))) * 3, p = Math.pow(10, -d), w = dr[8 + d / 3];
    return function(_) {
      return g(p * _) + w;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var ue, Qt, bi;
yl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function yl(t) {
  return ue = _l(t), Qt = ue.format, bi = ue.formatPrefix, ue;
}
function ml(t) {
  return Math.max(0, -Nt(Math.abs(t)));
}
function wl(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Nt(e) / 3))) * 3 - Nt(Math.abs(t)));
}
function vl(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Nt(e) - Nt(t)) + 1;
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
function xl(t) {
  return function() {
    return t;
  };
}
function bl(t) {
  return +t;
}
var pr = [0, 1];
function Mt(t) {
  return t;
}
function pn(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : xl(isNaN(e) ? NaN : 0.5);
}
function Ml(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function $l(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = pn(i, r), o = n(a, o)) : (r = pn(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function Al(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = pn(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var u = $o(t, s, 1, r) - 1;
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
    return a !== Mt && (a = Ml(t[0], t[h - 1])), s = h > 2 ? Al : $l, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), e, n)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(e, t.map(r), H)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, bl), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), c()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = qs, c();
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
function Tl() {
  return Ai()(Mt, Mt);
}
function Sl(t, e, n, r) {
  var i = Po(t, e, n), o;
  switch (r = Yt(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = wl(i, a)) && (r.precision = o), bi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = vl(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = ml(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Qt(r);
}
function Pl(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return tn(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Sl(i[0], i[i.length - 1], n ?? 10, r);
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
function G() {
  var t = Tl();
  return t.copy = function() {
    return $i(t, G());
  }, Mi.apply(t, arguments), Pl(t);
}
function El(t, e) {
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
function Nl(t) {
  return -Math.log(-t);
}
function kl(t) {
  return -Math.exp(-t);
}
function zl(t) {
  return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
}
function Ol(t) {
  return t === 10 ? zl : t === Math.E ? Math.exp : (e) => Math.pow(t, e);
}
function Il(t) {
  return t === Math.E ? Math.log : t === 10 && Math.log10 || t === 2 && Math.log2 || (t = Math.log(t), (e) => Math.log(e) / t);
}
function yr(t) {
  return (e, n) => -t(-e, n);
}
function Cl(t) {
  const e = t(gr, _r), n = e.domain;
  let r = 10, i, o;
  function a() {
    return i = Il(r), o = Ol(r), n()[0] < 0 ? (i = yr(i), o = yr(o), t(Nl, kl)) : t(gr, _r), e;
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
    if (s == null && (s = 10), u == null && (u = r === 10 ? "s" : ","), typeof u != "function" && (!(r % 1) && (u = Yt(u)).precision == null && (u.trim = !0), u = Qt(u)), s === 1 / 0) return u;
    const l = Math.max(1, r * s / e.ticks().length);
    return (c) => {
      let f = c / o(Math.round(i(c)));
      return f * r < r - 0.5 && (f *= r), f <= l ? u(c) : "";
    };
  }, e.nice = () => n(El(n(), {
    floor: (s) => o(Math.floor(i(s))),
    ceil: (s) => o(Math.ceil(i(s)))
  })), e;
}
function Ti() {
  const t = Cl(Ai()).domain([1, 10]);
  return t.copy = () => $i(t, Ti()).base(t.base()), Mi.apply(t, arguments), t;
}
function Rl(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const Fl = Rl("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
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
var Si = typeof global == "object" && global && global.Object === Object && global, Ll = typeof self == "object" && self && self.Object === Object && self, it = Si || Ll || Function("return this")(), V = it.Symbol, Pi = Object.prototype, Dl = Pi.hasOwnProperty, Hl = Pi.toString, Ot = V ? V.toStringTag : void 0;
function Bl(t) {
  var e = Dl.call(t, Ot), n = t[Ot];
  try {
    t[Ot] = void 0;
    var r = !0;
  } catch {
  }
  var i = Hl.call(t);
  return r && (e ? t[Ot] = n : delete t[Ot]), i;
}
var Gl = Object.prototype, ql = Gl.toString;
function Xl(t) {
  return ql.call(t);
}
var Ul = "[object Null]", Yl = "[object Undefined]", mr = V ? V.toStringTag : void 0;
function wt(t) {
  return t == null ? t === void 0 ? Yl : Ul : mr && mr in Object(t) ? Bl(t) : Xl(t);
}
function lt(t) {
  return t != null && typeof t == "object";
}
var Kl = "[object Symbol]";
function Oe(t) {
  return typeof t == "symbol" || lt(t) && wt(t) == Kl;
}
function jt(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var F = Array.isArray, wr = V ? V.prototype : void 0, vr = wr ? wr.toString : void 0;
function Ei(t) {
  if (typeof t == "string")
    return t;
  if (F(t))
    return jt(t, Ei) + "";
  if (Oe(t))
    return vr ? vr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Vl = /\s/;
function Wl(t) {
  for (var e = t.length; e-- && Vl.test(t.charAt(e)); )
    ;
  return e;
}
var Zl = /^\s+/;
function Jl(t) {
  return t && t.slice(0, Wl(t) + 1).replace(Zl, "");
}
function nt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var xr = NaN, Ql = /^[-+]0x[0-9a-f]+$/i, jl = /^0b[01]+$/i, tc = /^0o[0-7]+$/i, ec = parseInt;
function nc(t) {
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
  t = Jl(t);
  var n = jl.test(t);
  return n || tc.test(t) ? ec(t.slice(2), n ? 2 : 8) : Ql.test(t) ? xr : +t;
}
var br = 1 / 0, rc = 17976931348623157e292;
function Ve(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = nc(t), t === br || t === -br) {
    var e = t < 0 ? -1 : 1;
    return e * rc;
  }
  return t === t ? t : 0;
}
function Ie(t) {
  return t;
}
var ic = "[object AsyncFunction]", oc = "[object Function]", ac = "[object GeneratorFunction]", sc = "[object Proxy]";
function Ni(t) {
  if (!nt(t))
    return !1;
  var e = wt(t);
  return e == oc || e == ac || e == ic || e == sc;
}
var We = it["__core-js_shared__"], Mr = (function() {
  var t = /[^.]+$/.exec(We && We.keys && We.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function uc(t) {
  return !!Mr && Mr in t;
}
var lc = Function.prototype, cc = lc.toString;
function vt(t) {
  if (t != null) {
    try {
      return cc.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var fc = /[\\^$.*+?()[\]{}|]/g, hc = /^\[object .+?Constructor\]$/, dc = Function.prototype, pc = Object.prototype, gc = dc.toString, _c = pc.hasOwnProperty, yc = RegExp(
  "^" + gc.call(_c).replace(fc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function mc(t) {
  if (!nt(t) || uc(t))
    return !1;
  var e = Ni(t) ? yc : hc;
  return e.test(vt(t));
}
function wc(t, e) {
  return t == null ? void 0 : t[e];
}
function xt(t, e) {
  var n = wc(t, e);
  return mc(n) ? n : void 0;
}
var gn = xt(it, "WeakMap");
function vc(t, e, n) {
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
var xc = 800, bc = 16, Mc = Date.now;
function $c(t) {
  var e = 0, n = 0;
  return function() {
    var r = Mc(), i = bc - (r - n);
    if (n = r, i > 0) {
      if (++e >= xc)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function Ac(t) {
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
})(), Tc = Pe ? function(t, e) {
  return Pe(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ac(e),
    writable: !0
  });
} : Ie, Sc = $c(Tc);
function Pc(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function Ec(t, e, n, r) {
  for (var i = t.length, o = n + -1; ++o < i; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function Nc(t) {
  return t !== t;
}
function kc(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function zc(t, e, n) {
  return e === e ? kc(t, e, n) : Ec(t, Nc, n);
}
function Oc(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && zc(t, e, 0) > -1;
}
var Ic = 9007199254740991, Cc = /^(?:0|[1-9]\d*)$/;
function Ce(t, e) {
  var n = typeof t;
  return e = e ?? Ic, !!e && (n == "number" || n != "symbol" && Cc.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Rc(t, e, n) {
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
var Fc = Object.prototype, Lc = Fc.hasOwnProperty;
function Dc(t, e, n) {
  var r = t[e];
  (!(Lc.call(t, e) && Re(r, n)) || n === void 0 && !(e in t)) && Rc(t, e, n);
}
var $r = Math.max;
function Hc(t, e, n) {
  return e = $r(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = $r(r.length - e, 0), a = Array(o); ++i < o; )
      a[i] = r[e + i];
    i = -1;
    for (var s = Array(e + 1); ++i < e; )
      s[i] = r[i];
    return s[e] = n(a), vc(t, this, s);
  };
}
function Bc(t, e) {
  return Sc(Hc(t, e, Ie), t + "");
}
var Gc = 9007199254740991;
function zn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Gc;
}
function kt(t) {
  return t != null && zn(t.length) && !Ni(t);
}
function qc(t, e, n) {
  if (!nt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? kt(n) && Ce(e, n.length) : r == "string" && e in n) ? Re(n[e], t) : !1;
}
var Xc = Object.prototype;
function ki(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || Xc;
  return t === n;
}
function Uc(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Yc = "[object Arguments]";
function Ar(t) {
  return lt(t) && wt(t) == Yc;
}
var zi = Object.prototype, Kc = zi.hasOwnProperty, Vc = zi.propertyIsEnumerable, On = Ar(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Ar : function(t) {
  return lt(t) && Kc.call(t, "callee") && !Vc.call(t, "callee");
};
function Wc() {
  return !1;
}
var Oi = typeof exports == "object" && exports && !exports.nodeType && exports, Tr = Oi && typeof module == "object" && module && !module.nodeType && module, Zc = Tr && Tr.exports === Oi, Sr = Zc ? it.Buffer : void 0, Jc = Sr ? Sr.isBuffer : void 0, _n = Jc || Wc, Qc = "[object Arguments]", jc = "[object Array]", tf = "[object Boolean]", ef = "[object Date]", nf = "[object Error]", rf = "[object Function]", of = "[object Map]", af = "[object Number]", sf = "[object Object]", uf = "[object RegExp]", lf = "[object Set]", cf = "[object String]", ff = "[object WeakMap]", hf = "[object ArrayBuffer]", df = "[object DataView]", pf = "[object Float32Array]", gf = "[object Float64Array]", _f = "[object Int8Array]", yf = "[object Int16Array]", mf = "[object Int32Array]", wf = "[object Uint8Array]", vf = "[object Uint8ClampedArray]", xf = "[object Uint16Array]", bf = "[object Uint32Array]", A = {};
A[pf] = A[gf] = A[_f] = A[yf] = A[mf] = A[wf] = A[vf] = A[xf] = A[bf] = !0;
A[Qc] = A[jc] = A[hf] = A[tf] = A[df] = A[ef] = A[nf] = A[rf] = A[of] = A[af] = A[sf] = A[uf] = A[lf] = A[cf] = A[ff] = !1;
function Mf(t) {
  return lt(t) && zn(t.length) && !!A[wt(t)];
}
function $f(t) {
  return function(e) {
    return t(e);
  };
}
var Ii = typeof exports == "object" && exports && !exports.nodeType && exports, Lt = Ii && typeof module == "object" && module && !module.nodeType && module, Af = Lt && Lt.exports === Ii, Ze = Af && Si.process, Pr = (function() {
  try {
    var t = Lt && Lt.require && Lt.require("util").types;
    return t || Ze && Ze.binding && Ze.binding("util");
  } catch {
  }
})(), Er = Pr && Pr.isTypedArray, Ci = Er ? $f(Er) : Mf, Tf = Object.prototype, Sf = Tf.hasOwnProperty;
function Ri(t, e) {
  var n = F(t), r = !n && On(t), i = !n && !r && _n(t), o = !n && !r && !i && Ci(t), a = n || r || i || o, s = a ? Uc(t.length, String) : [], u = s.length;
  for (var l in t)
    (e || Sf.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
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
var Pf = Fi(Object.keys, Object), Ef = Object.prototype, Nf = Ef.hasOwnProperty;
function kf(t) {
  if (!ki(t))
    return Pf(t);
  var e = [];
  for (var n in Object(t))
    Nf.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function te(t) {
  return kt(t) ? Ri(t) : kf(t);
}
function zf(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Of = Object.prototype, If = Of.hasOwnProperty;
function Cf(t) {
  if (!nt(t))
    return zf(t);
  var e = ki(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !If.call(t, r)) || n.push(r);
  return n;
}
function Rf(t) {
  return kt(t) ? Ri(t, !0) : Cf(t);
}
var Ff = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Lf = /^\w*$/;
function In(t, e) {
  if (F(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Oe(t) ? !0 : Lf.test(t) || !Ff.test(t) || e != null && t in Object(e);
}
var Kt = xt(Object, "create");
function Df() {
  this.__data__ = Kt ? Kt(null) : {}, this.size = 0;
}
function Hf(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Bf = "__lodash_hash_undefined__", Gf = Object.prototype, qf = Gf.hasOwnProperty;
function Xf(t) {
  var e = this.__data__;
  if (Kt) {
    var n = e[t];
    return n === Bf ? void 0 : n;
  }
  return qf.call(e, t) ? e[t] : void 0;
}
var Uf = Object.prototype, Yf = Uf.hasOwnProperty;
function Kf(t) {
  var e = this.__data__;
  return Kt ? e[t] !== void 0 : Yf.call(e, t);
}
var Vf = "__lodash_hash_undefined__";
function Wf(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Kt && e === void 0 ? Vf : e, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = Df;
mt.prototype.delete = Hf;
mt.prototype.get = Xf;
mt.prototype.has = Kf;
mt.prototype.set = Wf;
function Zf() {
  this.__data__ = [], this.size = 0;
}
function Fe(t, e) {
  for (var n = t.length; n--; )
    if (Re(t[n][0], e))
      return n;
  return -1;
}
var Jf = Array.prototype, Qf = Jf.splice;
function jf(t) {
  var e = this.__data__, n = Fe(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Qf.call(e, n, 1), --this.size, !0;
}
function th(t) {
  var e = this.__data__, n = Fe(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function eh(t) {
  return Fe(this.__data__, t) > -1;
}
function nh(t, e) {
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
ot.prototype.clear = Zf;
ot.prototype.delete = jf;
ot.prototype.get = th;
ot.prototype.has = eh;
ot.prototype.set = nh;
var Vt = xt(it, "Map");
function rh() {
  this.size = 0, this.__data__ = {
    hash: new mt(),
    map: new (Vt || ot)(),
    string: new mt()
  };
}
function ih(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Le(t, e) {
  var n = t.__data__;
  return ih(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function oh(t) {
  var e = Le(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function ah(t) {
  return Le(this, t).get(t);
}
function sh(t) {
  return Le(this, t).has(t);
}
function uh(t, e) {
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
at.prototype.clear = rh;
at.prototype.delete = oh;
at.prototype.get = ah;
at.prototype.has = sh;
at.prototype.set = uh;
var lh = "Expected a function";
function Cn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(lh);
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
var ch = 500;
function fh(t) {
  var e = Cn(t, function(r) {
    return n.size === ch && n.clear(), r;
  }), n = e.cache;
  return e;
}
var hh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dh = /\\(\\)?/g, ph = fh(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(hh, function(n, r, i, o) {
    e.push(i ? o.replace(dh, "$1") : r || n);
  }), e;
});
function De(t) {
  return t == null ? "" : Ei(t);
}
function He(t, e) {
  return F(t) ? t : In(t, e) ? [t] : ph(De(t));
}
function ee(t) {
  if (typeof t == "string" || Oe(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Rn(t, e) {
  e = He(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[ee(e[n++])];
  return n && n == r ? t : void 0;
}
function gh(t, e, n) {
  var r = t == null ? void 0 : Rn(t, e);
  return r === void 0 ? n : r;
}
function Fn(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Nr = V ? V.isConcatSpreadable : void 0;
function _h(t) {
  return F(t) || On(t) || !!(Nr && t && t[Nr]);
}
function yh(t, e, n, r, i) {
  var o = -1, a = t.length;
  for (n || (n = _h), i || (i = []); ++o < a; ) {
    var s = t[o];
    n(s) ? Fn(i, s) : i[i.length] = s;
  }
  return i;
}
function mh(t) {
  var e = t == null ? 0 : t.length;
  return e ? yh(t) : [];
}
var wh = Fi(Object.getPrototypeOf, Object);
function vh(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + e];
  return o;
}
function xh(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, !e && n >= r ? t : vh(t, e, n);
}
var bh = "\\ud800-\\udfff", Mh = "\\u0300-\\u036f", $h = "\\ufe20-\\ufe2f", Ah = "\\u20d0-\\u20ff", Th = Mh + $h + Ah, Sh = "\\ufe0e\\ufe0f", Ph = "\\u200d", Eh = RegExp("[" + Ph + bh + Th + Sh + "]");
function Li(t) {
  return Eh.test(t);
}
function Nh(t) {
  return t.split("");
}
var Di = "\\ud800-\\udfff", kh = "\\u0300-\\u036f", zh = "\\ufe20-\\ufe2f", Oh = "\\u20d0-\\u20ff", Ih = kh + zh + Oh, Ch = "\\ufe0e\\ufe0f", Rh = "[" + Di + "]", yn = "[" + Ih + "]", mn = "\\ud83c[\\udffb-\\udfff]", Fh = "(?:" + yn + "|" + mn + ")", Hi = "[^" + Di + "]", Bi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Lh = "\\u200d", qi = Fh + "?", Xi = "[" + Ch + "]?", Dh = "(?:" + Lh + "(?:" + [Hi, Bi, Gi].join("|") + ")" + Xi + qi + ")*", Hh = Xi + qi + Dh, Bh = "(?:" + [Hi + yn + "?", yn, Bi, Gi, Rh].join("|") + ")", Gh = RegExp(mn + "(?=" + mn + ")|" + Bh + Hh, "g");
function qh(t) {
  return t.match(Gh) || [];
}
function Xh(t) {
  return Li(t) ? qh(t) : Nh(t);
}
function Uh(t) {
  return function(e) {
    e = De(e);
    var n = Li(e) ? Xh(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? xh(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var Yh = Uh("toUpperCase");
function Kh(t) {
  return Yh(De(t).toLowerCase());
}
function Vh() {
  this.__data__ = new ot(), this.size = 0;
}
function Wh(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Zh(t) {
  return this.__data__.get(t);
}
function Jh(t) {
  return this.__data__.has(t);
}
var Qh = 200;
function jh(t, e) {
  var n = this.__data__;
  if (n instanceof ot) {
    var r = n.__data__;
    if (!Vt || r.length < Qh - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new at(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function tt(t) {
  var e = this.__data__ = new ot(t);
  this.size = e.size;
}
tt.prototype.clear = Vh;
tt.prototype.delete = Wh;
tt.prototype.get = Zh;
tt.prototype.has = Jh;
tt.prototype.set = jh;
function td(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function Ui() {
  return [];
}
var ed = Object.prototype, nd = ed.propertyIsEnumerable, kr = Object.getOwnPropertySymbols, Yi = kr ? function(t) {
  return t == null ? [] : (t = Object(t), td(kr(t), function(e) {
    return nd.call(t, e);
  }));
} : Ui, rd = Object.getOwnPropertySymbols, id = rd ? function(t) {
  for (var e = []; t; )
    Fn(e, Yi(t)), t = wh(t);
  return e;
} : Ui;
function Ki(t, e, n) {
  var r = e(t);
  return F(t) ? r : Fn(r, n(t));
}
function zr(t) {
  return Ki(t, te, Yi);
}
function od(t) {
  return Ki(t, Rf, id);
}
var wn = xt(it, "DataView"), vn = xt(it, "Promise"), xn = xt(it, "Set"), Or = "[object Map]", ad = "[object Object]", Ir = "[object Promise]", Cr = "[object Set]", Rr = "[object WeakMap]", Fr = "[object DataView]", sd = vt(wn), ud = vt(Vt), ld = vt(vn), cd = vt(xn), fd = vt(gn), j = wt;
(wn && j(new wn(new ArrayBuffer(1))) != Fr || Vt && j(new Vt()) != Or || vn && j(vn.resolve()) != Ir || xn && j(new xn()) != Cr || gn && j(new gn()) != Rr) && (j = function(t) {
  var e = wt(t), n = e == ad ? t.constructor : void 0, r = n ? vt(n) : "";
  if (r)
    switch (r) {
      case sd:
        return Fr;
      case ud:
        return Or;
      case ld:
        return Ir;
      case cd:
        return Cr;
      case fd:
        return Rr;
    }
  return e;
});
var Lr = it.Uint8Array, hd = "__lodash_hash_undefined__";
function dd(t) {
  return this.__data__.set(t, hd), this;
}
function pd(t) {
  return this.__data__.has(t);
}
function Wt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new at(); ++e < n; )
    this.add(t[e]);
}
Wt.prototype.add = Wt.prototype.push = dd;
Wt.prototype.has = pd;
function gd(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Vi(t, e) {
  return t.has(e);
}
var _d = 1, yd = 2;
function Wi(t, e, n, r, i, o) {
  var a = n & _d, s = t.length, u = e.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(e);
  if (l && c)
    return l == e && c == t;
  var f = -1, h = !0, g = n & yd ? new Wt() : void 0;
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
      if (!gd(e, function(_, b) {
        if (!Vi(g, b) && (d === _ || i(d, _, n, r, o)))
          return g.push(b);
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
function md(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var wd = 1, vd = 2, xd = "[object Boolean]", bd = "[object Date]", Md = "[object Error]", $d = "[object Map]", Ad = "[object Number]", Td = "[object RegExp]", Sd = "[object Set]", Pd = "[object String]", Ed = "[object Symbol]", Nd = "[object ArrayBuffer]", kd = "[object DataView]", Dr = V ? V.prototype : void 0, Je = Dr ? Dr.valueOf : void 0;
function zd(t, e, n, r, i, o, a) {
  switch (n) {
    case kd:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Nd:
      return !(t.byteLength != e.byteLength || !o(new Lr(t), new Lr(e)));
    case xd:
    case bd:
    case Ad:
      return Re(+t, +e);
    case Md:
      return t.name == e.name && t.message == e.message;
    case Td:
    case Pd:
      return t == e + "";
    case $d:
      var s = Zi;
    case Sd:
      var u = r & wd;
      if (s || (s = md), t.size != e.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == e;
      r |= vd, a.set(t, e);
      var c = Wi(s(t), s(e), r, i, o, a);
      return a.delete(t), c;
    case Ed:
      if (Je)
        return Je.call(t) == Je.call(e);
  }
  return !1;
}
var Od = 1, Id = Object.prototype, Cd = Id.hasOwnProperty;
function Rd(t, e, n, r, i, o) {
  var a = n & Od, s = zr(t), u = s.length, l = zr(e), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in e : Cd.call(e, h)))
      return !1;
  }
  var g = o.get(t), d = o.get(e);
  if (g && d)
    return g == e && d == t;
  var p = !0;
  o.set(t, e), o.set(e, t);
  for (var w = a; ++f < u; ) {
    h = s[f];
    var _ = t[h], b = e[h];
    if (r)
      var $ = a ? r(b, _, h, e, t, o) : r(_, b, h, t, e, o);
    if (!($ === void 0 ? _ === b || i(_, b, n, r, o) : $)) {
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
var Fd = 1, Hr = "[object Arguments]", Br = "[object Array]", le = "[object Object]", Ld = Object.prototype, Gr = Ld.hasOwnProperty;
function Dd(t, e, n, r, i, o) {
  var a = F(t), s = F(e), u = a ? Br : j(t), l = s ? Br : j(e);
  u = u == Hr ? le : u, l = l == Hr ? le : l;
  var c = u == le, f = l == le, h = u == l;
  if (h && _n(t)) {
    if (!_n(e))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new tt()), a || Ci(t) ? Wi(t, e, n, r, i, o) : zd(t, e, u, n, r, i, o);
  if (!(n & Fd)) {
    var g = c && Gr.call(t, "__wrapped__"), d = f && Gr.call(e, "__wrapped__");
    if (g || d) {
      var p = g ? t.value() : t, w = d ? e.value() : e;
      return o || (o = new tt()), i(p, w, n, r, o);
    }
  }
  return h ? (o || (o = new tt()), Rd(t, e, n, r, i, o)) : !1;
}
function Ln(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !lt(t) && !lt(e) ? t !== t && e !== e : Dd(t, e, n, r, Ln, i);
}
var Hd = 1, Bd = 2;
function Gd(t, e, n, r) {
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
      if (!(f === void 0 ? Ln(l, u, Hd | Bd, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Ji(t) {
  return t === t && !nt(t);
}
function qd(t) {
  for (var e = te(t), n = e.length; n--; ) {
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
function Xd(t) {
  var e = qd(t);
  return e.length == 1 && e[0][2] ? Qi(e[0][0], e[0][1]) : function(n) {
    return n === t || Gd(n, t, e);
  };
}
function Ud(t, e) {
  return t != null && e in Object(t);
}
function ji(t, e, n) {
  e = He(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = ee(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && zn(i) && Ce(a, i) && (F(t) || On(t)));
}
function Yd(t, e) {
  return t != null && ji(t, e, Ud);
}
var Kd = 1, Vd = 2;
function Wd(t, e) {
  return In(t) && Ji(e) ? Qi(ee(t), e) : function(n) {
    var r = gh(n, t);
    return r === void 0 && r === e ? Yd(n, t) : Ln(e, r, Kd | Vd);
  };
}
function Zd(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Jd(t) {
  return function(e) {
    return Rn(e, t);
  };
}
function Qd(t) {
  return In(t) ? Zd(ee(t)) : Jd(t);
}
function to(t) {
  return typeof t == "function" ? t : t == null ? Ie : typeof t == "object" ? F(t) ? Wd(t[0], t[1]) : Xd(t) : Qd(t);
}
function jd(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var u = a[++i];
      if (n(o[u], u, o) === !1)
        break;
    }
    return e;
  };
}
var t0 = jd();
function e0(t, e) {
  return t && t0(t, e, te);
}
function n0(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!kt(n))
      return t(n, r);
    for (var i = n.length, o = -1, a = Object(n); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return n;
  };
}
var eo = n0(e0);
function r0(t) {
  return lt(t) && kt(t);
}
var i0 = 200;
function o0(t, e, n, r) {
  var i = -1, o = Oc, a = !0, s = t.length, u = [], l = e.length;
  if (!s)
    return u;
  e.length >= i0 && (o = Vi, a = !1, e = new Wt(e));
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
function a0(t) {
  return typeof t == "function" ? t : Ie;
}
function _e(t, e) {
  var n = F(t) ? Pc : eo;
  return n(t, a0(e));
}
function s0(t, e) {
  return jt(e, function(n) {
    return [n, t[n]];
  });
}
function u0(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var l0 = "[object Map]", c0 = "[object Set]";
function f0(t) {
  return function(e) {
    var n = j(e);
    return n == l0 ? Zi(e) : n == c0 ? u0(e) : s0(e, t(e));
  };
}
var no = f0(te);
function h0(t, e) {
  var n = -1, r = kt(t) ? Array(t.length) : [];
  return eo(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function rt(t, e) {
  var n = F(t) ? jt : h0;
  return n(t, to(e));
}
var d0 = Object.prototype, p0 = d0.hasOwnProperty;
function g0(t, e) {
  return t != null && p0.call(t, e);
}
function ro(t, e) {
  return t != null && ji(t, e, g0);
}
function _0(t, e) {
  return jt(e, function(n) {
    return t[n];
  });
}
function y0(t) {
  return t == null ? [] : _0(t, te(t));
}
var m0 = "[object Boolean]";
function w0(t) {
  return t === !0 || t === !1 || lt(t) && wt(t) == m0;
}
function v0(t, e, n, r) {
  if (!nt(t))
    return t;
  e = He(e, t);
  for (var i = -1, o = e.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = ee(e[i]), l = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = nt(c) ? c : Ce(e[i + 1]) ? [] : {});
    }
    Dc(s, u, l), s = s[u];
  }
  return t;
}
function x0(t, e, n) {
  for (var r = -1, i = e.length, o = {}; ++r < i; ) {
    var a = e[r], s = Rn(t, a);
    n(s, a) && v0(o, He(a, t), s);
  }
  return o;
}
function Dn(t, e) {
  if (t == null)
    return {};
  var n = jt(od(t), function(r) {
    return [r];
  });
  return e = to(e), x0(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var b0 = Math.floor, M0 = Math.random;
function $0(t, e) {
  return t + b0(M0() * (e - t + 1));
}
var A0 = Math.ceil, T0 = Math.max;
function S0(t, e, n, r) {
  for (var i = -1, o = T0(A0((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function P0(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && qc(e, n, r) && (n = r = void 0), e = Ve(e), n === void 0 ? (n = e, e = 0) : n = Ve(n), r = r === void 0 ? e < n ? 1 : -1 : Ve(r), S0(e, n, r);
  };
}
var St = P0();
function E0() {
  var t = arguments, e = De(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function io(t) {
  var e = t.length;
  return e ? t[$0(0, e - 1)] : void 0;
}
function N0(t) {
  return io(y0(t));
}
function k0(t) {
  var e = F(t) ? io : N0;
  return e(t);
}
var z0 = Bc(function(t, e) {
  return r0(t) ? o0(t, e) : [];
});
const qr = (t, e, n = 12, r = 12) => {
  const i = G().domain([0, n]).range([0, t]), o = G().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return St((n + 1) * (r + 1)).map(function(u) {
        return { m: u % (n + 1), n: Math.floor(u / (n + 1)), x: i(u % (n + 1)), y: o(Math.floor(u / (n + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = mh(rt(l, function(f) {
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
}, O0 = "_widget_18g36_1", I0 = "_label_18g36_19", C0 = "_lit_18g36_24", R0 = "_button_18g36_29", F0 = "_symbol_18g36_29", L0 = "_radio_18g36_29", D0 = "_radiobutton_18g36_29", H0 = "_selected_18g36_35", B0 = "_toggle_18g36_35", G0 = "_slider_18g36_44", q0 = "_track_18g36_44", X0 = "_track_overlay_18g36_48", U0 = "_handle_18g36_55", m = {
  widget: O0,
  label: I0,
  lit: C0,
  button: R0,
  symbol: F0,
  radio: L0,
  radiobutton: D0,
  selected: H0,
  toggle: B0,
  slider: G0,
  track: q0,
  track_overlay: X0,
  handle: U0
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
}, Y0 = (t = 1) => {
  const e = X();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, K0 = (t = 1) => {
  const e = X(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, V0 = (t = 1) => {
  const e = X();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, W0 = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = X();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -n), r.lineTo(t * (n * e), t * -n), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -n), r.lineTo(-t * (n * e), t * -n), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, Z0 = (t = 1) => {
  const e = X(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), e.arc(0, 0, t * (1 - o), r, i, !1), e.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), e.closePath(), e.toString();
}, J0 = (t = 1) => {
  const e = X(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, o = n, a = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, a), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, o, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, Q0 = (t = 1) => {
  const e = X(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), e.arc(0, 0, t * (1 - o), i, r, !0), e.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), e.closePath(), e.toString();
}, j0 = (t = 1) => {
  var e = X(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -n, t * n), e.lineTo(t * -n, t * -n), e.lineTo(t * n, t * -n), e.closePath(), e.toString();
}, tp = (t = 1) => {
  const e = X(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, bn = (t) => {
  switch (t) {
    case "play":
      return Y0;
    case "forward":
      return K0;
    case "back":
      return V0;
    case "pause":
      return W0;
    case "reload":
      return Z0;
    case "capture":
      return J0;
    case "rewind":
      return Q0;
    case "stop":
      return j0;
    case "push":
      return tp;
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
      f = (f + 1) % c.length, l(), P(this.parentNode).select("." + m.symbol).attr("d", bn(c[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + e).select("." + m.symbol).attr("d", bn(c[f])(r * n));
    }
  };
}, ep = () => {
  const t = "slider", e = Qt(".3f");
  var n = Be(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(_) {
  }, f = function(_) {
  }, h = [0, 1], g = 0, d = null, p = G().domain(h).range([0, r]).clamp(!0);
  const w = function(_, b, $ = h) {
    const y = _.select("#slider_" + n);
    p.domain($), g = b, y.selectAll("." + m.handle).transition().attr("cx", p(b)), a && y.select("." + m.label).text(d + " = " + e(g)), c(), f();
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
}, np = () => {
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
      const f = P(this.parentNode);
      f.select("." + m.handle).transition().attr("cx", u ? 2 * n : 0), f.classed(m.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const g = f.select("#toggle_" + e);
      g.selectAll("." + m.handle).transition().attr("cx", u ? 2 * n : 0), g.classed(m.selected, u), s();
    }
  };
}, rp = () => {
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
      h = w, P(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), c();
    },
    reset: function(p, w) {
      h = w, p.select("#radio_" + e).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), c();
    }
  };
}, ip = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = P(o).attr("class", m.widget + " " + m.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    P(this).classed(m.lit, !0), P(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(m.lit, !1), P(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", bn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Hn(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, oo = (t, e) => {
  const n = X();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, op = (t, e) => {
  const n = Qt(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = P(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", oo(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const p = rn(d, this)[0];
    t.value(a.invert(p)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
  }).call(
    vs().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, g = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? re([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -re([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? re([t.girth() / 2, t.knob()]) + 7 : -re([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, ap = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = P(a).attr("class", m.widget + " " + m.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", oo(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Hn(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, sp = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Eo(a), u = G().domain([0, a - 1]).range([0, t.size()]), l = G().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = P(c).attr("class", m.widget + " " + m.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (w) => "b" + w).attr("transform", (w) => t.orientation() == "vertical" ? "translate(0," + l(w) + ")" : "translate(" + u(w) + ",0)");
  var g, d;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), g.attr("class", m.background).on("mouseover", function() {
    P(this).classed(m.lit, !0), P(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    P(this).classed(m.lit, !1), P(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((w) => w == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const p = Hn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(w, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), c;
}, ce = (t, e) => {
  switch (t.type) {
    case "button":
      return ip(t);
    case "slider":
      return op(t);
    case "radio":
      return sp(t);
    case "toggle":
      return ap(t);
  }
}, up = (t, e) => {
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
  ), i = P("#" + t).classed(e.id + " " + e.container_class, !0), o = i.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("viewBox", `0 0 ${e.display_size.width} ${e.display_size.height}`).style("width", "100%"), a = i.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).style("display", "flex").style("flex-direction", "column"), s = a.append("div").style("display", "flex").style("flex-direction", "row").style("width", "100%").style("height", "200px").style("margin-bottom", "10px"), u = s.append("svg").attr("id", "buttons").attr("viewBox", "0 0 150 200").style("width", "30%").style("height", "100%"), l = s.append("svg").attr("id", "plots").attr("viewBox", "0 0 350 200").style("width", "70%").style("height", "100%"), c = a.append("svg").attr("viewBox", `0 0 ${e.controls_size.width} 300`).style("width", "100%");
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
}, M = {
  dt: 1,
  // I think datetime, not used
  L: 100,
  // =length=width
  agentsize: 1.2,
  // define weights for the update function
  weight_inherent_nv: 0.5,
  // for the inherent news value of a topic
  weight_network_nv: 0.5,
  // for the news value based on following
  weight_age_punishment: 3,
  // older topics become less attractive
  importance_of_ideology: {
    range: [0, 3],
    default: 1
  },
  max_inherent_news_val: 3,
  // speed := number of steps per second
  speed: 30,
  // (formerly similarity_threshold)
  user_attention: {
    range: [0, 1],
    default: 0.7
  },
  number_of_agents: {
    choices: [100, 500, 1500],
    default: 1
  },
  number_of_topics: {
    choices: [3, 5, 9],
    default: 1
  },
  society_is_polarized: {
    default: !0
  },
  noise_switching: {
    default: !0,
    label: "Noise"
  }
}, Gn = (t) => rt(no(t), (e) => {
  e[1].id = e[0], e[1].label = E0(Kh(e[0]), /_/g, " ");
}), qn = (t) => rt(no(t), (e) => e[1]), Xn = (t, e) => _e(t, (n, r) => n.widget = e[r]), lp = (t) => Dn(t, (e) => ro(e, "range")), cp = (t) => Dn(t, (e) => w0(e.default)), fp = (t) => Dn(t, (e) => ro(e, "choices"));
G().domain([0, 360]).range([0, 2 * Math.PI]);
G().range([0, 360]).domain([0, 2 * Math.PI]);
function ye() {
  let t = 0, e = 0;
  for (; t === 0; ) t = Math.random();
  for (; e === 0; ) e = Math.random();
  let n = Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e);
  return n = n / 10 + 0.5, n > 1 || n < 0 ? ye() : n;
}
function hp(t) {
  const e = 1 - Math.random();
  return -Math.log(e) / t;
}
const ao = (t, e) => {
  let n;
  do
    n = hp(t);
  while (n > e);
  return n;
};
function Qe(t, e) {
  let n = 1 - Math.random(), r = Math.random();
  return Math.sqrt(-2 * Math.log(n)) * Math.cos(2 * Math.PI * r) * e + t;
}
const Un = lp(M), Yn = cp(M), Kn = fp(M);
Gn(Un);
Gn(Yn);
Gn(Kn);
const so = qn(Un), uo = qn(Yn), lo = qn(Kn), me = rt(so, (t) => ep().id(t.id).label(t.label).range(t.range).value(t.default).size(T.widgets.slider_size)), pt = rt(uo, (t) => np().id(t.id).label(t.label).value(t.default).labelposition(T.widgets.toggle_label_pos)), we = rt(lo, (t) => rp().choices(t.choices).id(t.id).value(t.default).orientation(T.widgets.radio_orientation).labelposition(T.widgets.radio_label_position));
Xn(so, me);
Xn(uo, pt);
Xn(lo, we);
const ut = Bn().actions(["play", "pause"]), Ge = Bn().actions(["back"]), qe = Bn().actions(["rewind"]), dp = [ut, Ge, qe], pp = (t, e, n, r) => {
  ut.position(n.position(T.widgets.playbutton_anchor.x, T.widgets.playbutton_anchor.y)).size(T.widgets.playbutton_size), qe.position(n.position(T.widgets.backbutton_anchor.x, T.widgets.backbutton_anchor.y)), Ge.position(n.position(T.widgets.resetbutton_anchor.x, T.widgets.resetbutton_anchor.y)), t.selectAll(null).data(dp).enter().append(ce);
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
  }), e.selectAll(null).data(me).enter().append(ce), e.selectAll(null).data(pt).enter().append(ce), e.selectAll(null).data(we).enter().append(ce);
  const s = r.position(0.35, 5.9), u = r.position(0.35, 7.9);
  e.append("text").attr("x", s.x).attr("y", s.y).attr("class", "static-label").text("Users:"), e.append("text").attr("x", u.x).attr("y", u.y).attr("class", "static-label").text("Topics:");
}, gp = (t) => {
  _e(Un, (e) => e.widget.reset(t, e.default)), _e(Yn, (e) => e.widget.reset(t, e.default)), _e(Kn, (e) => e.widget.reset(t, e.default)), M.number_of_agents.widget.update();
}, C = M.L, co = 1.5, fo = 180, _p = 60, yp = 0.2, mp = Fl;
var gt = [], S = [];
const ho = (t, e) => {
  e.forEach((n) => {
    n._incoming_links_count = 0;
  }), t.forEach((n) => {
    n.focussed_topic && n.focussed_topic._incoming_links_count++;
  }), e.forEach((n) => {
    n.network_news_val = n._incoming_links_count / t.length, n.age_absolute++;
  });
}, wp = () => {
  M.timer = {}, M.tick = 0;
  const t = M.number_of_topics.choices[M.number_of_topics.widget.value()], e = 1 / (2 * t), r = C * (1 - 2 * e) / (t - 1);
  S = rt(St(t), (s) => {
    let u = Math.random(), l = C * e + s * r, c = ao(co, M.max_inherent_news_val), f = Math.random() * 300 + 2500;
    return {
      index: s,
      generation: 0,
      // Track generation
      id: `t_${s}_g_0`,
      // Unique ID for D3 binding
      history: [],
      // For the comet trails
      x: C * u,
      y: l,
      frame: u,
      initial_news_val: c,
      relevance_multiplier: f,
      network_news_val: 0,
      // this is a dynamic parameter
      get size() {
        return 3.5 + 1 / (S.length + 1) * this.network_news_val ** 2 * 140;
      },
      color: mp[s],
      // Assign color from list
      age_absolute: 0,
      // in seconds
      get max_relevance() {
        return Math.max(fo, this.network_news_val * this.relevance_multiplier);
      },
      get age_relative() {
        return this.age_absolute / this.max_relevance;
      }
    };
  });
  const i = S.reduce((s, u) => s + (u.max_relevance || 0), 0);
  S.forEach((s) => {
    i > 0 ? s.relevance_proportion = (s.max_relevance || 0) / i : s.relevance_proportion = 1 / S.length;
  });
  const o = M.number_of_agents.choices[M.number_of_agents.widget.value()], a = M.society_is_polarized.widget.value();
  gt = rt(St(o), (s) => {
    let u;
    return a ? u = Math.random() > 0.5 ? Qe(0.15, 0.1) : Qe(0.85, 0.1) : u = Qe(0.5, 0.2), u = Math.max(0, Math.min(1, u)), {
      index: s,
      culture: u,
      x: C * u,
      // x pos depends on culture for sorted viz
      y: C * Math.random(),
      focussed_topic: null,
      time_on_topic: 0
    };
  }), ho(gt, S);
}, vp = (t) => {
  let e = Math.random();
  t.frame = e, t.x = C * e, t.frame = e, t.x = C * e, t.initial_news_val = ao(co, M.max_inherent_news_val), t.relevance_multiplier = Math.random() * 300 + 2500, t.network_news_val = 0, t._incoming_links_count = 0, t.age_absolute = 0, t.generation += 1, t.id = `t_${t.index}_g_${t.generation}`, t.history = [];
}, fe = (t) => {
  const e = t.focussed_topic ? z0(S, t.focussed_topic) : S;
  t.focussed_topic = k0(e), t.time_on_topic = 0;
}, xp = () => {
  M.tick++, ho(gt, S);
  const t = S.reduce((r, i) => r + (i.max_relevance || 0), 0);
  S.forEach((r) => {
    t > 0 ? r.relevance_proportion = (r.max_relevance || 0) / t : r.relevance_proportion = 1 / S.length;
  });
  let e = [];
  for (const r of S)
    if (r.age_absolute > fo && r.age_relative > 0.99) {
      vp(r), e.push(r.index);
      break;
    }
  e.length > 0 && gt.forEach((r) => {
    r.focussed_topic && e.includes(r.focussed_topic.index) && fe(r);
  });
  const n = 0.1 * (S.length / 8);
  gt.forEach((r) => {
    const i = r.focussed_topic;
    if (!i) {
      fe(r);
      return;
    }
    const o = M.importance_of_ideology.widget.value(), a = o > 1 ? o ** o : o, u = (0.3 - Math.abs(r.culture - i.frame)) * a, l = i.network_news_val * S.length * M.weight_network_nv, c = i.initial_news_val * M.weight_inherent_nv, f = i.age_relative ** 2 * M.weight_age_punishment, h = u + l + c - f, g = 0.2 * a + // factor in slightly
    M.weight_network_nv + M.weight_inherent_nv, d = (1 - M.user_attention.widget.value()) * g;
    if (r.index === 0 && M.tick % 60 === 0 && (console.table({
      Factor: ["Alignment", "Network News (Popularity)", "Inherent Value", "Age Punishment", "TOTAL ATTACHMENT"],
      Value: [
        u.toFixed(3),
        l.toFixed(3),
        c.toFixed(3),
        `-${f.toFixed(3)}`,
        h.toFixed(3)
      ]
    }), console.log(`Switch Threshold: ${d.toFixed(3)}`), console.log(`weight_ideology: ${a.toFixed(3)}`)), r.time_on_topic > _p) {
      if (h < d) {
        fe(r);
        return;
      }
      if (M.noise_switching.widget.value() && ye() < yp) {
        fe(r);
        return;
      }
    }
    if (r.time_on_topic++, r.focussed_topic) {
      const p = S.length, w = C / p;
      let b = r.focussed_topic.y - r.y;
      b = b - C * Math.round(b / C);
      const $ = ye() * w;
      ye() < 0.5 ? b -= $ : b += $, r.y += b * n, r.y < 0 && (r.y += C), r.y >= C && (r.y -= C);
    }
  });
}, bp = "_node_19yup_1", Mp = {
  node: bp
}, po = M.L, $t = G().domain([0, po]), Dt = G().domain([0, po]), go = 40, $p = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415", Ap = (t, e) => {
  const n = e.display_size.width, r = e.display_size.height;
  $t.range([0, n]), Dt.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  i.selectAll("g.topic-group").data(S, (a) => a.index).enter().append("g").attr("class", "topic-group").attr("transform", (a) => `translate(${$t(a.x)},${Dt(a.y)}) scale(${go})`).append("path").attr("class", "topic-shape").attr("d", $p).style("fill", (a) => a.color).style("stroke", "black").style("vector-effect", "non-scaling-stroke").style("stroke-width", "1px").style("fill-opacity", 1).style("stroke-opacity", 1), i.selectAll(null).data(gt).enter().append("circle").attr("class", `${Mp.node} agent`).attr("cx", (a) => $t(a.x)).attr("cy", (a) => Dt(a.y)).attr("r", $t(M.agentsize / 2)).style("fill", (a) => a.focussed_topic ? a.focussed_topic.color : "#d2cdcd09").style("stroke", "black").style("stroke-width", 0.5).style("stroke-opacity", 1);
}, _o = (t, e) => {
  t.selectAll(".agent").data(gt, (r) => r.index).attr("cx", (r) => $t(r.x)).attr("cy", (r) => Dt(r.y)).style("fill", (r) => r.focussed_topic ? r.focussed_topic.color : "#d2cdcd09").style("fill-opacity", (r) => r.focussed_topic ? Math.max(0, 1 - r.focussed_topic.age_relative) : 1), t.selectAll("g.topic-group").data(S, (r) => r.index).attr("transform", (r) => `translate(${$t(r.x)},${Dt(r.y)}) scale(${go})`).select(".topic-shape").style("fill", (r) => r.color).style("fill-opacity", (r) => Math.max(0, 1 - r.age_relative ** 2)).style("stroke-opacity", (r) => Math.max(0, 1 - r.age_relative ** 2));
}, je = 350, Xr = 200, I = { top: 10, right: 10, bottom: 35, left: 35 }, Tp = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415";
let Ht, Q;
const Sp = (t, e) => {
  t.selectAll("*").remove(), Ht = Ti().domain([0.05, M.max_inherent_news_val]).range([I.left, je - I.right]), Q = G().domain([0, 1]).range([Xr - I.bottom, I.top]);
  const n = t.append("g").attr("class", "axes");
  n.append("line").attr("x1", I.left).attr("x2", je - I.right).attr("y1", Q(0)).attr("y2", Q(0)).attr("stroke", "#333").attr("stroke-width", 1), n.append("line").attr("x1", I.left).attr("x2", I.left).attr("y1", Q(0)).attr("y2", Q(1)).attr("stroke", "#333").attr("stroke-width", 1), t.append("line").attr("x1", Ht(0.05)).attr("y1", Q(0)).attr("x2", Ht(5)).attr("y2", Q(1)).attr("stroke", "#ccc").attr("stroke-dasharray", "4 4"), t.append("text").attr("class", "x-axis-label").attr("text-anchor", "middle").attr("x", I.left + (je - I.left - I.right) / 2).attr("y", Xr - 5).style("font-size", "14px").style("font-family", "sans-serif").style("fill", "#555").text("Topic Newsworthiness (Log)"), t.append("text").attr("class", "y-axis-label").attr("text-anchor", "middle").attr("transform", "rotate(-90)").attr("y", 12).attr("x", -87.5).style("font-size", "14px").style("font-family", "sans-serif").style("fill", "#555").text("Topic Popularity"), t.append("text").attr("class", "gini-label").attr("x", I.left + 15).attr("y", I.top + 15).style("font-size", "14px").style("font-family", "sans-serif").style("fill", "#333").text("Normalized Gini = 0.00"), t.append("g").attr("class", "dots-layer");
}, yo = (t, e) => {
  if (!e) return;
  const n = e.map((s) => s.network_news_val).sort((s, u) => s - u), r = n.length;
  let i = 0;
  if (r > 0) {
    const s = No(n);
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
  const a = o.enter().append("path").attr("class", "dot").attr("d", Tp).attr("transform", (s) => `translate(${Ht(Math.max(0.05, s.initial_news_val))}, ${Q(0)}) scale(0)`).style("fill", (s) => s.color).style("stroke", "black").style("vector-effect", "non-scaling-stroke").style("stroke-width", "1px");
  o.merge(a).transition().duration(50).ease(rl).attr("transform", (s) => {
    const u = Math.max(0.05, s.initial_news_val);
    return `translate(${Ht(u)}, ${Q(s.network_news_val)}) scale(20)`;
  }).style("fill-opacity", 1).style("stroke-opacity", 1);
};
let Ur = 0;
function mo(t, e, n) {
  const r = performance.now(), i = 1e3 / M.speed, o = r - Ur;
  o >= i && (Ur = r - o % i, xp(), _o(t), yo(e, S));
}
function Ft(t, e, n) {
  wp(), Ap(t, n), Sp(e), _o(t), yo(e, S), d3.timer(() => mo(t, e));
}
var Yr = {};
const Pp = (t, e, n) => {
  ut.value() == 1 ? Yr = Qs(
    () => mo(t, e),
    // Pass plots
    T.simulation.delay
  ) : Yr.stop();
}, Ep = (t, e, n, r) => {
  qe.update(() => gp(n)), ut.update(() => Pp(t, e)), Ge.update(() => Ft(t, e, r)), M.number_of_agents.widget.update(() => Ft(t, e, r)), M.number_of_topics.widget.update(() => Ft(t, e, r)), pt && pt.length > 0 && pt.forEach((i) => {
    i.id() === "society_is_polarized" && i.update(() => Ft(t, e, r));
  });
}, Np = {
  name: "@explorables/explorable_template",
  title: "Social Issue Emergence",
  subtitle: "Attention economy meets polarization",
  description: "How hashtag campaigns such as #MeToo or #BlackLivesMatter once dominated online discussions",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function kp(t, e = wo) {
  const n = up(t, e), r = n.display, i = n.plots, o = n.controls, a = n.buttons, s = n.grid_controls, u = n.grid_buttons;
  return pp(a, o, u, s), Ep(r, i, o, e), Ft(r, i, e), {
    halt() {
      ut.value() === 1 && ut.press(controls);
    },
    reset() {
      ut.value() === 1 && ut.press(controls), qe.press(controls), Ge.press(controls);
    },
    config: e,
    meta: Np
  };
}
export {
  wo as config,
  kp as default,
  kp as load,
  Np as meta
};
