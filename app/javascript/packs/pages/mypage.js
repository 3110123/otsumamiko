var loadNextPage = function(){
  if ($('#next_link').data("loading")){ return }
  var wBottom  = $(window).scrollTop() + $(window).height();
  var elBottom = $('#records_table').offset().top + $('#records_table').height();
  // data属性をajaxで変更しlastページの場合には処理をreturnさせる。
  var page = $('#pageScroll').attr('data-page');
  var loader = document.getElementById('loader');
  if (page == "last"){
    loader.classList.add('fadeout');
    return
  }
  if (wBottom > elBottom){
    $('#next_link')[0].click();
    $('#next_link').data("loading", true);
  }
};

window.addEventListener('resize', loadNextPage);
window.addEventListener('scroll', loadNextPage);
window.addEventListener('load',   loadNextPage);

setTimeout(callback, 3000)
function callback(){
  loader.classList.add('fadeout');
}