var express = require("express");
var router = require("./router");
var app = express();

app.use(require('./router'));
var port = 1212;
var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("**********", host);
    console.log("*/////////////", port);
  
  });