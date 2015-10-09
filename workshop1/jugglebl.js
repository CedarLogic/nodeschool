var async = require('async')
var http = require('http')
var bl = require('bl')

var locals = ["", "", ""]
var urls=[process.argv[2], process.argv[3], process.argv[4]]

async.series([
	function(callback) {
		var index=0
		http.get(urls[index],
		   function(res) {
			res.pipe(bl(function(err,data) {
				locals[index]=data
				callback()
			}))
		})
	},
    function(callback){
        var index=1
        http.get(urls[index],
         function(res){ 
            res.pipe(bl(function(err,data) {
                            locals[index]=data
                            callback()
                    }))
        })
    },
       function(callback){
        var index=2
        http.get(urls[index],
        function(res) {
            res.pipe(bl(function(err,data) {
                        locals[index]=data
                                callback()
                }))
        })
   }              
],
function(err) {
	if(err){
		console.log("We got an error there")
		return console.error(err);
	}
	locals.forEach(function(v){console.log(v.toString())})
})
