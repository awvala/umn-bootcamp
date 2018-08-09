var path = require("path");

// greatBands object to be returned
var greatBands = {
	rock: "Pink Floyd",
	rap: "BDP",
	polka: "Some Polka Band"
}

//Pulls Random bands from Array, accepts lastBandHeard and adds to Array
var randomBand = function(lastBandHeard){
	var bandArray = ["The Beatles", "PROF", "Lil Yachty", "Waka Flocka Flame", "Frank Sinatra"];
	bandArray.push(lastBandHeard); //Add Last band here
	var key = Math.floor(Math.random() * bandArray.length);
	return bandArray[key];
}

// //Uses app from anonymous functions passed in from run.js
module.exports = function(app) {
   	app.get("/songs", function(req, res) {
    	res.sendFile(path.join(__dirname, "/public/songs.html"));
    	console.log("Pulled Songs File");
  	});
  	app.get("*", function(req, res) {
    	res.sendFile(path.join(__dirname, "/public/"));
    	console.log("Pulled Home");
  	});
}

//This Module Also Exports Bands Object 
module.exports.bands = {
	greatBands,
	randomBand
}


