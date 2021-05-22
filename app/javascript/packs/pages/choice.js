var q_01 = document.getElementById('q_01');
var q_02 = document.getElementById('q_02');
var q_03 = document.getElementById('q_03');
var q_04 = document.getElementById('q_04');
var qestion_01 = document.getElementById('qestion_01');
var qestion_02 = document.getElementById('qestion_02');
var qestion_03 = document.getElementById('qestion_03');
var qestion_04 = document.getElementById('qestion_04');
var array = window.array1 + window.array2 + window.array3;
console.log("array:" + array);

// おかず
q_01.onclick = function(){
  qestion_01.style.display = "none";
  qestion_02.style.display = "block";
  window.array1 = [4];
  console.log(window.array1);
  switchToQuestion1();
}

// つまむ
q_02.onclick = function(){
  qestion_01.style.display = "none";
  qestion_03.style.display = "block";
  window.array1 = [5,3];
  console.log(window.array1);
  switchToQuestion2();
}

// 質問2 おかず
function switchToQuestion1() {
  // 肉
  q_03.onclick = function(){
    qestion_02.style.display = "none";
    qestion_04.style.display = "block";
    window.array2 = [13];
    console.log(window.array2);
    switchToQuestion3()
  }
  // 魚
  q_04.onclick = function(){
    qestion_02.style.display = "none";
    qestion_04.style.display = "block";
    window.array2 = [14];
    console.log(window.array2);
    switchToQuestion3()
  }
}

// 質問2 つまむ
function switchToQuestion2() {
  // ヘルシー
  q_05.onclick = function(){
    qestion_03.style.display = "none";
    qestion_04.style.display = "block";
    window.array2 = [9];
    console.log(window.array2);
    switchToQuestion3()
  }
  // 低価格
  q_06.onclick = function(){
    qestion_03.style.display = "none";
    qestion_04.style.display = "block";
    window.array2 = [10];
    console.log(window.array2);
    switchToQuestion3()
  }
}

// 質問3
function switchToQuestion3() {
  // おしゃ
  q_07.onclick = function(){
    qestion_04.style.display = "none";
    window.array3 = [11];
    console.log(window.array3);
  }
  // おじさん
  q_08.onclick = function(){
    qestion_04.style.display = "none";
    window.array3 = [12];
    console.log(window.array3);
  }
}



