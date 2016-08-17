function Parser(data) {
	
	this.createElem = function(id){
		var lines = data.split('\n');
		var chunk = {id: id};

		lines.forEach((line)=>{
			var parts = line.split(':');
			chunk[parts[0]]=parts[1];
		});
		return chunk;
	}
}

exports.Parser = Parser;