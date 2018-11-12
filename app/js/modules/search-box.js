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

  function setMetricsForSearchBoxForm() {
    boundariesSearchBoxForm = getBoundariesForSearchForm();
    searchBoxForm.style.width = boundariesSearchBoxForm.width + 'px';
    searchBoxForm.style.left = boundariesSearchBoxForm.left + 'px';
  }

  function showSearchBarContent() {
    setMetricsForSearchBoxForm();
    searchBox.classList.remove('header-search-box--not-active');
    searchBoxToggler.classList.add('header-search-box__toggle--hidden');
    setTimeout(function () {
      searchBoxInput.focus();
    }, 500);
    document.addEventListener('keydown', onSearchBoxEscPress);
    document.addEventListener('click', onSearchBarClickOut);
  }

  function hideSearchBarContent() {
    searchBox.classList.add('header-search-box--not-active');
    searchBoxToggler.classList.remove('header-search-box__toggle--hidden');
    document.removeEventListener('keydown', onSearchBoxEscPress);
  }

  function getBoundariesForSearchForm() {
    var searchBoxFormOffsetParent = searchBoxForm.offsetParent;
    var headerNavRight = Math.ceil(headerNav.getBoundingClientRect().right) + 30;
    var headerActionsLeft = Math.ceil(headerActions.getBoundingClientRect().left) - 30;
    var width = headerActionsLeft - headerNavRight;

    return {
      width: width,
      left: headerNavRight - searchBoxFormOffsetParent.getBoundingClientRect().left,
      right: document.documentElement.clientWidth - headerActionsLeft - searchBoxFormOffsetParent.getBoundingClientRect().right,
    };
  }

  hideSearchBarContent();

  return {
    showContent: showSearchBarContent,
    hideContent: hideSearchBarContent
  };
})();
