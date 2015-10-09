var async = require('async')
var http = require('http')
var locals = ["","",""]
var urls=[process.argv[2], process.argv[3], process.argv[4] ]

async.series([
	function(callback){
		http.get(urls[0],function(res){
			res.setEncoding('utf8')
			res.on('data', function(data,err){
				locals[0]+=data
			})
			res.on('end',function(){callback()})
		})
},
        function(callback){
                http.get(urls[1],function(res){ 
                        res.setEncoding('utf8')
                        res.on('data', function(data,err){
                                locals[1]+=data
                        })
			res.on('end',function(){callback()})
                })
},
       function(callback){
                http.get(urls[2],function(res){
                        res.setEncoding('utf8')
                        res.on('data', function(data,err){
                                locals[2]+= data
                        })
                        res.on('end',function(){callback()})
                })
},

], function(err){
	if(err){
		console.log("We got an error there")
		return console.error(err);
	}
	locals.forEach(function(v){console.log(v)})
})
