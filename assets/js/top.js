/* ----------------------------------------------------------------------------------------------------
*  SWIPER
* --------------------------------------------------------------------------------------------------*/
// TOPメインビジュアル
var slider1 = new Swiper ('.hero__swiper .swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  loopAdditionalSlides: 1,
  speed: 2000,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  followFinger: false,
  pagination: {
    el: '.hero__swiper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.hero__swiper .swiper-button-next',
    prevEl: '.hero__swiper .swiper-button-prev',
  },
});

// TOPお知らせ
var slider2 = new Swiper ('.js-news-swiper', {
  direction: 'vertical',
  effect: 'slide',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
});

$(window).on('load', function() {
  $('.stopbtn').on('click', function() {
    console.log('button--open => click');
      let _class = $(this).attr('class');
      if (_class == 'button--open stopbtn stop') {
        console.log('.important-information__swiper => Stop');
        $(this).addClass('start').removeClass('stop');
        slider2.autoplay.stop();
        //slider2.destroy(false,true);
        $('.js-important-information').addClass('acmenu-open');
      } else {
        $(this).addClass('stop').removeClass('stop-opacity');
        $(this).addClass('stop').removeClass('start');
        $('.js-important-information').removeClass('acmenu-open');
        //slider2.init();
        slider2.autoplay.start(); 
        console.log('.important-information__swiper => Start');
      }
  });
});

// カード型
var slider3 = new Swiper ('.card__swiper .swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.card__swiper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.card__swiper .swiper-button-next',
    prevEl: '.card__swiper .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});