var card = document.getElementById('showModal');
var modalClose = document.getElementById('modalClose');
var mouseBookmarkRange = 100
var touchBookmarkRange = 300
var userPresence = card.dataset.user

// PCmouseイベント
card.onmousedown = function(e) {
  window.offsetX1 = e.pageX
}

card.ondragend = function(e) {
  offsetX2 = e.pageX
  switchToAction(offsetX2);
}

// スマホtouchイベント
card.ontouchstart = function(e) {
	// タッチの情報を含むオブジェクト
	var touchObject = e.changedTouches[0];
	// 位置座標を取得する
	window.touchX1 = touchObject.pageX;
}

card.ontouchend = function(e) {
	// タッチの情報を含むオブジェクト
	var touchObject = e.changedTouches[0];
	// 位置座標を取得する
	touchX2 = touchObject.pageX;
  touchswitchToAction(touchX2);
}

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
  if (userPresence === 'false') {
    toastr.error('ログインが必要です。');
    return false;
  }
  // 右ドラッグbookmark
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      modalClose.click();
      toastr.success('登録しました！');
    }).fail(function() {
      toastr.error('すでに登録されています！');
    });
  }

function switchToUnbookmark(snackId) {
  if (userPresence === 'false') {
    toastr.error('ログインが必要です。');
    return false;
  }
    // 左ドラッグbookmark解除
    $.ajax({
      type: 'DELETE',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      modalClose.click();
      toastr.error('解除しました。');
    }).fail(function() {
      toastr.error('すでに解除されています！');
    });
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
  if (userPresence === 'false') {
    toastr.error('ログインが必要です。');
    return false;
  }
  // 右ドラッグbookmark
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      modalClose.click();
      toastr.success('登録しました！');
    }).fail(function() {
      toastr.error('すでに登録されています！');
    });
  }

function touchswitchToUnbookmark(snackId) {
  if (userPresence === 'false') {
    toastr.error('ログインが必要です。');
    return false;
  }
    // 左ドラッグbookmark解除
    $.ajax({
      type: 'DELETE',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      modalClose.click();
      toastr.error('解除しました。');
    }).fail(function() {
      toastr.error('すでに解除されています！');
    });
}
