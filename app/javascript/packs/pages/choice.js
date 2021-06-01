var q_01 = document.getElementById('q_01');
var q_02 = document.getElementById('q_02');
var q_03 = document.getElementById('q_03');
var q_04 = document.getElementById('q_04');
var qestion_01 = document.getElementById('qestion_01');
var qestion_02 = document.getElementById('qestion_02');
var qestion_03 = document.getElementById('qestion_03');
var qestion_04 = document.getElementById('qestion_04');
var result = document.getElementById('result');

var tagId = [];

var alcoholUrl = location.href;
var ary = alcoholUrl.split('/');
var alcohol = ary[ary.length - 1];

// おかず
q_01.onclick = function(){
  qestion_01.style.display = "none";
  qestion_02.style.display = "block";
  tagId.push(q_01.dataset.id);
  switchToQuestion1();
}

// つまむ
q_02.onclick = function(){
  qestion_01.style.display = "none";
  qestion_03.style.display = "block";
  tagId.push(q_02.dataset.id);
  switchToQuestion2();
}

// 質問2 おかず
function switchToQuestion1() {
  // 肉
  q_03.onclick = function(){
    qestion_02.style.display = "none";
    qestion_04.style.display = "block";
    tagId.push(q_03.dataset.id);
    switchToQuestion3()
  }
  // 魚
  q_04.onclick = function(){
    qestion_02.style.display = "none";
    qestion_04.style.display = "block";
    tagId.push(q_04.dataset.id);
    switchToQuestion3()
  }
}

// 質問2 つまむ
function switchToQuestion2() {
  // ヘルシー
  q_05.onclick = function(){
    qestion_03.style.display = "none";
    qestion_04.style.display = "block";
    tagId.push(q_05.dataset.id);
    switchToQuestion3()
  }
  // 低価格
  q_06.onclick = function(){
    qestion_03.style.display = "none";
    qestion_04.style.display = "block";
    tagId.push(q_06.dataset.id);
    switchToQuestion3()
  }
}

// 質問3
function switchToQuestion3() {
  // おしゃれ
  q_07.onclick = function(){
    qestion_04.style.display = "none";
    tagId.push(q_07.dataset.id);

    $.ajax({
      type: 'get',
      url: '/result',
      data: {
        tag: tagId,
        alcohol: alcohol
      }
    }).done(function() {
      window.location.href = '/result?tag%5B%5D=' + tagId[0] + '&tag%5B%5D=' + tagId[1] + '&tag%5B%5D=' + tagId[2] + '&alcohol=' + alcohol;
    });
  }

  // 定番
  q_08.onclick = function(){
    qestion_04.style.display = "none";
    tagId.push(q_08.dataset.id);

    $.ajax({
      type: 'get',
      url: '/result',
      data: {
        tag: tagId,
        alcohol: alcohol
      }
    }).done(function() {
      window.location.href = '/result?tag%5B%5D=' + tagId[0] + '&tag%5B%5D=' + tagId[1] + '&tag%5B%5D=' + tagId[2] + '&alcohol=' + alcohol;
    });
  }
}
