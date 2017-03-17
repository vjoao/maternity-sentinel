//matrix.service('demographics').start().then(function(data){
  //matrix.led('green').render();
  //setTimeout(function() {
    //matrix.led('blue').render();
    //console.log('algo', data);
      //if(data.tag=='HAND_PALM'){
      //matrix.led('blue').render();
      //matrix.service('recognition').train('test').then(function(data) { console.log("train"); });
    //}else {
      //matrix.service('recognition').start().then(function(data) { console.log("train"); });
    //}
  //}, 2000);
//});

//require('./humidity.js');
//require('./temperature.js');

var colorTemp = 'rgb(10,10,10)';
var colorUmi = 'rgb(10,10,10)';
var options = {
  refresh: 1000, //milliseconds
  timeout: 1000 //milliseconds
};

matrix.led([
			{
				arc: 180,
				color: colorTemp,  
				start: 0
			},
			{
				arc: 180,
				color: colorUmi,  
				start: 180
}]).render();

Promise.all([matrix.init('humidity', options),
	matrix.init('temperature', options)])
.then(function(data){
			if (data[0].value <= 12){
				colorUmi = 'rgb(10,0,0)';
			}else {
				colorUmi= 'rgb(0,10,0)';
			}
		
			if (data[1].value<=24){
				colorTemp = 'rgb(10,0,0)';
			}else {
				colorTemp= 'rgb(0,10,0)';
			}

			matrix.led([
			{
				arc: 180,
				color: colorTemp,  
				start: 0
			},
			{
				arc: 180,
				color: colorUmi,  
				start: 180
			}]).render();
	});


//Entre 21 e 30% - Estado de Atenção
//Entre 12 e 20% - Estado de Alerta
//Abaixo de 12% - Estado de Emergência


