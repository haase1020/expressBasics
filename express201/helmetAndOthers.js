const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send("test");
});

app.listen(3000);

console.log("listing on helmetAndOthers.js");
