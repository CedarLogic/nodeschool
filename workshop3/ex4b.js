var fs= require('fs');

var runMe = function myName(myFn){
  fs.readFile(process.argv[2], 'utf8', myFn);
}
runMe(function (err, data){
  if(err) {
    console.error("What file?");
    process.exit();
  }
    console.log(data.split('\n').length - 1)
});

//console.log('cheese');
