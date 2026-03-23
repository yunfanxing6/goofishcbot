"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i6 = decorators.length - 1, decorator; i6 >= 0; i6--)
      if (decorator = decorators[i6])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
  };

  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = /* @__PURE__ */ Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t4, e7, o6) {
      if (this._$cssResult$ = true, o6 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t4, this.t = e7;
    }
    get styleSheet() {
      let t4 = this.o;
      const s4 = this.t;
      if (e && void 0 === t4) {
        const e7 = void 0 !== s4 && 1 === s4.length;
        e7 && (t4 = o.get(s4)), void 0 === t4 && ((this.o = t4 = new CSSStyleSheet()).replaceSync(this.cssText), e7 && o.set(s4, t4));
      }
      return t4;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t4) => new n("string" == typeof t4 ? t4 : t4 + "", void 0, s);
  var S = (s4, o6) => {
    if (e) s4.adoptedStyleSheets = o6.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet);
    else for (const e7 of o6) {
      const o7 = document.createElement("style"), n5 = t.litNonce;
      void 0 !== n5 && o7.setAttribute("nonce", n5), o7.textContent = e7.cssText, s4.appendChild(o7);
    }
  };
  var c = e ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
    let e7 = "";
    for (const s4 of t5.cssRules) e7 += s4.cssText;
    return r(e7);
  })(t4) : t4;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t4, s4) => t4;
  var u = { toAttribute(t4, s4) {
    switch (s4) {
      case Boolean:
        t4 = t4 ? l : null;
        break;
      case Object:
      case Array:
        t4 = null == t4 ? t4 : JSON.stringify(t4);
    }
    return t4;
  }, fromAttribute(t4, s4) {
    let i6 = t4;
    switch (s4) {
      case Boolean:
        i6 = null !== t4;
        break;
      case Number:
        i6 = null === t4 ? null : Number(t4);
        break;
      case Object:
      case Array:
        try {
          i6 = JSON.parse(t4);
        } catch (t5) {
          i6 = null;
        }
    }
    return i6;
  } };
  var f = (t4, s4) => !i2(t4, s4);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ?? (Symbol.metadata = /* @__PURE__ */ Symbol("metadata")), a.litPropertyMetadata ?? (a.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
  var y = class extends HTMLElement {
    static addInitializer(t4) {
      this._$Ei(), (this.l ?? (this.l = [])).push(t4);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t4, s4 = b) {
      if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t4) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t4, s4), !s4.noAccessor) {
        const i6 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t4, i6, s4);
        void 0 !== h3 && e2(this.prototype, t4, h3);
      }
    }
    static getPropertyDescriptor(t4, s4, i6) {
      const { get: e7, set: r6 } = h(this.prototype, t4) ?? { get() {
        return this[s4];
      }, set(t5) {
        this[s4] = t5;
      } };
      return { get: e7, set(s5) {
        const h3 = e7?.call(this);
        r6?.call(this, s5), this.requestUpdate(t4, h3, i6);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t4) {
      return this.elementProperties.get(t4) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t4 = n2(this);
      t4.finalize(), void 0 !== t4.l && (this.l = [...t4.l]), this.elementProperties = new Map(t4.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t5 = this.properties, s4 = [...r2(t5), ...o2(t5)];
        for (const i6 of s4) this.createProperty(i6, t5[i6]);
      }
      const t4 = this[Symbol.metadata];
      if (null !== t4) {
        const s4 = litPropertyMetadata.get(t4);
        if (void 0 !== s4) for (const [t5, i6] of s4) this.elementProperties.set(t5, i6);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t5, s4] of this.elementProperties) {
        const i6 = this._$Eu(t5, s4);
        void 0 !== i6 && this._$Eh.set(i6, t5);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s4) {
      const i6 = [];
      if (Array.isArray(s4)) {
        const e7 = new Set(s4.flat(1 / 0).reverse());
        for (const s5 of e7) i6.unshift(c(s5));
      } else void 0 !== s4 && i6.push(c(s4));
      return i6;
    }
    static _$Eu(t4, s4) {
      const i6 = s4.attribute;
      return false === i6 ? void 0 : "string" == typeof i6 ? i6 : "string" == typeof t4 ? t4.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t4) => this.enableUpdating = t4), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t4) => t4(this));
    }
    addController(t4) {
      (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t4), void 0 !== this.renderRoot && this.isConnected && t4.hostConnected?.();
    }
    removeController(t4) {
      this._$EO?.delete(t4);
    }
    _$E_() {
      const t4 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
      for (const i6 of s4.keys()) this.hasOwnProperty(i6) && (t4.set(i6, this[i6]), delete this[i6]);
      t4.size > 0 && (this._$Ep = t4);
    }
    createRenderRoot() {
      const t4 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t4, this.constructor.elementStyles), t4;
    }
    connectedCallback() {
      this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), this._$EO?.forEach((t4) => t4.hostConnected?.());
    }
    enableUpdating(t4) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t4) => t4.hostDisconnected?.());
    }
    attributeChangedCallback(t4, s4, i6) {
      this._$AK(t4, i6);
    }
    _$ET(t4, s4) {
      const i6 = this.constructor.elementProperties.get(t4), e7 = this.constructor._$Eu(t4, i6);
      if (void 0 !== e7 && true === i6.reflect) {
        const h3 = (void 0 !== i6.converter?.toAttribute ? i6.converter : u).toAttribute(s4, i6.type);
        this._$Em = t4, null == h3 ? this.removeAttribute(e7) : this.setAttribute(e7, h3), this._$Em = null;
      }
    }
    _$AK(t4, s4) {
      const i6 = this.constructor, e7 = i6._$Eh.get(t4);
      if (void 0 !== e7 && this._$Em !== e7) {
        const t5 = i6.getPropertyOptions(e7), h3 = "function" == typeof t5.converter ? { fromAttribute: t5.converter } : void 0 !== t5.converter?.fromAttribute ? t5.converter : u;
        this._$Em = e7;
        const r6 = h3.fromAttribute(s4, t5.type);
        this[e7] = r6 ?? this._$Ej?.get(e7) ?? r6, this._$Em = null;
      }
    }
    requestUpdate(t4, s4, i6, e7 = false, h3) {
      if (void 0 !== t4) {
        const r6 = this.constructor;
        if (false === e7 && (h3 = this[t4]), i6 ?? (i6 = r6.getPropertyOptions(t4)), !((i6.hasChanged ?? f)(h3, s4) || i6.useDefault && i6.reflect && h3 === this._$Ej?.get(t4) && !this.hasAttribute(r6._$Eu(t4, i6)))) return;
        this.C(t4, s4, i6);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t4, s4, { useDefault: i6, reflect: e7, wrapped: h3 }, r6) {
      i6 && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t4) && (this._$Ej.set(t4, r6 ?? s4 ?? this[t4]), true !== h3 || void 0 !== r6) || (this._$AL.has(t4) || (this.hasUpdated || i6 || (s4 = void 0), this._$AL.set(t4, s4)), true === e7 && this._$Em !== t4 && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t4));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t5) {
        Promise.reject(t5);
      }
      const t4 = this.scheduleUpdate();
      return null != t4 && await t4, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
          for (const [t6, s5] of this._$Ep) this[t6] = s5;
          this._$Ep = void 0;
        }
        const t5 = this.constructor.elementProperties;
        if (t5.size > 0) for (const [s5, i6] of t5) {
          const { wrapped: t6 } = i6, e7 = this[s5];
          true !== t6 || this._$AL.has(s5) || void 0 === e7 || this.C(s5, void 0, i6, e7);
        }
      }
      let t4 = false;
      const s4 = this._$AL;
      try {
        t4 = this.shouldUpdate(s4), t4 ? (this.willUpdate(s4), this._$EO?.forEach((t5) => t5.hostUpdate?.()), this.update(s4)) : this._$EM();
      } catch (s5) {
        throw t4 = false, this._$EM(), s5;
      }
      t4 && this._$AE(s4);
    }
    willUpdate(t4) {
    }
    _$AE(t4) {
      this._$EO?.forEach((t5) => t5.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t4) {
      return true;
    }
    update(t4) {
      this._$Eq && (this._$Eq = this._$Eq.forEach((t5) => this._$ET(t5, this[t5]))), this._$EM();
    }
    updated(t4) {
    }
    firstUpdated(t4) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ?? (a.reactiveElementVersions = [])).push("2.1.2");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = (t4) => t4;
  var s2 = t2.trustedTypes;
  var e3 = s2 ? s2.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
  var h2 = "$lit$";
  var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var n3 = "?" + o3;
  var r3 = `<${n3}>`;
  var l2 = document;
  var c3 = () => l2.createComment("");
  var a2 = (t4) => null === t4 || "object" != typeof t4 && "function" != typeof t4;
  var u2 = Array.isArray;
  var d2 = (t4) => u2(t4) || "function" == typeof t4?.[Symbol.iterator];
  var f2 = "[ 	\n\f\r]";
  var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var _ = /-->/g;
  var m = />/g;
  var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var g = /'/g;
  var $ = /"/g;
  var y2 = /^(?:script|style|textarea|title)$/i;
  var x = (t4) => (i6, ...s4) => ({ _$litType$: t4, strings: i6, values: s4 });
  var b2 = x(1);
  var w = x(2);
  var T = x(3);
  var E = /* @__PURE__ */ Symbol.for("lit-noChange");
  var A = /* @__PURE__ */ Symbol.for("lit-nothing");
  var C = /* @__PURE__ */ new WeakMap();
  var P = l2.createTreeWalker(l2, 129);
  function V(t4, i6) {
    if (!u2(t4) || !t4.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e3 ? e3.createHTML(i6) : i6;
  }
  var N = (t4, i6) => {
    const s4 = t4.length - 1, e7 = [];
    let n5, l3 = 2 === i6 ? "<svg>" : 3 === i6 ? "<math>" : "", c4 = v;
    for (let i7 = 0; i7 < s4; i7++) {
      const s5 = t4[i7];
      let a3, u3, d3 = -1, f3 = 0;
      for (; f3 < s5.length && (c4.lastIndex = f3, u3 = c4.exec(s5), null !== u3); ) f3 = c4.lastIndex, c4 === v ? "!--" === u3[1] ? c4 = _ : void 0 !== u3[1] ? c4 = m : void 0 !== u3[2] ? (y2.test(u3[2]) && (n5 = RegExp("</" + u3[2], "g")), c4 = p2) : void 0 !== u3[3] && (c4 = p2) : c4 === p2 ? ">" === u3[0] ? (c4 = n5 ?? v, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c4.lastIndex - u3[2].length, a3 = u3[1], c4 = void 0 === u3[3] ? p2 : '"' === u3[3] ? $ : g) : c4 === $ || c4 === g ? c4 = p2 : c4 === _ || c4 === m ? c4 = v : (c4 = p2, n5 = void 0);
      const x2 = c4 === p2 && t4[i7 + 1].startsWith("/>") ? " " : "";
      l3 += c4 === v ? s5 + r3 : d3 >= 0 ? (e7.push(a3), s5.slice(0, d3) + h2 + s5.slice(d3) + o3 + x2) : s5 + o3 + (-2 === d3 ? i7 : x2);
    }
    return [V(t4, l3 + (t4[s4] || "<?>") + (2 === i6 ? "</svg>" : 3 === i6 ? "</math>" : "")), e7];
  };
  var S2 = class _S {
    constructor({ strings: t4, _$litType$: i6 }, e7) {
      let r6;
      this.parts = [];
      let l3 = 0, a3 = 0;
      const u3 = t4.length - 1, d3 = this.parts, [f3, v2] = N(t4, i6);
      if (this.el = _S.createElement(f3, e7), P.currentNode = this.el.content, 2 === i6 || 3 === i6) {
        const t5 = this.el.content.firstChild;
        t5.replaceWith(...t5.childNodes);
      }
      for (; null !== (r6 = P.nextNode()) && d3.length < u3; ) {
        if (1 === r6.nodeType) {
          if (r6.hasAttributes()) for (const t5 of r6.getAttributeNames()) if (t5.endsWith(h2)) {
            const i7 = v2[a3++], s4 = r6.getAttribute(t5).split(o3), e8 = /([.?@])?(.*)/.exec(i7);
            d3.push({ type: 1, index: l3, name: e8[2], strings: s4, ctor: "." === e8[1] ? I : "?" === e8[1] ? L : "@" === e8[1] ? z : H }), r6.removeAttribute(t5);
          } else t5.startsWith(o3) && (d3.push({ type: 6, index: l3 }), r6.removeAttribute(t5));
          if (y2.test(r6.tagName)) {
            const t5 = r6.textContent.split(o3), i7 = t5.length - 1;
            if (i7 > 0) {
              r6.textContent = s2 ? s2.emptyScript : "";
              for (let s4 = 0; s4 < i7; s4++) r6.append(t5[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l3 });
              r6.append(t5[i7], c3());
            }
          }
        } else if (8 === r6.nodeType) if (r6.data === n3) d3.push({ type: 2, index: l3 });
        else {
          let t5 = -1;
          for (; -1 !== (t5 = r6.data.indexOf(o3, t5 + 1)); ) d3.push({ type: 7, index: l3 }), t5 += o3.length - 1;
        }
        l3++;
      }
    }
    static createElement(t4, i6) {
      const s4 = l2.createElement("template");
      return s4.innerHTML = t4, s4;
    }
  };
  function M(t4, i6, s4 = t4, e7) {
    if (i6 === E) return i6;
    let h3 = void 0 !== e7 ? s4._$Co?.[e7] : s4._$Cl;
    const o6 = a2(i6) ? void 0 : i6._$litDirective$;
    return h3?.constructor !== o6 && (h3?._$AO?.(false), void 0 === o6 ? h3 = void 0 : (h3 = new o6(t4), h3._$AT(t4, s4, e7)), void 0 !== e7 ? (s4._$Co ?? (s4._$Co = []))[e7] = h3 : s4._$Cl = h3), void 0 !== h3 && (i6 = M(t4, h3._$AS(t4, i6.values), h3, e7)), i6;
  }
  var R = class {
    constructor(t4, i6) {
      this._$AV = [], this._$AN = void 0, this._$AD = t4, this._$AM = i6;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t4) {
      const { el: { content: i6 }, parts: s4 } = this._$AD, e7 = (t4?.creationScope ?? l2).importNode(i6, true);
      P.currentNode = e7;
      let h3 = P.nextNode(), o6 = 0, n5 = 0, r6 = s4[0];
      for (; void 0 !== r6; ) {
        if (o6 === r6.index) {
          let i7;
          2 === r6.type ? i7 = new k(h3, h3.nextSibling, this, t4) : 1 === r6.type ? i7 = new r6.ctor(h3, r6.name, r6.strings, this, t4) : 6 === r6.type && (i7 = new Z(h3, this, t4)), this._$AV.push(i7), r6 = s4[++n5];
        }
        o6 !== r6?.index && (h3 = P.nextNode(), o6++);
      }
      return P.currentNode = l2, e7;
    }
    p(t4) {
      let i6 = 0;
      for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t4, s4, i6), i6 += s4.strings.length - 2) : s4._$AI(t4[i6])), i6++;
    }
  };
  var k = class _k {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t4, i6, s4, e7) {
      this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t4, this._$AB = i6, this._$AM = s4, this.options = e7, this._$Cv = e7?.isConnected ?? true;
    }
    get parentNode() {
      let t4 = this._$AA.parentNode;
      const i6 = this._$AM;
      return void 0 !== i6 && 11 === t4?.nodeType && (t4 = i6.parentNode), t4;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t4, i6 = this) {
      t4 = M(this, t4, i6), a2(t4) ? t4 === A || null == t4 || "" === t4 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t4 !== this._$AH && t4 !== E && this._(t4) : void 0 !== t4._$litType$ ? this.$(t4) : void 0 !== t4.nodeType ? this.T(t4) : d2(t4) ? this.k(t4) : this._(t4);
    }
    O(t4) {
      return this._$AA.parentNode.insertBefore(t4, this._$AB);
    }
    T(t4) {
      this._$AH !== t4 && (this._$AR(), this._$AH = this.O(t4));
    }
    _(t4) {
      this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t4 : this.T(l2.createTextNode(t4)), this._$AH = t4;
    }
    $(t4) {
      const { values: i6, _$litType$: s4 } = t4, e7 = "number" == typeof s4 ? this._$AC(t4) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
      if (this._$AH?._$AD === e7) this._$AH.p(i6);
      else {
        const t5 = new R(e7, this), s5 = t5.u(this.options);
        t5.p(i6), this.T(s5), this._$AH = t5;
      }
    }
    _$AC(t4) {
      let i6 = C.get(t4.strings);
      return void 0 === i6 && C.set(t4.strings, i6 = new S2(t4)), i6;
    }
    k(t4) {
      u2(this._$AH) || (this._$AH = [], this._$AR());
      const i6 = this._$AH;
      let s4, e7 = 0;
      for (const h3 of t4) e7 === i6.length ? i6.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i6[e7], s4._$AI(h3), e7++;
      e7 < i6.length && (this._$AR(s4 && s4._$AB.nextSibling, e7), i6.length = e7);
    }
    _$AR(t4 = this._$AA.nextSibling, s4) {
      for (this._$AP?.(false, true, s4); t4 !== this._$AB; ) {
        const s5 = i3(t4).nextSibling;
        i3(t4).remove(), t4 = s5;
      }
    }
    setConnected(t4) {
      void 0 === this._$AM && (this._$Cv = t4, this._$AP?.(t4));
    }
  };
  var H = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t4, i6, s4, e7, h3) {
      this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t4, this.name = i6, this._$AM = e7, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
    }
    _$AI(t4, i6 = this, s4, e7) {
      const h3 = this.strings;
      let o6 = false;
      if (void 0 === h3) t4 = M(this, t4, i6, 0), o6 = !a2(t4) || t4 !== this._$AH && t4 !== E, o6 && (this._$AH = t4);
      else {
        const e8 = t4;
        let n5, r6;
        for (t4 = h3[0], n5 = 0; n5 < h3.length - 1; n5++) r6 = M(this, e8[s4 + n5], i6, n5), r6 === E && (r6 = this._$AH[n5]), o6 || (o6 = !a2(r6) || r6 !== this._$AH[n5]), r6 === A ? t4 = A : t4 !== A && (t4 += (r6 ?? "") + h3[n5 + 1]), this._$AH[n5] = r6;
      }
      o6 && !e7 && this.j(t4);
    }
    j(t4) {
      t4 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 ?? "");
    }
  };
  var I = class extends H {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t4) {
      this.element[this.name] = t4 === A ? void 0 : t4;
    }
  };
  var L = class extends H {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t4) {
      this.element.toggleAttribute(this.name, !!t4 && t4 !== A);
    }
  };
  var z = class extends H {
    constructor(t4, i6, s4, e7, h3) {
      super(t4, i6, s4, e7, h3), this.type = 5;
    }
    _$AI(t4, i6 = this) {
      if ((t4 = M(this, t4, i6, 0) ?? A) === E) return;
      const s4 = this._$AH, e7 = t4 === A && s4 !== A || t4.capture !== s4.capture || t4.once !== s4.once || t4.passive !== s4.passive, h3 = t4 !== A && (s4 === A || e7);
      e7 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t4), this._$AH = t4;
    }
    handleEvent(t4) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t4) : this._$AH.handleEvent(t4);
    }
  };
  var Z = class {
    constructor(t4, i6, s4) {
      this.element = t4, this.type = 6, this._$AN = void 0, this._$AM = i6, this.options = s4;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t4) {
      M(this, t4);
    }
  };
  var B = t2.litHtmlPolyfillSupport;
  B?.(S2, k), (t2.litHtmlVersions ?? (t2.litHtmlVersions = [])).push("3.3.2");
  var D = (t4, i6, s4) => {
    const e7 = s4?.renderBefore ?? i6;
    let h3 = e7._$litPart$;
    if (void 0 === h3) {
      const t5 = s4?.renderBefore ?? null;
      e7._$litPart$ = h3 = new k(i6.insertBefore(c3(), t5), t5, void 0, s4 ?? {});
    }
    return h3._$AI(t4), h3;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      var _a;
      const t4 = super.createRenderRoot();
      return (_a = this.renderOptions).renderBefore ?? (_a.renderBefore = t4.firstChild), t4;
    }
    update(t4) {
      const r6 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t4), this._$Do = D(r6, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return E;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ?? (s3.litElementVersions = [])).push("4.2.2");

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r4 = (t4 = o5, e7, r6) => {
    const { kind: n5, metadata: i6 } = r6;
    let s4 = globalThis.litPropertyMetadata.get(i6);
    if (void 0 === s4 && globalThis.litPropertyMetadata.set(i6, s4 = /* @__PURE__ */ new Map()), "setter" === n5 && ((t4 = Object.create(t4)).wrapped = true), s4.set(r6.name, t4), "accessor" === n5) {
      const { name: o6 } = r6;
      return { set(r7) {
        const n6 = e7.get.call(this);
        e7.set.call(this, r7), this.requestUpdate(o6, n6, t4, true, r7);
      }, init(e8) {
        return void 0 !== e8 && this.C(o6, void 0, t4, e8), e8;
      } };
    }
    if ("setter" === n5) {
      const { name: o6 } = r6;
      return function(r7) {
        const n6 = this[o6];
        e7.call(this, r7), this.requestUpdate(o6, n6, t4, true, r7);
      };
    }
    throw Error("Unsupported decorator location: " + n5);
  };
  function n4(t4) {
    return (e7, o6) => "object" == typeof o6 ? r4(t4, e7, o6) : ((t5, e8, o7) => {
      const r6 = e8.hasOwnProperty(o7);
      return e8.constructor.createProperty(o7, t5), r6 ? Object.getOwnPropertyDescriptor(e8, o7) : void 0;
    })(t4, e7, o6);
  }

  // node_modules/@lit/reactive-element/decorators/state.js
  function r5(r6) {
    return n4({ ...r6, state: true, attribute: false });
  }

  // node_modules/lit-html/directive.js
  var t3 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e5 = (t4) => (...e7) => ({ _$litDirective$: t4, values: e7 });
  var i5 = class {
    constructor(t4) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t4, e7, i6) {
      this._$Ct = t4, this._$AM = e7, this._$Ci = i6;
    }
    _$AS(t4, e7) {
      return this.update(t4, e7);
    }
    update(t4, e7) {
      return this.render(...e7);
    }
  };

  // node_modules/lit-html/directives/class-map.js
  var e6 = e5(class extends i5 {
    constructor(t4) {
      if (super(t4), t4.type !== t3.ATTRIBUTE || "class" !== t4.name || t4.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t4) {
      return " " + Object.keys(t4).filter((s4) => t4[s4]).join(" ") + " ";
    }
    update(s4, [i6]) {
      if (void 0 === this.st) {
        this.st = /* @__PURE__ */ new Set(), void 0 !== s4.strings && (this.nt = new Set(s4.strings.join(" ").split(/\s/).filter((t4) => "" !== t4)));
        for (const t4 in i6) i6[t4] && !this.nt?.has(t4) && this.st.add(t4);
        return this.render(i6);
      }
      const r6 = s4.element.classList;
      for (const t4 of this.st) t4 in i6 || (r6.remove(t4), this.st.delete(t4));
      for (const t4 in i6) {
        const s5 = !!i6[t4];
        s5 === this.st.has(t4) || this.nt?.has(t4) || (s5 ? (r6.add(t4), this.st.add(t4)) : (r6.remove(t4), this.st.delete(t4)));
      }
      return E;
    }
  });

  // src/lib/shared/constants.ts
  var API_BASE = "";

  // src/lib/shared/auth/token.ts
  var TOKEN_KEY = "auth_token";
  function getToken() {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(TOKEN_KEY);
  }

  // src/lib/shared/api/fetch-client.ts
  var DEFAULT_TIMEOUT = 3e4;
  var HttpError = class extends Error {
    constructor(status, body, message) {
      super(message ?? `HTTP ${status}`);
      this.status = status;
      this.body = body;
      this.name = "HttpError";
    }
  };
  async function fetchApi(path, options = {}) {
    const { method = "GET", body, params, signal, timeout = DEFAULT_TIMEOUT } = options;
    const token = getToken();
    let url = `${API_BASE}${path}`;
    if (params) {
      const search = new URLSearchParams();
      Object.entries(params).forEach(([k2, v2]) => {
        if (v2 !== void 0) search.set(k2, String(v2));
      });
      const qs = search.toString();
      if (qs) url += (url.includes("?") ? "&" : "?") + qs;
    }
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    if (signal) {
      signal.addEventListener("abort", () => controller.abort(), { once: true });
    }
    const actualSignal = controller.signal;
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    if (body != null && typeof body === "object" && !(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }
    let bodyPayload;
    if (body != null) {
      bodyPayload = body instanceof FormData ? body : JSON.stringify(body);
    }
    try {
      const res = await fetch(url, {
        method,
        headers,
        body: bodyPayload,
        signal: actualSignal,
        credentials: "same-origin"
      });
      clearTimeout(timeoutId);
      if (!res.ok) {
        const errBody = await res.json().catch(() => ({ error: res.statusText }));
        throw new HttpError(res.status, errBody, errBody?.error ?? res.statusText);
      }
      const contentType = res.headers.get("Content-Type") ?? "";
      if (contentType.includes("application/json")) {
        return res.json();
      }
      return res.text();
    } catch (e7) {
      clearTimeout(timeoutId);
      throw e7;
    }
  }

  // src/lib/shared/ws/ws-push.ts
  var SharedWSPush = class {
    constructor() {
      this.bridge = null;
      this.listeners = /* @__PURE__ */ new Set();
      this.unbind = null;
    }
    /** 由 Angular 主布局在初始化时调用 */
    configure(bridge) {
      this.bridge = bridge;
      if (this.listeners.size > 0) {
        this.unbind = bridge.onConversations((data) => {
          this.listeners.forEach((fn) => fn(data));
        });
      }
    }
    subscribeConversations(limit = 20) {
      this.bridge?.subscribeConversations(limit);
    }
    unsubscribeConversations() {
      this.bridge?.unsubscribeConversations();
    }
    onConversationsUpdate(listener) {
      this.listeners.add(listener);
      if (this.listeners.size === 1 && this.bridge) {
        this.unbind = this.bridge.onConversations((data) => {
          this.listeners.forEach((fn) => fn(data));
        });
      }
      return () => {
        this.listeners.delete(listener);
        if (this.listeners.size === 0) {
          this.unbind?.();
          this.unbind = null;
        }
      };
    }
  };
  var sharedWSPush = new SharedWSPush();

  // src/lib/shared/conversation-api.ts
  var TODAY_MS = 24 * 60 * 60 * 1e3;
  function getTodayStart() {
    const d3 = /* @__PURE__ */ new Date();
    d3.setHours(0, 0, 0, 0);
    return d3.getTime();
  }
  function isToday(ts) {
    const todayStart = getTodayStart();
    return ts >= todayStart && ts < todayStart + TODAY_MS;
  }
  var conversationApi = {
    /** 获取对话列表 */
    async getConversations(opts = {}) {
      const { accountId, limit = 20, offset = 0, beforeTime } = opts;
      const params = { limit, offset };
      if (accountId?.trim()) params["accountId"] = accountId.trim();
      if (beforeTime != null && beforeTime > 0) params["beforeTime"] = beforeTime;
      return fetchApi("/api/conversations", { params });
    },
    /** 获取单条对话详情（含消息） */
    async getConversation(accountId, chatId, limit = 50, beforeId) {
      const path = `/api/conversations/${encodeURIComponent(accountId)}/${encodeURIComponent(chatId)}`;
      return fetchApi(path, { params: { limit, beforeId } });
    },
    /** 标记已读 */
    async markAsRead(accountId, chatId) {
      const path = `/api/conversations/${encodeURIComponent(accountId)}/${encodeURIComponent(chatId)}/read`;
      return fetchApi(path, { method: "POST" });
    },
    /** 全部标记已读 */
    async markAllAsRead() {
      return fetchApi("/api/conversations/read-all", { method: "POST" });
    },
    /** 删除对话 */
    async deleteConversation(accountId, chatId) {
      const path = `/api/conversations/${encodeURIComponent(accountId)}/${encodeURIComponent(chatId)}`;
      return fetchApi(path, { method: "DELETE" });
    },
    /** 发送文字消息 */
    async sendMessage(accountId, chatId, toUserId, text) {
      return fetchApi("/api/messages/send", {
        method: "POST",
        body: { accountId, chatId, toUserId, text: text.trim() }
      });
    },
    /** 发送图片消息 */
    async sendImageMessage(accountId, chatId, toUserId, file, filename = "image.jpg", imageWidth, imageHeight) {
      const form = new FormData();
      form.append("accountId", accountId);
      form.append("chatId", chatId);
      form.append("toUserId", toUserId);
      const f3 = file instanceof File ? file : new File([file], filename, { type: file.type || "image/jpeg" });
      form.append("image", f3, f3.name || filename);
      if (imageWidth != null && imageWidth > 0) form.append("imageWidth", String(imageWidth));
      if (imageHeight != null && imageHeight > 0) form.append("imageHeight", String(imageHeight));
      return fetchApi("/api/messages/send-image", {
        method: "POST",
        body: form,
        timeout: 6e4
      });
    },
    /** 获取对话关联商品 */
    async getConversationItem(accountId, chatId) {
      const path = `/api/conversations/${encodeURIComponent(accountId)}/${encodeURIComponent(chatId)}/item`;
      return fetchApi(path);
    },
    /** 获取账号商品列表 */
    async getAccountGoods(accountId, page = 1, pageSize = 10, forceRefresh = false) {
      const path = `/api/goods/account/${encodeURIComponent(accountId)}`;
      const params = { page, pageSize };
      if (forceRefresh) params["forceRefresh"] = 1;
      const data = await fetchApi(path, { params });
      return { items: data?.items ?? [], nextPage: data?.nextPage };
    },
    /** 通过 MTOP API 获取任意商品详情（可查他人商品） */
    async getItemDetailSmart(accountId, itemId) {
      return fetchApi(`/api/goods/item-detail/${encodeURIComponent(itemId)}`, { params: { accountId } });
    },
    /** 获取订单列表 */
    async getOrders(accountId, status, limit = 50, offset = 0) {
      const params = { limit, offset };
      if (accountId) params["accountId"] = accountId;
      if (status != null) params["status"] = status;
      return fetchApi("/api/orders", { params });
    },
    /** 商品图片代理 URL（用于 Canvas 绘图避免 CORS） */
    getServeImageUrl(picUrl) {
      return `/api/goods/serve-image?url=${encodeURIComponent(picUrl)}`;
    },
    /** 工具：拆分今日/历史对话 */
    splitTodayAndHistory(conversations) {
      const today = [];
      const history = [];
      for (const c4 of conversations) {
        if (isToday(c4.lastTime)) today.push(c4);
        else history.push(c4);
      }
      return { today, history };
    }
  };

  // src/lib/conversation-ui/conversation-lit.ts
  var CONVERSATION_CSS_ID = "conversation-lit-injected-css";
  function injectConversationStyles() {
    if (document.getElementById(CONVERSATION_CSS_ID)) return;
    const style = document.createElement("style");
    style.id = CONVERSATION_CSS_ID;
    style.textContent = CONVERSATION_COMPONENT_CSS;
    document.head.appendChild(style);
  }
  var CONVERSATION_COMPONENT_CSS = `
.conversations-page {
    --conversation-row-height: 3.5rem;
    height: calc(100vh - 7rem);
    display: flex;
    flex-direction: column;
    min-height: 0;
    padding-top: 1.25rem !important;
    padding-bottom: 0 !important;
}
.conversations-page-header { flex-shrink: 0; }
.conversations-card { flex: 1; min-height: 0; display: flex; flex-direction: column; }
.conversations-three-columns {
    display: grid;
    grid-template-columns: repeat(var(--conversation-columns, 3), minmax(0, 1fr));
    gap: 1rem; flex: 1; min-height: 0; align-items: stretch;
}
@media (max-width: 1024px) { .conversations-three-columns { grid-template-columns: 1fr; } }
.conversation-column {
    display: flex; flex-direction: column; min-width: 0; min-height: 0;
    border: 1px solid oklch(var(--b3)); border-radius: 0.75rem;
    overflow: hidden; background: oklch(var(--b1)); padding: 0.5rem;
}
.conversation-column .column-header {
    display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem;
    flex-shrink: 0; min-height: var(--conversation-row-height); height: var(--conversation-row-height);
    box-sizing: border-box; overflow: hidden;
}
.conversation-column .column-header.card.glass-card { margin: 0; margin-bottom: 0.5rem; }
.conversation-column.col-chat .column-chat { padding: 0; }
.conversation-column.col-chat .conversation-header-card {
    margin: 0; margin-bottom: 0.5rem;
    height: var(--conversation-row-height); min-height: var(--conversation-row-height);
    box-sizing: border-box; flex-shrink: 0; overflow: hidden;
}
.conversation-column.col-list .column-list .card.glass-card.conversation-list-card,
.conversation-column.col-list .column-list .card.glass-card.conversation-list-history-folder {
    border-radius: 0.5rem; box-shadow: 0 1px 3px oklch(0 0 / 0.08);
}
.conversation-column.col-detail .column-header { justify-content: center; }
.conversation-column.col-detail .column-list .card.detail-goods-card {
    border-radius: 0.5rem; box-shadow: 0 1px 3px oklch(0 0 / 0.08);
}
.conversation-column .column-title { font-weight: 600; font-size: 0.875rem; flex-shrink: 0; }
.conversation-column.col-list .column-header {
    justify-content: space-between; flex-wrap: nowrap; flex-direction: row;
}
.conversation-column.col-list .column-header-left {
    text-align: left; justify-content: flex-start; min-width: 0;
    flex-wrap: nowrap; display: flex; align-items: center;
}
.conversation-column.col-list .column-header-badges .column-header-count-badge { min-width: 8rem; }
.conversation-column .column-actions {
    display: flex; align-items: center; gap: 0.25rem; margin-left: auto; flex-shrink: 0;
}
.conversation-column.col-detail .column-list { align-items: stretch; text-align: center; }
.conversation-column.col-detail .column-list.column-list-detail {
    display: flex; flex-direction: column; min-height: 0;
}
.conversation-column.col-detail .detail-goods-card-stretch {
    display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
}
.conversation-column.col-detail .column-list .card { text-align: center; }
.conversation-column.col-detail .column-list .card .flex { justify-content: center; }
.conversation-goods-list-toggle { user-select: none; }
.conversation-column.col-goods-list .column-header.column-header-goods {
    display: flex; align-items: center; justify-content: center;
}
.conversation-column.col-goods-list .column-list-goods { padding: 0; }
.conversation-column.col-goods-list .goods-list-row { box-shadow: 0 1px 2px oklch(0 0 / 0.06); }
.conversation-column.col-goods-list .goods-list-send-btn { flex-shrink: 0; }
.conversation-column.col-goods-list { min-width: 12rem; }
.detail-goods-card .detail-goods-img {
    width: 16rem; height: 16rem; min-width: 16rem; min-height: 16rem;
}
.detail-goods-card .detail-goods-text { word-break: break-word; overflow-wrap: break-word; }
.conversation-column.col-detail .detail-goods-card { min-height: 18rem; }
.conversation-column .column-list { flex: 1; overflow-y: auto; padding: 0; min-height: 0; }
.conversation-column .column-chat {
    padding: 0; padding-top: 0; min-height: 0; overflow: visible;
}
.conversations-page .conversation-list-card { transition: none !important; }
[data-theme="light"] .conversations-page .conversation-list-card:hover,
[data-theme="modern"] .conversations-page .conversation-list-card:hover {
    background-color: oklch(var(--b2) / 0.96) !important; box-shadow: inherit !important;
}
[data-theme="dark"] .conversations-page .conversation-list-card:hover {
    background-color: oklch(var(--b2) / 0.9) !important; box-shadow: inherit !important;
}
.conversations-page .conversation-column .card.glass-card.conversation-list-card { transition: none !important; }
.conversations-page .conversation-column .card.glass-card.conversation-list-card:hover {
    transform: none !important; box-shadow: inherit !important;
}
.conversations-page .conversation-column.col-list .card.glass-card.conversation-list-history-folder {
    background: oklch(var(--b2)) !important; transition: background-color 0.15s ease, box-shadow 0.15s ease !important;
}
.conversations-page .conversation-column.col-list .card.glass-card.conversation-list-history-folder:hover {
    background: oklch(var(--b3)) !important; box-shadow: inherit !important; transform: none !important;
}
.conversations-page .conversation-column.col-list .card.glass-card.conversation-list-history-folder * { transition: none !important; }
.conversations-page .conversation-column.col-list .card.glass-card.conversation-list-history-folder .w-8.h-8.rounded-lg {
    background-color: oklch(var(--b3)) !important;
}
.conversations-page .conversation-column.col-list .card.glass-card.conversation-list-history-folder:hover .w-8.h-8.rounded-lg {
    background-color: oklch(var(--b3) / 0.95) !important;
}
.conversations-page .conversation-column.col-list .card.glass-card.conversation-list-history-folder .badge {
    background-color: oklch(var(--b3)) !important; color: oklch(var(--bc)) !important;
}
.conversations-page .conversation-column.col-list .card.glass-card.conversation-list-card.conversation-item-selected {
    background: oklch(var(--b2) / 0.98) !important;
    border: 2px solid #ee862b !important; border-radius: 0.5rem;
    box-shadow: inset 4px 0 0 0 #ee862b, 0 0 0 0 transparent !important;
}
.conversations-page .conversation-column.col-list .card.glass-card.conversation-list-card.conversation-item-selected:hover {
    background: oklch(var(--b2) / 0.98) !important;
    border: 2px solid #ee862b !important;
    box-shadow: inset 4px 0 0 0 #ee862b, 0 0 0 0 transparent !important;
}
[data-theme="dark"] .conversations-page .conversation-column.col-list .card.glass-card.conversation-list-card.conversation-item-selected,
[data-theme="dark"] .conversations-page .conversation-column.col-list .card.glass-card.conversation-list-card.conversation-item-selected:hover {
    background: oklch(var(--b2) / 0.95) !important;
    border: 2px solid #ee862b !important;
    box-shadow: inset 4px 0 0 0 #ee862b, 0 0 0 0 transparent !important;
}
.conversation-list-username { font-weight: 600; font-size: 0.875rem; color: oklch(var(--bc)); }
.conversation-list-time { font-size: 0.6875rem; color: oklch(var(--bc) / 0.55); }
.conversation-list-goods-label, .conversation-list-msg-label {
    font-size: 0.6875rem; font-weight: 600; color: oklch(var(--bc) / 0.6);
    text-transform: uppercase; letter-spacing: 0.02em;
}
.conversation-list-goods-price { font-weight: 600; color: oklch(var(--p)); }
.conversation-list-msg-text { color: oklch(var(--bc) / 0.85); }
.conversation-list-goods {
    border: 1px solid oklch(var(--b3)); border-radius: 0.375rem;
    background: oklch(var(--b2) / 0.9); line-height: 1.25;
    box-shadow: 0 0 0 1px oklch(var(--b3) / 0.5);
}
.conversation-list-goods-placeholder {
    min-height: 2rem; border: none; background: transparent; box-shadow: none;
}
.conversation-list-goods-placeholder::before { content: '\\00a0'; display: block; height: 0; overflow: hidden; }
[data-theme="dark"] .conversation-list-goods-placeholder { background: transparent; }
.conversation-list-lastmsg {
    border: 1px solid oklch(var(--b3)); border-left: 3px solid oklch(var(--bc) / 0.25);
    border-radius: 0.375rem; background: oklch(var(--b2) / 0.85); line-height: 1.25;
    box-shadow: 0 0 0 1px oklch(var(--b3) / 0.5);
}
[data-theme="dark"] .conversation-list-goods { background: oklch(var(--b2) / 0.7); border-color: oklch(var(--b3)); }
[data-theme="dark"] .conversation-list-lastmsg {
    background: oklch(var(--b2) / 0.6); border-color: oklch(var(--b3));
    border-left-color: oklch(var(--bc) / 0.35);
}
.conversation-list-card .card-body.conversation-list-card-body { min-height: var(--conversation-row-height); }
.conversation-list-card .card-body { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.conversation-list-card > .card-body > .flex { min-height: 3.75rem; }
.conversation-list-card .flex-1 { line-height: 1.25; }
.conversation-header-card {
    display: flex; align-items: center; box-sizing: border-box;
    height: var(--conversation-row-height); min-height: var(--conversation-row-height);
}
.skeleton-line { display: block; width: 100%; border-radius: 9999px; background: rgba(148,163,184,0.25); }
.skeleton-line-sm { height: 0.6rem; }
.skeleton-line-xs { height: 0.45rem; }
[data-theme="dark"] .skeleton-line { background: rgba(148,163,184,0.28); }
.conversation-list-skeleton-avatar {
    width: 2.5rem; height: 2.5rem; min-width: 2.5rem; min-height: 2.5rem;
    border-radius: 9999px; background: rgba(148,163,184,0.25);
}
[data-theme="dark"] .conversation-list-skeleton-avatar { background: rgba(148,163,184,0.28); }
.conversation-list-skeleton-item { pointer-events: none; }
.history-load-more-footer { min-height: 2.5rem; align-items: center; }
.conversation-column.col-chat .messages-container { box-sizing: border-box; }
.messages-viewport { height: 100%; overflow-y: auto; }
.messages-viewport .messages-list-content { padding-left: 2rem; padding-right: 2rem; box-sizing: border-box; }
.load-more-messages-bar { flex-shrink: 0; z-index: 0; }
.load-more-messages-bar .load-more-messages-btn { min-width: 8rem; }
.conversation-message-row { align-items: flex-start; position: relative; z-index: 0; }
.conversation-message-row .avatar { flex-shrink: 0; }
.conversation-message-row .avatar img { display: block; border-radius: 9999px; object-fit: cover; }
.messages-scroll { scrollbar-width: thin; scrollbar-color: rgba(0,0,0,0.2) transparent; }
.messages-scroll::-webkit-scrollbar { width: 4px; }
.messages-scroll::-webkit-scrollbar-track { background: transparent; }
.messages-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 3px; }
[data-theme="dark"] .messages-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); }
.message-bubble-is-card { padding: 0 !important; background: transparent !important; box-shadow: none !important; }
.message-card-inner {
    padding: 0.75rem 1rem; border-radius: 0.75rem; background: #ffffff;
    min-width: 10rem; max-width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.06);
}
[data-theme="dark"] .message-card-inner { background: #ffffff; border-color: rgba(255,255,255,0.12); box-shadow: 0 1px 4px rgba(0,0,0,0.2); }
.message-card-title { font-size: 0.9375rem; font-weight: 600; color: #1a1a1a; margin: 0; line-height: 1.4; }
[data-theme="dark"] .message-card-title { color: #1a1a1a; }
.message-card-divider { border: none; border-top: 1px solid rgba(0,0,0,0.12); margin: 0.5rem 0; }
[data-theme="dark"] .message-card-divider { border-top-color: rgba(0,0,0,0.12); }
.message-card-subtitle { font-size: 0.8125rem; font-weight: 400; color: #555; margin: 0; line-height: 1.4; }
[data-theme="dark"] .message-card-subtitle { color: #555; }
.goods-card-in-message { max-width: 140px; }
[data-theme="dark"] .goods-card-in-message .bg-base-200\\/50 { background: rgba(255, 255, 255, 0.05); }
[data-theme="light"] .goods-card-in-message .bg-base-200\\/50,
[data-theme="modern"] .goods-card-in-message .bg-base-200\\/50 { background: rgba(0, 0, 0, 0.03); }
.message-bubble-out {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.85));
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}
[data-theme="dark"] .message-bubble-out {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.75));
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}
[data-theme="light"] .message-bubble-out,
[data-theme="modern"] .message-bubble-out {
    background: #ee862b !important;
    background-image: none !important;
    color: #1a1a1a !important;
    box-shadow: 0 2px 8px rgba(238, 134, 43, 0.35);
}
[data-theme="light"] .message-bubble-out *,
[data-theme="modern"] .message-bubble-out * {
    color: #1a1a1a !important;
}
[data-theme="light"] .message-bubble-out a,
[data-theme="modern"] .message-bubble-out a {
    color: #7c2d12 !important;
    text-decoration: underline;
}
.reply-area .textarea { border-radius: 0.75rem; }
.reply-action-btns { align-items: stretch; min-width: 5.5rem; width: 5.5rem; }
.reply-action-btns .reply-upload-img-btn,
.reply-action-btns .reply-send-btn { display: block; width: 100%; }
.reply-upload-img-btn .btn,
.reply-upload-img-btn button,
.reply-send-btn .btn,
.reply-send-btn button { width: 100% !important; min-width: 0 !important; justify-content: center; }
button.reply-send-btn, .reply-send-btn button, .reply-send-btn .btn,
button.goods-list-send-btn, .goods-list-send-btn button, .goods-list-send-btn .btn {
    background: #f97316 !important; border-color: #f97316 !important;
    background-image: none !important; color: #fff !important; box-shadow: none !important;
}
button.reply-send-btn:hover:not(:disabled), .reply-send-btn button:hover:not(:disabled), .reply-send-btn .btn:hover:not(:disabled),
button.goods-list-send-btn:hover:not(:disabled), .goods-list-send-btn button:hover:not(:disabled), .goods-list-send-btn .btn:hover:not(:disabled) {
    background: #ea580c !important; border-color: #ea580c !important; color: #fff !important;
}
.reply-area { position: static; }
.reply-pending-img img { display: block; }
.image-preview-overlay {
    position: fixed; inset: 0; z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    padding: 1.5rem; cursor: pointer;
}
.image-preview-backdrop { position: absolute; inset: 0; background: oklch(0 0 / 0.75); backdrop-filter: blur(4px); }
.image-preview-close {
    position: absolute; top: 1rem; right: 1rem; z-index: 1;
    display: flex; align-items: center; justify-content: center;
    width: 2.5rem; height: 2.5rem; border: none; border-radius: 0.5rem;
    background: oklch(var(--b1) / 0.9); color: oklch(var(--bc)); cursor: pointer;
    box-shadow: 0 2px 8px oklch(0 0 / 0.2); transition: background 0.15s, transform 0.15s;
}
.image-preview-close:hover { background: oklch(var(--b2)); transform: scale(1.05); }
.image-preview-img {
    position: relative; z-index: 1; max-width: 90vw; max-height: 90vh;
    object-fit: contain; border-radius: 0.5rem; box-shadow: 0 8px 32px oklch(0 0 / 0.4);
    cursor: default; pointer-events: auto; transform-origin: center center;
    will-change: transform; backface-visibility: hidden; contain: layout style paint;
}
.image-preview-stage {
    position: relative; z-index: 1; width: 90vw; height: 90vh;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; touch-action: none; contain: layout style; transform: translateZ(0);
}
.image-preview-grabbable { cursor: grab; }
.image-preview-grabbable:active { cursor: grabbing; }
.image-preview-toolbar {
    position: absolute; top: 14px; left: 14px; z-index: 2;
    display: flex; gap: 8px; padding: 8px; border-radius: 999px;
    background: oklch(0 0 / 0.45); backdrop-filter: blur(6px);
}
.image-preview-toolbtn {
    width: 44px; height: 32px; border: none; border-radius: 999px;
    background: oklch(var(--b1) / 0.9); color: oklch(var(--bc)); cursor: pointer;
    box-shadow: 0 2px 8px oklch(0 0 / 0.2); transition: background 0.15s, transform 0.15s; font-size: 14px;
}
.image-preview-toolbtn:hover { background: oklch(var(--b2)); transform: scale(1.04); }
.reply-image { border: 1px solid rgba(0,0,0,0.06); }
[data-theme="dark"] .reply-image { border-color: rgba(255,255,255,0.12); }
.delete-older-than-row {
    display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0.75rem;
    flex-shrink: 0; margin-bottom: 0.25rem;
}
.delete-older-than-label { font-size: 0.75rem; white-space: nowrap; }
`;
  var svgIcon = (d3, size = 16) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d3}</svg>`;
  var ICONS = {
    RefreshCw: svgIcon('<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>'),
    Trash2: svgIcon('<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>'),
    X: svgIcon('<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'),
    CheckCircle: svgIcon('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'),
    Bell: svgIcon('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>'),
    CheckSquare: svgIcon('<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>'),
    MessageCircle: svgIcon('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>'),
    Folder: svgIcon('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>'),
    ChevronDown: svgIcon('<polyline points="6 9 12 15 18 9"></polyline>'),
    ChevronUp: svgIcon('<polyline points="18 15 12 9 6 15"></polyline>'),
    Package: svgIcon('<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>'),
    Send: svgIcon('<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>'),
    Image: svgIcon('<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>')
  };
  function iconHtml(name, cls = "") {
    return b2`<span class="${cls}" style="display:inline-flex;align-items:center;justify-content:center;width:1em;height:1em" .innerHTML=${ICONS[name]}></span>`;
  }
  function getWsPush() {
    return (typeof window !== "undefined" && window.__sharedWSPush) ?? null;
  }
  function getDialog() {
    const d3 = typeof window !== "undefined" && window.__dialogService;
    if (d3?.alert && d3?.confirm) {
      return {
        alert: (t4, m2) => d3.alert(t4, m2).catch(() => {
        }),
        confirm: (t4, m2) => d3.confirm(t4, m2)
      };
    }
    return {
      alert: (t4, m2) => {
        window.alert(t4 ? `${t4}

${m2}` : m2);
        return Promise.resolve();
      },
      confirm: (t4, m2) => Promise.resolve(window.confirm(t4 ? `${t4}

${m2}` : m2))
    };
  }
  var STORAGE_SHOW_GOODS = "conversation_show_goods_list_column";
  var TRANSACTION_CARD_PHRASES = /* @__PURE__ */ new Set([
    "[\u6211\u5DF2\u62CD\u4E0B\uFF0C\u5F85\u4ED8\u6B3E]",
    "[\u6211\u5DF2\u4ED8\u6B3E\uFF0C\u7B49\u5F85\u4F60\u53D1\u8D27]",
    "[\u8BB0\u5F97\u53CA\u65F6\u786E\u8BA4\u6536\u8D27]",
    "[\u6211\u5B8C\u6210\u4E86\u8BC4\u4EF7]"
  ]);
  var SYSTEM_DISPLAY_NAMES = /* @__PURE__ */ new Set([
    "\u4EA4\u6613\u6D88\u606F",
    "\u4F60\u6709\u4E00\u6761\u65B0\u6D88\u606F",
    "\u7CFB\u7EDF\u6D88\u606F",
    "\u95F2\u9C7C\u7CFB\u7EDF",
    "\u7CFB\u7EDF\u901A\u77E5",
    "\u7CFB\u7EDF",
    "\u901A\u77E5",
    "\u672A\u77E5\u7528\u6237",
    "\u672A\u77E5",
    "AI\u5236\u9020\u8005"
  ]);
  function isInvalidDisplayName(name) {
    if (!name || !name.trim()) return true;
    const t4 = name.trim();
    return t4 === "\u672A\u77E5\u7528\u6237" || t4 === "\u672A\u77E5" || SYSTEM_DISPLAY_NAMES.has(t4);
  }
  function getMsgTimestamp(msg) {
    const ts = msg.timestamp;
    if (typeof ts === "number" && !isNaN(ts) && ts > 0) return ts;
    if (msg.msgTime) return typeof msg.msgTime === "string" ? new Date(msg.msgTime).getTime() : Number(msg.msgTime) || 0;
    return 0;
  }
  var _ConversationLitElement = class _ConversationLitElement extends i4 {
    constructor() {
      super(...arguments);
      this._accounts = [];
      this._selectedAccountId = "";
      this._todayConversations = [];
      this._historyConversations = [];
      this._selectedConversation = null;
      this._loading = false;
      this._loadingMore = false;
      this._loadingHistory = false;
      this._loadingMoreHistory = false;
      this._historyExpanded = false;
      this._historyLoaded = false;
      this._historyTotal = 0;
      this._hasMore = true;
      this._hasMoreHistory = true;
      this._conversationItem = null;
      this._loadingMessages = false;
      this._loadingMoreMessages = false;
      this._hasMoreMessages = true;
      this._clearingUnread = false;
      this._selectionMode = false;
      this._selectedConversations = /* @__PURE__ */ new Set();
      this._deletingSelected = false;
      this._deleteOlderThanDays = 7;
      this._deletingOlderThan = false;
      this._showGoodsListColumn = true;
      this._desktopNotificationEnabled = true;
      this._accountGoodsList = [];
      this._loadingGoodsList = false;
      this._sendingProductLinkId = null;
      this._hasMoreGoodsList = false;
      this._loadingMoreGoodsList = false;
      this._replyText = "";
      this._pendingImages = [];
      this._sendingReply = false;
      this._imagePreviewUrl = null;
      this._imagePreviewScale = 1;
      this._imagePreviewTranslate = { x: 0, y: 0 };
      this._messageItems = /* @__PURE__ */ new Map();
      this._limit = _ConversationLitElement.MAX_CONVERSATIONS_CACHED;
      this._offset = 0;
      this._historyOffset = 0;
      this._todayTotal = 0;
      this._goodsListAccountId = null;
      this._goodsListPage = 1;
      this._goodsListCacheByAccount = /* @__PURE__ */ new Map();
      this._displayNameOverrides = /* @__PURE__ */ new Map();
      this._timeFormatCache = /* @__PURE__ */ new Map();
      this._messageItemCache = /* @__PURE__ */ new Map();
      this._goodsInfoCache = /* @__PURE__ */ new Map();
      this._GOODS_CACHE_TTL = 30 * 60 * 1e3;
      this._pendingPreviewUrls = [];
      this._optimisticObjectUrls = [];
      this._unsubscribeWs = null;
      this._conversationListScrollThrottle = false;
      this._messagesScrollThrottle = false;
      this._imagePreviewDragging = false;
      this._imagePreviewDragStart = null;
      this._imagePreviewDragOrigin = null;
      this._imagePreviewTargetScale = 1;
      this._imagePreviewWheelRafId = null;
      this._imagePreviewPointerRafId = null;
      this._imagePreviewPendingTranslate = null;
      this._escHandler = null;
      this.skeletonListCount = [1, 2, 3, 4, 5, 6];
      this.GOODS_LIST_PAGE_SIZE = 10;
    }
    createRenderRoot() {
      return this;
    }
    /* ── 生命周期 ── */
    connectedCallback() {
      super.connectedCallback();
      injectConversationStyles();
      try {
        const stored = localStorage.getItem(STORAGE_SHOW_GOODS);
        if (stored !== null) this._showGoodsListColumn = stored !== "false";
      } catch {
      }
      try {
        this._desktopNotificationEnabled = typeof Notification !== "undefined" && Notification.permission === "granted" && localStorage.getItem("desktop_notification_enabled") !== "false";
      } catch {
      }
      this._escHandler = (e7) => {
        if (e7.key === "Escape" && this._imagePreviewUrl) this.closeImagePreview();
      };
      document.addEventListener("keydown", this._escHandler);
      setTimeout(() => {
        this._loadAccounts();
        if (this._todayConversations.length === 0 && this._historyConversations.length === 0) {
          this.loadConversations();
        }
        this._setupWs();
      }, 0);
    }
    _setupWs() {
      const ws = getWsPush();
      if (ws) {
        this._unsubscribeWs = ws.onConversationsUpdate((data) => {
          this._onWsUpdate(data);
        });
        ws.subscribeConversations(this._limit);
      } else {
        setTimeout(() => this._setupWs(), 1e3);
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback();
      this._unsubscribeWs?.();
      getWsPush()?.unsubscribeConversations();
      if (this._escHandler) document.removeEventListener("keydown", this._escHandler);
      this._pendingPreviewUrls.forEach((u3) => URL.revokeObjectURL(u3));
      this._optimisticObjectUrls.forEach((u3) => URL.revokeObjectURL(u3));
      this._timeFormatCache.clear();
      if (this._imagePreviewWheelRafId !== null) cancelAnimationFrame(this._imagePreviewWheelRafId);
      if (this._imagePreviewPointerRafId !== null) cancelAnimationFrame(this._imagePreviewPointerRafId);
    }
    /* ── 数据加载 ── */
    async _loadAccounts() {
      try {
        const token = localStorage.getItem("auth_token");
        const res = await fetch("/api/accounts", {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          credentials: "same-origin"
        });
        if (res.ok) {
          const data = await res.json();
          this._accounts = data.accounts ?? [];
        }
      } catch {
      }
    }
    async loadConversations() {
      if (this._loading) return;
      this._loading = true;
      this._offset = 0;
      try {
        const res = await conversationApi.getConversations({
          accountId: this._selectedAccountId || void 0,
          limit: this._limit,
          offset: 0
        });
        const allConvs = res.conversations ?? [];
        const { today, history } = conversationApi.splitTodayAndHistory(allConvs);
        this._todayConversations = today;
        this._todayTotal = today.length;
        this._historyConversations = [];
        this._historyTotal = Math.max(0, (res.total ?? 0) - today.length);
        this._historyLoaded = false;
        this._historyExpanded = false;
        this._hasMore = allConvs.length >= this._limit && (res.total ?? 0) > this._limit;
        this._trimConversationsToCache();
        this._hasMoreHistory = true;
        this._loadingMoreHistory = false;
        if (!this._selectedConversation && today.length > 0) {
          this.openConversation(today[0]);
        }
        this._backfillUnknownUserDisplayNames();
      } catch (e7) {
        console.error("\u52A0\u8F7D\u5BF9\u8BDD\u5217\u8868\u5931\u8D25", e7);
      } finally {
        this._loading = false;
      }
    }
    async loadMoreConversations() {
      if (this._loadingMore || !this._hasMore) return;
      this._loadingMore = true;
      const newOffset = this._todayConversations.length;
      try {
        const res = await conversationApi.getConversations({
          accountId: this._selectedAccountId || void 0,
          limit: this._limit,
          offset: newOffset
        });
        const { today } = conversationApi.splitTodayAndHistory(res.conversations ?? []);
        if (today.length > 0) {
          const existing = new Set(this._todayConversations.map((c4) => `${c4.accountId}:${c4.chatId}`));
          const newOnes = today.filter((c4) => !existing.has(`${c4.accountId}:${c4.chatId}`));
          this._todayConversations = [...this._todayConversations, ...newOnes];
          this._trimConversationsToCache();
        }
        this._hasMore = (res.conversations?.length ?? 0) >= this._limit;
      } catch (e7) {
        console.error("\u52A0\u8F7D\u66F4\u591A\u5BF9\u8BDD\u5931\u8D25", e7);
      } finally {
        this._loadingMore = false;
      }
    }
    async _loadHistoryConversations() {
      if (this._loadingHistory) return;
      this._loadingHistory = true;
      try {
        const todayStart = this._getTodayStartTimestamp();
        const res = await conversationApi.getConversations({
          accountId: this._selectedAccountId || void 0,
          limit: this._limit,
          offset: 0,
          beforeTime: todayStart
        });
        const history = (res.conversations ?? []).filter((c4) => c4.lastTime < todayStart);
        this._historyConversations = history;
        this._historyTotal = res.total ?? history.length;
        this._historyLoaded = true;
        this._historyOffset = history.length;
        this._hasMoreHistory = history.length >= this._limit;
        this._trimConversationsToCache();
      } catch (e7) {
        console.error("\u52A0\u8F7D\u5386\u53F2\u5BF9\u8BDD\u5931\u8D25", e7);
      } finally {
        this._loadingHistory = false;
      }
    }
    async loadMoreHistoryConversations() {
      if (this._loadingMoreHistory || !this._hasMoreHistory) return;
      this._loadingMoreHistory = true;
      try {
        const todayStart = this._getTodayStartTimestamp();
        const res = await conversationApi.getConversations({
          accountId: this._selectedAccountId || void 0,
          limit: this._limit,
          offset: this._historyOffset,
          beforeTime: todayStart
        });
        const history = (res.conversations ?? []).filter((c4) => c4.lastTime < todayStart);
        if (history.length > 0) {
          const existing = new Set(this._historyConversations.map((c4) => `${c4.accountId}:${c4.chatId}`));
          const newOnes = history.filter((c4) => !existing.has(`${c4.accountId}:${c4.chatId}`));
          this._historyConversations = [...this._historyConversations, ...newOnes];
          this._historyOffset += newOnes.length;
          this._trimConversationsToCache();
        }
        this._hasMoreHistory = history.length >= this._limit;
      } catch (e7) {
        console.error("\u52A0\u8F7D\u66F4\u591A\u5386\u53F2\u5BF9\u8BDD\u5931\u8D25", e7);
      } finally {
        this._loadingMoreHistory = false;
      }
    }
    async expandHistoryFolder() {
      if (this._selectionMode) return;
      if (this._historyExpanded) {
        this._historyExpanded = false;
        return;
      }
      if (!this._historyLoaded) await this._loadHistoryConversations();
      this._historyExpanded = true;
    }
    async openConversation(conv) {
      if (this._selectionMode) return;
      if (conv.unread > 0) {
        conv = { ...conv, unread: 0 };
        this._todayConversations = this._todayConversations.map((c4) => c4.accountId === conv.accountId && c4.chatId === conv.chatId ? { ...c4, unread: 0 } : c4);
        this._historyConversations = this._historyConversations.map((c4) => c4.accountId === conv.accountId && c4.chatId === conv.chatId ? { ...c4, unread: 0 } : c4);
        conversationApi.markAsRead(conv.accountId, conv.chatId).catch(() => {
        });
      }
      this._selectedConversation = conv;
      this._loadingMessages = true;
      this._conversationItem = null;
      this._hasMoreMessages = true;
      try {
        const detail = await conversationApi.getConversation(conv.accountId, conv.chatId, _ConversationLitElement.MAX_MESSAGES_PER_CONVERSATION);
        this._selectedConversation = {
          ...conv,
          ...detail,
          messages: this._trimMessagesToCache(detail.messages) ?? detail.messages,
          hasMoreMessages: detail.hasMoreMessages
        };
        this._hasMoreMessages = detail.hasMoreMessages ?? (detail.messageCount ?? 0) > (detail.messages?.length ?? 0);
        this._syncListDisplayNameFromDetail(
          conv.accountId,
          conv.chatId,
          this.getConversationDisplayName(this._selectedConversation),
          this._selectedConversation.userAvatar
        );
        this._loadConversationItemAsync(conv).catch(() => {
        });
        this._messageItemCache.clear();
        const msgs = this._selectedConversation?.messages;
        if (msgs) {
          const itemIds = /* @__PURE__ */ new Set();
          for (const m2 of msgs) {
            const id = m2.itemId || this._getItemIdFromGoofishUrl(m2.content);
            if (id) itemIds.add(id);
          }
          if (itemIds.size > 0) this._loadMessageItemsAsync(conv.accountId, Array.from(itemIds)).catch(() => {
          });
        }
        if (this._showGoodsListColumn && this._goodsListAccountId !== conv.accountId) {
          this._loadAccountGoodsList(conv.accountId);
        }
      } catch (e7) {
        console.error("\u52A0\u8F7D\u5BF9\u8BDD\u8BE6\u60C5\u5931\u8D25", e7);
      } finally {
        this._loadingMessages = false;
        this._scrollToBottomAfterUpdate();
      }
    }
    /**
     * 异步加载「正在咨询的宝贝」，不阻塞消息首屏。
     * 多级 fallback：API → 商品列表 → MTOP 详情 → 订单列表
     */
    async _loadConversationItemAsync(conv) {
      if (!conv.accountId || !conv.chatId) return;
      const current = this._selectedConversation;
      if (!current || current.accountId !== conv.accountId || current.chatId !== conv.chatId) return;
      try {
        const itemRes = await conversationApi.getConversationItem(conv.accountId, conv.chatId);
        let item = itemRes?.item ?? null;
        if (item && item.id && (!item.title || !item.picUrl)) {
          try {
            const goodsRes = await conversationApi.getAccountGoods(conv.accountId, 1);
            const found = goodsRes?.items?.find((g2) => g2.id === item.id);
            if (found) {
              item = { id: found.id, title: found.title, picUrl: found.picUrl || null, price: found.price };
            }
          } catch {
          }
        }
        if (item && item.id && (!item.title || !item.picUrl)) {
          try {
            const smartRes = await conversationApi.getItemDetailSmart(conv.accountId, item.id);
            if (smartRes?.success && smartRes.item) {
              item = {
                id: item.id,
                title: smartRes.item.title || item.title,
                picUrl: smartRes.item.picUrl || item.picUrl,
                price: smartRes.item.price || item.price
              };
            }
          } catch {
          }
        }
        if (item && item.id && (!item.title || !item.picUrl)) {
          try {
            const ordersRes = await conversationApi.getOrders(conv.accountId, void 0, 100, 0);
            const order = ordersRes?.orders?.find((o6) => o6.itemId === item.id && o6.itemTitle && o6.itemPicUrl);
            if (order) {
              item = {
                id: item.id,
                title: order.itemTitle || item.title,
                picUrl: order.itemPicUrl || item.picUrl,
                price: order.itemPrice || item.price
              };
            }
          } catch {
          }
        }
        if (this._selectedConversation?.accountId === conv.accountId && this._selectedConversation?.chatId === conv.chatId) {
          this._conversationItem = item;
        }
      } catch {
        this._conversationItem = null;
      }
    }
    async _loadMoreMessages() {
      const conv = this._selectedConversation;
      if (!conv?.messages?.length || this._loadingMoreMessages || !this._hasMoreMessages) return;
      this._loadingMoreMessages = true;
      const firstMsgId = Math.min(...conv.messages.map((m2) => m2.id));
      try {
        const detail = await conversationApi.getConversation(conv.accountId, conv.chatId, _ConversationLitElement.MAX_MESSAGES_PER_CONVERSATION, firstMsgId);
        const existingIds = new Set(conv.messages.map((m2) => m2.id));
        const newMsgs = (detail.messages ?? []).filter((m2) => !existingIds.has(m2.id));
        if (newMsgs.length > 0) {
          const merged = [...newMsgs, ...conv.messages].sort((a3, b3) => getMsgTimestamp(a3) - getMsgTimestamp(b3));
          this._selectedConversation = {
            ...conv,
            messages: this._trimMessagesToCache(merged) ?? merged,
            hasMoreMessages: detail.hasMoreMessages
          };
          this._hasMoreMessages = detail.hasMoreMessages ?? newMsgs.length >= _ConversationLitElement.MAX_MESSAGES_PER_CONVERSATION;
          const newItemIds = newMsgs.filter((m2) => m2.itemId).map((m2) => m2.itemId).filter((id, i6, arr) => arr.indexOf(id) === i6);
          if (newItemIds.length > 0) this._loadMessageItemsAsync(conv.accountId, newItemIds).catch(() => {
          });
        } else {
          this._hasMoreMessages = false;
        }
      } catch (e7) {
        console.error("\u52A0\u8F7D\u66F4\u591A\u6D88\u606F\u5931\u8D25", e7);
      } finally {
        this._loadingMoreMessages = false;
      }
    }
    /* ── WS 更新 ── */
    _onWsUpdate(data) {
      const todayStart = this._getTodayStartTimestamp();
      const allConvs = data.conversations ?? [];
      const todayNew = [];
      const historyNew = [];
      for (const c4 of allConvs) {
        if (c4.lastTime >= todayStart) todayNew.push(c4);
        else historyNew.push(c4);
      }
      if (todayNew.length > 0) {
        const existMap = new Map(this._todayConversations.map((c4) => [`${c4.accountId}:${c4.chatId}`, c4]));
        for (const c4 of todayNew) {
          const key = `${c4.accountId}:${c4.chatId}`;
          const existing = existMap.get(key);
          const over = this._displayNameOverrides.get(key);
          existMap.set(key, {
            ...c4,
            userName: over?.userName ?? (existing?.userName && !isInvalidDisplayName(existing.userName) ? existing.userName : c4.userName),
            userAvatar: over?.userAvatar ?? existing?.userAvatar ?? c4.userAvatar,
            item: existing?.item ?? c4.item
          });
        }
        this._todayConversations = Array.from(existMap.values()).sort((a3, b3) => b3.lastTime - a3.lastTime);
        this._trimConversationsToCache();
      }
      this._historyTotal = Math.max(0, (data.total ?? 0) - this._todayConversations.length);
      if (this._historyLoaded && historyNew.length > 0) {
        const existMap = new Map(this._historyConversations.map((c4) => [`${c4.accountId}:${c4.chatId}`, c4]));
        for (const c4 of historyNew) {
          const key = `${c4.accountId}:${c4.chatId}`;
          const existing = existMap.get(key);
          const over = this._displayNameOverrides.get(key);
          existMap.set(key, {
            ...c4,
            userName: over?.userName ?? existing?.userName ?? c4.userName,
            userAvatar: over?.userAvatar ?? existing?.userAvatar ?? c4.userAvatar,
            item: existing?.item ?? c4.item
          });
        }
        this._historyConversations = Array.from(existMap.values()).sort((a3, b3) => b3.lastTime - a3.lastTime);
        this._trimConversationsToCache();
      }
      const sel = this._selectedConversation;
      if (sel) {
        const updated = allConvs.find((c4) => c4.accountId === sel.accountId && c4.chatId === sel.chatId);
        if (updated) {
          const hasNewMessage = updated.lastMessage !== sel.lastMessage || updated.lastTime !== sel.lastTime;
          if (hasNewMessage) {
            conversationApi.getConversation(sel.accountId, sel.chatId, _ConversationLitElement.MAX_MESSAGES_PER_CONVERSATION).then((detail) => {
              if (this._selectedConversation?.accountId === sel.accountId && this._selectedConversation?.chatId === sel.chatId) {
                const trimmed = this._trimMessagesToCache(detail.messages) ?? detail.messages;
                this._selectedConversation = { ...sel, ...detail, messages: trimmed, hasMoreMessages: detail.hasMoreMessages };
                this._scrollToBottomAfterUpdate();
                const newItemIds = (detail.messages ?? []).filter((m2) => m2.itemId && !this._messageItems.has(m2.itemId)).map((m2) => m2.itemId).filter((id, i6, arr) => arr.indexOf(id) === i6);
                if (newItemIds.length > 0) this._loadMessageItemsAsync(sel.accountId, newItemIds).catch(() => {
                });
              }
            }).catch(() => {
            });
          }
        }
      }
    }
    /* ── 清除未读 ── */
    async _clearAllUnread() {
      if (this._clearingUnread || !this._hasUnread()) return;
      this._clearingUnread = true;
      try {
        await conversationApi.markAllAsRead();
        this._todayConversations = this._todayConversations.map((c4) => ({ ...c4, unread: 0 }));
        this._historyConversations = this._historyConversations.map((c4) => ({ ...c4, unread: 0 }));
      } catch (e7) {
        console.error("\u6E05\u9664\u672A\u8BFB\u5931\u8D25", e7);
      } finally {
        this._clearingUnread = false;
      }
    }
    /* ── 桌面通知 ── */
    async _toggleDesktopNotification() {
      const dialog = getDialog();
      if (this._desktopNotificationEnabled) {
        localStorage.setItem("desktop_notification_enabled", "false");
        this._desktopNotificationEnabled = false;
        await dialog.alert("\u63D0\u793A", "\u684C\u9762\u901A\u77E5\u5DF2\u5173\u95ED");
        return;
      }
      if (typeof window === "undefined" || !window.isSecureContext) {
        await dialog.alert("\u63D0\u793A", "\u5F53\u524D\u4E3A HTTP \u8BBF\u95EE\uFF0C\u65E0\u6CD5\u5F00\u542F\u684C\u9762\u901A\u77E5\uFF0C\u8BF7\u4F7F\u7528 HTTPS");
        return;
      }
      if (typeof Notification === "undefined") {
        await dialog.alert("\u63D0\u793A", "\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u901A\u77E5");
        return;
      }
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        localStorage.setItem("desktop_notification_enabled", "true");
        this._desktopNotificationEnabled = true;
        await dialog.alert("\u63D0\u793A", "\u684C\u9762\u901A\u77E5\u5DF2\u5F00\u542F");
      } else if (permission === "denied") {
        await dialog.alert("\u63D0\u793A", "\u60A8\u5DF2\u62D2\u7EDD\u901A\u77E5\u6743\u9650\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u8BBE\u7F6E\u4E2D\u624B\u52A8\u5F00\u542F");
      } else {
        await dialog.alert("\u63D0\u793A", "\u8BF7\u5728\u5F39\u51FA\u7684\u5BF9\u8BDD\u6846\u4E2D\u5141\u8BB8\u901A\u77E5");
      }
    }
    /* ── 多选模式 ── */
    _toggleSelectionMode() {
      this._selectionMode = !this._selectionMode;
      if (!this._selectionMode) this._selectedConversations = /* @__PURE__ */ new Set();
    }
    _toggleConversationSelection(conv, event) {
      event?.stopPropagation();
      const key = this._getConversationKey(conv);
      const s4 = new Set(this._selectedConversations);
      if (s4.has(key)) s4.delete(key);
      else s4.add(key);
      this._selectedConversations = s4;
    }
    _isConversationSelected(conv) {
      return this._selectedConversations.has(this._getConversationKey(conv));
    }
    _getSelectedCount() {
      return this._selectedConversations.size;
    }
    async _deleteSelectedConversations() {
      const selected = this._selectedConversations;
      if (selected.size === 0) return;
      const dialog = getDialog();
      if (!await dialog.confirm("\u786E\u8BA4\u5220\u9664", `\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684 ${selected.size} \u4E2A\u5BF9\u8BDD\u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002`)) return;
      this._deletingSelected = true;
      try {
        const all = [...this._todayConversations, ...this._historyConversations];
        const toDelete = all.filter((c4) => selected.has(this._getConversationKey(c4)));
        await Promise.allSettled(toDelete.map(
          (c4) => conversationApi.deleteConversation(c4.accountId, c4.chatId).catch(() => {
          })
        ));
        const deletedKeys = new Set(toDelete.map((c4) => this._getConversationKey(c4)));
        const sel = this._selectedConversation;
        if (sel && deletedKeys.has(this._getConversationKey(sel))) this._selectedConversation = null;
        deletedKeys.forEach((k2) => this._displayNameOverrides.delete(k2));
        this._todayConversations = this._todayConversations.filter((c4) => !deletedKeys.has(this._getConversationKey(c4)));
        this._historyConversations = this._historyConversations.filter((c4) => !deletedKeys.has(this._getConversationKey(c4)));
        this._selectedConversations = /* @__PURE__ */ new Set();
        if (this._todayConversations.length === 0 && this._historyConversations.length === 0) this._selectionMode = false;
        await dialog.alert("\u5DF2\u5173\u95ED", `\u5DF2\u5220\u9664 ${toDelete.length} \u4E2A\u5BF9\u8BDD`);
      } catch (e7) {
        console.error("\u6279\u91CF\u5220\u9664\u5931\u8D25", e7);
        await getDialog().alert("\u5220\u9664\u5931\u8D25", "\u6279\u91CF\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      } finally {
        this._deletingSelected = false;
      }
    }
    async _deleteConversationsOlderThanDays() {
      const days = Math.max(1, Math.floor(this._deleteOlderThanDays || 1));
      const dialog = getDialog();
      if (!await dialog.confirm("\u786E\u8BA4\u5220\u9664", `\u786E\u5B9A\u8981\u5220\u9664 ${days} \u5929\u524D\u7684\u6240\u6709\u5BF9\u8BDD\u53CA\u6D88\u606F\u5417\uFF1F\u6B64\u64CD\u4F5C\u5C06\u91CA\u653E\u786C\u76D8\u7A7A\u95F4\uFF0C\u4E14\u65E0\u6CD5\u6062\u590D\u3002`)) return;
      this._deletingOlderThan = true;
      try {
        const token = localStorage.getItem("auth_token");
        const res = await fetch(`/api/conversations/older-than/${days}`, {
          method: "DELETE",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
          credentials: "same-origin"
        });
        const data = await res.json().catch(() => ({}));
        const deleted = data?.deleted ?? 0;
        if (deleted > 0) {
          await this.loadConversations();
          await dialog.alert("\u5220\u9664\u5B8C\u6210", `\u5DF2\u5220\u9664 ${deleted} \u4E2A\u65E9\u671F\u5BF9\u8BDD\u53CA\u5176\u6D88\u606F\u3002`);
        } else {
          await dialog.alert("\u65E0\u9700\u5220\u9664", `\u6CA1\u6709\u627E\u5230 ${days} \u5929\u524D\u7684\u5BF9\u8BDD\u3002`);
        }
      } catch (e7) {
        console.error("\u4E00\u952E\u5220\u9664\u65E9\u671F\u6D88\u606F\u5931\u8D25", e7);
        await getDialog().alert("\u5220\u9664\u5931\u8D25", "\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");
      } finally {
        this._deletingOlderThan = false;
      }
    }
    /* ── 回复/发送 ── */
    _onReplyInput(e7) {
      this._replyText = e7.target.value;
    }
    _onReplyPaste(e7) {
      const items = e7.clipboardData?.items;
      if (!items) return;
      const files = [];
      for (let i6 = 0; i6 < items.length; i6++) {
        const item = items[i6];
        if (item.kind === "file" && item.type.startsWith("image/")) {
          const f3 = item.getAsFile();
          if (f3) files.push(f3);
        }
      }
      if (files.length > 0) {
        e7.preventDefault();
        this._addPendingImageFiles(files);
      }
    }
    _onReplyKeydown(e7) {
      if (e7.key !== "Enter") return;
      if (e7.shiftKey) return;
      e7.preventDefault();
      if (this._sendingReply || !this._replyText.trim() && this._pendingImages.length === 0) return;
      this._sendReply();
    }
    _onImageFileSelect(e7) {
      const input = e7.target;
      const files = input.files;
      if (!files?.length) return;
      this._addPendingImageFiles(Array.from(files));
      input.value = "";
    }
    _addPendingImageFiles(files) {
      const urls = files.map((f3) => URL.createObjectURL(f3));
      this._pendingPreviewUrls.push(...urls);
      this._pendingImages = [...this._pendingImages, ...files];
    }
    _removePendingImage(idx) {
      if (idx < 0 || idx >= this._pendingImages.length) return;
      if (this._pendingPreviewUrls[idx]) URL.revokeObjectURL(this._pendingPreviewUrls[idx]);
      this._pendingPreviewUrls.splice(idx, 1);
      this._pendingImages = this._pendingImages.filter((_2, i6) => i6 !== idx);
    }
    _clearPendingImages() {
      this._pendingPreviewUrls.forEach((u3) => URL.revokeObjectURL(u3));
      this._pendingPreviewUrls = [];
      this._pendingImages = [];
    }
    _getPendingImagePreview(idx) {
      return this._pendingPreviewUrls[idx] ?? "";
    }
    async _sendReply() {
      const conv = this._selectedConversation;
      if (!conv || this._sendingReply) return;
      const text = this._replyText.trim();
      const images = [...this._pendingImages];
      if (!text && images.length === 0) return;
      const { accountId, chatId, userId: toUserId } = conv;
      const senderName = this._getCurrentAccountNickname(conv);
      const now = Date.now();
      const nowStr = new Date(now).toISOString();
      this._optimisticObjectUrls = [];
      const optimisticMessages = [];
      let tempId = -1;
      if (text) {
        optimisticMessages.push({
          id: tempId--,
          senderId: accountId,
          senderName,
          content: text,
          msgTime: nowStr,
          timestamp: now,
          direction: "out",
          msgType: "text"
        });
      }
      for (const file of images) {
        const url = URL.createObjectURL(file);
        this._optimisticObjectUrls.push(url);
        optimisticMessages.push({
          id: tempId--,
          senderId: accountId,
          senderName,
          content: "[\u56FE\u7247]",
          msgTime: nowStr,
          timestamp: now + optimisticMessages.length,
          direction: "out",
          msgType: "image",
          imageUrl: url
        });
      }
      const currentMessages = conv.messages || [];
      this._selectedConversation = { ...conv, messages: [...currentMessages, ...optimisticMessages] };
      this._replyText = "";
      this._clearPendingImages();
      this._scrollToBottomAfterUpdate();
      this._sendingReply = true;
      try {
        if (text) await conversationApi.sendMessage(accountId, chatId, toUserId, text);
        for (const file of images) {
          await conversationApi.sendImageMessage(accountId, chatId, toUserId, file, file.name || "image.jpg");
        }
        const detail = await conversationApi.getConversation(accountId, chatId, 50);
        this._selectedConversation = { ...conv, ...detail, messages: detail.messages };
        this._syncListDisplayNameFromDetail(accountId, chatId, this.getConversationDisplayName(this._selectedConversation), detail.userAvatar);
        this._optimisticObjectUrls.forEach((u3) => URL.revokeObjectURL(u3));
        this._optimisticObjectUrls = [];
        this._scrollToBottomAfterUpdate();
      } catch (e7) {
        console.error("\u53D1\u9001\u56DE\u590D\u5931\u8D25", e7);
        this._selectedConversation = {
          ...conv,
          messages: (this._selectedConversation?.messages || []).filter((m2) => m2.id >= 0)
        };
        this._optimisticObjectUrls.forEach((u3) => URL.revokeObjectURL(u3));
        this._optimisticObjectUrls = [];
        const msg = e7?.error?.error || e7?.error?.message || e7?.message || "\u8BF7\u7A0D\u540E\u91CD\u8BD5";
        await getDialog().alert("\u53D1\u9001\u5931\u8D25", msg);
      } finally {
        this._sendingReply = false;
        setTimeout(() => {
          const el = this.querySelector(".reply-textarea");
          el?.focus();
        }, 0);
      }
    }
    /* ── 商品列表 ── */
    _toggleShowGoodsListColumn() {
      this._showGoodsListColumn = !this._showGoodsListColumn;
      try {
        localStorage.setItem(STORAGE_SHOW_GOODS, String(this._showGoodsListColumn));
      } catch {
      }
      if (this._showGoodsListColumn) {
        const conv = this._selectedConversation;
        if (conv?.accountId && this._goodsListAccountId !== conv.accountId) {
          this._loadAccountGoodsList(conv.accountId);
        }
      }
    }
    async _loadAccountGoodsList(accountId) {
      if (!accountId) return;
      const cached = this._goodsListCacheByAccount.get(accountId);
      if (cached) {
        this._accountGoodsList = cached.items;
        this._goodsListAccountId = accountId;
        this._goodsListPage = cached.page;
        this._hasMoreGoodsList = cached.hasMore;
        return;
      }
      this._loadingGoodsList = true;
      this._accountGoodsList = [];
      this._goodsListPage = 1;
      this._hasMoreGoodsList = false;
      try {
        const data = await conversationApi.getAccountGoods(accountId, 1, this.GOODS_LIST_PAGE_SIZE, true);
        const items = (data.items ?? []).filter((g2) => g2.itemStatus === 0 || g2.itemStatus === void 0);
        this._accountGoodsList = items;
        this._goodsListAccountId = accountId;
        this._hasMoreGoodsList = !!data.nextPage;
        this._saveGoodsListCache(accountId, items, 1, !!data.nextPage);
      } catch (e7) {
        console.error("\u52A0\u8F7D\u8D26\u53F7\u5546\u54C1\u5217\u8868\u5931\u8D25", e7);
        this._accountGoodsList = [];
      } finally {
        this._loadingGoodsList = false;
      }
    }
    _saveGoodsListCache(accountId, items, page, hasMore) {
      if (this._goodsListCacheByAccount.size >= 20) {
        const firstKey = this._goodsListCacheByAccount.keys().next().value;
        if (firstKey !== void 0) this._goodsListCacheByAccount.delete(firstKey);
      }
      this._goodsListCacheByAccount.set(accountId, { items: [...items], page, hasMore });
    }
    async _loadMoreGoodsList() {
      const accountId = this._goodsListAccountId;
      if (!accountId || this._loadingMoreGoodsList || !this._hasMoreGoodsList) return;
      const nextPage = this._goodsListPage + 1;
      this._loadingMoreGoodsList = true;
      try {
        const data = await conversationApi.getAccountGoods(accountId, nextPage, this.GOODS_LIST_PAGE_SIZE);
        const items = (data.items ?? []).filter((g2) => g2.itemStatus === 0 || g2.itemStatus === void 0);
        this._accountGoodsList = [...this._accountGoodsList, ...items];
        this._goodsListPage = nextPage;
        this._hasMoreGoodsList = !!data.nextPage;
        this._saveGoodsListCache(accountId, this._accountGoodsList, nextPage, !!data.nextPage);
      } catch (e7) {
        console.error("\u52A0\u8F7D\u66F4\u591A\u5546\u54C1\u5931\u8D25", e7);
      } finally {
        this._loadingMoreGoodsList = false;
      }
    }
    async _sendProductLink(item) {
      const conv = this._selectedConversation;
      if (!conv || this._sendingProductLinkId) return;
      const toUserId = conv.userId?.trim() || conv.messages?.find((m2) => m2.direction === "in")?.senderId || "";
      const accountId = conv.accountId;
      const chatId = conv.chatId;
      if (!accountId || !chatId || !toUserId) {
        await getDialog().alert("\u53D1\u9001\u5931\u8D25", "\u65E0\u6CD5\u83B7\u53D6\u5BF9\u65B9\u7528\u6237\u4FE1\u606F\uFF0C\u8BF7\u5237\u65B0\u5BF9\u8BDD\u540E\u518D\u8BD5");
        return;
      }
      const senderName = this._currentAccountForChat?.nickname || conv.accountNickname || "\u6211";
      const now = Date.now();
      const nowStr = new Date(now).toISOString();
      this._sendingProductLinkId = item.id;
      let optimisticImageUrl = null;
      try {
        const blob = await this._renderProductCardToBlob(item);
        optimisticImageUrl = URL.createObjectURL(blob);
        const optimisticMessage = {
          id: -1,
          senderId: accountId,
          senderName,
          content: "[\u56FE\u7247]",
          msgTime: nowStr,
          timestamp: now,
          direction: "out",
          msgType: "image",
          imageUrl: optimisticImageUrl
        };
        const currentMessages = conv.messages || [];
        this._selectedConversation = { ...conv, messages: [...currentMessages, optimisticMessage] };
        this._scrollToBottomAfterUpdate();
        const file = new File([blob], "product-card.jpg", { type: "image/jpeg" });
        await conversationApi.sendImageMessage(accountId, chatId, toUserId, file, "product-card.jpg", 280, 360);
        await conversationApi.sendMessage(accountId, chatId, toUserId, "\u70B9\u6211\u5934\u50CF\u8FDB\u5165\u4E3B\u9875\uFF0C\u627E\u622A\u56FE\u4E2D\u7684\u5546\u54C1\u4E0B\u5355");
        const detail = await conversationApi.getConversation(accountId, chatId, 50);
        this._selectedConversation = { ...conv, ...detail, messages: detail.messages };
        this._syncListDisplayNameFromDetail(accountId, chatId, this.getConversationDisplayName(this._selectedConversation), detail.userAvatar);
        this._scrollToBottomAfterUpdate();
      } catch (e7) {
        console.error("\u53D1\u9001\u5546\u54C1\u5361\u7247\u622A\u56FE\u5931\u8D25", e7);
        this._selectedConversation = {
          ...conv,
          messages: (this._selectedConversation?.messages || []).filter((m2) => m2.id >= 0)
        };
        const backendError = e7?.error && (e7.error.error || e7.error.message) || e7?.message || "\u8BF7\u7A0D\u540E\u91CD\u8BD5";
        await getDialog().alert("\u53D1\u9001\u5931\u8D25", backendError);
      } finally {
        if (optimisticImageUrl) URL.revokeObjectURL(optimisticImageUrl);
        this._sendingProductLinkId = null;
      }
    }
    /* ── Canvas 商品卡片绘制 ── */
    async _renderProductCardToBlob(item) {
      const width = 280;
      const height = 360;
      const padding = 14;
      const imgHeight = 200;
      const cardW = width - padding * 2;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas 2D \u4E0D\u53EF\u7528");
      const bg = "#f5f5f5";
      const textColor = "#333";
      const priceColor = "#f97316";
      const linkColor = "#1890ff";
      const radius = 10;
      ctx.fillStyle = bg;
      this._roundRect(ctx, padding, padding, cardW, height - padding * 2, radius);
      ctx.fill();
      const proxyUrl = item.picUrl ? conversationApi.getServeImageUrl(item.picUrl.startsWith("//") ? "https:" + item.picUrl : item.picUrl) : "";
      const directUrl = this.getItemImageUrl(item.picUrl || null);
      let imgDrawn = false;
      for (const imgUrl of [proxyUrl, directUrl].filter(Boolean)) {
        if (imgDrawn) break;
        try {
          const img = await this._loadImageForCard(imgUrl);
          if (img) {
            const sx = 0, sy = 0, sw = img.naturalWidth || img.width, sh = img.naturalHeight || img.height;
            const dx = padding + 4, dy = padding + 4, dw = cardW - 8, dh = imgHeight;
            ctx.save();
            this._roundRect(ctx, dx, dy, dw, dh, 6);
            ctx.clip();
            ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh);
            ctx.restore();
            imgDrawn = true;
          }
        } catch {
        }
      }
      if (!imgDrawn) {
        ctx.fillStyle = "#e0e0e0";
        ctx.fillRect(padding + 4, padding + 4, cardW - 8, imgHeight);
        ctx.fillStyle = "#999";
        ctx.font = "14px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("\u5546\u54C1\u56FE", width / 2, padding + 4 + imgHeight / 2 - 6);
        ctx.textAlign = "left";
      }
      const titleY = padding + imgHeight + 16;
      const title = (item.title || "\u5546\u54C1 " + item.id).trim();
      ctx.fillStyle = textColor;
      ctx.font = "14px sans-serif";
      ctx.textAlign = "left";
      const lineHeight = 20;
      const maxTitleW = cardW - 16;
      const lines = this._wrapText(ctx, title, maxTitleW);
      const titleLines = lines.slice(0, 2);
      titleLines.forEach((line, i6) => {
        ctx.fillText(line, padding + 8, titleY + i6 * lineHeight);
      });
      const priceY = titleY + titleLines.length * lineHeight + 8;
      ctx.fillStyle = priceColor;
      ctx.font = "bold 16px sans-serif";
      ctx.fillText("\xA5" + (item.price || "0"), padding + 8, priceY);
      ctx.fillStyle = linkColor;
      ctx.font = "12px sans-serif";
      ctx.fillText("\u67E5\u770B\u5546\u54C1", padding + 8, priceY + 24);
      const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, "image/jpeg", 0.88);
      });
      if (!blob) throw new Error("\u5BFC\u51FA\u56FE\u7247\u5931\u8D25");
      return blob;
    }
    _roundRect(ctx, x2, y3, w2, h3, r6) {
      ctx.beginPath();
      ctx.moveTo(x2 + r6, y3);
      ctx.lineTo(x2 + w2 - r6, y3);
      ctx.quadraticCurveTo(x2 + w2, y3, x2 + w2, y3 + r6);
      ctx.lineTo(x2 + w2, y3 + h3 - r6);
      ctx.quadraticCurveTo(x2 + w2, y3 + h3, x2 + w2 - r6, y3 + h3);
      ctx.lineTo(x2 + r6, y3 + h3);
      ctx.quadraticCurveTo(x2, y3 + h3, x2, y3 + h3 - r6);
      ctx.lineTo(x2, y3 + r6);
      ctx.quadraticCurveTo(x2, y3, x2 + r6, y3);
      ctx.closePath();
    }
    _wrapText(ctx, text, maxWidth) {
      const lines = [];
      let remaining = text;
      while (remaining && lines.length < 3) {
        let low = 0, high = remaining.length;
        while (low < high) {
          const mid = Math.ceil((low + high) / 2);
          if (ctx.measureText(remaining.slice(0, mid)).width <= maxWidth) low = mid;
          else high = mid - 1;
        }
        const take = Math.max(1, low);
        lines.push(remaining.slice(0, take));
        remaining = remaining.slice(take);
      }
      return lines;
    }
    _loadImageForCard(src) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        if (src.includes("/api/goods/serve-image")) {
          const token = localStorage.getItem("auth_token");
          fetch(src, {
            credentials: "same-origin",
            headers: token ? { Authorization: `Bearer ${token}` } : {}
          }).then((res) => {
            if (!res.ok) {
              resolve(null);
              return;
            }
            const ct = res.headers.get("Content-Type") || "";
            if (!ct.startsWith("image/")) {
              resolve(null);
              return;
            }
            return res.blob();
          }).then((blob) => {
            if (blob) img.src = URL.createObjectURL(blob);
            else resolve(null);
          }).catch(() => resolve(null));
        } else {
          img.crossOrigin = "anonymous";
          img.src = src;
        }
      });
    }
    /* ── 图片预览 ── */
    openImage(url) {
      if (!url) return;
      this._imagePreviewUrl = url;
      this._resetImagePreviewTransform();
    }
    closeImagePreview() {
      this._imagePreviewUrl = null;
      this._resetImagePreviewTransform();
    }
    _resetImagePreviewTransform() {
      if (this._imagePreviewWheelRafId !== null) {
        cancelAnimationFrame(this._imagePreviewWheelRafId);
        this._imagePreviewWheelRafId = null;
      }
      if (this._imagePreviewPointerRafId !== null) {
        cancelAnimationFrame(this._imagePreviewPointerRafId);
        this._imagePreviewPointerRafId = null;
      }
      this._imagePreviewTargetScale = 1;
      this._imagePreviewPendingTranslate = null;
      this._imagePreviewScale = 1;
      this._imagePreviewTranslate = { x: 0, y: 0 };
      this._imagePreviewDragging = false;
      this._imagePreviewDragStart = null;
      this._imagePreviewDragOrigin = null;
    }
    _zoomInPreview() {
      const next = Math.min(5, Math.round((this._imagePreviewScale + 0.25) * 100) / 100);
      this._imagePreviewTargetScale = next;
      this._imagePreviewScale = next;
    }
    _zoomOutPreview() {
      const next = Math.max(1, Math.round((this._imagePreviewScale - 0.25) * 100) / 100);
      this._imagePreviewTargetScale = next;
      this._imagePreviewScale = next;
      if (next === 1) this._imagePreviewTranslate = { x: 0, y: 0 };
    }
    _resetPreviewZoom() {
      this._resetImagePreviewTransform();
    }
    _onPreviewWheel(ev) {
      if (!this._imagePreviewUrl) return;
      ev.preventDefault();
      const delta = ev.deltaY ?? 0;
      this._imagePreviewTargetScale = Math.max(1, Math.min(5, this._imagePreviewTargetScale - delta / 70 * 0.1));
      if (this._imagePreviewWheelRafId === null) {
        this._imagePreviewWheelRafId = requestAnimationFrame(() => {
          this._imagePreviewWheelRafId = null;
          const rounded = Math.round(this._imagePreviewTargetScale * 100) / 100;
          this._imagePreviewScale = rounded;
          if (rounded <= 1) this._imagePreviewTranslate = { x: 0, y: 0 };
        });
      }
    }
    _onPreviewPointerDown(ev) {
      if (!this._imagePreviewUrl || this._imagePreviewScale <= 1) return;
      ev.preventDefault();
      this._imagePreviewDragging = true;
      this._imagePreviewDragStart = { x: ev.clientX, y: ev.clientY };
      this._imagePreviewDragOrigin = { ...this._imagePreviewTranslate };
      try {
        ev.currentTarget?.setPointerCapture?.(ev.pointerId);
      } catch {
      }
    }
    _onPreviewPointerMove(ev) {
      if (!this._imagePreviewDragging || !this._imagePreviewDragStart || !this._imagePreviewDragOrigin) return;
      ev.preventDefault();
      const dx = ev.clientX - this._imagePreviewDragStart.x;
      const dy = ev.clientY - this._imagePreviewDragStart.y;
      this._imagePreviewPendingTranslate = {
        x: this._imagePreviewDragOrigin.x + dx,
        y: this._imagePreviewDragOrigin.y + dy
      };
      if (this._imagePreviewPointerRafId === null) {
        this._imagePreviewPointerRafId = requestAnimationFrame(() => {
          this._imagePreviewPointerRafId = null;
          if (this._imagePreviewPendingTranslate) {
            this._imagePreviewTranslate = this._imagePreviewPendingTranslate;
            this._imagePreviewPendingTranslate = null;
          }
        });
      }
    }
    _onPreviewPointerUp(ev) {
      if (!this._imagePreviewDragging) return;
      ev.preventDefault();
      this._imagePreviewDragging = false;
      this._imagePreviewDragStart = null;
      this._imagePreviewDragOrigin = null;
      try {
        ev.currentTarget?.releasePointerCapture?.(ev.pointerId);
      } catch {
      }
    }
    _onPreviewDoubleClick(ev) {
      if (!this._imagePreviewUrl) return;
      ev.preventDefault();
      if (this._imagePreviewScale <= 1) {
        this._imagePreviewTargetScale = 2;
        this._imagePreviewScale = 2;
      } else this._resetImagePreviewTransform();
    }
    _onPreviewStageClick(ev) {
      if (ev.target !== ev.currentTarget) ev.stopPropagation();
    }
    /* ── 滚动处理 ── */
    _onConversationListScroll(event) {
      if (this._conversationListScrollThrottle) return;
      const el = event.target;
      if (!el) return;
      const nearBottom = el.scrollHeight - (el.scrollTop + el.clientHeight) <= 120;
      if (!nearBottom) return;
      this._conversationListScrollThrottle = true;
      setTimeout(() => {
        this._conversationListScrollThrottle = false;
      }, 150);
      if (this._historyExpanded && this._hasMoreHistory && !this._loadingMoreHistory) {
        this.loadMoreHistoryConversations();
        return;
      }
      if (this._hasMore && !this._loadingMore) this.loadMoreConversations();
    }
    _onMessagesScroll(event) {
      if (this._messagesScrollThrottle) return;
      const viewport = event.target;
      if (!viewport) return;
      if (viewport.scrollTop > 200) return;
      if (!this._hasMoreMessages || this._loadingMoreMessages) return;
      this._messagesScrollThrottle = true;
      setTimeout(() => {
        this._messagesScrollThrottle = false;
      }, 150);
      this._loadMoreMessages();
    }
    _scrollToBottom() {
      const el = this.querySelector(".messages-viewport");
      if (el) el.scrollTop = Math.max(0, el.scrollHeight - el.clientHeight);
    }
    _scrollToBottomAfterUpdate() {
      requestAnimationFrame(() => this._scrollToBottom());
      setTimeout(() => this._scrollToBottom(), 150);
    }
    /* ── 显示辅助 ── */
    formatTime(timestamp) {
      if (!timestamp || isNaN(timestamp) || timestamp <= 0) return "";
      const cached = this._timeFormatCache.get(timestamp);
      if (cached) return cached;
      try {
        const date = new Date(timestamp);
        if (isNaN(date.getTime())) return "";
        const y3 = date.getFullYear();
        const M2 = date.getMonth() + 1;
        const d3 = date.getDate();
        const h3 = date.getHours();
        const m2 = date.getMinutes();
        const sec = date.getSeconds();
        const formatted = `${y3}\u5E74${M2}\u6708${d3}\u65E5 ${String(h3).padStart(2, "0")}:${String(m2).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
        if (this._timeFormatCache.size > 1e3) {
          const entries = Array.from(this._timeFormatCache.entries()).slice(-500);
          this._timeFormatCache.clear();
          entries.forEach(([k2, v2]) => this._timeFormatCache.set(k2, v2));
        }
        this._timeFormatCache.set(timestamp, formatted);
        return formatted;
      } catch {
        return "";
      }
    }
    _getTodayStartTimestamp() {
      const d3 = /* @__PURE__ */ new Date();
      d3.setHours(0, 0, 0, 0);
      return d3.getTime();
    }
    /** 将会话列表裁剪到常驻缓存上限（20 个） */
    _trimConversationsToCache() {
      const todayStart = this._getTodayStartTimestamp();
      const all = [...this._todayConversations, ...this._historyConversations].sort((a3, b3) => b3.lastTime - a3.lastTime).slice(0, _ConversationLitElement.MAX_CONVERSATIONS_CACHED);
      this._todayConversations = all.filter((c4) => c4.lastTime >= todayStart);
      this._historyConversations = all.filter((c4) => c4.lastTime < todayStart);
    }
    /** 将消息列表裁剪到每会话 50 条（保留最新 50 条） */
    _trimMessagesToCache(msgs) {
      if (!msgs || msgs.length <= _ConversationLitElement.MAX_MESSAGES_PER_CONVERSATION) return msgs;
      return msgs.slice(-_ConversationLitElement.MAX_MESSAGES_PER_CONVERSATION);
    }
    _getConversationKey(conv) {
      return `${conv.accountId}:${conv.chatId}`;
    }
    _isOpenConversation(conv) {
      const sel = this._selectedConversation;
      return !!sel && sel.accountId === conv.accountId && sel.chatId === conv.chatId;
    }
    _hasUnread() {
      return [...this._todayConversations, ...this._historyConversations].some((c4) => c4.unread > 0);
    }
    _getTotalUnread() {
      return [...this._todayConversations, ...this._historyConversations].reduce((sum, c4) => sum + (c4.unread || 0), 0);
    }
    _getCurrentAccountNickname(conv) {
      const acct = this._accounts.find((a3) => a3.id === conv.accountId);
      return acct?.nickname || conv.accountNickname || "\u6211";
    }
    get _currentAccountForChat() {
      if (!this._selectedConversation) return void 0;
      return this._accounts.find((a3) => a3.id === this._selectedConversation.accountId);
    }
    getConversationDisplayAvatar(conv) {
      const avatar = conv.userAvatar;
      if (!avatar) return void 0;
      const account = this._accounts.find((a3) => a3.id === conv.accountId);
      if (account?.avatar && avatar === account.avatar) return void 0;
      return avatar;
    }
    getMyDisplayName(conv) {
      const mine = (this._currentAccountForChat?.nickname || conv.accountNickname || "").trim();
      if (mine && !isInvalidDisplayName(mine)) return mine;
      if (conv.messages?.length) {
        for (const m2 of conv.messages.filter((m3) => m3.direction === "out")) {
          const s4 = (m2.senderName ?? "").trim();
          if (s4 && !isInvalidDisplayName(s4)) return s4;
        }
      }
      return mine || "\u6211";
    }
    getConversationDisplayName(conv) {
      const myName = this.getMyDisplayName(conv);
      const n5 = (conv.userName ?? "").trim();
      if (n5 && !isInvalidDisplayName(n5) && n5 !== myName) return n5;
      if (conv.messages?.length) {
        for (const m2 of conv.messages.filter((m3) => m3.direction === "in")) {
          const s4 = (m2.senderName ?? "").trim();
          if (s4 && !isInvalidDisplayName(s4) && s4 !== myName) return s4;
        }
      }
      return "\u672A\u77E5\u7528\u6237";
    }
    _getMessageSenderDisplayName(conv, msg) {
      return msg.direction === "out" ? this.getMyDisplayName(conv) : this.getConversationDisplayName(conv);
    }
    getListDisplayName(conv) {
      if (this._isOpenConversation(conv) && this._selectedConversation) {
        return this.getConversationDisplayName(this._selectedConversation);
      }
      const key = this._getConversationKey(conv);
      const over = this._displayNameOverrides.get(key);
      if (over?.userName) return over.userName;
      return this.getConversationDisplayName(conv);
    }
    getListDisplayAvatar(conv) {
      const key = this._getConversationKey(conv);
      const over = this._displayNameOverrides.get(key);
      if (over?.userAvatar !== void 0) return over.userAvatar;
      if (this._isOpenConversation(conv) && this._selectedConversation) {
        const fromSel = this.getConversationDisplayAvatar(this._selectedConversation);
        if (fromSel) return fromSel;
      }
      return this.getConversationDisplayAvatar(conv);
    }
    _syncListDisplayNameFromDetail(accountId, chatId, userName, userAvatar) {
      if (!userName?.trim() || isInvalidDisplayName(userName)) return;
      const key = `${accountId}:${chatId}`;
      this._displayNameOverrides.set(key, { userName: userName.trim(), userAvatar });
      const patch = (c4) => c4.accountId === accountId && c4.chatId === chatId && isInvalidDisplayName(c4.userName ?? "") ? { ...c4, userName: userName.trim(), userAvatar: userAvatar ?? c4.userAvatar } : c4;
      this._todayConversations = this._todayConversations.map(patch);
      this._historyConversations = this._historyConversations.map(patch);
    }
    _backfillUnknownUserDisplayNames() {
      const all = [...this._todayConversations, ...this._historyConversations];
      const unknown = all.filter((c4) => this.getConversationDisplayName(c4) === "\u672A\u77E5\u7528\u6237").slice(0, 10);
      if (unknown.length === 0) return;
      const fetchOne = async (conv) => {
        try {
          const detail = await conversationApi.getConversation(conv.accountId, conv.chatId, 10);
          const name = this.getConversationDisplayName(detail);
          if (name !== "\u672A\u77E5\u7528\u6237") this._syncListDisplayNameFromDetail(conv.accountId, conv.chatId, name, detail.userAvatar);
        } catch {
        }
      };
      unknown.reduce((p3, c4) => p3.then(() => fetchOne(c4)), Promise.resolve());
    }
    isIncomingTransactionCard(msg) {
      if (msg.direction !== "in") return false;
      if (msg.cardTitle || msg.cardSubtitle) return true;
      const content = (msg.content ?? "").trim();
      return content.length > 0 && TRANSACTION_CARD_PHRASES.has(content);
    }
    _getItemIdFromGoofishUrl(content) {
      if (!content || typeof content !== "string") return null;
      const m2 = content.trim().match(/goofish\.com\/item\?id=([^&\s]+)/i);
      return m2 ? m2[1] : null;
    }
    _getMessageItemId(msg) {
      return msg.itemId || this._getItemIdFromGoofishUrl(msg.content);
    }
    _getMessageItem(itemId) {
      if (!itemId || typeof itemId !== "string") return null;
      const cached = this._messageItemCache.get(itemId);
      if (cached !== void 0) return cached;
      let result = null;
      const messageItem = this._messageItems.get(itemId);
      if (messageItem) {
        result = messageItem;
      } else {
        const item = this._conversationItem;
        if (item && item.id === itemId) {
          if (!item.title && !item.price) {
            result = null;
          } else {
            result = { id: item.id, title: item.title || "", picUrl: item.picUrl || "", price: item.price || "" };
          }
        }
      }
      if (this._messageItemCache.size > 500) {
        const entries = Array.from(this._messageItemCache.entries()).slice(-250);
        this._messageItemCache.clear();
        entries.forEach(([k2, v2]) => this._messageItemCache.set(k2, v2));
      }
      this._messageItemCache.set(itemId, result);
      return result;
    }
    _getMessageCardItem(msg) {
      if (msg.direction !== "out") return null;
      const itemId = this._getMessageItemId(msg);
      return itemId ? this._getMessageItem(itemId) : null;
    }
    async _loadMessageItemsAsync(accountId, itemIds) {
      if (!itemIds.length) return;
      const itemsMap = /* @__PURE__ */ new Map();
      const item = this._conversationItem;
      if (item && item.id && itemIds.includes(item.id)) {
        itemsMap.set(item.id, { id: item.id, title: item.title || "", picUrl: item.picUrl || "", price: item.price || "" });
      }
      const now = Date.now();
      const remainingIds = itemIds.filter((id) => !itemsMap.has(id));
      remainingIds.forEach((id) => {
        const c4 = this._goodsInfoCache.get(id);
        if (c4 && now - c4.timestamp < this._GOODS_CACHE_TTL) {
          itemsMap.set(id, { id: c4.id, title: c4.title, picUrl: c4.picUrl, price: c4.price });
        }
      });
      const stillRemainingIds = remainingIds.filter((id) => !itemsMap.has(id));
      if (stillRemainingIds.length > 0) {
        for (let page = 1; page <= 5 && stillRemainingIds.some((id) => !itemsMap.has(id)); page++) {
          try {
            const goodsRes = await conversationApi.getAccountGoods(accountId, page);
            stillRemainingIds.forEach((id) => {
              const found = goodsRes.items?.find((g2) => g2.id === id);
              if (found) {
                const info = { id: found.id, title: found.title, picUrl: found.picUrl, price: found.price };
                itemsMap.set(id, info);
                this._goodsInfoCache.set(id, { ...info, timestamp: now });
              }
            });
            if (!goodsRes.nextPage || stillRemainingIds.every((id) => itemsMap.has(id))) break;
          } catch {
            break;
          }
        }
      }
      if (itemsMap.size > 0) {
        const merged = new Map(this._messageItems);
        itemsMap.forEach((v2, k2) => merged.set(k2, v2));
        this._messageItems = merged;
        this._messageItemCache.clear();
      }
    }
    getGoodsItemUrl(itemId) {
      return `https://www.goofish.com/item?id=${itemId}`;
    }
    getItemImageUrl(picUrl) {
      if (!picUrl) return "";
      if (picUrl.startsWith("//")) return "https:" + picUrl;
      if (picUrl.startsWith("http")) return picUrl;
      return picUrl.startsWith("/") ? picUrl : "/" + picUrl;
    }
    getItemImageUrlThumb(picUrl) {
      if (!picUrl) return "";
      const normalized = picUrl.startsWith("//") ? "https:" + picUrl : picUrl;
      if (normalized.startsWith("http://") || normalized.startsWith("https://")) {
        return `/api/goods/serve-image?url=${encodeURIComponent(normalized)}&w=200&q=82`;
      }
      return this.getItemImageUrl(picUrl);
    }
    get _sortedMessages() {
      const list = this._selectedConversation?.messages;
      if (!list?.length) return [];
      if (list.length <= 1) return list;
      return [...list].sort((a3, b3) => getMsgTimestamp(a3) - getMsgTimestamp(b3));
    }
    /* ────────────────────── 渲染 ────────────────────── */
    render() {
      return b2`
            <div class="conversations-page">
                ${this._renderHeader()}
                <div class="conversations-card">
                    <div class="conversations-three-columns" style="--conversation-columns: ${this._showGoodsListColumn ? 4 : 3}; gap: 0; column-gap: 0; row-gap: 0;">
                        ${this._renderLeftColumn()}
                        ${this._renderMiddleColumn()}
                        ${this._renderRightColumn()}
                        ${this._showGoodsListColumn ? this._renderGoodsListColumn() : A}
                    </div>
                </div>
            </div>
            ${this._imagePreviewUrl ? this._renderImagePreview() : A}
        `;
    }
    _renderHeader() {
      return b2`
            <div class="conversations-page-header px-4 md:px-6 pt-1 pb-4 flex flex-row flex-wrap items-end justify-between gap-3">
                <div>
                    <h1 class="text-2xl font-bold">对话消息</h1>
                    <p class="text-sm text-base-content/60 mt-1">查看和管理与买家的对话消息</p>
                </div>
                <label class="conversation-goods-list-toggle flex items-center gap-2 cursor-pointer shrink-0">
                    <span class="text-sm font-medium text-base-content/80">商品列表</span>
                    <input type="checkbox" class="toggle toggle-sm" .checked=${this._showGoodsListColumn}
                        @change=${() => this._toggleShowGoodsListColumn()} />
                </label>
            </div>
        `;
    }
    /* ── 左栏 ── */
    _renderLeftColumn() {
      return b2`
            <div class="conversation-column col-list">
                <div class="column-header card glass-card p-3 mb-2 flex flex-nowrap items-center justify-between">
                    <div class="column-header-left flex items-center gap-2 min-w-0 flex-1 flex-nowrap overflow-hidden column-header-badges">
                        <span class="column-title shrink-0">聊天列表</span>
                        <span class="badge badge-ghost badge-sm shrink-0 column-header-count-badge">${this._todayConversations.length} 今天 / ${this._historyLoaded ? this._historyTotal + " \u5386\u53F2" : "\u5386\u53F2(\u70B9\u51FB\u52A0\u8F7D)"}</span>
                        ${this._hasUnread() ? b2`<span class="badge badge-primary badge-sm bg-gradient-to-r from-red-500 to-pink-500 border-0 shrink-0">${this._getTotalUnread()} 未读</span>` : A}
                    </div>
                    <div class="column-actions flex shrink-0 items-center gap-1">
                        ${this._selectionMode ? b2`
                            <button class="btn btn-sm btn-error" ?disabled=${this._getSelectedCount() === 0} @click=${() => this._deleteSelectedConversations()}>
                                ${this._deletingSelected ? b2`<span class="loading loading-spinner loading-xs"></span>` : iconHtml("Trash2")}
                            </button>
                            <button class="btn btn-sm btn-ghost" @click=${() => this._toggleSelectionMode()}>${iconHtml("X")}</button>
                        ` : b2`
                            ${this._hasUnread() ? b2`
                                <button class="btn btn-sm" ?disabled=${this._clearingUnread} @click=${() => this._clearAllUnread()}>
                                    ${this._clearingUnread ? b2`<span class="loading loading-spinner loading-xs"></span>` : iconHtml("CheckCircle")}
                                </button>
                            ` : A}
                            <button class="btn btn-sm btn-ghost" @click=${() => this._toggleDesktopNotification()} title="${this._desktopNotificationEnabled ? "\u5173\u95ED\u684C\u9762\u901A\u77E5" : "\u5F00\u542F\u684C\u9762\u901A\u77E5"}">
                                ${iconHtml("Bell")}
                            </button>
                            <button class="btn btn-sm btn-ghost" @click=${() => this._toggleSelectionMode()} title="多选">${iconHtml("CheckSquare")}</button>
                            <button class="btn btn-sm" ?disabled=${this._loading} @click=${() => this.loadConversations()}>
                                ${this._loading ? b2`<span class="loading loading-spinner loading-xs"></span>` : iconHtml("RefreshCw")}
                            </button>
                        `}
                    </div>
                </div>
                ${this._selectionMode ? b2`
                    <div class="column-header-extra delete-older-than-row">
                        <span class="delete-older-than-label">删除</span>
                        <input type="number" class="input input-bordered input-sm w-14 text-center" min="1" max="365"
                            .value=${String(this._deleteOlderThanDays)}
                            @input=${(e7) => {
        this._deleteOlderThanDays = Math.max(1, Math.min(365, +e7.target.value || 1));
      }} />
                        <span class="delete-older-than-label">天前的消息</span>
                        <button class="btn btn-sm btn-warning" ?disabled=${this._deletingOlderThan} @click=${() => this._deleteConversationsOlderThanDays()} title="一键删除早期对话及消息，释放硬盘空间">
                            ${this._deletingOlderThan ? b2`<span class="loading loading-spinner loading-xs"></span>` : "\u4E00\u952E\u5220\u9664"}
                        </button>
                    </div>
                ` : A}
                <div class="column-list messages-scroll" @scroll=${(e7) => this._onConversationListScroll(e7)}>
                    ${this._renderConversationList()}
                </div>
            </div>
        `;
    }
    _renderConversationList() {
      if (this._loading) {
        return b2`
                <div class="space-y-1.5 conversation-list-skeleton">
                    ${this.skeletonListCount.map(() => b2`
                        <div class="card glass-card conversation-list-card conversation-list-skeleton-item">
                            <div class="card-body p-2.5 conversation-list-card-body">
                                <div class="flex gap-2.5">
                                    <div class="conversation-list-skeleton-avatar flex-shrink-0"></div>
                                    <div class="flex-1 min-w-0 flex flex-col gap-1">
                                        <div class="flex items-center justify-between gap-2">
                                            <span class="skeleton-line skeleton-line-sm flex-1 max-w-[80%]"></span>
                                            <span class="skeleton-line skeleton-line-xs w-10 shrink-0"></span>
                                        </div>
                                        <div class="skeleton-line skeleton-line-sm w-full"></div>
                                        <div class="skeleton-line skeleton-line-xs w-full max-w-[85%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)}
                </div>
            `;
      }
      if (this._todayConversations.length === 0 && this._historyTotal === 0) {
        return b2`
                <div class="space-y-1.5">
                    <div class="card glass-card">
                        <div class="card-body flex flex-col items-center justify-center py-16 text-base-content/60">
                            <span class="w-16 h-16 mb-4 opacity-30" .innerHTML=${ICONS.MessageCircle}></span>
                            <p class="text-lg">暂无当天对话</p>
                            <p class="text-sm mt-1">可点击下方「历史对话」加载更早的对话</p>
                        </div>
                    </div>
                    ${this._renderHistoryFolder()}
                </div>
            `;
      }
      return b2`
            <div class="space-y-1.5">
                ${this._todayConversations.length > 0 ? b2`
                    <div class="space-y-1.5">
                        ${this._todayConversations.map((conv) => this._renderConversationCard(conv))}
                    </div>
                ` : A}
                <div class="space-y-1.5">
                    ${this._renderHistoryFolder()}
                    ${this._historyExpanded ? b2`
                        <div class="space-y-1.5 pl-2 border-l-2 border-base-300">
                            ${this._loadingHistory ? b2`
                                <div class="card glass-card"><div class="card-body flex justify-center py-4"><span class="loading loading-spinner loading-sm"></span></div></div>
                            ` : b2`
                                ${this._historyConversations.map((conv) => this._renderConversationCard(conv))}
                                <div class="history-load-more-footer flex justify-center py-2">
                                    ${this._loadingHistory ? b2`<span class="text-xs text-base-content/40 py-1">加载中…</span>` : this._loadingMoreHistory ? b2`<button class="btn btn-sm btn-ghost text-base-content/50 w-full" disabled>加载更多</button>` : this._hasMoreHistory ? b2`<button class="btn btn-sm btn-ghost text-base-content/60 w-full" @click=${() => this.loadMoreHistoryConversations()}>加载更多</button>` : A}
                                </div>
                            `}
                        </div>
                    ` : A}
                </div>
                ${this._hasMore ? b2`
                    <div class="flex justify-center pt-2">
                        <button class="btn btn-sm max-w-xs w-full" ?disabled=${this._loadingMore} @click=${() => this.loadMoreConversations()}>
                            ${this._loadingMore ? b2`<span class="loading loading-spinner loading-xs"></span>` : "\u52A0\u8F7D\u66F4\u591A"}
                        </button>
                    </div>
                ` : A}
            </div>
        `;
    }
    _renderHistoryFolder() {
      return b2`
            <div class="card glass-card conversation-list-card conversation-list-history-folder cursor-pointer"
                @click=${() => !this._selectionMode && this.expandHistoryFolder()}>
                <div class="card-body p-2">
                    <div class="flex items-center gap-2">
                        <div class="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center flex-shrink-0">
                            ${this._loadingHistory ? b2`<span class="loading loading-spinner loading-xs"></span>` : b2`<span class="w-4 h-4 text-base-content/60" .innerHTML=${ICONS.Folder}></span>`}
                        </div>
                        <div class="flex-1 min-w-0">
                            <span class="font-medium text-xs">历史对话</span>
                            ${this._historyLoaded ? b2`
                                <span class="badge badge-ghost badge-xs font-normal ml-1">${this._historyTotal} 个</span>
                                <span class="text-[11px] text-base-content/60 ml-1">${this._historyExpanded ? "\u70B9\u51FB\u6298\u53E0" : "\u70B9\u51FB\u5C55\u5F00"}</span>
                            ` : b2`<span class="text-[11px] text-base-content/60 ml-1">点击加载</span>`}
                        </div>
                        <span class="w-3.5 h-3.5 text-base-content/50 shrink-0 history-folder-arrow" .innerHTML=${this._historyExpanded ? ICONS.ChevronDown : ICONS.ChevronUp}></span>
                    </div>
                </div>
            </div>
        `;
    }
    _renderConversationCard(conv) {
      const isSelected = !this._selectionMode && this._isOpenConversation(conv);
      const isChecked = this._selectionMode && this._isConversationSelected(conv);
      const displayName = this.getListDisplayName(conv);
      const displayAvatar = this.getListDisplayAvatar(conv);
      return b2`
            <div class=${e6({
        "card": true,
        "glass-card": true,
        "conversation-list-card": true,
        "border-l-4": conv.unread > 0,
        "border-l-primary": conv.unread > 0,
        "cursor-pointer": true,
        "conversation-item-selected": isSelected,
        "bg-primary/5": isChecked
      })}
                @click=${() => this._selectionMode ? this._toggleConversationSelection(conv) : this.openConversation(conv)}>
                <div class="card-body p-2.5 conversation-list-card-body">
                    <div class="flex gap-2.5">
                        ${this._selectionMode ? b2`
                            <div class="flex items-start flex-shrink-0 pt-0.5">
                                <input type="checkbox" class="checkbox checkbox-xs"
                                    .checked=${this._isConversationSelected(conv)}
                                    @change=${(e7) => this._toggleConversationSelection(conv, e7)}
                                    @click=${(e7) => e7.stopPropagation()} />
                            </div>
                        ` : A}
                        <div class="avatar w-10 h-10 flex-shrink-0" @click=${(e7) => e7.stopPropagation()}>
                            ${displayAvatar ? b2`<div class="w-10 h-10 rounded-full"><img src="${displayAvatar}" alt="${displayName}" loading="lazy" /></div>` : b2`<div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 text-primary text-sm font-medium flex items-center justify-center">${displayName.charAt(0)}</div>`}
                        </div>
                        <div class="flex-1 min-w-0 flex flex-col gap-1">
                            <div class="flex items-center justify-between gap-2 min-h-0">
                                <div class="flex items-center gap-1.5 min-w-0 flex-1">
                                    <span class="conversation-list-username truncate text-sm font-medium">${displayName}</span>
                                    ${conv.accountNickname ? b2`<span class="badge badge-ghost badge-xs font-normal shrink-0">${conv.accountNickname}</span>` : A}
                                </div>
                                <span class="conversation-list-time shrink-0 text-[10px] text-base-content/50">${this.formatTime(conv.lastTime)}</span>
                                ${conv.unread > 0 ? b2`<span class="badge badge-primary badge-sm min-h-4 h-4 px-1 text-[10px] font-semibold bg-gradient-to-r from-red-500 to-pink-500 border-0 shrink-0">${conv.unread > 99 ? "99+" : conv.unread}</span>` : A}
                            </div>
                            <div class="conversation-list-lastmsg flex items-center gap-1.5 px-2 py-1 rounded text-[11px] min-h-0 w-full">
                                <span class="conversation-list-msg-label shrink-0">消息</span>
                                ${conv.lastImageUrl && conv.lastMessage === "[\u56FE\u7247]" ? b2`
                                    <div class="w-5 h-5 rounded overflow-hidden flex-shrink-0 border border-base-300 bg-base-200/60">
                                        <img src="${conv.lastImageUrl}" alt="" class="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <span class="truncate flex-1 min-w-0">图片</span>
                                ` : b2`<span class="conversation-list-msg-text truncate flex-1 min-w-0">${conv.lastMessage || "\u6682\u65E0\u6D88\u606F"}</span>`}
                            </div>
                            <div class="conversation-list-goods flex items-center gap-1.5 px-2 py-1 rounded text-[11px] min-h-0 w-full ${!conv.item ? "conversation-list-goods-placeholder" : ""}">
                                ${conv.item ? b2`
                                    <span class="conversation-list-goods-label shrink-0">商品：</span>
                                    <span class="truncate flex-1 min-w-0" title="${conv.item.title || conv.item.id || ""}">${conv.item.title || (conv.item.id || "\u5173\u8054\u5546\u54C1")}</span>
                                    ${conv.item.price ? b2`<span class="conversation-list-goods-price shrink-0 font-semibold text-primary">¥${conv.item.price}</span>` : A}
                                ` : A}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    /* ── 中栏 ── */
    _renderMiddleColumn() {
      const conv = this._selectedConversation;
      return b2`
            <div class="conversation-column col-chat flex flex-col flex-1 min-h-0">
                <div class="column-chat flex flex-col flex-1 min-h-0">
                    <div class="card glass-card p-3 mb-2 flex-shrink-0 conversation-header-card">
                        ${conv ? b2`
                            <div class="flex items-center gap-3 min-w-0">
                                <div class="avatar w-8 h-8 flex-shrink-0">
                                    ${this.getListDisplayAvatar(conv) ? b2`<div class="w-8 h-8 rounded-full"><img src="${this.getListDisplayAvatar(conv)}" alt="${this.getListDisplayName(conv)}" loading="lazy" /></div>` : b2`<div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 text-primary text-xs font-medium flex items-center justify-center"><span>${this.getListDisplayName(conv).charAt(0)}</span></div>`}
                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 flex-wrap">
                                        <span class="font-semibold truncate">${this.getListDisplayName(conv)}</span>
                                        ${conv.accountNickname ? b2`<span class="badge badge-ghost badge-xs font-normal">${conv.accountNickname}</span>` : A}
                                    </div>
                                </div>
                            </div>
                        ` : b2`
                            <div class="flex items-center gap-3 min-w-0 text-base-content/50">
                                <span class="w-8 h-8 opacity-50" .innerHTML=${ICONS.MessageCircle}></span>
                                <span class="text-sm">从左侧选择一条对话</span>
                            </div>
                        `}
                    </div>
                    <div class="flex-1 min-h-0 card glass-card overflow-hidden">
                        ${conv ? this._renderMessages(conv) : b2`
                            <div class="flex flex-col items-center justify-center h-full min-h-[200px] text-base-content/50">
                                <span class="w-16 h-16 mb-3 opacity-40" .innerHTML=${ICONS.MessageCircle}></span>
                                <p class="text-sm">从左侧选择一条对话查看消息</p>
                            </div>
                        `}
                    </div>
                    ${this._renderReplyArea()}
                </div>
            </div>
        `;
    }
    _renderMessages(conv) {
      if (this._loadingMessages && !conv.messages?.length) {
        return b2`<div class="flex items-center justify-center py-16"><span class="loading loading-spinner loading-md text-primary"></span></div>`;
      }
      if (!conv.messages?.length) {
        return b2`<div class="flex flex-col items-center justify-center py-16 text-base-content/60"><p>暂无消息</p></div>`;
      }
      const sorted = this._sortedMessages;
      return b2`
            <div class="messages-container h-full overflow-hidden flex flex-col">
                ${this._hasMoreMessages ? b2`
                    <div class="load-more-messages-bar flex justify-center items-center py-2 px-4 flex-shrink-0 border-b border-base-300/50 bg-base-200/30">
                        <button class="btn btn-sm btn-ghost load-more-messages-btn text-base-content/80" ?disabled=${this._loadingMoreMessages} @click=${() => this._loadMoreMessages()}>
                            ${this._loadingMoreMessages ? b2`<span class="loading loading-spinner loading-xs"></span>` : "\u52A0\u8F7D\u66F4\u591A"}
                        </button>
                    </div>
                ` : A}
                <div class="messages-viewport messages-scroll pt-4 pb-4 flex-1 min-h-0 overflow-y-auto flex flex-col" @scroll=${(e7) => this._onMessagesScroll(e7)}>
                    <div class="messages-list-content px-8">
                        ${sorted.map((msg) => this._renderMessageRow(conv, msg))}
                    </div>
                </div>
            </div>
        `;
    }
    _renderMessageRow(conv, msg) {
      const isOut = msg.direction === "out";
      const isIn = msg.direction === "in";
      const isCard = this.isIncomingTransactionCard(msg);
      return b2`
            <div class="conversation-message-row flex gap-5 mb-4 relative ${isOut ? "flex-row-reverse" : ""}">
                ${isIn ? b2`
                    <div class="avatar w-8 h-8 flex-shrink-0">
                        ${this.getListDisplayAvatar(conv) ? b2`<div class="w-8 h-8 rounded-full"><img src="${this.getListDisplayAvatar(conv)}" alt="${this.getListDisplayName(conv)}" loading="lazy" /></div>` : b2`<div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 text-primary text-xs font-medium flex items-center justify-center"><span>${this.getListDisplayName(conv).charAt(0)}</span></div>`}
                    </div>
                ` : isOut ? b2`
                    <div class="avatar w-8 h-8 flex-shrink-0">
                        ${this._currentAccountForChat?.avatar ? b2`<div class="w-8 h-8 rounded-full"><img src="${this._currentAccountForChat.avatar}" alt="${this._currentAccountForChat.nickname || conv.accountNickname}" loading="lazy" /></div>` : b2`<div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/30 text-primary text-xs font-medium flex items-center justify-center"><span>${(this._currentAccountForChat?.nickname || conv.accountNickname || "\u6211").charAt(0)}</span></div>`}
                    </div>
                ` : A}
                <div class="flex flex-col max-w-[70%] ${isOut ? "items-end" : "items-start"}">
                    <div class="flex items-center gap-2 mb-1.5 text-xs text-base-content/50 ${isOut ? "flex-row-reverse" : ""}">
                        <span class="font-medium">${this._getMessageSenderDisplayName(conv, msg)}</span>
                        <span>${this.formatTime(getMsgTimestamp(msg))}</span>
                    </div>
                    <div class=${e6({
        "relative px-4 py-2.5 rounded-2xl max-w-full break-words": true,
        "message-bubble-is-card": isCard,
        "message-bubble-out rounded-br-md": isOut,
        "bg-base-200 text-base-content rounded-bl-md": isIn && !isCard
      })}>
                        ${this._renderMessageContent(conv, msg)}
                    </div>
                </div>
            </div>
        `;
    }
    _renderMessageContent(conv, msg) {
      if (msg.msgType === "image" && msg.imageUrl) {
        return b2`
                <img class="reply-image max-w-[140px] max-h-[140px] object-contain rounded-lg cursor-pointer bg-base-100/40"
                    src="${msg.imageUrl}" loading="lazy" alt="图片消息"
                    @click=${() => this.openImage(msg.imageUrl)} />
                ${msg.content && msg.content !== "[\u56FE\u7247]" ? b2`<p class="text-sm leading-relaxed mt-2">${msg.content}</p>` : A}
            `;
      }
      const cardItem = this._getMessageCardItem(msg);
      if (cardItem) {
        return b2`
                <div class="goods-card-in-message flex flex-col gap-1 p-1.5 rounded-lg bg-base-200/50 border border-base-300/50">
                    ${cardItem.picUrl ? b2`
                        <a href="${this.getGoodsItemUrl(cardItem.id)}" target="_blank" rel="noopener noreferrer" class="block w-full overflow-hidden rounded-md">
                            <img src="${this.getItemImageUrlThumb(cardItem.picUrl)}" alt="${cardItem.title}" class="w-full max-w-[100px] max-h-[100px] object-cover" loading="lazy" />
                        </a>
                    ` : A}
                    <div class="flex flex-col gap-0 min-w-0">
                        <p class="text-xs font-medium break-words line-clamp-2" title="${cardItem.title}">${cardItem.title || "\u5546\u54C1 " + cardItem.id}</p>
                        ${cardItem.price ? b2`<p class="text-xs font-semibold text-primary">¥${cardItem.price}</p>` : A}
                        <a href="${this.getGoodsItemUrl(cardItem.id)}" target="_blank" rel="noopener noreferrer" class="text-[11px] link link-primary mt-0.5">查看商品</a>
                    </div>
                </div>
            `;
      }
      if (this.isIncomingTransactionCard(msg)) {
        return b2`
                <div class="message-card-inner">
                    <p class="message-card-title">${msg.cardTitle || msg.content}</p>
                    ${msg.cardSubtitle ? b2`<hr class="message-card-divider" /><p class="message-card-subtitle">${msg.cardSubtitle}</p>` : A}
                </div>
            `;
      }
      return b2`<p class="text-sm leading-relaxed">${msg.content}</p>`;
    }
    _renderReplyArea() {
      const conv = this._selectedConversation;
      return b2`
            <div class="reply-area card glass-card mt-4 flex-shrink-0">
                <div class="card-body p-4">
                    ${conv ? b2`
                        ${this._pendingImages.length > 0 ? b2`
                            <div class="flex flex-wrap gap-2 mb-3">
                                ${this._pendingImages.map((img, i6) => b2`
                                    <div class="reply-pending-img relative group">
                                        <img src="${this._getPendingImagePreview(i6)}" alt="预览" class="w-14 h-14 object-cover rounded-lg border border-base-300" loading="lazy" />
                                        <button type="button"
                                            class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-error text-error-content flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
                                            @click=${() => this._removePendingImage(i6)} title="移除">
                                            <span class="w-3 h-3" .innerHTML=${ICONS.X}></span>
                                        </button>
                                    </div>
                                `)}
                            </div>
                        ` : A}
                        <div class="flex gap-2 items-center">
                            <div class="flex-1 min-w-0 flex flex-col gap-2">
                                <textarea class="textarea textarea-bordered textarea-sm w-full min-h-[60px] max-h-[140px] resize-y reply-textarea"
                                    placeholder="输入消息回复，Enter 发送，Shift+Enter 换行，支持粘贴图片（Ctrl+V）"
                                    .value=${this._replyText}
                                    @input=${(e7) => this._onReplyInput(e7)}
                                    @paste=${(e7) => this._onReplyPaste(e7)}
                                    @keydown=${(e7) => this._onReplyKeydown(e7)}
                                    ?disabled=${this._sendingReply}
                                    rows="3"></textarea>
                            </div>
                            <div class="flex flex-col gap-2 flex-shrink-0 reply-action-btns">
                                <input type="file" accept="image/*" multiple class="hidden" id="litFileInput"
                                    @change=${(e7) => this._onImageFileSelect(e7)} />
                                <button class="btn btn-sm btn-ghost reply-upload-img-btn" title="上传图片"
                                    ?disabled=${this._sendingReply}
                                    @click=${() => this.querySelector("#litFileInput")?.click()}>
                                    ${iconHtml("Image")}
                                </button>
                                <button class="btn btn-sm btn-primary reply-send-btn"
                                    ?disabled=${this._sendingReply || !this._replyText.trim() && this._pendingImages.length === 0}
                                    @click=${() => this._sendReply()}>
                                    ${this._sendingReply ? b2`<span class="loading loading-spinner loading-xs"></span>` : b2`${iconHtml("Send")} 发送`}
                                </button>
                            </div>
                        </div>
                    ` : b2`
                        <div class="flex items-center justify-center py-6 text-base-content/50 text-sm">选择对话后可回复</div>
                    `}
                </div>
            </div>
        `;
    }
    /* ── 右栏 ── */
    _renderRightColumn() {
      const conv = this._selectedConversation;
      const item = this._conversationItem;
      return b2`
            <div class="conversation-column col-detail flex flex-col flex-1 min-h-0">
                <div class="column-header card glass-card p-3 mb-2">
                    <span class="column-title">正在咨询的宝贝</span>
                </div>
                <div class="column-list column-list-detail flex flex-col flex-1 min-h-0 overflow-hidden">
                    <div class="card glass-card p-3 detail-goods-card detail-goods-card-stretch flex-1 min-h-0 flex flex-col">
                        ${conv ? b2`
                            ${item ? b2`
                                <div class="flex flex-col items-center gap-3">
                                    ${item.picUrl ? b2`<img src="${this.getItemImageUrl(item.picUrl)}" alt="" class="detail-goods-img rounded-lg object-cover border border-base-300" loading="lazy" />` : A}
                                    <div class="detail-goods-text w-full flex flex-col items-center text-center">
                                        <p class="text-sm font-medium break-words w-full" title="${item.title || item.id}">${item.title || "\u5546\u54C1 " + item.id}</p>
                                        ${item.price ? b2`<p class="text-sm font-semibold text-primary mt-1">¥${item.price}</p>` : A}
                                    </div>
                                </div>
                            ` : conv.item?.id ? b2`
                                <div class="flex flex-col items-center gap-3">
                                    <div class="detail-goods-img rounded-lg bg-base-200 flex items-center justify-center"><span class="loading loading-spinner loading-sm"></span></div>
                                    <p class="text-sm text-base-content/50">加载中...</p>
                                </div>
                            ` : b2`<p class="text-sm text-base-content/50">暂无关联商品</p>`}
                        ` : b2`
                            <div class="flex flex-col items-center justify-center flex-1 min-h-[120px] text-base-content/50 text-sm"><p>选择对话后显示商品</p></div>
                        `}
                    </div>
                </div>
            </div>
        `;
    }
    /* ── 第四列：商品列表 ── */
    _renderGoodsListColumn() {
      return b2`
            <div class="conversation-column col-goods-list flex flex-col flex-1 min-h-0">
                <div class="column-header column-header-goods card glass-card p-3 mb-2">
                    <span class="column-title">商品列表</span>
                </div>
                <div class="column-list column-list-goods flex flex-col flex-1 min-h-0 overflow-auto">
                    ${!this._selectedConversation ? b2`
                        <div class="flex flex-col items-center justify-center flex-1 min-h-[120px] text-base-content/50 text-sm px-2">
                            <p class="text-center">请先选择对话</p>
                            <p class="text-center text-xs mt-1">将加载该账号的商品列表</p>
                        </div>
                    ` : this._loadingGoodsList ? b2`
                        <div class="flex flex-col items-center justify-center flex-1 min-h-[120px] text-base-content/50">
                            <span class="loading loading-spinner loading-md"></span>
                            <p class="text-sm mt-2">加载商品列表中…</p>
                        </div>
                    ` : this._accountGoodsList.length === 0 ? b2`
                        <div class="flex flex-col items-center justify-center flex-1 min-h-[120px] text-base-content/50 text-sm px-2">
                            <p class="text-center">暂无商品</p>
                            <p class="text-center text-xs mt-1">该账号暂无在售商品</p>
                        </div>
                    ` : b2`
                        <div class="flex flex-col gap-2">
                            ${this._accountGoodsList.map((goods) => b2`
                                <div class="goods-list-row card glass-card p-2.5 flex flex-row items-center gap-2 rounded-lg border border-base-300/50 hover:border-primary/30 transition-colors group">
                                    <div class="w-12 h-12 rounded bg-base-200 shrink-0 flex items-center justify-center border border-base-300">
                                        <span class="w-5 h-5 text-base-content/40" .innerHTML=${ICONS.Package}></span>
                                    </div>
                                    <div class="flex-1 min-w-0 flex flex-col gap-0.5">
                                        <p class="text-sm font-medium truncate" title="${goods.title}">${goods.title || "\u5546\u54C1 " + goods.id}</p>
                                        ${goods.price ? b2`<p class="text-xs font-semibold text-primary">¥${goods.price}</p>` : A}
                                    </div>
                                    <button class="btn btn-sm btn-primary goods-list-send-btn opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                                        ?disabled=${this._sendingProductLinkId !== null}
                                        @click=${() => this._sendProductLink(goods)} title="发送商品链接给买家">
                                        ${this._sendingProductLinkId === goods.id ? b2`<span class="loading loading-spinner loading-xs"></span>` : b2`${iconHtml("Send")} 发送`}
                                    </button>
                                </div>
                            `)}
                            ${this._hasMoreGoodsList ? b2`
                                <div class="flex justify-center py-2">
                                    <button class="btn btn-sm btn-ghost text-base-content/60 w-full" ?disabled=${this._loadingMoreGoodsList} @click=${() => this._loadMoreGoodsList()}>
                                        ${this._loadingMoreGoodsList ? b2`<span class="loading loading-spinner loading-xs"></span>` : "\u52A0\u8F7D\u66F4\u591A"}
                                    </button>
                                </div>
                            ` : A}
                        </div>
                    `}
                </div>
            </div>
        `;
    }
    /* ── 图片预览 ── */
    _renderImagePreview() {
      return b2`
            <div class="image-preview-overlay" @click=${() => this.closeImagePreview()} @wheel=${(e7) => this._onPreviewWheel(e7)} role="button" aria-label="关闭预览">
                <div class="image-preview-backdrop"></div>
                <button type="button" class="image-preview-close" @click=${() => this.closeImagePreview()} aria-label="关闭">
                    <span class="w-6 h-6" .innerHTML=${ICONS.X}></span>
                </button>
                <div class="image-preview-toolbar" @click=${(e7) => e7.stopPropagation()}>
                    <button type="button" class="image-preview-toolbtn" @click=${() => this._zoomOutPreview()} aria-label="缩小">-</button>
                    <button type="button" class="image-preview-toolbtn" @click=${() => this._resetPreviewZoom()} aria-label="还原">1:1</button>
                    <button type="button" class="image-preview-toolbtn" @click=${() => this._zoomInPreview()} aria-label="放大">+</button>
                </div>
                <div class="image-preview-stage"
                    @click=${(e7) => this._onPreviewStageClick(e7)}
                    @pointerdown=${(e7) => this._onPreviewPointerDown(e7)}
                    @pointermove=${(e7) => this._onPreviewPointerMove(e7)}
                    @pointerup=${(e7) => this._onPreviewPointerUp(e7)}
                    @pointercancel=${(e7) => this._onPreviewPointerUp(e7)}
                    @pointerleave=${(e7) => this._onPreviewPointerUp(e7)}
                    @dblclick=${(e7) => this._onPreviewDoubleClick(e7)}>
                    <img src="${this._imagePreviewUrl}" alt="图片预览" class="image-preview-img ${this._imagePreviewScale > 1 ? "image-preview-grabbable" : ""}"
                        style="transform: translate(${this._imagePreviewTranslate.x}px, ${this._imagePreviewTranslate.y}px) scale(${this._imagePreviewScale})"
                        loading="eager" />
                </div>
            </div>
        `;
    }
  };
  /** 常驻缓存：最多 20 个会话、每会话 50 条消息 */
  _ConversationLitElement.MAX_CONVERSATIONS_CACHED = 20;
  _ConversationLitElement.MAX_MESSAGES_PER_CONVERSATION = 50;
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_accounts", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_selectedAccountId", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_todayConversations", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_historyConversations", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_selectedConversation", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_loading", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_loadingMore", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_loadingHistory", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_loadingMoreHistory", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_historyExpanded", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_historyLoaded", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_historyTotal", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_hasMore", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_hasMoreHistory", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_conversationItem", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_loadingMessages", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_loadingMoreMessages", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_hasMoreMessages", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_clearingUnread", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_selectionMode", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_selectedConversations", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_deletingSelected", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_deleteOlderThanDays", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_deletingOlderThan", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_showGoodsListColumn", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_desktopNotificationEnabled", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_accountGoodsList", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_loadingGoodsList", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_sendingProductLinkId", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_hasMoreGoodsList", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_loadingMoreGoodsList", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_replyText", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_pendingImages", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_sendingReply", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_imagePreviewUrl", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_imagePreviewScale", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_imagePreviewTranslate", 2);
  __decorateClass([
    r5()
  ], _ConversationLitElement.prototype, "_messageItems", 2);
  var ConversationLitElement = _ConversationLitElement;

  // src/lib/conversation-ui/conversation-lit.entry.ts
  try {
    if (!customElements.get("conversation-lit-app")) {
      customElements.define("conversation-lit-app", ConversationLitElement);
      console.log("[ConversationLit] conversation-lit-app \u5DF2\u6CE8\u518C");
    }
  } catch (e7) {
    console.error("[ConversationLit] \u5165\u53E3\u6CE8\u518C\u5931\u8D25:", e7);
  }
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
