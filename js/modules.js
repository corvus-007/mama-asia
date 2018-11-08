window.util = (function () {
  'use strict';

  return {
    KEYCODE_ESC: 27,
    isDevMode: function () {
      return location.hostname === 'localhost';
    },
    setMaxHeight: function (selector) {
      var maxHeight;
      var elements = document.querySelectorAll(selector);

      if (!elements.length) {
        return;
      }

      maxHeight = Array.from(elements).reduce(function findMaxHeight(prevValue, element) {
        var currentValue = element.offsetHeight;
        return (prevValue > currentValue) ? prevValue : currentValue;
      }, 0);

      Array.from(elements).forEach(function specifyMaxHeight(it) {
        it.style.height = maxHeight + 'px';
      });
    },
    getScrollbarWidth: function () {
      var div = document.createElement('div');

      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);

      return scrollWidth;
    }
  }
})();

window.splashScreen = (function (window, $) {
  'use strict';

  var splashScreen = document.querySelector('.splash-screen');

  if (!splashScreen) {
    return;
  }

  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = window.util.getScrollbarWidth() + 'px';

  window.addEventListener('load', function () {
    splashScreen.classList.add('splash-screen--hidden');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
  });
})(window, jQuery);

window.mobileMenu = (function (window, $) {
  'use strict';
  var mobileMenu = document.querySelector('.mobile-menu');

  if (!mobileMenu) {
    return;
  }

  var subMenuList = mobileMenu.querySelectorAll('.sub-menu');

  subMenuList.forEach(handleSubMenu);

  mobileMenu.addEventListener('click', function (evt) {
    var target = evt.target;
    var subMenuToggle = target.closest('.sub-menu-toggle');
    if (subMenuToggle) {
      var subMenuParentItem = subMenuToggle.parentElement;

      if (subMenuParentItem.classList.contains('opened')) {
        hideSubMenu(subMenuParentItem);
      } else {
        showSubMenu(subMenuParentItem);
      }
    }
  });

  function showSubMenu(subMenuParent) {
    var toggleEl = subMenuParent.querySelector('.sub-menu-toggle');

    toggleEl.textContent = 'Скрыть подменю';
    subMenuParent.classList.add('opened');
  }

  function hideSubMenu(subMenuParent) {
    var toggleEl = subMenuParent.querySelector('.sub-menu-toggle');

    toggleEl.textContent = 'Показать подменю';
    subMenuParent.classList.remove('opened');
  }

  function handleSubMenu(subMenu) {
    subMenu.insertAdjacentElement('beforeBegin', createSubMenuToggle());
  }

  function createSubMenuToggle() {
    var toggleEl = document.createElement('button');

    toggleEl.setAttribute('class', 'sub-menu-toggle');
    toggleEl.setAttribute('type', 'button');
    toggleEl.textContent = 'Показать подменю';

    return toggleEl;
  }
})(window, jQuery);

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

window.searchBox = (function () {
  'use strict';

  var searchBox = document.querySelector('.header-search-box');

  if (searchBox) {
    var headerNav = document.querySelector('.header-layout__nav');
    var headerActions = document.querySelector('.header-layout__actions');
    var searchBoxToggler = searchBox.querySelector('.header-search-box__toggle');
    var searchBoxForm = searchBox.querySelector('.header-search-box__form');
    var searchBoxInput = searchBox.querySelector('.header-search-box__input');

    var boundariesSearchBoxForm = getBoundariesForSearchForm();

    searchBoxForm.style.width = boundariesSearchBoxForm.width + 'px';
    searchBoxForm.style.right = boundariesSearchBoxForm.right + 'px';

    var onSearchBoxEscPress = function (event) {
      if (event.keyCode === window.util.KEYCODE_ESC) {
        hideSearchBarContent();
      }
    };

    var onSearchBarClickOut = function (event) {
      var isClickOut = true;

      if (searchBox.contains(event.target)) {
        isClickOut = false;
      }

      if (isClickOut) {
        hideSearchBarContent();
      }
    };

    searchBoxToggler.addEventListener('click', function (event) {
      event.preventDefault();
      showSearchBarContent();
    });
  }

  function showSearchBarContent() {
    searchBox.classList.remove('header-search-box--not-active');
    searchBoxToggler.classList.add('header-search-box__toggle--hidden');
    setTimeout(function () {
      searchBoxInput.focus();
    }, 500);
    document.addEventListener('keydown', onSearchBoxEscPress);
    document.addEventListener('click', onSearchBarClickOut);
  };

  function hideSearchBarContent() {
    searchBox.classList.add('header-search-box--not-active');
    searchBoxToggler.classList.remove('header-search-box__toggle--hidden');
    document.removeEventListener('keydown', onSearchBoxEscPress);
  };

  function getBoundariesForSearchForm() {
    var headerNavRight = Math.ceil(headerNav.getBoundingClientRect().right) + 30;
    var headerActionsLeft = Math.ceil(headerActions.getBoundingClientRect().left) - 30;
    var width = headerActionsLeft - headerNavRight;

    return {
      width: width,
      left: headerNavRight,
      right: document.documentElement.clientWidth - headerActionsLeft,
    };
  }

  hideSearchBarContent();

  return {
    showContent: showSearchBarContent,
    hideContent: hideSearchBarContent
  };
})();

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

window.outCover = (function () {
  'use strict';

  var outCover = document.querySelector('.out-cover');
  var outCoverToggle = document.querySelector('.out-cover-toggle');
  var scrollWidth = window.util.getScrollbarWidth();

  var onOutCoverEscPress = function (event) {
    if (event.keyCode === window.util.KEYCODE_ESC) {
      hideOutCover();
    }
  };

  var showOutCover = function () {
    outCover.classList.add('out-cover--opened');
    outCoverToggle.classList.add('out-cover-toggle--fired');
    document.body.classList.add('is-out-cover-opened');
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = scrollWidth + 'px';

    document.addEventListener('keydown', onOutCoverEscPress);
  };

  var hideOutCover = function () {
    outCover.classList.remove('out-cover--opened');
    outCoverToggle.classList.remove('out-cover-toggle--fired');
    document.body.classList.remove('is-out-cover-opened');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';

    document.removeEventListener('keydown', onOutCoverEscPress);
  };

  outCoverToggle.addEventListener('click', function (event) {
    event.preventDefault();

    if (!this.classList.contains('out-cover-toggle--fired')) {
      showOutCover();
    } else {
      hideOutCover();
    }
  });

  return {
    show: showOutCover,
    hide: hideOutCover
  };
})();

