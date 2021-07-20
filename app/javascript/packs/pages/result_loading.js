window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}

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


// review
const alertReview = document.getElementById('alert-review');
const resultBookmark = document.getElementById('result-bookmark');
if(alertReview){
    alertReview.addEventListener('click', function(){
        toastr.error('ログインが必要です。');
    }, false);
  }

if(resultBookmark){
    resultBookmark.addEventListener('click', function(){
        toastr.error('ログインが必要です。');
    }, false);
  }