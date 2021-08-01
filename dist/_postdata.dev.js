"use strict";

var express = require('express');

var app = express();
var port = 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var _data = require('./db/db.json');

app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});