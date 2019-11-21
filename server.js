const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require('./passport');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const events = require("./models/events.js");
const userRoute = require("./routes/users.js");
const eventRoute = require("./routes/events.js");

//testing with heroku

//mongoose.connect("mongodb://localhost/volunteer", { useNewUrlParser: true });

var MONGODB_URI = process.env.MONGODB_URI ||  "mongodb://localhost/volunteer";

mongoose.connect(MONGODB_URI);

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
// app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

const databaseUrl = "volunteer";
const collections = ["users", "events"];
// const db = mongojs(databaseUrl, collections);
// // list all collections here or diff for each table?
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });

var dataEvents = {};

// events.create(dataEvents)
//   .then(function(dbEvents) {
//     // If saved successfully, print the new Example document to the console
//     console.log(dbEvents);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

function populateDB() {
  dataEvents = {
    title: "test",
    description: "x",
    organization: "x",
    experience: "x",
    zipcode: 60611,
    numberofspots: 10,
    link: "x",
    image: "x",
    posteddate: new Date(),
    eventdate: new Date(),
    eventtime: "3:30pm"
  };

  for (let i = 0; i < 6; i++) {
    const copy = { ...dataEvents };
    copy.title = copy.title + i;
    copy.description = copy.description + i;
    copy.organization = copy.organization + i;
    copy.experience = copy.experience + i;
    copy.zipcode = copy.zipcode + i;
    copy.numberofspots = copy.numberofspots + i;
    copy.link = copy.link + i;
    copy.image = copy.image + i;
    copy.posteddate = copy.posteddate + i;
    copy.eventdate = copy.eventdate + i;
    copy.eventtime = copy.eventtime + i;

    events
      .create(copy)
      .then(function(dbEvents) {
        console.log("testing", dbEvents);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  }
}
// populateDB();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

if (process.env.NODE_ENV === 'production' || true) {
  app.use(express.static("client/build"));
}

app.use("/api", apiRoutes);

app.use('/user', userRoute);

app.use(eventRoute);

app.get("/api/events", function(req, res) {
  events.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json({ test: "testing" });
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
