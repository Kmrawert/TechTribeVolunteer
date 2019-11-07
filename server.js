const express = require("express");
const path = require("path");
const mongojs = require("mongojs");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

const dbConnection = require('./models')
const events = require("./models/events.js");
const user = require('./routes/users.js')
//set up for users as well? require?

mongoose.connect("mongodb://localhost/volunteer", { useNewUrlParser: true });

app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

app.use(
	session({
		secret: 'special-harkening', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// data into the array?
var data = {
  array: ["item1", "item2", "item3"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 42
};
// 

const databaseUrl = "volunteer";
const collections = ["users"];
const db = mongojs(databaseUrl, collections);
// list all collections here or diff for each table?

db.on("error", function(error) {
  console.log("Database Error:", error);
});

events.create(data)
  .then(function(dbEvents) {
    // If saved successfully, print the new Example document to the console
    console.log(dbEvents);
  })
  .catch(function(err) {
    console.log(err.message);
  });

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Use apiRoutes
app.use("/api", apiRoutes);

app.use('/user', user)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


app.get("/events", function(req, res) {
  db.events.find({}, function(err, found) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(found);
    }
  });
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
