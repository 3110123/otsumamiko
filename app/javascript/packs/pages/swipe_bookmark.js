var card = document.getElementById("exampleModal");
var modal1 = document.getElementById('showModal');
var snackId = modal1.dataset.snack

card.ondragstart = function(){
  onmousedown = function(event){
    offsetX1 = event.offsetX;
  }
  onmouseup = function(event){
    offsetX2 = event.offsetX; 
  }
  if (offsetX2 - offsetX1 > 50){
    console.log("bookmark");
    $.ajax({
      type: 'POST',
      url: '/snacks/' + snackId + '/bookmarks',
      dataType: 'json',
      headers: {
        'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
      }
    });
  }
}
