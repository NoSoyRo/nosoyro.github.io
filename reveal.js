/**
 * Scroll reveal: adds .is-visible when elements enter the viewport.
 * Skipped when prefers-reduced-motion: reduce.
 */
(function () {
  "use strict";

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  var selectors = ["main > section", ".featured .card", ".table-wrap"];

  var nodes = [];
  selectors.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      nodes.push(el);
    });
  });

  nodes.forEach(function (el) {
    el.classList.add("reveal");
  });

  if (nodes.length === 0) return;

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
  );

  nodes.forEach(function (el) {
    io.observe(el);
  });
})();
