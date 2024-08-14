// This is copied from the "embed" tool on PrintYourCause. They want it in the
// page itself, but MDX doesn't allow that, so we put it in a file.
(function () {
  var y = 0,
    t = 'fulfillengineiframe';
  window.addEventListener(
    'message',
    function (e) {
      if (!e || !e.data || e.data.length < 2) return 0;
      var a = document.getElementById(t);
      if (!a) return 0;
      var r = e.data[0],
        i = e.data[1];
      'setIframeHeight' === r
        ? a.setAttribute('height', i)
        : 'iframeScrollUp' === r &&
          a.getBoundingClientRect().y < y &&
          window.scrollTo(0, a.getBoundingClientRect().y + window.scrollY - y);
    },
    !1
  );
})();
