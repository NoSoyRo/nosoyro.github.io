(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var el = document.getElementById("pi-intro");
    if (el) el.style.display = "none";
    return;
  }

  var exited = false;

  function show(id, cls, delay) {
    setTimeout(function () {
      var el = document.getElementById(id);
      if (el) el.classList.add(cls);
    }, delay);
  }

  function exit() {
    if (exited) return;
    exited = true;
    var overlay = document.getElementById("pi-intro");
    if (!overlay) return;
    overlay.classList.add("is-exiting");
    setTimeout(function () {
      overlay.style.display = "none";
      document.body.style.overflow = "";
    }, 1050);
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflow = "hidden";

    show("intro-rule",      "is-drawn",   220);
    show("intro-pi",        "is-visible",  950);
    show("intro-solutions", "is-visible", 1280);
    show("intro-tagline",   "is-visible", 1850);
    show("intro-hint",      "is-visible", 2500);

    setTimeout(function () {
      window.addEventListener("scroll",     exit, { once: true, passive: true });
      window.addEventListener("click",      exit, { once: true });
      window.addEventListener("touchstart", exit, { once: true, passive: true });
      window.addEventListener("keydown",    exit, { once: true });
    }, 2500);

    setTimeout(exit, 5200);
  });
})();
