var async = require('async')

async.series (

[
 function(finish) {
	console.log(1)
	finish()
 },
 function(finish) {
	console.log(2)
	finish()
 },
 function(finish) {
	console.log(3)
	finish()
 }

])
