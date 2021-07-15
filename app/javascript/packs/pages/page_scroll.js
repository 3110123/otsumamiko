// bookmarkの説明
const ExplanationText = document.getElementById('explanation_text');
const ExplanationOtsumamiko = document.getElementById('explanation_otsumamiko');

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
const loadNextPage = function(){
  const observer = lozad();
  observer.observe();

  if ($('#next_link').data("loading")){ return }
  const records_table = document.getElementById('records_table');

  if (records_table == null){ return }
  const wBottom  = $(window).scrollTop() + $(window).height();
  const elBottom = $('#records_table').offset().top + $('#records_table').height();

  const page = $('#pageScroll').attr('data-page');
  const loader = document.getElementById('loader');
  if (page == "last"){
    loader.classList.add('fadeout');
    return
  }
  if (wBottom > elBottom){
    const nextLink = document.getElementById('next_link');
    if (nextLink == null){ return }
    $('#next_link')[0].click();
    $('#next_link').data("loading", true);
  }
};

window.addEventListener('resize', loadNextPage);
window.addEventListener('scroll', loadNextPage);
window.addEventListener('load',   loadNextPage);
