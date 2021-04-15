$(document).ready(function() {
  // navbar burgerアイコンでクリックイベントを確認する
  $(".navbar-burger").click(function() {
      // 「navbar-burger」と「navbar-menu」の両方で「is-active」クラスを切り替える
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});