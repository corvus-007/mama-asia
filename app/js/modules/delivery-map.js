var myPolygon;

window.deliveryMap = (function(window, $) {
  'use strict';

  var dirname = window.util.isDevMode() ? '' : '/wp-content/themes/themename/';

  var mapElem = document.querySelector('#delivery-map');

  if (!mapElem) {
    return;
  }

  mapElem.classList.remove('.contact__map--no-js');

  ymaps.ready(function() {
    var map = new ymaps.Map(mapElem, {
      center: [53.276145, 34.315436],
      zoom: 14,
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

    // Создаем многоугольник, используя вспомогательный класс Polygon.
    myPolygon = new ymaps.Polygon([
      [
        [53.28067208635952, 34.29595243371578],
        [53.265133938468665, 34.318783396850556],
        [53.26991946951245, 34.34393178857418],
        [53.27691669651009, 34.34805166162105],
        [53.284787201321606, 34.34590589440914],
        [53.28550730550297, 34.31303274072262],
        [53.28067208635952, 34.29595243371578]
      ]
    ], {
      // Описываем свойства геообъекта.
      // Содержимое балуна.
      hintContent: "Советский район"
    }, {
      // Задаем опции геообъекта.
      // Цвет заливки.
      fillColor: '#ffbc53',
      fillOpacity: 0.25,
      openEmptyBalloon: true,
      // Ширина обводки.
      strokeWidth: 2,
      // draggable: true
    });

    map.geoObjects.add(myPlacemark);
    map.geoObjects.add(myPolygon);
    // myPolygon.editor.startDrawing();
  });
})(window, jQuery);
