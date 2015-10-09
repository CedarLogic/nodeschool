var http = require('http')

var url = 'http://google.com/'
var list = ["","",""]
var received=0
var printTheLot = function() {
	list.forEach(function(v){console.log(v)})
}
var allData = function( ){
	return received==3
}

http.get(url, function(res) {
	console.log("1")
	list[0]=1
	received++
	if(allData()){
		printTheLot()
	}
})


http.get(url, function(res) { 
        console.log("2")
	list[1]=2
	received++
    if(allData()){
                printTheLot() 
        }
})

http.get(url, function(res) { 
        console.log("3")
	list[2]=3
	received++
	if(allData()){
                printTheLot() 
        }
})
