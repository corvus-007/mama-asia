window.map = (function (window, $) {
  'use strict';

  var dirname = window.util.isDevMode() ? '' : '/wp-content/themes/greenwood/';

  var mapElem = document.querySelector('#contact-map');

  if (!mapElem) {
    return;
  }

  mapElem.classList.remove('.contact__map--no-js');

  ymaps.ready(function () {
    var map = new ymaps.Map(mapElem, {
      center: [53.276145, 34.315436],
      zoom: 16,
      controls: []
    });

    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new ymaps.Placemark([53.276145, 34.315436], {
      hintContent: "г. Брянск, ул. Объездная, 30, ТРЦ «АэроПарк» 2&#8209;й этаж, зона ФудКорта"
    }, {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/icon-map-pin.svg',
      iconImageSize: [54, 54],
      iconImageOffset: [-25, -54]
    });

    map.geoObjects.add(myPlacemark);
  });
})(window, jQuery);
