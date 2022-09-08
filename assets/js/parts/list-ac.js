/* ----------------------------------------------------------------------------------------------------
*  .list-ac
* --------------------------------------------------------------------------------------------------*/

$(function(){
  $('.list-ac__dt').click(function(){
    $(this).next('.list-ac__dd').slideToggle();
    $(this).toggleClass('open');
  });
});

// 別ページから #付きのurlを叩かれた場合、対応したacMenuを開く
$(function () {
  const url_hash = location.hash;
  if (!$(url_hash).length) return;
  $(url_hash).find('.list-ac__dd').slideToggle();
  $(url_hash).toggleClass('open');
});
