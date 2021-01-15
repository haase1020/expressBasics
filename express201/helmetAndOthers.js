const express = require("express");
const app = express();

// const helmet = require("helmet");
// app.use(helmet());

app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.json(["test", 1, 2, 3, 4]);
});

app.listen(3000);

console.log("listing on helmetAndOthers.js");
