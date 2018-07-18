var express = require("express");
var apiRouter = require("./api");
var secondApiRouter = require("./secondApi");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");

app.use(express.json());
app.use(cors());
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*+json' }));
//app.use(require('./api'));
app.use(morgan('dev'));
/*
app.use((req,res,next) => {
  res.status(200).json({
    message:"it works"
  });
});
*/
app.use('/api',apiRouter);
app.use('/secondApi',secondApiRouter);
var port = 1212;
var server = app.listen(port, function () {

    var host = server.address().address
    var port = server.address().port
    console.log("**********", host);
    console.log("*/////////////", port);
  
  });

  module.exports =app;