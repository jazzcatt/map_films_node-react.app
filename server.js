var http = require('http');
var static = require('node-static');
var route = require('./route/router');
var file = new static.Server('./public');




function onRequest(req, res) {
	file.serve(req, res);
 	route.router(req, res);

}  

http.createServer(onRequest).listen(3000);




