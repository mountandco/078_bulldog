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
var slider2 = new Swiper ('.important-information__swiper .swiper', {
  direction: 'vertical',
  effect: 'slide',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
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

// scroll add class
//=====================================================
$(function(global) {
  var ClassCycler = function(opt) {
    var timer,
    execCycle = (function() {
      var $item = opt.$targetElm,
      index = 0,
      max = $item.length;
      return function() {
        if (!opt.oneWay) {
          $item.removeClass(opt.cycleClassName);
        }
        $item.eq(index).addClass(opt.cycleClassName);
        index = (++index === max) ? 0 : index;
        if (opt.oneWay &&  index === 0) {
          global.clearInterval(timer);
        }
      };
    }());
    opt.startImmediate && execCycle();
    timer = global.setInterval(execCycle, opt.duration);
  };
  global.ClassCycler = ClassCycler;
}(this.self || global));

$(window).scroll(function() {
  $('.bg-fadein-footprints.nth-1').each(function() {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();

    if (matchMedia('only screen and (max-width: 767px)').matches) {
      //  sp & tb
      } else {
      // pc
      }

    if (scroll > hit - wHeight + wHeight/100 + 430) {
      $(function() {
        new ClassCycler({
          $targetElm: $('.bg-fadein-footprints'),
          cycleClassName: 'show',
          duration: 200,
          startImmediate: true,
          oneWay: true
        });
      });
    }

  });
});