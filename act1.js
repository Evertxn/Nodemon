// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT = 7000;
var PORT2 = 7500;

// Here we create a generic function to handle requests and responses
function handleRequest(request, response) {
// The below statement is triggered (client-side) when the User visits the PORT URL
    response.end("You Rock!: " + request.url);
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

    console.log("Server listening on: http://localhost:%s", PORT);

});

//server two!

function handleRequest2(request, response) {

    response.end("You're a loser!: " + request.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {

    console.log("Server listening on: http://localhost:%s", PORT2);

});


