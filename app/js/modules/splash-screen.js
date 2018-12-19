window.splashScreen = (function (window, $) {
  'use strict';

  var splashScreen = document.querySelector('.splash-screen');

  if (!splashScreen) {
    return;
  }

  document.body.style.overflowY = 'hidden';

  window.addEventListener('load', function () {
    splashScreen.classList.add('splash-screen--hidden');
    document.body.style.overflowY = '';
  });
})(window, jQuery);
