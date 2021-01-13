const express = require("express");
const app = express();

// app object has a few methods:
// HTTP verbs! REST verbs!
// CRUD app correspondence
// 1. get - default for all browsers is GET (READ)
// 2. post (CREATE)
// 3. delete (DELETE)
// 4.put (UPDATE)
//all - I will accept any method (this is an Express method)

//take 2 args:
// 1. path
// 2. cab to run if an HTTP request that matches THIS verb

// app.all("/", (req, res) => {
//   res.send(`<h1>welcome to this app! </h1>`);
// });

app.get("/", (req, res) => {
  console.log(req);
  res.send(`<h1>It's working! GET this! </h1>`);
});

app.post("/", (req, res) => {});

app.delete("/", (req, res) => {});

app.put("/", (req, res) => {});

app.listen(3000);

console.log("I am listening");
