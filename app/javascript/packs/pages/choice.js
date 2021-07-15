const q_01 = document.getElementById('q_01');
const q_02 = document.getElementById('q_02');
const q_03 = document.getElementById('q_03');
const q_04 = document.getElementById('q_04');
const qestion_01 = document.getElementById('qestion_01');
const qestion_02 = document.getElementById('qestion_02');
const qestion_03 = document.getElementById('qestion_03');
const qestion_04 = document.getElementById('qestion_04');
const result = document.getElementById('result');

const tagId = [];

const alcoholUrl = location.href;
const ary = alcoholUrl.split('/');
const alcoholArr = ary[ary.length - 1];

if (alcoholArr.includes("#")) {
  alcohol = alcoholArr.slice(0, -1);
} else {
  alcohol = alcoholArr
}

const observer = lozad();
observer.observe();

// がっつりご飯
q_01.onclick = function(){
  qestion_01.style.display = "none";
  qestion_02.style.display = "block";
  tagId.push(q_01.dataset.id);
  switchToQuestion1();
}

// 軽くおつまみ
q_02.onclick = function(){
  qestion_01.style.display = "none";
  qestion_03.style.display = "block";
  tagId.push(q_02.dataset.id);
  switchToQuestion2();
}

// 質問2 がっつりご飯
function switchToQuestion1() {
  // お肉系
  q_03.onclick = function(){
    qestion_02.style.display = "none";
    qestion_04.style.display = "block";
    tagId.push(q_03.dataset.id);
    switchToQuestion3()
  }
  // お魚系
  q_04.onclick = function(){
    qestion_02.style.display = "none";
    qestion_04.style.display = "block";
    tagId.push(q_04.dataset.id);
    switchToQuestion3()
  }
}

// 質問2 軽くおつまみ
function switchToQuestion2() {
  // 体重が気になる
  q_05.onclick = function(){
    qestion_03.style.display = "none";
    qestion_04.style.display = "block";
    tagId.push(q_05.dataset.id);
    switchToQuestion3()
  }
  // 価格は低めに抑えたい
  q_06.onclick = function(){
    qestion_03.style.display = "none";
    qestion_04.style.display = "block";
    tagId.push(q_06.dataset.id);
    switchToQuestion3()
  }
}

// 質問3
function switchToQuestion3() {
  // いつもと違うおつまみ
  q_07.onclick = function(){
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

  // 定番のおつまみ
  q_08.onclick = function(){
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
