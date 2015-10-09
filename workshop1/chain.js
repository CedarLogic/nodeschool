function doit(d1) {
	console.log("do")
	d1(function() { console.log("d2")  } )
}

doit(
function (d2) { 
	console.log("d1") 
	d2() 
}
)
