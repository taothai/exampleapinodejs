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

app.get('/', function (req, res) {
  res.json(_data);
}); //getdata

app.get('/get/:id', function _callee(req, res) {
  var id, _sentdb;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = req.params.id;
          console.log(id);
          _sentdb = _data.filter(function (db) {
            return db.userId === parseInt(id);
          });
          res.json(_sentdb);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); //postdata

app.post('/postdata', function (req, res) {
  var db = req.body;

  _data.push(db);

  res.sendStatus(200);
}); // put data

app.put('/putdata', function (req, res) {
  var db = req.body;
  var id = req.body.userId; //search data for index

  var items = _data.filter(function (db) {
    return db.userId === parseInt(id);
  }); //search indexss


  var _index = _data.indexOf(items[0]);

  console.log(_index); //Save edit

  Object.assign(_data[_index], db);
  res.sendStatus(200);
}); // delete data

app["delete"]('/deletedata', function (req, res) {
  // var db = req.body
  var id = req.body.userId; //search data for index

  var items = _data.filter(function (db) {
    return db.userId === parseInt(id);
  }); //search indexss


  var _index = _data.indexOf(items[0]);

  console.log(_index); //Save edit

  _data.splice(_index, 1);

  res.sendStatus(200);
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});