var Parser = require('./parser').Parser;
var fs = require('fs');

function Handler(req, res){

	this.load = function(){
			var data;
			fs.readFile('./db/db.txt', function(err, logData){
			if(err) {
					console.log(err+' can not read file');
			}
			else{
			console.log('================REad FILE');
			var text = logData.toString();
			var getElems = new Parser(text);
			data = JSON.stringify(getElems.getObjects());
			console.log('Send data: '+data);

			res.end(data);
		}		
		
	});

}
}

exports.Handler = Handler;

