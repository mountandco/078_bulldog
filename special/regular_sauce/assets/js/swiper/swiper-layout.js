// .swiper1
const swiper1 = new Swiper('.js--swiper1', {
  loop: true,
  effect: 'fade',
  waitForTransition: false, // 1枚目の時間が短くなる場合はfalseにする
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 2000,
});

// .swiper_recipe_1

  // const swiper_recipe_1 = new Swiper('.js--recipe-1', {
  //   loop: true,
  //   effect: 'slide',
  //   autoplay: {
  //     delay: 3000,
  //     //disableOnInteraction: false,
  //   },
  //   speed: 450,
  //   grabCursor: true,
  //   slidesPerView: 1.3,
  //   spaceBetween: 24,
  //   //roundLengths: true,
  //   navigation: {
  //     nextEl: ".js--recipe-next-1",
  //     prevEl: ".js--recipe-prev-1",
  //   },
  //   pagination: {
  //     el: ".js--recipe-pagination-1",
  //     type: "fraction", // ページネーションのtypeを指定
  //     formatFractionCurrent: function (number) {
  //       return '0' + number; // 頭に『0』を付ける
  //     }
  //   },
  // });
  //swiper.autoplay.stop(); //画面に現れるまでswiperを停止

let swiper_recipe_1 = new Swiper ('.js--recipe-1', {
  loop: true,
  effect: 'slide',
  autoplay: {
    delay: 3000,
    //disableOnInteraction: false,
  },
  speed: 450,
  grabCursor: true,
  slidesPerView: 1.3,
  spaceBetween: 24,
  //roundLengths: true,
  navigation: {
    nextEl: ".js--recipe-next-1",
    prevEl: ".js--recipe-prev-1",
  },
  pagination: {
    el: ".js--recipe-pagination-1",
    type: "fraction", // ページネーションのtypeを指定
    formatFractionCurrent: function (number) {
      return '0' + number; // 頭に『0』を付ける
    }
  },
});
//IntersectionObserver のコールバック関数
function callback(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      // 対象の要素（スライダー）がすべて見えたら再生
      swiper_recipe_1.autoplay.start();
    } else if (entry.intersectionRatio === 0) {
      // 対象の要素（スライダー）がすべて見えなくなったら停止
      swiper_recipe_1.autoplay.stop();
      //swiper_recipe_1.slideToLoop(0); //先頭のスライドへ
    }
  });
}
//IntersectionObserver のオプション
const ioOptions = {
  //全て見えるときと全て見えないときを検知するための閾値
  threshold: [0, 1],
  //監視領域のオフセット（見える手前100pxで表示する場合）
  //rootMargin: '100px', 
}
//オブザーバーを生成
const observer = new IntersectionObserver(callback, ioOptions);
//監視対象の領域（スライダー）を取得 
const target = document.getElementById("swiper_recipe_1");
//オブザーバーに監視対象の領域（スライダー）を指定
observer.observe(target);


// swiper_recipe_2
let swiper_recipe_2 = new Swiper ('.js--recipe-2', {
  loop: true,
  effect: 'slide',
  autoplay: {
    delay: 3000,
    //disableOnInteraction: false,
  },
  speed: 450,
  grabCursor: true,
  slidesPerView: 1.3,
  spaceBetween: 24,
  //roundLengths: true,
  navigation: {
    nextEl: ".js--recipe-next-2",
    prevEl: ".js--recipe-prev-2",
  },
  pagination: {
    el: ".js--recipe-pagination-2",
    type: "fraction", // ページネーションのtypeを指定
    formatFractionCurrent: function (number) {
      return '0' + number; // 頭に『0』を付ける
    }
  },
});
//IntersectionObserver のコールバック関数
function callback2(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      // 対象の要素（スライダー）がすべて見えたら再生
      swiper_recipe_2.autoplay.start();
    } else if (entry.intersectionRatio === 0) {
      // 対象の要素（スライダー）がすべて見えなくなったら停止
      swiper_recipe_2.autoplay.stop();
      //swiper_recipe_2.slideToLoop(0); //先頭のスライドへ
    }
  });
}
//IntersectionObserver のオプション
const ioOptions2 = {
  //全て見えるときと全て見えないときを検知するための閾値
  threshold: [0, 1],
  //監視領域のオフセット（見える手前100pxで表示する場合）
  //rootMargin: '100px', 
}
//オブザーバーを生成
const observer2 = new IntersectionObserver(callback2, ioOptions2);
//監視対象の領域（スライダー）を取得 
const target2 = document.getElementById("swiper_recipe_2");
//オブザーバーに監視対象の領域（スライダー）を指定
observer2.observe(target2);


// swiper_recipe_3
let swiper_recipe_3 = new Swiper ('.js--recipe-3', {
  loop: true,
  effect: 'slide',
  autoplay: {
    delay: 3000,
    //disableOnInteraction: false,
  },
  speed: 450,
  grabCursor: true,
  slidesPerView: 1.3,
  spaceBetween: 24,
  //roundLengths: true,
  navigation: {
    nextEl: ".js--recipe-next-3",
    prevEl: ".js--recipe-prev-3",
  },
  pagination: {
    el: ".js--recipe-pagination-3",
    type: "fraction", // ページネーションのtypeを指定
    formatFractionCurrent: function (number) {
      return '0' + number; // 頭に『0』を付ける
    }
  },
});
//IntersectionObserver のコールバック関数
function callback3(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      // 対象の要素（スライダー）がすべて見えたら再生
      swiper_recipe_3.autoplay.start();
    } else if (entry.intersectionRatio === 0) {
      // 対象の要素（スライダー）がすべて見えなくなったら停止
      swiper_recipe_3.autoplay.stop();
      //swiper_recipe_3.slideToLoop(0); //先頭のスライドへ
    }
  });
}
//IntersectionObserver のオプション
const ioOptions3 = {
  //全て見えるときと全て見えないときを検知するための閾値
  threshold: [0, 1],
  //監視領域のオフセット（見える手前100pxで表示する場合）
  //rootMargin: '100px', 
}
//オブザーバーを生成
const observer3 = new IntersectionObserver(callback3, ioOptions3);
//監視対象の領域（スライダー）を取得 
const target3 = document.getElementById("swiper_recipe_3");
//オブザーバーに監視対象の領域（スライダー）を指定
observer3.observe(target3);


// swiper_recipe_4
let swiper_recipe_4 = new Swiper ('.js--recipe-4', {
  loop: true,
  effect: 'slide',
  autoplay: {
    delay: 3000,
    //disableOnInteraction: false,
  },
  speed: 450,
  grabCursor: true,
  slidesPerView: 1.3,
  spaceBetween: 24,
  //roundLengths: true,
  navigation: {
    nextEl: ".js--recipe-next-4",
    prevEl: ".js--recipe-prev-4",
  },
  pagination: {
    el: ".js--recipe-pagination-4",
    type: "fraction", // ページネーションのtypeを指定
    formatFractionCurrent: function (number) {
      return '0' + number; // 頭に『0』を付ける
    }
  },
});
//IntersectionObserver のコールバック関数
function callback4(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      // 対象の要素（スライダー）がすべて見えたら再生
      swiper_recipe_4.autoplay.start();
    } else if (entry.intersectionRatio === 0) {
      // 対象の要素（スライダー）がすべて見えなくなったら停止
      swiper_recipe_4.autoplay.stop();
      //swiper_recipe_4.slideToLoop(0); //先頭のスライドへ
    }
  });
}
//IntersectionObserver のオプション
const ioOptions4 = {
  //全て見えるときと全て見えないときを検知するための閾値
  threshold: [0, 1],
  //監視領域のオフセット（見える手前100pxで表示する場合）
  //rootMargin: '100px', 
}
//オブザーバーを生成
const observer4 = new IntersectionObserver(callback4, ioOptions4);
//監視対象の領域（スライダー）を取得 
const target4 = document.getElementById("swiper_recipe_4");
//オブザーバーに監視対象の領域（スライダー）を指定
observer4.observe(target4);


// swiper_recipe_5
let swiper_recipe_5 = new Swiper ('.js--recipe-5', {
  loop: true,
  effect: 'slide',
  autoplay: {
    delay: 3000,
    //disableOnInteraction: false,
  },
  speed: 450,
  grabCursor: true,
  slidesPerView: 1.3,
  spaceBetween: 24,
  //roundLengths: true,
  navigation: {
    nextEl: ".js--recipe-next-5",
    prevEl: ".js--recipe-prev-5",
  },
  pagination: {
    el: ".js--recipe-pagination-5",
    type: "fraction", // ページネーションのtypeを指定
    formatFractionCurrent: function (number) {
      return '0' + number; // 頭に『0』を付ける
    }
  },
});
//IntersectionObserver のコールバック関数
function callback5(entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 1) {
      // 対象の要素（スライダー）がすべて見えたら再生
      swiper_recipe_5.autoplay.start();
    } else if (entry.intersectionRatio === 0) {
      // 対象の要素（スライダー）がすべて見えなくなったら停止
      swiper_recipe_5.autoplay.stop();
      //swiper_recipe_5.slideToLoop(0); //先頭のスライドへ
    }
  });
}
//IntersectionObserver のオプション
const ioOptions5 = {
  //全て見えるときと全て見えないときを検知するための閾値
  threshold: [0, 1],
  //監視領域のオフセット（見える手前100pxで表示する場合）
  //rootMargin: '100px', 
}
//オブザーバーを生成
const observer5 = new IntersectionObserver(callback5, ioOptions5);
//監視対象の領域（スライダー）を取得 
const target5 = document.getElementById("swiper_recipe_5");
//オブザーバーに監視対象の領域（スライダー）を指定
observer5.observe(target5);








// .swiper_recipe_2
// const swiper_recipe_2 = new Swiper('.js--recipe-2', {
//   loop: true,
//   effect: 'slide',
//   autoplay: {
//     delay: 3000,
//     //disableOnInteraction: false,
//   },
//   speed: 450,
//   grabCursor: true,
//   slidesPerView: 1.3,
//   spaceBetween: 24,
//   //roundLengths: true,
//   navigation: {
//     nextEl: ".js--recipe-next-2",
//     prevEl: ".js--recipe-prev-2",
//   },
//   pagination: {
//     el: ".js--recipe-pagination-2",
//     type: "fraction", // ページネーションのtypeを指定
//     formatFractionCurrent: function (number) {
//       return '0' + number; // 頭に『0』を付ける
//     }
//   }
// });

// // .swiper_recipe_3
// const swiper_recipe_3 = new Swiper('.js--recipe-3', {
//   loop: true,
//   effect: 'slide',
//   autoplay: {
//     delay: 3000,
//     //disableOnInteraction: false,
//   },
//   speed: 450,
//   grabCursor: true,
//   slidesPerView: 1.3,
//   spaceBetween: 24,
//   //roundLengths: true,
//   navigation: {
//     nextEl: ".js--recipe-next-3",
//     prevEl: ".js--recipe-prev-3",
//   },
//   pagination: {
//     el: ".js--recipe-pagination-3",
//     type: "fraction", // ページネーションのtypeを指定
//     formatFractionCurrent: function (number) {
//       return '0' + number; // 頭に『0』を付ける
//     }
//   }
// });

// // .swiper_recipe_4
// const swiper_recipe_4 = new Swiper('.js--recipe-4', {
//   loop: true,
//   effect: 'slide',
//   autoplay: {
//     delay: 3000,
//     //disableOnInteraction: false,
//   },
//   speed: 450,
//   grabCursor: true,
//   slidesPerView: 1.3,
//   spaceBetween: 24,
//   //roundLengths: true,
//   navigation: {
//     nextEl: ".js--recipe-next-4",
//     prevEl: ".js--recipe-prev-4",
//   },
//   pagination: {
//     el: ".js--recipe-pagination-4",
//     type: "fraction", // ページネーションのtypeを指定
//     formatFractionCurrent: function (number) {
//       return '0' + number; // 頭に『0』を付ける
//     }
//   }
// });

// // .swiper_recipe_5
// const swiper_recipe_5 = new Swiper('.js--recipe-5', {
//   loop: true,
//   effect: 'slide',
//   autoplay: {
//     delay: 3000,
//     //disableOnInteraction: false,
//   },
//   speed: 450,
//   grabCursor: true,
//   slidesPerView: 1.3,
//   spaceBetween: 24,
//   //roundLengths: true,
//   navigation: {
//     nextEl: ".js--recipe-next-5",
//     prevEl: ".js--recipe-prev-5",
//   },
//   pagination: {
//     el: ".js--recipe-pagination-5",
//     type: "fraction", // ページネーションのtypeを指定
//     formatFractionCurrent: function (number) {
//       return '0' + number; // 頭に『0』を付ける
//     }
//   }
// });