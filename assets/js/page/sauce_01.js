/* ----------------------------------------------------------------------------------------------------
*  page => /about/
* --------------------------------------------------------------------------------------------------*/
$windowWidth = window.innerWidth;
$breakPointA = 768;
$breakPointB = 1100;
isSP = ($windowWidth < $breakPointA);
isTB = ($windowWidth <= $breakPointB) && ($windowWidth > $breakPointA);
isPC = ($windowWidth > $breakPointB);
isSPTB = ($windowWidth < $breakPointB);

var EffectH = 100;
$(window).on('scroll load', function () {
	var scTop = $(this).scrollTop();
	var scBottom = scTop + $(this).height();
	var effectPos = scBottom - EffectH;

	$('.sauce-01-layout-1-sauce__image').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(200).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

	$('.sauce-01-layout-1-content-box__column-1--li').each(function () {
		var thisPos = $(this).offset().top;
    if(isPC) {
      if (thisPos < effectPos) {
        $.when(
          $(this).addClass("show")
        ).done(function () {
          $(this).delay(800).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    }
    if(isSPTB) {
      if (thisPos < effectPos) {
        $.when(
          $(this).addClass("show")
        ).done(function () {
          $(this).delay(0).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    }
	});

	$('.js-sauce-01-column-2-image-fade').each(function () {
		var thisPos = $(this).offset().top;
    if(isPC) {
      if (thisPos < effectPos) {
        $.when(
          $(this).addClass("show")
        ).done(function () {
          $(this).delay(1500).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    }
    if(isSPTB) {
      if (thisPos < effectPos) {
        $.when(
          $(this).addClass("show")
        ).done(function () {
          $(this).delay(500).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    }
	});

	$('.js-firing-01').each(function () {
		var thisPos = $(this).offset().top;
    if(isPC) {
      if (thisPos < effectPos) {
        $.when(
          $(this).addClass("show")
        ).done(function () {
          $(this).delay(4000).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    }
    if(isSPTB) {
      if (thisPos < effectPos) {
        $.when(
          $(this).addClass("show")
        ).done(function () {
          $(this).delay(1000).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    }
	});

  $('.js-firing-02').each(function () {
		var thisPosPC = $(this).offset().top - 200;
    var thisPosTBSP = $(this).offset().top;
    if(isPC) {
      if (thisPosPC < effectPos) {
        $.when(
          $(this).addClass("show")
        ).done(function () {
          $(this).delay(4000).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    }
    if(isSPTB) {
      if (thisPosTBSP < effectPos) {
        $.when(
          $(this).addClass("show")
        ).done(function () {
          $(this).delay(500).queue(function () {
            $(this).addClass("done")
          })
        });
      }
    }
	});

	$('.sauce-01-anime').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when(
				$(this).addClass("show")
			).done(function () {
				$(this).delay(1500).queue(function () {
					$(this).addClass("done")
				})
			});
		}
	});

});