Notes 13.1
---
Students Do: Two Servers App (0:20)

## Instructions
# Using the previous example as a guide, create an app that has two web servers.
# One that listens on port 7000 and one that listens on port 7500.
# The one listening on port 7000 will always tell the user something good about themselves.
# The one listening on 7500 will always tell the user something bad about themselves.

## Bonus
Commit this code - setup a new folder in your repo
Look for other ways to expand what your server can do. As possibilities:

# Generate the good/bad phrase randomly from a list of predefined phrases
# Use the twitter package inside the response to also return a random tweet

curl -i -H "Accept: application/json" -X GET -d "firstName=james" http://localhost:8080

---

Students Do: Serve-Favorites (0:30)


## Instructions

Create a website with four routes:
(i.e. localhost:8080/food, localhost:8080/movies, etc.). 
# Home
# Favorite Food
# Favorite Movies
# Favorite CSS Frameworks
# Each route should be triggered by a different URL.
# Each route should display an HTML page listing your favorite three things of each.
# Be sure to use fs to serve your HTML files.

---

# Request Methods

https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them

Curl (revised to work with requestMethodserver_chris.js)

curl -i -H "Accept: application/json" -X GET -d "{\"productName\":\"Table\"}" http://localhost:8080
curl -i -H "Accept: application/json" -X POST -d "{\"productName\":\"Table\"}" http://localhost:8080
curl -i -H "Accept: application/json" -X PUT -d "{\"productName\":\"Table\"}" http://localhost:8080
curl -i -H "Accept: application/json" -X DELETE -d "{\"productName\":\"Table\"}" http://localhost:8080

Postman (use requestMethodserver_chris.js)

https://www.getpostman.com/apps
https://www.getpostman.com/docs/v6/postman/sending_api_requests/request

---

## Re-Group (0:05)

# What is a web server?
# What is the difference between a request and a response.
# What are some examples of web servers we use every day?
# What are the different types of request methods, and how are they used?

# Look up Express.js and skim through the documentation. We will be learning much more about Express.js next class!
