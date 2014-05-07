var http = require('http')

http.createServer(function(req, res) {
	res.end('yo');
}).listen(3000);
console.log('Server is up!');
