const { response } = require("express");
const express = require("express");
const app = express();

/// Express is two things:
// 1. router
// 2. middleware that comprises a framework

// req ---MIDDLEWARE---> res
//express function is any fn that access to req, req, and next objects

//1. request comes in
//**Middleware */
//2. we need to validate the user, sometimes
//3. we need to store some things in the DB
//4. if there is data from the user we need to parse it and store it
/**End Middleware */
//5. res

function validateUser(req, res, next) {
  //get info out of the req object
  //do some stuff with the DB
  res.locals.validated = true;
  console.log("validated ran!");
  next();
}

//this will run validateUser on ALL path, all methods!!
app.use(validateUser);
//this will run validateUser on /admin, all methods!!
app.use("/admin", validateUser);
//this will run validateUser on /, only on get methods
app.get("/", validateUser); //this is the same as app.use!!

//app.use is just the easier example of app.get

//this was the first example
app.get("/", (req, res, next) => {
  res.send("<h1>Hi there from Express 201!</h1>");
  console.log(res.locals.validated);
});

app.get("/admin", (req, res, next) => {
  res.send("<h1>Hi there from Admin Page!</h1>");
  console.log(res.locals.validated);
});

app.listen(3000);

console.log("welcome to appUse.js");
