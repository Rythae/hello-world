var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World CI/CD with jenkins!");
});

app.listen(process.env.PORT || 4000);

module.exports = app;
