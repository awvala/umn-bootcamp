var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {
    response.end("You da' man!");
}

function handleRequest2(request, response) {
    response.end("HA!  This is the best you got?  SAD.");
}

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(PORT1, function () {
    console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function () {
    console.log("Server listening on: http://localhost:" + PORT2);
});