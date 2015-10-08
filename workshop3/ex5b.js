var fs= require('fs');
var p=require('path');

var requiredExtn = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, data){
  var items=[];
  data.forEach(function (file) {
      if (p.extname(file) === requiredExtn)
      {
        items.push(file);
      }
  })
  items.forEach(function(item){
    console.log(item);
  })
})
