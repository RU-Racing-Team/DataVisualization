{
  let engineConfig = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Engine temperature',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [],
            fill: false
        }]
    },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: '°C'
          }
        }]
    }
    }
  }
  let ctx = document.getElementById('engineTemp').getContext('2d');
  let engineChart = new Chart(ctx, engineConfig);

  let shockAbsorbersConfig = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
          label: 'Shock absorber 1',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [],
          fill: false
        },{
          label: 'Shock absorber 2',
          backgroundColor: 'rgb(255, 0, 132)',
          borderColor: 'rgb(255, 0, 132)',
          data: [],
          fill: false
        },{
          label: 'Shock absorber 3',
          backgroundColor: 'rgb(255, 99, 0)',
          borderColor: 'rgb(255, 99, 0)',
          data: [],
          fill: false
        },{
          label: 'Shock absorber 4',
          backgroundColor: 'rgb(0, 99, 132)',
          borderColor: 'rgb(0, 99, 132)',
          data: [],
          fill: false
        },
      ]
    },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Shock'
          }
        }]
    }
    }
  }
  ctx = document.getElementById('shockAbsorbers').getContext('2d');
  let shockAbsorbersChart = new Chart(ctx, shockAbsorbersConfig);

  let wheelTempsConfig = {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
          label: 'Wheel temperature 1',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [],
          fill: false
        },{
          label: 'Wheel temperature 2',
          backgroundColor: 'rgb(255, 0, 132)',
          borderColor: 'rgb(255, 0, 132)',
          data: [],
          fill: false
        },{
          label: 'Wheel temperature 3',
          backgroundColor: 'rgb(255, 99, 0)',
          borderColor: 'rgb(255, 99, 0)',
          data: [],
          fill: false
        },{
          label: 'Wheel temperature 4',
          backgroundColor: 'rgb(0, 99, 132)',
          borderColor: 'rgb(0, 99, 132)',
          data: [],
          fill: false
        },
      ]
    },

    // Configuration options go here
    options: {
      scales: {
        xAxes: [{
          display: false,
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: '°C'
          }
        }]
    }
    }
  }
  ctx = document.getElementById('wheelTemps').getContext('2d');
  let wheelTempsChart = new Chart(ctx, wheelTempsConfig);

  let currentShockAbsorbersConfig = {
    type: 'bar',
    
    data: {
			labels: ["Shock absorber 1", "Shock absorber 2","Shock absorber 3","Shock absorber 4"],
			datasets: [{
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 0, 132)',
					'rgb(255, 99, 0)',
					'rgb(0, 99, 132)'
				],
				yAxisID: 'y-axis-1',
				data: [
					0,0,0,0
				]
      }],
    },
    options: {
      legend: {
        display: false
    },
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: true
      },
      scales: {
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          scaleLabel: {
            display: true,
            labelString: 'Shock'
          }
        }, {
          type: 'linear',
          display: false,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnChartArea: false
          }
        }],
      }
    }
  }
  
  ctx = document.getElementById('currentShockAbsorbers').getContext('2d');
  let currentShockAbsorbersChart = new Chart(ctx, currentShockAbsorbersConfig);

  let currentWheelTempsConfig = {
    type: 'bar',
    
    data: {
			labels: ["Wheel temperature 1", "Wheel temperature 2","Wheel temperature 3","Wheel temperature 4"],
			datasets: [{
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(255, 0, 132)',
					'rgb(255, 99, 0)',
					'rgb(0, 99, 132)'
				],
				yAxisID: 'y-axis-1',
				data: [
					0,0,0,0
				]
      }],
    },
    options: {
      legend: {
        display: false
    },
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: true
      },
      scales: {
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          scaleLabel: {
            display: true,
            labelString: '°C'
          }
        }, {
          type: 'linear',
          display: false,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnChartArea: false
          }
        }],
      }
    }
  }
  
  ctx = document.getElementById('currentWheelTemps').getContext('2d');
  let currentWheelTempsChart = new Chart(ctx, currentWheelTempsConfig);

  function getTime() {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds();
    return date+' '+time;
  }

  function setData(config, chart, data) {
    for (let i = 0; i < config.data.datasets[0].data.length; ++i) {
      config.data.datasets[0].data[i] = data[i];
    }
    chart.update();
  }

  function addData(config, chart, label, data) {
    config.data.labels.push(label);
    for (let i = 0; i < config.data.datasets.length; ++i) {
      config.data.datasets[i].data.push(data[i]);
    };
    chart.update();
  }

  function ranomize() {
    $.ajax({
      'url': 'http://kristofer.is/rutel/dumydata.php',
      'type': 'GET',
      'dataType': 'json',
      'success': function(response) {
        const engineTemp = response.engineTemp;
        addData(engineConfig, engineChart, getTime(), [engineTemp]);
        document.getElementById("currentEngineTemp").innerHTML = engineTemp;
        const shockAbsorber1 = response.shock1;
        const shockAbsorber2 = response.shock2;
        const shockAbsorber3 = response.shock3;
        const shockAbsorber4 = response.shock4;
        setData(currentShockAbsorbersConfig, currentShockAbsorbersChart, [shockAbsorber1, shockAbsorber2, shockAbsorber3, shockAbsorber4]);
        addData(shockAbsorbersConfig, shockAbsorbersChart, getTime(), [shockAbsorber1, shockAbsorber2, shockAbsorber3, shockAbsorber4]);
        const wheelTemp1 = tiretemp1;
        const wheelTemp2 = tiretemp2;
        const wheelTemp3 = tiretemp3;
        const wheelTemp4 = tiretemp4;
        setData(currentWheelTempsConfig, currentWheelTempsChart, [wheelTemp1, wheelTemp2, wheelTemp3, wheelTemp4]);
        addData(wheelTempsConfig, wheelTempsChart, getTime(), [wheelTemp1, wheelTemp2, wheelTemp3, wheelTemp4]);
        document.getElementById("currentSpeed").innerHTML = Math.floor(Math.random() * 101);
        document.getElementById("steeringWheel").style.transform = "rotate("+response.steeringRotation+"deg)";
      }
    });
    /*const engineTemp = Math.floor(Math.random() * 101);
    addData(engineConfig, engineChart, getTime(), [engineTemp]);
    document.getElementById("currentEngineTemp").innerHTML = engineTemp;
    const shockAbsorber1 = Math.floor(Math.random() * 101) - 50;
    const shockAbsorber2 = Math.floor(Math.random() * 101) - 50;
    const shockAbsorber3 = Math.floor(Math.random() * 101) - 50;
    const shockAbsorber4 = Math.floor(Math.random() * 101) - 50;
    setData(currentShockAbsorbersConfig, currentShockAbsorbersChart, [shockAbsorber1, shockAbsorber2, shockAbsorber3, shockAbsorber4]);
    addData(shockAbsorbersConfig, shockAbsorbersChart, getTime(), [shockAbsorber1, shockAbsorber2, shockAbsorber3, shockAbsorber4]);
    const WheelTemp1 = Math.floor(Math.random() * 101);
    const WheelTemp2 = Math.floor(Math.random() * 101);
    const WheelTemp3 = Math.floor(Math.random() * 101);
    const WheelTemp4 = Math.floor(Math.random() * 101);
    setData(currentWheelTempsConfig, currentWheelTempsChart, [WheelTemp1, WheelTemp2, WheelTemp3, WheelTemp4]);
    addData(wheelTempsConfig, wheelTempsChart, getTime(), [WheelTemp1, WheelTemp2, WheelTemp3, WheelTemp4]);
    document.getElementById("currentSpeed").innerHTML = Math.floor(Math.random() * 101);
    document.getElementById("steeringWheel").style.transform = "rotate("+Math.floor(Math.random() * 361)+"deg)";*/
  }
  
  
  

  window.setInterval(ranomize, 1000);
}