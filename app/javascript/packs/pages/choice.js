$(function() {
  //buttonクラスをクリック後の関数処理
  $(".button").on("click", function() {
    //質問画面にあたらる親要素divをdisplay:none;にする
    $(this).closest("div").css("display", "none");
    //次の質問hrefをidに格納
    id = $(this).attr("href");
    //次の質問にfitをつけて出力。
    $(id).addClass("fit").show();
  });
});
