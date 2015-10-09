var hello = function(str,afterFunction){
	console.log('hello '+str)
	afterFunction(str+" which was " +str.length + " chars")
}

hello('world', function (val) {
	console.log('dave said: ' + val)
})
