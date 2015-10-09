var fs= require('fs')
var extension=process.argv[3]
fs.readdir(process.argv[2],function(error, list) {
	list.forEach(function(v) {
		if(v.indexOf('.'+extension) > -1){
			console.log(v)
		}
	})

})
