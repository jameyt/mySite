// // Call the console.log function.
// console.log("Hello World");
// 
// // Load the http module to create an http server.
// var http = require('http');
// 
// // Configure our HTTP server to respond with Hello World to all requests.
// var server = http.createServer(function (request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World\n");
// });
// 
// // Listen on port 8000, IP defaults to 127.0.0.1
// server.listen(8000);
// 
// // Put a friendly message on the terminal
// console.log("Server running at http://127.0.0.1:8000/");

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.send('Hello World!');
  //response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});