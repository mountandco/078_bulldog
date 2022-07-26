// sp 100vh
//=====================================================
// リサイズ対応
// 関数定義
function setHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
// 初期化
setHeight();
// ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
window.addEventListener('resize', setHeight);

// 1回のみ取得
// 関数定義
function setHeight2() {
  const vh2 = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh2', `${vh2}px`);
}

// g-nav modal
//=====================================================
$(function() {
  var scrollPos;//topからのスクロール位置
  $('body').on( 'click', '.js-modal-nav-open', function() {
    scrollPos = $(window).scrollTop();//topからのスクロール位置を格納
    $('.modal-nav').fadeIn();//モーダルをフェードイン
    $('.modal-nav').addClass('modal-nav__fadein');
    $('.modal-nav').removeClass('modal-nav__fadeout');
    //$('.js-modal-nav-close').fadeIn();//モーダルをフェードイン
    $('body').addClass('fixed').css({ top: -scrollPos });//背景固定
    $('.btn-hamburger.js-modal-nav-open').addClass('js-modal-nav-close');
    $('.btn-hamburger.js-modal-nav-open').removeClass('js-modal-nav-open');
    //return false;//<a>を無効化
  });

  $('body').on( 'click', '.js-modal-nav-close', function() {
    $('.modal-nav').fadeOut();//モーダルをフェードアウト
    $('.modal-nav').addClass('modal-nav__fadeout');
    $('.modal-nav').removeClass('modal-nav__fadein');
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $('.btn-hamburger.js-modal-nav-close').addClass('js-modal-nav-open');
    $('.btn-hamburger.js-modal-nav-close').removeClass('js-modal-nav-close');
    $(window).scrollTop(scrollPos);//元の位置までスクロール
    //return false;//<a>を無効化
  });

  // ページ内リンク対策
  $('body').on( 'click', '.js-modal-nav-close-a', function() {
    $('.modal-nav').fadeOut();//モーダルをフェードアウト
    $('.modal-nav').addClass('modal-nav__fadeout');
    $('.modal-nav').removeClass('modal-nav__fadein');
    $('body').removeClass('fixed').css({ top: 0 });//背景固定を解除
    $('.js-ic_menu').removeClass('none');//ハンバーガーアイコン表示
    $('.js-modal-nav-close').addClass('js-modal-nav-open');
    $('.js-modal-nav-close').removeClass('js-modal-nav-close');
  });

});

// scroll モーダル内やタブなど:not指定
// $(function(){
//   $('a[href^="#"]:not(.modal-nav__menu--ul a)').click(function(){
//     var speed = 500;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     return false;
//   });
// });

// scroll smoos
//=====================================================
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 1200;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// empty
//=====================================================
$(function(){
    var elem = "";
    for (var i = -1; ++i < 3;) {
        elem += '<span class="empty"></span>';
    }
    $(".emptyBox").append(elem);
});

// scroll add class
//=====================================================
// $(window).on('load', function(){

//   $('.header').addClass('onload');
//   setTimeout(function(){
//     $('.header').addClass('onloadfix');
//   },600);

//   $('.fv__center').addClass('onload');
//   setTimeout(function(){
//     $('.fv__center').addClass('onloadfix');
//   },500);

// }); // END window on load

var EffectH = 100;
$(window).on('scroll load', function() {
  var scTop = $(this).scrollTop();
  var scBottom = scTop + $(this).height();
  var effectPos = scBottom - EffectH;

  $('.js-span-wrap-text').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(100).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(160).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s1').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(320).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s2').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(620).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });


  $('.fadein-s3').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(920).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s4').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(1220).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s5').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(1520).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s6').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(1820).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s7').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(2120).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s8').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(2420).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s9').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(2720).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-s10').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(3020).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein-fv').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(700).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadeinbottom').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(100).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadeinbottom-d2').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(300).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadeinbottom-d3').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(500).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadeinbottom-d500').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(500).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });


  $('.fadeinbottom-d1000').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(1000).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadeintop').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(100).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadeinleft').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(100).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadeinright').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(100).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fade_ttl_products').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(100).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

});
