var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var static = require('node-static');

var mimeTypes = {
  '.js' : 'text/javascript',
  '.html' : 'text/html',
  '.css' : 'text/css',
  '.jpg' :'image/jpeg',
  '.gif' : 'image/gif'
};

function onRequest(request, response) {
	var file = new static.Server('./public');
    var pathname = url.parse(request.url).pathname;

    if(pathname == '/'){
    	console.log(pathname+'________________');
    	 file.serve(request, response);
    }else if(pathname == '/t'){
    	console.log('other evennnnnnnnnnnnnt_______');

fs.readFile(pathname.substring(1, pathname.length)+path.extname(pathname), 'utf8', function(err, data) {
  if (err) {
    console.log('Could not find or open file ' + pathname + ' for reading\n');
  } else {
    response.writeHead(200, {'Content-Type': mimeTypes[path.extname(pathname)]});
    console.log(data);	
    response.end(data);
  }

 });
  }  
/*
    request.addListener('end', function () {
      
        console.log('______________________________');
    }).resume();


     console.log("Request for " + pathname + " received.");


 });


*/

}


http.createServer(onRequest).listen(3000);