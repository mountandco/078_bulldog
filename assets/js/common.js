// test

/* ----------------------------------------------------------------------------------------------------
*  breakPoint
* --------------------------------------------------------------------------------------------------*/
$windowWidth = window.innerWidth;
$breakPointA = 768;
$breakPointB = 1100;
isSP = ($windowWidth < $breakPointA);
isTB = ($windowWidth <= $breakPointB) && ($windowWidth > $breakPointA);
isPC = ($windowWidth > $breakPointB);
isSPTB = ($windowWidth < $breakPointB);

/* ----------------------------------------------------------------------------------------------------
*  sp 100vh
* --------------------------------------------------------------------------------------------------*/
// 1回のみ取得
// function setHeight() {
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// }

function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
// 初期化
setHeight();
// ブラウザのサイズが変更された時・画面の向きを変えた時に再計算する
window.addEventListener('resize', setHeight);

// 1回のみ取得
// 関数定義
function setHeight2() {
  let vh2 = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh2', `${vh2}px`);
}
setHeight2();

/* 
----------------------------------------------------------------------------------------------------
*  HAMBURGER
* --------------------------------------------------------------------------------------------------*/
// ハンバーガをクリックしたらメニューを表示
$(".header__information__icon").on("click", function () {
	if ($(".header__lists").css("display") === "block") {
		$(".header__lists").slideUp("1500");
		bodyScrollLock.clearAllBodyScrollLocks()
	} else {
		$(".header__lists").slideDown("1500");
		bodyScrollLock.disableBodyScroll(".header__lists")
	}
	$(".header__information__icon span").toggleClass("icon--pad icon--close");
	$("nav").toggleClass("js__nav--disabled js__nav--active");
});

// Windowサイズによってスタイルを変更
$(window).on("load resize", function () {
	if (window.innerWidth > 1100) {
		$(".header__lists").css("display", "flex");
	} else {
		$(".header__lists").css("display", "none");
		$(".header__information__icon span").removeClass("icon--close");
		$(".header__information__icon span").addClass("icon--pad");
		$("nav").removeClass("js__nav--active");
		$("nav").addClass("js__nav--disabled");
		$(".js__link-change").attr("href", "javascript: void(0)");
	}
});

/* ----------------------------------------------------------------------------------------------------
*  ACCORDION
* --------------------------------------------------------------------------------------------------*/
// アコーディオンメニュー
$(".js__nav-item").on("click", function () {
	if (window.matchMedia("(max-width: 1100px)").matches) {
		$(this).children(".js__nav-outer").slideToggle();
		$(this).find(".icon--plus").toggleClass("open");
		/*$(".js__nav-item").not($(this)).children(".js__nav-outer").slideUp();*/
	}
});
// アコーディオンメニュー内の閉じるボタン
$(".header__button--close a[href]").on("click", function (event) {
	$(".header__information__icon").trigger("click");
});

/* ----------------------------------------------------------------------------------------------------
*  SWIPER
* --------------------------------------------------------------------------------------------------*/
// swiperが存在しないページでエラーが出るので別のjsファイルに移植

/* ----------------------------------------------------------------------------------------------------
*  RELLAX
* --------------------------------------------------------------------------------------------------*/

var rellax = new Rellax('.rellax');

/* ----------------------------------------------------------------------------------------------------
*  PAGETOP
* --------------------------------------------------------------------------------------------------*/
function PageTopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 200) {
		$('#page-top').removeClass('downmove');
		$('#page-top').addClass('upmove');
	} else {
		if ($('#page-top').hasClass('upmove')) {
			$('#page-top').removeClass('upmove');
			$('#page-top').addClass('downmove');
		}
	}
	var wH = window.innerHeight;
	var footerPos = $('.footer__siteinformation').offset().top;
	if (scroll + wH >= (footerPos + 10)) {
		var pos = (scroll + wH) - footerPos + 10
		$('#page-top').css('bottom', pos);
	} else {
		if ($('#page-top').hasClass('upmove')) {
			$('#page-top').css('bottom', '30px');
		}
	}
}
$(window).scroll(function () {
	PageTopAnime();
});
$(window).on('load', function () {
	PageTopAnime();
});
$('#page-top').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});

/* ----------------------------------------------------------------------------------------------------
*  header GLOBAL Btn
* --------------------------------------------------------------------------------------------------*/
// modal
//=====================================================
$(function () {
	$('.js-modal-open').each(function () {
		$(this).on('click', function () {
			scrollPosition = $(window).scrollTop();
			$('body').addClass('fixed').css({ 'top': -scrollPosition });
			var target = $(this).data('target');
			var modal = document.getElementById(target);
			$(modal).fadeIn();
			return false;
		});
	});
	$('.js-modal-close').on('click', function () {
		$('body').removeClass('fixed').css({ 'top': 0 });
		window.scrollTo(0, scrollPosition);
		$('.js-modal').fadeOut();
		return false;
	});
});


/* ----------------------------------------------------------------------------------------------------
*  footprints
* --------------------------------------------------------------------------------------------------*/
$(function(global) {
	let ClassCycler = function(opt) {
		let timer,
		execCycle = (function() {
			let $item = opt.$targetElm,
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

$(window).scroll(function () {
	$('.js-bg-fadein-footprints-show').each(function () {
		let hit = $(this).offset().top;
		let scroll = $(window).scrollTop();
		let wHeight = $(window).height();
		if (scroll > hit - wHeight + wHeight / 100 + 80 && $(this)) { // 高さ調整
			new ClassCycler({
				$targetElm: $(this).children().children().children().children(), //連続Class付与させたいセレクタの指定
				cycleClassName: 'show',// 付与するClassName
				duration: 120, // 連続する間隔
				startImmediate: true,// 初期状態から1つ目に付与するのか
				oneWay: true // 付け替え or 付けて終わり
			});
		}
	});
});

/* ----------------------------------------------------------------------------------------------------
*  scroll add class
* --------------------------------------------------------------------------------------------------*/
// ページ読み込み時
window.addEventListener('load', function () {
	$('.js-fadein-fv').delay(500).addClass('show');
});

var EffectH = 100;
$(window).on('scroll load', function () {
	var scTop = $(this).scrollTop();
	var scBottom = scTop + $(this).height();
	var effectPos = scBottom - EffectH;

	$('.js-image-grayscale').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(500).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.fadein').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(160).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.fadein-2').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(10).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.fadeinbottom').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(1000).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.fadeinbottom-2').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(160).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.fadein_fv').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(700).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.fadeintop').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(100).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.fadeinleft').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(100).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.fadeinright').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(100).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

});
/* ----------------------------------------------------------------------------------------------------
*  OTHER
* --------------------------------------------------------------------------------------------------*/

$(window).on("load resize", function () {
	if (window.innerWidth < 767) {
		$(".bull-kitchen__right .button--more").insertAfter(".bull-kitchen__inner");
	}
});

$(function () {
	$('.popup__button--open').on("click", function () {
		$(this).next('div').slideToggle();
		$(this).find(".icon").toggleClass('open');
	});
});

//汎用 スムーズスクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
	smoothScrollTrigger[i].addEventListener('click', (e) => {
		e.preventDefault();
		let href = smoothScrollTrigger[i].getAttribute('href');
		let targetElement = document.getElementById(href.replace('#', ''));
		const rect = targetElement.getBoundingClientRect().top;
		const offset = window.pageYOffset;
		const gapSPTB = 65;
		const gapPC = 0;
		const targetSPTB = rect + offset - gapSPTB;
		const targetPC = rect + offset - gapPC;
		if(isSPTB) {
			window.scrollTo({
				top: targetSPTB,
				behavior: 'smooth',
			});
		}
		if(isPC) {
			window.scrollTo({
				top: targetPC,
				behavior: 'smooth',
			});
		}
	});
}

// urlに#が含まれている場合 sp固定header対策
window.addEventListener('load', function () {
	if (window.innerWidth < 767) {
		const url = $(location).attr('href'),
		headerHeight = $('header').outerHeight() + 30;
		if(url.indexOf("#") != -1){
			const anchor = url.split("#"),
			target = $('#' + anchor[anchor.length - 1]),
			position = Math.floor(target.offset().top) - headerHeight;
			$("html, body").animate({scrollTop:position}, 500);
		}
	}
});

// トップページFV直下の赤背景ナビが下層ページに存在していた場合
$(function () {
	if ($('main').hasClass('underlayer')) {
		$('.page__nav').addClass('layout__page__nav--underlayer');
	}
});

