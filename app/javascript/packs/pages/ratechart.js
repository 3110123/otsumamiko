var sweet = gon.sweetness;
console.log(sweet);
console.log("bbbbbbbbbb");
var ctx = document.getElementById("myRaderChart").getContext('2d');
var myRadarChart = new Chart(ctx, {
        type: 'radar', 
        data: { 
            labels: ["甘味", "塩味", "酸味", "旨味", "香り"],
            datasets: [{
                label: 'おつまみchart',
                data: [1, 3, 4, 1, 3],
                backgroundColor: 'RGBA(95,194,227, 0.5)',
                borderColor: 'RGBA(95,194,227, 1)',
                borderWidth: 1,
                pointBackgroundColor: 'RGB(95,194,227)'
            }]
        },
        options: {
            legend: {
                display: false
            },
            scale:{
                ticks:{
                    suggestedMin: 0,
                    suggestedMax: 5,
                    stepSize: 1,
                    callback: function(value, index, values){
                        return  value
                    }
                }
            }
        },
    });