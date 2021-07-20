document.addEventListener("turbolinks:load", function(){
      const $footer = $('#footer');
      if(window.innerHeight > $footer.offset().top + $footer.outerHeight() ) {
          $footer.attr({'style': 'position:fixed; top:' + (window.innerHeight - $footer.outerHeight()) + 'px;' });
      }
  })