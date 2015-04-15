var express = require("express");

var app = express();

app.set("view engine", "jade");

app.use(express.static(__dirname + "/client"));

app.use(function(req, res, next){
  req.foo = Math.random().toString();
  next();
});

app.get("/", function(req, res, next){
  res.render("index");
});

app.get("/people", function(req, res, next){
  res.render("index");
});

app.get("/things", function(req, res, next){
  res.render("index");
});

app.listen(process.env.PORT);