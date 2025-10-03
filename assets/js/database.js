(function () {
  function $$ (selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  document.addEventListener('click', function (evt) {
    var tab = evt.target.closest('.side-tab');
    if (!tab) return;
    $$('.side-tab').forEach(function (t) { t.classList.remove('is-active'); });
    tab.classList.add('is-active');
  });
})();


