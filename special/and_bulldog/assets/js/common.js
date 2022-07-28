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

// scroll add class
//=====================================================
var EffectH = 100;
$(window).on('scroll load', function() {
  var scTop = $(this).scrollTop();
  var scBottom = scTop + $(this).height();
  var effectPos = scBottom - EffectH;

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

  $('.fadein-2').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(10).queue(function(){
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

  $('.fadeinbottom-2').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $.when(
        $(this).addClass("show")
      ).done(function() {
        $(this).delay(800).queue(function(){
          $(this).addClass("done")
        })
      });
    }
  });

  $('.fadein_fv').each( function() {
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

});

// Parallax
//=====================================================
class ParallaxEffectBackground {
  constructor() {
    this.devided = 5;
    this.target = '.js-parallax-bg';
    this.setBackgroundPosition();
  }

  getScrollTop() {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop,
      window.scrollY
    );
  }

  setBackgroundPosition() {
    document.addEventListener('scroll', e => {
      const scrollTop = this.getScrollTop();
      const position = scrollTop / this.devided;
      if (position) {
        document.querySelectorAll(this.target).forEach(element => {
          element.style.backgroundPosition = 'center top -' + position + 'px';
        });
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', event => {
  new ParallaxEffectBackground();
});

// rellax.js
//=====================================================
var rellax = new Rellax('.js-rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

var rellax = new Rellax('.js-rellax-1', {
  speed: -1,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});