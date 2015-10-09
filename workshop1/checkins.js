var http=require('http')
var url = "http://ucloud.ae24.space/api/checkins/";

http.get(url,function(response){
//	console.log(response);
    var b = Buffer();
    response.on("data", function (data) {
	b.write(data);
})
response.on('end', function() {
var objects = JSON.parse(b.toString());
console.log(objects);
}

});
