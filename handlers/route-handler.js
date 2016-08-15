var Parser = require('./parser').Parser;
var fs = require('fs');

function Handler(req, res){
	this.load = function(){
		var data;
		fs.readFile('./db/db.txt', function(err, logData){
			if(err) {

			}
			else{
			var text = logData.toString();
			var getElems = new Parser(text);
			data = JSON.stringify(getElems.getObjects());
			}

		});
		send(data);
	}
		function send(data){
			res.writeHead(200);
			res.end(data);
		}
	
}

exports.Handler = Handler;