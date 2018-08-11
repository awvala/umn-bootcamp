var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

//Pass app into bandinfo module
require("./bandInfo")(app);
bandNames = require("./bandInfo")

//Pass into bandinfo module
var lastBandHeard = "Vampire Weekend";

console.log("------------------");
console.log(bandNames.bands.greatBands.rap);
console.log("------------------");
console.log(bandNames.bands.randomBand(lastBandHeard));
console.log("------------------");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
