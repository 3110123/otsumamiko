var card = document.getElementById("exampleModal");

card.ondragstart = function(){
  var modal1 = document.getElementById('showModal');
  var snackId = modal1.dataset.snack

  onmousedown = function(e){
    window.offsetX1 = e.offsetX;
  }
  onmouseup = function(e){
    window.offsetX2 = e.offsetX;
  }

  var right = window.offsetX2 - window.offsetX1;
  // 右ドラッグbookmark
  if ( right > 50){
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    })
  }else if( right < -150){
    // 左ドラッグbookmark解除
    $.ajax({
      type: 'DELETE',
      url: '/snacks/' + snackId + '/bookmarks',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    })
  }else{
    console.log("できてなーいよ");
    return
  }
}

