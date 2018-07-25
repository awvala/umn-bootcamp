var mysql = require("mysql");
var inquirer = require('inquirer');


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  //querySongs();
  //createSong();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
    inquireForm();
  });
}

function querySongs(genre) {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", [genre], function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }

  });

  // logs the actual query being run
  console.log(query.sql);
}

function createSong(song, artist, genre) {
  inquirer.prompt([
    {
      name: "song",
      message: "What song?",
    },
    {
      name: "artist",
      message: "Whose the artist?",
    },
    {
      name: "genre",
      message: "What genre?",
    }
  ]).then(function (answers) {
    var song = answers.song;
    var artist = answers.artist;
    var genre = answers.genre;
    console.log("Inserting a new song...\n");
    var query = connection.query(
      "INSERT INTO songs SET ?",
      {
        title: song,
        artist: artist,
        genre: genre
      },
      function (err, res) {
        console.log(res.affectedRows + " song inserted!\n");
        //updateSong();
        readSongs();
      }
    );
    console.log(query.sql);
  });
}

function updateSong(genre1, genre2) {
  inquirer.prompt([
    {
      name: "oldgenre",
      message: "What genre do you want to replace?",
    },
    {
      name: "newgenre",
      message: "What's the new genre?",
    }
  ]).then(function (answers) {
    var genre1 = answers.oldgenre;
    var genre2 = answers.newgenre;
    console.log("Updating all " + genre1 + " songs...\n")
    var query = connection.query(
      "UPDATE songs SET ? WHERE ?",
      [
        {
          genre: genre2
        },
        {
          genre: genre1
        }
      ],
      function (err, res) {
        console.log(res.affectedRows + " products updated!\n");
        //deleteSong();
        readSongs();
      }
    );
    console.log(query.sql);
  });
}

function deleteSong() {
  inquirer.prompt([
    {
      name: "artist",
      message: "Which artist's songs do you want to delete?",
    }
  ]).then(function (answers) {
    var artist = answers.artist;
    console.log("Deleting all " + artist + " songs");
    connection.query(
      "DELETE FROM songs WHERE ?",
      {
        artist: artist
      },
      function (err, res) {
        console.log(res.affectedRows + " products deleted \n");
        readSongs();
      }
    );
  });
}

function readSongs() {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM songs", function (err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function inquireForm() {
  inquirer.prompt([
    {
      name: "function",
      message: "What do you want to do?",
      type: "list",
      choices: ["Create song", "Read all songs", "Update genres", "Delete songs by artist"]
    }
  ]).then(function (answers) {
    var answer = answers.function;
    console.log(answer);
    switch (answer) {
      case "Create song":
        createSong();
        break;
      case "Read all songs":
        readSongs();
        break;
      case "Update genres":
        updateSong();
        break;
      case "Delete songs by artist":
        deleteSong();
        break;
    }
  });
}


