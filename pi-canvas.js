(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var canvas = document.getElementById("pi-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", function () {
    resize();
    init();
  });

  var nodes = [];
  var LINK_D = 190;

  function nodeCount() {
    return Math.max(28, Math.min(58, Math.floor((canvas.width * canvas.height) / 17000)));
  }

  function makeNode() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: 0.8 + Math.random() * 0.9,
      phase: Math.random() * Math.PI * 2,
      gold: Math.random() > 0.25
    };
  }

  function init() {
    nodes = [];
    for (var i = 0; i < nodeCount(); i++) nodes.push(makeNode());
  }

  function tick(t) {
    requestAnimationFrame(tick);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var a = 0; a < nodes.length; a++) {
      var na = nodes[a];
      for (var b = a + 1; b < nodes.length; b++) {
        var nb = nodes[b];
        var dx = na.x - nb.x;
        var dy = na.y - nb.y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < LINK_D) {
          var op = (1 - d / LINK_D) * 0.09;
          ctx.beginPath();
          ctx.moveTo(na.x, na.y);
          ctx.lineTo(nb.x, nb.y);
          ctx.strokeStyle = "rgba(196,162,78," + op + ")";
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

      var pulse = n.r * (0.82 + 0.18 * Math.sin(t * 0.00075 + n.phase));
      ctx.beginPath();
      ctx.arc(n.x, n.y, pulse, 0, Math.PI * 2);
      ctx.fillStyle = n.gold
        ? "rgba(196,162,78,0.3)"
        : "rgba(61,140,138,0.22)";
      ctx.fill();
    }
  }

  init();
  requestAnimationFrame(tick);
})();
