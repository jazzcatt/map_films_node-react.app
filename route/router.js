var url = require('url');
var fs = require('fs');
var path = require('path');
var Handler = require('../handlers/route-handler').Handler;

function router(req, res) {

	var pathname=url.parse(req.url).path;

	var handler = new Handler(req, res);
	if(typeof handler[pathname.substr(1,pathname.length)] === 'function'){
	handler[pathname.substr(1,pathname.length)]();
	} 
}


exports.router = router;