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
  if ( right > 50){
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      dataType: 'json',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function (results){
      console.log("create成功");
    })
  }else if( right < -150){
    $.ajax({
      type: 'DELETE',
      url: '/snacks/' + snackId + '/bookmarks',
      dataType: 'json',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    }).done(function (results){
      console.log("destroy成功");
    })
  }else{
    console.log("できてなーいよ");
    return
  }
}

