var express = require('express');
var mongoose = require('mongoose');
var user = require('./api/models/user');
var bodyParser = require('body-parser');

var server = express();
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UserDB');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

var routes = require('./api/routes/userRoutes');
routes(server);

server.listen(port);

console.log('User API started on: ' + port);