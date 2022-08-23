/* ----------------------------------------------------------------------------------------------------
*  userAgent
* --------------------------------------------------------------------------------------------------*/

var agent       = navigator.userAgent; // ユーザーエージェント
var htmlElement = document.documentElement; // html要素

// UserAgentで振り分けてhtmlにclassを振る
if (navigator.platform.search("Mac") != -1) { htmlElement.className += ' mac'; }
if(agent.search("Windows") != -1){
  htmlElement.className += ' win';
  if((agent.search("Trident") != -1) || ((agent.search("MSIE") != -1))) {
    htmlElement.className += ' ie';
      if(agent.search("Trident") != -1) { htmlElement.className += ' gte_ie8'; }
      if(agent.search("Trident") == -1) { htmlElement.className += ' lte_ie8'; }
      if(agent.search("MSIE 7") != -1){ htmlElement.className += ' ie7'; }
      if(agent.search("MSIE 8") != -1){ htmlElement.className += ' ie8'; }
      if(agent.search("MSIE 9") != -1){ htmlElement.className += ' ie9'; }
      if(agent.search("MSIE 10") != -1){ htmlElement.className += ' ie10'; }
      if(agent.search("Trident/7") != -1){ htmlElement.className += ' ie11'; }
  }
}
if((agent.search("Chrome") != -1) && (agent.search("OPR") == -1)){ htmlElement.className += ' chrome'; }
if((agent.search("Safari") != -1) && (agent.search("Chrome") == -1) && (agent.search("OPR") == -1) && (agent.search("Presto") == -1)) { htmlElement.className += ' safari'; }
if(agent.search("Firefox") != -1) { htmlElement.className += ' firefox'; }
if(agent.search("iPad") != -1){ htmlElement.className += ' ipad'; }
if(agent.search("iPhone") != -1){ htmlElement.className += ' iphone'; }
if(agent.search("Android") != -1){ htmlElement.className += ' android'; }