function viewportSet() {
  //var wsw = window.screen.width;
  if (window.screen.width >= 1100 && window.screen.height >= 429) {
    // デバイス横幅428以下
    document.querySelector("meta[name='viewport']").setAttribute("content", "width=device-width,initial-scale=1");
  } else {
    // それ以外
    document.querySelector("meta[name='viewport']").setAttribute("content", "width=1280");
  }
}
window.addEventListener("DOMContentLoaded", viewportSet, false);
window.addEventListener("resize", viewportSet, false);
window.addEventListener("orientationchange", viewportSet, false);