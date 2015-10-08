var fs= require('fs');
var p=require('path');

var requiredExtn = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, data){
  for (index = 0; index < data.length; index++)
  {
    var ext = p.extname(data[index]);
    if (ext == requiredExtn)
    {
      console.log(data[index])
    }
  }
})
