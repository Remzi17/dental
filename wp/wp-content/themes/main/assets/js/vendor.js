/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
	"use strict";
	var t = [],
		r = Object.getPrototypeOf,
		s = t.slice,
		g = t.flat ? function (e) {
			return t.flat.call(e)
		} : function (e) {
			return t.concat.apply([], e)
		},
		u = t.push,
		i = t.indexOf,
		n = {},
		o = n.toString,
		v = n.hasOwnProperty,
		a = v.toString,
		l = a.call(Object),
		y = {},
		m = function (e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		x = function (e) {
			return null != e && e === e.window
		},
		E = C.document,
		c = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};

	function b(e, t, n) {
		var r, i, o = (n = n || E).createElement("script");
		if (o.text = e, t)
			for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function w(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var f = "3.5.1",
		S = function (e, t) {
			return new S.fn.init(e, t)
		};

	function p(e) {
		var t = !!e && "length" in e && e.length,
			n = w(e);
		return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	S.fn = S.prototype = {
		jquery: f,
		constructor: S,
		length: 0,
		toArray: function () {
			return s.call(this)
		},
		get: function (e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function (e) {
			var t = S.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function (e) {
			return S.each(this, e)
		},
		map: function (n) {
			return this.pushStack(S.map(this, function (e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function () {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		even: function () {
			return this.pushStack(S.grep(this, function (e, t) {
				return (t + 1) % 2
			}))
		},
		odd: function () {
			return this.pushStack(S.grep(this, function (e, t) {
				return t % 2
			}))
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: u,
		sort: t.sort,
		splice: t.splice
	}, S.extend = S.fn.extend = function () {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
			if (null != (e = arguments[s]))
				for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, S.extend({
		expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isPlainObject: function (e) {
			var t, n;
			return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval: function (e, t, n) {
			b(e, {
				nonce: t && t.nonce
			}, n)
		},
		each: function (e, t) {
			var n, r = 0;
			if (p(e)) {
				for (n = e.length; r < n; r++)
					if (!1 === t.call(e[r], r, e[r])) break
			} else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
		},
		inArray: function (e, t, n) {
			return null == t ? -1 : i.call(t, e, n)
		},
		merge: function (e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function (e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
			return r
		},
		map: function (e, t, n) {
			var r, i, o = 0,
				a = [];
			if (p(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return g(a)
		},
		guid: 1,
		support: y
	}), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var d = function (n) {
		var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
			p = n.document,
			k = 0,
			r = 0,
			m = ue(),
			x = ue(),
			A = ue(),
			N = ue(),
			D = function (e, t) {
				return e === t && (l = !0), 0
			},
			j = {}.hasOwnProperty,
			t = [],
			q = t.pop,
			L = t.push,
			H = t.push,
			O = t.slice,
			P = function (e, t) {
				for (var n = 0, r = e.length; n < r; n++)
					if (e[n] === t) return n;
				return -1
			},
			R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			M = "[\\x20\\t\\r\\n\\f]",
			I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
			W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
			F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
			B = new RegExp(M + "+", "g"),
			$ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
			_ = new RegExp("^" + M + "*," + M + "*"),
			z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
			U = new RegExp(M + "|>"),
			X = new RegExp(F),
			V = new RegExp("^" + I + "$"),
			G = {
				ID: new RegExp("^#(" + I + ")"),
				CLASS: new RegExp("^\\.(" + I + ")"),
				TAG: new RegExp("^(" + I + "|[*])"),
				ATTR: new RegExp("^" + W),
				PSEUDO: new RegExp("^" + F),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + R + ")$", "i"),
				needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			},
			Y = /HTML$/i,
			Q = /^(?:input|select|textarea|button)$/i,
			J = /^h\d$/i,
			K = /^[^{]+\{\s*\[native \w/,
			Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ee = /[+~]/,
			te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
			ne = function (e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
			},
			re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ie = function (e, t) {
				return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			oe = function () {
				T()
			},
			ae = be(function (e) {
				return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
		} catch (e) {
			H = {
				apply: t.length ? function (e, t) {
					L.apply(e, O.call(t))
				} : function (e, t) {
					var n = e.length,
						r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}

		function se(t, e, n, r) {
			var i, o, a, s, u, l, c, f = e && e.ownerDocument,
				p = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
			if (!r && (T(e), e = e || C, E)) {
				if (11 !== p && (u = Z.exec(t)))
					if (i = u[1]) {
						if (9 === p) {
							if (!(a = e.getElementById(i))) return n;
							if (a.id === i) return n.push(a), n
						} else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
					} else {
						if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
						if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
					} if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
					if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
						(f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
						while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
						c = l.join(",")
					}
					try {
						return H.apply(n, f.querySelectorAll(c)), n
					} catch (e) {
						N(t, !0)
					} finally {
						s === S && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace($, "$1"), e, n, r)
		}

		function ue() {
			var r = [];
			return function e(t, n) {
				return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
			}
		}

		function le(e) {
			return e[S] = !0, e
		}

		function ce(e) {
			var t = C.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function fe(e, t) {
			var n = e.split("|"),
				r = n.length;
			while (r--) b.attrHandle[n[r]] = t
		}

		function pe(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (r) return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function de(t) {
			return function (e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}

		function he(n) {
			return function (e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}

		function ge(t) {
			return function (e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}

		function ve(a) {
			return le(function (o) {
				return o = +o, le(function (e, t) {
					var n, r = a([], e.length, o),
						i = r.length;
					while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
				})
			})
		}

		function ye(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}
		for (e in d = se.support = {}, i = se.isXML = function (e) {
				var t = e.namespaceURI,
					n = (e.ownerDocument || e).documentElement;
				return !Y.test(t || n && n.nodeName || "HTML")
			}, T = se.setDocument = function (e) {
				var t, n, r = e ? e.ownerDocument || e : p;
				return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
					return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
				}), d.attributes = ce(function (e) {
					return e.className = "i", !e.getAttribute("className")
				}), d.getElementsByTagName = ce(function (e) {
					return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
				}), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
					return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
				}), d.getById ? (b.filter.ID = function (e) {
					var t = e.replace(te, ne);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}, b.find.ID = function (e, t) {
					if ("undefined" != typeof t.getElementById && E) {
						var n = t.getElementById(e);
						return n ? [n] : []
					}
				}) : (b.filter.ID = function (e) {
					var n = e.replace(te, ne);
					return function (e) {
						var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return t && t.value === n
					}
				}, b.find.ID = function (e, t) {
					if ("undefined" != typeof t.getElementById && E) {
						var n, r, i, o = t.getElementById(e);
						if (o) {
							if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
							i = t.getElementsByName(e), r = 0;
							while (o = i[r++])
								if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
						}
						return []
					}
				}), b.find.TAG = d.getElementsByTagName ? function (e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
				} : function (e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = o[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, b.find.CLASS = d.getElementsByClassName && function (e, t) {
					if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
				}, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
					var t;
					a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
				}), ce(function (e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = C.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
				})), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
					d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
				}), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function (e, t) {
					if (t)
						while (t = t.parentNode)
							if (t === e) return !0;
					return !1
				}, D = t ? function (e, t) {
					if (e === t) return l = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
				} : function (e, t) {
					if (e === t) return l = !0, 0;
					var n, r = 0,
						i = e.parentNode,
						o = t.parentNode,
						a = [e],
						s = [t];
					if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
					if (i === o) return pe(e, t);
					n = e;
					while (n = n.parentNode) a.unshift(n);
					n = t;
					while (n = n.parentNode) s.unshift(n);
					while (a[r] === s[r]) r++;
					return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
				}), C
			}, se.matches = function (e, t) {
				return se(e, null, null, t)
			}, se.matchesSelector = function (e, t) {
				if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
					var n = c.call(e, t);
					if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
				} catch (e) {
					N(t, !0)
				}
				return 0 < se(t, C, null, [e]).length
			}, se.contains = function (e, t) {
				return (e.ownerDocument || e) != C && T(e), y(e, t)
			}, se.attr = function (e, t) {
				(e.ownerDocument || e) != C && T(e);
				var n = b.attrHandle[t.toLowerCase()],
					r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
				return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, se.escape = function (e) {
				return (e + "").replace(re, ie)
			}, se.error = function (e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, se.uniqueSort = function (e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
					while (t = e[i++]) t === e[i] && (r = n.push(i));
					while (r--) e.splice(n[r], 1)
				}
				return u = null, e
			}, o = se.getText = function (e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					while (t = e[r++]) n += o(t);
				return n
			}, (b = se.selectors = {
				cacheLength: 50,
				createPseudo: le,
				match: G,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (e) {
						return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function (e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
					},
					PSEUDO: function (e) {
						var t, n = !e[6] && e[2];
						return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function (e) {
						var t = e.replace(te, ne).toLowerCase();
						return "*" === e ? function () {
							return !0
						} : function (e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function (e) {
						var t = m[e + " "];
						return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function (n, r, i) {
						return function (e) {
							var t = se.attr(e, n);
							return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
						}
					},
					CHILD: function (h, e, t, g, v) {
						var y = "nth" !== h.slice(0, 3),
							m = "last" !== h.slice(-4),
							x = "of-type" === e;
						return 1 === g && 0 === v ? function (e) {
							return !!e.parentNode
						} : function (e, t, n) {
							var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
								c = e.parentNode,
								f = x && e.nodeName.toLowerCase(),
								p = !n && !x,
								d = !1;
							if (c) {
								if (y) {
									while (l) {
										a = e;
										while (a = a[l])
											if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
										u = l = "only" === h && !u && "nextSibling"
									}
									return !0
								}
								if (u = [m ? c.firstChild : c.lastChild], m && p) {
									d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if (1 === a.nodeType && ++d && a === e) {
											i[h] = [k, s, d];
											break
										}
								} else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
									while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
										if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
								return (d -= v) === g || d % g == 0 && 0 <= d / g
							}
						}
					},
					PSEUDO: function (e, o) {
						var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
						return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
							var n, r = a(e, o),
								i = r.length;
							while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
						}) : function (e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos: {
					not: le(function (e) {
						var r = [],
							i = [],
							s = f(e.replace($, "$1"));
						return s[S] ? le(function (e, t, n, r) {
							var i, o = s(e, null, r, []),
								a = e.length;
							while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
						}) : function (e, t, n) {
							return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
						}
					}),
					has: le(function (t) {
						return function (e) {
							return 0 < se(t, e).length
						}
					}),
					contains: le(function (t) {
						return t = t.replace(te, ne),
							function (e) {
								return -1 < (e.textContent || o(e)).indexOf(t)
							}
					}),
					lang: le(function (n) {
						return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
							function (e) {
								var t;
								do {
									if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
							}
					}),
					target: function (e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root: function (e) {
						return e === a
					},
					focus: function (e) {
						return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: ge(!1),
					disabled: ge(!0),
					checked: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function (e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty: function (e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function (e) {
						return !b.pseudos.empty(e)
					},
					header: function (e) {
						return J.test(e.nodeName)
					},
					input: function (e) {
						return Q.test(e.nodeName)
					},
					button: function (e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function (e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: ve(function () {
						return [0]
					}),
					last: ve(function (e, t) {
						return [t - 1]
					}),
					eq: ve(function (e, t, n) {
						return [n < 0 ? n + t : n]
					}),
					even: ve(function (e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd: ve(function (e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt: ve(function (e, t, n) {
						for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
						return e
					}),
					gt: ve(function (e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}).pseudos.nth = b.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[e] = de(e);
		for (e in {
				submit: !0,
				reset: !0
			}) b.pseudos[e] = he(e);

		function me() {}

		function xe(e) {
			for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
			return r
		}

		function be(s, e, t) {
			var u = e.dir,
				l = e.next,
				c = l || u,
				f = t && "parentNode" === c,
				p = r++;
			return e.first ? function (e, t, n) {
				while (e = e[u])
					if (1 === e.nodeType || f) return s(e, t, n);
				return !1
			} : function (e, t, n) {
				var r, i, o, a = [k, p];
				if (n) {
					while (e = e[u])
						if ((1 === e.nodeType || f) && s(e, t, n)) return !0
				} else
					while (e = e[u])
						if (1 === e.nodeType || f)
							if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
							else {
								if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
								if ((i[c] = a)[2] = s(e, t, n)) return !0
							} return !1
			}
		}

		function we(i) {
			return 1 < i.length ? function (e, t, n) {
				var r = i.length;
				while (r--)
					if (!i[r](e, t, n)) return !1;
				return !0
			} : i[0]
		}

		function Te(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
			return a
		}

		function Ce(d, h, g, v, y, e) {
			return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
				var i, o, a, s = [],
					u = [],
					l = t.length,
					c = e || function (e, t, n) {
						for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
						return n
					}(h || "*", n.nodeType ? [n] : n, []),
					f = !d || !e && h ? c : Te(c, s, d, n, r),
					p = g ? y || (e ? d : l || v) ? [] : t : f;
				if (g && g(f, p, n, r), v) {
					i = Te(p, u), v(i, [], n, r), o = i.length;
					while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
				}
				if (e) {
					if (y || d) {
						if (y) {
							i = [], o = p.length;
							while (o--)(a = p[o]) && i.push(f[o] = a);
							y(null, p = [], i, r)
						}
						o = p.length;
						while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
					}
				} else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
			})
		}

		function Ee(e) {
			for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
					return e === i
				}, a, !0), l = be(function (e) {
					return -1 < P(i, e)
				}, a, !0), c = [function (e, t, n) {
					var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
					return i = null, r
				}]; s < r; s++)
				if (t = b.relative[e[s].type]) c = [be(we(c), t)];
				else {
					if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
						for (n = ++s; n < r; n++)
							if (b.relative[e[n].type]) break;
						return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
					}
					c.push(t)
				} return we(c)
		}
		return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
			var n, r, i, o, a, s, u, l = x[e + " "];
			if (l) return t ? 0 : l.slice(0);
			a = e, s = [], u = b.preFilter;
			while (a) {
				for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
						value: n,
						type: r[0].replace($, " ")
					}), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
					value: n,
					type: o,
					matches: r
				}), a = a.slice(n.length));
				if (!n) break
			}
			return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
		}, f = se.compile = function (e, t) {
			var n, v, y, m, x, r, i = [],
				o = [],
				a = A[e + " "];
			if (!a) {
				t || (t = h(e)), n = t.length;
				while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
				(a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
					var o, a, s, u = 0,
						l = "0",
						c = e && [],
						f = [],
						p = w,
						d = e || x && b.find.TAG("*", i),
						h = k += null == p ? 1 : Math.random() || .1,
						g = d.length;
					for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
						if (x && o) {
							a = 0, t || o.ownerDocument == C || (T(o), n = !E);
							while (s = v[a++])
								if (s(o, t || C, n)) {
									r.push(o);
									break
								} i && (k = h)
						}
						m && ((o = !s && o) && u--, e && c.push(o))
					}
					if (u += l, m && l !== u) {
						a = 0;
						while (s = y[a++]) s(c, f, t, n);
						if (e) {
							if (0 < u)
								while (l--) c[l] || f[l] || (f[l] = q.call(r));
							f = Te(f)
						}
						H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
					}
					return i && (k = h, w = p), c
				}, m ? le(r) : r))).selector = e
			}
			return a
		}, g = se.select = function (e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				c = !r && h(e = l.selector || e);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
					if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				i = G.needsContext.test(e) ? 0 : o.length;
				while (i--) {
					if (a = o[i], b.relative[s = a.type]) break;
					if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
						if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
						break
					}
				}
			}
			return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
		}, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
			return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
		}), ce(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || fe("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), d.attributes && ce(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || fe("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), ce(function (e) {
			return null == e.getAttribute("disabled")
		}) || fe(R, function (e, t, n) {
			var r;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), se
	}(C);
	S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
	var h = function (e, t, n) {
			var r = [],
				i = void 0 !== n;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && S(e).is(n)) break;
					r.push(e)
				} return r
		},
		T = function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		k = S.expr.match.needsContext;

	function A(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function D(e, n, r) {
		return m(n) ? S.grep(e, function (e, t) {
			return !!n.call(e, t, e) !== r
		}) : n.nodeType ? S.grep(e, function (e) {
			return e === n !== r
		}) : "string" != typeof n ? S.grep(e, function (e) {
			return -1 < i.call(n, e) !== r
		}) : S.filter(n, e, r)
	}
	S.filter = function (e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, S.fn.extend({
		find: function (e) {
			var t, n, r = this.length,
				i = this;
			if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
				for (t = 0; t < r; t++)
					if (S.contains(i[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
			return 1 < r ? S.uniqueSort(n) : n
		},
		filter: function (e) {
			return this.pushStack(D(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(D(this, e || [], !0))
		},
		is: function (e) {
			return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
		}
	});
	var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(S.fn.init = function (e, t, n) {
		var r, i;
		if (!e) return this;
		if (n = n || j, "string" == typeof e) {
			if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (r[1]) {
				if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
					for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
	}).prototype = S.fn, j = S(E);
	var L = /^(?:parents|prev(?:Until|All))/,
		H = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function O(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	S.fn.extend({
		has: function (e) {
			var t = S(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++)
					if (S.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && S(e);
			if (!k.test(e))
				for (; r < i; r++)
					for (n = this[r]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
		},
		index: function (e) {
			return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), S.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return h(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return h(e, "parentNode", n)
		},
		next: function (e) {
			return O(e, "nextSibling")
		},
		prev: function (e) {
			return O(e, "previousSibling")
		},
		nextAll: function (e) {
			return h(e, "nextSibling")
		},
		prevAll: function (e) {
			return h(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return h(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return h(e, "previousSibling", n)
		},
		siblings: function (e) {
			return T((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return T(e.firstChild)
		},
		contents: function (e) {
			return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
		}
	}, function (r, i) {
		S.fn[r] = function (e, t) {
			var n = S.map(this, i, e);
			return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
		}
	});
	var P = /[^\x20\t\r\n\f]+/g;

	function R(e) {
		return e
	}

	function M(e) {
		throw e
	}

	function I(e, t, n, r) {
		var i;
		try {
			e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}
	S.Callbacks = function (r) {
		var e, n;
		r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
			n[t] = !0
		}), n) : S.extend({}, r);
		var i, t, o, a, s = [],
			u = [],
			l = -1,
			c = function () {
				for (a = a || r.once, o = i = !0; u.length; l = -1) {
					t = u.shift();
					while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
				}
				r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
			},
			f = {
				add: function () {
					return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
						S.each(e, function (e, t) {
							m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
						})
					}(arguments), t && !i && c()), this
				},
				remove: function () {
					return S.each(arguments, function (e, t) {
						var n;
						while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
					}), this
				},
				has: function (e) {
					return e ? -1 < S.inArray(e, s) : 0 < s.length
				},
				empty: function () {
					return s && (s = []), this
				},
				disable: function () {
					return a = u = [], s = t = "", this
				},
				disabled: function () {
					return !s
				},
				lock: function () {
					return a = u = [], t || i || (s = t = ""), this
				},
				locked: function () {
					return !!a
				},
				fireWith: function (e, t) {
					return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
				},
				fire: function () {
					return f.fireWith(this, arguments), this
				},
				fired: function () {
					return !!o
				}
			};
		return f
	}, S.extend({
		Deferred: function (e) {
			var o = [
					["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
					["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				a = {
					state: function () {
						return i
					},
					always: function () {
						return s.done(arguments).fail(arguments), this
					},
					"catch": function (e) {
						return a.then(null, e)
					},
					pipe: function () {
						var i = arguments;
						return S.Deferred(function (r) {
							S.each(o, function (e, t) {
								var n = m(i[t[4]]) && i[t[4]];
								s[t[1]](function () {
									var e = n && n.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
								})
							}), i = null
						}).promise()
					},
					then: function (t, n, r) {
						var u = 0;

						function l(i, o, a, s) {
							return function () {
								var n = this,
									r = arguments,
									e = function () {
										var e, t;
										if (!(i < u)) {
											if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
										}
									},
									t = s ? e : function () {
										try {
											e()
										} catch (e) {
											S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
										}
									};
								i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
							}
						}
						return S.Deferred(function (e) {
							o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
						}).promise()
					},
					promise: function (e) {
						return null != e ? S.extend(e, a) : a
					}
				},
				s = {};
			return S.each(o, function (e, t) {
				var n = t[2],
					r = t[5];
				a[t[1]] = n.add, r && n.add(function () {
					i = r
				}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
					return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[t[0] + "With"] = n.fireWith
			}), a.promise(s), e && e.call(s, s), s
		},
		when: function (e) {
			var n = arguments.length,
				t = n,
				r = Array(t),
				i = s.call(arguments),
				o = S.Deferred(),
				a = function (t) {
					return function (e) {
						r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
					}
				};
			if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
			while (t--) I(i[t], a(t), o.reject);
			return o.promise()
		}
	});
	var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	S.Deferred.exceptionHook = function (e, t) {
		C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, S.readyException = function (e) {
		C.setTimeout(function () {
			throw e
		})
	};
	var F = S.Deferred();

	function B() {
		E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
	}
	S.fn.ready = function (e) {
		return F.then(e)["catch"](function (e) {
			S.readyException(e)
		}), this
	}, S.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (e) {
			(!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
		}
	}), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
	var $ = function (e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === w(n))
				for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
			else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
					return l.call(S(e), n)
				})), t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		_ = /^-ms-/,
		z = /-([a-z])/g;

	function U(e, t) {
		return t.toUpperCase()
	}

	function X(e) {
		return e.replace(_, "ms-").replace(z, U)
	}
	var V = function (e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};

	function G() {
		this.expando = S.expando + G.uid++
	}
	G.uid = 1, G.prototype = {
		cache: function (e) {
			var t = e[this.expando];
			return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, n) {
			var r, i = this.cache(e);
			if ("string" == typeof t) i[X(t)] = n;
			else
				for (r in t) i[X(r)] = t[r];
			return i
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
		},
		access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function (e, t) {
			var n, r = e[this.expando];
			if (void 0 !== r) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
					while (n--) delete r[t[n]]
				}(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e) {
			var t = e[this.expando];
			return void 0 !== t && !S.isEmptyObject(t)
		}
	};
	var Y = new G,
		Q = new G,
		J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		K = /[A-Z]/g;

	function Z(e, t, n) {
		var r, i;
		if (void 0 === n && 1 === e.nodeType)
			if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
				try {
					n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
				} catch (e) {}
				Q.set(e, t, n)
			} else n = void 0;
		return n
	}
	S.extend({
		hasData: function (e) {
			return Q.hasData(e) || Y.hasData(e)
		},
		data: function (e, t, n) {
			return Q.access(e, t, n)
		},
		removeData: function (e, t) {
			Q.remove(e, t)
		},
		_data: function (e, t, n) {
			return Y.access(e, t, n)
		},
		_removeData: function (e, t) {
			Y.remove(e, t)
		}
	}), S.fn.extend({
		data: function (n, e) {
			var t, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
					t = a.length;
					while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
					Y.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof n ? this.each(function () {
				Q.set(this, n)
			}) : $(this, function (e) {
				var t;
				if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
				this.each(function () {
					Q.set(this, n, e)
				})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData: function (e) {
			return this.each(function () {
				Q.remove(this, e)
			})
		}
	}), S.extend({
		queue: function (e, t, n) {
			var r;
			if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = S.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = S._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
				S.dequeue(e, t)
			}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return Y.get(e, n) || Y.access(e, n, {
				empty: S.Callbacks("once memory").add(function () {
					Y.remove(e, [t + "queue", n])
				})
			})
		}
	}), S.fn.extend({
		queue: function (t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
				var e = S.queue(this, t, n);
				S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				S.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			var n, r = 1,
				i = S.Deferred(),
				o = this,
				a = this.length,
				s = function () {
					--r || i.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = void 0), e = e || "fx";
			while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = ["Top", "Right", "Bottom", "Left"],
		re = E.documentElement,
		ie = function (e) {
			return S.contains(e.ownerDocument, e)
		},
		oe = {
			composed: !0
		};
	re.getRootNode && (ie = function (e) {
		return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
	});
	var ae = function (e, t) {
		return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
	};

	function se(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function () {
				return r.cur()
			} : function () {
				return S.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
		if (c && c[3] !== l) {
			u /= 2, l = l || c[3], c = +u || 1;
			while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, S.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}
	var ue = {};

	function le(e, t) {
		for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
		for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
		return e
	}
	S.fn.extend({
		show: function () {
			return le(this, !0)
		},
		hide: function () {
			return le(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				ae(this) ? S(this).show() : S(this).hide()
			})
		}
	});
	var ce, fe, pe = /^(?:checkbox|radio)$/i,
		de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		he = /^$|^module$|\/(?:java|ecma)script/i;
	ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
	var ge = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};

	function ve(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
	}

	function ye(e, t) {
		for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
	}
	ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
	var me = /<|&#?\w+;/;

	function xe(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
			if ((o = e[d]) || 0 === o)
				if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
				else if (me.test(o)) {
			a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
			while (c--) a = a.lastChild;
			S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
		} else p.push(t.createTextNode(o));
		f.textContent = "", d = 0;
		while (o = p[d++])
			if (r && -1 < S.inArray(o, r)) i && i.push(o);
			else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
			c = 0;
			while (o = a[c++]) he.test(o.type || "") && n.push(o)
		}
		return f
	}
	var be = /^key/,
		we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Te = /^([^.]*)(?:\.(.+)|)/;

	function Ce() {
		return !0
	}

	function Ee() {
		return !1
	}

	function Se(e, t) {
		return e === function () {
			try {
				return E.activeElement
			} catch (e) {}
		}() == ("focus" === t)
	}

	function ke(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function (e) {
			return S().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
			S.event.add(this, t, i, r, n)
		})
	}

	function Ae(e, i, o) {
		o ? (Y.set(e, i, !1), S.event.add(e, i, {
			namespace: !1,
			handler: function (e) {
				var t, n, r = Y.get(this, i);
				if (1 & e.isTrigger && this[i]) {
					if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
					else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
				} else r.length && (Y.set(this, i, {
					value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
	}
	S.event = {
		global: {},
		add: function (t, e, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
			if (V(t)) {
				n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
					return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
				}), l = (e = (e || "").match(P) || [""]).length;
				while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && S.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
			}
		},
		remove: function (e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
			if (v && (u = v.events)) {
				l = (t = (t || "").match(P) || [""]).length;
				while (l--)
					if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
						f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
						while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
					} else
						for (d in u) S.event.remove(e, d + t[l], n, r, !0);
				S.isEmptyObject(u) && Y.remove(e, "handle events")
			}
		},
		dispatch: function (e) {
			var t, n, r, i, o, a, s = new Array(arguments.length),
				u = S.event.fix(e),
				l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
				c = S.event.special[u.type] || {};
			for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
				a = S.event.handlers.call(this, u, l), t = 0;
				while ((i = a[t++]) && !u.isPropagationStopped()) {
					u.currentTarget = i.elem, n = 0;
					while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
				}
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function (e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
				for (; l !== this; l = l.parentNode || this)
					if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
						for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					} return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function (t, e) {
			Object.defineProperty(S.Event.prototype, t, {
				enumerable: !0,
				configurable: !0,
				get: m(e) ? function () {
					if (this.originalEvent) return e(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set: function (e) {
					Object.defineProperty(this, t, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: e
					})
				}
			})
		},
		fix: function (e) {
			return e[S.expando] ? e : new S.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function (e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
				},
				trigger: function (e) {
					var t = this || e;
					return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
				},
				_default: function (e) {
					var t = e.target;
					return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, S.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, S.Event = function (e, t) {
		if (!(this instanceof S.Event)) return new S.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
	}, S.Event.prototype = {
		constructor: S.Event,
		isDefaultPrevented: Ee,
		isPropagationStopped: Ee,
		isImmediatePropagationStopped: Ee,
		isSimulated: !1,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, S.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function (e) {
			var t = e.button;
			return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, S.event.addProp), S.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		S.event.special[e] = {
			setup: function () {
				return Ae(this, e, Se), !1
			},
			trigger: function () {
				return Ae(this, e), !0
			},
			delegateType: t
		}
	}), S.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, i) {
		S.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function (e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), S.fn.extend({
		on: function (e, t, n, r) {
			return ke(this, e, t, n, r)
		},
		one: function (e, t, n, r) {
			return ke(this, e, t, n, r, 1)
		},
		off: function (e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
				S.event.remove(this, e, n, t)
			})
		}
	});
	var Ne = /<script|<style|<link/i,
		De = /checked\s*(?:[^=]|=\s*.checked.)/i,
		je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function qe(e, t) {
		return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
	}

	function Le(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function He(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function Oe(e, t) {
		var n, r, i, o, a, s;
		if (1 === t.nodeType) {
			if (Y.hasData(e) && (s = Y.get(e).events))
				for (i in Y.remove(t, "handle events"), s)
					for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
			Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
		}
	}

	function Pe(n, r, i, o) {
		r = g(r);
		var e, t, a, s, u, l, c = 0,
			f = n.length,
			p = f - 1,
			d = r[0],
			h = m(d);
		if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
			var t = n.eq(e);
			h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
		});
		if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
			if (s)
				for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
					nonce: u.nonce || u.getAttribute("nonce")
				}, l) : b(u.textContent.replace(je, ""), u, l))
		}
		return n
	}

	function Re(e, t, n) {
		for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
		return e
	}
	S.extend({
		htmlPrefilter: function (e) {
			return e
		},
		clone: function (e, t, n) {
			var r, i, o, a, s, u, l, c = e.cloneNode(!0),
				f = ie(e);
			if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
				for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
				else Oe(e, c);
			return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
		},
		cleanData: function (e) {
			for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (V(n)) {
					if (t = n[Y.expando]) {
						if (t.events)
							for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
						n[Y.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), S.fn.extend({
		detach: function (e) {
			return Re(this, e, !0)
		},
		remove: function (e) {
			return Re(this, e)
		},
		text: function (e) {
			return $(this, function (e) {
				return void 0 === e ? S.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return Pe(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
			})
		},
		prepend: function () {
			return Pe(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = qe(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return Pe(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return Pe(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return S.clone(this, e, t)
			})
		},
		html: function (e) {
			return $(this, function (e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = S.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var n = [];
			return Pe(this, arguments, function (e) {
				var t = this.parentNode;
				S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), S.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, a) {
		S.fn[e] = function (e) {
			for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		Ie = function (e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = C), t.getComputedStyle(e)
		},
		We = function (e, t, n) {
			var r, i, o = {};
			for (i in t) o[i] = e.style[i], e.style[i] = t[i];
			for (i in r = n.call(e), t) e.style[i] = o[i];
			return r
		},
		Fe = new RegExp(ne.join("|"), "i");

	function Be(e, t, n) {
		var r, i, o, a, s = e.style;
		return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function $e(e, t) {
		return {
			get: function () {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}! function () {
		function e() {
			if (l) {
				u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
				var e = C.getComputedStyle(l);
				n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
			}
		}

		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n, r, i, o, a, s, u = E.createElement("div"),
			l = E.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
			boxSizingReliable: function () {
				return e(), r
			},
			pixelBoxStyles: function () {
				return e(), o
			},
			pixelPosition: function () {
				return e(), n
			},
			reliableMarginLeft: function () {
				return e(), s
			},
			scrollboxSize: function () {
				return e(), i
			},
			reliableTrDimensions: function () {
				var e, t, n, r;
				return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
			}
		}))
	}();
	var _e = ["Webkit", "Moz", "ms"],
		ze = E.createElement("div").style,
		Ue = {};

	function Xe(e) {
		var t = S.cssProps[e] || Ue[e];
		return t || (e in ze ? e : Ue[e] = function (e) {
			var t = e[0].toUpperCase() + e.slice(1),
				n = _e.length;
			while (n--)
				if ((e = _e[n] + t) in ze) return e
		}(e) || e)
	}
	var Ve = /^(none|table(?!-c[ea]).+)/,
		Ge = /^--/,
		Ye = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Qe = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function Je(e, t, n) {
		var r = te.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function Ke(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if (n === (r ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
		return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
	}

	function Ze(e, t, n) {
		var r = Ie(e),
			i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
			o = i,
			a = Be(e, t, r),
			s = "offset" + t[0].toUpperCase() + t.slice(1);
		if (Me.test(a)) {
			if (!n) return a;
			a = "auto"
		}
		return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
	}

	function et(e, t, n, r, i) {
		return new et.prototype.init(e, t, n, r, i)
	}
	S.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = Be(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			gridArea: !0,
			gridColumn: !0,
			gridColumnEnd: !0,
			gridColumnStart: !0,
			gridRow: !0,
			gridRowEnd: !0,
			gridRowStart: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = X(t),
					u = Ge.test(t),
					l = e.style;
				if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
				"string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
			}
		},
		css: function (e, t, n, r) {
			var i, o, a, s = X(t);
			return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), S.each(["height", "width"], function (e, u) {
		S.cssHooks[u] = {
			get: function (e, t, n) {
				if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
					return Ze(e, u, n)
				})
			},
			set: function (e, t, n) {
				var r, i = Ie(e),
					o = !y.scrollboxSize() && "absolute" === i.position,
					a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
					s = n ? Ke(e, u, n, a, i) : 0;
				return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
			}
		}
	}), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), S.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (i, o) {
		S.cssHooks[i + o] = {
			expand: function (e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, "margin" !== i && (S.cssHooks[i + o].set = Je)
	}), S.fn.extend({
		css: function (e, t) {
			return $(this, function (e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((S.Tween = et).prototype = {
		constructor: et,
		init: function (e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = et.propHooks[this.prop];
			return e && e.get ? e.get(this) : et.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = et.propHooks[this.prop];
			return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
		}
	}).init.prototype = et.prototype, (et.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e) {
				S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = et.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, S.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, S.fx = et.prototype.init, S.fx.step = {};
	var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
		at = /queueHooks$/;

	function st() {
		nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
	}

	function ut() {
		return C.setTimeout(function () {
			tt = void 0
		}), tt = Date.now()
	}

	function lt(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function ct(e, t, n) {
		for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function ft(o, e, t) {
		var n, a, r = 0,
			i = ft.prefilters.length,
			s = S.Deferred().always(function () {
				delete u.elem
			}),
			u = function () {
				if (a) return !1;
				for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
				return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
			},
			l = s.promise({
				elem: o,
				props: S.extend({}, e),
				opts: S.extend(!0, {
					specialEasing: {},
					easing: S.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: tt || ut(),
				duration: t.duration,
				tweens: [],
				createTween: function (e, t) {
					var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
					return l.tweens.push(n), n
				},
				stop: function (e) {
					var t = 0,
						n = e ? l.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) l.tweens[t].run(1);
					return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
				}
			}),
			c = l.props;
		for (! function (e, t) {
				var n, r, i, o, a;
				for (n in e)
					if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
						for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
					else t[r] = i
			}(c, l.opts.specialEasing); r < i; r++)
			if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
		return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
			elem: o,
			anim: l,
			queue: l.opts.queue
		})), l
	}
	S.Animation = S.extend(ft, {
		tweeners: {
			"*": [function (e, t) {
				var n = this.createTween(e, t);
				return se(n.elem, e, te.exec(t), n), n
			}]
		},
		tweener: function (e, t) {
			m(e) ? (t = e, e = ["*"]) : e = e.match(P);
			for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
		},
		prefilters: [function (e, t, n) {
			var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
				p = this,
				d = {},
				h = e.style,
				g = e.nodeType && ae(e),
				v = Y.get(e, "fxshow");
			for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
					a.unqueued || s()
				}), a.unqueued++, p.always(function () {
					p.always(function () {
						a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
					})
				})), t)
				if (i = t[r], ot.test(i)) {
					if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
						if ("show" !== i || !v || void 0 === v[r]) continue;
						g = !0
					}
					d[r] = v && v[r] || S.style(e, r)
				} if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
				for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
						h.display = l
					}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
						h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
					})), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
					display: l
				}), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
					for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
				})), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
		}],
		prefilter: function (e, t) {
			t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
		}
	}), S.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? S.extend({}, e) : {
			complete: n || !n && t || m(e) && e,
			duration: e,
			easing: n && t || t && !m(t) && t
		};
		return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
			m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
		}, r
	}, S.fn.extend({
		fadeTo: function (e, t, n, r) {
			return this.filter(ae).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function (t, e, n, r) {
			var i = S.isEmptyObject(t),
				o = S.speed(e, n, r),
				a = function () {
					var e = ft(this, S.extend({}, t), o);
					(i || Y.get(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function (i, e, o) {
			var a = function (e) {
				var t = e.stop;
				delete e.stop, t(o)
			};
			return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
				var e = !0,
					t = null != i && i + "queueHooks",
					n = S.timers,
					r = Y.get(this);
				if (t) r[t] && r[t].stop && a(r[t]);
				else
					for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
				for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
				!e && o || S.dequeue(this, i)
			})
		},
		finish: function (a) {
			return !1 !== a && (a = a || "fx"), this.each(function () {
				var e, t = Y.get(this),
					n = t[a + "queue"],
					r = t[a + "queueHooks"],
					i = S.timers,
					o = n ? n.length : 0;
				for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
				for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
				delete t.finish
			})
		}
	}), S.each(["toggle", "show", "hide"], function (e, r) {
		var i = S.fn[r];
		S.fn[r] = function (e, t, n) {
			return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
		}
	}), S.each({
		slideDown: lt("show"),
		slideUp: lt("hide"),
		slideToggle: lt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function (e, r) {
		S.fn[e] = function (e, t, n) {
			return this.animate(r, e, t, n)
		}
	}), S.timers = [], S.fx.tick = function () {
		var e, t = 0,
			n = S.timers;
		for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || S.fx.stop(), tt = void 0
	}, S.fx.timer = function (e) {
		S.timers.push(e), S.fx.start()
	}, S.fx.interval = 13, S.fx.start = function () {
		nt || (nt = !0, st())
	}, S.fx.stop = function () {
		nt = null
	}, S.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, S.fn.delay = function (r, e) {
		return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
			var n = C.setTimeout(e, r);
			t.stop = function () {
				C.clearTimeout(n)
			}
		})
	}, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
	var pt, dt = S.expr.attrHandle;
	S.fn.extend({
		attr: function (e, t) {
			return $(this, S.attr, e, t, 1 < arguments.length)
		},
		removeAttr: function (e) {
			return this.each(function () {
				S.removeAttr(this, e)
			})
		}
	}), S.extend({
		attr: function (e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!y.radioValue && "radio" === t && A(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var n, r = 0,
				i = t && t.match(P);
			if (i && 1 === e.nodeType)
				while (n = i[r++]) e.removeAttribute(n)
		}
	}), pt = {
		set: function (e, t, n) {
			return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var a = dt[t] || S.find.attr;
		dt[t] = function (e, t, n) {
			var r, i, o = t.toLowerCase();
			return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
		}
	});
	var ht = /^(?:input|select|textarea|button)$/i,
		gt = /^(?:a|area)$/i;

	function vt(e) {
		return (e.match(P) || []).join(" ")
	}

	function yt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function mt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
	}
	S.fn.extend({
		prop: function (e, t) {
			return $(this, S.prop, e, t, 1 < arguments.length)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[S.propFix[e] || e]
			})
		}
	}), S.extend({
		prop: function (e, t, n) {
			var r, i, o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = S.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), y.optSelected || (S.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		S.propFix[this.toLowerCase()] = this
	}), S.fn.extend({
		addClass: function (t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function (e) {
				S(this).addClass(t.call(this, e, yt(this)))
			});
			if ((e = mt(t)).length)
				while (n = this[u++])
					if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						a = 0;
						while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function (t) {
			var e, n, r, i, o, a, s, u = 0;
			if (m(t)) return this.each(function (e) {
				S(this).removeClass(t.call(this, e, yt(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((e = mt(t)).length)
				while (n = this[u++])
					if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
						a = 0;
						while (o = e[a++])
							while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
						i !== (s = vt(r)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function (i, t) {
			var o = typeof i,
				a = "string" === o || Array.isArray(i);
			return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
				S(this).toggleClass(i.call(this, e, yt(this), t), t)
			}) : this.each(function () {
				var e, t, n, r;
				if (a) {
					t = 0, n = S(this), r = mt(i);
					while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
				} else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, n, r = 0;
			t = " " + e + " ";
			while (n = this[r++])
				if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var xt = /\r/g;
	S.fn.extend({
		val: function (n) {
			var r, e, i, t = this[0];
			return arguments.length ? (i = m(n), this.each(function (e) {
				var t;
				1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
					return null == e ? "" : e + ""
				})), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
			})) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
		}
	}), S.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = S.find.attr(e, "value");
					return null != t ? t : vt(S.text(e))
				}
			},
			select: {
				get: function (e) {
					var t, n, r, i = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						u = a ? o + 1 : i.length;
					for (r = o < 0 ? u : a ? o : 0; r < u; r++)
						if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
							if (t = S(n).val(), a) return t;
							s.push(t)
						} return s
				},
				set: function (e, t) {
					var n, r, i = e.options,
						o = S.makeArray(t),
						a = i.length;
					while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), S.each(["radio", "checkbox"], function () {
		S.valHooks[this] = {
			set: function (e, t) {
				if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
			}
		}, y.checkOn || (S.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), y.focusin = "onfocusin" in C;
	var bt = /^(?:focusinfocus|focusoutblur)$/,
		wt = function (e) {
			e.stopPropagation()
		};
	S.extend(S.event, {
		trigger: function (e, t, n, r) {
			var i, o, a, s, u, l, c, f, p = [n || E],
				d = v.call(e, "type") ? e.type : e,
				h = v.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
				if (!r && !c.noBubble && !x(n)) {
					for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
					a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
				}
				i = 0;
				while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
			}
		},
		simulate: function (e, t, n) {
			var r = S.extend(new S.Event, n, {
				type: e,
				isSimulated: !0
			});
			S.event.trigger(r, null, t)
		}
	}), S.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				S.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var n = this[0];
			if (n) return S.event.trigger(e, t, n, !0)
		}
	}), y.focusin || S.each({
		focus: "focusin",
		blur: "focusout"
	}, function (n, r) {
		var i = function (e) {
			S.event.simulate(r, e.target, S.event.fix(e))
		};
		S.event.special[r] = {
			setup: function () {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, r);
				t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
			},
			teardown: function () {
				var e = this.ownerDocument || this.document || this,
					t = Y.access(e, r) - 1;
				t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
			}
		}
	});
	var Tt = C.location,
		Ct = {
			guid: Date.now()
		},
		Et = /\?/;
	S.parseXML = function (e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new C.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		}
		return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
	};
	var St = /\[\]$/,
		kt = /\r?\n/g,
		At = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i;

	function Dt(n, e, r, i) {
		var t;
		if (Array.isArray(e)) S.each(e, function (e, t) {
			r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
		});
		else if (r || "object" !== w(e)) i(n, e);
		else
			for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
	}
	S.param = function (e, t) {
		var n, r = [],
			i = function (e, t) {
				var n = m(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (null == e) return "";
		if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
			i(this.name, this.value)
		});
		else
			for (n in e) Dt(n, e[n], t, i);
		return r.join("&")
	}, S.fn.extend({
		serialize: function () {
			return S.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = S.prop(this, "elements");
				return e ? S.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
			}).map(function (e, t) {
				var n = S(this).val();
				return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(kt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(kt, "\r\n")
				}
			}).get()
		}
	});
	var jt = /%20/g,
		qt = /#.*$/,
		Lt = /([?&])_=[^&]*/,
		Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ot = /^(?:GET|HEAD)$/,
		Pt = /^\/\//,
		Rt = {},
		Mt = {},
		It = "*/".concat("*"),
		Wt = E.createElement("a");

	function Ft(o) {
		return function (e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(P) || [];
			if (m(t))
				while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function Bt(t, i, o, a) {
		var s = {},
			u = t === Mt;

		function l(e) {
			var r;
			return s[e] = !0, S.each(t[e] || [], function (e, t) {
				var n = t(i, o, a);
				return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
			}), r
		}
		return l(i.dataTypes[0]) || !s["*"] && l("*")
	}

	function $t(e, t) {
		var n, r, i = S.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && S.extend(!0, e, r), e
	}
	Wt.href = Tt.href, S.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Tt.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": It,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": S.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
		},
		ajaxPrefilter: Ft(Rt),
		ajaxTransport: Ft(Mt),
		ajax: function (e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
				y = v.context || v,
				m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
				x = S.Deferred(),
				b = S.Callbacks("once memory"),
				w = v.statusCode || {},
				a = {},
				s = {},
				u = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (h) {
							if (!n) {
								n = {};
								while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
							}
							t = n[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function () {
						return h ? p : null
					},
					setRequestHeader: function (e, t) {
						return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType: function (e) {
						return null == h && (v.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (h) T.always(e[T.status]);
							else
								for (t in e) w[t] = [w[t], e[t]];
						return this
					},
					abort: function (e) {
						var t = e || u;
						return c && c.abort(t), l(0, t), this
					}
				};
			if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
				r = E.createElement("a");
				try {
					r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
				} catch (e) {
					v.crossDomain = !0
				}
			}
			if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
			for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
			if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
			if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
				if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
				v.async && 0 < v.timeout && (d = C.setTimeout(function () {
					T.abort("timeout")
				}, v.timeout));
				try {
					h = !1, c.send(a, l)
				} catch (e) {
					if (h) throw e;
					l(-1, e)
				}
			} else l(-1, "No Transport");

			function l(e, t, n, r) {
				var i, o, a, s, u, l = t;
				h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
					var r, i, o, a, s = e.contents,
						u = e.dataTypes;
					while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
					if (r)
						for (i in s)
							if (s[i] && s[i].test(r)) {
								u.unshift(i);
								break
							} if (u[0] in n) o = u[0];
					else {
						for (i in n) {
							if (!u[0] || e.converters[i + " " + u[0]]) {
								o = i;
								break
							}
							a || (a = i)
						}
						o = o || a
					}
					if (o) return o !== u[0] && u.unshift(o), n[o]
				}(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
					var i, o, a, s, u, l = {},
						c = e.dataTypes.slice();
					if (c[1])
						for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
					o = c.shift();
					while (o)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
							if ("*" === o) o = u;
							else if ("*" !== u && u !== o) {
						if (!(a = l[u + " " + o] || l["* " + o]))
							for (i in l)
								if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
									!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && e["throws"]) t = a(t);
							else try {
								t = a(t)
							} catch (e) {
								return {
									state: "parsererror",
									error: a ? e : "No conversion from " + u + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: t
					}
				}(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON: function (e, t, n) {
			return S.get(e, t, n, "json")
		},
		getScript: function (e, t) {
			return S.get(e, void 0, t, "script")
		}
	}), S.each(["get", "post"], function (e, i) {
		S[i] = function (e, t, n, r) {
			return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, S.isPlainObject(e) && e))
		}
	}), S.ajaxPrefilter(function (e) {
		var t;
		for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), S._evalUrl = function (e, t, n) {
		return S.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function () {}
			},
			dataFilter: function (e) {
				S.globalEval(e, t, n)
			}
		})
	}, S.fn.extend({
		wrapAll: function (e) {
			var t;
			return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function (n) {
			return m(n) ? this.each(function (e) {
				S(this).wrapInner(n.call(this, e))
			}) : this.each(function () {
				var e = S(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function (t) {
			var n = m(t);
			return this.each(function (e) {
				S(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				S(this).replaceWith(this.childNodes)
			}), this
		}
	}), S.expr.pseudos.hidden = function (e) {
		return !S.expr.pseudos.visible(e)
	}, S.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, S.ajaxSettings.xhr = function () {
		try {
			return new C.XMLHttpRequest
		} catch (e) {}
	};
	var _t = {
			0: 200,
			1223: 204
		},
		zt = S.ajaxSettings.xhr();
	y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
		var o, a;
		if (y.cors || zt && !i.crossDomain) return {
			send: function (e, t) {
				var n, r = i.xhr();
				if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
					for (n in i.xhrFields) r[n] = i.xhrFields[n];
				for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
				o = function (e) {
					return function () {
						o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
							binary: r.response
						} : {
							text: r.responseText
						}, r.getAllResponseHeaders()))
					}
				}, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
					4 === r.readyState && C.setTimeout(function () {
						o && a()
					})
				}, o = o("abort");
				try {
					r.send(i.hasContent && i.data || null)
				} catch (e) {
					if (o) throw e
				}
			},
			abort: function () {
				o && o()
			}
		}
	}), S.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1)
	}), S.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (e) {
				return S.globalEval(e), e
			}
		}
	}), S.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), S.ajaxTransport("script", function (n) {
		var r, i;
		if (n.crossDomain || n.scriptAttrs) return {
			send: function (e, t) {
				r = S("<script>").attr(n.scriptAttrs || {}).prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", i = function (e) {
					r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
				}), E.head.appendChild(r[0])
			},
			abort: function () {
				i && i()
			}
		}
	});
	var Ut, Xt = [],
		Vt = /(=)\?(?=&|$)|\?\?/;
	S.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Xt.pop() || S.expando + "_" + Ct.guid++;
			return this[e] = !0, e
		}
	}), S.ajaxPrefilter("json jsonp", function (e, t, n) {
		var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
			return o || S.error(r + " was not called"), o[0]
		}, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
			o = arguments
		}, n.always(function () {
			void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
		}), "script"
	}), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
		var r, i, o
	}, S.fn.load = function (e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
		}).always(n && function (e, t) {
			a.each(function () {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, S.expr.pseudos.animated = function (t) {
		return S.grep(S.timers, function (e) {
			return t === e.elem
		}).length
	}, S.offset = {
		setOffset: function (e, t, n) {
			var r, i, o, a, s, u, l = S.css(e, "position"),
				c = S(e),
				f = {};
			"static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
		}
	}, S.fn.extend({
		offset: function (t) {
			if (arguments.length) return void 0 === t ? this : this.each(function (e) {
				S.offset.setOffset(this, t, e)
			});
			var e, n, r = this[0];
			return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: e.top + n.pageYOffset,
				left: e.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function () {
			if (this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
				else {
					t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
					while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - S.css(r, "marginTop", !0),
					left: t.left - i.left - S.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				var e = this.offsetParent;
				while (e && "static" === S.css(e, "position")) e = e.offsetParent;
				return e || re
			})
		}
	}), S.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (t, i) {
		var o = "pageYOffset" === i;
		S.fn[t] = function (e) {
			return $(this, function (e, t, n) {
				var r;
				if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
				r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), S.each(["top", "left"], function (e, n) {
		S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
			if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
		})
	}), S.each({
		Height: "height",
		Width: "width"
	}, function (a, s) {
		S.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function (r, o) {
			S.fn[o] = function (e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return $(this, function (e, t, n) {
					var r;
					return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
				}, s, n ? e : void 0, n)
			}
		})
	}), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		S.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), S.fn.extend({
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
		S.fn[n] = function (e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	});
	var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	S.proxy = function (e, t) {
		var n, r, i;
		if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
			return e.apply(t || this, r.concat(s.call(arguments)))
		}).guid = e.guid = e.guid || S.guid++, i
	}, S.holdReady = function (e) {
		e ? S.readyWait++ : S.ready(!0)
	}, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
		var t = S.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, S.trim = function (e) {
		return null == e ? "" : (e + "").replace(Gt, "")
	}, "function" == typeof define && define.amd && define("jquery", [], function () {
		return S
	});
	var Yt = C.jQuery,
		Qt = C.$;
	return S.noConflict = function (e) {
		return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
	}, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
! function (e, t) {
	"use strict";
	var n;
	if ("object" == typeof exports) {
		try {
			n = require("moment")
		} catch (e) { }
		module.exports = t(n)
	} else "function" == typeof define && define.amd ? define(function (e) {
		try {
			n = e("moment")
		} catch (e) { }
		return t(n)
	}) : e.Pikaday = t(e.moment)
}(this, function (L) {
	"use strict";

	function s(e, t, n, a) {
		r ? e.addEventListener(t, n, !!a) : e.attachEvent("on" + t, n)
	}

	function t(e, t, n, a) {
		r ? e.removeEventListener(t, n, !!a) : e.detachEvent("on" + t, n)
	}

	function o(e, t) {
		return -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
	}

	function c(e, t) {
		o(e, t) || (e.className = "" === e.className ? t : e.className + " " + t)
	}

	function f(e, t) {
		var n;
		e.className = (n = (" " + e.className + " ").replace(" " + t + " ", " ")).trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
	}

	function y(e) {
		return /Array/.test(Object.prototype.toString.call(e))
	}

	function P(e) {
		return /Date/.test(Object.prototype.toString.call(e)) && !isNaN(e.getTime())
	}

	function H(e, t) {
		return [31, (n = e) % 4 == 0 && n % 100 != 0 || n % 400 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t];
		var n
	}

	function B(e) {
		P(e) && e.setHours(0, 0, 0, 0)
	}

	function V(e, t) {
		return e.getTime() === t.getTime()
	}

	function i(e, t, n) {
		var a;
		g.createEvent ? ((a = g.createEvent("HTMLEvents")).initEvent(t, !0, !1), a = l(a, n), e.dispatchEvent(a)) : g.createEventObject && (a = g.createEventObject(), a = l(a, n), e.fireEvent("on" + t, a))
	}

	function n(e) {
		return e.month < 0 && (e.year -= Math.ceil(Math.abs(e.month) / 12), e.month += 12), 11 < e.month && (e.year += Math.floor(Math.abs(e.month) / 12), e.month -= 12), e
	}

	function a(e, t, n) {
		for (t += e.firstDay; 7 <= t;) t -= 7;
		return n ? e.i18n.weekdaysShort[t] : e.i18n.weekdays[t]
	}

	function J(e) {
		var t = [],
			n = "false";
		if (e.isEmpty) {
			if (!e.showDaysInNextAndPreviousMonths) return '<td class="is-empty"></td>';
			t.push("is-outside-current-month"), e.enableSelectionDaysInNextAndPreviousMonths || t.push("is-selection-disabled")
		}
		return e.isDisabled && t.push("is-disabled"), e.isToday && t.push("is-today"), e.isSelected && (t.push("is-selected"), n = "true"), e.hasEvent && t.push("has-event"), e.isInRange && t.push("is-inrange"), e.isStartRange && t.push("is-startrange"), e.isEndRange && t.push("is-endrange"), '<td data-day="' + e.day + '" class="' + t.join(" ") + '" aria-selected="' + n + '"><button class="pika-button pika-day" type="button" data-pika-year="' + e.year + '" data-pika-month="' + e.month + '" data-pika-day="' + e.day + '">' + e.day + "</button></td>"
	}

	function K(e, t) {
		function n(e) {
			return (e + 7 - 1) % 7
		}
		e.setHours(0, 0, 0, 0);
		var a = e.getDate(),
			i = e.getDay(),
			s = t,
			o = s - 1;
		e.setDate(a + o - n(i));
		var r = new Date(e.getFullYear(), 0, s),
			l = (e.getTime() - r.getTime()) / 864e5;
		return 1 + Math.round((l - o + n(r.getDay())) / 7)
	}

	function h(e, t, n, a, i, s) {
		for (var o, r, l, h = e._o, d = n === h.minYear, u = n === h.maxYear, c = '<div id="' + s + '" class="pika-title" role="heading" aria-live="assertive">', f = !0, g = !0, m = [], p = 0; p < 12; p++) m.push('<option value="' + (n === i ? p - t : 12 + p - t) + '"' + (p === a ? ' selected="selected"' : "") + (d && p < h.minMonth || u && p > h.maxMonth ? ' disabled="disabled"' : "") + ">" + h.i18n.months[p] + "</option>");
		for (r = '<div class="pika-label">' + h.i18n.months[a] + '<select class="pika-select pika-select-month" tabindex="-1">' + m.join("") + "</select></div>", o = y(h.yearRange) ? (p = h.yearRange[0], h.yearRange[1] + 1) : (p = n - h.yearRange, 1 + n + h.yearRange), m = []; p < o && p <= h.maxYear; p++) p >= h.minYear && m.push('<option value="' + p + '"' + (p === n ? ' selected="selected"' : "") + ">" + p + "</option>");
		return l = '<div class="pika-label">' + n + h.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + m.join("") + "</select></div>", h.showMonthAfterYear ? c += l + r : c += r + l, d && (0 === a || h.minMonth >= a) && (f = !1), u && (11 === a || h.maxMonth <= a) && (g = !1), 0 === t && (c += '<button class="pika-prev' + (f ? "" : " is-disabled") + '" type="button">' + h.i18n.previousMonth + "</button>"), t === e._o.numberOfMonths - 1 && (c += '<button class="pika-next' + (g ? "" : " is-disabled") + '" type="button">' + h.i18n.nextMonth + "</button>"), c + "</div>"
	}

	function q(e, t, n) {
		return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + n + '">' + function (e) {
			var t, n = [];
			for (e.showWeekNumber && n.push("<th></th>"), t = 0; t < 7; t++) n.push('<th scope="col"><abbr title="' + a(e, t) + '">' + a(e, t, !0) + "</abbr></th>");
			return "<thead><tr>" + (e.isRTL ? n.reverse() : n).join("") + "</tr></thead>"
		}(e) + ("<tbody>" + t.join("") + "</tbody>") + "</table>"
	}

	function e(e) {
		var a = this,
			i = a.config(e);
		a._onMouseDown = function (e) {
			if (a._v) {
				var t = (e = e || window.event).target || e.srcElement;
				if (t)
					if (o(t, "is-disabled") || (!o(t, "pika-button") || o(t, "is-empty") || o(t.parentNode, "is-disabled") ? o(t, "pika-prev") ? a.prevMonth() : o(t, "pika-next") && a.nextMonth() : (a.setDate(new Date(t.getAttribute("data-pika-year"), t.getAttribute("data-pika-month"), t.getAttribute("data-pika-day"))), i.bound && d(function () {
						a.hide(), i.blurFieldOnSelect && i.field && i.field.blur()
					}, 100))), o(t, "pika-select")) a._c = !0;
					else {
						if (!e.preventDefault) return e.returnValue = !1;
						e.preventDefault()
					}
			}
		}, a._onChange = function (e) {
			var t = (e = e || window.event).target || e.srcElement;
			t && (o(t, "pika-select-month") ? a.gotoMonth(t.value) : o(t, "pika-select-year") && a.gotoYear(t.value))
		}, a._onKeyChange = function (e) {
			if (e = e || window.event, a.isVisible()) switch (e.keyCode) {
				case 13:
				case 27:
					i.field && i.field.blur();
					break;
				case 37:
					a.adjustDate("subtract", 1);
					break;
				case 38:
					a.adjustDate("subtract", 7);
					break;
				case 39:
					a.adjustDate("add", 1);
					break;
				case 40:
					a.adjustDate("add", 7);
					break;
				case 8:
				case 46:
					a.setDate(null)
			}
		}, a._parseFieldValue = function () {
			if (!i.field || !i.field.value) return null;

			if (i.parse) return i.parse(i.field.value, i.format);
			if (z) {
				var e = L(i.field.value, i.format, i.formatStrict);
				return e && e.isValid() ? e.toDate() : null;
			}
			return new Date(Date.parse(i.field.value));
		}, a._onInputChange = function (e) {
			var t;
			e.firedBy !== a && (t = a._parseFieldValue(), P(t) && a.setDate(t), a._v || a.show())
		}, a._onInputFocus = function () {
			a.show()
		}, a._onInputClick = function () {
			a.show()
		}, a._onInputBlur = function () {
			var e = g.activeElement;
			do {
				if (o(e, "pika-single")) return
			} while (e = e.parentNode);
			a._c || (a._b = d(function () {
				a.hide()
			}, 50)), a._c = !1
		}, a._onClick = function (e) {
			var t = (e = e || window.event).target || e.srcElement,
				n = t;
			if (t) {
				!r && o(t, "pika-select") && (t.onchange || (t.setAttribute("onchange", "return;"), s(t, "change", a._onChange)));
				do {
					if (o(n, "pika-single") || n === i.trigger) return
				} while (n = n.parentNode);
				a._v && t !== i.trigger && n !== i.trigger && a.hide()
			}
		}, a.el = g.createElement("div"), a.el.className = "pika-single" + (i.isRTL ? " is-rtl" : "") + (i.theme ? " " + i.theme : ""), s(a.el, "mousedown", a._onMouseDown, !0), s(a.el, "touchend", a._onMouseDown, !0), s(a.el, "change", a._onChange), i.keyboardInput && s(g, "keydown", a._onKeyChange), i.field && (i.container ? i.container.appendChild(a.el) : i.bound ? g.body.appendChild(a.el) : i.field.parentNode.insertBefore(a.el, i.field.nextSibling), s(i.field, "change", a._onInputChange), i.defaultDate || (i.defaultDate = a._parseFieldValue(), i.setDefaultDate = !0));
		var t = i.defaultDate;
		P(t) ? i.setDefaultDate ? a.setDate(t, !0) : a.gotoDate(t) : a.gotoDate(new Date), i.bound ? (this.hide(), a.el.className += " is-bound", s(i.trigger, "click", a._onInputClick), s(i.trigger, "focus", a._onInputFocus), s(i.trigger, "blur", a._onInputBlur)) : this.show()
	}
	var z = "function" == typeof L,
		r = !!window.addEventListener,
		g = window.document,
		d = window.setTimeout,
		l = function (e, t, n) {
			var a, i;
			for (a in t) (i = void 0 !== e[a]) && "object" == typeof t[a] && null !== t[a] && void 0 === t[a].nodeName ? P(t[a]) ? n && (e[a] = new Date(t[a].getTime())) : y(t[a]) ? n && (e[a] = t[a].slice(0)) : e[a] = l({}, t[a], n) : !n && i || (e[a] = t[a]);
			return e
		},
		u = {
			field: null,
			bound: void 0,
			ariaLabel: "Use the arrow keys to pick a date",
			position: "bottom left",
			reposition: !0,
			format: "YYYY-MM-DD",
			toString: null,
			parse: null,
			defaultDate: null,
			setDefaultDate: !1,
			firstDay: 0,
			firstWeekOfYearMinDays: 4,
			formatStrict: !1,
			minDate: null,
			maxDate: null,
			yearRange: 10,
			showWeekNumber: !1,
			pickWholeWeek: !1,
			minYear: 0,
			maxYear: 9999,
			minMonth: void 0,
			maxMonth: void 0,
			startRange: null,
			endRange: null,
			isRTL: !1,
			yearSuffix: "",
			showMonthAfterYear: !1,
			showDaysInNextAndPreviousMonths: !1,
			enableSelectionDaysInNextAndPreviousMonths: !1,
			numberOfMonths: 1,
			mainCalendar: "left",
			container: void 0,
			blurFieldOnSelect: !0,
			i18n: {
				previousMonth: "Previous Month",
				nextMonth: "Next Month",
				months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
			},
			theme: null,
			events: [],
			onSelect: null,
			onOpen: null,
			onClose: null,
			onDraw: null,
			keyboardInput: !0
		};
	return e.prototype = {
		config: function (e) {
			this._o || (this._o = l({}, u, !0));
			var t = l(this._o, e, !0);
			t.isRTL = !!t.isRTL, t.field = t.field && t.field.nodeName ? t.field : null, t.theme = "string" == typeof t.theme && t.theme ? t.theme : null, t.bound = !!(void 0 !== t.bound ? t.field && t.bound : t.field), t.trigger = t.trigger && t.trigger.nodeName ? t.trigger : t.field, t.disableWeekends = !!t.disableWeekends, t.disableDayFn = "function" == typeof t.disableDayFn ? t.disableDayFn : null;
			var n, a = parseInt(t.numberOfMonths, 10) || 1;
			return t.numberOfMonths = 4 < a ? 4 : a, P(t.minDate) || (t.minDate = !1), P(t.maxDate) || (t.maxDate = !1), t.minDate && t.maxDate && t.maxDate < t.minDate && (t.maxDate = t.minDate = !1), t.minDate && this.setMinDate(t.minDate), t.maxDate && this.setMaxDate(t.maxDate), y(t.yearRange) ? (n = (new Date).getFullYear() - 10, t.yearRange[0] = parseInt(t.yearRange[0], 10) || n, t.yearRange[1] = parseInt(t.yearRange[1], 10) || n) : (t.yearRange = Math.abs(parseInt(t.yearRange, 10)) || u.yearRange, 100 < t.yearRange && (t.yearRange = 100)), t
		},
		toString: function (e) {
			return e = e || this._o.format, P(this._d) ? this._o.toString ? this._o.toString(this._d, e) : z ? L(this._d).format(e) : this._d.toDateString() : ""
		},
		getMoment: function () {
			return z ? L(this._d) : null
		},
		setMoment: function (e, t) {
			z && L.isMoment(e) && this.setDate(e.toDate(), t)
		},
		getDate: function () {
			return P(this._d) ? new Date(this._d.getTime()) : null
		},
		setDate: function (e, t) {
			if (!e) {
				this._d = null;
				if (this._o.field) {
					this._o.field.value = "";
					i(this._o.field, "change", { firedBy: this });
				}
				return this.draw();
			}

			var n, a;

			if (typeof e === "string") {
				var match = e.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
				if (match) {
					e = new Date(match[3], match[2] - 1, match[1]);
				} else {
					e = new Date(Date.parse(e));
				}
			}

			if (P(e)) {
				n = this._o.minDate;
				a = this._o.maxDate;
				if (P(n) && e < n) e = n;
				else if (P(a) && a < e) e = a;

				this._d = new Date(e.getTime());
				B(this._d);
				this.gotoDate(this._d);

				if (this._o.field) {
					const parts = this.toString('yyyy-MM-dd').split('.');
					this._o.field.value = `${parts[2]}-${parts[1]}-${parts[0]}`
					i(this._o.field, "change", { firedBy: this });
				}

				if (!t && typeof this._o.onSelect === "function") {
					this._o.onSelect.call(this, this.getDate());
				}
			}
		},
		clear: function () {
			this.setDate(null)
		},
		gotoDate: function (e) {
			var t, n, a, i = !0;
			P(e) && (this.calendars && (t = new Date(this.calendars[0].year, this.calendars[0].month, 1), n = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1), a = e.getTime(), n.setMonth(n.getMonth() + 1), n.setDate(n.getDate() - 1), i = a < t.getTime() || n.getTime() < a), i && (this.calendars = [{
				month: e.getMonth(),
				year: e.getFullYear()
			}], "right" === this._o.mainCalendar && (this.calendars[0].month += 1 - this._o.numberOfMonths)), this.adjustCalendars())
		},
		adjustDate: function (e, t) {
			var n, a = this.getDate() || new Date,
				i = 24 * parseInt(t) * 60 * 60 * 1e3;
			"add" === e ? n = new Date(a.valueOf() + i) : "subtract" === e && (n = new Date(a.valueOf() - i)), this.setDate(n)
		},
		adjustCalendars: function () {
			this.calendars[0] = n(this.calendars[0]);
			for (var e = 1; e < this._o.numberOfMonths; e++) this.calendars[e] = n({
				month: this.calendars[0].month + e,
				year: this.calendars[0].year
			});
			this.draw()
		},
		gotoToday: function () {
			this.gotoDate(new Date)
		},
		gotoMonth: function (e) {
			isNaN(e) || (this.calendars[0].month = parseInt(e, 10), this.adjustCalendars())
		},
		nextMonth: function () {
			this.calendars[0].month++, this.adjustCalendars()
		},
		prevMonth: function () {
			this.calendars[0].month--, this.adjustCalendars()
		},
		gotoYear: function (e) {
			isNaN(e) || (this.calendars[0].year = parseInt(e, 10), this.adjustCalendars())
		},
		setMinDate: function (e) {
			e instanceof Date ? (B(e), this._o.minDate = e, this._o.minYear = e.getFullYear(), this._o.minMonth = e.getMonth()) : (this._o.minDate = u.minDate, this._o.minYear = u.minYear, this._o.minMonth = u.minMonth, this._o.startRange = u.startRange), this.draw()
		},
		setMaxDate: function (e) {
			e instanceof Date ? (B(e), this._o.maxDate = e, this._o.maxYear = e.getFullYear(), this._o.maxMonth = e.getMonth()) : (this._o.maxDate = u.maxDate, this._o.maxYear = u.maxYear, this._o.maxMonth = u.maxMonth, this._o.endRange = u.endRange), this.draw()
		},
		setStartRange: function (e) {
			this._o.startRange = e
		},
		setEndRange: function (e) {
			this._o.endRange = e
		},
		draw: function (e) {
			if (this._v || e) {
				var t, n = this._o,
					a = n.minYear,
					i = n.maxYear,
					s = n.minMonth,
					o = n.maxMonth,
					r = "";
				this._y <= a && (this._y = a, !isNaN(s) && this._m < s && (this._m = s)), this._y >= i && (this._y = i, !isNaN(o) && this._m > o && (this._m = o));
				for (var l = 0; l < n.numberOfMonths; l++) t = "pika-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2), r += '<div class="pika-lendar">' + h(this, l, this.calendars[l].year, this.calendars[l].month, this.calendars[0].year, t) + this.render(this.calendars[l].year, this.calendars[l].month, t) + "</div>";
				this.el.innerHTML = r, n.bound && "hidden" !== n.field.type && d(function () {
					n.trigger.focus()
				}, 1), "function" == typeof this._o.onDraw && this._o.onDraw(this), n.bound && n.field.setAttribute("aria-label", n.ariaLabel)
			}
		},
		adjustPosition: function () {
			var e, t, n, a, i, s, o, r, l, h, d, u;
			if (!this._o.container) {
				if (this.el.style.position = "absolute", t = e = this._o.trigger, n = this.el.offsetWidth, a = this.el.offsetHeight, i = window.innerWidth || g.documentElement.clientWidth, s = window.innerHeight || g.documentElement.clientHeight, o = window.pageYOffset || g.body.scrollTop || g.documentElement.scrollTop, u = d = !0, "function" == typeof e.getBoundingClientRect) r = (h = e.getBoundingClientRect()).left + window.pageXOffset, l = h.bottom + window.pageYOffset;
				else
					for (r = t.offsetLeft, l = t.offsetTop + t.offsetHeight; t = t.offsetParent;) r += t.offsetLeft, l += t.offsetTop;
				(this._o.reposition && i < r + n || -1 < this._o.position.indexOf("right") && 0 < r - n + e.offsetWidth) && (r = r - n + e.offsetWidth, d = !1), (this._o.reposition && s + o < l + a || -1 < this._o.position.indexOf("top") && 0 < l - a - e.offsetHeight) && (l = l - a - e.offsetHeight, u = !1), this.el.style.left = r + "px", this.el.style.top = l + "px", c(this.el, d ? "left-aligned" : "right-aligned"), c(this.el, u ? "bottom-aligned" : "top-aligned"), f(this.el, d ? "right-aligned" : "left-aligned"), f(this.el, u ? "top-aligned" : "bottom-aligned")
			}
		},
		render: function (e, t, n) {
			var a = this._o,
				i = new Date,
				s = H(e, t),
				o = new Date(e, t, 1).getDay(),
				r = [],
				l = [];
			B(i), 0 < a.firstDay && (o -= a.firstDay) < 0 && (o += 7);
			for (var h = 0 === t ? 11 : t - 1, d = 11 === t ? 0 : t + 1, u = 0 === t ? e - 1 : e, c = 11 === t ? e + 1 : e, f = H(u, h), g = s + o, m = g; 7 < m;) m -= 7;
			g += 7 - m;
			for (var p, y, D, b, v, _, w, k, M = !1, x = 0, R = 0; x < g; x++) {
				var N = new Date(e, t, x - o + 1),
					S = !!P(this._d) && V(N, this._d),
					C = V(N, i),
					I = -1 !== a.events.indexOf(N.toDateString()),
					T = x < o || s + o <= x,
					Y = x - o + 1,
					E = t,
					O = e,
					j = a.startRange && V(a.startRange, N),
					W = a.endRange && V(a.endRange, N),
					F = a.startRange && a.endRange && a.startRange < N && N < a.endRange;
				T && (O = x < o ? (Y = f + Y, E = h, u) : (Y -= s, E = d, c));
				var A = {
					day: Y,
					month: E,
					year: O,
					hasEvent: I,
					isSelected: S,
					isToday: C,
					isDisabled: a.minDate && N < a.minDate || a.maxDate && N > a.maxDate || a.disableWeekends && (0 === (k = N.getDay()) || 6 === k) || a.disableDayFn && a.disableDayFn(N),
					isEmpty: T,
					isStartRange: j,
					isEndRange: W,
					isInRange: F,
					showDaysInNextAndPreviousMonths: a.showDaysInNextAndPreviousMonths,
					enableSelectionDaysInNextAndPreviousMonths: a.enableSelectionDaysInNextAndPreviousMonths
				};
				a.pickWholeWeek && S && (M = !0), l.push(J(A)), 7 == ++R && (a.showWeekNumber && l.unshift((D = x - o, b = t, v = e, _ = a.firstWeekOfYearMinDays, w = new Date(v, b, D), '<td class="pika-week">' + (z ? L(w).isoWeek() : K(w, _)) + "</td>")), r.push((p = l, y = a.isRTL, '<tr class="pika-row' + (a.pickWholeWeek ? " pick-whole-week" : "") + (M ? " is-selected" : "") + '">' + (y ? p.reverse() : p).join("") + "</tr>")), R = 0, M = !(l = []))
			}
			return q(a, r, n)
		},
		isVisible: function () {
			return this._v
		},
		show: function () {
			this.isVisible() || (this._v = !0, this.draw(), f(this.el, "is-hidden"), this._o.bound && (s(g, "click", this._onClick), this.adjustPosition()), "function" == typeof this._o.onOpen && this._o.onOpen.call(this))
		},
		hide: function () {
			var e = this._v;
			!1 !== e && (this._o.bound && t(g, "click", this._onClick), this._o.container || (this.el.style.position = "static", this.el.style.left = "auto", this.el.style.top = "auto"), c(this.el, "is-hidden"), this._v = !1, void 0 !== e && "function" == typeof this._o.onClose && this._o.onClose.call(this))
		},
		destroy: function () {
			var e = this._o;
			this.hide(), t(this.el, "mousedown", this._onMouseDown, !0), t(this.el, "touchend", this._onMouseDown, !0), t(this.el, "change", this._onChange), e.keyboardInput && t(g, "keydown", this._onKeyChange), e.field && (t(e.field, "change", this._onInputChange), e.bound && (t(e.trigger, "click", this._onInputClick), t(e.trigger, "focus", this._onInputFocus), t(e.trigger, "blur", this._onInputBlur))), this.el.parentNode && this.el.parentNode.removeChild(this.el)
		}
	}, e
});


let inputDate = document.querySelectorAll('.input-date input');

function formatDate(date) {
	const d = new Date(date);
	const day = String(d.getDate()).padStart(2, '0');
	const month = String(d.getMonth() + 1).padStart(2, '0');
	const year = d.getFullYear();
	return `${day}.${month}.${year}`;
}

if (inputDate) {
	inputDate.forEach(input => {
		new Pikaday({
			field: input,
			firstDay: 1,
			minDate: new Date(),
			maxDate: new Date(2100, 12 - 1, 31), // месяц 11 = декабрь
			yearRange: [new Date().getFullYear(), 2100],
			i18n: {
				previousMonth: 'Предыдущий месяц',
				nextMonth: 'Следующий месяц',
				months: [
					'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
					'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
				],
				weekdays: [
					'Воскресенье', 'Понедельник', 'Вторник', 'Среда',
					'Четверг', 'Пятница', 'Суббота'
				],
				weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
			},
			onSelect: function (date) {
				this._o.field.classList.add('selected')
				console.log(this._o.field.value);
			},
			toString(date, format) {
				const day = ('0' + date.getDate()).slice(-2);
				const month = ('0' + (date.getMonth() + 1)).slice(-2);
				const year = date.getFullYear();
				return `${day}.${month}.${year}`;
			},
			parse(dateString, format) {
				const parts = dateString.split('.');
				const day = parseInt(parts[0], 10);
				const month = parseInt(parts[1], 10) - 1;
				const year = parseInt(parts[2], 10);
				return new Date(year, month, day);
			}
		})
	})

}


class TransferElements {
	constructor(...objectsWithParameters) {
		if (objectsWithParameters.length === 0) {
			throw TypeError('at least one object with parameters must be specified for the constructor');
		}

		const sourceElementsData = [];

		const validatedObjectsWithParameters = objectsWithParameters.map(
			(objectWithParameters) => {
				if (
					this.#getObjectType(objectWithParameters) !== '[object Object]'
				) {
					throw TypeError(`the arguments specified for the constructor must be objects of type 'Object'`);
				}

				['sourceElement', 'breakpoints'].forEach((parameterKey) => {
					if (!(Object.hasOwn(objectWithParameters, parameterKey))) {
						throw TypeError(`the '${parameterKey}' parameter is not specified for the main object`);
					}
				});

				const { sourceElement, breakpoints } = objectWithParameters;

				if (!(sourceElement instanceof Element)) {
					throw TypeError(`the value specified for the 'sourceElement' parameter must be an object of type 'Element'`);
				}

				if (sourceElementsData.some(data => data.sourceElement === sourceElement)) {
					throw TypeError(`there can only be one object in the constructor with such a 'sourceElement': '${sourceElement.cloneNode().outerHTML}'`);
				}

				const initialParent = sourceElement.parentElement;
				const initialNextSibling = sourceElement.nextElementSibling;

				sourceElementsData.push({
					sourceElement,
					initialParent,
					initialNextSibling
				});

				objectWithParameters.breakpoints = this.#assembleBreakpoints(
					breakpoints,
					sourceElement
				);

				return objectWithParameters;
			}
		);

		const sortedBreakpointTriggers = [...(
			validatedObjectsWithParameters.reduce(
				(collection, { breakpoints }) => {
					Object.keys(breakpoints).forEach((breakpointTrigger) => {
						if (Number(breakpointTrigger)) {
							collection.add(breakpointTrigger);
						}
					});

					return collection;
				},

				new Set()
			).add('default')
		)].sort((a, b) => a - b);

		const storageOfBreakpoints = sortedBreakpointTriggers.reduce(
			(storage, breakpointTrigger) => {
				storage.set(breakpointTrigger, []);

				return storage;
			},

			new Map()
		);

		validatedObjectsWithParameters.forEach(
			({ sourceElement, breakpoints }) => {
				Object.entries(breakpoints).forEach(
					([breakpointTrigger, { targetElement, targetPosition }]) => {
						storageOfBreakpoints.get(breakpointTrigger).push({
							sourceElement,
							targetElement,
							targetPosition
						});
					}
				);
			}
		);

		storageOfBreakpoints.forEach((breakpointObjects) => {
			this.#sortBreakpointObjects(breakpointObjects);
			this.#removeSourceElements(breakpointObjects);
			this.#insertSourceElements(breakpointObjects, true);
			breakpointObjects.length = 0;
			sourceElementsData.forEach(({ sourceElement }) => {
				breakpointObjects.push(this.#generateBreakpointObject(
					sourceElement,
					true
				));
			});
			this.#sortBreakpointObjects(breakpointObjects);
		});

		let previousBreakpointTrigger = 'default';

		const resizeObserver = new ResizeObserver(
			([{ borderBoxSize: [{ inlineSize }], target }]) => {
				const currentWidth = inlineSize + this.#getScrollbarWidth(target);
				const currentBreakpointTrigger = this.#getBreakpointTrigger(
					sortedBreakpointTriggers,
					currentWidth
				);

				if (previousBreakpointTrigger !== currentBreakpointTrigger) {
					const breakpointObjects = storageOfBreakpoints.get(
						currentBreakpointTrigger
					);

					this.#removeSourceElements(breakpointObjects);

					if (currentBreakpointTrigger === 'default') {
						sourceElementsData.forEach(({ sourceElement, initialParent, initialNextSibling }) => {
							if (initialParent) {
								try {
									if (initialNextSibling && initialNextSibling.parentNode === initialParent) {
										initialParent.insertBefore(sourceElement, initialNextSibling);
									} else {
										initialParent.appendChild(sourceElement);
									}
								} catch (e) {
									console.error('TransferElements: insertBefore failed', {
										sourceElement,
										initialParent,
										initialNextSibling,
										error: e
									});
									initialParent.appendChild(sourceElement);
								}
							}
						});
					} else {
						this.#insertSourceElements(breakpointObjects, false);
					}

					previousBreakpointTrigger = currentBreakpointTrigger;
				}
			}
		);

		resizeObserver.observe(document.documentElement);
	}

	#assembleBreakpoints(breakpoints, sourceElement) {
		if (this.#getObjectType(breakpoints) !== '[object Object]') {
			throw TypeError(`the value specified for the 'breakpoints' parameter must be an object of type 'Object'`);
		}

		const breakpointEntries = Object.entries(breakpoints);

		if (breakpointEntries.length === 0) {
			throw TypeError(`at least one breakpoint must be specified for the 'breakpoints' object`);
		}

		const validatedBreakpoints = Object.fromEntries(
			breakpointEntries.map(
				([breakpointTrigger, breakpointObject]) => {
					const breakpointTriggerAsNumber = Number(breakpointTrigger);

					if (
						!breakpointTriggerAsNumber ||
						breakpointTriggerAsNumber <= 0 ||
						breakpointTriggerAsNumber > Number.MAX_SAFE_INTEGER
					) {
						throw RangeError(`the breakpoint trigger must be a safe (integer or fractional) number greater than zero`);
					}

					if (this.#getObjectType(breakpointObject) !== '[object Object]') {
						throw TypeError(`the breakpoint object must be of type 'Object'`);
					}

					if (!Object.hasOwn(breakpointObject, 'targetElement')) {
						throw TypeError(`the 'targetElement' parameter is not specified for the breakpoint object`);
					}

					const { targetElement, targetPosition } = breakpointObject;

					if (!(targetElement instanceof Element)) {
						throw TypeError(`the value specified for the 'targetElement' parameter must be an object of type 'Element'`);
					}

					if (sourceElement === targetElement) {
						throw TypeError(`the value specified for the 'targetElement' parameter must be different from the value specified for the 'sourceElement' parameter`);
					}

					if (this.#isTargetElementDescendantOfSourceElement(
						targetElement, sourceElement
					)) {
						throw TypeError(`the element that is specified as the value for the 'targetElement' parameter must not be a descendant of the element specified as the value for the 'sourceElement' parameter`);
					}

					if (this.#isTagOfTargetElementSelfClosing(targetElement)) {
						throw TypeError(`the element specified as the value for the 'targetElement' parameter must be a paired tag`);
					}

					let targetPos = typeof breakpointTrigger == 'number' ? breakpointTrigger : 0;

					if (typeof breakpointTrigger != 'number') {
						if (breakpointTrigger == 'first') {
							targetPos = 0
						} else if (breakpointTrigger == 'last') {
							targetPos = targetElement.children.length;
						} else {
							targetPos = 0;
						}
					}

					return [
						breakpointTriggerAsNumber,
						{
							targetPosition: targetPos,
							...breakpointObject
						}
					];
				}
			)
		);

		validatedBreakpoints.default = this.#generateBreakpointObject(
			sourceElement,
			false
		);

		return validatedBreakpoints;
	}

	#getChildElementsOfTargetElement(targetElement) {
		return targetElement.children;
	}

	#getBreakpointTrigger(breakpointTriggers, currentWidth) {
		let startIndex = 0;
		let endIndex = breakpointTriggers.length - 2;
		let savedBreakpointTrigger;

		while (startIndex <= endIndex) {
			const middleIndex = Math.floor((startIndex + endIndex) / 2);
			const guessedBreakpointTrigger = breakpointTriggers[middleIndex];

			if (guessedBreakpointTrigger == currentWidth) {
				return guessedBreakpointTrigger;
			} else if (guessedBreakpointTrigger > currentWidth) {
				endIndex = middleIndex - 1;
			} else {
				startIndex = middleIndex + 1;
			}

			if ((guessedBreakpointTrigger - currentWidth) > 0) {
				savedBreakpointTrigger = guessedBreakpointTrigger;
			}
		}

		return savedBreakpointTrigger ?? 'default';
	}

	#getScrollbarWidth(observableElement) {
		const viewportWidth = window.innerWidth;
		const widthOfObservableElement = Math.min(
			observableElement.clientWidth,
			observableElement.offsetWidth
		);

		let scrollbarWidth = 0;

		if (widthOfObservableElement !== viewportWidth) {
			scrollbarWidth += viewportWidth - widthOfObservableElement;
		}

		return scrollbarWidth;
	}

	#getObjectType(object) {
		return Object.prototype.toString.call(object);
	}

	#isTargetElementDescendantOfSourceElement(
		targetElement,
		sourceElement
	) {
		while (targetElement = targetElement.parentElement) {
			if (targetElement === sourceElement) {
				return true;
			}
		}

		return false;
	}

	#isTagOfTargetElementSelfClosing(targetElement) {
		return !new RegExp(/<\/[a-zA-Z]+>$/).test(targetElement.outerHTML);
	}

	#sortBreakpointObjects(breakpointObjects) {
		if (breakpointObjects.length > 1) {
			breakpointObjects.sort((a, b) => (
				a.targetPosition - b.targetPosition
			));
		}
	}

	#removeSourceElements(breakpointObjects) {
		breakpointObjects.forEach(({ sourceElement }) => {
			sourceElement.remove();
		});
	}

	#insertSourceElements(
		breakpointObjects,
		hasCheckOfMaximumTargetPosition
	) {
		breakpointObjects.forEach(
			({ sourceElement, targetElement, targetPosition }) => {
				const childElementsOfTargetElement = (
					this.#getChildElementsOfTargetElement(targetElement)
				);

				if (hasCheckOfMaximumTargetPosition) {
					this.#throwExceptionIfMaximumTargetPositionIsExceeded(
						childElementsOfTargetElement,
						targetPosition
					);
				}

				const childElementOfTargetElement = (
					childElementsOfTargetElement[targetPosition]
				);

				if (childElementOfTargetElement && childElementOfTargetElement.parentNode === targetElement) {
					targetElement.insertBefore(sourceElement, childElementOfTargetElement);
				} else {
					targetElement.append(sourceElement);
				}

			}
		);
	}

	#throwExceptionIfMaximumTargetPositionIsExceeded(
		childElementsOfTargetElement,
		targetPosition
	) {
		const maximumTargetPosition = childElementsOfTargetElement.length;
	}

	#generateBreakpointObject(sourceElement, isComplete) {
		const parentElementOfSourceElement = sourceElement.parentElement;
		const currentIndex = parentElementOfSourceElement ? Array.from(parentElementOfSourceElement.children).indexOf(sourceElement) : -1;

		const breakpointObject = {
			targetElement: parentElementOfSourceElement,
			targetPosition: currentIndex
		};

		if (isComplete) {
			breakpointObject.sourceElement = sourceElement;
		}

		return breakpointObject;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	let dataDa = document.querySelectorAll('[data-da]');

	dataDa.forEach(item => {
		let daMedia = item.getAttribute('data-da').split('|');
		let breakpoints = {};

		daMedia.forEach(media => {
			let [daTarget, daBreakpoint, daPos] = media.split(',');

			if (daPos === 'first') daPos = 0;

			function getTargetElement(selector, context = document) {
				let parts = selector.trim().split(' ');
				let currentContext = context;

				for (let part of parts) {
					let match = part.match(/(.+?)\[(\d+)\]/);
					if (match) {
						let baseSelector = match[1];
						let index = parseInt(match[2]);
						let elements = currentContext.querySelectorAll(baseSelector);
						currentContext = elements[index] || null;
					} else {
						currentContext = currentContext.querySelector(part);
					}
					if (!currentContext) break;
				}
				return currentContext;
			}

			let daTargetElement = getTargetElement(daTarget);

			if (daTargetElement) {
				breakpoints[daBreakpoint] = {
					targetElement: daTargetElement,
					targetPosition: daPos
				};
			}
		});

		new TransferElements({
			sourceElement: item,
			breakpoints: breakpoints
		});
	});
});

/**
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lgHash = e() }(this, (function () { "use strict"; var t = function () { return (t = Object.assign || function (t) { for (var e, i = 1, o = arguments.length; i < o; i++)for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]); return t }).apply(this, arguments) }, e = "lgAfterSlide", i = "lgAfterClose", o = { hash: !0, galleryId: "1", customSlideName: !1 }; return function () { function s(e, i) { return this.core = e, this.$LG = i, this.settings = t(t({}, o), this.core.settings), this } return s.prototype.init = function () { var t = this; this.settings.hash && (this.oldHash = window.location.hash, setTimeout((function () { t.buildFromHash() }), 100), this.core.LGel.on(e + ".hash", this.onAfterSlide.bind(this)), this.core.LGel.on(i + ".hash", this.onCloseAfter.bind(this)), this.$LG(window).on("hashchange.lg.hash.global" + this.core.lgId, this.onHashchange.bind(this))) }, s.prototype.onAfterSlide = function (t) { var e = this.core.galleryItems[t.detail.index].slideName; e = this.settings.customSlideName && e || t.detail.index, history.replaceState ? history.replaceState(null, "", window.location.pathname + window.location.search + "#lg=" + this.settings.galleryId + "&slide=" + e) : window.location.hash = "lg=" + this.settings.galleryId + "&slide=" + e }, s.prototype.getIndexFromUrl = function (t) { void 0 === t && (t = window.location.hash); var e = t.split("&slide=")[1], i = 0; if (this.settings.customSlideName) for (var o = 0; o < this.core.galleryItems.length; o++) { if (this.core.galleryItems[o].slideName === e) { i = o; break } } else i = parseInt(e, 10); return isNaN(i) ? 0 : i }, s.prototype.buildFromHash = function () { var t = window.location.hash; if (t.indexOf("lg=" + this.settings.galleryId) > 0) { this.$LG(document.body).addClass("lg-from-hash"); var e = this.getIndexFromUrl(t); return this.core.openGallery(e), !0 } }, s.prototype.onCloseAfter = function () { this.oldHash && this.oldHash.indexOf("lg=" + this.settings.galleryId) < 0 ? history.replaceState ? history.replaceState(null, "", this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "" }, s.prototype.onHashchange = function () { if (this.core.lgOpened) { var t = window.location.hash, e = this.getIndexFromUrl(t); t.indexOf("lg=" + this.settings.galleryId) > -1 ? this.core.slide(e, !1, !1) : this.core.lGalleryOn && this.core.closeGallery() } }, s.prototype.closeGallery = function () { this.settings.hash && this.$LG(document.body).removeClass("lg-from-hash") }, s.prototype.destroy = function () { this.core.LGel.off(".lg.hash"), this.core.LGel.off(".hash"), this.$LG(window).off("hashchange.lg.hash.global" + this.core.lgId) }, s }() }));

/**
 * lightgallery | 2.8.1 | November 13th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lgThumbnail = e() }(this, (function () { "use strict"; var t = function () { return (t = Object.assign || function (t) { for (var e, i = 1, s = arguments.length; i < s; i++)for (var h in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, h) && (t[h] = e[h]); return t }).apply(this, arguments) }, e = { thumbnail: !0, animateThumb: !0, currentPagerPosition: "middle", alignThumbnails: "middle", thumbWidth: 100, thumbHeight: "80px", thumbMargin: 5, appendThumbnailsTo: ".lg-components", toggleThumb: !1, enableThumbDrag: !0, enableThumbSwipe: !0, thumbnailSwipeThreshold: 10, loadYouTubeThumbnail: !0, youTubeThumbSize: 1, thumbnailPluginStrings: { toggleThumbnails: "Toggle thumbnails" } }, i = "lgContainerResize", s = "lgUpdateSlides", h = "lgBeforeOpen", n = "lgBeforeSlide"; return function () { function o(t, e) { return this.thumbOuterWidth = 0, this.thumbTotalWidth = 0, this.translateX = 0, this.thumbClickable = !1, this.core = t, this.$LG = e, this } return o.prototype.init = function () { this.settings = t(t({}, e), this.core.settings), this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin), this.translateX = 0, this.setAnimateThumbStyles(), this.core.settings.allowMediaOverlap || (this.settings.toggleThumb = !1), this.settings.thumbnail && (this.build(), this.settings.animateThumb ? (this.settings.enableThumbDrag && this.enableThumbDrag(), this.settings.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toggleThumbBar(), this.thumbKeyPress()) }, o.prototype.build = function () { var t = this; this.setThumbMarkup(), this.manageActiveClassOnSlideChange(), this.$lgThumb.first().on("click.lg touchend.lg", (function (e) { var i = t.$LG(e.target); i.hasAttribute("data-lg-item-id") && setTimeout((function () { if (t.thumbClickable && !t.core.lgBusy) { var e = parseInt(i.attr("data-lg-item-id")); t.core.slide(e, !1, !0, !1) } }), 50) })), this.core.LGel.on(n + ".thumb", (function (e) { var i = e.detail.index; t.animateThumb(i) })), this.core.LGel.on(h + ".thumb", (function () { t.thumbOuterWidth = t.core.outer.get().offsetWidth })), this.core.LGel.on(s + ".thumb", (function () { t.rebuildThumbnails() })), this.core.LGel.on(i + ".thumb", (function () { t.core.lgOpened && setTimeout((function () { t.thumbOuterWidth = t.core.outer.get().offsetWidth, t.animateThumb(t.core.index), t.thumbOuterWidth = t.core.outer.get().offsetWidth }), 50) })) }, o.prototype.setThumbMarkup = function () { var t = "lg-thumb-outer "; this.settings.alignThumbnails && (t += "lg-thumb-align-" + this.settings.alignThumbnails); var e = '<div class="' + t + '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>'; this.core.outer.addClass("lg-has-thumb"), ".lg-components" === this.settings.appendThumbnailsTo ? this.core.$lgComponents.append(e) : this.core.outer.append(e), this.$thumbOuter = this.core.outer.find(".lg-thumb-outer").first(), this.$lgThumb = this.core.outer.find(".lg-thumb").first(), this.settings.animateThumb && this.core.outer.find(".lg-thumb").css("transition-duration", this.core.settings.speed + "ms").css("width", this.thumbTotalWidth + "px").css("position", "relative"), this.setThumbItemHtml(this.core.galleryItems) }, o.prototype.enableThumbDrag = function () { var t = this, e = { cords: { startX: 0, endX: 0 }, isMoved: !1, newTranslateX: 0, startTime: new Date, endTime: new Date, touchMoveTime: 0 }, i = !1; this.$thumbOuter.addClass("lg-grab"), this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb", (function (s) { t.thumbTotalWidth > t.thumbOuterWidth && (s.preventDefault(), e.cords.startX = s.pageX, e.startTime = new Date, t.thumbClickable = !1, i = !0, t.core.outer.get().scrollLeft += 1, t.core.outer.get().scrollLeft -= 1, t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing")) })), this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, (function (s) { t.core.lgOpened && i && (e.cords.endX = s.pageX, e = t.onThumbTouchMove(e)) })), this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, (function () { t.core.lgOpened && (e.isMoved ? e = t.onThumbTouchEnd(e) : t.thumbClickable = !0, i && (i = !1, t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))) })) }, o.prototype.enableThumbSwipe = function () { var t = this, e = { cords: { startX: 0, endX: 0 }, isMoved: !1, newTranslateX: 0, startTime: new Date, endTime: new Date, touchMoveTime: 0 }; this.$lgThumb.on("touchstart.lg", (function (i) { t.thumbTotalWidth > t.thumbOuterWidth && (i.preventDefault(), e.cords.startX = i.targetTouches[0].pageX, t.thumbClickable = !1, e.startTime = new Date) })), this.$lgThumb.on("touchmove.lg", (function (i) { t.thumbTotalWidth > t.thumbOuterWidth && (i.preventDefault(), e.cords.endX = i.targetTouches[0].pageX, e = t.onThumbTouchMove(e)) })), this.$lgThumb.on("touchend.lg", (function () { e.isMoved ? e = t.onThumbTouchEnd(e) : t.thumbClickable = !0 })) }, o.prototype.rebuildThumbnails = function () { var t = this; this.$thumbOuter.addClass("lg-rebuilding-thumbnails"), setTimeout((function () { t.thumbTotalWidth = t.core.galleryItems.length * (t.settings.thumbWidth + t.settings.thumbMargin), t.$lgThumb.css("width", t.thumbTotalWidth + "px"), t.$lgThumb.empty(), t.setThumbItemHtml(t.core.galleryItems), t.animateThumb(t.core.index) }), 50), setTimeout((function () { t.$thumbOuter.removeClass("lg-rebuilding-thumbnails") }), 200) }, o.prototype.setTranslate = function (t) { this.$lgThumb.css("transform", "translate3d(-" + t + "px, 0px, 0px)") }, o.prototype.getPossibleTransformX = function (t) { return t > this.thumbTotalWidth - this.thumbOuterWidth && (t = this.thumbTotalWidth - this.thumbOuterWidth), t < 0 && (t = 0), t }, o.prototype.animateThumb = function (t) { if (this.$lgThumb.css("transition-duration", this.core.settings.speed + "ms"), this.settings.animateThumb) { var e = 0; switch (this.settings.currentPagerPosition) { case "left": e = 0; break; case "middle": e = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2; break; case "right": e = this.thumbOuterWidth - this.settings.thumbWidth }this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * t - 1 - e, this.translateX > this.thumbTotalWidth - this.thumbOuterWidth && (this.translateX = this.thumbTotalWidth - this.thumbOuterWidth), this.translateX < 0 && (this.translateX = 0), this.setTranslate(this.translateX) } }, o.prototype.onThumbTouchMove = function (t) { return t.newTranslateX = this.translateX, t.isMoved = !0, t.touchMoveTime = (new Date).valueOf(), t.newTranslateX -= t.cords.endX - t.cords.startX, t.newTranslateX = this.getPossibleTransformX(t.newTranslateX), this.setTranslate(t.newTranslateX), this.$thumbOuter.addClass("lg-dragging"), t }, o.prototype.onThumbTouchEnd = function (t) { t.isMoved = !1, t.endTime = new Date, this.$thumbOuter.removeClass("lg-dragging"); var e = t.endTime.valueOf() - t.startTime.valueOf(), i = t.cords.endX - t.cords.startX, s = Math.abs(i) / e; return s > .15 && t.endTime.valueOf() - t.touchMoveTime < 30 ? ((s += 1) > 2 && (s += 1), s += s * (Math.abs(i) / this.thumbOuterWidth), this.$lgThumb.css("transition-duration", Math.min(s - 1, 2) + "settings"), i *= s, this.translateX = this.getPossibleTransformX(this.translateX - i), this.setTranslate(this.translateX)) : this.translateX = t.newTranslateX, Math.abs(t.cords.endX - t.cords.startX) < this.settings.thumbnailSwipeThreshold && (this.thumbClickable = !0), t }, o.prototype.getThumbHtml = function (t, e, i) { var s, h = this.core.galleryItems[e].__slideVideoInfo || {}; s = h.youtube && this.settings.loadYouTubeThumbnail ? "//img.youtube.com/vi/" + h.youtube[1] + "/" + this.settings.youTubeThumbSize + ".jpg" : t; var n = document.createElement("div"); n.setAttribute("data-lg-item-id", e + ""), n.className = "lg-thumb-item " + (e === this.core.index ? "active" : ""), n.style.cssText = "width: " + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + "; margin-right: " + this.settings.thumbMargin + "px;"; var o = document.createElement("img"); return o.alt = i || "", o.setAttribute("data-lg-item-id", e + ""), o.src = s, n.appendChild(o), n }, o.prototype.setThumbItemHtml = function (t) { for (var e = 0; e < t.length; e++) { var i = this.getThumbHtml(t[e].thumb, e, t[e].alt); this.$lgThumb.append(i) } }, o.prototype.setAnimateThumbStyles = function () { this.settings.animateThumb && this.core.outer.addClass("lg-animate-thumb") }, o.prototype.manageActiveClassOnSlideChange = function () { var t = this; this.core.LGel.on(n + ".thumb", (function (e) { var i = t.core.outer.find(".lg-thumb-item"), s = e.detail.index; i.removeClass("active"), i.eq(s).addClass("active") })) }, o.prototype.toggleThumbBar = function () { var t = this; this.settings.toggleThumb && (this.core.outer.addClass("lg-can-toggle"), this.core.$toolbar.append('<button type="button" aria-label="' + this.settings.thumbnailPluginStrings.toggleThumbnails + '" class="lg-toggle-thumb lg-icon"></button>'), this.core.outer.find(".lg-toggle-thumb").first().on("click.lg", (function () { t.core.outer.toggleClass("lg-components-open") }))) }, o.prototype.thumbKeyPress = function () { var t = this; this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, (function (e) { t.core.lgOpened && t.settings.toggleThumb && (38 === e.keyCode ? (e.preventDefault(), t.core.outer.addClass("lg-components-open")) : 40 === e.keyCode && (e.preventDefault(), t.core.outer.removeClass("lg-components-open"))) })) }, o.prototype.destroy = function () { this.settings.thumbnail && (this.$LG(window).off(".lg.thumb.global" + this.core.lgId), this.core.LGel.off(".lg.thumb"), this.core.LGel.off(".thumb"), this.$thumbOuter.remove(), this.core.outer.removeClass("lg-has-thumb")) }, o }() }));

/**
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function (e, o) { "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).lgVideo = o() }(this, (function () { "use strict"; var e = function () { return (e = Object.assign || function (e) { for (var o, i = 1, t = arguments.length; i < t; i++)for (var s in o = arguments[i]) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s]); return e }).apply(this, arguments) }, o = { autoplayFirstVideo: !0, youTubePlayerParams: !1, vimeoPlayerParams: !1, wistiaPlayerParams: !1, gotoNextSlideOnVideoEnd: !0, autoplayVideoOnSlide: !1, videojs: !1, videojsTheme: "", videojsOptions: {} }, i = "lgHasVideo", t = "lgSlideItemLoad", s = "lgBeforeSlide", n = "lgAfterSlide", l = "lgPosterClick", r = function (e) { return Object.keys(e).map((function (o) { return encodeURIComponent(o) + "=" + encodeURIComponent(e[o]) })).join("&") }, d = function (o, i) { if (!o.youtube) return ""; var t = o.youtube[2] ? o.youtube[2].slice(1).split("&").map((function (e) { return e.split("=") })).reduce((function (e, o) { var i = o.map(decodeURIComponent), t = i[0], s = i[1]; return e[t] = s, e }), {}) : "", s = i || {}, n = e(e(e({}, { wmode: "opaque", autoplay: 0, mute: 1, enablejsapi: 1 }), s), t); return "?" + r(n) }; return function () { function a(i) { return this.core = i, this.settings = e(e({}, o), this.core.settings), this } return a.prototype.init = function () { var e = this; this.core.LGel.on(i + ".video", this.onHasVideo.bind(this)), this.core.LGel.on(l + ".video", (function () { var o = e.core.getSlideItem(e.core.index); e.loadVideoOnPosterClick(o) })), this.core.LGel.on(t + ".video", this.onSlideItemLoad.bind(this)), this.core.LGel.on(s + ".video", this.onBeforeSlide.bind(this)), this.core.LGel.on(n + ".video", this.onAfterSlide.bind(this)) }, a.prototype.onSlideItemLoad = function (e) { var o = this, i = e.detail, t = i.isFirstSlide, s = i.index; this.settings.autoplayFirstVideo && t && s === this.core.index && setTimeout((function () { o.loadAndPlayVideo(s) }), 200), !t && this.settings.autoplayVideoOnSlide && s === this.core.index && this.loadAndPlayVideo(s) }, a.prototype.onHasVideo = function (e) { var o = e.detail, i = o.index, t = o.src, s = o.html5Video; o.hasPoster || (this.appendVideos(this.core.getSlideItem(i), { src: t, addClass: "lg-object", index: i, html5Video: s }), this.gotoNextSlideOnVideoEnd(t, i)) }, a.prototype.onBeforeSlide = function (e) { if (this.core.lGalleryOn) { var o = e.detail.prevIndex; this.pauseVideo(o) } }, a.prototype.onAfterSlide = function (e) { var o = this, i = e.detail, t = i.index, s = i.prevIndex, n = this.core.getSlideItem(t); this.settings.autoplayVideoOnSlide && t !== s && n.hasClass("lg-complete") && setTimeout((function () { o.loadAndPlayVideo(t) }), 100) }, a.prototype.loadAndPlayVideo = function (e) { var o = this.core.getSlideItem(e); this.core.galleryItems[e].poster ? this.loadVideoOnPosterClick(o, !0) : this.playVideo(e) }, a.prototype.playVideo = function (e) { this.controlVideo(e, "play") }, a.prototype.pauseVideo = function (e) { this.controlVideo(e, "pause") }, a.prototype.getVideoHtml = function (e, o, i, t) { var s = "", n = this.core.galleryItems[i].__slideVideoInfo || {}, l = this.core.galleryItems[i], a = l.title || l.alt; a = a ? 'title="' + a + '"' : ""; var c = 'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen'; if (n.youtube) { var u = "lg-youtube" + i, f = d(n, this.settings.youTubePlayerParams); s = '<iframe allow="autoplay" id=' + u + ' class="lg-video-object lg-youtube ' + o + '" ' + a + ' src="' + (e.includes("youtube-nocookie.com") ? "//www.youtube-nocookie.com/" : "//www.youtube.com/") + "embed/" + (n.youtube[1] + f) + '" ' + c + "></iframe>" } else if (n.vimeo) { u = "lg-vimeo" + i; var h = function (e, o) { if (!o || !o.vimeo) return ""; var i = o.vimeo[2] || "", t = e && 0 !== Object.keys(e).length ? "&" + r(e) : "", s = ((o.vimeo[0].split("/").pop() || "").split("?")[0] || "").split("#")[0], n = o.vimeo[1] !== s; return n && (i = i.replace("/" + s, "")), "?autoplay=0&muted=1" + (n ? "&h=" + s : "") + t + ("?" == i[0] ? "&" + i.slice(1) : i || "") }(this.settings.vimeoPlayerParams, n); s = '<iframe allow="autoplay" id=' + u + ' class="lg-video-object lg-vimeo ' + o + '" ' + a + ' src="//player.vimeo.com/video/' + (n.vimeo[1] + h) + '" ' + c + "></iframe>" } else if (n.wistia) { var p = "lg-wistia" + i; h = (h = r(this.settings.wistiaPlayerParams)) ? "?" + h : "", s = '<iframe allow="autoplay" id="' + p + '" src="//fast.wistia.net/embed/iframe/' + (n.wistia[4] + h) + '" ' + a + ' class="wistia_embed lg-video-object lg-wistia ' + o + '" name="wistia_embed" ' + c + "></iframe>" } else if (n.html5) { for (var y = "", g = 0; g < t.source.length; g++)y += '<source src="' + t.source[g].src + '" type="' + t.source[g].type + '">'; if (t.tracks) { var v = function (e) { var o = "", i = t.tracks[e]; Object.keys(i || {}).forEach((function (e) { o += e + '="' + i[e] + '" ' })), y += "<track " + o + ">" }; for (g = 0; g < t.tracks.length; g++)v(g) } var m = "", w = t.attributes || {}; Object.keys(w || {}).forEach((function (e) { m += e + '="' + w[e] + '" ' })), s = '<video class="lg-video-object lg-html5 ' + (this.settings.videojs && this.settings.videojsTheme ? this.settings.videojsTheme + " " : "") + " " + (this.settings.videojs ? " video-js" : "") + '" ' + m + ">\n                " + y + "\n                Your browser does not support HTML5 video.\n            </video>" } return s }, a.prototype.appendVideos = function (e, o) { var i, t = this.getVideoHtml(o.src, o.addClass, o.index, o.html5Video); e.find(".lg-video-cont").append(t); var s = e.find(".lg-video-object").first(); if (o.html5Video && s.on("mousedown.lg.video", (function (e) { e.stopPropagation() })), this.settings.videojs && (null === (i = this.core.galleryItems[o.index].__slideVideoInfo) || void 0 === i ? void 0 : i.html5)) try { return videojs(s.get(), this.settings.videojsOptions) } catch (e) { console.error("lightGallery:- Make sure you have included videojs") } }, a.prototype.gotoNextSlideOnVideoEnd = function (e, o) { var i = this, t = this.core.getSlideItem(o).find(".lg-video-object").first(), s = this.core.galleryItems[o].__slideVideoInfo || {}; if (this.settings.gotoNextSlideOnVideoEnd) if (s.html5) t.on("ended", (function () { i.core.goToNextSlide() })); else if (s.vimeo) try { new Vimeo.Player(t.get()).on("ended", (function () { i.core.goToNextSlide() })) } catch (e) { console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js") } else if (s.wistia) try { window._wq = window._wq || [], window._wq.push({ id: t.attr("id"), onReady: function (e) { e.bind("end", (function () { i.core.goToNextSlide() })) } }) } catch (e) { console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js") } }, a.prototype.controlVideo = function (e, o) { var i = this.core.getSlideItem(e).find(".lg-video-object").first(), t = this.core.galleryItems[e].__slideVideoInfo || {}; if (i.get()) if (t.youtube) try { i.get().contentWindow.postMessage('{"event":"command","func":"' + o + 'Video","args":""}', "*") } catch (e) { console.error("lightGallery:- " + e) } else if (t.vimeo) try { new Vimeo.Player(i.get())[o]() } catch (e) { console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js") } else if (t.html5) if (this.settings.videojs) try { videojs(i.get())[o]() } catch (e) { console.error("lightGallery:- Make sure you have included videojs") } else i.get()[o](); else if (t.wistia) try { window._wq = window._wq || [], window._wq.push({ id: i.attr("id"), onReady: function (e) { e[o]() } }) } catch (e) { console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js") } }, a.prototype.loadVideoOnPosterClick = function (e, o) { var i = this; if (e.hasClass("lg-video-loaded")) o && this.playVideo(this.core.index); else if (e.hasClass("lg-has-video")) this.playVideo(this.core.index); else { e.addClass("lg-has-video"); var t = void 0, s = this.core.galleryItems[this.core.index].src, n = this.core.galleryItems[this.core.index].video; n && (t = "string" == typeof n ? JSON.parse(n) : n); var l = this.appendVideos(e, { src: s, addClass: "", index: this.core.index, html5Video: t }); this.gotoNextSlideOnVideoEnd(s, this.core.index); var r = e.find(".lg-object").first().get(); e.find(".lg-video-cont").first().append(r), e.addClass("lg-video-loading"), l && l.ready((function () { l.on("loadedmetadata", (function () { i.onVideoLoadAfterPosterClick(e, i.core.index) })) })), e.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg", (function () { setTimeout((function () { i.onVideoLoadAfterPosterClick(e, i.core.index) }), 50) })) } }, a.prototype.onVideoLoadAfterPosterClick = function (e, o) { e.addClass("lg-video-loaded"), this.playVideo(o) }, a.prototype.destroy = function () { this.core.LGel.off(".lg.video"), this.core.LGel.off(".video") }, a }() }));

/**
 * lightgallery | 2.8.1 | November 13th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).lgZoom = t() }(this, (function () { "use strict"; var e = function () { return (e = Object.assign || function (e) { for (var t, o = 1, i = arguments.length; o < i; o++)for (var s in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]); return e }).apply(this, arguments) }, t = { scale: 1, zoom: !0, infiniteZoom: !0, actualSize: !0, showZoomInOutIcons: !1, actualSizeIcons: { zoomIn: "lg-zoom-in", zoomOut: "lg-zoom-out" }, enableZoomAfter: 300, zoomPluginStrings: { zoomIn: "Zoom in", zoomOut: "Zoom out", viewActualSize: "View actual size" } }, o = "lgContainerResize", i = "lgBeforeOpen", s = "lgAfterOpen", a = "lgSlideItemLoad", n = "lgAfterSlide", r = "lgRotateLeft", l = "lgRotateRight", c = "lgFlipHorizontal", g = "lgFlipVertical"; return function () { function h(o, i) { return this.core = o, this.$LG = i, this.settings = e(e({}, t), this.core.settings), this } return h.prototype.buildTemplates = function () { var e = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.zoomIn + '" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.zoomOut + '" class="lg-zoom-out lg-icon"></button>' : ""; this.settings.actualSize && (e += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.viewActualSize + '" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>'), this.core.outer.addClass("lg-use-transition-for-zoom"), this.core.$toolbar.first().append(e) }, h.prototype.enableZoom = function (e) { var t = this, o = this.settings.enableZoomAfter + e.detail.delay; this.$LG("body").first().hasClass("lg-from-hash") && e.detail.delay ? o = 0 : this.$LG("body").first().removeClass("lg-from-hash"), this.zoomableTimeout = setTimeout((function () { t.isImageSlide(t.core.index) && (t.core.getSlideItem(e.detail.index).addClass("lg-zoomable"), e.detail.index === t.core.index && t.setZoomEssentials()) }), o + 30) }, h.prototype.enableZoomOnSlideItemLoad = function () { this.core.LGel.on(a + ".zoom", this.enableZoom.bind(this)) }, h.prototype.getDragCords = function (e) { return { x: e.pageX, y: e.pageY } }, h.prototype.getSwipeCords = function (e) { return { x: e.touches[0].pageX, y: e.touches[0].pageY } }, h.prototype.getDragAllowedAxises = function (e, t) { if (!this.containerRect) return { allowX: !1, allowY: !1 }; var o = this.core.getSlideItem(this.core.index).find(".lg-image").first().get(), i = 0, s = 0, a = o.getBoundingClientRect(); e ? (i = o.offsetHeight * e, s = o.offsetWidth * e) : t ? (i = a.height + t * a.height, s = a.width + t * a.width) : (i = a.height, s = a.width); var n = i > this.containerRect.height; return { allowX: s > this.containerRect.width, allowY: n } }, h.prototype.setZoomEssentials = function () { this.containerRect = this.core.$content.get().getBoundingClientRect() }, h.prototype.zoomImage = function (e, t, o, i) { if (!(Math.abs(t) <= 0)) { var s, a, n = this.containerRect.width / 2 + this.containerRect.left, r = this.containerRect.height / 2 + this.containerRect.top + this.scrollTop; 1 === e && (this.positionChanged = !1); var l = this.getDragAllowedAxises(0, t), c = l.allowY, g = l.allowX; this.positionChanged && (s = this.left / (this.scale - t), a = this.top / (this.scale - t), this.pageX = n - s, this.pageY = r - a, this.positionChanged = !1); var h, m, u = this.getPossibleSwipeDragCords(t), d = n - this.pageX, f = r - this.pageY; if (e - t > 1) { var p = (e - t) / Math.abs(t); h = (d = (t < 0 ? -d : d) + this.left * (p + (t < 0 ? -1 : 1))) / p, m = (f = (t < 0 ? -f : f) + this.top * (p + (t < 0 ? -1 : 1))) / p } else { h = d * (p = (e - t) * t), m = f * p } o && (g ? this.isBeyondPossibleLeft(h, u.minX) ? h = u.minX : this.isBeyondPossibleRight(h, u.maxX) && (h = u.maxX) : e > 1 && (h < u.minX ? h = u.minX : h > u.maxX && (h = u.maxX)), c ? this.isBeyondPossibleTop(m, u.minY) ? m = u.minY : this.isBeyondPossibleBottom(m, u.maxY) && (m = u.maxY) : e > 1 && (m < u.minY ? m = u.minY : m > u.maxY && (m = u.maxY))), this.setZoomStyles({ x: h, y: m, scale: e }), this.left = h, this.top = m, i && this.setZoomImageSize() } }, h.prototype.resetImageTranslate = function (e) { if (this.isImageSlide(e)) { var t = this.core.getSlideItem(e).find(".lg-image").first(); this.imageReset = !1, t.removeClass("reset-transition reset-transition-y reset-transition-x"), this.core.outer.removeClass("lg-actual-size"), t.css("width", "auto").css("height", "auto"), setTimeout((function () { t.removeClass("no-transition") }), 10) } }, h.prototype.setZoomImageSize = function () { var e = this, t = this.core.getSlideItem(this.core.index).find(".lg-image").first(); setTimeout((function () { var o = e.getCurrentImageActualSizeScale(); e.scale >= o && (t.addClass("no-transition"), e.imageReset = !0) }), 500), setTimeout((function () { var o = e.getCurrentImageActualSizeScale(); if (e.scale >= o) { var i = e.getDragAllowedAxises(e.scale); t.css("width", t.get().naturalWidth + "px").css("height", t.get().naturalHeight + "px"), e.core.outer.addClass("lg-actual-size"), i.allowX && i.allowY ? t.addClass("reset-transition") : i.allowX && !i.allowY ? t.addClass("reset-transition-x") : !i.allowX && i.allowY && t.addClass("reset-transition-y") } }), 550) }, h.prototype.setZoomStyles = function (e) { var t = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(), o = this.core.getSlideItem(this.core.index).find(".lg-image").first(), i = this.core.outer.find(".lg-current .lg-dummy-img").first(); this.scale = e.scale, o.css("transform", "scale3d(" + e.scale + ", " + e.scale + ", 1)"), i.css("transform", "scale3d(" + e.scale + ", " + e.scale + ", 1)"); var s = "translate3d(" + e.x + "px, " + e.y + "px, 0)"; t.css("transform", s) }, h.prototype.setActualSize = function (e, t) { var o = this; if (!this.zoomInProgress) { this.zoomInProgress = !0; var i = this.core.galleryItems[this.core.index]; this.resetImageTranslate(e), setTimeout((function () { if (i.src && !o.core.outer.hasClass("lg-first-slide-loading")) { var e = o.getCurrentImageActualSizeScale(), s = o.scale; o.core.outer.hasClass("lg-zoomed") ? o.scale = 1 : o.scale = o.getScale(e), o.setPageCords(t), o.beginZoom(o.scale), o.zoomImage(o.scale, o.scale - s, !0, !0) } }), 50), setTimeout((function () { o.core.outer.removeClass("lg-grabbing").addClass("lg-grab") }), 60), setTimeout((function () { o.zoomInProgress = !1 }), 610) } }, h.prototype.getNaturalWidth = function (e) { var t = this.core.getSlideItem(e).find(".lg-image").first(), o = this.core.galleryItems[e].width; return o ? parseFloat(o) : t.get().naturalWidth }, h.prototype.getActualSizeScale = function (e, t) { return e >= t ? e / t || 2 : 1 }, h.prototype.getCurrentImageActualSizeScale = function () { var e = this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth, t = this.getNaturalWidth(this.core.index) || e; return this.getActualSizeScale(t, e) }, h.prototype.getPageCords = function (e) { var t = {}; if (e) t.x = e.pageX || e.touches[0].pageX, t.y = e.pageY || e.touches[0].pageY; else { var o = this.core.$content.get().getBoundingClientRect(); t.x = o.width / 2 + o.left, t.y = o.height / 2 + this.scrollTop + o.top } return t }, h.prototype.setPageCords = function (e) { var t = this.getPageCords(e); this.pageX = t.x, this.pageY = t.y }, h.prototype.manageActualPixelClassNames = function () { this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut) }, h.prototype.beginZoom = function (e) { return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), e > 1 ? (this.core.outer.addClass("lg-zoomed"), this.manageActualPixelClassNames()) : this.resetZoom(), e > 1 }, h.prototype.getScale = function (e) { var t = this.getCurrentImageActualSizeScale(); return e < 1 ? e = 1 : e > t && (e = t), e }, h.prototype.init = function () { var e = this; if (this.settings.zoom) { this.buildTemplates(), this.enableZoomOnSlideItemLoad(); var t = null; this.core.outer.on("dblclick.lg", (function (t) { e.$LG(t.target).hasClass("lg-image") && e.setActualSize(e.core.index, t) })), this.core.outer.on("touchstart.lg", (function (o) { var i = e.$LG(o.target); 1 === o.touches.length && i.hasClass("lg-image") && (t ? (clearTimeout(t), t = null, o.preventDefault(), e.setActualSize(e.core.index, o)) : t = setTimeout((function () { t = null }), 300)) })), this.core.LGel.on(o + ".zoom " + l + ".zoom " + r + ".zoom " + c + ".zoom " + g + ".zoom", (function () { if (e.core.lgOpened && e.isImageSlide(e.core.index) && !e.core.touchAction) { var t = e.core.getSlideItem(e.core.index).find(".lg-img-wrap").first(); e.top = 0, e.left = 0, e.setZoomEssentials(), e.setZoomSwipeStyles(t, { x: 0, y: 0 }), e.positionChanged = !0 } })), this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, (function () { e.core.lgOpened && (e.scrollTop = e.$LG(window).scrollTop()) })), this.core.getElementById("lg-zoom-out").on("click.lg", (function () { if (e.isImageSlide(e.core.index)) { var t = 0; e.imageReset && (e.resetImageTranslate(e.core.index), t = 50), setTimeout((function () { var t = e.scale - e.settings.scale; t < 1 && (t = 1), e.beginZoom(t), e.zoomImage(t, -e.settings.scale, !0, !e.settings.infiniteZoom) }), t) } })), this.core.getElementById("lg-zoom-in").on("click.lg", (function () { e.zoomIn() })), this.core.getElementById("lg-actual-size").on("click.lg", (function () { e.setActualSize(e.core.index) })), this.core.LGel.on(i + ".zoom", (function () { e.core.outer.find(".lg-item").removeClass("lg-zoomable") })), this.core.LGel.on(s + ".zoom", (function () { e.scrollTop = e.$LG(window).scrollTop(), e.pageX = e.core.outer.width() / 2, e.pageY = e.core.outer.height() / 2 + e.scrollTop, e.scale = 1 })), this.core.LGel.on(n + ".zoom", (function (t) { var o = t.detail.prevIndex; e.scale = 1, e.positionChanged = !1, e.zoomInProgress = !1, e.resetZoom(o), e.resetImageTranslate(o), e.isImageSlide(e.core.index) && e.setZoomEssentials() })), this.zoomDrag(), this.pinchZoom(), this.zoomSwipe(), this.zoomableTimeout = !1, this.positionChanged = !1, this.zoomInProgress = !1 } }, h.prototype.zoomIn = function () { if (this.isImageSlide(this.core.index)) { var e = this.scale + this.settings.scale; this.settings.infiniteZoom || (e = this.getScale(e)), this.beginZoom(e), this.zoomImage(e, Math.min(this.settings.scale, e - this.scale), !0, !this.settings.infiniteZoom) } }, h.prototype.resetZoom = function (e) { this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition"); var t = this.core.getElementById("lg-actual-size"), o = this.core.getSlideItem(void 0 !== e ? e : this.core.index); t.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn), o.find(".lg-img-wrap").first().removeAttr("style"), o.find(".lg-image").first().removeAttr("style"), this.scale = 1, this.left = 0, this.top = 0, this.setPageCords() }, h.prototype.getTouchDistance = function (e) { return Math.sqrt((e.touches[0].pageX - e.touches[1].pageX) * (e.touches[0].pageX - e.touches[1].pageX) + (e.touches[0].pageY - e.touches[1].pageY) * (e.touches[0].pageY - e.touches[1].pageY)) }, h.prototype.pinchZoom = function () { var e = this, t = 0, o = !1, i = 1, s = 0, a = this.core.getSlideItem(this.core.index); this.core.outer.on("touchstart.lg", (function (o) { if (a = e.core.getSlideItem(e.core.index), e.isImageSlide(e.core.index) && 2 === o.touches.length) { if (o.preventDefault(), e.core.outer.hasClass("lg-first-slide-loading")) return; i = e.scale || 1, e.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), e.setPageCords(o), e.resetImageTranslate(e.core.index), e.core.touchAction = "pinch", t = e.getTouchDistance(o) } })), this.core.$inner.on("touchmove.lg", (function (n) { if (2 === n.touches.length && "pinch" === e.core.touchAction && (e.$LG(n.target).hasClass("lg-item") || a.get().contains(n.target))) { n.preventDefault(); var r = e.getTouchDistance(n), l = t - r; if (!o && Math.abs(l) > 5 && (o = !0), o) { s = e.scale; var c = Math.max(1, i + .02 * -l); e.scale = Math.round(100 * (c + Number.EPSILON)) / 100; var g = e.scale - s; e.zoomImage(e.scale, Math.round(100 * (g + Number.EPSILON)) / 100, !1, !1) } } })), this.core.$inner.on("touchend.lg", (function (i) { if ("pinch" === e.core.touchAction && (e.$LG(i.target).hasClass("lg-item") || a.get().contains(i.target))) { if (o = !1, t = 0, e.scale <= 1) e.resetZoom(); else { var s = e.getCurrentImageActualSizeScale(); if (e.scale >= s) { var n = s - e.scale; 0 === n && (n = .01), e.zoomImage(s, n, !1, !0) } e.manageActualPixelClassNames(), e.core.outer.addClass("lg-zoomed") } e.core.touchAction = void 0 } })) }, h.prototype.touchendZoom = function (e, t, o, i, s) { var a = t.x - e.x, n = t.y - e.y, r = Math.abs(a) / s + 1, l = Math.abs(n) / s + 1; r > 2 && (r += 1), l > 2 && (l += 1), a *= r, n *= l; var c = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(), g = {}; g.x = this.left + a, g.y = this.top + n; var h = this.getPossibleSwipeDragCords(); (Math.abs(a) > 15 || Math.abs(n) > 15) && (i && (this.isBeyondPossibleTop(g.y, h.minY) ? g.y = h.minY : this.isBeyondPossibleBottom(g.y, h.maxY) && (g.y = h.maxY)), o && (this.isBeyondPossibleLeft(g.x, h.minX) ? g.x = h.minX : this.isBeyondPossibleRight(g.x, h.maxX) && (g.x = h.maxX)), i ? this.top = g.y : g.y = this.top, o ? this.left = g.x : g.x = this.left, this.setZoomSwipeStyles(c, g), this.positionChanged = !0) }, h.prototype.getZoomSwipeCords = function (e, t, o, i, s) { var a = {}; if (i) { if (a.y = this.top + (t.y - e.y), this.isBeyondPossibleTop(a.y, s.minY)) { var n = s.minY - a.y; a.y = s.minY - n / 6 } else if (this.isBeyondPossibleBottom(a.y, s.maxY)) { var r = a.y - s.maxY; a.y = s.maxY + r / 6 } } else a.y = this.top; if (o) { if (a.x = this.left + (t.x - e.x), this.isBeyondPossibleLeft(a.x, s.minX)) { var l = s.minX - a.x; a.x = s.minX - l / 6 } else if (this.isBeyondPossibleRight(a.x, s.maxX)) { var c = a.x - s.maxX; a.x = s.maxX + c / 6 } } else a.x = this.left; return a }, h.prototype.isBeyondPossibleLeft = function (e, t) { return e >= t }, h.prototype.isBeyondPossibleRight = function (e, t) { return e <= t }, h.prototype.isBeyondPossibleTop = function (e, t) { return e >= t }, h.prototype.isBeyondPossibleBottom = function (e, t) { return e <= t }, h.prototype.isImageSlide = function (e) { var t = this.core.galleryItems[e]; return "image" === this.core.getSlideType(t) }, h.prototype.getPossibleSwipeDragCords = function (e) { var t = this.core.getSlideItem(this.core.index).find(".lg-image").first(), o = this.core.mediaContainerPosition.bottom, i = t.get().getBoundingClientRect(), s = i.height, a = i.width; return e && (s += e * s, a += e * a), { minY: (s - this.containerRect.height) / 2, maxY: (this.containerRect.height - s) / 2 + o, minX: (a - this.containerRect.width) / 2, maxX: (this.containerRect.width - a) / 2 } }, h.prototype.setZoomSwipeStyles = function (e, t) { e.css("transform", "translate3d(" + t.x + "px, " + t.y + "px, 0)") }, h.prototype.zoomSwipe = function () { var e, t, o = this, i = {}, s = {}, a = !1, n = !1, r = !1, l = new Date, c = (new Date, this.core.getSlideItem(this.core.index)); this.core.$inner.on("touchstart.lg", (function (s) { if (o.isImageSlide(o.core.index) && (c = o.core.getSlideItem(o.core.index), (o.$LG(s.target).hasClass("lg-item") || c.get().contains(s.target)) && 1 === s.touches.length && o.core.outer.hasClass("lg-zoomed"))) { s.preventDefault(), l = new Date, o.core.touchAction = "zoomSwipe", t = o.core.getSlideItem(o.core.index).find(".lg-img-wrap").first(); var a = o.getDragAllowedAxises(0); r = a.allowY, ((n = a.allowX) || r) && (i = o.getSwipeCords(s)), e = o.getPossibleSwipeDragCords(), o.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition") } })), this.core.$inner.on("touchmove.lg", (function (l) { if (1 === l.touches.length && "zoomSwipe" === o.core.touchAction && (o.$LG(l.target).hasClass("lg-item") || c.get().contains(l.target))) { l.preventDefault(), o.core.touchAction = "zoomSwipe", s = o.getSwipeCords(l); var g = o.getZoomSwipeCords(i, s, n, r, e); (Math.abs(s.x - i.x) > 15 || Math.abs(s.y - i.y) > 15) && (a = !0, o.setZoomSwipeStyles(t, g)) } })), this.core.$inner.on("touchend.lg", (function (e) { if ("zoomSwipe" === o.core.touchAction && (o.$LG(e.target).hasClass("lg-item") || c.get().contains(e.target))) { if (e.preventDefault(), o.core.touchAction = void 0, o.core.outer.removeClass("lg-zoom-dragging"), !a) return; a = !1; var t = (new Date).valueOf() - l.valueOf(); o.touchendZoom(i, s, n, r, t) } })) }, h.prototype.zoomDrag = function () { var e, t, o, i, s = this, a = {}, n = {}, r = !1, l = !1, c = !1, g = !1; this.core.outer.on("mousedown.lg.zoom", (function (t) { if (s.isImageSlide(s.core.index)) { var n = s.core.getSlideItem(s.core.index); if (s.$LG(t.target).hasClass("lg-item") || n.get().contains(t.target)) { e = new Date, i = s.core.getSlideItem(s.core.index).find(".lg-img-wrap").first(); var l = s.getDragAllowedAxises(0); g = l.allowY, c = l.allowX, s.core.outer.hasClass("lg-zoomed") && s.$LG(t.target).hasClass("lg-object") && (c || g) && (t.preventDefault(), a = s.getDragCords(t), o = s.getPossibleSwipeDragCords(), r = !0, s.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging")) } } })), this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, (function (e) { if (r) { l = !0, n = s.getDragCords(e); var t = s.getZoomSwipeCords(a, n, c, g, o); s.setZoomSwipeStyles(i, t) } })), this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, (function (o) { if (r) { if (t = new Date, r = !1, s.core.outer.removeClass("lg-zoom-dragging"), l && (a.x !== n.x || a.y !== n.y)) { n = s.getDragCords(o); var i = t.valueOf() - e.valueOf(); s.touchendZoom(a, n, c, g, i) } l = !1 } s.core.outer.removeClass("lg-grabbing").addClass("lg-grab") })) }, h.prototype.closeGallery = function () { this.resetZoom(), this.zoomInProgress = !1 }, h.prototype.destroy = function () { this.$LG(window).off(".lg.zoom.global" + this.core.lgId), this.core.LGel.off(".lg.zoom"), this.core.LGel.off(".zoom"), clearTimeout(this.zoomableTimeout), this.zoomableTimeout = !1 }, h }() }));

/**
 * lightgallery | 2.8.1 | November 13th 2024
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lightGallery = e() }(this, (function () { "use strict"; var t = function () { return (t = Object.assign || function (t) { for (var e, i = 1, s = arguments.length; i < s; i++)for (var n in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t }).apply(this, arguments) }; var e = "lgAfterAppendSlide", i = "lgInit", s = "lgHasVideo", n = "lgContainerResize", o = "lgUpdateSlides", r = "lgAfterAppendSubHtml", l = "lgBeforeOpen", a = "lgAfterOpen", d = "lgSlideItemLoad", g = "lgBeforeSlide", h = "lgAfterSlide", c = "lgPosterClick", u = "lgDragStart", m = "lgDragMove", p = "lgDragEnd", f = "lgBeforeNextSlide", y = "lgBeforePrevSlide", v = "lgBeforeClose", b = "lgAfterClose", C = { mode: "lg-slide", easing: "ease", speed: 400, licenseKey: "0000-0000-000-0000", height: "100%", width: "100%", addClass: "", startClass: "lg-start-zoom", backdropDuration: 300, container: "", startAnimationDuration: 400, zoomFromOrigin: !0, hideBarsDelay: 0, showBarsAfter: 1e4, slideDelay: 0, supportLegacyBrowser: !0, allowMediaOverlap: !1, videoMaxSize: "1280-720", loadYouTubePoster: !0, defaultCaptionHeight: 0, ariaLabelledby: "", ariaDescribedby: "", resetScrollPosition: !0, hideScrollbar: !1, closable: !0, swipeToClose: !0, closeOnTap: !0, showCloseIcon: !0, showMaximizeIcon: !1, loop: !0, escKey: !0, keyPress: !0, trapFocus: !0, controls: !0, slideEndAnimation: !0, hideControlOnEnd: !1, mousewheel: !1, getCaptionFromTitleOrAlt: !0, appendSubHtmlTo: ".lg-sub-html", subHtmlSelectorRelative: !1, preload: 2, numberOfSlideItemsInDom: 10, selector: "", selectWithin: "", nextHtml: "", prevHtml: "", index: 0, iframeWidth: "100%", iframeHeight: "100%", iframeMaxWidth: "100%", iframeMaxHeight: "100%", download: !0, counter: !0, appendCounterTo: ".lg-toolbar", swipeThreshold: 50, enableSwipe: !0, enableDrag: !0, dynamic: !1, dynamicEl: [], extraProps: [], exThumbImage: "", isMobile: void 0, mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 }, plugins: [], strings: { closeGallery: "Close gallery", toggleMaximize: "Toggle maximize", previousSlide: "Previous slide", nextSlide: "Next slide", download: "Download", playVideo: "Play video", mediaLoadingFailed: "Oops... Failed to load content..." } }; var I = function () { function t(t) { return this.cssVenderPrefixes = ["TransitionDuration", "TransitionTimingFunction", "Transform", "Transition"], this.selector = this._getSelector(t), this.firstElement = this._getFirstEl(), this } return t.generateUUID = function () { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function (t) { var e = 16 * Math.random() | 0; return ("x" == t ? e : 3 & e | 8).toString(16) })) }, t.prototype._getSelector = function (t, e) { return void 0 === e && (e = document), "string" != typeof t ? t : (e = e || document, "#" === t.substring(0, 1) ? e.querySelector(t) : e.querySelectorAll(t)) }, t.prototype._each = function (t) { return this.selector ? (void 0 !== this.selector.length ? [].forEach.call(this.selector, t) : t(this.selector, 0), this) : this }, t.prototype._setCssVendorPrefix = function (t, e, i) { var s = e.replace(/-([a-z])/gi, (function (t, e) { return e.toUpperCase() })); -1 !== this.cssVenderPrefixes.indexOf(s) ? (t.style[s.charAt(0).toLowerCase() + s.slice(1)] = i, t.style["webkit" + s] = i, t.style["moz" + s] = i, t.style["ms" + s] = i, t.style["o" + s] = i) : t.style[s] = i }, t.prototype._getFirstEl = function () { return this.selector && void 0 !== this.selector.length ? this.selector[0] : this.selector }, t.prototype.isEventMatched = function (t, e) { var i = e.split("."); return t.split(".").filter((function (t) { return t })).every((function (t) { return -1 !== i.indexOf(t) })) }, t.prototype.attr = function (t, e) { return void 0 === e ? this.firstElement ? this.firstElement.getAttribute(t) : "" : (this._each((function (i) { i.setAttribute(t, e) })), this) }, t.prototype.find = function (t) { return x(this._getSelector(t, this.selector)) }, t.prototype.first = function () { return this.selector && void 0 !== this.selector.length ? x(this.selector[0]) : x(this.selector) }, t.prototype.eq = function (t) { return x(this.selector[t]) }, t.prototype.parent = function () { return x(this.selector.parentElement) }, t.prototype.get = function () { return this._getFirstEl() }, t.prototype.removeAttr = function (t) { var e = t.split(" "); return this._each((function (t) { e.forEach((function (e) { return t.removeAttribute(e) })) })), this }, t.prototype.wrap = function (t) { if (!this.firstElement) return this; var e = document.createElement("div"); return e.className = t, this.firstElement.parentNode.insertBefore(e, this.firstElement), this.firstElement.parentNode.removeChild(this.firstElement), e.appendChild(this.firstElement), this }, t.prototype.addClass = function (t) { return void 0 === t && (t = ""), this._each((function (e) { t.split(" ").forEach((function (t) { t && e.classList.add(t) })) })), this }, t.prototype.removeClass = function (t) { return this._each((function (e) { t.split(" ").forEach((function (t) { t && e.classList.remove(t) })) })), this }, t.prototype.hasClass = function (t) { return !!this.firstElement && this.firstElement.classList.contains(t) }, t.prototype.hasAttribute = function (t) { return !!this.firstElement && this.firstElement.hasAttribute(t) }, t.prototype.toggleClass = function (t) { return this.firstElement ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t), this) : this }, t.prototype.css = function (t, e) { var i = this; return this._each((function (s) { i._setCssVendorPrefix(s, t, e) })), this }, t.prototype.on = function (e, i) { var s = this; return this.selector ? (e.split(" ").forEach((function (e) { Array.isArray(t.eventListeners[e]) || (t.eventListeners[e] = []), t.eventListeners[e].push(i), s.selector.addEventListener(e.split(".")[0], i) })), this) : this }, t.prototype.once = function (t, e) { var i = this; return this.on(t, (function () { i.off(t), e(t) })), this }, t.prototype.off = function (e) { var i = this; return this.selector ? (Object.keys(t.eventListeners).forEach((function (s) { i.isEventMatched(e, s) && (t.eventListeners[s].forEach((function (t) { i.selector.removeEventListener(s.split(".")[0], t) })), t.eventListeners[s] = []) })), this) : this }, t.prototype.trigger = function (t, e) { if (!this.firstElement) return this; var i = new CustomEvent(t.split(".")[0], { detail: e || null }); return this.firstElement.dispatchEvent(i), this }, t.prototype.load = function (t) { var e = this; return fetch(t).then((function (t) { return t.text() })).then((function (t) { e.selector.innerHTML = t })), this }, t.prototype.html = function (t) { return void 0 === t ? this.firstElement ? this.firstElement.innerHTML : "" : (this._each((function (e) { e.innerHTML = t })), this) }, t.prototype.append = function (t) { return this._each((function (e) { "string" == typeof t ? e.insertAdjacentHTML("beforeend", t) : e.appendChild(t) })), this }, t.prototype.prepend = function (t) { return this._each((function (e) { "string" == typeof t ? e.insertAdjacentHTML("afterbegin", t) : t instanceof HTMLElement && e.insertBefore(t.cloneNode(!0), e.firstChild) })), this }, t.prototype.remove = function () { return this._each((function (t) { t.parentNode.removeChild(t) })), this }, t.prototype.empty = function () { return this._each((function (t) { t.innerHTML = "" })), this }, t.prototype.scrollTop = function (t) { return void 0 !== t ? (document.body.scrollTop = t, document.documentElement.scrollTop = t, this) : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 }, t.prototype.scrollLeft = function (t) { return void 0 !== t ? (document.body.scrollLeft = t, document.documentElement.scrollLeft = t, this) : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0 }, t.prototype.offset = function () { if (!this.firstElement) return { left: 0, top: 0 }; var t = this.firstElement.getBoundingClientRect(), e = x("body").style().marginLeft; return { left: t.left - parseFloat(e) + this.scrollLeft(), top: t.top + this.scrollTop() } }, t.prototype.style = function () { return this.firstElement ? this.firstElement.currentStyle || window.getComputedStyle(this.firstElement) : {} }, t.prototype.width = function () { var t = this.style(); return this.firstElement.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight) }, t.prototype.height = function () { var t = this.style(); return this.firstElement.clientHeight - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom) }, t.eventListeners = {}, t }(); function x(t) { return function () { if ("function" == typeof window.CustomEvent) return !1; window.CustomEvent = function (t, e) { e = e || { bubbles: !1, cancelable: !1, detail: null }; var i = document.createEvent("CustomEvent"); return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i } }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), new I(t) } var w = ["src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl"]; function S(t) { return "href" === t ? "src" : t = (t = (t = t.replace("data-", "")).charAt(0).toLowerCase() + t.slice(1)).replace(/-([a-z])/g, (function (t) { return t[1].toUpperCase() })) } var T = function (t, e, i) { fetch(t).then((function (t) { return t.text() })).then((function (t) { if ("append" === i) { var s = '<div class="lg-sub-html">' + t + "</div>"; e.append(s) } else e.html(t) })) }, E = function (t, e, i, s) { void 0 === i && (i = 0); var n = x(t).attr("data-lg-size") || s; if (n) { var o = n.split(","); if (o[1]) for (var r = window.innerWidth, l = 0; l < o.length; l++) { var a = o[l]; if (parseInt(a.split("-")[2], 10) > r) { n = a; break } l === o.length - 1 && (n = a) } var d = n.split("-"), g = parseInt(d[0], 10), h = parseInt(d[1], 10), c = e.width(), u = e.height() - i, m = Math.min(c, g), p = Math.min(u, h), f = Math.min(m / g, p / h); return { width: g * f, height: h * f } } }, O = function (t, e, i, s, n) { if (n) { var o = x(t).find("img").first(); if (o.get()) { var r = e.get().getBoundingClientRect(), l = r.width, a = e.height() - (i + s), d = o.width(), g = o.height(), h = o.style(), c = (l - d) / 2 - o.offset().left + (parseFloat(h.paddingLeft) || 0) + (parseFloat(h.borderLeft) || 0) + x(window).scrollLeft() + r.left, u = (a - g) / 2 - o.offset().top + (parseFloat(h.paddingTop) || 0) + (parseFloat(h.borderTop) || 0) + x(window).scrollTop() + i; return "translate3d(" + (c *= -1) + "px, " + (u *= -1) + "px, 0) scale3d(" + d / n.width + ", " + g / n.height + ", 1)" } } }, L = function (t, e, i, s, n, o) { return '<div class="lg-media-cont lg-has-iframe" style="width:' + t + "; max-width:" + i + "; height: " + e + "; max-height:" + s + '">\n                    <iframe class="lg-object" frameborder="0" ' + (o ? 'title="' + o + '"' : "") + ' src="' + n + '"  allowfullscreen="true"></iframe>\n                </div>' }, D = function (t, e, i, s, n, o) { var r = "<img " + i + " " + (s ? 'srcset="' + s + '"' : "") + "  " + (n ? 'sizes="' + n + '"' : "") + ' class="lg-object lg-image" data-index="' + t + '" src="' + e + '" />', l = ""; o && (l = ("string" == typeof o ? JSON.parse(o) : o).map((function (t) { var e = ""; return Object.keys(t).forEach((function (i) { e += " " + i + '="' + t[i] + '"' })), "<source " + e + "></source>" }))); return "" + l + r }, z = function (t) { for (var e = [], i = [], s = "", n = 0; n < t.length; n++) { var o = t[n].split(" "); "" === o[0] && o.splice(0, 1), i.push(o[0]), e.push(o[1]) } for (var r = window.innerWidth, l = 0; l < e.length; l++)if (parseInt(e[l], 10) > r) { s = i[l]; break } return s }, M = function (t) { return !!t && (!!t.complete && 0 !== t.naturalWidth) }, G = function (t, e, i, s, n) { var o = ""; o = n && n.youtube ? "lg-has-youtube" : n && n.vimeo ? "lg-has-vimeo" : "lg-has-html5"; var r = e; return "string" != typeof e && (r = e.outerHTML), '<div class="lg-video-cont ' + o + '" style="' + i + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + s + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + s + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + r + '\n            <img class="lg-object lg-video-poster" src="' + t + '" />\n        </div>' }, k = function (t) { var e = t.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'); return [].filter.call(e, (function (t) { var e = window.getComputedStyle(t); return "none" !== e.display && "hidden" !== e.visibility })) }, A = function (t, e, i, s) { var n = [], o = function () { for (var t = 0, e = 0, i = arguments.length; e < i; e++)t += arguments[e].length; var s = Array(t), n = 0; for (e = 0; e < i; e++)for (var o = arguments[e], r = 0, l = o.length; r < l; r++, n++)s[n] = o[r]; return s }(w, e); return [].forEach.call(t, (function (t) { for (var e = {}, r = 0; r < t.attributes.length; r++) { var l = t.attributes[r]; if (l.specified) { var a = S(l.name), d = ""; o.indexOf(a) > -1 && (d = a), d && (e[d] = l.value) } } var g = x(t), h = g.find("img").first().attr("alt"), c = g.attr("title"), u = s ? g.attr(s) : g.find("img").first().attr("src"); e.thumb = u, i && !e.subHtml && (e.subHtml = c || h || ""), e.alt = h || c || "", n.push(e) })), n }, B = function () { return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) }, P = function (t, e, i) { if (!t) return e ? { html5: !0 } : void console.error("lightGallery :- data-src is not provided on slide item " + (i + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"); var s = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i), n = t.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i), o = t.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/); return s ? { youtube: s } : n ? { vimeo: n } : o ? { wistia: o } : void 0 }, F = 0, H = function () { function w(t, e) { if (this.lgOpened = !1, this.index = 0, this.plugins = [], this.lGalleryOn = !1, this.lgBusy = !1, this.currentItemsInDom = [], this.prevScrollTop = 0, this.bodyPaddingRight = 0, this.isDummyImageRemoved = !1, this.dragOrSwipeEnabled = !1, this.mediaContainerPosition = { top: 0, bottom: 0 }, !t) return this; if (F++, this.lgId = F, this.el = t, this.LGel = x(t), this.generateSettings(e), this.buildModules(), this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array."; return this.galleryItems = this.getItems(), this.normalizeSettings(), this.init(), this.validateLicense(), this } return w.prototype.generateSettings = function (e) { if (this.settings = t(t({}, C), e), this.settings.isMobile && "function" == typeof this.settings.isMobile ? this.settings.isMobile() : B()) { var i = t(t({}, this.settings.mobileSettings), this.settings.mobileSettings); this.settings = t(t({}, this.settings), i) } }, w.prototype.normalizeSettings = function () { if (this.settings.slideEndAnimation && (this.settings.hideControlOnEnd = !1), this.settings.closable || (this.settings.swipeToClose = !1), this.zoomFromOrigin = this.settings.zoomFromOrigin, this.settings.dynamic && (this.zoomFromOrigin = !1), this.settings.container) { var t = this.settings.container; if ("function" == typeof t) this.settings.container = t(); else if ("string" == typeof t) { var e = document.querySelector(t); this.settings.container = null != e ? e : document.body } } else this.settings.container = document.body; this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length) }, w.prototype.init = function () { var t = this; this.addSlideVideoInfo(this.galleryItems), this.buildStructure(), this.LGel.trigger(i, { instance: this }), this.settings.keyPress && this.keyPress(), setTimeout((function () { t.enableDrag(), t.enableSwipe(), t.triggerPosterClick() }), 50), this.arrow(), this.settings.mousewheel && this.mousewheel(), this.settings.dynamic || this.openGalleryOnItemClick() }, w.prototype.openGalleryOnItemClick = function () { for (var t = this, e = function (e) { var s = i.items[e], n = x(s), o = I.generateUUID(); n.attr("data-lg-id", o).on("click.lgcustom-item-" + o, (function (i) { i.preventDefault(); var n = t.settings.index || e; t.openGallery(n, s) })) }, i = this, s = 0; s < this.items.length; s++)e(s) }, w.prototype.buildModules = function () { var t = this; this.settings.plugins.forEach((function (e) { t.plugins.push(new e(t, x)) })) }, w.prototype.validateLicense = function () { this.settings.licenseKey ? "0000-0000-000-0000" === this.settings.licenseKey && console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use") : console.error("Please provide a valid license key") }, w.prototype.getSlideItem = function (t) { return x(this.getSlideItemId(t)) }, w.prototype.getSlideItemId = function (t) { return "#lg-item-" + this.lgId + "-" + t }, w.prototype.getIdName = function (t) { return t + "-" + this.lgId }, w.prototype.getElementById = function (t) { return x("#" + this.getIdName(t)) }, w.prototype.manageSingleSlideClassName = function () { this.galleryItems.length < 2 ? this.outer.addClass("lg-single-item") : this.outer.removeClass("lg-single-item") }, w.prototype.buildStructure = function () { var t = this; if (!(this.$container && this.$container.get())) { var e = "", i = ""; this.settings.controls && (e = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings.previousSlide + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings.nextSlide + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>"), ".lg-item" !== this.settings.appendSubHtmlTo && (i = '<div class="lg-sub-html" role="status" aria-live="polite"></div>'); var s = ""; this.settings.allowMediaOverlap && (s += "lg-media-overlap "); var n = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "", o = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "", r = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : ""), l = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings.closeGallery + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "", a = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings.toggleMaximize + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "", d = '\n        <div class="' + r + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + n + " " + o + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + s + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + e + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + a + "\n                    " + l + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") + "\n                </div>\n            </div>\n        </div>\n        "; x(this.settings.container).append(d), document.body !== this.settings.container && x(this.settings.container).css("position", "relative"), this.outer = this.getElementById("lg-outer"), this.$lgComponents = this.getElementById("lg-components"), this.$backdrop = this.getElementById("lg-backdrop"), this.$container = this.getElementById("lg-container"), this.$inner = this.getElementById("lg-inner"), this.$content = this.getElementById("lg-content"), this.$toolbar = this.getElementById("lg-toolbar"), this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms"); var g = this.settings.mode + " "; this.manageSingleSlideClassName(), this.settings.enableDrag && (g += "lg-grab "), this.outer.addClass(g), this.$inner.css("transition-timing-function", this.settings.easing), this.$inner.css("transition-duration", this.settings.speed + "ms"), this.settings.download && this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings.download + '" download class="lg-download lg-icon"></a>'), this.counter(), x(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function () { t.refreshOnResize() })), this.hideBars(), this.manageCloseGallery(), this.toggleMaximize(), this.initModules() } }, w.prototype.refreshOnResize = function () { if (this.lgOpened) { var t = this.galleryItems[this.index].__slideVideoInfo; this.mediaContainerPosition = this.getMediaContainerPosition(); var e = this.mediaContainerPosition, i = e.top, s = e.bottom; if (this.currentImageSize = E(this.items[this.index], this.outer, i + s, t && this.settings.videoMaxSize), t && this.resizeVideoSlide(this.index, this.currentImageSize), this.zoomFromOrigin && !this.isDummyImageRemoved) { var o = this.getDummyImgStyles(this.currentImageSize); this.outer.find(".lg-current .lg-dummy-img").first().attr("style", o) } this.LGel.trigger(n) } }, w.prototype.resizeVideoSlide = function (t, e) { var i = this.getVideoContStyle(e); this.getSlideItem(t).find(".lg-video-cont").attr("style", i) }, w.prototype.updateSlides = function (t, e) { if (this.index > t.length - 1 && (this.index = t.length - 1), 1 === t.length && (this.index = 0), t.length) { var i = this.galleryItems[e].src; this.galleryItems = t, this.updateControls(), this.$inner.empty(), this.currentItemsInDom = []; var s = 0; this.galleryItems.some((function (t, e) { return t.src === i && (s = e, !0) })), this.currentItemsInDom = this.organizeSlideItems(s, -1), this.loadContent(s, !0), this.getSlideItem(s).addClass("lg-current"), this.index = s, this.updateCurrentCounter(s), this.LGel.trigger(o) } else this.closeGallery() }, w.prototype.getItems = function () { if (this.items = [], this.settings.dynamic) return this.settings.dynamicEl || []; if ("this" === this.settings.selector) this.items.push(this.el); else if (this.settings.selector) if ("string" == typeof this.settings.selector) if (this.settings.selectWithin) { var t = x(this.settings.selectWithin); this.items = t.find(this.settings.selector).get() } else this.items = this.el.querySelectorAll(this.settings.selector); else this.items = this.settings.selector; else this.items = this.el.children; return A(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage) }, w.prototype.shouldHideScrollbar = function () { return this.settings.hideScrollbar && document.body === this.settings.container }, w.prototype.hideScrollbar = function () { if (this.shouldHideScrollbar()) { this.bodyPaddingRight = parseFloat(x("body").style().paddingRight); var t = document.documentElement.getBoundingClientRect(), e = window.innerWidth - t.width; x(document.body).css("padding-right", e + this.bodyPaddingRight + "px"), x(document.body).addClass("lg-overlay-open") } }, w.prototype.resetScrollBar = function () { this.shouldHideScrollbar() && (x(document.body).css("padding-right", this.bodyPaddingRight + "px"), x(document.body).removeClass("lg-overlay-open")) }, w.prototype.openGallery = function (t, e) { var i = this; if (void 0 === t && (t = this.settings.index), !this.lgOpened) { this.lgOpened = !0, this.outer.removeClass("lg-hide-items"), this.hideScrollbar(), this.$container.addClass("lg-show"); var s = this.getItemsToBeInsertedToDom(t, t); this.currentItemsInDom = s; var n = ""; s.forEach((function (t) { n = n + '<div id="' + t + '" class="lg-item"></div>' })), this.$inner.append(n), this.addHtml(t); var o = ""; this.mediaContainerPosition = this.getMediaContainerPosition(); var r = this.mediaContainerPosition, d = r.top, g = r.bottom; this.settings.allowMediaOverlap || this.setMediaContainerPosition(d, g); var h = this.galleryItems[t].__slideVideoInfo; this.zoomFromOrigin && e && (this.currentImageSize = E(e, this.outer, d + g, h && this.settings.videoMaxSize), o = O(e, this.outer, d, g, this.currentImageSize)), this.zoomFromOrigin && o || (this.outer.addClass(this.settings.startClass), this.getSlideItem(t).removeClass("lg-complete")); var c = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration; setTimeout((function () { i.outer.addClass("lg-components-open") }), c), this.index = t, this.LGel.trigger(l), this.getSlideItem(t).addClass("lg-current"), this.lGalleryOn = !1, this.prevScrollTop = x(window).scrollTop(), setTimeout((function () { if (i.zoomFromOrigin && o) { var e = i.getSlideItem(t); e.css("transform", o), setTimeout((function () { e.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", i.settings.startAnimationDuration + "ms"), i.outer.addClass("lg-zoom-from-image") })), setTimeout((function () { e.css("transform", "translate3d(0, 0, 0)") }), 100) } setTimeout((function () { i.$backdrop.addClass("in"), i.$container.addClass("lg-show-in") }), 10), setTimeout((function () { i.settings.trapFocus && document.body === i.settings.container && i.trapFocus() }), i.settings.backdropDuration + 50), i.zoomFromOrigin && o || setTimeout((function () { i.outer.addClass("lg-visible") }), i.settings.backdropDuration), i.slide(t, !1, !1, !1), i.LGel.trigger(a) })), document.body === this.settings.container && x("html").addClass("lg-on") } }, w.prototype.getMediaContainerPosition = function () { if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 }; var t = this.$toolbar.get().clientHeight || 0, e = this.outer.find(".lg-components .lg-sub-html").get(), i = this.settings.defaultCaptionHeight || e && e.clientHeight || 0, s = this.outer.find(".lg-thumb-outer").get(); return { top: t, bottom: (s ? s.clientHeight : 0) + i } }, w.prototype.setMediaContainerPosition = function (t, e) { void 0 === t && (t = 0), void 0 === e && (e = 0), this.$content.css("top", t + "px").css("bottom", e + "px") }, w.prototype.hideBars = function () { var t = this; setTimeout((function () { t.outer.removeClass("lg-hide-items"), t.settings.hideBarsDelay > 0 && (t.outer.on("mousemove.lg click.lg touchstart.lg", (function () { t.outer.removeClass("lg-hide-items"), clearTimeout(t.hideBarTimeout), t.hideBarTimeout = setTimeout((function () { t.outer.addClass("lg-hide-items") }), t.settings.hideBarsDelay) })), t.outer.trigger("mousemove.lg")) }), this.settings.showBarsAfter) }, w.prototype.initPictureFill = function (t) { if (this.settings.supportLegacyBrowser) try { picturefill({ elements: [t.get()] }) } catch (t) { console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.") } }, w.prototype.counter = function () { if (this.settings.counter) { var t = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>"; this.outer.find(this.settings.appendCounterTo).append(t) } }, w.prototype.addHtml = function (t) { var e, i; if (this.galleryItems[t].subHtmlUrl ? i = this.galleryItems[t].subHtmlUrl : e = this.galleryItems[t].subHtml, !i) if (e) { var s = e.substring(0, 1); "." !== s && "#" !== s || (e = this.settings.subHtmlSelectorRelative && !this.settings.dynamic ? x(this.items).eq(t).find(e).first().html() : x(e).first().html()) } else e = ""; if (".lg-item" !== this.settings.appendSubHtmlTo) i ? T(i, this.outer.find(".lg-sub-html"), "replace") : this.outer.find(".lg-sub-html").html(e); else { var n = x(this.getSlideItemId(t)); i ? T(i, n, "append") : n.append('<div class="lg-sub-html">' + e + "</div>") } null != e && ("" === e ? this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html") : this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")), this.LGel.trigger(r, { index: t }) }, w.prototype.preload = function (t) { for (var e = 1; e <= this.settings.preload && !(e >= this.galleryItems.length - t); e++)this.loadContent(t + e, !1); for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)this.loadContent(t - i, !1) }, w.prototype.getDummyImgStyles = function (t) { return t ? "width:" + t.width + "px;\n                margin-left: -" + t.width / 2 + "px;\n                margin-top: -" + t.height / 2 + "px;\n                height:" + t.height + "px" : "" }, w.prototype.getVideoContStyle = function (t) { return t ? "width:" + t.width + "px;\n                height:" + t.height + "px" : "" }, w.prototype.getDummyImageContent = function (t, e, i) { var s; if (this.settings.dynamic || (s = x(this.items).eq(e)), s) { var n = void 0; if (!(n = this.settings.exThumbImage ? s.attr(this.settings.exThumbImage) : s.find("img").first().attr("src"))) return ""; var o = this.getDummyImgStyles(this.currentImageSize), r = document.createElement("img"); return r.alt = i || "", r.src = n, r.className = "lg-dummy-img", r.style.cssText = o, t.addClass("lg-first-slide"), this.outer.addClass("lg-first-slide-loading"), r } return "" }, w.prototype.setImgMarkup = function (t, e, i) { var s = this.galleryItems[i], n = s.alt, o = s.srcset, r = s.sizes, l = s.sources, a = "", d = n ? 'alt="' + n + '"' : ""; a = this.isFirstSlideWithZoomAnimation() ? this.getDummyImageContent(e, i, d) : D(i, t, d, o, r, l); var g = document.createElement("picture"); g.className = "lg-img-wrap", x(g).append(a), e.prepend(g) }, w.prototype.onSlideObjectLoad = function (t, e, i, s) { var n = t.find(".lg-object").first(); M(n.get()) || e ? i() : (n.on("load.lg error.lg", (function () { i && i() })), n.on("error.lg", (function () { s && s() }))) }, w.prototype.onLgObjectLoad = function (t, e, i, s, n, o) { var r = this; this.onSlideObjectLoad(t, o, (function () { r.triggerSlideItemLoad(t, e, i, s, n) }), (function () { t.addClass("lg-complete lg-complete_"), t.html('<span class="lg-error-msg">' + r.settings.strings.mediaLoadingFailed + "</span>") })) }, w.prototype.triggerSlideItemLoad = function (t, e, i, s, n) { var o = this, r = this.galleryItems[e], l = n && "video" === this.getSlideType(r) && !r.poster ? s : 0; setTimeout((function () { t.addClass("lg-complete lg-complete_"), o.LGel.trigger(d, { index: e, delay: i || 0, isFirstSlide: n }) }), l) }, w.prototype.isFirstSlideWithZoomAnimation = function () { return !(this.lGalleryOn || !this.zoomFromOrigin || !this.currentImageSize) }, w.prototype.addSlideVideoInfo = function (t) { var e = this; t.forEach((function (t, i) { t.__slideVideoInfo = P(t.src, !!t.video, i), t.__slideVideoInfo && e.settings.loadYouTubePoster && !t.poster && t.__slideVideoInfo.youtube && (t.poster = "//img.youtube.com/vi/" + t.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg") })) }, w.prototype.loadContent = function (t, i) { var n = this, o = this.galleryItems[t], r = x(this.getSlideItemId(t)), l = o.poster, a = o.srcset, d = o.sizes, g = o.sources, h = o.src, c = o.video, u = c && "string" == typeof c ? JSON.parse(c) : c; if (o.responsive) { var m = o.responsive.split(","); h = z(m) || h } var p = o.__slideVideoInfo, f = "", y = !!o.iframe, v = !this.lGalleryOn, b = 0; if (v && (b = this.zoomFromOrigin && this.currentImageSize ? this.settings.startAnimationDuration + 10 : this.settings.backdropDuration + 10), !r.hasClass("lg-loaded")) { if (p) { var C = this.mediaContainerPosition, I = C.top, w = C.bottom, S = E(this.items[t], this.outer, I + w, p && this.settings.videoMaxSize); f = this.getVideoContStyle(S) } if (y) { var T = L(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, h, o.iframeTitle); r.prepend(T) } else if (l) { var O = ""; v && this.zoomFromOrigin && this.currentImageSize && (O = this.getDummyImageContent(r, t, "")); T = G(l, O || "", f, this.settings.strings.playVideo, p); r.prepend(T) } else if (p) { T = '<div class="lg-video-cont " style="' + f + '"></div>'; r.prepend(T) } else if (this.setImgMarkup(h, r, t), a || g) { var M = r.find(".lg-object"); this.initPictureFill(M) } (l || p) && this.LGel.trigger(s, { index: t, src: h, html5Video: u, hasPoster: !!l }), this.LGel.trigger(e, { index: t }), this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo && this.addHtml(t) } var k = 0; b && !x(document.body).hasClass("lg-from-hash") && (k = b), this.isFirstSlideWithZoomAnimation() && (setTimeout((function () { r.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style") }), this.settings.startAnimationDuration + 100), r.hasClass("lg-loaded") || setTimeout((function () { if ("image" === n.getSlideType(o)) { var e = o.alt, i = e ? 'alt="' + e + '"' : ""; if (r.find(".lg-img-wrap").append(D(t, h, i, a, d, o.sources)), a || g) { var s = r.find(".lg-object"); n.initPictureFill(s) } } ("image" === n.getSlideType(o) || "video" === n.getSlideType(o) && l) && (n.onLgObjectLoad(r, t, b, k, !0, !1), n.onSlideObjectLoad(r, !(!p || !p.html5 || l), (function () { n.loadContentOnFirstSlideLoad(t, r, k) }), (function () { n.loadContentOnFirstSlideLoad(t, r, k) }))) }), this.settings.startAnimationDuration + 100)), r.addClass("lg-loaded"), this.isFirstSlideWithZoomAnimation() && ("video" !== this.getSlideType(o) || l) || this.onLgObjectLoad(r, t, b, k, v, !(!p || !p.html5 || l)), this.zoomFromOrigin && this.currentImageSize || !r.hasClass("lg-complete_") || this.lGalleryOn || setTimeout((function () { r.addClass("lg-complete") }), this.settings.backdropDuration), this.lGalleryOn = !0, !0 === i && (r.hasClass("lg-complete_") ? this.preload(t) : r.find(".lg-object").first().on("load.lg error.lg", (function () { n.preload(t) }))) }, w.prototype.loadContentOnFirstSlideLoad = function (t, e, i) { var s = this; setTimeout((function () { e.find(".lg-dummy-img").remove(), e.removeClass("lg-first-slide"), s.outer.removeClass("lg-first-slide-loading"), s.isDummyImageRemoved = !0, s.preload(t) }), i + 300) }, w.prototype.getItemsToBeInsertedToDom = function (t, e, i) { var s = this; void 0 === i && (i = 0); var n = [], o = Math.max(i, 3); o = Math.min(o, this.galleryItems.length); var r = "lg-item-" + this.lgId + "-" + e; if (this.galleryItems.length <= 3) return this.galleryItems.forEach((function (t, e) { n.push("lg-item-" + s.lgId + "-" + e) })), n; if (t < (this.galleryItems.length - 1) / 2) { for (var l = t; l > t - o / 2 && l >= 0; l--)n.push("lg-item-" + this.lgId + "-" + l); var a = n.length; for (l = 0; l < o - a; l++)n.push("lg-item-" + this.lgId + "-" + (t + l + 1)) } else { for (l = t; l <= this.galleryItems.length - 1 && l < t + o / 2; l++)n.push("lg-item-" + this.lgId + "-" + l); for (a = n.length, l = 0; l < o - a; l++)n.push("lg-item-" + this.lgId + "-" + (t - l - 1)) } return this.settings.loop && (t === this.galleryItems.length - 1 ? n.push("lg-item-" + this.lgId + "-0") : 0 === t && n.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1))), -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + e), n }, w.prototype.organizeSlideItems = function (t, e) { var i = this, s = this.getItemsToBeInsertedToDom(t, e, this.settings.numberOfSlideItemsInDom); return s.forEach((function (t) { -1 === i.currentItemsInDom.indexOf(t) && i.$inner.append('<div id="' + t + '" class="lg-item"></div>') })), this.currentItemsInDom.forEach((function (t) { -1 === s.indexOf(t) && x("#" + t).remove() })), s }, w.prototype.getPreviousSlideIndex = function () { var t = 0; try { var e = this.outer.find(".lg-current").first().attr("id"); t = parseInt(e.split("-")[3]) || 0 } catch (e) { t = 0 } return t }, w.prototype.setDownloadValue = function (t) { if (this.settings.download) { var e = this.galleryItems[t]; if (!1 === e.downloadUrl || "false" === e.downloadUrl) this.outer.addClass("lg-hide-download"); else { var i = this.getElementById("lg-download"); this.outer.removeClass("lg-hide-download"), i.attr("href", e.downloadUrl || e.src), e.download && i.attr("download", e.download) } } }, w.prototype.makeSlideAnimation = function (t, e, i) { var s = this; this.lGalleryOn && i.addClass("lg-slide-progress"), setTimeout((function () { s.outer.addClass("lg-no-trans"), s.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"), "prev" === t ? (e.addClass("lg-prev-slide"), i.addClass("lg-next-slide")) : (e.addClass("lg-next-slide"), i.addClass("lg-prev-slide")), setTimeout((function () { s.outer.find(".lg-item").removeClass("lg-current"), e.addClass("lg-current"), s.outer.removeClass("lg-no-trans") }), 50) }), this.lGalleryOn ? this.settings.slideDelay : 0) }, w.prototype.slide = function (t, e, i, s) { var n = this, o = this.getPreviousSlideIndex(); if (this.currentItemsInDom = this.organizeSlideItems(t, o), !this.lGalleryOn || o !== t) { var r = this.galleryItems.length; if (!this.lgBusy) { this.settings.counter && this.updateCurrentCounter(t); var l = this.getSlideItem(t), a = this.getSlideItem(o), d = this.galleryItems[t], c = d.__slideVideoInfo; if (this.outer.attr("data-lg-slide-type", this.getSlideType(d)), this.setDownloadValue(t), c) { var u = this.mediaContainerPosition, m = u.top, p = u.bottom, f = E(this.items[t], this.outer, m + p, c && this.settings.videoMaxSize); this.resizeVideoSlide(t, f) } if (this.LGel.trigger(g, { prevIndex: o, index: t, fromTouch: !!e, fromThumb: !!i }), this.lgBusy = !0, clearTimeout(this.hideBarTimeout), this.arrowDisable(t), s || (t < o ? s = "prev" : t > o && (s = "next")), e) { this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide"); var y = void 0, v = void 0; r > 2 ? (y = t - 1, v = t + 1, (0 === t && o === r - 1 || t === r - 1 && 0 === o) && (v = 0, y = r - 1)) : (y = 0, v = 1), "prev" === s ? this.getSlideItem(v).addClass("lg-next-slide") : this.getSlideItem(y).addClass("lg-prev-slide"), l.addClass("lg-current") } else this.makeSlideAnimation(s, l, a); this.lGalleryOn ? setTimeout((function () { n.loadContent(t, !0), ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(t) }), this.settings.speed + 50 + (e ? 0 : this.settings.slideDelay)) : this.loadContent(t, !0), setTimeout((function () { n.lgBusy = !1, a.removeClass("lg-slide-progress"), n.LGel.trigger(h, { prevIndex: o, index: t, fromTouch: e, fromThumb: i }) }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (e ? 0 : this.settings.slideDelay)) } this.index = t } }, w.prototype.updateCurrentCounter = function (t) { this.getElementById("lg-counter-current").html(t + 1 + "") }, w.prototype.updateCounterTotal = function () { this.getElementById("lg-counter-all").html(this.galleryItems.length + "") }, w.prototype.getSlideType = function (t) { return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image" }, w.prototype.touchMove = function (t, e, i) { var s = e.pageX - t.pageX, n = e.pageY - t.pageY, o = !1; if (this.swipeDirection ? o = !0 : Math.abs(s) > 15 ? (this.swipeDirection = "horizontal", o = !0) : Math.abs(n) > 15 && (this.swipeDirection = "vertical", o = !0), o) { var r = this.getSlideItem(this.index); if ("horizontal" === this.swipeDirection) { null == i || i.preventDefault(), this.outer.addClass("lg-dragging"), this.setTranslate(r, s, 0); var l = r.get().offsetWidth, a = 15 * l / 100 - Math.abs(10 * s / 100); this.setTranslate(this.outer.find(".lg-prev-slide").first(), -l + s - a, 0), this.setTranslate(this.outer.find(".lg-next-slide").first(), l + s + a, 0) } else if ("vertical" === this.swipeDirection && this.settings.swipeToClose) { null == i || i.preventDefault(), this.$container.addClass("lg-dragging-vertical"); var d = 1 - Math.abs(n) / window.innerHeight; this.$backdrop.css("opacity", d); var g = 1 - Math.abs(n) / (2 * window.innerWidth); this.setTranslate(r, 0, n, g, g), Math.abs(n) > 100 && this.outer.addClass("lg-hide-items").removeClass("lg-components-open") } } }, w.prototype.touchEnd = function (t, e, i) { var s, n = this; "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"), setTimeout((function () { n.$container.removeClass("lg-dragging-vertical"), n.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open"); var o = !0; if ("horizontal" === n.swipeDirection) { s = t.pageX - e.pageX; var r = Math.abs(t.pageX - e.pageX); s < 0 && r > n.settings.swipeThreshold ? (n.goToNextSlide(!0), o = !1) : s > 0 && r > n.settings.swipeThreshold && (n.goToPrevSlide(!0), o = !1) } else if ("vertical" === n.swipeDirection) { if (s = Math.abs(t.pageY - e.pageY), n.settings.closable && n.settings.swipeToClose && s > 100) return void n.closeGallery(); n.$backdrop.css("opacity", 1) } if (n.outer.find(".lg-item").removeAttr("style"), o && Math.abs(t.pageX - e.pageX) < 5) { var l = x(i.target); n.isPosterElement(l) && n.LGel.trigger(c) } n.swipeDirection = void 0 })), setTimeout((function () { n.outer.hasClass("lg-dragging") || "lg-slide" === n.settings.mode || n.outer.removeClass("lg-slide") }), this.settings.speed + 100) }, w.prototype.enableSwipe = function () { var t = this, e = {}, i = {}, s = !1, n = !1; this.settings.enableSwipe && (this.$inner.on("touchstart.lg", (function (i) { t.dragOrSwipeEnabled = !0; var s = t.getSlideItem(t.index); !x(i.target).hasClass("lg-item") && !s.get().contains(i.target) || t.outer.hasClass("lg-zoomed") || t.lgBusy || 1 !== i.touches.length || (n = !0, t.touchAction = "swipe", t.manageSwipeClass(), e = { pageX: i.touches[0].pageX, pageY: i.touches[0].pageY }) })), this.$inner.on("touchmove.lg", (function (o) { n && "swipe" === t.touchAction && 1 === o.touches.length && (i = { pageX: o.touches[0].pageX, pageY: o.touches[0].pageY }, t.touchMove(e, i, o), s = !0) })), this.$inner.on("touchend.lg", (function (o) { if ("swipe" === t.touchAction) { if (s) s = !1, t.touchEnd(i, e, o); else if (n) { var r = x(o.target); t.isPosterElement(r) && t.LGel.trigger(c) } t.touchAction = void 0, n = !1 } }))) }, w.prototype.enableDrag = function () { var t = this, e = {}, i = {}, s = !1, n = !1; this.settings.enableDrag && (this.outer.on("mousedown.lg", (function (i) { t.dragOrSwipeEnabled = !0; var n = t.getSlideItem(t.index); (x(i.target).hasClass("lg-item") || n.get().contains(i.target)) && (t.outer.hasClass("lg-zoomed") || t.lgBusy || (i.preventDefault(), t.lgBusy || (t.manageSwipeClass(), e = { pageX: i.pageX, pageY: i.pageY }, s = !0, t.outer.get().scrollLeft += 1, t.outer.get().scrollLeft -= 1, t.outer.removeClass("lg-grab").addClass("lg-grabbing"), t.LGel.trigger(u)))) })), x(window).on("mousemove.lg.global" + this.lgId, (function (o) { s && t.lgOpened && (n = !0, i = { pageX: o.pageX, pageY: o.pageY }, t.touchMove(e, i), t.LGel.trigger(m)) })), x(window).on("mouseup.lg.global" + this.lgId, (function (o) { if (t.lgOpened) { var r = x(o.target); n ? (n = !1, t.touchEnd(i, e, o), t.LGel.trigger(p)) : t.isPosterElement(r) && t.LGel.trigger(c), s && (s = !1, t.outer.removeClass("lg-grabbing").addClass("lg-grab")) } }))) }, w.prototype.triggerPosterClick = function () { var t = this; this.$inner.on("click.lg", (function (e) { !t.dragOrSwipeEnabled && t.isPosterElement(x(e.target)) && t.LGel.trigger(c) })) }, w.prototype.manageSwipeClass = function () { var t = this.index + 1, e = this.index - 1; this.settings.loop && this.galleryItems.length > 2 && (0 === this.index ? e = this.galleryItems.length - 1 : this.index === this.galleryItems.length - 1 && (t = 0)), this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"), e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"), this.getSlideItem(t).addClass("lg-next-slide") }, w.prototype.goToNextSlide = function (t) { var e = this, i = this.settings.loop; t && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index + 1 < this.galleryItems.length ? (this.index++, this.LGel.trigger(f, { index: this.index }), this.slide(this.index, !!t, !1, "next")) : i ? (this.index = 0, this.LGel.trigger(f, { index: this.index }), this.slide(this.index, !!t, !1, "next")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-right-end"), setTimeout((function () { e.outer.removeClass("lg-right-end") }), 400))) }, w.prototype.goToPrevSlide = function (t) { var e = this, i = this.settings.loop; t && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index > 0 ? (this.index--, this.LGel.trigger(y, { index: this.index, fromTouch: t }), this.slide(this.index, !!t, !1, "prev")) : i ? (this.index = this.galleryItems.length - 1, this.LGel.trigger(y, { index: this.index, fromTouch: t }), this.slide(this.index, !!t, !1, "prev")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-left-end"), setTimeout((function () { e.outer.removeClass("lg-left-end") }), 400))) }, w.prototype.keyPress = function () { var t = this; x(window).on("keydown.lg.global" + this.lgId, (function (e) { t.lgOpened && !0 === t.settings.escKey && 27 === e.keyCode && (e.preventDefault(), t.settings.allowMediaOverlap && t.outer.hasClass("lg-can-toggle") && t.outer.hasClass("lg-components-open") ? t.outer.removeClass("lg-components-open") : t.closeGallery()), t.lgOpened && t.galleryItems.length > 1 && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide())) })) }, w.prototype.arrow = function () { var t = this; this.getElementById("lg-prev").on("click.lg", (function () { t.goToPrevSlide() })), this.getElementById("lg-next").on("click.lg", (function () { t.goToNextSlide() })) }, w.prototype.arrowDisable = function (t) { if (!this.settings.loop && this.settings.hideControlOnEnd) { var e = this.getElementById("lg-prev"), i = this.getElementById("lg-next"); t + 1 === this.galleryItems.length ? i.attr("disabled", "disabled").addClass("disabled") : i.removeAttr("disabled").removeClass("disabled"), 0 === t ? e.attr("disabled", "disabled").addClass("disabled") : e.removeAttr("disabled").removeClass("disabled") } }, w.prototype.setTranslate = function (t, e, i, s, n) { void 0 === s && (s = 1), void 0 === n && (n = 1), t.css("transform", "translate3d(" + e + "px, " + i + "px, 0px) scale3d(" + s + ", " + n + ", 1)") }, w.prototype.mousewheel = function () { var t = this, e = 0; this.outer.on("wheel.lg", (function (i) { if (i.deltaY && !(t.galleryItems.length < 2)) { i.preventDefault(); var s = (new Date).getTime(); s - e < 1e3 || (e = s, i.deltaY > 0 ? t.goToNextSlide() : i.deltaY < 0 && t.goToPrevSlide()) } })) }, w.prototype.isSlideElement = function (t) { return t.hasClass("lg-outer") || t.hasClass("lg-item") || t.hasClass("lg-img-wrap") || t.hasClass("lg-img-rotate") }, w.prototype.isPosterElement = function (t) { var e = this.getSlideItem(this.index).find(".lg-video-play-button").get(); return t.hasClass("lg-video-poster") || t.hasClass("lg-video-play-button") || e && e.contains(t.get()) }, w.prototype.toggleMaximize = function () { var t = this; this.getElementById("lg-maximize").on("click.lg", (function () { t.$container.toggleClass("lg-inline"), t.refreshOnResize() })) }, w.prototype.invalidateItems = function () { for (var t = 0; t < this.items.length; t++) { var e = x(this.items[t]); e.off("click.lgcustom-item-" + e.attr("data-lg-id")) } }, w.prototype.trapFocus = function () { var t = this; this.$container.get().focus({ preventScroll: !0 }), x(window).on("keydown.lg.global" + this.lgId, (function (e) { if (t.lgOpened && ("Tab" === e.key || 9 === e.keyCode)) { var i = k(t.$container.get()), s = i[0], n = i[i.length - 1]; e.shiftKey ? document.activeElement === s && (n.focus(), e.preventDefault()) : document.activeElement === n && (s.focus(), e.preventDefault()) } })) }, w.prototype.manageCloseGallery = function () { var t = this; if (this.settings.closable) { var e = !1; this.getElementById("lg-close").on("click.lg", (function () { t.closeGallery() })), this.settings.closeOnTap && (this.outer.on("mousedown.lg", (function (i) { var s = x(i.target); e = !!t.isSlideElement(s) })), this.outer.on("mousemove.lg", (function () { e = !1 })), this.outer.on("mouseup.lg", (function (i) { var s = x(i.target); t.isSlideElement(s) && e && (t.outer.hasClass("lg-dragging") || t.closeGallery()) }))) } }, w.prototype.closeGallery = function (t) { var e = this; if (!this.lgOpened || !this.settings.closable && !t) return 0; this.LGel.trigger(v), this.settings.resetScrollPosition && !this.settings.hideScrollbar && x(window).scrollTop(this.prevScrollTop); var i, s = this.items[this.index]; if (this.zoomFromOrigin && s) { var n = this.mediaContainerPosition, o = n.top, r = n.bottom, l = this.galleryItems[this.index], a = l.__slideVideoInfo, d = l.poster, g = E(s, this.outer, o + r, a && d && this.settings.videoMaxSize); i = O(s, this.outer, o, r, g) } this.zoomFromOrigin && i ? (this.outer.addClass("lg-closing lg-zoom-from-image"), this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", i)) : (this.outer.addClass("lg-hide-items"), this.outer.removeClass("lg-zoom-from-image")), this.destroyModules(), this.lGalleryOn = !1, this.isDummyImageRemoved = !1, this.zoomFromOrigin = this.settings.zoomFromOrigin, clearTimeout(this.hideBarTimeout), this.hideBarTimeout = !1, x("html").removeClass("lg-on"), this.outer.removeClass("lg-visible lg-components-open"), this.$backdrop.removeClass("in").css("opacity", 0); var h = this.zoomFromOrigin && i ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration; return this.$container.removeClass("lg-show-in"), setTimeout((function () { e.zoomFromOrigin && i && e.outer.removeClass("lg-zoom-from-image"), e.$container.removeClass("lg-show"), e.resetScrollBar(), e.$backdrop.removeAttr("style").css("transition-duration", e.settings.backdropDuration + "ms"), e.outer.removeClass("lg-closing " + e.settings.startClass), e.getSlideItem(e.index).removeClass("lg-start-end-progress"), e.$inner.empty(), e.lgOpened && e.LGel.trigger(b, { instance: e }), e.$container.get() && e.$container.get().blur(), e.lgOpened = !1 }), h + 100), h + 100 }, w.prototype.initModules = function () { this.plugins.forEach((function (t) { try { t.init() } catch (t) { console.warn("lightGallery:- make sure lightGallery module is properly initiated") } })) }, w.prototype.destroyModules = function (t) { this.plugins.forEach((function (e) { try { t ? e.destroy() : e.closeGallery && e.closeGallery() } catch (t) { console.warn("lightGallery:- make sure lightGallery module is properly destroyed") } })) }, w.prototype.refresh = function (t) { this.settings.dynamic || this.invalidateItems(), this.galleryItems = t || this.getItems(), this.updateControls(), this.openGalleryOnItemClick(), this.LGel.trigger(o) }, w.prototype.updateControls = function () { this.addSlideVideoInfo(this.galleryItems), this.updateCounterTotal(), this.manageSingleSlideClassName() }, w.prototype.destroyGallery = function () { this.destroyModules(!0), this.settings.dynamic || this.invalidateItems(), x(window).off(".lg.global" + this.lgId), this.LGel.off(".lg"), this.$container.remove() }, w.prototype.destroy = function () { var t = this.closeGallery(!0); return t ? setTimeout(this.destroyGallery.bind(this), t) : this.destroyGallery(), t }, w }(); return function (t, e) { return new H(t, e) } }));

window.addEventListener('DOMContentLoaded', () => {
	maskPhone()
})

function maskPhone() {
	const phoneInputs = document.querySelectorAll('[type="tel"]')

	phoneInputs.forEach(input => {
		input.setAttribute('data-original-placeholder', input.placeholder)

		let firstFocus = true;

		input.addEventListener('focus', function () {
			if (!this.value) {
				if (firstFocus) {
					input.blur()
					firstFocus = false
				} else {
					this.value = '+7 ('
					this.placeholder = ''
				}
			}

			setTimeout(() => {
				this.setSelectionRange(this.value.length, this.value.length)
			}, 0)
		})

		input.addEventListener('input', function (event) {
			const isDelete = event.inputType === 'deleteContentBackward'
			let raw = this.value
			const digits = raw.replace(/\D/g, '')

			if (isDelete) {
				return
			}

			let formatted = formatWithMask(digits)

			this.value = formatted

			setTimeout(() => {
				const pos = this.value.indexOf('_')
				setCursorPosition(this, pos === -1 ? this.value.length : pos)
			}, 0)
		})

		input.addEventListener('paste', function (e) {
			e.preventDefault()
			let pasted = (e.clipboardData || window.clipboardData).getData('text')
			pasted = pasted.replace(/\D/g, '')
			this.value = formatWithMask(pasted)
		})

		input.addEventListener('change', function () {
			const submit = input.closest('form').querySelector('[type="submit"]') || input.closest('form').querySelector('button:not([type="button"])')

			if (!submit) return
			const validLength = this.value.startsWith('8') ? 17 : 18
			if (this.value.length < validLength) {
				this.reportValidity()
				this.classList.add('error')
			} else {
				this.classList.remove('error')
			}
		})
	})

	function formatWithMask(digits) {
		if (!digits) return ''

		if (digits[0] !== '7' && digits[0] !== '8') {
			digits = '7' + digits
		}

		const mask = digits[0] === '8' ? '8 (___) ___ __ __' : '+7 (___) ___ __ __'

		let i = 0
		let formatted = ''

		for (const char of mask) {
			if (i >= digits.length) break
			if (char === '_' || /\d/.test(char)) {
				formatted += digits[i++]
			} else {
				formatted += char
			}
		}

		return formatted
	}

	function setCursorPosition(el, pos) {
		el.setSelectionRange(pos, pos)
	}
}

/* 
	================================================
	  
	Всплывающие уведомления
	
	================================================
*/

class Notify {
  constructor(t) {
    (this._title = !1 !== t.title && (t.title || "")),
      (this._text = t.text || ""),
      (this._theme = t.theme || "success"),
      (this._autohide = t.autohide ? t.autohide : false),
      (this._interval = +t.interval || 5e3),
      this._create(),
      this._el.addEventListener("click", (t) => {
        if (t.target.classList.contains("notify__item-close")) {
          _notifySlideUp(this._el, 200);
          setTimeout(() => {
            this._hide();
          }, 200);
        }
      }),
      this._show(),
      _notifySlideDown(this._el, 500);
  }
  _show() {
    this._el.classList.add("notify__item-show"),
      this._autohide &&
        setTimeout(() => {
          if (this._autohide == true || this._autohide.toLowerCase() == "true") {
            _notifySlideUp(this._el, 300);
            setTimeout(() => {
              this._hide();
            }, 400);
          }
        }, this._interval);
  }
  _hide() {
    this._el.classList.remove("notify__item-show");
    const t = new CustomEvent("hide.notify", {
      detail: {
        target: this._el,
      },
    });
    document.dispatchEvent(t);
    this._el.remove();
  }
  _create() {
    const t = document.createElement("div");
    t.classList.add(`notify__item_${this._theme}`);
    t.classList.add("notify__item");

    let e = `
				<div class="notify__item-content">
  				<div class="notify__item-left">
    				<div class="notify__item-icon">
    				</div>
  				</div>
  				<div class="notify__item-right">
  					{header}
  					<div class="notify__item-text"></div>
  				</div>
				</div>
				<button class="notify__item-close">
					<svg class="close-icon"><use xlink:href="assets/img/sprite.svg#close"></use></svg>
				</button>
			`;

    const s = !1 === this._title ? "" : '<div class="notify__item-title"></div>';
    if (((e = e.replace("{header}", s)), (t.innerHTML = e), this._title ? (t.querySelector(".notify__item-title").textContent = this._title) : t.classList.add("notify_message"), (t.querySelector(".notify__item-text").innerHTML = this._text), (this._el = t), !document.querySelector(".notify"))) {
      const t = document.createElement("div");
      t.classList.add("notify"), document.body.append(t);
    }
    document.querySelector(".notify").prepend(this._el);
  }
}

// Плавно скрыть с анимацией слайда
const _notifySlideUp = (target, duration = 400, showmore = 0) => {
  if (target && !target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingBlock = 0;
    target.style.marginBlock = 0;
    window.setTimeout(() => {
      target.style.display = !showmore ? "none" : "block";
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      document.dispatchEvent(
        new CustomEvent("slideUpDone", {
          detail: {
            target: target,
          },
        })
      );
    }, duration);
  }
};

// Плавно показать с анимацией слайда
const _notifySlideDown = (target, duration = 400) => {
  if (target && !target.classList.contains("_slide")) {
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingBLock = 0;
    target.style.marginBlock = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  }
};

let notifyItems = document.querySelectorAll("[data-notify]");

notifyItems.forEach((item) => {
  item.addEventListener("click", function () {
    initNotify(item);
  });
});

function initNotify(item) {
  let title = item.getAttribute("data-notify").split(",")[0];
  let text = item.getAttribute("data-notify").split(",")[1];
  let theme = item.getAttribute("data-notify").split(",")[2] ? item.getAttribute("data-notify").split(",")[2] : "";
  let autohide = item.getAttribute("data-notify").split(",")[3] ? item.getAttribute("data-notify").split(",")[3] : "true";

  let interval = item.getAttribute("data-notify").split(",")[4] ? item.getAttribute("data-notify").split(",")[4] : "2000";

  new Notify({
    title: title.trim(),
    text: text.trim(),
    theme: theme.trim(),
    autohide: autohide,
    interval: interval,
  });
}

document.querySelectorAll("[data-notify-default]").forEach((item) => {
  initNotify(item);
});

(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? (module.exports = factory()) : typeof define === "function" && define.amd ? define(factory) : ((global = typeof globalThis !== "undefined" ? globalThis : global || self), (global.SlimSelect = factory()));
})(this, function () {
  "use strict";

  function generateID() {
    return Math.random().toString(36).substring(2, 10);
  }

  function hasClassInTree(element, className) {
    function hasClass(e, c) {
      if (c && e && e.classList && e.classList.contains(c)) {
        return e;
      }
      if (c && e && e.dataset && e.dataset.id && e.dataset.id === className) {
        return e;
      }
      return null;
    }

    function parentByClass(e, c) {
      if (!e || e === document) {
        return null;
      } else if (hasClass(e, c)) {
        return e;
      } else {
        return parentByClass(e.parentNode, c);
      }
    }
    return hasClass(element, className) || parentByClass(element, className);
  }

  function debounce(func, wait = 50, immediate = false) {
    let timeout;
    return function (...args) {
      const context = self;
      const later = () => {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  function isEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  function kebabCase(str) {
    const result = str.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, (match) => "-" + match.toLowerCase());
    return str[0] === str[0].toUpperCase() ? result.substring(1) : result;
  }

  class Optgroup {
    constructor(optgroup) {
      this.id = !optgroup.id || optgroup.id === "" ? generateID() : optgroup.id;
      this.label = optgroup.label || "";
      this.selectAll = optgroup.selectAll === undefined ? false : optgroup.selectAll;
      this.selectAllText = optgroup.selectAllText || "Select All";
      this.closable = optgroup.closable || "off";
      this.options = [];
      if (optgroup.options) {
        for (const o of optgroup.options) {
          this.options.push(new Option(o));
        }
      }
    }
  }
  class Option {
    constructor(option) {
      this.id = !option.id || option.id === "" ? generateID() : option.id;
      this.value = option.value === undefined ? option.text : option.value;
      this.text = option.text || "";
      this.html = option.html || "";
      this.selected = option.selected !== undefined ? option.selected : false;
      this.display = option.display !== undefined ? option.display : true;
      this.disabled = option.disabled !== undefined ? option.disabled : false;
      this.mandatory = option.mandatory !== undefined ? option.mandatory : false;
      this.placeholder = option.placeholder !== undefined ? option.placeholder : false;
      this.class = option.class || "";
      this.style = option.style || "";
      this.data = option.data || {};
    }
  }
  class Store {
    constructor(type, data) {
      this.selectType = "single";
      this.data = [];
      this.selectType = type;
      this.setData(data);
    }
    validateDataArray(data) {
      if (!Array.isArray(data)) {
        return new Error("Data must be an array");
      }
      for (let dataObj of data) {
        if (dataObj instanceof Optgroup || "label" in dataObj) {
          if (!("label" in dataObj)) {
            return new Error("Optgroup must have a label");
          }
          if ("options" in dataObj && dataObj.options) {
            for (let option of dataObj.options) {
              return this.validateOption(option);
            }
          }
        } else if (dataObj instanceof Option || "text" in dataObj) {
          return this.validateOption(dataObj);
        } else {
          return new Error("Data object must be a valid optgroup or option");
        }
      }
      return null;
    }
    validateOption(option) {
      if (!("text" in option)) {
        return new Error("Option must have a text");
      }
      return null;
    }
    partialToFullData(data) {
      let dataFinal = [];
      data.forEach((dataObj) => {
        if (dataObj instanceof Optgroup || "label" in dataObj) {
          let optOptions = [];
          if ("options" in dataObj && dataObj.options) {
            dataObj.options.forEach((option) => {
              optOptions.push(new Option(option));
            });
          }
          if (optOptions.length > 0) {
            dataFinal.push(new Optgroup(dataObj));
          }
        }
        if (dataObj instanceof Option || "text" in dataObj) {
          dataFinal.push(new Option(dataObj));
        }
      });
      return dataFinal;
    }
    setData(data) {
      this.data = this.partialToFullData(data);
      if (this.selectType === "single") {
        this.setSelectedBy("value", this.getSelected());
      }
    }
    getData() {
      return this.filter(null, true);
    }
    getDataOptions() {
      return this.filter(null, false);
    }
    addOption(option) {
      this.setData(this.getData().concat(new Option(option)));
    }
    setSelectedBy(selectedType, selectedValues) {
      let firstOption = null;
      let hasSelected = false;
      for (let dataObj of this.data) {
        if (dataObj instanceof Optgroup) {
          for (let option of dataObj.options) {
            if (!firstOption) {
              firstOption = option;
            }
            option.selected = hasSelected ? false : selectedValues.includes(option[selectedType]);
            if (option.selected && this.selectType === "single") {
              hasSelected = true;
            }
          }
        }
        if (dataObj instanceof Option) {
          if (!firstOption) {
            firstOption = dataObj;
          }
          dataObj.selected = hasSelected ? false : selectedValues.includes(dataObj[selectedType]);
          if (dataObj.selected && this.selectType === "single") {
            hasSelected = true;
          }
        }
      }
      if (this.selectType === "single" && firstOption && !hasSelected) {
        firstOption.selected = true;
      }
    }
    getSelected() {
      let selectedOptions = this.getSelectedOptions();
      let selectedValues = [];
      selectedOptions.forEach((option) => {
        selectedValues.push(option.value);
      });
      return selectedValues;
    }
    getSelectedOptions() {
      return this.filter((opt) => {
        return opt.selected;
      }, false);
    }
    getSelectedIDs() {
      let selectedOptions = this.getSelectedOptions();
      let selectedIDs = [];
      selectedOptions.forEach((op) => {
        selectedIDs.push(op.id);
      });
      return selectedIDs;
    }
    getOptgroupByID(id) {
      for (let dataObj of this.data) {
        if (dataObj instanceof Optgroup && dataObj.id === id) {
          return dataObj;
        }
      }
      return null;
    }
    getOptionByID(id) {
      let options = this.filter((opt) => {
        return opt.id === id;
      }, false);
      return options.length ? options[0] : null;
    }
    getSelectType() {
      return this.selectType;
    }
    getFirstOption() {
      let option = null;
      for (let dataObj of this.data) {
        if (dataObj instanceof Optgroup) {
          option = dataObj.options[0];
        } else if (dataObj instanceof Option) {
          option = dataObj;
        }
        if (option) {
          break;
        }
      }
      return option;
    }
    search(search, searchFilter) {
      search = search.trim();
      if (search === "") {
        return this.getData();
      }
      return this.filter((opt) => {
        return searchFilter(opt, search);
      }, true);
    }
    filter(filter, includeOptgroup) {
      const dataSearch = [];
      this.data.forEach((dataObj) => {
        if (dataObj instanceof Optgroup) {
          let optOptions = [];
          dataObj.options.forEach((option) => {
            if (!filter || filter(option)) {
              if (!includeOptgroup) {
                dataSearch.push(new Option(option));
              } else {
                optOptions.push(new Option(option));
              }
            }
          });
          if (optOptions.length > 0) {
            let optgroup = new Optgroup(dataObj);
            optgroup.options = optOptions;
            dataSearch.push(optgroup);
          }
        }
        if (dataObj instanceof Option) {
          if (!filter || filter(dataObj)) {
            dataSearch.push(new Option(dataObj));
          }
        }
      });
      return dataSearch;
    }
  }

  class Render {
    constructor(settings, store, callbacks) {
      this.classes = {
        main: "select",
        placeholder: "select__placeholder",
        values: "select__values",
        single: "select__single",
        max: "ss-max",
        value: "select__value",
        valueText: "select__value-text",
        valueDelete: "select__value-delete",
        valueOut: "ss-value-out",
        deselect: "select__deselect",
        deselectPath: "M10,10 L90,90 M10,90 L90,10",
        arrow: "select__arrow",
        arrowClose: "M10,30 L50,70 L90,30",
        arrowOpen: "M10,70 L50,30 L90,70",
        content: "select__content",
        openAbove: "select_open-top",
        openBelow: "select_open-bottom",
        search: "select__input",
        searchHighlighter: "select__input-highlight",
        searching: "select__searching",
        addable: "ss-addable",
        addablePath: "M50,10 L50,90 M10,50 L90,50",
        list: "select__options",
        optgroup: "select__optgroup",
        optgroupLabel: "select__optgroup-label",
        optgroupLabelText: "select__optgroup-label-text",
        optgroupActions: "select__optgroup-actions",
        optgroupSelectAll: "select__optgroup-selectall",
        optgroupSelectAllBox: "M60,10 L10,10 L10,90 L90,90 L90,50",
        optgroupSelectAllCheck: "M30,45 L50,70 L90,10",
        optgroupClosable: "ss-closable",
        option: "select__option",
        optionDelete: "M10,10 L90,90 M10,90 L90,10",
        highlighted: "highlighted",
        open: "ss-open",
        close: "ss-close",
        selected: "selected",
        error: "error",
        disabled: "disabled",
        hide: "hidden",
      };
      this.store = store;
      this.settings = settings;
      this.callbacks = callbacks;
      this.main = this.mainDiv();
      this.content = this.contentDiv();
      this.updateClassStyles();
      this.updateAriaAttributes();
      this.settings.contentLocation.appendChild(this.content.main);
    }
    enable() {
      this.main.main.classList.remove(this.classes.disabled);
      this.content.search.input.disabled = false;
    }
    disable() {
      this.main.main.classList.add(this.classes.disabled);
      this.content.search.input.disabled = true;
    }
    open() {
      // this.main.arrow.path.setAttribute('d', this.classes.arrowOpen);
      this.main.main.classList.add(this.settings.openPosition === "up" ? this.classes.openAbove : this.classes.openBelow);
      this.main.main.setAttribute("aria-expanded", "true");
      this.moveContent();
      const selectedOptions = this.store.getSelectedOptions();
      if (selectedOptions.length) {
        const selectedId = selectedOptions[selectedOptions.length - 1].id;
        const selectedOption = this.content.list.querySelector('[data-id="' + selectedId + '"]');
        if (selectedOption) {
          this.ensureElementInView(this.content.list, selectedOption);
        }
      }
    }
    close() {
      this.main.main.classList.remove(this.classes.openAbove);
      this.main.main.classList.remove(this.classes.openBelow);
      this.main.main.setAttribute("aria-expanded", "false");
      this.content.main.classList.remove(this.classes.openAbove);
      this.content.main.classList.remove(this.classes.openBelow);
      // this.main.arrow.path.setAttribute('d', this.classes.arrowClose);
    }
    updateClassStyles() {
      this.main.main.className = "";
      this.main.main.removeAttribute("style");
      this.content.main.className = "";
      this.content.main.removeAttribute("style");
      this.main.main.classList.add(this.classes.main);
      this.content.main.classList.add(this.classes.content);
      if (this.settings.style !== "") {
        this.main.main.style.cssText = this.settings.style;
        this.content.main.style.cssText = this.settings.style;
      }
      if (this.settings.class.length) {
        for (const c of this.settings.class) {
          if (c.trim() !== "") {
            this.main.main.classList.add(c.trim());
            this.content.main.classList.add(c.trim());
          }
        }
      }
      if (this.settings.contentPosition === "relative") {
        this.content.main.classList.add("ss-" + this.settings.contentPosition);
      }
    }
    updateAriaAttributes() {
      this.main.main.role = "combobox";
      this.main.main.setAttribute("aria-haspopup", "listbox");
      this.main.main.setAttribute("aria-controls", this.content.main.id);
      this.main.main.setAttribute("aria-expanded", "false");
      this.content.main.setAttribute("role", "listbox");
    }
    mainDiv() {
      var _a;
      const main = document.createElement("div");
      main.dataset.id = this.settings.id;
      main.setAttribute("aria-label", this.settings.ariaLabel);
      main.tabIndex = 0;
      main.onkeydown = (e) => {
        switch (e.key) {
          case "ArrowUp":
          case "ArrowDown":
            this.callbacks.open();
            e.key === "ArrowDown" ? this.highlight("down") : this.highlight("up");
            return false;
          case "Tab":
            this.callbacks.close();
            return true;
          case "Enter":
          case " ":
            this.callbacks.open();
            const highlighted = this.content.list.querySelector("." + this.classes.highlighted);
            if (highlighted) {
              highlighted.click();
            }
            return false;
          case "Escape":
            this.callbacks.close();
            return false;
        }
      };

      main.onclick = (e) => {
        if (this.settings.disabled) {
          return;
        }
        this.settings.isOpen ? this.callbacks.close() : this.callbacks.open();
      };

      const values = document.createElement("div");
      values.classList.add(this.classes.values);
      main.appendChild(values);

      const deselect = document.createElement("button");
      deselect.type = "button";
      deselect.classList.add(this.classes.deselect);

      const selectedOptions = (_a = this.store) === null || _a === void 0 ? void 0 : _a.getSelectedOptions();

      if (!this.settings.allowDeselect || (this.settings.isMultiple && selectedOptions && selectedOptions.length <= 0)) {
        deselect.classList.add(this.classes.hide);
      } else {
        deselect.classList.remove(this.classes.hide);
      }

      deselect.onclick = (e) => {
        e.stopPropagation();
        if (this.settings.disabled) {
          return;
        }

        let shouldDelete = true;
        const before = this.store.getSelectedOptions();
        const after = [];

        if (this.callbacks.beforeChange) {
          shouldDelete = this.callbacks.beforeChange(after, before) === true;
        }

        if (shouldDelete) {
          if (this.settings.isMultiple) {
            this.callbacks.setSelected([], false);
            this.updateDeselectAll();
          } else {
            const firstOption = this.store.getFirstOption();
            const value = firstOption ? firstOption.value : "";
            this.callbacks.setSelected(value, false);
          }
          if (this.settings.closeOnSelect) {
            this.callbacks.close();
          }
          if (this.callbacks.afterChange) {
            this.callbacks.afterChange(this.store.getSelectedOptions());
          }
        }
      };

      const deselectSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      deselectSvg.setAttribute("viewBox", "0 0 100 100");

      const deselectPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      deselectPath.setAttribute("d", this.classes.deselectPath);
      deselectSvg.appendChild(deselectPath);
      deselect.appendChild(deselectSvg);
      main.appendChild(deselect);

      const arrow = document.createElement("button");
      arrow.type = "button";
      arrow.classList.add(this.classes.arrow);

      if (this.settings.alwaysOpen) {
        arrow.classList.add(this.classes.hide);
      }
      main.appendChild(arrow);

      return {
        main: main,
        values: values,
        deselect: {
          main: deselect,
          svg: deselectSvg,
        },
        arrow: {
          main: arrow,
        },
      };
    }
    mainFocus(eventType) {
      if (eventType !== "click") {
        this.main.main.focus({
          preventScroll: true,
        });
      }
    }
    placeholder() {
      const placeholderOption = this.store.filter((o) => o.placeholder, false);
      let placeholderText = this.settings.placeholderText;
      if (placeholderOption.length) {
        if (placeholderOption[0].html !== "") {
          placeholderText = placeholderOption[0].html;
        } else if (placeholderOption[0].text !== "") {
          placeholderText = placeholderOption[0].text;
        }
      }
      const placeholder = document.createElement("div");
      placeholder.classList.add(this.classes.placeholder);
      placeholder.innerHTML = placeholderText;
      return placeholder;
    }
    renderValues() {
      if (!this.settings.isMultiple) {
        this.renderSingleValue();
        return;
      }
      this.renderMultipleValues();
      this.updateDeselectAll();
    }
    renderSingleValue() {
      const selected = this.store.filter((o) => {
        return o.selected && !o.placeholder;
      }, false);
      const selectedSingle = selected.length > 0 ? selected[0] : null;
      if (!selectedSingle) {
        this.main.values.innerHTML = this.placeholder().outerHTML;
      } else {
        const singleValue = document.createElement("div");
        singleValue.classList.add(this.classes.single);
        if (selectedSingle.html) {
          singleValue.innerHTML = selectedSingle.html;
        } else {
          singleValue.innerText = selectedSingle.text;
        }
        this.main.values.innerHTML = singleValue.outerHTML;
      }
      if (!this.settings.allowDeselect || !selected.length) {
        this.main.deselect.main.classList.add(this.classes.hide);
      } else {
        this.main.deselect.main.classList.remove(this.classes.hide);
      }
    }
    renderMultipleValues() {
      let currentNodes = this.main.values.childNodes;
      let selectedOptions = this.store.filter((opt) => {
        return opt.selected && opt.display;
      }, false);
      if (selectedOptions.length === 0) {
        this.main.values.innerHTML = this.placeholder().outerHTML;
        return;
      } else {
        const placeholder = this.main.values.querySelector("." + this.classes.placeholder);
        if (placeholder) {
          placeholder.remove();
        }
      }
      if (selectedOptions.length > this.settings.maxValuesShown) {
        const singleValue = document.createElement("div");
        singleValue.classList.add(this.classes.max);
        singleValue.textContent = this.settings.maxValuesMessage.replace("{number}", selectedOptions.length.toString());
        this.main.values.innerHTML = singleValue.outerHTML;
        return;
      } else {
        const maxValuesMessage = this.main.values.querySelector("." + this.classes.max);
        if (maxValuesMessage) {
          maxValuesMessage.remove();
        }
      }
      let removeNodes = [];
      for (let i = 0; i < currentNodes.length; i++) {
        const node = currentNodes[i];
        const id = node.getAttribute("data-id");
        if (id) {
          const found = selectedOptions.filter((opt) => {
            return opt.id === id;
          }, false);
          if (!found.length) {
            removeNodes.push(node);
          }
        }
      }
      for (const n of removeNodes) {
        n.classList.add(this.classes.valueOut);
        setTimeout(() => {
          if (this.main.values.hasChildNodes() && this.main.values.contains(n)) {
            this.main.values.removeChild(n);
          }
        }, 100);
      }
      currentNodes = this.main.values.childNodes;
      for (let d = 0; d < selectedOptions.length; d++) {
        let shouldAdd = true;
        for (let i = 0; i < currentNodes.length; i++) {
          if (selectedOptions[d].id === String(currentNodes[i].dataset.id)) {
            shouldAdd = false;
          }
        }
        if (shouldAdd) {
          if (this.settings.keepOrder) {
            this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
          } else {
            if (currentNodes.length === 0) {
              this.main.values.appendChild(this.multipleValue(selectedOptions[d]));
            } else if (d === 0) {
              this.main.values.insertBefore(this.multipleValue(selectedOptions[d]), currentNodes[d]);
            } else {
              currentNodes[d - 1].insertAdjacentElement("afterend", this.multipleValue(selectedOptions[d]));
            }
          }
        }
      }
    }
    multipleValue(option) {
      const value = document.createElement("div");
      value.classList.add(this.classes.value);
      value.dataset.id = option.id;
      const text = document.createElement("div");
      text.classList.add(this.classes.valueText);
      text.innerText = option.text;
      value.appendChild(text);
      if (!option.mandatory) {
        const deleteDiv = document.createElement("div");
        deleteDiv.classList.add(this.classes.valueDelete);
        deleteDiv.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (this.settings.disabled) {
            return;
          }
          let shouldDelete = true;
          const before = this.store.getSelectedOptions();
          const after = before.filter((o) => {
            return o.selected && o.id !== option.id;
          }, true);
          if (this.settings.minSelected && after.length < this.settings.minSelected) {
            return;
          }
          if (this.callbacks.beforeChange) {
            shouldDelete = this.callbacks.beforeChange(after, before) === true;
          }
          if (shouldDelete) {
            let selectedValues = [];
            for (const o of after) {
              if (o instanceof Optgroup) {
                for (const c of o.options) {
                  selectedValues.push(c.value);
                }
              }
              if (o instanceof Option) {
                selectedValues.push(o.value);
              }
            }
            this.callbacks.setSelected(selectedValues, false);
            if (this.settings.closeOnSelect) {
              this.callbacks.close();
            }
            if (this.callbacks.afterChange) {
              this.callbacks.afterChange(after);
            }
            this.updateDeselectAll();
          }
        };

        const deleteIcon = document.createElement("span");
        deleteDiv.appendChild(deleteIcon);

        value.appendChild(deleteDiv);
      }
      return value;
    }
    contentDiv() {
      const main = document.createElement("div");
      main.dataset.id = this.settings.id;

      const search = this.searchDiv();
      main.appendChild(search.main);

      const list = this.listDiv();
      main.appendChild(list);

      return {
        main: main,
        search: search,
        list: list,
      };
    }
    moveContent() {
      if (this.settings.contentPosition === "relative") {
        this.moveContentBelow();
        return;
      }
      if (this.settings.openPosition === "down") {
        this.moveContentBelow();
        return;
      } else if (this.settings.openPosition === "up") {
        this.moveContentAbove();
        return;
      }
      if (this.putContent() === "up") {
        this.moveContentAbove();
      } else {
        this.moveContentBelow();
      }
    }
    searchDiv() {
      const main = document.createElement("div");
      const input = document.createElement("input");
      const addable = document.createElement("div");

      main.classList.add(this.classes.search);

      const searchReturn = {
        main,
        input,
      };

      if (!this.settings.showSearch) {
        main.classList.add(this.classes.hide);
        input.readOnly = true;
      }

      input.type = "search";
      input.placeholder = this.settings.searchPlaceholder;
      input.tabIndex = -1;
      input.setAttribute("aria-label", this.settings.searchPlaceholder);
      input.setAttribute("autocapitalize", "off");
      input.setAttribute("autocomplete", "off");
      input.setAttribute("autocorrect", "off");
      input.oninput = debounce((e) => {
        this.callbacks.search(e.target.value);
      }, 100);
      input.onkeydown = (e) => {
        switch (e.key) {
          case "ArrowUp":
          case "ArrowDown":
            e.key === "ArrowDown" ? this.highlight("down") : this.highlight("up");
            return false;
          case "Tab":
            this.callbacks.close();
            return true;
          case "Escape":
            this.callbacks.close();
            return false;
          case "Enter":
          case " ":
            if (this.callbacks.addable && e.ctrlKey) {
              addable.click();
              return false;
            } else {
              const highlighted = this.content.list.querySelector("." + this.classes.highlighted);
              if (highlighted) {
                highlighted.click();
                return false;
              }
            }
            return true;
        }
        return true;
      };

      main.appendChild(input);

      if (this.callbacks.addable) {
        addable.classList.add(this.classes.addable);
        const plus = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        plus.setAttribute("viewBox", "0 0 100 100");
        const plusPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        plusPath.setAttribute("d", this.classes.addablePath);
        plus.appendChild(plusPath);
        addable.appendChild(plus);
        addable.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (!this.callbacks.addable) {
            return;
          }
          const inputValue = this.content.search.input.value.trim();
          if (inputValue === "") {
            this.content.search.input.focus();
            return;
          }
          const runFinish = (oo) => {
            let newOption = new Option(oo);
            this.callbacks.addOption(newOption);
            if (this.settings.isMultiple) {
              let values = this.store.getSelected();
              values.push(newOption.value);
              this.callbacks.setSelected(values, true);
            } else {
              this.callbacks.setSelected([newOption.value], true);
            }
            this.callbacks.search("");
            if (this.settings.closeOnSelect) {
              setTimeout(() => {
                this.callbacks.close();
              }, 100);
            }
          };
          const addableValue = this.callbacks.addable(inputValue);
          if (addableValue === false || addableValue === undefined || addableValue === null) {
            return;
          }
          if (addableValue instanceof Promise) {
            addableValue.then((value) => {
              if (typeof value === "string") {
                runFinish({
                  text: value,
                  value: value,
                });
              } else {
                runFinish(value);
              }
            });
          } else if (typeof addableValue === "string") {
            runFinish({
              text: addableValue,
              value: addableValue,
            });
          } else {
            runFinish(addableValue);
          }
          return;
        };

        main.appendChild(addable);
        searchReturn.addable = {
          main: addable,
          svg: plus,
          path: plusPath,
        };
      }

      return searchReturn;
    }
    searchFocus() {
      // this.content.search.input.focus();
    }
    getOptions(notPlaceholder = false, notDisabled = false, notHidden = false) {
      let query = "." + this.classes.option;
      if (notPlaceholder) {
        query += ":not(." + this.classes.placeholder + ")";
      }
      if (notDisabled) {
        query += ":not(." + this.classes.disabled + ")";
      }
      if (notHidden) {
        query += ":not(." + this.classes.hide + ")";
      }
      return Array.from(this.content.list.querySelectorAll(query));
    }
    highlight(dir) {
      const options = this.getOptions(true, true, true);
      if (options.length === 0) {
        return;
      }
      if (options.length === 1) {
        if (!options[0].classList.contains(this.classes.highlighted)) {
          options[0].classList.add(this.classes.highlighted);
          return;
        }
      }
      let highlighted = false;
      for (const o of options) {
        if (o.classList.contains(this.classes.highlighted)) {
          highlighted = true;
        }
      }
      if (!highlighted) {
        for (const o of options) {
          if (o.classList.contains(this.classes.selected)) {
            o.classList.add(this.classes.highlighted);
            break;
          }
        }
      }
      for (let i = 0; i < options.length; i++) {
        if (options[i].classList.contains(this.classes.highlighted)) {
          const prevOption = options[i];
          prevOption.classList.remove(this.classes.highlighted);
          const prevParent = prevOption.parentElement;
          if (prevParent && prevParent.classList.contains(this.classes.open)) {
            const optgroupLabel = prevParent.querySelector("." + this.classes.optgroupLabel);
            if (optgroupLabel) {
              optgroupLabel.click();
            }
          }
          let selectOption = options[dir === "down" ? (i + 1 < options.length ? i + 1 : 0) : i - 1 >= 0 ? i - 1 : options.length - 1];
          selectOption.classList.add(this.classes.highlighted);
          this.ensureElementInView(this.content.list, selectOption);
          const selectParent = selectOption.parentElement;
          if (selectParent && selectParent.classList.contains(this.classes.close)) {
            const optgroupLabel = selectParent.querySelector("." + this.classes.optgroupLabel);
            if (optgroupLabel) {
              optgroupLabel.click();
            }
          }
          return;
        }
      }
      options[dir === "down" ? 0 : options.length - 1].classList.add(this.classes.highlighted);
      this.ensureElementInView(this.content.list, options[dir === "down" ? 0 : options.length - 1]);
    }
    listDiv() {
      const options = document.createElement("div");
      options.classList.add(this.classes.list);
      return options;
    }
    renderError(error) {
      this.content.list.innerHTML = "";
      const errorDiv = document.createElement("div");
      errorDiv.classList.add(this.classes.error);
      errorDiv.textContent = error;
      this.content.list.appendChild(errorDiv);
    }
    renderSearching() {
      this.content.list.innerHTML = "";
      const searchingDiv = document.createElement("div");
      searchingDiv.classList.add(this.classes.searching);
      searchingDiv.textContent = this.settings.searchingText;
      this.content.list.appendChild(searchingDiv);
    }
    renderOptions(data) {
      this.content.list.innerHTML = "";
      if (data.length === 0) {
        const noResults = document.createElement("div");
        noResults.classList.add(this.classes.search);
        noResults.innerHTML = this.settings.searchText;
        this.content.list.appendChild(noResults);
        return;
      }
      for (const d of data) {
        if (d instanceof Optgroup) {
          const optgroupEl = document.createElement("div");
          optgroupEl.classList.add(this.classes.optgroup);
          const optgroupLabel = document.createElement("div");
          optgroupLabel.classList.add(this.classes.optgroupLabel);
          optgroupEl.appendChild(optgroupLabel);
          const optgroupLabelText = document.createElement("div");
          optgroupLabelText.classList.add(this.classes.optgroupLabelText);
          optgroupLabelText.textContent = d.label;
          optgroupLabel.appendChild(optgroupLabelText);
          const optgroupActions = document.createElement("div");
          optgroupActions.classList.add(this.classes.optgroupActions);
          optgroupLabel.appendChild(optgroupActions);
          if (this.settings.isMultiple && d.selectAll) {
            const selectAll = document.createElement("button");

            selectAll.classList.add(this.classes.optgroupSelectAll);
            selectAll.type = "button";

            let allSelected = true;
            for (const o of d.options) {
              if (!o.selected) {
                allSelected = false;
                break;
              }
            }
            if (allSelected) {
              selectAll.classList.add(this.classes.selected);
            }
            const selectAllText = document.createElement("span");
            selectAllText.textContent = d.selectAllText;
            selectAll.appendChild(selectAllText);
            const selectAllSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            selectAllSvg.setAttribute("viewBox", "0 0 100 100");
            selectAll.appendChild(selectAllSvg);
            const selectAllBox = document.createElementNS("http://www.w3.org/2000/svg", "path");
            selectAllBox.setAttribute("d", this.classes.optgroupSelectAllBox);
            selectAllSvg.appendChild(selectAllBox);
            const selectAllCheck = document.createElementNS("http://www.w3.org/2000/svg", "path");
            selectAllCheck.setAttribute("d", this.classes.optgroupSelectAllCheck);
            selectAllSvg.appendChild(selectAllCheck);
            selectAll.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              const currentSelected = this.store.getSelected();
              if (allSelected) {
                const newSelected = currentSelected.filter((s) => {
                  for (const o of d.options) {
                    if (s === o.value) {
                      return false;
                    }
                  }
                  return true;
                });
                this.callbacks.setSelected(newSelected, true);
                return;
              } else {
                const newSelected = currentSelected.concat(d.options.map((o) => o.value));
                for (const o of d.options) {
                  if (!this.store.getOptionByID(o.id)) {
                    this.callbacks.addOption(o);
                  }
                }
                this.callbacks.setSelected(newSelected, true);
                return;
              }
            });
            optgroupActions.appendChild(selectAll);
          }
          if (d.closable !== "off") {
            const optgroupClosable = document.createElement("div");
            optgroupClosable.classList.add(this.classes.optgroupClosable);
            const optgroupClosableSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            optgroupClosableSvg.setAttribute("viewBox", "0 0 100 100");
            optgroupClosableSvg.classList.add(this.classes.arrow);
            optgroupClosable.appendChild(optgroupClosableSvg);
            const optgroupClosableArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
            optgroupClosableSvg.appendChild(optgroupClosableArrow);
            if (d.options.some((o) => o.selected) || this.content.search.input.value.trim() !== "") {
              optgroupClosable.classList.add(this.classes.open);
              optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
            } else if (d.closable === "open") {
              optgroupEl.classList.add(this.classes.open);
              optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
            } else if (d.closable === "close") {
              optgroupEl.classList.add(this.classes.close);
              optgroupClosableArrow.setAttribute("d", this.classes.arrowClose);
            }
            optgroupLabel.addEventListener("click", (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (optgroupEl.classList.contains(this.classes.close)) {
                optgroupEl.classList.remove(this.classes.close);
                optgroupEl.classList.add(this.classes.open);
                optgroupClosableArrow.setAttribute("d", this.classes.arrowOpen);
              } else {
                optgroupEl.classList.remove(this.classes.open);
                optgroupEl.classList.add(this.classes.close);
                optgroupClosableArrow.setAttribute("d", this.classes.arrowClose);
              }
            });
            optgroupActions.appendChild(optgroupClosable);
          }
          optgroupEl.appendChild(optgroupLabel);
          for (const o of d.options) {
            optgroupEl.appendChild(this.option(o));
          }
          this.content.list.appendChild(optgroupEl);
        }
        if (d instanceof Option) {
          this.content.list.appendChild(this.option(d));
        }
      }
    }
    option(option) {
      if (option.placeholder) {
        const placeholder = document.createElement("div");
        placeholder.classList.add(this.classes.option);
        placeholder.classList.add(this.classes.hide);
        return placeholder;
      }

      const optionEl = document.createElement("div");
      optionEl.dataset.id = option.id;
      optionEl.id = option.id;
      optionEl.classList.add(this.classes.option);
      optionEl.setAttribute("role", "option");

      const textEl = document.createElement("div");
      textEl.classList.add("select__option-text");

      if (this.settings.searchHighlight && this.content.search.input.value.trim() !== "") {
        textEl.innerHTML = this.highlightText(option.html !== "" ? option.html : option.text, this.content.search.input.value, this.classes.searchHighlighter);
      } else if (option.html !== "") {
        textEl.innerHTML = option.html;
      } else {
        textEl.textContent = option.text;
      }

      optionEl.appendChild(textEl);

      if (option.class) {
        option.class.split(" ").forEach((dataClass) => {
          optionEl.classList.add(dataClass);
        });
      }
      if (option.style) {
        optionEl.style.cssText = option.style;
      }

      if (this.settings.showOptionTooltips && optionEl.textContent) {
        optionEl.setAttribute("title", optionEl.textContent);
      }
      if (!option.display) {
        optionEl.classList.add(this.classes.hide);
      }
      if (option.disabled) {
        optionEl.classList.add(this.classes.disabled);
      }
      if (option.selected && this.settings.hideSelected) {
        optionEl.classList.add(this.classes.hide);
      }
      if (option.selected) {
        optionEl.classList.add(this.classes.selected);
        optionEl.setAttribute("aria-selected", "true");
        this.main.main.setAttribute("aria-activedescendant", optionEl.id);
      } else {
        optionEl.classList.remove(this.classes.selected);
        optionEl.setAttribute("aria-selected", "false");
      }
      optionEl.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedOptions = this.store.getSelected();
        const element = e.currentTarget;
        const elementID = String(element.dataset.id);
        if (option.disabled || (option.selected && !this.settings.allowDeselect)) {
          return;
        }
        if ((this.settings.isMultiple && this.settings.maxSelected <= selectedOptions.length && !option.selected) || (this.settings.isMultiple && this.settings.minSelected >= selectedOptions.length && option.selected)) {
          return;
        }
        let shouldUpdate = false;
        const before = this.store.getSelectedOptions();
        let after = [];
        if (this.settings.isMultiple) {
          if (option.selected) {
            after = before.filter((o) => o.id !== elementID);
          } else {
            after = before.concat(option);
          }
        }
        if (!this.settings.isMultiple) {
          if (option.selected) {
            after = [];
          } else {
            after = [option];
          }
        }
        if (!this.callbacks.beforeChange) {
          shouldUpdate = true;
        }
        if (this.callbacks.beforeChange) {
          if (this.callbacks.beforeChange(after, before) === false) {
            shouldUpdate = false;
          } else {
            shouldUpdate = true;
          }
        }
        if (shouldUpdate) {
          if (!this.store.getOptionByID(elementID)) {
            this.callbacks.addOption(option);
          }
          this.callbacks.setSelected(
            after.map((o) => o.value),
            false
          );
          if (this.settings.closeOnSelect) {
            this.callbacks.close();
          }
          if (this.callbacks.afterChange) {
            this.callbacks.afterChange(after);
          }
        }
      });
      return optionEl;
    }
    destroy() {
      this.main.main.remove();
      this.content.main.remove();
    }
    highlightText(str, search, className) {
      let completedString = str;
      const regex = new RegExp("(" + search.trim() + ")(?![^<]*>[^<>]*</)", "i");
      if (!str.match(regex)) {
        return str;
      }
      const matchStartPosition = str.match(regex).index;
      const matchEndPosition = matchStartPosition + str.match(regex)[0].toString().length;
      const originalTextFoundByRegex = str.substring(matchStartPosition, matchEndPosition);
      completedString = completedString.replace(regex, `<mark class="${className}">${originalTextFoundByRegex}</mark>`);
      return completedString;
    }
    moveContentAbove() {
      const mainHeight = this.main.main.offsetHeight;
      const contentHeight = this.content.main.offsetHeight;
      this.main.main.classList.remove(this.classes.openBelow);
      this.main.main.classList.add(this.classes.openAbove);
      this.content.main.classList.remove(this.classes.openBelow);
      this.content.main.classList.add(this.classes.openAbove);
      const containerRect = this.main.main.getBoundingClientRect();
      this.content.main.style.margin = "-" + (mainHeight + contentHeight - 1) + "px 0px 0px 0px";
      this.content.main.style.top = containerRect.top + containerRect.height + window.scrollY + "px";

      if (this.openPositionX == "left") {
        this.content.main.style.left = containerRect.left + window.scrollX + "px";
      } else {
        this.content.main.style.right = window.innerWidth - containerRect.right + window.scrollX + "px";
      }

      this.content.main.style.width = containerRect.width + "px";
    }
    moveContentBelow() {
      this.main.main.classList.remove(this.classes.openAbove);
      this.main.main.classList.add(this.classes.openBelow);
      this.content.main.classList.remove(this.classes.openAbove);
      this.content.main.classList.add(this.classes.openBelow);
      const containerRect = this.main.main.getBoundingClientRect();
      this.content.main.style.margin = "-1px 0px 0px 0px";
      if (this.settings.contentPosition !== "relative") {
        this.content.main.style.top = containerRect.top + containerRect.height + window.scrollY + "px";

        if (this.settings.openPositionX == "left") {
          this.content.main.style.left = containerRect.left + window.scrollX + "px";
        } else {
          this.content.main.style.right = window.innerWidth - containerRect.right + window.scrollX + "px";
        }

        this.content.main.style.width = containerRect.width + "px";
      }
    }
    ensureElementInView(container, element) {
      const cTop = container.scrollTop + container.offsetTop;
      const cBottom = cTop + container.clientHeight;
      const eTop = element.offsetTop;
      const eBottom = eTop + element.clientHeight;
      if (eTop < cTop) {
        container.scrollTop -= cTop - eTop;
      } else if (eBottom > cBottom) {
        container.scrollTop += eBottom - cBottom;
      }
    }
    putContent() {
      const mainHeight = this.main.main.offsetHeight;
      const mainRect = this.main.main.getBoundingClientRect();
      const contentHeight = this.content.main.offsetHeight;
      const spaceBelow = window.innerHeight - (mainRect.top + mainHeight);
      if (spaceBelow <= contentHeight) {
        if (mainRect.top > contentHeight) {
          return "up";
        } else {
          return "down";
        }
      }
      return "down";
    }
    updateDeselectAll() {
      if (!this.store || !this.settings) {
        return;
      }
      const selected = this.store.getSelectedOptions();
      const hasSelectedItems = selected && selected.length > 0;
      const isMultiple = this.settings.isMultiple;
      const allowDeselect = this.settings.allowDeselect;
      const deselectButton = this.main.deselect.main;
      const hideClass = this.classes.hide;
      if (allowDeselect && !(isMultiple && !hasSelectedItems)) {
        deselectButton.classList.remove(hideClass);
      } else {
        deselectButton.classList.add(hideClass);
      }
    }
  }

  class Select {
    constructor(select) {
      this.listen = false;
      this.observer = null;
      this.select = select;
      this.valueChange = this.valueChange.bind(this);
      this.select.addEventListener("change", this.valueChange, {
        passive: true,
      });
      this.observer = new MutationObserver(this.observeCall.bind(this));
      this.changeListen(true);
    }
    enable() {
      this.select.disabled = false;
    }
    disable() {
      this.select.disabled = true;
    }
    hideUI() {
      this.select.tabIndex = -1;
      this.select.setAttribute("aria-hidden", "true");

      if (this.select.hasAttribute("required")) {
        this.select.style.opacity = "0";
        this.select.style.position = "absolute";

        setTimeout(() => {
          this.select.nextElementSibling.insertAdjacentElement("beforeend", this.select);
        }, 200);
      } else {
        this.select.style.display = "none";
      }
    }
    showUI() {
      this.select.removeAttribute("tabindex");
      this.select.style.display = "";
      this.select.removeAttribute("aria-hidden");
    }
    changeListen(listen) {
      this.listen = listen;
      if (listen) {
        if (this.observer) {
          this.observer.observe(this.select, {
            subtree: true,
            childList: true,
            attributes: true,
          });
        }
      }
      if (!listen) {
        if (this.observer) {
          this.observer.disconnect();
        }
      }
    }
    valueChange(ev) {
      if (this.listen && this.onValueChange) {
        this.onValueChange(this.getSelectedValues());
      }
      return true;
    }
    observeCall(mutations) {
      if (!this.listen) {
        return;
      }
      let classChanged = false;
      let disabledChanged = false;
      let optgroupOptionChanged = false;
      for (const m of mutations) {
        if (m.target === this.select) {
          if (m.attributeName === "disabled") {
            disabledChanged = true;
          }
          if (m.attributeName === "class") {
            classChanged = true;
          }
        }
        if (m.target.nodeName === "OPTGROUP" || m.target.nodeName === "OPTION") {
          optgroupOptionChanged = true;
        }
      }
      if (classChanged && this.onClassChange) {
        this.onClassChange(this.select.className.split(" "));
      }
      if (disabledChanged && this.onDisabledChange) {
        this.changeListen(false);
        this.onDisabledChange(this.select.disabled);
        this.changeListen(true);
      }
      if (optgroupOptionChanged && this.onOptionsChange) {
        this.changeListen(false);
        this.onOptionsChange(this.getData());
        this.changeListen(true);
      }
    }
    getData() {
      let data = [];
      const nodes = this.select.childNodes;
      for (const n of nodes) {
        if (n.nodeName === "OPTGROUP") {
          data.push(this.getDataFromOptgroup(n));
        }
        if (n.nodeName === "OPTION") {
          data.push(this.getDataFromOption(n));
        }
      }
      return data;
    }
    getDataFromOptgroup(optgroup) {
      let data = {
        id: optgroup.id,
        label: optgroup.label,
        selectAll: optgroup.dataset ? optgroup.dataset.selectall === "true" : false,
        selectAllText: optgroup.dataset ? optgroup.dataset.selectalltext : "Select all",
        closable: optgroup.dataset ? optgroup.dataset.closable : "off",
        options: [],
      };
      const options = optgroup.childNodes;
      for (const o of options) {
        if (o.nodeName === "OPTION") {
          data.options.push(this.getDataFromOption(o));
        }
      }
      return data;
    }
    getDataFromOption(option) {
      return {
        id: option.id,
        value: option.value,
        text: option.text,
        html: option.dataset && option.dataset.html ? option.dataset.html : "",
        selected: option.selected,
        display: option.style.display === "none" ? false : true,
        disabled: option.disabled,
        mandatory: option.dataset ? option.dataset.mandatory === "true" : false,
        placeholder: option.dataset.placeholder === "true",
        class: option.className,
        style: option.style.cssText,
        data: option.dataset,
      };
    }
    getSelectedValues() {
      let values = [];
      const options = this.select.childNodes;
      for (const o of options) {
        if (o.nodeName === "OPTGROUP") {
          const optgroupOptions = o.childNodes;
          for (const oo of optgroupOptions) {
            if (oo.nodeName === "OPTION") {
              const option = oo;
              if (option.selected) {
                values.push(option.value);
              }
            }
          }
        }
        if (o.nodeName === "OPTION") {
          const option = o;
          if (option.selected) {
            values.push(option.value);
          }
        }
      }
      return values;
    }
    setSelected(value) {
      this.changeListen(false);
      const options = this.select.childNodes;
      for (const o of options) {
        if (o.nodeName === "OPTGROUP") {
          const optgroup = o;
          const optgroupOptions = optgroup.childNodes;
          for (const oo of optgroupOptions) {
            if (oo.nodeName === "OPTION") {
              const option = oo;
              option.selected = value.includes(option.value);
            }
          }
        }
        if (o.nodeName === "OPTION") {
          const option = o;
          option.selected = value.includes(option.value);
        }
      }
      this.changeListen(true);
    }
    updateSelect(id, style, classes) {
      this.changeListen(false);
      if (id) {
        this.select.dataset.id = id;
      }
      if (style) {
        this.select.style.cssText = style;
      }
      if (classes) {
        this.select.className = "";
        classes.forEach((c) => {
          if (c.trim() !== "") {
            this.select.classList.add(c.trim());
          }
        });
      }
      this.changeListen(true);
    }
    updateOptions(data) {
      this.changeListen(false);
      this.select.innerHTML = "";
      for (const d of data) {
        if (d instanceof Optgroup) {
          this.select.appendChild(this.createOptgroup(d));
        }
        if (d instanceof Option) {
          this.select.appendChild(this.createOption(d));
        }
      }
      this.select.dispatchEvent(new Event("change"));
      this.changeListen(true);
    }
    createOptgroup(optgroup) {
      const optgroupEl = document.createElement("optgroup");
      optgroupEl.id = optgroup.id;
      optgroupEl.label = optgroup.label;
      if (optgroup.selectAll) {
        optgroupEl.dataset.selectAll = "true";
      }
      if (optgroup.closable !== "off") {
        optgroupEl.dataset.closable = optgroup.closable;
      }
      if (optgroup.options) {
        for (const o of optgroup.options) {
          optgroupEl.appendChild(this.createOption(o));
        }
      }
      return optgroupEl;
    }
    createOption(info) {
      const optionEl = document.createElement("option");
      optionEl.id = info.id;
      optionEl.value = info.value;
      optionEl.innerHTML = info.text;
      if (info.html !== "") {
        optionEl.setAttribute("data-html", info.html);
      }
      if (info.selected) {
        optionEl.selected = info.selected;
      }
      if (info.disabled) {
        optionEl.disabled = true;
      }
      if (info.display === false) {
        optionEl.style.display = "none";
      }
      if (info.placeholder) {
        optionEl.setAttribute("data-placeholder", "true");
      }
      if (info.mandatory) {
        optionEl.setAttribute("data-mandatory", "true");
      }
      if (info.class) {
        info.class.split(" ").forEach((optionClass) => {
          optionEl.classList.add(optionClass);
        });
      }
      if (info.data && typeof info.data === "object") {
        Object.keys(info.data).forEach((key) => {
          optionEl.setAttribute("data-" + kebabCase(key), info.data[key]);
        });
      }
      return optionEl;
    }
    destroy() {
      this.changeListen(false);
      this.select.removeEventListener("change", this.valueChange);
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
      delete this.select.dataset.id;
      this.showUI();
    }
  }

  class Settings {
    constructor(settings) {
      this.id = "";
      this.style = "";
      this.class = [];
      this.isMultiple = false;
      this.isOpen = false;
      this.isFullOpen = false;
      this.intervalMove = null;
      if (!settings) {
        settings = {};
      }
      this.id = "ss-" + generateID();
      this.style = settings.style || "";
      this.class = settings.class || [];
      this.disabled = settings.disabled !== undefined ? settings.disabled : false;
      this.alwaysOpen = settings.alwaysOpen !== undefined ? settings.alwaysOpen : false;
      this.showSearch = settings.showSearch !== undefined ? settings.showSearch : true;
      this.ariaLabel = settings.ariaLabel || "Combobox";
      this.searchPlaceholder = settings.searchPlaceholder || "Search";
      this.searchText = settings.searchText || "No Results";
      this.searchingText = settings.searchingText || "Searching...";
      this.searchHighlight = settings.searchHighlight !== undefined ? settings.searchHighlight : false;
      this.closeOnSelect = settings.closeOnSelect !== undefined ? settings.closeOnSelect : true;
      this.contentLocation = settings.contentLocation || document.body;
      this.contentPosition = settings.contentPosition || "absolute";
      this.openPosition = settings.openPosition || "auto";
      this.openPositionX = settings.openPositionX ? settings.openPositionX : "left";

      this.placeholderText = settings.placeholderText;

      this.allowDeselect = settings.allowDeselect !== undefined ? settings.allowDeselect : false;
      this.hideSelected = settings.hideSelected !== undefined ? settings.hideSelected : false;
      this.keepOrder = settings.keepOrder !== undefined ? settings.keepOrder : false;
      this.showOptionTooltips = settings.showOptionTooltips !== undefined ? settings.showOptionTooltips : false;
      this.minSelected = settings.minSelected || 0;
      this.maxSelected = settings.maxSelected || 1000;
      this.timeoutDelay = settings.timeoutDelay || 200;
      this.maxValuesShown = settings.maxValuesShown || 20;
      this.maxValuesMessage = settings.maxValuesMessage || "{number} selected";
    }
  }

  class SlimSelect {
    constructor(config) {
      var _a;
      this.events = {
        search: undefined,
        searchFilter: (opt, search) => {
          return opt.text.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        },
        addable: undefined,
        beforeChange: undefined,
        afterChange: undefined,
        beforeOpen: undefined,
        afterOpen: undefined,
        beforeClose: undefined,
        afterClose: undefined,
      };
      this.windowResize = debounce(() => {
        if (!this.settings.isOpen && !this.settings.isFullOpen) {
          return;
        }
        this.render.moveContent();
      });
      this.windowScroll = debounce(() => {
        if (!this.settings.isOpen && !this.settings.isFullOpen) {
          return;
        }
        this.render.moveContent();
      });
      this.documentClick = (e) => {
        if (!this.settings.isOpen) {
          return;
        }
        if (e.target && !hasClassInTree(e.target, this.settings.id)) {
          this.close(e.type);
        }
      };
      this.windowVisibilityChange = () => {
        if (document.hidden) {
          this.close();
        }
      };

      this.selectEl = typeof config.select === "string" ? document.querySelector(config.select) : config.select;

      if (!this.selectEl) {
        if (config.events && config.events.error) {
          config.events.error(new Error("Could not find select element"));
        }
        return;
      }

      if (this.selectEl.tagName !== "SELECT") {
        if (config.events && config.events.error) {
          config.events.error(new Error("Element isnt of type select"));
        }
        return;
      }

      if (this.selectEl.dataset.ssid) {
        this.destroy();
      }

      this.settings = new Settings(config.settings);

      const debounceEvents = ["afterChange", "beforeOpen", "afterOpen", "beforeClose", "afterClose"];

      for (const key in config.events) {
        if (!config.events.hasOwnProperty(key)) {
          continue;
        }
        if (debounceEvents.indexOf(key) !== -1) {
          this.events[key] = debounce(config.events[key], 100);
        } else {
          this.events[key] = config.events[key];
        }
      }

      this.settings.disabled = ((_a = config.settings) === null || _a === void 0 ? void 0 : _a.disabled) ? config.settings.disabled : this.selectEl.disabled;
      this.settings.isMultiple = this.selectEl.multiple;
      this.settings.style = this.selectEl.style.cssText;
      this.settings.class = this.selectEl.className.split(" ");
      this.select = new Select(this.selectEl);
      this.select.updateSelect(this.settings.id, this.settings.style, this.settings.class);
      this.select.hideUI();
      this.select.onValueChange = (values) => {
        this.setSelected(values);
      };
      this.select.onClassChange = (classes) => {
        this.settings.class = classes;
        this.render.updateClassStyles();
      };
      this.select.onDisabledChange = (disabled) => {
        if (disabled) {
          this.disable();
        } else {
          this.enable();
        }
      };
      this.select.onOptionsChange = (data) => {
        this.setData(data);
      };
      this.store = new Store(this.settings.isMultiple ? "multiple" : "single", config.data ? config.data : this.select.getData());

      if (config.data) {
        this.select.updateOptions(this.store.getData());
      }

      const renderCallbacks = {
        open: this.open.bind(this),
        close: this.close.bind(this),
        addable: this.events.addable ? this.events.addable : undefined,
        setSelected: this.setSelected.bind(this),
        addOption: this.addOption.bind(this),
        search: this.search.bind(this),
        beforeChange: this.events.beforeChange,
        afterChange: this.events.afterChange,
      };

      this.render = new Render(this.settings, this.store, renderCallbacks);
      this.render.renderValues();
      this.render.renderOptions(this.store.getData());

      const selectAriaLabel = this.selectEl.getAttribute("aria-label");
      const selectAriaLabelledBy = this.selectEl.getAttribute("aria-labelledby");

      if (selectAriaLabel) {
        this.render.main.main.setAttribute("aria-label", selectAriaLabel);
      } else if (selectAriaLabelledBy) {
        this.render.main.main.setAttribute("aria-labelledby", selectAriaLabelledBy);
      }

      for (const attrName of this.selectEl.getAttributeNames()) {
        if (attrName.startsWith("data-")) {
          this.render.main.main.setAttribute(attrName, this.selectEl.getAttribute(attrName));
        }
      }

      if (this.selectEl.parentNode) {
        this.selectEl.parentNode.insertBefore(this.render.main.main, this.selectEl.nextSibling);
      }

      window.addEventListener("resize", this.windowResize, false);

      if (this.settings.openPosition === "auto") {
        window.addEventListener("scroll", this.windowScroll, false);
      }

      document.addEventListener("visibilitychange", this.windowVisibilityChange);

      if (this.settings.disabled) {
        this.disable();
      }

      if (this.settings.alwaysOpen) {
        this.open();
      }

      this.selectEl.slim = this;
    }

    enable() {
      this.settings.disabled = false;
      this.select.enable();
      this.render.enable();
    }

    disable() {
      this.settings.disabled = true;
      this.select.disable();
      this.render.disable();
    }

    getData() {
      return this.store.getData();
    }

    setData(data) {
      const selected = this.store.getSelected();
      const err = this.store.validateDataArray(data);
      if (err) {
        if (this.events.error) {
          this.events.error(err);
        }
        return;
      }
      this.store.setData(data);
      const dataClean = this.store.getData();
      this.select.updateOptions(dataClean);
      this.render.renderValues();
      this.render.renderOptions(dataClean);
      if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) {
        this.events.afterChange(this.store.getSelectedOptions());
      }
    }

    getSelected() {
      return this.store.getSelected();
    }

    setSelected(value, runAfterChange = true) {
      const selected = this.store.getSelected();
      this.store.setSelectedBy("value", Array.isArray(value) ? value : [value]);
      const data = this.store.getData();
      this.select.updateOptions(data);
      this.render.renderValues();
      if (this.render.content.search.input.value !== "") {
        this.search(this.render.content.search.input.value);
      } else {
        this.render.renderOptions(data);
      }
      if (runAfterChange && this.events.afterChange && !isEqual(selected, this.store.getSelected())) {
        this.events.afterChange(this.store.getSelectedOptions());
      }
    }

    addOption(option) {
      const selected = this.store.getSelected();
      if (
        !this.store.getDataOptions().some((o) => {
          var _a;
          return o.value === ((_a = option.value) !== null && _a !== void 0 ? _a : option.text);
        })
      ) {
        this.store.addOption(option);
      }
      const data = this.store.getData();
      this.select.updateOptions(data);
      this.render.renderValues();
      this.render.renderOptions(data);
      if (this.events.afterChange && !isEqual(selected, this.store.getSelected())) {
        this.events.afterChange(this.store.getSelectedOptions());
      }
    }

    open() {
      if (this.settings.disabled || this.settings.isOpen) {
        return;
      }
      if (this.events.beforeOpen) {
        this.events.beforeOpen();
      }
      this.render.open();
      if (this.settings.showSearch) {
        this.render.searchFocus();
      }
      this.settings.isOpen = true;
      setTimeout(() => {
        if (this.events.afterOpen) {
          this.events.afterOpen();
        }
        if (this.settings.isOpen) {
          this.settings.isFullOpen = true;
        }
        document.addEventListener("click", this.documentClick);
      }, this.settings.timeoutDelay);
      if (this.settings.contentPosition === "absolute") {
        if (this.settings.intervalMove) {
          clearInterval(this.settings.intervalMove);
        }
        this.settings.intervalMove = setInterval(this.render.moveContent.bind(this.render), 500);
      }
    }

    close(eventType = null) {
      if (!this.settings.isOpen || this.settings.alwaysOpen) {
        return;
      }
      if (this.events.beforeClose) {
        this.events.beforeClose();
      }
      this.render.close();
      if (this.render.content.search.input.value !== "") {
        this.search("");
      }
      this.render.mainFocus(eventType);
      this.settings.isOpen = false;
      this.settings.isFullOpen = false;
      setTimeout(() => {
        if (this.events.afterClose) {
          this.events.afterClose();
        }
        document.removeEventListener("click", this.documentClick);
      }, this.settings.timeoutDelay);
      if (this.settings.intervalMove) {
        clearInterval(this.settings.intervalMove);
      }
    }

    search(value) {
      if (this.render.content.search.input.value !== value) {
        this.render.content.search.input.value = value;
      }
      if (!this.events.search) {
        this.render.renderOptions(value === "" ? this.store.getData() : this.store.search(value, this.events.searchFilter));
        return;
      }
      this.render.renderSearching();
      const searchResp = this.events.search(value, this.store.getSelectedOptions());
      if (searchResp instanceof Promise) {
        searchResp
          .then((data) => {
            this.render.renderOptions(this.store.partialToFullData(data));
          })
          .catch((err) => {
            this.render.renderError(typeof err === "string" ? err : err.message);
          });
        return;
      } else if (Array.isArray(searchResp)) {
        this.render.renderOptions(this.store.partialToFullData(searchResp));
      } else {
        this.render.renderError("Search event must return a promise or an array of data");
      }
    }

    destroy() {
      document.removeEventListener("click", this.documentClick);
      window.removeEventListener("resize", this.windowResize, false);
      if (this.settings.openPosition === "auto") {
        window.removeEventListener("scroll", this.windowScroll, false);
      }
      document.removeEventListener("visibilitychange", this.windowVisibilityChange);
      this.store.setData([]);
      this.render.destroy();
      this.select.destroy();
    }
  }

  return SlimSelect;
});

/**
 * Swiper 11.0.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 22, 2023
 */

var Swiper = function () {
	"use strict";

	function e(e) {
		return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
	}

	function t(s, a) {
		void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i => {
			void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
		}))
	}
	const s = {
		body: {},
		addEventListener() { },
		removeEventListener() { },
		activeElement: {
			blur() { },
			nodeName: ""
		},
		querySelector: () => null,
		querySelectorAll: () => [],
		getElementById: () => null,
		createEvent: () => ({
			initEvent() { }
		}),
		createElement: () => ({
			children: [],
			childNodes: [],
			style: {},
			setAttribute() { },
			getElementsByTagName: () => []
		}),
		createElementNS: () => ({}),
		importNode: () => null,
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		}
	};

	function a() {
		const e = "undefined" != typeof document ? document : {};
		return t(e, s), e
	}
	const i = {
		document: s,
		navigator: {
			userAgent: ""
		},
		location: {
			hash: "",
			host: "",
			hostname: "",
			href: "",
			origin: "",
			pathname: "",
			protocol: "",
			search: ""
		},
		history: {
			replaceState() { },
			pushState() { },
			go() { },
			back() { }
		},
		CustomEvent: function () {
			return this
		},
		addEventListener() { },
		removeEventListener() { },
		getComputedStyle: () => ({
			getPropertyValue: () => ""
		}),
		Image() { },
		Date() { },
		screen: {},
		setTimeout() { },
		clearTimeout() { },
		matchMedia: () => ({}),
		requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
		cancelAnimationFrame(e) {
			"undefined" != typeof setTimeout && clearTimeout(e)
		}
	};

	function r() {
		const e = "undefined" != typeof window ? window : {};
		return t(e, i), e
	}

	function n(e) {
		return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
	}

	function l(e, t) {
		return void 0 === t && (t = 0), setTimeout(e, t)
	}

	function o() {
		return Date.now()
	}

	function d(e, t) {
		void 0 === t && (t = "x");
		const s = r();
		let a, i, n;
		const l = function (e) {
			const t = r();
			let s;
			return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
		}(e);
		return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
	}

	function c(e) {
		return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
	}

	function p() {
		const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
			t = ["__proto__", "constructor", "prototype"];
		for (let a = 1; a < arguments.length; a += 1) {
			const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
			if (null != i && (s = i, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
				const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
				for (let t = 0, a = s.length; t < a; t += 1) {
					const a = s[t],
						r = Object.getOwnPropertyDescriptor(i, a);
					void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {}, i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a])
				}
			}
		}
		var s;
		return e
	}

	function u(e, t, s) {
		e.style.setProperty(t, s)
	}

	function m(e) {
		let {
			swiper: t,
			targetPosition: s,
			side: a
		} = e;
		const i = r(),
			n = -t.translate;
		let l, o = null;
		const d = t.params.speed;
		t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
		const c = s > n ? "next" : "prev",
			p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
			u = () => {
				l = (new Date).getTime(), null === o && (o = l);
				const e = Math.max(Math.min((l - o) / d, 1), 0),
					r = .5 - Math.cos(e * Math.PI) / 2;
				let c = n + r * (s - n);
				if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
					[a]: c
				}), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
					t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
						[a]: c
					})
				})), void i.cancelAnimationFrame(t.cssModeFrameID);
				t.cssModeFrameID = i.requestAnimationFrame(u)
			};
		u()
	}

	function h(e) {
		return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
	}

	function f(e, t) {
		return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
	}

	function g(e) {
		try {
			return void console.warn(e)
		} catch (e) { }
	}

	function v(e, t) {
		void 0 === t && (t = []);
		const s = document.createElement(e);
		return s.classList.add(...Array.isArray(t) ? t : n(t)), s
	}

	function w(e) {
		const t = r(),
			s = a(),
			i = e.getBoundingClientRect(),
			n = s.body,
			l = e.clientTop || n.clientTop || 0,
			o = e.clientLeft || n.clientLeft || 0,
			d = e === t ? t.scrollY : e.scrollTop,
			c = e === t ? t.scrollX : e.scrollLeft;
		return {
			top: i.top + d - l,
			left: i.left + c - o
		}
	}

	function b(e, t) {
		return r().getComputedStyle(e, null).getPropertyValue(t)
	}

	function y(e) {
		let t, s = e;
		if (s) {
			for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
			return t
		}
	}

	function E(e, t) {
		const s = [];
		let a = e.parentElement;
		for (; a;) t ? a.matches(t) && s.push(a) : s.push(a), a = a.parentElement;
		return s
	}

	function x(e, t) {
		t && e.addEventListener("transitionend", (function s(a) {
			a.target === e && (t.call(e, a), e.removeEventListener("transitionend", s))
		}))
	}

	function S(e, t, s) {
		const a = r();
		return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
	}
	let T, M, C;

	function P() {
		return T || (T = function () {
			const e = r(),
				t = a();
			return {
				smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
				touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
			}
		}()), T
	}

	function L(e) {
		return void 0 === e && (e = {}), M || (M = function (e) {
			let {
				userAgent: t
			} = void 0 === e ? {} : e;
			const s = P(),
				a = r(),
				i = a.navigator.platform,
				n = t || a.navigator.userAgent,
				l = {
					ios: !1,
					android: !1
				},
				o = a.screen.width,
				d = a.screen.height,
				c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
			let p = n.match(/(iPad).*OS\s([\d_]+)/);
			const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
				m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
				h = "Win32" === i;
			let f = "MacIntel" === i;
			return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), f = !1), c && !h && (l.os = "android", l.android = !0), (p || m || u) && (l.os = "ios", l.ios = !0), l
		}(e)), M
	}

	function A() {
		return C || (C = function () {
			const e = r();
			let t = !1;

			function s() {
				const t = e.navigator.userAgent.toLowerCase();
				return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
			}
			if (s()) {
				const s = String(e.navigator.userAgent);
				if (s.includes("Version/")) {
					const [e, a] = s.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
					t = e < 16 || 16 === e && a < 2
				}
			}
			return {
				isSafari: t || s(),
				needPerspectiveFix: t,
				isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
			}
		}()), C
	}
	var I = {
		on(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ("function" != typeof t) return a;
			const i = s ? "unshift" : "push";
			return e.split(" ").forEach((e => {
				a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
			})), a
		},
		once(e, t, s) {
			const a = this;
			if (!a.eventsListeners || a.destroyed) return a;
			if ("function" != typeof t) return a;

			function i() {
				a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
				for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
				t.apply(a, r)
			}
			return i.__emitterProxy = t, a.on(e, i, s)
		},
		onAny(e, t) {
			const s = this;
			if (!s.eventsListeners || s.destroyed) return s;
			if ("function" != typeof e) return s;
			const a = t ? "unshift" : "push";
			return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
		},
		offAny(e) {
			const t = this;
			if (!t.eventsListeners || t.destroyed) return t;
			if (!t.eventsAnyListeners) return t;
			const s = t.eventsAnyListeners.indexOf(e);
			return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
		},
		off(e, t) {
			const s = this;
			return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
				void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
					(a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
				}))
			})), s) : s
		},
		emit() {
			const e = this;
			if (!e.eventsListeners || e.destroyed) return e;
			if (!e.eventsListeners) return e;
			let t, s, a;
			for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
			"string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), a = e) : (t = r[0].events, s = r[0].data, a = r[0].context || e), s.unshift(a);
			return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
				e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
					e.apply(a, [t, ...s])
				})), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
					e.apply(a, s)
				}))
			})), e
		}
	};
	const z = (e, t) => {
		if (!e || e.destroyed || !e.params) return;
		const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
		if (s) {
			let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
			!t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
				s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
			}))), t && t.remove()
		}
	},
		$ = (e, t) => {
			if (!e.slides[t]) return;
			const s = e.slides[t].querySelector('[loading="lazy"]');
			s && s.removeAttribute("loading")
		},
		k = e => {
			if (!e || e.destroyed || !e.params) return;
			let t = e.params.lazyPreloadPrevNext;
			const s = e.slides.length;
			if (!s || !t || t < 0) return;
			t = Math.min(t, s);
			const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
				i = e.activeIndex;
			if (e.params.grid && e.params.grid.rows > 1) {
				const s = i,
					r = [s - t];
				return r.push(...Array.from({
					length: t
				}).map(((e, t) => s + a + t))), void e.slides.forEach(((t, s) => {
					r.includes(t.column) && $(e, s)
				}))
			}
			const r = i + a - 1;
			if (e.params.rewind || e.params.loop)
				for (let a = i - t; a <= r + t; a += 1) {
					const t = (a % s + s) % s;
					(t < i || t > r) && $(e, t)
				} else
				for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1) a !== i && (a > r || a < i) && $(e, a)
		};
	var O = {
		updateSize: function () {
			const e = this;
			let t, s;
			const a = e.el;
			t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10), s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
				width: t,
				height: s,
				size: e.isHorizontal() ? t : s
			}))
		},
		updateSlides: function () {
			const e = this;

			function t(t, s) {
				return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
			}
			const s = e.params,
				{
					wrapperEl: a,
					slidesEl: i,
					size: r,
					rtlTranslate: n,
					wrongRTL: l
				} = e,
				o = e.virtual && s.virtual.enabled,
				d = o ? e.virtual.slides.length : e.slides.length,
				c = f(i, `.${e.params.slideClass}, swiper-slide`),
				p = o ? e.virtual.slides.length : c.length;
			let m = [];
			const h = [],
				g = [];
			let v = s.slidesOffsetBefore;
			"function" == typeof v && (v = s.slidesOffsetBefore.call(e));
			let w = s.slidesOffsetAfter;
			"function" == typeof w && (w = s.slidesOffsetAfter.call(e));
			const y = e.snapGrid.length,
				E = e.slidesGrid.length;
			let x = s.spaceBetween,
				T = -v,
				M = 0,
				C = 0;
			if (void 0 === r) return;
			"string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)), e.virtualSize = -x, c.forEach((e => {
				n ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
			})), s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""), u(a, "--swiper-centered-offset-after", ""));
			const P = s.grid && s.grid.rows > 1 && e.grid;
			let L;
			P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
			const A = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
			for (let a = 0; a < p; a += 1) {
				let i;
				if (L = 0, c[a] && (i = c[a]), P && e.grid.updateSlide(a, i, c), !c[a] || "none" !== b(i, "display")) {
					if ("auto" === s.slidesPerView) {
						A && (c[a].style[e.getDirectionLabel("width")] = "");
						const r = getComputedStyle(i),
							n = i.style.transform,
							l = i.style.webkitTransform;
						if (n && (i.style.transform = "none"), l && (i.style.webkitTransform = "none"), s.roundLengths) L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
						else {
							const e = t(r, "width"),
								s = t(r, "padding-left"),
								a = t(r, "padding-right"),
								n = t(r, "margin-left"),
								l = t(r, "margin-right"),
								o = r.getPropertyValue("box-sizing");
							if (o && "border-box" === o) L = e + n + l;
							else {
								const {
									clientWidth: t,
									offsetWidth: r
								} = i;
								L = e + s + a + n + l + (r - t)
							}
						}
						n && (i.style.transform = n), l && (i.style.webkitTransform = l), s.roundLengths && (L = Math.floor(L))
					} else L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView, s.roundLengths && (L = Math.floor(L)), c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
					c[a] && (c[a].swiperSlideSize = L), g.push(L), s.centeredSlides ? (T = T + L / 2 + M / 2 + x, 0 === M && 0 !== a && (T = T - r / 2 - x), 0 === a && (T = T - r / 2 - x), Math.abs(T) < .001 && (T = 0), s.roundLengths && (T = Math.floor(T)), C % s.slidesPerGroup == 0 && m.push(T), h.push(T)) : (s.roundLengths && (T = Math.floor(T)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T), h.push(T), T = T + L + x), e.virtualSize += L + x, M = L, C += 1
				}
			}
			if (e.virtualSize = Math.max(e.virtualSize, r) + w, n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize + x}px`), s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`), P && e.grid.updateWrapperSize(L, m), !s.centeredSlides) {
				const t = [];
				for (let a = 0; a < m.length; a += 1) {
					let i = m[a];
					s.roundLengths && (i = Math.floor(i)), m[a] <= e.virtualSize - r && t.push(i)
				}
				m = t, Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r)
			}
			if (o && s.loop) {
				const t = g[0] + x;
				if (s.slidesPerGroup > 1) {
					const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
						i = t * s.slidesPerGroup;
					for (let e = 0; e < a; e += 1) m.push(m[m.length - 1] + i)
				}
				for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1) 1 === s.slidesPerGroup && m.push(m[m.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
			}
			if (0 === m.length && (m = [0]), 0 !== x) {
				const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
				c.filter(((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
					e.style[t] = `${x}px`
				}))
			}
			if (s.centeredSlides && s.centeredSlidesBounds) {
				let e = 0;
				g.forEach((t => {
					e += t + (x || 0)
				})), e -= x;
				const t = e - r;
				m = m.map((e => e <= 0 ? -v : e > t ? t + w : e))
			}
			if (s.centerInsufficientSlides) {
				let e = 0;
				if (g.forEach((t => {
					e += t + (x || 0)
				})), e -= x, e < r) {
					const t = (r - e) / 2;
					m.forEach(((e, s) => {
						m[s] = e - t
					})), h.forEach(((e, s) => {
						h[s] = e + t
					}))
				}
			}
			if (Object.assign(e, {
				slides: c,
				snapGrid: m,
				slidesGrid: h,
				slidesSizesGrid: g
			}), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
				u(a, "--swiper-centered-offset-before", -m[0] + "px"), u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
				const t = -e.snapGrid[0],
					s = -e.slidesGrid[0];
				e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
			}
			if (p !== d && e.emit("slidesLengthChange"), m.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== E && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
				const t = `${s.containerModifierClass}backface-hidden`,
					a = e.el.classList.contains(t);
				p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t)
			}
		},
		updateAutoHeight: function (e) {
			const t = this,
				s = [],
				a = t.virtual && t.params.virtual.enabled;
			let i, r = 0;
			"number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
			const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
			if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
				if (t.params.centeredSlides) (t.visibleSlides || []).forEach((e => {
					s.push(e)
				}));
				else
					for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
						const e = t.activeIndex + i;
						if (e > t.slides.length && !a) break;
						s.push(n(e))
					} else s.push(n(t.activeIndex));
			for (i = 0; i < s.length; i += 1)
				if (void 0 !== s[i]) {
					const e = s[i].offsetHeight;
					r = e > r ? e : r
				} (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
		},
		updateSlidesOffset: function () {
			const e = this,
				t = e.slides,
				s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
			for (let a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
		},
		updateSlidesProgress: function (e) {
			void 0 === e && (e = this && this.translate || 0);
			const t = this,
				s = t.params,
				{
					slides: a,
					rtlTranslate: i,
					snapGrid: r
				} = t;
			if (0 === a.length) return;
			void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
			let n = -e;
			i && (n = e), a.forEach((e => {
				e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass)
			})), t.visibleSlidesIndexes = [], t.visibleSlides = [];
			let l = s.spaceBetween;
			"string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
			for (let e = 0; e < a.length; e += 1) {
				const o = a[e];
				let d = o.swiperSlideOffset;
				s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
				const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
					p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l),
					u = -(n - d),
					m = u + t.slidesSizesGrid[e],
					h = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
				(u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), a[e].classList.add(s.slideVisibleClass)), h && a[e].classList.add(s.slideFullyVisibleClass), o.progress = i ? -c : c, o.originalProgress = i ? -p : p
			}
		},
		updateProgress: function (e) {
			const t = this;
			if (void 0 === e) {
				const s = t.rtlTranslate ? -1 : 1;
				e = t && t.translate && t.translate * s || 0
			}
			const s = t.params,
				a = t.maxTranslate() - t.minTranslate();
			let {
				progress: i,
				isBeginning: r,
				isEnd: n,
				progressLoop: l
			} = t;
			const o = r,
				d = n;
			if (0 === a) i = 0, r = !0, n = !0;
			else {
				i = (e - t.minTranslate()) / a;
				const s = Math.abs(e - t.minTranslate()) < 1,
					l = Math.abs(e - t.maxTranslate()) < 1;
				r = s || i <= 0, n = l || i >= 1, s && (i = 0), l && (i = 1)
			}
			if (s.loop) {
				const s = t.getSlideIndexByData(0),
					a = t.getSlideIndexByData(t.slides.length - 1),
					i = t.slidesGrid[s],
					r = t.slidesGrid[a],
					n = t.slidesGrid[t.slidesGrid.length - 1],
					o = Math.abs(e);
				l = o >= i ? (o - i) / n : (o + n - r) / n, l > 1 && (l -= 1)
			}
			Object.assign(t, {
				progress: i,
				progressLoop: l,
				isBeginning: r,
				isEnd: n
			}), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !d && t.emit("reachEnd toEdge"), (o && !r || d && !n) && t.emit("fromEdge"), t.emit("progress", i)
		},
		updateSlidesClasses: function () {
			const e = this,
				{
					slides: t,
					params: s,
					slidesEl: a,
					activeIndex: i
				} = e,
				r = e.virtual && s.virtual.enabled,
				n = e.grid && s.grid && s.grid.rows > 1,
				l = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
			let o, d, c;
			if (t.forEach((e => {
				e.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
			})), r)
				if (s.loop) {
					let t = i - e.virtual.slidesBefore;
					t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = l(`[data-swiper-slide-index="${t}"]`)
				} else o = l(`[data-swiper-slide-index="${i}"]`);
			else n ? (o = t.filter((e => e.column === i))[0], c = t.filter((e => e.column === i + 1))[0], d = t.filter((e => e.column === i - 1))[0]) : o = t[i];
			o && (o.classList.add(s.slideActiveClass), n ? (c && c.classList.add(s.slideNextClass), d && d.classList.add(s.slidePrevClass)) : (c = function (e, t) {
				const s = [];
				for (; e.nextElementSibling;) {
					const a = e.nextElementSibling;
					t ? a.matches(t) && s.push(a) : s.push(a), e = a
				}
				return s
			}(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && !c && (c = t[0]), c && c.classList.add(s.slideNextClass), d = function (e, t) {
				const s = [];
				for (; e.previousElementSibling;) {
					const a = e.previousElementSibling;
					t ? a.matches(t) && s.push(a) : s.push(a), e = a
				}
				return s
			}(o, `.${s.slideClass}, swiper-slide`)[0], s.loop && 0 === !d && (d = t[t.length - 1]), d && d.classList.add(s.slidePrevClass))), e.emitSlidesClasses()
		},
		updateActiveIndex: function (e) {
			const t = this,
				s = t.rtlTranslate ? t.translate : -t.translate,
				{
					snapGrid: a,
					params: i,
					activeIndex: r,
					realIndex: n,
					snapIndex: l
				} = t;
			let o, d = e;
			const c = e => {
				let s = e - t.virtual.slidesBefore;
				return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
			};
			if (void 0 === d && (d = function (e) {
				const {
					slidesGrid: t,
					params: s
				} = e, a = e.rtlTranslate ? e.translate : -e.translate;
				let i;
				for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
				return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0), i
			}(t)), a.indexOf(s) >= 0) o = a.indexOf(s);
			else {
				const e = Math.min(i.slidesPerGroupSkip, d);
				o = e + Math.floor((d - e) / i.slidesPerGroup)
			}
			if (o >= a.length && (o = a.length - 1), d === r && !t.params.loop) return void (o !== l && (t.snapIndex = o, t.emit("snapIndexChange")));
			if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
			const p = t.grid && i.grid && i.grid.rows > 1;
			let u;
			if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
			else if (p) {
				const e = t.slides.filter((e => e.column === d))[0];
				let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
				Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
			} else if (t.slides[d]) {
				const e = t.slides[d].getAttribute("data-swiper-slide-index");
				u = e ? parseInt(e, 10) : d
			} else u = d;
			Object.assign(t, {
				previousSnapIndex: l,
				snapIndex: o,
				previousRealIndex: n,
				realIndex: u,
				previousIndex: r,
				activeIndex: d
			}), t.initialized && k(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"), t.emit("slideChange"))
		},
		updateClickedSlide: function (e, t) {
			const s = this,
				a = s.params;
			let i = e.closest(`.${a.slideClass}, swiper-slide`);
			!i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
				!i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e)
			}));
			let r, n = !1;
			if (i)
				for (let e = 0; e < s.slides.length; e += 1)
					if (s.slides[e] === i) {
						n = !0, r = e;
						break
					} if (!i || !n) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
			s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r, a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
		}
	};
	var D = {
		getTranslate: function (e) {
			void 0 === e && (e = this.isHorizontal() ? "x" : "y");
			const {
				params: t,
				rtlTranslate: s,
				translate: a,
				wrapperEl: i
			} = this;
			if (t.virtualTranslate) return s ? -a : a;
			if (t.cssMode) return a;
			let r = d(i, e);
			return r += this.cssOverflowAdjustment(), s && (r = -r), r || 0
		},
		setTranslate: function (e, t) {
			const s = this,
				{
					rtlTranslate: a,
					params: i,
					wrapperEl: r,
					progress: n
				} = s;
			let l, o = 0,
				d = 0;
			s.isHorizontal() ? o = a ? -e : e : d = e, i.roundLengths && (o = Math.floor(o), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d, i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
			const c = s.maxTranslate() - s.minTranslate();
			l = 0 === c ? 0 : (e - s.minTranslate()) / c, l !== n && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
		},
		minTranslate: function () {
			return -this.snapGrid[0]
		},
		maxTranslate: function () {
			return -this.snapGrid[this.snapGrid.length - 1]
		},
		translateTo: function (e, t, s, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
			const r = this,
				{
					params: n,
					wrapperEl: l
				} = r;
			if (r.animating && n.preventInteractionOnTransition) return !1;
			const o = r.minTranslate(),
				d = r.maxTranslate();
			let c;
			if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
				const e = r.isHorizontal();
				if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
				else {
					if (!r.support.smoothScroll) return m({
						swiper: r,
						targetPosition: -c,
						side: e ? "left" : "top"
					}), !0;
					l.scrollTo({
						[e ? "left" : "top"]: -c,
						behavior: "smooth"
					})
				}
				return !0
			}
			return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
				r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
			}), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
		}
	};

	function G(e) {
		let {
			swiper: t,
			runCallbacks: s,
			direction: a,
			step: i
		} = e;
		const {
			activeIndex: r,
			previousIndex: n
		} = t;
		let l = a;
		if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
			if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
			t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
		}
	}
	var X = {
		slideTo: function (e, t, s, a, i) {
			void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
			const r = this;
			let n = e;
			n < 0 && (n = 0);
			const {
				params: l,
				snapGrid: o,
				slidesGrid: d,
				previousIndex: c,
				activeIndex: p,
				rtlTranslate: u,
				wrapperEl: h,
				enabled: f
			} = r;
			if (r.animating && l.preventInteractionOnTransition || !f && !a && !i) return !1;
			const g = Math.min(r.params.slidesPerGroupSkip, n);
			let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
			v >= o.length && (v = o.length - 1);
			const w = -o[v];
			if (l.normalizeSlideIndex)
				for (let e = 0; e < d.length; e += 1) {
					const t = -Math.floor(100 * w),
						s = Math.floor(100 * d[e]),
						a = Math.floor(100 * d[e + 1]);
					void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
				}
			if (r.initialized && n !== p) {
				if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate())) return !1;
				if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1
			}
			let b;
			if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(w), b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
			if (l.cssMode) {
				const e = r.isHorizontal(),
					s = u ? w : -w;
				if (0 === t) {
					const t = r.virtual && r.params.virtual.enabled;
					t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
						h[e ? "scrollLeft" : "scrollTop"] = s
					}))) : h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
						r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
					}))
				} else {
					if (!r.support.smoothScroll) return m({
						swiper: r,
						targetPosition: s,
						side: e ? "left" : "top"
					}), !0;
					h.scrollTo({
						[e ? "left" : "top"]: s,
						behavior: "smooth"
					})
				}
				return !0
			}
			return r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
				r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
			}), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
		},
		slideToLoop: function (e, t, s, a) {
			if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" == typeof e) {
				e = parseInt(e, 10)
			}
			const i = this,
				r = i.grid && i.params.grid && i.params.grid.rows > 1;
			let n = e;
			if (i.params.loop)
				if (i.virtual && i.params.virtual.enabled) n += i.virtual.slidesBefore;
				else {
					let e;
					if (r) {
						const t = n * i.params.grid.rows;
						e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
					} else e = i.getSlideIndexByData(n);
					const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
						{
							centeredSlides: s
						} = i.params;
					let a = i.params.slidesPerView;
					"auto" === a ? a = i.slidesPerViewDynamic() : (a = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && a % 2 == 0 && (a += 1));
					let l = t - e < a;
					if (s && (l = l || e < Math.ceil(a / 2)), l) {
						const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
						i.loopFix({
							direction: a,
							slideTo: !0,
							activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
							slideRealIndex: "next" === a ? i.realIndex : void 0
						})
					}
					if (r) {
						const e = n * i.params.grid.rows;
						n = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
					} else n = i.getSlideIndexByData(n)
				} return requestAnimationFrame((() => {
					i.slideTo(n, t, s, a)
				})), i
		},
		slideNext: function (e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{
					enabled: i,
					params: r,
					animating: n
				} = a;
			if (!i) return a;
			let l = r.slidesPerGroup;
			"auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
			const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l,
				d = a.virtual && r.virtual.enabled;
			if (r.loop) {
				if (n && !d && r.loopPreventsSliding) return !1;
				if (a.loopFix({
					direction: "next"
				}), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && r.cssMode) return requestAnimationFrame((() => {
					a.slideTo(a.activeIndex + o, e, t, s)
				})), !0
			}
			return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
		},
		slidePrev: function (e, t, s) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
			const a = this,
				{
					params: i,
					snapGrid: r,
					slidesGrid: n,
					rtlTranslate: l,
					enabled: o,
					animating: d
				} = a;
			if (!o) return a;
			const c = a.virtual && i.virtual.enabled;
			if (i.loop) {
				if (d && !c && i.loopPreventsSliding) return !1;
				a.loopFix({
					direction: "prev"
				}), a._clientLeft = a.wrapperEl.clientLeft
			}

			function p(e) {
				return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
			}
			const u = p(l ? a.translate : -a.translate),
				m = r.map((e => p(e)));
			let h = r[m.indexOf(u) - 1];
			if (void 0 === h && i.cssMode) {
				let e;
				r.forEach(((t, s) => {
					u >= t && (e = s)
				})), void 0 !== e && (h = r[e > 0 ? e - 1 : e])
			}
			let f = 0;
			if (void 0 !== h && (f = n.indexOf(h), f < 0 && (f = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), i.rewind && a.isBeginning) {
				const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
				return a.slideTo(i, e, t, s)
			}
			return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
				a.slideTo(f, e, t, s)
			})), !0) : a.slideTo(f, e, t, s)
		},
		slideReset: function (e, t, s) {
			return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
		},
		slideToClosest: function (e, t, s, a) {
			void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = .5);
			const i = this;
			let r = i.activeIndex;
			const n = Math.min(i.params.slidesPerGroupSkip, r),
				l = n + Math.floor((r - n) / i.params.slidesPerGroup),
				o = i.rtlTranslate ? i.translate : -i.translate;
			if (o >= i.snapGrid[l]) {
				const e = i.snapGrid[l];
				o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
			} else {
				const e = i.snapGrid[l - 1];
				o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
			}
			return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
		},
		slideToClickedSlide: function () {
			const e = this,
				{
					params: t,
					slidesEl: s
				} = e,
				a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
			let i, r = e.clickedIndex;
			const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
			if (t.loop) {
				if (e.animating) return;
				i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
					e.slideTo(r)
				}))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]), l((() => {
					e.slideTo(r)
				}))) : e.slideTo(r)
			} else e.slideTo(r)
		}
	};
	var H = {
		loopCreate: function (e) {
			const t = this,
				{
					params: s,
					slidesEl: a
				} = t;
			if (!s.loop || t.virtual && t.params.virtual.enabled) return;
			const i = () => {
				f(a, `.${s.slideClass}, swiper-slide`).forEach(((e, t) => {
					e.setAttribute("data-swiper-slide-index", t)
				}))
			},
				r = t.grid && s.grid && s.grid.rows > 1,
				n = s.slidesPerGroup * (r ? s.grid.rows : 1),
				l = t.slides.length % n != 0,
				o = r && t.slides.length % s.grid.rows != 0,
				d = e => {
					for (let a = 0; a < e; a += 1) {
						const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
						t.slidesEl.append(e)
					}
				};
			if (l) {
				if (s.loopAddBlankSlides) {
					d(n - t.slides.length % n), t.recalcSlides(), t.updateSlides()
				} else g("");
				i()
			} else if (o) {
				if (s.loopAddBlankSlides) {
					d(s.grid.rows - t.slides.length % s.grid.rows), t.recalcSlides(), t.updateSlides()
				} else g("");
				i()
			} else i();
			t.loopFix({
				slideRealIndex: e,
				direction: s.centeredSlides ? void 0 : "next"
			})
		},
		loopFix: function (e) {
			let {
				slideRealIndex: t,
				slideTo: s = !0,
				direction: a,
				setTranslate: i,
				activeSlideIndex: r,
				byController: n,
				byMousewheel: l
			} = void 0 === e ? {} : e;
			const o = this;
			if (!o.params.loop) return;
			o.emit("beforeLoopFix");
			const {
				slides: d,
				allowSlidePrev: c,
				allowSlideNext: p,
				slidesEl: u,
				params: m
			} = o, {
				centeredSlides: h
			} = m;
			if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, void o.emit("loopFix");
			let f = m.slidesPerView;
			"auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)), h && f % 2 == 0 && (f += 1));
			const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
			let w = v;
			w % v != 0 && (w += v - w % v), w += m.loopAdditionalSlides, o.loopedSlides = w;
			const b = o.grid && m.grid && m.grid.rows > 1;
			d.length < f + w ? '' : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
			const y = [],
				E = [];
			let x = o.activeIndex;
			void 0 === r ? r = o.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : x = r;
			const S = "next" === a || !a,
				T = "prev" === a || !a;
			let M = 0,
				C = 0;
			const P = b ? Math.ceil(d.length / m.grid.rows) : d.length,
				L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + .5 : 0);
			if (L < w) {
				M = Math.max(w - L, v);
				for (let e = 0; e < w - L; e += 1) {
					const t = e - Math.floor(e / P) * P;
					if (b) {
						const e = P - t - 1;
						for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && y.push(t)
					} else y.push(P - t - 1)
				}
			} else if (L + f > P - w) {
				C = Math.max(L - (P - 2 * w), v);
				for (let e = 0; e < C; e += 1) {
					const t = e - Math.floor(e / P) * P;
					b ? d.forEach(((e, s) => {
						e.column === t && E.push(s)
					})) : E.push(t)
				}
			}
			if (o.__preventObserver__ = !0, requestAnimationFrame((() => {
				o.__preventObserver__ = !1
			})), T && y.forEach((e => {
				d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
			})), S && E.forEach((e => {
				d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1
			})), o.recalcSlides(), "auto" === m.slidesPerView ? o.updateSlides() : b && (y.length > 0 && T || E.length > 0 && S) && o.slides.forEach(((e, t) => {
				o.grid.updateSlide(t, e, o.slides)
			})), m.watchSlidesProgress && o.updateSlidesOffset(), s)
				if (y.length > 0 && T) {
					if (void 0 === t) {
						const e = o.slidesGrid[x],
							t = o.slidesGrid[x + M] - e;
						l ? o.setTranslate(o.translate - t) : (o.slideTo(x + M, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
					} else if (i) {
						const e = b ? y.length / m.grid.rows : y.length;
						o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
					}
				} else if (E.length > 0 && S)
					if (void 0 === t) {
						const e = o.slidesGrid[x],
							t = o.slidesGrid[x - C] - e;
						l ? o.setTranslate(o.translate - t) : (o.slideTo(x - C, 0, !1, !0), i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
					} else {
						const e = b ? E.length / m.grid.rows : E.length;
						o.slideTo(o.activeIndex - e, 0, !1, !0)
					} if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !n) {
						const e = {
							slideRealIndex: t,
							direction: a,
							setTranslate: i,
							activeSlideIndex: r,
							byController: !0
						};
						Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
							!t.destroyed && t.params.loop && t.loopFix({
								...e,
								slideTo: t.params.slidesPerView === m.slidesPerView && s
							})
						})) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
							...e,
							slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
						})
					}
			o.emit("loopFix")
		},
		loopDestroy: function () {
			const e = this,
				{
					params: t,
					slidesEl: s
				} = e;
			if (!t.loop || e.virtual && e.params.virtual.enabled) return;
			e.recalcSlides();
			const a = [];
			e.slides.forEach((e => {
				const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
				a[t] = e
			})), e.slides.forEach((e => {
				e.removeAttribute("data-swiper-slide-index")
			})), a.forEach((e => {
				s.append(e)
			})), e.recalcSlides(), e.slideTo(e.realIndex, 0)
		}
	};

	function N(e, t, s) {
		const a = r(),
			{
				params: i
			} = e,
			n = i.edgeSwipeDetection,
			l = i.edgeSwipeThreshold;
		return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(), !0)
	}

	function Y(e) {
		const t = this,
			s = a();
		let i = e;
		i.originalEvent && (i = i.originalEvent);
		const n = t.touchEventsData;
		if ("pointerdown" === i.type) {
			if (null !== n.pointerId && n.pointerId !== i.pointerId) return;
			n.pointerId = i.pointerId
		} else "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
		if ("touchstart" === i.type) return void N(t, i, i.targetTouches[0].pageX);
		const {
			params: l,
			touches: d,
			enabled: c
		} = t;
		if (!c) return;
		if (!l.simulateTouch && "mouse" === i.pointerType) return;
		if (t.animating && l.preventInteractionOnTransition) return;
		!t.animating && l.cssMode && l.loop && t.loopFix();
		let p = i.target;
		if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p)) return;
		if ("which" in i && 3 === i.which) return;
		if ("button" in i && i.button > 0) return;
		if (n.isTouched && n.isMoved) return;
		const u = !!l.noSwipingClass && "" !== l.noSwipingClass,
			m = i.composedPath ? i.composedPath() : i.path;
		u && i.target && i.target.shadowRoot && m && (p = m[0]);
		const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
			f = !(!i.target || !i.target.shadowRoot);
		if (l.noSwiping && (f ? function (e, t) {
			return void 0 === t && (t = this),
				function t(s) {
					if (!s || s === a() || s === r()) return null;
					s.assignedSlot && (s = s.assignedSlot);
					const i = s.closest(e);
					return i || s.getRootNode ? i || t(s.getRootNode().host) : null
				}(t)
		}(h, p) : p.closest(h))) return void (t.allowClick = !0);
		if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
		d.currentX = i.pageX, d.currentY = i.pageY;
		const g = d.currentX,
			v = d.currentY;
		if (!N(t, i, g)) return;
		Object.assign(n, {
			isTouched: !0,
			isMoved: !1,
			allowTouchCallbacks: !0,
			isScrolling: void 0,
			startMoving: void 0
		}), d.startX = g, d.startY = v, n.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1);
		let w = !0;
		p.matches(n.focusableElements) && (w = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && s.activeElement.blur();
		const b = w && t.allowTouchMove && l.touchStartPreventDefault;
		!l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
	}

	function B(e) {
		const t = a(),
			s = this,
			i = s.touchEventsData,
			{
				params: r,
				touches: n,
				rtlTranslate: l,
				enabled: d
			} = s;
		if (!d) return;
		if (!r.simulateTouch && "mouse" === e.pointerType) return;
		let c, p = e;
		if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
			if (null !== i.touchId) return;
			if (p.pointerId !== i.pointerId) return
		}
		if ("touchmove" === p.type) {
			if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
		} else c = p;
		if (!i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
		const u = c.pageX,
			m = c.pageY;
		if (p.preventedByNestedSwiper) return n.startX = u, void (n.startY = m);
		if (!s.allowTouchMove) return p.target.matches(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
			startX: u,
			startY: m,
			currentX: u,
			currentY: m
		}), i.touchStartTime = o()));
		if (r.touchReleaseOnEdges && !r.loop)
			if (s.isVertical()) {
				if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
			} else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate()) return;
		if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
		i.allowTouchCallbacks && s.emit("touchMove", p), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = m;
		const h = n.currentX - n.startX,
			f = n.currentY - n.startY;
		if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold) return;
		if (void 0 === i.isScrolling) {
			let e;
			s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
		}
		if (i.isScrolling && s.emit("touchMoveOpposite", p), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
		if (!i.startMoving) return;
		s.allowClick = !1, !r.cssMode && p.cancelable && p.preventDefault(), r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
		let g = s.isHorizontal() ? h : f,
			v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
		r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), n.diff = g, g *= r.touchRatio, l && (g = -g, v = -v);
		const w = s.touchesDirection;
		s.swipeDirection = g > 0 ? "prev" : "next", s.touchesDirection = v > 0 ? "prev" : "next";
		const b = s.params.loop && !r.cssMode,
			y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
		if (!i.isMoved) {
			if (b && y && s.loopFix({
				direction: s.swipeDirection
			}), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
				const e = new window.CustomEvent("transitionend", {
					bubbles: !0,
					cancelable: !0
				});
				s.wrapperEl.dispatchEvent(e)
			}
			i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
		}
		if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1) return Object.assign(n, {
			startX: u,
			startY: m,
			currentX: u,
			currentY: m,
			startTranslate: i.currentTranslate
		}), i.loopSwapReset = !0, void (i.startTranslate = i.currentTranslate);
		s.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
		let E = !0,
			x = r.resistanceRatio;
		if (r.touchReleaseOnEdges && (x = 0), g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
			direction: "prev",
			setTranslate: !0,
			activeSlideIndex: 0
		}), i.currentTranslate > s.minTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
			direction: "next",
			setTranslate: !0,
			activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
		}), i.currentTranslate < s.maxTranslate() && (E = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))), E && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
			if (!(Math.abs(g) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
			if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
		}
		r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
	}

	function R(e) {
		const t = this,
			s = t.touchEventsData;
		let a, i = e;
		i.originalEvent && (i = i.originalEvent);
		if ("touchend" === i.type || "touchcancel" === i.type) {
			if (a = [...i.changedTouches].filter((e => e.identifier === s.touchId))[0], !a || a.identifier !== s.touchId) return
		} else {
			if (null !== s.touchId) return;
			if (i.pointerId !== s.pointerId) return;
			a = i
		}
		if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
			if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return
		}
		s.pointerId = null, s.touchId = null;
		const {
			params: r,
			touches: n,
			rtlTranslate: d,
			slidesGrid: c,
			enabled: p
		} = t;
		if (!p) return;
		if (!r.simulateTouch && "mouse" === i.pointerType) return;
		if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && r.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
		r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
		const u = o(),
			m = u - s.touchStartTime;
		if (t.allowClick) {
			const e = i.path || i.composedPath && i.composedPath();
			t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
		}
		if (s.lastClickTime = o(), l((() => {
			t.destroyed || (t.allowClick = !0)
		})), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
		let h;
		if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate, r.cssMode) return;
		if (r.freeMode && r.freeMode.enabled) return void t.freeMode.onTouchEnd({
			currentPos: h
		});
		const f = h >= -t.maxTranslate() && !t.params.loop;
		let g = 0,
			v = t.slidesSizesGrid[0];
		for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
			const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
			void 0 !== c[e + t] ? (f || h >= c[e] && h < c[e + t]) && (g = e, v = c[e + t] - c[e]) : (f || h >= c[e]) && (g = e, v = c[c.length - 1] - c[c.length - 2])
		}
		let w = null,
			b = null;
		r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
		const y = (h - c[g]) / v,
			E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
		if (m > r.longSwipesMs) {
			if (!r.longSwipes) return void t.slideTo(t.activeIndex);
			"next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + E) : t.slideTo(g)), "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(g + E) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
		} else {
			if (!r.shortSwipes) return void t.slideTo(t.activeIndex);
			t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g))
		}
	}

	function q() {
		const e = this,
			{
				params: t,
				el: s
			} = e;
		if (s && 0 === s.offsetWidth) return;
		t.breakpoints && e.setBreakpoint();
		const {
			allowSlideNext: a,
			allowSlidePrev: i,
			snapGrid: r
		} = e, n = e.virtual && e.params.virtual.enabled;
		e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
		const l = n && t.loop;
		!("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
			e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
		}), 500)), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
	}

	function V(e) {
		const t = this;
		t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
	}

	function _() {
		const e = this,
			{
				wrapperEl: t,
				rtlTranslate: s,
				enabled: a
			} = e;
		if (!a) return;
		let i;
		e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
		const r = e.maxTranslate() - e.minTranslate();
		i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
	}

	function F(e) {
		const t = this;
		z(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
	}

	function j() {
		const e = this;
		e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
	}
	const W = (e, t) => {
		const s = a(),
			{
				params: i,
				el: r,
				wrapperEl: n,
				device: l
			} = e,
			o = !!i.nested,
			d = "on" === t ? "addEventListener" : "removeEventListener",
			c = t;
		s[d]("touchstart", e.onDocumentTouchStart, {
			passive: !1,
			capture: o
		}), r[d]("touchstart", e.onTouchStart, {
			passive: !1
		}), r[d]("pointerdown", e.onTouchStart, {
			passive: !1
		}), s[d]("touchmove", e.onTouchMove, {
			passive: !1,
			capture: o
		}), s[d]("pointermove", e.onTouchMove, {
			passive: !1,
			capture: o
		}), s[d]("touchend", e.onTouchEnd, {
			passive: !0
		}), s[d]("pointerup", e.onTouchEnd, {
			passive: !0
		}), s[d]("pointercancel", e.onTouchEnd, {
			passive: !0
		}), s[d]("touchcancel", e.onTouchEnd, {
			passive: !0
		}), s[d]("pointerout", e.onTouchEnd, {
			passive: !0
		}), s[d]("pointerleave", e.onTouchEnd, {
			passive: !0
		}), s[d]("contextmenu", e.onTouchEnd, {
			passive: !0
		}), (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0), i.cssMode && n[d]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", q, !0) : e[c]("observerUpdate", q, !0), r[d]("load", e.onLoad, {
			capture: !0
		})
	};
	const U = (e, t) => e.grid && t.grid && t.grid.rows > 1;
	var K = {
		init: !0,
		direction: "horizontal",
		oneWayMovement: !1,
		touchEventsTarget: "wrapper",
		initialSlide: 0,
		speed: 300,
		cssMode: !1,
		updateOnWindowResize: !0,
		resizeObserver: !0,
		nested: !1,
		createElements: !1,
		eventsPrefix: "swiper",
		enabled: !0,
		focusableElements: "input, select, option, textarea, button, video, label",
		width: null,
		height: null,
		preventInteractionOnTransition: !1,
		userAgent: null,
		url: null,
		edgeSwipeDetection: !1,
		edgeSwipeThreshold: 20,
		autoHeight: !1,
		setWrapperSize: !1,
		virtualTranslate: !1,
		effect: "slide",
		breakpoints: void 0,
		breakpointsBase: "window",
		spaceBetween: 0,
		slidesPerView: 1,
		slidesPerGroup: 1,
		slidesPerGroupSkip: 0,
		slidesPerGroupAuto: !1,
		centeredSlides: !1,
		centeredSlidesBounds: !1,
		slidesOffsetBefore: 0,
		slidesOffsetAfter: 0,
		normalizeSlideIndex: !0,
		centerInsufficientSlides: !1,
		watchOverflow: !0,
		roundLengths: !1,
		touchRatio: 1,
		touchAngle: 45,
		simulateTouch: !0,
		shortSwipes: !0,
		longSwipes: !0,
		longSwipesRatio: .5,
		longSwipesMs: 300,
		followFinger: !0,
		allowTouchMove: !0,
		threshold: 5,
		touchMoveStopPropagation: !1,
		touchStartPreventDefault: !0,
		touchStartForcePreventDefault: !1,
		touchReleaseOnEdges: !1,
		uniqueNavElements: !0,
		resistance: !0,
		resistanceRatio: .85,
		watchSlidesProgress: !1,
		grabCursor: !1,
		preventClicks: !0,
		preventClicksPropagation: !0,
		slideToClickedSlide: !1,
		loop: !1,
		loopAddBlankSlides: !0,
		loopAdditionalSlides: 0,
		loopPreventsSliding: !0,
		rewind: !1,
		allowSlidePrev: !0,
		allowSlideNext: !0,
		swipeHandler: null,
		noSwiping: !0,
		noSwipingClass: "swiper-no-swiping",
		noSwipingSelector: null,
		passiveListeners: !0,
		maxBackfaceHiddenSlides: 10,
		containerModifierClass: "swiper-",
		slideClass: "swiper-slide",
		slideBlankClass: "swiper-slide-blank",
		slideActiveClass: "swiper-slide-active",
		slideVisibleClass: "swiper-slide-visible",
		slideFullyVisibleClass: "swiper-slide-fully-visible",
		slideNextClass: "swiper-slide-next",
		slidePrevClass: "swiper-slide-prev",
		wrapperClass: "swiper-wrapper",
		lazyPreloaderClass: "swiper-lazy-preloader",
		lazyPreloadPrevNext: 0,
		runCallbacksOnInit: !0,
		_emitClasses: !1
	};

	function Z(e, t) {
		return function (s) {
			void 0 === s && (s = {});
			const a = Object.keys(s)[0],
				i = s[a];
			"object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {
				enabled: !0
			}), "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0), ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0), a in e && "enabled" in i ? ("object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
				enabled: !1
			}), p(t, s)) : p(t, s)) : p(t, s)
		}
	}
	const Q = {
		eventsEmitter: I,
		update: O,
		translate: D,
		transition: {
			setTransition: function (e, t) {
				const s = this;
				s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`, s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
			},
			transitionStart: function (e, t) {
				void 0 === e && (e = !0);
				const s = this,
					{
						params: a
					} = s;
				a.cssMode || (a.autoHeight && s.updateAutoHeight(), G({
					swiper: s,
					runCallbacks: e,
					direction: t,
					step: "Start"
				}))
			},
			transitionEnd: function (e, t) {
				void 0 === e && (e = !0);
				const s = this,
					{
						params: a
					} = s;
				s.animating = !1, a.cssMode || (s.setTransition(0), G({
					swiper: s,
					runCallbacks: e,
					direction: t,
					step: "End"
				}))
			}
		},
		slide: X,
		loop: H,
		grabCursor: {
			setGrabCursor: function (e) {
				const t = this;
				if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
				const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
				t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
					t.__preventObserver__ = !1
				}))
			},
			unsetGrabCursor: function () {
				const e = this;
				e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
					e.__preventObserver__ = !1
				})))
			}
		},
		events: {
			attachEvents: function () {
				const e = this,
					{
						params: t
					} = e;
				e.onTouchStart = Y.bind(e), e.onTouchMove = B.bind(e), e.onTouchEnd = R.bind(e), e.onDocumentTouchStart = j.bind(e), t.cssMode && (e.onScroll = _.bind(e)), e.onClick = V.bind(e), e.onLoad = F.bind(e), W(e, "on")
			},
			detachEvents: function () {
				W(this, "off")
			}
		},
		breakpoints: {
			setBreakpoint: function () {
				const e = this,
					{
						realIndex: t,
						initialized: s,
						params: a,
						el: i
					} = e,
					r = a.breakpoints;
				if (!r || r && 0 === Object.keys(r).length) return;
				const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
				if (!n || e.currentBreakpoint === n) return;
				const l = (n in r ? r[n] : void 0) || e.originalParams,
					o = U(e, a),
					d = U(e, l),
					c = a.enabled;
				o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
					if (void 0 === l[t]) return;
					const s = a[t] && a[t].enabled,
						i = l[t] && l[t].enabled;
					s && !i && e[t].disable(), !s && i && e[t].enable()
				}));
				const u = l.direction && l.direction !== a.direction,
					m = a.loop && (l.slidesPerView !== a.slidesPerView || u),
					h = a.loop;
				u && s && e.changeDirection(), p(e.params, l);
				const f = e.params.enabled,
					g = e.params.loop;
				Object.assign(e, {
					allowTouchMove: e.params.allowTouchMove,
					allowSlideNext: e.params.allowSlideNext,
					allowSlidePrev: e.params.allowSlidePrev
				}), c && !f ? e.disable() : !c && f && e.enable(), e.currentBreakpoint = n, e.emit("_beforeBreakpoint", l), s && (m ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !h && g ? (e.loopCreate(t), e.updateSlides()) : h && !g && e.loopDestroy()), e.emit("breakpoint", l)
			},
			getBreakpoint: function (e, t, s) {
				if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
				let a = !1;
				const i = r(),
					n = "window" === t ? i.innerHeight : s.clientHeight,
					l = Object.keys(e).map((e => {
						if ("string" == typeof e && 0 === e.indexOf("@")) {
							const t = parseFloat(e.substr(1));
							return {
								value: n * t,
								point: e
							}
						}
						return {
							value: e,
							point: e
						}
					}));
				l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
				for (let e = 0; e < l.length; e += 1) {
					const {
						point: r,
						value: n
					} = l[e];
					"window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
				}
				return a || "max"
			}
		},
		checkOverflow: {
			checkOverflow: function () {
				const e = this,
					{
						isLocked: t,
						params: s
					} = e,
					{
						slidesOffsetBefore: a
					} = s;
				if (a) {
					const t = e.slides.length - 1,
						s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
					e.isLocked = e.size > s
				} else e.isLocked = 1 === e.snapGrid.length;
				!0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
			}
		},
		classes: {
			addClasses: function () {
				const e = this,
					{
						classNames: t,
						params: s,
						rtl: a,
						el: i,
						device: r
					} = e,
					n = function (e, t) {
						const s = [];
						return e.forEach((e => {
							"object" == typeof e ? Object.keys(e).forEach((a => {
								e[a] && s.push(t + a)
							})) : "string" == typeof e && s.push(t + e)
						})), s
					}(["initialized", s.direction, {
						"free-mode": e.params.freeMode && s.freeMode.enabled
					}, {
							autoheight: s.autoHeight
						}, {
							rtl: a
						}, {
							grid: s.grid && s.grid.rows > 1
						}, {
							"grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
						}, {
							android: r.android
						}, {
							ios: r.ios
						}, {
							"css-mode": s.cssMode
						}, {
							centered: s.cssMode && s.centeredSlides
						}, {
							"watch-progress": s.watchSlidesProgress
						}], s.containerModifierClass);
				t.push(...n), i.classList.add(...t), e.emitContainerClasses()
			},
			removeClasses: function () {
				const {
					el: e,
					classNames: t
				} = this;
				e.classList.remove(...t), this.emitContainerClasses()
			}
		}
	},
		J = {};
	class ee {
		constructor() {
			let e, t;
			for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++) i[r] = arguments[r];
			1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = p({}, t), e && !t.el && (t.el = e);
			const n = a();
			if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
				const e = [];
				return n.querySelectorAll(t.el).forEach((s => {
					const a = p({}, t, {
						el: s
					});
					e.push(new ee(a))
				})), e
			}
			const l = this;
			l.__swiper__ = !0, l.support = P(), l.device = L({
				userAgent: t.userAgent
			}), l.browser = A(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
			const o = {};
			l.modules.forEach((e => {
				e({
					params: t,
					swiper: l,
					extendParams: Z(t, o),
					on: l.on.bind(l),
					once: l.once.bind(l),
					off: l.off.bind(l),
					emit: l.emit.bind(l)
				})
			}));
			const d = p({}, K, o);
			return l.params = p({}, d, J, t), l.originalParams = p({}, l.params), l.passedParams = p({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
				l.on(e, l.params.on[e])
			})), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
				enabled: l.params.enabled,
				el: e,
				classNames: [],
				slides: [],
				slidesGrid: [],
				snapGrid: [],
				slidesSizesGrid: [],
				isHorizontal: () => "horizontal" === l.params.direction,
				isVertical: () => "vertical" === l.params.direction,
				activeIndex: 0,
				realIndex: 0,
				isBeginning: !0,
				isEnd: !1,
				translate: 0,
				previousTranslate: 0,
				progress: 0,
				velocity: 0,
				animating: !1,
				cssOverflowAdjustment() {
					return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
				},
				allowSlideNext: l.params.allowSlideNext,
				allowSlidePrev: l.params.allowSlidePrev,
				touchEventsData: {
					isTouched: void 0,
					isMoved: void 0,
					allowTouchCallbacks: void 0,
					touchStartTime: void 0,
					isScrolling: void 0,
					currentTranslate: void 0,
					startTranslate: void 0,
					allowThresholdMove: void 0,
					focusableElements: l.params.focusableElements,
					lastClickTime: 0,
					clickTimeout: void 0,
					velocities: [],
					allowMomentumBounce: void 0,
					startMoving: void 0,
					pointerId: null,
					touchId: null
				},
				allowClick: !0,
				allowTouchMove: l.params.allowTouchMove,
				touches: {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				},
				imagesToLoad: [],
				imagesLoaded: 0
			}), l.emit("_swiper"), l.params.init && l.init(), l
		}
		getDirectionLabel(e) {
			return this.isHorizontal() ? e : {
				width: "height",
				"margin-top": "margin-left",
				"margin-bottom ": "margin-right",
				"margin-left": "margin-top",
				"margin-right": "margin-bottom",
				"padding-left": "padding-top",
				"padding-right": "padding-bottom",
				marginRight: "marginBottom"
			}[e]
		}
		getSlideIndex(e) {
			const {
				slidesEl: t,
				params: s
			} = this, a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
			return y(e) - a
		}
		getSlideIndexByData(e) {
			return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
		}
		recalcSlides() {
			const {
				slidesEl: e,
				params: t
			} = this;
			this.slides = f(e, `.${t.slideClass}, swiper-slide`)
		}
		enable() {
			const e = this;
			e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
		}
		disable() {
			const e = this;
			e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
		}
		setProgress(e, t) {
			const s = this;
			e = Math.min(Math.max(e, 0), 1);
			const a = s.minTranslate(),
				i = (s.maxTranslate() - a) * e + a;
			s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
		}
		emitContainerClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
			e.emit("_containerClasses", t.join(" "))
		}
		getSlideClasses(e) {
			const t = this;
			return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
		}
		emitSlidesClasses() {
			const e = this;
			if (!e.params._emitClasses || !e.el) return;
			const t = [];
			e.slides.forEach((s => {
				const a = e.getSlideClasses(s);
				t.push({
					slideEl: s,
					classNames: a
				}), e.emit("_slideClass", s, a)
			})), e.emit("_slideClasses", t)
		}
		slidesPerViewDynamic(e, t) {
			void 0 === e && (e = "current"), void 0 === t && (t = !1);
			const {
				params: s,
				slides: a,
				slidesGrid: i,
				slidesSizesGrid: r,
				size: n,
				activeIndex: l
			} = this;
			let o = 1;
			if ("number" == typeof s.slidesPerView) return s.slidesPerView;
			if (s.centeredSlides) {
				let e, t = a[l] ? a[l].swiperSlideSize : 0;
				for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
				for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
			} else if ("current" === e)
				for (let e = l + 1; e < a.length; e += 1) {
					(t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
				} else
				for (let e = l - 1; e >= 0; e -= 1) {
					i[l] - i[e] < n && (o += 1)
				}
			return o
		}
		update() {
			const e = this;
			if (!e || e.destroyed) return;
			const {
				snapGrid: t,
				params: s
			} = e;

			function a() {
				const t = e.rtlTranslate ? -1 * e.translate : e.translate,
					s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
				e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
			}
			let i;
			if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
				t.complete && z(e, t)
			})), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) a(), s.autoHeight && e.updateAutoHeight();
			else {
				if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
					const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
					i = e.slideTo(t.length - 1, 0, !1, !0)
				} else i = e.slideTo(e.activeIndex, 0, !1, !0);
				i || a()
			}
			s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
		}
		changeDirection(e, t) {
			void 0 === t && (t = !0);
			const s = this,
				a = s.params.direction;
			return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
				"vertical" === e ? t.style.width = "" : t.style.height = ""
			})), s.emit("changeDirection"), t && s.update()), s
		}
		changeLanguageDirection(e) {
			const t = this;
			t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
		}
		mount(e) {
			const t = this;
			if (t.mounted) return !0;
			let s = e || t.params.el;
			if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
			s.swiper = t, s.parentNode && s.parentNode.host && "SWIPER-CONTAINER" === s.parentNode.host.nodeName && (t.isElement = !0);
			const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
			let i = (() => {
				if (s && s.shadowRoot && s.shadowRoot.querySelector) {
					return s.shadowRoot.querySelector(a())
				}
				return f(s, a())[0]
			})();
			return !i && t.params.createElements && (i = v("div", t.params.wrapperClass), s.append(i), f(s, `.${t.params.slideClass}`).forEach((e => {
				i.append(e)
			}))), Object.assign(t, {
				el: s,
				wrapperEl: i,
				slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
				hostEl: t.isElement ? s.parentNode.host : s,
				mounted: !0,
				rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
				rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
				wrongRTL: "-webkit-box" === b(i, "display")
			}), !0
		}
		init(e) {
			const t = this;
			if (t.initialized) return t;
			if (!1 === t.mount(e)) return t;
			t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
			const s = [...t.el.querySelectorAll('[loading="lazy"]')];
			return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
				e.complete ? z(t, e) : e.addEventListener("load", (e => {
					z(t, e.target)
				}))
			})), k(t), t.initialized = !0, k(t), t.emit("init"), t.emit("afterInit"), t
		}
		destroy(e, t) {
			void 0 === e && (e = !0), void 0 === t && (t = !0);
			const s = this,
				{
					params: a,
					el: i,
					wrapperEl: r,
					slides: n
				} = s;
			return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttribute("style"), r.removeAttribute("style"), n && n.length && n.forEach((e => {
				e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
			}))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
				s.off(e)
			})), !1 !== e && (s.el.swiper = null, function (e) {
				const t = e;
				Object.keys(t).forEach((e => {
					try {
						t[e] = null
					} catch (e) { }
					try {
						delete t[e]
					} catch (e) { }
				}))
			}(s)), s.destroyed = !0), null
		}
		static extendDefaults(e) {
			p(J, e)
		}
		static get extendedDefaults() {
			return J
		}
		static get defaults() {
			return K
		}
		static installModule(e) {
			ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
			const t = ee.prototype.__modules__;
			"function" == typeof e && t.indexOf(e) < 0 && t.push(e)
		}
		static use(e) {
			return Array.isArray(e) ? (e.forEach((e => ee.installModule(e))), ee) : (ee.installModule(e), ee)
		}
	}

	function te(e, t, s, a) {
		return e.params.createElements && Object.keys(a).forEach((i => {
			if (!s[i] && !0 === s.auto) {
				let r = f(e.el, `.${a[i]}`)[0];
				r || (r = v("div", a[i]), r.className = a[i], e.el.append(r)), s[i] = r, t[i] = r
			}
		})), s
	}

	function se(e) {
		return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
	}

	function ae(e) {
		const t = this,
			{
				params: s,
				slidesEl: a
			} = t;
		s.loop && t.loopDestroy();
		const i = e => {
			if ("string" == typeof e) {
				const t = document.createElement("div");
				t.innerHTML = e, a.append(t.children[0]), t.innerHTML = ""
			} else a.append(e)
		};
		if ("object" == typeof e && "length" in e)
			for (let t = 0; t < e.length; t += 1) e[t] && i(e[t]);
		else i(e);
		t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update()
	}

	function ie(e) {
		const t = this,
			{
				params: s,
				activeIndex: a,
				slidesEl: i
			} = t;
		s.loop && t.loopDestroy();
		let r = a + 1;
		const n = e => {
			if ("string" == typeof e) {
				const t = document.createElement("div");
				t.innerHTML = e, i.prepend(t.children[0]), t.innerHTML = ""
			} else i.prepend(e)
		};
		if ("object" == typeof e && "length" in e) {
			for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
			r = a + e.length
		} else n(e);
		t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), t.slideTo(r, 0, !1)
	}

	function re(e, t) {
		const s = this,
			{
				params: a,
				activeIndex: i,
				slidesEl: r
			} = s;
		let n = i;
		a.loop && (n -= s.loopedSlides, s.loopDestroy(), s.recalcSlides());
		const l = s.slides.length;
		if (e <= 0) return void s.prependSlide(t);
		if (e >= l) return void s.appendSlide(t);
		let o = n > e ? n + 1 : n;
		const d = [];
		for (let t = l - 1; t >= e; t -= 1) {
			const e = s.slides[t];
			e.remove(), d.unshift(e)
		}
		if ("object" == typeof t && "length" in t) {
			for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
			o = n > e ? n + t.length : n
		} else r.append(t);
		for (let e = 0; e < d.length; e += 1) r.append(d[e]);
		s.recalcSlides(), a.loop && s.loopCreate(), a.observer && !s.isElement || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
	}

	function ne(e) {
		const t = this,
			{
				params: s,
				activeIndex: a
			} = t;
		let i = a;
		s.loop && (i -= t.loopedSlides, t.loopDestroy());
		let r, n = i;
		if ("object" == typeof e && "length" in e) {
			for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
			n = Math.max(n, 0)
		} else r = e, t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), n = Math.max(n, 0);
		t.recalcSlides(), s.loop && t.loopCreate(), s.observer && !t.isElement || t.update(), s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
	}

	function le() {
		const e = this,
			t = [];
		for (let s = 0; s < e.slides.length; s += 1) t.push(s);
		e.removeSlide(t)
	}

	function oe(e) {
		const {
			effect: t,
			swiper: s,
			on: a,
			setTranslate: i,
			setTransition: r,
			overwriteParams: n,
			perspective: l,
			recreateShadows: o,
			getEffectParams: d
		} = e;
		let c;
		a("beforeInit", (() => {
			if (s.params.effect !== t) return;
			s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
			const e = n ? n() : {};
			Object.assign(s.params, e), Object.assign(s.originalParams, e)
		})), a("setTranslate", (() => {
			s.params.effect === t && i()
		})), a("setTransition", ((e, a) => {
			s.params.effect === t && r(a)
		})), a("transitionEnd", (() => {
			if (s.params.effect === t && o) {
				if (!d || !d().slideShadows) return;
				s.slides.forEach((e => {
					e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
				})), o()
			}
		})), a("virtualUpdate", (() => {
			s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
				c && s.slides && s.slides.length && (i(), c = !1)
			})))
		}))
	}

	function de(e, t) {
		const s = h(t);
		return s !== t && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s
	}

	function ce(e) {
		let {
			swiper: t,
			duration: s,
			transformElements: a,
			allSlides: i
		} = e;
		const {
			activeIndex: r
		} = t;
		if (t.params.virtualTranslate && 0 !== s) {
			let e, s = !1;
			e = i ? a : a.filter((e => {
				const s = e.classList.contains("swiper-slide-transform") ? (e => {
					if (!e.parentElement) return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
					return e.parentElement
				})(e) : e;
				return t.getSlideIndex(s) === r
			})), e.forEach((e => {
				x(e, (() => {
					if (s) return;
					if (!t || t.destroyed) return;
					s = !0, t.animating = !1;
					const e = new window.CustomEvent("transitionend", {
						bubbles: !0,
						cancelable: !0
					});
					t.wrapperEl.dispatchEvent(e)
				}))
			}))
		}
	}

	function pe(e, t, s) {
		const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`,
			i = h(t);
		let r = i.querySelector(`.${a.split(" ").join(".")}`);
		return r || (r = v("div", a.split(" ")), i.append(r)), r
	}
	Object.keys(Q).forEach((e => {
		Object.keys(Q[e]).forEach((t => {
			ee.prototype[t] = Q[e][t]
		}))
	})), ee.use([function (e) {
		let {
			swiper: t,
			on: s,
			emit: a
		} = e;
		const i = r();
		let n = null,
			l = null;
		const o = () => {
			t && !t.destroyed && t.initialized && (a("beforeResize"), a("resize"))
		},
			d = () => {
				t && !t.destroyed && t.initialized && a("orientationchange")
			};
		s("init", (() => {
			t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
				l = i.requestAnimationFrame((() => {
					const {
						width: s,
						height: a
					} = t;
					let i = s,
						r = a;
					e.forEach((e => {
						let {
							contentBoxSize: s,
							contentRect: a,
							target: n
						} = e;
						n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize)
					})), i === s && r === a || o()
				}))
			})), n.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
		})), s("destroy", (() => {
			l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
		}))
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		const n = [],
			l = r(),
			o = function (e, s) {
				void 0 === s && (s = {});
				const a = new (l.MutationObserver || l.WebkitMutationObserver)((e => {
					if (t.__preventObserver__) return;
					if (1 === e.length) return void i("observerUpdate", e[0]);
					const s = function () {
						i("observerUpdate", e[0])
					};
					l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
				}));
				a.observe(e, {
					attributes: void 0 === s.attributes || s.attributes,
					childList: void 0 === s.childList || s.childList,
					characterData: void 0 === s.characterData || s.characterData
				}), n.push(a)
			};
		s({
			observer: !1,
			observeParents: !1,
			observeSlideChildren: !1
		}), a("init", (() => {
			if (t.params.observer) {
				if (t.params.observeParents) {
					const e = E(t.hostEl);
					for (let t = 0; t < e.length; t += 1) o(e[t])
				}
				o(t.hostEl, {
					childList: t.params.observeSlideChildren
				}), o(t.wrapperEl, {
					attributes: !1
				})
			}
		})), a("destroy", (() => {
			n.forEach((e => {
				e.disconnect()
			})), n.splice(0, n.length)
		}))
	}]);
	const ue = [function (e) {
		let t, {
			swiper: s,
			extendParams: i,
			on: r,
			emit: n
		} = e;
		i({
			virtual: {
				enabled: !1,
				slides: [],
				cache: !0,
				renderSlide: null,
				renderExternal: null,
				renderExternalUpdate: !0,
				addSlidesBefore: 0,
				addSlidesAfter: 0
			}
		});
		const l = a();
		s.virtual = {
			cache: {},
			from: void 0,
			to: void 0,
			slides: [],
			offset: 0,
			slidesGrid: []
		};
		const o = l.createElement("div");

		function d(e, t) {
			const a = s.params.virtual;
			if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
			let i;
			return a.renderSlide ? (i = a.renderSlide.call(s, e, t), "string" == typeof i && (o.innerHTML = i, i = o.children[0])) : i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass), i.setAttribute("data-swiper-slide-index", t), a.renderSlide || (i.innerHTML = e), a.cache && (s.virtual.cache[t] = i), i
		}

		function c(e) {
			const {
				slidesPerView: t,
				slidesPerGroup: a,
				centeredSlides: i,
				loop: r
			} = s.params, {
				addSlidesBefore: l,
				addSlidesAfter: o
			} = s.params.virtual, {
				from: c,
				to: p,
				slides: u,
				slidesGrid: m,
				offset: h
			} = s.virtual;
			s.params.cssMode || s.updateActiveIndex();
			const g = s.activeIndex || 0;
			let v, w, b;
			v = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top", i ? (w = Math.floor(t / 2) + a + o, b = Math.floor(t / 2) + a + l) : (w = t + (a - 1) + o, b = (r ? t : a) + l);
			let y = g - b,
				E = g + w;
			r || (y = Math.max(y, 0), E = Math.min(E, u.length - 1));
			let x = (s.slidesGrid[y] || 0) - (s.slidesGrid[0] || 0);

			function S() {
				s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), n("virtualUpdate")
			}
			if (r && g >= b ? (y -= b, i || (x += s.slidesGrid[0])) : r && g < b && (y = -b, i && (x += s.slidesGrid[0])), Object.assign(s.virtual, {
				from: y,
				to: E,
				offset: x,
				slidesGrid: s.slidesGrid,
				slidesBefore: b,
				slidesAfter: w
			}), c === y && p === E && !e) return s.slidesGrid !== m && x !== h && s.slides.forEach((e => {
				e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
			})), s.updateProgress(), void n("virtualUpdate");
			if (s.params.virtual.renderExternal) return s.params.virtual.renderExternal.call(s, {
				offset: x,
				from: y,
				to: E,
				slides: function () {
					const e = [];
					for (let t = y; t <= E; t += 1) e.push(u[t]);
					return e
				}()
			}), void (s.params.virtual.renderExternalUpdate ? S() : n("virtualUpdate"));
			const T = [],
				M = [],
				C = e => {
					let t = e;
					return e < 0 ? t = u.length + e : t >= u.length && (t -= u.length), t
				};
			if (e) s.slides.filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e => {
				e.remove()
			}));
			else
				for (let e = c; e <= p; e += 1)
					if (e < y || e > E) {
						const t = C(e);
						s.slides.filter((e => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e => {
							e.remove()
						}))
					} const P = r ? -u.length : 0,
						L = r ? 2 * u.length : u.length;
			for (let t = P; t < L; t += 1)
				if (t >= y && t <= E) {
					const s = C(t);
					void 0 === p || e ? M.push(s) : (t > p && M.push(s), t < c && T.push(s))
				} if (M.forEach((e => {
					s.slidesEl.append(d(u[e], e))
				})), r)
				for (let e = T.length - 1; e >= 0; e -= 1) {
					const t = T[e];
					s.slidesEl.prepend(d(u[t], t))
				} else T.sort(((e, t) => t - e)), T.forEach((e => {
					s.slidesEl.prepend(d(u[e], e))
				}));
			f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
				e.style[v] = x - Math.abs(s.cssOverflowAdjustment()) + "px"
			})), S()
		}
		r("beforeInit", (() => {
			if (!s.params.virtual.enabled) return;
			let e;
			if (void 0 === s.passedParams.virtual.slides) {
				const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
				t && t.length && (s.virtual.slides = [...t], e = !0, t.forEach(((e, t) => {
					e.setAttribute("data-swiper-slide-index", t), s.virtual.cache[t] = e, e.remove()
				})))
			}
			e || (s.virtual.slides = s.params.virtual.slides), s.classNames.push(`${s.params.containerModifierClass}virtual`), s.params.watchSlidesProgress = !0, s.originalParams.watchSlidesProgress = !0, c()
		})), r("setTranslate", (() => {
			s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t), t = setTimeout((() => {
				c()
			}), 100)) : c())
		})), r("init update resize", (() => {
			s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
		})), Object.assign(s.virtual, {
			appendSlide: function (e) {
				if ("object" == typeof e && "length" in e)
					for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
				else s.virtual.slides.push(e);
				c(!0)
			},
			prependSlide: function (e) {
				const t = s.activeIndex;
				let a = t + 1,
					i = 1;
				if (Array.isArray(e)) {
					for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
					a = t + e.length, i = e.length
				} else s.virtual.slides.unshift(e);
				if (s.params.virtual.cache) {
					const e = s.virtual.cache,
						t = {};
					Object.keys(e).forEach((s => {
						const a = e[s],
							r = a.getAttribute("data-swiper-slide-index");
						r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a
					})), s.virtual.cache = t
				}
				c(!0), s.slideTo(a, 0)
			},
			removeSlide: function (e) {
				if (null == e) return;
				let t = s.activeIndex;
				if (Array.isArray(e))
					for (let a = e.length - 1; a >= 0; a -= 1) s.params.virtual.cache && (delete s.virtual.cache[e[a]], Object.keys(s.virtual.cache).forEach((t => {
						t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
					}))), s.virtual.slides.splice(e[a], 1), e[a] < t && (t -= 1), t = Math.max(t, 0);
				else s.params.virtual.cache && (delete s.virtual.cache[e], Object.keys(s.virtual.cache).forEach((t => {
					t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t], s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1), delete s.virtual.cache[t])
				}))), s.virtual.slides.splice(e, 1), e < t && (t -= 1), t = Math.max(t, 0);
				c(!0), s.slideTo(t, 0)
			},
			removeAllSlides: function () {
				s.virtual.slides = [], s.params.virtual.cache && (s.virtual.cache = {}), c(!0), s.slideTo(0, 0)
			},
			update: c
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: i,
			emit: n
		} = e;
		const l = a(),
			o = r();

		function d(e) {
			if (!t.enabled) return;
			const {
				rtlTranslate: s
			} = t;
			let a = e;
			a.originalEvent && (a = a.originalEvent);
			const i = a.keyCode || a.charCode,
				r = t.params.keyboard.pageUpDown,
				d = r && 33 === i,
				c = r && 34 === i,
				p = 37 === i,
				u = 39 === i,
				m = 38 === i,
				h = 40 === i;
			if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c)) return !1;
			if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d)) return !1;
			if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
				if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
					let e = !1;
					if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length) return;
					const a = t.el,
						i = a.clientWidth,
						r = a.clientHeight,
						n = o.innerWidth,
						l = o.innerHeight,
						d = w(a);
					s && (d.left -= a.scrollLeft);
					const c = [
						[d.left, d.top],
						[d.left + i, d.top],
						[d.left, d.top + r],
						[d.left + i, d.top + r]
					];
					for (let t = 0; t < c.length; t += 1) {
						const s = c[t];
						if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
							if (0 === s[0] && 0 === s[1]) continue;
							e = !0
						}
					}
					if (!e) return
				}
				t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || h) && t.slideNext(), (d || m) && t.slidePrev()), n("keyPress", i)
			}
		}

		function c() {
			t.keyboard.enabled || (l.addEventListener("keydown", d), t.keyboard.enabled = !0)
		}

		function p() {
			t.keyboard.enabled && (l.removeEventListener("keydown", d), t.keyboard.enabled = !1)
		}
		t.keyboard = {
			enabled: !1
		}, s({
			keyboard: {
				enabled: !1,
				onlyInViewport: !0,
				pageUpDown: !0
			}
		}), i("init", (() => {
			t.params.keyboard.enabled && c()
		})), i("destroy", (() => {
			t.keyboard.enabled && p()
		})), Object.assign(t.keyboard, {
			enable: c,
			disable: p
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		const n = r();
		let d;
		s({
			mousewheel: {
				enabled: !1,
				releaseOnEdges: !1,
				invert: !1,
				forceToAxis: !1,
				sensitivity: 1,
				eventsTarget: "container",
				thresholdDelta: null,
				thresholdTime: null,
				noMousewheelClass: "swiper-no-mousewheel"
			}
		}), t.mousewheel = {
			enabled: !1
		};
		let c, p = o();
		const u = [];

		function m() {
			t.enabled && (t.mouseEntered = !0)
		}

		function h() {
			t.enabled && (t.mouseEntered = !1)
		}

		function f(e) {
			return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), i("scroll", e.raw)), p = (new n.Date).getTime(), !1)))
		}

		function g(e) {
			let s = e,
				a = !0;
			if (!t.enabled) return;
			if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
			const r = t.params.mousewheel;
			t.params.cssMode && s.preventDefault();
			let n = t.el;
			"container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
			const p = n && n.contains(s.target);
			if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
			s.originalEvent && (s = s.originalEvent);
			let m = 0;
			const h = t.rtlTranslate ? -1 : 1,
				g = function (e) {
					let t = 0,
						s = 0,
						a = 0,
						i = 0;
					return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
						spinX: t,
						spinY: s,
						pixelX: a,
						pixelY: i
					}
				}(s);
			if (r.forceToAxis)
				if (t.isHorizontal()) {
					if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
					m = -g.pixelX * h
				} else {
					if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
					m = -g.pixelY
				}
			else m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
			if (0 === m) return !0;
			r.invert && (m = -m);
			let v = t.getTranslate() + m * r.sensitivity;
			if (v >= t.minTranslate() && (v = t.minTranslate()), v <= t.maxTranslate() && (v = t.maxTranslate()), a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()), a && t.params.nested && s.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
				const e = {
					time: o(),
					delta: Math.abs(m),
					direction: Math.sign(m)
				},
					a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
				if (!a) {
					c = void 0;
					let n = t.getTranslate() + m * r.sensitivity;
					const o = t.isBeginning,
						p = t.isEnd;
					if (n >= t.minTranslate() && (n = t.minTranslate()), n <= t.maxTranslate() && (n = t.maxTranslate()), t.setTransition(0), t.setTranslate(n), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(), t.params.loop && t.loopFix({
						direction: e.direction < 0 ? "next" : "prev",
						byMousewheel: !0
					}), t.params.freeMode.sticky) {
						clearTimeout(d), d = void 0, u.length >= 15 && u.shift();
						const s = u.length ? u[u.length - 1] : void 0,
							a = u[0];
						if (u.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) u.splice(0);
						else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
							const s = m > 0 ? .8 : .2;
							c = e, u.splice(0), d = l((() => {
								t.slideToClosest(t.params.speed, !0, void 0, s)
							}), 0)
						}
						d || (d = l((() => {
							c = e, u.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
						}), 500))
					}
					if (a || i("scroll", s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate())) return !0
				}
			} else {
				const s = {
					time: o(),
					delta: Math.abs(m),
					direction: Math.sign(m),
					raw: e
				};
				u.length >= 2 && u.shift();
				const a = u.length ? u[u.length - 1] : void 0;
				if (u.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function (e) {
					const s = t.params.mousewheel;
					if (e.direction < 0) {
						if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0
					} else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
					return !1
				}(s)) return !0
			}
			return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
		}

		function v(e) {
			let s = t.el;
			"container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)), s[e]("mouseenter", m), s[e]("mouseleave", h), s[e]("wheel", g)
		}

		function w() {
			return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g), !0) : !t.mousewheel.enabled && (v("addEventListener"), t.mousewheel.enabled = !0, !0)
		}

		function b() {
			return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g), !0) : !!t.mousewheel.enabled && (v("removeEventListener"), t.mousewheel.enabled = !1, !0)
		}
		a("init", (() => {
			!t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && w()
		})), a("destroy", (() => {
			t.params.cssMode && w(), t.mousewheel.enabled && b()
		})), Object.assign(t.mousewheel, {
			enable: w,
			disable: b
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		s({
			navigation: {
				nextEl: null,
				prevEl: null,
				hideOnClick: !1,
				disabledClass: "swiper-button-disabled",
				hiddenClass: "swiper-button-hidden",
				lockClass: "swiper-button-lock",
				navigationDisabledClass: "swiper-navigation-disabled"
			}
		}), t.navigation = {
			nextEl: null,
			prevEl: null
		};
		const r = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

		function n(e) {
			let s;
			return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e), s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.el.querySelectorAll(e).length && (s = t.el.querySelector(e))), e && !s ? e : s)
		}

		function l(e, s) {
			const a = t.params.navigation;
			(e = r(e)).forEach((e => {
				e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = s), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass))
			}))
		}

		function o() {
			const {
				nextEl: e,
				prevEl: s
			} = t.navigation;
			if (t.params.loop) return l(s, !1), void l(e, !1);
			l(s, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind)
		}

		function d(e) {
			e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i("navigationPrev"))
		}

		function c(e) {
			e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i("navigationNext"))
		}

		function p() {
			const e = t.params.navigation;
			if (t.params.navigation = te(t, t.originalParams.navigation, t.params.navigation, {
				nextEl: "swiper-button-next",
				prevEl: "swiper-button-prev"
			}), !e.nextEl && !e.prevEl) return;
			let s = n(e.nextEl),
				a = n(e.prevEl);
			Object.assign(t.navigation, {
				nextEl: s,
				prevEl: a
			}), s = r(s), a = r(a);
			const i = (s, a) => {
				s && s.addEventListener("click", "next" === a ? c : d), !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
			};
			s.forEach((e => i(e, "next"))), a.forEach((e => i(e, "prev")))
		}

		function u() {
			let {
				nextEl: e,
				prevEl: s
			} = t.navigation;
			e = r(e), s = r(s);
			const a = (e, s) => {
				e.removeEventListener("click", "next" === s ? c : d), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
			};
			e.forEach((e => a(e, "next"))), s.forEach((e => a(e, "prev")))
		}
		a("init", (() => {
			!1 === t.params.navigation.enabled ? m() : (p(), o())
		})), a("toEdge fromEdge lock unlock", (() => {
			o()
		})), a("destroy", (() => {
			u()
		})), a("enable disable", (() => {
			let {
				nextEl: e,
				prevEl: s
			} = t.navigation;
			e = r(e), s = r(s), t.enabled ? o() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
		})), a("click", ((e, s) => {
			let {
				nextEl: a,
				prevEl: n
			} = t.navigation;
			a = r(a), n = r(n);
			const l = s.target;
			if (t.params.navigation.hideOnClick && !n.includes(l) && !a.includes(l)) {
				if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === l || t.pagination.el.contains(l))) return;
				let e;
				a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), [...a, ...n].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
			}
		}));
		const m = () => {
			t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
		};
		Object.assign(t.navigation, {
			enable: () => {
				t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), o()
			},
			disable: m,
			update: o,
			init: p,
			destroy: u
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		const r = "swiper-pagination";
		let n;
		s({
			pagination: {
				el: null,
				bulletElement: "span",
				clickable: !1,
				hideOnClick: !1,
				renderBullet: null,
				renderProgressbar: null,
				renderFraction: null,
				renderCustom: null,
				progressbarOpposite: !1,
				type: "bullets",
				dynamicBullets: !1,
				dynamicMainBullets: 1,
				formatFractionCurrent: e => e,
				formatFractionTotal: e => e,
				bulletClass: `${r}-bullet`,
				bulletActiveClass: `${r}-bullet-active`,
				modifierClass: `${r}-`,
				currentClass: `${r}-current`,
				totalClass: `${r}-total`,
				hiddenClass: `${r}-hidden`,
				progressbarFillClass: `${r}-progressbar-fill`,
				progressbarOppositeClass: `${r}-progressbar-opposite`,
				clickableClass: `${r}-clickable`,
				lockClass: `${r}-lock`,
				horizontalClass: `${r}-horizontal`,
				verticalClass: `${r}-vertical`,
				paginationDisabledClass: `${r}-disabled`
			}
		}), t.pagination = {
			el: null,
			bullets: []
		};
		let l = 0;
		const o = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

		function d() {
			return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
		}

		function c(e, s) {
			const {
				bulletActiveClass: a
			} = t.params.pagination;
			e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`), (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`))
		}

		function p(e) {
			const s = e.target.closest(se(t.params.pagination.bulletClass));
			if (!s) return;
			e.preventDefault();
			const a = y(s) * t.params.slidesPerGroup;
			if (t.params.loop) {
				if (t.realIndex === a) return;
				t.slideToLoop(a)
			} else t.slideTo(a)
		}

		function u() {
			const e = t.rtl,
				s = t.params.pagination;
			if (d()) return;
			let a, r, p = t.pagination.el;
			p = o(p);
			const u = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
				m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
			if (t.params.loop ? (r = t.previousRealIndex || 0, a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex, r = t.previousSnapIndex) : (r = t.previousIndex || 0, a = t.activeIndex || 0), "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
				const i = t.pagination.bullets;
				let o, d, u;
				if (s.dynamicBullets && (n = S(i[0], t.isHorizontal() ? "width" : "height", !0), p.forEach((e => {
					e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
				})), s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0), l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)), o = Math.max(a - l, 0), d = o + (Math.min(i.length, s.dynamicMainBullets) - 1), u = (d + o) / 2), i.forEach((e => {
					const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
					e.classList.remove(...t)
				})), p.length > 1) i.forEach((e => {
					const i = y(e);
					i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), s.dynamicBullets && (i >= o && i <= d && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")), i === o && c(e, "prev"), i === d && c(e, "next"))
				}));
				else {
					const e = i[a];
					if (e && e.classList.add(...s.bulletActiveClass.split(" ")), t.isElement && i.forEach(((e, t) => {
						e.setAttribute("part", t === a ? "bullet-active" : "bullet")
					})), s.dynamicBullets) {
						const e = i[o],
							t = i[d];
						for (let e = o; e <= d; e += 1) i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
						c(e, "prev"), c(t, "next")
					}
				}
				if (s.dynamicBullets) {
					const a = Math.min(i.length, s.dynamicMainBullets + 4),
						r = (n * a - n) / 2 - u * n,
						l = e ? "right" : "left";
					i.forEach((e => {
						e.style[t.isHorizontal() ? l : "top"] = `${r}px`
					}))
				}
			}
			p.forEach(((e, r) => {
				if ("fraction" === s.type && (e.querySelectorAll(se(s.currentClass)).forEach((e => {
					e.textContent = s.formatFractionCurrent(a + 1)
				})), e.querySelectorAll(se(s.totalClass)).forEach((e => {
					e.textContent = s.formatFractionTotal(m)
				}))), "progressbar" === s.type) {
					let i;
					i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
					const r = (a + 1) / m;
					let n = 1,
						l = 1;
					"horizontal" === i ? n = r : l = r, e.querySelectorAll(se(s.progressbarFillClass)).forEach((e => {
						e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
					}))
				}
				"custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, m), 0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e), i("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
			}))
		}

		function m() {
			const e = t.params.pagination;
			if (d()) return;
			const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
			let a = t.pagination.el;
			a = o(a);
			let r = "";
			if ("bullets" === e.type) {
				let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
				t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
				for (let s = 0; s < a; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
			}
			"fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], a.forEach((s => {
				"custom" !== e.type && (s.innerHTML = r || ""), "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(se(e.bulletClass)))
			})), "custom" !== e.type && i("paginationRender", a[0])
		}

		function h() {
			t.params.pagination = te(t, t.originalParams.pagination, t.params.pagination, {
				el: "swiper-pagination"
			});
			const e = t.params.pagination;
			if (!e.el) return;
			let s;
			"string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)), s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]), s || (s = e.el), s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)], s.length > 1 && (s = s.filter((e => E(e, ".swiper")[0] === t.el))[0])), Array.isArray(s) && 1 === s.length && (s = s[0]), Object.assign(t.pagination, {
				el: s
			}), s = o(s), s.forEach((s => {
				"bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")), s.classList.add(e.modifierClass + e.type), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`), l = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass), e.clickable && s.addEventListener("click", p), t.enabled || s.classList.add(e.lockClass)
			})))
		}

		function f() {
			const e = t.params.pagination;
			if (d()) return;
			let s = t.pagination.el;
			s && (s = o(s), s.forEach((s => {
				s.classList.remove(e.hiddenClass), s.classList.remove(e.modifierClass + e.type), s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")), s.removeEventListener("click", p))
			}))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
		}
		a("changeDirection", (() => {
			if (!t.pagination || !t.pagination.el) return;
			const e = t.params.pagination;
			let {
				el: s
			} = t.pagination;
			s = o(s), s.forEach((s => {
				s.classList.remove(e.horizontalClass, e.verticalClass), s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
			}))
		})), a("init", (() => {
			!1 === t.params.pagination.enabled ? g() : (h(), m(), u())
		})), a("activeIndexChange", (() => {
			void 0 === t.snapIndex && u()
		})), a("snapIndexChange", (() => {
			u()
		})), a("snapGridLengthChange", (() => {
			m(), u()
		})), a("destroy", (() => {
			f()
		})), a("enable disable", (() => {
			let {
				el: e
			} = t.pagination;
			e && (e = o(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
		})), a("lock unlock", (() => {
			u()
		})), a("click", ((e, s) => {
			const a = s.target,
				r = o(t.pagination.el);
			if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
				if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl)) return;
				const e = r[0].classList.contains(t.params.pagination.hiddenClass);
				i(!0 === e ? "paginationShow" : "paginationHide"), r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
			}
		}));
		const g = () => {
			t.el.classList.add(t.params.pagination.paginationDisabledClass);
			let {
				el: e
			} = t.pagination;
			e && (e = o(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), f()
		};
		Object.assign(t.pagination, {
			enable: () => {
				t.el.classList.remove(t.params.pagination.paginationDisabledClass);
				let {
					el: e
				} = t.pagination;
				e && (e = o(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), h(), m(), u()
			},
			disable: g,
			render: m,
			update: u,
			init: h,
			destroy: f
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: i,
			emit: r
		} = e;
		const o = a();
		let d, c, p, u, m = !1,
			h = null,
			f = null;

		function g() {
			if (!t.params.scrollbar.el || !t.scrollbar.el) return;
			const {
				scrollbar: e,
				rtlTranslate: s
			} = t, {
				dragEl: a,
				el: i
			} = e, r = t.params.scrollbar, n = t.params.loop ? t.progressLoop : t.progress;
			let l = c,
				o = (p - c) * n;
			s ? (o = -o, o > 0 ? (l = c - o, o = 0) : -o + c > p && (l = p + o)) : o < 0 ? (l = c + o, o = 0) : o + c > p && (l = p - o), t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`, a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`, a.style.height = `${l}px`), r.hide && (clearTimeout(h), i.style.opacity = 1, h = setTimeout((() => {
				i.style.opacity = 0, i.style.transitionDuration = "400ms"
			}), 1e3))
		}

		function b() {
			if (!t.params.scrollbar.el || !t.scrollbar.el) return;
			const {
				scrollbar: e
			} = t, {
				dragEl: s,
				el: a
			} = e;
			s.style.width = "", s.style.height = "", p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`, a.style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a.style.opacity = 0), t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
		}

		function y(e) {
			return t.isHorizontal() ? e.clientX : e.clientY
		}

		function E(e) {
			const {
				scrollbar: s,
				rtlTranslate: a
			} = t, {
				el: i
			} = s;
			let r;
			r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
			const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
			t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
		}

		function x(e) {
			const s = t.params.scrollbar,
				{
					scrollbar: a,
					wrapperEl: i
				} = t,
				{
					el: n,
					dragEl: l
				} = a;
			m = !0, d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.style.transitionDuration = "100ms", l.style.transitionDuration = "100ms", E(e), clearTimeout(f), n.style.transitionDuration = "0ms", s.hide && (n.style.opacity = 1), t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", e)
		}

		function S(e) {
			const {
				scrollbar: s,
				wrapperEl: a
			} = t, {
				el: i,
				dragEl: n
			} = s;
			m && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, E(e), a.style.transitionDuration = "0ms", i.style.transitionDuration = "0ms", n.style.transitionDuration = "0ms", r("scrollbarDragMove", e))
		}

		function T(e) {
			const s = t.params.scrollbar,
				{
					scrollbar: a,
					wrapperEl: i
				} = t,
				{
					el: n
				} = a;
			m && (m = !1, t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "", i.style.transitionDuration = ""), s.hide && (clearTimeout(f), f = l((() => {
				n.style.opacity = 0, n.style.transitionDuration = "400ms"
			}), 1e3)), r("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest())
		}

		function M(e) {
			const {
				scrollbar: s,
				params: a
			} = t, i = s.el;
			if (!i) return;
			const r = i,
				n = !!a.passiveListeners && {
					passive: !1,
					capture: !1
				},
				l = !!a.passiveListeners && {
					passive: !0,
					capture: !1
				};
			if (!r) return;
			const d = "on" === e ? "addEventListener" : "removeEventListener";
			r[d]("pointerdown", x, n), o[d]("pointermove", S, n), o[d]("pointerup", T, l)
		}

		function C() {
			const {
				scrollbar: e,
				el: s
			} = t;
			t.params.scrollbar = te(t, t.originalParams.scrollbar, t.params.scrollbar, {
				el: "swiper-scrollbar"
			});
			const a = t.params.scrollbar;
			if (!a.el) return;
			let i, r;
			if ("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)), i || "string" != typeof a.el) i || (i = a.el);
			else if (i = o.querySelectorAll(a.el), !i.length) return;
			t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)), i.length > 0 && (i = i[0]), i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass), i && (r = i.querySelector(se(t.params.scrollbar.dragClass)), r || (r = v("div", t.params.scrollbar.dragClass), i.append(r))), Object.assign(e, {
				el: i,
				dragEl: r
			}), a.draggable && t.params.scrollbar.el && t.scrollbar.el && M("on"), i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
		}

		function P() {
			const e = t.params.scrollbar,
				s = t.scrollbar.el;
			s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)), t.params.scrollbar.el && t.scrollbar.el && M("off")
		}
		s({
			scrollbar: {
				el: null,
				dragSize: "auto",
				hide: !1,
				draggable: !1,
				snapOnRelease: !0,
				lockClass: "swiper-scrollbar-lock",
				dragClass: "swiper-scrollbar-drag",
				scrollbarDisabledClass: "swiper-scrollbar-disabled",
				horizontalClass: "swiper-scrollbar-horizontal",
				verticalClass: "swiper-scrollbar-vertical"
			}
		}), t.scrollbar = {
			el: null,
			dragEl: null
		}, i("init", (() => {
			!1 === t.params.scrollbar.enabled ? L() : (C(), b(), g())
		})), i("update resize observerUpdate lock unlock", (() => {
			b()
		})), i("setTranslate", (() => {
			g()
		})), i("setTransition", ((e, s) => {
			! function (e) {
				t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
			}(s)
		})), i("enable disable", (() => {
			const {
				el: e
			} = t.scrollbar;
			e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
		})), i("destroy", (() => {
			P()
		}));
		const L = () => {
			t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)), P()
		};
		Object.assign(t.scrollbar, {
			enable: () => {
				t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)), C(), b(), g()
			},
			disable: L,
			updateSize: b,
			setTranslate: g,
			init: C,
			destroy: P
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			parallax: {
				enabled: !1
			}
		});
		const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
			r = (e, s) => {
				const {
					rtl: a
				} = t, i = a ? -1 : 1, r = e.getAttribute("data-swiper-parallax") || "0";
				let n = e.getAttribute("data-swiper-parallax-x"),
					l = e.getAttribute("data-swiper-parallax-y");
				const o = e.getAttribute("data-swiper-parallax-scale"),
					d = e.getAttribute("data-swiper-parallax-opacity"),
					c = e.getAttribute("data-swiper-parallax-rotate");
				if (n || l ? (n = n || "0", l = l || "0") : t.isHorizontal() ? (n = r, l = "0") : (l = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px", null != d) {
					const t = d - (d - 1) * (1 - Math.abs(s));
					e.style.opacity = t
				}
				let p = `translate3d(${n}, ${l}, 0px)`;
				if (null != o) {
					p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`
				}
				if (c && null != c) {
					p += ` rotate(${c * s * -1}deg)`
				}
				e.style.transform = p
			},
			n = () => {
				const {
					el: e,
					slides: s,
					progress: a,
					snapGrid: n,
					isElement: l
				} = t, o = f(e, i);
				t.isElement && o.push(...f(t.hostEl, i)), o.forEach((e => {
					r(e, a)
				})), s.forEach(((e, s) => {
					let l = e.progress;
					t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)), l = Math.min(Math.max(l, -1), 1), e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e => {
						r(e, l)
					}))
				}))
			};
		a("beforeInit", (() => {
			t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
		})), a("init", (() => {
			t.params.parallax.enabled && n()
		})), a("setTranslate", (() => {
			t.params.parallax.enabled && n()
		})), a("setTransition", ((e, s) => {
			t.params.parallax.enabled && function (e) {
				void 0 === e && (e = t.params.speed);
				const {
					el: s,
					hostEl: a
				} = t, r = [...s.querySelectorAll(i)];
				t.isElement && r.push(...a.querySelectorAll(i)), r.forEach((t => {
					let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
					0 === e && (s = 0), t.style.transitionDuration = `${s}ms`
				}))
			}(s)
		}))
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a,
			emit: i
		} = e;
		const n = r();
		s({
			zoom: {
				enabled: !1,
				maxRatio: 3,
				minRatio: 1,
				toggle: !0,
				containerClass: "swiper-zoom-container",
				zoomedSlideClass: "swiper-slide-zoomed"
			}
		}), t.zoom = {
			enabled: !1
		};
		let l, o, c = 1,
			p = !1;
		const u = [],
			m = {
				originX: 0,
				originY: 0,
				slideEl: void 0,
				slideWidth: void 0,
				slideHeight: void 0,
				imageEl: void 0,
				imageWrapEl: void 0,
				maxRatio: 3
			},
			h = {
				isTouched: void 0,
				isMoved: void 0,
				currentX: void 0,
				currentY: void 0,
				minX: void 0,
				minY: void 0,
				maxX: void 0,
				maxY: void 0,
				width: void 0,
				height: void 0,
				startX: void 0,
				startY: void 0,
				touchesStart: {},
				touchesCurrent: {}
			},
			g = {
				x: void 0,
				y: void 0,
				prevPositionX: void 0,
				prevPositionY: void 0,
				prevTime: void 0
			};
		let v = 1;

		function b() {
			if (u.length < 2) return 1;
			const e = u[0].pageX,
				t = u[0].pageY,
				s = u[1].pageX,
				a = u[1].pageY;
			return Math.sqrt((s - e) ** 2 + (a - t) ** 2)
		}

		function y(e) {
			const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
			return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
		}

		function x(e) {
			if ("mouse" === e.pointerType && u.splice(0, u.length), !y(e)) return;
			const s = t.params.zoom;
			if (l = !1, o = !1, u.push(e), !(u.length < 2)) {
				if (l = !0, m.scaleStart = b(), !m.slideEl) {
					m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`), m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
					let a = m.slideEl.querySelector(`.${s.containerClass}`);
					if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = a, m.imageWrapEl = a ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0, !m.imageWrapEl) return void (m.imageEl = void 0);
					m.maxRatio = m.imageWrapEl.getAttribute("data-swiper-zoom") || s.maxRatio
				}
				if (m.imageEl) {
					const [e, t] = function () {
						if (u.length < 2) return {
							x: null,
							y: null
						};
						const e = m.imageEl.getBoundingClientRect();
						return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c]
					}();
					m.originX = e, m.originY = t, m.imageEl.style.transitionDuration = "0ms"
				}
				p = !0
			}
		}

		function S(e) {
			if (!y(e)) return;
			const s = t.params.zoom,
				a = t.zoom,
				i = u.findIndex((t => t.pointerId === e.pointerId));
			i >= 0 && (u[i] = e), u.length < 2 || (o = !0, m.scaleMove = b(), m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c, a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** .5), a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5), m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`))
		}

		function T(e) {
			if (!y(e)) return;
			if ("mouse" === e.pointerType && "pointerout" === e.type) return;
			const s = t.params.zoom,
				a = t.zoom,
				i = u.findIndex((t => t.pointerId === e.pointerId));
			i >= 0 && u.splice(i, 1), l && o && (l = !1, o = !1, m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio), m.imageEl.style.transitionDuration = `${t.params.speed}ms`, m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`, c = a.scale, p = !1, a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`), 1 === a.scale && (m.originX = 0, m.originY = 0, m.slideEl = void 0)))
		}

		function M(e) {
			if (!y(e) || ! function (e) {
				const s = `.${t.params.zoom.containerClass}`;
				return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
			}(e)) return;
			const s = t.zoom;
			if (!m.imageEl) return;
			if (!h.isTouched || !m.slideEl) return;
			h.isMoved || (h.width = m.imageEl.offsetWidth, h.height = m.imageEl.offsetHeight, h.startX = d(m.imageWrapEl, "x") || 0, h.startY = d(m.imageWrapEl, "y") || 0, m.slideWidth = m.slideEl.offsetWidth, m.slideHeight = m.slideEl.offsetHeight, m.imageWrapEl.style.transitionDuration = "0ms");
			const a = h.width * s.scale,
				i = h.height * s.scale;
			if (a < m.slideWidth && i < m.slideHeight) return;
			h.minX = Math.min(m.slideWidth / 2 - a / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - i / 2, 0), h.maxY = -h.minY, h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX, h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
			if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1), !h.isMoved && !p) {
				if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x)) return void (h.isTouched = !1);
				if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y)) return void (h.isTouched = !1)
			}
			e.cancelable && e.preventDefault(), e.stopPropagation(), h.isMoved = !0;
			const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio),
				{
					originX: n,
					originY: l
				} = m;
			h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n), h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l), h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8), h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8), h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8), h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0), Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0), g.prevPositionX = h.touchesCurrent.x, g.prevPositionY = h.touchesCurrent.y, g.prevTime = Date.now(), m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
		}

		function C() {
			const e = t.zoom;
			m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"), m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`), e.scale = 1, c = 1, m.slideEl = void 0, m.imageEl = void 0, m.imageWrapEl = void 0, m.originX = 0, m.originY = 0)
		}

		function P(e) {
			const s = t.zoom,
				a = t.params.zoom;
			if (!m.slideEl) {
				e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)), m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
				let s = m.slideEl.querySelector(`.${a.containerClass}`);
				s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = s, m.imageWrapEl = s ? E(m.imageEl, `.${a.containerClass}`)[0] : void 0
			}
			if (!m.imageEl || !m.imageWrapEl) return;
			let i, r, l, o, d, p, u, g, v, b, y, x, S, T, M, C, P, L;
			t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), m.slideEl.classList.add(`${a.zoomedSlideClass}`), void 0 === h.touchesStart.x && e ? (i = e.pageX, r = e.pageY) : (i = h.touchesStart.x, r = h.touchesStart.y);
			const A = "number" == typeof e ? e : null;
			1 === c && A && (i = void 0, r = void 0), s.scale = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, c = A || m.imageWrapEl.getAttribute("data-swiper-zoom") || a.maxRatio, !e || 1 === c && A ? (u = 0, g = 0) : (P = m.slideEl.offsetWidth, L = m.slideEl.offsetHeight, l = w(m.slideEl).left + n.scrollX, o = w(m.slideEl).top + n.scrollY, d = l + P / 2 - i, p = o + L / 2 - r, v = m.imageEl.offsetWidth, b = m.imageEl.offsetHeight, y = v * s.scale, x = b * s.scale, S = Math.min(P / 2 - y / 2, 0), T = Math.min(L / 2 - x / 2, 0), M = -S, C = -T, u = d * s.scale, g = p * s.scale, u < S && (u = S), u > M && (u = M), g < T && (g = T), g > C && (g = C)), A && 1 === s.scale && (m.originX = 0, m.originY = 0), m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`, m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
		}

		function L() {
			const e = t.zoom,
				s = t.params.zoom;
			if (!m.slideEl) {
				t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
				let e = m.slideEl.querySelector(`.${s.containerClass}`);
				e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), m.imageEl = e, m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0
			}
			m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, c = 1, m.imageWrapEl.style.transitionDuration = "300ms", m.imageWrapEl.style.transform = "translate3d(0,0,0)", m.imageEl.style.transitionDuration = "300ms", m.imageEl.style.transform = "translate3d(0,0,0) scale(1)", m.slideEl.classList.remove(`${s.zoomedSlideClass}`), m.slideEl = void 0, m.originX = 0, m.originY = 0)
		}

		function A(e) {
			const s = t.zoom;
			s.scale && 1 !== s.scale ? L() : P(e)
		}

		function I() {
			return {
				passiveListener: !!t.params.passiveListeners && {
					passive: !0,
					capture: !1
				},
				activeListenerWithCapture: !t.params.passiveListeners || {
					passive: !1,
					capture: !0
				}
			}
		}

		function z() {
			const e = t.zoom;
			if (e.enabled) return;
			e.enabled = !0;
			const {
				passiveListener: s,
				activeListenerWithCapture: a
			} = I();
			t.wrapperEl.addEventListener("pointerdown", x, s), t.wrapperEl.addEventListener("pointermove", S, a), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
				t.wrapperEl.addEventListener(e, T, s)
			})), t.wrapperEl.addEventListener("pointermove", M, a)
		}

		function $() {
			const e = t.zoom;
			if (!e.enabled) return;
			e.enabled = !1;
			const {
				passiveListener: s,
				activeListenerWithCapture: a
			} = I();
			t.wrapperEl.removeEventListener("pointerdown", x, s), t.wrapperEl.removeEventListener("pointermove", S, a), ["pointerup", "pointercancel", "pointerout"].forEach((e => {
				t.wrapperEl.removeEventListener(e, T, s)
			})), t.wrapperEl.removeEventListener("pointermove", M, a)
		}
		Object.defineProperty(t.zoom, "scale", {
			get: () => v,
			set(e) {
				if (v !== e) {
					const t = m.imageEl,
						s = m.slideEl;
					i("zoomChange", e, t, s)
				}
				v = e
			}
		}), a("init", (() => {
			t.params.zoom.enabled && z()
		})), a("destroy", (() => {
			$()
		})), a("touchStart", ((e, s) => {
			t.zoom.enabled && function (e) {
				const s = t.device;
				if (!m.imageEl) return;
				if (h.isTouched) return;
				s.android && e.cancelable && e.preventDefault(), h.isTouched = !0;
				const a = u.length > 0 ? u[0] : e;
				h.touchesStart.x = a.pageX, h.touchesStart.y = a.pageY
			}(s)
		})), a("touchEnd", ((e, s) => {
			t.zoom.enabled && function () {
				const e = t.zoom;
				if (!m.imageEl) return;
				if (!h.isTouched || !h.isMoved) return h.isTouched = !1, void (h.isMoved = !1);
				h.isTouched = !1, h.isMoved = !1;
				let s = 300,
					a = 300;
				const i = g.x * s,
					r = h.currentX + i,
					n = g.y * a,
					l = h.currentY + n;
				0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
				const o = Math.max(s, a);
				h.currentX = r, h.currentY = l;
				const d = h.width * e.scale,
					c = h.height * e.scale;
				h.minX = Math.min(m.slideWidth / 2 - d / 2, 0), h.maxX = -h.minX, h.minY = Math.min(m.slideHeight / 2 - c / 2, 0), h.maxY = -h.minY, h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX), h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY), m.imageWrapEl.style.transitionDuration = `${o}ms`, m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
			}()
		})), a("doubleTap", ((e, s) => {
			!t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && A(s)
		})), a("transitionEnd", (() => {
			t.zoom.enabled && t.params.zoom.enabled && C()
		})), a("slideChange", (() => {
			t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
		})), Object.assign(t.zoom, {
			enable: z,
			disable: $,
			in: P,
			out: L,
			toggle: A
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;

		function i(e, t) {
			const s = function () {
				let e, t, s;
				return (a, i) => {
					for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
					return e
				}
			}();
			let a, i;
			return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
				return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
			}, this
		}

		function r() {
			t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
		}
		s({
			controller: {
				control: void 0,
				inverse: !1,
				by: "slide"
			}
		}), t.controller = {
			control: void 0
		}, a("beforeInit", (() => {
			if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
				const e = document.querySelector(t.params.controller.control);
				if (e && e.swiper) t.controller.control = e.swiper;
				else if (e) {
					const s = a => {
						t.controller.control = a.detail[0], t.update(), e.removeEventListener("init", s)
					};
					e.addEventListener("init", s)
				}
			} else t.controller.control = t.params.controller.control
		})), a("update", (() => {
			r()
		})), a("resize", (() => {
			r()
		})), a("observerUpdate", (() => {
			r()
		})), a("setTranslate", ((e, s, a) => {
			t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a)
		})), a("setTransition", ((e, s, a) => {
			t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a)
		})), Object.assign(t.controller, {
			setTranslate: function (e, s) {
				const a = t.controller.control;
				let r, n;
				const l = t.constructor;

				function o(e) {
					if (e.destroyed) return;
					const s = t.rtlTranslate ? -t.translate : t.translate;
					"slide" === t.params.controller.by && (! function (e) {
						t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid)
					}(e), n = -t.controller.spline.interpolate(-s)), n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), !Number.isNaN(r) && Number.isFinite(r) || (r = 1), n = (s - t.minTranslate()) * r + e.minTranslate()), t.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, t), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				if (Array.isArray(a))
					for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
				else a instanceof l && s !== a && o(a)
			},
			setTransition: function (e, s) {
				const a = t.constructor,
					i = t.controller.control;
				let r;

				function n(s) {
					s.destroyed || (s.setTransition(e, t), 0 !== e && (s.transitionStart(), s.params.autoHeight && l((() => {
						s.updateAutoHeight()
					})), x(s.wrapperEl, (() => {
						i && s.transitionEnd()
					}))))
				}
				if (Array.isArray(i))
					for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
				else i instanceof a && s !== i && n(i)
			}
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			a11y: {
				enabled: !0,
				notificationClass: "swiper-notification",
				prevSlideMessage: "Previous slide",
				nextSlideMessage: "Next slide",
				firstSlideMessage: "This is the first slide",
				lastSlideMessage: "This is the last slide",
				paginationBulletMessage: "Go to slide {{index}}",
				slideLabelMessage: "{{index}} / {{slidesLength}}",
				containerMessage: null,
				containerRoleDescriptionMessage: null,
				itemRoleDescriptionMessage: null,
				slideRole: "group",
				id: null
			}
		}), t.a11y = {
			clicked: !1
		};
		let i = null;

		function r(e) {
			const t = i;
			0 !== t.length && (t.innerHTML = "", t.innerHTML = e)
		}
		const n = e => (Array.isArray(e) ? e : [e]).filter((e => !!e));

		function l(e) {
			(e = n(e)).forEach((e => {
				e.setAttribute("tabIndex", "0")
			}))
		}

		function o(e) {
			(e = n(e)).forEach((e => {
				e.setAttribute("tabIndex", "-1")
			}))
		}

		function d(e, t) {
			(e = n(e)).forEach((e => {
				e.setAttribute("role", t)
			}))
		}

		function c(e, t) {
			(e = n(e)).forEach((e => {
				e.setAttribute("aria-roledescription", t)
			}))
		}

		function p(e, t) {
			(e = n(e)).forEach((e => {
				e.setAttribute("aria-label", t)
			}))
		}

		function u(e) {
			(e = n(e)).forEach((e => {
				e.setAttribute("aria-disabled", !0)
			}))
		}

		function m(e) {
			(e = n(e)).forEach((e => {
				e.setAttribute("aria-disabled", !1)
			}))
		}

		function h(e) {
			if (13 !== e.keyCode && 32 !== e.keyCode) return;
			const s = t.params.a11y,
				a = e.target;
			t.pagination && t.pagination.el && (a === t.pagination.el || t.pagination.el.contains(e.target)) && !e.target.matches(se(t.params.pagination.bulletClass)) || (t.navigation && t.navigation.nextEl && a === t.navigation.nextEl && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)), t.navigation && t.navigation.prevEl && a === t.navigation.prevEl && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)), t.pagination && a.matches(se(t.params.pagination.bulletClass)) && a.click())
		}

		function f() {
			return t.pagination && t.pagination.bullets && t.pagination.bullets.length
		}

		function g() {
			return f() && t.params.pagination.clickable
		}
		const w = (e, t, s) => {
			l(e), "BUTTON" !== e.tagName && (d(e, "button"), e.addEventListener("keydown", h)), p(e, s),
				function (e, t) {
					(e = n(e)).forEach((e => {
						e.setAttribute("aria-controls", t)
					}))
				}(e, t)
		},
			b = () => {
				t.a11y.clicked = !0
			},
			E = () => {
				requestAnimationFrame((() => {
					requestAnimationFrame((() => {
						t.destroyed || (t.a11y.clicked = !1)
					}))
				}))
			},
			x = e => {
				if (t.a11y.clicked) return;
				const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
				if (!s || !t.slides.includes(s)) return;
				const a = t.slides.indexOf(s) === t.activeIndex,
					i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
				a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(s), 0))
			},
			S = () => {
				const e = t.params.a11y;
				e.itemRoleDescriptionMessage && c(t.slides, e.itemRoleDescriptionMessage), e.slideRole && d(t.slides, e.slideRole);
				const s = t.slides.length;
				e.slideLabelMessage && t.slides.forEach(((a, i) => {
					const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
					p(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
				}))
			},
			T = () => {
				const e = t.params.a11y;
				t.el.append(i);
				const s = t.el;
				e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
				const a = t.wrapperEl,
					r = e.id || a.getAttribute("id") || `swiper-wrapper-${l = 16, void 0 === l && (l = 16), "x".repeat(l).replace(/x/g, (() => Math.round(16 * Math.random()).toString(16)))}`;
				var l;
				const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
				var d;
				d = r, n(a).forEach((e => {
					e.setAttribute("id", d)
				})),
					function (e, t) {
						(e = n(e)).forEach((e => {
							e.setAttribute("aria-live", t)
						}))
					}(a, o), S();
				let {
					nextEl: u,
					prevEl: m
				} = t.navigation ? t.navigation : {};
				if (u = n(u), m = n(m), u && u.forEach((t => w(t, r, e.nextSlideMessage))), m && m.forEach((t => w(t, r, e.prevSlideMessage))), g()) {
					n(t.pagination.el).forEach((e => {
						e.addEventListener("keydown", h)
					}))
				}
				t.el.addEventListener("focus", x, !0), t.el.addEventListener("pointerdown", b, !0), t.el.addEventListener("pointerup", E, !0)
			};
		a("beforeInit", (() => {
			i = v("span", t.params.a11y.notificationClass), i.setAttribute("aria-live", "assertive"), i.setAttribute("aria-atomic", "true")
		})), a("afterInit", (() => {
			t.params.a11y.enabled && T()
		})), a("slidesLengthChange snapGridLengthChange slidesGridLengthChange", (() => {
			t.params.a11y.enabled && S()
		})), a("fromEdge toEdge afterInit lock unlock", (() => {
			t.params.a11y.enabled && function () {
				if (t.params.loop || t.params.rewind || !t.navigation) return;
				const {
					nextEl: e,
					prevEl: s
				} = t.navigation;
				s && (t.isBeginning ? (u(s), o(s)) : (m(s), l(s))), e && (t.isEnd ? (u(e), o(e)) : (m(e), l(e)))
			}()
		})), a("paginationUpdate", (() => {
			t.params.a11y.enabled && function () {
				const e = t.params.a11y;
				f() && t.pagination.bullets.forEach((s => {
					t.params.pagination.clickable && (l(s), t.params.pagination.renderBullet || (d(s, "button"), p(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))), s.matches(se(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
				}))
			}()
		})), a("destroy", (() => {
			t.params.a11y.enabled && function () {
				i && i.remove();
				let {
					nextEl: e,
					prevEl: s
				} = t.navigation ? t.navigation : {};
				e = n(e), s = n(s), e && e.forEach((e => e.removeEventListener("keydown", h))), s && s.forEach((e => e.removeEventListener("keydown", h))), g() && n(t.pagination.el).forEach((e => {
					e.removeEventListener("keydown", h)
				}));
				t.el.removeEventListener("focus", x, !0), t.el.removeEventListener("pointerdown", b, !0), t.el.removeEventListener("pointerup", E, !0)
			}()
		}))
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			history: {
				enabled: !1,
				root: "",
				replaceState: !1,
				key: "slides",
				keepQuery: !1
			}
		});
		let i = !1,
			n = {};
		const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
			o = e => {
				const t = r();
				let s;
				s = e ? new URL(e) : t.location;
				const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
					i = a.length;
				return {
					key: a[i - 2],
					value: a[i - 1]
				}
			},
			d = (e, s) => {
				const a = r();
				if (!i || !t.params.history.enabled) return;
				let n;
				n = t.params.url ? new URL(t.params.url) : a.location;
				const o = t.slides[s];
				let d = l(o.getAttribute("data-history"));
				if (t.params.history.root.length > 0) {
					let s = t.params.history.root;
					"/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e ? `${e}/` : ""}${d}`
				} else n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
				t.params.history.keepQuery && (d += n.search);
				const c = a.history.state;
				c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
					value: d
				}, null, d) : a.history.pushState({
					value: d
				}, null, d))
			},
			c = (e, s, a) => {
				if (s)
					for (let i = 0, r = t.slides.length; i < r; i += 1) {
						const r = t.slides[i];
						if (l(r.getAttribute("data-history")) === s) {
							const s = t.getSlideIndex(r);
							t.slideTo(s, e, a)
						}
					} else t.slideTo(0, e, a)
			},
			p = () => {
				n = o(t.params.url), c(t.params.speed, n.value, !1)
			};
		a("init", (() => {
			t.params.history.enabled && (() => {
				const e = r();
				if (t.params.history) {
					if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void (t.params.hashNavigation.enabled = !0);
					i = !0, n = o(t.params.url), n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
				}
			})()
		})), a("destroy", (() => {
			t.params.history.enabled && (() => {
				const e = r();
				t.params.history.replaceState || e.removeEventListener("popstate", p)
			})()
		})), a("transitionEnd _freeModeNoMomentumRelease", (() => {
			i && d(t.params.history.key, t.activeIndex)
		})), a("slideChange", (() => {
			i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
		}))
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			emit: i,
			on: n
		} = e, l = !1;
		const o = a(),
			d = r();
		s({
			hashNavigation: {
				enabled: !1,
				replaceState: !1,
				watchState: !1,
				getSlideIndex(e, s) {
					if (t.virtual && t.params.virtual.enabled) {
						const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
						if (!e) return 0;
						return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
					}
					return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
				}
			}
		});
		const c = () => {
			i("hashChange");
			const e = o.location.hash.replace("#", ""),
				s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
			if (e !== (s ? s.getAttribute("data-hash") : "")) {
				const s = t.params.hashNavigation.getSlideIndex(t, e);
				if (void 0 === s || Number.isNaN(s)) return;
				t.slideTo(s)
			}
		},
			p = () => {
				if (!l || !t.params.hashNavigation.enabled) return;
				const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex],
					s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
				t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""), i("hashSet")) : (o.location.hash = s || "", i("hashSet"))
			};
		n("init", (() => {
			t.params.hashNavigation.enabled && (() => {
				if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
				l = !0;
				const e = o.location.hash.replace("#", "");
				if (e) {
					const s = 0,
						a = t.params.hashNavigation.getSlideIndex(t, e);
					t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0)
				}
				t.params.hashNavigation.watchState && d.addEventListener("hashchange", c)
			})()
		})), n("destroy", (() => {
			t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c)
		})), n("transitionEnd _freeModeNoMomentumRelease", (() => {
			l && p()
		})), n("slideChange", (() => {
			l && t.params.cssMode && p()
		}))
	}, function (e) {
		let t, s, {
			swiper: i,
			extendParams: r,
			on: n,
			emit: l,
			params: o
		} = e;
		i.autoplay = {
			running: !1,
			paused: !1,
			timeLeft: 0
		}, r({
			autoplay: {
				enabled: !1,
				delay: 3e3,
				waitForTransition: !0,
				disableOnInteraction: !1,
				stopOnLastSlide: !1,
				reverseDirection: !1,
				pauseOnMouseEnter: !1
			}
		});
		let d, c, p, u, m, h, f, g, v = o && o.autoplay ? o.autoplay.delay : 3e3,
			w = o && o.autoplay ? o.autoplay.delay : 3e3,
			b = (new Date).getTime();

		function y(e) {
			i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y), g || C())
		}
		const E = () => {
			if (i.destroyed || !i.autoplay.running) return;
			i.autoplay.paused ? c = !0 : c && (w = d, c = !1);
			const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
			i.autoplay.timeLeft = e, l("autoplayTimeLeft", e, e / v), s = requestAnimationFrame((() => {
				E()
			}))
		},
			x = e => {
				if (i.destroyed || !i.autoplay.running) return;
				cancelAnimationFrame(s), E();
				let a = void 0 === e ? i.params.autoplay.delay : e;
				v = i.params.autoplay.delay, w = i.params.autoplay.delay;
				const r = (() => {
					let e;
					if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex], !e) return;
					return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
				})();
				!Number.isNaN(r) && r > 0 && void 0 === e && (a = r, v = r, w = r), d = a;
				const n = i.params.speed,
					o = () => {
						i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0), l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0), l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0), l("autoplay")), i.params.cssMode && (b = (new Date).getTime(), requestAnimationFrame((() => {
							x()
						}))))
					};
				return a > 0 ? (clearTimeout(t), t = setTimeout((() => {
					o()
				}), a)) : requestAnimationFrame((() => {
					o()
				})), a
			},
			S = () => {
				b = (new Date).getTime(), i.autoplay.running = !0, x(), l("autoplayStart")
			},
			T = () => {
				i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), l("autoplayStop")
			},
			M = (e, s) => {
				if (i.destroyed || !i.autoplay.running) return;
				clearTimeout(t), e || (f = !0);
				const a = () => {
					l("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C()
				};
				if (i.autoplay.paused = !0, s) return h && (d = i.params.autoplay.delay), h = !1, void a();
				const r = d || i.params.autoplay.delay;
				d = r - ((new Date).getTime() - b), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), a())
			},
			C = () => {
				i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(), f ? (f = !1, x(d)) : x(), i.autoplay.paused = !1, l("autoplayResume"))
			},
			P = () => {
				if (i.destroyed || !i.autoplay.running) return;
				const e = a();
				"hidden" === e.visibilityState && (f = !0, M(!0)), "visible" === e.visibilityState && C()
			},
			L = e => {
				"mouse" === e.pointerType && (f = !0, g = !0, i.animating || i.autoplay.paused || M(!0))
			},
			A = e => {
				"mouse" === e.pointerType && (g = !1, i.autoplay.paused && C())
			};
		n("init", (() => {
			i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L), i.el.addEventListener("pointerleave", A)), a().addEventListener("visibilitychange", P), S())
		})), n("destroy", (() => {
			i.el.removeEventListener("pointerenter", L), i.el.removeEventListener("pointerleave", A), a().removeEventListener("visibilitychange", P), i.autoplay.running && T()
		})), n("_freeModeStaticRelease", (() => {
			(u || f) && C()
		})), n("_freeModeNoMomentumRelease", (() => {
			i.params.autoplay.disableOnInteraction ? T() : M(!0, !0)
		})), n("beforeTransitionStart", ((e, t, s) => {
			!i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T())
		})), n("sliderFirstMove", (() => {
			!i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0, u = !1, f = !1, m = setTimeout((() => {
				f = !0, u = !0, M(!0)
			}), 200)))
		})), n("touchEnd", (() => {
			if (!i.destroyed && i.autoplay.running && p) {
				if (clearTimeout(m), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void (p = !1);
				u && i.params.cssMode && C(), u = !1, p = !1
			}
		})), n("slideChange", (() => {
			!i.destroyed && i.autoplay.running && (h = !0)
		})), Object.assign(i.autoplay, {
			start: S,
			stop: T,
			pause: M,
			resume: C
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: i
		} = e;
		s({
			thumbs: {
				swiper: null,
				multipleActiveThumbs: !0,
				autoScrollOffset: 0,
				slideThumbActiveClass: "swiper-slide-thumb-active",
				thumbsContainerClass: "swiper-thumbs"
			}
		});
		let r = !1,
			n = !1;

		function l() {
			const e = t.thumbs.swiper;
			if (!e || e.destroyed) return;
			const s = e.clickedIndex,
				a = e.clickedSlide;
			if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
			if (null == s) return;
			let i;
			i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s, t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
		}

		function o() {
			const {
				thumbs: e
			} = t.params;
			if (r) return !1;
			r = !0;
			const s = t.constructor;
			if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
				watchSlidesProgress: !0,
				slideToClickedSlide: !1
			}), Object.assign(t.thumbs.swiper.params, {
				watchSlidesProgress: !0,
				slideToClickedSlide: !1
			}), t.thumbs.swiper.update();
			else if (c(e.swiper)) {
				const a = Object.assign({}, e.swiper);
				Object.assign(a, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), t.thumbs.swiper = new s(a), n = !0
			}
			return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0
		}

		function d(e) {
			const s = t.thumbs.swiper;
			if (!s || s.destroyed) return;
			const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
			let i = 1;
			const r = t.params.thumbs.slideThumbActiveClass;
			if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (i = 1), i = Math.floor(i), s.slides.forEach((e => e.classList.remove(r))), s.params.loop || s.params.virtual && s.params.virtual.enabled)
				for (let e = 0; e < i; e += 1) f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e => {
					e.classList.add(r)
				}));
			else
				for (let e = 0; e < i; e += 1) s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
			const n = t.params.thumbs.autoScrollOffset,
				l = n && !s.params.loop;
			if (t.realIndex !== s.realIndex || l) {
				const i = s.activeIndex;
				let r, o;
				if (s.params.loop) {
					const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
					r = s.slides.indexOf(e), o = t.activeIndex > t.previousIndex ? "next" : "prev"
				} else r = t.realIndex, o = r > t.previousIndex ? "next" : "prev";
				l && (r += "next" === o ? n : -1 * n), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup, s.slideTo(r, e ? 0 : void 0))
			}
		}
		t.thumbs = {
			swiper: null
		}, i("beforeInit", (() => {
			const {
				thumbs: e
			} = t.params;
			if (e && e.swiper)
				if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
					const s = a(),
						i = () => {
							const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
							if (a && a.swiper) e.swiper = a.swiper, o(), d(!0);
							else if (a) {
								const s = i => {
									e.swiper = i.detail[0], a.removeEventListener("init", s), o(), d(!0), e.swiper.update(), t.update()
								};
								a.addEventListener("init", s)
							}
							return a
						},
						r = () => {
							if (t.destroyed) return;
							i() || requestAnimationFrame(r)
						};
					requestAnimationFrame(r)
				} else o(), d(!0)
		})), i("slideChange update resize observerUpdate", (() => {
			d()
		})), i("setTransition", ((e, s) => {
			const a = t.thumbs.swiper;
			a && !a.destroyed && a.setTransition(s)
		})), i("beforeDestroy", (() => {
			const e = t.thumbs.swiper;
			e && !e.destroyed && n && e.destroy()
		})), Object.assign(t.thumbs, {
			init: o,
			update: d
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			emit: a,
			once: i
		} = e;
		s({
			freeMode: {
				enabled: !1,
				momentum: !0,
				momentumRatio: 1,
				momentumBounce: !0,
				momentumBounceRatio: 1,
				momentumVelocityRatio: 1,
				sticky: !1,
				minimumVelocity: .02
			}
		}), Object.assign(t, {
			freeMode: {
				onTouchStart: function () {
					if (t.params.cssMode) return;
					const e = t.getTranslate();
					t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
						currentPos: t.rtl ? t.translate : -t.translate
					})
				},
				onTouchMove: function () {
					if (t.params.cssMode) return;
					const {
						touchEventsData: e,
						touches: s
					} = t;
					0 === e.velocities.length && e.velocities.push({
						position: s[t.isHorizontal() ? "startX" : "startY"],
						time: e.touchStartTime
					}), e.velocities.push({
						position: s[t.isHorizontal() ? "currentX" : "currentY"],
						time: o()
					})
				},
				onTouchEnd: function (e) {
					let {
						currentPos: s
					} = e;
					if (t.params.cssMode) return;
					const {
						params: r,
						wrapperEl: n,
						rtlTranslate: l,
						snapGrid: d,
						touchEventsData: c
					} = t, p = o() - c.touchStartTime;
					if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
					else if (s > -t.maxTranslate()) t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
					else {
						if (r.freeMode.momentum) {
							if (c.velocities.length > 1) {
								const e = c.velocities.pop(),
									s = c.velocities.pop(),
									a = e.position - s.position,
									i = e.time - s.time;
								t.velocity = a / i, t.velocity /= 2, Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || o() - e.time > 300) && (t.velocity = 0)
							} else t.velocity = 0;
							t.velocity *= r.freeMode.momentumVelocityRatio, c.velocities.length = 0;
							let e = 1e3 * r.freeMode.momentumRatio;
							const s = t.velocity * e;
							let p = t.translate + s;
							l && (p = -p);
							let u, m = !1;
							const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
							let f;
							if (p < t.maxTranslate()) r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h), u = t.maxTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
							else if (p > t.minTranslate()) r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h), u = t.minTranslate(), m = !0, c.allowMomentumBounce = !0) : p = t.minTranslate(), r.loop && r.centeredSlides && (f = !0);
							else if (r.freeMode.sticky) {
								let e;
								for (let t = 0; t < d.length; t += 1)
									if (d[t] > -p) {
										e = t;
										break
									} p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1], p = -p
							}
							if (f && i("transitionEnd", (() => {
								t.loopFix()
							})), 0 !== t.velocity) {
								if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity), r.freeMode.sticky) {
									const s = Math.abs((l ? -p : p) - t.translate),
										a = t.slidesSizesGrid[t.activeIndex];
									e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
								}
							} else if (r.freeMode.sticky) return void t.slideToClosest();
							r.freeMode.momentumBounce && m ? (t.updateProgress(u), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating = !0, x(n, (() => {
								t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"), t.setTransition(r.speed), setTimeout((() => {
									t.setTranslate(u), x(n, (() => {
										t && !t.destroyed && t.transitionEnd()
									}))
								}), 0))
							}))) : t.velocity ? (a("_freeModeNoMomentumRelease"), t.updateProgress(p), t.setTransition(e), t.setTranslate(p), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, x(n, (() => {
								t && !t.destroyed && t.transitionEnd()
							})))) : t.updateProgress(p), t.updateActiveIndex(), t.updateSlidesClasses()
						} else {
							if (r.freeMode.sticky) return void t.slideToClosest();
							r.freeMode && a("_freeModeNoMomentumRelease")
						} (!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
					}
				}
			}
		})
	}, function (e) {
		let t, s, a, i, {
			swiper: r,
			extendParams: n,
			on: l
		} = e;
		n({
			grid: {
				rows: 1,
				fill: "column"
			}
		});
		const o = () => {
			let e = r.params.spaceBetween;
			return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)), e
		};
		l("init", (() => {
			i = r.params.grid && r.params.grid.rows > 1
		})), l("update", (() => {
			const {
				params: e,
				el: t
			} = r, s = e.grid && e.grid.rows > 1;
			i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`), a = 1, r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`), "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`), r.emitContainerClasses()), i = s
		})), r.grid = {
			initSlides: e => {
				const {
					slidesPerView: i
				} = r.params, {
					rows: n,
					fill: l
				} = r.params.grid, o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
				a = Math.floor(o / n), t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n, "auto" !== i && "row" === l && (t = Math.max(t, i * n)), s = t / n
			},
			unsetSlides: () => {
				r.slides && r.slides.forEach((e => {
					e.swiperSlideGridSet && (e.style.height = "", e.style[r.getDirectionLabel("margin-top")] = "")
				}))
			},
			updateSlide: (e, i, n) => {
				const {
					slidesPerGroup: l
				} = r.params, d = o(), {
					rows: c,
					fill: p
				} = r.params.grid, u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
				let m, h, f;
				if ("row" === p && l > 1) {
					const s = Math.floor(e / (l * c)),
						a = e - c * l * s,
						r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
					f = Math.floor(a / r), h = a - f * r + s * l, m = h + f * t / c, i.style.order = m
				} else "column" === p ? (h = Math.floor(e / c), f = e - h * c, (h > a || h === a && f === c - 1) && (f += 1, f >= c && (f = 0, h += 1))) : (f = Math.floor(e / s), h = e - f * s);
				i.row = f, i.column = h, i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`, i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "", i.swiperSlideGridSet = !0
			},
			updateWrapperSize: (e, s) => {
				const {
					centeredSlides: a,
					roundLengths: i
				} = r.params, n = o(), {
					rows: l
				} = r.params.grid;
				if (r.virtualSize = (e + n) * t, r.virtualSize = Math.ceil(r.virtualSize / l) - n, r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`), a) {
					const e = [];
					for (let t = 0; t < s.length; t += 1) {
						let a = s[t];
						i && (a = Math.floor(a)), s[t] < r.virtualSize + s[0] && e.push(a)
					}
					s.splice(0, s.length), s.push(...e)
				}
			}
		}
	}, function (e) {
		let {
			swiper: t
		} = e;
		Object.assign(t, {
			appendSlide: ae.bind(t),
			prependSlide: ie.bind(t),
			addSlide: re.bind(t),
			removeSlide: ne.bind(t),
			removeAllSlides: le.bind(t)
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			fadeEffect: {
				crossFade: !1
			}
		}), oe({
			effect: "fade",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					slides: e
				} = t;
				t.params.fadeEffect;
				for (let s = 0; s < e.length; s += 1) {
					const e = t.slides[s];
					let a = -e.swiperSlideOffset;
					t.params.virtualTranslate || (a -= t.translate);
					let i = 0;
					t.isHorizontal() || (i = a, a = 0);
					const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0),
						n = de(0, e);
					n.style.opacity = r, n.style.transform = `translate3d(${a}px, ${i}px, 0px)`
				}
			},
			setTransition: e => {
				const s = t.slides.map((e => h(e)));
				s.forEach((t => {
					t.style.transitionDuration = `${e}ms`
				})), ce({
					swiper: t,
					duration: e,
					transformElements: s,
					allSlides: !0
				})
			},
			overwriteParams: () => ({
				slidesPerView: 1,
				slidesPerGroup: 1,
				watchSlidesProgress: !0,
				spaceBetween: 0,
				virtualTranslate: !t.params.cssMode
			})
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			cubeEffect: {
				slideShadows: !0,
				shadow: !0,
				shadowOffset: 20,
				shadowScale: .94
			}
		});
		const i = (e, t, s) => {
			let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
				i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
			a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")), e.append(a)), i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")), e.append(i)), a && (a.style.opacity = Math.max(-t, 0)), i && (i.style.opacity = Math.max(t, 0))
		};
		oe({
			effect: "cube",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					el: e,
					wrapperEl: s,
					slides: a,
					width: r,
					height: n,
					rtlTranslate: l,
					size: o,
					browser: d
				} = t, c = t.params.cubeEffect, p = t.isHorizontal(), u = t.virtual && t.params.virtual.enabled;
				let m, h = 0;
				c.shadow && (p ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"), m || (m = v("div", "swiper-cube-shadow"), t.wrapperEl.append(m)), m.style.height = `${r}px`) : (m = e.querySelector(".swiper-cube-shadow"), m || (m = v("div", "swiper-cube-shadow"), e.append(m))));
				for (let e = 0; e < a.length; e += 1) {
					const s = a[e];
					let r = e;
					u && (r = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
					let n = 90 * r,
						d = Math.floor(n / 360);
					l && (n = -n, d = Math.floor(-n / 360));
					const m = Math.max(Math.min(s.progress, 1), -1);
					let f = 0,
						g = 0,
						v = 0;
					r % 4 == 0 ? (f = 4 * -d * o, v = 0) : (r - 1) % 4 == 0 ? (f = 0, v = 4 * -d * o) : (r - 2) % 4 == 0 ? (f = o + 4 * d * o, v = o) : (r - 3) % 4 == 0 && (f = -o, v = 3 * o + 4 * o * d), l && (f = -f), p || (g = f, f = 0);
					const w = `rotateX(${p ? 0 : -n}deg) rotateY(${p ? n : 0}deg) translate3d(${f}px, ${g}px, ${v}px)`;
					m <= 1 && m > -1 && (h = 90 * r + 90 * m, l && (h = 90 * -r - 90 * m), t.browser && t.browser.isSafari && Math.abs(h) / 90 % 2 == 1 && (h += .001)), s.style.transform = w, c.slideShadows && i(s, m, p)
				}
				if (s.style.transformOrigin = `50% 50% -${o / 2}px`, s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`, c.shadow)
					if (p) m.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;
					else {
						const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
							t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
							s = c.shadowScale,
							a = c.shadowScale / t,
							i = c.shadowOffset;
						m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-89.99deg)`
					} const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
				s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : h}deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`, s.style.setProperty("--swiper-cube-translate-z", `${f}px`)
			},
			setTransition: e => {
				const {
					el: s,
					slides: a
				} = t;
				if (a.forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				})), t.params.cubeEffect.shadow && !t.isHorizontal()) {
					const t = s.querySelector(".swiper-cube-shadow");
					t && (t.style.transitionDuration = `${e}ms`)
				}
			},
			recreateShadows: () => {
				const e = t.isHorizontal();
				t.slides.forEach((t => {
					const s = Math.max(Math.min(t.progress, 1), -1);
					i(t, s, e)
				}))
			},
			getEffectParams: () => t.params.cubeEffect,
			perspective: () => !0,
			overwriteParams: () => ({
				slidesPerView: 1,
				slidesPerGroup: 1,
				watchSlidesProgress: !0,
				resistanceRatio: 0,
				spaceBetween: 0,
				centeredSlides: !1,
				virtualTranslate: !0
			})
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			flipEffect: {
				slideShadows: !0,
				limitRotation: !0
			}
		});
		const i = (e, s) => {
			let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top"),
				i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
			a || (a = pe("flip", e, t.isHorizontal() ? "left" : "top")), i || (i = pe("flip", e, t.isHorizontal() ? "right" : "bottom")), a && (a.style.opacity = Math.max(-s, 0)), i && (i.style.opacity = Math.max(s, 0))
		};
		oe({
			effect: "flip",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					slides: e,
					rtlTranslate: s
				} = t, a = t.params.flipEffect;
				for (let r = 0; r < e.length; r += 1) {
					const n = e[r];
					let l = n.progress;
					t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
					const o = n.swiperSlideOffset;
					let d = -180 * l,
						c = 0,
						p = t.params.cssMode ? -o - t.translate : -o,
						u = 0;
					t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), t.browser && t.browser.isSafari && (Math.abs(d) / 90 % 2 == 1 && (d += .001), Math.abs(c) / 90 % 2 == 1 && (c += .001)), n.style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i(n, l);
					const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
					de(0, n).style.transform = m
				}
			},
			setTransition: e => {
				const s = t.slides.map((e => h(e)));
				s.forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				})), ce({
					swiper: t,
					duration: e,
					transformElements: s
				})
			},
			recreateShadows: () => {
				t.params.flipEffect, t.slides.forEach((e => {
					let s = e.progress;
					t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)), i(e, s)
				}))
			},
			getEffectParams: () => t.params.flipEffect,
			perspective: () => !0,
			overwriteParams: () => ({
				slidesPerView: 1,
				slidesPerGroup: 1,
				watchSlidesProgress: !0,
				spaceBetween: 0,
				virtualTranslate: !t.params.cssMode
			})
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			coverflowEffect: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				scale: 1,
				modifier: 1,
				slideShadows: !0
			}
		}), oe({
			effect: "coverflow",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					width: e,
					height: s,
					slides: a,
					slidesSizesGrid: i
				} = t, r = t.params.coverflowEffect, n = t.isHorizontal(), l = t.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
				for (let e = 0, s = a.length; e < s; e += 1) {
					const s = a[e],
						l = i[e],
						p = (o - s.swiperSlideOffset - l / 2) / l,
						u = "function" == typeof r.modifier ? r.modifier(p) : p * r.modifier;
					let m = n ? d * u : 0,
						h = n ? 0 : d * u,
						f = -c * Math.abs(u),
						g = r.stretch;
					"string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(r.stretch) / 100 * l);
					let v = n ? 0 : g * u,
						w = n ? g * u : 0,
						b = 1 - (1 - r.scale) * Math.abs(u);
					Math.abs(w) < .001 && (w = 0), Math.abs(v) < .001 && (v = 0), Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0), t.browser && t.browser.isSafari && (Math.abs(m) / 90 % 2 == 1 && (m += .001), Math.abs(h) / 90 % 2 == 1 && (h += .001));
					const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;
					if (de(0, s).style.transform = y, s.style.zIndex = 1 - Math.abs(Math.round(u)), r.slideShadows) {
						let e = n ? s.querySelector(".swiper-slide-shadow-left") : s.querySelector(".swiper-slide-shadow-top"),
							t = n ? s.querySelector(".swiper-slide-shadow-right") : s.querySelector(".swiper-slide-shadow-bottom");
						e || (e = pe("coverflow", s, n ? "left" : "top")), t || (t = pe("coverflow", s, n ? "right" : "bottom")), e && (e.style.opacity = u > 0 ? u : 0), t && (t.style.opacity = -u > 0 ? -u : 0)
					}
				}
			},
			setTransition: e => {
				t.slides.map((e => h(e))).forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				}))
			},
			perspective: () => !0,
			overwriteParams: () => ({
				watchSlidesProgress: !0
			})
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			creativeEffect: {
				limitProgress: 1,
				shadowPerProgress: !1,
				progressMultiplier: 1,
				perspective: !0,
				prev: {
					translate: [0, 0, 0],
					rotate: [0, 0, 0],
					opacity: 1,
					scale: 1
				},
				next: {
					translate: [0, 0, 0],
					rotate: [0, 0, 0],
					opacity: 1,
					scale: 1
				}
			}
		});
		const i = e => "string" == typeof e ? e : `${e}px`;
		oe({
			effect: "creative",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					slides: e,
					wrapperEl: s,
					slidesSizesGrid: a
				} = t, r = t.params.creativeEffect, {
					progressMultiplier: n
				} = r, l = t.params.centeredSlides;
				if (l) {
					const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
					s.style.transform = `translateX(calc(50% - ${e}px))`
				}
				for (let s = 0; s < e.length; s += 1) {
					const a = e[s],
						o = a.progress,
						d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
					let c = d;
					l || (c = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
					const p = a.swiperSlideOffset,
						u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
						m = [0, 0, 0];
					let h = !1;
					t.isHorizontal() || (u[1] = u[0], u[0] = 0);
					let f = {
						translate: [0, 0, 0],
						rotate: [0, 0, 0],
						scale: 1,
						opacity: 1
					};
					d < 0 ? (f = r.next, h = !0) : d > 0 && (f = r.prev, h = !0), u.forEach(((e, t) => {
						u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
					})), m.forEach(((e, s) => {
						let a = f.rotate[s] * Math.abs(d * n);
						t.browser && t.browser.isSafari && Math.abs(a) / 90 % 2 == 1 && (a += .001), m[s] = a
					})), a.style.zIndex = -Math.abs(Math.round(o)) + e.length;
					const g = u.join(", "),
						v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
						w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
						b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
						y = `translate3d(${g}) ${v} ${w}`;
					if (h && f.shadow || !h) {
						let e = a.querySelector(".swiper-slide-shadow");
						if (!e && f.shadow && (e = pe("creative", a)), e) {
							const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
							e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
						}
					}
					const E = de(0, a);
					E.style.transform = y, E.style.opacity = b, f.origin && (E.style.transformOrigin = f.origin)
				}
			},
			setTransition: e => {
				const s = t.slides.map((e => h(e)));
				s.forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				})), ce({
					swiper: t,
					duration: e,
					transformElements: s,
					allSlides: !0
				})
			},
			perspective: () => t.params.creativeEffect.perspective,
			overwriteParams: () => ({
				watchSlidesProgress: !0,
				virtualTranslate: !t.params.cssMode
			})
		})
	}, function (e) {
		let {
			swiper: t,
			extendParams: s,
			on: a
		} = e;
		s({
			cardsEffect: {
				slideShadows: !0,
				rotate: !0,
				perSlideRotate: 2,
				perSlideOffset: 8
			}
		}), oe({
			effect: "cards",
			swiper: t,
			on: a,
			setTranslate: () => {
				const {
					slides: e,
					activeIndex: s,
					rtlTranslate: a
				} = t, i = t.params.cardsEffect, {
					startTranslate: r,
					isTouched: n
				} = t.touchEventsData, l = a ? -t.translate : t.translate;
				for (let o = 0; o < e.length; o += 1) {
					const d = e[o],
						c = d.progress,
						p = Math.min(Math.max(c, -4), 4);
					let u = d.swiperSlideOffset;
					t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
					let m = t.params.cssMode ? -u - t.translate : -u,
						h = 0;
					const f = -100 * Math.abs(p);
					let g = 1,
						v = -i.perSlideRotate * p,
						w = i.perSlideOffset - .75 * Math.abs(p);
					const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
						y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r,
						E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
					if (y || E) {
						const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
						v += -28 * p * e, g += -.5 * e, w += 96 * e, h = -25 * e * Math.abs(p) + "%"
					}
					if (m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`, !t.isHorizontal()) {
						const e = h;
						h = m, m = e
					}
					const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p),
						S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? a ? -v : v : 0}deg)\n        scale(${x})\n      `;
					if (i.slideShadows) {
						let e = d.querySelector(".swiper-slide-shadow");
						e || (e = pe("cards", d)), e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
					}
					d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
					de(0, d).style.transform = S
				}
			},
			setTransition: e => {
				const s = t.slides.map((e => h(e)));
				s.forEach((t => {
					t.style.transitionDuration = `${e}ms`, t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
						t.style.transitionDuration = `${e}ms`
					}))
				})), ce({
					swiper: t,
					duration: e,
					transformElements: s
				})
			},
			perspective: () => !0,
			overwriteParams: () => ({
				watchSlidesProgress: !0,
				virtualTranslate: !t.params.cssMode
			})
		})
	}];
	return ee.use(ue), ee
}();
//# sourceMappingURL=swiper-bundle.min.js.map


/* 
	================================================
	  
	Таймер
	
	================================================
*/

class CountdownTimer {
	constructor(deadline, cbChange, cbComplete) {
		this._deadline = deadline;
		this._cbChange = cbChange;
		this._cbComplete = cbComplete;
		this._timerId = null;
		this._out = {
			days: '',
			hours: '',
			minutes: '',
			seconds: '',
			daysTitle: '',
			hoursTitle: '',
			minutesTitle: '',
			secondsTitle: ''
		};
		this._start();
	}

	static declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
	}

	_start() {
		// счетчик
		this._calc();
		this._timerId = setInterval(this._calc.bind(this), 1000);
	}

	_calc() {
		let diff = this._deadline - new Date();
		let days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		let hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		let minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		let seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

		// добавления 0 в начало и склонение слов
		this._out.days = days < 10 ? '0' + days : days;
		this._out.hours = hours < 10 ? '0' + hours : hours;
		this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
		this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
		this._out.daysTitle = CountdownTimer.declensionNum(days, ['день', 'дня', 'дней']);
		this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['час', 'часа', 'часов']);
		this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['минута', 'минуты', 'минут']);
		this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
		this._cbChange ? this._cbChange(this._out) : null;
		if (diff <= 0) {
			clearInterval(this._timerId);
			this._cbComplete ? this._cbComplete() : null;
		}
	}
}

let timers = document.querySelectorAll('.timer');

timers.forEach(timer => {
	let timerId = timer.getAttribute('data-date-id');
	if (!timerId) return;

	// таймер на определенную дату
	if (timer.getAttribute('data-date')) {
		let [dateYear, dateMonth, dateDay] = timer.getAttribute('data-date').split('-');
		initTimer(timer, new Date(dateYear, dateMonth - 1, dateDay), timerId);
	}

	// таймер на определенный период
	if (timer.getAttribute('data-period')) {
		let [days, hours = 0, minutes = 0, seconds = 0] = timer.getAttribute('data-period').split('-');
		let milisecond = (days * 86400000) + (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
		let savedTime = getCookie(`timer_${timerId}`);

		// если нет записи в куки (первый заход на сайт)
		if (!savedTime) {
			updateCookieDate(timerId, milisecond);
			initTimer(timer, new Date(Date.now() + milisecond), timerId);
		} else {
			// если есть запись в куки

			// если нужно перезапустить таймер после окончания
			if (new Date(savedTime).getTime() < Date.now() && (timer.getAttribute('data-repeat') != null)) {
				updateCookieDate(timerId, milisecond);
				initTimer(timer, new Date(Date.now() + milisecond), timerId);
			} else {
				initTimer(timer, new Date(savedTime), timerId);
			}
		}
	}
});

function initTimer(timer, result, timerId) {
	new CountdownTimer(result, (item) => {
		let timerDays = timer.querySelector('.timer__item-days');
		let timerHours = timer.querySelector('.timer__item-hours');
		let timerMinutes = timer.querySelector('.timer__item-minutes');
		let timerSeconds = timer.querySelector('.timer__item-seconds');

		// время
		timerDays.textContent = item.days;
		timerHours.textContent = item.hours;
		timerMinutes.textContent = item.minutes;
		timerSeconds.textContent = item.seconds;

		// подписи
		timerDays.nextElementSibling.textContent = item.daysTitle;
		timerHours.nextElementSibling.textContent = item.hoursTitle;
		timerMinutes.nextElementSibling.textContent = item.minutesTitle;
		timerSeconds.nextElementSibling.textContent = item.secondsTitle;
	});
}

// обновление записи в куки
function updateCookieDate(timerId, milisecond) {
	document.cookie = `timer_${timerId}=${new Date(Date.now() + milisecond)}; path=/`;
}

// получение записи из куки
function getCookie(name) {
	let matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
	return matches ? matches[1] : null;
}

/*! WOW - v1.1.2 - 2015-04-07
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
	var a, b, c, d, e, f = function (a, b) {
		return function () {
			return a.apply(b, arguments)
		}
	},
		g = [].indexOf || function (a) {
			for (var b = 0, c = this.length; c > b; b++)
				if (b in this && this[b] === a) return b;
			return -1
		};
	b = function () {
		function a() { }
		return a.prototype.extend = function (a, b) {
			var c, d;
			for (c in b) d = b[c], null == a[c] && (a[c] = d);
			return a
		}, a.prototype.isMobile = function (a) {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
		}, a.prototype.createEvent = function (a, b, c, d) {
			var e;
			return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
		}, a.prototype.emitEvent = function (a, b) {
			return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
		}, a.prototype.addEvent = function (a, b, c) {
			return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
		}, a.prototype.removeEvent = function (a, b, c) {
			return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
		}, a.prototype.innerHeight = function () {
			return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
		}, a
	}(), c = this.WeakMap || this.MozWeakMap || (c = function () {
		function a() {
			this.keys = [], this.values = []
		}
		return a.prototype.get = function (a) {
			var b, c, d, e, f;
			for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
				if (c = f[b], c === a) return this.values[b]
		}, a.prototype.set = function (a, b) {
			var c, d, e, f, g;
			for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
				if (d = g[c], d === a) return void (this.values[c] = b);
			return this.keys.push(a), this.values.push(b)
		}, a
	}()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
		function a() {
			"undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
		}
		return a.notSupported = !0, a.prototype.observe = function () { }, a
	}()), d = this.getComputedStyle || function (a) {
		return this.getPropertyValue = function (b) {
			var c;
			return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
				return b.toUpperCase()
			}), (null != (c = a.currentStyle) ? c[b] : void 0) || null
		}, this
	}, e = /(\-([a-z]){1})/g, this.WOW = function () {
		function e(a) {
			null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
		}
		return e.prototype.defaults = {
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: !0,
			live: !0,
			callback: null
		}, e.prototype.init = function () {
			var a;
			return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
		}, e.prototype.start = function () {
			var b, c, d, e;
			if (this.stopped = !1, this.boxes = function () {
				var a, c, d, e;
				for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
				return e
			}.call(this), this.all = function () {
				var a, c, d, e;
				for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
				return e
			}.call(this), this.boxes.length)
				if (this.disabled()) this.resetStyle();
				else
					for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
			return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
				return function (b) {
					var c, d, e, f, g;
					for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
						var a, b, c, d;
						for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
						return d
					}.call(a));
					return g
				}
			}(this)).observe(document.body, {
				childList: !0,
				subtree: !0
			}) : void 0
		}, e.prototype.stop = function () {
			return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
		}, e.prototype.sync = function () {
			return a.notSupported ? this.doSync(this.element) : void 0
		}, e.prototype.doSync = function (a) {
			var b, c, d, e, f;
			if (null == a && (a = this.element), 1 === a.nodeType) {
				for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
				return f
			}
		}, e.prototype.show = function (a) {
			return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
		}, e.prototype.applyStyle = function (a, b) {
			var c, d, e;
			return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
				return function () {
					return f.customStyle(a, b, d, c, e)
				}
			}(this))
		}, e.prototype.animate = function () {
			return "requestAnimationFrame" in window ? function (a) {
				return window.requestAnimationFrame(a)
			} : function (a) {
				return a()
			}
		}(), e.prototype.resetStyle = function () {
			var a, b, c, d, e;
			for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
			return e
		}, e.prototype.resetAnimation = function (a) {
			var b;
			return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
		}, e.prototype.customStyle = function (a, b, c, d, e) {
			return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
				animationDuration: c
			}), d && this.vendorSet(a.style, {
				animationDelay: d
			}), e && this.vendorSet(a.style, {
				animationIterationCount: e
			}), this.vendorSet(a.style, {
				animationName: b ? "none" : this.cachedAnimationName(a)
			}), a
		}, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
			var c, d, e, f;
			d = [];
			for (c in b) e = b[c], a["" + c] = e, d.push(function () {
				var b, d, g, h;
				for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
				return h
			}.call(this));
			return d
		}, e.prototype.vendorCSS = function (a, b) {
			var c, e, f, g, h, i;
			for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
			return g
		}, e.prototype.animationName = function (a) {
			var b;
			try {
				b = this.vendorCSS(a, "animation-name").cssText
			} catch (c) {
				b = d(a).getPropertyValue("animation-name")
			}
			return "none" === b ? "" : b
		}, e.prototype.cacheAnimationName = function (a) {
			return this.animationNameCache.set(a, this.animationName(a))
		}, e.prototype.cachedAnimationName = function (a) {
			return this.animationNameCache.get(a)
		}, e.prototype.scrollHandler = function () {
			return this.scrolled = !0
		}, e.prototype.scrollCallback = function () {
			var a;
			return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
				var b, c, d, e;
				for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
				return e
			}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
		}, e.prototype.offsetTop = function (a) {
			for (var b; void 0 === a.offsetTop;) a = a.parentNode;
			for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
			return b
		}, e.prototype.isVisible = function (a) {
			var b, c, d, e, f;
			return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
		}, e.prototype.util = function () {
			return null != this._util ? this._util : this._util = new b
		}, e.prototype.disabled = function () {
			return !this.config.mobile && this.util().isMobile(navigator.userAgent)
		}, e
	}()
}).call(this);

// Анимации
new WOW().init({
	mobile: false
});


// Сброс анимаций
let wasMobile = window.innerWidth <= 767;

window.addEventListener('resize', () => {
	const isNowDesktop = window.innerWidth >= 768;

	if (wasMobile && isNowDesktop) {
		document.documentElement.classList.add('no-timeline');
	}

	wasMobile = window.innerWidth <= 767;
});
