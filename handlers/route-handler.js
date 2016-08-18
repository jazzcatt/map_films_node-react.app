var Parser = require('./parser').Parser;
var fs = require('fs');

/*
/ creates unique value for id
*/
var ID = function () {
  return  Math.random().toString(36).substr(2, 9);
};

function Handler(req, res){
    
	this.load = function(){
		var buffer = [];
		fs.readdir('./db', function(err, files) {
			if(err){
				res.writeHead(500)
				res.end();
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

	this.upload = function() {
		var id = ID();
		req.on('data', function(chunk) {
			var path = './db/'+id+'.txt';
			fs.closeSync(fs.openSync(path, 'w'));
			var record = new Parser(JSON.parse(chunk.toString()));
			var text = record.createRecord();
			fs.writeFileSync(path,text,'utf8');
		});
		req.on('end', function() {
		res.writeHead(200,{'Content-Type':'text/plain'});
		res.end(id);
		});

	}	

	this.delete = function() {
		req.on('data', function(chunk) {
			fs.unlinkSync('./db/'+chunk.toString()+'.txt');
		});
		req.on('end', function() {
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Delete successed');
		});
	}	
}
exports.Handler = Handler;


