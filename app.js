matrix.service('demographics').start().then(function(data){
  matrix.led('green').render();
  setTimeout(function() {
    matrix.led('blue').render();
    console.log('algo', data);
      if(data.tag=='HAND_PALM'){
      matrix.led('blue').render();
      matrix.service('recognition').train('test').then(function(data) { console.log("train"); });
    }else {
      matrix.service('recognition').start().then(function(data) { console.log("train"); });
    }
  }, 2000);
});
