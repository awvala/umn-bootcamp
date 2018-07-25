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
    database: "bidlistDB"
});

////  Confirm connection and prompt user ////
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    inquireForm();
});

////  Prompt the user for what they want to post and add it to the bidlistDB  ////
function postFunc() {
    inquirer.prompt([
        {
            name: "type",
            message: "What do you want to post?",
            type: "list",
            choices: ["Items", "Tasks", "Jobs", "Projects"]
        },
        {
            name: "name",
            message: "What are you posting?",
        },
        {
            name: "description",
            message: "Give a short description of the item",
        },
        {
            name: "startingbid",
            message: "What is the starting bid?",
        }
    ]).then(function (answers) {
        var type = answers.type;
        var name = answers.name;
        var description = answers.description;
        var startingBid = answers.startingbid;
        console.log("Adding your item to greatBay...\n");
        var query = connection.query(
            "INSERT INTO bids SET ?",
            {
                name: name,
                description: description,
                starting_bid: startingBid,
                highest_bid: startingBid,
                type: type
            },
            function (err, res) {
                console.log(res.affectedRows + " " + type + " inserted!\n");
            }
        );
        console.log(query.sql);
        connection.end();
    });
}

function showItems() {
    connection.query("SELECT * FROM bids", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].name + " | " + res[i].description + " | " + res[i].highest_bid + " | " + res[i].type);
        }
        console.log("-----------------------------------");
        bidFunc();
    });
}

function bidFunc() {
    inquirer.prompt([
        {
            name: "id",
            message: "What ID do you want to bid on?",
        },
        {
            name: "bid",
            message: "How much do you want to bid?",
        }
    ]).then(function (answers) {
        var id = answers.id;
        var bid = parseInt(answers.bid);
        connection.query("SELECT highest_bid FROM bids WHERE id = " + id, function (err, res) {
            var hBid = parseInt(res[0].highest_bid);
            //console.log(hBid);
            if (bid <= hBid) {
                console.log("That bid isn't high enough.");
                showItems();
            } else {
                var query = connection.query(
                    "UPDATE bids SET ? WHERE ?",
                    [
                        {
                            highest_bid: bid
                        },
                        {
                            id: id
                        }
                    ],
                    function (err, res) {
                        console.log("You made the highest bid!\n");
                        connection.end();
                    }
                );
            }
        });
    });
}

////  Initial question ////
function inquireForm() {
    inquirer.prompt([
        {
            name: "bidRequest",
            message: "What do you want to do?",
            type: "list",
            choices: ["POST AN ITEM", "BID ON AN ITEM"]
        }
    ]).then(function (answers) {
        var answer = answers.bidRequest;
        console.log(answer);
        switch (answer) {
            case "POST AN ITEM":
                postFunc();
                break;
            case "BID ON AN ITEM":
                showItems();
                //BidFunc();
                break;
        }
    });
}

