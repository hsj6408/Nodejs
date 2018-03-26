const express = require('express');
const app = express();
const fs = require('fs')

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var seq = 0
app.get('/log', function(req, res) {
	
	fs.appendFile('log.txt', JSON.stringify(req.query)+"\n", function (err) {
		if (err) throw err
		console.log("%j", req.query)
		res.end("Got "+String(seq++) + " " + JSON.stringify(req.query))
	});
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
