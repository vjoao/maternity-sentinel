matrix.led('red').render();

matrix.service('demographics').start().then(function(data){
  matrix.led('green').render();
  setTimeout(function() {
    matrix.led('black').render();
  }, 2000);
});