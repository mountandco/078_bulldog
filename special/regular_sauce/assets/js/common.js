/*!
 * jquery v3.7.0
 */

$(function(){
  $('.svgsprout').load('./assets/inc/svg.html'); // headerにinc/header.htmlを読み込む
});

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
// $(function(){
//   setTimeout(function(){
//     $('.imglayout').addClass('active');
//   },500);
//   setTimeout(function(){
//     $('.common__header').addClass('active');
//   },1500);
//   setTimeout(function(){
//     $('.fvarrow').addClass('active');
//   },2000);
// });

// パララックス
//=====================================================
// const image = document.getElementsByClassName('js--simple-parallax');
// new simpleParallax(image, {
//   scale: 1.3
// });

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

// タブ
//=====================================================
// タブ
const tabList = document.querySelectorAll('.tab-list-item');
// タブコンテンツ
const tabContent = document.querySelectorAll('.tab-contents-item');
 
//DOMが読み込み終わったら
document.addEventListener('DOMContentLoaded', function(){
  // タブに対してクリックイベントを適用
  for(let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', tabSwitch);
  }
  // タブをクリックすると実行する関数
  function tabSwitch(){
    // activeクラスを削除
    document.querySelectorAll('.active')[0].classList.remove('active');
    // クリックしたタブにactiveクラスを付与    
    this.classList.add('active');
    // showクラスを削除
    document.querySelectorAll('.show')[0].classList.remove('show');
    // タブを配列風オブジェクトとして定義
    const aryTabs = Array.prototype.slice.call(tabList);
    // クリックしたタブの配列番号を取得     
    const index = aryTabs.indexOf(this);
    // クリックしたタブと同じ配列番号のタブコンテンツにshowクラスを付与
    tabContent[index].classList.add('show');
  };
});

// fadein （section別の指定）
//=====================================================
var EffectH = 140;
$(window).on('scroll load', function() {

  let scTop = $(this).scrollTop();
  let scBottom = scTop + $(this).height();
  let effectPos = scBottom - EffectH;

  // fadein => s0
  $('.fadein, .fadeinbottom, .fadeintop, .fadeinleft, .fadeinright').each( function() {
    let thisPos = $(this).offset().top;
    if ( thisPos < effectPos ) {
      $(this).addClass('showfade')
    }
  });

});