var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http =  require('http');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-origin','http://localhost:8080');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Methods','GET,POST');
    next();
});
app.use("/data",require('./routes/data'));
http.createServer(app).listen(1234)
module.exports = app;