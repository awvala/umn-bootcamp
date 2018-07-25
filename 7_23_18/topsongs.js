var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "Localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Tardis1011",
    database: "top_songsdb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    inquireForm();
});

function artistSearch() {
    inquirer.prompt([
        {
            name: "artist",
            message: "Which artist?",
        }
    ]).then(function (answers) {
        var artistName = answers.artist;
        console.log("Searching for " + artistName);
        connection.query("SELECT * FROM top5000 WHERE artist LIKE ? ORDER BY song ASC", "%" + artistName + "%",
            function (err, res) {
                if (err) throw err;
""
                //console.log("borken finger");
                console.log(res.length);

                for (var i = 0; i < res.length; i++) {
                    console.log(res[i].position + " | " + res[i].artist + " | " + res[i].song + " | " + res[i].year);
                }
                connection.end();
            });
    });
}

function inquireForm() {
    inquirer.prompt([
        {
            name: "function",
            message: "What do you want to do?",
            type: "list",
            choices: ["Find songs by artist", "Find artists with multiple top 5k hits", "Find all songs between years", "Search by song name"]
        }
    ]).then(function (answers) {
        var answer = answers.function;
        console.log(answer);
        switch (answer) {
            case "Find songs by artist":
                artistSearch();
                break;
            case "Find artists with multiple top 5k hits":
                multipleSearch();
                break;
            case "Find all songs between years":
                yearSearch();
                break;
            case "Search by song name":
                songSearch();
                break;
        }
    });
}

