Notes 13.2
---
Express is an Unopinionated (lot of configuration options) web framework 
Assist as middleware to handle routes

Today's Request Methods:
Get: Server will provide information
Post: Server is expecting information

Routing, Parsing, Listening, Sending, Receiving

###  New Packages 

body-parser
https://www.npmjs.com/package/body-parser

node path
https://nodejs.org/api/path.html


###  Instructions
---
# Students Do: Add Route to server1.js (0:07)

server1.js (08-StarWars-1)

Instructions:

Work with those around you to confirm your server1.js file working. This means figuring out: what dependencies to install, how to run the file, and how to view the resulting website in your browser. This step requires you to make ZERO changes to the code file. At this point, you are just getting the file you are given to run.

Then, once you've gotten the original code to display in the browser, create a new Obi Wan Kenobi  route to display Kenobi's information. (Note: Might want to create route without spaces) Use the comments and the previous code in the file as a guide.

Help those around you when done.
---

# Partners Do: Dissect req.params (0:05)

server2.js (09-StarWars-2)

Instructions:

Examine the code sent to you. Once again, run the server2.js file and view the page in the browser. Troubleshoot any issues that arise. Again NO CODE CHANGES required.

Then once you have a working server instance, begin to examine the file. Try to explain to yourself and those around you what the significance of /:character and req.params.character is.

Create a test case to check your hypothesis. 
--- 
 
Students Do: Postman Exercise (0:10)

server5.js (12-StarWars-5)

Instructions:

Use Postman to send a POST request to the server you've been provided. Confirm that your character has been added to the database correctly.
 
--- 
 
Students Do: Dissect .get view.html (0:07)

server6.js (13-StarWars-6)

Instructions:

Look at the file sent to you then explain to the person next to you what the res.sendFile line does. Then try creating a new HTML file and routing to that one instead.

--- 

21.	Students Do: Dissect .post (add.html)	(0:07)
Slack out a zipped copy of 14-FinalStarWarsApp. Then task students with the following:

Instructions:

Spend a few moments looking over the code sent to you. First, get the server running, then begin to dissect the JavaScript code found at the bottom of add.html.

Explain to one another what the code does, what its for, and why its relevant to the application so far. Be sure to explain to one another what the $.post code is doing.
 
 ---

Students Do: Deploy to Heroku (0:30)

Create/login to  Heroku accounts . 

File:

01-Activities/14-FinalStarWarsApp (solution, zipped)

03-Supplemental/HerokuGuide (slacked out or link to class repo posted)
Instructions:

Push the finished Star Wars app to heroku following the steps from the guide.

BONUS: Begin making the below additional page for your Star Wars app. Push those changes up as you build the new feature. Specifically, this will require:

Create a new page on your Star Wars website that displays a table of ALL characters in the database. This will involve at minimum:
Creating a route in the server.js file for displaying data
Creating a route in the server.js file for sending users a new HTML file
Creating an HTML file that grabs data from the server.
Be sure to walk around and help students as they hit snags or have problems pushing to heroku, consulting the troubleshooting tips below as needed.

## Use heroku
$ git init
$ heroku git:remote -a starwarscoolness


## Re-Group (0:05)

# What is a web server?
# What is the difference between a request and a response.
# What are some examples of web servers we use every day?
# What are the different types of request methods, and how are they used?


