var navToggle = document.getElementById('nav-toggle');
if(navToggle){
  navToggle.addEventListener('click', function(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.toggle('open');
  }, false);
}