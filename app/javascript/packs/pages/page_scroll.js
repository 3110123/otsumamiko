// アイコンclickでbookmarkの説明
var beerIconText = document.getElementById('beer_icon_text');
var beerIcon = document.getElementById('beer_icon_btn');

beerIcon.onclick = function(){
  beerIconText.style.display = "block";
  setTimeout(callback, 3000)
}

function callback(){
  beerIconText.style.display = "none";
}


// 無限スクロール
var loadNextPage = function(){
  if ($('#next_link').data("loading")){ return }
  var wBottom  = $(window).scrollTop() + $(window).height();
  var elBottom = $('#records_table').offset().top + $('#records_table').height();
  // data属性をajaxで変更しlastページの場合には処理をreturnさせる。
  var page = $('#pageScroll').attr('data-page');
  if (page == "last"){return}
  if (wBottom > elBottom){
    $('#next_link')[0].click();
    $('#next_link').data("loading", true);
  }
};

window.addEventListener('resize', loadNextPage);
window.addEventListener('scroll', loadNextPage);
window.addEventListener('load',   loadNextPage);


// loading
$(document).on('turbolinks:load', function() {
  $(function(){
    var loader = $('.loader-wrap');

    //ページの読み込みが完了したらアニメーションを非表示
    $(window).on('load',function(){
      loader.fadeOut();
    });

    //ページの読み込みが完了してなくても2秒後にアニメーションを非表示にする
    setTimeout(function(){
      loader.fadeOut();
    },2000);
  });
});