var net=require('net')
var port = process.argv[2]
//    "YYYY-MM-DD hh:mm"
var pad = function(val) {
	return val<10 ? "0"+val : val
}
var printDate=function(){
	var date = new Date()
	var str = 
		date.getFullYear() + "-" +
		(pad(date.getMonth()+1)) + "-"+
		pad(date.getDate()) + " " + 
		pad(date.getHours()) + ":" +
		 pad(date.getMinutes())
	return str
}
var server = net.createServer(
 function (socket){
	var dateStr=printDate()
	socket.write(dateStr+'\n')
	socket.end()
}).listen(port)
