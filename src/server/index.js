const express = require('express');
const os = require('os');

var router = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const app = express();

var port = process.env.PORT || 4000;

// Connect to a MongoDB
mongoose.connect("mongodb+srv://admin:admin@cluster0-75gqk.mongodb.net/test?retryWrites=true&w=majority",  { useNewUrlParser: true })
.then(() => console.log("Connection Successful"))
.catch(err => console.log(err));

// Allow CORS so that backend and frontend could be put on different servers
var allowCrossDomain = function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
};
app.use(allowCrossDomain);

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Use routes as a module (see index.js)
require('./routes')(app, router);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);
