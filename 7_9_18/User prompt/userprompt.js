// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer

.prompt([
    {
        type: "input",
        message:  "Who do you work for?",
        name: "boss"
    },
    {
        type: "password",
        message: "Set your password",
        name: "password"
      },
      {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
      },
      {
        type: "list",
        message: "Which project are you working on?",
        choices: ["Cobra", "Sakura", "Smash"],
        name: "project"
      },
      {
        type: "checkbox",
        message: "What's your employee status?",
        choices: ["Exempt", "Non-exempt", "New Hire"],
        name: "employeetype",
      },
])
.then(function(inquirerResponse) {
    if (inquirerResponse.password == "password") {
        console.log ("Really dude? " + inquirerResponse.password + " is your password?");
    } else {
        console.log("You're all set!  Welcome to " + inquirerResponse.boss + "!  Now get to work, maggot!");
    }
});