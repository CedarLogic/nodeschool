var mymodule = require('./mymodule2.js');
mymodule(process.argv[2], process.argv[3], function (err, data) {
  if(err){
    console.error(err);
  }
  else {
      data.forEach(function(f) {
        console.log(f);
      });
  }
});
