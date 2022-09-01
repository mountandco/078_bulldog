/* ----------------------------------------------------------------------------------------------------
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
$(function (global) {
	var ClassCycler = function (opt) {
		var timer,
			execCycle = (function () {
				var $item = opt.$targetElm,
					index = 0,
					max = $item.length;
				return function () {
					if (!opt.oneWay) {
						$item.removeClass(opt.cycleClassName);
					}
					$item.eq(index).addClass(opt.cycleClassName);
					index = (++index === max) ? 0 : index;
					if (opt.oneWay && index === 0) {
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
	$('.bg-fadein-footprints.nth-1').each(function () {
		var hit = $(this).offset().top;
		var scroll = $(window).scrollTop();
		var wHeight = $(window).height();

		if (matchMedia('only screen and (max-width: 767px)').matches) {
			//  sp & tb
		} else {
			// pc
		}

		if (scroll > hit - wHeight + wHeight / 100 + 430) {
			$(function () {
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

// 汎用 スムーズスクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
	smoothScrollTrigger[i].addEventListener('click', (e) => {
		e.preventDefault();
		let href = smoothScrollTrigger[i].getAttribute('href');
		let targetElement = document.getElementById(href.replace('#', ''));
		const rect = targetElement.getBoundingClientRect().top;
		const offset = window.pageYOffset;
		const gap = 0;
		const target = rect + offset - gap;
		window.scrollTo({
			top: target,
			behavior: 'smooth',
		});
	});
}

// トップページFV直下の赤背景ナビが下層ページに存在していた場合
$(function () {
	if ($('main').hasClass('underlayer')) {
		$('.page__nav').addClass('layout__page__nav--underlayer');
	}
});

