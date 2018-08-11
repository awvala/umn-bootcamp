var http = require("http");

var PORT = 8080;

function handleRequest(request, response){
	response.end("It works! " + request.url)
}

var server = http.createServer(handleRequest);

server.listen (PORT, function(){
	console.log("server is listening on http://localhost PORT:" + PORT)
});



