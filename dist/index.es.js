(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.16 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media(min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const to = {
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
function eo(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Dr(t) {
  let e, n, r;
  t.length !== 2 ? (e = se, n = (s, u) => se(t(s), u), r = (s, u) => t(s) - u) : (e = t === se || t === eo ? t : no, n = t, r = t);
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
function no() {
  return 0;
}
function ro(t) {
  return t === null ? NaN : +t;
}
const io = Dr(se), oo = io.right;
Dr(ro).center;
const ao = Math.sqrt(50), so = Math.sqrt(10), uo = Math.sqrt(2);
function pe(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= ao ? 10 : o >= so ? 5 : o >= uo ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(e * l), s / l < t && ++s, u / l > e && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(e / l), s * l < t && ++s, u * l > e && --u), u < s && 0.5 <= n && n < 2 ? pe(t, e, n * 2) : [s, u, l];
}
function lo(t, e, n) {
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
function We(t, e, n) {
  return e = +e, t = +t, n = +n, pe(t, e, n)[2];
}
function co(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? We(e, t, n) : We(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function jt(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function fo(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
var ho = { value: () => {
} };
function mn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new ue(n);
}
function ue(t) {
  this._ = t;
}
function po(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
ue.prototype = mn.prototype = {
  constructor: ue,
  on: function(t, e) {
    var n = this._, r = po(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = go(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = Gn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Gn(n[i], t.name, null);
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
function go(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Gn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ho, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Je = "http://www.w3.org/1999/xhtml";
const Un = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Je,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Ae(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Un.hasOwnProperty(e) ? { space: Un[e], local: t } : t;
}
function _o(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Je && e.documentElement.namespaceURI === Je ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function yo(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Hr(t) {
  var e = Ae(t);
  return (e.local ? yo : _o)(e);
}
function mo() {
}
function wn(t) {
  return t == null ? mo : function() {
    return this.querySelector(t);
  };
}
function wo(t) {
  typeof t != "function" && (t = wn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new I(r, this._parents);
}
function vo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function bo() {
  return [];
}
function Br(t) {
  return t == null ? bo : function() {
    return this.querySelectorAll(t);
  };
}
function xo(t) {
  return function() {
    return vo(t.apply(this, arguments));
  };
}
function Mo(t) {
  typeof t == "function" ? t = xo(t) : t = Br(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new I(r, i);
}
function qr(t) {
  return function() {
    return this.matches(t);
  };
}
function Xr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var $o = Array.prototype.find;
function Ao(t) {
  return function() {
    return $o.call(this.children, t);
  };
}
function To() {
  return this.firstElementChild;
}
function So(t) {
  return this.select(t == null ? To : Ao(typeof t == "function" ? t : Xr(t)));
}
var Po = Array.prototype.filter;
function Eo() {
  return Array.from(this.children);
}
function No(t) {
  return function() {
    return Po.call(this.children, t);
  };
}
function zo(t) {
  return this.selectAll(t == null ? Eo : No(typeof t == "function" ? t : Xr(t)));
}
function ko(t) {
  typeof t != "function" && (t = qr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new I(r, this._parents);
}
function Gr(t) {
  return new Array(t.length);
}
function Oo() {
  return new I(this._enter || this._groups.map(Gr), this._parents);
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
function Io(t) {
  return function() {
    return t;
  };
}
function Co(t, e, n, r, i, o) {
  for (var a = 0, s, u = e.length, l = o.length; a < l; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new ge(t, o[a]);
  for (; a < u; ++a)
    (s = e[a]) && (i[a] = s);
}
function Ro(t, e, n, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = e.length, f = o.length, h = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = e[s]) && (h[s] = g = a.call(u, u.__data__, s, e) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : n[s] = new ge(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = e[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Fo(t) {
  return t.__data__;
}
function Lo(t, e) {
  if (!arguments.length) return Array.from(this, Fo);
  var n = e ? Ro : Co, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Io(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, g = Do(t.call(c, c && c.__data__, l, r)), d = g.length, p = s[l] = new Array(d), b = a[l] = new Array(d), y = u[l] = new Array(h);
    n(c, f, p, b, y, g, e);
    for (var x = 0, $ = 0, _, w; x < d; ++x)
      if (_ = p[x]) {
        for (x >= $ && ($ = x + 1); !(w = b[$]) && ++$ < d; ) ;
        _._next = w || null;
      }
  }
  return a = new I(a, r), a._enter = s, a._exit = u, a;
}
function Do(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ho() {
  return new I(this._exit || this._groups.map(Gr), this._parents);
}
function Bo(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function qo(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = n[u], c = r[u], f = l.length, h = s[u] = new Array(f), g, d = 0; d < f; ++d)
      (g = l[d] || c[d]) && (h[d] = g);
  for (; u < i; ++u)
    s[u] = n[u];
  return new I(s, this._parents);
}
function Xo() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function Go(t) {
  t || (t = Uo);
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
function Uo(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Yo() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Ko() {
  return Array.from(this);
}
function Vo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Zo() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Wo() {
  return !this.node();
}
function Jo(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Qo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function jo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ta(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function ea(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function na(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ra(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function ia(t, e) {
  var n = Ae(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? jo : Qo : typeof e == "function" ? n.local ? ra : na : n.local ? ea : ta)(n, e));
}
function Ur(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function oa(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function aa(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function sa(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function ua(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? oa : typeof e == "function" ? sa : aa)(t, e, n ?? "")) : Et(this.node(), t);
}
function Et(t, e) {
  return t.style.getPropertyValue(e) || Ur(t).getComputedStyle(t, null).getPropertyValue(e);
}
function la(t) {
  return function() {
    delete this[t];
  };
}
function ca(t, e) {
  return function() {
    this[t] = e;
  };
}
function fa(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ha(t, e) {
  return arguments.length > 1 ? this.each((e == null ? la : typeof e == "function" ? fa : ca)(t, e)) : this.node()[t];
}
function Yr(t) {
  return t.trim().split(/^|\s+/);
}
function vn(t) {
  return t.classList || new Kr(t);
}
function Kr(t) {
  this._node = t, this._names = Yr(t.getAttribute("class") || "");
}
Kr.prototype = {
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
function Vr(t, e) {
  for (var n = vn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Zr(t, e) {
  for (var n = vn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function da(t) {
  return function() {
    Vr(this, t);
  };
}
function pa(t) {
  return function() {
    Zr(this, t);
  };
}
function ga(t, e) {
  return function() {
    (e.apply(this, arguments) ? Vr : Zr)(this, t);
  };
}
function _a(t, e) {
  var n = Yr(t + "");
  if (arguments.length < 2) {
    for (var r = vn(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? ga : e ? da : pa)(n, e));
}
function ya() {
  this.textContent = "";
}
function ma(t) {
  return function() {
    this.textContent = t;
  };
}
function wa(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function va(t) {
  return arguments.length ? this.each(t == null ? ya : (typeof t == "function" ? wa : ma)(t)) : this.node().textContent;
}
function ba() {
  this.innerHTML = "";
}
function xa(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Ma(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function $a(t) {
  return arguments.length ? this.each(t == null ? ba : (typeof t == "function" ? Ma : xa)(t)) : this.node().innerHTML;
}
function Aa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ta() {
  return this.each(Aa);
}
function Sa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Pa() {
  return this.each(Sa);
}
function Ea(t) {
  var e = typeof t == "function" ? t : Hr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Na() {
  return null;
}
function za(t, e) {
  var n = typeof t == "function" ? t : Hr(t), r = e == null ? Na : typeof e == "function" ? e : wn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ka() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Oa() {
  return this.each(ka);
}
function Ia() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ca() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ra(t) {
  return this.select(t ? Ca : Ia);
}
function Fa(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function La(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Da(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Ha(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Ba(t, e, n) {
  return function() {
    var r = this.__on, i, o = La(e);
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
function qa(t, e, n) {
  var r = Da(t + ""), i, o = r.length, a;
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
  for (s = e ? Ba : Ha, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function Wr(t, e, n) {
  var r = Ur(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function Xa(t, e) {
  return function() {
    return Wr(this, t, e);
  };
}
function Ga(t, e) {
  return function() {
    return Wr(this, t, e.apply(this, arguments));
  };
}
function Ua(t, e) {
  return this.each((typeof e == "function" ? Ga : Xa)(t, e));
}
function* Ya() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Jr = [null];
function I(t, e) {
  this._groups = t, this._parents = e;
}
function Kt() {
  return new I([[document.documentElement]], Jr);
}
function Ka() {
  return this;
}
I.prototype = Kt.prototype = {
  constructor: I,
  select: wo,
  selectAll: Mo,
  selectChild: So,
  selectChildren: zo,
  filter: ko,
  data: Lo,
  enter: Oo,
  exit: Ho,
  join: Bo,
  merge: qo,
  selection: Ka,
  order: Xo,
  sort: Go,
  call: Yo,
  nodes: Ko,
  node: Vo,
  size: Zo,
  empty: Wo,
  each: Jo,
  attr: ia,
  style: ua,
  property: ha,
  classed: _a,
  text: va,
  html: $a,
  raise: Ta,
  lower: Pa,
  append: Ea,
  insert: za,
  remove: Oa,
  clone: Ra,
  datum: Fa,
  on: qa,
  dispatch: Ua,
  [Symbol.iterator]: Ya
};
function S(t) {
  return typeof t == "string" ? new I([[document.querySelector(t)]], [document.documentElement]) : new I([[t]], Jr);
}
function Va(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Qe(t, e) {
  if (t = Va(t), e === void 0 && (e = t.currentTarget), e) {
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
const Za = { passive: !1 }, Dt = { capture: !0, passive: !1 };
function qe(t) {
  t.stopImmediatePropagation();
}
function At(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Wa(t) {
  var e = t.document.documentElement, n = S(t).on("dragstart.drag", At, Dt);
  "onselectstart" in e ? n.on("selectstart.drag", At, Dt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Ja(t, e) {
  var n = t.document.documentElement, r = S(t).on("dragstart.drag", null);
  e && (r.on("click.drag", At, Dt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const te = (t) => () => t;
function je(t, {
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
je.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Qa(t) {
  return !t.ctrlKey && !t.button;
}
function ja() {
  return this.parentNode;
}
function ts(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function es() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function ns() {
  var t = Qa, e = ja, n = ts, r = es, i = {}, o = mn("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(_) {
    _.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", y, Za).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(_, w) {
    if (!(c || !t.call(this, _, w))) {
      var P = $(this, e.call(this, _, w), _, w, "mouse");
      P && (S(_.view).on("mousemove.drag", d, Dt).on("mouseup.drag", p, Dt), Wa(_.view), qe(_), l = !1, s = _.clientX, u = _.clientY, P("start", _));
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
    S(_.view).on("mousemove.drag mouseup.drag", null), Ja(_.view, l), At(_), i.mouse("end", _);
  }
  function b(_, w) {
    if (t.call(this, _, w)) {
      var P = _.changedTouches, E = e.call(this, _, w), N = P.length, G, W;
      for (G = 0; G < N; ++G)
        (W = $(this, E, _, w, P[G].identifier, P[G])) && (qe(_), W("start", _, P[G]));
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
  function $(_, w, P, E, N, G) {
    var W = o.copy(), v = Qe(G || P, w), U, z, L;
    if ((L = n.call(_, new je("beforestart", {
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
      return U = L.x - v[0] || 0, z = L.y - v[1] || 0, function Qt(st, ft, xt) {
        var R = v, Be;
        switch (st) {
          case "start":
            i[N] = Qt, Be = a++;
            break;
          case "end":
            delete i[N], --a;
          // falls through
          case "drag":
            v = Qe(xt || ft, w), Be = a;
            break;
        }
        W.call(
          st,
          _,
          new je(st, {
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
function bn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Qr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Vt() {
}
var Ht = 0.7, _e = 1 / Ht, Tt = "\\s*([+-]?\\d+)\\s*", Bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Y = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", rs = /^#([0-9a-f]{3,8})$/, is = new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`), os = new RegExp(`^rgb\\(${Y},${Y},${Y}\\)$`), as = new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${Bt}\\)$`), ss = new RegExp(`^rgba\\(${Y},${Y},${Y},${Bt}\\)$`), us = new RegExp(`^hsl\\(${Bt},${Y},${Y}\\)$`), ls = new RegExp(`^hsla\\(${Bt},${Y},${Y},${Bt}\\)$`), Yn = {
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
bn(Vt, _t, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Kn,
  // Deprecated! Use color.formatHex.
  formatHex: Kn,
  formatHex8: cs,
  formatHsl: fs,
  formatRgb: Vn,
  toString: Vn
});
function Kn() {
  return this.rgb().formatHex();
}
function cs() {
  return this.rgb().formatHex8();
}
function fs() {
  return jr(this).formatHsl();
}
function Vn() {
  return this.rgb().formatRgb();
}
function _t(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = rs.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Zn(e) : n === 3 ? new O(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? ee(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? ee(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = is.exec(t)) ? new O(e[1], e[2], e[3], 1) : (e = os.exec(t)) ? new O(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = as.exec(t)) ? ee(e[1], e[2], e[3], e[4]) : (e = ss.exec(t)) ? ee(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = us.exec(t)) ? Qn(e[1], e[2] / 100, e[3] / 100, 1) : (e = ls.exec(t)) ? Qn(e[1], e[2] / 100, e[3] / 100, e[4]) : Yn.hasOwnProperty(t) ? Zn(Yn[t]) : t === "transparent" ? new O(NaN, NaN, NaN, 0) : null;
}
function Zn(t) {
  return new O(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function ee(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new O(t, e, n, r);
}
function hs(t) {
  return t instanceof Vt || (t = _t(t)), t ? (t = t.rgb(), new O(t.r, t.g, t.b, t.opacity)) : new O();
}
function tn(t, e, n, r) {
  return arguments.length === 1 ? hs(t) : new O(t, e, n, r ?? 1);
}
function O(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
bn(O, tn, Qr(Vt, {
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
  hex: Wn,
  // Deprecated! Use color.formatHex.
  formatHex: Wn,
  formatHex8: ds,
  formatRgb: Jn,
  toString: Jn
}));
function Wn() {
  return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}`;
}
function ds() {
  return `#${dt(this.r)}${dt(this.g)}${dt(this.b)}${dt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Jn() {
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
function Qn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new B(t, e, n, r);
}
function jr(t) {
  if (t instanceof B) return new B(t.h, t.s, t.l, t.opacity);
  if (t instanceof Vt || (t = _t(t)), !t) return new B();
  if (t instanceof B) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new B(a, s, u, t.opacity);
}
function ps(t, e, n, r) {
  return arguments.length === 1 ? jr(t) : new B(t, e, n, r ?? 1);
}
function B(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
bn(B, ps, Qr(Vt, {
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
    return new B(jn(this.h), ne(this.s), ne(this.l), ye(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ye(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${jn(this.h)}, ${ne(this.s) * 100}%, ${ne(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function jn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ne(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Xe(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const xn = (t) => () => t;
function gs(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function _s(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ys(t) {
  return (t = +t) == 1 ? ti : function(e, n) {
    return n - e ? _s(e, n, t) : xn(isNaN(e) ? n : e);
  };
}
function ti(t, e) {
  var n = e - t;
  return n ? gs(t, n) : xn(isNaN(t) ? e : t);
}
const me = (function t(e) {
  var n = ys(e);
  function r(i, o) {
    var a = n((i = tn(i)).r, (o = tn(o)).r), s = n(i.g, o.g), u = n(i.b, o.b), l = ti(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function ms(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function ws(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function vs(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = Mn(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function bs(t, e) {
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
function xs(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Mn(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var en = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ge = new RegExp(en.source, "g");
function Ms(t) {
  return function() {
    return t;
  };
}
function $s(t) {
  return function(e) {
    return t(e) + "";
  };
}
function ei(t, e) {
  var n = en.lastIndex = Ge.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", e = e + ""; (r = en.exec(t)) && (i = Ge.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: D(r, i) })), n = Ge.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? $s(u[0].x) : Ms(e) : (e = u.length, function(l) {
    for (var c = 0, f; c < e; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function Mn(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? xn(e) : (n === "number" ? D : n === "string" ? (r = _t(e)) ? (e = r, me) : ei : e instanceof _t ? me : e instanceof Date ? bs : ws(e) ? ms : Array.isArray(e) ? vs : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? xs : D)(t, e);
}
function As(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var tr = 180 / Math.PI, nn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function ni(t, e, n, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (u = t * n + e * r) && (n -= t * u, r -= e * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), t * r < e * n && (t = -t, e = -e, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * tr,
    skewX: Math.atan(u) * tr,
    scaleX: a,
    scaleY: s
  };
}
var re;
function Ts(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? nn : ni(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Ss(t) {
  return t == null || (re || (re = document.createElementNS("http://www.w3.org/2000/svg", "g")), re.setAttribute("transform", t), !(t = re.transform.baseVal.consolidate())) ? nn : (t = t.matrix, ni(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ri(t, e, n, r) {
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
var Ps = ri(Ts, "px, ", "px)", "deg)"), Es = ri(Ss, ", ", ")", ")"), Nt = 0, Ct = 0, Ot = 0, ii = 1e3, we, Rt, ve = 0, yt = 0, Te = 0, qt = typeof performance == "object" && performance.now ? performance : Date, oi = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Se() {
  return yt || (oi(Ns), yt = qt.now() + Te);
}
function Ns() {
  yt = 0;
}
function Xt() {
  this._call = this._time = this._next = null;
}
Xt.prototype = ai.prototype = {
  constructor: Xt,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Se() : +n) + (e == null ? 0 : +e), !this._next && Rt !== this && (Rt ? Rt._next = this : we = this, Rt = this), this._call = t, this._time = n, rn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, rn());
  }
};
function ai(t, e, n) {
  var r = new Xt();
  return r.restart(t, e, n), r;
}
function zs() {
  Se(), ++Nt;
  for (var t = we, e; t; )
    (e = yt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Nt;
}
function er() {
  yt = (ve = qt.now()) + Te, Nt = Ct = 0;
  try {
    zs();
  } finally {
    Nt = 0, Os(), yt = 0;
  }
}
function ks() {
  var t = qt.now(), e = t - ve;
  e > ii && (Te -= e, ve = t);
}
function Os() {
  for (var t, e = we, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : we = n);
  Rt = t, rn(r);
}
function rn(t) {
  if (!Nt) {
    Ct && (Ct = clearTimeout(Ct));
    var e = t - yt;
    e > 24 ? (t < 1 / 0 && (Ct = setTimeout(er, t - qt.now() - Te)), Ot && (Ot = clearInterval(Ot))) : (Ot || (ve = qt.now(), Ot = setInterval(ks, ii)), Nt = 1, oi(er));
  }
}
function nr(t, e, n) {
  var r = new Xt();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
function Is(t, e, n) {
  var r = new Xt(), i = e;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Se() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, e, n), r;
}
var Cs = mn("start", "end", "cancel", "interrupt"), Rs = [], si = 0, rr = 1, on = 2, le = 3, ir = 4, an = 5, ce = 6;
function Pe(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  Fs(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Cs,
    tween: Rs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: si
  });
}
function $n(t, e) {
  var n = q(t, e);
  if (n.state > si) throw new Error("too late; already scheduled");
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
function Fs(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = ai(o, 0, n.time);
  function o(l) {
    n.state = rr, n.timer.restart(a, n.delay, n.time), n.delay <= l && a(l - n.delay);
  }
  function a(l) {
    var c, f, h, g;
    if (n.state !== rr) return u();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === le) return nr(a);
        g.state === ir ? (g.state = ce, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[c]) : +c < e && (g.state = ce, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[c]);
      }
    if (nr(function() {
      n.state === le && (n.state = ir, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = on, n.on.call("start", t, t.__data__, n.index, n.group), n.state === on) {
      for (n.state = le, i = new Array(h = n.tween.length), c = 0, f = -1; c < h; ++c)
        (g = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = g);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = an, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    n.state === an && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = ce, n.timer.stop(), delete r[e];
    for (var l in r) return;
    delete t.__transition;
  }
}
function Ls(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > on && r.state < an, r.state = ce, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function Ds(t) {
  return this.each(function() {
    Ls(this, t);
  });
}
function Hs(t, e) {
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
function Bs(t, e, n) {
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
function qs(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = q(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? Hs : Bs)(n, t, e));
}
function An(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = Z(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return q(i, r).value[e];
  };
}
function ui(t, e) {
  var n;
  return (typeof e == "number" ? D : e instanceof _t ? me : (n = _t(e)) ? (e = n, me) : ei)(t, e);
}
function Xs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Gs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Us(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Ys(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Ks(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function Vs(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function Zs(t, e) {
  var n = Ae(t), r = n === "transform" ? Es : ui;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Vs : Ks)(n, r, An(this, "attr." + t, e)) : e == null ? (n.local ? Gs : Xs)(n) : (n.local ? Ys : Us)(n, r, e));
}
function Ws(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Js(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Qs(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Js(t, o)), n;
  }
  return i._value = e, i;
}
function js(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && Ws(t, o)), n;
  }
  return i._value = e, i;
}
function tu(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = Ae(t);
  return this.tween(n, (r.local ? Qs : js)(r, e));
}
function eu(t, e) {
  return function() {
    $n(this, t).delay = +e.apply(this, arguments);
  };
}
function nu(t, e) {
  return e = +e, function() {
    $n(this, t).delay = e;
  };
}
function ru(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? eu : nu)(e, t)) : q(this.node(), e).delay;
}
function iu(t, e) {
  return function() {
    Z(this, t).duration = +e.apply(this, arguments);
  };
}
function ou(t, e) {
  return e = +e, function() {
    Z(this, t).duration = e;
  };
}
function au(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? iu : ou)(e, t)) : q(this.node(), e).duration;
}
function su(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    Z(this, t).ease = e;
  };
}
function uu(t) {
  var e = this._id;
  return arguments.length ? this.each(su(e, t)) : q(this.node(), e).ease;
}
function lu(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Z(this, t).ease = n;
  };
}
function cu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(lu(this._id, t));
}
function fu(t) {
  typeof t != "function" && (t = qr(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new et(r, this._parents, this._name, this._id);
}
function hu(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = e[s], l = n[s], c = u.length, f = a[s] = new Array(c), h, g = 0; g < c; ++g)
      (h = u[g] || l[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = e[s];
  return new et(a, this._parents, this._name, this._id);
}
function du(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function pu(t, e, n) {
  var r, i, o = du(e) ? $n : Z;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function gu(t, e) {
  var n = this._id;
  return arguments.length < 2 ? q(this.node(), n).on.on(t) : this.each(pu(n, t, e));
}
function _u(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function yu() {
  return this.on("end.remove", _u(this._id));
}
function mu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = wn(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, Pe(l[h], e, n, h, l, q(c, n)));
  return new et(o, this._parents, e, n);
}
function wu(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Br(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), g, d = q(c, n), p = 0, b = h.length; p < b; ++p)
          (g = h[p]) && Pe(g, e, n, p, h, d);
        o.push(h), a.push(c);
      }
  return new et(o, a, e, n);
}
var vu = Kt.prototype.constructor;
function bu() {
  return new vu(this._groups, this._parents);
}
function xu(t, e) {
  var n, r, i;
  return function() {
    var o = Et(this, t), a = (this.style.removeProperty(t), Et(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function li(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Mu(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = Et(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function $u(t, e, n) {
  var r, i, o;
  return function() {
    var a = Et(this, t), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), Et(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s));
  };
}
function Au(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var u = Z(this, t), l = u.on, c = u.value[o] == null ? s || (s = li(e)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(a, i = c), u.on = r;
  };
}
function Tu(t, e, n) {
  var r = (t += "") == "transform" ? Ps : ui;
  return e == null ? this.styleTween(t, xu(t, r)).on("end.style." + t, li(t)) : typeof e == "function" ? this.styleTween(t, $u(t, r, An(this, "style." + t, e))).each(Au(this._id, t)) : this.styleTween(t, Mu(t, r, e), n).on("end.style." + t, null);
}
function Su(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function Pu(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Su(t, a, n)), r;
  }
  return o._value = e, o;
}
function Eu(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Pu(t, e, n ?? ""));
}
function Nu(t) {
  return function() {
    this.textContent = t;
  };
}
function zu(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function ku(t) {
  return this.tween("text", typeof t == "function" ? zu(An(this, "text", t)) : Nu(t == null ? "" : t + ""));
}
function Ou(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Iu(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && Ou(i)), e;
  }
  return r._value = t, r;
}
function Cu(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, Iu(t));
}
function Ru() {
  for (var t = this._name, e = this._id, n = ci(), r = this._groups, i = r.length, o = 0; o < i; ++o)
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
  return new et(r, this._parents, t, n);
}
function Fu() {
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
var Lu = 0;
function et(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function ci() {
  return ++Lu;
}
var J = Kt.prototype;
et.prototype = {
  constructor: et,
  select: mu,
  selectAll: wu,
  selectChild: J.selectChild,
  selectChildren: J.selectChildren,
  filter: fu,
  merge: hu,
  selection: bu,
  transition: Ru,
  call: J.call,
  nodes: J.nodes,
  node: J.node,
  size: J.size,
  empty: J.empty,
  each: J.each,
  on: gu,
  attr: Zs,
  attrTween: tu,
  style: Tu,
  styleTween: Eu,
  text: ku,
  textTween: Cu,
  remove: yu,
  tween: qs,
  delay: ru,
  duration: au,
  ease: uu,
  easeVarying: cu,
  end: Fu,
  [Symbol.iterator]: J[Symbol.iterator]
};
function Du(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Hu = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Du
};
function Bu(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function qu(t) {
  var e, n;
  t instanceof et ? (e = t._id, t = t._name) : (e = ci(), (n = Hu).time = Se(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Pe(u, t, e, l, a, n || Bu(u, e));
  return new et(r, this._parents, t, e);
}
Kt.prototype.interrupt = Ds;
Kt.prototype.transition = qu;
const sn = Math.PI, un = 2 * sn, ht = 1e-6, Xu = un - ht;
function fi(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Gu(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return fi;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class hi {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? fi : Gu(e);
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
      let g = r - a, d = i - s, p = u * u + l * l, b = g * g + d * d, y = Math.sqrt(p), x = Math.sqrt(h), $ = o * Math.tan((sn - Math.acos((p + h - b) / (2 * y * x))) / 2), _ = $ / x, w = $ / y;
      Math.abs(_ - 1) > ht && this._append`L${e + _ * c},${n + _ * f}`, this._append`A${o},${o},0,0,${+(f * g > c * d)},${this._x1 = e + w * u},${this._y1 = n + w * l}`;
    }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = e + s, c = n + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ht || Math.abs(this._y1 - c) > ht) && this._append`L${l},${c}`, r && (h < 0 && (h = h % un + un), h > Xu ? this._append`A${r},${r},0,1,${f},${e - s},${n - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ht && this._append`A${r},${r},0,${+(h >= sn)},${f},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function X() {
  return new hi();
}
X.prototype = hi.prototype;
function Uu(t) {
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
function Yu(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(n.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function Ku(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Vu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function xe(t) {
  if (!(e = Vu.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new Tn({
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
xe.prototype = Tn.prototype;
function Tn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Tn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Zu(t) {
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
var di;
function Wu(t, e) {
  var n = be(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (di = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + be(t, Math.max(0, e + o - 1))[0];
}
function or(t, e) {
  var n = be(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const ar = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Uu,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => or(t * 100, e),
  r: or,
  s: Wu,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function sr(t) {
  return t;
}
var ur = Array.prototype.map, lr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Ju(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? sr : Yu(ur.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? sr : Ku(ur.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = xe(f);
    var h = f.fill, g = f.align, d = f.sign, p = f.symbol, b = f.zero, y = f.width, x = f.comma, $ = f.precision, _ = f.trim, w = f.type;
    w === "n" ? (x = !0, w = "g") : ar[w] || ($ === void 0 && ($ = 12), _ = !0, w = "g"), (b || h === "0" && g === "=") && (b = !0, h = "0", g = "=");
    var P = p === "$" ? n : p === "#" && /[boxX]/.test(w) ? "0" + w.toLowerCase() : "", E = p === "$" ? r : /[%p]/.test(w) ? a : "", N = ar[w], G = /[defgprs%]/.test(w);
    $ = $ === void 0 ? 6 : /[gprs]/.test(w) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function W(v) {
      var U = P, z = E, L, Qt, st;
      if (w === "c")
        z = N(v) + z, v = "";
      else {
        v = +v;
        var ft = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? u : N(Math.abs(v), $), _ && (v = Zu(v)), ft && +v == 0 && d !== "+" && (ft = !1), U = (ft ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + U, z = (w === "s" ? lr[8 + di / 3] : "") + z + (ft && d === "(" ? ")" : ""), G) {
          for (L = -1, Qt = v.length; ++L < Qt; )
            if (st = v.charCodeAt(L), 48 > st || st > 57) {
              z = (st === 46 ? i + v.slice(L + 1) : v.slice(L)) + z, v = v.slice(0, L);
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
    var g = l((f = xe(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(zt(h) / 3))) * 3, p = Math.pow(10, -d), b = lr[8 + d / 3];
    return function(y) {
      return g(p * y) + b;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var ie, Ee, pi;
Qu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Qu(t) {
  return ie = Ju(t), Ee = ie.format, pi = ie.formatPrefix, ie;
}
function ju(t) {
  return Math.max(0, -zt(Math.abs(t)));
}
function tl(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(zt(e) / 3))) * 3 - zt(Math.abs(t)));
}
function el(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, zt(e) - zt(t)) + 1;
}
function nl(t, e) {
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
function rl(t) {
  return function() {
    return t;
  };
}
function il(t) {
  return +t;
}
var cr = [0, 1];
function $t(t) {
  return t;
}
function ln(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : rl(isNaN(e) ? NaN : 0.5);
}
function ol(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function al(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = ln(i, r), o = n(a, o)) : (r = ln(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function sl(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = ln(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var u = oo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function ul(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function ll() {
  var t = cr, e = cr, n = Mn, r, i, o, a = $t, s, u, l;
  function c() {
    var h = Math.min(t.length, e.length);
    return a !== $t && (a = ol(t[0], t[h - 1])), s = h > 2 ? sl : al, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), e, n)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(e, t.map(r), D)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, il), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), c()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = As, c();
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
function cl() {
  return ll()($t, $t);
}
function fl(t, e, n, r) {
  var i = co(t, e, n), o;
  switch (r = xe(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = tl(i, a)) && (r.precision = o), pi(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = el(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = ju(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Ee(r);
}
function hl(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return lo(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return fl(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = We(a, s, n), l === u)
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
  var t = cl();
  return t.copy = function() {
    return ul(t, K());
  }, nl.apply(t, arguments), hl(t);
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
var gi = typeof global == "object" && global && global.Object === Object && global, dl = typeof self == "object" && self && self.Object === Object && self, it = gi || dl || Function("return this")(), V = it.Symbol, _i = Object.prototype, pl = _i.hasOwnProperty, gl = _i.toString, It = V ? V.toStringTag : void 0;
function _l(t) {
  var e = pl.call(t, It), n = t[It];
  try {
    t[It] = void 0;
    var r = !0;
  } catch {
  }
  var i = gl.call(t);
  return r && (e ? t[It] = n : delete t[It]), i;
}
var yl = Object.prototype, ml = yl.toString;
function wl(t) {
  return ml.call(t);
}
var vl = "[object Null]", bl = "[object Undefined]", fr = V ? V.toStringTag : void 0;
function wt(t) {
  return t == null ? t === void 0 ? bl : vl : fr && fr in Object(t) ? _l(t) : wl(t);
}
function ct(t) {
  return t != null && typeof t == "object";
}
var xl = "[object Symbol]";
function Ne(t) {
  return typeof t == "symbol" || ct(t) && wt(t) == xl;
}
function Zt(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var C = Array.isArray, hr = V ? V.prototype : void 0, dr = hr ? hr.toString : void 0;
function yi(t) {
  if (typeof t == "string")
    return t;
  if (C(t))
    return Zt(t, yi) + "";
  if (Ne(t))
    return dr ? dr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Ml = /\s/;
function $l(t) {
  for (var e = t.length; e-- && Ml.test(t.charAt(e)); )
    ;
  return e;
}
var Al = /^\s+/;
function Tl(t) {
  return t && t.slice(0, $l(t) + 1).replace(Al, "");
}
function nt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var pr = NaN, Sl = /^[-+]0x[0-9a-f]+$/i, Pl = /^0b[01]+$/i, El = /^0o[0-7]+$/i, Nl = parseInt;
function zl(t) {
  if (typeof t == "number")
    return t;
  if (Ne(t))
    return pr;
  if (nt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = nt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Tl(t);
  var n = Pl.test(t);
  return n || El.test(t) ? Nl(t.slice(2), n ? 2 : 8) : Sl.test(t) ? pr : +t;
}
var gr = 1 / 0, kl = 17976931348623157e292;
function Ue(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = zl(t), t === gr || t === -gr) {
    var e = t < 0 ? -1 : 1;
    return e * kl;
  }
  return t === t ? t : 0;
}
function ze(t) {
  return t;
}
var Ol = "[object AsyncFunction]", Il = "[object Function]", Cl = "[object GeneratorFunction]", Rl = "[object Proxy]";
function mi(t) {
  if (!nt(t))
    return !1;
  var e = wt(t);
  return e == Il || e == Cl || e == Ol || e == Rl;
}
var Ye = it["__core-js_shared__"], _r = (function() {
  var t = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function Fl(t) {
  return !!_r && _r in t;
}
var Ll = Function.prototype, Dl = Ll.toString;
function vt(t) {
  if (t != null) {
    try {
      return Dl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Hl = /[\\^$.*+?()[\]{}|]/g, Bl = /^\[object .+?Constructor\]$/, ql = Function.prototype, Xl = Object.prototype, Gl = ql.toString, Ul = Xl.hasOwnProperty, Yl = RegExp(
  "^" + Gl.call(Ul).replace(Hl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Kl(t) {
  if (!nt(t) || Fl(t))
    return !1;
  var e = mi(t) ? Yl : Bl;
  return e.test(vt(t));
}
function Vl(t, e) {
  return t == null ? void 0 : t[e];
}
function bt(t, e) {
  var n = Vl(t, e);
  return Kl(n) ? n : void 0;
}
var cn = bt(it, "WeakMap");
function Zl(t, e, n) {
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
var Wl = 800, Jl = 16, Ql = Date.now;
function jl(t) {
  var e = 0, n = 0;
  return function() {
    var r = Ql(), i = Jl - (r - n);
    if (n = r, i > 0) {
      if (++e >= Wl)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function tc(t) {
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
})(), ec = Me ? function(t, e) {
  return Me(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: tc(e),
    writable: !0
  });
} : ze, nc = jl(ec);
function rc(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function ic(t, e, n, r) {
  for (var i = t.length, o = n + -1; ++o < i; )
    if (e(t[o], o, t))
      return o;
  return -1;
}
function oc(t) {
  return t !== t;
}
function ac(t, e, n) {
  for (var r = n - 1, i = t.length; ++r < i; )
    if (t[r] === e)
      return r;
  return -1;
}
function sc(t, e, n) {
  return e === e ? ac(t, e, n) : ic(t, oc, n);
}
function uc(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && sc(t, e, 0) > -1;
}
var lc = 9007199254740991, cc = /^(?:0|[1-9]\d*)$/;
function ke(t, e) {
  var n = typeof t;
  return e = e ?? lc, !!e && (n == "number" || n != "symbol" && cc.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function fc(t, e, n) {
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
var hc = Object.prototype, dc = hc.hasOwnProperty;
function pc(t, e, n) {
  var r = t[e];
  (!(dc.call(t, e) && Oe(r, n)) || n === void 0 && !(e in t)) && fc(t, e, n);
}
var yr = Math.max;
function gc(t, e, n) {
  return e = yr(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, i = -1, o = yr(r.length - e, 0), a = Array(o); ++i < o; )
      a[i] = r[e + i];
    i = -1;
    for (var s = Array(e + 1); ++i < e; )
      s[i] = r[i];
    return s[e] = n(a), Zl(t, this, s);
  };
}
function _c(t, e) {
  return nc(gc(t, e, ze), t + "");
}
var yc = 9007199254740991;
function Sn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= yc;
}
function kt(t) {
  return t != null && Sn(t.length) && !mi(t);
}
function mc(t, e, n) {
  if (!nt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? kt(n) && ke(e, n.length) : r == "string" && e in n) ? Oe(n[e], t) : !1;
}
var wc = Object.prototype;
function wi(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || wc;
  return t === n;
}
function vc(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var bc = "[object Arguments]";
function mr(t) {
  return ct(t) && wt(t) == bc;
}
var vi = Object.prototype, xc = vi.hasOwnProperty, Mc = vi.propertyIsEnumerable, Pn = mr(/* @__PURE__ */ (function() {
  return arguments;
})()) ? mr : function(t) {
  return ct(t) && xc.call(t, "callee") && !Mc.call(t, "callee");
};
function $c() {
  return !1;
}
var bi = typeof exports == "object" && exports && !exports.nodeType && exports, wr = bi && typeof module == "object" && module && !module.nodeType && module, Ac = wr && wr.exports === bi, vr = Ac ? it.Buffer : void 0, Tc = vr ? vr.isBuffer : void 0, fn = Tc || $c, Sc = "[object Arguments]", Pc = "[object Array]", Ec = "[object Boolean]", Nc = "[object Date]", zc = "[object Error]", kc = "[object Function]", Oc = "[object Map]", Ic = "[object Number]", Cc = "[object Object]", Rc = "[object RegExp]", Fc = "[object Set]", Lc = "[object String]", Dc = "[object WeakMap]", Hc = "[object ArrayBuffer]", Bc = "[object DataView]", qc = "[object Float32Array]", Xc = "[object Float64Array]", Gc = "[object Int8Array]", Uc = "[object Int16Array]", Yc = "[object Int32Array]", Kc = "[object Uint8Array]", Vc = "[object Uint8ClampedArray]", Zc = "[object Uint16Array]", Wc = "[object Uint32Array]", M = {};
M[qc] = M[Xc] = M[Gc] = M[Uc] = M[Yc] = M[Kc] = M[Vc] = M[Zc] = M[Wc] = !0;
M[Sc] = M[Pc] = M[Hc] = M[Ec] = M[Bc] = M[Nc] = M[zc] = M[kc] = M[Oc] = M[Ic] = M[Cc] = M[Rc] = M[Fc] = M[Lc] = M[Dc] = !1;
function Jc(t) {
  return ct(t) && Sn(t.length) && !!M[wt(t)];
}
function Qc(t) {
  return function(e) {
    return t(e);
  };
}
var xi = typeof exports == "object" && exports && !exports.nodeType && exports, Lt = xi && typeof module == "object" && module && !module.nodeType && module, jc = Lt && Lt.exports === xi, Ke = jc && gi.process, br = (function() {
  try {
    var t = Lt && Lt.require && Lt.require("util").types;
    return t || Ke && Ke.binding && Ke.binding("util");
  } catch {
  }
})(), xr = br && br.isTypedArray, Mi = xr ? Qc(xr) : Jc, tf = Object.prototype, ef = tf.hasOwnProperty;
function $i(t, e) {
  var n = C(t), r = !n && Pn(t), i = !n && !r && fn(t), o = !n && !r && !i && Mi(t), a = n || r || i || o, s = a ? vc(t.length, String) : [], u = s.length;
  for (var l in t)
    (e || ef.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    ke(l, u))) && s.push(l);
  return s;
}
function Ai(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var nf = Ai(Object.keys, Object), rf = Object.prototype, of = rf.hasOwnProperty;
function af(t) {
  if (!wi(t))
    return nf(t);
  var e = [];
  for (var n in Object(t))
    of.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Wt(t) {
  return kt(t) ? $i(t) : af(t);
}
function sf(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var uf = Object.prototype, lf = uf.hasOwnProperty;
function cf(t) {
  if (!nt(t))
    return sf(t);
  var e = wi(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !lf.call(t, r)) || n.push(r);
  return n;
}
function ff(t) {
  return kt(t) ? $i(t, !0) : cf(t);
}
var hf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, df = /^\w*$/;
function En(t, e) {
  if (C(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Ne(t) ? !0 : df.test(t) || !hf.test(t) || e != null && t in Object(e);
}
var Gt = bt(Object, "create");
function pf() {
  this.__data__ = Gt ? Gt(null) : {}, this.size = 0;
}
function gf(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var _f = "__lodash_hash_undefined__", yf = Object.prototype, mf = yf.hasOwnProperty;
function wf(t) {
  var e = this.__data__;
  if (Gt) {
    var n = e[t];
    return n === _f ? void 0 : n;
  }
  return mf.call(e, t) ? e[t] : void 0;
}
var vf = Object.prototype, bf = vf.hasOwnProperty;
function xf(t) {
  var e = this.__data__;
  return Gt ? e[t] !== void 0 : bf.call(e, t);
}
var Mf = "__lodash_hash_undefined__";
function $f(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Gt && e === void 0 ? Mf : e, this;
}
function mt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = pf;
mt.prototype.delete = gf;
mt.prototype.get = wf;
mt.prototype.has = xf;
mt.prototype.set = $f;
function Af() {
  this.__data__ = [], this.size = 0;
}
function Ie(t, e) {
  for (var n = t.length; n--; )
    if (Oe(t[n][0], e))
      return n;
  return -1;
}
var Tf = Array.prototype, Sf = Tf.splice;
function Pf(t) {
  var e = this.__data__, n = Ie(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Sf.call(e, n, 1), --this.size, !0;
}
function Ef(t) {
  var e = this.__data__, n = Ie(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Nf(t) {
  return Ie(this.__data__, t) > -1;
}
function zf(t, e) {
  var n = this.__data__, r = Ie(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function ot(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = Af;
ot.prototype.delete = Pf;
ot.prototype.get = Ef;
ot.prototype.has = Nf;
ot.prototype.set = zf;
var Ut = bt(it, "Map");
function kf() {
  this.size = 0, this.__data__ = {
    hash: new mt(),
    map: new (Ut || ot)(),
    string: new mt()
  };
}
function Of(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ce(t, e) {
  var n = t.__data__;
  return Of(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function If(t) {
  var e = Ce(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Cf(t) {
  return Ce(this, t).get(t);
}
function Rf(t) {
  return Ce(this, t).has(t);
}
function Ff(t, e) {
  var n = Ce(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function at(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = kf;
at.prototype.delete = If;
at.prototype.get = Cf;
at.prototype.has = Rf;
at.prototype.set = Ff;
var Lf = "Expected a function";
function Nn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Lf);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (Nn.Cache || at)(), n;
}
Nn.Cache = at;
var Df = 500;
function Hf(t) {
  var e = Nn(t, function(r) {
    return n.size === Df && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Bf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qf = /\\(\\)?/g, Xf = Hf(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Bf, function(n, r, i, o) {
    e.push(i ? o.replace(qf, "$1") : r || n);
  }), e;
});
function Re(t) {
  return t == null ? "" : yi(t);
}
function Fe(t, e) {
  return C(t) ? t : En(t, e) ? [t] : Xf(Re(t));
}
function Jt(t) {
  if (typeof t == "string" || Ne(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function zn(t, e) {
  e = Fe(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[Jt(e[n++])];
  return n && n == r ? t : void 0;
}
function Gf(t, e, n) {
  var r = t == null ? void 0 : zn(t, e);
  return r === void 0 ? n : r;
}
function kn(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var Mr = V ? V.isConcatSpreadable : void 0;
function Uf(t) {
  return C(t) || Pn(t) || !!(Mr && t && t[Mr]);
}
function Yf(t, e, n, r, i) {
  var o = -1, a = t.length;
  for (n || (n = Uf), i || (i = []); ++o < a; ) {
    var s = t[o];
    n(s) ? kn(i, s) : i[i.length] = s;
  }
  return i;
}
function Kf(t) {
  var e = t == null ? 0 : t.length;
  return e ? Yf(t) : [];
}
var Vf = Ai(Object.getPrototypeOf, Object);
function Zf(t, e, n) {
  var r = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + e];
  return o;
}
function Wf(t, e, n) {
  var r = t.length;
  return n = n === void 0 ? r : n, !e && n >= r ? t : Zf(t, e, n);
}
var Jf = "\\ud800-\\udfff", Qf = "\\u0300-\\u036f", jf = "\\ufe20-\\ufe2f", th = "\\u20d0-\\u20ff", eh = Qf + jf + th, nh = "\\ufe0e\\ufe0f", rh = "\\u200d", ih = RegExp("[" + rh + Jf + eh + nh + "]");
function Ti(t) {
  return ih.test(t);
}
function oh(t) {
  return t.split("");
}
var Si = "\\ud800-\\udfff", ah = "\\u0300-\\u036f", sh = "\\ufe20-\\ufe2f", uh = "\\u20d0-\\u20ff", lh = ah + sh + uh, ch = "\\ufe0e\\ufe0f", fh = "[" + Si + "]", hn = "[" + lh + "]", dn = "\\ud83c[\\udffb-\\udfff]", hh = "(?:" + hn + "|" + dn + ")", Pi = "[^" + Si + "]", Ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ni = "[\\ud800-\\udbff][\\udc00-\\udfff]", dh = "\\u200d", zi = hh + "?", ki = "[" + ch + "]?", ph = "(?:" + dh + "(?:" + [Pi, Ei, Ni].join("|") + ")" + ki + zi + ")*", gh = ki + zi + ph, _h = "(?:" + [Pi + hn + "?", hn, Ei, Ni, fh].join("|") + ")", yh = RegExp(dn + "(?=" + dn + ")|" + _h + gh, "g");
function mh(t) {
  return t.match(yh) || [];
}
function wh(t) {
  return Ti(t) ? mh(t) : oh(t);
}
function vh(t) {
  return function(e) {
    e = Re(e);
    var n = Ti(e) ? wh(e) : void 0, r = n ? n[0] : e.charAt(0), i = n ? Wf(n, 1).join("") : e.slice(1);
    return r[t]() + i;
  };
}
var bh = vh("toUpperCase");
function xh(t) {
  return bh(Re(t).toLowerCase());
}
function Mh() {
  this.__data__ = new ot(), this.size = 0;
}
function $h(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Ah(t) {
  return this.__data__.get(t);
}
function Th(t) {
  return this.__data__.has(t);
}
var Sh = 200;
function Ph(t, e) {
  var n = this.__data__;
  if (n instanceof ot) {
    var r = n.__data__;
    if (!Ut || r.length < Sh - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new at(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function tt(t) {
  var e = this.__data__ = new ot(t);
  this.size = e.size;
}
tt.prototype.clear = Mh;
tt.prototype.delete = $h;
tt.prototype.get = Ah;
tt.prototype.has = Th;
tt.prototype.set = Ph;
function Eh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function Oi() {
  return [];
}
var Nh = Object.prototype, zh = Nh.propertyIsEnumerable, $r = Object.getOwnPropertySymbols, Ii = $r ? function(t) {
  return t == null ? [] : (t = Object(t), Eh($r(t), function(e) {
    return zh.call(t, e);
  }));
} : Oi, kh = Object.getOwnPropertySymbols, Oh = kh ? function(t) {
  for (var e = []; t; )
    kn(e, Ii(t)), t = Vf(t);
  return e;
} : Oi;
function Ci(t, e, n) {
  var r = e(t);
  return C(t) ? r : kn(r, n(t));
}
function Ar(t) {
  return Ci(t, Wt, Ii);
}
function Ih(t) {
  return Ci(t, ff, Oh);
}
var pn = bt(it, "DataView"), gn = bt(it, "Promise"), _n = bt(it, "Set"), Tr = "[object Map]", Ch = "[object Object]", Sr = "[object Promise]", Pr = "[object Set]", Er = "[object WeakMap]", Nr = "[object DataView]", Rh = vt(pn), Fh = vt(Ut), Lh = vt(gn), Dh = vt(_n), Hh = vt(cn), Q = wt;
(pn && Q(new pn(new ArrayBuffer(1))) != Nr || Ut && Q(new Ut()) != Tr || gn && Q(gn.resolve()) != Sr || _n && Q(new _n()) != Pr || cn && Q(new cn()) != Er) && (Q = function(t) {
  var e = wt(t), n = e == Ch ? t.constructor : void 0, r = n ? vt(n) : "";
  if (r)
    switch (r) {
      case Rh:
        return Nr;
      case Fh:
        return Tr;
      case Lh:
        return Sr;
      case Dh:
        return Pr;
      case Hh:
        return Er;
    }
  return e;
});
var zr = it.Uint8Array, Bh = "__lodash_hash_undefined__";
function qh(t) {
  return this.__data__.set(t, Bh), this;
}
function Xh(t) {
  return this.__data__.has(t);
}
function Yt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new at(); ++e < n; )
    this.add(t[e]);
}
Yt.prototype.add = Yt.prototype.push = qh;
Yt.prototype.has = Xh;
function Gh(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function Ri(t, e) {
  return t.has(e);
}
var Uh = 1, Yh = 2;
function Fi(t, e, n, r, i, o) {
  var a = n & Uh, s = t.length, u = e.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(e);
  if (l && c)
    return l == e && c == t;
  var f = -1, h = !0, g = n & Yh ? new Yt() : void 0;
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
      if (!Gh(e, function(y, x) {
        if (!Ri(g, x) && (d === y || i(d, y, n, r, o)))
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
function Li(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function Kh(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var Vh = 1, Zh = 2, Wh = "[object Boolean]", Jh = "[object Date]", Qh = "[object Error]", jh = "[object Map]", td = "[object Number]", ed = "[object RegExp]", nd = "[object Set]", rd = "[object String]", id = "[object Symbol]", od = "[object ArrayBuffer]", ad = "[object DataView]", kr = V ? V.prototype : void 0, Ve = kr ? kr.valueOf : void 0;
function sd(t, e, n, r, i, o, a) {
  switch (n) {
    case ad:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case od:
      return !(t.byteLength != e.byteLength || !o(new zr(t), new zr(e)));
    case Wh:
    case Jh:
    case td:
      return Oe(+t, +e);
    case Qh:
      return t.name == e.name && t.message == e.message;
    case ed:
    case rd:
      return t == e + "";
    case jh:
      var s = Li;
    case nd:
      var u = r & Vh;
      if (s || (s = Kh), t.size != e.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == e;
      r |= Zh, a.set(t, e);
      var c = Fi(s(t), s(e), r, i, o, a);
      return a.delete(t), c;
    case id:
      if (Ve)
        return Ve.call(t) == Ve.call(e);
  }
  return !1;
}
var ud = 1, ld = Object.prototype, cd = ld.hasOwnProperty;
function fd(t, e, n, r, i, o) {
  var a = n & ud, s = Ar(t), u = s.length, l = Ar(e), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in e : cd.call(e, h)))
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
      var $ = a ? r(x, y, h, e, t, o) : r(y, x, h, t, e, o);
    if (!($ === void 0 ? y === x || i(y, x, n, r, o) : $)) {
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
var hd = 1, Or = "[object Arguments]", Ir = "[object Array]", oe = "[object Object]", dd = Object.prototype, Cr = dd.hasOwnProperty;
function pd(t, e, n, r, i, o) {
  var a = C(t), s = C(e), u = a ? Ir : Q(t), l = s ? Ir : Q(e);
  u = u == Or ? oe : u, l = l == Or ? oe : l;
  var c = u == oe, f = l == oe, h = u == l;
  if (h && fn(t)) {
    if (!fn(e))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new tt()), a || Mi(t) ? Fi(t, e, n, r, i, o) : sd(t, e, u, n, r, i, o);
  if (!(n & hd)) {
    var g = c && Cr.call(t, "__wrapped__"), d = f && Cr.call(e, "__wrapped__");
    if (g || d) {
      var p = g ? t.value() : t, b = d ? e.value() : e;
      return o || (o = new tt()), i(p, b, n, r, o);
    }
  }
  return h ? (o || (o = new tt()), fd(t, e, n, r, i, o)) : !1;
}
function On(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !ct(t) && !ct(e) ? t !== t && e !== e : pd(t, e, n, r, On, i);
}
var gd = 1, _d = 2;
function yd(t, e, n, r) {
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
      if (!(f === void 0 ? On(l, u, gd | _d, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function Di(t) {
  return t === t && !nt(t);
}
function md(t) {
  for (var e = Wt(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, Di(i)];
  }
  return e;
}
function Hi(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function wd(t) {
  var e = md(t);
  return e.length == 1 && e[0][2] ? Hi(e[0][0], e[0][1]) : function(n) {
    return n === t || yd(n, t, e);
  };
}
function vd(t, e) {
  return t != null && e in Object(t);
}
function Bi(t, e, n) {
  e = Fe(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = Jt(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Sn(i) && ke(a, i) && (C(t) || Pn(t)));
}
function bd(t, e) {
  return t != null && Bi(t, e, vd);
}
var xd = 1, Md = 2;
function $d(t, e) {
  return En(t) && Di(e) ? Hi(Jt(t), e) : function(n) {
    var r = Gf(n, t);
    return r === void 0 && r === e ? bd(n, t) : On(e, r, xd | Md);
  };
}
function Ad(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Td(t) {
  return function(e) {
    return zn(e, t);
  };
}
function Sd(t) {
  return En(t) ? Ad(Jt(t)) : Td(t);
}
function qi(t) {
  return typeof t == "function" ? t : t == null ? ze : typeof t == "object" ? C(t) ? $d(t[0], t[1]) : wd(t) : Sd(t);
}
function Pd(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var u = a[++i];
      if (n(o[u], u, o) === !1)
        break;
    }
    return e;
  };
}
var Ed = Pd();
function Nd(t, e) {
  return t && Ed(t, e, Wt);
}
function zd(t, e) {
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
var Xi = zd(Nd);
function kd(t) {
  return ct(t) && kt(t);
}
var Od = 200;
function Id(t, e, n, r) {
  var i = -1, o = uc, a = !0, s = t.length, u = [], l = e.length;
  if (!s)
    return u;
  e.length >= Od && (o = Ri, a = !1, e = new Yt(e));
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
function Cd(t) {
  return typeof t == "function" ? t : ze;
}
function fe(t, e) {
  var n = C(t) ? rc : Xi;
  return n(t, Cd(e));
}
function Rd(t, e) {
  return Zt(e, function(n) {
    return [n, t[n]];
  });
}
function Fd(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = [r, r];
  }), n;
}
var Ld = "[object Map]", Dd = "[object Set]";
function Hd(t) {
  return function(e) {
    var n = Q(e);
    return n == Ld ? Li(e) : n == Dd ? Fd(e) : Rd(e, t(e));
  };
}
var Gi = Hd(Wt);
function Bd(t, e) {
  var n = -1, r = kt(t) ? Array(t.length) : [];
  return Xi(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function rt(t, e) {
  var n = C(t) ? Zt : Bd;
  return n(t, qi(e));
}
var qd = Object.prototype, Xd = qd.hasOwnProperty;
function Gd(t, e) {
  return t != null && Xd.call(t, e);
}
function Ui(t, e) {
  return t != null && Bi(t, e, Gd);
}
function Ud(t, e) {
  return Zt(e, function(n) {
    return t[n];
  });
}
function Yd(t) {
  return t == null ? [] : Ud(t, Wt(t));
}
var Kd = "[object Boolean]";
function Vd(t) {
  return t === !0 || t === !1 || ct(t) && wt(t) == Kd;
}
function Zd(t, e, n, r) {
  if (!nt(t))
    return t;
  e = Fe(e, t);
  for (var i = -1, o = e.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = Jt(e[i]), l = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var c = s[u];
      l = void 0, l === void 0 && (l = nt(c) ? c : ke(e[i + 1]) ? [] : {});
    }
    pc(s, u, l), s = s[u];
  }
  return t;
}
function Wd(t, e, n) {
  for (var r = -1, i = e.length, o = {}; ++r < i; ) {
    var a = e[r], s = zn(t, a);
    n(s, a) && Zd(o, Fe(a, t), s);
  }
  return o;
}
function In(t, e) {
  if (t == null)
    return {};
  var n = Zt(Ih(t), function(r) {
    return [r];
  });
  return e = qi(e), Wd(t, n, function(r, i) {
    return e(r, i[0]);
  });
}
var Jd = Math.floor, Qd = Math.random;
function jd(t, e) {
  return t + Jd(Qd() * (e - t + 1));
}
var tp = Math.ceil, ep = Math.max;
function np(t, e, n, r) {
  for (var i = -1, o = ep(tp((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function rp(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && mc(e, n, r) && (n = r = void 0), e = Ue(e), n === void 0 ? (n = e, e = 0) : n = Ue(n), r = r === void 0 ? e < n ? 1 : -1 : Ue(r), np(e, n, r);
  };
}
var St = rp();
function ip() {
  var t = arguments, e = Re(t[0]);
  return t.length < 3 ? e : e.replace(t[1], t[2]);
}
function Yi(t) {
  var e = t.length;
  return e ? t[jd(0, e - 1)] : void 0;
}
function op(t) {
  return Yi(Yd(t));
}
function ap(t) {
  var e = C(t) ? Yi : op;
  return e(t);
}
var sp = _c(function(t, e) {
  return kd(t) ? Id(t, e) : [];
});
const up = (t, e, n = 12, r = 12) => {
  const i = K().domain([0, n]).range([0, t]), o = K().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return St((n + 1) * (r + 1)).map(function(u) {
        return { m: u % (n + 1), n: Math.floor(u / (n + 1)), x: i(u % (n + 1)), y: o(Math.floor(u / (n + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = Kf(rt(l, function(f) {
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
}, lp = "_widget_18g36_1", cp = "_label_18g36_19", fp = "_lit_18g36_24", hp = "_button_18g36_29", dp = "_symbol_18g36_29", pp = "_radio_18g36_29", gp = "_radiobutton_18g36_29", _p = "_selected_18g36_35", yp = "_toggle_18g36_35", mp = "_slider_18g36_44", wp = "_track_18g36_44", vp = "_track_overlay_18g36_48", bp = "_handle_18g36_55", m = {
  widget: lp,
  label: cp,
  lit: fp,
  button: hp,
  symbol: dp,
  radio: pp,
  radiobutton: gp,
  selected: _p,
  toggle: yp,
  slider: mp,
  track: wp,
  track_overlay: vp,
  handle: bp
}, Le = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, Cn = (t, e, n) => {
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
}, xp = (t = 1) => {
  const e = X();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Mp = (t = 1) => {
  const e = X(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, $p = (t = 1) => {
  const e = X();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Ap = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = X();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -n), r.lineTo(t * (n * e), t * -n), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -n), r.lineTo(-t * (n * e), t * -n), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, Tp = (t = 1) => {
  const e = X(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), e.arc(0, 0, t * (1 - o), r, i, !1), e.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), e.closePath(), e.toString();
}, Sp = (t = 1) => {
  const e = X(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, o = n, a = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, a), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, o, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, Pp = (t = 1) => {
  const e = X(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), e.arc(0, 0, t * (1 - o), i, r, !0), e.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), e.closePath(), e.toString();
}, Ep = (t = 1) => {
  var e = X(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -n, t * n), e.lineTo(t * -n, t * -n), e.lineTo(t * n, t * -n), e.closePath(), e.toString();
}, Np = (t = 1) => {
  const e = X(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, yn = (t) => {
  switch (t) {
    case "play":
      return xp;
    case "forward":
      return Mp;
    case "back":
      return $p;
    case "pause":
      return Ap;
    case "reload":
      return Tp;
    case "capture":
      return Sp;
    case "rewind":
      return Pp;
    case "stop":
      return Ep;
    case "push":
      return Np;
  }
}, Rn = () => {
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
      f = (f + 1) % c.length, l(), S(this.parentNode).select("." + m.symbol).attr("d", yn(c[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + e).select("." + m.symbol).attr("d", yn(c[f])(r * n));
    }
  };
}, zp = () => {
  const t = "slider", e = Ee(".3f");
  var n = Le(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(y) {
  }, f = function(y) {
  }, h = [0, 1], g = 0, d = null, p = K().domain(h).range([0, r]).clamp(!0);
  const b = function(y, x, $ = h) {
    const _ = y.select("#slider_" + n);
    p.domain($), g = x, _.selectAll("." + m.handle).transition().attr("cx", p(x)), a && _.select("." + m.label).text(d + " = " + e(g)), c(), f();
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
}, kp = () => {
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
}, Op = () => {
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
}, Ip = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = S(o).attr("class", m.widget + " " + m.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", yn(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = Cn(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, Ki = (t, e) => {
  const n = X();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, Cp = (t, e) => {
  const n = Ee(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = S(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", Ki(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const p = Qe(d, this)[0];
    t.value(a.invert(p)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
  }).call(
    ns().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, g = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? jt([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -jt([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? jt([t.girth() / 2, t.knob()]) + 7 : -jt([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, Rp = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = S(a).attr("class", m.widget + " " + m.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", Ki(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Cn(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, Fp = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = fo(a), u = K().domain([0, a - 1]).range([0, t.size()]), l = K().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = S(c).attr("class", m.widget + " " + m.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var g, d;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), g.attr("class", m.background).on("mouseover", function() {
    S(this).classed(m.lit, !0), S(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    S(this).classed(m.lit, !1), S(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((b) => b == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const p = Cn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(b, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), c;
}, ae = (t, e) => {
  switch (t.type) {
    case "button":
      return Ip(t);
    case "slider":
      return Cp(t);
    case "radio":
      return Fp(t);
    case "toggle":
      return Rp(t);
  }
}, Lp = (t, e) => {
  const n = up(
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
}, A = {
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
}, T = {
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
    range: [10, 70],
    default: 40
  },
  // (formerly similarity_threshold)
  likelihood_to_switch: {
    range: [0.01, 0.8],
    default: 0.4
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
}, Fn = (t) => rt(Gi(t), (e) => {
  e[1].id = e[0], e[1].label = ip(xh(e[0]), /_/g, " ");
}), Ln = (t) => rt(Gi(t), (e) => e[1]), Dn = (t, e) => fe(t, (n, r) => n.widget = e[r]), Dp = (t) => In(t, (e) => Ui(e, "range")), Hp = (t) => In(t, (e) => Vd(e.default)), Bp = (t) => In(t, (e) => Ui(e, "choices"));
K().domain([0, 360]).range([0, 2 * Math.PI]);
K().range([0, 360]).domain([0, 2 * Math.PI]);
function j() {
  let t = 0, e = 0;
  for (; t === 0; ) t = Math.random();
  for (; e === 0; ) e = Math.random();
  let n = Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * e);
  return n = n / 10 + 0.5, n > 1 || n < 0 ? j() : n;
}
function Hn(t) {
  const e = 1 - Math.random();
  return -Math.log(e) / t;
}
const Bn = Dp(T), qn = Hp(T), Xn = Bp(T);
Fn(Bn);
Fn(qn);
Fn(Xn);
const Vi = Ln(Bn), Zi = Ln(qn), Wi = Ln(Xn), he = rt(
  Vi,
  (t) => zp().id(t.id).label(t.label).range(t.range).value(t.default).size(A.widgets.slider_size)
), Pt = rt(
  Zi,
  (t) => kp().id(t.id).label(t.label).value(t.default).labelposition(A.widgets.toggle_label_pos)
), de = rt(
  Wi,
  (t) => Op().choices(t.choices).id(t.id).value(t.default).orientation(A.widgets.radio_orientation).labelposition(A.widgets.radio_label_position)
);
Dn(Vi, he);
Dn(Zi, Pt);
Dn(Wi, de);
const lt = Rn().actions(["play", "pause"]), De = Rn().actions(["back"]), He = Rn().actions(["rewind"]), qp = [lt, De, He], Xp = (t, e) => {
  lt.position(
    e.position(
      A.widgets.playbutton_anchor.x,
      A.widgets.playbutton_anchor.y
    )
  ).size(A.widgets.playbutton_size), He.position(
    e.position(
      A.widgets.backbutton_anchor.x,
      A.widgets.backbutton_anchor.y
    )
  ), De.position(
    e.position(
      A.widgets.resetbutton_anchor.x,
      A.widgets.resetbutton_anchor.y
    )
  );
  const n = e.position(
    A.widgets.slider_anchor.x,
    St(he.length).map(
      (s) => A.widgets.slider_anchor.y + A.widgets.slider_gap * s
    )
  );
  he.forEach((s, u) => s.position(n[u]));
  const r = St(Pt.length).map((s) => {
    const u = A.widgets.toggle_anchor.x, l = A.widgets.toggle_anchor.y + s * A.widgets.toggle_vertical_gap;
    return e.position(u, l);
  });
  Pt.forEach((s, u) => s.position(r[u]));
  const i = St(de.length).map(
    (s) => e.position(
      A.widgets.radio_anchor.x,
      A.widgets.radio_anchor.y + s * A.widgets.radio_item_gap
    )
  );
  de.forEach((s, u) => {
    s.position(i[u]).size(A.widgets.radio_size).shape(A.widgets.radio_shape);
  });
  const o = e.position(1, 10.4), a = e.position(1, 11.6);
  t.append("text").attr("x", o.x).attr("y", o.y).attr("class", "static-label").text("Agents:"), t.append("text").attr("x", a.x).attr("y", a.y).attr("class", "static-label").text("Topics:"), t.selectAll(null).data(he).enter().append(ae), t.selectAll(null).data(Pt).enter().append(ae), t.selectAll(null).data(qp).enter().append(ae), t.selectAll(null).data(de).enter().append(ae);
}, Gp = (t) => {
  fe(Bn, (e) => e.widget.reset(t, e.default)), fe(qn, (e) => e.widget.reset(t, e.default)), fe(Xn, (e) => e.widget.reset(t, e.default)), T.number_of_agents.widget.update();
}, ut = T.L, Ji = 1, Up = 0.1;
var gt = [], k = [];
const Rr = 2e3, Yp = 100, Kp = 30, Vp = [
  "#fe9502ff",
  "#005397ff",
  "#32CD32",
  "#FFD700",
  "#ae0037ff",
  "#ee90ebff",
  "#20B2AA",
  "#794002ff"
], Zp = ["A", "B", "C", "D", "E", "F", "G", "H"], Qi = (t, e) => {
  e.forEach((n) => {
    n._incoming_links_count = 0;
  }), t.forEach((n) => {
    n.focussed_topic && n.focussed_topic._incoming_links_count++;
  }), e.forEach((n) => {
    n.network_news_val = n._incoming_links_count / t.length, n.age_absolute++;
  });
}, Wp = () => {
  T.timer = {}, T.tick = 0;
  const t = T.number_of_topics.choices[T.number_of_topics.widget.value()], e = T.frame_is_normal.widget.value(), n = 0.05, i = ut * (1 - 2 * n) / (t - 1);
  k = rt(St(t), (s) => {
    let u;
    e === !1 ? u = Math.random() : u = j();
    let l = ut * n + s * i;
    const c = Hn(Ji);
    return {
      index: s,
      x: ut * u,
      y: l,
      frame: u,
      initial_news_val: c,
      network_news_val: 0,
      // this is a dynamic parameter
      get size() {
        return 3.5 + 1 / (k.length + 1) * this.network_news_val ** 2 * 140;
      },
      letter: Zp[s],
      // Assign letter from alphabet
      color: Vp[s],
      // Assign color from list
      age_absolute: 0,
      // in seconds
      // todo cleanup:
      get inherent_max_relevance() {
        return this.initial_news_val * Rr;
      },
      get age_relative() {
        return this.age_absolute / (this.network_news_val * Rr);
      },
      get freshness_advantage() {
        return 1 - this.age_relative;
      }
    };
  });
  const o = T.number_of_agents.choices[T.number_of_agents.widget.value()], a = T.culture_is_normal.widget.value();
  gt = rt(St(o), (s) => {
    let u;
    a === !1 ? u = Math.random() : u = j();
    const l = Math.floor(Math.random() * k.length);
    return {
      index: s,
      culture: u,
      x: ut * u,
      // x pos depends on culture for sorted viz
      y: ut * Math.random(),
      focussed_topic: k[l],
      time_on_topic: 0
    };
  }), Qi(gt, k);
}, Jp = (t) => {
  const e = T.frame_is_normal.widget.value();
  let n;
  e === !1 ? n = Math.random() : n = j(), t.frame = n, t.x = ut * n, t.initial_news_val = Hn(Ji), t.network_news_val = 0, t._incoming_links_count = 0, t.age_absolute = 0;
}, Ze = (t) => {
  const e = sp(k, t.focussed_topic);
  t.focussed_topic = ap(e), t.time_on_topic = 0;
}, Qp = () => {
  T.tick++, Qi(gt, k);
  let t = [];
  const e = 1 / k.length / 2;
  for (const n of k)
    if (n.age_absolute > Yp && n.network_news_val < e) {
      const r = j() * Hn(1);
      if (n.age_relative > r) {
        Jp(n), t.push(n.index);
        break;
      }
    }
  t.length > 0 && gt.forEach((n) => {
    n.focussed_topic && t.includes(n.focussed_topic.index) && (n.focussed_topic = null, n.time_on_topic = 0);
  }), gt.forEach((n) => {
    const r = n.focussed_topic;
    if (!r) {
      Ze(n);
      return;
    }
    const o = (1 - Math.abs(n.culture - r.frame)) * 0.4 + r.network_news_val * 0.1 + r.initial_news_val * 0.1 + (1 - r.age_relative) * 0.4;
    if (n.time_on_topic > Kp) {
      if (o < T.likelihood_to_switch.widget.value()) {
        Ze(n);
        return;
      }
      if (j() < 0.15) {
        Ze(n);
        return;
      }
    }
    if (n.time_on_topic++, n.focussed_topic) {
      const a = k.length, s = ut / a, u = n.focussed_topic.y;
      let l;
      j() < 0.5 ? l = u - j() * s : l = u + j() * s, l = Math.max(0, Math.min(ut, l)), n.y += (l - n.y) * Up;
    }
  });
}, jp = "_node_19yup_1", $e = {
  node: jp
}, ji = T.L, F = K().domain([0, ji]), H = K().domain([0, ji]), t0 = (t, e) => {
  const n = e.display_size.width, r = e.display_size.height;
  F.range([0, n]), H.range([0, r]), t.selectAll("#origin").remove();
  const i = t.append("g").attr("id", "origin");
  i.selectAll(null).data(gt).enter().append("circle").attr("class", $e.node).attr("cx", (o) => F(o.x)).attr("cy", (o) => H(o.y)).attr("r", F(T.agentsize / 2)).style("fill", function(o) {
    return o.focussed_topic.color;
  }).style("stroke", "black").style("stroke-width", 0.4), i.selectAll(null).data(k, (o) => o.index).enter().append("rect").attr("class", $e.node).attr("x", (o) => F(o.x) - F(o.size / 2)).attr("y", (o) => H(o.y) - H(o.size / 2)).attr("width", (o) => F(o.size)).attr("height", (o) => H(o.size)).style("fill", function(o) {
    return o.color;
  }).style("stroke", "black").style("stroke-width", function(o) {
    return 1.2;
  }), i.selectAll(null).data(k, (o) => o.index).enter().append("text").attr("class", "topic-label").attr("x", (o) => F(o.x)).attr("y", (o) => H(o.y)).attr("dy", ".35em").style("text-anchor", "middle").style("font-size", "12px").style("fill", "black").style("stroke", "black").style("stroke-width", "0.7px").style("paint-ordering", "stroke").style("pointer-events", "none").text((o) => o.letter);
}, e0 = (t, e) => {
  t.selectAll("circle." + $e.node).data(gt, (n) => n.index).attr("cx", (n) => F(n.x)).attr("cy", (n) => H(n.y)).style("fill", (n) => n.focussed_topic ? n.focussed_topic.color : "#888888"), t.selectAll("rect." + $e.node).data(k, (n) => n.index).attr("x", (n) => F(n.x) - F(n.size / 2)).attr("y", (n) => H(n.y) - H(n.size / 2)).attr("width", (n) => F(n.size)).attr("height", (n) => H(n.size)), t.selectAll(".topic-label").data(k, (n) => n.index).attr("x", (n) => F(n.x)).attr("y", (n) => H(n.y));
};
let Fr = 0;
function n0(t, e) {
  const n = performance.now(), r = 1e3 / T.speed.widget.value(), i = n - Fr;
  i >= r && (Fr = n - i % r, Qp(), e0(t));
}
function Mt(t, e) {
  Wp(), t0(t, e);
}
var Lr = {};
const r0 = (t, e) => {
  lt.value() == 1 ? Lr = Is(
    () => n0(t),
    A.simulation.delay
  ) : Lr.stop();
}, i0 = (t, e, n) => {
  He.update(() => Gp(e)), lt.update(() => r0(t)), De.update(() => Mt(t, n)), T.number_of_agents.widget.update(() => Mt(t, n)), T.number_of_topics.widget.update(() => Mt(t, n)), Pt[0].update(() => Mt(t, n)), Pt[1].update(() => Mt(t, n));
}, o0 = {
  name: "@explorables/explorable_template",
  title: "Social Issue Emergence",
  subtitle: "The emergence of topics in a social network",
  description: "An agent-based model for mimicking the following of topics in a social network",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function a0(t, e = to) {
  const n = Lp(t, e), r = n.display, i = n.controls, o = n.grid;
  return Xp(i, o), i0(r, i, e), Mt(r, e), {
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
  to as config,
  a0 as default,
  a0 as load,
  o0 as meta
};
