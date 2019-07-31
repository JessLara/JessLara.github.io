if($(window).width() < 1023) {
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('nav').css('background-color', 'rgba(255,255,255,.8)');
          $('nav').css('box-shadow', '1px 1px 4px 0 rgba(0,0,0,.8)');
       } else {
          $('nav').css('background-color', 'transparent');
            $('nav').css('box-shadow', 'none');
       }
   });
});
};


let ctx = document.getElementById('HWchart').getContext('2d');
let labels = ['Yes', 'No', 'Maybe'];
let colorHex = ['#253D5B','#FB3640', '#FF6B00' ];

var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [64.3, 7.1, 28.6],
      backgroundColor: colorHex
    }],
    labels: labels
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',
    },
    plugins: {
      datalabels: {
        color: '#fff',
        clamp: true,
        anchor: 'end',
        align: 'center',
        borderWidth: 2.5,
        borderColor: '#fff',
        borderRadius: 25,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: '12'
        },
        formatter: (value) => {
          return value + ' %';
        }
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
            return previousValue + currentValue;
          });
          var currentValue = dataset.data[tooltipItem.index];
          var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
          return percentage + "%";
        }
      }
    }
  }
});
