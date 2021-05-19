var card = document.getElementById('showModal');
var demo = document.getElementById('swipeDemo');
var mouseBookmarkRange = 20
var touchBookmarkRange = 300

window.setTimeout(function(){
  demo.style.display = "none";
}, 5000);


// PCmouseイベント
card.onmousedown = function(e) {
  window.offsetX1 = e.offsetX
}

card.ondragend = function(e) {
  offsetX2 = e.offsetX
  switchToAction(offsetX2);
};

function switchToAction(offsetX2) {
  var snackId = card.dataset.snack
  if ( offsetX2 > window.offsetX1 + mouseBookmarkRange ){
    switchToBookmark(snackId)
  }else if ( offsetX2 < window.offsetX1 - mouseBookmarkRange ){
    switchToUnbookmark(snackId)
  }else{
    return
  }
}

// マウス
function switchToBookmark(snackId) {
  // 右ドラッグbookmark
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      document.elementFromPoint(100, 100).click();
      toastr.success('気になっているおつまみに登録しました！');
    });
  }

function switchToUnbookmark(snackId) {
    // 左ドラッグbookmark解除
    $.ajax({
      type: 'DELETE',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      document.elementFromPoint(100, 100).click();
      toastr.error('気になっているおつまみを解除しました。');
    });
}

// スマホtouchイベント
card.ontouchstart = function(e) {
	// タッチの情報を含むオブジェクト
	var touchObject = e.changedTouches[0];
	// 位置座標を取得する
	window.touchX1 = touchObject.pageX ;
}

card.ontouchend = function(e) {
	// タッチの情報を含むオブジェクト
	var touchObject = e.changedTouches[0] ;
	// 位置座標を取得する
	touchX2 = touchObject.pageX ;
  touchswitchToAction(touchX2);
}

function touchswitchToAction(touchX2) {
  var snackId = card.dataset.snack
  if ( touchX2 > window.touchX1 + touchBookmarkRange ){
    touchswitchToBookmark(snackId)
  }else if ( touchX2 < window.touchX1 - touchBookmarkRange ){
    touchswitchToUnbookmark(snackId)
  }else{
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
      document.elementFromPoint(100, 100).click();
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
      document.elementFromPoint(100, 100).click();
      toastr.error('気になっているおつまみを解除しました。');
    });
}
