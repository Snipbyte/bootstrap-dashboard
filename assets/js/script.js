AOS.init({
    duration: 3000,
    delay: 100
  })
//
// const ctx = document.getElementById('myChart');
var popCanvas = document.getElementById("myChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var popData = {

  datasets: [
  {
    label: ['Warning'],
    data: [{
      x: 10,
      y: 7,
      r: 10
    }, {
      x: 8,
      y: 38,
      r: 20
    },
    {
      x: 69,
      y: 39,
      r: 20
    }, {
      x: 8,
      y: 64,
      r: 25
    }, {
      x: 82,
      y: 22,
      r: 10
    }, {
      x: 92,
      y: 82,
      r: 17
    }, {
      x: 27,
      y: 12,
      r: 5
    },
    {
      x: 84,
      y: 4,
      r: 7
    },{
      x: 37,
      y: 9,
      r: 6
    }],
    backgroundColor: "#fcd34d"
  },
{
    label: ['Green'],
    data: [{
      x: 10,
      y: 12,
      r: 13
    }, {
      x: 62,
      y: 34,
      r: 20
    },
    {
      x: 16,
      y: 61,
      r: 20
    }, {
      x: 44,
      y: 63,
      r: 25
    }, {
      x: 34,
      y: 77,
      r: 5
    },
    {
      x: 44,
      y: 37,
      r: 9
    },
    {
      x: 37,
      y: 44,
      r: 3
    }],
    backgroundColor: "#bef264"
  },{
    label: ['Primary'],
    data: [{
      x: 69,
      y: 78,
      r: 10
    }, {
      x: 34,
      y: 32,
      r: 20
    },
    {
      x: 32,
      y: 56,
      r: 20
    }, {
      x: 93,
      y: 63,
      r: 25
    }
    ,
    {
      x: 34,
      y: 7,
      r: 2
    },
    {
      x: 7,
      y: 4,
      r: 8
    },
    {
      x: 4,
      y: 37,
      r: 9
    },
    {
      x: 7,
      y: 87,
      r: 3
    }],
    backgroundColor: "#a78bfa"
  }
  ],


};

var bubbleChart = new Chart(popCanvas, {
  type: 'bubble',
  data: popData
});
    //
var ctx2 = document.getElementById('myChart2')
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "1", "2", "3", "15"],
    datasets: [ { 
      data: [5,10,70,20,75,20,39,40,25,50,55,14,80,70,75,50],
      label: "Accepted",
      borderColor: "#a78bfa",
      backgroundColor: "#a78bfa",
      borderWidth:2
    }
    ]
  },
  options: {
    scales: {
     xAxes: [{ 
      stacked: true    
    }],
     yAxes: [{
      stacked:true
    }],
   }
 }
});