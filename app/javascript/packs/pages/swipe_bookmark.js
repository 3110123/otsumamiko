var snack = document.getElementById('chart');
var snackIdChart = snack.dataset.snackId
var sweetness = snack.dataset.sweetnessValue
var salty = snack.dataset.saltyValue
var acidity = snack.dataset.acidityValue
var taste = snack.dataset.tasteValue
var scent = snack.dataset.scentValue

var ctx = document.getElementById("myRaderChart" + - + snackIdChart).getContext('2d');
var myRadarChart = new Chart(ctx, {
        type: 'radar', 
        data: { 
            labels: ["甘味", "塩味", "酸味", "旨味", "香り"],
            datasets: [{
                label: '',
                data: [
                  sweetness,
                  salty,
                  acidity,
                  taste,
                  scent
                ],
                backgroundColor: 'RGBA(95,194,227, 0.5)',
                borderColor: 'RGBA(95,194,227, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(95,194,227)'
            }]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            scale:{
                pointLabels: {
                    fontSize: 25,
                    fontColor: "#aaaaaa"
                },
                ticks:{
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1,
                    fontSize: 25,
                    fontColor: "#aaaaaa",      
                    callback: function(value){
                        return  value
                    }
                }
            }
        },
    });

// review
var alertReview = document.getElementById('alert-review');
if (typeof alertReview !== undefined) {
  alertReview.onclick = function(){
    toastr.error('ログインが必要です。');
  }
}

// bookmark
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
