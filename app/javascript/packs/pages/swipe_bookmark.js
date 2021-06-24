var card = document.getElementById('showModal');
var modalClose = document.getElementById('modalClose');
var mouseBookmarkRange = 100
var touchBookmarkRange = 500
var fadeout = 0;
bookmarkFadeout = fadeout + 20;
unbookmarkFadeout = fadeout + -20;
var userPresence = card.dataset.user

card.onmousedown = function(e) {
  window.offsetX1 = e.pageX
}

card.ondragend = function(e) {
  offsetX2 = e.pageX
  switchToAction(offsetX2);
}

card.ontouchstart = function(e) {
	var touchObject = e.changedTouches[0];
	window.touchX1 = touchObject.pageX;
}

card.ontouchend = function(e) {
	var touchObject = e.changedTouches[0];
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

function switchToBookmark(snackId) {
  if (userPresence === 'false') {
    toastr.error('ログインが必要です。');
    return false;
  }
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      card.style.transform = "rotate(" + bookmarkFadeout + "deg)";
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
    $.ajax({
      type: 'DELETE',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      card.style.transform = "rotate(" + unbookmarkFadeout + "deg)";
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
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      card.style.transform = "rotate(" + bookmarkFadeout + "deg)";
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
    $.ajax({
      type: 'DELETE',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      card.style.transform = "rotate(" + unbookmarkFadeout + "deg)";
      modalClose.click();
      toastr.error('解除しました。');
    }).fail(function() {
      toastr.error('すでに解除されています！');
    });
}
