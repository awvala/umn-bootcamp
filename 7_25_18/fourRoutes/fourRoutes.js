/** Create a website with four routes:
* Home
* Favorite Foods
* Favorite Movies
* Favorite CSS Frameworks
* Each route should be triggered by a different URL.
* Each route should display an HTML page listing your favorite three things of each.
* Be sure to use `fs` to serve your HTML files.

## Bonuses
* Have your home page have links to all of your other pages.
* DRY up your code by only having a single `readFile`*/

// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

function FavHome(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/home.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function FavMovies(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/FavoriteMovies.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function FavFoods(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/FavoriteFoods.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function FavCSS(req, res) {

    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/favCSS.html", function (err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(url, req, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Error </h1>" +
      "</body></html>";
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }

  // Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    var path = req.url;
    console.log(path);
    switch (path) {

        case "/home":
            return FavHome(path, req, res);

        case "/FavoriteMovies":
            return FavMovies(path, req, res);

        case "/FavoriteFoods":
            return FavFoods(path, req, res);

        case "/FavCSS":
            return FavCSS(path, req, res);

        default:
            return display404(path, req, res);
    }
}

