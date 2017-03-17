var options = {
  refresh: 500, //milliseconds
  timeout: 500 //milliseconds
};
matrix.init('humidity', options).then(function(data){
	if(data.value<=12){
		matrix.led({
			 arc: 180,
			color: 'red',
			start: 19
		}).render();
	}else if(data.value<=20){
		matrix.led({
			 arc: 180,
			color: 'orange',
			start: 19
		}).render();
	} else if (data.value<=30){
		matrix.led({
			 arc: 180,
			color: 'yellow',
			start: 19
		}).render();	
	} else {
		matrix.led({
			 arc: 180,
			color: 'green',
			start: 19
		}).render();	
	}

if(data.value>=24){
		matrix.led({
			 arc: 180,
			color: 'red',
			start: 1
		}).render();
	}else if(data.value>=18){
		matrix.led({
			 arc: 180,
			color: 'orange',
			start: 1
		}).render();
	} else {
		matrix.led({
			 arc: 180,
			color: 'red',
			start: 1
		}).render();
	} 
});


//Entre 21 e 30% - Estado de Atenção
//Entre 12 e 20% - Estado de Alerta
//Abaixo de 12% - Estado de Emergência
