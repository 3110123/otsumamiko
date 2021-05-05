//id chartからsnackを定義
var snack = document.getElementById('chart');
//data属性から値を取得
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
                ticks:{
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1,
                    callback: function(value){
                        return  value
                    }
                }
            }
        },
    });