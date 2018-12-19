window.mobileMenu = (function (window, $) {
  'use strict';
  var mobileMenu = document.querySelector('.mobile-menu');

  if (!mobileMenu) {
    return;
  }

  var subMenuList = mobileMenu.querySelectorAll('.sub-menu');
  var subMenuLvl2List = mobileMenu.querySelectorAll('.sub-menu-lvl2');

  subMenuList.forEach(handleSubMenu);
  subMenuLvl2List.forEach(handleSubMenu);

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
