window.offerPopup = (function (window, $) {
  'use strict';

  var isShowedOfferPopup = Cookies.get('offerPopup');
  var OFFER_POPUP_OFFSET_TIME = 10000;
  var phoneOfferPopupTimeout = setTimeout(function () {
    $.fancybox.open({
      src: '#offer-popup',
      type: 'inline',
      opts: {
        afterClose: function () {
          Cookies.set('offerPopup', 1, {
            expires: 30
          });
        }
      }
    });
  }, OFFER_POPUP_OFFSET_TIME);

  if (isShowedOfferPopup) {
    clearTimeout(phoneOfferPopupTimeout);
  }
})(window, jQuery);
