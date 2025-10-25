(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const Ji = {
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
function ln(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Qi(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Rr(t) {
  let n, e, r;
  t.length !== 2 ? (n = ln, e = (s, u) => ln(t(s), u), r = (s, u) => t(s) - u) : (n = t === ln || t === Qi ? t : ji, e = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (n(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : c = f;
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
function ji() {
  return 0;
}
function to(t) {
  return t === null ? NaN : +t;
}
const no = Rr(ln), eo = no.right;
Rr(to).center;
const ro = Math.sqrt(50), io = Math.sqrt(10), oo = Math.sqrt(2);
function _n(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= ro ? 10 : o >= io ? 5 : o >= oo ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? _n(t, n, e * 2) : [s, u, l];
}
function ao(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? _n(n, t, e) : _n(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Wn(t, n, e) {
  return n = +n, t = +t, e = +e, _n(t, n, e)[2];
}
function so(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? Wn(n, t, e) : Wn(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function tn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function uo(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
var lo = { value: () => {
} };
function ye() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new cn(e);
}
function cn(t) {
  this._ = t;
}
function co(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
cn.prototype = ye.prototype = {
  constructor: cn,
  on: function(t, n) {
    var e = this._, r = co(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = fo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = qe(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = qe(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new cn(t);
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
function fo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function qe(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = lo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var Jn = "http://www.w3.org/1999/xhtml";
const Xe = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Jn,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Tn(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), Xe.hasOwnProperty(n) ? { space: Xe[n], local: t } : t;
}
function ho(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === Jn && n.documentElement.namespaceURI === Jn ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function po(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Fr(t) {
  var n = Tn(t);
  return (n.local ? po : ho)(n);
}
function go() {
}
function me(t) {
  return t == null ? go : function() {
    return this.querySelector(t);
  };
}
function _o(t) {
  typeof t != "function" && (t = me(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new O(r, this._parents);
}
function yo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function mo() {
  return [];
}
function Dr(t) {
  return t == null ? mo : function() {
    return this.querySelectorAll(t);
  };
}
function wo(t) {
  return function() {
    return yo(t.apply(this, arguments));
  };
}
function vo(t) {
  typeof t == "function" ? t = wo(t) : t = Dr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new O(r, i);
}
function Lr(t) {
  return function() {
    return this.matches(t);
  };
}
function Hr(t) {
  return function(n) {
    return n.matches(t);
  };
}
var bo = Array.prototype.find;
function xo(t) {
  return function() {
    return bo.call(this.children, t);
  };
}
function Mo() {
  return this.firstElementChild;
}
function $o(t) {
  return this.select(t == null ? Mo : xo(typeof t == "function" ? t : Hr(t)));
}
var Ao = Array.prototype.filter;
function To() {
  return Array.from(this.children);
}
function So(t) {
  return function() {
    return Ao.call(this.children, t);
  };
}
function Po(t) {
  return this.selectAll(t == null ? To : So(typeof t == "function" ? t : Hr(t)));
}
function Eo(t) {
  typeof t != "function" && (t = Lr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new O(r, this._parents);
}
function Br(t) {
  return new Array(t.length);
}
function No() {
  return new O(this._enter || this._groups.map(Br), this._parents);
}
function yn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
yn.prototype = {
  constructor: yn,
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
function zo(t) {
  return function() {
    return t;
  };
}
function ko(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new yn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function Oo(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = n.length, f = o.length, h = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = n[s]) && (h[s] = g = a.call(u, u.__data__, s, n) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : e[s] = new yn(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = n[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Io(t) {
  return t.__data__;
}
function Co(t, n) {
  if (!arguments.length) return Array.from(this, Io);
  var e = n ? Oo : ko, r = this._parents, i = this._groups;
  typeof t != "function" && (t = zo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, g = Ro(t.call(c, c && c.__data__, l, r)), d = g.length, p = s[l] = new Array(d), b = a[l] = new Array(d), y = u[l] = new Array(h);
    e(c, f, p, b, y, g, n);
    for (var x = 0, A = 0, _, w; x < d; ++x)
      if (_ = p[x]) {
        for (x >= A && (A = x + 1); !(w = b[A]) && ++A < d; ) ;
        _._next = w || null;
      }
  }
  return a = new O(a, r), a._enter = s, a._exit = u, a;
}
function Ro(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Fo() {
  return new O(this._exit || this._groups.map(Br), this._parents);
}
function Do(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function Lo(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], c = r[u], f = l.length, h = s[u] = new Array(f), g, d = 0; d < f; ++d)
      (g = l[d] || c[d]) && (h[d] = g);
  for (; u < i; ++u)
    s[u] = e[u];
  return new O(s, this._parents);
}
function Ho() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Bo(t) {
  t || (t = qo);
  function n(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(n);
  }
  return new O(i, this._parents).order();
}
function qo(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Xo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Go() {
  return Array.from(this);
}
function Uo() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Yo() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Ko() {
  return !this.node();
}
function Vo(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Zo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Wo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Jo(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function Qo(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function jo(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function ta(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function na(t, n) {
  var e = Tn(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Wo : Zo : typeof n == "function" ? e.local ? ta : jo : e.local ? Qo : Jo)(e, n));
}
function qr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ea(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ra(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function ia(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function oa(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? ea : typeof n == "function" ? ia : ra)(t, n, e ?? "")) : Pt(this.node(), t);
}
function Pt(t, n) {
  return t.style.getPropertyValue(n) || qr(t).getComputedStyle(t, null).getPropertyValue(n);
}
function aa(t) {
  return function() {
    delete this[t];
  };
}
function sa(t, n) {
  return function() {
    this[t] = n;
  };
}
function ua(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function la(t, n) {
  return arguments.length > 1 ? this.each((n == null ? aa : typeof n == "function" ? ua : sa)(t, n)) : this.node()[t];
}
function Xr(t) {
  return t.trim().split(/^|\s+/);
}
function we(t) {
  return t.classList || new Gr(t);
}
function Gr(t) {
  this._node = t, this._names = Xr(t.getAttribute("class") || "");
}
Gr.prototype = {
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
function Ur(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function Yr(t, n) {
  for (var e = we(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function ca(t) {
  return function() {
    Ur(this, t);
  };
}
function fa(t) {
  return function() {
    Yr(this, t);
  };
}
function ha(t, n) {
  return function() {
    (n.apply(this, arguments) ? Ur : Yr)(this, t);
  };
}
function da(t, n) {
  var e = Xr(t + "");
  if (arguments.length < 2) {
    for (var r = we(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? ha : n ? ca : fa)(e, n));
}
function pa() {
  this.textContent = "";
}
function ga(t) {
  return function() {
    this.textContent = t;
  };
}
function _a(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ya(t) {
  return arguments.length ? this.each(t == null ? pa : (typeof t == "function" ? _a : ga)(t)) : this.node().textContent;
}
function ma() {
  this.innerHTML = "";
}
function wa(t) {
  return function() {
    this.innerHTML = t;
  };
}
function va(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ba(t) {
  return arguments.length ? this.each(t == null ? ma : (typeof t == "function" ? va : wa)(t)) : this.node().innerHTML;
}
function xa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ma() {
  return this.each(xa);
}
function $a() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Aa() {
  return this.each($a);
}
function Ta(t) {
  var n = typeof t == "function" ? t : Fr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function Sa() {
  return null;
}
function Pa(t, n) {
  var e = typeof t == "function" ? t : Fr(t), r = n == null ? Sa : typeof n == "function" ? n : me(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ea() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Na() {
  return this.each(Ea);
}
function za() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ka() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function Oa(t) {
  return this.select(t ? ka : za);
}
function Ia(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Ca(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function Ra(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function Fa(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function Da(t, n, e) {
  return function() {
    var r = this.__on, i, o = Ca(n);
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
function La(t, n, e) {
  var r = Ra(t + ""), i, o = r.length, a;
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
  for (s = n ? Da : Fa, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function Kr(t, n, e) {
  var r = qr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function Ha(t, n) {
  return function() {
    return Kr(this, t, n);
  };
}
function Ba(t, n) {
  return function() {
    return Kr(this, t, n.apply(this, arguments));
  };
}
function qa(t, n) {
  return this.each((typeof n == "function" ? Ba : Ha)(t, n));
}
function* Xa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Vr = [null];
function O(t, n) {
  this._groups = t, this._parents = n;
}
function Vt() {
  return new O([[document.documentElement]], Vr);
}
function Ga() {
  return this;
}
O.prototype = Vt.prototype = {
  constructor: O,
  select: _o,
  selectAll: vo,
  selectChild: $o,
  selectChildren: Po,
  filter: Eo,
  data: Co,
  enter: No,
  exit: Fo,
  join: Do,
  merge: Lo,
  selection: Ga,
  order: Ho,
  sort: Bo,
  call: Xo,
  nodes: Go,
  node: Uo,
  size: Yo,
  empty: Ko,
  each: Vo,
  attr: na,
  style: oa,
  property: la,
  classed: da,
  text: ya,
  html: ba,
  raise: Ma,
  lower: Aa,
  append: Ta,
  insert: Pa,
  remove: Na,
  clone: Oa,
  datum: Ia,
  on: La,
  dispatch: qa,
  [Symbol.iterator]: Xa
};
function S(t) {
  return typeof t == "string" ? new O([[document.querySelector(t)]], [document.documentElement]) : new O([[t]], Vr);
}
function Ua(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function Qn(t, n) {
  if (t = Ua(t), n === void 0 && (n = t.currentTarget), n) {
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
const Ya = { passive: !1 }, Lt = { capture: !0, passive: !1 };
function Xn(t) {
  t.stopImmediatePropagation();
}
function Mt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ka(t) {
  var n = t.document.documentElement, e = S(t).on("dragstart.drag", Mt, Lt);
  "onselectstart" in n ? e.on("selectstart.drag", Mt, Lt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Va(t, n) {
  var e = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Mt, Lt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const nn = (t) => () => t;
function jn(t, {
  sourceEvent: n,
  subject: e,
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
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
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
jn.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Za(t) {
  return !t.ctrlKey && !t.button;
}
function Wa() {
  return this.parentNode;
}
function Ja(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function Qa() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ja() {
  var t = Za, n = Wa, e = Ja, r = Qa, i = {}, o = ye("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(_) {
    _.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", y, Ya).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(_, w) {
    if (!(c || !t.call(this, _, w))) {
      var P = A(this, n.call(this, _, w), _, w, "mouse");
      P && (S(_.view).on("mousemove.drag", d, Lt).on("mouseup.drag", p, Lt), Ka(_.view), Xn(_), l = !1, s = _.clientX, u = _.clientY, P("start", _));
    }
  }
  function d(_) {
    if (Mt(_), !l) {
      var w = _.clientX - s, P = _.clientY - u;
      l = w * w + P * P > f;
    }
    i.mouse("drag", _);
  }
  function p(_) {
    S(_.view).on("mousemove.drag mouseup.drag", null), Va(_.view, l), Mt(_), i.mouse("end", _);
  }
  function b(_, w) {
    if (t.call(this, _, w)) {
      var P = _.changedTouches, E = n.call(this, _, w), N = P.length, G, W;
      for (G = 0; G < N; ++G)
        (W = A(this, E, _, w, P[G].identifier, P[G])) && (Xn(_), W("start", _, P[G]));
    }
  }
  function y(_) {
    var w = _.changedTouches, P = w.length, E, N;
    for (E = 0; E < P; ++E)
      (N = i[w[E].identifier]) && (Mt(_), N("drag", _, w[E]));
  }
  function x(_) {
    var w = _.changedTouches, P = w.length, E, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < P; ++E)
      (N = i[w[E].identifier]) && (Xn(_), N("end", _, w[E]));
  }
  function A(_, w, P, E, N, G) {
    var W = o.copy(), v = Qn(G || P, w), U, z, D;
    if ((D = e.call(_, new jn("beforestart", {
      sourceEvent: P,
      target: h,
      identifier: N,
      active: a,
      x: v[0],
      y: v[1],
      dx: 0,
      dy: 0,
      dispatch: W
    }), E)) != null)
      return U = D.x - v[0] || 0, z = D.y - v[1] || 0, function jt(at, ct, vt) {
        var C = v, qn;
        switch (at) {
          case "start":
            i[N] = jt, qn = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            v = Qn(vt || ct, w), qn = a;
            break;
        }
        W.call(
          at,
          _,
          new jn(at, {
            sourceEvent: ct,
            subject: D,
            target: h,
            identifier: N,
            active: qn,
            x: v[0] + U,
            y: v[1] + z,
            dx: v[0] - C[0],
            dy: v[1] - C[1],
            dispatch: W
          }),
          E
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : nn(!!_), h) : t;
  }, h.container = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : nn(_), h) : n;
  }, h.subject = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : nn(_), h) : e;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : nn(!!_), h) : r;
  }, h.on = function() {
    var _ = o.on.apply(o, arguments);
    return _ === o ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, h) : Math.sqrt(f);
  }, h;
}
function ve(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function Zr(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Zt() {
}
var Ht = 0.7, mn = 1 / Ht, $t = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ts = /^#([0-9a-f]{3,8})$/, ns = new RegExp(`^rgb\\(${$t},${$t},${$t}\\)$`), es = new RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), rs = new RegExp(`^rgba\\(${$t},${$t},${$t},${Bt}\\)$`), is = new RegExp(`^rgba\\(${Y},${Y},${Y},${Bt}\\)$`), os = new RegExp(`^hsl\\(${Bt},${Y},${Y}\\)$`), as = new RegExp(`^hsla\\(${Bt},${Y},${Y},${Bt}\\)$`), Ge = {
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
ve(Zt, pt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ue,
  // Deprecated! Use color.formatHex.
  formatHex: Ue,
  formatHex8: ss,
  formatHsl: us,
  formatRgb: Ye,
  toString: Ye
});
function Ue() {
  return this.rgb().formatHex();
}
function ss() {
  return this.rgb().formatHex8();
}
function us() {
  return Wr(this).formatHsl();
}
function Ye() {
  return this.rgb().formatRgb();
}
function pt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = ts.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? Ke(n) : e === 3 ? new k(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? en(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? en(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = ns.exec(t)) ? new k(n[1], n[2], n[3], 1) : (n = es.exec(t)) ? new k(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = rs.exec(t)) ? en(n[1], n[2], n[3], n[4]) : (n = is.exec(t)) ? en(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = os.exec(t)) ? We(n[1], n[2] / 100, n[3] / 100, 1) : (n = as.exec(t)) ? We(n[1], n[2] / 100, n[3] / 100, n[4]) : Ge.hasOwnProperty(t) ? Ke(Ge[t]) : t === "transparent" ? new k(NaN, NaN, NaN, 0) : null;
}
function Ke(t) {
  return new k(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function en(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new k(t, n, e, r);
}
function ls(t) {
  return t instanceof Zt || (t = pt(t)), t ? (t = t.rgb(), new k(t.r, t.g, t.b, t.opacity)) : new k();
}
function te(t, n, e, r) {
  return arguments.length === 1 ? ls(t) : new k(t, n, e, r ?? 1);
}
function k(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
ve(k, te, Zr(Zt, {
  brighter(t) {
    return t = t == null ? mn : Math.pow(mn, t), new k(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ht : Math.pow(Ht, t), new k(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new k(dt(this.r), dt(this.g), dt(this.b), wn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ve,
  // Deprecated! Use color.formatHex.
  formatHex: Ve,
  formatHex8: cs,
  formatRgb: Ze,
  toString: Ze
}));
function Ve() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}`;
}
function cs() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}${ht((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ze() {
  const t = wn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${dt(this.r)}, ${dt(this.g)}, ${dt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function wn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function dt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ht(t) {
  return t = dt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function We(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new B(t, n, e, r);
}
function Wr(t) {
  if (t instanceof B) return new B(t.h, t.s, t.l, t.opacity);
  if (t instanceof Zt || (t = pt(t)), !t) return new B();
  if (t instanceof B) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new B(a, s, u, t.opacity);
}
function fs(t, n, e, r) {
  return arguments.length === 1 ? Wr(t) : new B(t, n, e, r ?? 1);
}
function B(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
ve(B, fs, Zr(Zt, {
  brighter(t) {
    return t = t == null ? mn : Math.pow(mn, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ht : Math.pow(Ht, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new k(
      Gn(t >= 240 ? t - 240 : t + 120, i, r),
      Gn(t, i, r),
      Gn(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new B(Je(this.h), rn(this.s), rn(this.l), wn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = wn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Je(this.h)}, ${rn(this.s) * 100}%, ${rn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Je(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function rn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Gn(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const be = (t) => () => t;
function hs(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function ds(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function ps(t) {
  return (t = +t) == 1 ? Jr : function(n, e) {
    return e - n ? ds(n, e, t) : be(isNaN(n) ? e : n);
  };
}
function Jr(t, n) {
  var e = n - t;
  return e ? hs(t, e) : be(isNaN(t) ? n : t);
}
const qt = (function t(n) {
  var e = ps(n);
  function r(i, o) {
    var a = e((i = te(i)).r, (o = te(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = Jr(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function gs(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function _s(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ys(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = xe(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function ms(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function L(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function ws(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = xe(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var ne = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Un = new RegExp(ne.source, "g");
function vs(t) {
  return function() {
    return t;
  };
}
function bs(t) {
  return function(n) {
    return t(n) + "";
  };
}
function Qr(t, n) {
  var e = ne.lastIndex = Un.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = ne.exec(t)) && (i = Un.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: L(r, i) })), e = Un.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? bs(u[0].x) : vs(n) : (n = u.length, function(l) {
    for (var c = 0, f; c < n; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function xe(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? be(n) : (e === "number" ? L : e === "string" ? (r = pt(n)) ? (n = r, qt) : Qr : n instanceof pt ? qt : n instanceof Date ? ms : _s(n) ? gs : Array.isArray(n) ? ys : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? ws : L)(t, n);
}
function xs(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var Qe = 180 / Math.PI, ee = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function jr(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * Qe,
    skewX: Math.atan(u) * Qe,
    scaleX: a,
    scaleY: s
  };
}
var on;
function Ms(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ee : jr(n.a, n.b, n.c, n.d, n.e, n.f);
}
function $s(t) {
  return t == null || (on || (on = document.createElementNS("http://www.w3.org/2000/svg", "g")), on.setAttribute("transform", t), !(t = on.transform.baseVal.consolidate())) ? ee : (t = t.matrix, jr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ti(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push("translate(", null, n, null, e);
      d.push({ i: p - 4, x: L(l, f) }, { i: p - 2, x: L(c, h) });
    } else (f || h) && g.push("translate(" + f + n + h + e);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: L(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: L(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push(i(g) + "scale(", null, ",", null, ")");
      d.push({ i: p - 4, x: L(l, f) }, { i: p - 2, x: L(c, h) });
    } else (f !== 1 || h !== 1) && g.push(i(g) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(g) {
      for (var d = -1, p = h.length, b; ++d < p; ) f[(b = h[d]).i] = b.x(g);
      return f.join("");
    };
  };
}
var As = ti(Ms, "px, ", "px)", "deg)"), Ts = ti($s, ", ", ")", ")"), Et = 0, Ct = 0, Ot = 0, ni = 1e3, vn, Rt, bn = 0, gt = 0, Sn = 0, Xt = typeof performance == "object" && performance.now ? performance : Date, ei = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Pn() {
  return gt || (ei(Ss), gt = Xt.now() + Sn);
}
function Ss() {
  gt = 0;
}
function Gt() {
  this._call = this._time = this._next = null;
}
Gt.prototype = ri.prototype = {
  constructor: Gt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Pn() : +e) + (n == null ? 0 : +n), !this._next && Rt !== this && (Rt ? Rt._next = this : vn = this, Rt = this), this._call = t, this._time = e, re();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, re());
  }
};
function ri(t, n, e) {
  var r = new Gt();
  return r.restart(t, n, e), r;
}
function Ps() {
  Pn(), ++Et;
  for (var t = vn, n; t; )
    (n = gt - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --Et;
}
function je() {
  gt = (bn = Xt.now()) + Sn, Et = Ct = 0;
  try {
    Ps();
  } finally {
    Et = 0, Ns(), gt = 0;
  }
}
function Es() {
  var t = Xt.now(), n = t - bn;
  n > ni && (Sn -= n, bn = t);
}
function Ns() {
  for (var t, n = vn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : vn = e);
  Rt = t, re(r);
}
function re(t) {
  if (!Et) {
    Ct && (Ct = clearTimeout(Ct));
    var n = t - gt;
    n > 24 ? (t < 1 / 0 && (Ct = setTimeout(je, t - Xt.now() - Sn)), Ot && (Ot = clearInterval(Ot))) : (Ot || (bn = Xt.now(), Ot = setInterval(Es, ni)), Et = 1, ei(je));
  }
}
function tr(t, n, e) {
  var r = new Gt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function zs(t, n, e) {
  var r = new Gt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Pn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var ks = ye("start", "end", "cancel", "interrupt"), Os = [], ii = 0, nr = 1, ie = 2, fn = 3, er = 4, oe = 5, hn = 6;
function En(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  Is(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ks,
    tween: Os,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ii
  });
}
function Me(t, n) {
  var e = q(t, n);
  if (e.state > ii) throw new Error("too late; already scheduled");
  return e;
}
function Z(t, n) {
  var e = q(t, n);
  if (e.state > fn) throw new Error("too late; already running");
  return e;
}
function q(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function Is(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = ri(o, 0, e.time);
  function o(l) {
    e.state = nr, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var c, f, h, g;
    if (e.state !== nr) return u();
    for (c in r)
      if (g = r[c], g.name === e.name) {
        if (g.state === fn) return tr(a);
        g.state === er ? (g.state = hn, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[c]) : +c < n && (g.state = hn, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[c]);
      }
    if (tr(function() {
      e.state === fn && (e.state = er, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = ie, e.on.call("start", t, t.__data__, e.index, e.group), e.state === ie) {
      for (e.state = fn, i = new Array(h = e.tween.length), c = 0, f = -1; c < h; ++c)
        (g = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = g);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = oe, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    e.state === oe && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = hn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Cs(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > ie && r.state < oe, r.state = hn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function Rs(t) {
  return this.each(function() {
    Cs(this, t);
  });
}
function Fs(t, n) {
  var e, r;
  return function() {
    var i = Z(this, t), o = i.tween;
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
function Ds(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = Z(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function Ls(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = q(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? Fs : Ds)(e, t, n));
}
function $e(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = Z(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[n];
  };
}
function oi(t, n) {
  var e;
  return (typeof n == "number" ? L : n instanceof pt ? qt : (e = pt(n)) ? (n = e, qt) : Qr)(t, n);
}
function Hs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Bs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function qs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Xs(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Gs(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Us(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Ys(t, n) {
  var e = Tn(t), r = e === "transform" ? Ts : oi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Us : Gs)(e, r, $e(this, "attr." + t, n)) : n == null ? (e.local ? Bs : Hs)(e) : (e.local ? Xs : qs)(e, r, n));
}
function Ks(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Vs(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Zs(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Vs(t, o)), e;
  }
  return i._value = n, i;
}
function Ws(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Ks(t, o)), e;
  }
  return i._value = n, i;
}
function Js(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = Tn(t);
  return this.tween(e, (r.local ? Zs : Ws)(r, n));
}
function Qs(t, n) {
  return function() {
    Me(this, t).delay = +n.apply(this, arguments);
  };
}
function js(t, n) {
  return n = +n, function() {
    Me(this, t).delay = n;
  };
}
function tu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Qs : js)(n, t)) : q(this.node(), n).delay;
}
function nu(t, n) {
  return function() {
    Z(this, t).duration = +n.apply(this, arguments);
  };
}
function eu(t, n) {
  return n = +n, function() {
    Z(this, t).duration = n;
  };
}
function ru(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? nu : eu)(n, t)) : q(this.node(), n).duration;
}
function iu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    Z(this, t).ease = n;
  };
}
function ou(t) {
  var n = this._id;
  return arguments.length ? this.each(iu(n, t)) : q(this.node(), n).ease;
}
function au(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    Z(this, t).ease = e;
  };
}
function su(t) {
  if (typeof t != "function") throw new Error();
  return this.each(au(this._id, t));
}
function uu(t) {
  typeof t != "function" && (t = Lr(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new tt(r, this._parents, this._name, this._id);
}
function lu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], c = u.length, f = a[s] = new Array(c), h, g = 0; g < c; ++g)
      (h = u[g] || l[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = n[s];
  return new tt(a, this._parents, this._name, this._id);
}
function cu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function fu(t, n, e) {
  var r, i, o = cu(n) ? Me : Z;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function hu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? q(this.node(), e).on.on(t) : this.each(fu(e, t, n));
}
function du(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function pu() {
  return this.on("end.remove", du(this._id));
}
function gu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = me(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, En(l[h], n, e, h, l, q(c, e)));
  return new tt(o, this._parents, n, e);
}
function _u(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Dr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), g, d = q(c, e), p = 0, b = h.length; p < b; ++p)
          (g = h[p]) && En(g, n, e, p, h, d);
        o.push(h), a.push(c);
      }
  return new tt(o, a, n, e);
}
var yu = Vt.prototype.constructor;
function mu() {
  return new yu(this._groups, this._parents);
}
function wu(t, n) {
  var e, r, i;
  return function() {
    var o = Pt(this, t), a = (this.style.removeProperty(t), Pt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function ai(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function vu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = Pt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function bu(t, n, e) {
  var r, i, o;
  return function() {
    var a = Pt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Pt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function xu(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = Z(this, t), l = u.on, c = u.value[o] == null ? s || (s = ai(n)) : void 0;
    (l !== e || i !== c) && (r = (e = l).copy()).on(a, i = c), u.on = r;
  };
}
function Mu(t, n, e) {
  var r = (t += "") == "transform" ? As : oi;
  return n == null ? this.styleTween(t, wu(t, r)).on("end.style." + t, ai(t)) : typeof n == "function" ? this.styleTween(t, bu(t, r, $e(this, "style." + t, n))).each(xu(this._id, t)) : this.styleTween(t, vu(t, r, n), e).on("end.style." + t, null);
}
function $u(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function Au(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && $u(t, a, e)), r;
  }
  return o._value = n, o;
}
function Tu(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, Au(t, n, e ?? ""));
}
function Su(t) {
  return function() {
    this.textContent = t;
  };
}
function Pu(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function Eu(t) {
  return this.tween("text", typeof t == "function" ? Pu($e(this, "text", t)) : Su(t == null ? "" : t + ""));
}
function Nu(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function zu(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && Nu(i)), n;
  }
  return r._value = t, r;
}
function ku(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, zu(t));
}
function Ou() {
  for (var t = this._name, n = this._id, e = si(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = q(u, n);
        En(u, t, e, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new tt(r, this._parents, t, e);
}
function Iu() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = Z(this, r), c = l.on;
      c !== t && (n = (t = c).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var Cu = 0;
function tt(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function si() {
  return ++Cu;
}
var J = Vt.prototype;
tt.prototype = {
  constructor: tt,
  select: gu,
  selectAll: _u,
  selectChild: J.selectChild,
  selectChildren: J.selectChildren,
  filter: uu,
  merge: lu,
  selection: mu,
  transition: Ou,
  call: J.call,
  nodes: J.nodes,
  node: J.node,
  size: J.size,
  empty: J.empty,
  each: J.each,
  on: hu,
  attr: Ys,
  attrTween: Js,
  style: Mu,
  styleTween: Tu,
  text: Eu,
  textTween: ku,
  remove: pu,
  tween: Ls,
  delay: tu,
  duration: ru,
  ease: ou,
  easeVarying: su,
  end: Iu,
  [Symbol.iterator]: J[Symbol.iterator]
};
function Ru(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Fu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ru
};
function Du(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function Lu(t) {
  var n, e;
  t instanceof tt ? (n = t._id, t = t._name) : (n = si(), (e = Fu).time = Pn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && En(u, t, n, l, a, e || Du(u, n));
  return new tt(r, this._parents, t, n);
}
Vt.prototype.interrupt = Rs;
Vt.prototype.transition = Lu;
const ae = Math.PI, se = 2 * ae, ft = 1e-6, Hu = se - ft;
function ui(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function Bu(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return ui;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class li {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? ui : Bu(n);
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
    let a = this._x1, s = this._y1, u = r - n, l = i - e, c = a - n, f = s - e, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (h > ft) if (!(Math.abs(f * u - l * c) > ft) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let g = r - a, d = i - s, p = u * u + l * l, b = g * g + d * d, y = Math.sqrt(p), x = Math.sqrt(h), A = o * Math.tan((ae - Math.acos((p + h - b) / (2 * y * x))) / 2), _ = A / x, w = A / y;
      Math.abs(_ - 1) > ft && this._append`L${n + _ * c},${e + _ * f}`, this._append`A${o},${o},0,0,${+(f * g > c * d)},${this._x1 = n + w * u},${this._y1 = e + w * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, c = e + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ft || Math.abs(this._y1 - c) > ft) && this._append`L${l},${c}`, r && (h < 0 && (h = h % se + se), h > Hu ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ft && this._append`A${r},${r},0,${+(h >= ae)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function X() {
  return new li();
}
X.prototype = li.prototype;
function qu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function xn(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Nt(t) {
  return t = xn(Math.abs(t)), t ? t[1] : NaN;
}
function Xu(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function Gu(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Uu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Mn(t) {
  if (!(n = Uu.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new Ae({
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
Mn.prototype = Ae.prototype;
function Ae(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ae.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Yu(t) {
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
var ci;
function Ku(t, n) {
  var e = xn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - (ci = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + xn(t, Math.max(0, n + o - 1))[0];
}
function rr(t, n) {
  var e = xn(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ir = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: qu,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => rr(t * 100, n),
  r: rr,
  s: Ku,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function or(t) {
  return t;
}
var ar = Array.prototype.map, sr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Vu(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? or : Xu(ar.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? or : Gu(ar.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = Mn(f);
    var h = f.fill, g = f.align, d = f.sign, p = f.symbol, b = f.zero, y = f.width, x = f.comma, A = f.precision, _ = f.trim, w = f.type;
    w === "n" ? (x = !0, w = "g") : ir[w] || (A === void 0 && (A = 12), _ = !0, w = "g"), (b || h === "0" && g === "=") && (b = !0, h = "0", g = "=");
    var P = p === "$" ? e : p === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", E = p === "$" ? r : /[%p]/.test(w) ? a : "", N = ir[w], G = /[defgprs%]/.test(w);
    A = A === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function W(v) {
      var U = P, z = E, D, jt, at;
      if (w === "c")
        z = N(v) + z, v = "";
      else {
        v = +v;
        var ct = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? u : N(Math.abs(v), A), _ && (v = Yu(v)), ct && +v == 0 && d !== "+" && (ct = !1), U = (ct ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + U, z = (w === "s" ? sr[8 + ci / 3] : "") + z + (ct && d === "(" ? ")" : ""), G) {
          for (D = -1, jt = v.length; ++D < jt; )
            if (at = v.charCodeAt(D), 48 > at || at > 57) {
              z = (at === 46 ? i + v.slice(D + 1) : v.slice(D)) + z, v = v.slice(0, D);
              break;
            }
        }
      }
      x && !b && (v = n(v, 1 / 0));
      var vt = U.length + v.length + z.length, C = vt < y ? new Array(y - vt + 1).join(h) : "";
      switch (x && b && (v = n(C + v, C.length ? y - z.length : 1 / 0), C = ""), g) {
        case "<":
          v = U + v + z + C;
          break;
        case "=":
          v = U + C + v + z;
          break;
        case "^":
          v = C.slice(0, vt = C.length >> 1) + U + v + z + C.slice(vt);
          break;
        default:
          v = C + U + v + z;
          break;
      }
      return o(v);
    }
    return W.toString = function() {
      return f + "";
    }, W;
  }
  function c(f, h) {
    var g = l((f = Mn(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(Nt(h) / 3))) * 3, p = Math.pow(10, -d), b = sr[8 + d / 3];
    return function(y) {
      return g(p * y) + b;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var an, Nn, fi;
Zu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Zu(t) {
  return an = Vu(t), Nn = an.format, fi = an.formatPrefix, an;
}
function Wu(t) {
  return Math.max(0, -Nt(Math.abs(t)));
}
function Ju(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Nt(n) / 3))) * 3 - Nt(Math.abs(t)));
}
function Qu(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Nt(n) - Nt(t)) + 1;
}
function ju(t, n) {
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
function tl(t) {
  return function() {
    return t;
  };
}
function nl(t) {
  return +t;
}
var ur = [0, 1];
function xt(t) {
  return t;
}
function ue(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : tl(isNaN(n) ? NaN : 0.5);
}
function el(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function rl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = ue(i, r), o = e(a, o)) : (r = ue(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function il(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = ue(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = eo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function ol(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function al() {
  var t = ur, n = ur, e = xe, r, i, o, a = xt, s, u, l;
  function c() {
    var h = Math.min(t.length, n.length);
    return a !== xt && (a = el(t[0], t[h - 1])), s = h > 2 ? il : rl, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), n, e)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(n, t.map(r), L)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, nl), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (n = Array.from(h), c()) : n.slice();
  }, f.rangeRound = function(h) {
    return n = Array.from(h), e = xs, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : xt, c()) : a !== xt;
  }, f.interpolate = function(h) {
    return arguments.length ? (e = h, c()) : e;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return r = h, i = g, c();
  };
}
function sl() {
  return al()(xt, xt);
}
function ul(t, n, e, r) {
  var i = so(t, n, e), o;
  switch (r = Mn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = Ju(i, a)) && (r.precision = o), fi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = Qu(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Wu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Nn(r);
}
function ll(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return ao(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ul(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = Wn(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
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
function K() {
  var t = sl();
  return t.copy = function() {
    return ol(t, K());
  }, ju.apply(t, arguments), ll(t);
}
function Ft(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
Ft.prototype = {
  constructor: Ft,
  scale: function(t) {
    return t === 1 ? this : new Ft(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new Ft(this.k, this.x + this.k * t, this.y + this.k * n);
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
Ft.prototype;
var hi = typeof global == "object" && global && global.Object === Object && global, cl = typeof self == "object" && self && self.Object === Object && self, rt = hi || cl || Function("return this")(), V = rt.Symbol, di = Object.prototype, fl = di.hasOwnProperty, hl = di.toString, It = V ? V.toStringTag : void 0;
function dl(t) {
  var n = fl.call(t, It), e = t[It];
  try {
    t[It] = void 0;
    var r = !0;
  } catch {
  }
  var i = hl.call(t);
  return r && (n ? t[It] = e : delete t[It]), i;
}
var pl = Object.prototype, gl = pl.toString;
function _l(t) {
  return gl.call(t);
}
var yl = "[object Null]", ml = "[object Undefined]", lr = V ? V.toStringTag : void 0;
function yt(t) {
  return t == null ? t === void 0 ? ml : yl : lr && lr in Object(t) ? dl(t) : _l(t);
}
function lt(t) {
  return t != null && typeof t == "object";
}
var wl = "[object Symbol]";
function zn(t) {
  return typeof t == "symbol" || lt(t) && yt(t) == wl;
}
function Wt(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var I = Array.isArray, cr = V ? V.prototype : void 0, fr = cr ? cr.toString : void 0;
function pi(t) {
  if (typeof t == "string")
    return t;
  if (I(t))
    return Wt(t, pi) + "";
  if (zn(t))
    return fr ? fr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var vl = /\s/;
function bl(t) {
  for (var n = t.length; n-- && vl.test(t.charAt(n)); )
    ;
  return n;
}
var xl = /^\s+/;
function Ml(t) {
  return t && t.slice(0, bl(t) + 1).replace(xl, "");
}
function nt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var hr = NaN, $l = /^[-+]0x[0-9a-f]+$/i, Al = /^0b[01]+$/i, Tl = /^0o[0-7]+$/i, Sl = parseInt;
function Pl(t) {
  if (typeof t == "number")
    return t;
  if (zn(t))
    return hr;
  if (nt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ml(t);
  var e = Al.test(t);
  return e || Tl.test(t) ? Sl(t.slice(2), e ? 2 : 8) : $l.test(t) ? hr : +t;
}
var dr = 1 / 0, El = 17976931348623157e292;
function Yn(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Pl(t), t === dr || t === -dr) {
    var n = t < 0 ? -1 : 1;
    return n * El;
  }
  return t === t ? t : 0;
}
function kn(t) {
  return t;
}
var Nl = "[object AsyncFunction]", zl = "[object Function]", kl = "[object GeneratorFunction]", Ol = "[object Proxy]";
function gi(t) {
  if (!nt(t))
    return !1;
  var n = yt(t);
  return n == zl || n == kl || n == Nl || n == Ol;
}
var Kn = rt["__core-js_shared__"], pr = (function() {
  var t = /[^.]+$/.exec(Kn && Kn.keys && Kn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Il(t) {
  return !!pr && pr in t;
}
var Cl = Function.prototype, Rl = Cl.toString;
function mt(t) {
  if (t != null) {
    try {
      return Rl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Fl = /[\\^$.*+?()[\]{}|]/g, Dl = /^\[object .+?Constructor\]$/, Ll = Function.prototype, Hl = Object.prototype, Bl = Ll.toString, ql = Hl.hasOwnProperty, Xl = RegExp(
  "^" + Bl.call(ql).replace(Fl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Gl(t) {
  if (!nt(t) || Il(t))
    return !1;
  var n = gi(t) ? Xl : Dl;
  return n.test(mt(t));
}
function Ul(t, n) {
  return t == null ? void 0 : t[n];
}
function wt(t, n) {
  var e = Ul(t, n);
  return Gl(e) ? e : void 0;
}
var le = wt(rt, "WeakMap");
function Yl(t, n, e) {
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
var Kl = 800, Vl = 16, Zl = Date.now;
function Wl(t) {
  var n = 0, e = 0;
  return function() {
    var r = Zl(), i = Vl - (r - e);
    if (e = r, i > 0) {
      if (++n >= Kl)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Jl(t) {
  return function() {
    return t;
  };
}
var $n = (function() {
  try {
    var t = wt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), Ql = $n ? function(t, n) {
  return $n(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Jl(n),
    writable: !0
  });
} : kn, jl = Wl(Ql);
function tc(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
function nc(t, n, e, r) {
  for (var i = t.length, o = e + -1; ++o < i; )
    if (n(t[o], o, t))
      return o;
  return -1;
}
function ec(t) {
  return t !== t;
}
function rc(t, n, e) {
  for (var r = e - 1, i = t.length; ++r < i; )
    if (t[r] === n)
      return r;
  return -1;
}
function ic(t, n, e) {
  return n === n ? rc(t, n, e) : nc(t, ec, e);
}
function oc(t, n) {
  var e = t == null ? 0 : t.length;
  return !!e && ic(t, n, 0) > -1;
}
var ac = 9007199254740991, sc = /^(?:0|[1-9]\d*)$/;
function On(t, n) {
  var e = typeof t;
  return n = n ?? ac, !!n && (e == "number" || e != "symbol" && sc.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function uc(t, n, e) {
  n == "__proto__" && $n ? $n(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function In(t, n) {
  return t === n || t !== t && n !== n;
}
var lc = Object.prototype, cc = lc.hasOwnProperty;
function fc(t, n, e) {
  var r = t[n];
  (!(cc.call(t, n) && In(r, e)) || e === void 0 && !(n in t)) && uc(t, n, e);
}
var gr = Math.max;
function hc(t, n, e) {
  return n = gr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = gr(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), Yl(t, this, s);
  };
}
function dc(t, n) {
  return jl(hc(t, n, kn), t + "");
}
var pc = 9007199254740991;
function Te(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pc;
}
function kt(t) {
  return t != null && Te(t.length) && !gi(t);
}
function gc(t, n, e) {
  if (!nt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? kt(e) && On(n, e.length) : r == "string" && n in e) ? In(e[n], t) : !1;
}
var _c = Object.prototype;
function _i(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || _c;
  return t === e;
}
function yc(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var mc = "[object Arguments]";
function _r(t) {
  return lt(t) && yt(t) == mc;
}
var yi = Object.prototype, wc = yi.hasOwnProperty, vc = yi.propertyIsEnumerable, Se = _r(/* @__PURE__ */ (function() {
  return arguments;
})()) ? _r : function(t) {
  return lt(t) && wc.call(t, "callee") && !vc.call(t, "callee");
};
function bc() {
  return !1;
}
var mi = typeof exports == "object" && exports && !exports.nodeType && exports, yr = mi && typeof module == "object" && module && !module.nodeType && module, xc = yr && yr.exports === mi, mr = xc ? rt.Buffer : void 0, Mc = mr ? mr.isBuffer : void 0, ce = Mc || bc, $c = "[object Arguments]", Ac = "[object Array]", Tc = "[object Boolean]", Sc = "[object Date]", Pc = "[object Error]", Ec = "[object Function]", Nc = "[object Map]", zc = "[object Number]", kc = "[object Object]", Oc = "[object RegExp]", Ic = "[object Set]", Cc = "[object String]", Rc = "[object WeakMap]", Fc = "[object ArrayBuffer]", Dc = "[object DataView]", Lc = "[object Float32Array]", Hc = "[object Float64Array]", Bc = "[object Int8Array]", qc = "[object Int16Array]", Xc = "[object Int32Array]", Gc = "[object Uint8Array]", Uc = "[object Uint8ClampedArray]", Yc = "[object Uint16Array]", Kc = "[object Uint32Array]", M = {};
M[Lc] = M[Hc] = M[Bc] = M[qc] = M[Xc] = M[Gc] = M[Uc] = M[Yc] = M[Kc] = !0;
M[$c] = M[Ac] = M[Fc] = M[Tc] = M[Dc] = M[Sc] = M[Pc] = M[Ec] = M[Nc] = M[zc] = M[kc] = M[Oc] = M[Ic] = M[Cc] = M[Rc] = !1;
function Vc(t) {
  return lt(t) && Te(t.length) && !!M[yt(t)];
}
function Zc(t) {
  return function(n) {
    return t(n);
  };
}
var wi = typeof exports == "object" && exports && !exports.nodeType && exports, Dt = wi && typeof module == "object" && module && !module.nodeType && module, Wc = Dt && Dt.exports === wi, Vn = Wc && hi.process, wr = (function() {
  try {
    var t = Dt && Dt.require && Dt.require("util").types;
    return t || Vn && Vn.binding && Vn.binding("util");
  } catch {
  }
})(), vr = wr && wr.isTypedArray, vi = vr ? Zc(vr) : Vc, Jc = Object.prototype, Qc = Jc.hasOwnProperty;
function bi(t, n) {
  var e = I(t), r = !e && Se(t), i = !e && !r && ce(t), o = !e && !r && !i && vi(t), a = e || r || i || o, s = a ? yc(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || Qc.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    On(l, u))) && s.push(l);
  return s;
}
function xi(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var jc = xi(Object.keys, Object), tf = Object.prototype, nf = tf.hasOwnProperty;
function ef(t) {
  if (!_i(t))
    return jc(t);
  var n = [];
  for (var e in Object(t))
    nf.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function Jt(t) {
  return kt(t) ? bi(t) : ef(t);
}
function rf(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var of = Object.prototype, af = of.hasOwnProperty;
function sf(t) {
  if (!nt(t))
    return rf(t);
  var n = _i(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !af.call(t, r)) || e.push(r);
  return e;
}
function uf(t) {
  return kt(t) ? bi(t, !0) : sf(t);
}
var lf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cf = /^\w*$/;
function Pe(t, n) {
  if (I(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || zn(t) ? !0 : cf.test(t) || !lf.test(t) || n != null && t in Object(n);
}
var Ut = wt(Object, "create");
function ff() {
  this.__data__ = Ut ? Ut(null) : {}, this.size = 0;
}
function hf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var df = "__lodash_hash_undefined__", pf = Object.prototype, gf = pf.hasOwnProperty;
function _f(t) {
  var n = this.__data__;
  if (Ut) {
    var e = n[t];
    return e === df ? void 0 : e;
  }
  return gf.call(n, t) ? n[t] : void 0;
}
var yf = Object.prototype, mf = yf.hasOwnProperty;
function wf(t) {
  var n = this.__data__;
  return Ut ? n[t] !== void 0 : mf.call(n, t);
}
var vf = "__lodash_hash_undefined__";
function bf(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Ut && n === void 0 ? vf : n, this;
}
function _t(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
_t.prototype.clear = ff;
_t.prototype.delete = hf;
_t.prototype.get = _f;
_t.prototype.has = wf;
_t.prototype.set = bf;
function xf() {
  this.__data__ = [], this.size = 0;
}
function Cn(t, n) {
  for (var e = t.length; e--; )
    if (In(t[e][0], n))
      return e;
  return -1;
}
var Mf = Array.prototype, $f = Mf.splice;
function Af(t) {
  var n = this.__data__, e = Cn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : $f.call(n, e, 1), --this.size, !0;
}
function Tf(t) {
  var n = this.__data__, e = Cn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function Sf(t) {
  return Cn(this.__data__, t) > -1;
}
function Pf(t, n) {
  var e = this.__data__, r = Cn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function it(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = xf;
it.prototype.delete = Af;
it.prototype.get = Tf;
it.prototype.has = Sf;
it.prototype.set = Pf;
var Yt = wt(rt, "Map");
function Ef() {
  this.size = 0, this.__data__ = {
    hash: new _t(),
    map: new (Yt || it)(),
    string: new _t()
  };
}
function Nf(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Rn(t, n) {
  var e = t.__data__;
  return Nf(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function zf(t) {
  var n = Rn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function kf(t) {
  return Rn(this, t).get(t);
}
function Of(t) {
  return Rn(this, t).has(t);
}
function If(t, n) {
  var e = Rn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function ot(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = Ef;
ot.prototype.delete = zf;
ot.prototype.get = kf;
ot.prototype.has = Of;
ot.prototype.set = If;
var Cf = "Expected a function";
function Ee(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(Cf);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Ee.Cache || ot)(), e;
}
Ee.Cache = ot;
var Rf = 500;
function Ff(t) {
  var n = Ee(t, function(r) {
    return e.size === Rf && e.clear(), r;
  }), e = n.cache;
  return n;
}
var Df = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lf = /\\(\\)?/g, Hf = Ff(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(Df, function(e, r, i, o) {
    n.push(i ? o.replace(Lf, "$1") : r || e);
  }), n;
});
function Fn(t) {
  return t == null ? "" : pi(t);
}
function Dn(t, n) {
  return I(t) ? t : Pe(t, n) ? [t] : Hf(Fn(t));
}
function Qt(t) {
  if (typeof t == "string" || zn(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ne(t, n) {
  n = Dn(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[Qt(n[e++])];
  return e && e == r ? t : void 0;
}
function Bf(t, n, e) {
  var r = t == null ? void 0 : Ne(t, n);
  return r === void 0 ? e : r;
}
function ze(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var br = V ? V.isConcatSpreadable : void 0;
function qf(t) {
  return I(t) || Se(t) || !!(br && t && t[br]);
}
function Xf(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = qf), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? ze(i, s) : i[i.length] = s;
  }
  return i;
}
function Gf(t) {
  var n = t == null ? 0 : t.length;
  return n ? Xf(t) : [];
}
var Uf = xi(Object.getPrototypeOf, Object);
function Yf(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Kf(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, !n && e >= r ? t : Yf(t, n, e);
}
var Vf = "\\ud800-\\udfff", Zf = "\\u0300-\\u036f", Wf = "\\ufe20-\\ufe2f", Jf = "\\u20d0-\\u20ff", Qf = Zf + Wf + Jf, jf = "\\ufe0e\\ufe0f", th = "\\u200d", nh = RegExp("[" + th + Vf + Qf + jf + "]");
function Mi(t) {
  return nh.test(t);
}
function eh(t) {
  return t.split("");
}
var $i = "\\ud800-\\udfff", rh = "\\u0300-\\u036f", ih = "\\ufe20-\\ufe2f", oh = "\\u20d0-\\u20ff", ah = rh + ih + oh, sh = "\\ufe0e\\ufe0f", uh = "[" + $i + "]", fe = "[" + ah + "]", he = "\\ud83c[\\udffb-\\udfff]", lh = "(?:" + fe + "|" + he + ")", Ai = "[^" + $i + "]", Ti = "(?:\\ud83c[\\udde6-\\uddff]){2}", Si = "[\\ud800-\\udbff][\\udc00-\\udfff]", ch = "\\u200d", Pi = lh + "?", Ei = "[" + sh + "]?", fh = "(?:" + ch + "(?:" + [Ai, Ti, Si].join("|") + ")" + Ei + Pi + ")*", hh = Ei + Pi + fh, dh = "(?:" + [Ai + fe + "?", fe, Ti, Si, uh].join("|") + ")", ph = RegExp(he + "(?=" + he + ")|" + dh + hh, "g");
function gh(t) {
  return t.match(ph) || [];
}
function _h(t) {
  return Mi(t) ? gh(t) : eh(t);
}
function yh(t) {
  return function(n) {
    n = Fn(n);
    var e = Mi(n) ? _h(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Kf(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var mh = yh("toUpperCase");
function wh(t) {
  return mh(Fn(t).toLowerCase());
}
function vh() {
  this.__data__ = new it(), this.size = 0;
}
function bh(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function xh(t) {
  return this.__data__.get(t);
}
function Mh(t) {
  return this.__data__.has(t);
}
var $h = 200;
function Ah(t, n) {
  var e = this.__data__;
  if (e instanceof it) {
    var r = e.__data__;
    if (!Yt || r.length < $h - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new ot(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function j(t) {
  var n = this.__data__ = new it(t);
  this.size = n.size;
}
j.prototype.clear = vh;
j.prototype.delete = bh;
j.prototype.get = xh;
j.prototype.has = Mh;
j.prototype.set = Ah;
function Th(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Ni() {
  return [];
}
var Sh = Object.prototype, Ph = Sh.propertyIsEnumerable, xr = Object.getOwnPropertySymbols, zi = xr ? function(t) {
  return t == null ? [] : (t = Object(t), Th(xr(t), function(n) {
    return Ph.call(t, n);
  }));
} : Ni, Eh = Object.getOwnPropertySymbols, Nh = Eh ? function(t) {
  for (var n = []; t; )
    ze(n, zi(t)), t = Uf(t);
  return n;
} : Ni;
function ki(t, n, e) {
  var r = n(t);
  return I(t) ? r : ze(r, e(t));
}
function Mr(t) {
  return ki(t, Jt, zi);
}
function zh(t) {
  return ki(t, uf, Nh);
}
var de = wt(rt, "DataView"), pe = wt(rt, "Promise"), ge = wt(rt, "Set"), $r = "[object Map]", kh = "[object Object]", Ar = "[object Promise]", Tr = "[object Set]", Sr = "[object WeakMap]", Pr = "[object DataView]", Oh = mt(de), Ih = mt(Yt), Ch = mt(pe), Rh = mt(ge), Fh = mt(le), Q = yt;
(de && Q(new de(new ArrayBuffer(1))) != Pr || Yt && Q(new Yt()) != $r || pe && Q(pe.resolve()) != Ar || ge && Q(new ge()) != Tr || le && Q(new le()) != Sr) && (Q = function(t) {
  var n = yt(t), e = n == kh ? t.constructor : void 0, r = e ? mt(e) : "";
  if (r)
    switch (r) {
      case Oh:
        return Pr;
      case Ih:
        return $r;
      case Ch:
        return Ar;
      case Rh:
        return Tr;
      case Fh:
        return Sr;
    }
  return n;
});
var Er = rt.Uint8Array, Dh = "__lodash_hash_undefined__";
function Lh(t) {
  return this.__data__.set(t, Dh), this;
}
function Hh(t) {
  return this.__data__.has(t);
}
function Kt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new ot(); ++n < e; )
    this.add(t[n]);
}
Kt.prototype.add = Kt.prototype.push = Lh;
Kt.prototype.has = Hh;
function Bh(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function Oi(t, n) {
  return t.has(n);
}
var qh = 1, Xh = 2;
function Ii(t, n, e, r, i, o) {
  var a = e & qh, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(n);
  if (l && c)
    return l == n && c == t;
  var f = -1, h = !0, g = e & Xh ? new Kt() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var d = t[f], p = n[f];
    if (r)
      var b = a ? r(p, d, f, n, t, o) : r(d, p, f, t, n, o);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!Bh(n, function(y, x) {
        if (!Oi(g, x) && (d === y || i(d, y, e, r, o)))
          return g.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === p || i(d, p, e, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), h;
}
function Ci(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Gh(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Uh = 1, Yh = 2, Kh = "[object Boolean]", Vh = "[object Date]", Zh = "[object Error]", Wh = "[object Map]", Jh = "[object Number]", Qh = "[object RegExp]", jh = "[object Set]", td = "[object String]", nd = "[object Symbol]", ed = "[object ArrayBuffer]", rd = "[object DataView]", Nr = V ? V.prototype : void 0, Zn = Nr ? Nr.valueOf : void 0;
function id(t, n, e, r, i, o, a) {
  switch (e) {
    case rd:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case ed:
      return !(t.byteLength != n.byteLength || !o(new Er(t), new Er(n)));
    case Kh:
    case Vh:
    case Jh:
      return In(+t, +n);
    case Zh:
      return t.name == n.name && t.message == n.message;
    case Qh:
    case td:
      return t == n + "";
    case Wh:
      var s = Ci;
    case jh:
      var u = r & Uh;
      if (s || (s = Gh), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Yh, a.set(t, n);
      var c = Ii(s(t), s(n), r, i, o, a);
      return a.delete(t), c;
    case nd:
      if (Zn)
        return Zn.call(t) == Zn.call(n);
  }
  return !1;
}
var od = 1, ad = Object.prototype, sd = ad.hasOwnProperty;
function ud(t, n, e, r, i, o) {
  var a = e & od, s = Mr(t), u = s.length, l = Mr(n), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in n : sd.call(n, h)))
      return !1;
  }
  var g = o.get(t), d = o.get(n);
  if (g && d)
    return g == n && d == t;
  var p = !0;
  o.set(t, n), o.set(n, t);
  for (var b = a; ++f < u; ) {
    h = s[f];
    var y = t[h], x = n[h];
    if (r)
      var A = a ? r(x, y, h, n, t, o) : r(y, x, h, t, n, o);
    if (!(A === void 0 ? y === x || i(y, x, e, r, o) : A)) {
      p = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (p && !b) {
    var _ = t.constructor, w = n.constructor;
    _ != w && "constructor" in t && "constructor" in n && !(typeof _ == "function" && _ instanceof _ && typeof w == "function" && w instanceof w) && (p = !1);
  }
  return o.delete(t), o.delete(n), p;
}
var ld = 1, zr = "[object Arguments]", kr = "[object Array]", sn = "[object Object]", cd = Object.prototype, Or = cd.hasOwnProperty;
function fd(t, n, e, r, i, o) {
  var a = I(t), s = I(n), u = a ? kr : Q(t), l = s ? kr : Q(n);
  u = u == zr ? sn : u, l = l == zr ? sn : l;
  var c = u == sn, f = l == sn, h = u == l;
  if (h && ce(t)) {
    if (!ce(n))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new j()), a || vi(t) ? Ii(t, n, e, r, i, o) : id(t, n, u, e, r, i, o);
  if (!(e & ld)) {
    var g = c && Or.call(t, "__wrapped__"), d = f && Or.call(n, "__wrapped__");
    if (g || d) {
      var p = g ? t.value() : t, b = d ? n.value() : n;
      return o || (o = new j()), i(p, b, e, r, o);
    }
  }
  return h ? (o || (o = new j()), ud(t, n, e, r, i, o)) : !1;
}
function ke(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !lt(t) && !lt(n) ? t !== t && n !== n : fd(t, n, e, r, ke, i);
}
var hd = 1, dd = 2;
function pd(t, n, e, r) {
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
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new j(), f;
      if (!(f === void 0 ? ke(l, u, hd | dd, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Ri(t) {
  return t === t && !nt(t);
}
function gd(t) {
  for (var n = Jt(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ri(i)];
  }
  return n;
}
function Fi(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function _d(t) {
  var n = gd(t);
  return n.length == 1 && n[0][2] ? Fi(n[0][0], n[0][1]) : function(e) {
    return e === t || pd(e, t, n);
  };
}
function yd(t, n) {
  return t != null && n in Object(t);
}
function Di(t, n, e) {
  n = Dn(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = Qt(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Te(i) && On(a, i) && (I(t) || Se(t)));
}
function md(t, n) {
  return t != null && Di(t, n, yd);
}
var wd = 1, vd = 2;
function bd(t, n) {
  return Pe(t) && Ri(n) ? Fi(Qt(t), n) : function(e) {
    var r = Bf(e, t);
    return r === void 0 && r === n ? md(e, t) : ke(n, r, wd | vd);
  };
}
function xd(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function Md(t) {
  return function(n) {
    return Ne(n, t);
  };
}
function $d(t) {
  return Pe(t) ? xd(Qt(t)) : Md(t);
}
function Li(t) {
  return typeof t == "function" ? t : t == null ? kn : typeof t == "object" ? I(t) ? bd(t[0], t[1]) : _d(t) : $d(t);
}
function Ad(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var Td = Ad();
function Sd(t, n) {
  return t && Td(t, n, Jt);
}
function Pd(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!kt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var Hi = Pd(Sd);
function Ed(t) {
  return lt(t) && kt(t);
}
var Nd = 200;
function zd(t, n, e, r) {
  var i = -1, o = oc, a = !0, s = t.length, u = [], l = n.length;
  if (!s)
    return u;
  n.length >= Nd && (o = Oi, a = !1, n = new Kt(n));
  t:
    for (; ++i < s; ) {
      var c = t[i], f = c;
      if (c = c !== 0 ? c : 0, a && f === f) {
        for (var h = l; h--; )
          if (n[h] === f)
            continue t;
        u.push(c);
      } else o(n, f, r) || u.push(c);
    }
  return u;
}
function kd(t) {
  return typeof t == "function" ? t : kn;
}
function dn(t, n) {
  var e = I(t) ? tc : Hi;
  return e(t, kd(n));
}
function Od(t, n) {
  return Wt(n, function(e) {
    return [e, t[e]];
  });
}
function Id(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var Cd = "[object Map]", Rd = "[object Set]";
function Fd(t) {
  return function(n) {
    var e = Q(n);
    return e == Cd ? Ci(n) : e == Rd ? Id(n) : Od(n, t(n));
  };
}
var Bi = Fd(Jt);
function Dd(t, n) {
  var e = -1, r = kt(t) ? Array(t.length) : [];
  return Hi(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function et(t, n) {
  var e = I(t) ? Wt : Dd;
  return e(t, Li(n));
}
var Ld = Object.prototype, Hd = Ld.hasOwnProperty;
function Bd(t, n) {
  return t != null && Hd.call(t, n);
}
function qi(t, n) {
  return t != null && Di(t, n, Bd);
}
function qd(t, n) {
  return Wt(n, function(e) {
    return t[e];
  });
}
function Xd(t) {
  return t == null ? [] : qd(t, Jt(t));
}
var Gd = "[object Boolean]";
function Ud(t) {
  return t === !0 || t === !1 || lt(t) && yt(t) == Gd;
}
function Yd(t, n, e, r) {
  if (!nt(t))
    return t;
  n = Dn(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Qt(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = nt(c) ? c : On(n[i + 1]) ? [] : {});
    }
    fc(s, u, l), s = s[u];
  }
  return t;
}
function Kd(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Ne(t, a);
    e(s, a) && Yd(o, Dn(a, t), s);
  }
  return o;
}
function Oe(t, n) {
  if (t == null)
    return {};
  var e = Wt(zh(t), function(r) {
    return [r];
  });
  return n = Li(n), Kd(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Vd = Math.floor, Zd = Math.random;
function Wd(t, n) {
  return t + Vd(Zd() * (n - t + 1));
}
var Jd = Math.ceil, Qd = Math.max;
function jd(t, n, e, r) {
  for (var i = -1, o = Qd(Jd((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function tp(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && gc(n, e, r) && (e = r = void 0), n = Yn(n), e === void 0 ? (e = n, n = 0) : e = Yn(e), r = r === void 0 ? n < e ? 1 : -1 : Yn(r), jd(n, e, r);
  };
}
var At = tp();
function np() {
  var t = arguments, n = Fn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function Xi(t) {
  var n = t.length;
  return n ? t[Wd(0, n - 1)] : void 0;
}
function ep(t) {
  return Xi(Xd(t));
}
function Gi(t) {
  var n = I(t) ? Xi : ep;
  return n(t);
}
var rp = dc(function(t, n) {
  return Ed(t) ? zd(t, n) : [];
});
const ip = (t, n, e = 12, r = 12) => {
  const i = K().domain([0, e]).range([0, t]), o = K().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return At((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = Gf(et(l, function(f) {
        return et(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, op = "_widget_18g36_1", ap = "_label_18g36_19", sp = "_lit_18g36_24", up = "_button_18g36_29", lp = "_symbol_18g36_29", cp = "_radio_18g36_29", fp = "_radiobutton_18g36_29", hp = "_selected_18g36_35", dp = "_toggle_18g36_35", pp = "_slider_18g36_44", gp = "_track_18g36_44", _p = "_track_overlay_18g36_48", yp = "_handle_18g36_55", m = {
  widget: op,
  label: ap,
  lit: sp,
  button: up,
  symbol: lp,
  radio: cp,
  radiobutton: fp,
  selected: hp,
  toggle: dp,
  slider: pp,
  track: gp,
  track_overlay: _p,
  handle: yp
}, Ln = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Ie = (t, n, e) => {
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
}, mp = (t = 1) => {
  const n = X();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, wp = (t = 1) => {
  const n = X(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, vp = (t = 1) => {
  const n = X();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, bp = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = X();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -e), r.lineTo(t * (e * n), t * -e), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -e), r.lineTo(-t * (e * n), t * -e), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, xp = (t = 1) => {
  const n = X(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, Mp = (t = 1) => {
  const n = X(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, $p = (t = 1) => {
  const n = X(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, Ap = (t = 1) => {
  var n = X(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -e, t * e), n.lineTo(t * -e, t * -e), n.lineTo(t * e, t * -e), n.closePath(), n.toString();
}, Tp = (t = 1) => {
  const n = X(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, _e = (t) => {
  switch (t) {
    case "play":
      return mp;
    case "forward":
      return wp;
    case "back":
      return vp;
    case "pause":
      return bp;
    case "reload":
      return xp;
    case "capture":
      return Mp;
    case "rewind":
      return $p;
    case "stop":
      return Ap;
    case "push":
      return Tp;
  }
}, Ce = () => {
  const t = "button";
  var n = Ln(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
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
      f = (f + 1) % c.length, l(), S(this.parentNode).select("." + m.symbol).attr("d", _e(c[f])(r * e));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + n).select("." + m.symbol).attr("d", _e(c[f])(r * e));
    }
  };
}, Sp = () => {
  const t = "slider", n = Nn(".3f");
  var e = Ln(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(y) {
  }, f = function(y) {
  }, h = [0, 1], g = 0, d = null, p = K().domain(h).range([0, r]).clamp(!0);
  const b = function(y, x, A = h) {
    const _ = y.select("#slider_" + e);
    p.domain(A), g = x, _.selectAll("." + m.handle).transition().attr("cx", p(x)), a && _.select("." + m.label).text(d + " = " + n(g)), c(), f();
  };
  return {
    type: t,
    scale: p,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? l : (l = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return c = y, this;
      c(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return f = y, this;
      f(y);
    },
    range: function(y) {
      return typeof y > "u" ? h : (h = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? g : (g = y, this);
    },
    reset: b,
    click: b
  };
}, Pp = () => {
  const t = "toggle";
  var n = Ln(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, u = 0;
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
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = S(this.parentNode);
      f.select("." + m.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(m.selected, u), s();
    },
    reset: function(f, h) {
      u = h;
      const g = f.select("#toggle_" + n);
      g.selectAll("." + m.handle).transition().attr("cx", u ? 2 * e : 0), g.classed(m.selected, u), s();
    }
  };
}, Ep = () => {
  const t = "radio";
  var n = Ln(), e = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, c = function(p) {
  }, f = [], h = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
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
    click: function(p, b) {
      h = b, S(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (y) => y == h), c();
    },
    reset: function(p, b) {
      h = b, p.select("#radio_" + n).selectAll("." + m.symbol).classed(m.selected, (y) => y == h), c();
    }
  };
}, Np = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", _e(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Ie(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, Ui = (t, n) => {
  const e = X();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, zp = (t, n) => {
  const e = Nn(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Ui(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const p = Qn(d, this)[0];
    t.value(a.invert(p)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
  }).call(
    ja().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, g = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? tn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -tn([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? tn([t.girth() / 2, t.knob()]) + 7 : -tn([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, kp = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", Ui(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Ie(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, Op = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = uo(a), u = K().domain([0, a - 1]).range([0, t.size()]), l = K().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(c).attr("class", m.widget + " " + m.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var g, d;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), g.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((b) => b == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const p = Ie(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(b, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), c;
}, un = (t, n) => {
  switch (t.type) {
    case "button":
      return Np(t);
    case "slider":
      return zp(t);
    case "radio":
      return Op(t);
    case "toggle":
      return kp(t);
  }
}, Ip = (t, n) => {
  const e = ip(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = S("#" + t).classed(n.id + " " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr(
    "width",
    n.display_type == "canvas" ? n.display_size.width : null
  ).attr(
    "height",
    n.display_type == "canvas" ? n.display_size.height : null
  ).attr(
    "viewBox",
    n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height
  ).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr(
    "viewBox",
    "0 0 " + n.controls_size.width + " " + n.controls_size.height
  ).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, T = {
  widgets: {
    // Main control buttons
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    // Sliders
    slider_size: 400,
    slider_gap: 1.2,
    slider_anchor: { x: 1, y: 7 },
    // Text labels
    // Radio buttons for changing user and topic numbers
    radio_anchor: { x: 2.8, y: 10.3 },
    radio_size: 140,
    radio_orientation: "horizontal",
    radio_item_gap: 1.2,
    // vertical gap
    radio_label_position: "right",
    radio_shape: "rect",
    // Toggles
    toggle_anchor: { x: 8.3, y: 10.3 },
    toggle_vertical_gap: 1.2,
    toggle_label_pos: "right"
  },
  simulation: {
    delay: 10
  }
}, $ = {
  dt: 1,
  // I think datetime, not used
  L: 100,
  // =length=width
  agentsize: 1,
  // define weights for the update function
  weight_similarity: 0.33,
  // for similarity between culture and frame
  weight_inherent_nv: 0.33,
  // for the inherent news value of a topic
  weight_network_nv: 0.33,
  // for the news value based on following
  // speed := number of steps per second
  speed: {
    range: [4, 20],
    default: 12
  },
  // (formerly similarity_threshold)
  likelihood_to_switch: {
    range: [0.2, 0.8],
    default: 0.4
  },
  // probability of forgetting a topic
  likelihood_to_forget: {
    range: [0, 0.08],
    default: 0.04
  },
  number_of_agents: {
    choices: [400, 800, 1600],
    default: 1
  },
  number_of_topics: {
    choices: [2, 5, 8],
    default: 1
  },
  // culture and frame are either uniform (false) or normal (true)
  culture_is_normal: {
    default: !0
  },
  frame_is_normal: {
    default: !1
  }
}, Re = (t) => et(Bi(t), (n) => {
  n[1].id = n[0], n[1].label = np(wh(n[0]), /_/g, " ");
}), Fe = (t) => et(Bi(t), (n) => n[1]), De = (t, n) => dn(t, (e, r) => e.widget = n[r]), Cp = (t) => Oe(t, (n) => qi(n, "range")), Rp = (t) => Oe(t, (n) => Ud(n.default)), Fp = (t) => Oe(t, (n) => qi(n, "choices"));
K().domain([0, 360]).range([0, 2 * Math.PI]);
K().range([0, 360]).domain([0, 2 * Math.PI]);
function Tt() {
  let t = 0, n = 0;
  for (; t === 0; ) t = Math.random();
  for (; n === 0; ) n = Math.random();
  let e = Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * n);
  return e = e / 10 + 0.5, e > 1 || e < 0 ? Tt() : e;
}
const Le = Cp($), He = Rp($), Be = Fp($);
Re(Le);
Re(He);
Re(Be);
const Yi = Fe(Le), Ki = Fe(He), Vi = Fe(Be), pn = et(
  Yi,
  (t) => Sp().id(t.id).label(t.label).range(t.range).value(t.default).size(T.widgets.slider_size)
), St = et(
  Ki,
  (t) => Pp().id(t.id).label(t.label).value(t.default).labelposition(T.widgets.toggle_label_pos)
), gn = et(
  Vi,
  (t) => Ep().choices(t.choices).id(t.id).value(t.default).orientation(T.widgets.radio_orientation).labelposition(T.widgets.radio_label_position)
);
De(Yi, pn);
De(Ki, St);
De(Vi, gn);
const ut = Ce().actions(["play", "pause"]), Hn = Ce().actions(["back"]), Bn = Ce().actions(["rewind"]), Dp = [ut, Hn, Bn], Lp = (t, n) => {
  ut.position(
    n.position(
      T.widgets.playbutton_anchor.x,
      T.widgets.playbutton_anchor.y
    )
  ).size(T.widgets.playbutton_size), Bn.position(
    n.position(
      T.widgets.backbutton_anchor.x,
      T.widgets.backbutton_anchor.y
    )
  ), Hn.position(
    n.position(
      T.widgets.resetbutton_anchor.x,
      T.widgets.resetbutton_anchor.y
    )
  );
  const e = n.position(
    T.widgets.slider_anchor.x,
    At(pn.length).map(
      (s) => T.widgets.slider_anchor.y + T.widgets.slider_gap * s
    )
  );
  pn.forEach((s, u) => s.position(e[u]));
  const r = At(St.length).map((s) => {
    const u = T.widgets.toggle_anchor.x, l = T.widgets.toggle_anchor.y + s * T.widgets.toggle_vertical_gap;
    return n.position(u, l);
  });
  St.forEach((s, u) => s.position(r[u]));
  const i = At(gn.length).map(
    (s) => n.position(
      T.widgets.radio_anchor.x,
      T.widgets.radio_anchor.y + s * T.widgets.radio_item_gap
    )
  );
  gn.forEach((s, u) => {
    s.position(i[u]).size(T.widgets.radio_size).shape(T.widgets.radio_shape);
  });
  const o = n.position(1, 10.4), a = n.position(1, 11.6);
  t.append("text").attr("x", o.x).attr("y", o.y).attr("class", "static-label").text("Agents:"), t.append("text").attr("x", a.x).attr("y", a.y).attr("class", "static-label").text("Topics:"), t.selectAll(null).data(pn).enter().append(un), t.selectAll(null).data(St).enter().append(un), t.selectAll(null).data(Dp).enter().append(un), t.selectAll(null).data(gn).enter().append(un);
}, Hp = (t) => {
  dn(Le, (n) => n.widget.reset(t, n.default)), dn(He, (n) => n.widget.reset(t, n.default)), dn(Be, (n) => n.widget.reset(t, n.default)), $.number_of_agents.widget.update();
}, st = $.L;
var zt = [], F = [];
const Bp = [
  "#FF6347",
  // Tomato
  "#4682B4",
  // SteelBlue
  "#32CD32",
  // LimeGreen
  "#FFD700",
  // Gold
  "#6A5ACD",
  // SlateBlue
  "#DA70D6",
  // Orchid
  "#20B2AA",
  // LightSeaGreen
  "#c28a1aff"
], qp = ["A", "B", "C", "D", "E", "F", "G", "H"], Zi = (t, n) => {
  n.forEach((e) => {
    e._incoming_links_count = 0;
  }), t.forEach((e) => {
    e.focussed_topic && e.focussed_topic._incoming_links_count++;
  }), n.forEach((e) => {
    e.network_news_val = e._incoming_links_count / t.length;
  });
}, Xp = () => {
  $.timer = {}, $.tick = 0;
  const t = $.number_of_topics.choices[$.number_of_topics.widget.value()], n = $.frame_is_normal.widget.value(), e = 0.05, i = st * (1 - 2 * e) / (t - 1);
  F = et(At(t), (s) => {
    let u;
    n === !1 ? u = Math.random() : u = Tt();
    let l = st * e + s * i;
    return {
      index: s,
      x: st * u,
      y: l,
      frame: u,
      initial_news_val: Math.random(),
      network_news_val: 0,
      // this is a dynamic parameter
      get size() {
        return (this.initial_news_val + t * 0.5 * this.network_news_val + 0.8) ** 2;
      },
      letter: qp[s],
      // Assign letter from alphabet
      color: Bp[s]
      // Assign color from list
    };
  });
  const o = $.number_of_agents.choices[$.number_of_agents.widget.value()], a = $.culture_is_normal.widget.value();
  zt = et(At(o), (s) => {
    let u;
    a === !1 ? u = Math.random() : u = Tt();
    const l = Math.floor(Math.random() * F.length);
    return {
      index: s,
      culture: u,
      x: st * u,
      // x pos depends on culture for sorted viz
      y: st * Math.random(),
      focussed_topic: F[l]
    };
  }), Zi(zt, F);
}, Gp = (t) => {
  const n = rp(F, t.focussed_topic);
  t.focussed_topic = Gi(n);
}, Up = () => {
  $.tick++, Zi(zt, F), zt.forEach((t) => {
    const n = t.focussed_topic;
    if (!n) {
      t.focussed_topic = Gi(F);
      return;
    }
    if ((1 - Math.abs(t.culture - n.frame)) * $.weight_similarity + n.network_news_val * $.weight_network_nv + n.initial_news_val * $.weight_inherent_nv < $.likelihood_to_switch.widget.value() && Gp(t), Math.random() < $.likelihood_to_forget.widget.value() && (t.focussed_topic = null), t.focussed_topic) {
      const o = F.length, a = st / o, s = t.focussed_topic.y, u = 1, l = Tt();
      let c;
      l < 0.5 ? c = s - Tt() * a : c = s + Tt() * a, c = Math.max(0, Math.min(st, c));
      const f = c - t.y;
      Math.abs(f) < u ? t.y = c : t.y += Math.sign(f) * u, t.y = Math.max(0, Math.min(st, t.y));
    }
  });
}, Yp = "_node_19yup_1", An = {
  node: Yp
}, Wi = $.L, R = K().domain([0, Wi]), H = K().domain([0, Wi]), Kp = (t, n) => {
  const e = n.display_size.width, r = n.display_size.height;
  R.range([0, e]), H.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  qt("blue", "red"), i.selectAll(null).data(zt).enter().append("circle").attr("class", An.node).attr("cx", (o) => R(o.x)).attr("cy", (o) => H(o.y)).attr("r", R($.agentsize / 2)).style("fill", function(o) {
    return o.focussed_topic.color;
  }).style("stroke", "black").style("stroke-width", 0.4), i.selectAll(null).data(F, (o) => o.index).enter().append("rect").attr("class", An.node).attr("x", (o) => R(o.x) - R(o.size / 2)).attr("y", (o) => H(o.y) - H(o.size / 2)).attr("width", (o) => R(o.size)).attr("height", (o) => H(o.size)).style("fill", function(o) {
    return o.color;
  }).style("stroke", "black").style("stroke-width", function(o) {
    return 0.5 + o.initial_news_val * 2;
  }), i.selectAll(null).data(F, (o) => o.index).enter().append("text").attr("class", "topic-label").attr("x", (o) => R(o.x)).attr("y", (o) => H(o.y)).attr("dy", ".35em").style("text-anchor", "middle").style("font-size", "12px").style("fill", "black").style("stroke", "black").style("stroke-width", "0.7px").style("paint-ordering", "stroke").style("pointer-events", "none").text((o) => o.letter);
}, Vp = (t, n) => {
  t.selectAll("circle." + An.node).data(zt, (e) => e.index).attr("cx", (e) => R(e.x)).attr("cy", (e) => H(e.y)).style("fill", (e) => e.focussed_topic ? e.focussed_topic.color : "#888888"), t.selectAll("rect." + An.node).data(F, (e) => e.index).attr("x", (e) => R(e.x) - R(e.size / 2)).attr("y", (e) => H(e.y) - H(e.size / 2)).attr("width", (e) => R(e.size)).attr("height", (e) => H(e.size)), t.selectAll(".topic-label").data(F, (e) => e.index).attr("x", (e) => R(e.x)).attr("y", (e) => H(e.y));
};
let Ir = 0;
function Zp(t, n) {
  const e = performance.now(), r = 1e3 / $.speed.widget.value(), i = e - Ir;
  i >= r && (Ir = e - i % r, Up(), Vp(t));
}
function bt(t, n) {
  Xp(), Kp(t, n);
}
var Cr = {};
const Wp = (t, n) => {
  ut.value() == 1 ? Cr = zs(
    () => Zp(t),
    T.simulation.delay
  ) : Cr.stop();
}, Jp = (t, n, e) => {
  Bn.update(() => Hp(n)), ut.update(() => Wp(t)), Hn.update(() => bt(t, e)), $.number_of_agents.widget.update(() => bt(t, e)), $.number_of_topics.widget.update(() => bt(t, e)), St[0].update(() => bt(t, e)), St[1].update(() => bt(t, e));
}, Qp = {
  name: "@explorables/explorable_template",
  title: "Social Issue Emergence",
  subtitle: "The emergence of topics in a social network",
  description: "An agent-based model for mimicking the following of topics in a social network",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function jp(t, n = Ji) {
  const e = Ip(t, n), r = e.display, i = e.controls, o = e.grid;
  return Lp(i, o), Jp(r, i, n), bt(r, n), {
    halt() {
      ut.value() === 1 && ut.press(i);
    },
    reset() {
      ut.value() === 1 && ut.press(i), Bn.press(i), Hn.press(i);
    },
    config: n,
    meta: Qp
  };
}
export {
  Ji as config,
  jp as default,
  jp as load,
  Qp as meta
};
