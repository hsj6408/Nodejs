const express = require('express');
const app = express();
const fs = require('fs')

app.get('/download', function(req, res) {
	
	if(fs.existsSync('data.csv')) {
		fs.unlink('data.csv')
	}
	
	var readline = require('readline');
	var stream = require('stream');
	var instream = fs.createReadStream('log.txt');
	var outstream = new stream;
	var r1 = readline.createInterface(instream, outstream);

	r1.on('line', function (line) {
		var obj = JSON.parse(line);
		fs.appendFileSync('data.csv',obj.key+","+obj.field1+"\n")	
	})
	
	r1.on('close', function (line) {
		res.download('data.csv')
	});


})

app.listen(8081, function() {
	console.log("Listening Download!");
});
