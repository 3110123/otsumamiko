var card = document.getElementById('showModal');

card.onmousedown = function(e) {
  window.offsetX1 = e.offsetX
}

card.ondragend = function(e) {
  offsetX2 = e.offsetX
  switchToAction(offsetX2);
};

function switchToAction(offsetX2) {
  var snackId = card.dataset.snack
  if ( offsetX2 > window.offsetX1 + 20 ){
    switchToBookmark(snackId)
  }else if ( offsetX2 < window.offsetX1 - 20 ){
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
      toastr.error('気になっているおつまみを解除しました。');
    });
}





// 指タッチ
card.ontouchstart = function(e) {
  window.offsetX1 = e.offsetX
}

card.ontouchend = function(e) {
  offsetX2 = e.offsetX
  switchToAction(offsetX2);
};

function switchToAction(offsetX2) {
  var snackId = card.dataset.snack
  if ( offsetX2 > window.offsetX1 + 20 ){
    switchToBookmark(snackId)
  }else if ( offsetX2 < window.offsetX1 - 20 ){
    switchToUnbookmark(snackId)
  }else{
    return
  }
}

function switchToBookmark(snackId) {
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

function switchToUnbookmark(snackId) {
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
