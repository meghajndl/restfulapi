var express = require('express'),//Node’s require function to use the express module
// create express app
  app = express(),
  //environment variable PORT to tell your web server what port to listen on, whatever is in the environment variable PORT, or 3000 if there's nothing there
  port = process.env.PORT || 3000,
  //include mongoose in our project to interact with MongoDB instance
  mongoose = require('mongoose'),
  //create a model of how our collection should look like
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a simple route
var routes = require('./api/routes/todoListRoutes');
routes(app);

//get Express.js to send 404 status on missing routes
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

// listen for requests
app.listen(port);

//logging the port
console.log('todo list RESTful API server started on: ' + port);
