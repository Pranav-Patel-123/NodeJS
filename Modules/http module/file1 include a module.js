// to execute this file open the browser and type "localhost:8080"
var http = require('http');
var dt = require('./file2 export a module');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);