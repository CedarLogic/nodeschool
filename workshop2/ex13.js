var http =require('http');
var url =require('url');
var querystring=require('querystring');

if(process.argv.length!=3) {
	console.log("provide a port as an argument.");
	return;
}

var port = process.argv[2];
var server = http.createServer(
	function listener(req, res) {
		var requestUrl = url.parse(req.url);
		var qs = querystring.parse(requestUrl.query);
		res.writeHead(200, { 'Content-Type': 'application/json' })
		if(requestUrl.pathname == "/api/parsetime"){
			if(qs["iso"])
			{	
				var date=new Date(qs["iso"]);
				var response = {
					"hour" : date.getHours(),
					"minute" : date.getMinutes(),
					"second" : date.getSeconds()
				};
				res.write(JSON.stringify(response));
			}
		}
		else if(requestUrl.pathname == "/api/unixtime") {
			if(qs["iso"])
			{	
				var date=new Date(qs["iso"]);
				var response = {
					"unixtime": Math.round(date.getTime())
				};
				res.write(JSON.stringify(response));
			}

		}
			res.end();
	}).listen(port);