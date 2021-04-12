$(function() {

  toastr.options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

  $("button").click(function() {
		//トーストを表示したタイミングで、以下のコードを実行すると、トーストが表示されます
		toastr["info"]("まもなくタイムセールが終了！！！このチャンスをお見逃しなく", "お知らせ");
	});
});