function Parser(data) {
	
	this.createElem = function(){
		var lines = data.split('\n');
		var chunk = {};

		lines.forEach((line)=>{
			var parts = line.split(':');
			chunk[parts[0]]=parts[1];
		});
		return chunk;
	}
}

exports.Parser = Parser;