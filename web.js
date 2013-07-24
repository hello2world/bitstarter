var express = require('express');
var app = express.createServer(express.logger());

//Modify web.js again, except this time have it read "index.html" from disk and use that data in place of "Hello World 2!"
//var buffer = new Buffer("I'm a string!", "utf-8");
//fs.readFileSync(index.html); //return contents of 1st argument, returning a buffer

var fs = require('fs');
var buffer = fs.readFileSync('index.html','utf8');
//var buffer = fs.readFileSync('index.html');


app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
