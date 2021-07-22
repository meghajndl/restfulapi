const express = require("express"); // For making an api
const InitiateMongoServer = require("./db");// imports the db.js file so that the function could be run to initiate mongo server

InitiateMongoServer();//trigger the function in db.js that initiates mongo server

const app = express(); //creates a new express application for you

// This app starts a server and listens on PORT either the one in the .env file or 4000 for connections
const PORT = process.env.PORT || 4000;

//method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json()); //method inbuilt in express to recognize the incoming Request Object as a JSON Object

// respond with "API Still Working Fine (-_-)!" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send({ message:"API Still Working Fine (-_-)!" });
});

// get a response, with real-time logs on the page, and any changes you make will be reflected in real time. 
app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});