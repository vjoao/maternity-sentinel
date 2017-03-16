matrix.led({
  // degrees of arc [ 90° = quadrant ]   
  arc: 160,
  color: 'yellow',
  // index to start drawing arc
  start: 1
});

matrix.led({
  // degrees of arc [ 90° = quadrant ]   
  arc: 160,
  color: 'red',
  // index to start drawing arc
  start: 18
});


matrix.service('demographics').start().then(function(data){
  matrix.led('green').render();
  setTimeout(function() {
    matrix.led('black').render();
  }, 2000);
});