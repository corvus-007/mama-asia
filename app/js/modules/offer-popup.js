window.offerPopup = (function (window, $) {
  'use strict';

  if (!document.querySelector('#offer-popup')) {
    return;
  }

  var isShowedOfferPopup = Cookies.get('offerPopup');
  var OFFER_POPUP_OFFSET_TIME = 10000;
  var phoneOfferPopupTimeout = setTimeout(function () {
    $.fancybox.open({
      src: '#offer-popup',
      type: 'inline',
      opts: {
        afterClose: function () {
          Cookies.set('offerPopup', 1, {
            expires: 7
          });
        }
      }
    });
  }, OFFER_POPUP_OFFSET_TIME);

  if (isShowedOfferPopup) {
    clearTimeout(phoneOfferPopupTimeout);
  }
})(window, jQuery);
