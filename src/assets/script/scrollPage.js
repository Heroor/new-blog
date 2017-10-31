// 页面平滑滚动
export default function() {
  function C() {
      if (!D && document.body) {
          D = !0;
          var a = document.body
            , b = document.documentElement
            , d = window.innerHeight
            , c = a.scrollHeight;
          l = 0 <= document.compatMode.indexOf("CSS") ? b : a;
          m = a;
          f.keyboardSupport && window.addEventListener("keydown", J, !1);
          if (top != self)
              u = !0;
          else if (Y && c > d && (a.offsetHeight <= d || b.offsetHeight <= d)) {
              var e = document.createElement("div");
              e.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + l.scrollHeight + "px";
              document.body.appendChild(e);
              var g;
              v = function() {
                  g || (g = setTimeout(function() {
                      e.style.height = "0";
                      e.style.height = l.scrollHeight + "px";
                      g = null
                  }, 500))
              }
              ;
              setTimeout(v, 10);
              window.addEventListener("resize", v, !1);
              z = new Z(v);
              z.observe(a, {
                  attributes: !0,
                  childList: !0,
                  characterData: !1
              });
              l.offsetHeight <= d && (d = document.createElement("div"),
              d.style.clear = "both",
              a.appendChild(d))
          }
          f.fixedBackground || (a.style.backgroundAttachment = "scroll",
          b.style.backgroundAttachment = "scroll")
      }
  }
  function K(a, b, d) {
      aa(b, d);
      if (1 != f.accelerationMax) {
          var c = Date.now() - E;
          c < f.accelerationDelta && (c = (1 + 50 / c) / 2,
          1 < c && (c = Math.min(c, f.accelerationMax),
          b *= c,
          d *= c));
          E = Date.now()
      }
      t.push({
          x: b,
          y: d,
          lastX: 0 > b ? .99 : -.99,
          lastY: 0 > d ? .99 : -.99,
          start: Date.now()
      });
      if (!F) {
          var e = a === document.body
            , g = function(c) {
              c = Date.now();
              for (var k = 0, l = 0, h = 0; h < t.length; h++) {
                  var n = t[h]
                    , p = c - n.start
                    , m = p >= f.animationTime
                    , q = m ? 1 : p / f.animationTime;
                  f.pulseAlgorithm && (p = q,
                  1 <= p ? q = 1 : 0 >= p ? q = 0 : (1 == f.pulseNormalize && (f.pulseNormalize /= L(1)),
                  q = L(p)));
                  p = n.x * q - n.lastX >> 0;
                  q = n.y * q - n.lastY >> 0;
                  k += p;
                  l += q;
                  n.lastX += p;
                  n.lastY += q;
                  m && (t.splice(h, 1),
                  h--)
              }
              e ? window.scrollBy(k, l) : (k && (a.scrollLeft += k),
              l && (a.scrollTop += l));
              b || d || (t = []);
              t.length ? M(g, a, 1E3 / f.frameRate + 1) : F = !1
          };
          M(g, a, 0);
          F = !0
      }
  }
  function N(a) {
      D || C();
      var b = a.target;
      if (a.defaultPrevented || a.ctrlKey || r(m, "embed") || r(b, "embed") && /\.pdf/i.test(b.src) || r(m, "object") || b.shadowRoot)
          return !0;
      var d = -a.wheelDeltaX || a.deltaX || 0
        , c = -a.wheelDeltaY || a.deltaY || 0;
      ba && (a.wheelDeltaX && w(a.wheelDeltaX, 120) && (d = a.wheelDeltaX / Math.abs(a.wheelDeltaX) * -120),
      a.wheelDeltaY && w(a.wheelDeltaY, 120) && (c = a.wheelDeltaY / Math.abs(a.wheelDeltaY) * -120));
      d || c || (c = -a.wheelDelta || 0);
      1 === a.deltaMode && (d *= 40,
      c *= 40);
      b = O(b);
      if (!b)
          return u && G ? (Object.defineProperty(a, "target", {
              value: window.frameElement
          }),
          parent.wheel(a)) : !0;
      if (ca(c))
          return !0;
      1.2 < Math.abs(d) && (d *= f.stepSize / 120);
      1.2 < Math.abs(c) && (c *= f.stepSize / 120);
      K(b, d, c);
      a.preventDefault();
      P()
  }
  function J(a) {
      var b = a.target
        , d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== g.spacebar;
      document.body.contains(m) || (m = document.activeElement);
      var c = /^(textarea|select|embed|object)$/i
        , e = /^(button|submit|radio|checkbox|file|color|image)$/i;
      if (!(c = a.defaultPrevented || c.test(b.nodeName) || r(b, "input") && !e.test(b.type) || r(m, "video"))) {
          var c = a.target
            , h = !1;
          if (-1 != document.URL.indexOf("www.youtube.com/watch")) {
              do
                  if (h = c.classList && c.classList.contains("html5-video-controls"))
                      break;
              while (c = c.parentNode)
          }
          c = h
      }
      if (c || b.isContentEditable || d || (r(b, "button") || r(b, "input") && e.test(b.type)) && a.keyCode === g.spacebar || r(b, "input") && "radio" == b.type && da[a.keyCode])
          return !0;
      c = b = 0;
      d = O(m);
      if (!d)
          return u && G ? parent.keydown(a) : !0;
      e = d.clientHeight;
      d == document.body && (e = window.innerHeight);
      switch (a.keyCode) {
      case g.up:
          c = -f.arrowScroll;
          break;
      case g.down:
          c = f.arrowScroll;
          break;
      case g.spacebar:
          c = a.shiftKey ? 1 : -1;
          c = -c * e * .9;
          break;
      case g.pageup:
          c = .9 * -e;
          break;
      case g.pagedown:
          c = .9 * e;
          break;
      case g.home:
          c = -d.scrollTop;
          break;
      case g.end:
          e = d.scrollHeight - d.scrollTop - e;
          c = 0 < e ? e + 10 : 0;
          break;
      case g.left:
          b = -f.arrowScroll;
          break;
      case g.right:
          b = f.arrowScroll;
          break;
      default:
          return !0
      }
      K(d, b, c);
      a.preventDefault();
      P()
  }
  function Q(a) {
      m = a.target
  }
  function P() {
      clearTimeout(R);
      R = setInterval(function() {
          H = {}
      }, 1E3)
  }
  function I(a, b) {
      for (var d = a.length; d--; )
          H[S(a[d])] = b;
      return b
  }
  function O(a) {
      var b = []
        , d = document.body
        , c = l.scrollHeight;
      do {
          var e = H[S(a)];
          if (e)
              return I(b, e);
          b.push(a);
          if (c === a.scrollHeight) {
              if (e = T(l) && T(d) || U(l),
              u && l.clientHeight + 10 < l.scrollHeight || !u && e)
                  return I(b, ea())
          } else if (a.clientHeight + 10 < a.scrollHeight && U(a))
              return I(b, a)
      } while (a = a.parentElement)
  }
  function T(a) {
      return "hidden" !== getComputedStyle(a, "").getPropertyValue("overflow-y")
  }
  function U(a) {
      a = getComputedStyle(a, "").getPropertyValue("overflow-y");
      return "scroll" === a || "auto" === a
  }
  function r(a, b) {
      return (a.nodeName || "").toLowerCase() === b.toLowerCase()
  }
  function aa(a, b) {
      a = 0 < a ? 1 : -1;
      b = 0 < b ? 1 : -1;
      if (A.x !== a || A.y !== b)
          A.x = a,
          A.y = b,
          t = [],
          E = 0
  }
  function ca(a) {
      if (a)
          return h.length || (h = [a, a, a]),
          a = Math.abs(a),
          h.push(a),
          h.shift(),
          clearTimeout(V),
          V = setTimeout(function() {
              try {
                  localStorage.SS_deltaBuffer = h.join(",")
              } catch (b) {}
          }, 1E3),
          !W(120) && !W(100)
  }
  function w(a, b) {
      return Math.floor(a / b) == a / b
  }
  function W(a) {
      return w(h[0], a) && w(h[1], a) && w(h[2], a)
  }
  function L(a) {
      var b;
      a *= f.pulseScale;
      1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1),
      a = 1 - Math.exp(-(a - 1)),
      b += a * (1 - b));
      return b * f.pulseNormalize
  }
  function x(a) {
      for (var b in a)
          X.hasOwnProperty(b) && (f[b] = a[b])
  }
  var X = {
      frameRate: 150,
      animationTime: 400,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 50,
      fixedBackground: !0,
      excluded: ""
  }, f = X, u = !1, A = {
      x: 0,
      y: 0
  }, D = !1, l = document.documentElement, m, z, v, h = [], ba = /^Mac/.test(navigator.platform), g = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36
  }, da = {
      37: 1,
      38: 1,
      39: 1,
      40: 1
  }, t = [], F = !1, E = Date.now(), S = function() {
      var a = 0;
      return function(b) {
          return b.uniqueID || (b.uniqueID = a++)
      }
  }(), H = {}, R, V;
  if (window.localStorage && localStorage.SS_deltaBuffer)
      try {
          h = localStorage.SS_deltaBuffer.split(",")
      } catch (a) {}
  var M = function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a, b, d) {
          window.setTimeout(a, d || 1E3 / 60)
      }
  }(), Z = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, ea = function() {
      var a;
      return function() {
          if (!a) {
              var b = document.createElement("div");
              b.style.cssText = "height:10000px;width:1px;";
              document.body.appendChild(b);
              var d = document.body.scrollTop;
              window.scrollBy(0, 3);
              a = document.body.scrollTop != d ? document.body : document.documentElement;
              window.scrollBy(0, -3);
              document.body.removeChild(b)
          }
          return a
      }
  }(), k = window.navigator.userAgent, B = /Edge/.test(k), G = /chrome/i.test(k) && !B, B = /safari/i.test(k) && !B, fa = /mobile/i.test(k), ga = /Windows NT 6.1/i.test(k) && /rv:11/i.test(k), Y = B && (/Version\/8/i.test(k) || /Version\/9/i.test(k)), k = (G || ga) && !fa, y;
  "onwheel"in document.createElement("div") ? y = "wheel" : "onmousewheel"in document.createElement("div") && (y = "mousewheel");
  y && k && (window.addEventListener(y, N, !1),
  window.addEventListener("mousedown", Q, !1),
  window.addEventListener("load", C, !1));
  x.destroy = function() {
      z && z.disconnect();
      window.removeEventListener(y, N, !1);
      window.removeEventListener("mousedown", Q, !1);
      window.removeEventListener("keydown", J, !1);
      window.removeEventListener("resize", v, !1);
      window.removeEventListener("load", C, !1)
  }
  ;
  window.SmoothScrollOptions && x(window.SmoothScrollOptions);
  "function" === typeof define && define.amd ? define(function() {
      return x
  }) : "object" == typeof exports ? module.exports = x : window.SmoothScroll = x
}
