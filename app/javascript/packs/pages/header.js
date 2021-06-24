$(document).on('turbolinks:load', function() {
  $(function () {
    $('#nav-toggle').on('click', function() {
      $('body').toggleClass('open');
    });
  });
});