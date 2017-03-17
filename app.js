var colorTemp = 'rgb(10,10,10)';
var colorUmi = 'rgb(10,10,10)';
var colorFace = 'rgb(10,10,10)';

var options = {
  refresh: 1000*5, //milliseconds
  timeout: 1000*5 //milliseconds
};

Promise.all([matrix.init('humidity', options),
	matrix.init('temperature', options)],
	matrix.service('demographics').start())
.then(function(data){
			if (data[0].value <= 12){
				colorUmi = 'rgb(10,0,0)';
			}else if(data[0].value <= 20){
				colorUmi= 'rgb(10,10,0)';
			}else {
				colorUmi= 'rgb(0,10,0)';
			}
			
			if (data[1].value<=24 || data[1].value>=30){
				colorTemp = 'rgb(10,0,0)';
			}else {
				colorTemp= 'rgb(0,10,0)';
			}

			matrix.led([
			{
				arc: 90,
				color: colorTemp,  
				start: 0
			},
			{
				arc: 90,
				color: colorUmi,  
				start: 90
			},
			{
				arc: 180,
				color: colorFace,  
				start: 180
			}]).render();
	});

/*matrix.service('demographics').start().then(function(data){
  setTimeout(function() {
    matrix.led('blue').render();
      if(data.tag=='HAND_PALM'){
      matrix.led('blue').render();
      matrix.service('recognition').train('test').then(function(data) { console.log("train"); });
    }else {
    	matrix.led('blue').render();
      matrix.service('recognition').start().then(function(data) { console.log("train"); });
    }
  }, 3000);
});*/

//Entre 21 e 30% - Estado de Atenção
//Entre 12 e 20% - Estado de Alerta
//Abaixo de 12% - Estado de Emergência


