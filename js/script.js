document.addEventListener('DOMContentLoaded', function () {
  svg4everybody();

  $.fancybox.defaults.animationEffect = 'zoom-in-out';

  $('input[type="tel"]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });

  $('.common-tabs').tabslet();

  var mySwiper = new Swiper('[data-main-slider]', {
    // Optional parameters
    // direction: 'vertical',
    autoplay: {
      delay: 4000,
      // disableOnInteraction: true
    },
    speed: 1000,
    parallax: true,
    loop: true,
    effect: 'cube',
    // grabCursor: true,
    // coverflowEffect: {
    //   rotate: 45,
    //   slideShadows: false,
    //   stretch: 25,
    //   // modifier: 0.8
    // },
    cubeEffect: {
      slideShadows: false,
      shadow: false
    },


    // If we need pagination
    pagination: {
      // type: 'progressbar',
      clickable: true,
      el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  $('[common-products-carousel]').slick({
    accessibility: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '28%',
        slidesToShow: 1
      }
    }, {
      breakpoint: 500,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '11%',
        slidesToShow: 1
      }
    }, {
      breakpoint: 350,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '8%',
        slidesToShow: 1
      }
    }]
  });


  var SCROLL_TRIGGER_VALUE = 400;

  var header = document.querySelector('.header-layout');

  function stickyHeader() {
    header.classList.add('header-layout--sticky');
  }

  function untickyHeader() {
    header.classList.remove('header-layout--sticky');
  }

  // init controller
  var controller = new ScrollMagic.Controller();

  // create a scene
  new ScrollMagic.Scene({
      duration: 0, // the scene should last for a scroll distance of 100px
      offset: SCROLL_TRIGGER_VALUE // start this scene after scrolling for 50px
    })
    .on("enter", function (event) {
      stickyHeader();
    })
    .on("leave", function (event) {
      untickyHeader();
    })
    .addTo(controller); // assign the scene to the controller


  $('[data-main-product-gallery]').slick({
    accessibility: false,
    arrows: false,
    infinite: false,
    draggable: false,
    swipe: false
  });

  $('[data-nav-product-gallery]').on('init', function (event, slick) {
    var currentSlideEl = slick.$slides[slick.currentSlide];
    currentSlideEl.classList.add('nav-product-gallery__item--active');
  });

  $('[data-nav-product-gallery]').on('click', '.nav-product-gallery__item', function () {
    var slideNumber = $(this).index();
    $('.nav-product-gallery__item').removeClass('nav-product-gallery__item--active');
    $(this).addClass('nav-product-gallery__item--active');
    $('[data-main-product-gallery]').slick('slickGoTo', slideNumber);
  });

  $('[data-nav-product-gallery]').slick({
    accessibility: false,
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
  });

  $('.main-product-gallery__item').zoom({
    magnify: 0.65
  });

});
