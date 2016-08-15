function Parser(data) {
	
	this.getObjects = function(){
		var lines = data.split('\n');
		var buffer = {};
		var elem = {};
		lines.forEach((line)=>{
			if(line.length > 1){
			var parts = line.split(':');
			elem[parts[0]]=parts[1];

		}else{
			
			Object.assign(buffer,elem);
			elem = {};
		}
			
	});
	 return buffer;	
	}
}

exports.Parser = Parser;