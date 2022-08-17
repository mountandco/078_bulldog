/* ----------------------------------------------------------------------------------------------------
*  tab
* --------------------------------------------------------------------------------------------------*/

// tab マークアップ雛形
//<div class="tab-layout">
//    <ul class="tab-layout__btns tab-group">
//        <li class="tab-layout__btns--btn tab-A tab-active">Tab-A</li>
//        <li class="tab-layout__btns--btn tab-B">Tab-B</li>
//        <li class="tab-layout__btns--btn tab-C">Tab-C</li>  
//    </ul>
//    <div class="tab-layout__contents">
//        <div class="tab-layout__contents--area tab-A tab-show">Content-A</div>
//        <div class="tab-layout__contents--area tab-B">Content-B</div>
//        <div class="tab-layout__contents--area tab-C">Content-C</div>
//    </div>
//</div>

document.addEventListener('DOMContentLoaded', function(){
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName('tab-layout__btns--btn');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch, false);
  }

  // タブをクリックすると実行する関数
  function tabSwitch(){
    // タブのclassの値を変更
    document.getElementsByClassName('tab-active')[0].classList.remove('tab-active');
    this.classList.add('tab-active');
    // コンテンツのclassの値を変更
    document.getElementsByClassName('tab-show')[0].classList.remove('tab-show');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('tab-layout__contents--area')[index].classList.add('tab-show');
  };
}, false);