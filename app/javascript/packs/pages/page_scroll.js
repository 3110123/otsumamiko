var loadNextPage = function(){
  if ($('#next_link').data("loading")){ return }  // prevent multiple loading
  var wBottom  = $(window).scrollTop() + $(window).height();
  var elBottom = $('#records_table').offset().top + $('#records_table').height();
  if (wBottom > elBottom){
    $('#next_link')[0].click();
    $('#next_link').data("loading", true);
  }
};

window.addEventListener('resize', loadNextPage);
window.addEventListener('scroll', loadNextPage);
window.addEventListener('load',   loadNextPage);
