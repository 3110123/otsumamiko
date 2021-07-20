const snack = document.getElementById('chart');
const snackIdChart = snack.dataset.snackId
const sweetness = snack.dataset.sweetnessValue
const salty = snack.dataset.saltyValue
const acidity = snack.dataset.acidityValue
const taste = snack.dataset.tasteValue
const scent = snack.dataset.scentValue

const ctx = document.getElementById("myRaderChart" + - + snackIdChart).getContext('2d');
const myRadarChart = new Chart(ctx, {
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

// bookmark
const card = document.getElementById('showModal');
const modalClose = document.getElementById('modalClose');
const mouseBookmarkRange = 100
const touchBookmarkRange = 500
const fadeout = 0;
bookmarkFadeout = fadeout + 20;
unbookmarkFadeout = fadeout + -20;
const userPresence = card.dataset.user
const alertReview = document.getElementById('alert-review');

card.onmousedown = function(e) {
  window.offsetX1 = e.pageX
}

card.ondragend = function(e) {
  offsetX2 = e.pageX
  switchToAction(offsetX2);
}

card.ontouchstart = function(e) {
	const touchObject = e.changedTouches[0];
	window.touchX1 = touchObject.pageX;
}

card.ontouchend = function(e) {
	const touchObject = e.changedTouches[0];
	touchX2 = touchObject.pageX;
  touchswitchToAction(touchX2);
}

function switchToAction(offsetX2) {
  const snackId = card.dataset.snack
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
  const snackId = card.dataset.snack
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

// review
if(alertReview){
  alertReview.addEventListener('click', function(){
      toastr.error('ログインが必要です。');
  }, false);
}