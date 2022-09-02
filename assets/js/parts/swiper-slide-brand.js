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