// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    db.Todo.findAll({}).then(function (results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function (req, res) {
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    })
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function (req, res) {
    //console.log(req.body);
    db.Todo.update(
      {id: req.body.id,
      text: req.body.text,
      complete: req.body.complete,
      updatedAt: req.body.updatedAt
    }, {
      where: {
        id: req.body.id
      }
    });
    });
};
