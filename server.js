const express = require("express");
const path = require("path");
const mongojs = require("mongojs");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

const dbConnection = require('./models')
const events = require("./models/events.js");
// const users = require('./models/users.js')
const userRoute = require('./routes/users.js')
//const populate = require('./routes/populate.js')
//set up for users as well? require?



// testing
//mongoose.connect("mongodb://localhost/volunteer", { useNewUrlParser: true });

var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://heroku_pncrmznv:lf7o7n7qfbqssgsoi7te6h38po@ds061199.mlab.com:61199/heroku_pncrmznv";
  // process.env.MONGODB_URI || "mongodb://localhost/volunteer";
 
mongoose.connect(MONGODB_URI);


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

app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

var dataEvents = {
  title: "test",
  description: "x",
  organization: "x",
  experience: "x",
  zipcode: 60611,
  numberofspots: 10,
  link: "x",
  image: "x",
  posteddate: Date,
  eventdate: Date,
  // eventtime: "3:30pm"
};

const databaseUrl = "volunteer";
const collections = ["users", "events"];
const db = mongojs(databaseUrl, collections);
// list all collections here or diff for each table?

db.on("error", function(error) {
  console.log("Database Error:", error);
});

events.create(dataEvents)
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

// Use apiRoutes // from recipes, need?
app.use("/api", apiRoutes);

//app.use('/user', user)
app.use('./models/user', userRoute)

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
