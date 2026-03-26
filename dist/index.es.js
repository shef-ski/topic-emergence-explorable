(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-color-blue-600:oklch(54.6% .245 262.881);--tw-spacing:.25rem;--tw-container-4xl:56rem;--tw-container-5xl:64rem;--tw-text-lg:1.125rem;--tw-text-lg--line-height:calc(1.75/1.125);--tw-text-xl:1.25rem;--tw-text-xl--line-height:calc(1.75/1.25);--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:mx-auto{margin-inline:auto}.tw\\:my-4{margin-block:calc(var(--tw-spacing)*4)}.tw\\:my-8{margin-block:calc(var(--tw-spacing)*8)}.tw\\:mt-8{margin-top:calc(var(--tw-spacing)*8)}.tw\\:mb-2{margin-bottom:calc(var(--tw-spacing)*2)}.tw\\:mb-4{margin-bottom:calc(var(--tw-spacing)*4)}.tw\\:ml-6{margin-left:calc(var(--tw-spacing)*6)}.tw\\:grid{display:grid}.tw\\:max-w-4xl{max-width:var(--tw-container-4xl)}.tw\\:list-outside{list-style-position:outside}.tw\\:list-decimal{list-style-type:decimal}.tw\\:list-disc{list-style-type:disc}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:pb-20{padding-bottom:calc(var(--tw-spacing)*20)}.tw\\:text-center{text-align:center}.tw\\:text-left{text-align:left}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}.tw\\:text-blue-600{color:var(--tw-color-blue-600)}.tw\\:underline{text-decoration-line:underline}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ro = {
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
function wn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Co(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function di(t) {
  let n, e, r;
  t.length !== 2 ? (n = wn, e = (s, l) => wn(t(s), l), r = (s, l) => t(s) - l) : (n = t === wn || t === Co ? t : Fo, e = t, r = t);
  function i(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        e(s[f], l) < 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function o(s, l, u = 0, c = s.length) {
    if (u < c) {
      if (n(l, l) !== 0) return c;
      do {
        const f = u + c >>> 1;
        e(s[f], l) <= 0 ? u = f + 1 : c = f;
      } while (u < c);
    }
    return u;
  }
  function a(s, l, u = 0, c = s.length) {
    const f = i(s, l, u, c - 1);
    return f > u && r(s[f - 1], l) > -r(s[f], l) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function Fo() {
  return 0;
}
function Lo(t) {
  return t === null ? NaN : +t;
}
const Do = di(wn), Ho = Do.right;
di(Lo).center;
const qo = Math.sqrt(50), Bo = Math.sqrt(10), Go = Math.sqrt(2);
function Nn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= qo ? 10 : o >= Bo ? 5 : o >= Go ? 2 : 1;
  let s, l, u;
  return i < 0 ? (u = Math.pow(10, -i) / a, s = Math.round(t * u), l = Math.round(n * u), s / u < t && ++s, l / u > n && --l, u = -u) : (u = Math.pow(10, i) * a, s = Math.round(t / u), l = Math.round(n / u), s * u < t && ++s, l * u > n && --l), l < s && 0.5 <= e && e < 2 ? Nn(t, n, e * 2) : [s, l, u];
}
function Xo(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? Nn(n, t, e) : Nn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, l = new Array(s);
  if (r)
    if (a < 0) for (let u = 0; u < s; ++u) l[u] = (o - u) / -a;
    else for (let u = 0; u < s; ++u) l[u] = (o - u) * a;
  else if (a < 0) for (let u = 0; u < s; ++u) l[u] = (i + u) / -a;
  else for (let u = 0; u < s; ++u) l[u] = (i + u) * a;
  return l;
}
function me(t, n, e) {
  return n = +n, t = +t, e = +e, Nn(t, n, e)[2];
}
function Uo(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? me(n, t, e) : me(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function cn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Yo(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function gr(t, n) {
  let e = 0;
  if (n === void 0)
    for (let r of t)
      (r = +r) && (e += r);
  else {
    let r = -1;
    for (let i of t)
      (i = +n(i, ++r, t)) && (e += i);
  }
  return e;
}
var Vo = { value: () => {
} };
function qe() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new xn(e);
}
function xn(t) {
  this._ = t;
}
function Ko(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
xn.prototype = qe.prototype = {
  constructor: xn,
  on: function(t, n) {
    var e = this._, r = Ko(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Wo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = _r(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = _r(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new xn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Wo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function _r(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Vo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var ve = "http://www.w3.org/1999/xhtml";
const yr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ve,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function qn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), yr.hasOwnProperty(n) ? { space: yr[n], local: t } : t;
}
function Zo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === ve && n.documentElement.namespaceURI === ve ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Jo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function pi(t) {
  var n = qn(t);
  return (n.local ? Jo : Zo)(n);
}
function Qo() {
}
function Be(t) {
  return t == null ? Qo : function() {
    return this.querySelector(t);
  };
}
function jo(t) {
  typeof t != "function" && (t = Be(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), l, u, c = 0; c < a; ++c)
      (l = o[c]) && (u = t.call(l, l.__data__, c, o)) && ("__data__" in l && (u.__data__ = l.__data__), s[c] = u);
  return new Y(r, this._parents);
}
function ta(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function na() {
  return [];
}
function gi(t) {
  return t == null ? na : function() {
    return this.querySelectorAll(t);
  };
}
function ea(t) {
  return function() {
    return ta(t.apply(this, arguments));
  };
}
function ra(t) {
  typeof t == "function" ? t = ea(t) : t = gi(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && (r.push(t.call(l, l.__data__, u, a)), i.push(l));
  return new Y(r, i);
}
function _i(t) {
  return function() {
    return this.matches(t);
  };
}
function yi(t) {
  return function(n) {
    return n.matches(t);
  };
}
var ia = Array.prototype.find;
function oa(t) {
  return function() {
    return ia.call(this.children, t);
  };
}
function aa() {
  return this.firstElementChild;
}
function sa(t) {
  return this.select(t == null ? aa : oa(typeof t == "function" ? t : yi(t)));
}
var ua = Array.prototype.filter;
function la() {
  return Array.from(this.children);
}
function ca(t) {
  return function() {
    return ua.call(this.children, t);
  };
}
function fa(t) {
  return this.selectAll(t == null ? la : ca(typeof t == "function" ? t : yi(t)));
}
function ha(t) {
  typeof t != "function" && (t = _i(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new Y(r, this._parents);
}
function mi(t) {
  return new Array(t.length);
}
function da() {
  return new Y(this._enter || this._groups.map(mi), this._parents);
}
function kn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
kn.prototype = {
  constructor: kn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function pa(t) {
  return function() {
    return t;
  };
}
function ga(t, n, e, r, i, o) {
  for (var a = 0, s, l = n.length, u = o.length; a < u; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new kn(t, o[a]);
  for (; a < l; ++a)
    (s = n[a]) && (i[a] = s);
}
function _a(t, n, e, r, i, o, a) {
  var s, l, u = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), p;
  for (s = 0; s < c; ++s)
    (l = n[s]) && (h[s] = p = a.call(l, l.__data__, s, n) + "", u.has(p) ? i[s] = l : u.set(p, l));
  for (s = 0; s < f; ++s)
    p = a.call(t, o[s], s, o) + "", (l = u.get(p)) ? (r[s] = l, l.__data__ = o[s], u.delete(p)) : e[s] = new kn(t, o[s]);
  for (s = 0; s < c; ++s)
    (l = n[s]) && u.get(h[s]) === l && (i[s] = l);
}
function ya(t) {
  return t.__data__;
}
function ma(t, n) {
  if (!arguments.length) return Array.from(this, ya);
  var e = n ? _a : ga, r = this._parents, i = this._groups;
  typeof t != "function" && (t = pa(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), l = new Array(o), u = 0; u < o; ++u) {
    var c = r[u], f = i[u], h = f.length, p = va(t.call(c, c && c.__data__, u, r)), d = p.length, g = s[u] = new Array(d), w = a[u] = new Array(d), _ = l[u] = new Array(h);
    e(c, f, g, w, _, p, n);
    for (var M = 0, $ = 0, y, m; M < d; ++M)
      if (y = g[M]) {
        for (M >= $ && ($ = M + 1); !(m = w[$]) && ++$ < d; ) ;
        y._next = m || null;
      }
  }
  return a = new Y(a, r), a._enter = s, a._exit = l, a;
}
function va(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function wa() {
  return new Y(this._exit || this._groups.map(mi), this._parents);
}
function xa(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function ba(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), l = 0; l < a; ++l)
    for (var u = e[l], c = r[l], f = u.length, h = s[l] = new Array(f), p, d = 0; d < f; ++d)
      (p = u[d] || c[d]) && (h[d] = p);
  for (; l < i; ++l)
    s[l] = e[l];
  return new Y(s, this._parents);
}
function Ma() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function $a(t) {
  t || (t = Aa);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, l = i[o] = new Array(s), u, c = 0; c < s; ++c)
      (u = a[c]) && (l[c] = u);
    l.sort(n);
  }
  return new Y(i, this._parents).order();
}
function Aa(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ta() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Sa() {
  return Array.from(this);
}
function Pa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Ea() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Na() {
  return !this.node();
}
function ka(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function za(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Oa(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Ia(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Ra(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Ca(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Fa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function La(t, n) {
  var e = qn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Oa : za : typeof n == "function" ? e.local ? Fa : Ca : e.local ? Ra : Ia)(e, n));
}
function vi(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Da(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Ha(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function qa(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Ba(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Da : typeof n == "function" ? qa : Ha)(t, n, e ?? "")) : Rt(this.node(), t);
}
function Rt(t, n) {
  return t.style.getPropertyValue(n) || vi(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ga(t) {
  return function() {
    delete this[t];
  };
}
function Xa(t, n) {
  return function() {
    this[t] = n;
  };
}
function Ua(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Ya(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ga : typeof n == "function" ? Ua : Xa)(t, n)) : this.node()[t];
}
function wi(t) {
  return t.trim().split(/^|\s+/);
}
function Ge(t) {
  return t.classList || new xi(t);
}
function xi(t) {
  this._node = t, this._names = wi(t.getAttribute("class") || "");
}
xi.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function bi(t, n) {
  for (var e = Ge(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Mi(t, n) {
  for (var e = Ge(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Va(t) {
  return function() {
    bi(this, t);
  };
}
function Ka(t) {
  return function() {
    Mi(this, t);
  };
}
function Wa(t, n) {
  return function() {
    (n.apply(this, arguments) ? bi : Mi)(this, t);
  };
}
function Za(t, n) {
  var e = wi(t + "");
  if (arguments.length < 2) {
    for (var r = Ge(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Wa : n ? Va : Ka)(e, n));
}
function Ja() {
  this.textContent = "";
}
function Qa(t) {
  return function() {
    this.textContent = t;
  };
}
function ja(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ts(t) {
  return arguments.length ? this.each(t == null ? Ja : (typeof t == "function" ? ja : Qa)(t)) : this.node().textContent;
}
function ns() {
  this.innerHTML = "";
}
function es(t) {
  return function() {
    this.innerHTML = t;
  };
}
function rs(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function is(t) {
  return arguments.length ? this.each(t == null ? ns : (typeof t == "function" ? rs : es)(t)) : this.node().innerHTML;
}
function os() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function as() {
  return this.each(os);
}
function ss() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function us() {
  return this.each(ss);
}
function ls(t) {
  var n = typeof t == "function" ? t : pi(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function cs() {
  return null;
}
function fs(t, n) {
  var e = typeof t == "function" ? t : pi(t), r = n == null ? cs : typeof n == "function" ? n : Be(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function hs() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ds() {
  return this.each(hs);
}
function ps() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function gs() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function _s(t) {
  return this.select(t ? gs : ps);
}
function ys(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ms(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function vs(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function ws(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function xs(t, n, e) {
  return function() {
    var r = this.__on, i, o = ms(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function bs(t, n, e) {
  var r = vs(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var l = 0, u = s.length, c; l < u; ++l)
        for (i = 0, c = s[l]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = n ? xs : ws, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function $i(t, n, e) {
  var r = vi(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Ms(t, n) {
  return function() {
    return $i(this, t, n);
  };
}
function $s(t, n) {
  return function() {
    return $i(this, t, n.apply(this, arguments));
  };
}
function As(t, n) {
  return this.each((typeof n == "function" ? $s : Ms)(t, n));
}
function* Ts() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Ai = [null];
function Y(t, n) {
  this._groups = t, this._parents = n;
}
function en() {
  return new Y([[document.documentElement]], Ai);
}
function Ss() {
  return this;
}
Y.prototype = en.prototype = {
  constructor: Y,
  select: jo,
  selectAll: ra,
  selectChild: sa,
  selectChildren: fa,
  filter: ha,
  data: ma,
  enter: da,
  exit: wa,
  join: xa,
  merge: ba,
  selection: Ss,
  order: Ma,
  sort: $a,
  call: Ta,
  nodes: Sa,
  node: Pa,
  size: Ea,
  empty: Na,
  each: ka,
  attr: La,
  style: Ba,
  property: Ya,
  classed: Za,
  text: ts,
  html: is,
  raise: as,
  lower: us,
  append: ls,
  insert: fs,
  remove: ds,
  clone: _s,
  datum: ys,
  on: bs,
  dispatch: As,
  [Symbol.iterator]: Ts
};
function R(t) {
  return typeof t == "string" ? new Y([[document.querySelector(t)]], [document.documentElement]) : new Y([[t]], Ai);
}
function Ps(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function we(t, n) {
  if (t = Ps(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Es = { passive: !1 }, Vt = { capture: !0, passive: !1 };
function le(t) {
  t.stopImmediatePropagation();
}
function zt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ns(t) {
  var n = t.document.documentElement, e = R(t).on("dragstart.drag", zt, Vt);
  "onselectstart" in n ? e.on("selectstart.drag", zt, Vt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function ks(t, n) {
  var e = t.document.documentElement, r = R(t).on("dragstart.drag", null);
  n && (r.on("click.drag", zt, Vt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const fn = (t) => () => t;
function xe(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: l,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
xe.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function zs(t) {
  return !t.ctrlKey && !t.button;
}
function Os() {
  return this.parentNode;
}
function Is(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Rs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Cs() {
  var t = zs, n = Os, e = Is, r = Rs, i = {}, o = qe("start", "drag", "end"), a = 0, s, l, u, c, f = 0;
  function h(y) {
    y.on("mousedown.drag", p).filter(r).on("touchstart.drag", w).on("touchmove.drag", _, Es).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function p(y, m) {
    if (!(c || !t.call(this, y, m))) {
      var T = $(this, n.call(this, y, m), y, m, "mouse");
      T && (R(y.view).on("mousemove.drag", d, Vt).on("mouseup.drag", g, Vt), Ns(y.view), le(y), u = !1, s = y.clientX, l = y.clientY, T("start", y));
    }
  }
  function d(y) {
    if (zt(y), !u) {
      var m = y.clientX - s, T = y.clientY - l;
      u = m * m + T * T > f;
    }
    i.mouse("drag", y);
  }
  function g(y) {
    R(y.view).on("mousemove.drag mouseup.drag", null), ks(y.view, u), zt(y), i.mouse("end", y);
  }
  function w(y, m) {
    if (t.call(this, y, m)) {
      var T = y.changedTouches, P = n.call(this, y, m), k = T.length, C, O;
      for (C = 0; C < k; ++C)
        (O = $(this, P, y, m, T[C].identifier, T[C])) && (le(y), O("start", y, T[C]));
    }
  }
  function _(y) {
    var m = y.changedTouches, T = m.length, P, k;
    for (P = 0; P < T; ++P)
      (k = i[m[P].identifier]) && (zt(y), k("drag", y, m[P]));
  }
  function M(y) {
    var m = y.changedTouches, T = m.length, P, k;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < T; ++P)
      (k = i[m[P].identifier]) && (le(y), k("end", y, m[P]));
  }
  function $(y, m, T, P, k, C) {
    var O = o.copy(), x = we(C || T, m), z, v, A;
    if ((A = e.call(y, new xe("beforestart", {
      sourceEvent: T,
      target: h,
      identifier: k,
      active: a,
      x: x[0],
      y: x[1],
      dx: 0,
      dy: 0,
      dispatch: O
    }), P)) != null)
      return z = A.x - x[0] || 0, v = A.y - x[1] || 0, function K(G, H, X) {
        var F = x, pt;
        switch (G) {
          case "start":
            i[k] = K, pt = a++;
            break;
          case "end":
            delete i[k], --a;
          // falls through
          case "drag":
            x = we(X || H, m), pt = a;
            break;
        }
        O.call(
          G,
          y,
          new xe(G, {
            sourceEvent: H,
            subject: A,
            target: h,
            identifier: k,
            active: pt,
            x: x[0] + z,
            y: x[1] + v,
            dx: x[0] - F[0],
            dy: x[1] - F[1],
            dispatch: O
          }),
          P
        );
      };
  }
  return h.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : fn(!!y), h) : t;
  }, h.container = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : fn(y), h) : n;
  }, h.subject = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : fn(y), h) : e;
  }, h.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : fn(!!y), h) : r;
  }, h.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? h : y;
  }, h.clickDistance = function(y) {
    return arguments.length ? (f = (y = +y) * y, h) : Math.sqrt(f);
  }, h;
}
function Xe(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Ti(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function rn() {
}
var Kt = 0.7, zn = 1 / Kt, Ot = "\\s*([+-]?\\d+)\\s*", Wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Fs = /^#([0-9a-f]{3,8})$/, Ls = new RegExp(`^rgb\\(${Ot},${Ot},${Ot}\\)$`), Ds = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), Hs = new RegExp(`^rgba\\(${Ot},${Ot},${Ot},${Wt}\\)$`), qs = new RegExp(`^rgba\\(${nt},${nt},${nt},${Wt}\\)$`), Bs = new RegExp(`^hsl\\(${Wt},${nt},${nt}\\)$`), Gs = new RegExp(`^hsla\\(${Wt},${nt},${nt},${Wt}\\)$`), mr = {
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
Xe(rn, Mt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: vr,
  // Deprecated! Use color.formatHex.
  formatHex: vr,
  formatHex8: Xs,
  formatHsl: Us,
  formatRgb: wr,
  toString: wr
});
function vr() {
  return this.rgb().formatHex();
}
function Xs() {
  return this.rgb().formatHex8();
}
function Us() {
  return Si(this).formatHsl();
}
function wr() {
  return this.rgb().formatRgb();
}
function Mt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Fs.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? xr(n) : e === 3 ? new B(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? hn(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? hn(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Ls.exec(t)) ? new B(n[1], n[2], n[3], 1) : (n = Ds.exec(t)) ? new B(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Hs.exec(t)) ? hn(n[1], n[2], n[3], n[4]) : (n = qs.exec(t)) ? hn(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Bs.exec(t)) ? $r(n[1], n[2] / 100, n[3] / 100, 1) : (n = Gs.exec(t)) ? $r(n[1], n[2] / 100, n[3] / 100, n[4]) : mr.hasOwnProperty(t) ? xr(mr[t]) : t === "transparent" ? new B(NaN, NaN, NaN, 0) : null;
}
function xr(t) {
  return new B(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function hn(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new B(t, n, e, r);
}
function Ys(t) {
  return t instanceof rn || (t = Mt(t)), t ? (t = t.rgb(), new B(t.r, t.g, t.b, t.opacity)) : new B();
}
function be(t, n, e, r) {
  return arguments.length === 1 ? Ys(t) : new B(t, n, e, r ?? 1);
}
function B(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Xe(B, be, Ti(rn, {
  brighter(t) {
    return t = t == null ? zn : Math.pow(zn, t), new B(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Kt : Math.pow(Kt, t), new B(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new B(wt(this.r), wt(this.g), wt(this.b), On(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: br,
  // Deprecated! Use color.formatHex.
  formatHex: br,
  formatHex8: Vs,
  formatRgb: Mr,
  toString: Mr
}));
function br() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}`;
}
function Vs() {
  return `#${vt(this.r)}${vt(this.g)}${vt(this.b)}${vt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Mr() {
  const t = On(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${wt(this.r)}, ${wt(this.g)}, ${wt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function On(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function wt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function vt(t) {
  return t = wt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function $r(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Z(t, n, e, r);
}
function Si(t) {
  if (t instanceof Z) return new Z(t.h, t.s, t.l, t.opacity);
  if (t instanceof rn || (t = Mt(t)), !t) return new Z();
  if (t instanceof Z) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, l = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= l < 0.5 ? o + i : 2 - o - i, a *= 60) : s = l > 0 && l < 1 ? 0 : a, new Z(a, s, l, t.opacity);
}
function Ks(t, n, e, r) {
  return arguments.length === 1 ? Si(t) : new Z(t, n, e, r ?? 1);
}
function Z(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Xe(Z, Ks, Ti(rn, {
  brighter(t) {
    return t = t == null ? zn : Math.pow(zn, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Kt : Math.pow(Kt, t), new Z(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new B(
      ce(t >= 240 ? t - 240 : t + 120, i, r),
      ce(t, i, r),
      ce(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Z(Ar(this.h), dn(this.s), dn(this.l), On(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = On(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ar(this.h)}, ${dn(this.s) * 100}%, ${dn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ar(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function dn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ce(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Ue = (t) => () => t;
function Ws(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Zs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Js(t) {
  return (t = +t) == 1 ? Pi : function(n, e) {
    return e - n ? Zs(n, e, t) : Ue(isNaN(n) ? e : n);
  };
}
function Pi(t, n) {
  var e = n - t;
  return e ? Ws(t, e) : Ue(isNaN(t) ? n : t);
}
const In = (function t(n) {
  var e = Js(n);
  function r(i, o) {
    var a = e((i = be(i)).r, (o = be(o)).r), s = e(i.g, o.g), l = e(i.b, o.b), u = Pi(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function Qs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function js(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function tu(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Ye(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function nu(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function W(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function eu(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Ye(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var Me = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, fe = new RegExp(Me.source, "g");
function ru(t) {
  return function() {
    return t;
  };
}
function iu(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Ei(t, n) {
  var e = Me.lastIndex = fe.lastIndex = 0, r, i, o, a = -1, s = [], l = [];
  for (t = t + "", n = n + ""; (r = Me.exec(t)) && (i = fe.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, l.push({ i: a, x: W(r, i) })), e = fe.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? l[0] ? iu(l[0].x) : ru(n) : (n = l.length, function(u) {
    for (var c = 0, f; c < n; ++c) s[(f = l[c]).i] = f.x(u);
    return s.join("");
  });
}
function Ye(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Ue(n) : (e === "number" ? W : e === "string" ? (r = Mt(n)) ? (n = r, In) : Ei : n instanceof Mt ? In : n instanceof Date ? nu : js(n) ? Qs : Array.isArray(n) ? tu : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? eu : W)(t, n);
}
function ou(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Tr = 180 / Math.PI, $e = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ni(t, n, e, r, i, o) {
  var a, s, l;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (l = t * e + n * r) && (e -= t * l, r -= n * l), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, l /= s), t * r < n * e && (t = -t, n = -n, l = -l, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Tr,
    skewX: Math.atan(l) * Tr,
    scaleX: a,
    scaleY: s
  };
}
var pn;
function au(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? $e : Ni(n.a, n.b, n.c, n.d, n.e, n.f);
}
function su(t) {
  return t == null || (pn || (pn = document.createElementNS("http://www.w3.org/2000/svg", "g")), pn.setAttribute("transform", t), !(t = pn.transform.baseVal.consolidate())) ? $e : (t = t.matrix, Ni(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ki(t, n, e, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function o(u, c, f, h, p, d) {
    if (u !== f || c !== h) {
      var g = p.push("translate(", null, n, null, e);
      d.push({ i: g - 4, x: W(u, f) }, { i: g - 2, x: W(c, h) });
    } else (f || h) && p.push("translate(" + f + n + h + e);
  }
  function a(u, c, f, h) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: W(u, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(u, c, f, h) {
    u !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: W(u, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function l(u, c, f, h, p, d) {
    if (u !== f || c !== h) {
      var g = p.push(i(p) + "scale(", null, ",", null, ")");
      d.push({ i: g - 4, x: W(u, f) }, { i: g - 2, x: W(c, h) });
    } else (f !== 1 || h !== 1) && p.push(i(p) + "scale(" + f + "," + h + ")");
  }
  return function(u, c) {
    var f = [], h = [];
    return u = t(u), c = t(c), o(u.translateX, u.translateY, c.translateX, c.translateY, f, h), a(u.rotate, c.rotate, f, h), s(u.skewX, c.skewX, f, h), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, f, h), u = c = null, function(p) {
      for (var d = -1, g = h.length, w; ++d < g; ) f[(w = h[d]).i] = w.x(p);
      return f.join("");
    };
  };
}
var uu = ki(au, "px, ", "px)", "deg)"), lu = ki(su, ", ", ")", ")"), Ct = 0, qt = 0, Dt = 0, zi = 1e3, Rn, Bt, Cn = 0, $t = 0, Bn = 0, Zt = typeof performance == "object" && performance.now ? performance : Date, Oi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Gn() {
  return $t || (Oi(cu), $t = Zt.now() + Bn);
}
function cu() {
  $t = 0;
}
function Jt() {
  this._call = this._time = this._next = null;
}
Jt.prototype = Ii.prototype = {
  constructor: Jt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Gn() : +e) + (n == null ? 0 : +n), !this._next && Bt !== this && (Bt ? Bt._next = this : Rn = this, Bt = this), this._call = t, this._time = e, Ae();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Ae());
  }
};
function Ii(t, n, e) {
  var r = new Jt();
  return r.restart(t, n, e), r;
}
function fu() {
  Gn(), ++Ct;
  for (var t = Rn, n; t; )
    (n = $t - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Ct;
}
function Sr() {
  $t = (Cn = Zt.now()) + Bn, Ct = qt = 0;
  try {
    fu();
  } finally {
    Ct = 0, du(), $t = 0;
  }
}
function hu() {
  var t = Zt.now(), n = t - Cn;
  n > zi && (Bn -= n, Cn = t);
}
function du() {
  for (var t, n = Rn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Rn = e);
  Bt = t, Ae(r);
}
function Ae(t) {
  if (!Ct) {
    qt && (qt = clearTimeout(qt));
    var n = t - $t;
    n > 24 ? (t < 1 / 0 && (qt = setTimeout(Sr, t - Zt.now() - Bn)), Dt && (Dt = clearInterval(Dt))) : (Dt || (Cn = Zt.now(), Dt = setInterval(hu, zi)), Ct = 1, Oi(Sr));
  }
}
function Pr(t, n, e) {
  var r = new Jt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function pu(t, n, e) {
  var r = new Jt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Gn() : +s, r._restart(function l(u) {
      u += i, r._restart(l, i += a, s), o(u);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var gu = qe("start", "end", "cancel", "interrupt"), _u = [], Ri = 0, Er = 1, Te = 2, bn = 3, Nr = 4, Se = 5, Mn = 6;
function Xn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  yu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: gu,
    tween: _u,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Ri
  });
}
function Ve(t, n) {
  var e = Q(t, n);
  if (e.state > Ri) throw new Error("too late; already scheduled");
  return e;
}
function rt(t, n) {
  var e = Q(t, n);
  if (e.state > bn) throw new Error("too late; already running");
  return e;
}
function Q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function yu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = Ii(o, 0, e.time);
  function o(u) {
    e.state = Er, e.timer.restart(a, e.delay, e.time), e.delay <= u && a(u - e.delay);
  }
  function a(u) {
    var c, f, h, p;
    if (e.state !== Er) return l();
    for (c in r)
      if (p = r[c], p.name === e.name) {
        if (p.state === bn) return Pr(a);
        p.state === Nr ? (p.state = Mn, p.timer.stop(), p.on.call("interrupt", t, t.__data__, p.index, p.group), delete r[c]) : +c < n && (p.state = Mn, p.timer.stop(), p.on.call("cancel", t, t.__data__, p.index, p.group), delete r[c]);
      }
    if (Pr(function() {
      e.state === bn && (e.state = Nr, e.timer.restart(s, e.delay, e.time), s(u));
    }), e.state = Te, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Te) {
      for (e.state = bn, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (p = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = p);
      i.length = f + 1;
    }
  }
  function s(u) {
    for (var c = u < e.duration ? e.ease.call(null, u / e.duration) : (e.timer.restart(l), e.state = Se, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === Se && (e.on.call("end", t, t.__data__, e.index, e.group), l());
  }
  function l() {
    e.state = Mn, e.timer.stop(), delete r[n];
    for (var u in r) return;
    delete t.__transition;
  }
}
function mu(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > Te && r.state < Se, r.state = Mn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function vu(t) {
  return this.each(function() {
    mu(this, t);
  });
}
function wu(t, n) {
  var e, r;
  return function() {
    var i = rt(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function xu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = rt(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === n) {
          i[l] = s;
          break;
        }
      l === u && i.push(s);
    }
    o.tween = i;
  };
}
function bu(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = Q(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? wu : xu)(e, t, n));
}
function Ke(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = rt(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return Q(i, r).value[n];
  };
}
function Ci(t, n) {
  var e;
  return (typeof n == "number" ? W : n instanceof Mt ? In : (e = Mt(n)) ? (n = e, In) : Ei)(t, n);
}
function Mu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $u(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Au(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Tu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Su(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Pu(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), l;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), l = s + "", a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s)));
  };
}
function Eu(t, n) {
  var e = qn(t), r = e === "transform" ? lu : Ci;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Pu : Su)(e, r, Ke(this, "attr." + t, n)) : n == null ? (e.local ? $u : Mu)(e) : (e.local ? Tu : Au)(e, r, n));
}
function Nu(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function ku(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function zu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && ku(t, o)), e;
  }
  return i._value = n, i;
}
function Ou(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Nu(t, o)), e;
  }
  return i._value = n, i;
}
function Iu(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = qn(t);
  return this.tween(e, (r.local ? zu : Ou)(r, n));
}
function Ru(t, n) {
  return function() {
    Ve(this, t).delay = +n.apply(this, arguments);
  };
}
function Cu(t, n) {
  return n = +n, function() {
    Ve(this, t).delay = n;
  };
}
function Fu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ru : Cu)(n, t)) : Q(this.node(), n).delay;
}
function Lu(t, n) {
  return function() {
    rt(this, t).duration = +n.apply(this, arguments);
  };
}
function Du(t, n) {
  return n = +n, function() {
    rt(this, t).duration = n;
  };
}
function Hu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Lu : Du)(n, t)) : Q(this.node(), n).duration;
}
function qu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    rt(this, t).ease = n;
  };
}
function Bu(t) {
  var n = this._id;
  return arguments.length ? this.each(qu(n, t)) : Q(this.node(), n).ease;
}
function Gu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    rt(this, t).ease = e;
  };
}
function Xu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Gu(this._id, t));
}
function Uu(t) {
  typeof t != "function" && (t = _i(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], l, u = 0; u < a; ++u)
      (l = o[u]) && t.call(l, l.__data__, u, o) && s.push(l);
  return new ut(r, this._parents, this._name, this._id);
}
function Yu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var l = n[s], u = e[s], c = l.length, f = a[s] = new Array(c), h, p = 0; p < c; ++p)
      (h = l[p] || u[p]) && (f[p] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new ut(a, this._parents, this._name, this._id);
}
function Vu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Ku(t, n, e) {
  var r, i, o = Vu(n) ? Ve : rt;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Wu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? Q(this.node(), e).on.on(t) : this.each(Ku(e, t, n));
}
function Zu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Ju() {
  return this.on("end.remove", Zu(this._id));
}
function Qu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Be(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], l = s.length, u = o[a] = new Array(l), c, f, h = 0; h < l; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), u[h] = f, Xn(u[h], n, e, h, u, Q(c, e)));
  return new ut(o, this._parents, n, e);
}
function ju(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = gi(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var l = r[s], u = l.length, c, f = 0; f < u; ++f)
      if (c = l[f]) {
        for (var h = t.call(c, c.__data__, f, l), p, d = Q(c, e), g = 0, w = h.length; g < w; ++g)
          (p = h[g]) && Xn(p, n, e, g, h, d);
        o.push(h), a.push(c);
      }
  return new ut(o, a, n, e);
}
var tl = en.prototype.constructor;
function nl() {
  return new tl(this._groups, this._parents);
}
function el(t, n) {
  var e, r, i;
  return function() {
    var o = Rt(this, t), a = (this.style.removeProperty(t), Rt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function Fi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function rl(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Rt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function il(t, n, e) {
  var r, i, o;
  return function() {
    var a = Rt(this, t), s = e(this), l = s + "";
    return s == null && (l = s = (this.style.removeProperty(t), Rt(this, t))), a === l ? null : a === r && l === i ? o : (i = l, o = n(r = a, s));
  };
}
function ol(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var l = rt(this, t), u = l.on, c = l.value[o] == null ? s || (s = Fi(n)) : void 0;
    (u !== e || i !== c) && (r = (e = u).copy()).on(a, i = c), l.on = r;
  };
}
function al(t, n, e) {
  var r = (t += "") == "transform" ? uu : Ci;
  return n == null ? this.styleTween(t, el(t, r)).on("end.style." + t, Fi(t)) : typeof n == "function" ? this.styleTween(t, il(t, r, Ke(this, "style." + t, n))).each(ol(this._id, t)) : this.styleTween(t, rl(t, r, n), e).on("end.style." + t, null);
}
function sl(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ul(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && sl(t, a, e)), r;
  }
  return o._value = n, o;
}
function ll(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, ul(t, n, e ?? ""));
}
function cl(t) {
  return function() {
    this.textContent = t;
  };
}
function fl(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function hl(t) {
  return this.tween("text", typeof t == "function" ? fl(Ke(this, "text", t)) : cl(t == null ? "" : t + ""));
}
function dl(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function pl(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && dl(i)), n;
  }
  return r._value = t, r;
}
function gl(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, pl(t));
}
function _l() {
  for (var t = this._name, n = this._id, e = Li(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      if (l = a[u]) {
        var c = Q(l, n);
        Xn(l, t, e, u, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ut(r, this._parents, t, e);
}
function yl() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, l = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var u = rt(this, r), c = u.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(l)), u.on = n;
    }), i === 0 && o();
  });
}
var ml = 0;
function ut(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function Li() {
  return ++ml;
}
var ot = en.prototype;
ut.prototype = {
  constructor: ut,
  select: Qu,
  selectAll: ju,
  selectChild: ot.selectChild,
  selectChildren: ot.selectChildren,
  filter: Uu,
  merge: Yu,
  selection: nl,
  transition: _l,
  call: ot.call,
  nodes: ot.nodes,
  node: ot.node,
  size: ot.size,
  empty: ot.empty,
  each: ot.each,
  on: Wu,
  attr: Eu,
  attrTween: Iu,
  style: al,
  styleTween: ll,
  text: hl,
  textTween: gl,
  remove: Ju,
  tween: bu,
  delay: Fu,
  duration: Hu,
  ease: Bu,
  easeVarying: Xu,
  end: yl,
  [Symbol.iterator]: ot[Symbol.iterator]
};
function vl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var wl = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: vl
};
function xl(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function bl(t) {
  var n, e;
  t instanceof ut ? (n = t._id, t = t._name) : (n = Li(), (e = wl).time = Gn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, l, u = 0; u < s; ++u)
      (l = a[u]) && Xn(l, t, n, u, a, e || xl(l, n));
  return new ut(r, this._parents, t, n);
}
en.prototype.interrupt = vu;
en.prototype.transition = bl;
const Pe = Math.PI, Ee = 2 * Pe, mt = 1e-6, Ml = Ee - mt;
function Di(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function $l(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Di;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class We {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Di : $l(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, l = r - n, u = i - e, c = a - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > mt) if (!(Math.abs(f * l - u * c) > mt) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let p = r - a, d = i - s, g = l * l + u * u, w = p * p + d * d, _ = Math.sqrt(g), M = Math.sqrt(h), $ = o * Math.tan((Pe - Math.acos((g + h - w) / (2 * _ * M))) / 2), y = $ / M, m = $ / _;
      Math.abs(y - 1) > mt && this._append`L${n + y * c},${e + y * f}`, this._append`A${o},${o},0,0,${+(f * p > c * d)},${this._x1 = n + m * l},${this._y1 = e + m * u}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), l = r * Math.sin(i), u = n + s, c = e + l, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${u},${c}` : (Math.abs(this._x1 - u) > mt || Math.abs(this._y1 - c) > mt) && this._append`L${u},${c}`, r && (h < 0 && (h = h % Ee + Ee), h > Ml ? this._append`A${r},${r},0,1,${f},${n - s},${e - l}A${r},${r},0,1,${f},${this._x1 = u},${this._y1 = c}` : h > mt && this._append`A${r},${r},0,${+(h >= Pe)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function j() {
  return new We();
}
j.prototype = We.prototype;
function Al(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Fn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Ft(t) {
  return t = Fn(Math.abs(t)), t ? t[1] : NaN;
}
function Tl(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], l = 0; i > 0 && s > 0 && (l + s + 1 > r && (s = Math.max(1, r - l)), o.push(e.substring(i -= s, i + s)), !((l += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Sl(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Pl = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ln(t) {
  if (!(n = Pl.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ze({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Ln.prototype = Ze.prototype;
function Ze(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ze.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function El(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Hi;
function Nl(t, n) {
  var e = Fn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (Hi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Fn(t, Math.max(0, n + o - 1))[0];
}
function kr(t, n) {
  var e = Fn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const zr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Al,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => kr(t * 100, n),
  r: kr,
  s: Nl,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Or(t) {
  return t;
}
var Ir = Array.prototype.map, Rr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function kl(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? Or : Tl(Ir.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? Or : Sl(Ir.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", l = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = Ln(f);
    var h = f.fill, p = f.align, d = f.sign, g = f.symbol, w = f.zero, _ = f.width, M = f.comma, $ = f.precision, y = f.trim, m = f.type;
    m === "n" ? (M = !0, m = "g") : zr[m] || ($ === void 0 && ($ = 12), y = !0, m = "g"), (w || h === "0" && p === "=") && (w = !0, h = "0", p = "=");
    var T = g === "$" ? e : g === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", P = g === "$" ? r : /[%p]/.test(m) ? a : "", k = zr[m], C = /[defgprs%]/.test(m);
    $ = $ === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function O(x) {
      var z = T, v = P, A, K, G;
      if (m === "c")
        v = k(x) + v, x = "";
      else {
        x = +x;
        var H = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? l : k(Math.abs(x), $), y && (x = El(x)), H && +x == 0 && d !== "+" && (H = !1), z = (H ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + z, v = (m === "s" ? Rr[8 + Hi / 3] : "") + v + (H && d === "(" ? ")" : ""), C) {
          for (A = -1, K = x.length; ++A < K; )
            if (G = x.charCodeAt(A), 48 > G || G > 57) {
              v = (G === 46 ? i + x.slice(A + 1) : x.slice(A)) + v, x = x.slice(0, A);
              break;
            }
        }
      }
      M && !w && (x = n(x, 1 / 0));
      var X = z.length + x.length + v.length, F = X < _ ? new Array(_ - X + 1).join(h) : "";
      switch (M && w && (x = n(F + x, F.length ? _ - v.length : 1 / 0), F = ""), p) {
        case "<":
          x = z + x + v + F;
          break;
        case "=":
          x = z + F + x + v;
          break;
        case "^":
          x = F.slice(0, X = F.length >> 1) + z + x + v + F.slice(X);
          break;
        default:
          x = F + z + x + v;
          break;
      }
      return o(x);
    }
    return O.toString = function() {
      return f + "";
    }, O;
  }
  function c(f, h) {
    var p = u((f = Ln(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(Ft(h) / 3))) * 3, g = Math.pow(10, -d), w = Rr[8 + d / 3];
    return function(_) {
      return p(g * _) + w;
    };
  }
  return {
    format: u,
    formatPrefix: c
  };
}
var gn, Un, qi;
zl({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function zl(t) {
  return gn = kl(t), Un = gn.format, qi = gn.formatPrefix, gn;
}
function Ol(t) {
  return Math.max(0, -Ft(Math.abs(t)));
}
function Il(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ft(n) / 3))) * 3 - Ft(Math.abs(t)));
}
function Rl(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ft(n) - Ft(t)) + 1;
}
function Cl(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Fl(t) {
  return function() {
    return t;
  };
}
function Ll(t) {
  return +t;
}
var Cr = [0, 1];
function Et(t) {
  return t;
}
function Ne(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Fl(isNaN(n) ? NaN : 0.5);
}
function Dl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Hl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = Ne(i, r), o = e(a, o)) : (r = Ne(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function ql(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = Ne(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var l = Ho(t, s, 1, r) - 1;
    return o[l](i[l](s));
  };
}
function Bl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Gl() {
  var t = Cr, n = Cr, e = Ye, r, i, o, a = Et, s, l, u;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== Et && (a = Dl(t[0], t[h - 1])), s = h > 2 ? ql : Hl, l = u = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (l || (l = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((u || (u = s(n, t.map(r), W)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Ll), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = ou, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : Et, c()) : a !== Et;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, p) {
    return r = h, i = p, c();
  };
}
function Xl() {
  return Gl()(Et, Et);
}
function Ul(t, n, e, r) {
  var i = Uo(t, n, e), o;
  switch (r = Ln(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Il(i, a)) && (r.precision = o), qi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Rl(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Ol(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Un(r);
}
function Yl(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Xo(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return Ul(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], l, u, c = 10;
    for (s < a && (u = a, a = s, s = u, u = i, i = o, o = u); c-- > 0; ) {
      if (u = me(a, s, e), u === l)
        return r[i] = a, r[o] = s, n(r);
      if (u > 0)
        a = Math.floor(a / u) * u, s = Math.ceil(s / u) * u;
      else if (u < 0)
        a = Math.ceil(a * u) / u, s = Math.floor(s * u) / u;
      else
        break;
      l = u;
    }
    return t;
  }, t;
}
function J() {
  var t = Xl();
  return t.copy = function() {
    return Bl(t, J());
  }, Cl.apply(t, arguments), Yl(t);
}
function Vl(t) {
  for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n; ) e[r] = "#" + t.slice(r * 6, ++r * 6);
  return e;
}
const Kl = Vl("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function D(t) {
  return function() {
    return t;
  };
}
const Fr = Math.abs, L = Math.atan2, yt = Math.cos, Wl = Math.max, he = Math.min, tt = Math.sin, Nt = Math.sqrt, q = 1e-12, Qt = Math.PI, Dn = Qt / 2, $n = 2 * Qt;
function Zl(t) {
  return t > 1 ? 0 : t < -1 ? Qt : Math.acos(t);
}
function Lr(t) {
  return t >= 1 ? Dn : t <= -1 ? -Dn : Math.asin(t);
}
function Jl(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new We(n);
}
function Ql(t) {
  return t.innerRadius;
}
function jl(t) {
  return t.outerRadius;
}
function tc(t) {
  return t.startAngle;
}
function nc(t) {
  return t.endAngle;
}
function ec(t) {
  return t && t.padAngle;
}
function rc(t, n, e, r, i, o, a, s) {
  var l = e - t, u = r - n, c = a - i, f = s - o, h = f * l - c * u;
  if (!(h * h < q))
    return h = (c * (n - o) - f * (t - i)) / h, [t + h * l, n + h * u];
}
function _n(t, n, e, r, i, o, a) {
  var s = t - e, l = n - r, u = (a ? o : -o) / Nt(s * s + l * l), c = u * l, f = -u * s, h = t + c, p = n + f, d = e + c, g = r + f, w = (h + d) / 2, _ = (p + g) / 2, M = d - h, $ = g - p, y = M * M + $ * $, m = i - o, T = h * g - d * p, P = ($ < 0 ? -1 : 1) * Nt(Wl(0, m * m * y - T * T)), k = (T * $ - M * P) / y, C = (-T * M - $ * P) / y, O = (T * $ + M * P) / y, x = (-T * M + $ * P) / y, z = k - w, v = C - _, A = O - w, K = x - _;
  return z * z + v * v > A * A + K * K && (k = O, C = x), {
    cx: k,
    cy: C,
    x01: -c,
    y01: -f,
    x11: k * (i / m - 1),
    y11: C * (i / m - 1)
  };
}
function ic() {
  var t = Ql, n = jl, e = D(0), r = null, i = tc, o = nc, a = ec, s = null, l = Jl(u);
  function u() {
    var c, f, h = +t.apply(this, arguments), p = +n.apply(this, arguments), d = i.apply(this, arguments) - Dn, g = o.apply(this, arguments) - Dn, w = Fr(g - d), _ = g > d;
    if (s || (s = c = l()), p < h && (f = p, p = h, h = f), !(p > q)) s.moveTo(0, 0);
    else if (w > $n - q)
      s.moveTo(p * yt(d), p * tt(d)), s.arc(0, 0, p, d, g, !_), h > q && (s.moveTo(h * yt(g), h * tt(g)), s.arc(0, 0, h, g, d, _));
    else {
      var M = d, $ = g, y = d, m = g, T = w, P = w, k = a.apply(this, arguments) / 2, C = k > q && (r ? +r.apply(this, arguments) : Nt(h * h + p * p)), O = he(Fr(p - h) / 2, +e.apply(this, arguments)), x = O, z = O, v, A;
      if (C > q) {
        var K = Lr(C / h * tt(k)), G = Lr(C / p * tt(k));
        (T -= K * 2) > q ? (K *= _ ? 1 : -1, y += K, m -= K) : (T = 0, y = m = (d + g) / 2), (P -= G * 2) > q ? (G *= _ ? 1 : -1, M += G, $ -= G) : (P = 0, M = $ = (d + g) / 2);
      }
      var H = p * yt(M), X = p * tt(M), F = h * yt(m), pt = h * tt(m);
      if (O > q) {
        var un = p * yt($), ln = p * tt($), re = h * yt(y), ie = h * tt(y), it;
        if (w < Qt)
          if (it = rc(H, X, re, ie, un, ln, F, pt)) {
            var oe = H - it[0], ae = X - it[1], se = un - it[0], ue = ln - it[1], dr = 1 / tt(Zl((oe * se + ae * ue) / (Nt(oe * oe + ae * ae) * Nt(se * se + ue * ue))) / 2), pr = Nt(it[0] * it[0] + it[1] * it[1]);
            x = he(O, (h - pr) / (dr - 1)), z = he(O, (p - pr) / (dr + 1));
          } else
            x = z = 0;
      }
      P > q ? z > q ? (v = _n(re, ie, H, X, p, z, _), A = _n(un, ln, F, pt, p, z, _), s.moveTo(v.cx + v.x01, v.cy + v.y01), z < O ? s.arc(v.cx, v.cy, z, L(v.y01, v.x01), L(A.y01, A.x01), !_) : (s.arc(v.cx, v.cy, z, L(v.y01, v.x01), L(v.y11, v.x11), !_), s.arc(0, 0, p, L(v.cy + v.y11, v.cx + v.x11), L(A.cy + A.y11, A.cx + A.x11), !_), s.arc(A.cx, A.cy, z, L(A.y11, A.x11), L(A.y01, A.x01), !_))) : (s.moveTo(H, X), s.arc(0, 0, p, M, $, !_)) : s.moveTo(H, X), !(h > q) || !(T > q) ? s.lineTo(F, pt) : x > q ? (v = _n(F, pt, un, ln, h, -x, _), A = _n(H, X, re, ie, h, -x, _), s.lineTo(v.cx + v.x01, v.cy + v.y01), x < O ? s.arc(v.cx, v.cy, x, L(v.y01, v.x01), L(A.y01, A.x01), !_) : (s.arc(v.cx, v.cy, x, L(v.y01, v.x01), L(v.y11, v.x11), !_), s.arc(0, 0, h, L(v.cy + v.y11, v.cx + v.x11), L(A.cy + A.y11, A.cx + A.x11), _), s.arc(A.cx, A.cy, x, L(A.y11, A.x11), L(A.y01, A.x01), !_))) : s.arc(0, 0, h, m, y, _);
    }
    if (s.closePath(), c) return s = null, c + "" || null;
  }
  return u.centroid = function() {
    var c = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2, f = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Qt / 2;
    return [yt(f) * c, tt(f) * c];
  }, u.innerRadius = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : D(+c), u) : t;
  }, u.outerRadius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : D(+c), u) : n;
  }, u.cornerRadius = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : D(+c), u) : e;
  }, u.padRadius = function(c) {
    return arguments.length ? (r = c == null ? null : typeof c == "function" ? c : D(+c), u) : r;
  }, u.startAngle = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : D(+c), u) : i;
  }, u.endAngle = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : D(+c), u) : o;
  }, u.padAngle = function(c) {
    return arguments.length ? (a = typeof c == "function" ? c : D(+c), u) : a;
  }, u.context = function(c) {
    return arguments.length ? (s = c ?? null, u) : s;
  }, u;
}
function oc(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ac(t, n) {
  return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function sc(t) {
  return t;
}
function uc() {
  var t = sc, n = ac, e = null, r = D(0), i = D($n), o = D(0);
  function a(s) {
    var l, u = (s = oc(s)).length, c, f, h = 0, p = new Array(u), d = new Array(u), g = +r.apply(this, arguments), w = Math.min($n, Math.max(-$n, i.apply(this, arguments) - g)), _, M = Math.min(Math.abs(w) / u, o.apply(this, arguments)), $ = M * (w < 0 ? -1 : 1), y;
    for (l = 0; l < u; ++l)
      (y = d[p[l] = l] = +t(s[l], l, s)) > 0 && (h += y);
    for (n != null ? p.sort(function(m, T) {
      return n(d[m], d[T]);
    }) : e != null && p.sort(function(m, T) {
      return e(s[m], s[T]);
    }), l = 0, f = h ? (w - u * $) / h : 0; l < u; ++l, g = _)
      c = p[l], y = d[c], _ = g + (y > 0 ? y * f : 0) + $, d[c] = {
        data: s[c],
        index: l,
        value: y,
        startAngle: g,
        endAngle: _,
        padAngle: M
      };
    return d;
  }
  return a.value = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : D(+s), a) : t;
  }, a.sortValues = function(s) {
    return arguments.length ? (n = s, e = null, a) : n;
  }, a.sort = function(s) {
    return arguments.length ? (e = s, n = null, a) : e;
  }, a.startAngle = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : D(+s), a) : r;
  }, a.endAngle = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : D(+s), a) : i;
  }, a.padAngle = function(s) {
    return arguments.length ? (o = typeof s == "function" ? s : D(+s), a) : o;
  }, a;
}
function Gt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Gt.prototype = {
  constructor: Gt,
  scale: function(t) {
    return t === 1 ? this : new Gt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Gt(this.k, this.x + this.k * t, this.y + this.k * n);
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
Gt.prototype;
var Bi = typeof global == "object" && global && global.Object === Object && global, lc = typeof self == "object" && self && self.Object === Object && self, ft = Bi || lc || Function("return this")(), et = ft.Symbol, Gi = Object.prototype, cc = Gi.hasOwnProperty, fc = Gi.toString, Ht = et ? et.toStringTag : void 0;
function hc(t) {
  var n = cc.call(t, Ht), e = t[Ht];
  try {
    t[Ht] = void 0;
    var r = !0;
  } catch {
  }
  var i = fc.call(t);
  return r && (n ? t[Ht] = e : delete t[Ht]), i;
}
var dc = Object.prototype, pc = dc.toString;
function gc(t) {
  return pc.call(t);
}
var _c = "[object Null]", yc = "[object Undefined]", Dr = et ? et.toStringTag : void 0;
function Tt(t) {
  return t == null ? t === void 0 ? yc : _c : Dr && Dr in Object(t) ? hc(t) : gc(t);
}
function _t(t) {
  return t != null && typeof t == "object";
}
var mc = "[object Symbol]";
function Yn(t) {
  return typeof t == "symbol" || _t(t) && Tt(t) == mc;
}
function on(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var V = Array.isArray, Hr = et ? et.prototype : void 0, qr = Hr ? Hr.toString : void 0;
function Xi(t) {
  if (typeof t == "string")
    return t;
  if (V(t))
    return on(t, Xi) + "";
  if (Yn(t))
    return qr ? qr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var vc = /\s/;
function wc(t) {
  for (var n = t.length; n-- && vc.test(t.charAt(n)); )
    ;
  return n;
}
var xc = /^\s+/;
function bc(t) {
  return t && t.slice(0, wc(t) + 1).replace(xc, "");
}
function lt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Br = NaN, Mc = /^[-+]0x[0-9a-f]+$/i, $c = /^0b[01]+$/i, Ac = /^0o[0-7]+$/i, Tc = parseInt;
function Sc(t) {
  if (typeof t == "number")
    return t;
  if (Yn(t))
    return Br;
  if (lt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = lt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = bc(t);
  var e = $c.test(t);
  return e || Ac.test(t) ? Tc(t.slice(2), e ? 2 : 8) : Mc.test(t) ? Br : +t;
}
var Gr = 1 / 0, Pc = 17976931348623157e292;
function de(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Sc(t), t === Gr || t === -Gr) {
    var n = t < 0 ? -1 : 1;
    return n * Pc;
  }
  return t === t ? t : 0;
}
function Vn(t) {
  return t;
}
var Ec = "[object AsyncFunction]", Nc = "[object Function]", kc = "[object GeneratorFunction]", zc = "[object Proxy]";
function Ui(t) {
  if (!lt(t))
    return !1;
  var n = Tt(t);
  return n == Nc || n == kc || n == Ec || n == zc;
}
var pe = ft["__core-js_shared__"], Xr = (function() {
  var t = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Oc(t) {
  return !!Xr && Xr in t;
}
var Ic = Function.prototype, Rc = Ic.toString;
function St(t) {
  if (t != null) {
    try {
      return Rc.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Cc = /[\\^$.*+?()[\]{}|]/g, Fc = /^\[object .+?Constructor\]$/, Lc = Function.prototype, Dc = Object.prototype, Hc = Lc.toString, qc = Dc.hasOwnProperty, Bc = RegExp(
  "^" + Hc.call(qc).replace(Cc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gc(t) {
  if (!lt(t) || Oc(t))
    return !1;
  var n = Ui(t) ? Bc : Fc;
  return n.test(St(t));
}
function Xc(t, n) {
  return t == null ? void 0 : t[n];
}
function Pt(t, n) {
  var e = Xc(t, n);
  return Gc(e) ? e : void 0;
}
var ke = Pt(ft, "WeakMap");
function Uc(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
var Yc = 800, Vc = 16, Kc = Date.now;
function Wc(t) {
  var n = 0, e = 0;
  return function() {
    var r = Kc(), i = Vc - (r - e);
    if (e = r, i > 0) {
      if (++n >= Yc)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Zc(t) {
  return function() {
    return t;
  };
}
var Hn = (function() {
  try {
    var t = Pt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), Jc = Hn ? function(t, n) {
  return Hn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Zc(n),
    writable: !0
  });
} : Vn, Qc = Wc(Jc);
function jc(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
function tf(t, n, e, r) {
  for (var i = t.length, o = e + -1; ++o < i; )
    if (n(t[o], o, t))
      return o;
  return -1;
}
function nf(t) {
  return t !== t;
}
function ef(t, n, e) {
  for (var r = e - 1, i = t.length; ++r < i; )
    if (t[r] === n)
      return r;
  return -1;
}
function rf(t, n, e) {
  return n === n ? ef(t, n, e) : tf(t, nf, e);
}
function of(t, n) {
  var e = t == null ? 0 : t.length;
  return !!e && rf(t, n, 0) > -1;
}
var af = 9007199254740991, sf = /^(?:0|[1-9]\d*)$/;
function Kn(t, n) {
  var e = typeof t;
  return n = n ?? af, !!n && (e == "number" || e != "symbol" && sf.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function uf(t, n, e) {
  n == "__proto__" && Hn ? Hn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Wn(t, n) {
  return t === n || t !== t && n !== n;
}
var lf = Object.prototype, cf = lf.hasOwnProperty;
function ff(t, n, e) {
  var r = t[n];
  (!(cf.call(t, n) && Wn(r, e)) || e === void 0 && !(n in t)) && uf(t, n, e);
}
var Ur = Math.max;
function hf(t, n, e) {
  return n = Ur(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = Ur(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), Uc(t, this, s);
  };
}
function df(t, n) {
  return Qc(hf(t, n, Vn), t + "");
}
var pf = 9007199254740991;
function Je(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pf;
}
function Lt(t) {
  return t != null && Je(t.length) && !Ui(t);
}
function gf(t, n, e) {
  if (!lt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Lt(e) && Kn(n, e.length) : r == "string" && n in e) ? Wn(e[n], t) : !1;
}
var _f = Object.prototype;
function Yi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || _f;
  return t === e;
}
function yf(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var mf = "[object Arguments]";
function Yr(t) {
  return _t(t) && Tt(t) == mf;
}
var Vi = Object.prototype, vf = Vi.hasOwnProperty, wf = Vi.propertyIsEnumerable, Qe = Yr(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Yr : function(t) {
  return _t(t) && vf.call(t, "callee") && !wf.call(t, "callee");
};
function xf() {
  return !1;
}
var Ki = typeof exports == "object" && exports && !exports.nodeType && exports, Vr = Ki && typeof module == "object" && module && !module.nodeType && module, bf = Vr && Vr.exports === Ki, Kr = bf ? ft.Buffer : void 0, Mf = Kr ? Kr.isBuffer : void 0, ze = Mf || xf, $f = "[object Arguments]", Af = "[object Array]", Tf = "[object Boolean]", Sf = "[object Date]", Pf = "[object Error]", Ef = "[object Function]", Nf = "[object Map]", kf = "[object Number]", zf = "[object Object]", Of = "[object RegExp]", If = "[object Set]", Rf = "[object String]", Cf = "[object WeakMap]", Ff = "[object ArrayBuffer]", Lf = "[object DataView]", Df = "[object Float32Array]", Hf = "[object Float64Array]", qf = "[object Int8Array]", Bf = "[object Int16Array]", Gf = "[object Int32Array]", Xf = "[object Uint8Array]", Uf = "[object Uint8ClampedArray]", Yf = "[object Uint16Array]", Vf = "[object Uint32Array]", N = {};
N[Df] = N[Hf] = N[qf] = N[Bf] = N[Gf] = N[Xf] = N[Uf] = N[Yf] = N[Vf] = !0;
N[$f] = N[Af] = N[Ff] = N[Tf] = N[Lf] = N[Sf] = N[Pf] = N[Ef] = N[Nf] = N[kf] = N[zf] = N[Of] = N[If] = N[Rf] = N[Cf] = !1;
function Kf(t) {
  return _t(t) && Je(t.length) && !!N[Tt(t)];
}
function Wf(t) {
  return function(n) {
    return t(n);
  };
}
var Wi = typeof exports == "object" && exports && !exports.nodeType && exports, Ut = Wi && typeof module == "object" && module && !module.nodeType && module, Zf = Ut && Ut.exports === Wi, ge = Zf && Bi.process, Wr = (function() {
  try {
    var t = Ut && Ut.require && Ut.require("util").types;
    return t || ge && ge.binding && ge.binding("util");
  } catch {
  }
})(), Zr = Wr && Wr.isTypedArray, Zi = Zr ? Wf(Zr) : Kf, Jf = Object.prototype, Qf = Jf.hasOwnProperty;
function Ji(t, n) {
  var e = V(t), r = !e && Qe(t), i = !e && !r && ze(t), o = !e && !r && !i && Zi(t), a = e || r || i || o, s = a ? yf(t.length, String) : [], l = s.length;
  for (var u in t)
    (n || Qf.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Kn(u, l))) && s.push(u);
  return s;
}
function Qi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var jf = Qi(Object.keys, Object), th = Object.prototype, nh = th.hasOwnProperty;
function eh(t) {
  if (!Yi(t))
    return jf(t);
  var n = [];
  for (var e in Object(t))
    nh.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function an(t) {
  return Lt(t) ? Ji(t) : eh(t);
}
function rh(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var ih = Object.prototype, oh = ih.hasOwnProperty;
function ah(t) {
  if (!lt(t))
    return rh(t);
  var n = Yi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !oh.call(t, r)) || e.push(r);
  return e;
}
function sh(t) {
  return Lt(t) ? Ji(t, !0) : ah(t);
}
var uh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lh = /^\w*$/;
function je(t, n) {
  if (V(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Yn(t) ? !0 : lh.test(t) || !uh.test(t) || n != null && t in Object(n);
}
var jt = Pt(Object, "create");
function ch() {
  this.__data__ = jt ? jt(null) : {}, this.size = 0;
}
function fh(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var hh = "__lodash_hash_undefined__", dh = Object.prototype, ph = dh.hasOwnProperty;
function gh(t) {
  var n = this.__data__;
  if (jt) {
    var e = n[t];
    return e === hh ? void 0 : e;
  }
  return ph.call(n, t) ? n[t] : void 0;
}
var _h = Object.prototype, yh = _h.hasOwnProperty;
function mh(t) {
  var n = this.__data__;
  return jt ? n[t] !== void 0 : yh.call(n, t);
}
var vh = "__lodash_hash_undefined__";
function wh(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = jt && n === void 0 ? vh : n, this;
}
function At(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
At.prototype.clear = ch;
At.prototype.delete = fh;
At.prototype.get = gh;
At.prototype.has = mh;
At.prototype.set = wh;
function xh() {
  this.__data__ = [], this.size = 0;
}
function Zn(t, n) {
  for (var e = t.length; e--; )
    if (Wn(t[e][0], n))
      return e;
  return -1;
}
var bh = Array.prototype, Mh = bh.splice;
function $h(t) {
  var n = this.__data__, e = Zn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : Mh.call(n, e, 1), --this.size, !0;
}
function Ah(t) {
  var n = this.__data__, e = Zn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Th(t) {
  return Zn(this.__data__, t) > -1;
}
function Sh(t, n) {
  var e = this.__data__, r = Zn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function ht(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ht.prototype.clear = xh;
ht.prototype.delete = $h;
ht.prototype.get = Ah;
ht.prototype.has = Th;
ht.prototype.set = Sh;
var tn = Pt(ft, "Map");
function Ph() {
  this.size = 0, this.__data__ = {
    hash: new At(),
    map: new (tn || ht)(),
    string: new At()
  };
}
function Eh(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Jn(t, n) {
  var e = t.__data__;
  return Eh(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function Nh(t) {
  var n = Jn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function kh(t) {
  return Jn(this, t).get(t);
}
function zh(t) {
  return Jn(this, t).has(t);
}
function Oh(t, n) {
  var e = Jn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function dt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
dt.prototype.clear = Ph;
dt.prototype.delete = Nh;
dt.prototype.get = kh;
dt.prototype.has = zh;
dt.prototype.set = Oh;
var Ih = "Expected a function";
function tr(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Ih);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (tr.Cache || dt)(), e;
}
tr.Cache = dt;
var Rh = 500;
function Ch(t) {
  var n = tr(t, function(r) {
    return e.size === Rh && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Fh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lh = /\\(\\)?/g, Dh = Ch(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Fh, function(e, r, i, o) {
    n.push(i ? o.replace(Lh, "$1") : r || e);
  }), n;
});
function Qn(t) {
  return t == null ? "" : Xi(t);
}
function jn(t, n) {
  return V(t) ? t : je(t, n) ? [t] : Dh(Qn(t));
}
function sn(t) {
  if (typeof t == "string" || Yn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function nr(t, n) {
  n = jn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[sn(n[e++])];
  return e && e == r ? t : void 0;
}
function Hh(t, n, e) {
  var r = t == null ? void 0 : nr(t, n);
  return r === void 0 ? e : r;
}
function er(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Jr = et ? et.isConcatSpreadable : void 0;
function qh(t) {
  return V(t) || Qe(t) || !!(Jr && t && t[Jr]);
}
function Bh(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = qh), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? er(i, s) : i[i.length] = s;
  }
  return i;
}
function Gh(t) {
  var n = t == null ? 0 : t.length;
  return n ? Bh(t) : [];
}
var Xh = Qi(Object.getPrototypeOf, Object);
function Uh(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Yh(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, !n && e >= r ? t : Uh(t, n, e);
}
var Vh = "\\ud800-\\udfff", Kh = "\\u0300-\\u036f", Wh = "\\ufe20-\\ufe2f", Zh = "\\u20d0-\\u20ff", Jh = Kh + Wh + Zh, Qh = "\\ufe0e\\ufe0f", jh = "\\u200d", td = RegExp("[" + jh + Vh + Jh + Qh + "]");
function ji(t) {
  return td.test(t);
}
function nd(t) {
  return t.split("");
}
var to = "\\ud800-\\udfff", ed = "\\u0300-\\u036f", rd = "\\ufe20-\\ufe2f", id = "\\u20d0-\\u20ff", od = ed + rd + id, ad = "\\ufe0e\\ufe0f", sd = "[" + to + "]", Oe = "[" + od + "]", Ie = "\\ud83c[\\udffb-\\udfff]", ud = "(?:" + Oe + "|" + Ie + ")", no = "[^" + to + "]", eo = "(?:\\ud83c[\\udde6-\\uddff]){2}", ro = "[\\ud800-\\udbff][\\udc00-\\udfff]", ld = "\\u200d", io = ud + "?", oo = "[" + ad + "]?", cd = "(?:" + ld + "(?:" + [no, eo, ro].join("|") + ")" + oo + io + ")*", fd = oo + io + cd, hd = "(?:" + [no + Oe + "?", Oe, eo, ro, sd].join("|") + ")", dd = RegExp(Ie + "(?=" + Ie + ")|" + hd + fd, "g");
function pd(t) {
  return t.match(dd) || [];
}
function gd(t) {
  return ji(t) ? pd(t) : nd(t);
}
function _d(t) {
  return function(n) {
    n = Qn(n);
    var e = ji(n) ? gd(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Yh(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var yd = _d("toUpperCase");
function md(t) {
  return yd(Qn(t).toLowerCase());
}
function vd() {
  this.__data__ = new ht(), this.size = 0;
}
function wd(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function xd(t) {
  return this.__data__.get(t);
}
function bd(t) {
  return this.__data__.has(t);
}
var Md = 200;
function $d(t, n) {
  var e = this.__data__;
  if (e instanceof ht) {
    var r = e.__data__;
    if (!tn || r.length < Md - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new dt(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function st(t) {
  var n = this.__data__ = new ht(t);
  this.size = n.size;
}
st.prototype.clear = vd;
st.prototype.delete = wd;
st.prototype.get = xd;
st.prototype.has = bd;
st.prototype.set = $d;
function Ad(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function ao() {
  return [];
}
var Td = Object.prototype, Sd = Td.propertyIsEnumerable, Qr = Object.getOwnPropertySymbols, so = Qr ? function(t) {
  return t == null ? [] : (t = Object(t), Ad(Qr(t), function(n) {
    return Sd.call(t, n);
  }));
} : ao, Pd = Object.getOwnPropertySymbols, Ed = Pd ? function(t) {
  for (var n = []; t; )
    er(n, so(t)), t = Xh(t);
  return n;
} : ao;
function uo(t, n, e) {
  var r = n(t);
  return V(t) ? r : er(r, e(t));
}
function jr(t) {
  return uo(t, an, so);
}
function Nd(t) {
  return uo(t, sh, Ed);
}
var Re = Pt(ft, "DataView"), Ce = Pt(ft, "Promise"), Fe = Pt(ft, "Set"), ti = "[object Map]", kd = "[object Object]", ni = "[object Promise]", ei = "[object Set]", ri = "[object WeakMap]", ii = "[object DataView]", zd = St(Re), Od = St(tn), Id = St(Ce), Rd = St(Fe), Cd = St(ke), at = Tt;
(Re && at(new Re(new ArrayBuffer(1))) != ii || tn && at(new tn()) != ti || Ce && at(Ce.resolve()) != ni || Fe && at(new Fe()) != ei || ke && at(new ke()) != ri) && (at = function(t) {
  var n = Tt(t), e = n == kd ? t.constructor : void 0, r = e ? St(e) : "";
  if (r)
    switch (r) {
      case zd:
        return ii;
      case Od:
        return ti;
      case Id:
        return ni;
      case Rd:
        return ei;
      case Cd:
        return ri;
    }
  return n;
});
var oi = ft.Uint8Array, Fd = "__lodash_hash_undefined__";
function Ld(t) {
  return this.__data__.set(t, Fd), this;
}
function Dd(t) {
  return this.__data__.has(t);
}
function nn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new dt(); ++n < e; )
    this.add(t[n]);
}
nn.prototype.add = nn.prototype.push = Ld;
nn.prototype.has = Dd;
function Hd(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function lo(t, n) {
  return t.has(n);
}
var qd = 1, Bd = 2;
function co(t, n, e, r, i, o) {
  var a = e & qd, s = t.length, l = n.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = o.get(t), c = o.get(n);
  if (u && c)
    return u == n && c == t;
  var f = -1, h = !0, p = e & Bd ? new nn() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var d = t[f], g = n[f];
    if (r)
      var w = a ? r(g, d, f, n, t, o) : r(d, g, f, t, n, o);
    if (w !== void 0) {
      if (w)
        continue;
      h = !1;
      break;
    }
    if (p) {
      if (!Hd(n, function(_, M) {
        if (!lo(p, M) && (d === _ || i(d, _, e, r, o)))
          return p.push(M);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === g || i(d, g, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function fo(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Gd(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Xd = 1, Ud = 2, Yd = "[object Boolean]", Vd = "[object Date]", Kd = "[object Error]", Wd = "[object Map]", Zd = "[object Number]", Jd = "[object RegExp]", Qd = "[object Set]", jd = "[object String]", tp = "[object Symbol]", np = "[object ArrayBuffer]", ep = "[object DataView]", ai = et ? et.prototype : void 0, _e = ai ? ai.valueOf : void 0;
function rp(t, n, e, r, i, o, a) {
  switch (e) {
    case ep:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case np:
      return !(t.byteLength != n.byteLength || !o(new oi(t), new oi(n)));
    case Yd:
    case Vd:
    case Zd:
      return Wn(+t, +n);
    case Kd:
      return t.name == n.name && t.message == n.message;
    case Jd:
    case jd:
      return t == n + "";
    case Wd:
      var s = fo;
    case Qd:
      var l = r & Xd;
      if (s || (s = Gd), t.size != n.size && !l)
        return !1;
      var u = a.get(t);
      if (u)
        return u == n;
      r |= Ud, a.set(t, n);
      var c = co(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case tp:
      if (_e)
        return _e.call(t) == _e.call(n);
  }
  return !1;
}
var ip = 1, op = Object.prototype, ap = op.hasOwnProperty;
function sp(t, n, e, r, i, o) {
  var a = e & ip, s = jr(t), l = s.length, u = jr(n), c = u.length;
  if (l != c && !a)
    return !1;
  for (var f = l; f--; ) {
    var h = s[f];
    if (!(a ? h in n : ap.call(n, h)))
      return !1;
  }
  var p = o.get(t), d = o.get(n);
  if (p && d)
    return p == n && d == t;
  var g = !0;
  o.set(t, n), o.set(n, t);
  for (var w = a; ++f < l; ) {
    h = s[f];
    var _ = t[h], M = n[h];
    if (r)
      var $ = a ? r(M, _, h, n, t, o) : r(_, M, h, t, n, o);
    if (!($ === void 0 ? _ === M || i(_, M, e, r, o) : $)) {
      g = !1;
      break;
    }
    w || (w = h == "constructor");
  }
  if (g && !w) {
    var y = t.constructor, m = n.constructor;
    y != m && "constructor" in t && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof m == "function" && m instanceof m) && (g = !1);
  }
  return o.delete(t), o.delete(n), g;
}
var up = 1, si = "[object Arguments]", ui = "[object Array]", yn = "[object Object]", lp = Object.prototype, li = lp.hasOwnProperty;
function cp(t, n, e, r, i, o) {
  var a = V(t), s = V(n), l = a ? ui : at(t), u = s ? ui : at(n);
  l = l == si ? yn : l, u = u == si ? yn : u;
  var c = l == yn, f = u == yn, h = l == u;
  if (h && ze(t)) {
    if (!ze(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new st()), a || Zi(t) ? co(t, n, e, r, i, o) : rp(t, n, l, e, r, i, o);
  if (!(e & up)) {
    var p = c && li.call(t, "__wrapped__"), d = f && li.call(n, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, w = d ? n.value() : n;
      return o || (o = new st()), i(g, w, e, r, o);
    }
  }
  return h ? (o || (o = new st()), sp(t, n, e, r, i, o)) : !1;
}
function rr(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !_t(t) && !_t(n) ? t !== t && n !== n : cp(t, n, e, r, rr, i);
}
var fp = 1, hp = 2;
function dp(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], l = t[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in t))
        return !1;
    } else {
      var c = new st(), f;
      if (!(f === void 0 ? rr(u, l, fp | hp, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function ho(t) {
  return t === t && !lt(t);
}
function pp(t) {
  for (var n = an(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, ho(i)];
  }
  return n;
}
function po(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function gp(t) {
  var n = pp(t);
  return n.length == 1 && n[0][2] ? po(n[0][0], n[0][1]) : function(e) {
    return e === t || dp(e, t, n);
  };
}
function _p(t, n) {
  return t != null && n in Object(t);
}
function go(t, n, e) {
  n = jn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = sn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Je(i) && Kn(a, i) && (V(t) || Qe(t)));
}
function yp(t, n) {
  return t != null && go(t, n, _p);
}
var mp = 1, vp = 2;
function wp(t, n) {
  return je(t) && ho(n) ? po(sn(t), n) : function(e) {
    var r = Hh(e, t);
    return r === void 0 && r === n ? yp(e, t) : rr(n, r, mp | vp);
  };
}
function xp(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function bp(t) {
  return function(n) {
    return nr(n, t);
  };
}
function Mp(t) {
  return je(t) ? xp(sn(t)) : bp(t);
}
function _o(t) {
  return typeof t == "function" ? t : t == null ? Vn : typeof t == "object" ? V(t) ? wp(t[0], t[1]) : gp(t) : Mp(t);
}
function $p(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var l = a[++i];
      if (e(o[l], l, o) === !1)
        break;
    }
    return n;
  };
}
var Ap = $p();
function Tp(t, n) {
  return t && Ap(t, n, an);
}
function Sp(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Lt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var yo = Sp(Tp);
function Pp(t) {
  return _t(t) && Lt(t);
}
var Ep = 200;
function Np(t, n, e, r) {
  var i = -1, o = of, a = !0, s = t.length, l = [], u = n.length;
  if (!s)
    return l;
  n.length >= Ep && (o = lo, a = !1, n = new nn(n));
  t:
    for (; ++i < s; ) {
      var c = t[i], f = c;
      if (c = c !== 0 ? c : 0, a && f === f) {
        for (var h = u; h--; )
          if (n[h] === f)
            continue t;
        l.push(c);
      } else o(n, f, r) || l.push(c);
    }
  return l;
}
function kp(t) {
  return typeof t == "function" ? t : Vn;
}
function An(t, n) {
  var e = V(t) ? jc : yo;
  return e(t, kp(n));
}
function zp(t, n) {
  return on(n, function(e) {
    return [e, t[e]];
  });
}
function Op(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Ip = "[object Map]", Rp = "[object Set]";
function Cp(t) {
  return function(n) {
    var e = at(n);
    return e == Ip ? fo(n) : e == Rp ? Op(n) : zp(n, t(n));
  };
}
var mo = Cp(an);
function Fp(t, n) {
  var e = -1, r = Lt(t) ? Array(t.length) : [];
  return yo(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function ct(t, n) {
  var e = V(t) ? on : Fp;
  return e(t, _o(n));
}
var Lp = Object.prototype, Dp = Lp.hasOwnProperty;
function Hp(t, n) {
  return t != null && Dp.call(t, n);
}
function vo(t, n) {
  return t != null && go(t, n, Hp);
}
function qp(t, n) {
  return on(n, function(e) {
    return t[e];
  });
}
function Bp(t) {
  return t == null ? [] : qp(t, an(t));
}
var Gp = "[object Boolean]";
function Xp(t) {
  return t === !0 || t === !1 || _t(t) && Tt(t) == Gp;
}
function Up(t, n, e, r) {
  if (!lt(t))
    return t;
  n = jn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var l = sn(n[i]), u = e;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (i != a) {
      var c = s[l];
      u = void 0, u === void 0 && (u = lt(c) ? c : Kn(n[i + 1]) ? [] : {});
    }
    ff(s, l, u), s = s[l];
  }
  return t;
}
function Yp(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = nr(t, a);
    e(s, a) && Up(o, jn(a, t), s);
  }
  return o;
}
function ir(t, n) {
  if (t == null)
    return {};
  var e = on(Nd(t), function(r) {
    return [r];
  });
  return n = _o(n), Yp(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Vp = Math.floor, Kp = Math.random;
function Wp(t, n) {
  return t + Vp(Kp() * (n - t + 1));
}
var Zp = Math.ceil, Jp = Math.max;
function Qp(t, n, e, r) {
  for (var i = -1, o = Jp(Zp((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function jp(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && gf(n, e, r) && (e = r = void 0), n = de(n), e === void 0 ? (e = n, n = 0) : e = de(e), r = r === void 0 ? n < e ? 1 : -1 : de(r), Qp(n, e, r);
  };
}
var It = jp();
function t0() {
  var t = arguments, n = Qn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function wo(t) {
  var n = t.length;
  return n ? t[Wp(0, n - 1)] : void 0;
}
function n0(t) {
  return wo(Bp(t));
}
function e0(t) {
  var n = V(t) ? wo : n0;
  return n(t);
}
var r0 = df(function(t, n) {
  return Pp(t) ? Np(t, n) : [];
});
const ci = (t, n, e = 12, r = 12) => {
  const i = J().domain([0, e]).range([0, t]), o = J().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return It((e + 1) * (r + 1)).map(function(l) {
        return { m: l % (e + 1), n: Math.floor(l / (e + 1)), x: i(l % (e + 1)), y: o(Math.floor(l / (e + 1))) };
      });
    },
    position: function(l, u) {
      typeof l == "number" && (l = [l]), typeof u == "number" && (u = [u]);
      const c = Gh(ct(u, function(f) {
        return ct(
          l,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, i0 = "_widget_18g36_1", o0 = "_label_18g36_19", a0 = "_lit_18g36_24", s0 = "_button_18g36_29", u0 = "_symbol_18g36_29", l0 = "_radio_18g36_29", c0 = "_radiobutton_18g36_29", f0 = "_selected_18g36_35", h0 = "_toggle_18g36_35", d0 = "_slider_18g36_44", p0 = "_track_18g36_44", g0 = "_track_overlay_18g36_48", _0 = "_handle_18g36_55", b = {
  widget: i0,
  label: o0,
  lit: a0,
  button: s0,
  symbol: u0,
  radio: l0,
  radiobutton: c0,
  selected: f0,
  toggle: h0,
  slider: d0,
  track: p0,
  track_overlay: g0,
  handle: _0
}, te = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, or = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, y0 = (t = 1) => {
  const n = j();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, m0 = (t = 1) => {
  const n = j(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, v0 = (t = 1) => {
  const n = j();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, w0 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = j();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -e), r.lineTo(t * (e * n), t * -e), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -e), r.lineTo(-t * (e * n), t * -e), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, x0 = (t = 1) => {
  const n = j(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, l = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], u = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, b0 = (t = 1) => {
  const n = j(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, M0 = (t = 1) => {
  const n = j(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var l = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], u = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(l[0] + u[0], l[1] + u[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, $0 = (t = 1) => {
  var n = j(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -e, t * e), n.lineTo(t * -e, t * -e), n.lineTo(t * e, t * -e), n.closePath(), n.toString();
}, A0 = (t = 1) => {
  const n = j(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Le = (t) => {
  switch (t) {
    case "play":
      return y0;
    case "forward":
      return m0;
    case "back":
      return v0;
    case "pause":
      return w0;
    case "reload":
      return x0;
    case "capture":
      return b0;
    case "rewind":
      return M0;
    case "stop":
      return $0;
    case "push":
      return A0;
  }
}, ar = () => {
  const t = "button";
  var n = te(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", l = null, u = function(d) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? e : (e = d, this);
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
      return typeof d > "u" ? l : (l = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return u = d, this;
      u(d);
    },
    actions: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % c.length, u(), R(this.parentNode).select("." + b.symbol).attr("d", Le(c[f])(r * e));
    },
    press: function(d) {
      f = (f + 1) % c.length, u(), d.select("#button_" + n).select("." + b.symbol).attr("d", Le(c[f])(r * e));
    }
  };
}, T0 = () => {
  const t = "slider", n = Un(".3f");
  var e = te(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, l = "top-left", u = null, c = function(_) {
  }, f = function(_) {
  }, h = [0, 1], p = 0, d = null, g = J().domain(h).range([0, r]).clamp(!0);
  const w = function(_, M, $ = h) {
    const y = _.select("#slider_" + e);
    g.domain($), p = M, y.selectAll("." + b.handle).transition().attr("cx", g(M)), a && y.select("." + b.label).text(d + " = " + n(p)), c(), f();
  };
  return {
    type: t,
    scale: g,
    id: function(_) {
      return typeof _ > "u" ? e : (e = _, this);
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
      return typeof _ > "u" ? l : (l = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
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
      return typeof _ > "u" ? p : (p = _, this);
    },
    reset: w,
    click: w
  };
}, S0 = () => {
  const t = "toggle";
  var n = te(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, l = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
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
      return typeof f > "u" ? l : (l = f, this);
    },
    click: function() {
      l = !l;
      const f = R(this.parentNode);
      f.select("." + b.handle).transition().attr("cx", l ? 2 * e : 0), f.classed(b.selected, l), s();
    },
    reset: function(f, h) {
      l = h;
      const p = f.select("#toggle_" + n);
      p.selectAll("." + b.handle).transition().attr("cx", l ? 2 * e : 0), p.classed(b.selected, l), s();
    }
  };
}, P0 = () => {
  const t = "radio";
  var n = te(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, l = "right", u = null, c = function(g) {
  }, f = [], h = 0;
  return {
    type: t,
    id: function(g) {
      return typeof g > "u" ? n : (n = g, this);
    },
    size: function(g) {
      return typeof g > "u" ? e : (e = g, this);
    },
    buttonsize: function(g) {
      return typeof g > "u" ? r : (r = g, this);
    },
    buttonpadding: function(g) {
      return typeof g > "u" ? i : (i = g, this);
    },
    orientation: function(g) {
      return typeof g > "u" ? a : (a = g, this);
    },
    shape: function(g) {
      return typeof g > "u" ? o : (o = g, this);
    },
    position: function(g) {
      return typeof g > "u" ? s : (s = g, this);
    },
    x: function(g) {
      return typeof g > "u" ? s.x : (s.x = g, this);
    },
    y: function(g) {
      return typeof g > "u" ? s.y : (s.y = g, this);
    },
    labelposition: function(g) {
      return typeof g > "u" ? l : (l = g, this);
    },
    fontsize: function(g) {
      return typeof g > "u" ? u : (u = g, this);
    },
    update: function(g) {
      if (typeof g == "function")
        return c = g, this;
      c(g);
    },
    choices: function(g) {
      return typeof g > "u" ? f : (f = g, this);
    },
    value: function(g) {
      return typeof g > "u" ? h : (h = g, this);
    },
    click: function(g, w) {
      h = w, R(this.parentNode).selectAll("." + b.symbol).classed(b.selected, (_) => _ == h), c();
    },
    reset: function(g, w) {
      h = w, g.select("#radio_" + n).selectAll("." + b.symbol).classed(b.selected, (_) => _ == h), c();
    }
  };
}, E0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = R(o).attr("class", b.widget + " " + b.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", b.background).on("click", t.click).on("mouseover", function() {
    R(this).classed(b.lit, !0), R(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    R(this).classed(b.lit, !1), R(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), a.append("path").attr("d", Le(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", b.symbol), r) {
    const l = or(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + l.x + "," + l.y + ")");
  }
  return o;
}, xo = (t, n) => {
  const e = j();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, N0 = (t, n) => {
  const e = Un(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const l = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = R(l).attr("class", b.widget + " " + b.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const u = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", xo(t.size(), t.girth())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * u).attr("height", 2 * u).attr("transform", "translate(" + -u + "," + -u + ")").attr("class", b.track_overlay).on("click", function(d) {
    const g = we(d, this)[0];
    t.value(a.invert(g)), t.update(), t.update_end(), s.selectAll("." + b.handle).attr("cx", a(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Cs().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + b.handle).attr("cx", a(t.value())), t.show() && s.select("." + b.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, p = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? cn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -cn([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? cn([t.girth() / 2, t.knob()]) + 7 : -cn([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", p = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", b.label).style("text-anchor", h).style("alignment-baseline", p).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), l;
}, k0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = R(a).attr("class", b.widget + " " + b.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(b.selected, t.value() == 1);
  if (s.append("path").attr("d", xo(2 * t.size(), 2 * t.size())).attr("class", b.track), s.append("circle").attr("class", b.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", b.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const l = or(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", b.label).style("text-anchor", l.anchor).style("font-size", t.fontsize()).style("alignment-baseline", l.valign).attr("transform", "translate(" + (l.x + r) + "," + l.y + ")");
  }
  return a;
}, z0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Yo(a), l = J().domain([0, a - 1]).range([0, t.size()]), u = J().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = R(c).attr("class", b.widget + " " + b.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + b.radiobutton).data(s).enter().append("g").attr("class", b.radiobutton).attr("id", (w) => "b" + w).attr("transform", (w) => t.orientation() == "vertical" ? "translate(0," + u(w) + ")" : "translate(" + l(w) + ",0)");
  var p, d;
  t.shape() == "rect" ? (p = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (p = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), p.attr("class", b.background).on("mouseover", function() {
    R(this).classed(b.lit, !0), R(this.parentNode).select("." + b.symbol).classed(b.lit, !0);
  }).on("mouseout", function() {
    R(this).classed(b.lit, !1), R(this.parentNode).select("." + b.symbol).classed(b.lit, !1);
  }), d.attr("class", b.symbol), d.filter((w) => w == t.value()).classed(b.selected, !0), h.on("click", t.click);
  const g = or(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", b.label).text(function(w, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", g.valign).attr("transform", "translate(" + g.x + "," + g.y + ")").style("font-size", t.fontsize()).attr("text-anchor", g.anchor), c;
}, mn = (t, n) => {
  switch (t.type) {
    case "button":
      return E0(t);
    case "slider":
      return N0(t);
    case "radio":
      return z0(t);
    case "toggle":
      return k0(t);
  }
}, O0 = (t, n) => {
  const e = ci(
    n.controls_size.width,
    300,
    // Height for bottom section
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = ci(
    200,
    // Width of button area
    200,
    // Height of button area
    4,
    // nx
    4
    // ny
  ), i = R("#" + t).classed(n.id + " " + n.container_class, !0), o = i.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("viewBox", `0 0 ${n.display_size.width} ${n.display_size.height}`).style("width", "100%"), a = i.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).style("display", "flex").style("flex-direction", "column"), s = a.append("div").style("display", "flex").style("flex-direction", "row").style("width", "100%").style("height", "200px").style("margin-bottom", "10px"), l = s.append("svg").attr("id", "plots").attr("viewBox", "0 0 240 200").style("width", "50%").style("height", "100%"), u = s.append("svg").attr("id", "buttons").attr("viewBox", "0 0 240 200").style("width", "50%").style("height", "100%"), c = a.append("svg").attr("viewBox", `0 0 ${n.controls_size.width} 300`).style("width", "100%");
  return n.controls_border && a.style("border", n.controls_border), n.display_border && o.style("border", n.display_border), n.debug && (c.selectAll(".debug-dot").data(e.points).enter().append("circle").attr("r", 2).attr("transform", (f) => `translate(${f.x},${f.y})`).style("fill", "black"), u.selectAll(".debug-dot").data(r.points).enter().append("circle").attr("r", 2).attr("transform", (f) => `translate(${f.x},${f.y})`).style("fill", "red")), { display: o, plots: l, controls: c, buttons: u, grid_controls: e, grid_buttons: r };
}, E = {
  widgets: {
    // --- BUTTONS (Top Left Container) ---
    // Coordinates relative to a small 4x4 grid
    playbutton_size: 80,
    reset_back_size: 40,
    playbutton_anchor: { x: 1.8, y: 1.1 },
    backbutton_anchor: { x: 2.6, y: 2.7 },
    resetbutton_anchor: { x: 1, y: 2.7 },
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
}, S = {
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
  speed: {
    range: [10, 100],
    default: 35
  },
  user_attention: 0.7,
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
  noise_switching: !0
}, sr = (t) => ct(mo(t), (n) => {
  n[1].id = n[0], n[1].label = t0(md(n[0]), /_/g, " ");
}), ur = (t) => ct(mo(t), (n) => n[1]), lr = (t, n) => An(t, (e, r) => e.widget = n[r]), I0 = (t) => ir(t, (n) => vo(n, "range")), R0 = (t) => ir(t, (n) => Xp(n.default)), C0 = (t) => ir(t, (n) => vo(n, "choices"));
J().domain([0, 360]).range([0, 2 * Math.PI]);
J().range([0, 360]).domain([0, 2 * Math.PI]);
function Tn() {
  let t = 0, n = 0;
  for (; t === 0; ) t = Math.random();
  for (; n === 0; ) n = Math.random();
  let e = Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * n);
  return e = e / 10 + 0.5, e > 1 || e < 0 ? Tn() : e;
}
function F0(t) {
  const n = 1 - Math.random();
  return -Math.log(n) / t;
}
const bo = (t, n) => {
  let e;
  do
    e = F0(t);
  while (e > n);
  return e;
};
function ye(t, n) {
  let e = 1 - Math.random(), r = Math.random();
  return Math.sqrt(-2 * Math.log(e)) * Math.cos(2 * Math.PI * r) * n + t;
}
const cr = I0(S), fr = R0(S), hr = C0(S);
sr(cr);
sr(fr);
sr(hr);
const Mo = ur(cr), $o = ur(fr), Ao = ur(hr), Sn = ct(Mo, (t) => T0().id(t.id).label(t.label).range(t.range).value(t.default).size(E.widgets.slider_size)), xt = ct($o, (t) => S0().id(t.id).label(t.label).value(t.default).labelposition(E.widgets.toggle_label_pos)), Pn = ct(Ao, (t) => P0().choices(t.choices).id(t.id).value(t.default).orientation(E.widgets.radio_orientation).labelposition(E.widgets.radio_label_position));
lr(Mo, Sn);
lr($o, xt);
lr(Ao, Pn);
const gt = ar().actions(["play", "pause"]), ne = ar().actions(["back"]), ee = ar().actions(["rewind"]), L0 = [gt, ne, ee], D0 = (t, n, e, r) => {
  gt.position(e.position(E.widgets.playbutton_anchor.x, E.widgets.playbutton_anchor.y)).size(E.widgets.playbutton_size), ee.position(e.position(E.widgets.backbutton_anchor.x, E.widgets.backbutton_anchor.y)).size(E.widgets.reset_back_size), ne.position(e.position(E.widgets.resetbutton_anchor.x, E.widgets.resetbutton_anchor.y)).size(E.widgets.reset_back_size), t.selectAll(null).data(L0).enter().append(mn);
  const i = r.position(
    E.widgets.slider_anchor.x,
    It(Sn.length).map((u) => E.widgets.slider_anchor.y + E.widgets.slider_gap * u)
  );
  Sn.forEach((u, c) => u.position(i[c]));
  const o = It(xt.length).map((u) => r.position(
    E.widgets.toggle_anchor.x,
    E.widgets.toggle_anchor.y + u * E.widgets.toggle_vertical_gap
  ));
  xt.forEach((u, c) => u.position(o[c]));
  const a = It(Pn.length).map(
    (u) => r.position(
      E.widgets.radio_anchor.x,
      E.widgets.radio_anchor.y + u * E.widgets.radio_item_gap
    )
  );
  Pn.forEach((u, c) => {
    u.position(a[c]).size(E.widgets.radio_size).shape(E.widgets.radio_shape);
  }), n.selectAll(null).data(Sn).enter().append(mn), n.selectAll(null).data(xt).enter().append(mn), n.selectAll(null).data(Pn).enter().append(mn);
  const s = r.position(0.35, 5.9), l = r.position(0.35, 7.9);
  n.append("text").attr("x", s.x).attr("y", s.y).attr("class", "static-label").text("Users:"), n.append("text").attr("x", l.x).attr("y", l.y).attr("class", "static-label").text("Topics:");
}, H0 = (t) => {
  An(cr, (n) => n.widget.reset(t, n.default)), An(fr, (n) => n.widget.reset(t, n.default)), An(hr, (n) => n.widget.reset(t, n.default)), S.number_of_agents.widget.update();
}, U = S.L, To = 1.5, So = 180, q0 = 60, B0 = 0, G0 = Kl;
var bt = [], I = [];
const Po = (t, n) => {
  n.forEach((e) => {
    e._incoming_links_count = 0;
  }), t.forEach((e) => {
    e.focussed_topic && e.focussed_topic._incoming_links_count++;
  }), n.forEach((e) => {
    e.network_news_val = e._incoming_links_count / t.length, e.age_absolute++;
  });
}, X0 = () => {
  S.timer = {}, S.tick = 0;
  const t = S.number_of_topics.choices[S.number_of_topics.widget.value()], n = 1 / (2 * t), r = U * (1 - 2 * n) / (t - 1);
  I = ct(It(t), (s) => {
    let l = Math.random(), u = U * n + s * r, c = bo(To, S.max_inherent_news_val), f = Math.random() * 300 + 2500;
    return {
      index: s,
      generation: 0,
      // Track generation
      id: `t_${s}_g_0`,
      // Unique ID for D3 binding
      history: [],
      // For the comet trails
      x: U * l,
      y: u,
      frame: l,
      initial_news_val: c,
      relevance_multiplier: f,
      network_news_val: 0,
      // this is a dynamic parameter
      get size() {
        return 3.5 + 1 / (I.length + 1) * this.network_news_val ** 2 * 140;
      },
      color: G0[s],
      // Assign color from list
      age_absolute: 0,
      // in seconds
      get max_relevance() {
        return Math.max(So, this.network_news_val * this.relevance_multiplier);
      },
      get age_relative() {
        return this.age_absolute / this.max_relevance;
      }
    };
  });
  const i = I.reduce((s, l) => s + (l.max_relevance || 0), 0);
  I.forEach((s) => {
    i > 0 ? s.relevance_proportion = (s.max_relevance || 0) / i : s.relevance_proportion = 1 / I.length;
  });
  const o = S.number_of_agents.choices[S.number_of_agents.widget.value()], a = S.society_is_polarized.widget.value();
  bt = ct(It(o), (s) => {
    let l;
    return a ? l = Math.random() > 0.5 ? ye(0.15, 0.1) : ye(0.85, 0.1) : l = ye(0.5, 0.2), l = Math.max(0, Math.min(1, l)), {
      index: s,
      culture: l,
      x: U * l,
      // x pos depends on culture for sorted viz
      y: U * Math.random(),
      focussed_topic: null,
      time_on_topic: 0
    };
  }), Po(bt, I);
}, U0 = (t) => {
  let n = Math.random();
  t.frame = n, t.x = U * n, t.frame = n, t.x = U * n, t.initial_news_val = bo(To, S.max_inherent_news_val), t.relevance_multiplier = Math.random() * 300 + 2500, t.network_news_val = 0, t._incoming_links_count = 0, t.age_absolute = 0, t.generation += 1, t.id = `t_${t.index}_g_${t.generation}`, t.history = [];
}, vn = (t) => {
  const n = t.focussed_topic ? r0(I, t.focussed_topic) : I;
  t.focussed_topic = e0(n), t.time_on_topic = 0;
}, Y0 = () => {
  S.tick++, Po(bt, I);
  const t = I.reduce((r, i) => r + (i.max_relevance || 0), 0);
  I.forEach((r) => {
    t > 0 ? r.relevance_proportion = (r.max_relevance || 0) / t : r.relevance_proportion = 1 / I.length;
  });
  let n = [];
  for (const r of I)
    if (r.age_absolute > So && r.age_relative > 0.99) {
      U0(r), n.push(r.index);
      break;
    }
  n.length > 0 && bt.forEach((r) => {
    r.focussed_topic && n.includes(r.focussed_topic.index) && vn(r);
  });
  const e = 0.1 * (I.length / 8);
  bt.forEach((r) => {
    const i = r.focussed_topic;
    if (!i) {
      vn(r);
      return;
    }
    const o = S.importance_of_ideology.widget.value(), a = o > 1 ? o ** o : o, l = (0.3 - Math.abs(r.culture - i.frame)) * a, u = i.network_news_val * I.length * S.weight_network_nv, c = i.initial_news_val * S.weight_inherent_nv, f = i.age_relative ** 2 * S.weight_age_punishment, h = l + u + c - f, p = 0.2 * a + // factor in slightly
    S.weight_network_nv + S.weight_inherent_nv, d = (1 - S.user_attention) * p;
    if (r.index === 0 && S.tick % 60 === 0 && (console.table({
      Factor: ["Alignment", "Network News (Popularity)", "Inherent Value", "Age Punishment", "TOTAL ATTACHMENT"],
      Value: [
        l.toFixed(3),
        u.toFixed(3),
        c.toFixed(3),
        `-${f.toFixed(3)}`,
        h.toFixed(3)
      ]
    }), console.log(`Switch Threshold: ${d.toFixed(3)}`), console.log(`weight_ideology: ${a.toFixed(3)}`)), r.time_on_topic > q0) {
      if (h < d) {
        vn(r);
        return;
      }
      if (S.noise_switching && Tn() < B0) {
        vn(r);
        return;
      }
    }
    if (r.time_on_topic++, r.focussed_topic) {
      const g = I.length, w = U / g;
      let M = r.focussed_topic.y - r.y;
      M = M - U * Math.round(M / U);
      const $ = Tn() * w;
      Tn() < 0.5 ? M -= $ : M += $, r.y += M * e, r.y < 0 && (r.y += U), r.y >= U && (r.y -= U);
    }
  });
}, V0 = "_node_19yup_1", K0 = {
  node: V0
}, Eo = S.L, kt = J().domain([0, Eo]), Yt = J().domain([0, Eo]), W0 = 20, Z0 = 80, No = J().domain([0, S.max_inherent_news_val]).range([W0, Z0]), J0 = "M0-.415c-.276 0-.5.186-.5.415 0 .118.06.229.166.308l-.08.161c-.004.008-.002.019.005.025a.021.021 0 00.014.005c.004 0 .008-.001.012-.004l.176-.118c.066.025.136.038.209.038.276 0 .5-.186.5-.415S.276-.415 0-.415", Q0 = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  kt.range([0, e]), Yt.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  i.selectAll("g.topic-group").data(I, (a) => a.index).enter().append("g").attr("class", "topic-group").attr("transform", (a) => `translate(${kt(a.x)},${Yt(a.y)}) scale(${No(a.initial_news_val)})`).append("path").attr("class", "topic-shape").attr("d", J0).style("fill", (a) => a.color).style("stroke", "black").style("vector-effect", "non-scaling-stroke").style("stroke-width", "1px").style("fill-opacity", 1).style("stroke-opacity", 1), i.selectAll(null).data(bt).enter().append("circle").attr("class", `${K0.node} agent`).attr("cx", (a) => kt(a.x)).attr("cy", (a) => Yt(a.y)).attr("r", kt(S.agentsize / 2)).style("fill", (a) => a.focussed_topic ? a.focussed_topic.color : "#d2cdcd09").style("stroke", "black").style("stroke-width", 0.5).style("stroke-opacity", 1);
}, ko = (t, n) => {
  t.selectAll(".agent").data(bt, (r) => r.index).attr("cx", (r) => kt(r.x)).attr("cy", (r) => Yt(r.y)).style("fill", (r) => r.focussed_topic ? r.focussed_topic.color : "#d2cdcd09").style("fill-opacity", (r) => r.focussed_topic ? Math.max(0, 1 - r.focussed_topic.age_relative) : 1), t.selectAll("g.topic-group").data(I, (r) => r.index).attr("transform", (r) => `translate(${kt(r.x)},${Yt(r.y)}) scale(${No(r.initial_news_val)})`).select(".topic-shape").style("fill", (r) => r.color).style("fill-opacity", (r) => Math.max(0, 1 - r.age_relative ** 2)).style("stroke-opacity", (r) => Math.max(0, 1 - r.age_relative ** 2));
}, De = 220, He = 180, j0 = Math.min(De, He) / 2 - 20;
let En, zo;
const tg = (t, n) => {
  t.selectAll("*").remove(), En = uc().value((e) => Math.max(1e-4, e.network_news_val)).sort(null), zo = ic().innerRadius(0).outerRadius(j0), t.append("g").attr("class", "pie-chart").attr("transform", `translate(${De / 2}, ${He / 2 - 10})`), t.append("text").attr("class", "gini-label").attr("x", De / 2).attr("y", He - 5).attr("text-anchor", "middle").style("font-size", "14px").style("font-family", "sans-serif").style("fill", "#333").text("Attention Inequality = 0.00");
}, Oo = (t, n) => {
  if (!n) return;
  const e = n.map((u) => u.network_news_val).sort((u, c) => u - c), r = e.length;
  let i = 0;
  if (r > 0) {
    const u = gr(e);
    if (u > 0) {
      let c = 0;
      for (let p = 0; p < r; p++)
        c += (p + 1) * e[p];
      const f = 2 * c / (r * u) - (r + 1) / r, h = (r - 1) / r;
      i = h > 0 ? f / h : 0;
    }
  }
  i = Math.max(0, Math.min(1, i)), t.select(".gini-label").text(`Attention Inequality = ${i.toFixed(2)}`), gr(n, (u) => u.network_news_val) === 0 ? En.value((u) => 1) : En.value((u) => u.network_news_val);
  const a = En(n), s = t.select(".pie-chart").selectAll("path.slice").data(a, (u) => u.data.index);
  s.exit().remove();
  const l = s.enter().append("path").attr("class", "slice").style("stroke", "white").style("stroke-width", "1.5px");
  s.merge(l).attr("d", zo).style("fill", (u) => u.data.color);
};
let fi = 0;
function Io(t, n, e) {
  const r = performance.now(), i = 1e3 / S.speed.widget.value(), o = r - fi;
  o >= i && (fi = r - o % i, Y0(), ko(t), Oo(n, I));
}
function Xt(t, n, e) {
  X0(), Q0(t, e), tg(n), ko(t), Oo(n, I), d3.timer(() => Io(t, n));
}
var hi = {};
const ng = (t, n, e) => {
  gt.value() == 1 ? hi = pu(
    () => Io(t, n),
    // Pass plots
    E.simulation.delay
  ) : hi.stop();
}, eg = (t, n, e, r) => {
  ee.update(() => H0(e)), gt.update(() => ng(t, n)), ne.update(() => Xt(t, n, r)), S.number_of_agents.widget.update(() => Xt(t, n, r)), S.number_of_topics.widget.update(() => Xt(t, n, r)), xt && xt.length > 0 && xt.forEach((i) => {
    i.id() === "society_is_polarized" && i.update(() => Xt(t, n, r));
  });
}, rg = {
  name: "@explorables/explorable_template",
  title: "Social Issue Emergence",
  subtitle: "Attention economy meets polarization",
  description: "How hashtag campaigns such as #MeToo or #BlackLivesMatter once dominated online discussions",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function ig(t, n = Ro) {
  const e = O0(t, n), r = e.display, i = e.plots, o = e.controls, a = e.buttons, s = e.grid_controls, l = e.grid_buttons;
  return D0(a, o, l, s), eg(r, i, o, n), Xt(r, i, n), {
    halt() {
      gt.value() === 1 && gt.press(controls);
    },
    reset() {
      gt.value() === 1 && gt.press(controls), ee.press(controls), ne.press(controls);
    },
    config: n,
    meta: rg
  };
}
export {
  Ro as config,
  ig as default,
  ig as load,
  rg as meta
};
