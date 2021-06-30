// bookmarkの説明
var ExplanationText = document.getElementById('explanation_text');
var ExplanationOtsumamiko = document.getElementById('explanation_otsumamiko');

if (ExplanationText !== null){
  ExplanationOtsumamiko.style.display = "block";
  ExplanationText.style.display = "block";
  setTimeout(callback, 5000)
}

function callback(){
  ExplanationOtsumamiko.style.display = "none";
  ExplanationText.style.display = "none";
}

// 無限スクロール
var loadNextPage = function(){
  const observer = lozad();
  observer.observe();

  if ($('#next_link').data("loading")){ return }
  var records_table = document.getElementById('records_table');
    if (records_table == null){ return }
  var wBottom  = $(window).scrollTop() + $(window).height();
  var elBottom = $('#records_table').offset().top + $('#records_table').height();

  var page = $('#pageScroll').attr('data-page');
  var loader = document.getElementById('loader');
  if (page == "last"){
    loader.classList.add('fadeout');
    return
  }
  if (wBottom > elBottom){
    var nextLink = document.getElementById('next_link');
    if (nextLink == null){ return }
    $('#next_link')[0].click();
    $('#next_link').data("loading", true);
  }
};

window.addEventListener('resize', loadNextPage);
window.addEventListener('scroll', loadNextPage);
window.addEventListener('load',   loadNextPage);

setTimeout(function(){
  loader.classList.add('fadeout');
}, 3000)