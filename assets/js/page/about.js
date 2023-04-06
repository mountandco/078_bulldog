/* ----------------------------------------------------------------------------------------------------
*  page => /about/
* --------------------------------------------------------------------------------------------------*/
window.addEventListener('load', function () {
	$('body').addClass('body-about-page');
	setTimeout(function(){
		$('.about-page__kv').addClass('show');
		setTimeout(function(){
			$('.about-page__kv').addClass('done');
		},50);
	},700);
});

let timer = 0;
let currentWidth = window.innerWidth;
$(window).resize(function(){
  if (currentWidth == window.innerWidth) {
    return;
  }
  if (timer > 0) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    location.reload();
  }, 200);
});