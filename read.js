const express = require('express');
const app = express();
const fs = require('fs')

app.get('/get', function(req, res) {
/*	var text = fs.readFileSync("log.txt", 'utf8');
	var obj = JSON.parse(line.toString(text))
	console.log(text);
	res.end(obj.key+","+obj.field1)*/
        var readline = require('readline');
	var stream = require('stream');
        var instream = fs.createReadStream('log.txt');
        var outstream = new stream;
        var rl = readline.createInterface(instream, outstream);
     
   	rl.on('line', function (line) {
       		var obj = JSON.parse(line);
		console.log(line)
		console.log(obj.field1)
		res.write(obj.key+","+obj.field1+"\n")
    	});
    
    	rl.on('close', function (line) {
        	console.log('done reading file.');
		res.end()
    	});
//	res.end()
})

app.listen(8080, function () {
	console.log("Listening!");
});

