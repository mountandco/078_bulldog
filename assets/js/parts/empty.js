/* ----------------------------------------------------------------------------------------------------
*  empty
* --------------------------------------------------------------------------------------------------*/
// flexのstyle => space-betweenの時の奇数時のレイアウト崩れ調整
$(function() {
  var elem = "";
  for (var i = -1; ++i < 3;) {
      elem += '<span class="empty"></span>';
  }
  $(".empty-box.company-empty").append(elem);
});