var express = require("express");
var router = require("./router");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(require('./router'));
var port = 1212;
var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("**********", host);
    console.log("*/////////////", port);
  
  });