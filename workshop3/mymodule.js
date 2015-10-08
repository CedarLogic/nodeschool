var fs= require('fs');
var p=require('path');


module.exports = function(dir, ext, callback) {
  var requiredExtn = '.' + ext;

  fs.readdir(dir, function(err, data){
    if (err)
    {
      callback(err);
      return;
    }
      var items=[];
      data.forEach(function (file) {
          if (p.extname(file) === requiredExtn)
          {
            items.push(file);
          }
      })
      callback(null, items);
  })
};
