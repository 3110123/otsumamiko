var card = document.getElementById('exampleModal');

document.getElementById('exampleModal').onmousedown = function(e){
  window.offsetX1 = e.offsetX;
}

document.getElementById('exampleModal').onmouseup = function(e){
  window.offsetX2 = e.offsetX;
}

// マウスタッチ
card.ondragstart = function(){
  console.log("マウスだよ");
  var modal = document.getElementById('showModal');
  var snackId = modal.dataset.snack

  var right = window.offsetX2 - window.offsetX1;
  var url = '/snacks/' + snackId + '/bookmarks';
  // 右ドラッグbookmark
  if ( right > 50){
    $.ajax({
      type: 'POST',
      url: url,
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      toastr.success('気になっているおつまみに登録しました！');
    });
  }else if( right < -130){
    // 左ドラッグbookmark解除
    $.ajax({
      type: 'DELETE',
      url: url,
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      toastr.error('気になっているおつまみを解除しました。');
    });
  }else{
    console.log("できてなーいよっがんばれ！");
    return
  }
}


// 指タッチ
card.touchmove = function(){
  console.log("ゆびだよ");
  var modal = document.getElementById('showModal');
  var snackId = modal.dataset.snack

  touchstart = function(e){
    window.offsetX1 = e.offsetX;
  }
  touchend = function(e){
    window.offsetX2 = e.offsetX;
  }

  var right = window.offsetX2 - window.offsetX1;
  var url = '/snacks/' + snackId + '/bookmarks';
  // 右ドラッグbookmark
  if ( right > 50){
    $.ajax({
      type: 'POST',
      url: url,
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      toastr.success('気になっているおつまみに登録しました！');
    });
  }else if( right < -150){
    // 左ドラッグbookmark解除
    $.ajax({
      type: 'DELETE',
      url: url,
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function() {
      toastr.error('気になっているおつまみを解除しました。');
    });
  }else{
    console.log("できてなーいよっがんばれ！");
    return
  }
}
