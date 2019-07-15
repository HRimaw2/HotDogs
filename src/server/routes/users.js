var express = require('express'),
    router = express.Router(),
    users = require('../models/user');
mongoose = require('mongoose');
var async = require("async");
var app = express();

app.get('/abc', function (req, res) {
  res.send('hello world')
})

// at the end of page
module.exports = router;
