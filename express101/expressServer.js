//nodeJS is the language
//Express is node, a node module
///http is a native module for node
const path = require("path");
// const http = require('http');

//express is a 3rd part
//nodemon expressServer.js to start nodemon

const express = require("express");
const { reset } = require("nodemon");
// // an "app" is the express function (createApplication inside the Express module)
// // invoked and is an Express application
const app = express();

app.use(express.static("public"));
// //all is a method, and it takes 2 args:
// // 1. route
// //2. callback to run if the route is requested
app.all("/", (req, res) => {
  // Express handles the basic headers (status code, mime-type)
  //read in Node.html
  res.sendFile(path.join(__dirname + "/node.html"));
  //   res.send(`<h1>This is the home page</h1>`);
  //express handles the end
});

//express runs from top down
app.all("*", (req, res) => {
  res.send("<h1>Sorry, this page does not exist</h1>");
});

app.listen(3000);
console.log("hello from expressServer.js");
