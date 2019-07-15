var express = require('express'),
    users = require('../models/user');
mongoose = require('mongoose');
var async = require("async");
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

// at the end of page
// module.exports = router;
