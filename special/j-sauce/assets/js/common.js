/*!
 * jquery v3.6.0
 */

// OS判定
//=====================================================
var ua = window.navigator.userAgent.toLowerCase();
if(ua.indexOf("windows nt") !== -1) {
  //console.log("「Microsoft Windows」をお使いですね!");
  $('body').addClass('os-windows');
} else if(ua.indexOf("android") !== -1) {
  //console.log("「Android」をお使いですね!");
  $('body').addClass('os-android');
} else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
  //console.log("「iOS」をお使いですね!");
  $('body').addClass('os-ios');
} else if(ua.indexOf("mac os x") !== -1) {
  //console.log("「macOS」をお使いですね!");
  $('body').addClass('os-mac');
} else {
  //console.log("何をお使いなのですか?");
}

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

setHeight2();

// scroll smoos
//=====================================================
$(function(){
  $('a[href^="#"]').click(function(){
    const speed = 500;
    const href= $(this).attr("href");
    const target = $(href == "#" || href == "" ? 'html' : href);
    const position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// .emptyBox
//=====================================================
$(function(){
  let elem = "";
  for (let i = -1; ++i < 3;) {
    elem += '<span class="empty"></span>';
  }
  $(".emptybox").append(elem);
});

// FVのfadein
//=====================================================
window.addEventListener('load', () => {
  setTimeout(function(){
    $('.imglayout').addClass('active');
  },600);
  setTimeout(function(){
    $('.common__header').addClass('active');
  },1900);
  setTimeout(function(){
    $('.fvarrow').addClass('active');
  },2050);
})

// パララックス
//=====================================================
var image = document.getElementsByClassName('js--simple-parallax');
new simpleParallax(image);

// fadein
//=====================================================
var EffectH = 140;
$(window).on('scroll load', function() {

  var scTop = $(this).scrollTop();
  var scBottom = scTop + $(this).height();
  var effectPos = scBottom - EffectH;

  // sec01のfadein
  $('.sec01').each( function() {
    var thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      setTimeout(function(){
        $('.js-sec01_fadein01').addClass('active');
      },10);
      setTimeout(function(){
        $('.js-sec01_fadein02').addClass('active');
      },600);
      setTimeout(function(){
        $('.js-sec01_fadein03').addClass('active');
      },1000);
      setTimeout(function(){
        $('.js-sec01_fadein04').addClass('active');
      },1250);
      setTimeout(function(){
        $('.js-sec01_fadein05').addClass('active');
      },1500);
    }
  });

});