// Dependencies
// =============================================================
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// MySQL DB Connection Info
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tardis1011",
    database: "sienfeld_db"
});
console.log("connection");
// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
console.log("connection2");
// Routes
app.get("/cast", function (req, res) {
    console.log("cast1");
    connection.query("SELECT * FROM cast ORDER BY id ASC", function (err, result) {
        console.log(err);
        console.log("cast2");
        // We then begin building out HTML elements for the page.
        var html = "<h1> Sienfeld Cast </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + " </p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});

app.get("/coolnesss-chart", function (req, res) {
    connection.query("SELECT * FROM cast ORDER BY coolness_points DESC", function (err, result) {

        // We then begin building out HTML elements for the page.
        var html = "<h1> Sienfeld Cast By Coolness </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + " </p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});

app.get("/attitude-chart", function (req, res) {
    connection.query("SELECT * FROM cast ORDER BY attitude DESC", function (err, result) {

        // We then begin building out HTML elements for the page.
        var html = "<h1> Sienfeld Cast By Attitude </h1>";

        // Here we begin an unordered list.
        html += "<ul>";

        // We then use the retrieved records from the database to populate our HTML file.
        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p>Name: " + result[i].name + " </p></li>";
            html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
            html += "<p>Attitude: " + result[i].attitude + " </p></li>";
        }

        // We close our unordered list.
        html += "</ul>";

        // Finally we send the user the HTML file we dynamically created.
        res.send(html);
    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});