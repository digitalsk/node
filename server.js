var http = require('http')

http.createServer(function(req, res) {
	res.end('yo');
}).listen(80);
console.log('Server is up!');
