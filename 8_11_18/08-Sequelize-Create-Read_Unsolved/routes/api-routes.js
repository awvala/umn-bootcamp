// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
//var ToDo = require("../models/todo.js");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    db.Todo.findAll({}).then(function (results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function (req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

    // DELETE route for deleting todos. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/todos/:id", function (req, res) {
      db.Todo.destroy({
        where: {
          id: req.params.id
        }
      })
    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/todos", function (req, res) {
      db.Todo.update({
        where: {
          id: req.body.id
        }
      })
    });
  };
