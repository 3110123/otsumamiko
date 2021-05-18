var clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');
console.log(clickEventType);
var card = document.getElementById('showModal');
var demo = document.getElementById('swipeDemo');
var bookmarkRange = 20


window.setTimeout(function(){
  demo.style.display = "none";
}, 5000);


card.ontouchstart = function(e) {
	// タッチの情報を含むオブジェクト
	var touchObject = e.changedTouches[0];
	// 位置座標を取得する
	window.touchX1 = touchObject.pageX ;
  console.log("start:" + window.touchX1);
}

card.ontouchend = function(e) {
	// タッチの情報を含むオブジェクト
	var touchObject = e.changedTouches[0] ;
	// 位置座標を取得する
	touchX2 = touchObject.pageX ;
  console.log("end:" + touchX2);
  touchswitchToAction(touchX2);
}

function touchswitchToAction(touchX2) {
  var snackId = card.dataset.snack
  if ( touchX2 > window.touchX1 + 20 ){
    console.log("bookmark");
    touchswitchToBookmark(snackId)
  }else if ( touchX2 < window.touchX1 - 20 ){
    console.log("unbookmark");
    touchswitchToUnbookmark(snackId)
  }else{
    console.log("残念");
    return
  }
}

function touchswitchToBookmark(snackId) {
  // 右ドラッグbookmark
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      toastr.success('気になっているおつまみに登録しました！');
    });
  }

function touchswitchToUnbookmark(snackId) {
    // 左ドラッグbookmark解除
    $.ajax({
      type: 'DELETE',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      toastr.error('気になっているおつまみを解除しました。');
    });
}
