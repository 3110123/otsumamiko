// bookmarkの説明
var ExplanationText = document.getElementById('explanation_text');
var ExplanationOtsumamiko = document.getElementById('explanation_otsumamiko');

ExplanationOtsumamiko.style.display = "block";
ExplanationText.style.display = "block";
setTimeout(callback, 5000)

function callback(){
  ExplanationOtsumamiko.style.display = "none";
  ExplanationText.style.display = "none";
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