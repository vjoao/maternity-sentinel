var options = {
  refresh: 1000, //milliseconds
  timeout: 1000 //milliseconds
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
	}
});


//Entre 21 e 30% - Estado de Atenção
//Entre 12 e 20% - Estado de Alerta
//Abaixo de 12% - Estado de Emergência
