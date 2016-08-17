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

	this.createRecord = function(){
		var buffer = [];
			for(var key in data) {
			buffer.push(key+': '+data[key]);
		}
		console.log(buffer);
		var text = buffer.join("\r\n");
		return text;
	}

}

exports.Parser = Parser;













	