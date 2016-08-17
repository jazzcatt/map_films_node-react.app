var Parser = require('./parser').Parser;
var fs = require('fs');

function Handler(req, res){

	this.load = function(){
		var buffer = [];
		fs.readdir('./db', function(err, files) {
			if(err){
				console.log(err+' reading error');
			} else {
				files.forEach((filename) =>{
					var id = filename.substring(0,filename.length-4);
					var text = fs.readFileSync('./db/'+filename).toString();
					var parser = new Parser(text);
					var elem = parser.createElem(id);
					buffer.push(elem);
				}); //files.forEach
			}

			// send buffer
			res.end(JSON.stringify(buffer));
		}); //readdir
	}		
}
exports.Handler = Handler;


