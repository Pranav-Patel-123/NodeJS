var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});//Adding a http header
  res.write('Hello World!'); //write a response to the client
  res.write(req.url);//request the clients url and display it
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080