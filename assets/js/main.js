(function () {
  var b = document.querySelector('.menu-toggle'), n = document.getElementById('nav');
  if (!b || !n) return;
  function set(o) { b.setAttribute('aria-expanded', o); n.classList.toggle('ouvert', o); }
  b.addEventListener('click', function () { set(b.getAttribute('aria-expanded') !== 'true'); });
  n.addEventListener('click', function (e) { if (e.target.tagName === 'A') set(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
})();
