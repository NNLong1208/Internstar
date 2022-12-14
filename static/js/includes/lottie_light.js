var t, e;
"undefined" != typeof navigator && (t = window || {}, e = function(u) {
	"use strict";
	var h, e = "http://www.w3.org/2000/svg",
		k = "",
		s = -999999,
		i = !0,
		_ = (/^((?!chrome|android).)*safari/i.test(navigator.userAgent), Math.round, Math.pow),
		A = Math.sqrt,
		c = (Math.abs, Math.floor),
		m = (Math.max, Math.min),
		a = {};
	! function() {
		var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
			s = e.length;
		for (t = 0; t < s; t += 1) a[e[t]] = Math[e[t]]
	}(), a.random = Math.random, a.abs = function(t) {
		if ("object" === typeof t && t.length) {
			var e, s = E(t.length),
				i = t.length;
			for (e = 0; e < i; e += 1) s[e] = Math.abs(t[e]);
			return s
		}
		return Math.abs(t)
	};
	var M = 150,
		q = Math.PI / 180,
		v = .5519;

	function r(t) {
		t ? Math.round : function(t) {
			return t
		}
	}

	function n(t, e, s, i) {
		this.type = t, this.currentTime = e, this.totalTime = s, this.direction = i < 0 ? -1 : 1
	}

	function o(t, e) {
		this.type = t, this.direction = e < 0 ? -1 : 1
	}

	function l(t, e, s, i) {
		this.type = t, this.currentLoop = s, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
	}

	function p(t, e, s) {
		this.type = t, this.firstFrame = e, this.totalFrames = s
	}

	function f(t, e) {
		this.type = t, this.target = e
	}

	function d(t, e) {
		this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
	}

	function g(t) {
		this.type = "configError", this.nativeError = t
	}
	r(!1);
	var t, P = (t = 0, function() {
		return "__lottie_element_" + ++t
	});

	function y(t, e, s) {
		var i, a, r, n, h, o, l, p;
		switch (o = s * (1 - e), l = s * (1 - (h = 6 * t - (n = Math.floor(6 * t))) * e), p = s * (1 - (1 - h) * e), n % 6) {
			case 0:
				i = s, a = p, r = o;
				break;
			case 1:
				i = l, a = s, r = o;
				break;
			case 2:
				i = o, a = s, r = p;
				break;
			case 3:
				i = o, a = l, r = s;
				break;
			case 4:
				i = p, a = o, r = s;
				break;
			case 5:
				i = s, a = o, r = l
		}
		return [i, a, r]
	}

	function b(t, e, s) {
		var i, a = Math.max(t, e, s),
			r = Math.min(t, e, s),
			n = a - r,
			h = 0 === a ? 0 : n / a,
			o = a / 255;
		switch (a) {
			case r:
				i = 0;
				break;
			case t:
				i = e - s + n * (e < s ? 6 : 0), i /= 6 * n;
				break;
			case e:
				i = s - t + 2 * n, i /= 6 * n;
				break;
			case s:
				i = t - e + 4 * n, i /= 6 * n
		}
		return [i, h, o]
	}

	function lt(t, e) {
		var s = b(255 * t[0], 255 * t[1], 255 * t[2]);
		return s[1] += e, 1 < s[1] ? s[1] = 1 : s[1] <= 0 && (s[1] = 0), y(s[0], s[1], s[2])
	}

	function pt(t, e) {
		var s = b(255 * t[0], 255 * t[1], 255 * t[2]);
		return s[2] += e, 1 < s[2] ? s[2] = 1 : s[2] < 0 && (s[2] = 0), y(s[0], s[1], s[2])
	}

	function ft(t, e) {
		var s = b(255 * t[0], 255 * t[1], 255 * t[2]);
		return s[0] += e / 360, 1 < s[0] ? s[0] -= 1 : s[0] < 0 && (s[0] += 1), y(s[0], s[1], s[2])
	}
	var C = function() {
		var t, e, i = [];
		for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 == e.length ? "0" + e : e;
		return function(t, e, s) {
			return t < 0 && (t = 0), e < 0 && (e = 0), s < 0 && (s = 0), "#" + i[t] + i[e] + i[s]
		}
	}();

	function x() {}
	x.prototype = {
		triggerEvent: function(t, e) {
			if (this._cbs[t])
				for (var s = this._cbs[t].length, i = 0; i < s; i++) this._cbs[t][i](e)
		},
		addEventListener: function(t, e) {
			return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
				function() {
					this.removeEventListener(t, e)
				}.bind(this)
		},
		removeEventListener: function(t, e) {
			if (e) {
				if (this._cbs[t]) {
					for (var s = 0, i = this._cbs[t].length; s < i;) this._cbs[t][s] === e && (this._cbs[t].splice(s, 1), s -= 1, i -= 1), s += 1;
					this._cbs[t].length || (this._cbs[t] = null)
				}
			} else this._cbs[t] = null
		}
	};
	var j = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) {
		return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
	} : function(t, e) {
		var s, i = 0,
			a = [];
		switch (t) {
			case "int16":
			case "uint8c":
				s = 1;
				break;
			default:
				s = 1.1
		}
		for (i = 0; i < e; i += 1) a.push(s);
		return a
	};

	function E(t) {
		return Array.apply(null, {
			length: t
		})
	}

	function F(t) {
		return document.createElementNS(e, t)
	}

	function D(t) {
		return document.createElement(t)
	}

	function S() {}
	S.prototype = {
		addDynamicProperty: function(t) {
			-1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
		},
		iterateDynamicProperties: function() {
			this._mdf = !1;
			var t, e = this.dynamicProperties.length;
			for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
		},
		initDynamicPropertyContainer: function(t) {
			this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
		}
	};
	var w, T = (w = {
			0: "source-over",
			1: "multiply",
			2: "screen",
			3: "overlay",
			4: "darken",
			5: "lighten",
			6: "color-dodge",
			7: "color-burn",
			8: "hard-light",
			9: "soft-light",
			10: "difference",
			11: "exclusion",
			12: "hue",
			13: "saturation",
			14: "color",
			15: "luminosity"
		}, function(t) {
			return w[t] || ""
		}),
		I = function() {
			var a = Math.cos,
				r = Math.sin,
				n = Math.tan,
				i = Math.round;

			function t() {
				return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
			}

			function e(t) {
				if (0 === t) return this;
				var e = a(t),
					s = r(t);
				return this._t(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
			}

			function s(t) {
				if (0 === t) return this;
				var e = a(t),
					s = r(t);
				return this._t(1, 0, 0, 0, 0, e, -s, 0, 0, s, e, 0, 0, 0, 0, 1)
			}

			function h(t) {
				if (0 === t) return this;
				var e = a(t),
					s = r(t);
				return this._t(e, 0, s, 0, 0, 1, 0, 0, -s, 0, e, 0, 0, 0, 0, 1)
			}

			function o(t) {
				if (0 === t) return this;
				var e = a(t),
					s = r(t);
				return this._t(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
			}

			function l(t, e) {
				return this._t(1, e, t, 1, 0, 0)
			}

			function p(t, e) {
				return this.shear(n(t), n(e))
			}

			function f(t, e) {
				var s = a(e),
					i = r(e);
				return this._t(s, i, 0, 0, -i, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(s, -i, 0, 0, i, s, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
			}

			function m(t, e, s) {
				return s || 0 === s || (s = 1), 1 === t && 1 === e && 1 === s ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1)
			}

			function d(t, e, s, i, a, r, n, h, o, l, p, f, m, d, c, u) {
				return this.props[0] = t, this.props[1] = e, this.props[2] = s, this.props[3] = i, this.props[4] = a, this.props[5] = r, this.props[6] = n, this.props[7] = h, this.props[8] = o, this.props[9] = l, this.props[10] = p, this.props[11] = f, this.props[12] = m, this.props[13] = d, this.props[14] = c, this.props[15] = u, this
			}

			function c(t, e, s) {
				return s = s || 0, 0 !== t || 0 !== e || 0 !== s ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, s, 1) : this
			}

			function u(t, e, s, i, a, r, n, h, o, l, p, f, m, d, c, u) {
				var g = this.props;
				if (1 === t && 0 === e && 0 === s && 0 === i && 0 === a && 1 === r && 0 === n && 0 === h && 0 === o && 0 === l && 1 === p && 0 === f) return g[12] = g[12] * t + g[15] * m, g[13] = g[13] * r + g[15] * d, g[14] = g[14] * p + g[15] * c, g[15] = g[15] * u, this._identityCalculated = !1, this;
				var y = g[0],
					v = g[1],
					b = g[2],
					_ = g[3],
					A = g[4],
					k = g[5],
					M = g[6],
					P = g[7],
					C = g[8],
					x = g[9],
					E = g[10],
					F = g[11],
					D = g[12],
					S = g[13],
					w = g[14],
					T = g[15];
				return g[0] = y * t + v * a + b * o + _ * m, g[1] = y * e + v * r + b * l + _ * d, g[2] = y * s + v * n + b * p + _ * c, g[3] = y * i + v * h + b * f + _ * u, g[4] = A * t + k * a + M * o + P * m, g[5] = A * e + k * r + M * l + P * d, g[6] = A * s + k * n + M * p + P * c, g[7] = A * i + k * h + M * f + P * u, g[8] = C * t + x * a + E * o + F * m, g[9] = C * e + x * r + E * l + F * d, g[10] = C * s + x * n + E * p + F * c, g[11] = C * i + x * h + E * f + F * u, g[12] = D * t + S * a + w * o + T * m, g[13] = D * e + S * r + w * l + T * d, g[14] = D * s + S * n + w * p + T * c, g[15] = D * i + S * h + w * f + T * u, this._identityCalculated = !1, this
			}

			function g() {
				return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
			}

			function y(t) {
				for (var e = 0; e < 16;) {
					if (t.props[e] !== this.props[e]) return !1;
					e += 1
				}
				return !0
			}

			function v(t) {
				var e;
				for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
			}

			function b(t) {
				var e;
				for (e = 0; e < 16; e += 1) this.props[e] = t[e]
			}

			function _(t, e, s) {
				return {
					x: t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12],
					y: t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13],
					z: t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
				}
			}

			function A(t, e, s) {
				return t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12]
			}

			function k(t, e, s) {
				return t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13]
			}

			function M(t, e, s) {
				return t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]
			}

			function P(t) {
				var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
					s = this.props[5] / e,
					i = -this.props[1] / e,
					a = -this.props[4] / e,
					r = this.props[0] / e,
					n = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
					h = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
				return [t[0] * s + t[1] * a + n, t[0] * i + t[1] * r + h, 0]
			}

			function C(t) {
				var e, s = t.length,
					i = [];
				for (e = 0; e < s; e += 1) i[e] = P(t[e]);
				return i
			}

			function x(t, e, s) {
				var i = j("float32", 6);
				if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = s[0], i[5] = s[1];
				else {
					var a = this.props[0],
						r = this.props[1],
						n = this.props[4],
						h = this.props[5],
						o = this.props[12],
						l = this.props[13];
					i[0] = t[0] * a + t[1] * n + o, i[1] = t[0] * r + t[1] * h + l, i[2] = e[0] * a + e[1] * n + o, i[3] = e[0] * r + e[1] * h + l, i[4] = s[0] * a + s[1] * n + o, i[5] = s[0] * r + s[1] * h + l
				}
				return i
			}

			function E(t, e, s) {
				return this.isIdentity() ? [t, e, s] : [t * this.props[0] + e * this.props[4] + s * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + s * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + s * this.props[10] + this.props[14]]
			}

			function F(t, e) {
				if (this.isIdentity()) return t + "," + e;
				var s = this.props;
				return Math.round(100 * (t * s[0] + e * s[4] + s[12])) / 100 + "," + Math.round(100 * (t * s[1] + e * s[5] + s[13])) / 100
			}

			function D() {
				for (var t = 0, e = this.props, s = "matrix3d("; t < 16;) s += i(1e4 * e[t]) / 1e4, s += 15 === t ? ")" : ",", t += 1;
				return s
			}

			function S(t) {
				return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? i(1e4 * t) / 1e4 : t
			}

			function w() {
				var t = this.props;
				return "matrix(" + S(t[0]) + "," + S(t[1]) + "," + S(t[4]) + "," + S(t[5]) + "," + S(t[12]) + "," + S(t[13]) + ")"
			}
			return function() {
				this.reset = t, this.rotate = e, this.rotateX = s, this.rotateY = h, this.rotateZ = o, this.skew = p, this.skewFromAxis = f, this.shear = l, this.scale = m, this.setTransform = d, this.translate = c, this.transform = u, this.applyToPoint = _, this.applyToX = A, this.applyToY = k, this.applyToZ = M, this.applyToPointArray = E, this.applyToTriplePoints = x, this.applyToPointStringified = F, this.toCSS = D, this.to2dCSS = w, this.clone = v, this.cloneFromProps = b, this.equals = y, this.inversePoints = C, this.inversePoint = P, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = j("float32", 16), this.reset()
			}
		}();
	! function(h, o) {
		var l, p = this,
			f = 256,
			m = 6,
			d = "random",
			c = o.pow(f, m),
			u = o.pow(2, 52),
			g = 2 * u,
			y = f - 1;

		function v(t) {
			var e, s = t.length,
				n = this,
				i = 0,
				a = n.i = n.j = 0,
				r = n.S = [];
			for (s || (t = [s++]); i < f;) r[i] = i++;
			for (i = 0; i < f; i++) r[i] = r[a = y & a + t[i % s] + (e = r[i])], r[a] = e;
			n.g = function(t) {
				for (var e, s = 0, i = n.i, a = n.j, r = n.S; t--;) e = r[i = y & i + 1], s = s * f + r[y & (r[i] = r[a = y & a + e]) + (r[a] = e)];
				return n.i = i, n.j = a, s
			}
		}

		function b(t, e) {
			return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
		}

		function _(t, e) {
			for (var s, i = t + "", a = 0; a < i.length;) e[y & a] = y & (s ^= 19 * e[y & a]) + i.charCodeAt(a++);
			return A(e)
		}

		function A(t) {
			return String.fromCharCode.apply(0, t)
		}
		o["seed" + d] = function(t, e, s) {
			var i = [],
				a = _(function t(e, s) {
					var i, a = [],
						r = typeof e;
					if (s && "object" == r)
						for (i in e) try {
							a.push(t(e[i], s - 1))
						} catch (t) {}
					return a.length ? a : "string" == r ? e : e + "\0"
				}((e = !0 === e ? {
					entropy: !0
				} : e || {}).entropy ? [t, A(h)] : null === t ? function() {
					try {
						if (l) return A(l.randomBytes(f));
						var t = new Uint8Array(f);
						return (p.crypto || p.msCrypto).getRandomValues(t), A(t)
					} catch (t) {
						var e = p.navigator,
							s = e && e.plugins;
						return [+new Date, p, s, p.screen, A(h)]
					}
				}() : t, 3), i),
				r = new v(i),
				n = function() {
					for (var t = r.g(m), e = c, s = 0; t < u;) t = (t + s) * f, e *= f, s = r.g(1);
					for (; g <= t;) t /= 2, e /= 2, s >>>= 1;
					return (t + s) / e
				};
			return n.int32 = function() {
				return 0 | r.g(4)
			}, n.quick = function() {
				return r.g(4) / 4294967296
			}, n.double = n, _(A(r.S), h), (e.pass || s || function(t, e, s, i) {
				return i && (i.S && b(i, r), t.state = function() {
					return b(r, {})
				}), s ? (o[d] = t, e) : t
			})(n, a, "global" in e ? e.global : this == o, e.state)
		}, _(o.random(), h)
	}([], a);
	var G = function() {
		var t = {
				getBezierEasing: function(t, e, s, i, a) {
					var r = a || ("bez_" + t + "_" + e + "_" + s + "_" + i).replace(/\./g, "p");
					if (h[r]) return h[r];
					var n = new o([t, e, s, i]);
					return h[r] = n
				}
			},
			h = {};
		var l = 11,
			p = 1 / (l - 1),
			e = "function" == typeof Float32Array;

		function i(t, e) {
			return 1 - 3 * e + 3 * t
		}

		function a(t, e) {
			return 3 * e - 6 * t
		}

		function r(t) {
			return 3 * t
		}

		function f(t, e, s) {
			return ((i(e, s) * t + a(e, s)) * t + r(e)) * t
		}

		function m(t, e, s) {
			return 3 * i(e, s) * t * t + 2 * a(e, s) * t + r(e)
		}

		function o(t) {
			this._p = t, this._mSampleValues = e ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this)
		}
		return o.prototype = {
			get: function(t) {
				var e = this._p[0],
					s = this._p[1],
					i = this._p[2],
					a = this._p[3];
				return this._precomputed || this._precompute(), e === s && i === a ? t : 0 === t ? 0 : 1 === t ? 1 : f(this._getTForX(t), s, a)
			},
			_precompute: function() {
				var t = this._p[0],
					e = this._p[1],
					s = this._p[2],
					i = this._p[3];
				this._precomputed = !0, t === e && s === i || this._calcSampleValues()
			},
			_calcSampleValues: function() {
				for (var t = this._p[0], e = this._p[2], s = 0; s < l; ++s) this._mSampleValues[s] = f(s * p, t, e)
			},
			_getTForX: function(t) {
				for (var e = this._p[0], s = this._p[2], i = this._mSampleValues, a = 0, r = 1, n = l - 1; r !== n && i[r] <= t; ++r) a += p;
				var h = a + (t - i[--r]) / (i[r + 1] - i[r]) * p,
					o = m(h, e, s);
				return .001 <= o ? function(t, e, s, i) {
					for (var a = 0; a < 4; ++a) {
						var r = m(e, s, i);
						if (0 === r) return e;
						e -= (f(e, s, i) - t) / r
					}
					return e
				}(t, h, e, s) : 0 === o ? h : function(t, e, s, i, a) {
					for (var r, n, h = 0; 0 < (r = f(n = e + (s - e) / 2, i, a) - t) ? s = n : e = n, 1e-7 < Math.abs(r) && ++h < 10;);
					return n
				}(t, a, a + p, e, s)
			}
		}, t
	}();

	function L(t, e) {
		var s, i, a = t.length;
		for (s = 0; s < a; s += 1)
			for (var r in i = t[s].prototype) i.hasOwnProperty(r) && (e.prototype[r] = i[r])
	}! function() {
		for (var r = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !u.requestAnimationFrame; ++e) u.requestAnimationFrame = u[t[e] + "RequestAnimationFrame"], u.cancelAnimationFrame = u[t[e] + "CancelAnimationFrame"] || u[t[e] + "CancelRequestAnimationFrame"];
		u.requestAnimationFrame || (u.requestAnimationFrame = function(t, e) {
			var s = (new Date).getTime(),
				i = Math.max(0, 16 - (s - r)),
				a = setTimeout(function() {
					t(s + i)
				}, i);
			return r = s + i, a
		}), u.cancelAnimationFrame || (u.cancelAnimationFrame = function(t) {
			clearTimeout(t)
		})
	}();
	var mt = function() {
		function g(t, e, s, i, a, r) {
			var n = t * i + e * a + s * r - a * i - r * t - s * e;
			return -.001 < n && n < .001
		}
		Math;
		var p = function(t, e, s, i) {
			var a, r, n, h, o, l, p = M,
				f = 0,
				m = [],
				d = [],
				c = Et.newElement();
			for (n = s.length, a = 0; a < p; a += 1) {
				for (o = a / (p - 1), r = l = 0; r < n; r += 1) h = _(1 - o, 3) * t[r] + 3 * _(1 - o, 2) * o * s[r] + 3 * (1 - o) * _(o, 2) * i[r] + _(o, 3) * e[r], m[r] = h, null !== d[r] && (l += _(m[r] - d[r], 2)), d[r] = m[r];
				l && (f += l = A(l)), c.percents[a] = o, c.lengths[a] = f
			}
			return c.addedLength = f, c
		};

		function y(t) {
			this.segmentLength = 0, this.points = new Array(t)
		}

		function v(t, e) {
			this.partialLength = t, this.point = e
		}
		var b, t = (b = {}, function(t, e, s, i) {
			var a = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + s[0] + "_" + s[1] + "_" + i[0] + "_" + i[1]).replace(/\./g, "p");
			if (!b[a]) {
				var r, n, h, o, l, p, f, m = M,
					d = 0,
					c = null;
				2 === t.length && (t[0] != e[0] || t[1] != e[1]) && g(t[0], t[1], e[0], e[1], t[0] + s[0], t[1] + s[1]) && g(t[0], t[1], e[0], e[1], e[0] + i[0], e[1] + i[1]) && (m = 2);
				var u = new y(m);
				for (h = s.length, r = 0; r < m; r += 1) {
					for (f = E(h), l = r / (m - 1), n = p = 0; n < h; n += 1) o = _(1 - l, 3) * t[n] + 3 * _(1 - l, 2) * l * (t[n] + s[n]) + 3 * (1 - l) * _(l, 2) * (e[n] + i[n]) + _(l, 3) * e[n], f[n] = o, null !== c && (p += _(f[n] - c[n], 2));
					d += p = A(p), u.points[r] = new v(p, f), c = f
				}
				u.segmentLength = d, b[a] = u
			}
			return b[a]
		});

		function D(t, e) {
			var s = e.percents,
				i = e.lengths,
				a = s.length,
				r = c((a - 1) * t),
				n = t * e.addedLength,
				h = 0;
			if (r === a - 1 || 0 === r || n === i[r]) return s[r];
			for (var o = i[r] > n ? -1 : 1, l = !0; l;)
				if (i[r] <= n && i[r + 1] > n ? (h = (n - i[r]) / (i[r + 1] - i[r]), l = !1) : r += o, r < 0 || a - 1 <= r) {
					if (r === a - 1) return s[r];
					l = !1
				} return s[r] + (s[r + 1] - s[r]) * h
		}
		var S = j("float32", 8);
		return {
			getSegmentsLength: function(t) {
				var e, s = xt.newElement(),
					i = t.c,
					a = t.v,
					r = t.o,
					n = t.i,
					h = t._length,
					o = s.lengths,
					l = 0;
				for (e = 0; e < h - 1; e += 1) o[e] = p(a[e], a[e + 1], r[e], n[e + 1]), l += o[e].addedLength;
				return i && h && (o[e] = p(a[e], a[0], r[e], n[0]), l += o[e].addedLength), s.totalLength = l, s
			},
			getNewSegment: function(t, e, s, i, a, r, n) {
				var h, o = D(a = a < 0 ? 0 : 1 < a ? 1 : a, n),
					l = D(r = 1 < r ? 1 : r, n),
					p = t.length,
					f = 1 - o,
					m = 1 - l,
					d = f * f * f,
					c = o * f * f * 3,
					u = o * o * f * 3,
					g = o * o * o,
					y = f * f * m,
					v = o * f * m + f * o * m + f * f * l,
					b = o * o * m + f * o * l + o * f * l,
					_ = o * o * l,
					A = f * m * m,
					k = o * m * m + f * l * m + f * m * l,
					M = o * l * m + f * l * l + o * m * l,
					P = o * l * l,
					C = m * m * m,
					x = l * m * m + m * l * m + m * m * l,
					E = l * l * m + m * l * l + l * m * l,
					F = l * l * l;
				for (h = 0; h < p; h += 1) S[4 * h] = Math.round(1e3 * (d * t[h] + c * s[h] + u * i[h] + g * e[h])) / 1e3, S[4 * h + 1] = Math.round(1e3 * (y * t[h] + v * s[h] + b * i[h] + _ * e[h])) / 1e3, S[4 * h + 2] = Math.round(1e3 * (A * t[h] + k * s[h] + M * i[h] + P * e[h])) / 1e3, S[4 * h + 3] = Math.round(1e3 * (C * t[h] + x * s[h] + E * i[h] + F * e[h])) / 1e3;
				return S
			},
			getPointInSegment: function(t, e, s, i, a, r) {
				var n = D(a, r),
					h = 1 - n;
				return [Math.round(1e3 * (h * h * h * t[0] + (n * h * h + h * n * h + h * h * n) * s[0] + (n * n * h + h * n * n + n * h * n) * i[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (h * h * h * t[1] + (n * h * h + h * n * h + h * h * n) * s[1] + (n * n * h + h * n * n + n * h * n) * i[1] + n * n * n * e[1])) / 1e3]
			},
			buildBezierData: t,
			pointOnLine2D: g,
			pointOnLine3D: function(t, e, s, i, a, r, n, h, o) {
				if (0 === s && 0 === r && 0 === o) return g(t, e, i, a, n, h);
				var l, p = Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - e, 2) + Math.pow(r - s, 2)),
					f = Math.sqrt(Math.pow(n - t, 2) + Math.pow(h - e, 2) + Math.pow(o - s, 2)),
					m = Math.sqrt(Math.pow(n - i, 2) + Math.pow(h - a, 2) + Math.pow(o - r, 2));
				return -1e-4 < (l = f < p ? m < p ? p - f - m : m - f - p : f < m ? m - f - p : f - p - m) && l < 1e-4
			}
		}
	}();
	var R = function() {
			function d(t, e) {
				for (var s = 0, i = e.length; s < i;) {
					if (e[s].id === t) return e[s].layers.__used ? JSON.parse(JSON.stringify(e[s].layers)) : (e[s].layers.__used = !0, e[s].layers);
					s += 1
				}
			}

			function c(t) {
				var e, s, i;
				for (e = t.length - 1; 0 <= e; e -= 1)
					if ("sh" == t[e].ty)
						if (t[e].ks.k.i) u(t[e].ks.k);
						else
							for (i = t[e].ks.k.length, s = 0; s < i; s += 1) t[e].ks.k[s].s && u(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && u(t[e].ks.k[s].e[0]);
				else "gr" == t[e].ty && c(t[e].it)
			}

			function u(t) {
				var e, s = t.i.length;
				for (e = 0; e < s; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
			}

			function h(t, e) {
				var s = e ? e.split(".") : [100, 100, 100];
				return t[0] > s[0] || !(s[0] > t[0]) && (t[1] > s[1] || !(s[1] > t[1]) && (t[2] > s[2] || !(s[2] > t[2]) && void 0))
			}
			var o, s = function() {
					var i = [4, 4, 14];

					function a(t) {
						var e, s, i, a = t.length;
						for (e = 0; e < a; e += 1) 5 === t[e].ty && (s = t[e], i = s.t.d, s.t.d = {
							k: [{
								s: i,
								t: 0
							}]
						})
					}
					return function(t) {
						if (h(i, t.v) && (a(t.layers), t.assets)) {
							var e, s = t.assets.length;
							for (e = 0; e < s; e += 1) t.assets[e].layers && a(t.assets[e].layers)
						}
					}
				}(),
				i = (o = [4, 7, 99], function(t) {
					if (t.chars && !h(o, t.v)) {
						var e, s, i, a, r, n = t.chars.length;
						for (e = 0; e < n; e += 1)
							if (t.chars[e].data && t.chars[e].data.shapes)
								for (i = (r = t.chars[e].data.shapes[0].it).length, s = 0; s < i; s += 1)(a = r[s].ks.k).__converted || (u(r[s].ks.k), a.__converted = !0)
					}
				}),
				a = function() {
					var i = [4, 1, 9];

					function r(t) {
						var e, s, i, a = t.length;
						for (e = 0; e < a; e += 1)
							if ("gr" === t[e].ty) r(t[e].it);
							else if ("fl" === t[e].ty || "st" === t[e].ty)
							if (t[e].c.k && t[e].c.k[0].i)
								for (i = t[e].c.k.length, s = 0; s < i; s += 1) t[e].c.k[s].s && (t[e].c.k[s].s[0] /= 255, t[e].c.k[s].s[1] /= 255, t[e].c.k[s].s[2] /= 255, t[e].c.k[s].s[3] /= 255), t[e].c.k[s].e && (t[e].c.k[s].e[0] /= 255, t[e].c.k[s].e[1] /= 255, t[e].c.k[s].e[2] /= 255, t[e].c.k[s].e[3] /= 255);
							else t[e].c.k[0] /= 255, t[e].c.k[1] /= 255, t[e].c.k[2] /= 255, t[e].c.k[3] /= 255
					}

					function a(t) {
						var e, s = t.length;
						for (e = 0; e < s; e += 1) 4 === t[e].ty && r(t[e].shapes)
					}
					return function(t) {
						if (h(i, t.v) && (a(t.layers), t.assets)) {
							var e, s = t.assets.length;
							for (e = 0; e < s; e += 1) t.assets[e].layers && a(t.assets[e].layers)
						}
					}
				}(),
				r = function() {
					var i = [4, 4, 18];

					function l(t) {
						var e, s, i;
						for (e = t.length - 1; 0 <= e; e -= 1)
							if ("sh" == t[e].ty)
								if (t[e].ks.k.i) t[e].ks.k.c = t[e].closed;
								else
									for (i = t[e].ks.k.length, s = 0; s < i; s += 1) t[e].ks.k[s].s && (t[e].ks.k[s].s[0].c = t[e].closed), t[e].ks.k[s].e && (t[e].ks.k[s].e[0].c = t[e].closed);
						else "gr" == t[e].ty && l(t[e].it)
					}

					function a(t) {
						var e, s, i, a, r, n, h = t.length;
						for (s = 0; s < h; s += 1) {
							if ((e = t[s]).hasMask) {
								var o = e.masksProperties;
								for (a = o.length, i = 0; i < a; i += 1)
									if (o[i].pt.k.i) o[i].pt.k.c = o[i].cl;
									else
										for (n = o[i].pt.k.length, r = 0; r < n; r += 1) o[i].pt.k[r].s && (o[i].pt.k[r].s[0].c = o[i].cl), o[i].pt.k[r].e && (o[i].pt.k[r].e[0].c = o[i].cl)
							}
							4 === e.ty && l(e.shapes)
						}
					}
					return function(t) {
						if (h(i, t.v) && (a(t.layers), t.assets)) {
							var e, s = t.assets.length;
							for (e = 0; e < s; e += 1) t.assets[e].layers && a(t.assets[e].layers)
						}
					}
				}(),
				t = {};
			return t.completeData = function(t, e) {
				t.__complete || (a(t), s(t), i(t), r(t), function t(e, s, i) {
					var a, r, n, h, o, l, p, f = e.length;
					for (r = 0; r < f; r += 1)
						if ("ks" in (a = e[r]) && !a.completed) {
							if (a.completed = !0, a.tt && (e[r - 1].td = a.tt), a.hasMask) {
								var m = a.masksProperties;
								for (h = m.length, n = 0; n < h; n += 1)
									if (m[n].pt.k.i) u(m[n].pt.k);
									else
										for (l = m[n].pt.k.length, o = 0; o < l; o += 1) m[n].pt.k[o].s && u(m[n].pt.k[o].s[0]), m[n].pt.k[o].e && u(m[n].pt.k[o].e[0])
							}
							0 === a.ty ? (a.layers = d(a.refId, s), t(a.layers, s, i)) : 4 === a.ty ? c(a.shapes) : 5 == a.ty && (0 !== (p = a).t.a.length || "m" in p.t.p || (p.singleShape = !0))
						}
				}(t.layers, t.assets, e), t.__complete = !0)
			}, t
		}(),
		V = function() {
			var r = {
					w: 0,
					size: 0,
					shapes: []
				},
				t = [];

			function u(t, e) {
				var s = D("span");
				s.style.fontFamily = e;
				var i = D("span");
				i.innerHTML = "giItT1WQy@!-/#", s.style.position = "absolute", s.style.left = "-10000px", s.style.top = "-10000px", s.style.fontSize = "300px", s.style.fontVariant = "normal", s.style.fontStyle = "normal", s.style.fontWeight = "normal", s.style.letterSpacing = "0", s.appendChild(i), document.body.appendChild(s);
				var a = i.offsetWidth;
				return i.style.fontFamily = t + ", " + e, {
					node: i,
					w: a,
					parent: s
				}
			}
			t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
			var e = function() {
				this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
			};
			return e.getCombinedCharacterCodes = function() {
				return t
			}, e.prototype.addChars = function(t) {
				if (t) {
					this.chars || (this.chars = []);
					var e, s, i, a = t.length,
						r = this.chars.length;
					for (e = 0; e < a; e += 1) {
						for (s = 0, i = !1; s < r;) this.chars[s].style === t[e].style && this.chars[s].fFamily === t[e].fFamily && this.chars[s].ch === t[e].ch && (i = !0), s += 1;
						i || (this.chars.push(t[e]), r += 1)
					}
				}
			}, e.prototype.addFonts = function(t, e) {
				if (t) {
					if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
					var s, i, a, r, n = t.list,
						h = n.length,
						o = h;
					for (s = 0; s < h; s += 1) {
						var l, p, f = !0;
						if (n[s].loaded = !1, n[s].monoCase = u(n[s].fFamily, "monospace"), n[s].sansCase = u(n[s].fFamily, "sans-serif"), n[s].fPath) {
							if ("p" === n[s].fOrigin || 3 === n[s].origin) {
								if (0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[s].fFamily + '"], style[f-origin="3"][f-family="' + n[s].fFamily + '"]')).length && (f = !1), f) {
									var m = D("style");
									m.setAttribute("f-forigin", n[s].fOrigin), m.setAttribute("f-origin", n[s].origin), m.setAttribute("f-family", n[s].fFamily), m.type = "text/css", m.innerHTML = "@font-face {font-family: " + n[s].fFamily + "; font-style: normal; src: url(". / n_s_.fPath.html ");}", e.appendChild(m)
								}
							} else if ("g" === n[s].fOrigin || 1 === n[s].origin) {
								for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), p = 0; p < l.length; p++) - 1 !== l[p].href.indexOf(n[s].fPath) && (f = !1);
								if (f) {
									var d = D("link");
									d.setAttribute("f-forigin", n[s].fOrigin), d.setAttribute("f-origin", n[s].origin), d.type = "text/css", d.rel = "stylesheet", d.href = n[s].fPath, document.body.appendChild(d)
								}
							} else if ("t" === n[s].fOrigin || 2 === n[s].origin) {
								for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), p = 0; p < l.length; p++) n[s].fPath === l[p].src && (f = !1);
								if (f) {
									var c = D("link");
									c.setAttribute("f-forigin", n[s].fOrigin), c.setAttribute("f-origin", n[s].origin), c.setAttribute("rel", "stylesheet"), c.setAttribute("href", n[s].fPath), e.appendChild(c)
								}
							}
						} else n[s].loaded = !0, o -= 1;
						n[s].helper = (i = e, a = n[s], r = void 0, (r = F("text")).style.fontSize = "100px", r.setAttribute("font-family", a.fFamily), r.setAttribute("font-style", a.fStyle), r.setAttribute("font-weight", a.fWeight), r.textContent = "1", a.fClass ? (r.style.fontFamily = "inherit", r.setAttribute("class", a.fClass)) : r.style.fontFamily = a.fFamily, i.appendChild(r), D("canvas").getContext("2d").font = a.fWeight + " " + a.fStyle + " 100px " + a.fFamily, r), n[s].cache = {}, this.fonts.push(n[s])
					}
					0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
				} else this.isLoaded = !0
			}, e.prototype.getCharData = function(t, e, s) {
				for (var i = 0, a = this.chars.length; i < a;) {
					if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === s) return this.chars[i];
					i += 1
				}
				return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, e, s), r
			}, e.prototype.getFontByName = function(t) {
				for (var e = 0, s = this.fonts.length; e < s;) {
					if (this.fonts[e].fName === t) return this.fonts[e];
					e += 1
				}
				return this.fonts[0]
			}, e.prototype.measureText = function(t, e, s) {
				var i = this.getFontByName(e),
					a = t.charCodeAt(0);
				if (!i.cache[a + 1]) {
					var r = i.helper;
					if (" " === t) {
						r.textContent = "|" + t + "|";
						var n = r.getComputedTextLength();
						r.textContent = "||";
						var h = r.getComputedTextLength();
						i.cache[a + 1] = (n - h) / 100
					} else r.textContent = t, i.cache[a + 1] = r.getComputedTextLength() / 100
				}
				return i.cache[a + 1] * s
			}, e.prototype.checkLoadedFonts = function() {
				var t, e, s, i = this.fonts.length,
					a = i;
				for (t = 0; t < i; t += 1) this.fonts[t].loaded ? a -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, s = this.fonts[t].monoCase.w, e.offsetWidth !== s ? (a -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, s = this.fonts[t].sansCase.w, e.offsetWidth !== s && (a -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
				0 !== a && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() {
					this.isLoaded = !0
				}.bind(this), 0)
			}, e.prototype.loaded = function() {
				return this.isLoaded
			}, e
		}(),
		z = function() {
			var f = s,
				a = Math.abs;

			function m(t, e) {
				var s, i = this.offsetTime;
				"multidimensional" === this.propType && (s = j("float32", this.pv.length));
				for (var a, r, n, h, o, l, p, f, m = e.lastIndex, d = m, c = this.keyframes.length - 1, u = !0; u;) {
					if (a = this.keyframes[d], r = this.keyframes[d + 1], d === c - 1 && t >= r.t - i) {
						a.h && (a = r), m = 0;
						break
					}
					if (r.t - i > t) {
						m = d;
						break
					}
					d < c - 1 ? d += 1 : (m = 0, u = !1)
				}
				var g, y, v, b, _, A, k, M, P, C, x = r.t - i,
					E = a.t - i;
				if (a.to) {
					a.bezierData || (a.bezierData = mt.buildBezierData(a.s, r.s || a.e, a.to, a.ti));
					var F = a.bezierData;
					if (x <= t || t < E) {
						var D = x <= t ? F.points.length - 1 : 0;
						for (h = F.points[D].point.length, n = 0; n < h; n += 1) s[n] = F.points[D].point[n]
					} else {
						a.__fnct ? f = a.__fnct : (f = G.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = f), o = f((t - E) / (x - E));
						var S, w = F.segmentLength * o,
							T = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
						for (p = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, u = !0, l = F.points.length; u;) {
							if (T += F.points[p].partialLength, 0 === w || 0 === o || p === F.points.length - 1) {
								for (h = F.points[p].point.length, n = 0; n < h; n += 1) s[n] = F.points[p].point[n];
								break
							}
							if (T <= w && w < T + F.points[p + 1].partialLength) {
								for (S = (w - T) / F.points[p + 1].partialLength, h = F.points[p].point.length, n = 0; n < h; n += 1) s[n] = F.points[p].point[n] + (F.points[p + 1].point[n] - F.points[p].point[n]) * S;
								break
							}
							p < l - 1 ? p += 1 : u = !1
						}
						e._lastPoint = p, e._lastAddedLength = T - F.points[p].partialLength, e._lastKeyframeIndex = d
					}
				} else {
					var I, L, R, V, z;
					if (c = a.s.length, g = r.s || a.e, this.sh && 1 !== a.h)
						if (x <= t) s[0] = g[0], s[1] = g[1], s[2] = g[2];
						else if (t <= E) s[0] = a.s[0], s[1] = a.s[1], s[2] = a.s[2];
					else {
						var N = B(a.s),
							O = B(g);
						y = s, v = function(t, e, s) {
							var i, a, r, n, h, o = [],
								l = t[0],
								p = t[1],
								f = t[2],
								m = t[3],
								d = e[0],
								c = e[1],
								u = e[2],
								g = e[3];
							(a = l * d + p * c + f * u + m * g) < 0 && (a = -a, d = -d, c = -c, u = -u, g = -g);
							h = 1e-6 < 1 - a ? (i = Math.acos(a), r = Math.sin(i), n = Math.sin((1 - s) * i) / r, Math.sin(s * i) / r) : (n = 1 - s, s);
							return o[0] = n * l + h * d, o[1] = n * p + h * c, o[2] = n * f + h * u, o[3] = n * m + h * g, o
						}(N, O, (t - E) / (x - E)), b = v[0], _ = v[1], A = v[2], k = v[3], M = Math.atan2(2 * _ * k - 2 * b * A, 1 - 2 * _ * _ - 2 * A * A), P = Math.asin(2 * b * _ + 2 * A * k), C = Math.atan2(2 * b * k - 2 * _ * A, 1 - 2 * b * b - 2 * A * A), y[0] = M / q, y[1] = P / q, y[2] = C / q
					} else
						for (d = 0; d < c; d += 1) 1 !== a.h && (o = x <= t ? 1 : t < E ? 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[d] ? f = a.__fnct[d] : (I = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d], L = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d], R = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d], V = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d], f = G.getBezierEasing(I, L, R, V).get, a.__fnct[d] = f)) : a.__fnct ? f = a.__fnct : (I = a.o.x, L = a.o.y, R = a.i.x, V = a.i.y, f = G.getBezierEasing(I, L, R, V).get, a.__fnct = f), f((t - E) / (x - E)))), g = r.s || a.e, z = 1 === a.h ? a.s[d] : a.s[d] + (g[d] - a.s[d]) * o, "multidimensional" === this.propType ? s[d] = z : s = z
				}
				return e.lastIndex = m, s
			}

			function B(t) {
				var e = t[0] * q,
					s = t[1] * q,
					i = t[2] * q,
					a = Math.cos(e / 2),
					r = Math.cos(s / 2),
					n = Math.cos(i / 2),
					h = Math.sin(e / 2),
					o = Math.sin(s / 2),
					l = Math.sin(i / 2);
				return [h * o * n + a * r * l, h * r * n + a * o * l, a * o * n - h * r * l, a * r * n - h * o * l]
			}

			function d() {
				var t = this.comp.renderedFrame - this.offsetTime,
					e = this.keyframes[0].t - this.offsetTime,
					s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
				if (!(t === this._caching.lastFrame || this._caching.lastFrame !== f && (this._caching.lastFrame >= s && s <= t || this._caching.lastFrame < e && t < e))) {
					this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
					var i = this.interpolateValue(t, this._caching);
					this.pv = i
				}
				return this._caching.lastFrame = t, this.pv
			}

			function c(t) {
				var e;
				if ("unidimensional" === this.propType) e = t * this.mult, 1e-5 < a(this.v - e) && (this.v = e, this._mdf = !0);
				else
					for (var s = 0, i = this.v.length; s < i;) e = t[s] * this.mult, 1e-5 < a(this.v[s] - e) && (this.v[s] = e, this._mdf = !0), s += 1
			}

			function u() {
				if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
					if (this.lock) this.setVValue(this.pv);
					else {
						this.lock = !0, this._mdf = this._isFirstFrame;
						var t, e = this.effectsSequence.length,
							s = this.kf ? this.pv : this.data.k;
						for (t = 0; t < e; t += 1) s = this.effectsSequence[t](s);
						this.setVValue(s), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
					}
			}

			function g(t) {
				this.effectsSequence.push(t), this.container.addDynamicProperty(this)
			}

			function n(t, e, s, i) {
				this.propType = "unidimensional", this.mult = s || 1, this.data = e, this.v = s ? e.k * s : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = u, this.setVValue = c, this.addEffect = g
			}

			function h(t, e, s, i) {
				this.propType = "multidimensional", this.mult = s || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
				var a, r = e.k.length;
				this.v = j("float32", r), this.pv = j("float32", r);
				j("float32", r);
				for (this.vel = j("float32", r), a = 0; a < r; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
				this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = u, this.setVValue = c, this.addEffect = g
			}

			function o(t, e, s, i) {
				this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
					lastFrame: f,
					lastIndex: 0,
					value: 0,
					_lastKeyframeIndex: -1
				}, this.k = !0, this.kf = !0, this.data = e, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = f, this.pv = f, this._isFirstFrame = !0, this.getValue = u, this.setVValue = c, this.interpolateValue = m, this.effectsSequence = [d.bind(this)], this.addEffect = g
			}

			function l(t, e, s, i) {
				this.propType = "multidimensional";
				var a, r, n, h, o, l = e.k.length;
				for (a = 0; a < l - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a].e && (r = e.k[a].s, n = e.k[a].e, h = e.k[a].to, o = e.k[a].ti, (2 === r.length && (r[0] !== n[0] || r[1] !== n[1]) && mt.pointOnLine2D(r[0], r[1], n[0], n[1], r[0] + h[0], r[1] + h[1]) && mt.pointOnLine2D(r[0], r[1], n[0], n[1], n[0] + o[0], n[1] + o[1]) || 3 === r.length && (r[0] !== n[0] || r[1] !== n[1] || r[2] !== n[2]) && mt.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], r[0] + h[0], r[1] + h[1], r[2] + h[2]) && mt.pointOnLine3D(r[0], r[1], r[2], n[0], n[1], n[2], n[0] + o[0], n[1] + o[1], n[2] + o[2])) && (e.k[a].to = null, e.k[a].ti = null), r[0] === n[0] && r[1] === n[1] && 0 === h[0] && 0 === h[1] && 0 === o[0] && 0 === o[1] && (2 === r.length || r[2] === n[2] && 0 === h[2] && 0 === o[2]) && (e.k[a].to = null, e.k[a].ti = null));
				this.effectsSequence = [d.bind(this)], this.keyframes = e.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = s || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = u, this.setVValue = c, this.interpolateValue = m, this.frameId = -1;
				var p = e.k[0].s.length;
				for (this.v = j("float32", p), this.pv = j("float32", p), a = 0; a < p; a += 1) this.v[a] = f, this.pv[a] = f;
				this._caching = {
					lastFrame: f,
					lastIndex: 0,
					value: j("float32", p)
				}, this.addEffect = g
			}
			return {
				getProp: function(t, e, s, i, a) {
					var r;
					if (e.k.length)
						if ("number" == typeof e.k[0]) r = new h(t, e, i, a);
						else switch (s) {
							case 0:
								r = new o(t, e, i, a);
								break;
							case 1:
								r = new l(t, e, i, a)
						} else r = new n(t, e, i, a);
					return r.effectsSequence.length && a.addDynamicProperty(r), r
				}
			}
		}(),
		N = function() {
			function i(t, e, s) {
				if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new I, this.pre = new I, this.appliedTransformations = 0, this.initDynamicPropertyContainer(s || t), e.p && e.p.s ? (this.px = z.getProp(t, e.p.x, 0, 0, this), this.py = z.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = z.getProp(t, e.p.z, 0, 0, this))) : this.p = z.getProp(t, e.p || {
						k: [0, 0, 0]
					}, 1, 0, this), e.rx) {
					if (this.rx = z.getProp(t, e.rx, 0, q, this), this.ry = z.getProp(t, e.ry, 0, q, this), this.rz = z.getProp(t, e.rz, 0, q, this), e.or.k[0].ti) {
						var i, a = e.or.k.length;
						for (i = 0; i < a; i += 1) e.or.k[i].to = e.or.k[i].ti = null
					}
					this.or = z.getProp(t, e.or, 1, q, this), this.or.sh = !0
				} else this.r = z.getProp(t, e.r || {
					k: 0
				}, 0, q, this);
				e.sk && (this.sk = z.getProp(t, e.sk, 0, q, this), this.sa = z.getProp(t, e.sa, 0, q, this)), this.a = z.getProp(t, e.a || {
					k: [0, 0, 0]
				}, 1, 0, this), this.s = z.getProp(t, e.s || {
					k: [100, 100, 100]
				}, 1, .01, this), e.o ? this.o = z.getProp(t, e.o, 0, .01, t) : this.o = {
					_mdf: !1,
					v: 1
				}, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
			}
			return i.prototype = {
				applyToMatrix: function(t) {
					var e = this._mdf;
					this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
				},
				getValue: function(t) {
					if (this.elem.globalData.frameId !== this.frameId) {
						if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
							if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
								var e, s, i = this.elem.globalData.frameRate;
								if (this.p && this.p.keyframes && this.p.getValueAtTime) s = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
								else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
									e = [], s = [];
									var a = this.px,
										r = this.py;
									a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (e[0] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), e[1] = r.getValueAtTime((r.keyframes[0].t + .01) / i, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), s[1] = r.getValueAtTime(r.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (e[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), e[1] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / i, 0), s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0), s[1] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - .01) / i, 0)) : (e = [a.pv, r.pv], s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime), s[1] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - .01) / i, r.offsetTime))
								}
								this.v.rotate(-Math.atan2(e[1] - s[1], e[0] - s[0]))
							}
							this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
						}
						this.frameId = this.elem.globalData.frameId
					}
				},
				precalculateMatrix: function() {
					if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
						if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
							if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
							this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
						}
						if (this.r) {
							if (this.r.effectsSequence.length) return;
							this.pre.rotate(-this.r.v), this.appliedTransformations = 4
						} else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
					}
				},
				autoOrient: function() {}
			}, L([S], i), i.prototype.addDynamicProperty = function(t) {
				this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
			}, i.prototype._addDynamicProperty = S.prototype.addDynamicProperty, {
				getTransformProperty: function(t, e, s) {
					return new i(t, e, s)
				}
			}
		}();

	function O() {
		this.c = !1, this._length = 0, this._maxLength = 8, this.v = E(this._maxLength), this.o = E(this._maxLength), this.i = E(this._maxLength)
	}
	O.prototype.setPathData = function(t, e) {
		this.c = t, this.setLength(e);
		for (var s = 0; s < e;) this.v[s] = Mt.newElement(), this.o[s] = Mt.newElement(), this.i[s] = Mt.newElement(), s += 1
	}, O.prototype.setLength = function(t) {
		for (; this._maxLength < t;) this.doubleArrayLength();
		this._length = t
	}, O.prototype.doubleArrayLength = function() {
		this.v = this.v.concat(E(this._maxLength)), this.i = this.i.concat(E(this._maxLength)), this.o = this.o.concat(E(this._maxLength)), this._maxLength *= 2
	}, O.prototype.setXYAt = function(t, e, s, i, a) {
		var r;
		switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), s) {
			case "v":
				r = this.v;
				break;
			case "i":
				r = this.i;
				break;
			case "o":
				r = this.o
		}(!r[i] || r[i] && !a) && (r[i] = Mt.newElement()), r[i][0] = t, r[i][1] = e
	}, O.prototype.setTripleAt = function(t, e, s, i, a, r, n, h) {
		this.setXYAt(t, e, "v", n, h), this.setXYAt(s, i, "o", n, h), this.setXYAt(a, r, "i", n, h)
	}, O.prototype.reverse = function() {
		var t = new O;
		t.setPathData(this.c, this._length);
		var e = this.v,
			s = this.o,
			i = this.i,
			a = 0;
		this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], s[0][0], s[0][1], 0, !1), a = 1);
		var r, n = this._length - 1,
			h = this._length;
		for (r = a; r < h; r += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], s[n][0], s[n][1], r, !1), n -= 1;
		return t
	};
	var B, W, X = function() {
			var a = -999999;

			function t(t, e, s) {
				var i, a, r, n, h, o, l, p, f, m = s.lastIndex,
					d = this.keyframes;
				if (t < d[0].t - this.offsetTime) i = d[0].s[0], r = !0, m = 0;
				else if (t >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], r = !0;
				else {
					for (var c, u, g = m, y = d.length - 1, v = !0; v && (c = d[g], !((u = d[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : v = !1;
					if (m = g, !(r = 1 === c.h)) {
						if (t >= u.t - this.offsetTime) p = 1;
						else if (t < c.t - this.offsetTime) p = 0;
						else {
							var b;
							c.__fnct ? b = c.__fnct : (b = G.getBezierEasing(c.o.x, c.o.y, c.i.x, c.i.y).get, c.__fnct = b), p = b((t - (c.t - this.offsetTime)) / (u.t - this.offsetTime - (c.t - this.offsetTime)))
						}
						a = u.s ? u.s[0] : c.e[0]
					}
					i = c.s[0]
				}
				for (o = e._length, l = i.i[0].length, s.lastIndex = m, n = 0; n < o; n += 1)
					for (h = 0; h < l; h += 1) f = r ? i.i[n][h] : i.i[n][h] + (a.i[n][h] - i.i[n][h]) * p, e.i[n][h] = f, f = r ? i.o[n][h] : i.o[n][h] + (a.o[n][h] - i.o[n][h]) * p, e.o[n][h] = f, f = r ? i.v[n][h] : i.v[n][h] + (a.v[n][h] - i.v[n][h]) * p, e.v[n][h] = f
			}

			function r() {
				this.paths = this.localShapeCollection
			}

			function e(t) {
				(function(t, e) {
					if (t._length !== e._length || t.c !== e.c) return !1;
					var s, i = t._length;
					for (s = 0; s < i; s += 1)
						if (t.v[s][0] !== e.v[s][0] || t.v[s][1] !== e.v[s][1] || t.o[s][0] !== e.o[s][0] || t.o[s][1] !== e.o[s][1] || t.i[s][0] !== e.i[s][0] || t.i[s][1] !== e.i[s][1]) return !1;
					return !0
				})(this.v, t) || (this.v = Pt.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
			}

			function s() {
				if (this.elem.globalData.frameId !== this.frameId)
					if (this.effectsSequence.length)
						if (this.lock) this.setVValue(this.pv);
						else {
							this.lock = !0, this._mdf = !1;
							var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
								s = this.effectsSequence.length;
							for (t = 0; t < s; t += 1) e = this.effectsSequence[t](e);
							this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
						}
				else this._mdf = !1
			}

			function n(t, e, s) {
				this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
				var i = 3 === s ? e.pt.k : e.ks.k;
				this.v = Pt.clone(i), this.pv = Pt.clone(this.v), this.localShapeCollection = Ct.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
			}

			function i(t) {
				this.effectsSequence.push(t), this.container.addDynamicProperty(this)
			}

			function h(t, e, s) {
				this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === s ? e.pt.k : e.ks.k, this.k = !0, this.kf = !0;
				var i = this.keyframes[0].s[0].i.length;
				this.keyframes[0].s[0].i[0].length;
				this.v = Pt.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, i), this.pv = Pt.clone(this.v), this.localShapeCollection = Ct.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = a, this.reset = r, this._caching = {
					lastFrame: a,
					lastIndex: 0
				}, this.effectsSequence = [function() {
					var t = this.comp.renderedFrame - this.offsetTime,
						e = this.keyframes[0].t - this.offsetTime,
						s = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
						i = this._caching.lastFrame;
					return i !== a && (i < e && t < e || s < i && s < t) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
				}.bind(this)]
			}
			n.prototype.interpolateShape = t, n.prototype.getValue = s, n.prototype.setVValue = e, n.prototype.addEffect = i, h.prototype.getValue = s, h.prototype.interpolateShape = t, h.prototype.setVValue = e, h.prototype.addEffect = i;
			var o = function() {
					var n = v;

					function t(t, e) {
						this.v = Pt.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = Ct.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = z.getProp(t, e.p, 1, 0, this), this.s = z.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
					}
					return t.prototype = {
						reset: r,
						getValue: function() {
							this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
						},
						convertEllToPath: function() {
							var t = this.p.v[0],
								e = this.p.v[1],
								s = this.s.v[0] / 2,
								i = this.s.v[1] / 2,
								a = 3 !== this.d,
								r = this.v;
							r.v[0][0] = t, r.v[0][1] = e - i, r.v[1][0] = a ? t + s : t - s, r.v[1][1] = e, r.v[2][0] = t, r.v[2][1] = e + i, r.v[3][0] = a ? t - s : t + s, r.v[3][1] = e, r.i[0][0] = a ? t - s * n : t + s * n, r.i[0][1] = e - i, r.i[1][0] = a ? t + s : t - s, r.i[1][1] = e - i * n, r.i[2][0] = a ? t + s * n : t - s * n, r.i[2][1] = e + i, r.i[3][0] = a ? t - s : t + s, r.i[3][1] = e + i * n, r.o[0][0] = a ? t + s * n : t - s * n, r.o[0][1] = e - i, r.o[1][0] = a ? t + s : t - s, r.o[1][1] = e + i * n, r.o[2][0] = a ? t - s * n : t + s * n, r.o[2][1] = e + i, r.o[3][0] = a ? t - s : t + s, r.o[3][1] = e - i * n
						}
					}, L([S], t), t
				}(),
				l = function() {
					function t(t, e) {
						this.v = Pt.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = z.getProp(t, e.ir, 0, 0, this), this.is = z.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = z.getProp(t, e.pt, 0, 0, this), this.p = z.getProp(t, e.p, 1, 0, this), this.r = z.getProp(t, e.r, 0, q, this), this.or = z.getProp(t, e.or, 0, 0, this), this.os = z.getProp(t, e.os, 0, .01, this), this.localShapeCollection = Ct.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
					}
					return t.prototype = {
						reset: r,
						getValue: function() {
							this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
						},
						convertStarToPath: function() {
							var t, e, s, i, a = 2 * Math.floor(this.pt.v),
								r = 2 * Math.PI / a,
								n = !0,
								h = this.or.v,
								o = this.ir.v,
								l = this.os.v,
								p = this.is.v,
								f = 2 * Math.PI * h / (2 * a),
								m = 2 * Math.PI * o / (2 * a),
								d = -Math.PI / 2;
							d += this.r.v;
							var c = 3 === this.data.d ? -1 : 1;
							for (t = this.v._length = 0; t < a; t += 1) {
								s = n ? l : p, i = n ? f : m;
								var u = (e = n ? h : o) * Math.cos(d),
									g = e * Math.sin(d),
									y = 0 === u && 0 === g ? 0 : g / Math.sqrt(u * u + g * g),
									v = 0 === u && 0 === g ? 0 : -u / Math.sqrt(u * u + g * g);
								u += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(u, g, u - y * i * s * c, g - v * i * s * c, u + y * i * s * c, g + v * i * s * c, t, !0), n = !n, d += r * c
							}
						},
						convertPolygonToPath: function() {
							var t, e = Math.floor(this.pt.v),
								s = 2 * Math.PI / e,
								i = this.or.v,
								a = this.os.v,
								r = 2 * Math.PI * i / (4 * e),
								n = -Math.PI / 2,
								h = 3 === this.data.d ? -1 : 1;
							for (n += this.r.v, t = this.v._length = 0; t < e; t += 1) {
								var o = i * Math.cos(n),
									l = i * Math.sin(n),
									p = 0 === o && 0 === l ? 0 : l / Math.sqrt(o * o + l * l),
									f = 0 === o && 0 === l ? 0 : -o / Math.sqrt(o * o + l * l);
								o += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(o, l, o - p * r * a * h, l - f * r * a * h, o + p * r * a * h, l + f * r * a * h, t, !0), n += s * h
							}
							this.paths.length = 0, this.paths[0] = this.v
						}
					}, L([S], t), t
				}(),
				p = function() {
					function t(t, e) {
						this.v = Pt.newElement(), this.v.c = !0, this.localShapeCollection = Ct.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = z.getProp(t, e.p, 1, 0, this), this.s = z.getProp(t, e.s, 1, 0, this), this.r = z.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
					}
					return t.prototype = {
						convertRectToPath: function() {
							var t = this.p.v[0],
								e = this.p.v[1],
								s = this.s.v[0] / 2,
								i = this.s.v[1] / 2,
								a = m(s, i, this.r.v),
								r = a * (1 - v);
							this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + s, e - i + a, t + s, e - i + a, t + s, e - i + r, 0, !0), this.v.setTripleAt(t + s, e + i - a, t + s, e + i - r, t + s, e + i - a, 1, !0), 0 !== a ? (this.v.setTripleAt(t + s - a, e + i, t + s - a, e + i, t + s - r, e + i, 2, !0), this.v.setTripleAt(t - s + a, e + i, t - s + r, e + i, t - s + a, e + i, 3, !0), this.v.setTripleAt(t - s, e + i - a, t - s, e + i - a, t - s, e + i - r, 4, !0), this.v.setTripleAt(t - s, e - i + a, t - s, e - i + r, t - s, e - i + a, 5, !0), this.v.setTripleAt(t - s + a, e - i, t - s + a, e - i, t - s + r, e - i, 6, !0), this.v.setTripleAt(t + s - a, e - i, t + s - r, e - i, t + s - a, e - i, 7, !0)) : (this.v.setTripleAt(t - s, e + i, t - s + r, e + i, t - s, e + i, 2), this.v.setTripleAt(t - s, e - i, t - s, e - i + r, t - s, e - i, 3))) : (this.v.setTripleAt(t + s, e - i + a, t + s, e - i + r, t + s, e - i + a, 0, !0), 0 !== a ? (this.v.setTripleAt(t + s - a, e - i, t + s - a, e - i, t + s - r, e - i, 1, !0), this.v.setTripleAt(t - s + a, e - i, t - s + r, e - i, t - s + a, e - i, 2, !0), this.v.setTripleAt(t - s, e - i + a, t - s, e - i + a, t - s, e - i + r, 3, !0), this.v.setTripleAt(t - s, e + i - a, t - s, e + i - r, t - s, e + i - a, 4, !0), this.v.setTripleAt(t - s + a, e + i, t - s + a, e + i, t - s + r, e + i, 5, !0), this.v.setTripleAt(t + s - a, e + i, t + s - r, e + i, t + s - a, e + i, 6, !0), this.v.setTripleAt(t + s, e + i - a, t + s, e + i - a, t + s, e + i - r, 7, !0)) : (this.v.setTripleAt(t - s, e - i, t - s + r, e - i, t - s, e - i, 1, !0), this.v.setTripleAt(t - s, e + i, t - s, e + i - r, t - s, e + i, 2, !0), this.v.setTripleAt(t + s, e + i, t + s - r, e + i, t + s, e + i, 3, !0)))
						},
						getValue: function(t) {
							this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
						},
						reset: r
					}, L([S], t), t
				}();
			var f = {
				getShapeProp: function(t, e, s) {
					var i;
					return 3 === s || 4 === s ? i = (3 === s ? e.pt : e.ks).k.length ? new h(t, e, s) : new n(t, e, s) : 5 === s ? i = new p(t, e) : 6 === s ? i = new o(t, e) : 7 === s && (i = new l(t, e)), i.k && t.addDynamicProperty(i), i
				},
				getConstructorFunction: function() {
					return n
				},
				getKeyframedConstructorFunction: function() {
					return h
				}
			};
			return f
		}(),
		Y = (W = {}, (B = {}).registerModifier = function(t, e) {
			W[t] || (W[t] = e)
		}, B.getModifier = function(t, e, s) {
			return new W[t](e, s)
		}, B);

	function H() {}

	function K() {}

	function J() {}

	function U() {}

	function Z() {
		this._length = 0, this._maxLength = 4, this.shapes = E(this._maxLength)
	}

	function Q(t, e, s, i) {
		this.elem = t, this.frameId = -1, this.dataProps = E(e.length), this.renderer = s, this.k = !1, this.dashStr = "", this.dashArray = j("float32", e.length ? e.length - 1 : 0), this.dashoffset = j("float32", 1), this.initDynamicPropertyContainer(i);
		var a, r, n = e.length || 0;
		for (a = 0; a < n; a += 1) r = z.getProp(t, e[a].v, 0, 0, this), this.k = r.k || this.k, this.dataProps[a] = {
			n: e[a].n,
			p: r
		};
		this.k || this.getValue(!0), this._isAnimated = this.k
	}

	function $(t, e, s) {
		this.data = e, this.c = j("uint8c", 4 * e.p);
		var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
		this.o = j("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(s), this.prop = z.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
	}
	H.prototype.initModifierProperties = function() {}, H.prototype.addShapeToModifier = function() {}, H.prototype.addShape = function(t) {
		if (!this.closed) {
			t.sh.container.addDynamicProperty(t.sh);
			var e = {
				shape: t.sh,
				data: t,
				localShapeCollection: Ct.newShapeCollection()
			};
			this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
		}
	}, H.prototype.init = function(t, e) {
		this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = s, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
	}, H.prototype.processKeys = function() {
		this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
	}, L([S], H), L([H], K), K.prototype.initModifierProperties = function(t, e) {
		this.s = z.getProp(t, e.s, 0, .01, this), this.e = z.getProp(t, e.e, 0, .01, this), this.o = z.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
	}, K.prototype.addShapeToModifier = function(t) {
		t.pathsData = []
	}, K.prototype.calculateShapeEdges = function(t, e, s, i, a) {
		var r = [];
		e <= 1 ? r.push({
			s: t,
			e: e
		}) : 1 <= t ? r.push({
			s: t - 1,
			e: e - 1
		}) : (r.push({
			s: t,
			e: 1
		}), r.push({
			s: 0,
			e: e - 1
		}));
		var n, h, o = [],
			l = r.length;
		for (n = 0; n < l; n += 1) {
			var p, f;
			if ((h = r[n]).e * a < i || h.s * a > i + s);
			else p = h.s * a <= i ? 0 : (h.s * a - i) / s, f = h.e * a >= i + s ? 1 : (h.e * a - i) / s, o.push([p, f])
		}
		return o.length || o.push([0, 0]), o
	}, K.prototype.releasePathsData = function(t) {
		var e, s = t.length;
		for (e = 0; e < s; e += 1) xt.release(t[e]);
		return t.length = 0, t
	}, K.prototype.processShapes = function(t) {
		var e, s, i;
		if (this._mdf || t) {
			var a = this.o.v % 360 / 360;
			if (a < 0 && (a += 1), e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + a, (s = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + a) < e) {
				var r = e;
				e = s, s = r
			}
			e = 1e-4 * Math.round(1e4 * e), s = 1e-4 * Math.round(1e4 * s), this.sValue = e, this.eValue = s
		} else e = this.sValue, s = this.eValue;
		var n, h, o, l, p, f, m = this.shapes.length,
			d = 0;
		if (s === e)
			for (n = 0; n < m; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection;
		else if (1 === s && 0 === e || 0 === s && 1 === e) {
			if (this._mdf)
				for (n = 0; n < m; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
		} else {
			var c, u, g = [];
			for (n = 0; n < m; n += 1)
				if ((c = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
					if (o = (i = c.shape.paths)._length, f = 0, !c.shape._mdf && c.pathsData.length) f = c.totalShapeLength;
					else {
						for (l = this.releasePathsData(c.pathsData), h = 0; h < o; h += 1) p = mt.getSegmentsLength(i.shapes[h]), l.push(p), f += p.totalLength;
						c.totalShapeLength = f, c.pathsData = l
					}
					d += f, c.shape._mdf = !0
				} else c.shape.paths = c.localShapeCollection;
			var y, v = e,
				b = s,
				_ = 0;
			for (n = m - 1; 0 <= n; n -= 1)
				if ((c = this.shapes[n]).shape._mdf) {
					for ((u = c.localShapeCollection).releaseShapes(), 2 === this.m && 1 < m ? (y = this.calculateShapeEdges(e, s, c.totalShapeLength, _, d), _ += c.totalShapeLength) : y = [
							[v, b]
						], o = y.length, h = 0; h < o; h += 1) {
						v = y[h][0], b = y[h][1], g.length = 0, b <= 1 ? g.push({
							s: c.totalShapeLength * v,
							e: c.totalShapeLength * b
						}) : 1 <= v ? g.push({
							s: c.totalShapeLength * (v - 1),
							e: c.totalShapeLength * (b - 1)
						}) : (g.push({
							s: c.totalShapeLength * v,
							e: c.totalShapeLength
						}), g.push({
							s: 0,
							e: c.totalShapeLength * (b - 1)
						}));
						var A = this.addShapes(c, g[0]);
						if (g[0].s !== g[0].e) {
							if (1 < g.length)
								if (c.shape.paths.shapes[c.shape.paths._length - 1].c) {
									var k = A.pop();
									this.addPaths(A, u), A = this.addShapes(c, g[1], k)
								} else this.addPaths(A, u), A = this.addShapes(c, g[1]);
							this.addPaths(A, u)
						}
					}
					c.shape.paths = u
				}
		}
	}, K.prototype.addPaths = function(t, e) {
		var s, i = t.length;
		for (s = 0; s < i; s += 1) e.addShape(t[s])
	}, K.prototype.addSegment = function(t, e, s, i, a, r, n) {
		a.setXYAt(e[0], e[1], "o", r), a.setXYAt(s[0], s[1], "i", r + 1), n && a.setXYAt(t[0], t[1], "v", r), a.setXYAt(i[0], i[1], "v", r + 1)
	}, K.prototype.addSegmentFromArray = function(t, e, s, i) {
		e.setXYAt(t[1], t[5], "o", s), e.setXYAt(t[2], t[6], "i", s + 1), i && e.setXYAt(t[0], t[4], "v", s), e.setXYAt(t[3], t[7], "v", s + 1)
	}, K.prototype.addShapes = function(t, e, s) {
		var i, a, r, n, h, o, l, p, f = t.pathsData,
			m = t.shape.paths.shapes,
			d = t.shape.paths._length,
			c = 0,
			u = [],
			g = !0;
		for (p = s ? (h = s._length, s._length) : (s = Pt.newElement(), h = 0), u.push(s), i = 0; i < d; i += 1) {
			for (o = f[i].lengths, s.c = m[i].c, r = m[i].c ? o.length : o.length + 1, a = 1; a < r; a += 1)
				if (c + (n = o[a - 1]).addedLength < e.s) c += n.addedLength, s.c = !1;
				else {
					if (c > e.e) {
						s.c = !1;
						break
					}
					e.s <= c && e.e >= c + n.addedLength ? (this.addSegment(m[i].v[a - 1], m[i].o[a - 1], m[i].i[a], m[i].v[a], s, h, g), g = !1) : (l = mt.getNewSegment(m[i].v[a - 1], m[i].v[a], m[i].o[a - 1], m[i].i[a], (e.s - c) / n.addedLength, (e.e - c) / n.addedLength, o[a - 1]), this.addSegmentFromArray(l, s, h, g), g = !1, s.c = !1), c += n.addedLength, h += 1
				} if (m[i].c && o.length) {
				if (n = o[a - 1], c <= e.e) {
					var y = o[a - 1].addedLength;
					e.s <= c && e.e >= c + y ? (this.addSegment(m[i].v[a - 1], m[i].o[a - 1], m[i].i[0], m[i].v[0], s, h, g), g = !1) : (l = mt.getNewSegment(m[i].v[a - 1], m[i].v[0], m[i].o[a - 1], m[i].i[0], (e.s - c) / y, (e.e - c) / y, o[a - 1]), this.addSegmentFromArray(l, s, h, g), g = !1, s.c = !1)
				} else s.c = !1;
				c += n.addedLength, h += 1
			}
			if (s._length && (s.setXYAt(s.v[p][0], s.v[p][1], "i", p), s.setXYAt(s.v[s._length - 1][0], s.v[s._length - 1][1], "o", s._length - 1)), c > e.e) break;
			i < d - 1 && (s = Pt.newElement(), g = !0, u.push(s), h = 0)
		}
		return u
	}, Y.registerModifier("tm", K), L([H], J), J.prototype.initModifierProperties = function(t, e) {
		this.getValue = this.processKeys, this.rd = z.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
	}, J.prototype.processPath = function(t, e) {
		var s = Pt.newElement();
		s.c = t.c;
		var i, a, r, n, h, o, l, p, f, m, d, c, u, g = t._length,
			y = 0;
		for (i = 0; i < g; i += 1) a = t.v[i], n = t.o[i], r = t.i[i], a[0] === n[0] && a[1] === n[1] && a[0] === r[0] && a[1] === r[1] ? 0 !== i && i !== g - 1 || t.c ? (h = 0 === i ? t.v[g - 1] : t.v[i - 1], l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0, p = c = a[0] + (h[0] - a[0]) * l, f = u = a[1] - (a[1] - h[1]) * l, m = p - (p - a[0]) * v, d = f - (f - a[1]) * v, s.setTripleAt(p, f, m, d, c, u, y), y += 1, h = i === g - 1 ? t.v[0] : t.v[i + 1], l = (o = Math.sqrt(Math.pow(a[0] - h[0], 2) + Math.pow(a[1] - h[1], 2))) ? Math.min(o / 2, e) / o : 0, p = m = a[0] + (h[0] - a[0]) * l, f = d = a[1] + (h[1] - a[1]) * l, c = p - (p - a[0]) * v, u = f - (f - a[1]) * v, s.setTripleAt(p, f, m, d, c, u, y)) : s.setTripleAt(a[0], a[1], n[0], n[1], r[0], r[1], y) : s.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1;
		return s
	}, J.prototype.processShapes = function(t) {
		var e, s, i, a, r, n, h = this.shapes.length,
			o = this.rd.v;
		if (0 !== o)
			for (s = 0; s < h; s += 1) {
				if ((r = this.shapes[s]).shape.paths, n = r.localShapeCollection, r.shape._mdf || this._mdf || t)
					for (n.releaseShapes(), r.shape._mdf = !0, e = r.shape.paths.shapes, a = r.shape.paths._length, i = 0; i < a; i += 1) n.addShape(this.processPath(e[i], o));
				r.shape.paths = r.localShapeCollection
			}
		this.dynamicProperties.length || (this._mdf = !1)
	}, Y.registerModifier("rd", J), L([H], U), U.prototype.initModifierProperties = function(t, e) {
		this.getValue = this.processKeys, this.c = z.getProp(t, e.c, 0, null, this), this.o = z.getProp(t, e.o, 0, null, this), this.tr = N.getTransformProperty(t, e.tr, this), this.so = z.getProp(t, e.tr.so, 0, .01, this), this.eo = z.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new I, this.rMatrix = new I, this.sMatrix = new I, this.tMatrix = new I, this.matrix = new I
	}, U.prototype.applyTransforms = function(t, e, s, i, a, r) {
		var n = r ? -1 : 1,
			h = i.s.v[0] + (1 - i.s.v[0]) * (1 - a),
			o = i.s.v[1] + (1 - i.s.v[1]) * (1 - a);
		t.translate(i.p.v[0] * n * a, i.p.v[1] * n * a, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * a), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), s.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), s.scale(r ? 1 / h : h, r ? 1 / o : o), s.translate(i.a.v[0], i.a.v[1], i.a.v[2])
	}, U.prototype.init = function(t, e, s, i) {
		this.elem = t, this.arr = e, this.pos = s, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[s]);
		for (; 0 < s;) s -= 1, this._elements.unshift(e[s]), 1;
		this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
	}, U.prototype.resetElements = function(t) {
		var e, s = t.length;
		for (e = 0; e < s; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
	}, U.prototype.cloneElements = function(t) {
		t.length;
		var e = JSON.parse(JSON.stringify(t));
		return this.resetElements(e), e
	}, U.prototype.changeGroupRender = function(t, e) {
		var s, i = t.length;
		for (s = 0; s < i; s += 1) t[s]._render = e, "gr" === t[s].ty && this.changeGroupRender(t[s].it, e)
	}, U.prototype.processShapes = function(t) {
		var e, s, i, a, r;
		if (this._mdf || t) {
			var n, h = Math.ceil(this.c.v);
			if (this._groups.length < h) {
				for (; this._groups.length < h;) {
					var o = {
						it: this.cloneElements(this._elements),
						ty: "gr"
					};
					o.it.push({
						a: {
							a: 0,
							ix: 1,
							k: [0, 0]
						},
						nm: "Transform",
						o: {
							a: 0,
							ix: 7,
							k: 100
						},
						p: {
							a: 0,
							ix: 2,
							k: [0, 0]
						},
						r: {
							a: 1,
							ix: 6,
							k: [{
								s: 0,
								e: 0,
								t: 0
							}, {
								s: 0,
								e: 0,
								t: 1
							}]
						},
						s: {
							a: 0,
							ix: 3,
							k: [100, 100]
						},
						sa: {
							a: 0,
							ix: 5,
							k: 0
						},
						sk: {
							a: 0,
							ix: 4,
							k: 0
						},
						ty: "tr"
					}), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1
				}
				this.elem.reloadShapes()
			}
			for (i = r = 0; i <= this._groups.length - 1; i += 1) n = r < h, this._groups[i]._render = n, this.changeGroupRender(this._groups[i].it, n), r += 1;
			this._currentCopies = h;
			var l = this.o.v,
				p = l % 1,
				f = 0 < l ? Math.floor(l) : Math.ceil(l),
				m = (this.tr.v.props, this.pMatrix.props),
				d = this.rMatrix.props,
				c = this.sMatrix.props;
			this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
			var u, g, y = 0;
			if (0 < l) {
				for (; y < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), y += 1;
				p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), y += p)
			} else if (l < 0) {
				for (; f < y;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), y -= 1;
				p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), y -= p)
			}
			for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, a = 1 === this.data.m ? 1 : -1, r = this._currentCopies; r;) {
				if (g = (s = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== y) {
					for ((0 !== i && 1 === a || i !== this._currentCopies - 1 && -1 === a) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), u = 0; u < g; u += 1) s[u] = this.matrix.props[u];
					this.matrix.reset()
				} else
					for (this.matrix.reset(), u = 0; u < g; u += 1) s[u] = this.matrix.props[u];
				y += 1, r -= 1, i += a
			}
		} else
			for (r = this._currentCopies, i = 0, a = 1; r;) s = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, r -= 1, i += a
	}, U.prototype.addShape = function() {}, Y.registerModifier("rp", U), Z.prototype.addShape = function(t) {
		this._length === this._maxLength && (this.shapes = this.shapes.concat(E(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
	}, Z.prototype.releaseShapes = function() {
		var t;
		for (t = 0; t < this._length; t += 1) Pt.release(this.shapes[t]);
		this._length = 0
	}, Q.prototype.getValue = function(t) {
		if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
			var e = 0,
				s = this.dataProps.length;
			for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < s; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
		}
	}, L([S], Q), $.prototype.comparePoints = function(t, e) {
		for (var s = 0, i = this.o.length / 2; s < i;) {
			if (.01 < Math.abs(t[4 * s] - t[4 * e + 2 * s])) return !1;
			s += 1
		}
		return !0
	}, $.prototype.checkCollapsable = function() {
		if (this.o.length / 2 != this.c.length / 4) return !1;
		if (this.data.k.k[0].s)
			for (var t = 0, e = this.data.k.k.length; t < e;) {
				if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
				t += 1
			} else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
		return !0
	}, $.prototype.getValue = function(t) {
		if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
			var e, s, i, a = 4 * this.data.p;
			for (e = 0; e < a; e += 1) s = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * s), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
			if (this.o.length)
				for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) s = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
			this._mdf = !t
		}
	}, L([S], $);
	var tt, et, st = function(t, e, s, i) {
			if (0 === e) return "";
			var a, r = t.o,
				n = t.i,
				h = t.v,
				o = " M" + i.applyToPointStringified(h[0][0], h[0][1]);
			for (a = 1; a < e; a += 1) o += " C" + i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + i.applyToPointStringified(n[a][0], n[a][1]) + " " + i.applyToPointStringified(h[a][0], h[a][1]);
			return s && e && (o += " C" + i.applyToPointStringified(r[a - 1][0], r[a - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(h[0][0], h[0][1]), o += "z"), o
		},
		it = function() {
			var a = function() {
				var t = D("canvas");
				t.width = 1, t.height = 1;
				var e = t.getContext("2d");
				return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
			}();

			function t() {
				this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
			}

			function e(t) {
				var e = function(t, e, s) {
						var i = "";
						if (t.e) i = t.p;
						else if (e) {
							var a = t.p; - 1 !== a.indexOf("images/") && (a = a.split("/")[1]), i = e + a
						} else i = s, i += t.u ? t.u : "", i += t.p;
						return i
					}(t, this.assetsPath, this.path),
					s = D("img");
				s.crossOrigin = "anonymous", s.addEventListener("load", this._imageLoaded.bind(this), !1), s.addEventListener("error", function() {
					i.img = a, this._imageLoaded()
				}.bind(this), !1), s.src = e;
				var i = {
					img: s,
					assetData: t
				};
				return i
			}

			function s(t, e) {
				this.imagesLoadedCb = e;
				var s, i = t.length;
				for (s = 0; s < i; s += 1) t[s].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[s])))
			}

			function i(t) {
				this.path = t || ""
			}

			function r(t) {
				this.assetsPath = t || ""
			}

			function n(t) {
				for (var e = 0, s = this.images.length; e < s;) {
					if (this.images[e].assetData === t) return this.images[e].img;
					e += 1
				}
			}

			function h() {
				this.imagesLoadedCb = null, this.images.length = 0
			}

			function o() {
				return this.totalImages === this.loadedAssets
			}
			return function() {
				this.loadAssets = s, this.setAssetsPath = r, this.setPath = i, this.loaded = o, this.destroy = h, this.getImage = n, this._createImageData = e, this._imageLoaded = t, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
			}
		}(),
		at = (tt = {
			maskType: !0
		}, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (tt.maskType = !1), tt),
		rt = ((et = {}).createFilter = function(t) {
			var e = F("filter");
			return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
		}, et.createAlphaToLuminanceFilter = function() {
			var t = F("feColorMatrix");
			return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
		}, et),
		nt = function() {
			function r(t) {
				return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
			}
			return {
				load: function(t, e, s) {
					var i, a = new XMLHttpRequest;
					a.open("GET", t, !0);
					try {
						a.responseType = "json"
					} catch (t) {}
					a.send(), a.onreadystatechange = function() {
						if (4 == a.readyState)
							if (200 == a.status) i = r(a), e(i);
							else try {
								i = r(a), e(i)
							} catch (t) {
								s && s(t)
							}
					}
				}
			}
		}();

	function ht(t, e, s) {
		this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = s, this._animatorsData = E(this._textData.a.length), this._pathData = {}, this._moreOptions = {
			alignment: {}
		}, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(s)
	}

	function ot(t, e, s) {
		var i = {
				propType: !1
			},
			a = z.getProp,
			r = e.a;
		this.a = {
			r: r.r ? a(t, r.r, 0, q, s) : i,
			rx: r.rx ? a(t, r.rx, 0, q, s) : i,
			ry: r.ry ? a(t, r.ry, 0, q, s) : i,
			sk: r.sk ? a(t, r.sk, 0, q, s) : i,
			sa: r.sa ? a(t, r.sa, 0, q, s) : i,
			s: r.s ? a(t, r.s, 1, .01, s) : i,
			a: r.a ? a(t, r.a, 1, 0, s) : i,
			o: r.o ? a(t, r.o, 0, .01, s) : i,
			p: r.p ? a(t, r.p, 1, 0, s) : i,
			sw: r.sw ? a(t, r.sw, 0, 0, s) : i,
			sc: r.sc ? a(t, r.sc, 1, 0, s) : i,
			fc: r.fc ? a(t, r.fc, 1, 0, s) : i,
			fh: r.fh ? a(t, r.fh, 0, 0, s) : i,
			fs: r.fs ? a(t, r.fs, 0, .01, s) : i,
			fb: r.fb ? a(t, r.fb, 0, .01, s) : i,
			t: r.t ? a(t, r.t, 0, 0, s) : i
		}, this.s = _t.getTextSelectorProp(t, e.s, s), this.s.t = e.s.t
	}

	function dt(t, e, s, i, a, r) {
		this.o = t, this.sw = e, this.sc = s, this.fc = i, this.m = a, this.p = r, this._mdf = {
			o: !0,
			sw: !!e,
			sc: !!s,
			fc: !!i,
			m: !0,
			p: !0
		}
	}

	function ct(t, e) {
		this._frameId = s, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
			ascent: 0,
			boxWidth: this.defaultBoxWidth,
			f: "",
			fStyle: "",
			fWeight: "",
			fc: "",
			j: "",
			justifyOffset: "",
			l: [],
			lh: 0,
			lineWidths: [],
			ls: "",
			of: "",
			s: "",
			sc: "",
			sw: 0,
			t: 0,
			tr: 0,
			sz: 0,
			ps: null,
			fillColorAnim: !1,
			strokeColorAnim: !1,
			strokeWidthAnim: !1,
			yOffset: 0,
			finalSize: 0,
			finalText: [],
			finalLineHeight: 0,
			__complete: !1
		}, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
	}
	ht.prototype.searchProperties = function() {
		var t, e, s = this._textData.a.length,
			i = z.getProp;
		for (t = 0; t < s; t += 1) e = this._textData.a[t], this._animatorsData[t] = new ot(this._elem, e, this);
		this._textData.p && "m" in this._textData.p ? (this._pathData = {
			f: i(this._elem, this._textData.p.f, 0, 0, this),
			l: i(this._elem, this._textData.p.l, 0, 0, this),
			r: this._textData.p.r,
			m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
		}, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
	}, ht.prototype.getMeasures = function(t, e) {
		if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
			this._isFirstFrame = !1;
			var s, i, a, r, n, h, o, l, p, f, m, d, c, u, g, y, v, b, _, A = this._moreOptions.alignment.v,
				k = this._animatorsData,
				M = this._textData,
				P = this.mHelper,
				C = this._renderType,
				x = this.renderedLetters.length,
				E = (this.data, t.l);
			if (this._hasMaskedPath) {
				if (_ = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
					var F, D = _.v;
					for (this._pathData.r && (D = D.reverse()), n = {
							tLength: 0,
							segments: []
						}, r = D._length - 1, a = y = 0; a < r; a += 1) F = mt.buildBezierData(D.v[a], D.v[a + 1], [D.o[a][0] - D.v[a][0], D.o[a][1] - D.v[a][1]], [D.i[a + 1][0] - D.v[a + 1][0], D.i[a + 1][1] - D.v[a + 1][1]]), n.tLength += F.segmentLength, n.segments.push(F), y += F.segmentLength;
					a = r, _.v.c && (F = mt.buildBezierData(D.v[a], D.v[0], [D.o[a][0] - D.v[a][0], D.o[a][1] - D.v[a][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), n.tLength += F.segmentLength, n.segments.push(F), y += F.segmentLength), this._pathData.pi = n
				}
				if (n = this._pathData.pi, h = this._pathData.f.v, f = 1, p = !(l = m = 0), u = n.segments, h < 0 && _.v.c)
					for (n.tLength < Math.abs(h) && (h = -Math.abs(h) % n.tLength), f = (c = u[m = u.length - 1].points).length - 1; h < 0;) h += c[f].partialLength, (f -= 1) < 0 && (f = (c = u[m -= 1].points).length - 1);
				d = (c = u[m].points)[f - 1], g = (o = c[f]).partialLength
			}
			r = E.length, i = s = 0;
			var S, w, T, I, L = 1.2 * t.finalSize * .714,
				R = !0;
			T = k.length;
			var V, z, N, O, B, q, j, G, W, X, Y, H, K, J = -1,
				U = h,
				Z = m,
				Q = f,
				$ = -1,
				tt = "",
				et = this.defaultPropsArray;
			if (2 === t.j || 1 === t.j) {
				var st = 0,
					it = 0,
					at = 2 === t.j ? -.5 : -1,
					rt = 0,
					nt = !0;
				for (a = 0; a < r; a += 1)
					if (E[a].n) {
						for (st && (st += it); rt < a;) E[rt].animatorJustifyOffset = st, rt += 1;
						nt = !(st = 0)
					} else {
						for (w = 0; w < T; w += 1)(S = k[w].a).t.propType && (nt && 2 === t.j && (it += S.t.v * at), (V = k[w].s.getMult(E[a].anIndexes[w], M.a[w].s.totalChars)).length ? st += S.t.v * V[0] * at : st += S.t.v * V * at);
						nt = !1
					} for (st && (st += it); rt < a;) E[rt].animatorJustifyOffset = st, rt += 1
			}
			for (a = 0; a < r; a += 1) {
				if (P.reset(), B = 1, E[a].n) s = 0, i += t.yOffset, i += R ? 1 : 0, h = U, R = !1, 0, this._hasMaskedPath && (f = Q, d = (c = u[m = Z].points)[f - 1], g = (o = c[f]).partialLength, l = 0), K = X = H = tt = "", et = this.defaultPropsArray;
				else {
					if (this._hasMaskedPath) {
						if ($ !== E[a].line) {
							switch (t.j) {
								case 1:
									h += y - t.lineWidths[E[a].line];
									break;
								case 2:
									h += (y - t.lineWidths[E[a].line]) / 2
							}
							$ = E[a].line
						}
						J !== E[a].ind && (E[J] && (h += E[J].extra), h += E[a].an / 2, J = E[a].ind), h += A[0] * E[a].an / 200;
						var ht = 0;
						for (w = 0; w < T; w += 1)(S = k[w].a).p.propType && ((V = k[w].s.getMult(E[a].anIndexes[w], M.a[w].s.totalChars)).length ? ht += S.p.v[0] * V[0] : ht += S.p.v[0] * V), S.a.propType && ((V = k[w].s.getMult(E[a].anIndexes[w], M.a[w].s.totalChars)).length ? ht += S.a.v[0] * V[0] : ht += S.a.v[0] * V);
						for (p = !0; p;) h + ht <= l + g || !c ? (v = (h + ht - l) / o.partialLength, N = d.point[0] + (o.point[0] - d.point[0]) * v, O = d.point[1] + (o.point[1] - d.point[1]) * v, P.translate(-A[0] * E[a].an / 200, -A[1] * L / 100), p = !1) : c && (l += o.partialLength, (f += 1) >= c.length && (f = 0, c = u[m += 1] ? u[m].points : _.v.c ? u[m = f = 0].points : (l -= o.partialLength, null)), c && (d = o, g = (o = c[f]).partialLength));
						z = E[a].an / 2 - E[a].add, P.translate(-z, 0, 0)
					} else z = E[a].an / 2 - E[a].add, P.translate(-z, 0, 0), P.translate(-A[0] * E[a].an / 200, -A[1] * L / 100, 0);
					for (E[a].l / 2, w = 0; w < T; w += 1)(S = k[w].a).t.propType && (V = k[w].s.getMult(E[a].anIndexes[w], M.a[w].s.totalChars), 0 === s && 0 === t.j || (this._hasMaskedPath ? V.length ? h += S.t.v * V[0] : h += S.t.v * V : V.length ? s += S.t.v * V[0] : s += S.t.v * V));
					for (E[a].l / 2, t.strokeWidthAnim && (j = t.sw || 0), t.strokeColorAnim && (q = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (G = [t.fc[0], t.fc[1], t.fc[2]]), w = 0; w < T; w += 1)(S = k[w].a).a.propType && ((V = k[w].s.getMult(E[a].anIndexes[w], M.a[w].s.totalChars)).length ? P.translate(-S.a.v[0] * V[0], -S.a.v[1] * V[1], S.a.v[2] * V[2]) : P.translate(-S.a.v[0] * V, -S.a.v[1] * V, S.a.v[2] * V));
					for (w = 0; w < T; w += 1)(S = k[w].a).s.propType && ((V = k[w].s.getMult(E[a].anIndexes[w], M.a[w].s.totalChars)).length ? P.scale(1 + (S.s.v[0] - 1) * V[0], 1 + (S.s.v[1] - 1) * V[1], 1) : P.scale(1 + (S.s.v[0] - 1) * V, 1 + (S.s.v[1] - 1) * V, 1));
					for (w = 0; w < T; w += 1) {
						if (S = k[w].a, V = k[w].s.getMult(E[a].anIndexes[w], M.a[w].s.totalChars), S.sk.propType && (V.length ? P.skewFromAxis(-S.sk.v * V[0], S.sa.v * V[1]) : P.skewFromAxis(-S.sk.v * V, S.sa.v * V)), S.r.propType && (V.length ? P.rotateZ(-S.r.v * V[2]) : P.rotateZ(-S.r.v * V)), S.ry.propType && (V.length ? P.rotateY(S.ry.v * V[1]) : P.rotateY(S.ry.v * V)), S.rx.propType && (V.length ? P.rotateX(S.rx.v * V[0]) : P.rotateX(S.rx.v * V)), S.o.propType && (V.length ? B += (S.o.v * V[0] - B) * V[0] : B += (S.o.v * V - B) * V), t.strokeWidthAnim && S.sw.propType && (V.length ? j += S.sw.v * V[0] : j += S.sw.v * V), t.strokeColorAnim && S.sc.propType)
							for (W = 0; W < 3; W += 1) V.length ? q[W] = q[W] + (S.sc.v[W] - q[W]) * V[0] : q[W] = q[W] + (S.sc.v[W] - q[W]) * V;
						if (t.fillColorAnim && t.fc) {
							if (S.fc.propType)
								for (W = 0; W < 3; W += 1) V.length ? G[W] = G[W] + (S.fc.v[W] - G[W]) * V[0] : G[W] = G[W] + (S.fc.v[W] - G[W]) * V;
							S.fh.propType && (G = V.length ? ft(G, S.fh.v * V[0]) : ft(G, S.fh.v * V)), S.fs.propType && (G = V.length ? lt(G, S.fs.v * V[0]) : lt(G, S.fs.v * V)), S.fb.propType && (G = V.length ? pt(G, S.fb.v * V[0]) : pt(G, S.fb.v * V))
						}
					}
					for (w = 0; w < T; w += 1)(S = k[w].a).p.propType && (V = k[w].s.getMult(E[a].anIndexes[w], M.a[w].s.totalChars), this._hasMaskedPath ? V.length ? P.translate(0, S.p.v[1] * V[0], -S.p.v[2] * V[1]) : P.translate(0, S.p.v[1] * V, -S.p.v[2] * V) : V.length ? P.translate(S.p.v[0] * V[0], S.p.v[1] * V[1], -S.p.v[2] * V[2]) : P.translate(S.p.v[0] * V, S.p.v[1] * V, -S.p.v[2] * V));
					if (t.strokeWidthAnim && (X = j < 0 ? 0 : j), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * q[0]) + "," + Math.round(255 * q[1]) + "," + Math.round(255 * q[2]) + ")"), t.fillColorAnim && t.fc && (H = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), this._hasMaskedPath) {
						if (P.translate(0, -t.ls), P.translate(0, A[1] * L / 100 + i, 0), M.p.p) {
							b = (o.point[1] - d.point[1]) / (o.point[0] - d.point[0]);
							var ot = 180 * Math.atan(b) / Math.PI;
							o.point[0] < d.point[0] && (ot += 180), P.rotate(-ot * Math.PI / 180)
						}
						P.translate(N, O, 0), h -= A[0] * E[a].an / 200, E[a + 1] && J !== E[a + 1].ind && (h += E[a].an / 2, h += t.tr / 1e3 * t.finalSize)
					} else {
						switch (P.translate(s, i, 0), t.ps && P.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
							case 1:
								P.translate(E[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[E[a].line]), 0, 0);
								break;
							case 2:
								P.translate(E[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[E[a].line]) / 2, 0, 0)
						}
						P.translate(0, -t.ls), P.translate(z, 0, 0), P.translate(A[0] * E[a].an / 200, A[1] * L / 100, 0), s += E[a].l + t.tr / 1e3 * t.finalSize
					}
					"html" === C ? tt = P.toCSS() : "svg" === C ? tt = P.to2dCSS() : et = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], K = B
				}
				this.lettersChangedFlag = x <= a ? (I = new dt(K, X, Y, H, tt, et), this.renderedLetters.push(I), x += 1, !0) : (I = this.renderedLetters[a]).update(K, X, Y, H, tt, et) || this.lettersChangedFlag
			}
		}
	}, ht.prototype.getValue = function() {
		this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
	}, ht.prototype.mHelper = new I, ht.prototype.defaultPropsArray = [], L([S], ht), dt.prototype.update = function(t, e, s, i, a, r) {
		this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1;
		var n = this._mdf.p = !1;
		return this.o !== t && (this.o = t, n = this._mdf.o = !0), this.sw !== e && (this.sw = e, n = this._mdf.sw = !0), this.sc !== s && (this.sc = s, n = this._mdf.sc = !0), this.fc !== i && (this.fc = i, n = this._mdf.fc = !0), this.m !== a && (this.m = a, n = this._mdf.m = !0), !r.length || this.p[0] === r[0] && this.p[1] === r[1] && this.p[4] === r[4] && this.p[5] === r[5] && this.p[12] === r[12] && this.p[13] === r[13] || (this.p = r, n = this._mdf.p = !0), n
	}, ct.prototype.defaultBoxWidth = [0, 0], ct.prototype.copyData = function(t, e) {
		for (var s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
		return t
	}, ct.prototype.setCurrentData = function(t) {
		t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
	}, ct.prototype.searchProperty = function() {
		return this.searchKeyframes()
	}, ct.prototype.searchKeyframes = function() {
		return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
	}, ct.prototype.addEffect = function(t) {
		this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
	}, ct.prototype.getValue = function(t) {
		if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
			this.currentData.t = this.data.d.k[this.keysIndex].s.t;
			var e = this.currentData,
				s = this.keysIndex;
			if (this.lock) this.setCurrentData(this.currentData);
			else {
				this.lock = !0, this._mdf = !1;
				var i, a = this.effectsSequence.length,
					r = t || this.data.d.k[this.keysIndex].s;
				for (i = 0; i < a; i += 1) r = s !== this.keysIndex ? this.effectsSequence[i](r, r.t) : this.effectsSequence[i](this.currentData, r.t);
				e !== r && this.setCurrentData(r), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
			}
		}
	}, ct.prototype.getKeyframeValue = function() {
		for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, s = 0, i = t.length; s <= i - 1 && (t[s].s, !(s === i - 1 || t[s + 1].t > e));) s += 1;
		return this.keysIndex !== s && (this.keysIndex = s), this.data.d.k[this.keysIndex].s
	}, ct.prototype.buildFinalText = function(t) {
		for (var e, s = V.getCombinedCharacterCodes(), i = [], a = 0, r = t.length; a < r;) e = t.charCodeAt(a), -1 !== s.indexOf(e) ? i[i.length - 1] += t.charAt(a) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(a + 1)) && e <= 57343 ? (i.push(t.substr(a, 2)), ++a) : i.push(t.charAt(a)), a += 1;
		return i
	}, ct.prototype.completeTextData = function(t) {
		t.__complete = !0;
		var e, s, i, a, r, n, h, o = this.elem.globalData.fontManager,
			l = this.data,
			p = [],
			f = 0,
			m = l.m.g,
			d = 0,
			c = 0,
			u = 0,
			g = [],
			y = 0,
			v = 0,
			b = o.getFontByName(t.f),
			_ = 0,
			A = b.fStyle ? b.fStyle.split(" ") : [],
			k = "normal",
			M = "normal";
		for (s = A.length, e = 0; e < s; e += 1) switch (A[e].toLowerCase()) {
			case "italic":
				M = "italic";
				break;
			case "bold":
				k = "700";
				break;
			case "black":
				k = "900";
				break;
			case "medium":
				k = "500";
				break;
			case "regular":
			case "normal":
				k = "400";
				break;
			case "light":
			case "thin":
				k = "200"
		}
		t.fWeight = b.fWeight || k, t.fStyle = M, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), s = t.finalText.length, t.finalLineHeight = t.lh;
		var P, C = t.tr / 1e3 * t.finalSize;
		if (t.sz)
			for (var x, E, F = !0, D = t.sz[0], S = t.sz[1]; F;) {
				y = x = 0, s = (E = this.buildFinalText(t.t)).length, C = t.tr / 1e3 * t.finalSize;
				var w = -1;
				for (e = 0; e < s; e += 1) P = E[e].charCodeAt(0), i = !1, " " === E[e] ? w = e : 13 !== P && 3 !== P || (i = !(y = 0), x += t.finalLineHeight || 1.2 * t.finalSize), D < y + (_ = o.chars ? (h = o.getCharData(E[e], b.fStyle, b.fFamily), i ? 0 : h.w * t.finalSize / 100) : o.measureText(E[e], t.f, t.finalSize)) && " " !== E[e] ? (-1 === w ? s += 1 : e = w, x += t.finalLineHeight || 1.2 * t.finalSize, E.splice(e, w === e ? 1 : 0, "\r"), w = -1, y = 0) : (y += _, y += C);
				x += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && S < x ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = E, s = t.finalText.length, F = !1)
			}
		y = -C;
		var T, I = _ = 0;
		for (e = 0; e < s; e += 1)
			if (i = !1, P = (T = t.finalText[e]).charCodeAt(0), " " === T ? a = "\xa0" : 13 === P || 3 === P ? (I = 0, g.push(y), v = v < y ? y : v, y = -2 * C, i = !(a = ""), u += 1) : a = t.finalText[e], _ = o.chars ? (h = o.getCharData(T, b.fStyle, o.getFontByName(t.f).fFamily), i ? 0 : h.w * t.finalSize / 100) : o.measureText(a, t.f, t.finalSize), " " === T ? I += _ + C : (y += _ + C + I, I = 0), p.push({
					l: _,
					an: _,
					add: d,
					n: i,
					anIndexes: [],
					val: a,
					line: u,
					animatorJustifyOffset: 0
				}), 2 == m) {
				if (d += _, "" === a || "\xa0" === a || e === s - 1) {
					for ("" !== a && "\xa0" !== a || (d -= _); c <= e;) p[c].an = d, p[c].ind = f, p[c].extra = _, c += 1;
					f += 1, d = 0
				}
			} else if (3 == m) {
			if (d += _, "" === a || e === s - 1) {
				for ("" === a && (d -= _); c <= e;) p[c].an = d, p[c].ind = f, p[c].extra = _, c += 1;
				d = 0, f += 1
			}
		} else p[f].ind = f, p[f].extra = 0, f += 1;
		if (t.l = p, v = v < y ? y : v, g.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
		else switch (t.boxWidth = v, t.j) {
			case 1:
				t.justifyOffset = -t.boxWidth;
				break;
			case 2:
				t.justifyOffset = -t.boxWidth / 2;
				break;
			default:
				t.justifyOffset = 0
		}
		t.lineWidths = g;
		var L, R, V = l.a;
		n = V.length;
		var z, N, O = [];
		for (r = 0; r < n; r += 1) {
			for ((L = V[r]).a.sc && (t.strokeColorAnim = !0), L.a.sw && (t.strokeWidthAnim = !0), (L.a.fc || L.a.fh || L.a.fs || L.a.fb) && (t.fillColorAnim = !0), N = 0, z = L.s.b, e = 0; e < s; e += 1)(R = p[e]).anIndexes[r] = N, (1 == z && "" !== R.val || 2 == z && "" !== R.val && "\xa0" !== R.val || 3 == z && (R.n || "\xa0" == R.val || e == s - 1) || 4 == z && (R.n || e == s - 1)) && (1 === L.s.rn && O.push(N), N += 1);
			l.a[r].s.totalChars = N;
			var B, q = -1;
			if (1 === L.s.rn)
				for (e = 0; e < s; e += 1) q != (R = p[e]).anIndexes[r] && (q = R.anIndexes[r], B = O.splice(Math.floor(Math.random() * O.length), 1)[0]), R.anIndexes[r] = B
		}
		t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
	}, ct.prototype.updateDocumentData = function(t, e) {
		e = void 0 === e ? this.keysIndex : e;
		var s = this.copyData({}, this.data.d.k[e].s);
		s = this.copyData(s, t), this.data.d.k[e].s = s, this.recalculate(e), this.elem.addDynamicProperty(this)
	}, ct.prototype.recalculate = function(t) {
		var e = this.data.d.k[t].s;
		e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
	}, ct.prototype.canResizeFont = function(t) {
		this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
	}, ct.prototype.setMinimumFontSize = function(t) {
		this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
	};
	var ut, gt, yt, vt, bt, _t = function() {
			var l = Math.max,
				p = Math.min,
				f = Math.floor;

			function i(t, e) {
				this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = z.getProp(t, e.s || {
					k: 0
				}, 0, 0, this), this.e = "e" in e ? z.getProp(t, e.e, 0, 0, this) : {
					v: 100
				}, this.o = z.getProp(t, e.o || {
					k: 0
				}, 0, 0, this), this.xe = z.getProp(t, e.xe || {
					k: 0
				}, 0, 0, this), this.ne = z.getProp(t, e.ne || {
					k: 0
				}, 0, 0, this), this.a = z.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
			}
			return i.prototype = {
				getMult: function(t) {
					this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
					var e = G.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
						s = 0,
						i = this.finalS,
						a = this.finalE,
						r = this.data.sh;
					if (2 == r) s = e(s = a === i ? a <= t ? 1 : 0 : l(0, p(.5 / (a - i) + (t - i) / (a - i), 1)));
					else if (3 == r) s = e(s = a === i ? a <= t ? 0 : 1 : 1 - l(0, p(.5 / (a - i) + (t - i) / (a - i), 1)));
					else if (4 == r) a === i ? s = 0 : (s = l(0, p(.5 / (a - i) + (t - i) / (a - i), 1))) < .5 ? s *= 2 : s = 1 - 2 * (s - .5), s = e(s);
					else if (5 == r) {
						if (a === i) s = 0;
						else {
							var n = a - i,
								h = -n / 2 + (t = p(l(0, t + .5 - i), a - i)),
								o = n / 2;
							s = Math.sqrt(1 - h * h / (o * o))
						}
						s = e(s)
					} else s = 6 == r ? e(s = a === i ? 0 : (t = p(l(0, t + .5 - i), a - i), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (a - i))) / 2)) : (t >= f(i) && (s = t - i < 0 ? 1 - (i - t) : l(0, p(a - t, 1))), e(s));
					return s * this.a.v
				},
				getValue: function(t) {
					this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
					var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
						s = this.o.v / e,
						i = this.s.v / e + s,
						a = this.e.v / e + s;
					if (a < i) {
						var r = i;
						i = a, a = r
					}
					this.finalS = i, this.finalE = a
				}
			}, L([S], i), {
				getTextSelectorProp: function(t, e, s) {
					return new i(t, e, s)
				}
			}
		}(),
		At = function(t, e, s, i) {
			var a = 0,
				r = t,
				n = E(r);

			function h() {
				return a ? n[a -= 1] : e()
			}
			return {
				newElement: h,
				release: function(t) {
					a === r && (n = kt.double(n), r *= 2), s && s(t), n[a] = t, a += 1
				}
			}
		},
		kt = {
			double: function(t) {
				return t.concat(E(t.length))
			}
		},
		Mt = At(8, function() {
			return j("float32", 2)
		}),
		Pt = ((ut = At(4, function() {
			return new O
		}, function(t) {
			var e, s = t._length;
			for (e = 0; e < s; e += 1) Mt.release(t.v[e]), Mt.release(t.i[e]), Mt.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
			t._length = 0, t.c = !1
		})).clone = function(t) {
			var e, s = ut.newElement(),
				i = void 0 === t._length ? t.v.length : t._length;
			for (s.setLength(i), s.c = t.c, e = 0; e < i; e += 1) s.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
			return s
		}, ut),
		Ct = (gt = {
			newShapeCollection: function() {
				var t;
				t = yt ? bt[yt -= 1] : new Z;
				return t
			},
			release: function(t) {
				var e, s = t._length;
				for (e = 0; e < s; e += 1) Pt.release(t.shapes[e]);
				t._length = 0, yt === vt && (bt = kt.double(bt), vt *= 2);
				bt[yt] = t, yt += 1
			}
		}, yt = 0, bt = E(vt = 4), gt),
		xt = At(8, function() {
			return {
				lengths: [],
				totalLength: 0
			}
		}, function(t) {
			var e, s = t.lengths.length;
			for (e = 0; e < s; e += 1) Et.release(t.lengths[e]);
			t.lengths.length = 0
		}),
		Et = At(8, function() {
			return {
				addedLength: 0,
				percents: j("float32", M),
				lengths: j("float32", M)
			}
		});

	function Ft() {}

	function Dt(t, e) {
		this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = F("svg");
		var s = "";
		if (e && e.title) {
			var i = F("title"),
				a = P();
			i.setAttribute("id", a), i.textContent = e.title, this.svgElement.appendChild(i), s += a
		}
		if (e && e.description) {
			var r = F("desc"),
				n = P();
			r.setAttribute("id", n), r.textContent = e.description, this.svgElement.appendChild(r), s += " " + n
		}
		s && this.svgElement.setAttribute("aria-labelledby", s);
		var h = F("defs");
		this.svgElement.appendChild(h);
		var o = F("g");
		this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
			preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
			imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
			progressiveLoad: e && e.progressiveLoad || !1,
			hideOnTransparent: !e || !1 !== e.hideOnTransparent,
			viewBoxOnly: e && e.viewBoxOnly || !1,
			viewBoxSize: e && e.viewBoxSize || !1,
			className: e && e.className || "",
			focusable: e && e.focusable
		}, this.globalData = {
			_mdf: !1,
			frameNum: -1,
			defs: h,
			renderConfig: this.renderConfig
		}, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
	}

	function St(t, e, s) {
		this.data = t, this.element = e, this.globalData = s, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
		var i, a = this.globalData.defs,
			r = this.masksProperties ? this.masksProperties.length : 0;
		this.viewData = E(r), this.solidPath = "";
		var n, h, o, l, p, f, m, d = this.masksProperties,
			c = 0,
			u = [],
			g = P(),
			y = "clipPath",
			v = "clip-path";
		for (i = 0; i < r; i++)
			if (("a" !== d[i].mode && "n" !== d[i].mode || d[i].inv || 100 !== d[i].o.k || d[i].o.x) && (v = y = "mask"), "s" != d[i].mode && "i" != d[i].mode || 0 !== c ? l = null : ((l = F("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), n = F("path"), "n" != d[i].mode) {
				var b;
				if (c += 1, n.setAttribute("fill", "s" === d[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== d[i].x.k ? (v = y = "mask", m = z.getProp(this.element, d[i].x, 0, null, this.element), b = P(), (p = F("filter")).setAttribute("id", b), (f = F("feMorphology")).setAttribute("operator", "erode"), f.setAttribute("in", "SourceGraphic"), f.setAttribute("radius", "0"), p.appendChild(f), a.appendChild(p), n.setAttribute("stroke", "s" === d[i].mode ? "#000000" : "#ffffff")) : m = f = null, this.storedData[i] = {
						elem: n,
						x: m,
						expan: f,
						lastPath: "",
						lastOperator: "",
						filterId: b,
						lastRadius: 0
					}, "i" == d[i].mode) {
					o = u.length;
					var _ = F("g");
					for (h = 0; h < o; h += 1) _.appendChild(u[h]);
					var A = F("mask");
					A.setAttribute("mask-type", "alpha"), A.setAttribute("id", g + "_" + c), A.appendChild(n), a.appendChild(A), _.setAttribute("mask", "url(". / k_g___c.html ")"), u.length = 0, u.push(_)
				} else u.push(n);
				d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
					elem: n,
					lastPath: "",
					op: z.getProp(this.element, d[i].o, 0, .01, this.element),
					prop: X.getShapeProp(this.element, d[i], 3),
					invRect: l
				}, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i])
			} else this.viewData[i] = {
				op: z.getProp(this.element, d[i].o, 0, .01, this.element),
				prop: X.getShapeProp(this.element, d[i], 3),
				elem: n,
				lastPath: ""
			}, a.appendChild(n);
		for (this.maskElement = F(y), r = u.length, i = 0; i < r; i += 1) this.maskElement.appendChild(u[i]);
		0 < c && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(v, "url(". / k_g.html ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
	}

	function wt() {}

	function Tt() {}

	function It() {}

	function Lt() {}

	function Rt() {}

	function Vt(t, e) {
		this.elem = t, this.pos = e
	}

	function zt(t, e) {
		this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = F("path"), this.msElem = null
	}

	function Nt(t, e, s) {
		this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = s, this.lvl = e, this._isAnimated = !!s.k;
		for (var i = 0, a = t.length; i < a;) {
			if (t[i].mProps.dynamicProperties.length) {
				this._isAnimated = !0;
				break
			}
			i += 1
		}
	}

	function Ot(t, e, s) {
		this.transform = {
			mProps: t,
			op: e,
			container: s
		}, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
	}

	function Bt(t, e, s) {
		this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = z.getProp(t, e.o, 0, .01, this), this.w = z.getProp(t, e.w, 0, null, this), this.d = new Q(t, e.d || {}, "svg", this), this.c = z.getProp(t, e.c, 1, 255, this), this.style = s, this._isAnimated = !!this._isAnimated
	}

	function qt(t, e, s) {
		this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = z.getProp(t, e.o, 0, .01, this), this.c = z.getProp(t, e.c, 1, 255, this), this.style = s
	}

	function jt(t, e, s) {
		this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, s)
	}

	function Gt(t, e, s) {
		this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = z.getProp(t, e.w, 0, null, this), this.d = new Q(t, e.d || {}, "svg", this), this.initGradientData(t, e, s), this._isAnimated = !!this._isAnimated
	}

	function Wt() {
		this.it = [], this.prevViewData = [], this.gr = F("g")
	}
	Ft.prototype.checkLayers = function(t) {
		var e, s, i = this.layers.length;
		for (this.completeLayers = !0, e = i - 1; 0 <= e; e--) this.elements[e] || (s = this.layers[e]).ip - s.st <= t - this.layers[e].st && s.op - s.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
		this.checkPendingElements()
	}, Ft.prototype.createItem = function(t) {
		switch (t.ty) {
			case 2:
				return this.createImage(t);
			case 0:
				return this.createComp(t);
			case 1:
				return this.createSolid(t);
			case 3:
				return this.createNull(t);
			case 4:
				return this.createShape(t);
			case 5:
				return this.createText(t);
			case 13:
				return this.createCamera(t)
		}
		return this.createNull(t)
	}, Ft.prototype.createCamera = function() {
		throw new Error("You're using a 3d camera. Try the html renderer.")
	}, Ft.prototype.buildAllItems = function() {
		var t, e = this.layers.length;
		for (t = 0; t < e; t += 1) this.buildItem(t);
		this.checkPendingElements()
	}, Ft.prototype.includeLayers = function(t) {
		this.completeLayers = !1;
		var e, s, i = t.length,
			a = this.layers.length;
		for (e = 0; e < i; e += 1)
			for (s = 0; s < a;) {
				if (this.layers[s].id == t[e].id) {
					this.layers[s] = t[e];
					break
				}
				s += 1
			}
	}, Ft.prototype.setProjectInterface = function(t) {
		this.globalData.projectInterface = t
	}, Ft.prototype.initItems = function() {
		this.globalData.progressiveLoad || this.buildAllItems()
	}, Ft.prototype.buildElementParenting = function(t, e, s) {
		for (var i = this.elements, a = this.layers, r = 0, n = a.length; r < n;) a[r].ind == e && (i[r] && !0 !== i[r] ? (s.push(i[r]), i[r].setAsParent(), void 0 !== a[r].parent ? this.buildElementParenting(t, a[r].parent, s) : t.setHierarchy(s)) : (this.buildItem(r), this.addPendingElement(t))), r += 1
	}, Ft.prototype.addPendingElement = function(t) {
		this.pendingElements.push(t)
	}, Ft.prototype.searchExtraCompositions = function(t) {
		var e, s = t.length;
		for (e = 0; e < s; e += 1)
			if (t[e].xt) {
				var i = this.createComp(t[e]);
				i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
			}
	}, Ft.prototype.setupGlobalData = function(t, e) {
		this.globalData.fontManager = new V, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
			w: t.w,
			h: t.h
		}
	}, L([Ft], Dt), Dt.prototype.createNull = function(t) {
		return new Ht(t, this.globalData, this)
	}, Dt.prototype.createShape = function(t) {
		return new se(t, this.globalData, this)
	}, Dt.prototype.createText = function(t) {
		return new ee(t, this.globalData, this)
	}, Dt.prototype.createImage = function(t) {
		return new Qt(t, this.globalData, this)
	}, Dt.prototype.createComp = function(t) {
		return new te(t, this.globalData, this)
	}, Dt.prototype.createSolid = function(t) {
		return new $t(t, this.globalData, this)
	}, Dt.prototype.configAnimation = function(t) {
		this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
		var e = this.globalData.defs;
		this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
		var s = F("clipPath"),
			i = F("rect");
		i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
		var a = P();
		s.setAttribute("id", a), s.appendChild(i), this.layerElement.setAttribute("clip-path", "url(". / k_a.html ")"), e.appendChild(s), this.layers = t.layers, this.elements = E(t.layers.length)
	}, Dt.prototype.destroy = function() {
		this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
		var t, e = this.layers ? this.layers.length : 0;
		for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
		this.elements.length = 0, this.destroyed = !0, this.animationItem = null
	}, Dt.prototype.updateContainerSize = function() {}, Dt.prototype.buildItem = function(t) {
		var e = this.elements;
		if (!e[t] && 99 != this.layers[t].ty) {
			e[t] = !0;
			var s = this.createItem(this.layers[t]);
			e[t] = s, h && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(s), s.initExpressions()), this.appendElementInPos(s, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? s.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(s)))
		}
	}, Dt.prototype.checkPendingElements = function() {
		for (; this.pendingElements.length;) {
			var t = this.pendingElements.pop();
			if (t.checkParenting(), t.data.tt)
				for (var e = 0, s = this.elements.length; e < s;) {
					if (this.elements[e] === t) {
						t.setMatte(this.elements[e - 1].layerId);
						break
					}
					e += 1
				}
		}
	}, Dt.prototype.renderFrame = function(t) {
		if (this.renderedFrame !== t && !this.destroyed) {
			null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
			var e, s = this.layers.length;
			for (this.completeLayers || this.checkLayers(t), e = s - 1; 0 <= e; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
			if (this.globalData._mdf)
				for (e = 0; e < s; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
		}
	}, Dt.prototype.appendElementInPos = function(t, e) {
		var s = t.getBaseElement();
		if (s) {
			for (var i, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement() && (i = this.elements[a].getBaseElement()), a += 1;
			i ? this.layerElement.insertBefore(s, i) : this.layerElement.appendChild(s)
		}
	}, Dt.prototype.hide = function() {
		this.layerElement.style.display = "none"
	}, Dt.prototype.show = function() {
		this.layerElement.style.display = "block"
	}, St.prototype.getMaskProperty = function(t) {
		return this.viewData[t].prop
	}, St.prototype.renderFrame = function(t) {
		var e, s = this.element.finalTransform.mat,
			i = this.masksProperties.length;
		for (e = 0; e < i; e++)
			if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && (this.viewData[e].invRect.setAttribute("x", -s.props[12]), this.viewData[e].invRect.setAttribute("y", -s.props[13])), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
				var a = this.storedData[e].expan;
				this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(". / k_this.storedData_e_.filterId.html ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
			}
	}, St.prototype.getMaskelement = function() {
		return this.maskElement
	}, St.prototype.createLayerSolidPath = function() {
		var t = "M0,0 ";
		return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
	}, St.prototype.drawPath = function(t, e, s) {
		var i, a, r = " M" + e.v[0][0] + "," + e.v[0][1];
		for (a = e._length, i = 1; i < a; i += 1) r += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
		if (e.c && 1 < a && (r += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), s.lastPath !== r) {
			var n = "";
			s.elem && (e.c && (n = t.inv ? this.solidPath + r : r), s.elem.setAttribute("d", n)), s.lastPath = r
		}
	}, St.prototype.destroy = function() {
		this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
	}, wt.prototype = {
		initHierarchy: function() {
			this.hierarchy = [], this._isParent = !1, this.checkParenting()
		},
		setHierarchy: function(t) {
			this.hierarchy = t
		},
		setAsParent: function() {
			this._isParent = !0
		},
		checkParenting: function() {
			void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
		}
	}, Tt.prototype = {
		initFrame: function() {
			this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
		},
		prepareProperties: function(t, e) {
			var s, i = this.dynamicProperties.length;
			for (s = 0; s < i; s += 1)(e || this._isParent && "transform" === this.dynamicProperties[s].propType) && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
		},
		addDynamicProperty: function(t) {
			-1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
		}
	}, It.prototype = {
		initTransform: function() {
			this.finalTransform = {
				mProp: this.data.ks ? N.getTransformProperty(this, this.data.ks, this) : {
					o: 0
				},
				_matMdf: !1,
				_opMdf: !1,
				mat: new I
			}, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
		},
		renderTransform: function() {
			if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
				var t, e = this.finalTransform.mat,
					s = 0,
					i = this.hierarchy.length;
				if (!this.finalTransform._matMdf)
					for (; s < i;) {
						if (this.hierarchy[s].finalTransform.mProp._mdf) {
							this.finalTransform._matMdf = !0;
							break
						}
						s += 1
					}
				if (this.finalTransform._matMdf)
					for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), s = 0; s < i; s += 1) t = this.hierarchy[s].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
			}
		},
		globalToLocal: function(t) {
			var e = [];
			e.push(this.finalTransform);
			for (var s = !0, i = this.comp; s;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : s = !1;
			var a, r, n = e.length;
			for (a = 0; a < n; a += 1) r = e[a].mat.applyToPointArray(0, 0, 0), t = [t[0] - r[0], t[1] - r[1], 0];
			return t
		},
		mHelper: new I
	}, Lt.prototype = {
		initRenderable: function() {
			this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
		},
		addRenderableComponent: function(t) {
			-1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
		},
		removeRenderableComponent: function(t) {
			-1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
		},
		prepareRenderableFrame: function(t) {
			this.checkLayerLimits(t)
		},
		checkTransparency: function() {
			this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
		},
		checkLayerLimits: function(t) {
			this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
		},
		renderRenderable: function() {
			var t, e = this.renderableComponents.length;
			for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
		},
		sourceRectAtTime: function() {
			return {
				top: 0,
				left: 0,
				width: 100,
				height: 100
			}
		},
		getLayerSize: function() {
			return 5 === this.data.ty ? {
				w: this.data.textData.width,
				h: this.data.textData.height
			} : {
				w: this.data.width,
				h: this.data.height
			}
		}
	}, L([Lt, function(t) {
		function e() {}
		return e.prototype = t, e
	}({
		initElement: function(t, e, s) {
			this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
		},
		hide: function() {
			this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
		},
		show: function() {
			this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
		},
		renderFrame: function() {
			this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
		},
		renderInnerContent: function() {},
		prepareFrame: function(t) {
			this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
		},
		destroy: function() {
			this.innerElem = null, this.destroyBaseElement()
		}
	})], Rt), zt.prototype.reset = function() {
		this.d = "", this._mdf = !1
	}, Nt.prototype.setAsAnimated = function() {
		this._isAnimated = !0
	}, L([S], Bt), L([S], qt), jt.prototype.initGradientData = function(t, e, s) {
		this.o = z.getProp(t, e.o, 0, .01, this), this.s = z.getProp(t, e.s, 1, null, this), this.e = z.getProp(t, e.e, 1, null, this), this.h = z.getProp(t, e.h || {
			k: 0
		}, 0, .01, this), this.a = z.getProp(t, e.a || {
			k: 0
		}, 0, q, this), this.g = new $(t, e.g, this), this.style = s, this.stops = [], this.setGradientData(s.pElem, e), this.setGradientOpacity(e, s), this._isAnimated = !!this._isAnimated
	}, jt.prototype.setGradientData = function(t, e) {
		var s = P(),
			i = F(1 === e.t ? "linearGradient" : "radialGradient");
		i.setAttribute("id", s), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
		var a, r, n, h = [];
		for (n = 4 * e.g.p, r = 0; r < n; r += 4) a = F("stop"), i.appendChild(a), h.push(a);
		t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(". / k_s.html ")"), this.gf = i, this.cst = h
	}, jt.prototype.setGradientOpacity = function(t, e) {
		if (this.g._hasOpacity && !this.g._collapsable) {
			var s, i, a, r = F("mask"),
				n = F("path");
			r.appendChild(n);
			var h = P(),
				o = P();
			r.setAttribute("id", o);
			var l = F(1 === t.t ? "linearGradient" : "radialGradient");
			l.setAttribute("id", h), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
			var p = this.stops;
			for (i = 4 * t.g.p; i < a; i += 2)(s = F("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(s), p.push(s);
			n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(". / k_h.html ")"), this.of = l, this.ms = r, this.ost = p, this.maskId = o, e.msElem = n
		}
	}, L([S], jt), L([jt, S], Gt);
	var Xt = function() {
		var g = new I,
			y = new I;

		function e(t, e, s) {
			(s || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (s || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
		}

		function s(t, e, s) {
			var i, a, r, n, h, o, l, p, f, m, d, c = e.styles.length,
				u = e.lvl;
			for (o = 0; o < c; o += 1) {
				if (n = e.sh._mdf || s, e.styles[o].lvl < u) {
					for (p = y.reset(), m = u - e.styles[o].lvl, d = e.transformers.length - 1; !n && 0 < m;) n = e.transformers[d].mProps._mdf || n, m--, d--;
					if (n)
						for (m = u - e.styles[o].lvl, d = e.transformers.length - 1; 0 < m;) f = e.transformers[d].mProps.v.props, p.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), m--, d--
				} else p = g;
				if (a = (l = e.sh.paths)._length, n) {
					for (r = "", i = 0; i < a; i += 1)(h = l.shapes[i]) && h._length && (r += st(h, h._length, h.c, p));
					e.caches[o] = r
				} else r = e.caches[o];
				e.styles[o].d += !0 === t.hd ? "" : r, e.styles[o]._mdf = n || e.styles[o]._mdf
			}
		}

		function i(t, e, s) {
			var i = e.style;
			(e.c._mdf || s) && i.pElem.setAttribute("fill", "rgb(" + c(e.c.v[0]) + "," + c(e.c.v[1]) + "," + c(e.c.v[2]) + ")"), (e.o._mdf || s) && i.pElem.setAttribute("fill-opacity", e.o.v)
		}

		function a(t, e, s) {
			r(t, e, s), n(t, e, s)
		}

		function r(t, e, s) {
			var i, a, r, n, h, o = e.gf,
				l = e.g._hasOpacity,
				p = e.s.v,
				f = e.e.v;
			if (e.o._mdf || s) {
				var m = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
				e.style.pElem.setAttribute(m, e.o.v)
			}
			if (e.s._mdf || s) {
				var d = 1 === t.t ? "x1" : "cx",
					c = "x1" === d ? "y1" : "cy";
				o.setAttribute(d, p[0]), o.setAttribute(c, p[1]), l && !e.g._collapsable && (e.of.setAttribute(d, p[0]), e.of.setAttribute(c, p[1]))
			}
			if (e.g._cmdf || s) {
				i = e.cst;
				var u = e.g.c;
				for (r = i.length, a = 0; a < r; a += 1)(n = i[a]).setAttribute("offset", u[4 * a] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * a + 1] + "," + u[4 * a + 2] + "," + u[4 * a + 3] + ")")
			}
			if (l && (e.g._omdf || s)) {
				var g = e.g.o;
				for (r = (i = e.g._collapsable ? e.cst : e.ost).length, a = 0; a < r; a += 1) n = i[a], e.g._collapsable || n.setAttribute("offset", g[2 * a] + "%"), n.setAttribute("stop-opacity", g[2 * a + 1])
			}
			if (1 === t.t)(e.e._mdf || s) && (o.setAttribute("x2", f[0]), o.setAttribute("y2", f[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", f[0]), e.of.setAttribute("y2", f[1])));
			else if ((e.s._mdf || e.e._mdf || s) && (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)), o.setAttribute("r", h), l && !e.g._collapsable && e.of.setAttribute("r", h)), e.e._mdf || e.h._mdf || e.a._mdf || s) {
				h || (h = Math.sqrt(Math.pow(p[0] - f[0], 2) + Math.pow(p[1] - f[1], 2)));
				var y = Math.atan2(f[1] - p[1], f[0] - p[0]),
					v = h * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
					b = Math.cos(y + e.a.v) * v + p[0],
					_ = Math.sin(y + e.a.v) * v + p[1];
				o.setAttribute("fx", b), o.setAttribute("fy", _), l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", _))
			}
		}

		function n(t, e, s) {
			var i = e.style,
				a = e.d;
			a && (a._mdf || s) && a.dashStr && (i.pElem.setAttribute("stroke-dasharray", a.dashStr), i.pElem.setAttribute("stroke-dashoffset", a.dashoffset[0])), e.c && (e.c._mdf || s) && i.pElem.setAttribute("stroke", "rgb(" + c(e.c.v[0]) + "," + c(e.c.v[1]) + "," + c(e.c.v[2]) + ")"), (e.o._mdf || s) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || s) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
		}
		return {
			createRenderFunction: function(t) {
				t.ty;
				switch (t.ty) {
					case "fl":
						return i;
					case "gf":
						return r;
					case "gs":
						return a;
					case "st":
						return n;
					case "sh":
					case "el":
					case "rc":
					case "sr":
						return s;
					case "tr":
						return e
				}
			}
		}
	}();

	function Yt() {}

	function Ht(t, e, s) {
		this.initFrame(), this.initBaseData(t, e, s), this.initFrame(), this.initTransform(t, e, s), this.initHierarchy()
	}

	function Kt() {}

	function Jt() {}

	function Ut() {}

	function Zt() {}

	function Qt(t, e, s) {
		this.assetData = e.getAssetData(t.refId), this.initElement(t, e, s), this.sourceRect = {
			top: 0,
			left: 0,
			width: this.assetData.w,
			height: this.assetData.h
		}
	}

	function $t(t, e, s) {
		this.initElement(t, e, s)
	}

	function te(t, e, s) {
		this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? E(this.layers.length) : [], this.initElement(t, e, s), this.tm = t.tm ? z.getProp(this, t.tm, 0, e.frameRate, this) : {
			_placeholder: !0
		}
	}

	function ee(t, e, s) {
		this.textSpans = [], this.renderType = "svg", this.initElement(t, e, s)
	}

	function se(t, e, s) {
		this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, s), this.prevViewData = []
	}

	function ie(t, e) {
		this.filterManager = e;
		var s = F("feColorMatrix");
		if (s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), s.setAttribute("result", "f1"), t.appendChild(s), (s = F("feColorMatrix")).setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", "f2"), t.appendChild(s), this.matrixFilter = s, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
			var i, a = F("feMerge");
			t.appendChild(a), (i = F("feMergeNode")).setAttribute("in", "SourceGraphic"), a.appendChild(i), (i = F("feMergeNode")).setAttribute("in", "f2"), a.appendChild(i)
		}
	}

	function ae(t, e) {
		this.filterManager = e;
		var s = F("feColorMatrix");
		s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(s), this.matrixFilter = s
	}

	function re(t, e) {
		t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
		var s = F("feGaussianBlur");
		t.appendChild(s), this.feGaussianBlur = s
	}

	function ne(t, e) {
		this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
	}

	function he(t, e) {
		this.filterManager = e;
		var s = F("feColorMatrix");
		s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), s.setAttribute("result", "f1"), t.appendChild(s);
		var i = F("feComponentTransfer");
		i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
		var a = F("feFuncR");
		a.setAttribute("type", "table"), i.appendChild(a), this.feFuncR = a;
		var r = F("feFuncG");
		r.setAttribute("type", "table"), i.appendChild(r), this.feFuncG = r;
		var n = F("feFuncB");
		n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n
	}

	function oe(t, e) {
		this.filterManager = e;
		var s = this.filterManager.effectElements,
			i = F("feComponentTransfer");
		(s[10].p.k || 0 !== s[10].p.v || s[11].p.k || 1 !== s[11].p.v || s[12].p.k || 1 !== s[12].p.v || s[13].p.k || 0 !== s[13].p.v || s[14].p.k || 1 !== s[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (s[17].p.k || 0 !== s[17].p.v || s[18].p.k || 1 !== s[18].p.v || s[19].p.k || 1 !== s[19].p.v || s[20].p.k || 0 !== s[20].p.v || s[21].p.k || 1 !== s[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (s[24].p.k || 0 !== s[24].p.v || s[25].p.k || 1 !== s[25].p.v || s[26].p.k || 1 !== s[26].p.v || s[27].p.k || 0 !== s[27].p.v || s[28].p.k || 1 !== s[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (s[31].p.k || 0 !== s[31].p.v || s[32].p.k || 1 !== s[32].p.v || s[33].p.k || 1 !== s[33].p.v || s[34].p.k || 0 !== s[34].p.v || s[35].p.k || 1 !== s[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = F("feComponentTransfer")), (s[3].p.k || 0 !== s[3].p.v || s[4].p.k || 1 !== s[4].p.v || s[5].p.k || 1 !== s[5].p.v || s[6].p.k || 0 !== s[6].p.v || s[7].p.k || 1 !== s[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
	}

	function le(t, e) {
		t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
		var s = F("feGaussianBlur");
		s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", "drop_shadow_1"), s.setAttribute("stdDeviation", "0"), this.feGaussianBlur = s, t.appendChild(s);
		var i = F("feOffset");
		i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i);
		var a = F("feFlood");
		a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
		var r = F("feComposite");
		r.setAttribute("in", "drop_shadow_3"), r.setAttribute("in2", "drop_shadow_2"), r.setAttribute("operator", "in"), r.setAttribute("result", "drop_shadow_4"), t.appendChild(r);
		var n, h = F("feMerge");
		t.appendChild(h), n = F("feMergeNode"), h.appendChild(n), (n = F("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = n, this.feMerge = h, this.originalNodeAdded = !1, h.appendChild(n)
	}
	Yt.prototype = {
		checkMasks: function() {
			if (!this.data.hasMask) return !1;
			for (var t = 0, e = this.data.masksProperties.length; t < e;) {
				if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
				t += 1
			}
			return !1
		},
		initExpressions: function() {
			this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
			var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
			this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
		},
		setBlendMode: function() {
			var t = T(this.data.bm);
			(this.baseElement || this.layerElement).style["mix-blend-mode"] = t
		},
		initBaseData: function(t, e, s) {
			this.globalData = e, this.comp = s, this.data = t, this.layerId = P(), this.data.sr || (this.data.sr = 1), this.effectsManager = new ue(this.data, this, this.dynamicProperties)
		},
		getType: function() {
			return this.type
		},
		sourceRectAtTime: function() {}
	}, Ht.prototype.prepareFrame = function(t) {
		this.prepareProperties(t, !0)
	}, Ht.prototype.renderFrame = function() {}, Ht.prototype.getBaseElement = function() {
		return null
	}, Ht.prototype.destroy = function() {}, Ht.prototype.sourceRectAtTime = function() {}, Ht.prototype.hide = function() {}, L([Yt, It, wt, Tt], Ht), Kt.prototype = {
		initRendererElement: function() {
			this.layerElement = F("g")
		},
		createContainerElements: function() {
			this.matteElement = F("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
			var t, e, s, i = null;
			if (this.data.td) {
				if (3 == this.data.td || 1 == this.data.td) {
					var a = F("mask");
					a.setAttribute("id", this.layerId), a.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), a.appendChild(this.layerElement), i = a, this.globalData.defs.appendChild(a), at.maskType || 1 != this.data.td || (a.setAttribute("mask-type", "luminance"), t = P(), e = rt.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(rt.createAlphaToLuminanceFilter()), (s = F("g")).appendChild(this.layerElement), i = s, a.appendChild(s), s.setAttribute("filter", "url(". / k_t.html ")"))
				} else if (2 == this.data.td) {
					var r = F("mask");
					r.setAttribute("id", this.layerId), r.setAttribute("mask-type", "alpha");
					var n = F("g");
					r.appendChild(n), t = P(), e = rt.createFilter(t);
					var h = F("feComponentTransfer");
					h.setAttribute("in", "SourceGraphic"), e.appendChild(h);
					var o = F("feFuncA");
					o.setAttribute("type", "table"), o.setAttribute("tableValues", "1.0 0.0"), h.appendChild(o), this.globalData.defs.appendChild(e);
					var l = F("rect");
					l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(". / k_t.html ")"), n.appendChild(l), n.appendChild(this.layerElement), i = n, at.maskType || (r.setAttribute("mask-type", "luminance"), e.appendChild(rt.createAlphaToLuminanceFilter()), s = F("g"), n.appendChild(l), s.appendChild(this.layerElement), i = s, n.appendChild(s)), this.globalData.defs.appendChild(r)
				}
			} else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
			if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
				var p = F("clipPath"),
					f = F("path");
				f.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
				var m = P();
				if (p.setAttribute("id", m), p.appendChild(f), this.globalData.defs.appendChild(p), this.checkMasks()) {
					var d = F("g");
					d.setAttribute("clip-path", "url(". / k_m.html ")"), d.appendChild(this.layerElement), this.transformedElement = d, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
				} else this.layerElement.setAttribute("clip-path", "url(". / k_m.html ")")
			}
			0 !== this.data.bm && this.setBlendMode()
		},
		renderElement: function() {
			this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
		},
		destroyBaseElement: function() {
			this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
		},
		getBaseElement: function() {
			return this.data.hd ? null : this.baseElement
		},
		createRenderableComponents: function() {
			this.maskManager = new St(this.data, this, this.globalData), this.renderableEffectsManager = new me(this)
		},
		setMatte: function(t) {
			this.matteElement && this.matteElement.setAttribute("mask", "url(". / k_t.html ")")
		}
	}, Jt.prototype = {
		addShapeToModifiers: function(t) {
			var e, s = this.shapeModifiers.length;
			for (e = 0; e < s; e += 1) this.shapeModifiers[e].addShape(t)
		},
		isShapeInAnimatedModifiers: function(t) {
			for (var e = this.shapeModifiers.length; 0 < e;)
				if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
			return !1
		},
		renderModifiers: function() {
			if (this.shapeModifiers.length) {
				var t, e = this.shapes.length;
				for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
				for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
			}
		},
		lcEnum: {
			1: "butt",
			2: "round",
			3: "square"
		},
		ljEnum: {
			1: "miter",
			2: "round",
			3: "bevel"
		},
		searchProcessedElement: function(t) {
			for (var e = this.processedElements, s = 0, i = e.length; s < i;) {
				if (e[s].elem === t) return e[s].pos;
				s += 1
			}
			return 0
		},
		addProcessedElement: function(t, e) {
			for (var s = this.processedElements, i = s.length; i;)
				if (s[i -= 1].elem === t) return void(s[i].pos = e);
			s.push(new Vt(t, e))
		},
		prepareFrame: function(t) {
			this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
		}
	}, Ut.prototype.initElement = function(t, e, s) {
		this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, s), this.textProperty = new ct(this, t.t, this.dynamicProperties), this.textAnimator = new ht(t.t, this.renderType, this), this.initTransform(t, e, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
	}, Ut.prototype.prepareFrame = function(t) {
		this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
	}, Ut.prototype.createPathShape = function(t, e) {
		var s, i, a = e.length,
			r = "";
		for (s = 0; s < a; s += 1) i = e[s].ks.k, r += st(i, i.i.length, !0, t);
		return r
	}, Ut.prototype.updateDocumentData = function(t, e) {
		this.textProperty.updateDocumentData(t, e)
	}, Ut.prototype.canResizeFont = function(t) {
		this.textProperty.canResizeFont(t)
	}, Ut.prototype.setMinimumFontSize = function(t) {
		this.textProperty.setMinimumFontSize(t)
	}, Ut.prototype.applyTextPropertiesToMatrix = function(t, e, s, i, a) {
		switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
			case 1:
				e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]), 0, 0);
				break;
			case 2:
				e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[s]) / 2, 0, 0)
		}
		e.translate(i, a, 0)
	}, Ut.prototype.buildColor = function(t) {
		return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
	}, Ut.prototype.emptyProp = new dt, Ut.prototype.destroy = function() {}, L([Yt, It, wt, Tt, Rt], Zt), Zt.prototype.initElement = function(t, e, s) {
		this.initFrame(), this.initBaseData(t, e, s), this.initTransform(t, e, s), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
	}, Zt.prototype.prepareFrame = function(t) {
		if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
			if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
			else {
				var e = this.tm.v;
				e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
			}
			var s, i = this.elements.length;
			for (this.completeLayers || this.checkLayers(this.renderedFrame), s = i - 1; 0 <= s; s -= 1)(this.completeLayers || this.elements[s]) && (this.elements[s].prepareFrame(this.renderedFrame - this.layers[s].st), this.elements[s]._mdf && (this._mdf = !0))
		}
	}, Zt.prototype.renderInnerContent = function() {
		var t, e = this.layers.length;
		for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
	}, Zt.prototype.setElements = function(t) {
		this.elements = t
	}, Zt.prototype.getElements = function() {
		return this.elements
	}, Zt.prototype.destroyElements = function() {
		var t, e = this.layers.length;
		for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
	}, Zt.prototype.destroy = function() {
		this.destroyElements(), this.destroyBaseElement()
	}, L([Yt, It, Kt, wt, Tt, Rt], Qt), Qt.prototype.createContent = function() {
		var t = this.globalData.getAssetsPath(this.assetData);
		this.innerElem = F("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
	}, Qt.prototype.sourceRectAtTime = function() {
		return this.sourceRect
	}, L([Qt], $t), $t.prototype.createContent = function() {
		var t = F("rect");
		t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
	}, L([Dt, Zt, Kt], te), L([Yt, It, Kt, wt, Tt, Rt, Ut], ee), ee.prototype.createContent = function() {
		this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = F("text"))
	}, ee.prototype.buildTextContents = function(t) {
		for (var e = 0, s = t.length, i = [], a = ""; e < s;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(a), a = "") : a += t[e], e += 1;
		return i.push(a), i
	}, ee.prototype.buildNewText = function() {
		var t, e, s = this.textProperty.currentData;
		this.renderedLetters = E(s ? s.l.length : 0), s.fc ? this.layerElement.setAttribute("fill", this.buildColor(s.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), s.sc && (this.layerElement.setAttribute("stroke", this.buildColor(s.sc)), this.layerElement.setAttribute("stroke-width", s.sw)), this.layerElement.setAttribute("font-size", s.finalSize);
		var i = this.globalData.fontManager.getFontByName(s.f);
		if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
		else {
			this.layerElement.setAttribute("font-family", i.fFamily);
			var a = s.fWeight,
				r = s.fStyle;
			this.layerElement.setAttribute("font-style", r), this.layerElement.setAttribute("font-weight", a)
		}
		this.layerElement.setAttribute("aria-label", s.t);
		var n, h = s.l || [],
			o = !!this.globalData.fontManager.chars;
		e = h.length;
		var l, p = this.mHelper,
			f = "",
			m = this.data.singleShape,
			d = 0,
			c = 0,
			u = !0,
			g = s.tr / 1e3 * s.finalSize;
		if (!m || o || s.sz) {
			var y, v, b = this.textSpans.length;
			for (t = 0; t < e; t += 1) o && m && 0 !== t || (n = t < b ? this.textSpans[t] : F(o ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(s.finalSize / 100, s.finalSize / 100), m && (h[t].n && (d = -g, c += s.yOffset, c += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(s, p, h[t].line, d, c), d += h[t].l || 0, d += g), o ? (l = (y = (v = this.globalData.fontManager.getCharData(s.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(s.f).fFamily)) && v.data || {}).shapes ? y.shapes[0].it : [], m ? f += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (m && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = h[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
			m && n && n.setAttribute("d", f)
		} else {
			var _ = this.textContainer,
				A = "start";
			switch (s.j) {
				case 1:
					A = "end";
					break;
				case 2:
					A = "middle"
			}
			_.setAttribute("text-anchor", A), _.setAttribute("letter-spacing", g);
			var k = this.buildTextContents(s.finalText);
			for (e = k.length, c = s.ps ? s.ps[1] + s.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || F("tspan")).textContent = k[t], n.setAttribute("x", 0), n.setAttribute("y", c), n.style.display = "inherit", _.appendChild(n), this.textSpans[t] = n, c += s.finalLineHeight;
			this.layerElement.appendChild(_)
		}
		for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
		this._sizeChanged = !0
	}, ee.prototype.sourceRectAtTime = function(t) {
		if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
			this._sizeChanged = !1;
			var e = this.layerElement.getBBox();
			this.bbox = {
				top: e.y,
				left: e.x,
				width: e.width,
				height: e.height
			}
		}
		return this.bbox
	}, ee.prototype.renderInnerContent = function() {
		if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
			var t, e;
			this._sizeChanged = !0;
			var s, i, a = this.textAnimator.renderedLetters,
				r = this.textProperty.currentData.l;
			for (e = r.length, t = 0; t < e; t += 1) r[t].n || (s = a[t], i = this.textSpans[t], s._mdf.m && i.setAttribute("transform", s.m), s._mdf.o && i.setAttribute("opacity", s.o), s._mdf.sw && i.setAttribute("stroke-width", s.sw), s._mdf.sc && i.setAttribute("stroke", s.sc), s._mdf.fc && i.setAttribute("fill", s.fc))
		}
	}, L([Yt, It, Kt, Jt, wt, Tt, Rt], se), se.prototype.initSecondaryElement = function() {}, se.prototype.identityMatrix = new I, se.prototype.buildExpressionInterface = function() {}, se.prototype.createContent = function() {
		this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
	}, se.prototype.filterUniqueShapes = function() {
		var t, e, s, i, a = this.shapes.length,
			r = this.stylesList.length,
			n = [],
			h = !1;
		for (s = 0; s < r; s += 1) {
			for (i = this.stylesList[s], h = !1, t = n.length = 0; t < a; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), h = e._isAnimated || h);
			1 < n.length && h && this.setShapesAsAnimated(n)
		}
	}, se.prototype.setShapesAsAnimated = function(t) {
		var e, s = t.length;
		for (e = 0; e < s; e += 1) t[e].setAsAnimated()
	}, se.prototype.createStyleElement = function(t, e) {
		var s, i = new zt(t, e),
			a = i.pElem;
		if ("st" === t.ty) s = new Bt(this, t, i);
		else if ("fl" === t.ty) s = new qt(this, t, i);
		else if ("gf" === t.ty || "gs" === t.ty) {
			s = new("gf" === t.ty ? jt : Gt)(this, t, i), this.globalData.defs.appendChild(s.gf), s.maskId && (this.globalData.defs.appendChild(s.ms), this.globalData.defs.appendChild(s.of), a.setAttribute("mask", "url(". / k_s.maskId.html ")"))
		}
		return "st" !== t.ty && "gs" !== t.ty || (a.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), a.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), a.setAttribute("fill-opacity", "0"), 1 === t.lj && a.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = T(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, s), s
	}, se.prototype.createGroupElement = function(t) {
		var e = new Wt;
		return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = T(t.bm)), e
	}, se.prototype.createTransformElement = function(t, e) {
		var s = N.getTransformProperty(this, t, this),
			i = new Ot(s, s.o, e);
		return this.addToAnimatedContents(t, i), i
	}, se.prototype.createShapeElement = function(t, e, s) {
		var i = 4;
		"rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
		var a = new Nt(e, s, X.getShapeProp(this, t, i, this));
		return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a
	}, se.prototype.addToAnimatedContents = function(t, e) {
		for (var s = 0, i = this.animatedContents.length; s < i;) {
			if (this.animatedContents[s].element === e) return;
			s += 1
		}
		this.animatedContents.push({
			fn: Xt.createRenderFunction(t),
			element: e,
			data: t
		})
	}, se.prototype.setElementStyles = function(t) {
		var e, s = t.styles,
			i = this.stylesList.length;
		for (e = 0; e < i; e += 1) this.stylesList[e].closed || s.push(this.stylesList[e])
	}, se.prototype.reloadShapes = function() {
		this._isFirstFrame = !0;
		var t, e = this.itemsData.length;
		for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
		for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
		this.renderModifiers()
	}, se.prototype.searchShapes = function(t, e, s, i, a, r, n) {
		var h, o, l, p, f, m, d = [].concat(r),
			c = t.length - 1,
			u = [],
			g = [];
		for (h = c; 0 <= h; h -= 1) {
			if ((m = this.searchProcessedElement(t[h])) ? e[h] = s[m - 1] : t[h]._render = n, "fl" == t[h].ty || "st" == t[h].ty || "gf" == t[h].ty || "gs" == t[h].ty) m ? e[h].style.closed = !1 : e[h] = this.createStyleElement(t[h], a), t[h]._render && i.appendChild(e[h].style.pElem), u.push(e[h].style);
			else if ("gr" == t[h].ty) {
				if (m)
					for (l = e[h].it.length, o = 0; o < l; o += 1) e[h].prevViewData[o] = e[h].it[o];
				else e[h] = this.createGroupElement(t[h]);
				this.searchShapes(t[h].it, e[h].it, e[h].prevViewData, e[h].gr, a + 1, d, n), t[h]._render && i.appendChild(e[h].gr)
			} else "tr" == t[h].ty ? (m || (e[h] = this.createTransformElement(t[h], i)), p = e[h].transform, d.push(p)) : "sh" == t[h].ty || "rc" == t[h].ty || "el" == t[h].ty || "sr" == t[h].ty ? (m || (e[h] = this.createShapeElement(t[h], d, a)), this.setElementStyles(e[h])) : "tm" == t[h].ty || "rd" == t[h].ty || "ms" == t[h].ty ? (m ? (f = e[h]).closed = !1 : ((f = Y.getModifier(t[h].ty)).init(this, t[h]), e[h] = f, this.shapeModifiers.push(f)), g.push(f)) : "rp" == t[h].ty && (m ? (f = e[h]).closed = !0 : (f = Y.getModifier(t[h].ty), (e[h] = f).init(this, t, h, e), this.shapeModifiers.push(f), n = !1), g.push(f));
			this.addProcessedElement(t[h], h + 1)
		}
		for (c = u.length, h = 0; h < c; h += 1) u[h].closed = !0;
		for (c = g.length, h = 0; h < c; h += 1) g[h].closed = !0
	}, se.prototype.renderInnerContent = function() {
		this.renderModifiers();
		var t, e = this.stylesList.length;
		for (t = 0; t < e; t += 1) this.stylesList[t].reset();
		for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
	}, se.prototype.renderShape = function() {
		var t, e, s = this.animatedContents.length;
		for (t = 0; t < s; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
	}, se.prototype.destroy = function() {
		this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
	}, ie.prototype.renderFrame = function(t) {
		if (t || this.filterManager._mdf) {
			var e = this.filterManager.effectElements[0].p.v,
				s = this.filterManager.effectElements[1].p.v,
				i = this.filterManager.effectElements[2].p.v / 100;
			this.matrixFilter.setAttribute("values", s[0] - e[0] + " 0 0 0 " + e[0] + " " + (s[1] - e[1]) + " 0 0 0 " + e[1] + " " + (s[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
		}
	}, ae.prototype.renderFrame = function(t) {
		if (t || this.filterManager._mdf) {
			var e = this.filterManager.effectElements[2].p.v,
				s = this.filterManager.effectElements[6].p.v;
			this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + s + " 0")
		}
	}, re.prototype.renderFrame = function(t) {
		if (t || this.filterManager._mdf) {
			var e = .3 * this.filterManager.effectElements[0].p.v,
				s = this.filterManager.effectElements[1].p.v,
				i = 3 == s ? 0 : e,
				a = 2 == s ? 0 : e;
			this.feGaussianBlur.setAttribute("stdDeviation", i + " " + a);
			var r = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
			this.feGaussianBlur.setAttribute("edgeMode", r)
		}
	}, ne.prototype.initialize = function() {
		var t, e, s, i, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
		for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, s = 0) : i = (s = this.filterManager.effectElements[0].p.v - 1) + 1, (e = F("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); s < i; s += 1) t = F("path"), e.appendChild(t), this.paths.push({
			p: t,
			m: s
		});
		if (3 === this.filterManager.effectElements[10].p.v) {
			var r = F("mask"),
				n = P();
			r.setAttribute("id", n), r.setAttribute("mask-type", "alpha"), r.appendChild(e), this.elem.globalData.defs.appendChild(r);
			var h = F("g");
			for (h.setAttribute("mask", "url(". / k_n.html ")"); a[0];) h.appendChild(a[0]);
			this.elem.layerElement.appendChild(h), this.masker = r, e.setAttribute("stroke", "#fff")
		} else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
			if (2 === this.filterManager.effectElements[10].p.v)
				for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length;) this.elem.layerElement.removeChild(a[0]);
			this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
		}
		this.initialized = !0, this.pathMasker = e
	}, ne.prototype.renderFrame = function(t) {
		this.initialized || this.initialize();
		var e, s, i, a = this.paths.length;
		for (e = 0; e < a; e += 1)
			if (-1 !== this.paths[e].m && (s = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || s.prop._mdf) && i.setAttribute("d", s.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || s.prop._mdf)) {
				var r;
				if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
					var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
						h = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
						o = i.getTotalLength();
					r = "0 0 0 " + o * n + " ";
					var l, p = o * (h - n),
						f = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
						m = Math.floor(p / f);
					for (l = 0; l < m; l += 1) r += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
					r += "0 " + 10 * o + " 0 0"
				} else r = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
				i.setAttribute("stroke-dasharray", r)
			} if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
			var d = this.filterManager.effectElements[3].p.v;
			this.pathMasker.setAttribute("stroke", "rgb(" + c(255 * d[0]) + "," + c(255 * d[1]) + "," + c(255 * d[2]) + ")")
		}
	}, he.prototype.renderFrame = function(t) {
		if (t || this.filterManager._mdf) {
			var e = this.filterManager.effectElements[0].p.v,
				s = this.filterManager.effectElements[1].p.v,
				i = this.filterManager.effectElements[2].p.v,
				a = i[0] + " " + s[0] + " " + e[0],
				r = i[1] + " " + s[1] + " " + e[1],
				n = i[2] + " " + s[2] + " " + e[2];
			this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", r), this.feFuncB.setAttribute("tableValues", n)
		}
	}, oe.prototype.createFeFunc = function(t, e) {
		var s = F(t);
		return s.setAttribute("type", "table"), e.appendChild(s), s
	}, oe.prototype.getTableValue = function(t, e, s, i, a) {
		for (var r, n, h = 0, o = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
				length: 256
			}), f = 0, m = a - i, d = e - t; h <= 256;) n = (r = h / 256) <= o ? d < 0 ? a : i : l <= r ? d < 0 ? i : a : i + m * Math.pow((r - t) / d, 1 / s), p[f++] = n, h += 256 / 255;
		return p.join(" ")
	}, oe.prototype.renderFrame = function(t) {
		if (t || this.filterManager._mdf) {
			var e, s = this.filterManager.effectElements;
			this.feFuncRComposed && (t || s[3].p._mdf || s[4].p._mdf || s[5].p._mdf || s[6].p._mdf || s[7].p._mdf) && (e = this.getTableValue(s[3].p.v, s[4].p.v, s[5].p.v, s[6].p.v, s[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || s[10].p._mdf || s[11].p._mdf || s[12].p._mdf || s[13].p._mdf || s[14].p._mdf) && (e = this.getTableValue(s[10].p.v, s[11].p.v, s[12].p.v, s[13].p.v, s[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || s[17].p._mdf || s[18].p._mdf || s[19].p._mdf || s[20].p._mdf || s[21].p._mdf) && (e = this.getTableValue(s[17].p.v, s[18].p.v, s[19].p.v, s[20].p.v, s[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || s[24].p._mdf || s[25].p._mdf || s[26].p._mdf || s[27].p._mdf || s[28].p._mdf) && (e = this.getTableValue(s[24].p.v, s[25].p.v, s[26].p.v, s[27].p.v, s[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || s[31].p._mdf || s[32].p._mdf || s[33].p._mdf || s[34].p._mdf || s[35].p._mdf) && (e = this.getTableValue(s[31].p.v, s[32].p.v, s[33].p.v, s[34].p.v, s[35].p.v), this.feFuncA.setAttribute("tableValues", e))
		}
	}, le.prototype.renderFrame = function(t) {
		if (t || this.filterManager._mdf) {
			if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
				var e = this.filterManager.effectElements[0].p.v;
				this.feFlood.setAttribute("flood-color", C(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
			}
			if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
				var s = this.filterManager.effectElements[3].p.v,
					i = (this.filterManager.effectElements[2].p.v - 90) * q,
					a = s * Math.cos(i),
					r = s * Math.sin(i);
				this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", r)
			}
		}
	};
	var pe = [];

	function fe(t, e, s) {
		this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = s).matteElement = F("g"), s.matteElement.appendChild(s.layerElement), s.matteElement.appendChild(s.transformedElement), s.baseElement = s.matteElement
	}

	function me(t) {
		var e, s, i = t.data.ef ? t.data.ef.length : 0,
			a = P(),
			r = rt.createFilter(a),
			n = 0;
		for (this.filters = [], e = 0; e < i; e += 1) s = null, 20 === t.data.ef[e].ty ? (n += 1, s = new ie(r, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, s = new ae(r, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? s = new ne(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, s = new he(r, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, s = new oe(r, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, s = new le(r, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? s = new fe(r, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, s = new re(r, t.effectsManager.effectElements[e])), s && this.filters.push(s);
		n && (t.globalData.defs.appendChild(r), t.layerElement.setAttribute("filter", "url(". / k_a.html ")")), this.filters.length && t.addRenderableComponent(this)
	}
	fe.prototype.findSymbol = function(t) {
		for (var e = 0, s = pe.length; e < s;) {
			if (pe[e] === t) return pe[e];
			e += 1
		}
		return null
	}, fe.prototype.replaceInParent = function(t, e) {
		var s = t.layerElement.parentNode;
		if (s) {
			for (var i, a = s.children, r = 0, n = a.length; r < n && a[r] !== t.layerElement;) r += 1;
			r <= n - 2 && (i = a[r + 1]);
			var h = F("use");
			h.setAttribute("href", "#" + e), i ? s.insertBefore(h, i) : s.appendChild(h)
		}
	}, fe.prototype.setElementAsMask = function(t, e) {
		if (!this.findSymbol(e)) {
			var s = P(),
				i = F("mask");
			i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), pe.push(e);
			var a = t.globalData.defs;
			a.appendChild(i);
			var r = F("symbol");
			r.setAttribute("id", s), this.replaceInParent(e, s), r.appendChild(e.layerElement), a.appendChild(r);
			var n = F("use");
			n.setAttribute("href", "#" + s), i.appendChild(n), e.data.hd = !1, e.show()
		}
		t.setMatte(e.layerId)
	}, fe.prototype.initialize = function() {
		for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, s = 0, i = e.length; s < i;) e[s] && e[s].data.ind === t && this.setElementAsMask(this.elem, e[s]), s += 1;
		this.initialized = !0
	}, fe.prototype.renderFrame = function() {
		this.initialized || this.initialize()
	}, me.prototype.renderFrame = function(t) {
		var e, s = this.filters.length;
		for (e = 0; e < s; e += 1) this.filters[e].renderFrame(t)
	};
	var de = function() {
			var t = {},
				a = [],
				i = 0,
				r = 0,
				n = 0,
				h = !0,
				o = !1;

			function s(t) {
				for (var e = 0, s = t.target; e < r;) a[e].animation === s && (a.splice(e, 1), e -= 1, r -= 1, s.isPaused || f()), e += 1
			}

			function l(t, e) {
				if (!t) return null;
				for (var s = 0; s < r;) {
					if (a[s].elem == t && null !== a[s].elem) return a[s].animation;
					s += 1
				}
				var i = new ce;
				return m(i, t), i.setData(t, e), i
			}

			function p() {
				n += 1, c()
			}

			function f() {
				n -= 1
			}

			function m(t, e) {
				t.addEventListener("destroy", s), t.addEventListener("_active", p), t.addEventListener("_idle", f), a.push({
					elem: e,
					animation: t
				}), r += 1
			}

			function d(t) {
				var e, s = t - i;
				for (e = 0; e < r; e += 1) a[e].animation.advanceTime(s);
				i = t, n && !o ? u.requestAnimationFrame(d) : h = !0
			}

			function e(t) {
				i = t, u.requestAnimationFrame(d)
			}

			function c() {
				!o && n && h && (u.requestAnimationFrame(e), h = !1)
			}
			return t.registerAnimation = l, t.loadAnimation = function(t) {
				var e = new ce;
				return m(e, null), e.setParams(t), e
			}, t.setSpeed = function(t, e) {
				var s;
				for (s = 0; s < r; s += 1) a[s].animation.setSpeed(t, e)
			}, t.setDirection = function(t, e) {
				var s;
				for (s = 0; s < r; s += 1) a[s].animation.setDirection(t, e)
			}, t.play = function(t) {
				var e;
				for (e = 0; e < r; e += 1) a[e].animation.play(t)
			}, t.pause = function(t) {
				var e;
				for (e = 0; e < r; e += 1) a[e].animation.pause(t)
			}, t.stop = function(t) {
				var e;
				for (e = 0; e < r; e += 1) a[e].animation.stop(t)
			}, t.togglePause = function(t) {
				var e;
				for (e = 0; e < r; e += 1) a[e].animation.togglePause(t)
			}, t.searchAnimations = function(t, e, s) {
				var i, a = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
					r = a.length;
				for (i = 0; i < r; i += 1) s && a[i].setAttribute("data-bm-type", s), l(a[i], t);
				if (e && 0 === r) {
					s || (s = "svg");
					var n = document.getElementsByTagName("body")[0];
					n.innerHTML = "";
					var h = D("div");
					h.style.width = "100%", h.style.height = "100%", h.setAttribute("data-bm-type", s), n.appendChild(h), l(h, t)
				}
			}, t.resize = function() {
				var t;
				for (t = 0; t < r; t += 1) a[t].animation.resize()
			}, t.goToAndStop = function(t, e, s) {
				var i;
				for (i = 0; i < r; i += 1) a[i].animation.goToAndStop(t, e, s)
			}, t.destroy = function(t) {
				var e;
				for (e = r - 1; 0 <= e; e -= 1) a[e].animation.destroy(t)
			}, t.freeze = function() {
				o = !0
			}, t.unfreeze = function() {
				o = !1, c()
			}, t.getRegisteredAnimations = function() {
				var t, e = a.length,
					s = [];
				for (t = 0; t < e; t += 1) s.push(a[t].animation);
				return s
			}, t
		}(),
		ce = function() {
			this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = P(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = i, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = {}, this.imagePreloader = new it
		};

	function ue() {}
	L([x], ce), ce.prototype.setParams = function(t) {
		t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
		var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
		switch (e) {
			case "canvas":
				this.renderer = new CanvasRenderer(this, t.rendererSettings);
				break;
			case "svg":
				this.renderer = new Dt(this, t.rendererSettings);
				break;
			default:
				this.renderer = new HybridRenderer(this, t.rendererSettings)
		}
		this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), nt.load(t.path, this.configAnimation.bind(this), function() {
			this.trigger("data_failed")
		}.bind(this)))
	}, ce.prototype.setData = function(t, e) {
		var s = {
				wrapper: t,
				animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
			},
			i = t.attributes;
		s.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", s.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
		var a = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
		"" === a || (s.loop = "false" !== a && ("true" === a || parseInt(a)));
		var r = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
		s.autoplay = "false" !== r, s.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (s.prerender = !1), this.setParams(s)
	}, ce.prototype.includeLayers = function(t) {
		t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
		var e, s, i = this.animationData.layers,
			a = i.length,
			r = t.layers,
			n = r.length;
		for (s = 0; s < n; s += 1)
			for (e = 0; e < a;) {
				if (i[e].id == r[s].id) {
					i[e] = r[s];
					break
				}
				e += 1
			}
		if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
			for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
		this.animationData.__complete = !1, R.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), h && h.initExpressions(this), this.loadNextSegment()
	}, ce.prototype.loadNextSegment = function() {
		var t = this.animationData.segments;
		if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
		var e = t.shift();
		this.timeCompleted = e.time * this.frameRate;
		var s = this.path + this.fileName + "_" + this.segmentPos + ".json";
		this.segmentPos += 1, nt.load(s, this.includeLayers.bind(this), function() {
			this.trigger("data_failed")
		}.bind(this))
	}, ce.prototype.loadSegments = function() {
		this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
	}, ce.prototype.imagesLoaded = function() {
		this.trigger("loaded_images"), this.checkLoaded()
	}, ce.prototype.preloadImages = function() {
		this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
	}, ce.prototype.configAnimation = function(t) {
		if (this.renderer) try {
			this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()
		} catch (t) {
			this.triggerConfigError(t)
		}
	}, ce.prototype.waitForFontsLoaded = function() {
		this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
	}, ce.prototype.checkLoaded = function() {
		this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, R.completeData(this.animationData, this.renderer.globalData.fontManager), h && h.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
			this.trigger("DOMLoaded")
		}.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
	}, ce.prototype.resize = function() {
		this.renderer.updateContainerSize()
	}, ce.prototype.setSubframe = function(t) {
		this.subframeEnabled = !!t
	}, ce.prototype.gotoFrame = function() {
		this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
	}, ce.prototype.renderFrame = function() {
		if (!1 !== this.isLoaded) try {
			this.renderer.renderFrame(this.currentFrame + this.firstFrame)
		} catch (t) {
			this.triggerRenderFrameError(t)
		}
	}, ce.prototype.play = function(t) {
		t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
	}, ce.prototype.pause = function(t) {
		t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
	}, ce.prototype.togglePause = function(t) {
		t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
	}, ce.prototype.stop = function(t) {
		t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
	}, ce.prototype.goToAndStop = function(t, e, s) {
		s && this.name != s || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
	}, ce.prototype.goToAndPlay = function(t, e, s) {
		this.goToAndStop(t, e, s), this.play()
	}, ce.prototype.advanceTime = function(t) {
		if (!0 !== this.isPaused && !1 !== this.isLoaded) {
			var e = this.currentRawFrame + t * this.frameModifier,
				s = !1;
			e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (s = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (s = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), s && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
		}
	}, ce.prototype.adjustSegment = function(t, e) {
		this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
	}, ce.prototype.setSegment = function(t, e) {
		var s = -1;
		this.isPaused && (this.currentRawFrame + this.firstFrame < t ? s = t : this.currentRawFrame + this.firstFrame > e && (s = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== s && this.goToAndStop(s, !0)
	}, ce.prototype.playSegments = function(t, e) {
		if (e && (this.segments.length = 0), "object" == typeof t[0]) {
			var s, i = t.length;
			for (s = 0; s < i; s += 1) this.segments.push(t[s])
		} else this.segments.push(t);
		this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
	}, ce.prototype.resetSegments = function(t) {
		this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
	}, ce.prototype.checkSegments = function(t) {
		return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
	}, ce.prototype.destroy = function(t) {
		t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
	}, ce.prototype.setCurrentRawFrameValue = function(t) {
		this.currentRawFrame = t, this.gotoFrame()
	}, ce.prototype.setSpeed = function(t) {
		this.playSpeed = t, this.updaFrameModifier()
	}, ce.prototype.setDirection = function(t) {
		this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
	}, ce.prototype.updaFrameModifier = function() {
		this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
	}, ce.prototype.getPath = function() {
		return this.path
	}, ce.prototype.getAssetsPath = function(t) {
		var e = "";
		if (t.e) e = t.p;
		else if (this.assetsPath) {
			var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), e = this.assetsPath + s
		} else e = this.path, e += t.u ? t.u : "", e += t.p;
		return e
	}, ce.prototype.getAssetData = function(t) {
		for (var e = 0, s = this.assets.length; e < s;) {
			if (t == this.assets[e].id) return this.assets[e];
			e += 1
		}
	}, ce.prototype.hide = function() {
		this.renderer.hide()
	}, ce.prototype.show = function() {
		this.renderer.show()
	}, ce.prototype.getDuration = function(t) {
		return t ? this.totalFrames : this.totalFrames / this.frameRate
	}, ce.prototype.trigger = function(t) {
		if (this._cbs && this._cbs[t]) switch (t) {
			case "enterFrame":
				this.triggerEvent(t, new n(t, this.currentFrame, this.totalFrames, this.frameModifier));
				break;
			case "loopComplete":
				this.triggerEvent(t, new l(t, this.loop, this.playCount, this.frameMult));
				break;
			case "complete":
				this.triggerEvent(t, new o(t, this.frameMult));
				break;
			case "segmentStart":
				this.triggerEvent(t, new p(t, this.firstFrame, this.totalFrames));
				break;
			case "destroy":
				this.triggerEvent(t, new f(t, this));
				break;
			default:
				this.triggerEvent(t)
		}
		"enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new n(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new l(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new o(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new p(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new f(t, this))
	}, ce.prototype.triggerRenderFrameError = function(t) {
		var e = new d(t, this.currentFrame);
		this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
	};
	var ge = {};
	ce.prototype.triggerConfigError = function(t) {
		var e = new g(t, this.currentFrame);
		this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
	};

	function ye() {
		!0 === ve ? de.searchAnimations(be, ve, _e) : de.searchAnimations()
	}
	ge.play = de.play, ge.pause = de.pause, ge.setLocationHref = function(t) {
		k = t
	}, ge.togglePause = de.togglePause, ge.setSpeed = de.setSpeed, ge.setDirection = de.setDirection, ge.stop = de.stop, ge.searchAnimations = ye, ge.registerAnimation = de.registerAnimation, ge.loadAnimation = function(t) {
		return !0 === ve && (t.animationData = JSON.parse(be)), de.loadAnimation(t)
	}, ge.setSubframeRendering = function(t) {
		i = t
	}, ge.resize = de.resize, ge.goToAndStop = de.goToAndStop, ge.destroy = de.destroy, ge.setQuality = function(t) {
		if ("string" == typeof t) switch (t) {
			case "high":
				M = 200;
				break;
			case "medium":
				M = 50;
				break;
			case "low":
				M = 10
		} else !isNaN(t) && 1 < t && (M = t);
		r(!(50 <= M))
	}, ge.inBrowser = function() {
		return "undefined" != typeof navigator
	}, ge.installPlugin = function(t, e) {
		"expressions" === t && (h = e)
	}, ge.freeze = de.freeze, ge.unfreeze = de.unfreeze, ge.getRegisteredAnimations = de.getRegisteredAnimations, ge.__getFactory = function(t) {
		switch (t) {
			case "propertyFactory":
				return z;
			case "shapePropertyFactory":
				return X;
			case "matrix":
				return I
		}
	}, ge.version = "5.5.9";
	var ve = "__[STANDALONE]__",
		be = "__[ANIMATIONDATA]__",
		_e = "";
	if (ve) {
		var Ae = document.getElementsByTagName("script"),
			ke = (Ae[Ae.length - 1] || {
				src: ""
			}).src.replace(/^[^\?]+\??/, "");
		_e = function(t) {
			for (var e = ke.split("&"), s = 0; s < e.length; s++) {
				var i = e[s].split("=");
				if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
			}
		}("renderer")
	}
	var Me = setInterval(function() {
		"complete" === document.readyState && (clearInterval(Me), ye())
	}, 100);
	return ge
}, "function" == typeof define && define.amd ? define(function() {
	return e(t)
}) : "object" == typeof module && module.exports ? module.exports = e(t) : (t.lottie = e(t), t.bodymovin = t.lottie));