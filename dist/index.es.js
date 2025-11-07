(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const ji = {
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
function se(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function to(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Fr(t) {
  let e, n, r;
  t.length !== 2 ? (e = se, n = (s, u) => se(t(s), u), r = (s, u) => t(s) - u) : (e = t === se || t === to ? t : eo, n = t, r = t);
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
function eo() {
  return 0;
}
function no(t) {
  return t === null ? NaN : +t;
}
const ro = Fr(se), io = ro.right;
Fr(no).center;
const oo = Math.sqrt(50), ao = Math.sqrt(10), so = Math.sqrt(2);
function pe(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= oo ? 10 : o >= ao ? 5 : o >= so ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(e * l), s / l < t && ++s, u / l > e && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(e / l), s * l < t && ++s, u * l > e && --u), u < s && 0.5 <= n && n < 2 ? pe(t, e, n * 2) : [s, u, l];
}
function uo(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? pe(e, t, n) : pe(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Ze(t, e, n) {
  return e = +e, t = +t, n = +n, pe(t, e, n)[2];
}
function lo(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Ze(e, t, n) : Ze(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function jt(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function co(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
var fo = { value: () => {
} };
function yn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ue(n);
}
function ue(t) {
  this._ = t;
}
function ho(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ue.prototype = yn.prototype = {
  constructor: ue,
  on: function(t, e) {
    var n = this._, r = ho(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = po(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = Xn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Xn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new ue(t);
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
function po(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Xn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = fo, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var We = "http://www.w3.org/1999/xhtml";
const Gn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: We,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ae(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Gn.hasOwnProperty(e) ? { space: Gn[e], local: t } : t;
}
function go(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === We && e.documentElement.namespaceURI === We ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function _o(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Lr(t) {
  var e = Ae(t);
  return (e.local ? _o : go)(e);
}
function yo() {
}
function mn(t) {
  return t == null ? yo : function() {
    return this.querySelector(t);
  };
}
function mo(t) {
  typeof t != "function" && (t = mn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new I(r, this._parents);
}
function wo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function vo() {
  return [];
}
function Dr(t) {
  return t == null ? vo : function() {
    return this.querySelectorAll(t);
  };
}
function bo(t) {
  return function() {
    return wo(t.apply(this, arguments));
  };
}
function xo(t) {
  typeof t == "function" ? t = bo(t) : t = Dr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new I(r, i);
}
function Hr(t) {
  return function() {
    return this.matches(t);
  };
}
function Br(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Mo = Array.prototype.find;
function $o(t) {
  return function() {
    return Mo.call(this.children, t);
  };
}
function Ao() {
  return this.firstElementChild;
}
function To(t) {
  return this.select(t == null ? Ao : $o(typeof t == "function" ? t : Br(t)));
}
var So = Array.prototype.filter;
function Po() {
  return Array.from(this.children);
}
function Eo(t) {
  return function() {
    return So.call(this.children, t);
  };
}
function No(t) {
  return this.selectAll(t == null ? Po : Eo(typeof t == "function" ? t : Br(t)));
}
function zo(t) {
  typeof t != "function" && (t = Hr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new I(r, this._parents);
}
function qr(t) {
  return new Array(t.length);
}
function ko() {
  return new I(this._enter || this._groups.map(qr), this._parents);
}
function ge(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
ge.prototype = {
  constructor: ge,
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
function Oo(t) {
  return function() {
    return t;
  };
}
function Io(t, e, n, r, i, o) {
  for (var a = 0, s, u = e.length, l = o.length; a < l; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new ge(t, o[a]);
  for (; a < u; ++a)
    (s = e[a]) && (i[a] = s);
}
function Co(t, e, n, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = e.length, f = o.length, h = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = e[s]) && (h[s] = g = a.call(u, u.__data__, s, e) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : n[s] = new ge(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = e[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Ro(t) {
  return t.__data__;
}
function Fo(t, e) {
  if (!arguments.length) return Array.from(this, Ro);
  var n = e ? Co : Io, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Oo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, g = Lo(t.call(c, c && c.__data__, l, r)), d = g.length, p = s[l] = new Array(d), b = a[l] = new Array(d), y = u[l] = new Array(h);
    n(c, f, p, b, y, g, e);
    for (var x = 0, A = 0, _, w; x < d; ++x)
      if (_ = p[x]) {
        for (x >= A && (A = x + 1); !(w = b[A]) && ++A < d; ) ;
        _._next = w || null;
      }
  }
  return a = new I(a, r), a._enter = s, a._exit = u, a;
}
function Lo(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Do() {
  return new I(this._exit || this._groups.map(qr), this._parents);
}
function Ho(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function Bo(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = n[u], c = r[u], f = l.length, h = s[u] = new Array(f), g, d = 0; d < f; ++d)
      (g = l[d] || c[d]) && (h[d] = g);
  for (; u < i; ++u)
    s[u] = n[u];
  return new I(s, this._parents);
}
function qo() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Xo(t) {
  t || (t = Go);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(e);
  }
  return new I(i, this._parents).order();
}
function Go(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Uo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Yo() {
  return Array.from(this);
}
function Ko() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Vo() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Zo() {
  return !this.node();
}
function Wo(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Jo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Qo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function jo(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ta(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function ea(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function na(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function ra(t, e) {
  var n = Ae(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Qo : Jo : typeof e == "function" ? n.local ? na : ea : n.local ? ta : jo)(n, e));
}
function Xr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ia(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function oa(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function aa(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function sa(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? ia : typeof e == "function" ? aa : oa)(t, e, n ?? "")) : Et(this.node(), t);
}
function Et(t, e) {
  return t.style.getPropertyValue(e) || Xr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function ua(t) {
  return function() {
    delete this[t];
  };
}
function la(t, e) {
  return function() {
    this[t] = e;
  };
}
function ca(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function fa(t, e) {
  return arguments.length > 1 ? this.each((e == null ? ua : typeof e == "function" ? ca : la)(t, e)) : this.node()[t];
}
function Gr(t) {
  return t.trim().split(/^|\s+/);
}
function wn(t) {
  return t.classList || new Ur(t);
}
function Ur(t) {
  this._node = t, this._names = Gr(t.getAttribute("class") || "");
}
Ur.prototype = {
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
function Yr(t, e) {
  for (var n = wn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Kr(t, e) {
  for (var n = wn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function ha(t) {
  return function() {
    Yr(this, t);
  };
}
function da(t) {
  return function() {
    Kr(this, t);
  };
}
function pa(t, e) {
  return function() {
    (e.apply(this, arguments) ? Yr : Kr)(this, t);
  };
}
function ga(t, e) {
  var n = Gr(t + "");
  if (arguments.length < 2) {
    for (var r = wn(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? pa : e ? ha : da)(n, e));
}
function _a() {
  this.textContent = "";
}
function ya(t) {
  return function() {
    this.textContent = t;
  };
}
function ma(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function wa(t) {
  return arguments.length ? this.each(t == null ? _a : (typeof t == "function" ? ma : ya)(t)) : this.node().textContent;
}
function va() {
  this.innerHTML = "";
}
function ba(t) {
  return function() {
    this.innerHTML = t;
  };
}
function xa(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ma(t) {
  return arguments.length ? this.each(t == null ? va : (typeof t == "function" ? xa : ba)(t)) : this.node().innerHTML;
}
function $a() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Aa() {
  return this.each($a);
}
function Ta() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Sa() {
  return this.each(Ta);
}
function Pa(t) {
  var e = typeof t == "function" ? t : Lr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Ea() {
  return null;
}
function Na(t, e) {
  var n = typeof t == "function" ? t : Lr(t), r = e == null ? Ea : typeof e == "function" ? e : mn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function za() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ka() {
  return this.each(za);
}
function Oa() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ia() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ca(t) {
  return this.select(t ? Ia : Oa);
}
function Ra(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Fa(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function La(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Da(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Ha(t, e, n) {
  return function() {
    var r = this.__on, i, o = Fa(e);
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
function Ba(t, e, n) {
  var r = La(t + ""), i, o = r.length, a;
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
  for (s = e ? Ha : Da, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function Vr(t, e, n) {
  var r = Xr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function qa(t, e) {
  return function() {
    return Vr(this, t, e);
  };
}
function Xa(t, e) {
  return function() {
    return Vr(this, t, e.apply(this, arguments));
  };
}
function Ga(t, e) {
  return this.each((typeof e == "function" ? Xa : qa)(t, e));
}
function* Ua() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Zr = [null];
function I(t, e) {
  this._groups = t, this._parents = e;
}
function Kt() {
  return new I([[document.documentElement]], Zr);
}
function Ya() {
  return this;
}
I.prototype = Kt.prototype = {
  constructor: I,
  select: mo,
  selectAll: xo,
  selectChild: To,
  selectChildren: No,
  filter: zo,
  data: Fo,
  enter: ko,
  exit: Do,
  join: Ho,
  merge: Bo,
  selection: Ya,
  order: qo,
  sort: Xo,
  call: Uo,
  nodes: Yo,
  node: Ko,
  size: Vo,
  empty: Zo,
  each: Wo,
  attr: ra,
  style: sa,
  property: fa,
  classed: ga,
  text: wa,
  html: Ma,
  raise: Aa,
  lower: Sa,
  append: Pa,
  insert: Na,
  remove: ka,
  clone: Ca,
  datum: Ra,
  on: Ba,
  dispatch: Ga,
  [Symbol.iterator]: Ua
};
function S(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], Zr);
}
function Ka(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Je(t, e) {
  if (t = Ka(t), e === void 0 && (e = t.currentTarget), e) {
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
const Va = { passive: !1 }, Dt = { capture: !0, passive: !1 };
function qe(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Za(t) {
  var e = t.document.documentElement, n = S(t).on("dragstart.drag", At, Dt);
  "onselectstart" in e ? n.on("selectstart.drag", At, Dt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Wa(t, e) {
  var n = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  e && (r.on("click.drag", At, Dt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const te = (t) => () => t;
function Qe(t, {
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
Qe.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Ja(t) {
  return !t.ctrlKey && !t.button;
}
function Qa() {
  return this.parentNode;
}
function ja(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function ts() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function es() {
  var t = Ja, e = Qa, n = ja, r = ts, i = {}, o = yn("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(_) {
    _.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", y, Va).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(_, w) {
    if (!(c || !t.call(this, _, w))) {
      var P = A(this, e.call(this, _, w), _, w, "mouse");
      P && (S(_.view).on("mousemove.drag", d, Dt).on("mouseup.drag", p, Dt), Za(_.view), qe(_), l = !1, s = _.clientX, u = _.clientY, P("start", _));
    }
  }
  function d(_) {
    if (At(_), !l) {
      var w = _.clientX - s, P = _.clientY - u;
      l = w * w + P * P > f;
    }
    i.mouse("drag", _);
  }
  function p(_) {
    S(_.view).on("mousemove.drag mouseup.drag", null), Wa(_.view, l), At(_), i.mouse("end", _);
  }
  function b(_, w) {
    if (t.call(this, _, w)) {
      var P = _.changedTouches, E = e.call(this, _, w), N = P.length, G, W;
      for (G = 0; G < N; ++G)
        (W = A(this, E, _, w, P[G].identifier, P[G])) && (qe(_), W("start", _, P[G]));
    }
  }
  function y(_) {
    var w = _.changedTouches, P = w.length, E, N;
    for (E = 0; E < P; ++E)
      (N = i[w[E].identifier]) && (At(_), N("drag", _, w[E]));
  }
  function x(_) {
    var w = _.changedTouches, P = w.length, E, N;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), E = 0; E < P; ++E)
      (N = i[w[E].identifier]) && (qe(_), N("end", _, w[E]));
  }
  function A(_, w, P, E, N, G) {
    var W = o.copy(), v = Je(G || P, w), U, z, L;
    if ((L = n.call(_, new Qe("beforestart", {
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
      return U = L.x - v[0] || 0, z = L.y - v[1] || 0, function Qt(at, ft, xt) {
        var R = v, Be;
        switch (at) {
          case "start":
            i[N] = Qt, Be = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            v = Je(xt || ft, w), Be = a;
            break;
        }
        W.call(
          at,
          _,
          new Qe(at, {
            sourceEvent: ft,
            subject: L,
            target: h,
            identifier: N,
            active: Be,
            x: v[0] + U,
            y: v[1] + z,
            dx: v[0] - R[0],
            dy: v[1] - R[1],
            dispatch: W
          }),
          E
        );
      };
  }
  return h.filter = function(_) {
    return arguments.length ? (t = typeof _ == "function" ? _ : te(!!_), h) : t;
  }, h.container = function(_) {
    return arguments.length ? (e = typeof _ == "function" ? _ : te(_), h) : e;
  }, h.subject = function(_) {
    return arguments.length ? (n = typeof _ == "function" ? _ : te(_), h) : n;
  }, h.touchable = function(_) {
    return arguments.length ? (r = typeof _ == "function" ? _ : te(!!_), h) : r;
  }, h.on = function() {
    var _ = o.on.apply(o, arguments);
    return _ === o ? h : _;
  }, h.clickDistance = function(_) {
    return arguments.length ? (f = (_ = +_) * _, h) : Math.sqrt(f);
  }, h;
}
function vn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Wr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Vt() {
}
var Ht = 0.7, _e = 1 / Ht, Tt = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ns = /^#([0-9a-f]{3,8})$/, rs = new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`), is = new RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), os = new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${Bt}\\)$`), as = new RegExp(`^rgba\\(${Y},${Y},${Y},${Bt}\\)$`), ss = new RegExp(`^hsl\\(${Bt},${Y},${Y}\\)$`), us = new RegExp(`^hsla\\(${Bt},${Y},${Y},${Bt}\\)$`), Un = {
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
vn(Vt, _t, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Yn,
  // Deprecated! Use color.formatHex.
  formatHex: Yn,
  formatHex8: ls,
  formatHsl: cs,
  formatRgb: Kn,
  toString: Kn
});
function Yn() {
  return this.rgb().formatHex();
}
function ls() {
  return this.rgb().formatHex8();
}
function cs() {
  return Jr(this).formatHsl();
}
function Kn() {
  return this.rgb().formatRgb();
}
function _t(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = ns.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Vn(e) : n === 3 ? new O(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ee(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ee(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = rs.exec(t)) ? new O(e[1], e[2], e[3], 1) : (e = is.exec(t)) ? new O(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = os.exec(t)) ? ee(e[1], e[2], e[3], e[4]) : (e = as.exec(t)) ? ee(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ss.exec(t)) ? Jn(e[1], e[2] / 100, e[3] / 100, 1) : (e = us.exec(t)) ? Jn(e[1], e[2] / 100, e[3] / 100, e[4]) : Un.hasOwnProperty(t) ? Vn(Un[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function Vn(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ee(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new O(t, e, n, r);
}
function fs(t) {
  return t instanceof Vt || (t = _t(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function je(t, e, n, r) {
  return arguments.length === 1 ? fs(t) : new O(t, e, n, r ?? 1);
}
function O(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
vn(O, je, Wr(Vt, {
  brighter(t) {
    return t = t == null ? _e : Math.pow(_e, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ht : Math.pow(Ht, t), new O(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new O(pt(this.r), pt(this.g), pt(this.b), ye(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Zn,
  // Deprecated! Use color.formatHex.
  formatHex: Zn,
  formatHex8: hs,
  formatRgb: Wn,
  toString: Wn
}));
function Zn() {
  return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}`;
}
function hs() {
  return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}${dt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wn() {
  const t = ye(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${pt(this.r)}, ${pt(this.g)}, ${pt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ye(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function pt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function dt(t) {
  return t = pt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Jn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new B(t, e, n, r);
}
function Jr(t) {
  if (t instanceof B) return new B(t.h, t.s, t.l, t.opacity);
  if (t instanceof Vt || (t = _t(t)), !t) return new B();
  if (t instanceof B) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new B(a, s, u, t.opacity);
}
function ds(t, e, n, r) {
  return arguments.length === 1 ? Jr(t) : new B(t, e, n, r ?? 1);
}
function B(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
vn(B, ds, Wr(Vt, {
  brighter(t) {
    return t = t == null ? _e : Math.pow(_e, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ht : Math.pow(Ht, t), new B(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new O(
      Xe(t >= 240 ? t - 240 : t + 120, i, r),
      Xe(t, i, r),
      Xe(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new B(Qn(this.h), ne(this.s), ne(this.l), ye(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ye(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Qn(this.h)}, ${ne(this.s) * 100}%, ${ne(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Qn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ne(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Xe(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const bn = (t) => () => t;
function ps(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function gs(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function _s(t) {
  return (t = +t) == 1 ? Qr : function(e, n) {
    return n - e ? gs(e, n, t) : bn(isNaN(e) ? n : e);
  };
}
function Qr(t, e) {
  var n = e - t;
  return n ? ps(t, n) : bn(isNaN(t) ? e : t);
}
const me = (function t(e) {
  var n = _s(e);
  function r(i, o) {
    var a = n((i = je(i)).r, (o = je(o)).r), s = n(i.g, o.g), u = n(i.b, o.b), l = Qr(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function ys(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function ms(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function ws(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = xn(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function vs(t, e) {
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
function bs(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = xn(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var tn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ge = new RegExp(tn.source, "g");
function xs(t) {
  return function() {
    return t;
  };
}
function Ms(t) {
  return function(e) {
    return t(e) + "";
  };
}
function jr(t, e) {
  var n = tn.lastIndex = Ge.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", e = e + ""; (r = tn.exec(t)) && (i = Ge.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: D(r, i) })), n = Ge.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Ms(u[0].x) : xs(e) : (e = u.length, function(l) {
    for (var c = 0, f; c < e; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function xn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? bn(e) : (n === "number" ? D : n === "string" ? (r = _t(e)) ? (e = r, me) : jr : e instanceof _t ? me : e instanceof Date ? vs : ms(e) ? ys : Array.isArray(e) ? ws : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? bs : D)(t, e);
}
function $s(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var jn = 180 / Math.PI, en = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ti(t, e, n, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (u = t * n + e * r) && (n -= t * u, r -= e * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), t * r < e * n && (t = -t, e = -e, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * jn,
    skewX: Math.atan(u) * jn,
    scaleX: a,
    scaleY: s
  };
}
var re;
function As(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? en : ti(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ts(t) {
  return t == null || (re || (re = document.createElementNS("http://www.w3.org/2000/svg", "g")), re.setAttribute("transform", t), !(t = re.transform.baseVal.consolidate())) ? en : (t = t.matrix, ti(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ei(t, e, n, r) {
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
      for (var d = -1, p = h.length, b; ++d < p; ) f[(b = h[d]).i] = b.x(g);
      return f.join("");
    };
  };
}
var Ss = ei(As, "px, ", "px)", "deg)"), Ps = ei(Ts, ", ", ")", ")"), Nt = 0, Ct = 0, Ot = 0, ni = 1e3, we, Rt, ve = 0, yt = 0, Te = 0, qt = typeof performance == "object" && performance.now ? performance : Date, ri = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Se() {
  return yt || (ri(Es), yt = qt.now() + Te);
}
function Es() {
  yt = 0;
}
function Xt() {
  this._call = this._time = this._next = null;
}
Xt.prototype = ii.prototype = {
  constructor: Xt,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Se() : +n) + (e == null ? 0 : +e), !this._next && Rt !== this && (Rt ? Rt._next = this : we = this, Rt = this), this._call = t, this._time = n, nn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, nn());
  }
};
function ii(t, e, n) {
  var r = new Xt();
  return r.restart(t, e, n), r;
}
function Ns() {
  Se(), ++Nt;
  for (var t = we, e; t; )
    (e = yt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Nt;
}
function tr() {
  yt = (ve = qt.now()) + Te, Nt = Ct = 0;
  try {
    Ns();
  } finally {
    Nt = 0, ks(), yt = 0;
  }
}
function zs() {
  var t = qt.now(), e = t - ve;
  e > ni && (Te -= e, ve = t);
}
function ks() {
  for (var t, e = we, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : we = n);
  Rt = t, nn(r);
}
function nn(t) {
  if (!Nt) {
    Ct && (Ct = clearTimeout(Ct));
    var e = t - yt;
    e > 24 ? (t < 1 / 0 && (Ct = setTimeout(tr, t - qt.now() - Te)), Ot && (Ot = clearInterval(Ot))) : (Ot || (ve = qt.now(), Ot = setInterval(zs, ni)), Nt = 1, ri(tr));
  }
}
function er(t, e, n) {
  var r = new Xt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Os(t, e, n) {
  var r = new Xt(), i = e;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Se() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, e, n), r;
}
var Is = yn("start", "end", "cancel", "interrupt"), Cs = [], oi = 0, nr = 1, rn = 2, le = 3, rr = 4, on = 5, ce = 6;
function Pe(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Rs(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Is,
    tween: Cs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: oi
  });
}
function Mn(t, e) {
  var n = q(t, e);
  if (n.state > oi) throw new Error("too late; already scheduled");
  return n;
}
function Z(t, e) {
  var n = q(t, e);
  if (n.state > le) throw new Error("too late; already running");
  return n;
}
function q(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Rs(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = ii(o, 0, n.time);
  function o(l) {
    n.state = nr, n.timer.restart(a, n.delay, n.time), n.delay <= l && a(l - n.delay);
  }
  function a(l) {
    var c, f, h, g;
    if (n.state !== nr) return u();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === le) return er(a);
        g.state === rr ? (g.state = ce, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[c]) : +c < e && (g.state = ce, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[c]);
      }
    if (er(function() {
      n.state === le && (n.state = rr, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = rn, n.on.call("start", t, t.__data__, n.index, n.group), n.state === rn) {
      for (n.state = le, i = new Array(h = n.tween.length), c = 0, f = -1; c < h; ++c)
        (g = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = g);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = on, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    n.state === on && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = ce, n.timer.stop(), delete r[e];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Fs(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > rn && r.state < on, r.state = ce, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function Ls(t) {
  return this.each(function() {
    Fs(this, t);
  });
}
function Ds(t, e) {
  var n, r;
  return function() {
    var i = Z(this, t), o = i.tween;
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
function Hs(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = Z(this, t), a = o.tween;
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
function Bs(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = q(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Ds : Hs)(n, t, e));
}
function $n(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Z(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[e];
  };
}
function ai(t, e) {
  var n;
  return (typeof e == "number" ? D : e instanceof _t ? me : (n = _t(e)) ? (e = n, me) : jr)(t, e);
}
function qs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Gs(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Us(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Ys(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function Ks(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function Vs(t, e) {
  var n = Ae(t), r = n === "transform" ? Ps : ai;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Ks : Ys)(n, r, $n(this, "attr." + t, e)) : e == null ? (n.local ? Xs : qs)(n) : (n.local ? Us : Gs)(n, r, e));
}
function Zs(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Ws(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Js(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Ws(t, o)), n;
  }
  return i._value = e, i;
}
function Qs(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Zs(t, o)), n;
  }
  return i._value = e, i;
}
function js(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ae(t);
  return this.tween(n, (r.local ? Js : Qs)(r, e));
}
function tu(t, e) {
  return function() {
    Mn(this, t).delay = +e.apply(this, arguments);
  };
}
function eu(t, e) {
  return e = +e, function() {
    Mn(this, t).delay = e;
  };
}
function nu(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? tu : eu)(e, t)) : q(this.node(), e).delay;
}
function ru(t, e) {
  return function() {
    Z(this, t).duration = +e.apply(this, arguments);
  };
}
function iu(t, e) {
  return e = +e, function() {
    Z(this, t).duration = e;
  };
}
function ou(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? ru : iu)(e, t)) : q(this.node(), e).duration;
}
function au(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Z(this, t).ease = e;
  };
}
function su(t) {
  var e = this._id;
  return arguments.length ? this.each(au(e, t)) : q(this.node(), e).ease;
}
function uu(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Z(this, t).ease = n;
  };
}
function lu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(uu(this._id, t));
}
function cu(t) {
  typeof t != "function" && (t = Hr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new tt(r, this._parents, this._name, this._id);
}
function fu(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = e[s], l = n[s], c = u.length, f = a[s] = new Array(c), h, g = 0; g < c; ++g)
      (h = u[g] || l[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = e[s];
  return new tt(a, this._parents, this._name, this._id);
}
function hu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function du(t, e, n) {
  var r, i, o = hu(e) ? Mn : Z;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function pu(t, e) {
  var n = this._id;
  return arguments.length < 2 ? q(this.node(), n).on.on(t) : this.each(du(n, t, e));
}
function gu(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function _u() {
  return this.on("end.remove", gu(this._id));
}
function yu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = mn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, Pe(l[h], e, n, h, l, q(c, n)));
  return new tt(o, this._parents, e, n);
}
function mu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Dr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), g, d = q(c, n), p = 0, b = h.length; p < b; ++p)
          (g = h[p]) && Pe(g, e, n, p, h, d);
        o.push(h), a.push(c);
      }
  return new tt(o, a, e, n);
}
var wu = Kt.prototype.constructor;
function vu() {
  return new wu(this._groups, this._parents);
}
function bu(t, e) {
  var n, r, i;
  return function() {
    var o = Et(this, t), a = (this.style.removeProperty(t), Et(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function si(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function xu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = Et(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Mu(t, e, n) {
  var r, i, o;
  return function() {
    var a = Et(this, t), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Et(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s));
  };
}
function $u(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var u = Z(this, t), l = u.on, c = u.value[o] == null ? s || (s = si(e)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(a, i = c), u.on = r;
  };
}
function Au(t, e, n) {
  var r = (t += "") == "transform" ? Ss : ai;
  return e == null ? this.styleTween(t, bu(t, r)).on("end.style." + t, si(t)) : typeof e == "function" ? this.styleTween(t, Mu(t, r, $n(this, "style." + t, e))).each($u(this._id, t)) : this.styleTween(t, xu(t, r, e), n).on("end.style." + t, null);
}
function Tu(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Su(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Tu(t, a, n)), r;
  }
  return o._value = e, o;
}
function Pu(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Su(t, e, n ?? ""));
}
function Eu(t) {
  return function() {
    this.textContent = t;
  };
}
function Nu(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function zu(t) {
  return this.tween("text", typeof t == "function" ? Nu($n(this, "text", t)) : Eu(t == null ? "" : t + ""));
}
function ku(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Ou(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && ku(i)), e;
  }
  return r._value = t, r;
}
function Iu(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Ou(t));
}
function Cu() {
  for (var t = this._name, e = this._id, n = ui(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = q(u, e);
        Pe(u, t, n, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new tt(r, this._parents, t, n);
}
function Ru() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var l = Z(this, r), c = l.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(u)), l.on = e;
    }), i === 0 && o();
  });
}
var Fu = 0;
function tt(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ui() {
  return ++Fu;
}
var J = Kt.prototype;
tt.prototype = {
  constructor: tt,
  select: yu,
  selectAll: mu,
  selectChild: J.selectChild,
  selectChildren: J.selectChildren,
  filter: cu,
  merge: fu,
  selection: vu,
  transition: Cu,
  call: J.call,
  nodes: J.nodes,
  node: J.node,
  size: J.size,
  empty: J.empty,
  each: J.each,
  on: pu,
  attr: Vs,
  attrTween: js,
  style: Au,
  styleTween: Pu,
  text: zu,
  textTween: Iu,
  remove: _u,
  tween: Bs,
  delay: nu,
  duration: ou,
  ease: su,
  easeVarying: lu,
  end: Ru,
  [Symbol.iterator]: J[Symbol.iterator]
};
function Lu(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Du = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Lu
};
function Hu(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Bu(t) {
  var e, n;
  t instanceof tt ? (e = t._id, t = t._name) : (e = ui(), (n = Du).time = Se(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Pe(u, t, e, l, a, n || Hu(u, e));
  return new tt(r, this._parents, t, e);
}
Kt.prototype.interrupt = Ls;
Kt.prototype.transition = Bu;
const an = Math.PI, sn = 2 * an, ht = 1e-6, qu = sn - ht;
function li(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Xu(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return li;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class ci {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? li : Xu(e);
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
    else if (h > ht) if (!(Math.abs(f * u - l * c) > ht) || !o)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let g = r - a, d = i - s, p = u * u + l * l, b = g * g + d * d, y = Math.sqrt(p), x = Math.sqrt(h), A = o * Math.tan((an - Math.acos((p + h - b) / (2 * y * x))) / 2), _ = A / x, w = A / y;
      Math.abs(_ - 1) > ht && this._append`L${e + _ * c},${n + _ * f}`, this._append`A${o},${o},0,0,${+(f * g > c * d)},${this._x1 = e + w * u},${this._y1 = n + w * l}`;
    }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = e + s, c = n + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ht || Math.abs(this._y1 - c) > ht) && this._append`L${l},${c}`, r && (h < 0 && (h = h % sn + sn), h > qu ? this._append`A${r},${r},0,1,${f},${e - s},${n - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ht && this._append`A${r},${r},0,${+(h >= an)},${f},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function X() {
  return new ci();
}
X.prototype = ci.prototype;
function Gu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function be(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function zt(t) {
  return t = be(Math.abs(t)), t ? t[1] : NaN;
}
function Uu(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(n.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function Yu(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Ku = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function xe(t) {
  if (!(e = Ku.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new An({
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
xe.prototype = An.prototype;
function An(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
An.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Vu(t) {
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
var fi;
function Zu(t, e) {
  var n = be(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (fi = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + be(t, Math.max(0, e + o - 1))[0];
}
function ir(t, e) {
  var n = be(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const or = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Gu,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => ir(t * 100, e),
  r: ir,
  s: Zu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ar(t) {
  return t;
}
var sr = Array.prototype.map, ur = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Wu(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? ar : Uu(sr.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? ar : Yu(sr.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = xe(f);
    var h = f.fill, g = f.align, d = f.sign, p = f.symbol, b = f.zero, y = f.width, x = f.comma, A = f.precision, _ = f.trim, w = f.type;
    w === "n" ? (x = !0, w = "g") : or[w] || (A === void 0 && (A = 12), _ = !0, w = "g"), (b || h === "0" && g === "=") && (b = !0, h = "0", g = "=");
    var P = p === "$" ? n : p === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", E = p === "$" ? r : /[%p]/.test(w) ? a : "", N = or[w], G = /[defgprs%]/.test(w);
    A = A === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function W(v) {
      var U = P, z = E, L, Qt, at;
      if (w === "c")
        z = N(v) + z, v = "";
      else {
        v = +v;
        var ft = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? u : N(Math.abs(v), A), _ && (v = Vu(v)), ft && +v == 0 && d !== "+" && (ft = !1), U = (ft ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + U, z = (w === "s" ? ur[8 + fi / 3] : "") + z + (ft && d === "(" ? ")" : ""), G) {
          for (L = -1, Qt = v.length; ++L < Qt; )
            if (at = v.charCodeAt(L), 48 > at || at > 57) {
              z = (at === 46 ? i + v.slice(L + 1) : v.slice(L)) + z, v = v.slice(0, L);
              break;
            }
        }
      }
      x && !b && (v = e(v, 1 / 0));
      var xt = U.length + v.length + z.length, R = xt < y ? new Array(y - xt + 1).join(h) : "";
      switch (x && b && (v = e(R + v, R.length ? y - z.length : 1 / 0), R = ""), g) {
        case "<":
          v = U + v + z + R;
          break;
        case "=":
          v = U + R + v + z;
          break;
        case "^":
          v = R.slice(0, xt = R.length >> 1) + U + v + z + R.slice(xt);
          break;
        default:
          v = R + U + v + z;
          break;
      }
      return o(v);
    }
    return W.toString = function() {
      return f + "";
    }, W;
  }
  function c(f, h) {
    var g = l((f = xe(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(zt(h) / 3))) * 3, p = Math.pow(10, -d), b = ur[8 + d / 3];
    return function(y) {
      return g(p * y) + b;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var ie, Ee, hi;
Ju({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ju(t) {
  return ie = Wu(t), Ee = ie.format, hi = ie.formatPrefix, ie;
}
function Qu(t) {
  return Math.max(0, -zt(Math.abs(t)));
}
function ju(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zt(e) / 3))) * 3 - zt(Math.abs(t)));
}
function tl(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, zt(e) - zt(t)) + 1;
}
function el(t, e) {
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
function nl(t) {
  return function() {
    return t;
  };
}
function rl(t) {
  return +t;
}
var lr = [0, 1];
function $t(t) {
  return t;
}
function un(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : nl(isNaN(e) ? NaN : 0.5);
}
function il(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function ol(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = un(i, r), o = n(a, o)) : (r = un(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function al(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = un(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var u = io(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function sl(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ul() {
  var t = lr, e = lr, n = xn, r, i, o, a = $t, s, u, l;
  function c() {
    var h = Math.min(t.length, e.length);
    return a !== $t && (a = il(t[0], t[h - 1])), s = h > 2 ? al : ol, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), e, n)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(e, t.map(r), D)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, rl), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), c()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = $s, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : $t, c()) : a !== $t;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, c()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return r = h, i = g, c();
  };
}
function ll() {
  return ul()($t, $t);
}
function cl(t, e, n, r) {
  var i = lo(t, e, n), o;
  switch (r = xe(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = ju(i, a)) && (r.precision = o), hi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = tl(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Qu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Ee(r);
}
function fl(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return uo(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return cl(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = Ze(a, s, n), l === u)
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
function K() {
  var t = ll();
  return t.copy = function() {
    return sl(t, K());
  }, el.apply(t, arguments), fl(t);
}
function Ft(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Ft.prototype = {
  constructor: Ft,
  scale: function(t) {
    return t === 1 ? this : new Ft(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Ft(this.k, this.x + this.k * t, this.y + this.k * e);
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
var di = typeof global == "object" && global && global.Object === Object && global, hl = typeof self == "object" && self && self.Object === Object && self, rt = di || hl || Function("return this")(), V = rt.Symbol, pi = Object.prototype, dl = pi.hasOwnProperty, pl = pi.toString, It = V ? V.toStringTag : void 0;
function gl(t) {
  var e = dl.call(t, It), n = t[It];
  try {
    t[It] = void 0;
    var r = !0;
  } catch {
  }
  var i = pl.call(t);
  return r && (e ? t[It] = n : delete t[It]), i;
}
var _l = Object.prototype, yl = _l.toString;
function ml(t) {
  return yl.call(t);
}
var wl = "[object Null]", vl = "[object Undefined]", cr = V ? V.toStringTag : void 0;
function wt(t) {
  return t == null ? t === void 0 ? vl : wl : cr && cr in Object(t) ? gl(t) : ml(t);
}
function ct(t) {
  return t != null && typeof t == "object";
}
var bl = "[object Symbol]";
function Ne(t) {
  return typeof t == "symbol" || ct(t) && wt(t) == bl;
}
function Zt(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var C = Array.isArray, fr = V ? V.prototype : void 0, hr = fr ? fr.toString : void 0;
function gi(t) {
  if (typeof t == "string")
    return t;
  if (C(t))
    return Zt(t, gi) + "";
  if (Ne(t))
    return hr ? hr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var xl = /\s/;
function Ml(t) {
  for (var e = t.length; e-- && xl.test(t.charAt(e)); )
    ;
  return e;
}
var $l = /^\s+/;
function Al(t) {
  return t && t.slice(0, Ml(t) + 1).replace($l, "");
}
function et(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var dr = NaN, Tl = /^[-+]0x[0-9a-f]+$/i, Sl = /^0b[01]+$/i, Pl = /^0o[0-7]+$/i, El = parseInt;
function Nl(t) {
  if (typeof t == "number")
    return t;
  if (Ne(t))
    return dr;
  if (et(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = et(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Al(t);
  var n = Sl.test(t);
  return n || Pl.test(t) ? El(t.slice(2), n ? 2 : 8) : Tl.test(t) ? dr : +t;
}
var pr = 1 / 0, zl = 17976931348623157e292;
function Ue(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Nl(t), t === pr || t === -pr) {
    var e = t < 0 ? -1 : 1;
    return e * zl;
  }
  return t === t ? t : 0;
}
function ze(t) {
  return t;
}
var kl = "[object AsyncFunction]", Ol = "[object Function]", Il = "[object GeneratorFunction]", Cl = "[object Proxy]";
function _i(t) {
  if (!et(t))
    return !1;
  var e = wt(t);
  return e == Ol || e == Il || e == kl || e == Cl;
}
var Ye = rt["__core-js_shared__"], gr = (function() {
  var t = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Rl(t) {
  return !!gr && gr in t;
}
var Fl = Function.prototype, Ll = Fl.toString;
function vt(t) {
  if (t != null) {
    try {
      return Ll.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Dl = /[\\^$.*+?()[\]{}|]/g, Hl = /^\[object .+?Constructor\]$/, Bl = Function.prototype, ql = Object.prototype, Xl = Bl.toString, Gl = ql.hasOwnProperty, Ul = RegExp(
  "^" + Xl.call(Gl).replace(Dl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yl(t) {
  if (!et(t) || Rl(t))
    return !1;
  var e = _i(t) ? Ul : Hl;
  return e.test(vt(t));
}
function Kl(t, e) {
  return t == null ? void 0 : t[e];
}
function bt(t, e) {
  var n = Kl(t, e);
  return Yl(n) ? n : void 0;
}
var ln = bt(rt, "WeakMap");
function Vl(t, e, n) {
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
var Zl = 800, Wl = 16, Jl = Date.now;
function Ql(t) {
  var e = 0, n = 0;
  return function() {
    var r = Jl(), i = Wl - (r - n);
    if (n = r, i > 0) {
      if (++e >= Zl)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function jl(t) {
  return function() {
    return t;
  };
}
var Me = (function() {
  try {
    var t = bt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), tc = Me ? function(t, e) {
  return Me(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: jl(e),
    writable: !0
  });
} : ze, ec = Ql(tc);
function nc(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function rc(t, e, n, r) {
  for (var i = t.length, o = n + -1; ++o < i; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function ic(t) {
  return t !== t;
}
function oc(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function ac(t, e, n) {
  return e === e ? oc(t, e, n) : rc(t, ic, n);
}
function sc(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && ac(t, e, 0) > -1;
}
var uc = 9007199254740991, lc = /^(?:0|[1-9]\d*)$/;
function ke(t, e) {
  var n = typeof t;
  return e = e ?? uc, !!e && (n == "number" || n != "symbol" && lc.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function cc(t, e, n) {
  e == "__proto__" && Me ? Me(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Oe(t, e) {
  return t === e || t !== t && e !== e;
}
var fc = Object.prototype, hc = fc.hasOwnProperty;
function dc(t, e, n) {
  var r = t[e];
  (!(hc.call(t, e) && Oe(r, n)) || n === void 0 && !(e in t)) && cc(t, e, n);
}
var _r = Math.max;
function pc(t, e, n) {
  return e = _r(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = _r(r.length - e, 0), a = Array(o); ++i < o; )
      a[i] = r[e + i];
    i = -1;
    for (var s = Array(e + 1); ++i < e; )
      s[i] = r[i];
    return s[e] = n(a), Vl(t, this, s);
  };
}
function gc(t, e) {
  return ec(pc(t, e, ze), t + "");
}
var _c = 9007199254740991;
function Tn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _c;
}
function kt(t) {
  return t != null && Tn(t.length) && !_i(t);
}
function yc(t, e, n) {
  if (!et(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? kt(n) && ke(e, n.length) : r == "string" && e in n) ? Oe(n[e], t) : !1;
}
var mc = Object.prototype;
function yi(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || mc;
  return t === n;
}
function wc(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var vc = "[object Arguments]";
function yr(t) {
  return ct(t) && wt(t) == vc;
}
var mi = Object.prototype, bc = mi.hasOwnProperty, xc = mi.propertyIsEnumerable, Sn = yr(/* @__PURE__ */ (function() {
  return arguments;
})()) ? yr : function(t) {
  return ct(t) && bc.call(t, "callee") && !xc.call(t, "callee");
};
function Mc() {
  return !1;
}
var wi = typeof exports == "object" && exports && !exports.nodeType && exports, mr = wi && typeof module == "object" && module && !module.nodeType && module, $c = mr && mr.exports === wi, wr = $c ? rt.Buffer : void 0, Ac = wr ? wr.isBuffer : void 0, cn = Ac || Mc, Tc = "[object Arguments]", Sc = "[object Array]", Pc = "[object Boolean]", Ec = "[object Date]", Nc = "[object Error]", zc = "[object Function]", kc = "[object Map]", Oc = "[object Number]", Ic = "[object Object]", Cc = "[object RegExp]", Rc = "[object Set]", Fc = "[object String]", Lc = "[object WeakMap]", Dc = "[object ArrayBuffer]", Hc = "[object DataView]", Bc = "[object Float32Array]", qc = "[object Float64Array]", Xc = "[object Int8Array]", Gc = "[object Int16Array]", Uc = "[object Int32Array]", Yc = "[object Uint8Array]", Kc = "[object Uint8ClampedArray]", Vc = "[object Uint16Array]", Zc = "[object Uint32Array]", M = {};
M[Bc] = M[qc] = M[Xc] = M[Gc] = M[Uc] = M[Yc] = M[Kc] = M[Vc] = M[Zc] = !0;
M[Tc] = M[Sc] = M[Dc] = M[Pc] = M[Hc] = M[Ec] = M[Nc] = M[zc] = M[kc] = M[Oc] = M[Ic] = M[Cc] = M[Rc] = M[Fc] = M[Lc] = !1;
function Wc(t) {
  return ct(t) && Tn(t.length) && !!M[wt(t)];
}
function Jc(t) {
  return function(e) {
    return t(e);
  };
}
var vi = typeof exports == "object" && exports && !exports.nodeType && exports, Lt = vi && typeof module == "object" && module && !module.nodeType && module, Qc = Lt && Lt.exports === vi, Ke = Qc && di.process, vr = (function() {
  try {
    var t = Lt && Lt.require && Lt.require("util").types;
    return t || Ke && Ke.binding && Ke.binding("util");
  } catch {
  }
})(), br = vr && vr.isTypedArray, bi = br ? Jc(br) : Wc, jc = Object.prototype, tf = jc.hasOwnProperty;
function xi(t, e) {
  var n = C(t), r = !n && Sn(t), i = !n && !r && cn(t), o = !n && !r && !i && bi(t), a = n || r || i || o, s = a ? wc(t.length, String) : [], u = s.length;
  for (var l in t)
    (e || tf.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    ke(l, u))) && s.push(l);
  return s;
}
function Mi(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var ef = Mi(Object.keys, Object), nf = Object.prototype, rf = nf.hasOwnProperty;
function of(t) {
  if (!yi(t))
    return ef(t);
  var e = [];
  for (var n in Object(t))
    rf.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Wt(t) {
  return kt(t) ? xi(t) : of(t);
}
function af(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var sf = Object.prototype, uf = sf.hasOwnProperty;
function lf(t) {
  if (!et(t))
    return af(t);
  var e = yi(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !uf.call(t, r)) || n.push(r);
  return n;
}
function cf(t) {
  return kt(t) ? xi(t, !0) : lf(t);
}
var ff = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hf = /^\w*$/;
function Pn(t, e) {
  if (C(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Ne(t) ? !0 : hf.test(t) || !ff.test(t) || e != null && t in Object(e);
}
var Gt = bt(Object, "create");
function df() {
  this.__data__ = Gt ? Gt(null) : {}, this.size = 0;
}
function pf(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var gf = "__lodash_hash_undefined__", _f = Object.prototype, yf = _f.hasOwnProperty;
function mf(t) {
  var e = this.__data__;
  if (Gt) {
    var n = e[t];
    return n === gf ? void 0 : n;
  }
  return yf.call(e, t) ? e[t] : void 0;
}
var wf = Object.prototype, vf = wf.hasOwnProperty;
function bf(t) {
  var e = this.__data__;
  return Gt ? e[t] !== void 0 : vf.call(e, t);
}
var xf = "__lodash_hash_undefined__";
function Mf(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Gt && e === void 0 ? xf : e, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = df;
mt.prototype.delete = pf;
mt.prototype.get = mf;
mt.prototype.has = bf;
mt.prototype.set = Mf;
function $f() {
  this.__data__ = [], this.size = 0;
}
function Ie(t, e) {
  for (var n = t.length; n--; )
    if (Oe(t[n][0], e))
      return n;
  return -1;
}
var Af = Array.prototype, Tf = Af.splice;
function Sf(t) {
  var e = this.__data__, n = Ie(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Tf.call(e, n, 1), --this.size, !0;
}
function Pf(t) {
  var e = this.__data__, n = Ie(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Ef(t) {
  return Ie(this.__data__, t) > -1;
}
function Nf(t, e) {
  var n = this.__data__, r = Ie(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function it(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
it.prototype.clear = $f;
it.prototype.delete = Sf;
it.prototype.get = Pf;
it.prototype.has = Ef;
it.prototype.set = Nf;
var Ut = bt(rt, "Map");
function zf() {
  this.size = 0, this.__data__ = {
    hash: new mt(),
    map: new (Ut || it)(),
    string: new mt()
  };
}
function kf(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ce(t, e) {
  var n = t.__data__;
  return kf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Of(t) {
  var e = Ce(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function If(t) {
  return Ce(this, t).get(t);
}
function Cf(t) {
  return Ce(this, t).has(t);
}
function Rf(t, e) {
  var n = Ce(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function ot(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = zf;
ot.prototype.delete = Of;
ot.prototype.get = If;
ot.prototype.has = Cf;
ot.prototype.set = Rf;
var Ff = "Expected a function";
function En(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Ff);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (En.Cache || ot)(), n;
}
En.Cache = ot;
var Lf = 500;
function Df(t) {
  var e = En(t, function(r) {
    return n.size === Lf && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Hf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Bf = /\\(\\)?/g, qf = Df(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Hf, function(n, r, i, o) {
    e.push(i ? o.replace(Bf, "$1") : r || n);
  }), e;
});
function Re(t) {
  return t == null ? "" : gi(t);
}
function Fe(t, e) {
  return C(t) ? t : Pn(t, e) ? [t] : qf(Re(t));
}
function Jt(t) {
  if (typeof t == "string" || Ne(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function Nn(t, e) {
  e = Fe(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Jt(e[n++])];
  return n && n == r ? t : void 0;
}
function Xf(t, e, n) {
  var r = t == null ? void 0 : Nn(t, e);
  return r === void 0 ? n : r;
}
function zn(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var xr = V ? V.isConcatSpreadable : void 0;
function Gf(t) {
  return C(t) || Sn(t) || !!(xr && t && t[xr]);
}
function Uf(t, e, n, r, i) {
  var o = -1, a = t.length;
  for (n || (n = Gf), i || (i = []); ++o < a; ) {
    var s = t[o];
    n(s) ? zn(i, s) : i[i.length] = s;
  }
  return i;
}
function Yf(t) {
  var e = t == null ? 0 : t.length;
  return e ? Uf(t) : [];
}
var Kf = Mi(Object.getPrototypeOf, Object);
function Vf(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + e];
  return o;
}
function Zf(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, !e && n >= r ? t : Vf(t, e, n);
}
var Wf = "\\ud800-\\udfff", Jf = "\\u0300-\\u036f", Qf = "\\ufe20-\\ufe2f", jf = "\\u20d0-\\u20ff", th = Jf + Qf + jf, eh = "\\ufe0e\\ufe0f", nh = "\\u200d", rh = RegExp("[" + nh + Wf + th + eh + "]");
function $i(t) {
  return rh.test(t);
}
function ih(t) {
  return t.split("");
}
var Ai = "\\ud800-\\udfff", oh = "\\u0300-\\u036f", ah = "\\ufe20-\\ufe2f", sh = "\\u20d0-\\u20ff", uh = oh + ah + sh, lh = "\\ufe0e\\ufe0f", ch = "[" + Ai + "]", fn = "[" + uh + "]", hn = "\\ud83c[\\udffb-\\udfff]", fh = "(?:" + fn + "|" + hn + ")", Ti = "[^" + Ai + "]", Si = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pi = "[\\ud800-\\udbff][\\udc00-\\udfff]", hh = "\\u200d", Ei = fh + "?", Ni = "[" + lh + "]?", dh = "(?:" + hh + "(?:" + [Ti, Si, Pi].join("|") + ")" + Ni + Ei + ")*", ph = Ni + Ei + dh, gh = "(?:" + [Ti + fn + "?", fn, Si, Pi, ch].join("|") + ")", _h = RegExp(hn + "(?=" + hn + ")|" + gh + ph, "g");
function yh(t) {
  return t.match(_h) || [];
}
function mh(t) {
  return $i(t) ? yh(t) : ih(t);
}
function wh(t) {
  return function(e) {
    e = Re(e);
    var n = $i(e) ? mh(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Zf(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var vh = wh("toUpperCase");
function bh(t) {
  return vh(Re(t).toLowerCase());
}
function xh() {
  this.__data__ = new it(), this.size = 0;
}
function Mh(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function $h(t) {
  return this.__data__.get(t);
}
function Ah(t) {
  return this.__data__.has(t);
}
var Th = 200;
function Sh(t, e) {
  var n = this.__data__;
  if (n instanceof it) {
    var r = n.__data__;
    if (!Ut || r.length < Th - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new ot(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function j(t) {
  var e = this.__data__ = new it(t);
  this.size = e.size;
}
j.prototype.clear = xh;
j.prototype.delete = Mh;
j.prototype.get = $h;
j.prototype.has = Ah;
j.prototype.set = Sh;
function Ph(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function zi() {
  return [];
}
var Eh = Object.prototype, Nh = Eh.propertyIsEnumerable, Mr = Object.getOwnPropertySymbols, ki = Mr ? function(t) {
  return t == null ? [] : (t = Object(t), Ph(Mr(t), function(e) {
    return Nh.call(t, e);
  }));
} : zi, zh = Object.getOwnPropertySymbols, kh = zh ? function(t) {
  for (var e = []; t; )
    zn(e, ki(t)), t = Kf(t);
  return e;
} : zi;
function Oi(t, e, n) {
  var r = e(t);
  return C(t) ? r : zn(r, n(t));
}
function $r(t) {
  return Oi(t, Wt, ki);
}
function Oh(t) {
  return Oi(t, cf, kh);
}
var dn = bt(rt, "DataView"), pn = bt(rt, "Promise"), gn = bt(rt, "Set"), Ar = "[object Map]", Ih = "[object Object]", Tr = "[object Promise]", Sr = "[object Set]", Pr = "[object WeakMap]", Er = "[object DataView]", Ch = vt(dn), Rh = vt(Ut), Fh = vt(pn), Lh = vt(gn), Dh = vt(ln), Q = wt;
(dn && Q(new dn(new ArrayBuffer(1))) != Er || Ut && Q(new Ut()) != Ar || pn && Q(pn.resolve()) != Tr || gn && Q(new gn()) != Sr || ln && Q(new ln()) != Pr) && (Q = function(t) {
  var e = wt(t), n = e == Ih ? t.constructor : void 0, r = n ? vt(n) : "";
  if (r)
    switch (r) {
      case Ch:
        return Er;
      case Rh:
        return Ar;
      case Fh:
        return Tr;
      case Lh:
        return Sr;
      case Dh:
        return Pr;
    }
  return e;
});
var Nr = rt.Uint8Array, Hh = "__lodash_hash_undefined__";
function Bh(t) {
  return this.__data__.set(t, Hh), this;
}
function qh(t) {
  return this.__data__.has(t);
}
function Yt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new ot(); ++e < n; )
    this.add(t[e]);
}
Yt.prototype.add = Yt.prototype.push = Bh;
Yt.prototype.has = qh;
function Xh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Ii(t, e) {
  return t.has(e);
}
var Gh = 1, Uh = 2;
function Ci(t, e, n, r, i, o) {
  var a = n & Gh, s = t.length, u = e.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(e);
  if (l && c)
    return l == e && c == t;
  var f = -1, h = !0, g = n & Uh ? new Yt() : void 0;
  for (o.set(t, e), o.set(e, t); ++f < s; ) {
    var d = t[f], p = e[f];
    if (r)
      var b = a ? r(p, d, f, e, t, o) : r(d, p, f, t, e, o);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!Xh(e, function(y, x) {
        if (!Ii(g, x) && (d === y || i(d, y, n, r, o)))
          return g.push(x);
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
function Ri(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Yh(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Kh = 1, Vh = 2, Zh = "[object Boolean]", Wh = "[object Date]", Jh = "[object Error]", Qh = "[object Map]", jh = "[object Number]", td = "[object RegExp]", ed = "[object Set]", nd = "[object String]", rd = "[object Symbol]", id = "[object ArrayBuffer]", od = "[object DataView]", zr = V ? V.prototype : void 0, Ve = zr ? zr.valueOf : void 0;
function ad(t, e, n, r, i, o, a) {
  switch (n) {
    case od:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case id:
      return !(t.byteLength != e.byteLength || !o(new Nr(t), new Nr(e)));
    case Zh:
    case Wh:
    case jh:
      return Oe(+t, +e);
    case Jh:
      return t.name == e.name && t.message == e.message;
    case td:
    case nd:
      return t == e + "";
    case Qh:
      var s = Ri;
    case ed:
      var u = r & Kh;
      if (s || (s = Yh), t.size != e.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == e;
      r |= Vh, a.set(t, e);
      var c = Ci(s(t), s(e), r, i, o, a);
      return a.delete(t), c;
    case rd:
      if (Ve)
        return Ve.call(t) == Ve.call(e);
  }
  return !1;
}
var sd = 1, ud = Object.prototype, ld = ud.hasOwnProperty;
function cd(t, e, n, r, i, o) {
  var a = n & sd, s = $r(t), u = s.length, l = $r(e), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in e : ld.call(e, h)))
      return !1;
  }
  var g = o.get(t), d = o.get(e);
  if (g && d)
    return g == e && d == t;
  var p = !0;
  o.set(t, e), o.set(e, t);
  for (var b = a; ++f < u; ) {
    h = s[f];
    var y = t[h], x = e[h];
    if (r)
      var A = a ? r(x, y, h, e, t, o) : r(y, x, h, t, e, o);
    if (!(A === void 0 ? y === x || i(y, x, n, r, o) : A)) {
      p = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (p && !b) {
    var _ = t.constructor, w = e.constructor;
    _ != w && "constructor" in t && "constructor" in e && !(typeof _ == "function" && _ instanceof _ && typeof w == "function" && w instanceof w) && (p = !1);
  }
  return o.delete(t), o.delete(e), p;
}
var fd = 1, kr = "[object Arguments]", Or = "[object Array]", oe = "[object Object]", hd = Object.prototype, Ir = hd.hasOwnProperty;
function dd(t, e, n, r, i, o) {
  var a = C(t), s = C(e), u = a ? Or : Q(t), l = s ? Or : Q(e);
  u = u == kr ? oe : u, l = l == kr ? oe : l;
  var c = u == oe, f = l == oe, h = u == l;
  if (h && cn(t)) {
    if (!cn(e))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new j()), a || bi(t) ? Ci(t, e, n, r, i, o) : ad(t, e, u, n, r, i, o);
  if (!(n & fd)) {
    var g = c && Ir.call(t, "__wrapped__"), d = f && Ir.call(e, "__wrapped__");
    if (g || d) {
      var p = g ? t.value() : t, b = d ? e.value() : e;
      return o || (o = new j()), i(p, b, n, r, o);
    }
  }
  return h ? (o || (o = new j()), cd(t, e, n, r, i, o)) : !1;
}
function kn(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !ct(t) && !ct(e) ? t !== t && e !== e : dd(t, e, n, r, kn, i);
}
var pd = 1, gd = 2;
function _d(t, e, n, r) {
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
      var c = new j(), f;
      if (!(f === void 0 ? kn(l, u, pd | gd, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Fi(t) {
  return t === t && !et(t);
}
function yd(t) {
  for (var e = Wt(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Fi(i)];
  }
  return e;
}
function Li(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function md(t) {
  var e = yd(t);
  return e.length == 1 && e[0][2] ? Li(e[0][0], e[0][1]) : function(n) {
    return n === t || _d(n, t, e);
  };
}
function wd(t, e) {
  return t != null && e in Object(t);
}
function Di(t, e, n) {
  e = Fe(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = Jt(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Tn(i) && ke(a, i) && (C(t) || Sn(t)));
}
function vd(t, e) {
  return t != null && Di(t, e, wd);
}
var bd = 1, xd = 2;
function Md(t, e) {
  return Pn(t) && Fi(e) ? Li(Jt(t), e) : function(n) {
    var r = Xf(n, t);
    return r === void 0 && r === e ? vd(n, t) : kn(e, r, bd | xd);
  };
}
function $d(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Ad(t) {
  return function(e) {
    return Nn(e, t);
  };
}
function Td(t) {
  return Pn(t) ? $d(Jt(t)) : Ad(t);
}
function Hi(t) {
  return typeof t == "function" ? t : t == null ? ze : typeof t == "object" ? C(t) ? Md(t[0], t[1]) : md(t) : Td(t);
}
function Sd(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var u = a[++i];
      if (n(o[u], u, o) === !1)
        break;
    }
    return e;
  };
}
var Pd = Sd();
function Ed(t, e) {
  return t && Pd(t, e, Wt);
}
function Nd(t, e) {
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
var Bi = Nd(Ed);
function zd(t) {
  return ct(t) && kt(t);
}
var kd = 200;
function Od(t, e, n, r) {
  var i = -1, o = sc, a = !0, s = t.length, u = [], l = e.length;
  if (!s)
    return u;
  e.length >= kd && (o = Ii, a = !1, e = new Yt(e));
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
function Id(t) {
  return typeof t == "function" ? t : ze;
}
function fe(t, e) {
  var n = C(t) ? nc : Bi;
  return n(t, Id(e));
}
function Cd(t, e) {
  return Zt(e, function(n) {
    return [n, t[n]];
  });
}
function Rd(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var Fd = "[object Map]", Ld = "[object Set]";
function Dd(t) {
  return function(e) {
    var n = Q(e);
    return n == Fd ? Ri(e) : n == Ld ? Rd(e) : Cd(e, t(e));
  };
}
var qi = Dd(Wt);
function Hd(t, e) {
  var n = -1, r = kt(t) ? Array(t.length) : [];
  return Bi(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function nt(t, e) {
  var n = C(t) ? Zt : Hd;
  return n(t, Hi(e));
}
var Bd = Object.prototype, qd = Bd.hasOwnProperty;
function Xd(t, e) {
  return t != null && qd.call(t, e);
}
function Xi(t, e) {
  return t != null && Di(t, e, Xd);
}
function Gd(t, e) {
  return Zt(e, function(n) {
    return t[n];
  });
}
function Ud(t) {
  return t == null ? [] : Gd(t, Wt(t));
}
var Yd = "[object Boolean]";
function Kd(t) {
  return t === !0 || t === !1 || ct(t) && wt(t) == Yd;
}
function Vd(t, e, n, r) {
  if (!et(t))
    return t;
  e = Fe(e, t);
  for (var i = -1, o = e.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Jt(e[i]), l = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = et(c) ? c : ke(e[i + 1]) ? [] : {});
    }
    dc(s, u, l), s = s[u];
  }
  return t;
}
function Zd(t, e, n) {
  for (var r = -1, i = e.length, o = {}; ++r < i; ) {
    var a = e[r], s = Nn(t, a);
    n(s, a) && Vd(o, Fe(a, t), s);
  }
  return o;
}
function On(t, e) {
  if (t == null)
    return {};
  var n = Zt(Oh(t), function(r) {
    return [r];
  });
  return e = Hi(e), Zd(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var Wd = Math.floor, Jd = Math.random;
function Qd(t, e) {
  return t + Wd(Jd() * (e - t + 1));
}
var jd = Math.ceil, tp = Math.max;
function ep(t, e, n, r) {
  for (var i = -1, o = tp(jd((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function np(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && yc(e, n, r) && (n = r = void 0), e = Ue(e), n === void 0 ? (n = e, e = 0) : n = Ue(n), r = r === void 0 ? e < n ? 1 : -1 : Ue(r), ep(e, n, r);
  };
}
var St = np();
function rp() {
  var t = arguments, e = Re(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function Gi(t) {
  var e = t.length;
  return e ? t[Qd(0, e - 1)] : void 0;
}
function ip(t) {
  return Gi(Ud(t));
}
function Ui(t) {
  var e = C(t) ? Gi : ip;
  return e(t);
}
var op = gc(function(t, e) {
  return zd(t) ? Od(t, e) : [];
});
const ap = (t, e, n = 12, r = 12) => {
  const i = K().domain([0, n]).range([0, t]), o = K().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return St((n + 1) * (r + 1)).map(function(u) {
        return { m: u % (n + 1), n: Math.floor(u / (n + 1)), x: i(u % (n + 1)), y: o(Math.floor(u / (n + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = Yf(nt(l, function(f) {
        return nt(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, sp = "_widget_18g36_1", up = "_label_18g36_19", lp = "_lit_18g36_24", cp = "_button_18g36_29", fp = "_symbol_18g36_29", hp = "_radio_18g36_29", dp = "_radiobutton_18g36_29", pp = "_selected_18g36_35", gp = "_toggle_18g36_35", _p = "_slider_18g36_44", yp = "_track_18g36_44", mp = "_track_overlay_18g36_48", wp = "_handle_18g36_55", m = {
  widget: sp,
  label: up,
  lit: lp,
  button: cp,
  symbol: fp,
  radio: hp,
  radiobutton: dp,
  selected: pp,
  toggle: gp,
  slider: _p,
  track: yp,
  track_overlay: mp,
  handle: wp
}, Le = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, In = (t, e, n) => {
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
}, vp = (t = 1) => {
  const e = X();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, bp = (t = 1) => {
  const e = X(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, xp = (t = 1) => {
  const e = X();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Mp = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = X();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -n), r.lineTo(t * (n * e), t * -n), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -n), r.lineTo(-t * (n * e), t * -n), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, $p = (t = 1) => {
  const e = X(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), e.arc(0, 0, t * (1 - o), r, i, !1), e.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), e.closePath(), e.toString();
}, Ap = (t = 1) => {
  const e = X(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, o = n, a = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, a), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, o, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, Tp = (t = 1) => {
  const e = X(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), e.arc(0, 0, t * (1 - o), i, r, !0), e.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), e.closePath(), e.toString();
}, Sp = (t = 1) => {
  var e = X(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -n, t * n), e.lineTo(t * -n, t * -n), e.lineTo(t * n, t * -n), e.closePath(), e.toString();
}, Pp = (t = 1) => {
  const e = X(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, _n = (t) => {
  switch (t) {
    case "play":
      return vp;
    case "forward":
      return bp;
    case "back":
      return xp;
    case "pause":
      return Mp;
    case "reload":
      return $p;
    case "capture":
      return Ap;
    case "rewind":
      return Tp;
    case "stop":
      return Sp;
    case "push":
      return Pp;
  }
}, Cn = () => {
  const t = "button";
  var e = Le(), n = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
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
      f = (f + 1) % c.length, l(), S(this.parentNode).select("." + m.symbol).attr("d", _n(c[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + e).select("." + m.symbol).attr("d", _n(c[f])(r * n));
    }
  };
}, Ep = () => {
  const t = "slider", e = Ee(".3f");
  var n = Le(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(y) {
  }, f = function(y) {
  }, h = [0, 1], g = 0, d = null, p = K().domain(h).range([0, r]).clamp(!0);
  const b = function(y, x, A = h) {
    const _ = y.select("#slider_" + n);
    p.domain(A), g = x, _.selectAll("." + m.handle).transition().attr("cx", p(x)), a && _.select("." + m.label).text(d + " = " + e(g)), c(), f();
  };
  return {
    type: t,
    scale: p,
    id: function(y) {
      return typeof y > "u" ? n : (n = y, this);
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
}, Np = () => {
  const t = "toggle";
  var e = Le(), n = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
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
}, zp = () => {
  const t = "radio";
  var e = Le(), n = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, c = function(p) {
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
    click: function(p, b) {
      h = b, S(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (y) => y == h), c();
    },
    reset: function(p, b) {
      h = b, p.select("#radio_" + e).selectAll("." + m.symbol).classed(m.selected, (y) => y == h), c();
    }
  };
}, kp = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", _n(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = In(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, Yi = (t, e) => {
  const n = X();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, Op = (t, e) => {
  const n = Ee(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Yi(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const p = Je(d, this)[0];
    t.value(a.invert(p)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
  }).call(
    es().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, g = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? jt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -jt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? jt([t.girth() / 2, t.knob()]) + 7 : -jt([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, Ip = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", Yi(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = In(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, Cp = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = co(a), u = K().domain([0, a - 1]).range([0, t.size()]), l = K().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(c).attr("class", m.widget + " " + m.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var g, d;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), g.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((b) => b == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const p = In(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(b, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), c;
}, ae = (t, e) => {
  switch (t.type) {
    case "button":
      return kp(t);
    case "slider":
      return Op(t);
    case "radio":
      return Cp(t);
    case "toggle":
      return Ip(t);
  }
}, Rp = (t, e) => {
  const n = ap(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = S("#" + t).classed(e.id + " " + e.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr(
    "width",
    e.display_type == "canvas" ? e.display_size.width : null
  ).attr(
    "height",
    e.display_type == "canvas" ? e.display_size.height : null
  ).attr(
    "viewBox",
    e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height
  ).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr(
    "viewBox",
    "0 0 " + e.controls_size.width + " " + e.controls_size.height
  ).style("width", "100%").style("height", "100%");
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && o.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && i.style("border", e.display_border), e.debug && o.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: n };
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
  weight_alignment: 0.5,
  // for distance between culture and frame
  weight_inherent_nv: 0.33,
  // for the inherent news value of a topic
  weight_network_nv: 0.33,
  // for the news value based on following
  // speed := number of steps per second
  speed: {
    range: [10, 60],
    default: 35
  },
  // (formerly similarity_threshold)
  likelihood_to_switch: {
    range: [0.01, 0.6],
    default: 0.23
  },
  // probability of forgetting a topic
  likelihood_to_forget: {
    range: [0, 20],
    default: 4
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
    default: !1
  },
  frame_is_normal: {
    default: !1
  }
}, Rn = (t) => nt(qi(t), (e) => {
  e[1].id = e[0], e[1].label = rp(bh(e[0]), /_/g, " ");
}), Fn = (t) => nt(qi(t), (e) => e[1]), Ln = (t, e) => fe(t, (n, r) => n.widget = e[r]), Fp = (t) => On(t, (e) => Xi(e, "range")), Lp = (t) => On(t, (e) => Kd(e.default)), Dp = (t) => On(t, (e) => Xi(e, "choices"));
K().domain([0, 360]).range([0, 2 * Math.PI]);
K().range([0, 360]).domain([0, 2 * Math.PI]);
function ut() {
  let t = 0, e = 0;
  for (; t === 0; ) t = Math.random();
  for (; e === 0; ) e = Math.random();
  let n = Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e);
  return n = n / 10 + 0.5, n > 1 || n < 0 ? ut() : n;
}
function Dn(t) {
  const e = 1 - Math.random();
  return -Math.log(e) / t;
}
const Hn = Fp($), Bn = Lp($), qn = Dp($);
Rn(Hn);
Rn(Bn);
Rn(qn);
const Ki = Fn(Hn), Vi = Fn(Bn), Zi = Fn(qn), he = nt(
  Ki,
  (t) => Ep().id(t.id).label(t.label).range(t.range).value(t.default).size(T.widgets.slider_size)
), Pt = nt(
  Vi,
  (t) => Np().id(t.id).label(t.label).value(t.default).labelposition(T.widgets.toggle_label_pos)
), de = nt(
  Zi,
  (t) => zp().choices(t.choices).id(t.id).value(t.default).orientation(T.widgets.radio_orientation).labelposition(T.widgets.radio_label_position)
);
Ln(Ki, he);
Ln(Vi, Pt);
Ln(Zi, de);
const lt = Cn().actions(["play", "pause"]), De = Cn().actions(["back"]), He = Cn().actions(["rewind"]), Hp = [lt, De, He], Bp = (t, e) => {
  lt.position(
    e.position(
      T.widgets.playbutton_anchor.x,
      T.widgets.playbutton_anchor.y
    )
  ).size(T.widgets.playbutton_size), He.position(
    e.position(
      T.widgets.backbutton_anchor.x,
      T.widgets.backbutton_anchor.y
    )
  ), De.position(
    e.position(
      T.widgets.resetbutton_anchor.x,
      T.widgets.resetbutton_anchor.y
    )
  );
  const n = e.position(
    T.widgets.slider_anchor.x,
    St(he.length).map(
      (s) => T.widgets.slider_anchor.y + T.widgets.slider_gap * s
    )
  );
  he.forEach((s, u) => s.position(n[u]));
  const r = St(Pt.length).map((s) => {
    const u = T.widgets.toggle_anchor.x, l = T.widgets.toggle_anchor.y + s * T.widgets.toggle_vertical_gap;
    return e.position(u, l);
  });
  Pt.forEach((s, u) => s.position(r[u]));
  const i = St(de.length).map(
    (s) => e.position(
      T.widgets.radio_anchor.x,
      T.widgets.radio_anchor.y + s * T.widgets.radio_item_gap
    )
  );
  de.forEach((s, u) => {
    s.position(i[u]).size(T.widgets.radio_size).shape(T.widgets.radio_shape);
  });
  const o = e.position(1, 10.4), a = e.position(1, 11.6);
  t.append("text").attr("x", o.x).attr("y", o.y).attr("class", "static-label").text("Agents:"), t.append("text").attr("x", a.x).attr("y", a.y).attr("class", "static-label").text("Topics:"), t.selectAll(null).data(he).enter().append(ae), t.selectAll(null).data(Pt).enter().append(ae), t.selectAll(null).data(Hp).enter().append(ae), t.selectAll(null).data(de).enter().append(ae);
}, qp = (t) => {
  fe(Hn, (e) => e.widget.reset(t, e.default)), fe(Bn, (e) => e.widget.reset(t, e.default)), fe(qn, (e) => e.widget.reset(t, e.default)), $.number_of_agents.widget.update();
}, st = $.L, Wi = 1, Xp = 0.1;
var gt = [], k = [];
const Gp = 1500, Up = 50, Yp = 5, Kp = [
  "#fe9502ff",
  "#005397ff",
  "#32CD32",
  "#FFD700",
  "#ae0037ff",
  "#ee90ebff",
  "#20B2AA",
  "#794002ff"
], Vp = ["A", "B", "C", "D", "E", "F", "G", "H"], Ji = (t, e) => {
  e.forEach((n) => {
    n._incoming_links_count = 0;
  }), t.forEach((n) => {
    n.focussed_topic && n.focussed_topic._incoming_links_count++;
  }), e.forEach((n) => {
    n.network_news_val = n._incoming_links_count / t.length * n.freshness_advantage, n.age_absolute++;
  });
}, Zp = () => {
  $.timer = {}, $.tick = 0;
  const t = $.number_of_topics.choices[$.number_of_topics.widget.value()], e = $.frame_is_normal.widget.value(), n = 0.05, i = st * (1 - 2 * n) / (t - 1);
  k = nt(St(t), (s) => {
    let u;
    e === !1 ? u = Math.random() : u = ut();
    let l = st * n + s * i;
    const c = Dn(Wi);
    return {
      index: s,
      x: st * u,
      y: l,
      frame: u,
      initial_news_val: c,
      network_news_val: 0,
      // this is a dynamic parameter
      get size() {
        return 3.5 + 1 / (k.length + 1) * this.network_news_val ** 2 * 140;
      },
      letter: Vp[s],
      // Assign letter from alphabet
      color: Kp[s],
      // Assign color from list
      age_absolute: 0,
      // in seconds
      get inherent_max_relevance() {
        return this.initial_news_val * Gp;
      },
      get age_relative() {
        return Math.min(this.age_absolute / this.inherent_max_relevance, 1);
      },
      get freshness_advantage() {
        return 1 - this.age_relative;
      }
    };
  });
  const o = $.number_of_agents.choices[$.number_of_agents.widget.value()], a = $.culture_is_normal.widget.value();
  gt = nt(St(o), (s) => {
    let u;
    a === !1 ? u = Math.random() : u = ut();
    const l = Math.floor(Math.random() * k.length);
    return {
      index: s,
      culture: u,
      x: st * u,
      // x pos depends on culture for sorted viz
      y: st * Math.random(),
      focussed_topic: k[l],
      time_on_topic: 0
    };
  }), Ji(gt, k);
}, Wp = (t) => {
  const e = $.frame_is_normal.widget.value();
  let n;
  e === !1 ? n = Math.random() : n = ut(), t.frame = n, t.x = st * n, t.initial_news_val = Dn(Wi), t.network_news_val = 0, t._incoming_links_count = 0, t.age_absolute = 0;
}, Jp = (t) => {
  const e = op(k, t.focussed_topic);
  t.focussed_topic = Ui(e), t.time_on_topic = 0;
}, Qp = () => {
  $.tick++, Ji(gt, k);
  let t = [];
  const e = 1 / k.length / 2;
  for (const n of k)
    if (n.age_absolute > Up && n.network_news_val < e) {
      const r = ut() * Dn(1);
      if (n.age_relative > r) {
        Wp(n), t.push(n.index);
        break;
      }
    }
  t.length > 0 && gt.forEach((n) => {
    n.focussed_topic && t.includes(n.focussed_topic.index) && (n.focussed_topic = null, n.time_on_topic = 0);
  }), gt.forEach((n) => {
    const r = n.focussed_topic;
    if (!r) {
      n.focussed_topic = Ui(k), n.time_on_topic = 0;
      return;
    }
    const o = (1 - Math.abs(n.culture - r.frame)) * $.weight_alignment + r.network_news_val * $.weight_network_nv + r.initial_news_val * $.weight_inherent_nv;
    if (n.time_on_topic > Yp && o < $.likelihood_to_switch.widget.value()) {
      Jp(n);
      return;
    }
    if (n.time_on_topic++, n.focussed_topic) {
      const a = k.length, s = st / a, u = n.focussed_topic.y;
      let l;
      ut() < 0.5 ? l = u - ut() * s : l = u + ut() * s, l = Math.max(0, Math.min(st, l)), n.y += (l - n.y) * Xp;
    }
  });
}, jp = "_node_19yup_1", $e = {
  node: jp
}, Qi = $.L, F = K().domain([0, Qi]), H = K().domain([0, Qi]), t0 = (t, e) => {
  const n = e.display_size.width, r = e.display_size.height;
  F.range([0, n]), H.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  i.selectAll(null).data(gt).enter().append("circle").attr("class", $e.node).attr("cx", (o) => F(o.x)).attr("cy", (o) => H(o.y)).attr("r", F($.agentsize / 2)).style("fill", function(o) {
    return o.focussed_topic.color;
  }).style("stroke", "black").style("stroke-width", 0.4), i.selectAll(null).data(k, (o) => o.index).enter().append("rect").attr("class", $e.node).attr("x", (o) => F(o.x) - F(o.size / 2)).attr("y", (o) => H(o.y) - H(o.size / 2)).attr("width", (o) => F(o.size)).attr("height", (o) => H(o.size)).style("fill", function(o) {
    return o.color;
  }).style("stroke", "black").style("stroke-width", function(o) {
    return 1.2;
  }), i.selectAll(null).data(k, (o) => o.index).enter().append("text").attr("class", "topic-label").attr("x", (o) => F(o.x)).attr("y", (o) => H(o.y)).attr("dy", ".35em").style("text-anchor", "middle").style("font-size", "12px").style("fill", "black").style("stroke", "black").style("stroke-width", "0.7px").style("paint-ordering", "stroke").style("pointer-events", "none").text((o) => o.letter);
}, e0 = (t, e) => {
  t.selectAll("circle." + $e.node).data(gt, (n) => n.index).attr("cx", (n) => F(n.x)).attr("cy", (n) => H(n.y)).style("fill", (n) => n.focussed_topic ? n.focussed_topic.color : "#888888"), t.selectAll("rect." + $e.node).data(k, (n) => n.index).attr("x", (n) => F(n.x) - F(n.size / 2)).attr("y", (n) => H(n.y) - H(n.size / 2)).attr("width", (n) => F(n.size)).attr("height", (n) => H(n.size)), t.selectAll(".topic-label").data(k, (n) => n.index).attr("x", (n) => F(n.x)).attr("y", (n) => H(n.y));
};
let Cr = 0;
function n0(t, e) {
  const n = performance.now(), r = 1e3 / $.speed.widget.value(), i = n - Cr;
  i >= r && (Cr = n - i % r, Qp(), e0(t));
}
function Mt(t, e) {
  Zp(), t0(t, e);
}
var Rr = {};
const r0 = (t, e) => {
  lt.value() == 1 ? Rr = Os(
    () => n0(t),
    T.simulation.delay
  ) : Rr.stop();
}, i0 = (t, e, n) => {
  He.update(() => qp(e)), lt.update(() => r0(t)), De.update(() => Mt(t, n)), $.number_of_agents.widget.update(() => Mt(t, n)), $.number_of_topics.widget.update(() => Mt(t, n)), Pt[0].update(() => Mt(t, n)), Pt[1].update(() => Mt(t, n));
}, o0 = {
  name: "@explorables/explorable_template",
  title: "Social Issue Emergence",
  subtitle: "The emergence of topics in a social network",
  description: "An agent-based model for mimicking the following of topics in a social network",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function a0(t, e = ji) {
  const n = Rp(t, e), r = n.display, i = n.controls, o = n.grid;
  return Bp(i, o), i0(r, i, e), Mt(r, e), {
    halt() {
      lt.value() === 1 && lt.press(i);
    },
    reset() {
      lt.value() === 1 && lt.press(i), He.press(i), De.press(i);
    },
    config: e,
    meta: o0
  };
}
export {
  ji as config,
  a0 as default,
  a0 as load,
  o0 as meta
};
