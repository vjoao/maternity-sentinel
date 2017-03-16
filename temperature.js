var options = {
  refresh: 1000, //milliseconds
  timeout: 1000 //milliseconds
};
matrix.init('temperature', options).then(function(data){
	console.log(data);
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
			color: 'green',
			start: 1
		}).render();
	} 
});

