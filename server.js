const express = require("express");
const path = require("path");
// const mongojs = require("mongojs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// const dbConnection = require('./models')
const events = require("./models/event.js");

//const populate = require('./routes/populate.js')


//mongoose.connect("mongodb://localhost/volunteer", { useNewUrlParser: true });

var MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb://heroku_pncrmznv:lf7o7n7qfbqssgsoi7te6h38po@ds061199.mlab.com:61199/heroku_pncrmznv";
// process.env.MONGODB_URI || "mongodb://localhost/volunteer";

mongoose.connect(MONGODB_URI);

app.use(morgan("dev"));
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser())
app.use(fileUpload())

// app.use(
// 	session({
// 		secret: 'special-harkening', //pick a random string to make the hash that is generated secure
// 		store: new MongoStore({ mongooseConnection: dbConnection }),
// 		resave: false, //required
// 		saveUninitialized: false //required
// 	})
// )

app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser

// const databaseUrl = "volunteer";
// const collections = ["users", "events"];
// const db = mongojs(databaseUrl, collections);
// list all collections here or diff for each table?
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });


// events.create(dataEvents)
//   .then(function(dbEvents) {
//     // If saved successfully, print the new Example document to the console
//     console.log(dbEvents);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

function populateDB() {
  var dataEvents = {
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
        // If saved successfully, print the new Example document to the console
        console.log("testing", dbEvents);
      })
      .catch(function(err) {
        console.log(err.message);
      });
  }
}
populateDB();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.post('/upload', function (req, res, next)   {
  let uploadFile = req.files.file
  const fileName = req.files.file.name
  console.log("file loading..",`${__dirname}/client/public/files/${fileName}`)

  uploadFile.mv(
    `${__dirname}/client/public/files/${fileName}`,
    function (err) {
      if (err) {
        return res.status(500).send(err)
      }

      res.json({
        file: `${req.files.file.name}`,
      })
    },
  )
})

// const users = require('./models/users.js')
const userRoute = require("./routes/users.js");
const eventRoute = require("./routes/events.js");

// Use apiRoutes // from recipes, need?
app.use("/api", apiRoutes);

//app.use('/user', user)
app.use("./models/user", userRoute);

app.use(eventRoute);

app.get("/api/events", function(req, res) {
  db.events.find({}, function(err, found) {
    if (err) {
      console.log(err);
    } else {
      res.json({ test: "testing" });
    }
  });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
